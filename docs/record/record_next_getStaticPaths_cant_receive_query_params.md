---
  sidebar_position: 20
  id: record_next_getStaticPaths_cant_receive_query_params
  title: Can't receive router query params by using getStaticPaths()
  tags:
    - Next.js
    - getStaticPaths
---

## 問題情境

我使用 `getStaticPaths()` 回傳 params，`getStaticProps(context)` 只能收到 dynamic folder 的對應路徑，不能取得其他`getStaticPaths`自定義的回傳值（router.query）

---

#### 目前狀況，實際切換 URL 會搭配 query params，舉例：

|dynamic folder           |url                                 |router.query                                 |
|--|--|--|
|`/products/[productType]`|`/products/MONITOR?name=ABC&id=1234`|`{productType: MONITOR, name: ABC, id: 1234}`|

---


```js
export const getStaticPaths: GetStaticPaths = async() => {

    return({
        paths: [{params: {id: "1234", name: "ABC", productType: ProductType.MONITOR}}],
        fallback: "blocking"
    })
}

export const getStaticProps: GetStaticProps = async(context) => {
    console.log("🚀 ~ file: index.tsx:94 ~ constgetStaticProps:GetStaticProps=async ~ context:", context)
    ...
}

```
---

### Error Message

#### getStaticProps 沒有拿到 id, name
```js
🚀 constgetStaticProps:GetStaticProps=async ~ context: {
  params: { productType: 'MONITOR' },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
}
```

---

### 相關參考資料
- [Why can't I get query params in getStaticProps? #17529](https://github.com/vercel/next.js/discussions/17529#discussioncomment-88655)
- [Why can't I get query params in `getStaticProps`?](https://stackoverflow.com/questions/64158735/why-cant-i-get-query-params-in-getstaticprops)

---

### 結論

- query parameters 會在 使用者點擊某鍵觸發更新，故觸發時間是 every request
- `getStaticPaths` `getStaticProps` 故觸發時間是 在 build time
- 無法在 build time 知道 query parameters，故兩者不應同時使用
- 修改方向：
  - 回去思考該頁面 使用 query parameters 的必要性，如果為了SEO想使用`getStaticProps`，可否改寫路徑
  - 如果該頁面更新頻繁，是否改成使用 `getServerSideProps` 