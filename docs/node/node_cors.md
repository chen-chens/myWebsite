---
sidebar_position: 6
id: node_cors
title: CORS
tags:
- Node.js
- cors
---

## What is cross-origin issue ?
### Domain name

---

## How to use `cors` to solve cross-origin problem ?


:::note

What is Cross-Origin Resource Sharing (CORS)?
Cross-Origin Resource Sharing (CORS) is a security protocol in modern browsers that allows or restricts resources from being shared between different origins, depending on which origin initiated the HTTP request.

:::

---

### `cors()` 預設內容
```js
  Access-Control-Allow-Origin: *                                 // 可以接受任何來源的請求
  Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE   // 可以接受的請求有哪些
  Access-Control-Allow-Headers: Content-Type, Authorization      // 可以接受的請求 Headers
```


---
## 參考資源
- [NodeJS CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/nodejs-cors-guide-what-it-is-and-how-to-enable-it/)
