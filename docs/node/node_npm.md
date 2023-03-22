---
sidebar_position: 5
id: node_npm
title: Node NPM
tags:
- Node.js
- NPM
---

# Node `NPM`

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


## `npm --save` `npm --save-dev` `npm -g` 差異？

|名稱             |說明|備註|
|--              |--|--|
|`npm --save`     |執行這段指令，`package.json` 會記錄在 `dependencies` 內。|--|
|`npm --save-dev`|執行這段指令，`package.json` 會記錄在 `devDependencies` 內。|開發時使用，production 不會使用的套件。<br/>ex. 型別檢查、除錯。|
|`npm -g`        |安裝一次，本機端所有專案皆可引用。<br/>不會出現在個別專案內的 `package.json` 中。|通常協作專案不建議使用。<br/>因為要讓所有人專案下套件版本一致才行。|

## 其他 `npm` 指令補充

|名稱                      |說明|備註|
|--                       |--|--|
|`npm init`               |初始化一`package.json`，作為該專案管理 module 的版本紀錄。|--|
|`npm ls`                 |目前專案底下有哪些引入 module。|--|
|`npm uninstall [模組名稱]`|刪除目前專案中使用的 module。|--|
|--                       |--|--|