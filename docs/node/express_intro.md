---
sidebar_position: 3
id: express_intro
title: What is Express ?
tags:
- Node.js
- Express.js
- middleware
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

@Response methods


#### Javascript based.
- 針對 Node.js 的 輕量 web 應用框架，用來處理： 
  - API 建置(HTTP request、server response)
  - manage routing
  - error handling
  - sessions ?
  - [What is Express.js ?](https://www.besanttechnologies.com/what-is-expressjs)

---
## Express 解決什麼問題?
#### Node 建置 HTTP server 時需要繁瑣且重複的程式碼，而Express 簡化了這些流程。

Node vs Express

<Tabs>
  <TabItem value="Node" label="Node"> 

```js title="server_Node_version.js"
  const http = require("http");
  const url = require("url");

  // create server
  http.createServer((request, response) => {
    const resUrlData = url.parse(request.url, true);
    const pathName = resUrlData.pathname;

    // (一) handle 404 error page
    const handleError = () => {
      ...
    }

    // (二) parse path
    if(pathName === "/"){
      ...
      response.end();
    }else if(pathName === "/commits"){
      ...
      response.end();
    }else if(pathName === "/user"){
      ...
      response.end();
    }

    // (三) server listening 
  }).listen(5000, ()=> {
    console.log("Sever is running....");
  })
```
  </TabItem>

  <TabItem value="Express" label="Express" default>   

  ```js title="server_Express_version.js"
    const express = require("express");  // 引入 express
    const app = express();               // 建立 express instance。接下來，我們就可以使用express提供的方法了！

    app.HTTP METHOD(PATH, HANDLER);
    app.get("/", (req, res) => {...});
    /**
      * HTTP METHOD: get, post, put, delete
      * PATH: 連結到 server上的路徑，可以是 字串 或 正則表達式
      * HANDLER: 當符合 HTTP METHOD 與 PATH 條件時，執行 function 動作。（middleware function）
    */

    app.listen(5000, () => {
      console.log("Sever is running....");
    })
  ```
  </TabItem>
</Tabs>


---
## Routing 寫法
#### 陣列函式寫法：
```js
  app.HTTP METHOD(
    PATH, 
    (req, res, next) => { next() }, 
    (req, res, next) => {}, 
    ...
  );
```
:::info 使用 HANDLER 第三個參數 `next()`
  要接續多個 HANDLER(middleWare)，一定要使用 `next()`。
  否則，執行不會往下傳遞。
:::

#### 陣列函式寫法：
```js
  const func1 = (req, res, next) => { 
    next(); 
  }
  const func2 = (req, res, next) => { 
    next(); 
  }
  const func3 = (req, res, next) => { 
    next(); 
  }
  app.HTTP METHOD(PATH, [func1, func2, func3]);
```

### app.route()
#### 解決什麼樣的問題？
針對相同的 PATH 可能使用不同的 HTTP METHOD。為了精簡程式碼、避免重複寫PATH，我們可以使用 `app.route(PATH)` 將
所有HTTP METHOD串接起來：
```js
  app.route("/about")
  .get((req, res) => {
      ...
  })
  .post((req, res) => {
      ...
  })
  .put((req, res) => {
      ...
  })
  .delete((req, res) => {
      ...
  })
```
---
### express.Router()
- Express.js 4.0 有加入一個新的 Router 功能。
- [express app和router的区别](https://segmentfault.com/q/1010000010447804)
#### 解決什麼樣的問題？
以往 router多的時候，檔案會變的龐大且複雜，像是這樣：
```js title="setting.js" 
  const express = require("express");
  const app = express();

  /* --- setting --- */
  router.get("/setting/changePassword", (req, res)=> {
    res.send("Setting want to changePassword.")
  })
  router.put("/setting/customizedTheme", (req, res)=> {
    res.send("Setting want to customizedTheme.")
  })

  /* --- account --- */
  router.get("/account/accountQuery", (req, res)=> {
    res.send("Setting want to changePassword.")
  })
  router.put("/account/accountMain/123456", (req, res)=> {
    res.send("Setting want to customizedTheme.")
  })
  ...
```

#### 加入 express.Router()寫法，為 PATH 作分流管理：
```js title="setting.js" 
  const express = require("express");
  const router = express.Router(); // 引用方法

  router.get("/changePassword", (req, res)=> {
    res.send("Setting want to changePassword.")
  })

  router.get("/customizedTheme", (req, res)=> {
    res.send("Setting want to customizedTheme.")
  })

  module.export = router; // 匯出 router
```

```js title="server.js" 
  const express = require("express");
  const app = express();

  const setting = require("./setting"); // 引入資料夾位置為 "./setting" 內的 router
  app.use('/setting', setting);         // 當路徑開頭為 '/setting'，交給引入的 router 處理
```

結構圖：
```
  ├── server.js  : PATH 符合 "/setting" 開頭，指向 資料夾路徑 "./setting"
  │
  └── setting.js : 管理 PATH 為 "/setting/****" 的 所有routing
```



---
## What is middleWare？
- 什麼是 MiddleWare ?
  - 在兩軟體之間做溝通橋樑的角色。
  - 是一 function，基礎參數接收: (1) request object (2) response object (3) next funciton
![MiddleWare](https://www.ictshore.com/wp-content/uploads/2020/01/sfw0005-01-what_is_middleware.svg)
[圖片來源](https://www.ictshore.com/software-design/what-is-middleware-software/)


:::note 情境
1. 我到外送平台點餐。
2. 我是顧客 >>>>>>>>>>>>> <br/>
   點餐： <br/>
    └──「今晚，我想來點 麥當當大麥克。」<br/>
    ------------------------------------------------------------------------------>> 外送平台
3. 我是顧客 <<<<<<<<<<<<< <br/>
   確認： <br/>
    ├──(1)點餐內容 <br/>
    ├──(2)運費 <br/>
    └──(3)付費方式：LINE Pay... <br/>
    <<------------------------------------------------------------------------------- 外送平台
4. 外送平台 >>>>>>>>>>>>> <br/>
   處理： <br/>
    ├──(1)告知餐廳 ------------------------------------------------------------>> Server 1 <br/>
    ├──(2)運費計算 ------------------------------------------------------------>> Server 2 <br/>
    ├──(3)聯繫 LINE 公司處理付費 --------------------------------------------->> Server 3 <br/>
    └──(4)搜尋司機 ------------------------------------------------------------>> Server 4 <br/>
                      
5. 外送平台 <<<<<<<<<<<<< <br/>
   進度： <br/>
    ├──(1)點餐成功，花費時間：15 min <<----------------------------------------- Server 1 <br/>
    ├──(2)運費計算: 100 NT <<---------------------------------------------------- Server 2 <br/>
    ├──(3)LINE Pay: OK <<-------------------------------------------------------- Server 3 <br/>
    └──(4)指派司機: OK <<-------------------------------------------------------- Server 4 <br/>

6. 我是顧客 <<<<<<<<<<<<< <br/>
   回覆： <br/>
    ├──(1)點餐製作中，花費時間：15 min <br/> 
    ├──(2)運費: 100 NT <br/>
    ├──(3)付費方式: 已付款 <br/>
    └──(4)指派司機: Brian <br/>
    <<------------------------------------------------------------------------------ 外送平台 <br/>
...
:::

#### 在這裡可以看到，使用者點擊確認訂單(request)後，外送平台要處理不同的溝通與邏輯，整理完後一併告知客戶目前進度(response)。中間處理溝通與流程，就是 middleWare 要做的事情。

每一個要處理的: (1)(2)(3)(4)，一個處理完接下一個：
![middleWare Task](https://miro.medium.com/max/1400/1*ptNjzuT0m2BQ9YpQTVwVLg.png)
[圖片來源](https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113)

如果途中 (1)(2)(3)(4)其中一個出現錯誤，就會跳出循環，回傳 error response。
![middleWare出現錯誤，就會跳出循環](https://miro.medium.com/max/1400/1*fbe04fcynkBuLo_CADxxHQ.png)
[圖片來源](https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113)

:::info 總結
### middleWare的用途
---

#### 1. 處理 API（req, res）之間，更多額外的事情。
#### 2. 額外的事情包含：
- 執行其他動作，包含變更 response、 request 的內容。
- 呼叫 `next()`，來執行接續的 middleware。
- 跳出 middleware cycle，執行 response。
#### 3. middleWare 執行`next()`來串接所有 middleWare(request-response cycle)，也就是說：放置的順序很重要！
#### 4. middleWare 沒有執行`next()`，程式認知還沒執行完，整個頁面就會在那轉圈圈，直到 timeout.
---

```js
(req, res, next) => {...}
```
#### 1. request object: 接收的內容
#### 2. response object: 決定要回傳的內容
#### 3. next funciton: 目前該 middleware 動作執行完畢，往下傳給下一個 middleware 
  - req.params:
  - req.body:
  - req.query:

---
### next function
- The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function.
- [Express 官網：Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)
:::

舉例：
```js
  const requestCurrentTime = (req, res, next) => {
    req.currentTime = Date.now(); // client req 加入 時間
    next();                       // 確保執行完此 middleware，會傳下去下個 middleware
  }

  app.use(requestCurrentTime());  // app.use() 執行 middleware

  app.get("/", (req, res) => {
    res.send(`Now is ${req.currentTime}.`)
  });

  /**
   * 執行順序：requestCurrentTime ---- next() ----> get method
   * request object 透過 requestCurrentTime(middleware function) 新增內容
  */
```

:::note 與 API 之間的差別？
  In fact, an API simply is a way for another software to engage your software. Instead, middleware is an additional software that translates between different technologies.
  
  - [What is middleware software? How to use it?](https://www.ictshore.com/software-design/what-is-middleware-software/)
:::

---
## Express middleWare

### (一) Application-level middleware
- `app.use()`
- `app.HTTP METHOD()`

### (二) Router-level middleware

### (三) Error-handling middleware

### (四) Built-in middleware

### (五) Third-party middleware


---
## 名詞補充
- web application: 可以在瀏覽器上執行的應用程式。



---
## 參考資源
- [Express 官網](https://expressjs.com/)
- [What is Express.js?](https://www.besanttechnologies.com/what-is-expressjs)
- [How Node JS middleware Works?](https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113)
- [What is middleware software? How to use it?](https://www.ictshore.com/software-design/what-is-middleware-software/)
- [「筆記」- 何謂 Middleware？如何幫助我們建立 Express 的應用程式](https://medium.com/pierceshih/%E7%AD%86%E8%A8%98-%E4%BD%95%E8%AC%82-middleware-%E5%A6%82%E4%BD%95%E5%B9%AB%E5%8A%A9%E6%88%91%E5%80%91%E5%BB%BA%E7%AB%8B-express-%E7%9A%84%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F-19082b1d8e06)
- [What is middleware in the context of Nodejs](https://www.livescript.in/2018/06/what-is-middleware-in-context-of-nodejs.html)
- [Express.js框架中的Middleware中介軟體](https://medium.com/cs%E8%87%AA%E5%AD%B8%E4%B9%8B%E8%B7%AF/express-js%E6%A1%86%E6%9E%B6%E4%B8%AD%E7%9A%84middleware%E4%B8%AD%E4%BB%8B%E8%BB%9F%E9%AB%94-c27791659404)
- [Day 18 - 二周目 - 剖析 express 路由(router) 三概念：中間件(middleware)、路由(routing)、流(stream)](https://ithelp.ithome.com.tw/articles/10202754)
- [Express.js 4.0 的路由（Router）功能用法教學](https://blog.gtwang.org/programming/learn-to-use-the-new-router-in-expressjs-4/)
- [A Guide to Error Handling in Express.js](https://scoutapm.com/blog/express-error-handling)
- [筆記 Express- Error-handling middleware](https://r06621112.medium.com/%E7%AD%86%E8%A8%98-express-error-handling-middleware-c91054fe2a3b)


---
## 其他
#### token 相關
- [Authentication and Authorization with JWTs in Express.js
](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/)

#### sending body
- [Get HTTP POST Body in Express.js](https://stackabuse.com/get-http-post-body-in-express-js/)
