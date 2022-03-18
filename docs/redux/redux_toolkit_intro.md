---
sidebar_position: 2
---

# Redux Toolkit 名詞解釋紀錄
用來簡化 Redux 的操作。


### `createSlice`

1. `name` : 
A string name for this slice of state. Generated action type constants will use this as a prefix.
2. `initialState` : 初始值。
3. `reducers` : 
    An object containing Redux "switch-case reducer" functions.
    - The keys in the object will be used to generate string action type constants.
    - If any other part of the application happens to dispatch an action with the exact same type string, the corresponding reducer will be run.
4. `extraReducers` : 
    - As case reducers specified with extraReducers are meant to **reference "external" actions**, they will not have actions generated in slice.actions.
    

:::info
Q : What's difference between `reducers` and `extraReducers` ?<br/>
A : 
     One of the key concepts of Redux is that each slice reducer "owns" its slice of state, and that many slice reducers can independently respond to the same action type. 
     ExtraReducers allows createSlice to respond to other action types besides the types it has generated.
     If two fields from reducers and extraReducers happen to end up with the same action type string, **the function from reducers will be used to handle that action type.**

- `reducers` : 
   - **create an action type.**
   - switch-case function (the slice reducer)
   - Q: When to use ?   <br/>
     A: Most of the time. 

- `extraReducers` :
   - **Do not** **generate any new action types.**
   - extraReducers exists so that a slice reducer can listen to other action types that have already been defined outside the slice.
   - Q: When to use ? <br/>
    A: When you are dealing with an action that you have already defined somewhere else. The most common examples are responding to a createAsyncThunk action and responding to an action from another slice.
:::

---

## `createAsyncThunk(type, payloadCreator, Options)` （待整理）

- `createAsyncThunk` accepts three parameters:
1. `type` : a string action type value
    -   
2. `payloadCreator` : a payloadCreator callback
    - two pararms :
    1. `argument` : a single value (ex. id)
    - Q : pass multiple arguments ? <br />
        A : wrap in an plain object to pass
    2. `thunkAPI` : 
    an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options.
        - dispatch
        - getState
        - ...
3. `Options` : an options object
    -

---
## 參考資源
