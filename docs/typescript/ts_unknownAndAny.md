---
sidebar_position: 2
---

# 型別 unknown vs any

|名稱      |接受任何型別|說明|
|---------|----------|----|
|`unknown`|Ｏ        |限制該型別使用的方法。需要先進行 `typeof`型別檢查，才能執行。<br/>(接收任一型別，但使用前要先限縮範圍)|
|`any`    |Ｏ        |TypeScript 會直接跳過型別檢查，等於跟JS一樣。|

## unknow
### (一) 接受任何型別

```js
    let test: unknown;

    test = "Joanna";
    console.log(test); // "Joanna"

    test = 200;
    console.log(test); // 200

    test = false;
    console.log(test); // false

    test = {id:1, name: "Joanna"};
    console.log(test); // {id:1, name: "Joanna"}

    test = [1, 3, 5, 7, 9];
    console.log(test); // [1, 3, 5, 7, 9]
```

### (二) 限制操作方法 或 取屬性值

因為資料型別是`unknown`，等於無法確認接收的`data`是否為陣列，故顯示錯誤。
```js
    function calc(data: unknown[]){
        return data[0] + data[1];
    }

    calc([10, 15]);
```
:::warning 錯誤訊息顯示：
    Object is of type 'unknown'.
:::

正確寫法：

```js
    function calc(data: unknown[]){
        let newData:number[] = [];

        data.forEach(item => {
            if(typeof item === "number" ){
                newData.push(item);
            }
        })

        return newData.reduce((a, b) => a+b, 0)
    }

    console.log(calc([ 10, 15, {id: 1, age: 20} ])); // 25
```

---
因為資料型別是`unknown`，等於無法確認接收的`data`是否有 `.length` 方法。（只有 陣列 或 字串才有）
```js
    function calc(data: unknown){
        console.log(data.length)
    }

    calc("Joanna");
```
:::warning 錯誤訊息顯示：
    Object is of type 'unknown'.
:::

正確寫法：限縮型別範圍
```js
    function calc(data: unknown){
        if(typeof data === "string"){
            console.log(data.length)
        }
    }

    calc("Joanna"); // 6
```

### [ ✎ DEMO](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABBAhgGwgCgCYqigLkXAGsw4B3MAbQF0BKAbwFgAoRDxNAUykTG4UAInkJgQAWwBG3AE51EAXkR0A3GzadEufADpgcWQFEUEABaYYUbhKUA+RC3ZbOMYJigBPAA7c4wRCsbJUVlACJxaTkwxCZNFwSBYVFdbxAAZwsgiXp1ZwSAX3iOAvoNfMRZXhBZJCSRPSrsEAhuTEwUABpEKXp7RBQAailugAYy1iLWNggEdLgeXTQ4AHNMVAxMagBGUe7tgFZuxhhsIm3ulBXuIgAmUYKGXPKX6begA)

---

## 參考資料
- [【Day 16】TypeScript 資料型別 - 特殊型別(下)- Any & Unknown](https://ithelp.ithome.com.tw/articles/10223315)
- [New unknown top type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)