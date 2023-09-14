# MongoDB Shell

*使用終端機操作 MongoDB。*

## MongoDB Shell 
- `mongosh`: 啟動 MongoDB Shell。
    - mongo shell，使用指令的方式，對 MongoDB 資料庫進行存取管理。支援使用 JavaScript 編寫腳本，可以讓你更方便地處理和轉換數據。
- `mongod`: 啟動 MongoDB 伺服器(服務)。

- `mongoose`: 是一個基於 Node.js 平台的 MongoDB ODM（Object Document Mapping），用於在 Node.js 中定義模型和處理 MongoDB 的操作。Mongoose 可以幫助你在 Node.js 中管理 MongoDB 資料庫。
- `compass`: MongoDB GUI，可視化資料庫資料。

---
## 常用指令

|指令              |說明|補充|
|--               |--|--|
|`mongosh`        |啟動 MongoDB Shell。|--|
|`show dbs`       |顯示資料庫有哪些內容。|--|
|`use <資料庫名稱>` |如果原本就存在，移動到該資料庫。<br /> 如果沒有，新增一資料庫並移動到該位置。|如果新增一資料庫，馬上執行`show dbs`，是看不到剛剛新增的資料庫名單，要等 Collection 新增才會顯示。|
|`db.<Colleection 名稱>.insertOne(<一筆資料>, <其他設置>)`        |在指定 Collection 中新增一筆資料(**物件格式撰寫**)。如果沒有 Collection，就進行新增。|--|
|`db.<Colleection 名稱>.insertMany(<多筆資料>, <其他設置>)`       |在指定 Collection 中新增一筆資料(**陣列格式撰寫**)。如果沒有 Collection，就進行新增。|--|
|`db.<Colleection 名稱>.findOne(<查詢條件>)`                     |在指定 Collection 中，依查詢條件回傳**第一筆**符合的資料。|--|
|`db.<Colleection 名稱>.find(<查詢條件>)`                        |在指定 Collection 中，依查詢條件回傳符合的資料。|--|
|`db.<Colleection 名稱>.updateOne(<條件>, <更新內容>, <其他設置>)` |在指定 Collection 中更新**第一筆**符合設定條件資料內容。|--|
|`db.<Colleection 名稱>.updateMany(<條件>, <更新內容>, <其他設置>)`|在指定 Collection 中更新所有符合設定條件的資料內容。|--|--|
|`db.<Colleection 名稱>.replaceOne(<條件>, <更新內容>, <其他設置>)`|在指定 Collection 中替換符合設定條件的資料內容。|是整筆資料做替換，不是部分有提到屬性值做更新。|
|`db.<Colleection 名稱>.deleteOne(<條件>, <其他設置>)`            |在指定 Collection 中刪除**第一筆**符合設定條件資料內容。|--|
|`db.<Colleection 名稱>.deleteMany(<條件>, <其他設置>)`           |在指定 Collection 中刪除所有符合設定條件的資料內容。|--|
|--               |--|--|
|--               |--|--|
|--               |--|--|
|--               |--|--|


### 執行 `mongosh` 範例
```js title="Terminal"
MacBook-Pro ~ % mongosh
Current Mongosh Log ID:	650156cba4f5f79d14960c7a
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6
Using MongoDB:		6.0.5
Using Mongosh:		1.10.6
```

### 執行 `show dbs` `use [資料庫名稱]` 範例

```js title="Terminal"
test> show dbs
admin    72.00 KiB
config   72.00 KiB
local    80.00 KiB
test    284.00 KiB

test> use hotel
switched to db hotel

hotel> show dbs
admin    72.00 KiB
config   96.00 KiB
local    80.00 KiB
test    284.00 KiB
hotel> 
```

### 執行 `db.<Colleection 名稱>.findOne(<查詢條件>)` `db.<Colleection 名稱>.find(<查詢條件>)` 範例
```js title="Terminal"

```

- ### 查詢操作符寫法

  |操作符|用途|用法|
  |--|--|--|
  |`$eq`|等於|`{屬性: {$eq: 查詢數值}}`|
  |`$ne`|不等於|`{屬性: {$ne: 查詢數值}}`|
  |`$gt`|大於|`{屬性: {$gt: 查詢數值}}`|
  |`$gte`|大於等於|`{屬性: {$gte: 查詢數值}}`|
  |`$lt`|小於|`{屬性: {$lt: 查詢數值}}`|
  |`$lte`|小於等於|`{屬性: {$lte: 查詢數值}}`|
  |--|--|--|
  |`$in`|陣列值內符合其中一個即滿足條件。|`{屬性: {$in: [查詢值1, 查詢值2]}}` <br /> 符合「查詢值1」或「查詢值2」|
  |`$nin`|陣列值內不符合其中一個即滿足條件。|`{屬性: {$nin: [查詢值1, 查詢值2]}}` <br /> 不符合「查詢值1」或「查詢值2」|
  |--|--|--|
  |--|--|--|

  ```js title="Terminal"
    [
      {
        _id: ObjectId("650160f3a4f5f79d14960c7c"),
        name: '加大單人房',
        price: 2500,
        rating: 5
      },
      {
        _id: ObjectId("650160f3a4f5f79d14960c7d"),
        name: '無對外窗單人房',
        price: 1500,
        rating: 4.3
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b33109"),
        name: '單人房單人房1',
        price: 1500,
        rating: 3.8,
        payment: [ 'ATM', 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310a"),
        name: '單人房單人房2',
        price: 1800,
        rating: 4.3,
        payment: [ 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310b"),
        name: '單人房單人房3',
        price: 800,
        rating: 3,
        payment: [ 'ATM', 'CASH', 'Credit Card' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310c"),
        name: '單人房單人房4',
        price: 2200,
        rating: 4.1,
        payment: [ 'ATM' ]
      },
      {
        _id: ObjectId("650265fb0c3a09eaa8b33106"),
        name: '雙人房1',
        price: 5000,
        rating: 5
      }
    ]
  ```

  - #### $lte 查詢
    ```js title="Terminal"
    hotel> db.rooms.find({price: {$lte: 1500}})
    [
      {
        _id: ObjectId("650160f3a4f5f79d14960c7d"),
        name: '無對外窗單人房',
        price: 1500,
        rating: 4.3
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b33109"),
        name: '單人房單人房1',
        price: 1500,
        rating: 3.8,
        payment: [ 'ATM', 'CASH' ]
      },
    ]
  ```

  - #### $eq 查詢
  ```js title="Terminal"
  hotel> db.rooms.find({price: {$eq: 5000}})
  [
    {
      _id: ObjectId("650265fb0c3a09eaa8b33106"),
      name: '雙人房1',
      price: 5000,
      rating: 5
    }
  ]
  ```

  - #### $in 查詢
  ```js title="Terminal"
    // 使用 $in 查詢： ＊＊只要包含 CASH 或 ATM 都成立＊＊
    hotel> db.rooms.find({payment: {$in: ["CASH", "ATM"]}})
    [
      {
        _id: ObjectId("65026de70c3a09eaa8b33109"),
        name: '單人房單人房1',
        price: 1500,
        rating: 3.8,
        payment: [ 'ATM', 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310a"),
        name: '單人房單人房2',
        price: 1800,
        rating: 4.3,
        payment: [ 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310b"),
        name: '單人房單人房3',
        price: 800,
        rating: 3,
        payment: [ 'ATM', 'CASH', 'Credit Card' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310c"),
        name: '單人房單人房4',
        price: 2200,
        rating: 4.1,
        payment: [ 'ATM' ]
      }
    ]
  ```
  - #### 複合式查詢
  使用情境：我想查詢價格<=2500，且付款方式可接受轉帳ATM。

  ```js title="Terminal"
    hotel> db.rooms.find({price: {$lte: 2500}, payment: {$in: ["ATM"]}})
    [
      {
        _id: ObjectId("65026de70c3a09eaa8b33109"),
        name: '單人房單人房1',
        price: 1500,
        rating: 3.8,
        payment: [ 'ATM', 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310b"),
        name: '單人房單人房3',
        price: 800,
        rating: 3,
        payment: [ 'ATM', 'CASH', 'Credit Card' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310c"),
        name: '單人房單人房4',
        price: 2200,
        rating: 4.1,
        payment: [ 'ATM' ]
      }
    ]
  ```

  - #### $nin 查詢
  ```js title="Terminal"
    // 使用 $nin 查詢： ＊＊只要不包含 CASH 或 ATM 都成立＊＊
    hotel> db.rooms.find({payment: {$nin: ["ATM", "CASH"]}})

    [
      {
        _id: ObjectId("650160f3a4f5f79d14960c7c"),
        name: '加大單人房',
        price: 2500,
        rating: 5
      },
      {
        _id: ObjectId("650160f3a4f5f79d14960c7d"),
        name: '無對外窗單人房',
        price: 1500,
        rating: 4.3
      }
    ]
  ```

- ### 正規表達式寫法
  - 想查詢包含的關鍵字，而非完整寫出來屬性值的時候，可以使用正則表達式查詢。
  - 使用：`/關鍵字詞寫這裡/`

  ```js title="Terminal"
    hotel> db.rooms.find({name: /單人/})
    [
      {
        _id: ObjectId("650160f3a4f5f79d14960c7c"),
        name: '加大單人房',
        price: 2500,
        rating: 5
      },
      {
        _id: ObjectId("650160f3a4f5f79d14960c7d"),
        name: '無對外窗單人房',
        price: 1500,
        rating: 4.3
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b33109"),
        name: '單人房單人房1',
        price: 1500,
        rating: 3.8,
        payment: [ 'ATM', 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310a"),
        name: '單人房單人房2',
        price: 1800,
        rating: 4.3,
        payment: [ 'CASH' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310b"),
        name: '單人房單人房3',
        price: 800,
        rating: 3,
        payment: [ 'ATM', 'CASH', 'Credit Card' ]
      },
      {
        _id: ObjectId("65026de70c3a09eaa8b3310c"),
        name: '單人房單人房4',
        price: 2200,
        rating: 4.1,
        payment: [ 'ATM' ]
      }
    ]
  ```

- ### 關鍵字保護寫法
  - 有些情況，我們不希望資料內敏感資訊回傳，可以使用這樣的寫法。
  - 使用：`{指定保護屬性：0}`

  ```js title="Terminal"
    hotel> db.rooms.find({name: /雙人/}, {_id: 0})
    [
      { name: '雙人房1', price: 5000, rating: 5 },
    ]
  ```


### 執行 `db.<Colleection 名稱>.insertOne(<一筆資料>, <其他設置>)` 範例
```js title="Terminal"
hotel> db.rooms.insertOne({name: "標準單人房", "price": 1000, "rating": 4})
{
  acknowledged: true,
  insertedId: ObjectId("65015ecfa4f5f79d14960c7b")
}

hotel> db.rooms.find()
[
  {
    _id: ObjectId("65015ecfa4f5f79d14960c7b"),
    name: '標準單人房',
    price: 1000,
    rating: 4
  }
]
```

### 執行 `db.<Colleection 名稱>.insertMany(<多筆資料>, <其他設置>)` 範例

```js title="Terminal"
hotel> db.rooms.insertMany([{name: "加大單人房", "price": 2000, "rating": 5}, {name: "無對外窗單人房", "price": 1500, "rating": 4.3}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("650160f3a4f5f79d14960c7c"),
    '1': ObjectId("650160f3a4f5f79d14960c7d")
  }
}
hotel> db.rooms.find()
[
  {
    _id: ObjectId("650160f3a4f5f79d14960c7c"),
    name: '加大單人房',
    price: 2000,
    rating: 5
  },
  {
    _id: ObjectId("650160f3a4f5f79d14960c7d"),
    name: '無對外窗單人房',
    price: 1500,
    rating: 4.3
  }
]
```

