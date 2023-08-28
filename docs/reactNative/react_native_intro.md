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


---

### 預先準備
- Download Xcode on [Apple Downloads](https://developer.apple.com/downloads)
- Download Xcode Command Line Tools on [Apple Downloads](https://developer.apple.com/downloads)
- Home Brew `Node.js` and `Watchman`
    - Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.
- Install CocoaPods by using `sudo gem install cocoapods`
    - CocoaPods is one of the dependency management system available for iOS. CocoaPods is a Ruby gem.

<details>
  <summary>
    <strong>過程中可能遇到 電腦 Ruby 版本 與 CocoaPods 要求版本不符，做了以下調整</strong>  
  </summary>

- 安裝 CocoaPods 遇到的錯誤訊息：目前電腦的 Ruby 版本 與 CocoaPods 要求版本不符。

```
sudo gem install cocoapods 
ERROR:  Error installing cocoapods:
	The last version of activesupport (>= 5.0, < 8) to support your Ruby & RubyGems was 6.1.7.6. Try installing it with `gem install activesupport -v 6.1.7.6` and then running the current command again
	activesupport requires Ruby version >= 2.7.0. The current ruby version is 2.6.10.210.
```

- 開啟終端機，確認 ruby 版本
```
ruby -v

ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.x86_64-darwin22]
```

- 使用 Home Brew 安裝 `rbenv` : 管理 Ruby 版本工具

```
# 安装 rbenv（如果尚未安装）
brew install rbenv

# 初始化 rbenv
rbenv init

# 安装所需的 Ruby 版本（例如 2.7.4）
rbenv install 2.7.4

# 设置全局 Ruby 版本
rbenv global 2.7.4
```

- 開啟終端機，確認 ruby 版本 與 rbenv 目前全域預設版本
```
ruby -v

ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.x86_64-darwin22]

rbenv versions
  system
* 3.2.2 (set by /Users/chenhuizhen/.rbenv/version)
```

- 兩者不匹配，更新 ~/.zshrc 內 `PATH` 變量
1. 先將 ~/.zshrc 進行備份：
```
# copy ~/.zshrc 的內容，新建一個備份文件叫 ~/.zshrc_backup
cp ~/.zshrc ~/.zshrc_backup
```

2. 檢查備份文件是否備份成功：
```
ls ~/.zshrc_backup

# 顯示文件路徑位置： /Users/chenhuizhen/.zshrc_backup
```

```
cat ~/.zshrc_backup

# 顯示文件內容： 
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
```

3. 回來 ~/.zshrc 修改 PATH 變量：
```
# 使用 vim 文本編輯
vim ~/.zshrc

# 輸入 i 執行編輯插入內容
if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi
    # which rbenv : rbenv 的路徑位置，如果有代表 rbenv 存在
    # 條件符合，執行 rbenv init - 初始化加載

# 點擊 Esc 離開編輯模式
# 輸入 :wq 保存並離開 vim

```

4. 重新執行 ~/.zshrc
```
# 執行(重新加載) ~/.zshrc

source ~/.zshrc

```

5. 確認 ruby 版本 與 rbenv 目前全域預設版本。

</details>



## 參考資源

