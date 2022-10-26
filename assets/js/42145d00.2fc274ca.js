"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[2658],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2975:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:5},l="Hooks - useEffect",s={unversionedId:"react/react_useEffect",id:"react/react_useEffect",title:"Hooks - useEffect",description:"useEffect \u4f7f\u7528\u6642\u6a5f",source:"@site/docs/react/react_useEffect.md",sourceDirName:"react",slug:"/react/react_useEffect",permalink:"/myWebsite/docs/react/react_useEffect",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/react/react_useEffect.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hooks - useState",permalink:"/myWebsite/docs/react/react_useState"},next:{title:"Hooks - useMemo / useCallBack",permalink:"/myWebsite/docs/react/react_useMemoAnduseCallback"}},p=[{value:"useEffect \u4f7f\u7528\u6642\u6a5f",id:"useeffect-\u4f7f\u7528\u6642\u6a5f",children:[],level:3},{value:"useEffect syntax",id:"useeffect-syntax",children:[],level:3},{value:"(\u4e00) React render \u9806\u5e8f",id:"\u4e00-react-render-\u9806\u5e8f",children:[],level:3},{value:"(\u4e8c) \u5229\u7528render\u9806\u5e8f\u4f86\u5224\u65b7 : \u6709\u7121 <code>[dependency]</code>\uff0c\u7a0b\u5f0f\u57f7\u884c\u7684\u60c5\u6cc1\u3002",id:"\u4e8c-\u5229\u7528render\u9806\u5e8f\u4f86\u5224\u65b7--\u6709\u7121-dependency\u7a0b\u5f0f\u57f7\u884c\u7684\u60c5\u6cc1",children:[],level:3},{value:"(\u4e09) dependency\u6bd4\u5c0d\u6a19\u6e96\uff1aObject.is",id:"\u4e09-dependency\u6bd4\u5c0d\u6a19\u6e96objectis",children:[],level:3},{value:"(\u88dc\u5145) <code>Object.is</code> \u8207 <code>===</code> \u5dee\u7570",id:"\u88dc\u5145-objectis-\u8207--\u5dee\u7570",children:[],level:3},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",children:[],level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hooks---useeffect"},"Hooks - useEffect"),(0,i.kt)("h3",{id:"useeffect-\u4f7f\u7528\u6642\u6a5f"},"useEffect \u4f7f\u7528\u6642\u6a5f"),(0,i.kt)("p",null,"\u9019\u88e1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Effect"),"\u6307\u7684\u662f\u300cside-effect \u526f\u4f5c\u7528\u300d\u3002\n\u4e5f\u5c31\u662f\u8aaa ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),"\u662f\u7528\u4f86\u8655\u7406React ",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"\u8077\u8cac\u4ee5\u5916\u7684",(0,i.kt)("strong",{parentName:"p"},"\u984d\u5916\u52d5\u4f5c"),"\u3002\n\u200b"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"React component\u7684\u8077\u8cac\u662f\u4ec0\u9ebc\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"\u5728\u4f7f\u7528\u8005\u4ecb\u9762\u4e0a\u76f4\u63a5\u64cd\u4f5c\u8cc7\u6599\u72c0\u614b\u53ca\u56de\u50b3\u7bc0\u9ede"},(0,i.kt)("strong",{parentName:"h4"},"\u5728\u4f7f\u7528\u8005\u4ecb\u9762\u4e0a\u76f4\u63a5\u64cd\u4f5c\u8cc7\u6599\u72c0\u614b\u53ca\u56de\u50b3\u7bc0\u9ede"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5c31\u662f\u4e4b\u524d\u8aaa\u7684\uff1a\u5be6\u73fe \u76f8\u95dcUI\u8207\u908f\u8f2f \u7fa4\u7d44\u5316(",(0,i.kt)("inlineCode",{parentName:"p"},"component"),")\uff0c\u4e26\u56de\u50b3React element(",(0,i.kt)("inlineCode",{parentName:"p"},"JSX"),")\u3002\n(\u88dc\u5145\u5f8c\u9762\u52d5\u4f5c\uff1a\u7bc0\u9ede\u900f\u904e",(0,i.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()"),"\u653e\u5165html\u6a94\uff0c\u700f\u89bd\u5668\u89e3\u6790\u6210 DOM tree\uff0c\u7136\u5f8c\u6e32\u67d3\u6210\u7db2\u9801\u756b\u9762\u3002)"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u984d\u5916\u52d5\u4f5c\u6307\u7684\u662f\uff1f ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"\u984d\u5916\u52d5\u4f5c\u597d\u6bd4call-api\u62ff\u8cc7\u6599\u76f4\u63a5\u64cd\u4f5c\u539f\u59cbdom\u4e0d\u7d93\u904ereact-component\u767b\u5165-token\u7b49\u4e0d\u662fcomponent\u7684\u4e3b\u8981\u8077\u8cac\u4f46\u9700\u8981\u57f7\u884c\u7684\u52d5\u4f5c\u90fd\u53ef\u80fd\u4f7f\u7528\u5230-useeffect"},"\u984d\u5916\u52d5\u4f5c\u597d\u6bd4\uff1acall api\u62ff\u8cc7\u6599\uff0c\u76f4\u63a5\u64cd\u4f5c\u539f\u59cbDOM(\u4e0d\u7d93\u904eReact ",(0,i.kt)("inlineCode",{parentName:"h4"},"component"),")\uff0c\u767b\u5165 token...\u7b49\uff0c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"h4"},"component"),"\u7684\u4e3b\u8981\u8077\u8cac\uff0c\u4f46\u9700\u8981\u57f7\u884c\u7684\u52d5\u4f5c\uff0c\u90fd\u53ef\u80fd\u4f7f\u7528\u5230 ",(0,i.kt)("inlineCode",{parentName:"h4"},"useEffect"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"useeffect-syntax"},"useEffect syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(function,[state1, props2...])\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()"),"\u63a5\u6536\u5169\u500b\u53c3\u6578\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")," : \u57f7\u884c\u52d5\u4f5c\u7684\u51fd\u5f0f\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"useEffect()"),"\u6703\u5beb\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"component"),"\u88e1\u9762\uff0c\u6240\u4ee5\u51fd\u5f0f\u5167\u4e5f\u53ef\u4ee5\u64cd\u4f5c",(0,i.kt)("inlineCode",{parentName:"li"},"state")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[state1, props2...]")," : \u7528\u4f86\u6bd4\u5c0d",(0,i.kt)("inlineCode",{parentName:"li"},"state"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"props"),"\u72c0\u614b\uff0c\u5982\u679c\u72c0\u614b\u6709\u8b8a\uff0c\u57f7\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"function"),"\uff0c\u6bd4\u5c0d\u9805\u76ee\u5982\u679c\u6709\u591a\u7d44\uff0c\u53ea\u8981\u4e00\u500b\u6709\u8b8a\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"function"),"\u5c31\u6703\u57f7\u884c\u3002\n\u200b\n\u9019\u88e1\u8981\u63d0\u5230\u5169\u500b\u91cd\u8981\u6982\u5ff5\uff1a",(0,i.kt)("strong",{parentName:"li"},"React render \u9806\u5e8f"),"\u3001",(0,i.kt)("strong",{parentName:"li"},"dependency\u6bd4\u5c0d\u6a19\u6e96\uff1a ",(0,i.kt)("inlineCode",{parentName:"strong"},"===")),"\n\u200b")),(0,i.kt)("h3",{id:"\u4e00-react-render-\u9806\u5e8f"},"(\u4e00) React render \u9806\u5e8f"),(0,i.kt)("p",null,"\u6211\u5011\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," \u5206\u5225\u5beb\u5728\u4e09\u500b\u4f4d\u7f6e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u9032\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"component")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"useEffect()"),"\u5167"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"JSX"),"\u5167")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210927/20131689bAz3b7zwbn.png",alt:"console.log() \u5206\u5225\u5beb\u5728\u4e09\u500b\u4f4d\u7f6e"}),"\n\u986f\u793a\u9806\u5e8f\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210927/20131689tRDc1euFpA.png",alt:"\u986f\u793a\u9806\u5e8f"}),"\n\u200b"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u770b\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"component"),"\u6703\u5148\u5c62\u884c\u5b83\u7684\u4e3b\u8981\u8077\u8cac\uff0c\u624d\u9032\u884c\u984d\u5916\u884c\u52d5\uff1a",(0,i.kt)("strong",{parentName:"p"},"useEffect\u662f\u5728component\u6e32\u67d3\u5b8c\u5f8c\u624d\u57f7\u884c"),"\u3002"))),(0,i.kt)("h3",{id:"\u4e8c-\u5229\u7528render\u9806\u5e8f\u4f86\u5224\u65b7--\u6709\u7121-dependency\u7a0b\u5f0f\u57f7\u884c\u7684\u60c5\u6cc1"},"(\u4e8c) \u5229\u7528render\u9806\u5e8f\u4f86\u5224\u65b7 : \u6709\u7121 ",(0,i.kt)("inlineCode",{parentName:"h3"},"[dependency]"),"\uff0c\u7a0b\u5f0f\u57f7\u884c\u7684\u60c5\u6cc1\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20210927/20131689gHPX44snMT.png",alt:"React render \u9806\u5e8f"}),"\u200b"),(0,i.kt)("h3",{id:"\u4e09-dependency\u6bd4\u5c0d\u6a19\u6e96objectis"},"(\u4e09) dependency\u6bd4\u5c0d\u6a19\u6e96\uff1a",(0,i.kt)("a",{parentName:"h3",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"},"Object.is")),(0,i.kt)("p",null,"OK\uff0c\u90a3\u5982\u679cdependency\u8981\u6bd4\u5c0d\u7269\u4ef6\u578b\u5225\u5462\uff1f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'useEffect(() => console.log("useEffect !"),[{id: 1, name: "Joanna"}])\n')),(0,i.kt)("p",null,"\u9019\u6703\u51fa\u73fe\u4e00\u500b\u72c0\u6cc1\uff1a\u5982\u679c\u7269\u4ef6\u5167\u7684\u5c6c\u6027\u6539\u503c\uff0c\u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()"),"\u6bd4\u5c0d\u7269\u4ef6\u7684\u4f4d\u5740\u4e0d\u8b8a\uff0c\u5c0e\u81f4\u4e0d\u6703\u57f7\u884c\u52d5\u4f5c\u3002\n\u5982\u679c\u8981\u89e3\u6c7a\u9019\u6a23\u7684\u554f\u984c\uff0c\u6709\u5e7e\u500b\u89e3\u6c7a\u65b9\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dependency\u5beb\u5230 \u7269\u4ef6.\u5c6c\u6027 (\u4f46\u5c6c\u6027\u503c\u8981\u662f\u57fa\u790e\u578b\u5225\u624d\u6709\u6548)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const [obj, setObj] = useState({id: 1, name: "Joanna"});\nuseEffect(() => console.log("useEffect !"),[obj.name])\n')),(0,i.kt)("p",null,"\u200b\n2. \u65e2\u7136",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect()"),"\u6bd4\u5c0d\u7269\u4ef6\u7684\u4f4d\u5740\uff0c\u90a3\u6211\u6539\u4f4d\u5740\u53ef\u4ee5\u5427\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const [obj, setObj] = useState({id: 1, name: "Joanna"});\nuseEffect(() => console.log("useEffect !"),[obj])\n\u200b\n// \u6539\u503c\uff1a\nsetObj({...obj, name: "David"})\n')),(0,i.kt)("h3",{id:"\u88dc\u5145-objectis-\u8207--\u5dee\u7570"},"(\u88dc\u5145) ",(0,i.kt)("inlineCode",{parentName:"h3"},"Object.is")," \u8207 ",(0,i.kt)("inlineCode",{parentName:"h3"},"===")," \u5dee\u7570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js\xa0"},"  0 === 0;          \xa0 // true\n  Object.is(0, 0)   \xa0 // true\n\n  +0 === -0;        \xa0 // true\n  Object.is(+0, -0) \xa0 // false\n\n  NaN === NaN;        // false\n  Object.is(NaN, NaN) // true\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#useeffect"},"React\u5b98\u7db2 - useEffect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/ms_yogii/useeffect-dependency-array-and-object-comparison-45el"},"UseEffect dependency array and object comparison!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update"},"React uses the Object.is comparison algorithm."))))}m.isMDXComponent=!0}}]);