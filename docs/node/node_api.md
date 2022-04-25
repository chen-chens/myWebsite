---
sidebar_position: 2
---

# What is API ?
## API 的用途？
:::note 情境：
1. 我到麥當勞櫃檯點餐。
2. 我是顧客 ------------「我要外帶一份麥脆雞塊」------->> 櫃檯人員
3. 櫃檯人員 ------------「請做一份麥脆雞塊」---------->> 後台廚師
4. 櫃檯人員 <<----------「麥脆雞塊一份好惹」------------ 後台廚師
5. 我是顧客 <<----------「麥脆雞塊外帶好惹」------------ 櫃檯人員
:::

#### 這裡的櫃檯人員，就是API，負責傳達客戶(前端)需求 給 廚師(後端)，並回傳廚師(後端) 提供的 餐點(資料) 給 客戶(前端)。

:::note 那如果，今天來了一位奧客...
1. 奧客到麥當勞櫃檯點餐。
2. 這是奧客 ------------「我要內用肯德基全餐!」-------->> 櫃檯人員
3. 這是奧客 <<----------「這裡沒有肯德基全餐!」---------- 櫃檯人員
:::

#### 由此可知，櫃檯人員(API)除了傳遞訊息之外，還會處理錯誤訊息(Bad request)。

### 總結：API 的用途
#### 1. 接收 前端需求，傳遞server回傳的內容。
#### 2. 審核需求，不符格式：回應對應的錯誤訊息（staus code）。


# What is RESTful API ?
- REST: Representational State Transfer(表現層狀態轉移)
- RESTful: 形容詞。
- RESTful API: 具有 RESTful 風格的 API


---
## 參考資源

- [工程師整天掛在嘴邊的API是什麼?](https://medium.com/@Tommmmm/%E5%B7%A5%E7%A8%8B%E5%B8%AB%E6%95%B4%E5%A4%A9%E6%8E%9B%E5%9C%A8%E5%98%B4%E9%82%8A%E7%9A%84api%E6%98%AF%E4%BB%80%E9%BA%BC-7ab8b522d3bc)
- [API 是什麼? RESTful API 又是什麼?](https://medium.com/itsems-frontend/api-%E6%98%AF%E4%BB%80%E9%BA%BC-restful-api-%E5%8F%88%E6%98%AF%E4%BB%80%E9%BA%BC-a001a85ab638)
- [什麼是REST? 認識 RESTful API 路由語義化設計風格](https://tw.alphacamp.co/blog/rest-restful-api)
- [RESTful API 最佳实践](https://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)
- [[第四週] API 基礎 - RESTful API、JSON、curl 指令](https://yakimhsu.com/project/project_w4_Network_API.html)