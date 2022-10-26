"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[3452],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=r.createContext({}),l=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(A.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,A=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,p=g["".concat(A,".").concat(d)]||g[d]||s[d]||a;return n?r.createElement(p,i(i({ref:t},m),{},{components:n})):r.createElement(p,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var A in t)hasOwnProperty.call(t,A)&&(c[A]=t[A]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5279:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return A},metadata:function(){return l},toc:function(){return m},default:function(){return g}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:9,id:"record_moment_calc_item",title:"How to use moment.js to calc. time?",tags:["Javascript","moment.js"]},A=void 0,l={unversionedId:"record/record_moment_calc_item",id:"record/record_moment_calc_item",title:"How to use moment.js to calc. time?",description:"\u7d00\u9304\u4e00\u4e0b \u7528 moment.js \u8a08\u7b97\u6642\u9593\u5dee\u7570\uff0c\u9084\u6709 Javascript \u6578\u5b57\u9032\u4f4d\u65b9\u6cd5\u3002",source:"@site/docs/record/record_moment_calc_item.md",sourceDirName:"record",slug:"/record/record_moment_calc_item",permalink:"/myWebsite/docs/record/record_moment_calc_item",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/record/record_moment_calc_item.md",tags:[{label:"Javascript",permalink:"/myWebsite/docs/tags/javascript"},{label:"moment.js",permalink:"/myWebsite/docs/tags/moment-js"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"record_moment_calc_item",title:"How to use moment.js to calc. time?",tags:["Javascript","moment.js"]},sidebar:"tutorialSidebar",previous:{title:"sort by multiple conditions w/ flexible way",permalink:"/myWebsite/docs/record/record_sort_mutiple_conditions"},next:{title:"How to parse url?",permalink:"/myWebsite/docs/record/record_parse_url"}},m=[{value:"\u7d00\u9304\u4e00\u4e0b \u7528 <code>moment.js</code> \u8a08\u7b97\u6642\u9593\u5dee\u7570\uff0c\u9084\u6709 <code>Javascript</code> \u6578\u5b57\u9032\u4f4d\u65b9\u6cd5\u3002",id:"\u7d00\u9304\u4e00\u4e0b-\u7528-momentjs-\u8a08\u7b97\u6642\u9593\u5dee\u7570\u9084\u6709-javascript-\u6578\u5b57\u9032\u4f4d\u65b9\u6cd5",children:[],level:4},{value:"\u4f7f\u7528 Library : moment.js",id:"\u4f7f\u7528-library--momentjs",children:[],level:4},{value:"\u8ddd\u96e2\u73fe\u5728\u591a\u4e45\u6642\u9593 (\u8a08\u7b97\u5230\u65e5)",id:"\u8ddd\u96e2\u73fe\u5728\u591a\u4e45\u6642\u9593-\u8a08\u7b97\u5230\u65e5",children:[],level:2},{value:"\u8ddd\u96e2\u73fe\u5728\u7684\u6642\u9593\u5dee (\u8a08\u7b97\u5230\u65e5)",id:"\u8ddd\u96e2\u73fe\u5728\u7684\u6642\u9593\u5dee-\u8a08\u7b97\u5230\u65e5",children:[],level:2},{value:"\u5be6\u52d9\u8981\u6c42\uff1a\u986f\u793a\u8ddd\u4eca OO\u5e74 OO\u5929",id:"\u5be6\u52d9\u8981\u6c42\u986f\u793a\u8ddd\u4eca-oo\u5e74-oo\u5929",children:[{value:"(\u4e00) Antd UI : \u9078\u64c7\u6642\u9593\u7bc4\u570d",id:"\u4e00-antd-ui--\u9078\u64c7\u6642\u9593\u7bc4\u570d",children:[],level:3},{value:" \b\u270e DEMO",id:"--demo",children:[],level:3},{value:"(\u4e8c) \u8cc7\u6599\u5eab\u7d66\u4e00\u6642\u9593\uff0c\u8a08\u7b97\u8ddd\u96e2\u4eca\u5929\u591a\u5c11\u5929",id:"\u4e8c-\u8cc7\u6599\u5eab\u7d66\u4e00\u6642\u9593\u8a08\u7b97\u8ddd\u96e2\u4eca\u5929\u591a\u5c11\u5929",children:[],level:3},{value:" \b\u270e DEMO",id:"--demo-1",children:[],level:3}],level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",children:[],level:2}],s={toc:m};function g(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u7d00\u9304\u4e00\u4e0b-\u7528-momentjs-\u8a08\u7b97\u6642\u9593\u5dee\u7570\u9084\u6709-javascript-\u6578\u5b57\u9032\u4f4d\u65b9\u6cd5"},"\u7d00\u9304\u4e00\u4e0b \u7528 ",(0,a.kt)("inlineCode",{parentName:"h4"},"moment.js")," \u8a08\u7b97\u6642\u9593\u5dee\u7570\uff0c\u9084\u6709 ",(0,a.kt)("inlineCode",{parentName:"h4"},"Javascript")," \u6578\u5b57\u9032\u4f4d\u65b9\u6cd5\u3002"),(0,a.kt)("h4",{id:"\u4f7f\u7528-library--momentjs"},"\u4f7f\u7528 Library : ",(0,a.kt)("a",{parentName:"h4",href:"https://momentjs.com/"},"moment.js")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8ddd\u96e2\u73fe\u5728\u591a\u4e45\u6642\u9593-\u8a08\u7b97\u5230\u65e5"},"\u8ddd\u96e2\u73fe\u5728\u591a\u4e45\u6642\u9593 (\u8a08\u7b97\u5230\u65e5)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'    const targetTime = moment("2019-03-28");\n    console.log("\u8ddd\u4eca\uff1a", moment(targetTime, "YYYY-MM-DD").fromNow())\n')),(0,a.kt)("p",null,"\u5370\u51fa\u7d50\u679c(\u9019\u88e1\u53ea\u986f\u793a\u6574\u6578)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8ddd\u4eca\uff1a 3 years ago \n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8ddd\u96e2\u73fe\u5728\u7684\u6642\u9593\u5dee-\u8a08\u7b97\u5230\u65e5"},"\u8ddd\u96e2\u73fe\u5728\u7684\u6642\u9593\u5dee (\u8a08\u7b97\u5230\u65e5)"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",null,"moment \u578b\u5225")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  moment().diff(Moment|String|Number|Date|Array);\n  moment().diff(Moment|String|Number|Date|Array, String);\n  moment().diff(Moment|String|Number|Date|Array, String, Boolean);\n\n  // \u6bd4\u8f03\u5c0d\u8c61A\u7684\u6642\u9593\u5167\u5bb9.diff(\u6bd4\u8f03\u5c0d\u8c61\uff22\u7684\u6642\u9593\u5167\u5bb9, \u57fa\u790e\u6642\u9593\u55ae\u4f4d, \u662f\u5426\u7cbe\u78ba\u81f3\u5c0f\u6578\u9ede): number;\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'    const targetTime = moment("2019-03-28");\n    const today = moment(moment().format("YYYY-MM-DD"));\n    const diffFromNow = today.diff(targetTime);\n\n    console.log("The diff. by milliseconds is: ", today.diff(targetTime));\n    console.log("The diff. by years is: ", today.diff(targetTime, "years"));\n    console.log("The diff. by years with float is: ", today.diff(targetTime, "years", true));\n')),(0,a.kt)("p",null,"\u5370\u51fa\u7d50\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    The diff. by milliseconds is:  98409600000\n    The diff. by years is:  3\n    The diff. by years with float is:  3.1166666666666667\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5be6\u52d9\u8981\u6c42\u986f\u793a\u8ddd\u4eca-oo\u5e74-oo\u5929"},"\u5be6\u52d9\u8981\u6c42\uff1a\u986f\u793a\u8ddd\u4eca OO\u5e74 OO\u5929"),(0,a.kt)("h3",{id:"\u4e00-antd-ui--\u9078\u64c7\u6642\u9593\u7bc4\u570d"},"(\u4e00) Antd UI : \u9078\u64c7\u6642\u9593\u7bc4\u570d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UI : \u9078\u64c7\u6642\u9593\u7bc4\u570d",src:n(9654).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'  const onChange = (date: moment.Moment[] | null, dateString: string[]) => {\n    console.log("dateString: ", dateString); // ex: dateString:  (2) ["2021-04-25", "2022-06-29"]\n\n    const before = moment(dateString[0]);\n    const after = moment(dateString[1]);\n    const totalDiffDay = after.diff(before, "days");\n    const diffYears = totalDiffDay > 365 ? Math.floor(totalDiffDay / 365) : 0;\n\n    setDiffDate({\n      diffYears: diffYears,\n      diffDays: totalDiffDay - diffYears * 365\n    });\n  };\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'  <RangePicker\n    ranges={{\n        Today: [moment(), moment()],\n        "This Month": [moment().startOf("month"), moment().endOf("month")]\n    }}\n    onChange={onChange}\n  />\n')),(0,a.kt)("p",null,"\u986f\u793a\u6548\u679c\uff1a\n",(0,a.kt)("img",{alt:"\u986f\u793a\u6548\u679c\uff1a",src:n(103).Z})),(0,a.kt)("h3",{id:"--demo"},(0,a.kt)("a",{parentName:"h3",href:"https://codesandbox.io/s/practice-moment-js-diff-0ffnfr?file=/src/App.tsx"}," \b\u270e DEMO")),(0,a.kt)("h3",{id:"\u4e8c-\u8cc7\u6599\u5eab\u7d66\u4e00\u6642\u9593\u8a08\u7b97\u8ddd\u96e2\u4eca\u5929\u591a\u5c11\u5929"},"(\u4e8c) \u8cc7\u6599\u5eab\u7d66\u4e00\u6642\u9593\uff0c\u8a08\u7b97\u8ddd\u96e2\u4eca\u5929\u591a\u5c11\u5929"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'    const targetDate = moment("2019-03-28");\n    const today = moment(moment().format("YYYY-MM-DD")); // \u8a08\u7b97\u5230\u65e5\n    \n    const diffFromNowByMs = today.diff(targetDate); // \u55ae\u4f4d\uff1a\u6beb\u79d2\uff0c\u7d00\u9304\u5728 data\u88e1\uff0c\u986f\u793a\u4f9d\u9700\u6c42\u518d\u8f49\u63db\u55ae\u4f4d\u3002\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"    // \u986f\u793a\uff1aOO\u5e74\u53c8OO\u6708\n    // \u63db\u7b97\u6beb\u79d2 >> \u65e5\uff1a\n    const transferMsToDays = row.diffFromNowByMs / 1000 / 60 / 60 / 24;\n    const diffYears = (transferMsToDays > 365) ? Math.floor(transferMsToDays/365) : 0;\n    const diffDays = transferMsToDays - diffYears * 365; // \u6263\u9664\u5df2\u7b97\u5e74\u7684\u90e8\u5206\n")),(0,a.kt)("h3",{id:"--demo-1"},(0,a.kt)("a",{parentName:"h3",href:"https://codesandbox.io/s/practice-moment-js-diff-in-database-5p2h07?file=/src/App.tsx"}," \b\u270e DEMO")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://yuan-0708.medium.com/moment-js-%E8%A8%88%E7%AE%97%E5%85%A9%E5%80%8B%E6%97%A5%E6%9C%9F%E7%9A%84%E5%B9%B4%E6%9C%88%E6%97%A5%E5%B7%AE%E7%95%B0-ac58c1245ecb"},"Moment.js \u8a08\u7b97\u5169\u500b\u65e5\u671f\u7684\u5e74\u6708\u65e5\u5dee\u7570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://momentjs.cn/docs/displaying/difference.html"},"diff()"))))}g.isMDXComponent=!0},9654:function(e,t,n){t.Z=n.p+"assets/images/record_moment_calc_time_UI-bfc292cfdd8608678302ce061d90bbad.png"},103:function(e,t){t.Z="data:image/png;base64,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"}}]);