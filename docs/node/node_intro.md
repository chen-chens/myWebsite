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
|--|--|--|--|
|--|--|--|--|


--- 
## Reference Sources:
- [BOM Browser Object Model](https://www.youtube.com/watch?v=kll5lN4Puhk)
- 