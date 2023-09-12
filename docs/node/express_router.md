---
sidebar_position: 9
id: express_router
title: Router
tags:
- Node.js
- Express.js
- Router
---

*紀錄 Router 常見規範 與 Express 應用*

## 路徑：


---

## Params

### 何時會用到 Params ?
#### 網頁路徑非固定的情況。
#### express 提供 `/:OOO` 的寫法，讓我們取得動態的頁面路徑 `req.params`。

- 使用情境：使用者基本資料頁
- 網頁路徑：`/user/Joanna/1234`

```js
const express = require("express");
const app = express();

app.get("/user/:name/:id", (req, res) => {
    const {name, id} = req.params;
    console.log(req.params); // {name: "Joanna", id: 1234}
    console.log(name, id);   // Joanna, 1234
})
```

---

## Query
### 何時會用到 Query ?
#### 網頁路徑，加上特定條件 的情況。
#### express 取得頁面條件 `req.query`。

- 使用情境：查詢前10筆，名字為Joanna 的使用者資料。
- 網頁路徑：`/users?limit=10&name=Joanna`


```js
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
    const {name, limit} = req.query;
    console.log(req.query); // {name: "Joanna", limit: 10}
    console.log(name, limit);   // Joanna, 10
})
```

---

## Router
### 何時會用到 Router ?
#### 當頁面越來越複雜，想要依據不同頁面路徑做分類分流管理 code。
#### express 提供 `Router()` 方法。

- 使用情境：分流 使用者 與 產品 頁面。
- 網頁路徑：
    - 使用者 頁面：
        - `/users/info`
        - `/users/carts`
        - `/users/setting`
    - 產品 頁面：
        - `/products`
        - `/products/info/:name/:id`
        - `/products/trends`


```js title="app.js"
const express = requires("express");

// 引用 routes 內的管裡路徑位置
const userRoutes = requires("/routes/users");
const productRoutes = requires("/routes/products");

const app = express();

// 引入 對應的 prefix routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

```

```js title="routes/users/index.js"
const express = requires("express");

// 引用 Express 提供的 Router 方法
const router = express.Router();

// /users 以下的路由管理
router.get("/info", (req, res) => {});
router.get("/carts", (req, res) => {});
router.get("/setting", (req, res) => {});

// 匯出路由
module.export(router);
```

```js title="routes/products/index.js"
const express = requires("express");
const router = express.Router();

router.get("/", (req, res) => {});
router.get("/info/:name/:id", (req, res) => {});
router.get("/trends", (req, res) => {});

module.export(router);

```
