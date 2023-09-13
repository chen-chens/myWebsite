---
sidebar_position: 7
id: node_libraries
title: 紀錄後端專案依賴標配
tags:
- Node.js
- Express.js
---

### 常用配置

|名稱            |用途|連結|
|--             |--|--|
|`express`      |Express.js 啟用 WEB 應用程序。|[GitHub](https://github.com/expressjs/express)|
|`dotenv`       |環境變數，用來保存敏感資訊，不會把該資訊曝露在 GitHub 等 公共空間。或者切換開發環境使用。|[GitHub](https://github.com/motdotla/dotenv)|
|`body-parser`  |用來解析 HTTP請求中 夾帶數據的 middleware，包含解析表單數據 `application/x-www-form-urlencoded` 和 `multipart/form-data`。|[GitHub](https://github.com/expressjs/body-parser)|
|`cookie-parser`|用來解析與取得cookie 傳遞資訊。|[GitHub](https://github.com/expressjs/cookie-parser)|
|`nodemon`      |方便開發修改時，Node.js 即時更新內容，不用每次修改都要重新執行檔案。|[GitHub](https://github.com/remy/nodemon)|
|`morgan`       |紀錄 HTTP 請求的 middleware。|[GitHub](https://github.com/expressjs/morgan)|
|`cors`         |處理**跨域**資源共享，允许不同域(host)的 client-side 访问 server。|[GitHub](https://github.com/expressjs/cors)|
|`uuid`         |提供 unique id 的小幫手。|[GitHub](https://github.com/uuidjs/uuid#readme)|
|`crypto-js`    |加解密使用。|[GitHub](https://github.com/brix/crypto-js)|
|`cross-env`    |確保不同平台執行環境變數一致性。|[GitHub](https://github.com/kentcdodds/cross-env)|
|--|--|--|

---

### TypeScript 配置

|名稱          |用途|連結|
|--           |--|--|
|`typescript` |加強 JS 弱型別特性。|[GitHub](https://github.com/Microsoft/TypeScript)|
|`ts-node`    |開發時，允許直接使用 TypeScript文件執行，不用先編譯成 JS檔 才執行。|[GitHub](https://github.com/TypeStrong/ts-node)|
|`ts-node-dev`|像是 nodemon 的 TypeScript版本，不用先編譯成 JS檔 才執行。|[GitHub](https://github.com/wclr/ts-node-dev)|
|--           |--|--|
|--           |--|--|
|--           |--|--|

**筆記：如果專案內執行 `tsc --init` 無法成功，可以嘗試 `npx tsc --init` 建立`tsconfig.json`。**

---

### Eslint/Prettier 配置


