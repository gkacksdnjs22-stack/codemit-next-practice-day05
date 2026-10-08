# Git 작업 기록

2026-10-08 (Asia/Seoul), 한 PC/한 GitHub 계정으로 민수·지윤 역할을 나누었습니다.
별도 계정의 Approve는 사용하지 않았습니다. 검토 결과는 각 PR 본문에도 적었습니다.
전체 실제 명령 출력은 [git-transcript.md](docs/git-transcript.md)에 보존했습니다.

## 저장소와 clone

- 실습 저장소: https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
- 민수 폴더: git-practice-minsu
- 지윤 폴더: git-practice-jiyun
- 두 폴더 origin(fetch/push): https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
- 앱 제출 저장소: https://github.com/gkacksdnjs22-stack/codemit-next-practice-day05

Git 실습과 앱은 별도 저장소이며 기록과 링크로 연결했습니다. 기존 과제 저장소의 이력은 변경하지 않았습니다.

## PR 세 개

| PR | base ← 작업 브랜치 | 변경 파일/커밋 | 최종 상태/병합 커밋 |
|---|---|---|---|
| [#1 민수](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/1) | main ← feature/minsu | minsu.md, b13169c 최초, PR 생성 후 f663a93 보완 | Merged / 09d87604f20e16c204a5107b2b95b6156e747aa0 |
| [#2 지윤](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/2) | main ← feature/jiyun | jiyun.md, 04440dc | Merged / eaa9f29fdf38923cee9bfefeea442d2349bdba8e |
| [#3 점검표](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/3) | main ← feature/checklist | CHECKLIST.md, 최신 main에서 d92a7cd | Merged / 93b0e486e4b524076d75262399f5138e97d76655 |

Files changed와 같은 원격 diff를 gh pr diff로 읽었습니다. #1은 민수 파일에 로컬/원격 main 구분을
보완했고 #2는 지윤 파일만 추가했습니다. #3은 기존 두 파일을 보존하며 점검표만 추가했습니다.
모두 `gh pr merge --merge`(GitHub의 Create a merge commit)로 병합했습니다.
`git show -s --format=%H%n%P%n%s`에서 각 병합 커밋의 부모가 두 개임을 확인했습니다.

## 브랜치 전환과 로컬 merge

각 폴더의 main에서 feature/minsu 또는 feature/jiyun을 만들고 자기 파일을 작성·커밋했습니다.
작업 브랜치의 `git ls-tree --name-only HEAD`에는 README와 자기 파일이 보였고,
`git switch main` 후에는 README만 보였습니다. `git diff --stat main feature/minsu`는
`minsu.md | 3 +++`, 지윤 쪽은 `jiyun.md | 3 +++`였습니다.

민수 폴더의 **main에서** `git merge feature/minsu`를 실행하여 main이 a364f31→b13169c로
fast-forward했습니다. 지윤 폴더의 **main에서** `git merge feature/jiyun`으로 a364f31→04440dc가 됐습니다.
main이 변경을 받는 방향입니다. 각자 작업 브랜치로 돌아가 push하고 base main인 PR을 만들었습니다.
로컬 main을 원격에 push하지 않고 원격 공유는 PR 병합으로 수행했습니다.

민수 PR을 연 뒤 같은 feature/minsu에서 f663a93 보완 커밋과 push를 진행했습니다.
#1 최종 JSON에는 b13169c/f663a93 두 커밋과 minsu.md 5줄 추가가 있습니다.
push 직후 첫 JSON은 갱신 전 값이었지만 같은 시점 diff는 5줄이며 최종 조회에서 두 커밋을 확인했습니다.
원본 실제 출력은 수정하지 않았습니다.

## 두 초기 PR 뒤 양쪽 pull

각 폴더에서 `git switch main`, `git pull --ff-only origin main`, `git ls-tree --name-only HEAD`를 실행했습니다.

- 민수: Updating b13169c..eaa9f29, jiyun.md와 minsu.md 보완 수신.
- 지윤: Updating 04440dc..eaa9f29, minsu.md 수신.
- 양쪽 파일: README.md, jiyun.md, minsu.md.

## 다음 PR과 정리

지윤 폴더의 최신 main eaa9f29에서 feature/checklist를 새로 만들었습니다.
CHECKLIST.md 작성·커밋·push·PR #3·diff 검토·merge commit 병합 후 양쪽 main에서 pull했습니다.
양쪽 실제 결과는 Updating eaa9f29..93b0e48, CHECKLIST.md 6줄 추가입니다.
민수 폴더에서는 `git branch -d feature/minsu`, 지윤 폴더에서는
`git branch -d feature/jiyun`과 `git branch -d feature/checklist`로 완료한 자기 브랜치를 정리했습니다.
강제 -D 없이 병합 완료 로컬 브랜치만 삭제했습니다. 원격 브랜치는 PR 증빙용으로 보존했습니다.

필수 실습 단계 종료 시 두 폴더의 실제 결과:

```text
> git branch -vv
* main 93b0e48 [origin/main] Merge pull request #3 from gkacksdnjs22-stack/feature/checklist
> git rev-parse HEAD
93b0e486e4b524076d75262399f5138e97d76655
> git ls-tree --name-only HEAD
CHECKLIST.md
README.md
jiyun.md
minsu.md
> git status --short
```

status 출력은 비어 있으며 두 작업 폴더가 깨끗합니다.

## 질문 답변

**main에서 git merge feature/minsu를 실행하면 어느 브랜치가 변경을 받는가?**
현재 체크아웃한 main이 feature/minsu의 변경을 받습니다. 이번 로컬 실습은 main이 작업 커밋을
따라가는 fast-forward였으며 feature/minsu를 main의 내용으로 덮어쓰는 방향이 아닙니다.

**GitHub에서 PR을 병합한 뒤에도 각 폴더에서 pull해야 하는 이유는 무엇인가?**
PR 병합은 원격 origin/main을 갱신하며 각 로컬 폴더는 자동 갱신되지 않습니다.
각 폴더에서 pull해야 상대 파일과 병합 커밋을 받아 다음 작업을 최신 main에서 시작할 수 있습니다.

## 심화 1 — 같은 줄 충돌 해결

[실제 명령/충돌 표시/해결 커밋/양쪽 pull 출력](docs/conflict-transcript.md)을 추가했습니다.

- [PR #4](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/4): 민수 폴더의 codex/title-minsu에서 README.md 첫 줄을 `# GitHub Flow 협업 기록`으로 변경. 커밋 6fdca10, 먼저 merge commit으로 병합.
- [PR #5](https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5): 같은 원본 main에서 지윤의 codex/title-jiyun이 같은 줄을 `# GitHub Flow 실습 노트`로 변경. 최초 커밋 b4f7d82.
- #4 병합 후 **codex/title-jiyun 작업 브랜치에서** git fetch origin과 git merge origin/main을 실행하여 실제 README.md 내용 충돌 및 UU 상태를 확인.
- 최종 제목은 `# GitHub Flow 협업 실습 기록`. 민수의 협업 목적과 지윤의 실습 기록 목적을 모두 담고 본문은 보존하기 위해 선택.
- 충돌 표시를 제거하고 해결 커밋 69f8707을 같은 브랜치에 push하여 **기존 PR #5**에 반영. PR 본문에도 이유와 검토 결과를 기록.
- #5를 merge commit으로 병합하고 두 폴더 main에서 pull. 두 폴더에서 최종 제목을 직접 출력하여 동일함을 확인하고 자기 완료 브랜치를 git branch -d로 정리.

최종 두 clone의 main은 모두 `576b37611f78bff1df13fdba67ee3696a9e04df0`입니다.
#4 merge commit은 998fb3f5ce80f885af189fb07fbcab9a6868accb,
#5 merge commit은 576b37611f78bff1df13fdba67ee3696a9e04df0이며 두 PR 모두 Merged입니다.

## 심화 2 — Next.js 실제 변경 브랜치

앱 저장소의 최신 main에서 `codex/next-api-notes`를 만들고 DB 메모 화면과 API 연결을 구현했습니다.
실제 변경 파일은 app/api-notes/page.js, app/layout.js, app/globals.css, next.config.mjs,
mini-watch/monitor/next-frontend/components/ApiNotes.js, api/notes.js와 기존 Flask 백엔드 소스입니다.
프로덕션의 등록·상세·수정·삭제 및 오류/취소/저장 유지 검증은
docs/api-ui-validation.json과 docs/api-integration-validation.json에 기록했습니다.
PR 생성·검토·병합·pull의 실제 결과는 이어서 기록합니다.
