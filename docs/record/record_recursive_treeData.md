---
  sidebar_position: 5
  id: record_recursive_treeData
  title: Build a treeData by using recursive
  tags:
    - Javascript
    - Algorithm
    - recursive
---

### 情境一
目前的資料結構：
```js

```
目標資料結構

```typescript
    interface TreeDataType{
        title: string;
        key: string;
        children: TreeDataType[];
    }
```

```js
    {
        title: '1 layer',
        key: '0-0',
        children: [{
            title: '2 layer',
            key: '0-0-0',
            children: [{
                title: '3 layer',
                key: '0-0-0-0',
                children: [{
                    title: '4 layer',
                    key: '0-0-0-0-0',
                    ...
                }]
            }]
        }]
    }
```
---

### 情境二：
- call api 拿到：
    - 還有 childrenTags: 繼續call api
    - 沒有 childrenTags: stop

### Q: 如何組成目標結構？



---
## 反推找資料
以往 treeData 都是由上層往下找下層。
### Q: 假設是從下層往上找上層呢？

- 目前資料結構如下：
```typescript
    const treeData: TreeDataType[] = [
        {
            title: '0',
            key: '0',
            children: [
                {
                    title: '0-0',
                    key: '0-0',
                    children: [{
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [{ title: '0-0-0-0', key: '0-0-0-0' }],
                    }],
                },
                { title: '0-1', key: '0-1' },
                { title: '0-2', key: '0-2' },
                { title: '0-3', key: '0-3' },
            ],
        },
        {
            title: '1',
            key: '1',
            children: [
                {
                    title: '1-1',
                    key: '1-1',
                    children: [
                        {
                            title: '1-1-0',
                            key: '1-1-0',
                            children: [
                                { title: '1-1-0-0', key: '1-1-0-0' },
                                { title: '1-1-0-1', key: '1-1-0-1' },
                                { title: '1-1-0-2', key: '1-1-0-2' },
                            ],
                        },
                        {
                            title: '1-1-1',
                            key: '1-1-1',
                            children: [
                                // highlight-start
                                { title: '1-1-1-0', key: '1-1-1-0' }, // 我要從這裡反推找父層內容
                                // highlight-end
                                { title: '1-1-1-1', key: '1-1-1-1' },
                            ],
                        }
                    ],
                }
            ],
        },
        {
            title: '2',
            key: '2',
            children: [
                { title: '2-0', key: '2-0', children: [] },
                { title: '2-1', key: '2-1', children: [] },
                { title: '2-2', key: '2-2', children: [] },
            ]
        },
    ];
```

試試用 `recursive` 方式寫寫看：

:::info 目前的邏輯構想：
- function 帶入三個參數：
    - checkData：要檢查的 array
    - targetKey：目標 key
    - targetParentsData：存放父層物件，也是我們要找的內容
- 建立一存放物件，存放：
    1. 檢查符合 boolean 
    2. 存取符合項目的父層內容 array
- `for-loop` 爬第一層
    - 第一層 第一個 item 不符合，檢查底下有無 children
        1. 有children： 呼叫 `recursive function`
        2. 沒有children： 結束這回合，換下一個 item
- 有符合項目，存取內容，跳出 `for-loop`
:::

```typescript
    interface TargetParentsDataType{
        hasFinded: boolean;
        parentsData: TreeDataType[];
    }

    const checkTargetParentsData = (checkData: TreeDataType[], targetKey: string, targetParentsData: TreeDataType[] = []): TargetParentsDataType => {
        let result: TargetParentsDataType = { hasFinded: false, parentsData: []};

        for(let i = 0; i < checkData.length; i++){
            if(checkData[i].key === targetKey){
                // console.log("test: ", checkData[i]);
               return ({ hasFinded: true, parentsData: targetParentsData });
            }

            if(checkData[i].children && checkData[i].children.length > 0){
                // console.log(" └── checkData[i].childrenTag: ", checkData[i].childrenTag);
                result = checkTargetParentsData(checkData[i].children, targetKey, targetParentsData);
            }

            if(result.hasFinded){
                targetParentsData.push(checkData[i]);
                break;
            }
        }

        return result;
    }

    console.log("Result: ", checkTargetParentsData(treeData, '1-1-1-0'));
```

