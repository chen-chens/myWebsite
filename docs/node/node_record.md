---
sidebar_position: 4
id: node_record
title: Node 錯誤訊息紀錄 與 解法
tags:
- Node.js
---


# Node 錯誤訊息紀錄 與 解決方案
### `node` Server Output 錯誤訊息：EADDRINUSE

```node
  [server] node:events:342
  [server]       throw er; // Unhandled 'error' event
  [server]       ^
  [server]
  // highlight-start
  [server] Error: listen EADDRINUSE: address already in use :::8000
  // highlight-end
  [server]     at Server.setupListenHandle [as _listen2] (node:net:1306:16)
  [server]     at listenInCluster (node:net:1354:12)
  [server]     at Server.listen (node:net:1441:7)
  [server]     at Function.listen (/Users/chenhuizhen/music-app-with-node/node_modules/express/lib/application.js:618:24)
  [server]     at Object.<anonymous> (/Users/chenhuizhen/music-app-with-node/server.js:101:5)
  [server]     at Module._compile (node:internal/modules/cjs/loader:1109:14)
  [server]     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)
  [server]     at Module.load (node:internal/modules/cjs/loader:989:32)
  [server]     at Function.Module._load (node:internal/modules/cjs/loader:829:14)
  [server]     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
  [server] Emitted 'error' event on Server instance at:
  [server]     at emitErrorNT (node:net:1333:8)
  [server]     at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  [server]   code: 'EADDRINUSE',
  [server]   errno: -48,
  [server]   syscall: 'listen',
  [server]   address: '::',
  [server]   port: 8000
  [server] }
  [server] [nodemon] app crashed - waiting for file changes before starting...
```

:::info
  #### EADDRINUSE (Address already in use): An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address.
  [Node.js - Common system errors](https://nodejs.org/api/errors.html#common-system-errors)
:::

### 解法
查看目前有 port 誰在執行
```
  sudo lsof -i :8000
```
輸入密碼，收到以下訊息：
```
  COMMAND   PID        USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
  node    21064 chenhuizhen   22u  IPv6 0xc37a498f854ad9af      0t0  TCP *:irdmi (LISTEN)
```
刪除佔位的 PID
```
  sudo kill {PID}
  sudo kill 21064
```
- [補充：lsof](https://github.com/lsof-org/lsof)

---
## 參考資源