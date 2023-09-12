---
sidebar_position: 6
id: node_cors
title: CORS
tags:
- Node.js
- cors
---

### 同源 === 網址擁有相同的 Protocol, Domain Name, Port

```
https://www.example.com
https://www.example.com/about
https://www.example.com/cartsInfo
```

```
https://www.example.com      // https 默認 port 即為：443
https://www.example.com:443
```

### 不同源 === 網址擁有不同的 Protocol, Domain Name, Port

- **不同的 Protocol**
```
http://www.exampleA.com
https://www.exampleA.com
```

- **不同的 Domain Name**
```
https://www.exampleA.com
https://www.exampleB.com
https://www.exampleC.com/about
https://www.exampleD.com/cartsInfo
```

- **不同的 Port**
```
https://www.exampleA.com:8080
https://www.exampleA.com:8082
```

---

## What is cross-origin issue ?
如果網頁上所有資料都可以接受不同來源的情況，變成任何人可以隨意存取想要的資訊，造成安全疑慮。


- CORS: Cross-Origin Resource Sharing

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

## 不受同源影響，網頁上也可以有不同來源的資訊


---

## DOM 同源 與 Cookie 同源



---
## 參考資源
- [NodeJS CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/nodejs-cors-guide-what-it-is-and-how-to-enable-it/)
