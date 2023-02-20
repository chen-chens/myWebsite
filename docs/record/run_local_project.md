---
  sidebar_position: 14
  id: run_local_project
  title: Run project on local
  tags:
    - Local
---

## Situation
- local 跑專案，快速紀錄操作筆記。
- client-side + server-side(golang)
---

## Record
### (一) client-side：rootUrl 指向本地端 
:::note
- `http://localhost:port`
- `http://127.0.0.1:port`
:::

### (二) server-side:
:::success
- GitLab: 複製 server 專案路徑
- Sourcetree: new File / Clone from URL
    - Source URL 填入 專案路徑
    - 如果是公司內網，請將 domain name 改成 內網路徑

- VsCode: 開啟 server，查看 資料夾 `config` 下，指向的 database
- pgAdmin: 瀏覽 `Server` 資料夾下 `localhost` 的 database，新增指定 database
- 回到 server: 執行 go `go run ./server/server.go`
- 回到 client: 執行 `yarn start`
- 確認 網頁 call API，Request URL: domain name 是本地端
:::