回傳結果：
```log
    "Result: ",  {
        "hasFinded": true,
        "parentsData": [
            {
            "title": "1-1-1",
            "key": "1-1-1",
            "children": [...]
            },
            {
            "title": "1-1",
            "key": "1-1",
            "children": [...]
            },
            {
            "title": "1",
            "key": "1",
            "children": [...]
            }
        ]
    } 
```

[完整 code](https://www.typescriptlang.org/play?ssl=31&ssc=14&pln=31&pc=30#code/JYOwLgpgTgZghgYwgAgCpQhAInMdUCeADhAN4CwAUMjcmMGADYQBcyAzmFKAOYDcVWsgDWEAm07cQ-QbQQALYIwAmGEG3SYceQiQDaAXQGUAvrORUEAexCc6GbLjgaH2-MQiHkAXmR7zyBTUQrT0TKzIAOQADJEANAFCouJRsQnBIcgKSqoQ6n6JmYGFRaEMzGwxALRpJaUiYpXRNfF1pdkqamx6QfV9dOUR1c21Gf2ZyU01Lenj7Yqded2kA+FTIzMNKcPTaVkLufleJgazczQnZ30mV-UrYRWpVQCM8VtTr3H7OV1+Bsg3Nq0e6DKYAJjekyeEK+HUO3X+gLGpRBayeAGZIY0MW84b9jrchKcAkihL0ig8hp86lDItTkXIDvigTRyedKZVni9Wgy+rSufTzjQ8UsCry5myhZkOVEBTMWXN+S95eKpSKjgqpajHnTlSMsds5frYUzRQTNULtVS9dyvkquc1Pt9FkdEYSpUUrZybTD3rKfbjTa6Ae6Pchiar+qSw8VI+zQf6BTyYyF7baLX11d0M3MAPS55CKHjyRjAYtgKqcOBQMA58ZexN6g3eo2Bn5mt3IfPIQCIRoBAyMAefqATATAIcRgFnlQAVxoA-I0AbE6AEx1AOaKgE7tOv9btFktl+QVvLKVd9Bu6uVOtNJk3t4PRlM0CMpsxxkK3qN1J8XW6SoQyyIwmnY7-JooszFetVh1MFNlpcC9iA80H0PcCTz-BC2xdBEQwVeCql9SCsJQ+E-nQ8UDBJdIjCoAJQEgWBEBQVBqx4CAwAABWrPIwHYNxdDIOp5DgdgADFQGUCBlDYAAjKwrGYOAQGMUoiFY8AOKcFwtCcLjDDk2h7wCaxbDAfYIAQYQ6KgBjmMU9i3B8ZAAAoFCM4Q3FUxwdA8QwvjwMzGIAaWxSReE8+jGJYtQrJUtBXHU9z-l8QwAEoNGCiywuUtySB8AA+WNSmYAyMHYABXRgwCS7yUrYtL3Ay3wVl4gShJEth4EYdgIC+BTUucv4TGMOoYCsKBbLy5BgBs6I+FG5AAB5DOMtwADpmGkMB5Em4AAGoNvij9AJsdgpIgJarB4WyACJIE4NgzpNRy3D0YADAW5J4q0vpgBgez5DupwHqe5IfG8XwvPMvyCB2jMMDAQqoBAOy6r4wSQGE0T7EK9rkE6yrupBkLLKqgFXoVHSHw+r6frwP6FvVZAADJabmpzfse6mgyWvIeFW5BsuiCGHyEPSDuYY7TouiAruQG7Gfuln1SJ-naAK4qDN8BzjNM8zQuxpxyfm5mnvVILyrBo3Nfxtx5fGEnxjJpWSoW+qkZRvmpVxiqlMWohCvYeRdaZynHstoUxIwOBhDe+p71Ka2iihmG4btsAI5j4V9sOkXzoAJXF5Xrtu9Xkq1j2da4NS8C+I8m3i16gA)

---
## 資源參考
- [Map Recursively an Infinite Tree Data Structure Easily with JS and React](https://www.youtube.com/watch?v=gLZ1ECbe1JM)
- [Javascript - Writing Map as a Recursive Function](https://dev.to/alexmercedcoder/javascript-writing-map-as-a-recursive-function-2854)
- [[演算法] 遞回函式（recursive function, recursion）](https://pjchender.dev/dsa/algo-recursion/)