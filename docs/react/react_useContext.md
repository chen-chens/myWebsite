---
sidebar_position: 7
---

# Hooks - useContext

## 為了解決什麼問題？
#### 跟[Redux](../redux/redux_intro)想要解決的`props`傳個沒完的問題一樣，React hooks 提供另外一個傳遞資料的方法：`useContext`，讓我們針對多組component都會使用的的資料做統一管理，需要資料直接跟`useContext`拿。

![useContext](https://ithelp.ithome.com.tw/upload/images/20210928/20131689rFaxLD3Qad.png)

## 什麼時候使用？
- 如果資料有許多元件會使用到（像是 global value: theme color\token\language ...）
- context 可以有多個，所以不一定要把所有資料都放在最頂層（會造成所有子元件 re-render），依照子元件存

---
## Summary
:::info Summary
1. 使用 `React.createContext()` 方法建立一context 物件。
    - 參數: defaultValue
    - 回傳值: context 物件
2. 使用變數存取 `useContext()`
    - 參數: `React.createContext()` 回傳的物件。
    - 回傳值: 當前 context value
3. 使用 `<變數.Provider value={current context value}></變數.Provider>` 定義有效範圍：子元件透過`Provider`執行訂閱 context。(TBD)
4. 修改 context value，包含在內的所有子元件都會觸發 re-render
---

### Q: defaultValue 與 current context value 的差異？
- defaultValue: 只有在子元件「找不到`<變數.Provider>`」的時候，子元件才會使用。
- 是當開發者沒有使用 `<變數.Provider>` 卻又使用了 useContext 去取值時會用到；一旦使用 變數.Provider 後，就會以 `<變數.Provider value={} />` 中 value 帶入的值為主。 
    - 來自[PJCHENder - [ReactDoc] React Context API 以及 useContext Hook 的使用](https://pjchender.dev/react/react-doc-context/)節錄

- current context value: 子元件會提取「離自己最近」的該 context value。（context 可以有多個）
    - [Consuming Multiple Contexts](https://reactjs.org/docs/context.html#consuming-multiple-contexts)
- Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
:::




:::warning
#### context value 透過 [Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description)方法檢查context value 是否需要更新。

  因此，要避免以下寫法：
```js
  <變數.Provider value={{name: "Joanna"}}></變數.Provider>  
```
這樣會導致永遠是新的 ref.  --->  不停更新context value  --->  子元件不停 re-render

- [Caveats](https://reactjs.org/docs/context.html#caveats)
:::

---

### 需求: 加入深淺主題色切換。

### 過程紀錄
1. 深淺主題色顏色配置。
    ```js
    export const theme = {
      light: {
        backgroundColor: '#eae0d0',
        color: '#000',
      },
      dark: {
        backgroundColor: '#001529',
        color: '#fff',
      },
    };
    ```
2. 建立新資料夾，用來存放 Context 資料。(你可以擁有多個 Context)
3. 使用`React.createContext()`方法來建立Context，並設定預設值。
    ```js
    const ThemeContext = React.createContext(theme.light);
    
    export default ThemeContext;
    ```
4. 使用 `Context名稱.Provider` 來規範 資料分享範圍。
   (Provider 會寫入一個 value props)
    ```js
    /* 
        我希望所有component都用到，所以我在 App.js 使用：
        ThemeContext.Provider 包住所有子component
    */

    function App() {
      return (
        <ThemeContext.Provider value={theme.light}>
         ...
        </ThemeContext.Provider>
      );
    }
    ```

5. 子層 component 要取得 Context 資料：
   ```js
    /* 引入useContext方法 與 目標Context */
    import { useContext } from 'react';
    import ThemeContext from '../context';
    
    function CategoryList(props) {
      /* 變數存取 useContext(目標Context) */
      const theme = useContext(ThemeContext);
      
      return(
        <div style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
         ...
        </div>
      )
    }
   ```

### 來解釋一下：`const theme = useContext(ThemeContext);`
- `useContext(ThemeContext)` : 接收`React.createContext()`回傳的目標Context物件。
```js
ThemeContext: React.Context<{ backgroundColor: string; color: string;}>
```

- 變數 存取 `useContext()`方法回傳的Context值。
```js
theme: { backgroundColor: string; color: string;}
```
:::note
這裡的變數theme收到的值，來自 `Context.Provider` value props，也就是 `theme.light`
![這裡的變數theme收到的值，來自 Context.Provider value props(theme.light)](https://ithelp.ithome.com.tw/upload/images/20210929/20131689vVDoL1ODXU.png)


目前顯示效果：有成功套入`theme.light`的指定色。<br/>
![theme.light淺色效果](https://ithelp.ithome.com.tw/upload/images/20210929/20131689W0IatpQJBF.png)
:::

## 深淺色主題切換

既然資料統一放在Context，**修改資料的方法**也統一放在Context吧！

6. 在 `Context.Provider` 的所在元件位置，加入 `useState()`，並把 `{state, setState}` 傳下去。
    ```js
    function App() {
      const [themsState, setThemeState] = useState(theme.light);

      const value = { themsState, setThemeState };

      return (
        <ThemeContext.Provider value={value}>
         ...
        </ThemeContext.Provider>
      );
    }
    ```
7. 子層 component 要取得 Context 資料：
    ```js
        const {state, setState} = useContext(ThemeContext);
    ```
    
    點擊切換鈕改值：這裡使用 [Antd - Switch](https://ant.design/components/switch/)
    ```js
        <Switch
          style={{ marginTop: 10 }}
          checkedChildren="深色主題"
          unCheckedChildren="淺色主題"
          defaultChecked
          onChange={() => {
            setThemeState((pre) => (pre === theme.light ? theme.dark : theme.light));
          }}
        />
    ```

  ![實現效果](https://ithelp.ithome.com.tw/upload/images/20210929/20131689Ip0rnFTiT4.png)

---

### 問題統整
#### Q : 子層既然可以透過useContext()拿到值，那為什麼還要`<Context.Provider>` ?
A : useContext(MyContext) `只能讓你讀取 context 及訂閱其變更`。你仍然需要在 tree 的上層使用`<MyContext.Provider>` 來提供 context 的值。
- [React 官網 - useContext](https://zh-hant.reactjs.org/docs/hooks-reference.html#usecontext)

---

#### Q : Context initialValue 與 Context.Provider的value props 的 差異？

Context initialValue 為 `theme.light`，Context.Provider value props 為 `theme.dark`的情況。<br />
![驗證](https://ithelp.ithome.com.tw/upload/images/20210929/20131689BQp7zMhyYe.png)


---

### 重點筆記

> All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
> 
> 這裡也說明了不要濫用 `useContext`的原因，當 Context更新，所有範圍內的子層都會 re-render，如果各種資料都往 Context 塞，將會造成效能問題。
> - [Context.Provider](https://zh-hant.reactjs.org/docs/context.html#contextprovider)

> Only use it for low-frequency updates like the theme and authentication. This is because whenever the context’s value changes, the descendant components of the Provider will be re-rendered.
> - [When to use the Context API instead of Redux](https://www.section.io/engineering-education/dark-mode-for-react-app-using-context-api-and-hooks/)

> Context uses reference identity to determine when to re-render.
> - [Caveats](https://zh-hant.reactjs.org/docs/context.html#caveats)

> useContext — This hook takes in a context object and returns whatever is passed in as a value prop in MyContext.Provider .
> - [How to manage state in a React app with just Context and Hooks](https://www.freecodecamp.org/news/state-management-with-react-hooks/)

---

## 參考資源
- [optimize it by using memoization.](https://github.com/facebook/react/issues/15156)
- [React - context](https://reactjs.org/docs/context.html)
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
