# 같은 줄의 충돌 해결 실제 출력
2026-10-08 Asia/Seoul

### git-practice-minsu

```text
> git switch main
Your branch is up to date with 'origin/main'.
Already on 'main'

exit=0
```

### git-practice-minsu

```text
> git pull --ff-only origin main
Already up to date.
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD

exit=0
```

### git-practice-minsu

```text
> git switch -c codex/title-minsu
Switched to a new branch 'codex/title-minsu'

exit=0
```

### git-practice-minsu

```text
> git add README.md

exit=0
```

### git-practice-minsu

```text
> git commit -m "Refine exercise title in git-practice-minsu"
[codex/title-minsu 6fdca10] Refine exercise title in git-practice-minsu
 1 file changed, 1 insertion(+), 1 deletion(-)

exit=0
```

### git-practice-minsu

```text
> git push -u origin codex/title-minsu
branch 'codex/title-minsu' set up to track 'origin/codex/title-minsu'.
remote: 
remote: Create a pull request for 'codex/title-minsu' on GitHub by visiting:        
remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/codex/title-minsu        
remote: 
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
 * [new branch]      codex/title-minsu -> codex/title-minsu

exit=0
```

### git-practice-minsu

```text
> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head codex/title-minsu --title "Refine title: git-practice-minsu" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-git-practice-minsu-title.md
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/4

exit=0
```

### git-practice-jiyun

```text
> git switch main
Your branch is up to date with 'origin/main'.
Already on 'main'

exit=0
```

### git-practice-jiyun

```text
> git pull --ff-only origin main
Already up to date.
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD

exit=0
```

### git-practice-jiyun

```text
> git switch -c codex/title-jiyun
Switched to a new branch 'codex/title-jiyun'

exit=0
```

### git-practice-jiyun

```text
> git add README.md

exit=0
```

### git-practice-jiyun

```text
> git commit -m "Refine exercise title in git-practice-jiyun"
[codex/title-jiyun b4f7d82] Refine exercise title in git-practice-jiyun
 1 file changed, 1 insertion(+), 1 deletion(-)

exit=0
```

### git-practice-jiyun

```text
> git push -u origin codex/title-jiyun
branch 'codex/title-jiyun' set up to track 'origin/codex/title-jiyun'.
remote: 
remote: Create a pull request for 'codex/title-jiyun' on GitHub by visiting:        
remote:      https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/new/codex/title-jiyun        
remote: 
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
 * [new branch]      codex/title-jiyun -> codex/title-jiyun

exit=0
```

### git-practice-jiyun

```text
> gh pr create --repo gkacksdnjs22-stack/codemit-git-practice-day05 --base main --head codex/title-jiyun --title "Refine title: git-practice-jiyun" --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-git-practice-jiyun-title.md
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5

exit=0
```

### git-practice-minsu

```text
> gh pr diff 4 --repo gkacksdnjs22-stack/codemit-git-practice-day05
diff --git a/README.md b/README.md
index 703364b..2d64f2f 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,3 @@
-# GitHub Flow 실습
+# GitHub Flow 협업 기록
 
 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-minsu

```text
> gh pr diff 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05
diff --git a/README.md b/README.md
index 703364b..e5ce26a 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,3 @@
-# GitHub Flow 실습
+# GitHub Flow 실습 노트
 
 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-minsu

```text
> gh pr merge 4 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge

exit=0
```

### git-practice-jiyun

```text
> git fetch origin
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * [new branch]      codex/title-minsu -> origin/codex/title-minsu
   b13169c..f663a93  feature/minsu     -> origin/feature/minsu
   93b0e48..998fb3f  main              -> origin/main

exit=0
```

### git-practice-jiyun

```text
> git merge origin/main
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.

exit=1
```

### git-practice-jiyun

```text
> git status --short
UU README.md

exit=0
```

### git-practice-jiyun

```text
> git diff -- README.md
diff --cc README.md
index e5ce26a,2d64f2f..0000000
--- a/README.md
+++ b/README.md
@@@ -1,3 -1,3 +1,7 @@@
++<<<<<<< HEAD
 +# GitHub Flow 실습 노트
++=======
+ # GitHub Flow 협업 기록
++>>>>>>> origin/main
  
  한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-jiyun

```text
> git add README.md

exit=0
```

### git-practice-jiyun

```text
> git diff --cached -- README.md
diff --git a/README.md b/README.md
index e5ce26a..7606a92 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,3 @@
-# GitHub Flow 실습 노트
+# GitHub Flow 협업 실습 기록
 
 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-jiyun

```text
> git commit -m "Resolve title conflict by preserving collaboration and practice intent"
[codex/title-jiyun 69f8707] Resolve title conflict by preserving collaboration and practice intent

exit=0
```

### git-practice-jiyun

```text
> git push
To https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05.git
   b4f7d82..69f8707  codex/title-jiyun -> codex/title-jiyun

exit=0
```

