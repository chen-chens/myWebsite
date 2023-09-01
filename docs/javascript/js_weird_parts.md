---
sidebar_position: 7
id: JavaScript Weird Parts
title: JavaScript Weird Parts
tags:
- JavaScript Weird Parts
---

*This records is from [JavaScript: Understanding the Weird Parts](https://www.udemy.com/course/understand-javascript)*

- JS Engine 在 解析我們寫的 JS檔案 前，內建一個 Global Object(全域物件)，以及 特殊變數 `this`。
- Global = Not Inside a Function.

## Execution Context
- Wrap our code to execute and do other else.
- Two Phase:
    1. Creating Phase: 
        - Store variables/functions in memory space before execute JS code one-by-one.
        - Create something else: Global Object, keyword `this`, and our code(set up variables and funcitons in different way).
            - All variables are initially set `undefined` in JavaScript. (`undefined` = I never set this value.)
            - Store functions with all declaration and code inside.
            - That's called **Hoisting**. Not because declaration code moves on the top when calling it, but Execution Context has stored variables and functions in memory(Calling it & Access it in memory) .
    2. Execution Phase:
        - Run our code one-by-one.

## Scope & Scpoe Chain
- Scope: Where variables are available in your code.

