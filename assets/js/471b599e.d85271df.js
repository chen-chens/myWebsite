"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[2666],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(k,c(c({ref:t},d),{},{components:n})):a.createElement(k,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3725:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return d},default:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),c=["components"],l={sidebar_position:6},s="Hooks - useMemo / useCallBack",o={unversionedId:"react/react_useMemoAnduseCallback",id:"react/react_useMemoAnduseCallback",title:"Hooks - useMemo / useCallBack",description:"\u70ba\u4e86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1f",source:"@site/docs/react/react_useMemoAnduseCallback.md",sourceDirName:"react",slug:"/react/react_useMemoAnduseCallback",permalink:"/chen-chens/myWebsite/docs/react/react_useMemoAnduseCallback",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/react/react_useMemoAnduseCallback.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Hooks - useEffect",permalink:"/chen-chens/myWebsite/docs/react/react_useEffect"},next:{title:"Hooks - useContext",permalink:"/chen-chens/myWebsite/docs/react/react_useContext"}},d=[{value:"\u70ba\u4e86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1f",id:"\u70ba\u4e86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c",children:[],level:2},{value:"useMemo",id:"usememo",children:[],level:2},{value:"useCallback",id:"usecallback",children:[{value:"\u89e3\u6c7a\u65b9\u6cd5: \u5c07 call API \u7684 funciton \u653e\u5165 <code>useCallback(fn, [...])</code>",id:"\u89e3\u6c7a\u65b9\u6cd5-\u5c07-call-api-\u7684-funciton-\u653e\u5165-usecallbackfn-",children:[],level:4}],level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hooks---usememo--usecallback"},"Hooks - useMemo / useCallBack"),(0,i.kt)("h2",{id:"\u70ba\u4e86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c"},"\u70ba\u4e86\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"useMemo vs useEffect")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56347639/react-useeffect-vs-usememo-vs-usestate"},"https://stackoverflow.com/questions/56347639/react-useeffect-vs-usememo-vs-usestate")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"useCallback(fn, [deps]) is equivalent to useMemo(() => fn, [deps])\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},"React \u5b98\u7db2\u7bc0\u9304"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"usememo"},"useMemo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u89e3\u6c7a\u4ec0\u9ebc\u554f\u984c\uff1a\u907f\u514d\u91cd\u8907\u8a08\u7b97\u8907\u96dc\u908f\u8f2f\uff0c\u5c07\u8a08\u7b97\u7d50\u679c\u5b58\u8d77\u4f86\uff0c\u505a\u512a\u5316\u4f7f\u7528\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    useMemo(() => {...}, [deps])\n    /**\n     * Returns a memoized value.\n     * \n    */\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"remember-that-the-function-passed-to-usememo-runs-during-rendering"},(0,i.kt)("inlineCode",{parentName:"h4"},"Remember that the function passed to useMemo runs during rendering.")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"usecallback"},"useCallback"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\uff1a"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u4f86\u8a18\u4f4f\u4e00\u500b function instance\u3002"),(0,i.kt)("li",{parentName:"ul"},"Returns a memoized callback."),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u60c5\u5883\uff1a\u7b2c\u4e00\u6b21\u958b\u555f\u756b\u9762\u6642\uff0ccall API \u62ff\u8cc7\u6599\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'    const getMainData = (pageId:string) =>{\n        setMainLoading(true)\n        ApiGetData(pageId, token || "", dispatch)\n        .then(res =>{\n            ...\n        }).catch(err =>{\n            ...\n        }).finally(()=>{\n            setMainLoading(false)\n        })\n    }\n        \n    React.useEffect(()=>{\n        getMainData(pageId)\n    },[pageId,forceUpdate,token,dispatch])\n')),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," \u6642\uff0c\u6642\u5e38\u6703\u51fa\u73fe\u4ee5\u4e0b\u8b66\u544a\u63d0\u793a\uff1a"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"ESlint Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-react-hooks: exhaustive-deps")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"src/pages/root_Lend/lend/index.tsx\nLine 83:7: React Hook React.useEffect has a missing dependency: 'getMainData'. Either include it or remove the dependency array react-hooks/exhaustive-deps\n")),(0,i.kt)("h4",{parentName:"div",id:"\u63d0\u793a\u8a9e-\u8aaa\u660e"},"\u63d0\u793a\u8a9e \u8aaa\u660e\uff1a"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ESlint")," \u8868\u793a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()")," \u5167\u63d0\u5230\u7684\u8b8a\u6578\u90fd\u61c9\u8a72\u653e\u5165dependency\u5167\uff0c\u4ee5\u78ba\u4fdd\u8b8a\u6578\u6539\u8b8a\u6642\uff0c\u6703\u89f8\u767c ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()")," \u57f7\u884c\u3002",(0,i.kt)("br",null),"\n\u9019\u500b\u6aa2\u67e5\u6a5f\u5236\u5f88\u5408\u7406\uff0c\u4f46\u4ee5\u4e0a\u9762\u7684\u7a0b\u5f0f\u78bc\u4f86\u8aaa\uff0c\u5c07 function ",(0,i.kt)("inlineCode",{parentName:"p"},"getMainData")," \u653e\u5165dependency\u5167\uff0c\u53ea\u6703\u9677\u5165\u7121\u7aae\u8ff4\u5708\u3002"))),(0,i.kt)("h4",{id:"\u89e3\u6c7a\u65b9\u6cd5-\u5c07-call-api-\u7684-funciton-\u653e\u5165-usecallbackfn-"},"\u89e3\u6c7a\u65b9\u6cd5: \u5c07 call API \u7684 funciton \u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"h4"},"useCallback(fn, [...])")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'    // highlight-start\n    const getMainData = useCallback((pageId:string) =>{\n    // highlight-end\n        if(pageId){\n            setMainLoading(true)\n            ApiGetLendReceiptById(pageId,token || "",dispatch)\n            .then(res =>{\n                setMainData(res.data)\n            }).catch(err =>{\n                console.log("ApiGetLendReceiptById : ",err)\n                Alertnotification({\n                    type :"error", \n                    title: "\u8cc7\u8a0a\u53d6\u5f97\u5931\u6557",\n                    description: err.message ,\n                })\n            }).finally(()=>{\n                setMainLoading(false)\n            })\n        }\n    // highlight-start\n    }, [token, dispatch])\n    // highlight-end\n\n\n    React.useEffect(()=>{\n        getMainData(pageId)\n    // highlight-start\n    },[pageId, forceUpdate, getMainData])\n    // highlight-end\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"1-usecallbackfn-deps-\u56de\u50b3\u8a18\u4f4f\u7684-fn-same-address"},"1. ",(0,i.kt)("inlineCode",{parentName:"h4"},"useCallback(fn, [deps])")," \u56de\u50b3\u8a18\u4f4f\u7684 ",(0,i.kt)("inlineCode",{parentName:"h4"},"fn")," (same address)"),(0,i.kt)("h4",{parentName:"div",id:"2-\u900f\u904e-usecallbackfn-deps-dependency-\u4f86\u89f8\u767c\u66f4\u65b0-fn-renew-address"},"2. \u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"h4"},"useCallback(fn, [deps])")," dependency \u4f86\u89f8\u767c\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"h4"},"fn")," (renew address)"),(0,i.kt)("h4",{parentName:"div",id:"3-\u5c07-getmaindata-\u653e\u5165-useeffect-dependency-\u5167\u53ea\u6709\u5728-usecallback-\u91cd\u65b0\u66f4\u65b0-fn-instance\u624d\u6703\u89f8\u767c-useeffect"},"3. \u5c07 getMainData \u653e\u5165 ",(0,i.kt)("inlineCode",{parentName:"h4"},"useEffect")," dependency \u5167\uff0c\u53ea\u6709\u5728 ",(0,i.kt)("inlineCode",{parentName:"h4"},"useCallback")," \u91cd\u65b0\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"h4"},"fn")," instance\uff0c\u624d\u6703\u89f8\u767c ",(0,i.kt)("inlineCode",{parentName:"h4"},"useEffect")))),(0,i.kt)("p",null,"\u9019\u6a23\u5c31\u7b26\u5408 \u6240\u6709\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u5167\u7684\u8b8a\u6578\u90fd\u8981\u5e36\u5165 dependency \u7684\u898f\u5247\u3002"),(0,i.kt)("p",null,"--\nuseCallback props child example?"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/ichef/%E4%BB%80%E9%BA%BC%E6%99%82%E5%80%99%E8%A9%B2%E4%BD%BF%E7%94%A8-usememo-%E8%B7%9F-usecallback-a3c1cd0eb520"},"\u4ec0\u9ebc\u6642\u5019\u8a72\u4f7f\u7528 useMemo \u8ddf useCallback"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://lucrelin.blogspot.com/2016/11/javascript-instance.html"},"JAVASCRIPT\u7269\u4ef6\u5c0e\u5411-- \u4ec0\u9ebc\u662f\u5be6\u9ad4(INSTANCE)?")))))}u.isMDXComponent=!0}}]);