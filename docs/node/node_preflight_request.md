---
sidebar_position: 8
id: node_preflight_request
title: 什麼是 Preflight Request ?
tags:
- Node.js
- Express.js
---

#### 前端在 Call API 時，明明只有向後端提出一次請求，但打開使用開發者工具查看 Network 執行紀錄時，有時候會發現有兩筆紀錄：
- Options API（不是我們提出的請求）
- 前端提出的請求


---
## 什麼情況不會有 Preflight Request？

- `GET` 請求


---

## 什麼情況會出現 Preflight Request？
- 前後端網址位於不同 Domain 上，且前端提出的請求是在（）情況之外，瀏覽器會先 Call **Options API** 向 後端確認 是否允許接收請求。
    - 可以：才送前端提出的請求給到後端。
    - 不可以：回傳錯誤訊息。


*延伸：網址的 Domain Name*


---

## 參考資源