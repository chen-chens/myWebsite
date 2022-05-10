---
sidebar_position: 5
id: calcNumber
title: 處理數字計算的方法
tags:
- Math.floor()
- Math.around()
- Math.ceil()
---

### 四捨五入: `Math.round()`

```js
    console.log(Math.round(4.28));  // 4
    console.log(Math.round(7.88));  // 8
    console.log(Math.round(0.55));  // 1
    console.log(Math.round(-0.23)); // -0 **
    console.log(Math.round(-0.79)); // -1 **
```

---
### 無條件捨去: `Math.floor()`
#### 取整數，依據：小於浮點數的整數
```js
    console.log(Math.floor(4.28));  // 4
    console.log(Math.floor(7.88));  // 7
    console.log(Math.floor(0.55));  // 0
    console.log(Math.floor(-0.23)); // -1 **
    console.log(Math.floor(-0.79)); // -1 **
```

---
### 無條件進位: `Math.ceil()`
#### 取整數，大於或等於 浮點數的整數

```js
    console.log(Math.ceil(4.28));  // 5
    console.log(Math.ceil(7.88));  // 8
    console.log(Math.ceil(0.55));  // 1
    console.log(Math.ceil(-0.23)); // -0 **
    console.log(Math.ceil(-0.79)); // -0 **
```

---
## 參考資料
- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference)