---
sidebar_position: 1
id: node_intro
title: Node Intro
tags:
- Node.js
- V8
---

## What is V8 ?
- Javascript engine designed by Google. 
- Node.js follows V8 convention.
- With V8 engine, Node.js can execute Javascript on the browser behind the background.


## What's inside in Node.js?
#### According to [Node Github](https://github.com/nodejs/node) folder :

```
├──  deps: Dependencies
├──  src: Logic By C++
├──  lib: What Node.js provides functions and methods to users.

```

## How to execute your project by Node.js ?

#### STEP 1: Create a project folder 
#### STEP 2: Add `app.js` to your project with content `console.log("Hello Node!!!")`
#### STEP 3: Open by VScode
#### STEP 4: Execute `app.js` by Node.js with using terminal CLI

``` Folder Structure
    /practice_node_project
        /app.js
```

``` 
    my@mydeMacBook-Pro ~ % cd /Users/chenhuizhen/practice_node_project

    my@mydeMacBook-Pro practice_node_project % ls
    app.js

    my@cmydeMacBook-Pro practice_node_project % node app.js
    Hello Node!!!
```

---

## BOM vs DOM vs Node.js

|Comparison|BOM|DOM|Node.js|
|--|--|--|--|
|Definition|Brower Object Model<br/> Running on browser.|Document Object Model<br/>The html content object which browser parses.|Running on server.|
|Root Object Name|`window`<br/>represnet the browser window|--|`global`|
|繼承 `var a = 1`|同`window.a = 1`|--|`global.a = undefined` 沒有繼承，如果直接附值 `global.a = 1` 才有值。(每個檔案都是獨立模組，不會污染到 `global`)|
|details|`location` object: URL config; <br/> `screen` object: client-side browser sreen state; <br/>`history` object: store history(URL) list on current page; `navigator` object: contains information about the visitor's browser. (ex. `navigator.cookieEnabled`)<br/>|--|--|
|--|--|--|--|

![補充：BOM vs DOM](../../static/img/docs/node/node_bom_dom.png)
[參考圖片來源](https://ithelp.ithome.com.tw/articles/10235079)

---

## Node.js 特性一：node文件彼此都是獨立模組(module)
![node文件彼此不會相互污染](../../static/img/docs/node/node_intro_module_independent.png)

## Node.js 特性二：`module.exports` 與 `require()`
![如何取得其他文件內容](../../static/img/docs/node/node_intro_module_export_requrie.png)

:::info 匯出的其他寫法

```js
    module.exports = {
        content: "description",
        topic: "Node.js"
    }
```
等同於：
```js
    exports.content = "description"
    exports.topic = "Node.js"
```

印出內容：
`{ content: 'description', topic: 'Node.js' }`

---
**Q: 假設兩種寫法同時出現？**
```js
    module.exports = {
        content: "description",
        topic: "Node.js"
    }

    exports.content = "description2"
    exports.topic = "Node.js2"
```
印出內容：
`{ content: 'description2', topic: 'Node.js2' }`

*** # `module.exports` 會覆蓋掉 `exports.屬性名稱` 的寫法***
:::

---

## 開啟本地端 Server

```js
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.write("<h1>I got you!!!</h1>")
    res.end()
})

server.listen(8888)
```
#### 紀錄
- 引入 `Node.js` 提供的模組 `http`
- 使用 `http.createServer()` 方法，開啟伺服器，參數為一 function。
- 該 function 有兩參數：`req` (Client-side),`res` (Server-side)。
- Server 結束回覆，要使用 `res.end()` 做結尾。
- 啟動 Server，要執行 `http.createServer(...).listen(8888)` 才算完成。
- `{'Content-type': 'OOO'}` 代表 Server 回傳的資料格式，瀏覽器會透過格式做不同的渲染處理。 

:::success `{'Content-type': 'OOO'}` 代表 Server 回傳的資料格式，瀏覽器會透過格式做不同的渲染處理。 
- #### `{'Content-type': 'text/plain'}` 瀏覽器渲染結果
![{'Content-type': 'text/plain'} 瀏覽器渲染結果](../../static/img/docs/node/node_content_type_A.png)

---
- #### `{'Content-type': 'text/html'}` 瀏覽器渲染結果
![{'Content-type': 'text/html'} 瀏覽器渲染結果](../../static/img/docs/node/node_content_type_B.png)
:::

---
## `NPM`
當我們要完成一項專案時，我們會使用到：
- #### `Node.js` 提供核心模組。
- #### 其他開發者提供好用的套件，我們會安裝依賴到專案使用，提升開發效率。

而 `NPM` 就用來管理專案中安裝的各種依賴庫。

引用其他套件的方法，也是 用 `require()`。

### `package.json` 是做什麼用的？
- #### `npm` 會透過 `package.json` 紀錄的內容，作為專案內部依賴控管的依據。
- #### `package.json` 主要內容包含:
    - 專案名稱
    - 專案版本
    - 使用依賴 與 該依賴 版本號
        - 開發使用的依賴：像是 型別
    - 執行專案指令
### 如何建立 `package.json`？
- 開啟 CLI 或 使用 VScode 開啟專案
- 使用 `cd` 將 CLI 指向專案路徑（使用 VScode 下的終端機，路徑已經在專案底下）
- 執行 `npm init`，回答指令問題後，該專案就有一 `package.json`

```js title="package.json"
{
  "name": "practice_node_project",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Joanna",
  "license": "ISC"
}
```

### 安裝套件 `Express`

- 指令(Mac) : `sudo npm install express --save`
- 依賴資訊會在兩個地方看到：
    - `package.json` : 紀錄目前專案載入的 `express` 版本號。
    - `node_module`  : 紀錄 `express`
        - 如果要使用 `express`，就必須把對應的依賴也一起安裝在專案下，才能使用。

```js title="package.json"
{
  "name": "practice_node_project",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Joanna",
  "license": "ISC",
  // highlight-start
  "dependencies": {
    "express": "^4.18.2"
  }
  // highlight-end
}

```

--- 
## Reference Sources:
- [BOM Browser Object Model](https://www.youtube.com/watch?v=kll5lN4Puhk)
- [DAY 2 BOM 、 DOM 是什麼？](https://ithelp.ithome.com.tw/articles/10235079)