---
  sidebar_position: 24
  id: record_jwt_verify
  title: Async or Sync jwt.verify() ?
  tags:
    - Node.js
    - token
    - jwt
---

:::note

`jwt.verify(token, secretOrPublicKey, [options, callback])`

(Asynchronous) If a callback is supplied, function acts asynchronously. The callback is called with the decoded payload if the signature is valid and optional expiration, audience, or issuer are valid. If not, it will be called with the error.

(Synchronous) If a callback is not supplied, function acts synchronously. Returns the payload decoded if the signature is valid and optional expiration, audience, or issuer are valid. If not, it will throw the error.

- [GitHub: node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
:::

### 同步寫法：

```js

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY!);

    }catch(err){
        console.log("VerifyToken Fail: ", err)
    }
}

```


### 非同步寫法：

```js

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    await jwt.verify(token, process.env.JWT_SECRET_KEY!, (err, decoded) => {
        if(!!decode){

        }else{
            console.log("VerifyToken Fail: ", err)
        }
    });

}

```


### Q: 使用同步 與 非同步 寫法差異？

根據 ChatGPT 回覆：

```
使用同步或異步方式調用 jwt.verify() 方法主要區別在於程式碼的運行方式和錯誤處理方式。

使用同步方式調用 jwt.verify() 方法，當 JWT 解析失敗時會拋出錯誤，你可以使用 try-catch 塊處理這些錯誤，這樣可以讓代碼更加簡潔明瞭。但是，如果 JWT 很大或者密鑰很複雜，同步方式的運行速度可能會比較慢，而且當解析耗時很長時，程式會阻塞在這裡，影響整個應用程序的性能。

使用異步方式調用 jwt.verify() 方法，你需要使用回調函數來處理解析成功或失敗的情況。這種方式適用於需要解析大量 JWT 或者密鑰很複雜的情況。當解析 JWT 需要較長時間時，異步方式可以避免阻塞整個應用程序的運行。但是，使用異步方式需要更多的代碼，需要在回調函數中處理錯誤，代碼比較冗長。

總的來說，使用同步或異步方式調用 jwt.verify() 方法，主要是根據應用程序的需求和性能要求進行選擇。如果需要解析大量 JWT 或者密鑰很複雜，可以使用異步方式。如果需要代碼簡潔明瞭，可以使用同步方式。

```


### Q: 異步 本身就是 Promise 嗎？ 還是不是？

根據 ChatGPT 回覆：

```
異步和 Promise 不是完全相同的概念。

異步是一種程式執行的方式，當遇到需要耗時操作時，程式不會等待操作完成再繼續執行，而是先把操作交給其他執行緒或事件循環，讓程式可以繼續執行下去。

Promise 則是一種處理異步操作的方式，它提供了一個可以等待異步操作完成的機制，使得程式可以在操作完成後繼續執行。

當我們使用 async/await 語法時，實際上是把異步操作包裝成 Promise 的形式，讓我們可以像使用同步操作一樣地編寫程式碼，但這並不代表異步就是 Promise。在 JavaScript 中，異步操作可以通過多種方式實現，例如 callback、事件、Promise、Generator、async/await 等等。

```
