---
sidebar_position: 3
---

# Utility Types


## `Partial<Type>`
#### 所有型別內的屬性皆為 optional。



---

## `Required<Type>`
#### 所有型別內的屬性皆為 必填。



---

## `Readonly<Type>`
#### 所有型別內的屬性皆為 唯讀，附值後不可以更改。


---

## `Record<Keys, Type>`
#### 定義 一物件內 屬性型別為 Keys, 屬性值型別為 Type。

```
interface User{
    name: string
    phone: number
}

type Group = 'VVIP' | 'VIP' | 'GOLD'

const membership: Record<Group, User> = {
    VVIP: {name: "Joanna", phone: 1234},
    VIP: {name: "Vivian", phone: 5678},
    GOLD: {name: "Bob", phone: 9011},
}

```


---

## 參考資源
- [官網：Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)