### 執行 `db.<Colleection 名稱>.updateOne(<條件>, <更新內容>, <其他設置>)` 範例
- **使用 `{$set: {屬性：更新值}}` 操作符執行更新內容**

```js title="Terminal"
hotel> db.rooms.updateOne({"_id": ObjectId("65015ecfa4f5f79d14960c7b")}, {"$set": {name: "升級單人房"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,  // 如果有符合條件的筆數
  modifiedCount: 1, // 如果有完成修改內容的筆數
  upsertedCount: 0
}

hotel> db.rooms.find({name: '升級單人房', price: 1000})
[
  {
    _id: ObjectId("65015ecfa4f5f79d14960c7b"),
    name: '升級單人房',
    price: 1000,
    rating: 4
  }
]
```

### 執行 `db.<Colleection 名稱>.updateMany(<條件>, <更新內容>, <其他設置>)` 範例
- **使用 `$set` 操作符執行更新內容**

```js title="Terminal"
hotel> db.rooms.find()
[
  {
    _id: ObjectId("65015ecfa4f5f79d14960c7b"),
    name: '升級單人房',
    price: 1200,
    rating: 4
  },
  {
    _id: ObjectId("650160f3a4f5f79d14960c7c"),
    name: '加大單人房',
    price: 2000,
    rating: 5
  },
  {
    _id: ObjectId("650179c2a4f5f79d14960c7f"),
    name: '普通雙人床',
    price: 2000,
    rating: 3
  }
]

hotel> db.rooms.updateMany({"price": 2000}, {"$set": {"price": 2500}})

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

hotel> db.rooms.find()
[
  {
    _id: ObjectId("65015ecfa4f5f79d14960c7b"),
    name: '升級單人房',
    price: 1200,
    rating: 4
  },
  {
    _id: ObjectId("650160f3a4f5f79d14960c7c"),
    name: '加大單人房',
    price: 2500,
    rating: 5
  },
  {
    _id: ObjectId("650179c2a4f5f79d14960c7f"),
    name: '普通雙人床',
    price: 2500,
    rating: 3
  }
]
```

### 執行 `db.<Colleection 名稱>.replaceOne(<條件>, <更新內容>, <其他設置>)` 範例
```js title="Terminal"
hotel> db.rooms.find({"_id": ObjectId("650179c2a4f5f79d14960c7f")})

[  
  {
    _id: ObjectId("650179c2a4f5f79d14960c7f"),
    name: '普通雙人床',
    price: 2500,
    rating: 3
  }
]

hotel> db.rooms.replaceOne({"_id": ObjectId("650179c2a4f5f79d14960c7f")}, {name: "[特價]雙人房型", "beforeDate": "2023-09-31"})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

hotel> db.rooms.find({"_id": ObjectId("650179c2a4f5f79d14960c7f")})
[
  {
    _id: ObjectId("650179c2a4f5f79d14960c7f"),
    name: '[特價]雙人房型',
    beforeDate: '2023-09-31'
  }
]
```

### 執行 `db.<Colleection 名稱>.deleteOne(<條件>, <其他設置>)` `db.<Colleection 名稱>.deleteMany(<條件>, <其他設置>)` 範例
```js title="Terminal"
hotel> db.rooms.find()
[
  {
    _id: ObjectId("65015ecfa4f5f79d14960c7b"),
    name: '升級單人房',
    price: 1200,
    rating: 4
  },
  {
    _id: ObjectId("650160f3a4f5f79d14960c7c"),
    name: '加大單人房',
    price: 2500,
    rating: 5
  },
  {
    _id: ObjectId("650160f3a4f5f79d14960c7d"),
    name: '無對外窗單人房',
    price: 1500,
    rating: 4.3
  },
  {
    _id: ObjectId("6501799ba4f5f79d14960c7e"),
    name: '外加單人床',
    price: 1200
  }
]

hotel> db.rooms.deleteOne({"_id": ObjectId("650179c2a4f5f79d14960c7f")})
{ acknowledged: true, deletedCount: 1 }

hotel> db.rooms.deleteMany({price: 1200})
{ acknowledged: true, deletedCount: 2 }
```