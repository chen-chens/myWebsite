---
  sidebar_position: 17
  id: record_useEffect_render_order
  title: useEffect render Order
  tags:
    - react
    - useEffect
---


## Situation
- 同一個畫面 有兩個 `useEffect`，兩個 `useEffect` 依據不同 depandency 執行動作，修改同一個 state。

```
export default function OpportunityQuery(){

    useEffect(() => {
        const newConditions = {
            ...conditions,
            accountId: query.companyId?.toString() // query from AccountMain
        }
        queryData(newConditions).then(() => {
            console.log("+++++++ useEffect (1): ", newConditions)
            setConditions(newConditions)
        })
    }, [token, dispatch, forceUpdate, query.companyId]);

    useEffect(() => {
        const newConditionsWithCurrentPage = {
            ...newConditions,
            page: {
                ...newConditions.page,
                page:conditions.page.page
            }
        }
        queryData(newConditionsWithCurrentPage).then(() => {
            console.log("++++++++++++++ useEffect (2): ", newConditions)
            setConditions(newConditionsWithCurrentPage)
        })
    }, [token, dispatch, forceUpdateWithOriginalConditions])

    return(
        <>...</>
    )
}

```

console.log 印出結果：

#### 第一次 render

```
    +++++++ useEffect (1):  {sort: Array(4), page: {…}, accountId: 'cdb5d247-512a-11ed-a2fc-aad51d2c9554'}
    ++++++++++++++ useEffect (2):  {sort: Array(4), page: {…}}
```

#### 之後的 render

```
    +++++++ useEffect (1):  {sort: Array(4), page: {…}, accountId: 'cdb5d247-512a-11ed-a2fc-aad51d2c9554'}
```

### 推測問題：

依照 `useEffect` 的特性，初次渲染：render 畫面 ---> 執行 `useEffect` ---> render 畫面 ---> 檢查 `useEffect` dependency ---> dependency 有變：執行 `useEffect`，dependency 沒變：結束。

目前畫面同時執行 兩次 `useEffect`，第一次的 state 被 第二次 state 覆蓋，導致問題。

---

## Task


---

## Action



---

## Results




---

## 參考資源



--- 

