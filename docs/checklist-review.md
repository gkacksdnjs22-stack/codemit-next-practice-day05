# 제출 전 체크리스트 검토

2026-10-08, [원문](https://classroom.codemit.kr/classes/5/problems/50/submit)의 필수 20개와 대조했습니다.
필수 20/20을 아래 근거로 확인했습니다. 실제 강의실 채점과 별개인 제출 전 검토입니다.

| 번호 | 필수 항목 | 결과와 근거 |
|---|---|---|
| 1 | 두 clone/같은 origin | PASS — git-transcript.md의 clone/remote -v |
| 2 | 각 브랜치/다른 파일 커밋 | PASS — feature/minsu·feature/jiyun, minsu.md·jiyun.md |
| 3 | 전환 차이/로컬 merge 방향 | PASS — ls-tree 차이, main에서 merge, GIT_WORK 답변 |
| 4 | push/main base PR 2개 | PASS — 원본 PR #1/#2와 JSON |
| 5 | PR 이후 보완 커밋 | PASS — #1 b13169c 뒤 f663a93, 최종 2커밋 |
| 6 | diff 검토/merge commit | PASS — gh pr diff, --merge, 두 부모 SHA 증빙 |
| 7 | 초기 PR 후 양쪽 main pull | PASS — 양쪽 eaa9f29 수신·두 파일 확인 |
| 8 | 다음 PR/양쪽 pull/브랜치 정리 | PASS — #3, 양쪽 93b0e48, branch -d 결과 |
| 9 | create-next-app JS/App Router/관계 | PASS — 공식 생성·기본 화면 실행·README 설명 |
| 10 | page/layout/역할 | PASS — app/layout.js·page.js·notes/page.js와 역할표 |
| 11 | Link 이동 | PASS — 공통 nav·홈 링크, 프로덕션 양방향 이동 |
| 12 | Client Counter/state/증가·초기화 | PASS — Counter.js, 0→2→0 검증, README 이유 |
| 13 | map/ID key | PASS — note.id key, 중복 내용의 다른 ID 확인 |
| 14 | state 입력/고유 ID 등록 | PASS — controlled textarea와 UUID 등록 검증 |
| 15 | 기존 값/ID 수정/취소 | PASS — 동일 ID만 수정, 다른 중복 메모 보존, 취소 검증 |
| 16 | 삭제 확인/취소/폼 초기화 | PASS — dialog, 선택 ID만 삭제, 수정 대상 삭제 시 초기화 |
| 17 | 빈/공백 거절/원본 보존 | PASS — trim/alert, 등록·수정 실패 시 ID/내용 유지 |
| 18 | 빈 안내/state와 DB 구분 | PASS — 전체 삭제 안내·reload 초기 2개 복원·README 설명 |
| 19 | build/start/실제 화면 | PASS — 빌드·시작 출력, 프로덕션 UI 17항목 PASS |
| 20 | 소스/README/GIT_WORK | PASS — lock·설치 순서·원본 PR·실제 출력/화면 |

필수 state 앱은 API/DB 없이 실행됩니다. 별도의 /api-notes 화면으로 아래 심화를 추가했습니다.

| 번호 | 선택 심화 | 결과와 근거 |
|---|---|---|
| 21 | 같은 줄 충돌 해결·같은 PR·병합·양쪽 pull·이유 | PASS — Git 실습 PR #4/#5 Merged, conflict-transcript.md의 실제 충돌·해결·양쪽576b376 |
| 22 | Next.js 실제 변경 브랜치·PR·검토·병합·pull | 진행 중 — codex/next-api-notes에서 구현/검증 완료, PR 병합 후 최종 기록 추가 |
| 23 | 기존 Flask DB 목록·상세·등록·새로고침 유지 | PASS — 기존 API/SQL 포함, 실제 프록시/DB 통합8개·브라우저18개 검증 |
| 24 | 수정·삭제·취소·오류·새로고침 후 DB 유지 | PASS — PUT/DELETE200, 취소 보존, 공백400·없는 ID404·실패 안내, 서버 재실행 후 수정 유지 |
