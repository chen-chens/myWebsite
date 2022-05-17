---
sidebar_position: 10
---

# Proxy

## 情境
我想要在開發階段，同時在通一個專案內執行 React ＋ Node.js，但是該怎麼做？



## [用React刻自己的投資Dashboard Day7 - CORS與Proxy Server](https://ithelp.ithome.com.tw/articles/10269560)


---
## 參考資源 與 筆記重點
- Keep in mind that proxy only has effect in development (with npm start).
- The proxy option supports HTTP, HTTPS and WebSocket connections.
    - [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
- 
- [Why you should use a proxy server with Create React App](https://blog.logrocket.com/why-you-should-use-proxy-server-create-react-app/)
    - Client ------------------(API request)---------------> Proxy server -----(1.Extra Protection from hacker attack / 2.Transmit request URL / 3.cache request)-----> Server
    - Client <-----------------(API request)---------------- Proxy server <-----(server response)----- Server
    - Client <-----(http://localhost.XXX/search?id=123)-----> Proxy server <-----(https://www.XXX.com/search?id=123)-----> Server
    - 延伸：
        1. CORS
        2. 同源政策
        3. HTTP protocol