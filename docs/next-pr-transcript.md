# Next.js 실제 변경 PR 작업 출력
2026-10-08 Asia/Seoul
최신 main 2ad5352에서 codex/next-api-notes 생성 후 구현/검증했습니다.

### next-practice

```text
> git branch --show-current
codex/next-api-notes

exit=0
```

### next-practice

```text
> git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'ASSIGNMENT.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'GIT_WORK.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app/globals.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app/layout.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/checklist-review.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'next.config.mjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.env.example', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app/api-notes/page.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/advanced-regression-validation.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/advanced-start-output.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'docs/api-ui-validation.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/.env.example', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/app.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/auth_helpers.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/db.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/repositories/events.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/repositories/notes.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/repositories/users.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/requirements.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/routes/auth.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/routes/events.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/routes/notes.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/rules.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/setup_db.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/sql/create_database.sql', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/sql/dashboard.sql', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/sql/http_events.sql', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/backend/try_event.py', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/next-frontend/README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/next-frontend/api/notes.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'mini-watch/monitor/next-frontend/components/ApiNotes.js', LF will be replaced by CRLF the next time Git touches it

exit=0
```

### next-practice

```text
> git diff --cached --name-only
.env.example
.gitignore
ASSIGNMENT.md
GIT_WORK.md
README.md
app/api-notes/page.js
app/globals.css
app/layout.js
docs/advanced-build-output.txt
docs/advanced-lint-output.txt
docs/advanced-regression-validation.json
docs/advanced-start-output.txt
docs/api-integration-validation.json
docs/api-notes-production.jpg
docs/api-ui-validation.json
docs/checklist-review.md
docs/conflict-transcript.md
mini-watch/monitor/backend/.env.example
mini-watch/monitor/backend/app.py
mini-watch/monitor/backend/auth_helpers.py
mini-watch/monitor/backend/db.py
mini-watch/monitor/backend/repositories/__init__.py
mini-watch/monitor/backend/repositories/events.py
mini-watch/monitor/backend/repositories/notes.py
mini-watch/monitor/backend/repositories/users.py
mini-watch/monitor/backend/requirements.txt
mini-watch/monitor/backend/routes/__init__.py
mini-watch/monitor/backend/routes/auth.py
mini-watch/monitor/backend/routes/events.py
mini-watch/monitor/backend/routes/notes.py
mini-watch/monitor/backend/rules.py
mini-watch/monitor/backend/setup_db.py
mini-watch/monitor/backend/sql/create_database.sql
mini-watch/monitor/backend/sql/dashboard.sql
mini-watch/monitor/backend/sql/http_events.sql
mini-watch/monitor/backend/try_event.py
mini-watch/monitor/next-frontend/README.md
mini-watch/monitor/next-frontend/api/notes.js
mini-watch/monitor/next-frontend/components/ApiNotes.js
next.config.mjs
scripts/verify_db_api.py

exit=0
```

### next-practice

```text
> git diff --cached --check
docs/advanced-build-output.txt:16: trailing whitespace.
+  Generating static pages using 7 workers (1/6) 
docs/advanced-build-output.txt:17: trailing whitespace.
+  Generating static pages using 7 workers (2/6) 
docs/advanced-build-output.txt:18: trailing whitespace.
+  Generating static pages using 7 workers (4/6) 
docs/advanced-build-output.txt:30: new blank line at EOF.
docs/advanced-lint-output.txt:4: new blank line at EOF.
docs/conflict-transcript.md:57: trailing whitespace.
+remote: 
docs/conflict-transcript.md:58: trailing whitespace.
+remote: Create a pull request for 'codex/title-minsu' on GitHub by visiting:        
docs/conflict-transcript.md:59: trailing whitespace.
+remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/codex/title-minsu        
docs/conflict-transcript.md:60: trailing whitespace.
+remote: 
docs/conflict-transcript.md:129: trailing whitespace.
+remote: 
docs/conflict-transcript.md:130: trailing whitespace.
+remote: Create a pull request for 'codex/title-jiyun' on GitHub by visiting:        
docs/conflict-transcript.md:131: trailing whitespace.
+remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/codex/title-jiyun        
docs/conflict-transcript.md:132: trailing whitespace.
+remote: 
docs/conflict-transcript.md:159: trailing whitespace.
+ 
docs/conflict-transcript.md:176: trailing whitespace.
+ 
docs/conflict-transcript.md:236: trailing whitespace.
+  
docs/conflict-transcript.md:261: trailing whitespace.
+ 
docs/conflict-transcript.md:306: trailing whitespace.
+ 

exit=2
```

### next-practice

```text
> git branch --show-current
codex/next-api-notes

exit=0
```

### next-practice

```text
> git add .

exit=0
```

### next-practice

```text
> git diff --cached --name-only
.env.example
.gitignore
ASSIGNMENT.md
GIT_WORK.md
README.md
app/api-notes/page.js
app/globals.css
app/layout.js
docs/advanced-build-output.txt
docs/advanced-lint-output.txt
docs/advanced-regression-validation.json
docs/advanced-start-output.txt
docs/api-integration-validation.json
docs/api-notes-production.jpg
docs/api-ui-validation.json
docs/checklist-review.md
docs/conflict-transcript.md
mini-watch/monitor/backend/.env.example
mini-watch/monitor/backend/app.py
mini-watch/monitor/backend/auth_helpers.py
mini-watch/monitor/backend/db.py
mini-watch/monitor/backend/repositories/__init__.py
mini-watch/monitor/backend/repositories/events.py
mini-watch/monitor/backend/repositories/notes.py
mini-watch/monitor/backend/repositories/users.py
mini-watch/monitor/backend/requirements.txt
mini-watch/monitor/backend/routes/__init__.py
mini-watch/monitor/backend/routes/auth.py
mini-watch/monitor/backend/routes/events.py
mini-watch/monitor/backend/routes/notes.py
mini-watch/monitor/backend/rules.py
mini-watch/monitor/backend/setup_db.py
mini-watch/monitor/backend/sql/create_database.sql
mini-watch/monitor/backend/sql/dashboard.sql
mini-watch/monitor/backend/sql/http_events.sql
mini-watch/monitor/backend/try_event.py
mini-watch/monitor/next-frontend/README.md
mini-watch/monitor/next-frontend/api/notes.js
mini-watch/monitor/next-frontend/components/ApiNotes.js
next.config.mjs
scripts/verify_db_api.py

exit=0
```

### next-practice

```text
> git diff --cached --check -- . :(exclude)docs/**

exit=0
```

### next-practice

```text
> git diff --cached --stat
 .env.example                                       |   2 +
 .gitignore                                         |   8 +-
 ASSIGNMENT.md                                      |   9 +-
 GIT_WORK.md                                        |  26 +-
 README.md                                          |  87 +++-
 app/api-notes/page.js                              |  16 +
 app/globals.css                                    |  18 +
 app/layout.js                                      |   2 +-
 docs/advanced-build-output.txt                     |  30 ++
 docs/advanced-lint-output.txt                      |   4 +
 docs/advanced-regression-validation.json           |   9 +
 docs/advanced-start-output.txt                     |   5 +
 docs/api-integration-validation.json               |  39 ++
 docs/api-notes-production.jpg                      | Bin 0 -> 68865 bytes
 docs/api-ui-validation.json                        |  97 +++++
 docs/checklist-review.md                           |   9 +-
 docs/conflict-transcript.md                        | 470 +++++++++++++++++++++
 mini-watch/monitor/backend/.env.example            |   7 +
 mini-watch/monitor/backend/app.py                  |  44 ++
 mini-watch/monitor/backend/auth_helpers.py         |  45 ++
 mini-watch/monitor/backend/db.py                   |  20 +
 .../monitor/backend/repositories/__init__.py       |   0
 mini-watch/monitor/backend/repositories/events.py  |  23 +
 mini-watch/monitor/backend/repositories/notes.py   |  43 ++
 mini-watch/monitor/backend/repositories/users.py   |  14 +
 mini-watch/monitor/backend/requirements.txt        |   3 +
 mini-watch/monitor/backend/routes/__init__.py      |   0
 mini-watch/monitor/backend/routes/auth.py          |  50 +++
 mini-watch/monitor/backend/routes/events.py        |  26 ++
 mini-watch/monitor/backend/routes/notes.py         |  53 +++
 mini-watch/monitor/backend/rules.py                |  35 ++
 mini-watch/monitor/backend/setup_db.py             |  41 ++
 mini-watch/monitor/backend/sql/create_database.sql |   1 +
 mini-watch/monitor/backend/sql/dashboard.sql       |  30 ++
 mini-watch/monitor/backend/sql/http_events.sql     |   8 +
 mini-watch/monitor/backend/try_event.py            |  13 +
 mini-watch/monitor/next-frontend/README.md         |  13 +
 mini-watch/monitor/next-frontend/api/notes.js      |  42 ++
 .../monitor/next-frontend/components/ApiNotes.js   | 202 +++++++++
 next.config.mjs                                    |   5 +-
 scripts/verify_db_api.py                           | 133 ++++++
 41 files changed, 1672 insertions(+), 10 deletions(-)

exit=0
```

### next-practice

```text
> git commit -m "Connect Next.js notes to existing Flask API and PostgreSQL"
[codex/next-api-notes b002511] Connect Next.js notes to existing Flask API and PostgreSQL
 41 files changed, 1672 insertions(+), 10 deletions(-)
 create mode 100644 .env.example
 create mode 100644 app/api-notes/page.js
 create mode 100644 docs/advanced-build-output.txt
 create mode 100644 docs/advanced-lint-output.txt
 create mode 100644 docs/advanced-regression-validation.json
 create mode 100644 docs/advanced-start-output.txt
 create mode 100644 docs/api-integration-validation.json
 create mode 100644 docs/api-notes-production.jpg
 create mode 100644 docs/api-ui-validation.json
 create mode 100644 docs/conflict-transcript.md
 create mode 100644 mini-watch/monitor/backend/.env.example
 create mode 100644 mini-watch/monitor/backend/app.py
 create mode 100644 mini-watch/monitor/backend/auth_helpers.py
 create mode 100644 mini-watch/monitor/backend/db.py
 create mode 100644 mini-watch/monitor/backend/repositories/__init__.py
 create mode 100644 mini-watch/monitor/backend/repositories/events.py
 create mode 100644 mini-watch/monitor/backend/repositories/notes.py
 create mode 100644 mini-watch/monitor/backend/repositories/users.py
 create mode 100644 mini-watch/monitor/backend/requirements.txt
 create mode 100644 mini-watch/monitor/backend/routes/__init__.py
 create mode 100644 mini-watch/monitor/backend/routes/auth.py
 create mode 100644 mini-watch/monitor/backend/routes/events.py
 create mode 100644 mini-watch/monitor/backend/routes/notes.py
 create mode 100644 mini-watch/monitor/backend/rules.py
 create mode 100644 mini-watch/monitor/backend/setup_db.py
 create mode 100644 mini-watch/monitor/backend/sql/create_database.sql
 create mode 100644 mini-watch/monitor/backend/sql/dashboard.sql
 create mode 100644 mini-watch/monitor/backend/sql/http_events.sql
 create mode 100644 mini-watch/monitor/backend/try_event.py
 create mode 100644 mini-watch/monitor/next-frontend/README.md
 create mode 100644 mini-watch/monitor/next-frontend/api/notes.js
 create mode 100644 mini-watch/monitor/next-frontend/components/ApiNotes.js
 create mode 100644 scripts/verify_db_api.py

exit=0
```

### next-practice

```text
> git push -u origin codex/next-api-notes
branch 'codex/next-api-notes' set up to track 'origin/codex/next-api-notes'.
remote: 
remote: Create a pull request for 'codex/next-api-notes' on GitHub by visiting:        
remote:      https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05/pull/new/codex/next-api-notes        
remote: 
To https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05.git
 * [new branch]      codex/next-api-notes -> codex/next-api-notes

exit=0
```

### next-practice

```text
> gh pr create --repo gkacksdnjs22-stack/codemit-next-practice-day05 --base main --head codex/next-api-notes --title "Connect Next.js DB notes to Flask and PostgreSQL" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-next-pr-body.md
https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05/pull/1

exit=0
```

### next-practice

```text
> gh pr view 1 --repo gkacksdnjs22-stack/codemit-next-practice-day05 --json url,state,baseRefName,headRefName,commits,files
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:46:20Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:46:20Z","messageBody":"","messageHeadline":"Connect Next.js notes to existing Flask API and PostgreSQL","oid":"b0025118787890ca9f2d39e9324486e74fc01dde"}],"files":[{"path":".env.example","additions":2,"deletions":0,"changeType":"ADDED"},{"path":".gitignore","additions":6,"deletions":2,"changeType":"MODIFIED"},{"path":"ASSIGNMENT.md","additions":8,"deletions":1,"changeType":"MODIFIED"},{"path":"GIT_WORK.md","additions":25,"deletions":1,"changeType":"MODIFIED"},{"path":"README.md","additions":84,"deletions":3,"changeType":"MODIFIED"},{"path":"app/api-notes/page.js","additions":16,"deletions":0,"changeType":"ADDED"},{"path":"app/globals.css","additions":18,"deletions":0,"changeType":"MODIFIED"},{"path":"app/layout.js","additions":1,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/advanced-build-output.txt","additions":30,"deletions":0,"changeType":"ADDED"},{"path":"docs/advanced-lint-output.txt","additions":4,"deletions":0,"changeType":"ADDED"},{"path":"docs/advanced-regression-validation.json","additions":9,"deletions":0,"changeType":"ADDED"},{"path":"docs/advanced-start-output.txt","additions":5,"deletions":0,"changeType":"ADDED"},{"path":"docs/api-integration-validation.json","additions":39,"deletions":0,"changeType":"ADDED"},{"path":"docs/api-notes-production.jpg","additions":0,"deletions":0,"changeType":"ADDED"},{"path":"docs/api-ui-validation.json","additions":97,"deletions":0,"changeType":"ADDED"},{"path":"docs/checklist-review.md","additions":8,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/conflict-transcript.md","additions":470,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/.env.example","additions":7,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/app.py","additions":44,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/auth_helpers.py","additions":45,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/db.py","additions":20,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/__init__.py","additions":0,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/events.py","additions":23,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/notes.py","additions":43,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/users.py","additions":14,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/requirements.txt","additions":3,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/__init__.py","additions":0,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/auth.py","additions":50,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/events.py","additions":26,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/notes.py","additions":53,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/rules.py","additions":35,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/setup_db.py","additions":41,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/sql/create_database.sql","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/sql/dashboard.sql","additions":30,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/sql/http_events.sql","additions":8,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/try_event.py","additions":13,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/next-frontend/README.md","additions":13,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/next-frontend/api/notes.js","additions":42,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/next-frontend/components/ApiNotes.js","additions":202,"deletions":0,"changeType":"ADDED"},{"path":"next.config.mjs","additions":4,"deletions":1,"changeType":"MODIFIED"},{"path":"scripts/verify_db_api.py","additions":133,"deletions":0,"changeType":"ADDED"}],"headRefName":"codex/next-api-notes","state":"OPEN","url":"https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05/pull/1"}

exit=0
```

