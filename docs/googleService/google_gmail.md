

# 串接 Google Gmail by `nodemailer`

#### 使用情境：忘記密碼，在後端發信給使用者，使用 gmail 寄信。

- 使用 Gmail 寄信，需要先取得 Google Oauth2.0 取得憑證碼，有有辦法使用 Google 提供的「Gmail 發信」服務。
- 需要取得以下三樣東西：
  - `client-id`
  - `client-secret`
  - `refresh_token`
- 需要載入的套件：
  - `nodemailer`
  - `googleapis` : Google 官方提供的串接 API 套件。 
    - Node.js client library for using Google APIs. Support for authorization and authentication with OAuth 2.0, API Keys and JWT tokens is included.

## 取得 Oauth2.0 大概流程
  - 位置：到 [Google Cloud Platform](https://cloud.google.com/?hl=zh-tw)
  - 點擊開始免費試用，輸入使用者基本資訊(包含信用卡資訊)。
  - 建立專案
  1. 在指定專案內，先建完「OAuth 同意畫面」資訊，發布狀態可以先改成「實際運作中」，方便直接線上測試。
  2. 點擊憑證，點擊「OAuth 2.0 用戶端 ID」，並「建立憑證」。
      - 注意：已授權的重新導向 URI，填入 **OAuth 2.0 Playground** 網址：`https://developers.google.com/oauthplayground`，為了拿到 `refresh_token` 使用。
      - 建立完成後，會拿到 **「用戶端編號」** 表示 `client-id`，**「用戶端密鑰」** 表示 `client-secret`
  3. 來到 [OAuth 2.0 Playground](https://developers.google.com/oauthplayground) 進行測試，並取得 `client-refresh-token`
      - 先到右上角設定icon，勾選 **Use your own OAuth credentials**，將 `client-id` 與 `client-secret` 填入。
      - 到 左邊 google 提供的 API 列表，選取目標 API，並點擊「Authorize APIs」
      - 成功會導向 google 小視窗，點擊進階鈕，允許取得 Gmail 的 使用權
      - 回到 OAuth 2.0 Playground，會獲得 Authorization code，可以用來產生 `refresh_token`
      - 
      
** 記得重新導向 OAuth 2.0 Playground 的網址最後不要加`/`，否則會失敗。 **



---

## TBD
### 完成開商店：會員中心/商店管理

串接藍新金流，需要拿到：
(1) HashKey
(2) HashIV
(3) Notify URL : 測試機 SERVER，for 後端
(4) Return URL : 測試機 SERVER，for 前端


## 銷售中心
