# 기존 Flask·PostgreSQL API를 사용하는 Next.js 화면

이 폴더의 `components/ApiNotes.js`와 `api/notes.js`를 루트 Next.js 프로젝트의
`app/api-notes/page.js`에서 연결합니다. 설치·빌드·서버를 하나로 공유하고
`/notes`의 필수 state 앱과 `/api-notes`의 DB 앱을 함께 실행합니다.

루트에서 `npm ci`, `npm run dev` 또는 `npm run build`/`npm run start`로 실행합니다.
별도 프론트엔드 패키지를 설치할 필요가 없습니다.
Flask 준비는 루트 README의 DB 메모 실행 순서를 따릅니다.

요청은 Next.js rewrites를 거쳐 Flask에 전달됩니다. 로그인 세션은 HttpOnly 쿠키로 유지하고
POST/PUT/DELETE에는 Flask가 발급한 X-CSRF-Token을 전달합니다.
목록 GET, 상세 GET, 등록 POST, 수정 PUT, 삭제 DELETE를 모두 실제 기존 API로 처리합니다.
