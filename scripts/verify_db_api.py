"""Real HTTP → Next.js rewrite → Flask → PostgreSQL integration checks.

Creates an isolated temporary operator and notes; preserves existing data.
"""
import argparse
import http.cookiejar
import json
from pathlib import Path
import subprocess
import sys
import urllib.error
import urllib.request
import uuid

ROOT = Path(__file__).resolve().parents[1]
BACKEND = ROOT/'mini-watch/monitor/backend'
sys.path.insert(0, str(BACKEND))
from db import connect_db
from werkzeug.security import generate_password_hash


def rows():
    with connect_db() as conn:
        return conn.execute('SELECT * FROM notes ORDER BY id').fetchall()


def write_json(path, value):
    Path(path).write_text(json.dumps(value,ensure_ascii=False,indent=2,default=str),encoding='utf-8')


def new_operator():
    token = uuid.uuid4().hex
    username, password = 'next_qa_'+token, uuid.uuid4().hex
    with connect_db() as conn:
        user = conn.execute('INSERT INTO users (username,display_name,password_hash) VALUES (%s,%s,%s) RETURNING id',
                            (username,'Next.js 검증 운영자',generate_password_hash(password))).fetchone()
    return {'username':username,'password':password,'user_id':user['id'],'token':token,'note_ids':[]}


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--url',default='http://127.0.0.1:5300')
    parser.add_argument('--output',default=str(ROOT/'docs/api-integration-validation.json'))
    parser.add_argument('--prepare-ui')
    parser.add_argument('--cleanup-ui')
    args=parser.parse_args()
    if args.prepare_ui:
        account=new_operator()
        account['baseline']=rows()
        write_json(args.prepare_ui,account)
        print('Created disposable UI operator; credentials saved only to private local evidence file.')
        return
    if args.cleanup_ui:
        account=json.loads(Path(args.cleanup_ui).read_text(encoding='utf-8'))
        with connect_db() as conn:
            for note_id in account['note_ids']:
                conn.execute('DELETE FROM notes WHERE id=%s',(note_id,))
            conn.execute('DELETE FROM users WHERE id=%s AND username=%s',(account['user_id'],account['username']))
        actual=json.loads(json.dumps(rows(),default=str))
        assert actual == account['baseline'], 'Existing notes changed during UI checks'
        account['cleaned_up']=True
        account['password']='removed after test'
        write_json(args.cleanup_ui,account)
        print('PASS: disposable operator/notes cleaned up; all original DB rows unchanged.')
        return

    original=rows()
    account=new_operator()
    checks=[]
    ids=[]
    opener=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
    csrf=''
    def send(method,path,body=None,expected=200,with_csrf=True):
        nonlocal csrf
        headers={}
        if body is not None: headers['Content-Type']='application/json'
        if method!='GET' and with_csrf: headers['X-CSRF-Token']=csrf
        request=urllib.request.Request(args.url+'/api'+path,data=json.dumps(body).encode() if body is not None else None,headers=headers,method=method)
        try:
            response=opener.open(request,timeout=10)
        except urllib.error.HTTPError as error:
            response=error
        data=json.loads(response.read())
        assert response.code==expected,(method,path,response.code,data)
        if 'csrf_token' in data: csrf=data['csrf_token']
        return data
    def record(name): checks.append({'name':name,'result':'PASS'}); print('PASS:',name,flush=True)
    try:
        send('GET','/notes',expected=401)
        send('GET','/auth/me')
        send('POST','/auth/login',{'username':account['username'],'password':account['password']},expected=403,with_csrf=False)
        send('POST','/auth/login',{'username':' ','password':' '},expected=400)
        send('POST','/auth/login',{'username':account['username'],'password':'wrong'},expected=401)
        send('POST','/auth/login',{'username':account['username'],'password':account['password']})
        record('Next.js proxy login: cookie/CSRF, unauthenticated401, missing CSRF403, blank400, wrong401, login200')
        before_ids=[n['id'] for n in send('GET','/notes')['notes']]
        send('POST','/notes',{'title':' ','body':' '},expected=400)
        assert [n['id'] for n in send('GET','/notes')['notes']]==before_ids
        record('Blank create400, existing notes preserved')
        note=send('POST','/notes',{'title':'Next API '+account['token'],'body':'first body','status':'pending'},expected=201)['note']
        ids.append(note['id']); url='/notes/'+str(note['id'])
        assert send('GET',url)['note']==note
        assert note['id'] in [n['id'] for n in send('GET','/notes')['notes']]
        record('Create201 and real PostgreSQL list/detail GET')
        send('PUT',url,{'title':note['title'],'body':'  '},expected=400)
        assert send('GET',url)['note']==note
        record('Blank update400 preserves body/status/updated_at')
        updated=send('PUT',url,{'title':note['title']+' updated','body':'updated body','status':'completed'})['note']
        assert updated['id']==note['id'] and updated['body']=='updated body'
        assert send('GET',url)['note']==updated
        code="import json,sys;from db import connect_db;\nwith connect_db() as c:r=c.execute('SELECT id,title,body,status FROM notes WHERE id=%s',(int(sys.argv[1]),)).fetchone()\nprint(json.dumps(r))"
        persisted=json.loads(subprocess.check_output([sys.executable,'-c',code,str(note['id'])],cwd=BACKEND))
        assert persisted['body']=='updated body' and persisted['status']=='completed'
        record('PUT200, same ID, new-process PostgreSQL read preserves edited values')
        send('DELETE',url)
        send('GET',url,expected=404)
        send('PUT',url,{'title':'missing','body':'missing'},expected=404)
        send('DELETE',url,expected=404)
        assert note['id'] not in [n['id'] for n in send('GET','/notes')['notes']]
        record('DELETE200, deleted ID absent on re-query, missing GET/PUT/DELETE404')
        send('POST','/auth/logout')
        send('GET','/notes',expected=401)
        record('Logout and protected API401')
    finally:
        with connect_db() as conn:
            for note_id in ids: conn.execute('DELETE FROM notes WHERE id=%s',(note_id,))
            conn.execute('DELETE FROM users WHERE id=%s AND username=%s',(account['user_id'],account['username']))
        assert rows()==original,'Original DB rows changed'
    record('Only disposable data cleaned up; all existing DB rows preserved')
    write_json(args.output,{'result':'PASS','url':args.url,'flow':'Next.js → Flask → PostgreSQL','checks':checks})


if __name__=='__main__': main()
