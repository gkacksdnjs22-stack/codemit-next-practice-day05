# Git 실습 실제 명령 출력

2026-10-08 Asia/Seoul. 한 계정으로 두 역할을 수행했다.

### `dist\day05-git-seed`

```text
> git init -b main
Initialized empty Git repository in C:/Users/User/OneDrive/문서/ChatGPT/코드밋/dist/day05-git-seed/.git/

exit=0
```

### `dist\day05-git-seed`

```text
> git add README.md

exit=0
```

### `dist\day05-git-seed`

```text
> git commit -m "Initialize GitHub Flow exercise"
[main (root-commit) a364f31] Initialize GitHub Flow exercise
 1 file changed, 3 insertions(+)
 create mode 100644 README.md

exit=0
```

### `dist\day05-git-seed`

```text
> gh repo create gkacksdnjs22-stack/codemit-git-practice-day05 --public --source . --remote origin --push --description "Codemit day05: two clones and three merged PRs"
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
branch 'main' set up to track 'origin/main'.
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
 * [new branch]      HEAD -> main

exit=0
```

### `.`

```text
> git clone https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git git-practice-minsu
Cloning into 'git-practice-minsu'...

exit=0
```

### `git-practice-minsu`

```text
> git remote -v
origin	https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git (fetch)
origin	https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git (push)

exit=0
```

### `git-practice-minsu`

```text
> git switch -c feature/minsu
Switched to a new branch 'feature/minsu'

exit=0
```

### `git-practice-minsu`

```text
> git add minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git commit -m "Add minsu practice note"
[feature/minsu b13169c] Add minsu practice note
 1 file changed, 3 insertions(+)
 create mode 100644 minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git ls-tree --name-only HEAD
README.md
minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git switch main
Your branch is up to date with 'origin/main'.
Switched to branch 'main'

exit=0
```

### `git-practice-minsu`

```text
> git ls-tree --name-only HEAD
README.md

exit=0
```

### `git-practice-minsu`

```text
> git diff --stat main feature/minsu
 minsu.md | 3 +++
 1 file changed, 3 insertions(+)

exit=0
```

### `git-practice-minsu`

```text
> git merge feature/minsu
Updating a364f31..b13169c
Fast-forward
 minsu.md | 3 +++
 1 file changed, 3 insertions(+)
 create mode 100644 minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git ls-tree --name-only HEAD
README.md
minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git switch feature/minsu
Switched to branch 'feature/minsu'

exit=0
```

### `git-practice-minsu`

```text
> git push -u origin feature/minsu
branch 'feature/minsu' set up to track 'origin/feature/minsu'.
remote: 
remote: Create a pull request for 'feature/minsu' on GitHub by visiting:        
remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/feature/minsu        
remote: 
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
 * [new branch]      feature/minsu -> feature/minsu

exit=0
```

### `git-practice-minsu`

```text
> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head feature/minsu --title "Add minsu practice note" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-minsu.md
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/1

exit=0
```

### `.`

```text
> git clone https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git git-practice-jiyun
Cloning into 'git-practice-jiyun'...

exit=0
```

### `git-practice-jiyun`

```text
> git remote -v
origin	https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git (fetch)
origin	https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git (push)

exit=0
```

### `git-practice-jiyun`

```text
> git switch -c feature/jiyun
Switched to a new branch 'feature/jiyun'

exit=0
```

### `git-practice-jiyun`

```text
> git add jiyun.md

exit=0
```

### `git-practice-jiyun`

```text
> git commit -m "Add jiyun practice note"
[feature/jiyun 04440dc] Add jiyun practice note
 1 file changed, 3 insertions(+)
 create mode 100644 jiyun.md

exit=0
```

### `git-practice-jiyun`

```text
> git ls-tree --name-only HEAD
README.md
jiyun.md

exit=0
```

### `git-practice-jiyun`

```text
> git switch main
Your branch is up to date with 'origin/main'.
Switched to branch 'main'

exit=0
```

### `git-practice-jiyun`

```text
> git ls-tree --name-only HEAD
README.md

exit=0
```

### `git-practice-jiyun`

```text
> git diff --stat main feature/jiyun
 jiyun.md | 3 +++
 1 file changed, 3 insertions(+)

exit=0
```

### `git-practice-jiyun`

```text
> git merge feature/jiyun
Updating a364f31..04440dc
Fast-forward
 jiyun.md | 3 +++
 1 file changed, 3 insertions(+)
 create mode 100644 jiyun.md

exit=0
```

