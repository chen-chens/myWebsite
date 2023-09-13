---
  sidebar_position: 21
  id: record_next_eslint_prettier_husky
  title: Next.js Project with, Airbnb Eslint Style , Prettier, and Husky setup
  tags:
    - Next.js
    - Eslint
    - Prettier
    - Husky
---

## Eslint & Prettier
### Q: 為了解決什麼問題？
- `Eslint`: 檢查專案內 code 的寫法是否正確(符合設定規範)。
- `Prettier`: 統一整個專案的code寫法(風格)。
- `Eslint` 與 `Prettier` 解決目標不太一樣，但有部分規範設定是重疊。


### 相關依賴列表

|依賴                                |用途|連結|
|--                                 |--|--|
|`eslint`                           |--|--|
|`prettier`                         |--|--|
|`lint-staged`                      |用於在提交 Git 提交之前對已經 staged 的文件運行 lint 檢查。這有助於確保只有符合規範的代碼能夠提交到版本控制系統中。|--|
|--|--|--|
|`eslint-plugin-import`             |是一個 ESLint 插件，用於檢查和管理模組導入。|--|
|`eslint-plugin-simple-import-sort` |是一個 ESLint 插件，用於協助對 JavaScript 或 TypeScript 文件中的模組導入進行排序。它有助於維護一致的模組導入風格。|--|
|--|--|--|
|`eslint-config-airbnb`             |是 Airbnb 的 ESLint 規範，用於 JavaScript 專案。|--|
|`eslint-config-airbnb-typescript`  |是 Airbnb 的 ESLint 規範的 TypeScript 版本，用於 TypeScript 專案。|--|
|--|--|--|
|`eslint-config-prettier`           |用於關閉 ESLint 與 Prettier 衝突的規則。|--|
|`eslint-plugin-prettier`           |用於將 Prettier 整合到 ESLint 中，以自動修復格式問題。|--|
|--|--|--|
|`eslint-import-resolver-typescript`|是一個 ESLint 解析器，專門用於解析 TypeScript 檔案中的模組導入。如果您的專案使用 TypeScript，這個解析器可以幫助 ESLint 正確解析和檢查 TypeScript 文件中的模組導入。|--|
|--|--|--|
|--|--|--|
|--|--|--|
|--|--|--|


### 以 React 或 Next 專案為例

#### 基本配置
```json title="package.json"
  "scripts": {
    "format": "prettier --write .", // 執行 prettier，並自動寫入統一風格
    "lint-staged": "lint-staged",   // 執行 git add 前，先對更新內容執行 Eslint 檢查。
    "lint": "eslint . --ext .ts"    // 指定執行 Eslint 檢查，鎖定 目前資料夾下所有 .ts 檔案。
  },
```

#### 忽略檢查
- `prettier`:

```js title=".prettierignore 以及 .eslintignore"
# dependencies
/node_modules

# production: 忽略編譯後的 JavaScript 檔案
/dist


# env files
.env*


# yarn error logs
yarn-error.log
```



#### 客制配置
- `prettier`:

```json title=".prettierrc.json"
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "printWidth": 120,
  "tabWidth": 2
}
```

- `.eslintrc`

```json title=".eslintrc.json"
{
  "extends": ["airbnb-base", "airbnb-typescript/base", "plugin:prettier/recommended"],
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module"
  },
  "plugins": ["simple-import-sort"],
  "rules": {
    "react/jsx-props-no-spreading": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-restricted-syntax": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_$"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}

```

- `.lintstagedrc`

```json title=".lintstagedrc"
{
  "src/**/*.{js,ts,md,html,json}": ["eslint --fix", "prettier --write"]
}
```


### 參考資源

---

## Husky
### Q: 為了解決什麼問題？


### 參考資源


