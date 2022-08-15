---
sidebar_position: 1
tags:
    - Next.js
---

# `Next.js`


## 用來解決什麼問題？
- 解決 React SEO 的問題。
- React 專注 UI，Next 專注建置與優化。
- Next 包含 Route setting、data fetching
---

## What is Next.js ?
:::note 

### Next.js is a React framework that gives you building blocks to create web applications.
By framework, we mean **Next.js handles the tooling and configuration needed for React, 
and provides additional structure, features, and optimizations for your application.**
- [資料來源：官網](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)
:::

---
### React: Client-Side Rendering
- Render web by browser
- 解析網頁順序：<br/>
    `send request to server/server response` --> `HTML loading` --> `載入 JS` --> `render web`
- 造成問題：<br/>
（一）一切要等 JS 預載好，效能較不好 (User friendly bad)<br/>
（二）爬蟲沒有東西爬，SEO 不會好 (所有資料都要去 server 拿)。
（三）圖案檔案優化要自行設定。
![Client-Side Rendering](https://s3.amazonaws.com/scribblelive-com-prod/wp-content/uploads/sites/4/2020/10/CSR.png)
[資料來源](https://laptrinhx.com/client-side-rendering-vs-server-side-rendering-which-one-is-better-44494895)


### Next: 支援 SSR、SSG、CSR
- `SSR` 解析網頁順序： <br/>
    `send request to server/server response complete HTML`  --> `pre-render default web/載入 JS` --> `render web`
- `SSR` 解決 `React` 問題：<br/>
（一）可以決定哪些內容先 pre-render 或 提供靜態網頁 (User friendly better)<br/>
（二）爬蟲有東西爬，SEO 較佳。
（三）圖案檔案優化 有提供自動化解決方案。
![Server-Side Rendering](https://s3.amazonaws.com/scribblelive-com-prod/wp-content/uploads/sites/4/2020/10/SSR.png)
[資料來源](https://laptrinhx.com/client-side-rendering-vs-server-side-rendering-which-one-is-better-44494895)

---
### 補充整理: CSR vs. SSR vs. SSG
|--|全名|props|cons|備註|
|--|--|--|--|--|
|CSR|Client-Side Rendering |第一次載入 JS bundle 較慢，之後的頁面瀏覽較快。                     |不利SEO 與 效能                            |爬蟲可以爬，但不適合內容變動快速的網站。|
|SSR|Server-Side Rendering |SEO佳。 <br/>`server response complete HTML`                   |每頁都由 Server render, server loading 重。|--|
|SSG|Static-Side Generation|**在 build 時就產生資料，預載速度最快。**`server response complete HTML`|只適合**大部分靜態**的網頁使用，常變更建議用SSR。   |--|

---
### Next.js 支援：CSR / SSR / SSG

- `getStaticProps (SSG)`: 在 build 的時候抓取資料。
- `getStaticPaths (SSG)`:
- `getServerSideProps (SSR)`:



---
## 參考資源
- [Day02 - 為什麼你需要 Next.js ?](https://ithelp.ithome.com.tw/articles/10265138)
<!-- - []() -->

