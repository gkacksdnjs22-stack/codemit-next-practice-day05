# Next.js 메모 앱과 Git 브랜치 협업 완성하기

원문: https://classroom.codemit.kr/classes/5/problems/50/submit
확인: 2026-10-08 (한국 시간)

## 필수 체크리스트 20개

1. 같은 GitHub 저장소를 두 폴더에 clone하고 같은 origin을 사용한 기록.
2. 각 폴더에서 자기 작업 브랜치와 서로 다른 파일의 수정·커밋.
3. main/작업 브랜치 전환 차이와 main에서 작업 브랜치를 로컬 merge한 방향 설명.
4. 각 작업 브랜치를 push하고 base main인 PR 두 개 생성.
5. PR 제출 후 같은 브랜치의 보완 커밋이 기존 PR에 반영.
6. 두 PR의 Files changed를 검토하고 Create a merge commit으로 병합.
7. 병합 후 두 폴더의 main에서 pull하고 두 사람의 파일 확인.
8. 최신 main에서 새 작업 브랜치·세 번째 PR·검토·병합·양쪽 pull·완료 브랜치 정리.
9. create-next-app JavaScript/App Router 프로젝트 실행과 Next.js/React 관계 설명.
10. page.js/layout.js로 홈·메모·공통 화면 구현과 역할 설명.
11. Next.js Link로 홈/메모 이동.
12. use client/useState Counter의 증가·초기화와 Client Component 필요 이유.
13. 메모 배열 map 렌더링과 고유 ID key.
14. state 입력과 고유 ID 메모 등록.
15. 기존 내용 표시, ID에 따른 수정, 취소 시 원본 보존.
16. 삭제 확인/취소, 선택한 ID만 삭제, 수정 대상 삭제 시 폼 초기화.
17. 빈 값/공백 등록·수정 거절, 안내와 기존 메모 보존.
18. 빈 목록 안내, 새로고침 시 state 초기화와 DB 저장 차이 설명.
19. npm run build/start 실행과 프로덕션 홈/메모 동작 검증 기록.
20. 소스/README/GIT_WORK.md로 설치·Git·PR·실제 결과 검토 가능.

## 범위

필수 앱은 브라우저 state만 사용하며 새로고침하면 초기 메모로 돌아온다.
기존 React/Flask/PostgreSQL 과제와 별도 프로젝트로 구성한다.
Git 실습은 한 계정으로 민수/지윤 역할을 나누며, 별도 계정의 Approve는 필요 없다.
원격 PR 검토와 실제 출력은 GIT_WORK.md와 docs/git-transcript.md에 남긴다.
선택 과제(충돌 해결/앱 PR/API 연결)도 이번 보완 범위에 포함한다.

## 선택 심화 체크리스트

21. 같은 줄 충돌을 작업 브랜치에서 해결하고 같은 PR에 반영, 병합·양쪽 pull과 선택 이유 기록.
22. Next.js의 실제 수정 작업을 새 작업 브랜치·PR·변경 검토·병합·pull로 진행.
23. 기존 Flask·PostgreSQL 메모 API의 목록·상세·등록을 Next.js에 연결하고 새로고침 유지 확인.
24. 수정·삭제 API 연결, 취소·400/404 오류 안내, 새로고침 후 DB 결과 유지 확인.
