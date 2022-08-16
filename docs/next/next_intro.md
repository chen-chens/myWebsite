---
sidebar_position: 1
tags:
    - Next.js
---

# `Intro`


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
（一）一切要等 JS bundle 預載好，效能較不好 (User friendly bad)<br/>
（二）爬蟲沒有東西爬，SEO 不會好 (所有資料都要去 server 拿)。<br/>
（三）圖案檔案優化要自行設定。
![Client-Side Rendering](https://s3.amazonaws.com/scribblelive-com-prod/wp-content/uploads/sites/4/2020/10/CSR.png)
[資料來源](https://laptrinhx.com/client-side-rendering-vs-server-side-rendering-which-one-is-better-44494895)


### Next: 支援 SSR、SSG、CSR
- `SSR` 解析網頁順序： <br/>
    `send request to server/server response complete HTML`  --> `pre-render default web/載入 JS` --> `render web`
- `SSR` 解決 `React` 問題：**改變渲染順序**<br/>
（一）可以決定哪些內容先 pre-render 或 提供靜態網頁 (User friendly better)<br/>
（二）爬蟲有東西爬，SEO 較佳。<br/>
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

|方法                       |運行時機 與 內容                                                                                                                 |範例|
|--|--|--|
|`getStaticProps (SSG)`    |在 build 的時候抓取資料。                                                                                                         |[範例](#getserversideprops-ssr-範例)|
|`getStaticPaths (SSG)`    |在 build 的時候抓取預處理的動態範圍。 <br/> 例：URL 動態id。範圍 id = 1 ~ 10 先預載資料，<br/>範圍之外回到 `getServerSideProps()` 取值。   |[範例](#getstaticprops-ssg--getstaticpaths-ssg-範例)|
|`getServerSideProps (SSR)`|在 client send request 時，server-side 執行。                                                                                    |[範例](#getstaticprops-ssg--getstaticpaths-ssg-範例)|

---
### Next 資料結構
![Next 資料結構](../../static/img/docs/next/next_app_structure.png)

---
### 靜態路徑 與 動態路徑
- 資料夾路徑 = URL， 動態變數 對應指定資料。

:::note
Each page is associated with a route based on its file name.
:::

- 靜態路徑：[`http://localhost:3000/`](http://localhost:3000/) 對應到 資料夾結構 `pages/index.tsx`
- 動態路徑：[`http://localhost:3000/post/2`](http://localhost:3000/post/2) 對應到 資料夾結構 `pages/post/[id].tsx`

![動態路徑對應資料夾](../../static/img/docs/next/next_app_dynamic_page.png)

```tsx title="./pages/post/[id].tsx"
    import { useRouter } from 'next/router'

    const Post = () => {
        const router = useRouter() // 取得 URL 內容
        const {id} = router.query

        return(
            <h1>PostId: {id}</h1>
        )
    }

    export default Post
```
---
### getServerSideProps (SSR) 範例
#### 在每次send request 的時候運行。
#### 要特別留意：哪些程式碼 是在 Client-Side 執行，哪寫在 Server-Side 執行。
![getServerSideProps (SSR) 範例](../../static/img/docs/next/next_getServerSideProps()_example.png)

```tsx title="./pages/post/[id].tsx"
    import { GetServerSideProps } from 'next'

    interface ResponseType {
        id: number;
        name: string;
        height: number;
        weight: number;
    }

    // Client-Side executuon
    const Post = ({data}:{data: ResponseType}) => {

        return(
            <section>
                <h1>{data.name}</h1>
                <div>
                    <p>Height: {data.height}</p>
                    <p>Weight: {data.weight}</p>
                </div>
            </section>
        )
    }

    export default Post;


    // Server-Side executuon
    export const getServerSideProps: GetServerSideProps = async (context) => {
        const { id } = context.query // 取得 URL 上變動的 id
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((data) => data.json())

        return {
            props: {data: res}
        }
    }
```
---
### `getStaticProps (SSG)` + `getStaticPaths (SSG)` 範例
:::success getStaticProps()
#### `getStaticProps()` : 在 Server-Side call API，但不知道 使用者 會指向哪個 id（動態）
:::
:::info getStaticPaths()
#### `getStaticPaths()` : 
- 預先設定 載入id 範圍 給 `getStaticProps()` call API ; 
- 範圍之外的三種模式:
    - `"blocking"`: 交給 `getServerSideProps()` 執行即時 call API。
    - `true` :
    - `false`:
:::


```tsx title="./pages/post/[id].tsx"
    import { GetStaticPaths, GetStaticProps } from 'next'

    interface ResponseType {
        id: number;
        name: string;
        height: number;
        weight: number;
    }

    // Client-Side executuon
    const Post = ({data}:{data: ResponseType}) => {

        return(
            <section>
                <h1>{data.name}</h1>
                <div>
                    <p>Height: {data.height}</p>
                    <p>Weight: {data.weight}</p>
                </div>
            </section>
        )
    }
    export default Post;

    // highlight-start
    // Server-Side Build
    export const getStaticProps: GetStaticProps = async (context) => {
        const params = context.params
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.id||""}/`).then((data) => data.json())

        return {
            props: {data: res},
            revalidate: 10 // **** ? *****
        }
    }

    // Server-Side Build
    export const getStaticPaths: GetStaticPaths = async () => {
        const defaultParams = [1, 2, 3, 4, 5] // 預載 id 範圍 1~5 的資料
        
        return {
            paths: defaultParams.map((id: number) => ({params: {id: id + ""}})),
            fallback: "blocking"
        }
    }
    // highlight-end
```

### getStaticPaths() 回傳型別
```tsx
    export type GetStaticPathsResult<P extends ParsedUrlQuery = ParsedUrlQuery> = {
        paths: Array<string | { params: P; locale?: string }>
        // highlight-start
        fallback: boolean | 'blocking'
        // highlight-end
    }
```

![next_fallback_blocking](../../static/img/docs/next/next_fallback_blocking.png)
![next_fallback_true](../../static/img/docs/next/next_fallback_true.png)
![next_fallback_false](../../static/img/docs/next/next_fallback_false.png)

---
### 

---
### 參考資源
- [Day02 - 為什麼你需要 Next.js ?](https://ithelp.ithome.com.tw/articles/10265138)
<!-- - []() -->

