---
  sidebar_position: 22
  id: record_token
  title: Where to get or set token ?
  tags:
    - Node.js
    - token
    - jwt
---

1. 每次 call API 在 Request Header 存 `token` (只有前端可以做)

```js
{ "Authorization" : "Bearer <token>"}
```

- 優點：
- 缺點：

---

2. 將 `token` 存在 `cookie`

```js title="後端寫法"

const token = jwt.sign(<payload>, SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE_IN! })

res.cookie(TOKEN_NAME, token, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
});

```

- 優點：前後端都可以存取。
- 缺點：Cookie 容易受到 CSRF 攻擊，因為它會在每次請求中自動附加到頭部。。


https://community.render.com/t/cookie-doesnt-send-to-browser/10136