---
sidebar_position: 1
---

# Intro

### 為了解決什麼問題？

1. 建立元件：將相關的 UI 與 邏輯綁在一起，讓開發者關注在目前的功能上，也可以在專案其他地方重複使用。
2. 不用擔心 DOM 更新問題，React 會以最佳效能去更新DOM。（透過建立 Virtual DOM，進行前後比對，只針對該節點做更新）
3. React 是一個 library，專案本身可以使用React，也可以使用原生寫法，不會互相干擾。


## 資料夾結構概述

```
├── node_modules
├── public
│   └──  index.html
│
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── index.jsx
│
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

### node_modules 
  放置目前專案內會用到的所有載入的套件，由於檔案龐大，這個資料夾`git`並不會追蹤(建置在`.gitignore`)。

### public
  所有靜態頁面放置區，包含目前看到的`index.html`、LOGO，或者提供給使用者下載的靜態範例檔等，都可以放置在這裡。
  - 在`index.html`: [React官網](https://zh-hant.reactjs.org/)一點開，開宗明義就寫了React是「用來實作使用者介面的 JavaScript 函式庫」。既然上面都說了是`public`資料夾是放置靜態頁面，就表示不會在`index.html`內撰寫JS(我這裡指的整個專案都使用React的情況)。內容只有一段：
```jsx title="/public/index.jsx" 
  <div id="root"></div>
```
瀏覽器在渲染網頁畫面的時候，會把HTML解析成[DOM(Document Object Model)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)。如果你理解DOM的概念，那麼這裡的 `root`也有類似的概念。作為 React DOM root，所有在 `root`內的 element 都會交給React DOM管轄。

:::note 但別搞混， brower DOM ≠ React DOM ！

Unlike browser DOM elements, React elements are plain objects. 
React DOM takes care of updating the DOM to match the React elements.

節錄自React官網片段
:::
  
### src
  **所有React進行的操作，都會放在這個資料內。**
  - `App.jsx` : 我通常會把 `App.jsx` 當作 所有 components 的集散地，比如有主要Router的設置。
  - `index.jsx` : 所有 Javascript 至 顯示畫面(public/index.html)的接口。
    在這裡，我們透過 `ReactDOM.render(element, container)`，把要渲染的畫面，塞進 `root`節點。
```jsx title="/src/index.jsx" 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```
### .gitignore
  紀錄所有不需要git追蹤的檔案名稱。

### package.json
  紀錄所有專案使用的套件與套件版本。剛剛提到，`node_modules`並不受`git`追蹤，代表每一次從遠端提取最新進度時，不包含`node_modules`資料夾。這時候就需要 `package.json`內的套件紀錄，搭配指令`yarn install`重新載入所有套件與對應版本，重新產生`node_modules`資料夾。

### yarn.lock
  紀錄所有專案使用的套件與**套件本身所有依賴版本**。與`package.json`不同的是：
1. `package.json`資料可以手動修改 ; `yarn.lock`不行修改。
    - 代表`yarn install`套件載入的版本是可以在`package.json`手動指定。
    - 只要執行 yarn 指令，`yarn.lock`檔案內容會自動更新。
    
2. `yarn.lock` 紀錄該專案使用套件**所有依賴** ; 而`package.json`只有紀錄專案載入的該套件。

我們來舉個例子：
  
- 這是目前專案的`package.json` snippet，裡面紀錄的依賴有 `antd` `react` `react-dom` ...等等。
```jsx title="package.json" 
{
  "name": "pomodoro-project",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    // highlight-start
    "antd": "^4.16.13",
    // highlight-end  
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
  
  ...
}
```

以UI套件`antd`為例，從 `node_modules` 資料夾可以看到，`antd`本身也有自己的`package.json`，裡面紀錄了`antd`套件內需要用到的依賴：

![`antd`套件內需要用到的依賴](https://ithelp.ithome.com.tw/upload/images/20210922/2013168936BZOQLHo6.png)
這就表示，如果我要使用`antd`，就要把它需要的相關依賴都裝上，才能確保使用的時候不出錯，而在執行 `yarn install` 時，就會把需要的一起裝好，很方便。

但是回到專案的`package.json`，裡面只有紀錄 `"antd": "^4.16.13"`，其他相關依賴都沒寫，如果哪天依賴升級，導致我的專案壞掉，我哪知道到底是哪個依賴出了問題？

所以就有了`yarn.lock`，這裡面除了紀錄`antd`**確切載入版本**之外，相關依賴也都有紀錄，我們就可以藉由`yarn.lock`裡面紀錄的所有依賴版本，來拯救我的專案。

![`yarn.lock`裡面紀錄的所有依賴版本](https://ithelp.ithome.com.tw/upload/images/20210922/20131689Vo7hOLrZT1.png)

### (補充) 版本號意思
`主版本號.次版本號.修訂版本號`[major.minor.build](https://zh.wikipedia.org/wiki/%E8%BB%9F%E4%BB%B6%E7%89%88%E6%9C%AC%E8%99%9F)

- 大版本號: 重大更新使用
- 中版本號: 更新使用，比如：新增功能。
- 小版本號: 修正錯誤使用

- 版本號前面常見符號：
    - `^`: 更新版本以大版本號不動，接受中、小版本號更新。
    - `~`: 更新版本以中版本號不動，接受小版本號更新。

---
### 參考資料
- [React 官網](https://zh-hant.reactjs.org/)
- [React render()](https://reactjs.org/docs/react-dom.html#render)
- [yarn lock](https://classic.yarnpkg.com/en/docs/yarn-lock/#toc-managed-by-yarn)
- [版本編號的命名規則](https://www.slmt.tw/blog/2015/07/19/version-number-naming-convention/)