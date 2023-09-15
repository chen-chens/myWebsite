
# MongoDB Connection

*紀錄 Node.js 連線 本地 MongoDB 與 遠端 MongoDB Atlas 的寫法。*

- 使用 `mongoose` 依賴。 [mongoose 連結](https://mongoosejs.com/)
    ```js 
        yarn add mongoose
    ```
- 連結方式：
    ```js title="Node.js 連結 mongoDB"
        import mongoose from "mongoose";

        mongoose
        .connect(<MongoDB資料庫路徑>)
        .then(()=> {})
        .catch(()=> {})
    ```

- MongoDB資料庫路徑:
    - 本地：`mongodb://localhost:27017/<資料庫名稱>` (路徑來源：開啟 MongoDB Compass)
    - 遠端：`mongodb+srv://<管理員名稱>:<管理員密碼>@cluster0.silo2dw.mongodb.net/<資料庫名稱>?retryWrites=true&w=majority`
        - [MongoDB](https://cloud.mongodb.com/) 註冊會員
        - Create a Project
        - Database Access: 新增一位管理員帳號, 密碼。(用來連結 Node.js 與 MongoDB 遠端連線路徑)
        - NetWork Access: Add IP Adress (可以先選擇 Allow Access From Everywhere)
        - Deploy Database -> Create Free Cluster0 -> Connect -> 取得遠端連線路徑，替換 **<管理員名稱>** **<管理員密碼>** **<資料庫名稱>**


- 將資料庫位址，用 環境變數 保護

```js title=".env"
MONGO_DB_LOCAL_URL=mongodb://localhost:27017/<資料庫名稱>
MONGO_DB_REMOTE_URL=mongodb+srv://<管理員名稱>:<管理員密碼>@cluster0.silo2dw.mongodb.net/<資料庫名稱>?retryWrites=true&w=majority
```

```js title="server.js"
    // 引入需要的環境變數
    mongoose
    .connect(process.env.MONGO_DB_REMOTE_URL!) // 驚嘆號代表：我保證這環境變數一定有值
    .then(()=> {})
    .catch(()=> {})
```

---

## Schema, Model, Collection, Instance
- #### Schema
    - 定義該 Collections 內的資料型別，進階也可以做進一步資料驗證，做第一輪防守員。
- #### Model
    - 連結指定的 Collections 與 Schema，操作資料庫資料。
- #### Collections
    - 資料庫內的其中一個資料夾。
- #### Instance
    - 資料夾內的資料。

#### 如何運作？
1. 先定義好 **Schema**，確認資料有哪些內容、型別、必填與否 等等
2. 建立 **Model**，名稱常規使用**大寫**，連結 **Collection** 與 **Schema**
3. 新建一筆資料到指定 **Collection**:
    - 使用 `new` 建立一Model與新資料。
    - 新資料經過 **Schema** 過濾確認符合設定要求。
4. **Model** 使用 `save()` 方法，將資料新增建 **Collection** 內。
    - 即新建一 **Instance** 到 **Collection** 內。
---

```js
    const schemaName = new mongoose.Schema(<定義資料型別或檢查機制>, <其他設置>)
    const ModelName = mongoose.model(<Collection名稱>, <對應的Schema名稱>);
    const newData = new <ModelName>(<一筆資料>);

    newData
    .save(newData)
    .then()
    .catch()
```


:::warning 
### 在 Model 建立的 Collection 名稱，與我們所想的不一樣。

MongoDB 的特性：
- Collection 名稱首字自動小寫
- Collection 名稱尾巴自動加s

所以即使我指定命名 Collection 為 `User`，像是：

```js
    const UserModel = mongoose.model("User", {email: "example@gmail.com", password: "1234"});
```

MongoDB 存取的 Collection 會自動轉為：`users`

::::


---

## 補充：
### 隱藏 virsionKey
- [mongoose 說明](https://mongoosejs.com/docs/guide.html#versionKey)

我想新增一筆資訊時，時常會看到 MongoDB 會產生原本 Schema 沒有定義的欄位：
- `_id`: 自動產生一uniqueId。
- `__v`: virsionKey

```
{
  "_id": {
    "$oid": "6502af7179a52ba2772bd713"
  },
  "password": "password",
  "email": "example@gmail.com",
  "__v": 0
}
```

#### 如果我要隱藏 virsionKey ?
在建立Schema時，以 `new` 關鍵字 建立的 Schema，第二個參數可以帶入「其他設置」。

```js
    const schemaName = new mongoose.Schema(<定義資料型別或檢查機制>, <其他設置>)
```

我們可以在「其他設置」中加入 `{virsionKey: false}`，關閉 virsionKey。

```js
    const schemaName = new mongoose.Schema(<定義資料型別或檢查機制>, {virsionKey: false})
```

:::warning
Document versioning can also be disabled by setting the versionKey to false. DO NOT disable versioning unless you know what you are doing.

- [option: versionKey](https://mongoosejs.com/docs/guide.html#versionKey)
:::

### 自動建立：`createAt` 與 `updateAt`
在 Schema 第二個參數加入 `{timestamps: true}`，每次新建或修改一筆資料，MongoDB 會自動更新。

```js
    const schemaName = new mongoose.Schema(<定義資料型別或檢查機制>, {timestamps: true})
```