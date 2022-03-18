---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Redux Toolkit 
用來簡化 Redux 的操作。


## 前置作業

```
    yarn add @reduxjs/toolkit react-redux
```

### 資料夾結構
<Tabs groupId="operating-systems">
  <TabItem value="React in JS" label="React in JS" default>   

```
  └── src
      ├── store
      │    ├── slice
      │    │    └── xx.js
      │    │
      │    ├── store.js
      │    └── index.js
      │
      ├── components
      │    ├── component.js
      │    └── ...
      │
      └── app
           └── index.js
```

  </TabItem>
  <TabItem value="React in Typescript" label="React in Typescript">

```js
  └── src
      ├── store
      │    ├── slice
      │    │    └── xx.ts
      │    │
      // highlight-start
      │    ├── hooks.ts  // 加入 useSelector、useDispatch
      // highlight-end
      │    ├── store.ts
      │    └── index.ts
      │
      ├── components
      │    ├── component.ts
      │    └── ...
      │
      └── app
           └── index.ts
```

  </TabItem>
</Tabs>


## 建立 `store`
- 使用 `configureStore()` 建立 `store`，整合所有 `reducer`

<Tabs groupId="operating-systems">
  <TabItem value="React in JS" label="React in JS" default>   

```js title="src/store/store.js"
    import reducer1 from './slice/xx.js'
    import currentUser from './slice/currentUser.js'

    const store = configureStore({
        reducer: {
            自訂reducer名稱1：reducer1,
            currentUser：currentUser.reducer,
            ...
        }
    })

    export default store;
```

  </TabItem>
  <TabItem value="React in Typescript" label="React in Typescript">

```js title="src/store/store.ts"
    import reducer1 from './slice/xx.ts'
    import currentUser from './slice/currentUser.ts'

    const store = configureStore({
        reducer: {
            自訂reducer名稱1：reducer1,
            currentUser：currentUser.reducer,
            ...
        }
    })

    export default store;

    // highlight-start

    // Infer the `RootState` and `AppDispatch` types from the store itself
    export type RootState = ReturnType<typeof store.getState>
    // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
    export type AppDispatch = typeof store.dispatch

    // highlight-end
```

```js title="src/store/hooks.ts"
    import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
    import type { RootState, AppDispatch } from './store'

    export const useDispatch = () => useDispatch<AppDispatch>();
    export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

  </TabItem>
</Tabs>


### 設定共用資料的權限範圍
- 使用 `Provider` 定義 `store` 的有效範圍。
- 將定義好的 `store` 做為 `props` 傳入。

```js title="src/index.js"
    import { Provider } from 'react-redux'
    import store from './store/store.js'

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                {/* 以下元件都可以拿到 store的共用資料 */}
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
```

## 使用 `createSlice()` 建立 `action`、`reducer`
:::info
Redux Toolkit 提供一API: `createSlice()`<br/>
可以同時建立 `action` 與 `reducer`，節省了之前 Redux 指令配對來配對去的繁瑣。
- `createSlice()` 參數為一物件，包含：
1. `name`: slice名稱，作為 `action.type` 的前綴字
2. `initialState`: 初始值，若沒有 state 會自動回傳，不需要在 reducer 內特別寫。
3. `reducers`: 物件內紀錄所有相關的 `reducer` 與執行動作，並同時產生對應 `action`
4. Actions are plain JavaScript objects that have a type field. 
:::

:::note
- **Redux 執行 reducer「不能」直接操作 state，一定要操作 deep copy state**
- **Redux Tookit 可以直接操作 state，因為這裡使用 [immer](https://immerjs.github.io/immer/)，會幫忙產生拷貝：**
![How Immer works](https://immerjs.github.io/immer/assets/images/immer-4002b3fd2cfd3aa66c62ecc525663c0d.png)
:::

<Tabs groupId="operating-systems">
    <TabItem value="React in JS" label="React in JS" default>   

```js title="src/slice/currentUser.js"
    import { createSlice } from '@reduxjs/toolkit'

    const initialState = {name: "", status: "in_library"};

    const currentUser = createSlice({
        name: "currentUser",
        initialState,
        reducers: {
            指令1: (state, action) => {
                // 回傳更新值
            },
            borrowAbook: (state, action) => {
                state = {...action.payload};
            },
            ...
        }
    })
    export { 指令1, borrowAbook } = currentUser.actions; 
    // {type: "currentUser/borrowAbook", payload: borrowAbook(newValue)}

    export default currentUser.reducer; // 傳進 store
```

  </TabItem>
  <TabItem value="React in Typescript" label="React in Typescript">

```js title="src/slice/currentUser.ts"
    import { createSlice, PayloadAction } from '@reduxjs/toolkit'

    // highlight-start
    interface CurrentUserType{
        name: string;
        status: "in_library" | "borrowed"
    }
    const initialState: CurrentUserType = {name: "", status: "in_library"};

    // highlight-end

    const currentUser = createSlice({
        name: "currentUser",
        initialState,
        reducers: {
            // highlight-start
            指令1: (state, action: PayloadAction<CurrentUserType>) => { // 定義 action.payload 的型別
            // highlight-end

                // 回傳更新值
            },
            // highlight-start
            borrowAbook: (state, action: PayloadAction<CurrentUserType>) => {
            // highlight-end
                state = {...action.payload};
            },
            ...
        }
    })
    export { 指令1, borrowAbook } = currentUser.actions; 
    // {type: "currentUser/borrowAbook", payload: borrowAbook(newValue)}

    export default currentUser.reducer; // 傳進 store
```

  </TabItem>
</Tabs>

## 子元件取得store資料的方法
- `useSelector()`: read the state from the store
- `useDispatch()`: dispatch actions

<Tabs groupId="operating-systems">
    <TabItem value="React in JS" label="React in JS" default>   

```js
    import { useSelector, useDispatch } from 'react-redux'
    import { addItem } from './slice/currentUser.js';

    const Component = () => {
        const data = useSelector((storeState) => (storeState.currentUser));
        const dispatch = useDispatch();

        return(
            <h1>{data.name}目前狀態是：{data.status === "in_library" ? "在館內" : "已借出"}</h1>
            <button onClick={() => {
                const newValue = {name: "Harry Poter", status: "borrowed"}
                dispatch(borrowAbook(newValue))
            }}>借書</button>
        )
    }

    export default Component;
```

  </TabItem>
  <TabItem value="React in Typescript" label="React in Typescript">


```js
    // highlight-start
    import { useSelector, useDispatch } from '../store/hook.ts'
    // highlight-end
    import { addItem } from './slice/currentUser.ts';

    const Component = () => {
        const data = useSelector((storeState) => (storeState.currentUser));
        const dispatch = useDispatch();

        return(
            <h1>{data.name}目前狀態是：{data.status === "in_library" ? "在館內" : "已借出"}</h1>
            <button onClick={() => {
                const newValue = {name: "Harry Poter", status: "borrowed"}
                dispatch(borrowAbook(newValue))
            }}>借書</button>
        )
    }

    export default Component;
```

  </TabItem>
</Tabs>


---
## 參考資源
- [Redux](https://redux.js.org/tutorials/quick-start)
- [Designing Actions](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#designing-actions)