---
sidebar_position: 1
id: react_native_intro
title: What is React Native ?
tags:
- React Native
- APP
---

## React Native 解決什麼問題？


- With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components.

- React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.

- JSX is JavaScript, you can use variables inside it.
    - JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. 
    - But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.
    - Each React component is a JavaScript function that may contain some markup that React renders into the browser.
    - Error messages will often point you in the right direction to fixing your markup.
- React foundations:
    - You might’ve noticed that although isHungry is a **const**, it is seemingly reassignable! What is happening is when a state-setting function like setIsHungry is called, its component will re-render. In this case the Cat function will run again—and this time, useState will give us the next value of isHungry.

- Core Component
    - ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component.
    - On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out.
- The FlatList component displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time. **Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once.**

## 參考資源

