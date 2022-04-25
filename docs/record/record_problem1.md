---
  sidebar_position: 1
  id: problem_record1
  title: Performance Issue when fetching large Data from server
  tags:
    - React
    - performance

---

# Performance Issue when fetching large Data from server

### 使用環境
  ```
    React: "^17.0.1"
    Ant Design: "^4.13.0"
  ```
### 問題描述
  從Server一次拿到上萬筆資料，導致 React render 畫面延遲，影響使用者體驗。<br />
  （補code：修改前、描述）<br />
  （補圖：render 時間- 修改前）<br />

### 改善目標
  從前端頁面顯示著手，不要讓使用者瀏覽畫面卡頓，要是順暢的。

### 可能問題
  （補連結：React render 觸發時機）<br />


### 解決辦法
:::info 方法一：
  ### 畫面使用分頁顯示
  依據目前分頁，只取該頁顯示資料。切換分頁觸發更新顯示資料。

  （補code：修改後、描述）<br />
  （補圖：render 時間- 修改後）<br />
  （補video：操作）<br />
:::
  
:::info 方法二：
  ### 無限下拉顯示
  抓取使用者瀏覽資料的 scroll height，當滑到 指定scroll height時，觸發更新顯示資料。
  
  （補code：修改後、描述）<br />
  （補圖：render 時間- 修改後）<br />
  （補video：操作）<br />
:::

### 參考資料


> #### [Virtualize Long Lists](https://zh-hant.reactjs.org/docs/optimizing-performance.html#virtualize-long-lists)
> 說明內容<br/>

> #### [React 性能優化大挑戰：一次理解 Immutable data 跟 shouldComponentUpdate](https://blog.techbridge.cc/2018/01/05/react-render-optimization/)
> 文章有提到 React Virtual DOM 的概念，注意文章資料為: 2018-01-05 <br/>

> web1 <br/>
> web1 <br/>

> web1 <br/>
> web1 <br/>




