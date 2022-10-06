---
sidebar_position: 2
tags:
    - SQL
---

# Querying a database

## `COUNT()`
- return the count records of table field(s).
- return data type: number
- aliasing count result to distinguish field name from other fields.

#### input
```sql
    SELECT COUNT(name) AS total_number_name
    FROM people
```
#### output
```
    |total_number_name|
    |1000             |
```

---

```sql
    SELECT COUNT(name) AS total_number_name, COUNT(email) AS total_number_email
    FROM people
```
#### output
```
    |total_number_name|total_number_email|
    |1000             |200               |
```

### `COUNT()` + `DISTINCT`
- `COUNT()` : return the counts including duplicate value
- `DISTINCT`: return the counts excluding duplicate value (unique value)

#### data of books table
```
    |year|amount|
    |2020|   100|
    |2019|   150|
    |2018|   220|
    |2019|   190|
    |2018|   220|
    |2017|   100|
```

```sql
    SELECT COUNT(year) AS total_number_year, COUNT(amount) AS total_number_amount
    FROM books
```
#### output: including duplicate value
```
    |total_number_year|total_number_amount|
    |6                |                  6|
```

```sql
    SELECT COUNT(DISTINCT year) AS total_number_year, COUNT(DISTINCT amount) AS total_number_amount
    FROM books
```
#### output: excluding duplicate value
```
    |total_number_year|total_number_amount|
    |4                |                  4|
```

---

---
## 資料來源
- [Querying a database](https://campus.datacamp.com/courses/intermediate-sql/selecting-data?ex=1)