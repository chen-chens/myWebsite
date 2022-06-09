---
  sidebar_position: 1
  id: LeetCode_Easy_Part
  title: LeetCode Easy Part
  tags:
    - Math.max()
    - reduce
    - map
---

<details>
  <summary>
    <strong>1672. Richest Customer Wealth</strong>
  </summary>

```
    Example 1:

    Input: accounts = [[1,2,3],[3,2,1]]
    Output: 6
    Explanation:
    1st customer has wealth = 1 + 2 + 3 = 6
    2nd customer has wealth = 3 + 2 + 1 = 6
    Both customers are considered the richest with a wealth of 6 each, so return 6.
    Example 2:
```
```
    Input: accounts = [[1,5],[7,3],[3,5]]
    Output: 10
    Explanation: 
    1st customer has wealth = 6
    2nd customer has wealth = 10 
    3rd customer has wealth = 8
    The 2nd customer is the richest with a wealth of 10.
```
---

#### 思考：
1. 陣列內每個 item 先加總 `reduce`。
2. 用 `Math.max()` 找到陣列內最大值。

```js
    const maximumWealth = function(accounts) {
        const sumList = accounts.map(item => item.reduce((a, b) => a+b, 0))

        return Math.max(...sumList) // 注意 Math.max 指接收數字，要把陣列拆開。
    };

    maximumWealth([[1,5],[7,3],[3,5]]) // 10
    maximumWealth([[1,2,3],[3,2,1]]) // 6
```

#### Result: O(n^2) time
---

:::tip
- [`Math.max()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [`reduce`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
:::

</details>

<details>
  <summary>
    <strong>1295. Find Numbers with Even Number of Digits</strong>
  </summary>

Given an array nums of integers, return how many of them contain an even number of digits.

```
    Example 1:

    Input: nums = [12,345,2,6,7896]
    Output: 2
    Explanation: 
    12 contains 2 digits (even number of digits). 
    345 contains 3 digits (odd number of digits). 
    2 contains 1 digit (odd number of digits). 
    6 contains 1 digit (odd number of digits). 
    7896 contains 4 digits (even number of digits). 
    Therefore only 12 and 7896 contain an even number of digits.
```
```
    Example 2:

    Input: nums = [555,901,482,1771]
    Output: 1 
    Explanation: 
    Only 1771 contains an even number of digits.
```

```
    Constraints:

    1 <= nums.length <= 500
    1 <= nums[i] <= 105
```

---
### 思考
1. 用取字串長度的方法，計算幾個字母。
2. 判斷字母數為偶數，加入計數。

```js
    const findNumbers = function(nums) {
        let evenDigitsNumber = 0;
        
        nums.forEach(item => {
            if(item.toString().length % 2 === 0){
                evenDigitsNumber+=1
            }
        })
        
        return evenDigitsNumber
    };

    findNumbers([555,901,482,1771])
```

:::tip length方法只有字串、陣列才有
- `100.lengh` : Uncaught SyntaxError: Invalid or unexpected token
- `"100".length` : 3
- `[100, 20].length` : 2

:::
</details>


