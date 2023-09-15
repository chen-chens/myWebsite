---
  sidebar_position: 23
  id: record_jwt_login
  title: JWT Log In
  tags:
    - Node.js
    - token
    - jwt
---

*使用 JWT token 進行驗證使用者身份。*

## 步驟藍圖

註冊步驟藍圖：
1. 前端 送出註冊會員請求(帳號、密碼) 至 後端。
2. 後端 使用 `jwt` 套件，產生一組 token，至資料庫建立使用者資料，並回傳結果給前端。
    - token 內容：混夾 JWT基本資訊＋後端環境變數(salt)＋使用者密碼。


驗證身份步驟藍圖：
1. 前端 送出請求，在 Header 中夾帶 `{"Authorization": "Bearer <token>"}`
2. 後端透過前端的token，使用 `jwt` 加上後端環境變數(salt) 去解碼 使用者身份
3. 拿使用者身份去資料庫比對，有無這個身份，以及權限。

---

## 實作

