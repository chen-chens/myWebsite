---
sidebar_position: 3
---

# 狀況題
*紀錄曾經的犯錯，還是有辦法重新來過。*

## (一) 執行 `git add`，但是後悔想返回
** `git add` 只存在本地端，還沒 `push` 上遠端都好解決。**
```

```
---

## (二) 執行 `git commit`，但是後悔想返回
### 在本地端，還沒上遠端的情況

<details>
  <summary><strong>(2-1) 修改最後一次 本地 <code>commit</code> :</strong></summary>
  <ul>
    <li>首先，要先找到： 目前位置、想要退回的 `commit id`</li>
    <li>再來，下指令告知退回的 `commit id`</li>
  </ul>

</details>

<details>
  <summary><strong>(2-2) 修改其中一次 本地 <code>commit</code> :</strong></summary>
  <ul>
    <li></li>
    <li></li>
  </ul>

</details>


### 已經上遠端的情況：

<details>
  <summary><strong>(2-3) 修改最後一次 遠端 <code>commit</code> :</strong></summary>
  <ul>
    <li>專案只有自己在做的情況: 我會直接在本地端更新好`commit`，然後 `push` 強迫遠端更新目前版本。</li>
    <li>專案還有其他協作的情況:</li>
  </ul>

</details>

<details>
  <summary><strong>(2-4) 修改其中一次 遠端 <code>commit</code> :</strong></summary>
  <ul>
    <li>專案只有自己在做的情況:</li>
    <li>專案還有其他協作的情況:</li>
  </ul>

</details>

---

## (三) 要切換 `branch`，但更新資料還沒有 `git add` `git commit`
:::info 還好，`git`本身會做出提醒不讓切換：
```
    error: Your local changes to the following files would be overwritten by checkout:
    docs/git/git_intro.md
    Please commit your changes or stash them before you switch branches.
```
**只要好好把目前分支更新內容好好完成步驟： `git add` `git commit`，再 `git branch 其他分支` 即可。**
:::
---
## (四) `git reset`、`git rebase` 差在哪裡？


---
## (五) `git log`、`git reflog` 差在哪裡？

<details>
  <summary><strong>git log</strong></summary>

    ```
        git log // 查看目前分支 commit 歷史紀錄：不包含其他分支、退回 commit 紀錄
        q       // 跳出 git log
    ```

回傳訊息參考
![cmd 顯示 git log](../../static/img/docs/git/git_problemRecord_git_log_cmd.png)

對應 source tree 顯示
![source tree 顯示 git log](../../static/img/docs/git/git_problemRecord_git_log.png)

</details>

<details>
  <summary><strong> git reflog：只顯示 本地端</strong></summary>

    ```
        git reflog  // 查看
        q           // 跳出 git log
    ```

    回傳訊息
    ```
        6996574 (HEAD -> master) HEAD@{0}: commit: [v0.1.2] - add Tech Docs/Git & Github/Github
        f1206c6 (origin/master) HEAD@{1}: commit: [v0.1.1] - finish Tech Docs/Git & Github/Git
        e6eb481 (test) HEAD@{2}: merge test: Fast-forward
    ```

對應 Sourcetree 顯示
![source tree 顯示 git reflog](../../static/img/docs/git/git_problemRecord_git_reflog_sourceTree.png)

</details>