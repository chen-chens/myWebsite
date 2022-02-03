---
sidebar_position: 2
---

# ReactDOM.render(element, container)

渲染畫面的方法：`ReactDOM.render(element, container)`。

第二個參數我們已經知道：
```jsx title="/public/index.jsx" 
  <div id="root"></div>
```
而我們現在要來滿足第一個參數條件：`element`。

### 創建React element有幾種方式

1. 創建單一個 React element：
```
const element = <h1>Hi, I am Joanna.</h1>;
```
2. 創建多個 React element，並在裡面操作JS：也就是`function component`
```
function App() {
  const greeting = "Glad to see you!";
  return (
    <>
      <h1>Hi, I am Joanna.</h1>
      <span>{greeting}</span>
    </>
  );
}
export default App;
```

:::info 我們可以發現，`function component`就是
(1) 擁有一般 function的功能，讓我操作JS。 <br />
(2) 回傳 React element，滿足上面`render()`第一個參數。
:::

網頁的 零組件外觀知道了，但是每個零組件要怎麼組裝在一起呢？
使用 `import/ export (default)`，想怎麼裝，就怎麼裝！

建立元件後輸出 `export`，需要使用其他元件時引用 `import`
![import/ export (default)](https://ithelp.ithome.com.tw/upload/images/20210924/20131689ofwteqvjEr.png)

### `import/ export (default)` 寫法
(寫法ㄧ)
```
// App.jsx (輸出)
export default App;
```
```
// index.jsx (引入)
import App from './App';
```
- `export default` : 一個文件檔內只能一組。
- `import` 元件名稱同 輸出名稱，不能修改。

(寫法二)
```
// App.jsx (輸出)
export App;
```
```
// index.jsx (引入)
import { App } from './App';
```
- `export` : 一個文件檔內可以有多組。
- `import { App }` : 引入元件要加入 `{}`。
- `import { App as ABC }` : 接受引入時改名，改名只在當前引入文件內有效。

(寫法三) `export` 撰寫的位置
```
function App() {
    return()
}

export default App;    
```

```
export default function App() {
    return()
}
```

換成箭頭函式：

```
const App = () => {
    return()
}
export default App;  
```

```
export const App = () => {
    return()
}
```

---
知道怎麼組裝之後，來看看`component`零組件的內部構造吧！

React `component` 的核心概念：是將相關的UI與操作邏輯組合在一起。
所以`component` 可以小至 按鈕顯示＋點擊後的執行動作，也可以大至 一個網頁畫面＋所有操作(但通常你不會想要一個這麼龐大的元件，適度拆分有助於聚焦每個畫面區塊與邏輯)。

但是，我們不能直接在HTML標籤內直接操作JS，是要怎麼把UI與操作邏輯組合在一起？

在文章最開頭，我們看到了單一`element`的寫法：
```
const element = <h1 className="greet">Hi, I am Joanna.</h1>;
```
這樣的寫法稱作「JSX」，是Javascript的語法擴充，我們可以同時找到對應 element node，並直接在它身上套入變入或判斷，UI與邏輯完美相遇。

:::note
不過瀏覽器不認識`JSX`，所以在發布網頁前，會先使用`Babel`使用`React.createElement()`方法，將`JSX`編譯成Javascript。像是這樣：

```
const element = React.createElement("h1", {className: "greet"} , "Hi, I am Joanna.")
```
:::

所以，在React裡面並不一定要撰寫 `JSX`，也可以用上面的方式建立React element。但考量易讀與維護性，還是建議使用`JSX`。

### `JSX` 寫法規則
- `class` (HTML標籤) -> `className` (JSX): class 在 JS 屬於保留字，為了區別。
- `for` (HTML屬性) -> `htmlFor` (JSX): for 在 JS 屬於保留字，為了區別。
- 如果標籤內沒有任何內容，使用 `< />` 關閉標籤。
- `JSX`只接受 expression，故不能在`JSX`內寫`if-else`(statement)，判斷可以改用 `&&` `||` 或 [三元運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)替代。


---
### 參考文章
- [React官網 - JSX](https://zh-hant.reactjs.org/docs/introducing-jsx.html)
- [React官網 - Components 與 Props](https://zh-hant.reactjs.org/docs/components-and-props.html)
- [React官網 - 不使用 JSX 開發 React](https://zh-hant.reactjs.org/docs/react-without-jsx.html)
- [React官網 - 條件 Render](https://zh-hant.reactjs.org/docs/conditional-rendering.html)
- [React官網 - 不使用 JSX 開發 React](https://zh-hant.reactjs.org/docs/react-without-jsx.html)


