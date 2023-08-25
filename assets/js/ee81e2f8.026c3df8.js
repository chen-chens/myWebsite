"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[2808],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1180:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:22,id:"record_token",title:"Where to get or set token ?",tags:["Node.js","token","jwt"]},l=void 0,s={unversionedId:"record/record_token",id:"record/record_token",title:"Where to get or set token ?",description:"1. \u6bcf\u6b21 call API \u5728 Request Header \u5b58 token (\u53ea\u6709\u524d\u7aef\u53ef\u4ee5\u505a)",source:"@site/docs/record/record_token.md",sourceDirName:"record",slug:"/record/record_token",permalink:"/myWebsite/docs/record/record_token",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/record/record_token.md",tags:[{label:"Node.js",permalink:"/myWebsite/docs/tags/node-js"},{label:"token",permalink:"/myWebsite/docs/tags/token"},{label:"jwt",permalink:"/myWebsite/docs/tags/jwt"}],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,id:"record_token",title:"Where to get or set token ?",tags:["Node.js","token","jwt"]},sidebar:"tutorialSidebar",previous:{title:"Next.js Project with, Airbnb Eslint Style , Prettier, and Husky setup",permalink:"/myWebsite/docs/record/record_next_eslint_prettier_husky"},next:{title:"Async or Sync jwt.verify() ?",permalink:"/myWebsite/docs/record/record_jwt_verify"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u6b21 call API \u5728 Request Header \u5b58 ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," (\u53ea\u6709\u524d\u7aef\u53ef\u4ee5\u505a)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{ "Authorization" : "Bearer <token>"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u512a\u9ede\uff1a"),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u9ede\uff1a")),(0,i.kt)("hr",null),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5c07 ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," \u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"cookie"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5f8c\u7aef\u5beb\u6cd5"',title:'"\u5f8c\u7aef\u5beb\u6cd5"'},"\nconst token = jwt.sign(<payload>, SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE_IN! })\n\nres.cookie(TOKEN_NAME, token, {\n    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),\n    httpOnly: true,\n    secure: true,\n});\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u512a\u9ede\uff1a\u524d\u5f8c\u7aef\u90fd\u53ef\u4ee5\u5b58\u53d6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u9ede\uff1aCookie \u5bb9\u6613\u53d7\u5230 CSRF \u653b\u64ca\uff0c\u56e0\u70ba\u5b83\u6703\u5728\u6bcf\u6b21\u8acb\u6c42\u4e2d\u81ea\u52d5\u9644\u52a0\u5230\u982d\u90e8\u3002\u3002")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://community.render.com/t/cookie-doesnt-send-to-browser/10136"},"https://community.render.com/t/cookie-doesnt-send-to-browser/10136")))}d.isMDXComponent=!0}}]);