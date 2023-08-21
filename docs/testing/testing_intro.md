---
sidebar_position: 1
id: testing_intro
title: Testing Concept
tags:
- Testing
---

## 為什麼要做測試？
- 為自己寫的程式碼負責，確保隨時更新上線的內容不會突然出狀況。
- 為長期維護打根基，確保之後重構不會引發慘劇。
- 節省幫你 code review 的夥伴負擔，可以聚焦在每次的進度推進。


:::note
    就算使用自動化測試，也無法涵蓋所有情境。
    但能確保目前已知問題可以被解決。
:::


單元測試：由小到大：函式 --> 組件 --> 頁面
E2E測 (End-to-End Testing)：範圍廣，涵蓋前端到後端。


- 前端常用測試技術：Jest

- 後端常用測試技術：Mocha