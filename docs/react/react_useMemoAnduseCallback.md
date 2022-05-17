---
sidebar_position: 6
---

# Hooks - useMemo / useCallBack

## 為了解決什麼問題？
**useMemo vs useEffect** <br />
https://stackoverflow.com/questions/56347639/react-useeffect-vs-usememo-vs-usestate


:::note

```js
useCallback(fn, [deps]) is equivalent to useMemo(() => fn, [deps])
```

- [React 官網節錄](https://reactjs.org/docs/hooks-reference.html#usecallback)
:::

---
## useMemo
- 解決什麼問題：避免重複計算複雜邏輯，將計算結果存起來，做優化使用。
```js
    useMemo(() => {...}, [deps])
    /**
     * Returns a memoized value.
     * 
    */
```

- #### `Remember that the function passed to useMemo runs during rendering.`



---
## useCallback
- 功能：
- 用來記住一個 function instance。
- Returns a memoized callback.
- 使用情境：第一次開啟畫面時，call API 拿資料。

```typescript
    const getMainData = (pageId:string) =>{
        setMainLoading(true)
        ApiGetData(pageId, token || "", dispatch)
        .then(res =>{
            ...
        }).catch(err =>{
            ...
        }).finally(()=>{
            setMainLoading(false)
        })
    }
        
    React.useEffect(()=>{
        getMainData(pageId)
    },[pageId,forceUpdate,token,dispatch])
```
使用 `useEffect` 時，時常會出現以下警告提示：

:::warning ESlint Warning
`eslint-plugin-react-hooks: exhaustive-deps`
    
    src/pages/root_Lend/lend/index.tsx
    Line 83:7: React Hook React.useEffect has a missing dependency: 'getMainData'. Either include it or remove the dependency array react-hooks/exhaustive-deps

#### 提示語 說明：
`ESlint` 表示，`useEffect()` 內提到的變數都應該放入dependency內，以確保變數改變時，會觸發 `useEffect()` 執行。<br />
這個檢查機制很合理，但以上面的程式碼來說，將 function `getMainData` 放入dependency內，只會陷入無窮迴圈。
:::

#### 解決方法: 將 call API 的 funciton 放入 `useCallback(fn, [...])`

```typescript
    // highlight-start
    const getMainData = useCallback((pageId:string) =>{
    // highlight-end
        if(pageId){
            setMainLoading(true)
            ApiGetLendReceiptById(pageId,token || "",dispatch)
            .then(res =>{
                setMainData(res.data)
            }).catch(err =>{
                console.log("ApiGetLendReceiptById : ",err)
                Alertnotification({
                    type :"error", 
                    title: "資訊取得失敗",
                    description: err.message ,
                })
            }).finally(()=>{
                setMainLoading(false)
            })
        }
    // highlight-start
    }, [token, dispatch])
    // highlight-end


    React.useEffect(()=>{
        getMainData(pageId)
    // highlight-start
    },[pageId, forceUpdate, getMainData])
    // highlight-end
```
:::note
#### 1. `useCallback(fn, [deps])` 回傳記住的 `fn` (same address)
#### 2. 透過 `useCallback(fn, [deps])` dependency 來觸發更新 `fn` (renew address)
#### 3. 將 getMainData 放入 `useEffect` dependency 內，只有在 `useCallback` 重新更新 `fn` instance，才會觸發 `useEffect` 
:::

這樣就符合 所有在 `useEffect`內的變數都要帶入 dependency 的規則。

--
useCallback props child example?



---
## 參考資料
- [什麼時候該使用 useMemo 跟 useCallback](https://medium.com/ichef/%E4%BB%80%E9%BA%BC%E6%99%82%E5%80%99%E8%A9%B2%E4%BD%BF%E7%94%A8-usememo-%E8%B7%9F-usecallback-a3c1cd0eb520)

- [JAVASCRIPT物件導向-- 什麼是實體(INSTANCE)?](https://lucrelin.blogspot.com/2016/11/javascript-instance.html)