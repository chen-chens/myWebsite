---
  sidebar_position: 19
  id: record_typescript_api_error
  title: Why try/catch error type
  tags:
    - Typescript
---

## 問題情境
#### 當我使用 Typescript call API時，我想定義 API 回傳的錯誤型別，但編輯器顯示以下錯誤:

```js
const getData = async() => {
    try{
        const res = await ApiGetData()
        return res.data

    // highlight-start
    }catch(err: 我想定義錯誤型別){
    // highlight-end

        console.log("ApiGetData err: ", err)
    }
}
```

### Error Message

```
Catch clause variable type annotation must be 'any' or 'unknown' if specified.
```

## 目前查到的資料

:::info
Typescript doesn't let you do that because there's no way that typescript can verify at compile time that the only thing the code can throw is a ValidationError. For that matter, you don't know that either: what if you get a RangeError, because the maximum call stack has been exceeded? Obviously that's unlikely (you'd have to build up a big call stack before calling this), but nothing about this code can guarantee that it won't happen.

- [Why Catch clause variable type annotation must be any?](https://stackoverflow.com/questions/69021040/why-catch-clause-variable-type-annotation-must-be-any)

:::


---

