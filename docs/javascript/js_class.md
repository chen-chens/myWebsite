---
sidebar_position: 8
id: js_class
title: What is `class` ?
tags:
- JavaScript
- class
---

#### class 像是一個模具，比較厲害的那種！
![class 像是一個模具](../../static/img/docs/js/javascript_class_template.png)


想像一下，如果要做甜甜圈，我們可以一個一個手工拉圈成圓，但花費的時間比較久。<br />
或者，我們可以打造一個甜甜圈造型的模具，每一次將麵糊倒入成型，可以一次做好幾個，甚至重複使用，是不是很美好？

```
手工的甜甜圈就像是 Hard Code an object.
而模具就是 `class`，用來重複打造 object 的工具！
```

---

### class 擁有哪些功能？

|keyword|Description|Functions|Demo|
|--|--|--|--|
|`class`|A blueprint for creating objects.|Define properties, functions.|--|
|`constructor`|A special method of class.|Accept arguments and assign properties.|--|
|`static`|Values or functions belong to `class`. Not objects.|Instead calling by object. Calling by **class** itself!|--|
|--|--|--|--|
|--|--|--|--|
|--|--|--|--|

- class 名稱首字一定大寫
- class 可以包含 物件屬性, 函式 等

---

### 舉例：class, constructor

- 我建立一個模具叫 Doughnut。(**class**)
- Doughnut 需要 產品名稱, 水量, 以及 烘焙時間 作為製作甜甜圈模板。(**constructor**)
    - 當我加入 Doughnut 需要的參數時，會放進模板，成為實體。(**this**)
- Doughnut 也可以紀錄使用的烘焙方法。(**function**)
- 製作一個甜甜圈，加入模具需要的參數。(**new <class名稱(參數)>**)

```js
class Doughnut{
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
    }

    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    fried(){
        console.log(`${this.name} 進入油鍋炸！`);
    }
}

// 做兩個甜甜圈
const dessort1 = new Doughnut("酥脆甜甜圈", 100, 20);
const dessort2 = new Doughnut("爆炸甜甜圈", 60, 10);

dessort1.baked(); // 酥脆甜甜圈 進入烤箱烤！
dessort2.fried(); // 爆炸甜甜圈 進入油鍋炸！
```

---

### 舉例： class, static

#### 錯誤寫法：
```js
class Doughnut{

    number = 0
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
        this.number += 1;
    }

    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    fried(){
        console.log(`${this.name} 進入油鍋炸！`);
    }
    calcTotal(){
        console.log(`總共製作出 ${this.number} 個甜甜圈！`);
    }
}

// 做兩個甜甜圈
const dessort1 = new Doughnut("酥脆甜甜圈", 100, 20);
const dessort2 = new Doughnut("爆炸甜甜圈", 60, 10);

dessort1.calcTotal(); // 1 因為沒有加入 static 關鍵字，每次製作甜甜圈(物件)都是全新的計算。
dessort2.calcTotal(); // 1 因為沒有加入 static 關鍵字，每次製作甜甜圈(物件)都是全新的計算。
```

#### 正確寫法：
:::warning
使用 `static` 關鍵字，記得該值 或 函式 屬於 `class`，而不是 物件！
要用 `class` 去呼叫對應函式！
:::

```js
class Doughnut{

    static number = 0
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
        this.number += 1;
    }

    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    fried(){
        console.log(`${this.name} 進入油鍋炸！`);
    }
    static calcTotal(){
        console.log(`總共製作出 ${this.number} 個甜甜圈！`);
    }
}

// 做兩個甜甜圈
const dessort1 = new Doughnut("酥脆甜甜圈", 100, 20);
const dessort2 = new Doughnut("爆炸甜甜圈", 60, 10);

Doughnut.calcTotal(); // 1 加入 static 關鍵字，每次的計算都在 class 內，使用 class 進行呼叫。
Doughnut.calcTotal(); // 2 加入 static 關鍵字，每次的計算都在 class 內，使用 class 進行呼叫。
```