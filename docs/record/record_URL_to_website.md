---
  sidebar_position: 6
  id: record_URL_to_website
  title: What happens when I click the URL?
  tags:
    - DNS
    - HTTP
    - IP address
---

待完成項目：
- DNS parse domain name
- IP address 是把 MAC address 拆解成 來源IP 與 目標IP 嗎
- IP_address 網路位置 與 主機位置
- TCP 

---

## 從點擊 LoginPage 到 首頁
（草稿）
1. 使用者輸入帳號、密碼



---

# TCP/IP 
![OSI 标准模型和 TCP/IP 协议模型](https://arch-long.cn/assets/tcp_ip.png)<br/>
[圖片來源](https://arch-long.cn/articles/network/OSI%E6%A8%A1%E5%9E%8BTCPIP%E5%8D%8F%E8%AE%AE%E6%A0%88.html)

## 物理層 - Physical / 網路存取層 - Network Access

:::info <h2> 物理介質傳遞電信號（0、1）</h2>
  - 物理介質: 光纖、無線、網路線、網路卡...
  - #### 以太網路、WiFi
---
### 功能
1. 物理介質發送給目標主機。

2. 傳輸電信號01組成有意義的數據組。

3. 一組數據就是一封包。

4. 封包內包含 來源MAC地址、目標MAC地址。

5. 廣播封包給子網內所有主機，符合主機接收。（透過檢查首部中的目標MAC地址: 網卡廠商，唯一性）

![封包格式](https://1.bp.blogspot.com/-dT1lUoCChxg/WKnjcBrwJQI/AAAAAAAACCw/e2EJntlcY7wA7ITfHu6idzxNWtFPd0zmQCLcB/s640/ETHERNET%2B802.3%2BFRAME.png)<br/>
[圖片來源](http://www.cnt4all.com/2017/02/IEEE-802.3-LLC-frame-IEEE-802.3-SNAP-frame.html)
:::

:::note <h2>數字：0 與 1 的世界</h2>
- 電腦運算的方式：非 0 即 1，一組會有八個單元(bits)，可以創造 256種排列。
    - 00000000
    - 00000001
    - 00000010
    - 00000011
    - ...
- #### 基礎單位：位元(bits)，`一組會有 8位元，8位元 (8 bits)= 1byte(一個位元組)` 。
:::

:::note <h2>MAC Address</h2>
- MAC Address = Media Access Control Address （媒體存取控制地址）。
- 又稱：「以太網路位址」(Ethernet Address)、「實體位址」（Physical Address）、「區域網路位址」（LAN Address）。
- 用來確認 網路裝置位置 的位址，每個網卡都有 唯一一個 MAC Address。
:::

---
## 網路(互聯)層 - Network

:::info <h2>IP (Internet Protocol) : 網際網路協定</h2>
- 網路交換封包的一種協定。
- `Network ID` + `Host ID`。
- 傳遞訊息（來源端 >> 目標端）
- 功能：定址(Addressing)、路由 (Routing)

---
### (一) 定址(Addressing): 
- 賦予網路裝置名稱或位址。
- 往上傳遞 TCP封包 或 UDP封包，往下傳遞至鏈接層給乙太網路。
- 用來辨認 來源主機(Host) 與 目標主機(Host) 是否在同個**[子網域](#子網路遮罩-subnet-mask)**。
  - 如果 來源主機(host) 與 目標主機(host) 的網路位址一樣，說明兩者在相同子網域上。
  - 如果 兩者在不同子網域上，就需要 **路由器** 幫忙。

![IP_address](../../static/img/docs/record/record_URL_to_website_IP_address.png)<br/>
[圖片來源](https://nordvpn.com/zh-tw/blog/ziwanglu-zhezhao/)<br/>


### (二) 路由 (Routing)：決定封包在網路之間的傳送路徑 。
- 連結不同子網域。
- 計算出最佳傳遞（由路由器決定傳送路徑）。
- 切割、重組封包。
- **[什麼是 ISP?](#isp-internet-service-provider)**

![封包傳遞路徑](../../static/img/docs/record/record_packet_transfer_route.png)
[圖片來源](https://arcobaleno18.pixnet.net/blog/post/203574046-%E9%97%9C%E6%96%BC%E7%B6%B2%E8%B7%AF%E7%9A%84%E4%B8%80%E4%BA%9B%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%28%E5%9F%BA%E7%A4%8E-isp%E7%AF%87%29--%E2%85%A1)

---
### IP類型
|名稱   |說明                                                                              |其他|
|------|----------------------------------------------------------------------------------|---|
|固定IP |IP位置固定。<br/>適用公司企業網站、伺服器位置、列表機固定位置 等。                          |外網|
|浮動IP |每次連網的IP位置都不一樣：不容易受駭客鎖定、IP有限，釋出給需要使用的人。<br/>適用一般家庭或個人。|外網|
|虛擬IP |外網無法連進來，內網IP可以重複。常用例如：`192.168`、`10.0`。                             |內網|

---
![IP_address 網路位置 與 主機位置](../../static/video/record/record_IP_address.gif)

- `Network ID` : 用來識別網路位置。
- `Host ID` : 用來識別主機位置。
- `Network ID` ＋ `Host ID` = 32 bits
  - 依據網路位址規模：`Network ID` 越長，能夠容納的 `Host ID` 個別裝置 越少。
- 常見的三種等級：Class A、Class B、Class C


:::

:::note
### 子網路 (Subnet) 
![network_without_subnetting](../../static/img/docs/record/record_network_without_subnetting.png)
- 情境：一公司取得一IP位址，但公司幾百人同用一網路上，會造成網路效能低落。
- 為了解決此問題，公司內部自行切割成數個子網路。
- `Network ID` ＋ **(`subnet number` + `Host ID`)**: 從 `Host ID` 擷取幾個 bits (**`subnet prefix`**) 作為 子網路識別。
  - 為了讓子網路的網路位置保持唯一，故從 `Host ID`拆出幾個子網路。
  - `Network ID` ＋ **`subnet number`** = 唯一的子網路位址。

![子網路](../../static/img/docs/record/record_subnet.png)
![network_with_subnetting](../../static/img/docs/record/record_network_with_subnetting.png)
[圖片來源](http://www1.chihlee.edu.tw/teachers/chienhua/course/CN-2016S/CN-lecture03.pdf)

---

### 子網路遮罩 (Subnet Mask)
- 功能：用來判斷切割後的子網路 IP 位址中，哪幾個位元為網路位址，哪幾個位元為主機位址。
- 子網路遮罩 必須與 IP位址配對才有意義。
  - `1` 代表 網路位址
  - `0` 代表 主機位址
- 兩種子網路遮罩 寫法：
  - `168.0.0.1/21` : 代表 網路位址為 21 bits，主機位址為 3 bits。
  - 十進位、二進位
    - 沒有子網路的子網路遮罩
      ```
        * 十進位寫法
        Class A : 11111111.00000000.00000000.00000000
        Class B : 11111111.11111111.00000000.00000000
        Class C : 11111111.11111111.11111111.00000000

        * 二進位寫法
        Class A : 255.0.0.0
        Class B : 255.255.0.0
        Class C : 255.255.255.0
      ```
    - 有子網路的網路遮罩: 網路位址為 `Network ID` ＋ **`subnet number`**，主機位址為 `Host ID` - **`subnet number`**
      ![record_subnetMask_record](../../static/img/docs/record/record_subnetMask_record.png)

---

:::

:::note 
### ISP (Internet Service Provider)
- 網路服務供應商。
- 提供網路存取的服務。
- 透過：光纖、ADSL、行動網路 等連結網路。
- 有網路，才能去 DNS server 要 IP，還有後續其他動作。
- [Internet Service Provider (ISP)](https://www.lifewire.com/internet-service-provider-isp-2625924)
:::

:::note 
### URL 網址
![domain name](../../static/img/docs/record/record_url_parts.png)<br />
[圖片來源](https://www.semrush.com/blog/top-level-domains/)

|--|名稱|說明|其他|
|---------------|--|---|---|
|`http`、`https`|HyperText Transfer Protocol|超文本傳輸協定: <br />在**[應用層](#應用層---application)**資料傳輸的規範。|SSL 憑證保護<br />Secure Sockets Layer|
|`www`          |Subdomain、Hostname (Third level domain)|子(次)網域、主機名稱。|ex. `blog` |
|`google`       |SLD: Second Level Domain|自定義名稱，會影響SEO。|--|
|`com`          |TLD: Top Level Domain|標示網站的類型。<br />`com` 代表 公司行號或營利單位。|`edu` 代表 學校單位。<br />`gov` 代表 政府機關。|

---
### 域名 (Domain Name)
#### 域名 是給人看的，IP address 是給電腦看的。
當我在點擊網址搜尋時，我要先到 DNS 查詢該網址的 IP位置，才知道要 目標主機(Host)確切位置。
![domain_name](../../static/img/docs/record/record_domain_name.png)

---
### DNS (Domain Name Space)
- 樹狀階層(hierarchy)架構
![Domain Name System Server Hierarchy](https://www.seomining.com/web-technologies/module4/images/dns-root-server.jpg)
[圖片來源](https://www.seomining.com/web-technologies/module4/top-level-domains.php)

---
### DNS Cache
- 功能：
  #### 暫存最近造訪的網站IP位置，當每次輸入網址搜尋時，會先到 cache 查詢 有沒有對應 IP，有的話就不用再到 remote DNS 查詢，比較省時。
  > The DNS cache attempts to speed up the process even more by handling the name resolution of recently visited addresses before the request is sent out to the internet.

  > Before a browser issues its requests to the outside network, the computer intercepts each one and looks up the domain name in the DNS cache database. **The database contains a list of all recently accessed domain names and the addresses that DNS calculated for them the first time a request was made.**

- [什麼是 DNS 快取記憶體中毒？ | DNS 詐騙](https://www.cloudflare.com/zh-tw/learning/dns/dns-cache-poisoning/)
---
### Cache
功能：暫存近期伺服器回傳資料，當使用者 send request 時候，先到 `cache` 找找有無對應資料; 如果有，直接拿來使用。

- 解決性能問題：不用每次都重新到 remote server 要資料。
- 不用重新等待伺服器回傳資料，網頁載入時間變快，使用者體驗較佳。
- 當我們第一次前往網站時，會花比較多的時間載入資料，再次前往網站就快很多就是因為 `cache` 的原因。

![Cache](https://i.imgur.com/BTnSPIs.png)
- 圖片與資料來源：[Day17 X 初探快取 ＆ HTTP Caching](https://ithelp.ithome.com.tw/m/articles/10276125)

:::


:::tip <h2>port</h2>
### IP 相當於 「電話號碼」，port 相當於「分機號碼」。

---
#### 一台電腦對應一IP Address，如果我同時打開三個瀏覽器，並向Server送出請求。
#### Ｑ：Server 回傳 response，但電腦只有一IP Address，它要怎麼知道要資料分別回傳給哪一個瀏覽器？
#### Ａ：`IP Address：port`，透過 `port` 去辨認回應的指定端。
![what_does_port_used_for](../../static/img/docs/record/record_what_does_port_used_for.png)

---
### 查詢電腦 IP by Mac Terminal
- `Curl ifconfig.me` : external IP address (which server response to the target IP address of my computer.)
- `ipconfig getifaddr en0` : This will return the IP address of your WiFi connection.
- `Ipconfig getifaddr en1` : The system will return the IP address for a wired Ethernet connection.
:::





---
## 傳輸層 - Transport

### TCP (Transmission Control Protocol)
#### 定義傳輸方式
#### TCP 三次握手
- 目的：確認雙方(client-side/server-side) 發收 與 接收 管道暢通。
![TCP 三次握手](../../static/video/record/record_TCP_three_check.gif)



---
## 應用層 - Application
- 功能：定義數據格式，並按照對應的格式解讀數據。（簡單說就是：將資料傳輸的方式按規範傳遞，確保資料溝通順暢。）

|         |全名                                                |默認 Port|說明                                                                       |
|---------|---------------------------------------------------|--|---------------------------------------------------------------------------|
|`http(s)`|HyperText Transfer Protocol <br />(超文本傳輸協定)    |http -> 80 <br/> https -> 443|針對 www伺服器 與 本地瀏覽器 傳輸超媒體文件(ex. HTML 文件、`.png`...)的協定。|
|`SMTP`   |Simple Mail Transfer Protocol <br />(簡易郵件傳輸協定)|25|針對郵件傳遞資料的協定。|
|`FTP`    |File Transfer Protocol <br />(檔案傳輸協定)           |21|針對檔案移動的協定。|

:::note
### `http(s)` 
#### HTTP協定表示：需要遵循以下規範。(詳細內容 參考：[HTTP 协议](https://arch-long.cn/articles/network/HTTP-%E5%8D%8F%E8%AE%AE.html))

<table >
  <thead>
    <tr>
      <th colspan="3">HTTP Request</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Request Headers</th>
      <td>客戶端 與 伺服器 溝通的附加信息。</td>
      <td>
          <ul>
            <li><code>authorization</code> : <code>Bearer token</code></li>
            <li>
              <code>Content-type</code> : <br />告知傳輸內容是什麼類型的資料。
              <ul>
                <li><code>application/json</code></li>
                <li><code>text/html; charset=UTF-8</code></li>
                <li><code>multipart/form-data</code></li>
              </ul>
            </li>
            <li><code>Host</code> : <code>IP address:port</code></li>
            <li><code>Origin</code> : <code>https://www.example.com</code></li>
            <li><code>cache-control</code> : 新增資料。</li>
            <li><code>cookie</code> : 重新導向至 新URL。</li>
            <li><code>user-agent</code> : 客戶端是從哪裏發送。</li>
            <li><code>accept</code> : 接受回傳的資料類型。
              <ul>
                <li><code>text/plain</code> : 純文字</li>
                <li><code>image/*</code> : 任一類型的圖案檔。<br /><code>image/png</code><code>image/jpg</code><code>image/svg</code></li>
              </ul>
            </li>
          </ul>
      </td>
    </tr>
    <tr>
      <th>Request URL</th>
      <td>目標 Server 的 位置。</td>
      <td></td>
    </tr>
    <tr>
      <th>Request Method</th>
      <td>
        <ul>
          <li><code>GET</code> : 讀取資料。</li>
          <li><code>POST</code> : 新增資料。</li>
          <li><code>PUT</code> : 修改資料。(原本有資料：修改/沒資料：新增)。</li>
          <li><code>PATCH</code> : 修改資料。(原本有資料：修改)。</li>
          <li><code>DELETE</code> : 刪除資料。</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <th>Request Payload</th>
      <td>
        <ul>
            <li><code>GET</code>、<code>DELETE</code>: 不會夾帶資料。</li>
            <li><code>POST</code>、<code>PUT</code>、<code>PATCH</code> : 會夾帶資料 給 Server。</li>
        </ul>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

<table >
  <thead>
    <tr>
      <th colspan="3">HTTP Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Response Headers</th>
      <td>Request Headers</td>
      <td></td>
    </tr>
    <tr>
      <th>Response Status</th>
      <td>
          <ul>
            <li><code>1XX</code> : 客戶端 發送請求 OK!</li>
            <li><code>2XX</code> : 客戶端發送請求 OK; 伺服器接收、發送請求 OK!</li>
            <li><code>3XX</code> : 需進一步操作才能完成。</li>
            <li><code>4XX</code> : Client-side error。</li>
            <li><code>5XX</code> : Server-side error。</li>
          </ul>
      </td>
      <td>
          <ul>
            <li><code>100</code> : 客戶端 送出請求中，目前沒遇到問題。</li>
            <li><code>200</code> : 成功回應。</li>
            <li><code>301</code> : 重新導向至 新URL。</li>
            <li><code>400</code> : Bad request，請求資料格式錯誤。</li>
            <li><code>401</code> : <br />Unauthorized，需要授權以回應請求，像是 登入 <code>token</code>。</li>
            <li><code>403</code> : <br />Forbidden，用戶端並無訪問權限，伺服器 知道 我是誰，但是我沒有得到授權，拒絕回傳資料。</li>
            <li><code>404</code> : Request URL 找不到對應 Server。</li>
            <li><code>500</code> : 伺服器端發生未知或無法處理的錯誤。</li>
          </ul>
      </td>
    </tr>
  </tbody>
</table>

:::

:::tip
### `http` vs. `https`
![record_http_concern_concept](../../static/img/docs/record/record_http_concern_concept.png)
![record_https_concept](../../static/img/docs/record/record_https_concept.png)

---
### SSL/TLS
- #### SSL (Secure Sockets Layer)
- #### TLS (Transport Layer Security)
- [詳細介紹：SSL/TLS](https://hpbn.co/transport-layer-security-tls/)
- [SSL/TLS、对称加密和非对称加密和TLSv1.3](https://zhuanlan.zhihu.com/p/345943705)

![SSL/TLS Layer](https://hpbn.co/assets/diagrams/9873c7441be06e0b53a006aac442696c.svg)
[圖片來源](https://hpbn.co/transport-layer-security-tls/)

:::

---
![Connect info](https://signal.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/What%20is%20TCPIP%20(Signal)/TCP-IP.png?width=2640&name=TCP-IP.png)
![兩個網際網路主機通過兩個路由器和對應的層連接。](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/IP_stack_connections.svg/800px-IP_stack_connections.svg.png)
[圖片來源](https://zh.wikipedia.org/zh-tw/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F#/media/File:IP_stack_connections.svg)
![RFC 1122中描述的沿著不同的層應用資料的封裝遞減](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/UDP_encapsulation.svg/1920px-UDP_encapsulation.svg.png)
[圖片來源](https://zh.wikipedia.org/zh-tw/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F#/media/File:IP_stack_connections.svg)

---
## 參考資源
- [網路基礎 - TCP/IP](https://yakimhsu.com/project/project_w4_Network_TCP_IP.html)
- [OSI 模型、TCP/IP 协议栈](https://arch-long.cn/articles/network/OSI%E6%A8%A1%E5%9E%8BTCPIP%E5%8D%8F%E8%AE%AE%E6%A0%88.html)
- [Ethernet 網路 & 資料連結層PPT](https://slidesplayer.com/slide/14694635/)
- [網路概論 - IP 基礎與定址](http://www1.chihlee.edu.tw/teachers/chienhua/course/CN-2016S/CN-lecture03.pdf)
- [35张图详解路由器的40个常见问题](https://www.sdnlab.com/25499.html)
- [子網路遮罩介紹](https://www.youtube.com/watch?v=PApWx90wOfA)
- [子網路遮罩是什麼？](https://nordvpn.com/zh-tw/blog/ziwanglu-zhezhao/)
- [搞懂目錄位置 & 網路基礎概論](https://yakimhsu.com/project/project_w1_Networking_Introduction.html)
- [從傳紙條輕鬆學習基本網路概念](https://hulitw.medium.com/learning-tcp-ip-http-via-sending-letter-5d3299203660)
- [DNS Caching and How It Makes Your Internet Better](https://www.lifewire.com/what-is-a-dns-cache-817514)
- [What Is a Router and How Does It Work?](https://www.lifewire.com/what-is-a-router-2618162)