### `git-practice-jiyun`

```text
> git ls-tree --name-only HEAD
README.md
jiyun.md

exit=0
```

### `git-practice-jiyun`

```text
> git switch feature/jiyun
Switched to branch 'feature/jiyun'

exit=0
```

### `git-practice-jiyun`

```text
> git push -u origin feature/jiyun
branch 'feature/jiyun' set up to track 'origin/feature/jiyun'.
remote: 
remote: Create a pull request for 'feature/jiyun' on GitHub by visiting:        
remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/feature/jiyun        
remote: 
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
 * [new branch]      feature/jiyun -> feature/jiyun

exit=0
```

### `git-practice-jiyun`

```text
> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head feature/jiyun --title "Add jiyun practice note" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-jiyun.md
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/2

exit=0
```

### `git-practice-minsu`

```text
> git add minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git commit -m "Clarify local and remote main after opening PR"
[feature/minsu f663a93] Clarify local and remote main after opening PR
 1 file changed, 2 insertions(+)

exit=0
```

### `git-practice-minsu`

```text
> git push
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
   b13169c..f663a93  feature/minsu -> feature/minsu

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 1 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,state,commits,files
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:17:14Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:17:14Z","messageBody":"","messageHeadline":"Add minsu practice note","oid":"b13169cd1977bbfd916e89ba6a4995cc05a45c47"}],"files":[{"path":"minsu.md","additions":3,"deletions":0,"changeType":"ADDED"}],"headRefName":"feature/minsu","state":"OPEN","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/1"}

exit=0
```

### `git-practice-minsu`

```text
> gh pr diff 1 --repo gkacksdnjs22-stack/codemit-git-practice-day05
diff --git a/minsu.md b/minsu.md
new file mode 100644
index 0000000..f535457
--- /dev/null
+++ b/minsu.md
@@ -0,0 +1,5 @@
+# 민수의 작업
+
+작업 브랜치에서 자기 파일을 작성하고 PR로 main에 공유합니다.
+
+PR을 연 뒤 같은 브랜치에 보완 커밋을 추가했습니다. 로컬 main과 원격 main은 별도로 갱신됩니다.

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 2 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,state,commits,files
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:17:20Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:17:20Z","messageBody":"","messageHeadline":"Add jiyun practice note","oid":"04440dcaa71e507596775dabf0df9a3b660b8b37"}],"files":[{"path":"jiyun.md","additions":3,"deletions":0,"changeType":"ADDED"}],"headRefName":"feature/jiyun","state":"OPEN","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/2"}

exit=0
```

### `git-practice-minsu`

```text
> gh pr diff 2 --repo gkacksdnjs22-stack/codemit-git-practice-day05
diff --git a/jiyun.md b/jiyun.md
new file mode 100644
index 0000000..f86a2fd
--- /dev/null
+++ b/jiyun.md
@@ -0,0 +1,3 @@
+# 지윤의 작업
+
+작업 브랜치에서 자기 파일을 작성하고 PR로 main에 공유합니다.

exit=0
```

### `git-practice-minsu`

```text
> gh pr merge 1 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 1 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,state,mergeCommit,commits,files
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:17:14Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:17:14Z","messageBody":"","messageHeadline":"Add minsu practice note","oid":"b13169cd1977bbfd916e89ba6a4995cc05a45c47"},{"authoredDate":"2026-10-08T07:17:26Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:17:26Z","messageBody":"","messageHeadline":"Clarify local and remote main after opening PR","oid":"f663a93b19097ccb811f97bd98c0810b2ee75320"}],"files":[{"path":"minsu.md","additions":5,"deletions":0,"changeType":"ADDED"}],"headRefName":"feature/minsu","mergeCommit":{"oid":"09d87604f20e16c204a5107b2b95b6156e747aa0"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/1"}

exit=0
```

### `git-practice-minsu`

```text
> gh pr merge 2 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 2 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,state,mergeCommit,commits,files
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:17:20Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:17:20Z","messageBody":"","messageHeadline":"Add jiyun practice note","oid":"04440dcaa71e507596775dabf0df9a3b660b8b37"}],"files":[{"path":"jiyun.md","additions":3,"deletions":0,"changeType":"ADDED"}],"headRefName":"feature/jiyun","mergeCommit":{"oid":"eaa9f29fdf38923cee9bfefeea442d2349bdba8e"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/2"}

exit=0
```

### `git-practice-minsu`

