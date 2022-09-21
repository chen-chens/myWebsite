---
sidebar_position: 1
tags:
    - SQL
---

# SQL Foundations
- Structured Query Language
- 同時可以有好幾個人訪問資料庫，並回傳相對應的內容。
- One Database is composed of mutiple tables.

## Table Rules
- Table name should not be capitalized.
- Table name prefers plural.
- Table rows and columns are reffered to `records` and `fields`.
    - Field name can't be capital. 
        - ex. `name`(O), `Name`(X)
    - Field name should be made singular. 
        - ex. `name`(O) `names`(X)
    - No space included in field name.
        - ex. `book_id`(O), `book id`(X)

## Data type
- `VARCHAR`


## schema
- 資料庫藍圖
- 包含table 的關聯，每個table 包含的內容與對應資料類型。

## query
- keywords: Reserved words in SQL
    - ex. `SELECT` `FROM`
- keywords : capital
- table name & fields : singular

|keywords|說明|例子|
|--|--|--|
|`SELECT`|--|--|
|`FROM`|--|--|
|`AS`|顯示 results 改變 field name，不會改變原 database 的 field name。|--|
|`DISTINCT`|--|--|
|`VIEW`|建立虛擬的table，不會存到 database 裡。|--|

### `SELECT` `FROM`

#### input
```sql
-- table name: books
-- fields: title, author

    SELECT title, author
    FROM books;
```

---
### aliasing
- rename columns by using aliasing (only show on query result)
- won't change field name in database
#### input
```sql
-- table name: books
-- fields: title

    SELECT title AS book_name
    FROM books;
```

---
### `DISTINCT`
- No repeat results on target field
- With mutilple fields, no repeat results on **mutilple fields combination**.

#### data
```
    |year|amount|
    |2020|   100|
    |2019|   150|
    |2018|   220|
    |2019|   190|
    |2018|   220|
    |2017|   100|
```

#### input
```sql
-- table name: books
-- fields: year

    SELECT DISTINCT year
    FROM books;
```
#### output
```
    |year|
    |2020|
    |2019|
    |2018|
    |2017|
```
#### input
```sql
-- table name: books
-- fields: year, amount

    SELECT DISTINCT year, amount
    FROM books;
```
#### output
```
    |year|amount|
    |2020|   100|
    |2019|   150|
    |2018|   220|
    |2019|   190|
    |2017|   100|
```

:::note
    [2019year, 150amount] 與 [2019year, 190amount] 兩者不相等，故為 unique.
:::
---
### `VIEW`
- 動態組合生成的資料表
- virtual table for later use
- not stored in database

`CREATE VIEW 虛擬表格名稱 AS SELECT 欄位名 FROM 資料表`

#### input
```sql
-- table name: books
-- fields: year, amount

CREATE VIEW new_table AS
SELECT DISTINCT year, amount
FROM books
```

---
### `LIMIT`(PostgreSQL) / `TOP`(SQL Server)
- 指定顯示 query results 前幾筆資料
- 適合用在測試幾萬筆資料時用

#### input
```sql
-- table name: books
-- fields: title

    SELECT title AS book_name
    FROM books
    LIMIT 3
```