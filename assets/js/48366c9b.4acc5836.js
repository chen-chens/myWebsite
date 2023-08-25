"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[5594],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3979:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:4,id:"node_record",title:"Node \u932f\u8aa4\u8a0a\u606f\u7d00\u9304 \u8207 \u89e3\u6cd5",tags:["Node.js"]},d=void 0,l={unversionedId:"node/node_record",id:"node/node_record",title:"Node \u932f\u8aa4\u8a0a\u606f\u7d00\u9304 \u8207 \u89e3\u6cd5",description:"node Server Output \u932f\u8aa4\u8a0a\u606f\uff1aEADDRINUSE",source:"@site/docs/node/node_record.md",sourceDirName:"node",slug:"/node/node_record",permalink:"/myWebsite/docs/node/node_record",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/node/node_record.md",tags:[{label:"Node.js",permalink:"/myWebsite/docs/tags/node-js"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"node_record",title:"Node \u932f\u8aa4\u8a0a\u606f\u7d00\u9304 \u8207 \u89e3\u6cd5",tags:["Node.js"]},sidebar:"tutorialSidebar",previous:{title:"What is Express ?",permalink:"/myWebsite/docs/node/express_intro"},next:{title:"Node NPM",permalink:"/myWebsite/docs/node/node_npm"}},c=[{value:"<code>node</code> Server Output \u932f\u8aa4\u8a0a\u606f\uff1aEADDRINUSE",id:"node-server-output-\u932f\u8aa4\u8a0a\u606feaddrinuse",children:[{value:"\u89e3\u6cd5",id:"\u89e3\u6cd5",children:[],level:3}],level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",children:[],level:2},{value:"\u7121\u6cd5\u76f4\u63a5\u57f7\u884c <code>nodemon</code>",id:"\u7121\u6cd5\u76f4\u63a5\u57f7\u884c-nodemon",children:[{value:"\u89e3\u6cd5",id:"\u89e3\u6cd5-1",children:[],level:3}],level:2}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"node-server-output-\u932f\u8aa4\u8a0a\u606feaddrinuse"},(0,o.kt)("inlineCode",{parentName:"h2"},"node")," Server Output \u932f\u8aa4\u8a0a\u606f\uff1aEADDRINUSE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-node"},"  [server] node:events:342\n  [server]       throw er; // Unhandled 'error' event\n  [server]       ^\n  [server]\n  // highlight-start\n  [server] Error: listen EADDRINUSE: address already in use :::8000\n  // highlight-end\n  [server]     at Server.setupListenHandle [as _listen2] (node:net:1306:16)\n  [server]     at listenInCluster (node:net:1354:12)\n  [server]     at Server.listen (node:net:1441:7)\n  [server]     at Function.listen (/Users/chenhuizhen/music-app-with-node/node_modules/express/lib/application.js:618:24)\n  [server]     at Object.<anonymous> (/Users/chenhuizhen/music-app-with-node/server.js:101:5)\n  [server]     at Module._compile (node:internal/modules/cjs/loader:1109:14)\n  [server]     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)\n  [server]     at Module.load (node:internal/modules/cjs/loader:989:32)\n  [server]     at Function.Module._load (node:internal/modules/cjs/loader:829:14)\n  [server]     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)\n  [server] Emitted 'error' event on Server instance at:\n  [server]     at emitErrorNT (node:net:1333:8)\n  [server]     at processTicksAndRejections (node:internal/process/task_queues:83:21) {\n  [server]   code: 'EADDRINUSE',\n  [server]   errno: -48,\n  [server]   syscall: 'listen',\n  [server]   address: '::',\n  [server]   port: 8000\n  [server] }\n  [server] [nodemon] app crashed - waiting for file changes before starting...\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h4",{parentName:"div",id:"eaddrinuse-address-already-in-use-an-attempt-to-bind-a-server-net-http-or-https-to-a-local-address-failed-due-to-another-server-on-the-local-system-already-occupying-that-address"},"EADDRINUSE (Address already in use): An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address."),(0,o.kt)("p",{parentName:"div"},"  ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/errors.html#common-system-errors"},"Node.js - Common system errors")))),(0,o.kt)("h3",{id:"\u89e3\u6cd5"},"\u89e3\u6cd5"),(0,o.kt)("p",null,"\u67e5\u770b\u76ee\u524d\u6709 port \u8ab0\u5728\u57f7\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  sudo lsof -i :8000\n")),(0,o.kt)("p",null,"\u8f38\u5165\u5bc6\u78bc\uff0c\u6536\u5230\u4ee5\u4e0b\u8a0a\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  COMMAND   PID        USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME\n  node    21064 chenhuizhen   22u  IPv6 0xc37a498f854ad9af      0t0  TCP *:irdmi (LISTEN)\n")),(0,o.kt)("p",null,"\u522a\u9664\u4f54\u4f4d\u7684 PID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  sudo kill {PID}\n  sudo kill 21064\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lsof-org/lsof"},"\u88dc\u5145\uff1alsof"))),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u7121\u6cd5\u76f4\u63a5\u57f7\u884c-nodemon"},"\u7121\u6cd5\u76f4\u63a5\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"h2"},"nodemon")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  nodemon test/app.js\n")),(0,o.kt)("h3",{id:"\u89e3\u6cd5-1"},"\u89e3\u6cd5"),(0,o.kt)("p",null,"\u56e0\u70ba\u6211\u662f\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"nodemon")," \u8f09\u5165\u5728\u5c08\u6848\u4e2d(\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install nodempn --save-dev"),")\uff0c\u800c\u4e0d\u662f\u5168\u57df (\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g nodemon"),")\u3002\n\u6545\u6211\u8981\u900f\u904e \u8a72\u5c08\u6848\u7684\u7ba1\u7406\u5957\u4ef6 script \u4f86\u57f7\u884c\uff0c\u5982\u4ee5\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  npx nodemon test/app.js\n")),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),") or using ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nodemon"),"."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/nodemon"},"nodemon"))))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'title="npm \u8207 npx \u5dee\u5225"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm")," : \u662f\u4e00\u500b Node.js \u5957\u4ef6\u7ba1\u7406\u5de5\u5177\uff0c\u7ba1\u7406\u5c08\u6848\u5167\u7684\u5957\u4ef6\u4e0b\u8f09\u3001\u7248\u672c\u7b49\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npx")," : \u57f7\u884c\u5c08\u6848\u5167\u7684\u5957\u4ef6\u6307\u4ee4\u3002(\u975e\u5168\u57df\u7684\u5957\u4ef6) \u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," \u4e0b\u7684\u4e00\u547d\u4ee4\u5217\u5de5\u5177\u3002")))))}m.isMDXComponent=!0}}]);