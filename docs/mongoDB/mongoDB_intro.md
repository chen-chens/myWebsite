
# MongoDB Intro



---

## Back End Concept
#### 後端撰寫 Server 應用程式，與 資料庫 互動，兩者 是分開的。
- Server 要與 資料庫 互動，要先啟動資料庫。

![Back End Concept](../../static/img/docs/mongoDB/backEnd_overview.png)

---

## 

- mongod: 
- mongo: 

---

## 常用指令

|指令             |說明|--|--|
|--              |--|--|--|
|--              |--|--|--|
|`use [資料庫名稱]`|如果原本就存在，移動到該資料庫。<br /> 如果沒有，新增一資料庫並移動到該位置。|--|--|
|--               |--|--|--|

---

- db.collections.insertOne()
- db.collections.insertMany()
- db.collections.updateOne()  // patch
- db.collections.replaceOne() // put