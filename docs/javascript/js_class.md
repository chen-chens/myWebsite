---
sidebar_position: 8
id: js_class
title: What is `class` ?
tags:
- JavaScript
- class
---

#### class 像是一個模具，比較厲害的那種！
![class 像是一個模具](../../static/img/docs/js/js_class_template.png)


想像一下，如果要做甜甜圈，我們可以一個一個手工拉圈成圓，但花費的時間比較久。<br />
或者，我們可以打造一個甜甜圈造型的模具，每一次將麵糊倒入成型，可以一次做好幾個，甚至重複使用，是不是很美好？

```
手工的甜甜圈就像是 Hard Code an object.
而模具就是 `class`，用來重複打造 object 的工具！
```

---

### class 擁有哪些功能？
- class 名稱首字一定大寫。
- class 可以包含 物件屬性, 函式, 構造函數 等。
    - 物件屬性賦值寫法：`{屬性: 屬性值,}`
    - class 屬性賦值寫法：`{屬性 = 屬性值;}`
- class 擁有繼承的特性，可以透過 `extends` 繼承另一個 class 的屬性和方法。

```ts title="使用 Typescript 的寫法"
class MyClass {
  // 屬性
  property1: string = "";
  property2: number = 0;

  // 構造函數
  constructor(prop1: string, prop2: number) {
    this.property1 = prop1;
    this.property2 = prop2;
  }

  // 方法
  myMethod() {
    console.log('This is a method.');
  }
}

// 創建類別的實例
const instance = new MyClass('Value1', 42);
instance.myMethod();
```

|keyword|Description|Functions|Demo|
|--|--|--|--|
|`class`|A blueprint for creating objects.|Define properties, functions.|--|
|`constructor`|A special method of class.|Accept arguments and assign properties.|--|
|`super`|Refers to parent class.|Commonly used to invoke constructor of a parent class.|--|
|`static`|Values or functions belong to `class`. Not objects.|Instead calling by object. Calling by **class** itself!|--|
|--|--|--|--|
|--|--|--|--|

---

## 舉例：class, constructor

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

## 舉例： class, static

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

:::success
#### 哪裏可以看到 class 使用 static 用法？
例：`Math.round()`
:::

---

## What is `this` ?
- `this` 指向目前所在參考位置。

```js title="this 指向目前所在參考位置"
const userInfo = {
    name: "Joanna",
    hobby: "Dancing",
    greeting: function(){
        console.log(`${this.name} is ${this.hobby}!`); // this 指向 物件 userInfo
    }
}

userInfo.greeting(); // Joanna is dancing!
```

如果在全域環境寫下 `this`，會指向瀏覽器所在位置：Window 物件。
```js
console.log(this); // Window {0: Window, self: Window, document: document, name: '', location: Location, …}
```

## 繼承特性(Inheritance)
我們雖然建造了 class 可以幫我們快速產生物件或存取內容，但我們也有可能遇到 多個 class 基底是一樣的，但還是有些不一樣的地方，像是：
1. 鬆餅造型甜甜圈模具
2. 鯛魚造型甜甜圈模具
3. 蛋塔造型甜甜圈模具

甜甜圈模具基底都一樣，但造型不一樣，導致我要建三個 class，未來要維修，我也要三個一起送修。
如果說我把一樣的模具基底拆出來共用，不同造型模具引用公用的基底，加上不同的造型烤盤，是不是方便很多！
![不同的造型烤盤](../../static/img/docs/js/js_class_template2.png)

原本的多個 class，有很多重複區塊：
```js
class DoughnutA{
    shape = "鬆餅造型";

    // highlight-start
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
    }
    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    // highlight-end
}
class DoughnutB{
    shape = "鯛魚造型";

    // highlight-start
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
    }
    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    // highlight-end
}
class DoughnutC{
    shape = "蛋塔造型";

    // highlight-start
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
    }
    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    // highlight-end
}
```

拆出共用，用 `extends` 去引入：
```js
// 共用
class Doughnut{  
    // highlight-start
    constructor(name, water, time){
        this.name = name;
        this.water = water;
        this.time = time;
    }
    baked(){
        console.log(`${this.name} 進入烤箱烤！`);
    }
    // highlight-end
}

// extends 引入共用，不一樣的保留在各自 class 內。
class DoughnutA extends Doughnut{
    shape = "鬆餅造型";
}
class DoughnutB extends Doughnut{
    shape = "鯛魚造型";
}
class DoughnutC extends Doughnut{
    shape = "蛋塔造型";
}
const dessert1 = new DoughnutA("鮪魚口味", 100, 10);
console.log(dessert1.shape); // 鬆餅造型
console.log(dessert1.baked); // 鮪魚口味 進入烤箱烤！
```

### 繼承 constructor 的關鍵字: `super`
假設 我們遇到的是 constructor 有重複屬性可以抽共用，可以怎麼做？

原本寫法，constructor 有多個 屬性是重複的：
```js
class DoughnutA{
    shape = "鬆餅造型";
    constructor(name, water, backedTime){
        // highlight-start
        this.name = name;
        this.water = water;
        // highlight-end
        this.backedTime = backedTime;
    }
}
class DoughnutB{
    shape = "鯛魚造型";
    constructor(name, water, steamedTime){
        // highlight-start
        this.name = name;
        this.water = water;
        // highlight-end
        this.steamedTime = steamedTime;
    }
}
class DoughnutC{
    shape = "蛋塔造型";
    constructor(name, water, friedTime){
        // highlight-start
        this.name = name;
        this.water = water;
        // highlight-end
        this.friedTime = friedTime;
    }
}
```

拆出共用 constructor 屬性，使用 關鍵字 `super` 做引入 (**記得 class 還是要加 extends 引入共用。**)
```js
// 共用
class Doughnut{
    constructor(name, water){
        // highlight-start
        this.name = name;
        this.water = water;
        // highlight-end
    }
}

class DoughnutA extends Doughnut{
    shape = "鬆餅造型";
    constructor(name, water, backedTime){
        // highlight-start
        super(name, water)
        // highlight-end
        this.backedTime = backedTime;
    }
}
class DoughnutB extends Doughnut{
    shape = "鯛魚造型";
    constructor(name, water, steamedTime){
        // highlight-start
        super(name, water)
        // highlight-end
        this.steamedTime = steamedTime;
    }
}
class DoughnutC extends Doughnut{
    shape = "蛋塔造型";
    constructor(name, water, friedTime){
        // highlight-start
        super(name, water)
        // highlight-end
        this.friedTime = friedTime;
    }
}
const dessert1 = new DoughnutA("鮪魚口味", 100, 10);
console.log(dessert1.name); // 鮪魚口味
console.log(dessert1.water); // 100
```

--- 

## 參考資源：
- [Bro Code: JavaScript classes](https://www.youtube.com/watch?v=bHSjfXJBKaY&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1&index=53)