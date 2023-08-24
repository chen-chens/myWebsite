---
sidebar_position: 4
---

# 多人團隊協作 GitHub
*紀錄協作專案時會用到的執行步驟。*

### (一) 組長在 GitHub 上建立一個 repository，並在Setting/Collaborators 加入協作成員。
### (二) 組員 Clone 到本地端，建立一分支去寫 code。

**分支名稱大致規範參考**
- 開發: dev/feature(功能)/細項
- 測試: test/功能/細項
- 正式: prod/功能/細項
- 一個 `/` 代表一資料夾的概念，所有名稱不能有空白鍵。

### (三) 組員把本地更新內容 push 到 remote 端。
- `git status`
- `git add .`
- `git commit -m "..."`
- `git push <遠端repository> <本地分支名稱>:<遠端分支名稱>`

**在 remote 端可以看到，push 到 remote 端 的所有分支。**
![remote 端 的所有分支](../../static/img/docs/git/git_branch_status.png)

### (四) 如果要將分支內容合併到某分支，要進行 New pull request (PR)
**在合併到主要分支前，可能會有另一個組員幫忙進行 code review**

- 發 PR 的組員要確保自己的 code 已合併最新 `origin/main`，且已檢查功能測試正常，發 PR 後 GitHub 自動檢測正常。（有問題要先自行修正好。）
- 如果有寫單元測試，自動化測試先跑過。
- 請組員幫忙 code review，沒問題才會點擊確認合併。
    - code review 的那方，如果想要拉到本地端執行檢查：
    - `git pull`: 將遠端最新資料合併到本地端，等於執行 `git fetch` + `git merge`。
    - `git fetch`: 將遠端最新資料放到自動建立的新分支上。
    - `git merge`: 在當前分支合併其他分支內容，`git merge <其他分支>`。

    **有時候只是想確認遠端數據庫的內容卻不是真的想合併，在這種情況下，請使用 `git fetch`，檢查完再 遠端點擊確認 PR 合併**

- 如果更新內容需要重新部署，記得更新(或設定自動部署)。

:::note git fetch 檢查
假設我要檢查某組員的PR:

1. 在本地執行: `git fetch origin <組員發PR的分支>`
2. 在本地執行: `git checkout <組員發PR的分支>`
3. 檢查沒問題，遠端點擊確認合併PR。
4. `git fetch origin main(或指定分支)`
5. 因為 `git fetch` 不會自動合併內容，git graph 本地main 與 遠端main(`origin/main`) 位置不一樣。
6. `git rebase origin/main` : 本地main 更新同 遠端main(`origin/main`)，再接著開分支下去開發。
:::

---

### `git merge` 與 `git rebase` 差異？
**兩者皆用於合併分支commits，差別在於合併後的紀錄差異。**

|git command |相同          |相異|
|--          |--            |--|
|`git merge` |合併分支commits|詳實紀錄分支內容與建立、合併時間。|
|`git rebase`|合併分支commits|看不出來哪些commits來自分支，分支建立、合併時間也不清楚。|

#### `git merge`
![git merge](../../static/img/docs/git/git_merge_diagram.png)
[圖片來源](https://www.edureka.co/blog/git-rebase-vs-merge/#What-is-Merging?)

#### `git rebase`
![git rebase](../../static/img/docs/git/git_rebase_diagram.png)
[圖片來源](https://www.edureka.co/blog/git-rebase-vs-merge/#What-is-Merging?)

---

### Commit 內容發生衝突的情況

*成員Ａ與成員Ｂ同時修改相同內容，各自發PR，檢查時發生 git conflicts*

#### 方法一：組長檢查完其中一個 PR 並 merge 到 主要分支，另外一個 PR 點擊取消，請組員先與最新主要分支內容比較，解完衝突再發PR。
#### 方法二：組長檢查完其中一個 PR 並 merge 到 主要分支，另外一個 PR 點擊取消，組長來解第二個 PR 衝突，解完組長自己發 PR 自己 merge。
- 組長 `git fetch origin <組員分支Ａ>`
- 組長 `git fetch origin <組員分支Ｂ>`
- 組長 `git checkout origin/<組員分支Ａ>`，沒問題遠端合併PR，再將主分支更新內容拉到本地端，確保本地遠端內容一致。
- 組長 `git checkout origin/<組員分支Ｂ>`，先合併目前主要分支內容 `git rebase main`(或 `origin/main`，只要本地遠端內容一致)，顯示衝突。
- 組長 解衝突，先 `git add .` 把更新內容建立索引。
- 組長 `git rebase --continue` 讓剛剛合併需求繼續執行。
- 回來看 git graph，會發現 `origin/<組員分支Ｂ>` 已解決衝突並合併到 本地 main 的位置。
- 把本地 main 推到遠端，發PR，確認PR，`origin/<組員分支Ｂ>` 就會合併到 `origin/main`。