### git-practice-jiyun

```text
> gh pr edit 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --body-file C:\Users\User\OneDrive\문서\ChatGPT\코드밋\dist\day05-pr-conflict-resolution.md
https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5

exit=0
```

### git-practice-jiyun

```text
> gh pr diff 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05
diff --git a/README.md b/README.md
index 2d64f2f..7606a92 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,3 @@
-# GitHub Flow 협업 기록
+# GitHub Flow 협업 실습 기록
 
 한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-jiyun

```text
> gh pr view 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,baseRefName,headRefName,commits,files,state
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:35:37Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:35:37Z","messageBody":"","messageHeadline":"Refine exercise title in git-practice-jiyun","oid":"b4f7d821f024d3e39876a1e958df8cfb7eae4a58"},{"authoredDate":"2026-10-08T07:37:51Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:37:51Z","messageBody":"","messageHeadline":"Resolve title conflict by preserving collaboration and practice intent","oid":"69f87071011424248b687c30abb3fbff92bf3a74"}],"files":[{"path":"README.md","additions":1,"deletions":1,"changeType":"MODIFIED"}],"headRefName":"codex/title-jiyun","state":"OPEN","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5"}

exit=0
```

### git-practice-jiyun

```text
> gh pr merge 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --merge

exit=0
```

### git-practice-minsu

```text
> git switch main
Your branch is up to date with 'origin/main'.
Switched to branch 'main'

exit=0
```

### git-practice-minsu

```text
> git pull --ff-only origin main
Updating 93b0e48..576b376
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD
   93b0e48..576b376  main       -> origin/main

exit=0
```

### git-practice-minsu

```text
> git show HEAD:README.md
# GitHub Flow 협업 실습 기록

한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-minsu

```text
> git branch -d codex/title-minsu
Deleted branch codex/title-minsu (was 6fdca10).

exit=0
```

### git-practice-minsu

```text
> git status --short

exit=0
```

### git-practice-minsu

```text
> git rev-parse HEAD
576b37611f78bff1df13fdba67ee3696a9e04df0

exit=0
```

### git-practice-jiyun

```text
> git switch main
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
Switched to branch 'main'

exit=0
```

### git-practice-jiyun

```text
> git pull --ff-only origin main
Updating 93b0e48..576b376
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
From https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05
 * branch            main       -> FETCH_HEAD
   998fb3f..576b376  main       -> origin/main

exit=0
```

### git-practice-jiyun

```text
> git show HEAD:README.md
# GitHub Flow 협업 실습 기록

한 계정으로 민수와 지윤 역할을 나누어 브랜치·PR·병합·pull을 확인합니다.

exit=0
```

### git-practice-jiyun

```text
> git branch -d codex/title-jiyun
Deleted branch codex/title-jiyun (was 69f8707).

exit=0
```

### git-practice-jiyun

```text
> git status --short

exit=0
```

### git-practice-jiyun

```text
> git rev-parse HEAD
576b37611f78bff1df13fdba67ee3696a9e04df0

exit=0
```

### git-practice-minsu

```text
> gh pr view 4 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,state,baseRefName,headRefName,commits,files,mergeCommit
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:35:30Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:35:30Z","messageBody":"","messageHeadline":"Refine exercise title in git-practice-minsu","oid":"6fdca1001e8b4ef9d6e1520d3ed3f32d5bf509de"}],"files":[{"path":"README.md","additions":1,"deletions":1,"changeType":"MODIFIED"}],"headRefName":"codex/title-minsu","mergeCommit":{"oid":"998fb3f5ce80f885af189fb07fbcab9a6868accb"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/4"}

exit=0
```

### git-practice-minsu

```text
> gh pr view 5 --repo gkacksdnjs22-stack/codemit-git-practice-day05 --json url,state,baseRefName,headRefName,commits,files,mergeCommit
{"baseRefName":"main","commits":[{"authoredDate":"2026-10-08T07:35:37Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:35:37Z","messageBody":"","messageHeadline":"Refine exercise title in git-practice-jiyun","oid":"b4f7d821f024d3e39876a1e958df8cfb7eae4a58"},{"authoredDate":"2026-10-08T07:37:51Z","authors":[{"email":"gkacksdnjs22@gmail.com","id":"U_kgDOEzGisA","login":"gkacksdnjs22-stack","name":"ham chanwon"}],"committedDate":"2026-10-08T07:37:51Z","messageBody":"","messageHeadline":"Resolve title conflict by preserving collaboration and practice intent","oid":"69f87071011424248b687c30abb3fbff92bf3a74"}],"files":[{"path":"README.md","additions":1,"deletions":1,"changeType":"MODIFIED"}],"headRefName":"codex/title-jiyun","mergeCommit":{"oid":"576b37611f78bff1df13fdba67ee3696a9e04df0"},"state":"MERGED","url":"https://github.com/gkacksdnjs22-stack/codemit-git-practice-day05/pull/5"}

exit=0
```
