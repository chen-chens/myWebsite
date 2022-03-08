---
sidebar_position: 4
---

# async Func.

## Q: 為了解決什麼問題？
### 先來了解 Synchronous Code Execution
- Javascript特性：執行項目是檔案由上往下，一個執行完才執行下一個（single thread: one-by-one）。
- 情境：使用者瀏覽網頁，點擊內容後向server要資料。在server回傳資料與渲然網頁之前，使用者無法執行其他操作，只能原地乾等。
    （使用者以為當機，但其實是在等待回傳資料）**(Blocking Code)**

![js_synchronous_code_execution](../../static/img/docs/js/js_synchronous_code_execution.png)

為了解決上述情境遇到的問題，我們可以使用 瀏覽器提供的 API，讓我們可以同一時間執行多樣動作。
（當使用者點擊內容時，向server要資料要資料的動作躲在瀏覽器背景執行。 等待server回傳同時，使用者可以繼續瀏覽網頁，或點擊更多request）

![js_api_concept](../../static/img/docs/js/js_api_concept.png)

---
### How Code is Parsed & Compiled - JavaScript Engine (概觀)
![How Code is Parsed & Compiled - JavaScript Engine](../../static/img/docs/js/js_js_engine_concept.png)

### Inside the JavaScript Engine - How the CodeExecutes (深究)
![Inside the JavaScript Engine - How the CodeExecutes](../../static/img/docs/js/js_js_engine_execute.png)

### Call Api processure - queque & event loop (深究)
#### Processure:
1. parse code
2. store in heap memory
3. execute in call stack
4. async function go to browser background, waiting for server response.
5. when server response, moving async function to callback queue. At the same time, functions in stack is running.
6. event loop will check all functions are done in stack. When the stack is empty, moving async function to the stack.
7. execute the callback function, and pop out(return to heap memory).
8. done.

![js_queueAndEventLoop](../../static/img/docs/js/js_queueAndEventLoop.png)[圖片來源](https://www.itread01.com/content/1544934003.html)

---
## Promise


---
## `async` `await`


--- 
## 參考資源
- [淺淡 JS Engine 機制](https://medium.com/walkout/%E6%B7%BA%E6%B7%A1-js-engine-%E6%A9%9F%E5%88%B6-77391b4dd3db)
- [影片中詳細解釋，JS runtime、block statck、Event Loop用途、render卡住變慢的原因](https://www.youtube.com/watch?time_continue=1607&v=8aGhZQkoFbQ&feature=emb_logo)
- [setTimeout為什麼不準時？淺談JavaScript的event loop運作方式](https://chiangbao1999.medium.com/settimeout%E7%82%BA%E4%BB%80%E9%BA%BC%E4%B8%8D%E6%BA%96%E6%99%82-%E6%B7%BA%E8%AB%87javascript%E7%9A%84event-loop%E9%81%8B%E4%BD%9C%E6%96%B9%E5%BC%8F-3df1aeb4c032)
- [[JavaScript] Javascript 的事件循環 (Event Loop)、事件佇列 (Event Queue)、事件堆疊 (Call Stack)：排隊](https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625)
- [[第十六週] JavaScript 進階：事件迴圈 Event Loop、Stack、Queue](https://yakimhsu.com/project/project_w16_EventLoop.html)