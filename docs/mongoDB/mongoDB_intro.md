
# MongoDB Intro



---

## Back End Concept
#### 後端撰寫 Server 應用程式，與 資料庫 互動，兩者 是分開的。
- Server 要與 資料庫 互動，要先啟動資料庫。

![Back End Concept](../../static/img/docs/mongoDB/backEnd_overview.png)


---
## Database, Schema, Model, Collection, Document
- Database: 相當於 Execl 的檔案名稱。
- Schema: 定義文件的型別與驗證條件。
- Model: 依據 Schema 產生的實例，對應到指定 Collection。用於 操作 CRUD 資料（Document）的方法。
  - `mongoose.model("ModelName", <Schema>);`
- Collection: 儲存 資料（Document）的 容器，相當於 Execl 的頁籤。
- Document: 相當於 Execl 上輸入的一筆資料。


---

## 

- `mongod`: 啟動 mongoDB 伺服器(服務)。
- `mongosh`: mongo shell，使用指令的方式，對 mongoDB 資料庫進行存取管理。支援使用 JavaScript 編寫腳本，可以讓你更方便地處理和轉換數據。
- `mongoose`: 是一個基於 Node.js 平台的 MongoDB ODM（Object Document Mapping），用於在 Node.js 中定義模型和處理 MongoDB 的操作。Mongoose 可以幫助你在 Node.js 中管理 MongoDB 資料庫。
- `compass`: mongoDB GUI，可視化資料庫資料。

---

## 常用指令

|指令             |說明|--|--|
|--              |--|--|--|
|`show dbs`      |顯示資料庫有哪些內容。|--|--|
|`use [資料庫名稱]`|如果原本就存在，移動到該資料庫。<br /> 如果沒有，新增一資料庫並移動到該位置。|--|--|
|--               |--|--|--|

---

- db.collections.insertOne()
- db.collections.insertMany()
- db.collections.updateOne()  // patch
- db.collections.replaceOne() // put



---
TBD

```js title="req.url 並使用 GET 方法，回傳從 mongoDB 撈到的資料"

app.get("/", async (req: Request, res: Response) => {
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, PATCH, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };

  if (req.url === "/" && req.method === "GET") {
    const members = await Member.find();
    res.writeHead(200, headers);
    res.write(
      JSON.stringify({
        status: "success",
        members,
      }),
    );
  }
  res.end();
});

app.listen(8080, "localhost", () => {
  console.log("Server is running again!");
});

```


```js title="新增資料方法一"
// Create an instance
const testData = new Member({
  email: "test2@gmail.com",
  name: "Joanna",
  password: "password",
});
Add instance to DB
testData
  .save()
  .then(() => {
    console.log("新增資料庫成功！");
  })
  .catch((error) => {
    console.log("新增資料庫失敗！", error);
  });
```


```js title="新增資料方法二"
Member.create({
  id: "Joanna",
  email: "test223333sss@gmail.com",
  name: "JoannaOO",
  password: "passwordOO",
})
  .then(() => {
    console.log("寫入資料庫成功！");
  })
  .catch((err) => {
    console.log("寫入資料庫失敗！", err);
  });
```