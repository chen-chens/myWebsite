---
  sidebar_position: 11
  id: record_searchInput_live_call_api
  title: How to prevent search input from calling too much request?
  tags:
    - setTimeout()
---

- `onblur`: trigger event when user leaves the input field.
- `onfocus`:

- `setTimeout()`: 
![record_setTimeout()](../../static/img/docs/record/record_setTimeout().png)

- `setInterval()`: 
![record_setInterval()](../../static/img/docs/record/record_setInterval().png)

### Q:「假設想透過迴圈 + setTimeout() 來實作，在五秒鐘之內，每秒鐘依序透過 console.log() 印出： 0 1 2 3 4 。」


---
## 參考資源
- [Execute api request when user stops typing search box.](https://stackoverflow.com/questions/66394801/execute-api-request-when-user-stops-typing-search-box)
- [Making API calls based on User Input on a Search field.](https://stackoverflow.com/questions/70729992/making-api-calls-based-on-user-input-on-a-search-field)

- [談談 JavaScript 的 setTimeout 與 setInterval](https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/)
