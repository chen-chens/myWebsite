---
sidebar_position: 6
id: DOM
title: DOM
tags:
- DOM
---

## What is DOM ?
- `DOM` = Document Object Modal
- Browser 解析 HTML 為 DOM tree，得以使用 JS 來操作 網頁內的 action。
    - 透過 DOM 提供的方法，監聽事件來操作 CRUD 等，達到與使用者互動的效果。
    - DOM 是 Browser 在記憶體所建立的資料。

![DOM tree](http://yltang.net/static/tutorial/img/javascript/dom2.png)
[圖片來源](http://yltang.net/tutorial/javascript/5/)

---
## 補充：Imperative Programming vs. Declarative Programming
### Imperative Programming: 命令式編程
- 告訴電腦我要做什麼，怎麼做由我決定。
- 如以下例子：我要在 `h1` 加入文字。
- 我告訴 瀏覽器：
    - (1) 在 DOM 找到 `id=title` 的節點。
    - (2) 新增文字內容，內容為：`"Title1"`。
    - (3) 在剛找到的節點下，加入文字節點。

```html
    <html>
    ...
        <body>
            <h1 id="title"></h1>
            // highlight-start
            <script type="text/javascript">
                const title = document.getElementById("title");
                const content = document.createTextNode("Title1");
                title.appendChild(content);
            </script>
            // highlight-end
        </body>
    </html>
```

### Declarative Programming: 宣告式編程
- 告訴電腦我想做什麼，怎麼做由程式決定。
- ex. React (UI Library)

```jsx
    <html>
    ...
        <body>
            <div id="root"></div>
            // highlight-start
            <script type="text/jsx"> // Babel complies JSX to plain JS
                const root = document.getElementById("root");
                ReactDOM.render(<h1>Title1</h1>, root);
            </script>
            // highlight-end
        </body>
    </html>
```

:::success 好處
when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process.
- [Next.js 官網](https://nextjs.org/learn/foundations/from-javascript-to-react/updating-ui-with-javascript)
:::

---
## 參考資料
- [文件物件模型](http://yltang.net/tutorial/javascript/5/)