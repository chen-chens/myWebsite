---
  sidebar_position: 18
  id: record_next_route_append_twice
  title: Next.js Router Issue
  tags:
    - Next.js
---

## Scernario
> 我把 導覽列放入 `_app.js`，使用 `Next.js` 提供的 `Link` component 去切換 URL。<br/>
> URL 會對應到我配置在 `pages` 資料夾內的 dynamic folder。

資料夾配置：

```
/pages/products/query/[productType]/[...slug]/index.jsx
```

`Link` href 配置：
```
<Link passHref legacyBehavior href={`products/query/${child.productType}/${child.name}/${child.id}`}>
    <a>{child.name}</a>
</Link>
```


## Issue: Path appends pathname when clicking over once.
- 第一次點擊 連結，URL 切換符合預期：

```
    http://localhost:8080/products/query/OOOType/OOOName/OOOId

    router.query:{
        productType: OOOType,
        slug: ['OOOName', 'OOOId']
    }
```
    

- 第二次點擊 連結，URL 出現問題：

```
    http://localhost:8080/products/query/[productType]/products/query/OOOType/OOOName/OOOId


```
---
## 推測問題：
原 dynamic folder 配置 `[...slug]` 會使得第二次 path 把所有 URL 視為 `[...slug]` 的一部分。 

(https://github.com/vercel/next.js/issues/8101)

---
## 參考資源：
- [Next.js Dynamic Folder Precedence](https://nextjs.org/docs/routing/dynamic-routes#caveats)
- [Nextjs routing catchAll and slug folder within a route cannot co-exist?](https://stackoverflow.com/questions/73932576/nextjs-routing-catchall-and-slug-folder-within-a-route-cannot-co-exist)