### next-practice

```text
> gh pr diff 1 --repo gkacksdnjs22-stack/codemit-next-practice-day05
diff --git a/.env.example b/.env.example
new file mode 100644
index 0000000..de8b3c3
--- /dev/null
+++ b/.env.example
@@ -0,0 +1,2 @@
+# Next.js 서버의 Flask 프록시 대상. 브라우저에는 노출하지 않습니다.
+FLASK_API_ORIGIN=http://127.0.0.1:5200
diff --git a/.gitignore b/.gitignore
index 5ef6a52..69b7347 100644
--- a/.gitignore
+++ b/.gitignore
@@ -1,7 +1,7 @@
 # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 
 # dependencies
-/node_modules
+node_modules/
 /.pnp
 .pnp.*
 .yarn/*
@@ -14,7 +14,7 @@
 /coverage
 
 # next.js
-/.next/
+.next/
 /out/
 
 # production
@@ -32,6 +32,10 @@ yarn-error.log*
 
 # env files (can opt-in for committing if needed)
 .env*
+!.env.example
+__pycache__/
+*.pyc
+.venv/
 
 # vercel
 .vercel
diff --git a/ASSIGNMENT.md b/ASSIGNMENT.md
index 278574c..eb2f98b 100644
--- a/ASSIGNMENT.md
+++ b/ASSIGNMENT.md
@@ -32,4 +32,11 @@
 기존 React/Flask/PostgreSQL 과제와 별도 프로젝트로 구성한다.
 Git 실습은 한 계정으로 민수/지윤 역할을 나누며, 별도 계정의 Approve는 필요 없다.
 원격 PR 검토와 실제 출력은 GIT_WORK.md와 docs/git-transcript.md에 남긴다.
-선택 과제(충돌 해결/앱 PR/API 연결)는 필수 통과 조건이 아니다.
+선택 과제(충돌 해결/앱 PR/API 연결)도 이번 보완 범위에 포함한다.
+
+## 선택 심화 체크리스트
+
+21. 같은 줄 충돌을 작업 브랜치에서 해결하고 같은 PR에 반영, 병합·양쪽 pull과 선택 이유 기록.
+22. Next.js의 실제 수정 작업을 새 작업 브랜치·PR·변경 검토·병합·pull로 진행.
+23. 기존 Flask·PostgreSQL 메모 API의 목록·상세·등록을 Next.js에 연결하고 새로고침 유지 확인.
+24. 수정·삭제 API 연결, 취소·400/404 오류 안내, 새로고침 후 DB 결과 유지 확인.
diff --git a/GIT_WORK.md b/GIT_WORK.md
index fb22648..52eb59d 100644
--- a/GIT_WORK.md
+++ b/GIT_WORK.md
@@ -61,7 +61,7 @@ CHECKLIST.md 작성·커밋·push·PR #3·diff 검토·merge commit 병합 후 
 `git branch -d feature/jiyun`과 `git branch -d feature/checklist`로 완료한 자기 브랜치를 정리했습니다.
 강제 -D 없이 병합 완료 로컬 브랜치만 삭제했습니다. 원격 브랜치는 PR 증빙용으로 보존했습니다.
 
-최종 두 폴더의 실제 결과:
+필수 실습 단계 종료 시 두 폴더의 실제 결과:
 
 ```text
 > git branch -vv
@@ -87,3 +87,27 @@ status 출력은 비어 있으며 두 작업 폴더가 깨끗합니다.
 **GitHub에서 PR을 병합한 뒤에도 각 폴더에서 pull해야 하는 이유는 무엇인가?**
 PR 병합은 원격 origin/main을 갱신하며 각 로컬 폴더는 자동 갱신되지 않습니다.
 각 폴더에서 pull해야 상대 파일과 병합 커밋을 받아 다음 작업을 최신 main에서 시작할 수 있습니다.