```text
> git switch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
Switched to branch 'main'

exit=0
```

### `git-practice-minsu`

```text
> git pull --ff-only origin main
Updating b13169c..eaa9f29
Fast-forward
 jiyun.md | 3 +++
 minsu.md | 2 ++
 2 files changed, 5 insertions(+)
 create mode 100644 jiyun.md
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD
   a364f31..eaa9f29  main       -> origin/main

exit=0
```

### `git-practice-minsu`

```text
> git ls-tree --name-only HEAD
README.md
jiyun.md
minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git log --oneline --graph -8
*   eaa9f29 Merge pull request #2 from gkacksdnjs22-stack/feature/jiyun
|\  
| * 04440dc Add jiyun practice note
* |   09d8760 Merge pull request #1 from gkacksdnjs22-stack/feature/minsu
|\ \  
| |/  
|/|   
| * f663a93 Clarify local and remote main after opening PR
| * b13169c Add minsu practice note
|/  
* a364f31 Initialize GitHub Flow exercise

exit=0
```

### `git-practice-jiyun`

```text
> git switch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
Switched to branch 'main'

exit=0
```

### `git-practice-jiyun`

```text
> git pull --ff-only origin main
Updating 04440dc..eaa9f29
Fast-forward
 minsu.md | 5 +++++
 1 file changed, 5 insertions(+)
 create mode 100644 minsu.md
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD
   a364f31..eaa9f29  main       -> origin/main

exit=0
```

### `git-practice-jiyun`

```text
> git ls-tree --name-only HEAD
README.md
jiyun.md
minsu.md

exit=0
```

### `git-practice-jiyun`

```text
> git log --oneline --graph -8
*   eaa9f29 Merge pull request #2 from gkacksdnjs22-stack/feature/jiyun
|\  
| * 04440dc Add jiyun practice note
* |   09d8760 Merge pull request #1 from gkacksdnjs22-stack/feature/minsu
|\ \  
| |/  
|/|   
| * f663a93 Clarify local and remote main after opening PR
| * b13169c Add minsu practice note
|/  
* a364f31 Initialize GitHub Flow exercise

exit=0
```

### `git-practice-jiyun`

```text
> git switch -c feature/checklist
Switched to a new branch 'feature/checklist'

exit=0
```

### `git-practice-jiyun`

```text
> git add CHECKLIST.md

exit=0
```

### `git-practice-jiyun`

```text
> git commit -m "Add collaboration checklist from updated main"
[feature/checklist d92a7cd] Add collaboration checklist from updated main
 1 file changed, 6 insertions(+)
 create mode 100644 CHECKLIST.md

exit=0
```

### `git-practice-jiyun`

```text
> git push -u origin feature/checklist
branch 'feature/checklist' set up to track 'origin/feature/checklist'.
remote: 
remote: Create a pull request for 'feature/checklist' on GitHub by visiting:        
remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/feature/checklist        
remote: 
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
 * [new branch]      feature/checklist -> feature/checklist

exit=0
```

### `git-practice-jiyun`

```text
> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head feature/checklist --title "Add collaboration checklist" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-checklist.md
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/3

exit=0
```

### `git-practice-jiyun`

```text
> gh pr diff 3 --repo gkacksdnjs22-stack/codemit-git-practice-day05
diff --git a/CHECKLIST.md b/CHECKLIST.md
new file mode 100644
index 0000000..ca65fe3
--- /dev/null
+++ b/CHECKLIST.md
@@ -0,0 +1,6 @@
+# 협업 점검표
+
+- [x] 민수와 지윤의 파일을 두 폴더에서 확인
+- [x] PR 두 개의 변경 파일을 검토하고 merge commit으로 병합
+- [x] 최신 main에서 다음 작업 브랜치를 시작
+- [x] 세 번째 PR 병합 뒤 양쪽 main에서 pull하고 완료 브랜치 정리

exit=0
```

### `git-practice-jiyun`

```text
> gh pr merge 3 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge

exit=0
```

### `git-practice-jiyun`

```text
> gh pr view 3 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,state,mergeCommit,commits,files
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:18:04Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:18:04Z","messageBody":"","messageHeadline":"Add collaboration checklist from updated main","oid":"d92a7cd51fe8ddd1b60f66debe18ad6440662ce1"}],"files":[{"path":"CHECKLIST.md","additions":6,"deletions":0,"changeType":"ADDED"}],"headRefName":"feature/checklist","mergeCommit":{"oid":"93b0e486e4b524076d75262399f5138e97d76655"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/3"}

exit=0
```

