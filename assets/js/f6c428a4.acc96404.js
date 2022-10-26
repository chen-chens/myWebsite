"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[7671],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5253:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:2,id:"problem_record2",title:"async-await vs promise",tags:["async-await","promise"]},c=void 0,l={unversionedId:"record/problem_record2",id:"record/problem_record2",title:"async-await vs promise",description:"\u60c5\u5883\u8aaa\u660e",source:"@site/docs/record/record_problem2.md",sourceDirName:"record",slug:"/record/problem_record2",permalink:"/chen-chens/myWebsite/docs/record/problem_record2",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/record/record_problem2.md",tags:[{label:"async-await",permalink:"/chen-chens/myWebsite/docs/tags/async-await"},{label:"promise",permalink:"/chen-chens/myWebsite/docs/tags/promise"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"problem_record2",title:"async-await vs promise",tags:["async-await","promise"]},sidebar:"tutorialSidebar",previous:{title:"Performance Issue when fetching large Data from server",permalink:"/chen-chens/myWebsite/docs/record/problem_record1"},next:{title:"GraphQL client query record",permalink:"/chen-chens/myWebsite/docs/record/record_graphql"}},p=[{value:"\u60c5\u5883\u8aaa\u660e",id:"\u60c5\u5883\u8aaa\u660e",children:[{value:"\u5982\u679c\u662f\u4f7f\u7528 Promise \u5beb\u6cd5\uff1a",id:"\u5982\u679c\u662f\u4f7f\u7528-promise-\u5beb\u6cd5",children:[],level:3},{value:"\u5982\u679c\u662f\u4f7f\u7528 <code>async-await</code> \u5beb\u6cd5\uff1a",id:"\u5982\u679c\u662f\u4f7f\u7528-async-await-\u5beb\u6cd5",children:[],level:3}],level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",children:[],level:2}],m={toc:p};function u(e){var n=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u60c5\u5883\u8aaa\u660e"},"\u60c5\u5883\u8aaa\u660e"),(0,o.kt)("p",null,"\u7248\u9762\u8cc7\u6599\u4f86\u6e901\u30012\u30013\uff08\u5982\u4e0b\u5716\uff09\uff0c\u986f\u793a\u8cc7\u6599\u9700\u8981call \u591a\u7b46 API\u624d\u80fd\u6eff\u8db3\u6240\u6709\u986f\u793a\u5167\u5bb9\uff0c\u5171\u7528\u8cc7\u6599\u4f86\u6e90\u70ba API-A\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"record_problem2_scenario",src:t(6511).Z}),"\u793a\u610f\u5716\u53c3\u8003\uff0c\u5167\u5bb9\u8207\u6a23\u5f0f\u7686\u70ba\u5047\u8cc7\u6599"),(0,o.kt)("p",null,"\u64cd\u4f5c\u6b65\u9a5f\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5148 \bcall API-A\uff0c\u62ff\u5230\u95dc\u806f\u7684 customerID\u3001productID\u3001memberID"),(0,o.kt)("li",{parentName:"ol"},"call API-B by customerID"),(0,o.kt)("li",{parentName:"ol"},"call API-C\u3001API-E by productID"),(0,o.kt)("li",{parentName:"ol"},"call API-D by memberID"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 React \u5b58\u53d6\u5c0d\u61c9\u7684\u8cc7\u6599 setState")),(0,o.kt)("p",null,"\u4f7f\u7528 Typescript \u505a\u8cc7\u6599\u578b\u5225\u5b9a\u7fa9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  interface MainFormDataType{\n    dataFromApiA: any[];\n    dataFromApiB: any[];\n    dataFromApiC: any[];\n  }\n\n  interface ProcessDataType{\n    dataFromApiA: any[];\n    dataFromApiD: any[];\n  }\n\n  interface MaterialRecordDataType{\n    dataFromApiA: any[];\n    dataFromApiE: any[];\n  }\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  \u4f7f\u7528 Typescript \u9084\u662f\u8981\u76e1\u91cf\u907f\u514d\u4f7f\u7528 \u578b\u5225 ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"\uff0c\u7562\u7adf\u4f7f\u7528 Typescript \u76ee\u7684\u5c31\u662f\u8981\u5efa\u7acb\u660e\u78ba\u7684\u578b\u5225\uff0c\u4ee5\u5229\u5f8c\u7e8c\u7dad\u8b77\u3002",(0,o.kt)("br",null),"\n\u9019\u88e1\u50c5\u793a\u610f\uff01"))),(0,o.kt)("p",null,"\u4f7f\u7528 React \u5b58\u53d6\u8cc7\u6599\uff1a\u5206\u5225\u70ba mainFormData\u3001processData\u3001materialRecordData:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  const [ mainFormData, setMainFormData ] = useState<MainFormDataType>([]);\n  const [ processData, setProcessData ] = useState<ProcessDataType>([]);\n  const [ materialRecordData, setMaterialRecordData ] = useState<MaterialRecordDataType>([]);\n")),(0,o.kt)("h3",{id:"\u5982\u679c\u662f\u4f7f\u7528-promise-\u5beb\u6cd5"},"\u5982\u679c\u662f\u4f7f\u7528 Promise \u5beb\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  API-A()\n  .then(res => {\n    /* Do something... */\n    return res\n\n  }).then(res => {\n      API-B(res.customerID)\n      .then(resByApiB => {\n        /* Do something... */\n      })\n\n    return res\n  }).then(res => {\n      API-C(res.productID)\n      .then(resByApiC => {\n        /* Do something... */\n      })\n    \n    return res\n  }).then(res =>{\n      API-D(res.memberID)\n      .then(resByApiD => {\n        /* Do something... */\n      })\n    \n    return res\n  }).then(res =>{\n      API-E(res.productID)\n      .then(resByApiE => {\n        /* Do something... */\n      })\n  })\n")),(0,o.kt)("p",null,"\u9019\u6a23\u5beb\u7684\u7f3a\u9ede\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70ba\u4e86\u62ff\u5230API-A response\uff0c\u5beb\u6210\u5de2\u72c0\u5beb\u6cd5\uff0c\u770b\u8d77\u4f86\u5f88\u96e3\u95b1\u8b80\u3002"),(0,o.kt)("li",{parentName:"ol"},"mainFormData\u3001processData\u3001materialRecordData \u90fd\u9700\u8981 call \u591a\u500b api \u624d\u80fd\u88dc\u9f4a\u986f\u793a\u9700\u8981\u7684\u8cc7\u6599\uff0c\u4f46\u76ee\u524d\u6574\u4e32\u7684\u5beb\u6cd5\u8981\u62ff\u5230\u4e0a\u5c64\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"res")," \u8cc7\u6599\uff0c\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"return res"),"\uff0c\u53d6\u503c\u8b8a\u5f97\u5f88\u9ebb\u7169\u3002")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u6539\u6210 \u5b58\u53d6API-A response\uff0c\u628a\u5176\u4ed6API \u5206\u958b\u5beb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const [ resByApiA, setResByApiA ] = useState();\n\n  API-A()\n  .then(res => {\n    setResByApiA(res);\n  })\n\n  useEffect(() => {    \n    if(resByApiA.customerID){\n        API-B(resByApiA.customerID)\n        .then(resByApiB => {\n          /* Do something... */\n        })\n    }\n\n    if(resByApiA.productID){\n        API-C(resByApiA.productID)\n        .then(resByApiC => {\n          /* Do something... */\n        })\n\n        API-E(resByApiA.productID)\n        .then(resByApiE => {\n          /* Do something... */\n        })\n    }\n\n    if(resByApiA.memberID){\n        API-D(resByApiA.memberID)\n        .then(resByApiD => {\n          /* Do something... */\n        })\n    }\n  }, [resByApiA])\n\n\n")),(0,o.kt)("p",null,"\u9019\u6a23\u5beb\u7684\u7f3a\u9ede\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"call API-A \u5f8c setState\uff0c\u4f46 setState \u4e0d\u662f\u99ac\u4e0a\u6539\u503c\uff0c\u6211\u7121\u6cd5\u78ba\u4fddstate\u80fd\u5728\u6211\u9810\u671f\u7684\u6642\u9593\u5167\u57f7\u884c\uff0c\u9019\u6a23\u5c31\u6c92\u8fa6\u6cd5\u78ba\u4fdd\u8cc7\u6599\u5373\u6642\u986f\u793a\u3002\uff08\u9019\u662f React state\u7684\u7279\u6027\uff0c\u8207 promise\u672c\u8eab\u7121\u95dc\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u500bAPI \u5206\u958b\u5beb\uff0c\u4e0d\u77e5\u9053\u600e\u9ebc\u7d71\u4e00mainFormData\u3001processData\u3001materialRecordData \u9700\u8981\u7684\u8cc7\u6599\uff1f")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5982\u679c\u662f\u4f7f\u7528-async-await-\u5beb\u6cd5"},"\u5982\u679c\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"async-await")," \u5beb\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const gerData = async () => {\n    try{\n      const resByApiA = await API-A(); // \u5fc5\u9808\u7b49\u5f85 API-A \u6210\u529f\u56de\u50b3\uff0c\u624d\u6703\u9032\u884c\u4e0b\u4e00\u884c\n      const resByApiB = await API-B(resByApiA.customerID);\n      const resByApiC = await API-C(resByApiA.productID);\n      const resByApiD = await API-D(resByApiA.memberID);\n      const resByApiE = await API-E(resByApiA.productID);\n\n      setMainFormData([{\n        dataFromApiA: resByApiA,\n        dataFromApiB: resByApiB,\n        dataFromApiC: resByApiC\n      }]);\n\n      /* ... */\n\n    }catch(err){\n      console.log(err)\n    }\n  }\n")),(0,o.kt)("p",null,"\u5728\u9019\u88e1\uff0c\u53ef\u4ee5\u5f88\u660e\u986f\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"async-await")," \u7684\u512a\u52e2\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"code \u5f88\u5bb9\u6613\u95b1\u8b80\uff0c\u5f8c\u7e8c\u8981\u7dad\u8b77\u4e5f\u5bb9\u6613"),(0,o.kt)("li",{parentName:"ol"},"\u56e0\u70ba ",(0,o.kt)("inlineCode",{parentName:"li"},"await")," \u7684\u7279\u6027\uff0c\u6211\u4e0d\u7528\u64d4\u5fc3\u6c92\u62ff\u5230 API-A response\uff0c\u5c0e\u81f4\u5f8c\u9762 API \u51fa\u554f\u984c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5408\u4f75\u591a\u500b API response data\uff0c\u6539\u6210\u7248\u9762\u9700\u8981\u7684\u8cc7\u6599\u898f\u683c\u4e5f\u8b8a\u5f97\u5f88\u5bb9\u6613\u3002")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/"},"A Comparison Of async/await Versus then/catch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/async-await"},"Async/await"))))}u.isMDXComponent=!0},6511:function(e,n,t){n.Z=t.p+"assets/images/record_problem2_scenario-109a34347094ce1d6ec9835c5b692f66.png"}}]);