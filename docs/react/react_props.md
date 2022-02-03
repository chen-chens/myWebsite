---
sidebar_position: 3
---

# Props
今天來談談`component`資料傳遞的方法。

規劃流程是這樣：使用者新增分類項目，個別分類項目下有獨立的代辦清單。

![針對不同用途的toDoList](https://ithelp.ithome.com.tw/upload/images/20210914/20131689edbMabun96.png)

Q: 問題來了，我在分類清單拿到：使用者輸入分類的`state`，要怎麼傳給代辦清單？

A: 之前我們提到`component`擁有一般function的功能，我們可以在呼叫函式時，把資料用參數的方式傳遞，也就是[React提到的props](https://zh-hant.reactjs.org/docs/components-and-props.html#props-are-read-only)。

:::tip
`props` 本身的唯讀性質，不能直接修改`props`，以確保資料狀態傳遞過程不會有任何改變。
:::

規劃我的資料流傳遞方向，拆成四大`component`：
- ToDoPage(網頁)
- MainLayout(UI架構)
- CategoryList(分類清單)
- ToDoList(代辦清單)

## 這裡要提到React特性：[向下資料流](https://zh-hant.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)

- 從下圖可以看到，我希望 `component` CategoryList、ToDoList 共享資料，就必須要從兩者共同父層傳資料下來。
![規劃我的資料流傳遞方向：](https://ithelp.ithome.com.tw/upload/images/20210925/20131689LUrEX7teGh.png)

---
實際來實作看看：
### (一) ToDoPage
```jsx title="ToDoPage.jsx" 
// 引入需要的零組件：
import React, { useState } from 'react';
import MainLayout from '../../layout/mainLayout';
import CategoryList from './category';
import ToDoList from './toDoList';

// 建立component:
export default function ToDoPage() {

  // 存取 state:
  const [categoryValue, setCategoryValue] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  const UNFINISHED = 'unfinished';
  const [toDoValue, setToDoValue] = useState('');
  const [toDoData, setToDoData] = useState([]);
  
  
  // 操作邏輯
  const handleSubmit = () => {
    if (categoryValue) {
      const newItemData = {
        categoryId: Date.now(),
        category: categoryValue,
        listData: [],
      };
      setCategoryData([...categoryData, newItemData]);
      setCategoryValue('');
    } 
  };

  const handleAddListItem = () => {
    if (toDoValue) {
      const newValue = {
        id: Date.now(),
        value: toDoValue,
        status: UNFINISHED,
        spendTime: 0,
      };
      setToDoData([...toDoData, newValue]);
      setToDoValue('');
    }
  };

  return ( // 回傳 React element
    <MainLayout
    // highlight-start
      menu={( // 將共用資料傳入子元件
        <CategoryList
          handleSubmit={handleSubmit}
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          categoryData={categoryData}
        />
      )}
    // highlight-end
      content={( // 將共用資料傳入子元件
        <ToDoList
          handleAddListItem={handleAddListItem}
          toDoValue={toDoValue}
          setToDoValue={setToDoValue}
          toDoData={toDoData}
        />
      )}
    />
  );
}

```

### (二)CategoryList
```jsx title="CategoryList.jsx" 
import React from 'react';
import {
  Menu, Space, Button, Input,
} from 'antd';

export default function CategoryList(props) {

// 將接收的資料由參數傳入，傳入的props是一物件，可以透過物件解構取得資料
// highlight-start
  const { 
    handleSubmit,
    categoryValue,
    setCategoryValue,
    categoryData,
  } = props;
// highlight-end

  return (  // 取得的資料，就可以在元件內使用
    <>
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        {categoryData.map((item) => (
          <Menu.Item key={item.categoryId}>{item.category}</Menu.Item>
        ))}
        <Space>
          <Input
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          />
          <Button type="primary" onClick={handleSubmit}>+</Button>
        </Space>
      </Menu>
    </>
  );
}

```

### 顯示效果
![顯示效果](https://ithelp.ithome.com.tw/upload/images/20210925/20131689ubwa963hDv.png)

### (補充) React supports a key attribute.
React 為了比對 Virtual DOM 哪個節點需要更新，針對列表 `<li></li>` 等重複性出現的標籤新增一屬性 `key`。
`key`須為該父節點`<ul></ul>` `<ol></ol>` 下的 **唯一值**，以確保不會 重複渲染沒有更新的內容而影響效能。 

```jsx
   <ul>
    {someList.map(item => (
        <li key={item.id}>{item.name}</li>
    ))}
   </ul> 
```
---
### 參考資料
- [React官網 - 展開屬性](https://zh-hant.reactjs.org/docs/jsx-in-depth.html#spread-attributes)
- [React官網 - Render Props](https://zh-hant.reactjs.org/docs/render-props.html)
- [React官網 - 提升 State](https://zh-hant.reactjs.org/docs/lifting-state-up.html)
- [React官網 - Props 是唯讀的](https://zh-hant.reactjs.org/docs/components-and-props.html#props-are-read-only)
- [React官網 - 列表與 Key](https://zh-hant.reactjs.org/docs/lists-and-keys.html)
