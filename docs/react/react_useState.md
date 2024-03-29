---
sidebar_position: 4
---

# Hooks - useState

## `Brower DOM ≠ React DOM`，那麼兩者之間的差異性？
### Brower DOM(Real DOM)
  瀏覽器將HTML檔解析成DOM tree，加入CSS樣式與JS，渲染成我們看到的網頁。每當DOM節點有任何更新，都要重新渲然整個新的DOM，這樣會影響效能，造成使用者體驗不佳。
  
  想想看，如果我們打開Facebook，隨時都會收到即時貼文與訊息，如果每一個更新都要re-render DOM，那還得了？
### React DOM(Virtual DOM)
  Facebook 建立的React DOM，當React DOM節點有任何更新，一樣會重新繪製React DOM，但不一樣的是：
React DOM會比較前後是哪個節點有更新，`針對有更新的部分作 re-render`，並使用`ReactDOM.render()`**確保 Brower DOM 與 React DOM資料一致**。解決重複渲染導致的效能問題。

![React Virtual DOM](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1)[圖片來源](https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch02.html) 與  [參考文章: React Virtual DOM Explained in Simple English](https://programmingwithmosh.com/react/react-virtual-dom-explained/)

![Virtual DOM: ReactJS implementation](https://raw.githubusercontent.com/10Pines/ghost-storage/master/2018/08/Nodos.png)<br />
[圖片來源](https://blog.10pines.com/2018/08/27/reactjs-virtual-dom/)

剛剛提到 React DOM 節點更新，其實就是 `state` 的變化。
但為了維護更好的效能，並不是一有`state`更新，就馬上跑去告訴Brower DOM，而是累積一部分新的`state`，再一次去統一更新Brower DOM的資料。
所以你之後可能會發現，有些時候更新 `state`，畫面並沒有同步更新。

:::info

### [State Updates May Be Asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
React may batch multiple setState() calls into a single update for performance.

### [Why doesn’t React update this.state synchronously?](https://reactjs.org/docs/faq-state.html#why-doesnt-react-update-thisstate-synchronously)

As explained in the previous section, React intentionally “waits” until all components call setState() in their event handlers before starting to re-render. This boosts performance by avoiding unnecessary re-renders.
:::

React 提供 useState方法，讓我們可以輕易操控資料變化。我們可以呼叫useState，並透過陣列解構方式自訂`state`名稱：

```
    const [ 自訂state名稱, 自訂更新state方法的名稱 ] = useState(state初始值);
    const [ state, setState ] = useState("");
```

- state初始值: 畫面第一次 render的`state`預設值。
- 自訂更新state方法的名稱: 一律以`setXXX`開頭。

還有，React 用 `function component` 回傳 React element，而我們也得以在element操作一些變數。

:::note
- `component`命名開頭都是大寫，用來與 HTML標籤 做區別。
:::

:::note
- `useState` returns an array. We use array destructuring to access : `state`(value) and `setState`.
  - `state`: immutable value
  - `setState`: function of changing the value
- state is immutable. 不可以直接對state操作，如果要改變state :
  - 使用setState()方法
  - 拷貝state，在拷貝內執行修改，最後還是要放回setState()
:::

---
## 實作練習
### 需求說明
- 輸入代辦項目，點擊送出，顯示清單。
- 一個輸入框、一個提交按鈕、`ul`清單。

### 過程紀錄
- 建立一個 `component`: 
```
export default function ToDoList() {    
    return( 
        // highlight-next-line
        <>
          <Space>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="primary" onClick={handleSubmit}>+</Button>
          </Space>
          <ul>
            {toDoData.map((item) => (
              <li id={item.id}>{item.value}</li>
            ))}
          </ul>
        // highlight-next-line
        </>
    )
}
```

- 綁定 input value 與 清單資料：
```
    const [ inputValue, setInputValue ] = useState("");
    const [ toDoData, setToDoData ] = useState([]);
```

- 我使用 Antd 的 UI 與方法，點擊送出按鈕，執行 `setInputValue` 與 `setToDoData` 更新值。

```
  const handleSubmit = () => {
    if (inputValue) {
      const newValue = {
        id: Date.now(),
        value: inputValue,
        status: UNFINISHED,
        spendTime: 0,
      };
      setToDoData([...toDoData, newValue]);
      setInputValue('');
    } else {
      AlertNotification({
        type: 'warning',
        message: '請先輸入代辦事項！',
      });
    }
  };
```

### 顯示效果：
![顯示效果](https://ithelp.ithome.com.tw/upload/images/20210923/201316899nNfzE13Tv.png)


---

### (補充) Fragment
#### 為了解決什麼問題 ?  
  - **React 在JSX設定 : 外層必須有包裹元素。**
      如果JSX外層沒有容器包裹，會顯示以下錯誤訊息：
      ![如果JSX外層沒有容器包裹，會顯示錯誤訊息。](../../static/img/docs/react/error_fragment.png)

  - **在return( ) 內寫入多行JSX，為了維持外層包裹，加入<div></div>，會發生以下情況:**
      1. 外層多一層 `<div>`，恐影響CSS樣式設定，架構上多一層無意義。
      2. 在分拆元件的情況，每個元件外都多一層 `<div>`，也可能影響HTML本身結構。
      (例 :  `<li></li>`另拆成元件，之後與`<ul></ul>`組合，中間多了`<div>`導致無法正常顯示)
#### 如何解決 ?
  - Fragments let you group a list of children without adding extra nodes to the DOM.
  - 在開發者工具Element是看不到的，完美解決多一層`<div>`問題。
  - React提供的佔位符(元件)，也可以簡寫為 `<></>`
---
## 參考文章
- [Reconciliation](https://zh-hant.reactjs.org/docs/reconciliation.html)
- [Why doesn’t React update this.state synchronously?](https://reactjs.org/docs/faq-state.html#why-doesnt-react-update-thisstate-synchronously)
- [Fragment](https://reactjs.org/docs/fragments.html)
- [Virtual DOM: ReactJS implementation](https://blog.10pines.com/2018/08/27/reactjs-virtual-dom/)