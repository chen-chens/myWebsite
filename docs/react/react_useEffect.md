---
sidebar_position: 5
---

# Hooks - useEffect

### useEffect 使用時機
這裡的`Effect`指的是「side-effect 副作用」。
也就是說 `useEffect`是用來處理React `component`職責以外的**額外動作**。
​
:::info React component的職責是什麼？
#### **在使用者介面上直接操作資料狀態及回傳節點**。
就是之前說的：實現 相關UI與邏輯 群組化(`component`)，並回傳React element(`JSX`)。
(補充後面動作：節點透過`ReactDOM.render()`放入html檔，瀏覽器解析成 DOM tree，然後渲染成網頁畫面。)
:::
:::info 額外動作指的是？ 
#### 額外動作好比：call api拿資料，直接操作原始DOM(不經過React `component`)，登入 token...等，不是`component`的主要職責，但需要執行的動作，都可能使用到 `useEffect`。
:::
---
### useEffect syntax
```jsx
useEffect(function,[state1, props2...])
```
`useEffect()`接收兩個參數：
- `function` : 執行動作的函式。`useEffect()`會寫在`component`裡面，所以函式內也可以操作`state`
- `[state1, props2...]` : 用來比對`state`或`props`狀態，如果狀態有變，執行`function`，比對項目如果有多組，只要一個有變，`function`就會執行。
​
這裡要提到兩個重要概念：**React render 順序**、**dependency比對標準： `===`**
​
### (一) React render 順序
我們利用 `console.log()` 分別寫在三個位置：
1. 一進入 `component`
2. `useEffect()`內
3. `JSX`內

![console.log() 分別寫在三個位置](https://ithelp.ithome.com.tw/upload/images/20210927/20131689bAz3b7zwbn.png)
顯示順序：
![顯示順序](https://ithelp.ithome.com.tw/upload/images/20210927/20131689tRDc1euFpA.png)
​
:::tip
可以看到`component`會先屢行它的主要職責，才進行額外行動：**useEffect是在component渲染完後才執行**。
:::

### (二) 利用render順序來判斷 : 有無 `[dependency]`，程式執行的情況。
![React render 順序](https://ithelp.ithome.com.tw/upload/images/20210927/20131689gHPX44snMT.png)​

### (三) dependency比對標準：[Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 

OK，那如果dependency要比對物件型別呢？
```jsx
useEffect(() => console.log("useEffect !"),[{id: 1, name: "Joanna"}])
```

這會出現一個狀況：如果物件內的屬性改值，但 `useEffect()`比對物件的位址不變，導致不會執行動作。
如果要解決這樣的問題，有幾個解決方法：
1. dependency寫到 物件.屬性 (但屬性值要是基礎型別才有效)
```jsx
const [obj, setObj] = useState({id: 1, name: "Joanna"});
useEffect(() => console.log("useEffect !"),[obj.name])
```
​
2. 既然`useEffect()`比對物件的位址，那我改位址可以吧！
```jsx
const [obj, setObj] = useState({id: 1, name: "Joanna"});
useEffect(() => console.log("useEffect !"),[obj])
​
// 改值：
setObj({...obj, name: "David"})
```
---
###  參考文章
- [React官網 - useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [UseEffect dependency array and object comparison!](https://dev.to/ms_yogii/useeffect-dependency-array-and-object-comparison-45el)
- [React uses the Object.is comparison algorithm.](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update)