+
+## 심화 1 — 같은 줄 충돌 해결
+
+[실제 명령/충돌 표시/해결 커밋/양쪽 pull 출력](docs/conflict-transcript.md)을 추가했습니다.
+
+- [PR #4](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/4): 민수 폴더의 codex/title-minsu에서 README.md 첫 줄을 `# GitHub Flow 협업 기록`으로 변경. 커밋 6fdca10, 먼저 merge commit으로 병합.
+- [PR #5](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5): 같은 원본 main에서 지윤의 codex/title-jiyun이 같은 줄을 `# GitHub Flow 실습 노트`로 변경. 최초 커밋 b4f7d82.
+- #4 병합 후 **codex/title-jiyun 작업 브랜치에서** git fetch origin과 git merge origin/main을 실행하여 실제 README.md 내용 충돌 및 UU 상태를 확인.
+- 최종 제목은 `# GitHub Flow 협업 실습 기록`. 민수의 협업 목적과 지윤의 실습 기록 목적을 모두 담고 본문은 보존하기 위해 선택.
+- 충돌 표시를 제거하고 해결 커밋 69f8707을 같은 브랜치에 push하여 **기존 PR #5**에 반영. PR 본문에도 이유와 검토 결과를 기록.
+- #5를 merge commit으로 병합하고 두 폴더 main에서 pull. 두 폴더에서 최종 제목을 직접 출력하여 동일함을 확인하고 자기 완료 브랜치를 git branch -d로 정리.
+
+최종 두 clone의 main은 모두 `576b37611f78bff1df13fdba67ee3696a9e04df0`입니다.
+#4 merge commit은 998fb3f5ce80f885af189fb07fbcab9a6868accb,
+#5 merge commit은 576b37611f78bff1df13fdba67ee3696a9e04df0이며 두 PR 모두 Merged입니다.
+
+## 심화 2 — Next.js 실제 변경 브랜치
+
+앱 저장소의 최신 main에서 `codex/next-api-notes`를 만들고 DB 메모 화면과 API 연결을 구현했습니다.
+실제 변경 파일은 app/api-notes/page.js, app/layout.js, app/globals.css, next.config.mjs,
+mini-watch/monitor/next-frontend/components/ApiNotes.js, api/notes.js와 기존 Flask 백엔드 소스입니다.
+프로덕션의 등록·상세·수정·삭제 및 오류/취소/저장 유지 검증은
+docs/api-ui-validation.json과 docs/api-integration-validation.json에 기록했습니다.
+PR 생성·검토·병합·pull의 실제 결과는 이어서 기록합니다.
diff --git a/README.md b/README.md
index a3f2f90..5ab5b20 100644
--- a/README.md
+++ b/README.md
@@ -2,7 +2,8 @@
 
 Codemit 2026-10-08 「Next.js 메모 앱과 Git 브랜치 협업 완성하기」의 필수 결과물입니다.
 홈 숫자 증가·초기화, 메모 등록·수정·삭제, 두 clone의 GitHub Flow 실습을 제공합니다.
-메모는 **React state**에만 저장되며 새로고침하면 초기 메모 2개로 돌아오는 것이 정상입니다.
+`/notes`는 **React state**에만 저장되며 새로고침하면 초기 메모 2개로 돌아오는 것이 정상입니다.
+`/api-notes`는 기존 Flask API와 PostgreSQL을 사용하여 새로고침 후에도 메모를 유지합니다.
 
 - [필수 20개 검토](docs/checklist-review.md)
 - [Git 작업 기록과 원본 PR](GIT_WORK.md)
@@ -22,7 +23,8 @@ npm run dev
 
 http://localhost:3000 과 http://localhost:3000/notes 에 접속합니다.
 ZIP은 압축 해제한 `next-practice` 폴더에서 `npm ci`부터 실행합니다.
-DB, Flask, 로그인 계정, 환경 변수는 필요하지 않습니다.
+필수 state 앱에는 DB, Flask, 로그인 계정, 환경 변수가 필요하지 않습니다.
+심화 DB 메모 화면은 아래의 추가 준비가 필요합니다.
 개발 서버를 Ctrl+C로 종료한 뒤 프로덕션을 실행합니다.
 
 ```cmd
@@ -94,13 +96,92 @@ DB 저장은 서버의 저장 값을 재조회하므로 새로고침 뒤에도 
 
 Git 실습의 PR 3개도 모두 Merged입니다. 두 clone의 최종 main은
 `93b0e486e4b524076d75262399f5138e97d76655`로 같습니다.
-선택 심화 4개는 미선택입니다. [필수 20개 근거](docs/checklist-review.md)를 확인할 수 있습니다.
+같은 줄 충돌 해결, Next.js 작업 PR, Flask·DB 메모 CRUD의 선택 심화도 추가했습니다.
+[필수·심화 체크리스트 근거](docs/checklist-review.md)를 확인할 수 있습니다.
 
 원격 저장소를 새 폴더에 clone한 뒤 `npm ci`, `npm run lint`, `npm run build`도 모두 성공했습니다.
 기존 node_modules나 빌드 캐시를 복사하지 않았습니다. [새 설치 실제 출력](docs/reproduction-output.txt)을 첨부합니다.
 
 ![프로덕션 메모 화면](docs/notes-production.jpg)
 
+## 심화 DB 메모 설치·실행 — Windows CMD
+
+이전 과제의 Flask 백엔드를 `mini-watch/monitor/backend`에 그대로 포함했습니다.
+DB 연결·SQL·로그인·CSRF·메모 API 구조를 유지하고 Next.js 클라이언트를 연결했습니다.
+클라이언트는 `mini-watch/monitor/next-frontend`에 있으며 루트 Next.js의 `/api-notes`에서 실행됩니다.
+필수 앱과 패키지/빌드/서버를 공유하므로 프론트엔드 설치는 루트에서 한 번만 합니다.
+
+PostgreSQL이 실행 중인 환경에서 다음을 준비합니다. 이미 이전 과제 DB와 운영자 계정이 있으면
+DB 생성과 계정 생성은 건너뛰고 기존 접속 설정을 사용합니다. 기존 계정은 덮어쓰지 않습니다.
+
+```cmd
+py -m venv .venv
+.venv\Scripts\python.exe -m pip install -r mini-watch\monitor\backend\requirements.txt
+psql -U postgres -h 127.0.0.1 -f mini-watch\monitor\backend\sql\create_database.sql
+copy mini-watch\monitor\backend\.env.example mini-watch\monitor\backend\.env
+py -c "import secrets; print(secrets.token_hex(32))"
+notepad mini-watch\monitor\backend\.env
+```
+
+`.env`의 DB_HOST/PORT/NAME/USER/PASSWORD를 본인 PostgreSQL에 맞춥니다.
+SECRET_KEY에는 위 명령으로 생성한 값을 입력합니다. 기존 일반/감시 서비스의 로그인 세션을
+공유하려면 기존 서비스와 같은 SECRET_KEY를 사용합니다. 실제 값은 Git/ZIP에서 제외합니다.
+DB 이름 기본값은 codemit_monitor_db이며 sql/create_database.sql은 새 DB를 만들 때 한 번만 실행합니다.
+
+```cmd
+cd mini-watch\monitor\backend
+..\..\..\.venv\Scripts\python.exe setup_db.py --username next_operator --name 운영자
+set PORT=5200
+..\..\..\.venv\Scripts\python.exe app.py
+```
+
+setup_db.py는 sql/dashboard.sql로 테이블을 준비하고 비밀번호를 터미널에서 두 번 입력받습니다.
+8자 이상을 사용합니다. `--username`을 생략하면 기존 자료를 유지하며 테이블만 준비합니다.
+Flask 서버를 실행한 채 새 CMD를 열어 저장소 루트에서 실행합니다.
+
+```cmd
+copy .env.example .env
+npm ci
+npm run build
+npm run start -- --hostname 127.0.0.1 --port 5300
+```
+
+http://127.0.0.1:5300/api-notes 에서 생성한 운영자 계정으로 로그인합니다.
+루트 `.env`의 FLASK_API_ORIGIN 기본값은 http://127.0.0.1:5200 입니다.
+Flask 포트를 바꿨다면 이 값도 바꾸고 Next.js를 다시 빌드·실행합니다.
+Next.js rewrites가 `/api/*`를 Flask로 전달하여 브라우저의 쿠키와 CSRF 헤더를 유지합니다.
+브라우저는 DB에 직접 연결하지 않습니다. 서버 접근 제한이나 CSRF 보호를 해제하지 않았습니다.
+
+| 화면 동작 | 기존 Flask API |
+|---|---|
+| 세션 복원/로그인/로그아웃 | GET /api/auth/me, POST /api/auth/login, POST /api/auth/logout |
+| 목록/번호·제목으로 상세 조회 | GET /api/notes, GET /api/notes/번호 |
+| 제목·내용·처리 상태 등록 | POST /api/notes |
+| 기존 값 수정과 저장 | PUT /api/notes/번호 |
+| 확인 후 선택한 메모 삭제 | DELETE /api/notes/번호 |
+
+수정/삭제 취소는 API로 변경을 보내지 않아 DB 원본이 보존됩니다.
+빈 입력은 서버400, 없는 번호는404, 로그인/CSRF 실패는401/403을 안내하며 성공으로 표시하지 않습니다.
+저장·삭제 성공 후 목록을 다시 조회합니다. 같은 ID의 수정 값과 삭제 결과는 새로고침 후에도 유지됩니다.
+
+## 심화 실제 검증
+
+- [실제 HTTP/DB 통합 검증 8개](docs/api-integration-validation.json): Next.js 프록시·쿠키·CSRF·CRUD·400/404·새 프로세스 DB 조회·기존 자료 보존.
+- [프로덕션 DB UI 검증 18개](docs/api-ui-validation.json): 등록/수정/삭제·취소·새로고침·서버 재실행·동시삭제404·연결실패 안내·로그아웃.
+- [필수 앱 회귀 검증](docs/advanced-regression-validation.json): 카운터와 state 메모·새로고침 초기화 유지.
+- [심화 빌드 출력](docs/advanced-build-output.txt), [시작 출력](docs/advanced-start-output.txt), [lint 출력](docs/advanced-lint-output.txt).
+
+검증용 계정·메모만 정리했고 이전 과제의 모든 메모 행이 변하지 않았음을 확인했습니다.
+API 연결 실패 검증에서는 Flask를 잠시 종료하여 예상한500 오류를 확인한 뒤 복원했습니다.
+Flask 재실행 뒤에도 수정된 본문/완료 상태와 로그인 세션이 유지되었습니다.
+검증을 다시 실행하려면 서버 두 개를 켠 상태로 저장소 루트에서 다음을 실행합니다.
+
+```cmd
+.venv\Scripts\python.exe scripts\verify_db_api.py --url http://127.0.0.1:5300
+```
+
+![PostgreSQL 메모 수정 후 재조회 화면](docs/api-notes-production.jpg)
+
 ## 참고와 의존성 검토
 
 - [Next.js 공식 설치](https://nextjs.org/docs/app/getting-started/installation)
diff --git a/app/api-notes/page.js b/app/api-notes/page.js
new file mode 100644
index 0000000..6777f27
--- /dev/null
+++ b/app/api-notes/page.js
@@ -0,0 +1,16 @@
+import ApiNotes from "@/mini-watch/monitor/next-frontend/components/ApiNotes";
+
+export const metadata = { title: "DB 메모 | 한 장" };
+
+export default function ApiNotesPage() {
+  return (
+    <>
+      <section className="page-heading">
+        <p className="eyebrow">CONNECTED NOTES</p>
+        <h1>오래 남길 생각<span className="title-dot">.</span></h1>
+        <p>Flask와 PostgreSQL에 저장하는 메모입니다. 새로고침 후에도 기록이 남아요.</p>
+      </section>
+      <ApiNotes />
+    </>
+  );
+}
diff --git a/app/globals.css b/app/globals.css
index 8c025e6..e022023 100644
--- a/app/globals.css
+++ b/app/globals.css
@@ -77,5 +77,23 @@ textarea[aria-invalid="true"] { border-color: #ab4438; }
 .site-footer { min-height: 101px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; color: var(--muted); font-size: 10px; gap: 20px; }
 .skip-link { position: absolute; top: -100px; background: white; padding: 10px; z-index: 10; }
 .skip-link:focus { top: 10px; }
+.api-notes input, .api-notes select { width: 100%; padding: 10px 12px; margin: 7px 0 17px; color: var(--ink); background: #fafbf8; border: 1px solid var(--line); border-radius: 7px; font: inherit; font-size: 13px; }
+.api-notes label { display: block; font-size: 12px; font-weight: 600; }
+.api-notes fieldset { padding: 0; margin: 0; border: 0; min-width: 0; }
+.api-notes textarea { margin: 7px 0 17px; }
+.api-notes button:disabled { opacity: .55; cursor: wait; }
+.api-login { max-width: 420px; }
+.api-login > p:not(.eyebrow) { font-size: 13px; color: var(--muted); }
+.api-toolbar { display: flex; justify-content: space-between; gap: 15px; align-items: center; margin-bottom: 24px; flex-wrap: wrap; }
+.api-toolbar p { margin: 0; }
+.lookup-form { display: flex; align-items: center; gap: 9px; margin: 15px 0 20px; flex-wrap: wrap; }
+.lookup-form input { width: 95px; margin: 0; }
+.api-note-list { max-height: 330px; overflow: auto; padding: 3px; }
+.api-note-list .note-card { padding: 16px 20px; }
+.note-title-button { border: 0; background: transparent; color: var(--ink); padding: 0; text-align: left; font-weight: 600; font-size: 14px; overflow-wrap: anywhere; }
+.note-title-button:hover { text-decoration: underline; }
+.api-note-list .note-meta { margin: 10px 0 0; }
+.api-detail { margin-top: 22px; }
+.api-error { padding: 12px 16px; background: #fff2ee; border: 1px solid #e7b3a5; border-radius: 7px; }
 @media (max-width: 800px) { .site-shell { padding: 0 24px; } .notes-workspace { grid-template-columns: 300px minmax(0, 1fr); gap: 22px; } .collection-caption { display: none; } .note-card { padding: 20px; } }
 @media (max-width: 640px) { .site-shell { padding: 0 20px; } .site-header { height: 82px; } .brand-sub { display: none; } nav { gap: 22px; } .hero { padding: 42px 0 32px; } .hero h1 { font-size: 37px; } .lead { font-size: 13px; } .home-grid, .notes-workspace { grid-template-columns: 1fr; gap: 22px; } .page-heading { padding-top: 35px; } .page-heading h1 { font-size: 34px; } .intro-card { min-height: 245px; } .collection-caption { display: block; } .site-footer { flex-wrap: wrap; padding: 24px 0; min-height: 90px; gap: 8px; } .panel { padding: 24px; } }
diff --git a/app/layout.js b/app/layout.js
index e9f091c..822b916 100644
--- a/app/layout.js
+++ b/app/layout.js
@@ -10,7 +10,7 @@ export default function RootLayout({ children }) {
       <div className="site-shell">
         <header className="site-header">
           <Link className="brand" href="/" aria-label="한 장 홈"><span className="brand-mark" aria-hidden="true">▱</span> 한 장<span className="brand-sub">a little note</span></Link>
-          <nav aria-label="주 메뉴"><Link href="/">홈</Link><Link href="/notes">메모</Link></nav>
+          <nav aria-label="주 메뉴"><Link href="/">홈</Link><Link href="/notes">메모</Link><Link href="/api-notes">DB 메모</Link></nav>
         </header>
         <main id="main">{children}</main>
         <footer className="site-footer"><span>한 장 · 일상의 작은 기록</span><span>가볍게 쓰고, 새롭게 시작해요.</span></footer>
diff --git a/docs/advanced-build-output.txt b/docs/advanced-build-output.txt
new file mode 100644
index 0000000..8ca7509
--- /dev/null
+++ b/docs/advanced-build-output.txt
@@ -0,0 +1,30 @@
+
+> next-practice@0.1.0 build
+> next build
+
+▲ Next.js 16.4.0 (Turbopack)
+✓ Running next.config.mjs took 19ms
+- Cache Components enabled
+- Partial Prefetching enabled
+
+  Creating an optimized production build ...
+✓ Compiled successfully in 661ms
+  Running TypeScript ...
+  Finished TypeScript in 2ms ...
+  Collecting page data using 7 workers ...
+  Generating static pages using 7 workers (0/6) ...
+  Generating static pages using 7 workers (1/6) 
+  Generating static pages using 7 workers (2/6) 
+  Generating static pages using 7 workers (4/6) 
+✓ Generating static pages using 7 workers (6/6) in 749ms
+  Finalizing page optimization ...
+
+Route (app)
+┌ ○ /
+├ ○ /_not-found
+├ ○ /api-notes
+└ ○ /notes
+
+
+○  (Static)  prerendered as static content
+
diff --git a/docs/advanced-lint-output.txt b/docs/advanced-lint-output.txt
new file mode 100644
index 0000000..78b0c01
--- /dev/null
+++ b/docs/advanced-lint-output.txt
@@ -0,0 +1,4 @@
+
+> next-practice@0.1.0 lint
+> eslint
+
diff --git a/docs/advanced-regression-validation.json b/docs/advanced-regression-validation.json
new file mode 100644
index 0000000..25e7969
--- /dev/null
+++ b/docs/advanced-regression-validation.json
@@ -0,0 +1,9 @@
+{
+  "result": "PASS",
+  "checks": [
+    "홈 카운터 증가/초기화",
+    "필수 state 메모 등록",
+    "새로고침 시 초기 메모 복원",
+    "홈/메모/DB 메모 Link 이동"
+  ]
+}
\ No newline at end of file
diff --git a/docs/advanced-start-output.txt b/docs/advanced-start-output.txt
new file mode 100644
index 0000000..41712de
--- /dev/null
+++ b/docs/advanced-start-output.txt
@@ -0,0 +1,5 @@
+▲ Next.js 16.4.0
+- Local:         http://127.0.0.1:5300
+- Network:       http://127.0.0.1:5300
+✓ Ready in 171ms
+✓ Running next.config.mjs took 22ms
diff --git a/docs/api-integration-validation.json b/docs/api-integration-validation.json
new file mode 100644
index 0000000..20d48d4
--- /dev/null
+++ b/docs/api-integration-validation.json
@@ -0,0 +1,39 @@
+{
+  "result": "PASS",
+  "url": "http://127.0.0.1:5300",
+  "flow": "Next.js → Flask → PostgreSQL",
+  "checks": [
+    {
+      "name": "Next.js proxy login: cookie/CSRF, unauthenticated401, missing CSRF403, blank400, wrong401, login200",
+      "result": "PASS"
+    },
+    {
+      "name": "Blank create400, existing notes preserved",
+      "result": "PASS"
+    },
+    {
+      "name": "Create201 and real PostgreSQL list/detail GET",
+      "result": "PASS"
+    },
+    {
+      "name": "Blank update400 preserves body/status/updated_at",
+      "result": "PASS"
+    },
+    {
+      "name": "PUT200, same ID, new-process PostgreSQL read preserves edited values",
+      "result": "PASS"
+    },
+    {
+      "name": "DELETE200, deleted ID absent on re-query, missing GET/PUT/DELETE404",
+      "result": "PASS"
+    },
+    {
+      "name": "Logout and protected API401",
+      "result": "PASS"
+    },
+    {
+      "name": "Only disposable data cleaned up; all existing DB rows preserved",
+      "result": "PASS"
+    }
+  ]
+}
\ No newline at end of file
diff --git a/docs/api-notes-production.jpg b/docs/api-notes-production.jpg
new file mode 100644
index 0000000..ffe3318
Binary files /dev/null and b/docs/api-notes-production.jpg differ
diff --git a/docs/api-ui-validation.json b/docs/api-ui-validation.json
new file mode 100644
index 0000000..1855e51
--- /dev/null
+++ b/docs/api-ui-validation.json
@@ -0,0 +1,97 @@
+{
+  "date": "2026-10-08",
+  "timezone": "Asia/Seoul",
+  "mode": "Next.js production → existing Flask API → PostgreSQL",
+  "checks": [
+    {
+      "name": "로그인 실패 안내",
+      "result": "PASS",
+      "detail": "기존 Flask의 401 오류 표시"
+    },
+    {
+      "name": "Flask 운영자 로그인",
+      "result": "PASS",
+      "detail": "실제 쿠키/CSRF로 기존 API 로그인 성공"
+    },
+    {
+      "name": "빈 DB 메모 거절",
+      "result": "PASS",
+      "detail": "Flask400 안내, 목록과 원본 유지"
+    },
+    {
+      "name": "DB 등록과 목록·상세 연결",
+      "result": "PASS",
+      "detail": "POST201 이후 목록에 표시, 서버가 반환한 ID 13"
+    },
+    {
+      "name": "등록 후 새로고침 유지",
+      "result": "PASS",
+      "detail": "세션 복원, DB 목록/상세 재조회에서 같은 ID와 내용 확인"
+    },
+    {
+      "name": "DB 수정 취소",
+      "result": "PASS",
+      "detail": "원래 값으로 시작, 취소 뒤 GET 재조회에서도 원본 보존"
+    },
+    {
+      "name": "DB 공백 수정 거절",
+      "result": "PASS",
+      "detail": "Flask400 오류 표시, 기존 상세 보존, 저장 성공으로 표시하지 않음"
+    },
+    {
+      "name": "DB 수정 저장",
+      "result": "PASS",
+      "detail": "PUT200 이후 같은 ID의 내용/처리 상태 갱신"
+    },
+    {
+      "name": "수정 후 새로고침 유지",
+      "result": "PASS",
+      "detail": "DB 재조회에서 같은 ID, 수정된 본문/완료 상태 유지"
+    },
+    {
+      "name": "DB 삭제 취소",
+      "result": "PASS",
+      "detail": "확인창 취소 뒤 GET 재조회에서 수정된 메모 보존"
+    },
+    {
+      "name": "API 서버 중단 오류",
+      "result": "PASS",
+      "detail": "Flask 중단 시 화면에 실패 안내, 기존 상세를 성공 처리로 덮어쓰지 않음"
+    },
+    {
+      "name": "Flask 재실행 후 DB 유지",
+      "result": "PASS",
+      "detail": "동일 설정으로 서버 재실행 후 수정된 메모와 로그인 세션 유지"
+    },
+    {
+      "name": "DB 삭제 확정과 수정 폼 초기화",
+      "result": "PASS",
+      "detail": "DELETE200 뒤 목록/선택에서 제거, 수정 중인 ID 삭제 시 등록 폼 복귀"
+    },
+    {
+      "name": "삭제 후 새로고침 유지",
+      "result": "PASS",
+      "detail": "DB 목록 재조회에서도 삭제한 메모 없음, 기존 메모는 유지"
+    },
+    {
+      "name": "존재하지 않는 DB 메모 조회",
+      "result": "PASS",
+      "detail": "삭제한 ID 조회 시 Flask404를 화면에 안내"
+    },
+    {
+      "name": "동시 삭제 후 수정 실패",
+      "result": "PASS",
+      "detail": "다른 연결에서 삭제된 ID의 PUT404 안내, 저장 성공 표시 없음"
+    },
+    {
+      "name": "동시 삭제 후 삭제 실패",
+      "result": "PASS",
+      "detail": "DELETE404를 안내하고 성공 표시 없음"
+    },
+    {
+      "name": "DB 화면 로그아웃",
+      "result": "PASS",
+      "detail": "기존 Flask 세션을 로그아웃하고 로그인 폼으로 복귀"
+    }
+  ]
+}
\ No newline at end of file
diff --git a/docs/checklist-review.md b/docs/checklist-review.md
index 0b2965c..f834882 100644
--- a/docs/checklist-review.md
+++ b/docs/checklist-review.md
@@ -26,4 +26,11 @@
 | 19 | build/start/실제 화면 | PASS — 빌드·시작 출력, 프로덕션 UI 17항목 PASS |
 | 20 | 소스/README/GIT_WORK | PASS — lock·설치 순서·원본 PR·실제 출력/화면 |
 
-선택 심화 4개는 미선택입니다. 필수 앱은 API/DB 없이 실행됩니다.
+필수 state 앱은 API/DB 없이 실행됩니다. 별도의 /api-notes 화면으로 아래 심화를 추가했습니다.
+
+| 번호 | 선택 심화 | 결과와 근거 |
+|---|---|---|
+| 21 | 같은 줄 충돌 해결·같은 PR·병합·양쪽 pull·이유 | PASS — Git 실습 PR #4/#5 Merged, conflict-transcript.md의 실제 충돌·해결·양쪽576b376 |
+| 22 | Next.js 실제 변경 브랜치·PR·검토·병합·pull | 진행 중 — codex/next-api-notes에서 구현/검증 완료, PR 병합 후 최종 기록 추가 |
+| 23 | 기존 Flask DB 목록·상세·등록·새로고침 유지 | PASS — 기존 API/SQL 포함, 실제 프록시/DB 통합8개·브라우저18개 검증 |
+| 24 | 수정·삭제·취소·오류·새로고침 후 DB 유지 | PASS — PUT/DELETE200, 취소 보존, 공백400·없는 ID404·실패 안내, 서버 재실행 후 수정 유지 |
diff --git a/docs/conflict-transcript.md b/docs/conflict-transcript.md
new file mode 100644
index 0000000..9f18fe4
--- /dev/null
+++ b/docs/conflict-transcript.md
@@ -0,0 +1,470 @@
+# 같은 줄의 충돌 해결 실제 출력
+2026-10-08 Asia/Seoul
+
+### git-practice-minsu
+
+```text
+> git switch main
+Your branch is up to date with 'origin/main'.
+Already on 'main'
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git pull --ff-only origin main
+Already up to date.
+From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
+ * branch            main       -> FETCH_HEAD
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git switch -c codex/title-minsu
+Switched to a new branch 'codex/title-minsu'
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git add README.md
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git commit -m "Refine exercise title in git-practice-minsu"
+[codex/title-minsu 6fdca10] Refine exercise title in git-practice-minsu
+ 1 file changed, 1 insertion(+), 1 deletion(-)
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git push -u origin codex/title-minsu
+branch 'codex/title-minsu' set up to track 'origin/codex/title-minsu'.
+remote: 
+remote: Create a pull request for 'codex/title-minsu' on GitHub by visiting:        
+remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/codex/title-minsu        
+remote: 
+To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
+ * [new branch]      codex/title-minsu -> codex/title-minsu
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head codex/title-minsu --title "Refine title: git-practice-minsu" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-git-practice-minsu-title.md
+https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/4
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git switch main
+Your branch is up to date with 'origin/main'.
+Already on 'main'
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git pull --ff-only origin main
+Already up to date.
+From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
+ * branch            main       -> FETCH_HEAD
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git switch -c codex/title-jiyun
+Switched to a new branch 'codex/title-jiyun'
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git add README.md
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git commit -m "Refine exercise title in git-practice-jiyun"
+[codex/title-jiyun b4f7d82] Refine exercise title in git-practice-jiyun
+ 1 file changed, 1 insertion(+), 1 deletion(-)
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git push -u origin codex/title-jiyun
+branch 'codex/title-jiyun' set up to track 'origin/codex/title-jiyun'.
+remote: 
+remote: Create a pull request for 'codex/title-jiyun' on GitHub by visiting:        
+remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/codex/title-jiyun        
+remote: 
+To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
+ * [new branch]      codex/title-jiyun -> codex/title-jiyun
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head codex/title-jiyun --title "Refine title: git-practice-jiyun" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-git-practice-jiyun-title.md
+https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> gh pr diff 4 --repo gkacksdnjs22-stack/codemit-git-practice-day05
+diff --git a/README.md b/README.md
+index 703364b..2d64f2f 100644
+--- a/README.md
++++ b/README.md
+@@ -1,3 +1,3 @@
+-# GitHub Flow 실습
++# GitHub Flow 협업 기록
+ 
+ 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> gh pr diff 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05
+diff --git a/README.md b/README.md
+index 703364b..e5ce26a 100644
+--- a/README.md
++++ b/README.md
+@@ -1,3 +1,3 @@
+-# GitHub Flow 실습
++# GitHub Flow 실습 노트
+ 
+ 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> gh pr merge 4 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git fetch origin
+From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
+ * [new branch]      codex/title-minsu -> origin/codex/title-minsu
+   b13169c..f663a93  feature/minsu     -> origin/feature/minsu
+   93b0e48..998fb3f  main              -> origin/main
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git merge origin/main
+Auto-merging README.md
+CONFLICT (content): Merge conflict in README.md
+Automatic merge failed; fix conflicts and then commit the result.
+
+exit=1
+```
+
+### git-practice-jiyun
+
+```text
+> git status --short
+UU README.md
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git diff -- README.md
+diff --cc README.md
+index e5ce26a,2d64f2f..0000000
+--- a/README.md
++++ b/README.md
+@@@ -1,3 -1,3 +1,7 @@@
+++<<<<<<< HEAD
+ +# GitHub Flow 실습 노트
+++=======
++ # GitHub Flow 협업 기록
+++>>>>>>> origin/main
+  
+  한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git add README.md
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git diff --cached -- README.md
+diff --git a/README.md b/README.md
+index e5ce26a..7606a92 100644
+--- a/README.md
++++ b/README.md
+@@ -1,3 +1,3 @@
+-# GitHub Flow 실습 노트
++# GitHub Flow 협업 실습 기록
+ 
+ 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git commit -m "Resolve title conflict by preserving collaboration and practice intent"
+[codex/title-jiyun 69f8707] Resolve title conflict by preserving collaboration and practice intent
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git push
+To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
+   b4f7d82..69f8707  codex/title-jiyun -> codex/title-jiyun
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> gh pr edit 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-conflict-resolution.md
+https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> gh pr diff 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05
+diff --git a/README.md b/README.md
+index 2d64f2f..7606a92 100644
+--- a/README.md
++++ b/README.md
+@@ -1,3 +1,3 @@
+-# GitHub Flow 협업 기록
++# GitHub Flow 협업 실습 기록
+ 
+ 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> gh pr view 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,commits,files,state
+{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:35:37Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:35:37Z","messageBody":"","messageHeadline":"Refine exercise title in git-practice-jiyun","oid":"b4f7d821f024d3e39876a1e958df8cfb7eae4a58"},{"authoredDate":"2026-10-08T07:37:51Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:37:51Z","messageBody":"","messageHeadline":"Resolve title conflict by preserving collaboration and practice intent","oid":"69f87071011424248b687c30abb3fbff92bf3a74"}],"files":[{"path":"README.md","additions":1,"deletions":1,"changeType":"MODIFIED"}],"headRefName":"codex/title-jiyun","state":"OPEN","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5"}
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> gh pr merge 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git switch main
+Your branch is up to date with 'origin/main'.
+Switched to branch 'main'
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git pull --ff-only origin main
+Updating 93b0e48..576b376
+Fast-forward
+ README.md | 2 +-
+ 1 file changed, 1 insertion(+), 1 deletion(-)
+From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
+ * branch            main       -> FETCH_HEAD
+   93b0e48..576b376  main       -> origin/main
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git show HEAD:README.md
+# GitHub Flow 협업 실습 기록
+
+한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git branch -d codex/title-minsu
+Deleted branch codex/title-minsu (was 6fdca10).
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git status --short
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> git rev-parse HEAD
+576b37611f78bff1df13fdba67ee3696a9e04df0
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git switch main
+Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
+  (use "git pull" to update your local branch)
+Switched to branch 'main'
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git pull --ff-only origin main
+Updating 93b0e48..576b376
+Fast-forward
+ README.md | 2 +-
+ 1 file changed, 1 insertion(+), 1 deletion(-)
+From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
+ * branch            main       -> FETCH_HEAD
+   998fb3f..576b376  main       -> origin/main
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git show HEAD:README.md
+# GitHub Flow 협업 실습 기록
+
+한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git branch -d codex/title-jiyun
+Deleted branch codex/title-jiyun (was 69f8707).
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git status --short
+
+exit=0
+```
+
+### git-practice-jiyun
+
+```text
+> git rev-parse HEAD
+576b37611f78bff1df13fdba67ee3696a9e04df0
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> gh pr view 4 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,state,baseRefName,headRefName,commits,files,mergeCommit
+{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:35:30Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:35:30Z","messageBody":"","messageHeadline":"Refine exercise title in git-practice-minsu","oid":"6fdca1001e8b4ef9d6e1520d3ed3f32d5bf509de"}],"files":[{"path":"README.md","additions":1,"deletions":1,"changeType":"MODIFIED"}],"headRefName":"codex/title-minsu","mergeCommit":{"oid":"998fb3f5ce80f885af189fb07fbcab9a6868accb"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/4"}
+
+exit=0
+```
+
+### git-practice-minsu
+
+```text
+> gh pr view 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,state,baseRefName,headRefName,commits,files,mergeCommit
+{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:35:37Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:35:37Z","messageBody":"","messageHeadline":"Refine exercise title in git-practice-jiyun","oid":"b4f7d821f024d3e39876a1e958df8cfb7eae4a58"},{"authoredDate":"2026-10-08T07:37:51Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:37:51Z","messageBody":"","messageHeadline":"Resolve title conflict by preserving collaboration and practice intent","oid":"69f87071011424248b687c30abb3fbff92bf3a74"}],"files":[{"path":"README.md","additions":1,"deletions":1,"changeType":"MODIFIED"}],"headRefName":"codex/title-jiyun","mergeCommit":{"oid":"576b37611f78bff1df13fdba67ee3696a9e04df0"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5"}
+
+exit=0
+```
diff --git a/mini-watch/monitor/backend/.env.example b/mini-watch/monitor/backend/.env.example
new file mode 100644
index 0000000..481395c
--- /dev/null
+++ b/mini-watch/monitor/backend/.env.example
@@ -0,0 +1,7 @@
+DB_HOST=127.0.0.1
+DB_PORT=5432
+DB_NAME=codemit_monitor_db
+DB_USER=postgres
+DB_PASSWORD=YOUR_POSTGRES_PASSWORD
+PORT=5200
+SECRET_KEY=GENERATE_A_SHARED_RANDOM_KEY_OF_AT_LEAST_32_CHARACTERS
diff --git a/mini-watch/monitor/backend/app.py b/mini-watch/monitor/backend/app.py
new file mode 100644
index 0000000..b280fc8
--- /dev/null
+++ b/mini-watch/monitor/backend/app.py
@@ -0,0 +1,44 @@
+"""Flask 앱 생성과 라우터 등록. SQL은 repositories에서 실행합니다."""
+import os
+import psycopg
+from flask import Flask
+from routes.auth import auth_bp
+from routes.events import events_bp
+from routes.notes import notes_bp
+from auth_helpers import configure_session
+
+
+def create_app():
+    app = Flask(__name__)
+    app.json.ensure_ascii = False
+    configure_session(app)
+    app.config["MAX_CONTENT_LENGTH"] = 1_000_000
+    app.register_blueprint(auth_bp)
+    app.register_blueprint(events_bp)
+    app.register_blueprint(notes_bp)
+
+    @app.after_request
+    def no_cache(response):
+        response.headers["Cache-Control"] = "no-store"
+        return response
+
+    @app.get("/health")
+    def health():
+        return {"service": "monitor", "status": "ok"}
+
+    @app.errorhandler(psycopg.Error)
+    def database_error(error):
+        app.logger.error("DB 요청 실패: %s", type(error).__name__)
+        return {"error": "DB에 연결하거나 자료를 처리할 수 없습니다. 잠시 후 다시 시도해 주세요."}, 503
+
+    @app.errorhandler(413)
+    def too_large(error):
+        return {"error": "요청 내용이 너무 큽니다."}, 413
+
+    return app
+
+
+app = create_app()
+
+if __name__ == "__main__":
+    app.run(host="127.0.0.1", port=int(os.getenv("PORT", "5200")))
diff --git a/mini-watch/monitor/backend/auth_helpers.py b/mini-watch/monitor/backend/auth_helpers.py
new file mode 100644
index 0000000..99c2c3e
--- /dev/null
+++ b/mini-watch/monitor/backend/auth_helpers.py
@@ -0,0 +1,45 @@
+import hmac
+import os
+import secrets
+
+from flask import request, session
+from repositories.users import find_user_by_id
+
+
+def configure_session(app):
+    key = os.getenv("SECRET_KEY", "")
+    if len(key) < 32 or key.startswith("GENERATE_"):
+        raise RuntimeError("monitor/backend/.env에 일반 서비스와 같은 SECRET_KEY를 설정해 주세요.")
+    # 같은 로컬 서비스 묶음의 게시판과 대시보드가 하나의 로그인/로그아웃을 공유합니다.
+    app.config.update(SECRET_KEY=key, SESSION_COOKIE_NAME="codemit_assignment_session",
+                      SESSION_COOKIE_HTTPONLY=True, SESSION_COOKIE_SAMESITE="Lax")
+
+
+def current_user():
+    user_id = session.get("user_id")
+    if session.get("role") != "operator" or type(user_id) is not int:
+        return None
+    user = find_user_by_id(user_id)
+    if user is None:
+        session.clear()
+        return None
+    return {"id": user["id"], "username": user["username"], "name": user["display_name"]}
+
+
+def csrf_token():
+    if "csrf_token" not in session:
+        session["csrf_token"] = secrets.token_urlsafe(32)
+    return session["csrf_token"]
+
+
+def valid_csrf():
+    token, expected = request.headers.get("X-CSRF-Token"), session.get("csrf_token")
+    return isinstance(token, str) and isinstance(expected, str) and hmac.compare_digest(token, expected)
+
+
+def api_access_error():
+    if current_user() is None:
+        return {"error": "운영자 로그인이 필요합니다."}, 401
+    if request.method in {"POST", "PUT", "PATCH", "DELETE"} and not valid_csrf():
+        return {"error": "요청 확인 값이 만료되었습니다. 새로고침 후 다시 시도해 주세요."}, 403
+    return None
diff --git a/mini-watch/monitor/backend/db.py b/mini-watch/monitor/backend/db.py
new file mode 100644
index 0000000..4dd3fd4
--- /dev/null
+++ b/mini-watch/monitor/backend/db.py
@@ -0,0 +1,20 @@
+import os
+from pathlib import Path
+
+import psycopg
+from dotenv import load_dotenv
+from psycopg.rows import dict_row
+
+load_dotenv(Path(__file__).with_name(".env"))
+
+
+def connect_db():
+    return psycopg.connect(
+        host=os.environ["DB_HOST"],
+        port=os.environ["DB_PORT"],
+        dbname=os.environ["DB_NAME"],
+        user=os.environ["DB_USER"],
+        password=os.environ["DB_PASSWORD"],
+        connect_timeout=3,
+        row_factory=dict_row,
+    )
diff --git a/mini-watch/monitor/backend/repositories/__init__.py b/mini-watch/monitor/backend/repositories/__init__.py
new file mode 100644
index 0000000..e69de29
diff --git a/mini-watch/monitor/backend/repositories/events.py b/mini-watch/monitor/backend/repositories/events.py
new file mode 100644
index 0000000..a4695ae
--- /dev/null
+++ b/mini-watch/monitor/backend/repositories/events.py
@@ -0,0 +1,23 @@
+from db import connect_db
+
+
+def create_event(event):
+    with connect_db() as conn:
+        conn.execute(
+            "INSERT INTO http_events (method, path, status_code, event_type) VALUES (%s, %s, %s, %s)",
+            (event["method"], event["path"], event["status_code"], event["event_type"]),
+        )
+
+
+def list_events(event_type=None):
+    with connect_db() as conn:
+        if event_type is None:
+            rows = conn.execute("SELECT * FROM http_events ORDER BY id DESC LIMIT 50").fetchall()
+        else:
+            rows = conn.execute(
+                "SELECT * FROM http_events WHERE event_type = %s ORDER BY id DESC LIMIT 50",
+                (event_type,),
+            ).fetchall()
+    for row in rows:
+        row["occurred_at"] = row["occurred_at"].isoformat()
+    return rows
diff --git a/mini-watch/monitor/backend/repositories/notes.py b/mini-watch/monitor/backend/repositories/notes.py
new file mode 100644
index 0000000..b3eb22b
--- /dev/null
+++ b/mini-watch/monitor/backend/repositories/notes.py
@@ -0,0 +1,43 @@
+from db import connect_db
+
+
+def serialize(row):
+    if row is not None:
+        row["created_at"] = row["created_at"].isoformat()
+        row["updated_at"] = row["updated_at"].isoformat()
+    return row
+
+
+def list_notes():
+    with connect_db() as conn:
+        rows = conn.execute("SELECT id, title, status, created_at, updated_at FROM notes ORDER BY id DESC").fetchall()
+    return [serialize(row) for row in rows]
+
+
+def find_note(note_id):
+    with connect_db() as conn:
+        row = conn.execute("SELECT * FROM notes WHERE id = %s", (note_id,)).fetchone()
+    return serialize(row)
+
+
+def create_note(title, body, status="pending"):
+    with connect_db() as conn:
+        row = conn.execute(
+            "INSERT INTO notes (title, body, status) VALUES (%s, %s, %s) RETURNING *", (title, body, status)
+        ).fetchone()
+    return serialize(row)
+
+
+def update_note(note_id, title, body, status="pending"):
+    with connect_db() as conn:
+        row = conn.execute(
+            "UPDATE notes SET title = %s, body = %s, status = %s, updated_at = NOW() WHERE id = %s RETURNING *",
+            (title, body, status, note_id),
+        ).fetchone()
+    return serialize(row)
+
+
+def delete_note(note_id):
+    with connect_db() as conn:
+        row = conn.execute("DELETE FROM notes WHERE id = %s RETURNING id", (note_id,)).fetchone()
+    return row
diff --git a/mini-watch/monitor/backend/repositories/users.py b/mini-watch/monitor/backend/repositories/users.py
new file mode 100644
index 0000000..4f87e58
--- /dev/null
+++ b/mini-watch/monitor/backend/repositories/users.py
@@ -0,0 +1,14 @@
+from db import connect_db
+
+
+def find_user(username):
+    with connect_db() as conn:
+        return conn.execute(
+            "SELECT id, username, display_name, password_hash FROM users WHERE username = %s",
+            (username,),
+        ).fetchone()
+
+
+def find_user_by_id(user_id):
+    with connect_db() as conn:
+        return conn.execute("SELECT id, username, display_name FROM users WHERE id = %s", (user_id,)).fetchone()
diff --git a/mini-watch/monitor/backend/requirements.txt b/mini-watch/monitor/backend/requirements.txt
new file mode 100644
index 0000000..4ac2f9c
--- /dev/null
+++ b/mini-watch/monitor/backend/requirements.txt
@@ -0,0 +1,3 @@
+Flask>=3.1,<4
+psycopg[binary]>=3.2,<4
+python-dotenv>=1,<2
diff --git a/mini-watch/monitor/backend/routes/__init__.py b/mini-watch/monitor/backend/routes/__init__.py
new file mode 100644
index 0000000..e69de29
diff --git a/mini-watch/monitor/backend/routes/auth.py b/mini-watch/monitor/backend/routes/auth.py
new file mode 100644
index 0000000..604c154
--- /dev/null
+++ b/mini-watch/monitor/backend/routes/auth.py
@@ -0,0 +1,50 @@
+import hmac
+from flask import Blueprint, current_app, request, session
+from werkzeug.security import check_password_hash
+from repositories.users import find_user
+from auth_helpers import csrf_token, current_user, valid_csrf
+
+auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")
+
+
+@auth_bp.get("/me")
+def me():
+    return {"user": current_user(), "csrf_token": csrf_token()}
+
+
+@auth_bp.post("/account-exists")
+def account_exists():
+    # 회원가입의 아이디 중복 확인에만 사용하는 서버 간 요청입니다.
+    if not hmac.compare_digest(request.headers.get("X-Internal-Auth", ""), current_app.secret_key):
+        return {"error": "허용되지 않은 요청입니다."}, 403
+    data = request.get_json(silent=True)
+    if not isinstance(data, dict) or not isinstance(data.get("username"), str):
+        return {"error": "아이디를 보내 주세요."}, 400
+    return {"exists": find_user(data["username"].strip()) is not None}
+
+
+@auth_bp.post("/login")
+def login():
+    if not valid_csrf():
+        return {"error": "로그인 화면을 새로고침하고 다시 시도해 주세요."}, 403
+    data = request.get_json(silent=True)
+    if not isinstance(data, dict):
+        return {"error": "아이디와 비밀번호를 입력해 주세요."}, 400
+    username, password = data.get("username"), data.get("password")
+    if (not isinstance(username, str) or not isinstance(password, str)
+            or not username.strip() or not password.strip()):
+        return {"error": "아이디와 비밀번호를 모두 입력해 주세요."}, 400
+    user = find_user(username.strip())
+    if user is None or not check_password_hash(user["password_hash"], password):
+        return {"error": "아이디 또는 비밀번호가 올바르지 않습니다."}, 401
+    session.clear()
+    session.update(user_id=user["id"], role="operator", username=user["username"], name=user["display_name"])
+    return {"user": {"id": user["id"], "username": user["username"], "name": user["display_name"]}, "csrf_token": csrf_token()}
+
+
+@auth_bp.post("/logout")
+def logout():
+    if not valid_csrf():
+        return {"error": "요청 확인 값이 만료되었습니다. 새로고침 후 다시 시도해 주세요."}, 403
+    session.clear()
+    return {"user": None}
diff --git a/mini-watch/monitor/backend/routes/events.py b/mini-watch/monitor/backend/routes/events.py
new file mode 100644
index 0000000..58f4f48
--- /dev/null
+++ b/mini-watch/monitor/backend/routes/events.py
@@ -0,0 +1,26 @@
+from flask import Blueprint, request
+from repositories.events import create_event, list_events
+from rules import make_event
+from auth_helpers import api_access_error
+
+events_bp = Blueprint("events", __name__, url_prefix="/api/events")
+
+
+@events_bp.post("")
+def receive_event():
+    event = make_event(request.get_json(silent=True))
+    if event is None:
+        return {"error": "method, path, status_code를 올바르게 보내 주세요."}, 400
+    create_event(event)
+    return {"message": "기록을 받았습니다."}, 201
+
+
+@events_bp.get("")
+def get_events():
+    error = api_access_error()
+    if error:
+        return error
+    event_type = request.args.get("event_type")
+    if event_type is not None and event_type not in {"login_success", "login_failure", "http_request"}:
+        return {"error": "지원하지 않는 이벤트 종류입니다."}, 400
+    return {"events": list_events(event_type)}
diff --git a/mini-watch/monitor/backend/routes/notes.py b/mini-watch/monitor/backend/routes/notes.py
new file mode 100644
index 0000000..e4c9a78
--- /dev/null
+++ b/mini-watch/monitor/backend/routes/notes.py
@@ -0,0 +1,53 @@
+from flask import Blueprint, request
+from repositories.notes import create_note, delete_note, find_note, list_notes, update_note
+from rules import validate_note
+from auth_helpers import api_access_error
+
+notes_bp = Blueprint("notes", __name__, url_prefix="/api/notes")
+
+
+@notes_bp.before_request
+def require_operator():
+    return api_access_error()
+
+
+@notes_bp.get("")
+def index():
+    return {"notes": list_notes()}
+
+
+@notes_bp.get("/<int:note_id>")
+def detail(note_id):
+    note = find_note(note_id)
+    if note is None:
+        return {"error": "메모를 찾을 수 없습니다."}, 404
+    return {"note": note}
+
+
+@notes_bp.post("")
+def create():
+    values, error = validate_note(request.get_json(silent=True))
+    if error:
+        return {"error": error}, 400
+    return {"note": create_note(**values)}, 201
+
+
+@notes_bp.put("/<int:note_id>")
+def update(note_id):
+    existing = find_note(note_id)
+    if existing is None:
+        return {"error": "메모를 찾을 수 없습니다."}, 404
+    values, error = validate_note(request.get_json(silent=True), default_status=existing["status"])
+    if error:
+        return {"error": error}, 400
+    note = update_note(note_id, **values)
+    if note is None:
+        return {"error": "메모를 찾을 수 없습니다."}, 404
+    return {"note": note}
+
+
+@notes_bp.delete("/<int:note_id>")
+def delete(note_id):
+    if delete_note(note_id) is None:
+        return {"error": "메모를 찾을 수 없습니다."}, 404
+    return {"message": "메모를 삭제했습니다."}
diff --git a/mini-watch/monitor/backend/rules.py b/mini-watch/monitor/backend/rules.py
new file mode 100644
index 0000000..6d397a1
--- /dev/null
+++ b/mini-watch/monitor/backend/rules.py
@@ -0,0 +1,35 @@
+NOTE_STATUSES = {"pending", "in_progress", "completed"}
+
+
+def validate_note(data, default_status="pending"):
+    if not isinstance(data, dict):
+        return None, "제목과 내용을 JSON으로 보내 주세요."
+    title, body = data.get("title"), data.get("body")
+    if not isinstance(title, str) or not isinstance(body, str):
+        return None, "제목과 내용을 문자열로 입력해 주세요."
+    title, body = title.strip(), body.strip()
+    if not title or not body:
+        return None, "제목과 내용을 모두 입력해 주세요. 공백만 입력할 수 없습니다."
+    if len(title) > 200 or len(body) > 10000:
+        return None, "제목은 200자, 내용은 10,000자 이내로 입력해 주세요."
+    status = data.get("status", default_status)
+    if not isinstance(status, str) or status not in NOTE_STATUSES:
+        return None, "처리 상태는 확인 전, 확인 중, 완료 중에서 선택해 주세요."
+    return {"title": title, "body": body, "status": status}, None
+
+
+def make_event(data):
+    if not isinstance(data, dict):
+        return None
+    method, path, status = data.get("method"), data.get("path"), data.get("status_code")
+    if not isinstance(method, str) or method not in {"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"}:
+        return None
+    if not isinstance(path, str) or not path.startswith("/") or len(path) > 500:
+        return None
+    if type(status) is not int or not 100 <= status <= 599:
+        return None
+    if method == "POST" and path == "/auth/login" and status in (200, 401):
+        event_type = "login_success" if status == 200 else "login_failure"
+    else:
+        event_type = "http_request"
+    return {"method": method, "path": path, "status_code": status, "event_type": event_type}
diff --git a/mini-watch/monitor/backend/setup_db.py b/mini-watch/monitor/backend/setup_db.py
new file mode 100644
index 0000000..c917b46
--- /dev/null
+++ b/mini-watch/monitor/backend/setup_db.py
@@ -0,0 +1,41 @@
+"""DB 테이블 준비 / 별도의 실습 계정 생성 (기존 계정은 덮어쓰지 않습니다)."""
+import argparse
+import sys
+from getpass import getpass
+from pathlib import Path
+from werkzeug.security import generate_password_hash
+from db import connect_db
+
+
+def main():
+    parser = argparse.ArgumentParser(description=__doc__)
+    parser.add_argument("--username", help="새 실습 계정 아이디. 생략하면 테이블만 준비")
+    parser.add_argument("--name", default="운영자", help="화면에 표시할 이름")
+    parser.add_argument("--password-stdin", action="store_true", help="자동 검증용: 표준 입력에서 비밀번호와 확인 값을 두 줄로 읽기")
+    args = parser.parse_args()
+    with connect_db() as conn:
+        conn.execute(Path(__file__).with_name("sql").joinpath("dashboard.sql").read_text(encoding="utf-8"))
+    print("감시 DB 테이블을 준비했습니다. 기존 자료는 유지됩니다.")
+    if args.username is None:
+        return
+    username, name = args.username.strip(), args.name.strip()
+    if not username or not name:
+        parser.error("아이디와 표시 이름은 공백만 입력할 수 없습니다.")
+    if args.password_stdin:
+        password = sys.stdin.readline().rstrip("\r\n")
+        confirmation = sys.stdin.readline().rstrip("\r\n")
+    else:
+        password = getpass("실습 계정 비밀번호 (8자 이상): ")
+        confirmation = getpass("비밀번호 확인: ")
+    if len(password) < 8 or not password.strip() or password != confirmation:
+        parser.error("비밀번호는 8자 이상이며 확인 값과 같아야 합니다.")
+    with connect_db() as conn:
+        result = conn.execute(
+            "INSERT INTO users (username, display_name, password_hash) VALUES (%s, %s, %s) ON CONFLICT (username) DO NOTHING",
+            (username, name, generate_password_hash(password)),
+        )
+    print("계정을 만들었습니다." if result.rowcount else "이미 있는 계정입니다. 기존 비밀번호를 유지합니다.")
+
+
+if __name__ == "__main__":
+    main()
diff --git a/mini-watch/monitor/backend/sql/create_database.sql b/mini-watch/monitor/backend/sql/create_database.sql
new file mode 100644
index 0000000..b681858
--- /dev/null
+++ b/mini-watch/monitor/backend/sql/create_database.sql
@@ -0,0 +1 @@
+CREATE DATABASE codemit_monitor_db;
diff --git a/mini-watch/monitor/backend/sql/dashboard.sql b/mini-watch/monitor/backend/sql/dashboard.sql
new file mode 100644
index 0000000..3883ee5
--- /dev/null
+++ b/mini-watch/monitor/backend/sql/dashboard.sql
@@ -0,0 +1,30 @@
+-- 기존 http_events와 게시판 자료를 보존하며 대시보드 테이블만 추가합니다.
+CREATE TABLE IF NOT EXISTS http_events (
+    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
+    occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
+    method TEXT NOT NULL,
+    path TEXT NOT NULL,
+    status_code INTEGER NOT NULL,
+    event_type TEXT NOT NULL
+);
+CREATE TABLE IF NOT EXISTS users (
+    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
+    username TEXT UNIQUE NOT NULL,
+    display_name TEXT NOT NULL,
+    password_hash TEXT NOT NULL
+);
+CREATE TABLE IF NOT EXISTS notes (
+    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
+    title TEXT NOT NULL CHECK (length(trim(title)) > 0),
+    body TEXT NOT NULL CHECK (length(trim(body)) > 0),
+    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
+    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
+);
+-- 기존 메모는 내용과 시각을 보존하고 '확인 전' 상태로 시작합니다.
+ALTER TABLE notes ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending';
+DO $$
+BEGIN
+    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid = 'notes'::regclass AND conname = 'notes_status_valid') THEN
+        ALTER TABLE notes ADD CONSTRAINT notes_status_valid CHECK (status IN ('pending', 'in_progress', 'completed'));
+    END IF;
+END $$;
diff --git a/mini-watch/monitor/backend/sql/http_events.sql b/mini-watch/monitor/backend/sql/http_events.sql
new file mode 100644
index 0000000..d54a06f
--- /dev/null
+++ b/mini-watch/monitor/backend/sql/http_events.sql
@@ -0,0 +1,8 @@
+CREATE TABLE http_events (
+    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
+    occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
+    method TEXT NOT NULL,
+    path TEXT NOT NULL,
+    status_code INTEGER NOT NULL,
+    event_type TEXT NOT NULL
+);
diff --git a/mini-watch/monitor/backend/try_event.py b/mini-watch/monitor/backend/try_event.py
new file mode 100644
index 0000000..994b179
--- /dev/null
+++ b/mini-watch/monitor/backend/try_event.py
@@ -0,0 +1,13 @@
+from db import connect_db
+
+with connect_db() as conn:
+    event = conn.execute(
+        """INSERT INTO http_events (method, path, status_code, event_type)
+           VALUES (%s, %s, %s, %s) RETURNING id""",
+        ("GET", "/posts/1", 200, "http_request"),
+    ).fetchone()
+    row = conn.execute(
+        "SELECT id, method, path, status_code, event_type FROM http_events WHERE id = %s",
+        (event["id"],),
+    ).fetchone()
+    print(row)
diff --git a/mini-watch/monitor/next-frontend/README.md b/mini-watch/monitor/next-frontend/README.md
new file mode 100644
index 0000000..6ad3251
--- /dev/null
+++ b/mini-watch/monitor/next-frontend/README.md
@@ -0,0 +1,13 @@
+# 기존 Flask·PostgreSQL API를 사용하는 Next.js 화면
+
+이 폴더의 `components/ApiNotes.js`와 `api/notes.js`를 루트 Next.js 프로젝트의
+`app/api-notes/page.js`에서 연결합니다. 설치·빌드·서버를 하나로 공유하고
+`/notes`의 필수 state 앱과 `/api-notes`의 DB 앱을 함께 실행합니다.
+
+루트에서 `npm ci`, `npm run dev` 또는 `npm run build`/`npm run start`로 실행합니다.
+별도 프론트엔드 패키지를 설치할 필요가 없습니다.
+Flask 준비는 루트 README의 DB 메모 실행 순서를 따릅니다.
+
+요청은 Next.js rewrites를 거쳐 Flask에 전달됩니다. 로그인 세션은 HttpOnly 쿠키로 유지하고
+POST/PUT/DELETE에는 Flask가 발급한 X-CSRF-Token을 전달합니다.
+목록 GET, 상세 GET, 등록 POST, 수정 PUT, 삭제 DELETE를 모두 실제 기존 API로 처리합니다.
diff --git a/mini-watch/monitor/next-frontend/api/notes.js b/mini-watch/monitor/next-frontend/api/notes.js
new file mode 100644
index 0000000..4ff24c1
--- /dev/null
+++ b/mini-watch/monitor/next-frontend/api/notes.js
@@ -0,0 +1,42 @@
+let csrfToken = "";
+
+export class ApiError extends Error {
+  constructor(message, status) {
+    super(message);
+    this.name = "ApiError";
+    this.status = status;
+  }
+}
+
+async function request(path, options = {}) {
+  let response;
+  try {
+    response = await fetch(`/api${path}`, {
+      ...options,
+      credentials: "same-origin",
+      cache: "no-store",
+      headers: {
+        ...(options.body ? { "Content-Type": "application/json" } : {}),
+        ...(options.method && options.method !== "GET" ? { "X-CSRF-Token": csrfToken } : {}),
+      },
+    });
+  } catch {
+    throw new ApiError("API에 연결할 수 없습니다. Flask 서버와 연결 설정을 확인해 주세요.", 0);
+  }
+  const data = await response.json().catch(() => null);
+  if (!response.ok) {
+    throw new ApiError(data?.error || "API 요청에 실패했습니다. Flask 서버를 확인해 주세요.", response.status);
+  }
+  if (!data) throw new ApiError("API 응답을 읽을 수 없습니다.", response.status);
+  if (data.csrf_token) csrfToken = data.csrf_token;
+  return data;
+}
+
+export const getSession = () => request("/auth/me");
+export const login = (username, password) => request("/auth/login", { method: "POST", body: JSON.stringify({ username, password }) });
+export const logout = () => request("/auth/logout", { method: "POST" });
+export const listNotes = () => request("/notes");
+export const getNote = (id) => request(`/notes/${id}`);
+export const createNote = (values) => request("/notes", { method: "POST", body: JSON.stringify(values) });
+export const updateNote = (id, values) => request(`/notes/${id}`, { method: "PUT", body: JSON.stringify(values) });
+export const deleteNote = (id) => request(`/notes/${id}`, { method: "DELETE" });
diff --git a/mini-watch/monitor/next-frontend/components/ApiNotes.js b/mini-watch/monitor/next-frontend/components/ApiNotes.js
new file mode 100644
index 0000000..0499685
--- /dev/null
+++ b/mini-watch/monitor/next-frontend/components/ApiNotes.js
@@ -0,0 +1,202 @@
+"use client";
+
+import { useEffect, useRef, useState } from "react";
+import * as api from "../api/notes";
+
+const emptyForm = { title: "", body: "", status: "pending" };
+const statuses = { pending: "확인 전", in_progress: "확인 중", completed: "완료" };
+
+export default function ApiNotes() {
+  const [user, setUser] = useState(null);
+  const [loading, setLoading] = useState(true);
+  const [busy, setBusy] = useState(false);
+  const [credentials, setCredentials] = useState({ username: "", password: "" });
+  const [notes, setNotes] = useState([]);
+  const [selected, setSelected] = useState(null);
+  const [editingId, setEditingId] = useState(null);
+  const [form, setForm] = useState(emptyForm);
+  const [lookupId, setLookupId] = useState("");
+  const [deleting, setDeleting] = useState(null);
+  const [error, setError] = useState("");
+  const [message, setMessage] = useState("");
+  const dialogRef = useRef(null);
+
+  function report(error) {
+    setError(`${error.message}${error.status ? ` (${error.status})` : ""}`);
+    if (error.status === 401) setUser(null);
+  }
+
+  useEffect(() => {
+    let active = true;
+    async function initialize() {
+      try {
+        const session = await api.getSession();
+        if (!active) return;
+        setUser(session.user);
+        if (session.user) {
+          const data = await api.listNotes();
+          if (active) setNotes(data.notes);
+        }
+      } catch (error) {
+        if (active) setError(`${error.message}${error.status ? ` (${error.status})` : ""}`);
+      } finally {
+        if (active) setLoading(false);
+      }
+    }
+    initialize();
+    return () => { active = false; };
+  }, []);
+
+  useEffect(() => {
+    if (deleting) dialogRef.current?.showModal();
+  }, [deleting]);
+
+  function resetForm() {
+    setEditingId(null);
+    setForm(emptyForm);
+  }
+
+  async function refreshNotes() {
+    const data = await api.listNotes();
+    setNotes(data.notes);
+  }
+
+  async function signIn(event) {
+    event.preventDefault();
+    setBusy(true); setError(""); setMessage("");
+    try {
+      await api.getSession();
+      const data = await api.login(credentials.username, credentials.password);
+      setUser(data.user);
+      setCredentials({ username: "", password: "" });
+      await refreshNotes();
+    } catch (error) { report(error); }
+    finally { setBusy(false); }
+  }
+
+  async function signOut() {
+    setBusy(true); setError(""); setMessage("");
+    try {
+      await api.logout();
+      setUser(null); setSelected(null); setNotes([]); resetForm();
+    } catch (error) { report(error); }
+    finally { setBusy(false); }
+  }
+
+  async function selectNote(id) {
+    setBusy(true); setError(""); setMessage("");
+    try {
+      const data = await api.getNote(id);
+      setSelected(data.note);
+      resetForm();
+    } catch (error) { report(error); }
+    finally { setBusy(false); }
+  }
+
+  async function refresh() {
+    setBusy(true); setError(""); setMessage("");
+    try {
+      await refreshNotes();
+      if (selected) {
+        try {
+          const data = await api.getNote(selected.id);
+          setSelected(data.note);
+        } catch (error) {
+          if (error.status === 404) { setSelected(null); resetForm(); }
+          throw error;
+        }
+      }
+      setMessage("최신 메모를 다시 불러왔어요.");
+    } catch (error) { report(error); }
+    finally { setBusy(false); }
+  }
+
+  async function save(event) {
+    event.preventDefault();
+    setBusy(true); setError(""); setMessage("");
+    try {
+      // 서버의 trim/400 검증을 그대로 받아 오류를 표시하며 원본 state는 성공 뒤 갱신합니다.
+      const data = editingId !== null ? await api.updateNote(editingId, form) : await api.createNote(form);
+      setSelected(data.note); resetForm();
+      setMessage("메모를 DB에 저장했어요.");
+      await refreshNotes();
+    } catch (error) { report(error); }
+    finally { setBusy(false); }
+  }
+
+  function startEdit() {
+    setEditingId(selected.id);
+    setForm({ title: selected.title, body: selected.body, status: selected.status });
+    setError(""); setMessage("");
+  }
+
+  function closeDelete() {
+    dialogRef.current?.close();
+    setDeleting(null);
+  }
+
+  async function confirmDelete() {
+    setBusy(true); setError(""); setMessage("");
+    try {
+      await api.deleteNote(deleting.id);
+      if (editingId === deleting.id) resetForm();
+      if (selected?.id === deleting.id) setSelected(null);
+      closeDelete();
+      setMessage("메모를 DB에서 삭제했어요.");
+      await refreshNotes();
+    } catch (error) { closeDelete(); report(error); }
+    finally { setBusy(false); }
+  }
+
+  if (loading) return <p role="status">로그인 상태를 확인하고 있어요…</p>;
+
+  return (
+    <div className="api-notes">
+      {error && <p className="error api-error" role="alert">{error}</p>}
+      <p className="status-message" role="status">{message}</p>
+      {!user ? (
+        <section className="panel api-login" aria-labelledby="api-login-title">
+          <p className="eyebrow">OPERATOR LOGIN</p><h2 id="api-login-title">DB 메모 로그인</h2>
+          <p>기존 감시 서비스의 운영자 계정으로 로그인해 주세요.</p>
+          <form onSubmit={signIn} noValidate>
+            <label htmlFor="api-username">아이디</label><input id="api-username" autoComplete="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
+            <label htmlFor="api-password">비밀번호</label><input id="api-password" type="password" autoComplete="current-password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
+            <button className="button primary" type="submit" disabled={busy}>로그인</button>
+          </form>
+        </section>
+      ) : (
+        <>
+          <div className="api-toolbar"><p><strong>{user.name}</strong> 님의 DB 메모</p><div className="button-row"><button className="button secondary" disabled={busy} onClick={refresh}>DB 목록 새로고침</button><button className="button secondary" disabled={busy} onClick={signOut}>로그아웃</button></div></div>
+          <div className="notes-workspace">
+            <section className="panel editor" aria-labelledby="api-editor-title">
+              <span className="card-index">{editingId !== null ? `EDIT #${editingId}` : "NEW DB NOTE"}</span><h2 id="api-editor-title">{editingId !== null ? "DB 메모 수정" : "새 DB 메모"}</h2>
+              <form onSubmit={save} noValidate>
+                <fieldset disabled={busy}>
+                  <label htmlFor="api-title">제목</label><input id="api-title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
+                  <label htmlFor="api-body">내용</label><textarea id="api-body" value={form.body} rows={6} onChange={(e) => setForm({ ...form, body: e.target.value })} />
+                  <label htmlFor="api-status">처리 상태</label><select id="api-status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>{Object.entries(statuses).map(([value, text]) => <option value={value} key={value}>{text}</option>)}</select>
+                  <div className="button-row"><button className="button primary" type="submit">{editingId !== null ? "DB 수정 저장" : "DB 메모 등록"}</button>{editingId !== null && <button className="button secondary" type="button" onClick={() => { resetForm(); setError(""); setMessage("수정을 취소했어요. DB의 원본은 유지됩니다."); }}>DB 수정 취소</button>}</div>
+                </fieldset>
+              </form><p className="session-hint">이 화면의 메모는 PostgreSQL에 저장됩니다.<br />새로고침하고 다시 조회해도 남아 있어요.</p>
+            </section>
+            <section className="notes-collection" aria-labelledby="api-collection-title">
+              <div className="collection-header"><h2 id="api-collection-title">저장된 DB 메모 <span className="count-badge">{notes.length}</span></h2></div>
+              <form className="lookup-form" onSubmit={(e) => { e.preventDefault(); if (/^[1-9]\d*$/.test(lookupId)) selectNote(lookupId); else setError("메모 번호는 양의 정수로 입력해 주세요."); }}>
+                <label htmlFor="lookup-id">메모 번호</label><input id="lookup-id" inputMode="numeric" value={lookupId} onChange={(e) => setLookupId(e.target.value)} /><button className="button secondary" disabled={busy}>번호로 조회</button>
+              </form>
+              {notes.length === 0 ? <div className="empty-state"><h3>저장된 DB 메모가 없어요.</h3><p>첫 기록을 작성해 보세요.</p></div> : <ul className="notes-list api-note-list">{notes.map((note) => <li className="note-card" key={note.id} data-db-note-id={note.id}><button className="note-title-button" disabled={busy} onClick={() => selectNote(note.id)}>{note.title}</button><div className="note-meta"><span>#{note.id} · {statuses[note.status]}</span></div></li>)}</ul>}
+              {selected && <article className="panel api-detail" aria-labelledby="detail-title" data-selected-note-id={selected.id}>
+                <span className="card-index">DB NOTE #{selected.id} · {statuses[selected.status]}</span><h2 id="detail-title">{selected.title}</h2><p className="note-content">{selected.body}</p>
+                <div className="button-row"><button className="button secondary" disabled={busy} onClick={startEdit}>선택한 DB 메모 수정</button><button className="button secondary" disabled={busy} onClick={() => { setDeleting(selected); setMessage(""); setError(""); }}>선택한 DB 메모 삭제</button></div>
+              </article>}
+            </section>
+          </div>
+        </>
+      )}
+      {deleting && <dialog ref={dialogRef} className="delete-dialog" aria-labelledby="api-delete-title" onCancel={(e) => { e.preventDefault(); if (!busy) closeDelete(); }}>
+        <p className="eyebrow">DELETE DB NOTE #{deleting.id}</p><h2 id="api-delete-title">DB에서 이 메모를 삭제할까요?</h2><blockquote>{deleting.title}</blockquote>
+        <div className="button-row"><button className="button secondary" disabled={busy} autoFocus onClick={closeDelete}>DB 삭제 취소</button><button className="button danger" disabled={busy} onClick={confirmDelete}>DB 삭제 확정</button></div>
+      </dialog>}
+    </div>
+  );
+}
diff --git a/next.config.mjs b/next.config.mjs
index ba21cdd..81193a6 100644
--- a/next.config.mjs
+++ b/next.config.mjs
@@ -1,8 +1,11 @@
 /** @type {import('next').NextConfig} */
 const nextConfig = {
-  /* config options here */
   cacheComponents: true,
   partialPrefetching: true,
+  async rewrites() {
+    const origin = process.env.FLASK_API_ORIGIN || "http://127.0.0.1:5200";
+    return [{ source: "/api/:path*", destination: `${origin}/api/:path*` }];
+  },
 };
 
 export default nextConfig;
diff --git a/scripts/verify_db_api.py b/scripts/verify_db_api.py
new file mode 100644
index 0000000..4ab7112
--- /dev/null
+++ b/scripts/verify_db_api.py
@@ -0,0 +1,133 @@
+"""Real HTTP → Next.js rewrite → Flask → PostgreSQL integration checks.
+
+Creates an isolated temporary operator and notes; preserves existing data.
+"""
+import argparse
+import http.cookiejar
+import json
+from pathlib import Path
+import subprocess
+import sys
+import urllib.error
+import urllib.request
+import uuid
+
+ROOT = Path(__file__).resolve().parents[1]
+BACKEND = ROOT/'mini-watch/monitor/backend'
+sys.path.insert(0, str(BACKEND))
+from db import connect_db
+from werkzeug.security import generate_password_hash
+
+
+def rows():
+    with connect_db() as conn:
+        return conn.execute('SELECT * FROM notes ORDER BY id').fetchall()
+
+
+def write_json(path, value):
+    Path(path).write_text(json.dumps(value,ensure_ascii=False,indent=2,default=str),encoding='utf-8')
+
+
+def new_operator():
+    token = uuid.uuid4().hex
+    username, password = 'next_qa_'+token, uuid.uuid4().hex
+    with connect_db() as conn:
+        user = conn.execute('INSERT INTO users (username,display_name,password_hash) VALUES (%s,%s,%s) RETURNING id',
+                            (username,'Next.js 검증 운영자',generate_password_hash(password))).fetchone()
+    return {'username':username,'password':password,'user_id':user['id'],'token':token,'note_ids':[]}
+
+
+def main():
+    parser=argparse.ArgumentParser(description=__doc__)
+    parser.add_argument('--url',default='http://127.0.0.1:5300')
+    parser.add_argument('--output',default=str(ROOT/'docs/api-integration-validation.json'))
+    parser.add_argument('--prepare-ui')
+    parser.add_argument('--cleanup-ui')
+    args=parser.parse_args()
+    if args.prepare_ui:
+        account=new_operator()
+        account['baseline']=rows()
+        write_json(args.prepare_ui,account)
+        print('Created disposable UI operator; credentials saved only to private local evidence file.')
+        return
+    if args.cleanup_ui:
+        account=json.loads(Path(args.cleanup_ui).read_text(encoding='utf-8'))
+        with connect_db() as conn:
+            for note_id in account['note_ids']:
+                conn.execute('DELETE FROM notes WHERE id=%s',(note_id,))
+            conn.execute('DELETE FROM users WHERE id=%s AND username=%s',(account['user_id'],account['username']))
+        actual=json.loads(json.dumps(rows(),default=str))
+        assert actual == account['baseline'], 'Existing notes changed during UI checks'
+        account['cleaned_up']=True
+        account['password']='removed after test'
+        write_json(args.cleanup_ui,account)
+        print('PASS: disposable operator/notes cleaned up; all original DB rows unchanged.')
+        return
+
+    original=rows()
+    account=new_operator()
+    checks=[]
+    ids=[]
+    opener=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
+    csrf=''
+    def send(method,path,body=None,expected=200,with_csrf=True):
+        nonlocal csrf
+        headers={}
+        if body is not None: headers['Content-Type']='application/json'
+        if method!='GET' and with_csrf: headers['X-CSRF-Token']=csrf
+        request=urllib.request.Request(args.url+'/api'+path,data=json.dumps(body).encode() if body is not None else None,headers=headers,method=method)
+        try:
+            response=opener.open(request,timeout=10)
+        except urllib.error.HTTPError as error:
+            response=error
+        data=json.loads(response.read())
+        assert response.code==expected,(method,path,response.code,data)
+        if 'csrf_token' in data: csrf=data['csrf_token']
+        return data
+    def record(name): checks.append({'name':name,'result':'PASS'}); print('PASS:',name,flush=True)
+    try:
+        send('GET','/notes',expected=401)
+        send('GET','/auth/me')
+        send('POST','/auth/login',{'username':account['username'],'password':account['password']},expected=403,with_csrf=False)
+        send('POST','/auth/login',{'username':' ','password':' '},expected=400)
+        send('POST','/auth/login',{'username':account['username'],'password':'wrong'},expected=401)
+        send('POST','/auth/login',{'username':account['username'],'password':account['password']})
+        record('Next.js proxy login: cookie/CSRF, unauthenticated401, missing CSRF403, blank400, wrong401, login200')
+        before_ids=[n['id'] for n in send('GET','/notes')['notes']]
+        send('POST','/notes',{'title':' ','body':' '},expected=400)
+        assert [n['id'] for n in send('GET','/notes')['notes']]==before_ids
+        record('Blank create400, existing notes preserved')
+        note=send('POST','/notes',{'title':'Next API '+account['token'],'body':'first body','status':'pending'},expected=201)['note']
+        ids.append(note['id']); url='/notes/'+str(note['id'])
+        assert send('GET',url)['note']==note
+        assert note['id'] in [n['id'] for n in send('GET','/notes')['notes']]
+        record('Create201 and real PostgreSQL list/detail GET')
+        send('PUT',url,{'title':note['title'],'body':'  '},expected=400)
+        assert send('GET',url)['note']==note
+        record('Blank update400 preserves body/status/updated_at')
+        updated=send('PUT',url,{'title':note['title']+' updated','body':'updated body','status':'completed'})['note']
+        assert updated['id']==note['id'] and updated['body']=='updated body'
+        assert send('GET',url)['note']==updated
+        code="import json,sys;from db import connect_db;\nwith connect_db() as c:r=c.execute('SELECT id,title,body,status FROM notes WHERE id=%s',(int(sys.argv[1]),)).fetchone()\nprint(json.dumps(r))"
+        persisted=json.loads(subprocess.check_output([sys.executable,'-c',code,str(note['id'])],cwd=BACKEND))
+        assert persisted['body']=='updated body' and persisted['status']=='completed'
+        record('PUT200, same ID, new-process PostgreSQL read preserves edited values')
+        send('DELETE',url)
+        send('GET',url,expected=404)
+        send('PUT',url,{'title':'missing','body':'missing'},expected=404)
+        send('DELETE',url,expected=404)
+        assert note['id'] not in [n['id'] for n in send('GET','/notes')['notes']]
+        record('DELETE200, deleted ID absent on re-query, missing GET/PUT/DELETE404')
+        send('POST','/auth/logout')
+        send('GET','/notes',expected=401)
+        record('Logout and protected API401')
+    finally:
+        with connect_db() as conn:
+            for note_id in ids: conn.execute('DELETE FROM notes WHERE id=%s',(note_id,))
+            conn.execute('DELETE FROM users WHERE id=%s AND username=%s',(account['user_id'],account['username']))
+        assert rows()==original,'Original DB rows changed'
+    record('Only disposable data cleaned up; all existing DB rows preserved')
+    write_json(args.output,{'result':'PASS','url':args.url,'flow':'Next.js → Flask → PostgreSQL','checks':checks})
+
+
+if __name__=='__main__': main()

exit=0
```

### next-practice

```text
> gh pr merge 1 --repo gkacksdnjs22-stack/codemit-next-practice-day05 --merge

exit=0
```

### next-practice

```text
> gh pr view 1 --repo gkacksdnjs22-stack/codemit-next-practice-day05 --json url,state,baseRefName,headRefName,commits,files,mergeCommit
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:46:20Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:46:20Z","messageBody":"","messageHeadline":"Connect Next.js notes to existing Flask API and PostgreSQL","oid":"b0025118787890ca9f2d39e9324486e74fc01dde"}],"files":[{"path":".env.example","additions":2,"deletions":0,"changeType":"ADDED"},{"path":".gitignore","additions":6,"deletions":2,"changeType":"MODIFIED"},{"path":"ASSIGNMENT.md","additions":8,"deletions":1,"changeType":"MODIFIED"},{"path":"GIT_WORK.md","additions":25,"deletions":1,"changeType":"MODIFIED"},{"path":"README.md","additions":84,"deletions":3,"changeType":"MODIFIED"},{"path":"app/api-notes/page.js","additions":16,"deletions":0,"changeType":"ADDED"},{"path":"app/globals.css","additions":18,"deletions":0,"changeType":"MODIFIED"},{"path":"app/layout.js","additions":1,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/advanced-build-output.txt","additions":30,"deletions":0,"changeType":"ADDED"},{"path":"docs/advanced-lint-output.txt","additions":4,"deletions":0,"changeType":"ADDED"},{"path":"docs/advanced-regression-validation.json","additions":9,"deletions":0,"changeType":"ADDED"},{"path":"docs/advanced-start-output.txt","additions":5,"deletions":0,"changeType":"ADDED"},{"path":"docs/api-integration-validation.json","additions":39,"deletions":0,"changeType":"ADDED"},{"path":"docs/api-notes-production.jpg","additions":0,"deletions":0,"changeType":"ADDED"},{"path":"docs/api-ui-validation.json","additions":97,"deletions":0,"changeType":"ADDED"},{"path":"docs/checklist-review.md","additions":8,"deletions":1,"changeType":"MODIFIED"},{"path":"docs/conflict-transcript.md","additions":470,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/.env.example","additions":7,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/app.py","additions":44,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/auth_helpers.py","additions":45,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/db.py","additions":20,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/__init__.py","additions":0,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/events.py","additions":23,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/notes.py","additions":43,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/repositories/users.py","additions":14,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/requirements.txt","additions":3,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/__init__.py","additions":0,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/auth.py","additions":50,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/events.py","additions":26,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/routes/notes.py","additions":53,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/rules.py","additions":35,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/setup_db.py","additions":41,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/sql/create_database.sql","additions":1,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/sql/dashboard.sql","additions":30,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/sql/http_events.sql","additions":8,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/backend/try_event.py","additions":13,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/next-frontend/README.md","additions":13,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/next-frontend/api/notes.js","additions":42,"deletions":0,"changeType":"ADDED"},{"path":"mini-watch/monitor/next-frontend/components/ApiNotes.js","additions":202,"deletions":0,"changeType":"ADDED"},{"path":"next.config.mjs","additions":4,"deletions":1,"changeType":"MODIFIED"},{"path":"scripts/verify_db_api.py","additions":133,"deletions":0,"changeType":"ADDED"}],"headRefName":"codex/next-api-notes","mergeCommit":{"oid":"00a200cf0418123b17779f699ebc8daf98fd2d8c"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05/pull/1"}

exit=0
```

### next-practice

```text
> git switch main
Your branch is up to date with 'origin/main'.
Switched to branch 'main'

exit=0
```

### next-practice

```text
> git pull --ff-only origin main
Updating 2ad5352..00a200c
Fast-forward
 .env.example                                       |   2 +
 .gitignore                                         |   8 +-
 ASSIGNMENT.md                                      |   9 +-
 GIT_WORK.md                                        |  26 +-
 README.md                                          |  87 +++-
 app/api-notes/page.js                              |  16 +
 app/globals.css                                    |  18 +
 app/layout.js                                      |   2 +-
 docs/advanced-build-output.txt                     |  30 ++
 docs/advanced-lint-output.txt                      |   4 +
 docs/advanced-regression-validation.json           |   9 +
 docs/advanced-start-output.txt                     |   5 +
 docs/api-integration-validation.json               |  39 ++
 docs/api-notes-production.jpg                      | Bin 0 -> 68865 bytes
 docs/api-ui-validation.json                        |  97 +++++
 docs/checklist-review.md                           |   9 +-
 docs/conflict-transcript.md                        | 470 +++++++++++++++++++++
 mini-watch/monitor/backend/.env.example            |   7 +
 mini-watch/monitor/backend/app.py                  |  44 ++
 mini-watch/monitor/backend/auth_helpers.py         |  45 ++
 mini-watch/monitor/backend/db.py                   |  20 +
 .../monitor/backend/repositories/__init__.py       |   0
 mini-watch/monitor/backend/repositories/events.py  |  23 +
 mini-watch/monitor/backend/repositories/notes.py   |  43 ++
 mini-watch/monitor/backend/repositories/users.py   |  14 +
 mini-watch/monitor/backend/requirements.txt        |   3 +
 mini-watch/monitor/backend/routes/__init__.py      |   0
 mini-watch/monitor/backend/routes/auth.py          |  50 +++
 mini-watch/monitor/backend/routes/events.py        |  26 ++
 mini-watch/monitor/backend/routes/notes.py         |  53 +++
 mini-watch/monitor/backend/rules.py                |  35 ++
 mini-watch/monitor/backend/setup_db.py             |  41 ++
 mini-watch/monitor/backend/sql/create_database.sql |   1 +
 mini-watch/monitor/backend/sql/dashboard.sql       |  30 ++
 mini-watch/monitor/backend/sql/http_events.sql     |   8 +
 mini-watch/monitor/backend/try_event.py            |  13 +
 mini-watch/monitor/next-frontend/README.md         |  13 +
 mini-watch/monitor/next-frontend/api/notes.js      |  42 ++
 .../monitor/next-frontend/components/ApiNotes.js   | 202 +++++++++
 next.config.mjs                                    |   5 +-
 scripts/verify_db_api.py                           | 133 ++++++
 41 files changed, 1672 insertions(+), 10 deletions(-)
 create mode 100644 .env.example
 create mode 100644 app/api-notes/page.js
 create mode 100644 docs/advanced-build-output.txt
 create mode 100644 docs/advanced-lint-output.txt
 create mode 100644 docs/advanced-regression-validation.json
 create mode 100644 docs/advanced-start-output.txt
 create mode 100644 docs/api-integration-validation.json
 create mode 100644 docs/api-notes-production.jpg
 create mode 100644 docs/api-ui-validation.json
 create mode 100644 docs/conflict-transcript.md
 create mode 100644 mini-watch/monitor/backend/.env.example
 create mode 100644 mini-watch/monitor/backend/app.py
 create mode 100644 mini-watch/monitor/backend/auth_helpers.py
 create mode 100644 mini-watch/monitor/backend/db.py
 create mode 100644 mini-watch/monitor/backend/repositories/__init__.py
 create mode 100644 mini-watch/monitor/backend/repositories/events.py
 create mode 100644 mini-watch/monitor/backend/repositories/notes.py
 create mode 100644 mini-watch/monitor/backend/repositories/users.py
 create mode 100644 mini-watch/monitor/backend/requirements.txt
 create mode 100644 mini-watch/monitor/backend/routes/__init__.py
 create mode 100644 mini-watch/monitor/backend/routes/auth.py
 create mode 100644 mini-watch/monitor/backend/routes/events.py
 create mode 100644 mini-watch/monitor/backend/routes/notes.py
 create mode 100644 mini-watch/monitor/backend/rules.py
 create mode 100644 mini-watch/monitor/backend/setup_db.py
 create mode 100644 mini-watch/monitor/backend/sql/create_database.sql
 create mode 100644 mini-watch/monitor/backend/sql/dashboard.sql
 create mode 100644 mini-watch/monitor/backend/sql/http_events.sql
 create mode 100644 mini-watch/monitor/backend/try_event.py
 create mode 100644 mini-watch/monitor/next-frontend/README.md
 create mode 100644 mini-watch/monitor/next-frontend/api/notes.js
 create mode 100644 mini-watch/monitor/next-frontend/components/ApiNotes.js
 create mode 100644 scripts/verify_db_api.py
From https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05
 * branch            main       -> FETCH_HEAD
   2ad5352..00a200c  main       -> origin/main

exit=0
```

### next-practice

```text
> git log -3 --oneline --graph
*   00a200c Merge pull request #1 from gkacksdnjs22-stack/codex/next-api-notes
|\  
| * b002511 Connect Next.js notes to existing Flask API and PostgreSQL
|/  
* 2ad5352 Record successful clean-clone installation and build

exit=0
```

### next-practice

```text
> git branch -d codex/next-api-notes
Deleted branch codex/next-api-notes (was b002511).

exit=0
```

### next-practice

```text
> git status --short

exit=0
```

### next-practice

```text
> git rev-parse HEAD
00a200cf0418123b17779f699ebc8daf98fd2d8c

exit=0
```

### day05-reproduction

```text
> git pull --ff-only origin main
Updating b1c4476..00a200c
Fast-forward
 .env.example                                       |   2 +
 .gitignore                                         |   8 +-
 ASSIGNMENT.md                                      |   9 +-
 GIT_WORK.md                                        |  26 +-
 README.md                                          |  90 +++-
 app/api-notes/page.js                              |  16 +
 app/globals.css                                    |  18 +
 app/layout.js                                      |   2 +-
 docs/advanced-build-output.txt                     |  30 ++
 docs/advanced-lint-output.txt                      |   4 +
 docs/advanced-regression-validation.json           |   9 +
 docs/advanced-start-output.txt                     |   5 +
 docs/api-integration-validation.json               |  39 ++
 docs/api-notes-production.jpg                      | Bin 0 -> 68865 bytes
 docs/api-ui-validation.json                        |  97 +++++
 docs/checklist-review.md                           |   9 +-
 docs/conflict-transcript.md                        | 470 +++++++++++++++++++++
 docs/reproduction-output.txt                       |  73 ++++
 mini-watch/monitor/backend/.env.example            |   7 +
 mini-watch/monitor/backend/app.py                  |  44 ++
 mini-watch/monitor/backend/auth_helpers.py         |  45 ++
 mini-watch/monitor/backend/db.py                   |  20 +
 .../monitor/backend/repositories/__init__.py       |   0
 mini-watch/monitor/backend/repositories/events.py  |  23 +
 mini-watch/monitor/backend/repositories/notes.py   |  43 ++
 mini-watch/monitor/backend/repositories/users.py   |  14 +
 mini-watch/monitor/backend/requirements.txt        |   3 +
 mini-watch/monitor/backend/routes/__init__.py      |   0
 mini-watch/monitor/backend/routes/auth.py          |  50 +++
 mini-watch/monitor/backend/routes/events.py        |  26 ++
 mini-watch/monitor/backend/routes/notes.py         |  53 +++
 mini-watch/monitor/backend/rules.py                |  35 ++
 mini-watch/monitor/backend/setup_db.py             |  41 ++
 mini-watch/monitor/backend/sql/create_database.sql |   1 +
 mini-watch/monitor/backend/sql/dashboard.sql       |  30 ++
 mini-watch/monitor/backend/sql/http_events.sql     |   8 +
 mini-watch/monitor/backend/try_event.py            |  13 +
 mini-watch/monitor/next-frontend/README.md         |  13 +
 mini-watch/monitor/next-frontend/api/notes.js      |  42 ++
 .../monitor/next-frontend/components/ApiNotes.js   | 202 +++++++++
 next.config.mjs                                    |   5 +-
 scripts/verify_db_api.py                           | 133 ++++++
 42 files changed, 1748 insertions(+), 10 deletions(-)
 create mode 100644 .env.example
 create mode 100644 app/api-notes/page.js
 create mode 100644 docs/advanced-build-output.txt
 create mode 100644 docs/advanced-lint-output.txt
 create mode 100644 docs/advanced-regression-validation.json
 create mode 100644 docs/advanced-start-output.txt
 create mode 100644 docs/api-integration-validation.json
 create mode 100644 docs/api-notes-production.jpg
 create mode 100644 docs/api-ui-validation.json
 create mode 100644 docs/conflict-transcript.md
 create mode 100644 docs/reproduction-output.txt
 create mode 100644 mini-watch/monitor/backend/.env.example
 create mode 100644 mini-watch/monitor/backend/app.py
 create mode 100644 mini-watch/monitor/backend/auth_helpers.py
 create mode 100644 mini-watch/monitor/backend/db.py
 create mode 100644 mini-watch/monitor/backend/repositories/__init__.py
 create mode 100644 mini-watch/monitor/backend/repositories/events.py
 create mode 100644 mini-watch/monitor/backend/repositories/notes.py
 create mode 100644 mini-watch/monitor/backend/repositories/users.py
 create mode 100644 mini-watch/monitor/backend/requirements.txt
 create mode 100644 mini-watch/monitor/backend/routes/__init__.py
 create mode 100644 mini-watch/monitor/backend/routes/auth.py
 create mode 100644 mini-watch/monitor/backend/routes/events.py
 create mode 100644 mini-watch/monitor/backend/routes/notes.py
 create mode 100644 mini-watch/monitor/backend/rules.py
 create mode 100644 mini-watch/monitor/backend/setup_db.py
 create mode 100644 mini-watch/monitor/backend/sql/create_database.sql
 create mode 100644 mini-watch/monitor/backend/sql/dashboard.sql
 create mode 100644 mini-watch/monitor/backend/sql/http_events.sql
 create mode 100644 mini-watch/monitor/backend/try_event.py
 create mode 100644 mini-watch/monitor/next-frontend/README.md
 create mode 100644 mini-watch/monitor/next-frontend/api/notes.js
 create mode 100644 mini-watch/monitor/next-frontend/components/ApiNotes.js
 create mode 100644 scripts/verify_db_api.py
From https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05
 * branch            main       -> FETCH_HEAD
   b1c4476..00a200c  main       -> origin/main

exit=0
```

### day05-reproduction

```text
> git rev-parse HEAD
00a200cf0418123b17779f699ebc8daf98fd2d8c

exit=0
```
