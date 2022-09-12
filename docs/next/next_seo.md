---
sidebar_position: 3
tags:
    - Next.js
    - SEO
---


# Search Engine Optimization

:::success This sections will talk about SEO from the end of golden circle to start of why.

- [What is SEO ?](#what-is-seo-)
- [How dose Google engine work ?](#how-dose-google-engine-work-)
- [Why we should improve SEO ?](#why-we-should-improve-seo-)
:::

---

## What is SEO ?
- Search Engine Optimization
- 幫助使用者在搜尋資料時，依據最相關的資訊顯示排名，有助於提升 使用者體驗。
## How dose Google engine work ?
## Why we should improve SEO ? 
- 當企業或個人網頁顯示在越前面，表示使用者（潛在客戶）看到的機會就越大，也可以藉此擴大商機。
## Why is SEO so important ?

---

## Overview of Search Engine Work
### (一) Crawling
- Crawling Queue
- Send Http request By URL
    - `2XX` : Parse HTML
    - `3XX` : Redirect URL
    - `4XX` : Won't parse HTML
    - `5XX` : Will come back later --> Crawling Queue

:::note redirect status code

|Status Code|Description|Note|More|
|--|--|--|--|
|`301`|Moved permanently|Redirect new URL. <br />Allowed to change HTTP method `POST` to `GET` when redirecting.|Most common used|
|`308`|Permanent Redirect|Redirect new URL. <br />**Not Allowed** change HTTP method when redirecting..|**Next.js used**|
|`302`|Found|Redirect URL temporarily.|ex. <br />Redirect to promotion page.|

---

You can trigger a 308 redirect in Next.js by returning a redirect instead of props in the `getStaticProps()` function.
- [Next 官網](https://nextjs.org/learn/seo/crawling-and-indexing/status-codes)

```js
    {
        permanent: true; // trigger 308
    }
```
:::

:::caution client-side error
|Status Code|Description|Note|More|
|--|--|--|--|
|`404`|Not Found|Client side error.|Can customized 404 page in Next.js.|
|`410`|Gone|Client side error. <br />Indicates the target URL is no longer available at the server. **Won't existed permanently.** |ex. <br />Products permanently removed from inventory.<br /> Blog post removed.|

```js
    {
        notFound: true; // trigger 404 & redirect to customized 404 page
    }
```
:::

:::success server-side error
|Status Code|Description|Note|More|
|--|--|--|--|
|`500`|Internal Server Error|--|Can customized 404 page in Next.js.|
|`503`|Service Unavailable|The server is not ready to handle the request.<br />Common causes are a server that is down for maintenance or that is overloaded. |**Use `503` for long-term server maintance. <br />This prevents losing rankings on a long-term basis.**|

:::

### (二) Indexing
- Meet criteria: Build Index
- Store contents

### (三) Rendering
- Rendering

### (四) Ranking
- 



---
網路爬蟲與機器人的用戶代理字串
如果是爬蟲來爬網站，HTTP Request Headers 內的 `User Agent` 會長這樣：
example
```
    User-Agent: Googlebot/2.1 (+http://www.google.com/bot.html)
```