### `git-practice-minsu`

```text
> git switch main
Your branch is up to date with 'origin/main'.
Already on 'main'

exit=0
```

### `git-practice-minsu`

```text
> git pull --ff-only origin main
Updating eaa9f29..93b0e48
Fast-forward
 CHECKLIST.md | 6 ++++++
 1 file changed, 6 insertions(+)
 create mode 100644 CHECKLIST.md
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD
   eaa9f29..93b0e48  main       -> origin/main

exit=0
```

### `git-practice-minsu`

```text
> git ls-tree --name-only HEAD
CHECKLIST.md
README.md
jiyun.md
minsu.md

exit=0
```

### `git-practice-minsu`

```text
> git branch -d feature/minsu
Deleted branch feature/minsu (was f663a93).

exit=0
```

### `git-practice-minsu`

```text
> git branch -vv
* main 93b0e48 [origin/main] Merge pull request #3 from gkacksdnjs22-stack/feature/checklist

exit=0
```

### `git-practice-minsu`

```text
> git status --short

exit=0
```

### `git-practice-minsu`

```text
> git rev-parse HEAD
93b0e486e4b524076d75262399f5138e97d76655

exit=0
```

### `git-practice-jiyun`

```text
> git switch main
Your branch is up to date with 'origin/main'.
Switched to branch 'main'

exit=0
```

### `git-practice-jiyun`

```text
> git pull --ff-only origin main
Updating eaa9f29..93b0e48
Fast-forward
 CHECKLIST.md | 6 ++++++
 1 file changed, 6 insertions(+)
 create mode 100644 CHECKLIST.md
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD
   eaa9f29..93b0e48  main       -> origin/main

exit=0
```

### `git-practice-jiyun`

```text
> git ls-tree --name-only HEAD
CHECKLIST.md
README.md
jiyun.md
minsu.md

exit=0
```

### `git-practice-jiyun`

```text
> git branch -d feature/jiyun
Deleted branch feature/jiyun (was 04440dc).

exit=0
```

### `git-practice-jiyun`

```text
> git branch -d feature/checklist
Deleted branch feature/checklist (was d92a7cd).

exit=0
```

### `git-practice-jiyun`

```text
> git branch -vv
* main 93b0e48 [origin/main] Merge pull request #3 from gkacksdnjs22-stack/feature/checklist

exit=0
```

### `git-practice-jiyun`

```text
> git status --short

exit=0
```

### `git-practice-jiyun`

```text
> git rev-parse HEAD
93b0e486e4b524076d75262399f5138e97d76655

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 1 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json mergeCommit --jq .mergeCommit.oid
09d87604f20e16c204a5107b2b95b6156e747aa0

exit=0
```

### `git-practice-minsu`

```text
> git show -s --format=%H%n%P%n%s 09d87604f20e16c204a5107b2b95b6156e747aa0
09d87604f20e16c204a5107b2b95b6156e747aa0
a364f31a04b744e69b408b49bf322826acb16308 f663a93b19097ccb811f97bd98c0810b2ee75320
Merge pull request #1 from gkacksdnjs22-stack/feature/minsu

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 2 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json mergeCommit --jq .mergeCommit.oid
eaa9f29fdf38923cee9bfefeea442d2349bdba8e

exit=0
```

### `git-practice-minsu`

```text
> git show -s --format=%H%n%P%n%s eaa9f29fdf38923cee9bfefeea442d2349bdba8e
eaa9f29fdf38923cee9bfefeea442d2349bdba8e
09d87604f20e16c204a5107b2b95b6156e747aa0 04440dcaa71e507596775dabf0df9a3b660b8b37
Merge pull request #2 from gkacksdnjs22-stack/feature/jiyun

exit=0
```

### `git-practice-minsu`

```text
> gh pr view 3 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json mergeCommit --jq .mergeCommit.oid
93b0e486e4b524076d75262399f5138e97d76655

exit=0
```

### `git-practice-minsu`

```text
> git show -s --format=%H%n%P%n%s 93b0e486e4b524076d75262399f5138e97d76655
93b0e486e4b524076d75262399f5138e97d76655
eaa9f29fdf38923cee9bfefeea442d2349bdba8e d92a7cd51fe8ddd1b60f66debe18ad6440662ce1
Merge pull request #3 from gkacksdnjs22-stack/feature/checklist

exit=0
```
