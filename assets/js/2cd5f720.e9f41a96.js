"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[1951],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],s={sidebar_position:1,tags:["Next.js"]},o="Intro",d={unversionedId:"next/next_intro",id:"next/next_intro",title:"Intro",description:"\u7528\u4f86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1f",source:"@site/docs/next/next_intro.md",sourceDirName:"next",slug:"/next/next_intro",permalink:"/myWebsite/docs/next/next_intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/next/next_intro.md",tags:[{label:"Next.js",permalink:"/myWebsite/docs/tags/next-js"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Next.js"]},sidebar:"tutorialSidebar",previous:{title:"What is Express ?",permalink:"/myWebsite/docs/node/express_intro"},next:{title:"Foundation of Next.js",permalink:"/myWebsite/docs/next/next_foundations"}},p=[{value:"\u7528\u4f86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1f",id:"\u7528\u4f86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c",children:[],level:2},{value:"What is Next.js ?",id:"what-is-nextjs-",children:[{value:"React: Client-Side Rendering",id:"react-client-side-rendering",children:[],level:3},{value:"Next: \u652f\u63f4 SSR\u3001SSG\u3001CSR",id:"next-\u652f\u63f4-ssrssgcsr",children:[],level:3},{value:"\u88dc\u5145\u6574\u7406: CSR vs. SSR vs. SSG",id:"\u88dc\u5145\u6574\u7406-csr-vs-ssr-vs-ssg",children:[],level:3},{value:"Next.js \u652f\u63f4\uff1aCSR / SSR / SSG",id:"nextjs-\u652f\u63f4csr--ssr--ssg",children:[],level:3},{value:"Next \u8cc7\u6599\u7d50\u69cb",id:"next-\u8cc7\u6599\u7d50\u69cb",children:[],level:3},{value:"\u975c\u614b\u8def\u5f91 \u8207 \u52d5\u614b\u8def\u5f91",id:"\u975c\u614b\u8def\u5f91-\u8207-\u52d5\u614b\u8def\u5f91",children:[],level:3},{value:"getServerSideProps (SSR) \u7bc4\u4f8b",id:"getserversideprops-ssr-\u7bc4\u4f8b",children:[{value:"\u5728\u6bcf\u6b21send request \u7684\u6642\u5019\u904b\u884c\u3002",id:"\u5728\u6bcf\u6b21send-request-\u7684\u6642\u5019\u904b\u884c",children:[],level:4},{value:"\u8981\u7279\u5225\u7559\u610f\uff1a\u54ea\u4e9b\u7a0b\u5f0f\u78bc \u662f\u5728 Client-Side \u57f7\u884c\uff0c\u54ea\u5beb\u5728 Server-Side \u57f7\u884c\u3002",id:"\u8981\u7279\u5225\u7559\u610f\u54ea\u4e9b\u7a0b\u5f0f\u78bc-\u662f\u5728-client-side-\u57f7\u884c\u54ea\u5beb\u5728-server-side-\u57f7\u884c",children:[],level:4}],level:3},{value:"<code>getStaticProps (SSG)</code> + <code>getStaticPaths (SSG)</code> \u7bc4\u4f8b",id:"getstaticprops-ssg--getstaticpaths-ssg-\u7bc4\u4f8b",children:[],level:3},{value:"getStaticPaths() \u56de\u50b3\u578b\u5225",id:"getstaticpaths-\u56de\u50b3\u578b\u5225",children:[],level:3},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},(0,i.kt)("inlineCode",{parentName:"h1"},"Intro")),(0,i.kt)("h2",{id:"\u7528\u4f86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c"},"\u7528\u4f86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u89e3\u6c7a React SEO \u7684\u554f\u984c\u3002"),(0,i.kt)("li",{parentName:"ul"},"React \u5c08\u6ce8 UI\uff0cNext \u5c08\u6ce8\u5efa\u7f6e\u8207\u512a\u5316\u3002"),(0,i.kt)("li",{parentName:"ul"},"Next \u5305\u542b Route setting\u3001data fetching")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-nextjs-"},"What is Next.js ?"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"nextjs-is-a-react-framework-that-gives-you-building-blocks-to-create-web-applications"},"Next.js is a React framework that gives you building blocks to create web applications."),(0,i.kt)("p",{parentName:"div"},"By framework, we mean ",(0,i.kt)("strong",{parentName:"p"},"Next.js handles the tooling and configuration needed for React,\nand provides additional structure, features, and optimizations for your application.")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs"},"\u8cc7\u6599\u4f86\u6e90\uff1a\u5b98\u7db2"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"react-client-side-rendering"},"React: Client-Side Rendering"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Render web by browser"),(0,i.kt)("li",{parentName:"ul"},"\u89e3\u6790\u7db2\u9801\u9806\u5e8f\uff1a",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"send request to server/server response")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML loading")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"\u8f09\u5165 JS")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"render web")),(0,i.kt)("li",{parentName:"ul"},"\u9020\u6210\u554f\u984c\uff1a",(0,i.kt)("br",null),"\n\uff08\u4e00\uff09\u4e00\u5207\u8981\u7b49 JS bundle \u9810\u8f09\u597d\uff0c\u6548\u80fd\u8f03\u4e0d\u597d (User friendly bad)",(0,i.kt)("br",null),"\n\uff08\u4e8c\uff09\u722c\u87f2\u6c92\u6709\u6771\u897f\u722c\uff0cSEO \u4e0d\u6703\u597d (\u6240\u6709\u8cc7\u6599\u90fd\u8981\u53bb server \u62ff)\u3002",(0,i.kt)("br",null),"\n\uff08\u4e09\uff09\u5716\u6848\u6a94\u6848\u512a\u5316\u8981\u81ea\u884c\u8a2d\u5b9a\u3002\n",(0,i.kt)("img",{parentName:"li",src:"https://s3.amazonaws.com/scribblelive-com-prod/wp-content/uploads/sites/4/2020/10/CSR.png",alt:"Client-Side Rendering"}),(0,i.kt)("a",{parentName:"li",href:"https://laptrinhx.com/client-side-rendering-vs-server-side-rendering-which-one-is-better-44494895"},"\u8cc7\u6599\u4f86\u6e90"))),(0,i.kt)("h3",{id:"next-\u652f\u63f4-ssrssgcsr"},"Next: \u652f\u63f4 SSR\u3001SSG\u3001CSR"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SSR")," \u89e3\u6790\u7db2\u9801\u9806\u5e8f\uff1a ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"send request to server/server response complete HTML"),"  --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"pre-render default web/\u8f09\u5165 JS")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"render web")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SSR")," \u89e3\u6c7a ",(0,i.kt)("inlineCode",{parentName:"li"},"React")," \u554f\u984c\uff1a",(0,i.kt)("strong",{parentName:"li"},"\u6539\u8b8a\u6e32\u67d3\u9806\u5e8f"),(0,i.kt)("br",null),"\n\uff08\u4e00\uff09\u53ef\u4ee5\u6c7a\u5b9a\u54ea\u4e9b\u5167\u5bb9\u5148 pre-render \u6216 \u63d0\u4f9b\u975c\u614b\u7db2\u9801 (User friendly better)",(0,i.kt)("br",null),"\n\uff08\u4e8c\uff09\u722c\u87f2\u6709\u6771\u897f\u722c\uff0cSEO \u8f03\u4f73\u3002",(0,i.kt)("br",null),"\n\uff08\u4e09\uff09\u5716\u6848\u6a94\u6848\u512a\u5316 \u6709\u63d0\u4f9b\u81ea\u52d5\u5316\u89e3\u6c7a\u65b9\u6848\u3002\n",(0,i.kt)("img",{parentName:"li",src:"https://s3.amazonaws.com/scribblelive-com-prod/wp-content/uploads/sites/4/2020/10/SSR.png",alt:"Server-Side Rendering"}),(0,i.kt)("a",{parentName:"li",href:"https://laptrinhx.com/client-side-rendering-vs-server-side-rendering-which-one-is-better-44494895"},"\u8cc7\u6599\u4f86\u6e90"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u88dc\u5145\u6574\u7406-csr-vs-ssr-vs-ssg"},"\u88dc\u5145\u6574\u7406: CSR vs. SSR vs. SSG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"--"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5168\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"props"),(0,i.kt)("th",{parentName:"tr",align:null},"cons"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5099\u8a3b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CSR"),(0,i.kt)("td",{parentName:"tr",align:null},"Client-Side Rendering"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e00\u6b21\u8f09\u5165 JS bundle \u8f03\u6162\uff0c\u4e4b\u5f8c\u7684\u9801\u9762\u700f\u89bd\u8f03\u5feb\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5229SEO \u8207 \u6548\u80fd"),(0,i.kt)("td",{parentName:"tr",align:null},"\u722c\u87f2\u53ef\u4ee5\u722c\uff0c\u4f46\u4e0d\u9069\u5408\u5167\u5bb9\u8b8a\u52d5\u5feb\u901f\u7684\u7db2\u7ad9\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSR"),(0,i.kt)("td",{parentName:"tr",align:null},"Server-Side Rendering"),(0,i.kt)("td",{parentName:"tr",align:null},"SEO\u4f73\u3002 ",(0,i.kt)("br",null),"\b",(0,i.kt)("inlineCode",{parentName:"td"},"server response complete HTML")),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u90fd\u7531 Server render, server loading \u91cd\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"--")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSG"),(0,i.kt)("td",{parentName:"tr",align:null},"Static-Side Generation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"\u5728 build \u6642\u5c31\u7522\u751f\u8cc7\u6599\uff0c\u9810\u8f09\u901f\u5ea6\u6700\u5feb\u3002"),(0,i.kt)("inlineCode",{parentName:"td"},"server response complete HTML")),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ea\u9069\u5408",(0,i.kt)("strong",{parentName:"td"},"\u5927\u90e8\u5206\u975c\u614b"),"\u7684\u7db2\u9801\u4f7f\u7528\uff0c\u5e38\u8b8a\u66f4\u5efa\u8b70\u7528SSR\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"--")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nextjs-\u652f\u63f4csr--ssr--ssg"},"Next.js \u652f\u63f4\uff1aCSR / SSR / SSG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u904b\u884c\u6642\u6a5f \u8207 \u5167\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7bc4\u4f8b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getStaticProps (SSG)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 build \u7684\u6642\u5019\u6293\u53d6\u8cc7\u6599\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#getserversideprops-ssr-%E7%AF%84%E4%BE%8B"},"\u7bc4\u4f8b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getStaticPaths (SSG)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 build \u7684\u6642\u5019\u6293\u53d6\u9810\u8655\u7406\u7684\u52d5\u614b\u7bc4\u570d\u3002 ",(0,i.kt)("br",null)," \u4f8b\uff1aURL \u52d5\u614bid\u3002\u7bc4\u570d id = 1 ~ 10 \u5148\u9810\u8f09\u8cc7\u6599\uff0c",(0,i.kt)("br",null),"\u7bc4\u570d\u4e4b\u5916\u56de\u5230 ",(0,i.kt)("inlineCode",{parentName:"td"},"getServerSideProps()")," \u53d6\u503c\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#getstaticprops-ssg--getstaticpaths-ssg-%E7%AF%84%E4%BE%8B"},"\u7bc4\u4f8b"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getServerSideProps (SSR)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 client send request \u6642\uff0cserver-side \u57f7\u884c\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#getstaticprops-ssg--getstaticpaths-ssg-%E7%AF%84%E4%BE%8B"},"\u7bc4\u4f8b"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"next-\u8cc7\u6599\u7d50\u69cb"},"Next \u8cc7\u6599\u7d50\u69cb"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Next \u8cc7\u6599\u7d50\u69cb",src:n(2094).Z})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u975c\u614b\u8def\u5f91-\u8207-\u52d5\u614b\u8def\u5f91"},"\u975c\u614b\u8def\u5f91 \u8207 \u52d5\u614b\u8def\u5f91"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u593e\u8def\u5f91 = URL\uff0c \u52d5\u614b\u8b8a\u6578 \u5c0d\u61c9\u6307\u5b9a\u8cc7\u6599\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Each page is associated with a route based on its file name."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u975c\u614b\u8def\u5f91\uff1a",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:3000/"))," \u5c0d\u61c9\u5230 \u8cc7\u6599\u593e\u7d50\u69cb ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/index.tsx")),(0,i.kt)("li",{parentName:"ul"},"\u52d5\u614b\u8def\u5f91\uff1a",(0,i.kt)("a",{parentName:"li",href:"http://localhost:3000/post/2"},(0,i.kt)("inlineCode",{parentName:"a"},"http://localhost:3000/post/2"))," \u5c0d\u61c9\u5230 \u8cc7\u6599\u593e\u7d50\u69cb ",(0,i.kt)("inlineCode",{parentName:"li"},"pages/post/[id].tsx"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u52d5\u614b\u8def\u5f91\u5c0d\u61c9\u8cc7\u6599\u593e",src:n(8855).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="./pages/post/[id].tsx"',title:'"./pages/post/[id].tsx"'},"    import { useRouter } from 'next/router'\n\n    const Post = () => {\n        const router = useRouter() // \u53d6\u5f97 URL \u5167\u5bb9\n        const {id} = router.query\n\n        return(\n            <h1>PostId: {id}</h1>\n        )\n    }\n\n    export default Post\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getserversideprops-ssr-\u7bc4\u4f8b"},"getServerSideProps (SSR) \u7bc4\u4f8b"),(0,i.kt)("h4",{id:"\u5728\u6bcf\u6b21send-request-\u7684\u6642\u5019\u904b\u884c"},"\u5728\u6bcf\u6b21send request \u7684\u6642\u5019\u904b\u884c\u3002"),(0,i.kt)("h4",{id:"\u8981\u7279\u5225\u7559\u610f\u54ea\u4e9b\u7a0b\u5f0f\u78bc-\u662f\u5728-client-side-\u57f7\u884c\u54ea\u5beb\u5728-server-side-\u57f7\u884c"},"\u8981\u7279\u5225\u7559\u610f\uff1a\u54ea\u4e9b\u7a0b\u5f0f\u78bc \u662f\u5728 Client-Side \u57f7\u884c\uff0c\u54ea\u5beb\u5728 Server-Side \u57f7\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"getServerSideProps (SSR) \u7bc4\u4f8b",src:n(3392).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="./pages/post/[id].tsx"',title:'"./pages/post/[id].tsx"'},"    import { GetServerSideProps } from 'next'\n\n    interface ResponseType {\n        id: number;\n        name: string;\n        height: number;\n        weight: number;\n    }\n\n    // Client-Side executuon\n    const Post = ({data}:{data: ResponseType}) => {\n\n        return(\n            <section>\n                <h1>{data.name}</h1>\n                <div>\n                    <p>Height: {data.height}</p>\n                    <p>Weight: {data.weight}</p>\n                </div>\n            </section>\n        )\n    }\n\n    export default Post;\n\n\n    // Server-Side executuon\n    export const getServerSideProps: GetServerSideProps = async (context) => {\n        const { id } = context.query // \u53d6\u5f97 URL \u4e0a\u8b8a\u52d5\u7684 id\n        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((data) => data.json())\n\n        return {\n            props: {data: res}\n        }\n    }\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getstaticprops-ssg--getstaticpaths-ssg-\u7bc4\u4f8b"},(0,i.kt)("inlineCode",{parentName:"h3"},"getStaticProps (SSG)")," + ",(0,i.kt)("inlineCode",{parentName:"h3"},"getStaticPaths (SSG)")," \u7bc4\u4f8b"),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"getStaticProps()")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"getstaticprops--\u5728-server-side-call-api\u4f46\u4e0d\u77e5\u9053-\u4f7f\u7528\u8005-\u6703\u6307\u5411\u54ea\u500b-id\u52d5\u614b"},(0,i.kt)("inlineCode",{parentName:"h4"},"getStaticProps()")," : \u5728 Server-Side call API\uff0c\u4f46\u4e0d\u77e5\u9053 \u4f7f\u7528\u8005 \u6703\u6307\u5411\u54ea\u500b id\uff08\u52d5\u614b\uff09"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"getStaticPaths()")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"getstaticpaths-"},(0,i.kt)("inlineCode",{parentName:"h4"},"getStaticPaths()")," :"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u9810\u5148\u8a2d\u5b9a \u8f09\u5165id \u7bc4\u570d \u7d66 ",(0,i.kt)("inlineCode",{parentName:"li"},"getStaticProps()")," call API ; "),(0,i.kt)("li",{parentName:"ul"},"\u7bc4\u570d\u4e4b\u5916\u7684\u4e09\u7a2e\u6a21\u5f0f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"blocking"'),": \u4ea4\u7d66 ",(0,i.kt)("inlineCode",{parentName:"li"},"getServerSideProps()")," \u57f7\u884c\u5373\u6642 call API\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true")," :"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false"),":")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="./pages/post/[id].tsx"',title:'"./pages/post/[id].tsx"'},'    import { GetStaticPaths, GetStaticProps } from \'next\'\n\n    interface ResponseType {\n        id: number;\n        name: string;\n        height: number;\n        weight: number;\n    }\n\n    // Client-Side executuon\n    const Post = ({data}:{data: ResponseType}) => {\n\n        return(\n            <section>\n                <h1>{data.name}</h1>\n                <div>\n                    <p>Height: {data.height}</p>\n                    <p>Weight: {data.weight}</p>\n                </div>\n            </section>\n        )\n    }\n    export default Post;\n\n    // highlight-start\n    // Server-Side Build\n    export const getStaticProps: GetStaticProps = async (context) => {\n        const params = context.params\n        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.id||""}/`).then((data) => data.json())\n\n        return {\n            props: {data: res},\n            revalidate: 10 // **** ? *****\n        }\n    }\n\n    // Server-Side Build\n    export const getStaticPaths: GetStaticPaths = async () => {\n        const defaultParams = [1, 2, 3, 4, 5] // \u9810\u8f09 id \u7bc4\u570d 1~5 \u7684\u8cc7\u6599\n        \n        return {\n            paths: defaultParams.map((id: number) => ({params: {id: id + ""}})),\n            fallback: "blocking"\n        }\n    }\n    // highlight-end\n')),(0,i.kt)("h3",{id:"getstaticpaths-\u56de\u50b3\u578b\u5225"},"getStaticPaths() \u56de\u50b3\u578b\u5225"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"    export type GetStaticPathsResult<P extends ParsedUrlQuery = ParsedUrlQuery> = {\n        paths: Array<string | { params: P; locale?: string }>\n        // highlight-start\n        fallback: boolean | 'blocking'\n        // highlight-end\n    }\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"next_fallback_blocking",src:n(918).Z}),"\n",(0,i.kt)("img",{alt:"next_fallback_true",src:n(7672).Z}),"\n",(0,i.kt)("img",{alt:"next_fallback_false",src:n(8703).Z})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:""}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10265138"},"Day02 - \u70ba\u4ec0\u9ebc\u4f60\u9700\u8981 Next.js ?"))))}m.isMDXComponent=!0},8855:function(e,t,n){t.Z=n.p+"assets/images/next_app_dynamic_page-dd8528dcd45ec5dd0052502a8160a61b.png"},2094:function(e,t,n){t.Z=n.p+"assets/images/next_app_structure-afe3f54ccda611acad01369645ffe3c5.png"},918:function(e,t,n){t.Z=n.p+"assets/images/next_fallback_blocking-d6e6d177bacd8197c4fff65bd8394cc2.png"},8703:function(e,t,n){t.Z=n.p+"assets/images/next_fallback_false-28e31a9a83fc60b11ec37f5db24714b1.png"},7672:function(e,t,n){t.Z=n.p+"assets/images/next_fallback_true-a84556bb247a702351315a0d709864ea.png"},3392:function(e,t,n){t.Z=n.p+"assets/images/next_getServerSideProps()_example-03f7f5ed317f83b1fc096160371a6ff7.png"}}]);