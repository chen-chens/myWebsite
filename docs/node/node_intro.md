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
## Reference Sources:
- [BOM Browser Object Model](https://www.youtube.com/watch?v=kll5lN4Puhk)
- [DAY 2 BOM 、 DOM 是什麼？](https://ithelp.ithome.com.tw/articles/10235079)