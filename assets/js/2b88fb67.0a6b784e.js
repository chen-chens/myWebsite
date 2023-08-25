"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[5194],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3088:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:8,id:"record_sort_mutiple_conditions",title:"sort by multiple conditions w/ flexible way",tags:["Javascript","sort"]},s=void 0,d={unversionedId:"record/record_sort_mutiple_conditions",id:"record/record_sort_mutiple_conditions",title:"sort by multiple conditions w/ flexible way",description:"\u8cc7\u6599\u7d50\u69cb",source:"@site/docs/record/record_sort_mutiple_conditions.md",sourceDirName:"record",slug:"/record/record_sort_mutiple_conditions",permalink:"/myWebsite/docs/record/record_sort_mutiple_conditions",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/record/record_sort_mutiple_conditions.md",tags:[{label:"Javascript",permalink:"/myWebsite/docs/tags/javascript"},{label:"sort",permalink:"/myWebsite/docs/tags/sort"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"record_sort_mutiple_conditions",title:"sort by multiple conditions w/ flexible way",tags:["Javascript","sort"]},sidebar:"tutorialSidebar",previous:{title:"react-beautiful-dnd Record",permalink:"/myWebsite/docs/record/record_dragAndDrop"},next:{title:"How to use moment.js to calc. time?",permalink:"/myWebsite/docs/record/record_moment_calc_item"}},p=[{value:"\u8cc7\u6599\u7d50\u69cb",id:"\u8cc7\u6599\u7d50\u69cb",children:[],level:2},{value:"\u5efa\u7acbUI - \u7be9\u9078\u9078\u9805\uff1a\u4f7f\u7528 Drag & Drop",id:"\u5efa\u7acbui---\u7be9\u9078\u9078\u9805\u4f7f\u7528-drag--drop",children:[{value:"\u529f\u80fd\uff1a\u7be9\u9078\u6392\u5217\u5148\u5f8c\u9806\u5e8f\u3001\u9078\u64c7 ASC\u3001DESC",id:"\u529f\u80fd\u7be9\u9078\u6392\u5217\u5148\u5f8c\u9806\u5e8f\u9078\u64c7-ascdesc",children:[],level:4}],level:2},{value:"\u5be6\u52d9\u4e0a\u9047\u5230\u7684\u554f\u984c",id:"\u5be6\u52d9\u4e0a\u9047\u5230\u7684\u554f\u984c",children:[{value:"(\u4e00) \u540c\u540d\u4e14\u540c\u59d3\u7684\u4eba\u3002\u7be9\u9078\u7d50\u679c\uff0c\u5169\u4eba\u8cc7\u6599\u53ef\u80fd\u6703\u6df7\u5728\u4e00\u8d77\uff01",id:"\u4e00-\u540c\u540d\u4e14\u540c\u59d3\u7684\u4eba\u7be9\u9078\u7d50\u679c\u5169\u4eba\u8cc7\u6599\u53ef\u80fd\u6703\u6df7\u5728\u4e00\u8d77",children:[{value:"\uff0a\u89e3\u6c7a\u8fa6\u6cd5\uff1a \u5728\u5206\u985e\u59d3\u540d\u6642\uff0c\u9084\u8981\u52a0\u4e0a\u300c\u500b\u4ebaid\u300d\u505a\u8b58\u5225\u3002",id:"\u89e3\u6c7a\u8fa6\u6cd5-\u5728\u5206\u985e\u59d3\u540d\u6642\u9084\u8981\u52a0\u4e0a\u500b\u4ebaid\u505a\u8b58\u5225",children:[],level:4}],level:3},{value:"(\u4e8c) \u4f7f\u7528 <code>sort((a, b) =&gt; {...})</code> \u505a\u6392\u5e8f\u6642\uff0c\u8981\u4e00\u6b21\u6027\u5c07\u6240\u6709\u689d\u4ef6\u5168\u90e8\u505a\u5b8c",id:"\u4e8c-\u4f7f\u7528-sorta-b---\u505a\u6392\u5e8f\u6642\u8981\u4e00\u6b21\u6027\u5c07\u6240\u6709\u689d\u4ef6\u5168\u90e8\u505a\u5b8c",children:[],level:3}],level:2},{value:"\u76ee\u6a19\u986f\u793a 1",id:"\u76ee\u6a19\u986f\u793a-1",children:[{value:"How to do that?",id:"how-to-do-that",children:[],level:3},{value:"(\u4e00) \u5148\u78ba\u8a8d\u6211\u5011\u62ff\u5230\u7684\u7be9\u9078\u5167\u5bb9\uff1a",id:"\u4e00-\u5148\u78ba\u8a8d\u6211\u5011\u62ff\u5230\u7684\u7be9\u9078\u5167\u5bb9",children:[],level:3},{value:"(\u4e8c) \u529f\u80fd\u62c6\u958b\uff1a",id:"\u4e8c-\u529f\u80fd\u62c6\u958b",children:[],level:3},{value:"(\u4e09) \u6211\u5011\u6703\u9047\u5230\u5169\u500b\u554f\u984c\uff1a",id:"\u4e09-\u6211\u5011\u6703\u9047\u5230\u5169\u500b\u554f\u984c",children:[],level:3},{value:"\uff311\uff1aHow to sort by multiple conditions w/ flexible way ?",id:"\uff511how-to-sort-by-multiple-conditions-w-flexible-way-",children:[],level:3},{value:"\uff312\uff1a\u4f86\u89e3\u6c7a\u7b2c\u4e8c\u500b\u554f\u984c <br />\u6211\u5011\u4f7f\u7528 <code>sort()</code> \u9084\u9700\u8981\u4e00\u6b21\u6027\u628a\u6240\u6709\u7be9\u9078\u9805\u76ee\u6bd4\u8f03\u5b8c\uff0c\u624d\u80fd\u5f97\u5230\u6b63\u78ba\u7d50\u679c\u3002",id:"\uff512\u4f86\u89e3\u6c7a\u7b2c\u4e8c\u500b\u554f\u984c-\u6211\u5011\u4f7f\u7528-sort-\u9084\u9700\u8981\u4e00\u6b21\u6027\u628a\u6240\u6709\u7be9\u9078\u9805\u76ee\u6bd4\u8f03\u5b8c\u624d\u80fd\u5f97\u5230\u6b63\u78ba\u7d50\u679c",children:[],level:3}],level:2},{value:"DEMO",id:"demo",children:[{value:" \b\u270e DEMO",id:"--demo",children:[],level:4}],level:2},{value:"\u76ee\u6a19\u986f\u793a 2",id:"\u76ee\u6a19\u986f\u793a-2",children:[],level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",children:[],level:2}],c={toc:p};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8cc7\u6599\u7d50\u69cb"},"\u8cc7\u6599\u7d50\u69cb"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"DataType")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  export interface DataType {\n    id: number;\n    info: { id: string; firstName: string; lastName: string };\n    year: number;\n    subject: { title: string; score: string };\n  }\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'export const rowData: DataType = [\n  {\n    id: 1,\n    info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n    year: 2020,\n    subject: { title: "English", score: "97" }\n  },\n  {\n    id: 2,\n    info: { id: "A456", firstName: "David", lastName: "Tom" },\n    year: 2019,\n    subject: { title: "Math", score: "43" }\n  },\n  {\n    id: 3,\n    info: { id: "A456", firstName: "David", lastName: "Tom" },\n    year: 2019,\n    subject: { title: "History", score: "18" }\n  },\n  {\n    id: 4,\n    info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n    year: 2020,\n    subject: { title: "Math", score: "82" }\n  },\n  {\n    id: 5,\n    info: { id: "A000", firstName: "David", lastName: "Tom" },\n    year: 2021,\n    subject: { title: "English", score: "81" }\n  },\n  {\n    id: 6,\n    info: { id: "A888", firstName: "David", lastName: "Ye" },\n    year: 2020,\n    subject: { title: "English", score: "67" }\n  },\n  {\n    id: 7,\n    info: { id: "A999", firstName: "Eva", lastName: "Lee" },\n    year: 2020,\n    subject: { title: "Math", score: "70" }\n  }\n];\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5efa\u7acbui---\u7be9\u9078\u9078\u9805\u4f7f\u7528-drag--drop"},"\u5efa\u7acbUI - \u7be9\u9078\u9078\u9805\uff1a\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"h2",href:"/docs/record/record_dragAndDrop"},"Drag & Drop")),(0,i.kt)("h4",{id:"\u529f\u80fd\u7be9\u9078\u6392\u5217\u5148\u5f8c\u9806\u5e8f\u9078\u64c7-ascdesc"},"\u529f\u80fd\uff1a\u7be9\u9078\u6392\u5217\u5148\u5f8c\u9806\u5e8f\u3001\u9078\u64c7 ASC\u3001DESC"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u7be9\u9078\u9078\u9805",src:n(7459).Z})),(0,i.kt)("h2",{id:"\u5be6\u52d9\u4e0a\u9047\u5230\u7684\u554f\u984c"},"\u5be6\u52d9\u4e0a\u9047\u5230\u7684\u554f\u984c"),(0,i.kt)("h3",{id:"\u4e00-\u540c\u540d\u4e14\u540c\u59d3\u7684\u4eba\u7be9\u9078\u7d50\u679c\u5169\u4eba\u8cc7\u6599\u53ef\u80fd\u6703\u6df7\u5728\u4e00\u8d77"},"(\u4e00) \u540c\u540d\u4e14\u540c\u59d3\u7684\u4eba\u3002\u7be9\u9078\u7d50\u679c\uff0c\u5169\u4eba\u8cc7\u6599\u53ef\u80fd\u6703\u6df7\u5728\u4e00\u8d77\uff01"),(0,i.kt)("h4",{id:"\u89e3\u6c7a\u8fa6\u6cd5-\u5728\u5206\u985e\u59d3\u540d\u6642\u9084\u8981\u52a0\u4e0a\u500b\u4ebaid\u505a\u8b58\u5225"},"\uff0a\u89e3\u6c7a\u8fa6\u6cd5\uff1a \u5728\u5206\u985e\u59d3\u540d\u6642\uff0c\u9084\u8981\u52a0\u4e0a\u300c\u500b\u4ebaid\u300d\u505a\u8b58\u5225\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u9806\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info.firstName")),(0,i.kt)("td",{parentName:"tr",align:null},"--")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info.lastName")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"td"},"info.firstName"),"\u4e00\u6a23\uff0c\u7be9",(0,i.kt)("inlineCode",{parentName:"td"},"info.lastName"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info.id")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"td"},"info.firstName")," ",(0,i.kt)("inlineCode",{parentName:"td"},"info.lastName")," \u4e00\u6a23\uff0c\u7be9",(0,i.kt)("inlineCode",{parentName:"td"},"info.id"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"GraggableStructure")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'  export enum FilterConfig {\n    FILTER = "filter",\n    UNFILTER = "unfilter"\n  }\n  export enum SortConfig {\n    ASC = "ASC",\n    DESC = "DESC"\n  }\n  export interface SortDataType {\n    id: string;\n    name: string;\n    sort: string;\n  }\n\n  export interface GraggableStructure {\n    sortData: {\n      [key: string]: SortDataType;\n    };\n    groups: {\n      [key: string]: { id: string; title: string; filterSortIds: string[] };\n    };\n    groupsOrder: string[];\n  }\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"dragDropData")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'  // \u70ba\u4e86\u8fa8\u5225\u540c\u540d\u540c\u59d3\uff0c\u52a0\u5165\u500b\u4ebaid \u8b58\u5225\n  export const personNameOrder = ["info.firstName", "info.lastName", "info.id"];\n\n  /**\n   * \u7be9\u9078\u689d\u4ef6\uff1a\n   * \u59d3\u540d\n   * \u5e74\u5ea6\n   * \u5206\u6578\n   * \u79d1\u76ee\n   */\n\n  export const initDragDropData: GraggableStructure = {\n    sortData: {\n      personName: { id: "personName", name: "\u59d3\u540d", sort: SortConfig.ASC },\n      year: { id: "year", name: "\u5e74\u5ea6", sort: SortConfig.DESC },\n      "subject.score": {\n        id: "subject.score",\n        name: "\u5206\u6578",\n        sort: SortConfig.DESC\n      },\n      "subject.title": { id: "subject.title", name: "\u79d1\u76ee", sort: SortConfig.ASC }\n    },\n    groups: {\n      filter: {\n        id: FilterConfig.FILTER,\n        title: "\u52a0\u5165\u6392\u5e8f",\n        filterSortIds: []\n      },\n      unfilter: {\n        id: FilterConfig.UNFILTER,\n        title: "\u672a\u6392\u5e8f",\n        filterSortIds: ["personName", "year", "subject.score", "subject.title"]\n      }\n    },\n    groupsOrder: [FilterConfig.FILTER, FilterConfig.UNFILTER]\n  };\n'))),(0,i.kt)("h3",{id:"\u4e8c-\u4f7f\u7528-sorta-b---\u505a\u6392\u5e8f\u6642\u8981\u4e00\u6b21\u6027\u5c07\u6240\u6709\u689d\u4ef6\u5168\u90e8\u505a\u5b8c"},"(\u4e8c) \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h3"},"sort((a, b) => {...})")," \u505a\u6392\u5e8f\u6642\uff0c\u8981\u4e00\u6b21\u6027\u5c07\u6240\u6709\u689d\u4ef6\u5168\u90e8\u505a\u5b8c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5047\u8a2d\u76ee\u524d\u6392\u5e8f\u689d\u4ef6\uff1a"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u5e74\u5ea6\u7531\u4f4e\u5230\u9ad8"),(0,i.kt)("li",{parentName:"ol"},"id\u7531\u5c0f\u5230\u5927"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"\u6b63\u78ba\u5beb\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  data.sort((a, b) => {\n    return a.year - b.year || a.id - b.id\n  })\n  console.log(data)\n")),(0,i.kt)("p",null,"  \u56de\u50b3\u5167\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  (6) [{\u2026}, {\u2026}, {\u2026}, {\u2026}, {\u2026}, {\u2026}]\n  0: {id: 2, info: {\u2026}, year: 2019, subject: {\u2026}}\n  1: {id: 1, info: {\u2026}, year: 2020, subject: {\u2026}}\n  2: {id: 3, info: {\u2026}, year: 2020, subject: {\u2026}}\n  3: {id: 5, info: {\u2026}, year: 2020, subject: {\u2026}}\n  4: {id: 6, info: {\u2026}, year: 2020, subject: {\u2026}}\n  5: {id: 4, info: {\u2026}, year: 2021, subject: {\u2026}}\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"\u932f\u8aa4\u5beb\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  const fields = ["year", "id"];\n  for(const condition of fields){\n    data.sort((a, b) => a[condition] - b[condition]))\n  }\n  console.log(data)\n')),(0,i.kt)("p",null,"  \u56de\u50b3\u5167\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  (6) [{\u2026}, {\u2026}, {\u2026}, {\u2026}, {\u2026}, {\u2026}]\n  0: {id: 1, info: {\u2026}, year: 2020, subject: {\u2026}}\n  1: {id: 2, info: {\u2026}, year: 2019, subject: {\u2026}}\n  2: {id: 3, info: {\u2026}, year: 2020, subject: {\u2026}}\n  3: {id: 4, info: {\u2026}, year: 2021, subject: {\u2026}}\n  4: {id: 5, info: {\u2026}, year: 2020, subject: {\u2026}}\n  5: {id: 6, info: {\u2026}, year: 2020, subject: {\u2026}}\n")),(0,i.kt)("p",null,"  \u56e0\u70ba\u6bcf\u4e00\u6b21\u90fd\u662f\u91cd\u65b0\u6392\u5217\uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"year"),"\u6392\u5e8f\u8cc7\u6599\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\u6392\u5e8f\u8cc7\u6599\u8986\u84cb\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h4",{parentName:"div",id:"asc--\u7531\u5c0f\u5230\u5927"},"\uff0aASC:  \u7531\u5c0f\u5230\u5927"),(0,i.kt)("h4",{parentName:"div",id:"desc-\u7531\u5927\u5230\u5c0f"},"\uff0aDESC: \u7531\u5927\u5230\u5c0f"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u76ee\u6a19\u986f\u793a-1"},"\u76ee\u6a19\u986f\u793a 1"),(0,i.kt)("p",null,"\u4f9d\u5e8f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u59d3\u540d\u7531A\u5230Z"),(0,i.kt)("li",{parentName:"ol"},"\u5e74\u5ea6\u7531\u9ad8\u5230\u4f4e"),(0,i.kt)("li",{parentName:"ol"},"\u5206\u6578\u7531\u9ad8\u5230\u4f4e")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"\u9810\u671f\u8cc7\u6599\u986f\u793a\u7d50\u679c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  const data = [\n    {\n      id: 4,\n      info: { id: "A000", firstName: "David", lastName: "Tom" },\n      year: 2021,\n      subject: { title: "English", score: "81" }\n    },\n    {\n      id: 2,\n      info: { id: "A456", firstName: "David", lastName: "Tom" },\n      year: 2019,\n      subject: { title: "Math", score: "43" }\n    },\n    {\n      id: 3,\n      info: { id: "A456", firstName: "David", lastName: "Tom" },\n      year: 2019,\n      subject: { title: "History", score: "18" }\n    },\n    {\n      id: 5,\n      info: { id: "A888", firstName: "David", lastName: "Ye" },\n      year: 2020,\n      subject: { title: "English", score: "67" }\n    },\n    {\n      id: 6,\n      info: { id: "A999", firstName: "Eva", lastName: "Lee" },\n      year: 2020,\n      subject: { title: "Math", score: "70" }\n    },\n    {\n      id: 1,\n      info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n      year: 2020,\n      subject: { title: "English", score: "97" }\n    },\n    {\n      id: 3,\n      info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n      year: 2020,\n      subject: { title: "Math", score: "82" }\n    },\n  ];\n'))),(0,i.kt)("h3",{id:"how-to-do-that"},"How to do that?"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u9806\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u6392\u5e8f"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1. \u59d3\u540d\u7531A\u5230Z"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info.firstName")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"ASC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info.lastName")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"td"},"info.firstName"),"\u4e00\u6a23\uff0c\u7be9",(0,i.kt)("inlineCode",{parentName:"td"},"info.lastName")),(0,i.kt)("td",{parentName:"tr",align:null},"ASC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"info.id")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"td"},"info.firstName")," ",(0,i.kt)("inlineCode",{parentName:"td"},"info.lastName")," \u4e00\u6a23\uff0c\u7be9",(0,i.kt)("inlineCode",{parentName:"td"},"info.id")),(0,i.kt)("td",{parentName:"tr",align:null},"ASC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2. \u5e74\u5ea6\u7531\u9ad8\u5230\u4f4e"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"year")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"DESC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3. \u5206\u6578\u7531\u9ad8\u5230\u4f4e"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"subject.score")),(0,i.kt)("td",{parentName:"tr",align:null},"--"),(0,i.kt)("td",{parentName:"tr",align:null},"DESC")))),(0,i.kt)("h3",{id:"\u4e00-\u5148\u78ba\u8a8d\u6211\u5011\u62ff\u5230\u7684\u7be9\u9078\u5167\u5bb9"},"(\u4e00) \u5148\u78ba\u8a8d\u6211\u5011\u62ff\u5230\u7684\u7be9\u9078\u5167\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'  const handleClick = (currentDragDropData: GraggableStructure) => {\n    const copyDragDopData: GraggableStructure = JSON.parse(\n      JSON.stringify(currentDragDropData)\n    );\n    const targetFilterSortIds: string[] = copyDragDopData.groups["filter"].filterSortIds;\n    const sortData: SortDataType[] = targetFilterSortIds.map(sortId => copyDragDopData.sortData[sortId]);\n    console.log("current filter value: ", sortData);\n    // ...\n  };\n')),(0,i.kt)("p",null,"\u5370\u51fa\u8cc7\u6599\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  current filter value: [\n    {\n      // highlight-start\n      id: "personName",\n      // highlight-end\n      name: "\u59d3\u540d",\n      sort: "ASC",\n    }, \n    {\n      id: "year",\n      name: "\u5e74\u5ea6",\n      sort: "DESC",\n    }\n  ];\n')),(0,i.kt)("p",null,"\u6211\u5011\u767c\u73fe\uff1a\u7be9\u9078\u5167\u5bb9\u6709\u52a0\u5165\u59d3\u540d(",(0,i.kt)("inlineCode",{parentName:"p"},'id: "personName"'),")\uff0c\u9700\u53e6\u5916\u5e36\u5165\u8fa8\u5225\u9806\u5e8f\uff1a",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'const personNameOrder = ["info.firstName", "info.lastName", "info.id"];')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'  const handleClick = (currentDragDropData: GraggableStructure) => {\n    // ...\n    const filterData: SortDataType[] = [];\n      targetFilterSortIds.forEach((sortId) => {\n        // highlight-start\n        if (sortId === "personName") {\n          personNameOrder.forEach((item) => {\n            const temp = { ...copyDragDopData.sortData["personName"] };\n            temp.id = item;\n            filterData.push(temp);\n          });\n          // highlight-end\n        } else {\n          filterData.push(copyDragDopData.sortData[sortId]);\n        }\n      });\n\n      console.log("current filter value: ", filterData);\n  }\n')),(0,i.kt)("p",null,"\u5370\u51fa\u8cc7\u6599(\u4f9d\u5e8f)\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  current filter value: [\n    {\n      id: "info.firstName"\n      name: "\u59d3\u540d",\n      sort: "ASC",\n    }, \n    {\n      id: "info.lastName"\n      name: "\u59d3\u540d",\n      sort: "ASC",\n    }, \n    {\n      id: "info.id"\n      name: "\u59d3\u540d",\n      sort: "ASC",\n    }, \n    {\n      id: "year",\n      name: "\u5e74\u5ea6",\n      sort: "DESC",\n    }\n  ];\n')),(0,i.kt)("h3",{id:"\u4e8c-\u529f\u80fd\u62c6\u958b"},"(\u4e8c) \u529f\u80fd\u62c6\u958b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5224\u5225 ASC\u3001DESC")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'  const compareSortValue = ( sort: string, valueA: string | number, valueB: string | number ): number => {\n    if(valueA < valueB){\n      return sort === "ASC" ? -1 : 1\n    }\n\n    if(valueA > valueB){\n      return sort === "ASC" ? 1 : -1\n    }\n\n    return 0\n  }\n')),(0,i.kt)("h3",{id:"\u4e09-\u6211\u5011\u6703\u9047\u5230\u5169\u500b\u554f\u984c"},"(\u4e09) \u6211\u5011\u6703\u9047\u5230\u5169\u500b\u554f\u984c\uff1a"),(0,i.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u5011\u77e5\u9053\u8981 \u4f9d\u6392\u5e8f\u9806\u5e8f\u7be9\u51fa\uff0c\u50cf\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  const tempData = [...data];\n    tempData.sort((a, b) => {\n      return compareSortValue("ASC" , a.info.firstName, b.info.firstName)\n        || compareSortValue("ASC" , a.info.lastName, b.info.lastName)\n        || compareSortValue("ASC" , a.info.id, b.info.id)\n        || compareSortValue("DESC" , a.year, b.year)\n    });\n\n  setData(tempData);\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\uff0c\u6211\u5011\u6703\u9047\u5230\uff1a"),(0,i.kt)("h4",{parentName:"blockquote",id:"\uff511-\u4e0d\u77e5\u9053\u4f7f\u7528\u8005\u6703\u9078\u64c7\u54ea\u4e9b\u7be9\u9078\u9805\u76ee\u5f88\u986f\u7136\u4e0a\u9762\u7684\u65b9\u5f0f\u662f\u884c\u4e0d\u901a\u7684"},"\uff311. \u4e0d\u77e5\u9053\u4f7f\u7528\u8005\u6703\u9078\u64c7\u54ea\u4e9b\u7be9\u9078\u9805\u76ee\uff0c\u5f88\u986f\u7136\u4e0a\u9762\u7684\u65b9\u5f0f\u662f\u884c\u4e0d\u901a\u7684\uff01"),(0,i.kt)("h4",{parentName:"blockquote",id:"\uff512-\u6211\u8981\u600e\u9ebc\u628a\u6240\u6709\u7be9\u9078\u689d\u4ef6\u4e00\u6b21\u5e36\u5165"},"\uff312. \u6211\u8981\u600e\u9ebc\u628a\u6240\u6709\u7be9\u9078\u689d\u4ef6\u4e00\u6b21\u5e36\u5165\uff1f")),(0,i.kt)("h3",{id:"\uff511how-to-sort-by-multiple-conditions-w-flexible-way-"},"\uff311\uff1aHow to sort by multiple conditions w/ flexible way ?"),(0,i.kt)("p",null,"\u5982\u679c\u6211\u60f3\u5efa\u7acb\u5171\u7528\u7684\u7be9\u9078\u689d\u4ef6 function\uff0c\u6bcf\u6b21\u5e36\u5165\u7684\u689d\u4ef6\u90fd\u4e0d\u4e00\u6a23\uff0c\u8981\u600e\u9ebc\u505a\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u7269\u4ef6\u5c6c\u6027\u503c: \u624d\u80fd\u4f5c\u6bd4\u8f03(a, b)"),(0,i.kt)("li",{parentName:"ul"},"\u900f\u904e sortData \u5167 id:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  const findTargetValue = (targetData: DataType, dataIndex: string[], currentValue: any) => {\n    if (dataIndex.length === 0) {\n      return currentValue;\n    }\n\n    const tempIndex = [...dataIndex];\n    const property = tempIndex[0];\n    const findValue = currentValue[property];\n    tempIndex.splice(0, 1);\n\n    return findTargetValue(targetData, tempIndex, findValue);\n  };\n")),(0,i.kt)("p",null,"\u5047\u8a2d\u6211\u60f3\u53d6\u5f97 ",(0,i.kt)("inlineCode",{parentName:"p"},"subject.title")," \u7684\u503c\uff1a(",(0,i.kt)("a",{parentName:"p",href:"#%E4%B8%80-%E5%85%88%E7%A2%BA%E8%AA%8D%E6%88%91%E5%80%91%E6%8B%BF%E5%88%B0%E7%9A%84%E7%AF%A9%E9%81%B8%E5%85%A7%E5%AE%B9"},"\u53c3\u8003\u4e0a\u9762"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  const testData = {\n    id: 1,\n    info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n    year: 2020,\n    subject: { title: "English", score: "97" }\n  };\n  const dataIndex = ["subject", "title"];\n\n  console.log("findTargetValue result: ", findTargetValue(testData, dataIndex, testData));\n')),(0,i.kt)("p",null,"\u5370\u51fa\u7d50\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  findTargetValue result: English\n")),(0,i.kt)("h3",{id:"\uff512\u4f86\u89e3\u6c7a\u7b2c\u4e8c\u500b\u554f\u984c-\u6211\u5011\u4f7f\u7528-sort-\u9084\u9700\u8981\u4e00\u6b21\u6027\u628a\u6240\u6709\u7be9\u9078\u9805\u76ee\u6bd4\u8f03\u5b8c\u624d\u80fd\u5f97\u5230\u6b63\u78ba\u7d50\u679c"},"\uff312\uff1a\u4f86\u89e3\u6c7a\u7b2c\u4e8c\u500b\u554f\u984c ",(0,i.kt)("br",null),"\u6211\u5011\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h3"},"sort()")," \u9084\u9700\u8981\u4e00\u6b21\u6027\u628a\u6240\u6709\u7be9\u9078\u9805\u76ee\u6bd4\u8f03\u5b8c\uff0c\u624d\u80fd\u5f97\u5230\u6b63\u78ba\u7d50\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  // compareList: \u4e00\u9663\u5217\uff0c\u7d00\u9304\u6bcf\u500b\u7be9\u9078\u689d\u4ef6\u7684 id, sort, valueA, valueB\u3002\n  const compareFn = (compareList: CompareListType[]) => {\n    if (compareList.length === 0) {\n      return 0;\n    }\n\n    const tempSortList = [...compareList];\n    const compareResult = compareSortValue(\n      tempSortList[0].sort,\n      tempSortList[0].valueA,\n      tempSortList[0].valueB\n    );\n    if (compareResult !== 0) {\n      return compareResult;\n    } else {\n      tempSortList.splice(0, 1);\n      return compareFn(tempSortList);\n    }\n  };\n")),(0,i.kt)("p",null,"\u5e36\u5165\u7be9\u9078\u689d\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'  const handleSortByConditions = (data: DataType[], filterData: SortDataType[]) => {\n    const tempData = [...data];\n    tempData.sort((a, b) => {\n      const compareList = [];\n      for (const condition of filterData) {\n        const { id, sort } = condition;\n        const dataIndex = id.split(".");\n        const valueA = findTargetValue(a, dataIndex, a);\n        const valueB = findTargetValue(b, dataIndex, b);\n\n        compareList.push({ id, sort, valueA, valueB });\n      }\n\n      return compareFn(compareList); // return compare Result in one time\n    });\n\n    setData(tempData);\n  };\n')),(0,i.kt)("p",null,"\u6548\u679c\u7b26\u5408\u9810\u671f\uff1a",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"\u6548\u679c\u7b26\u5408\u9810\u671f",src:n(2471).Z})),(0,i.kt)("h2",{id:"demo"},"DEMO"),(0,i.kt)("h4",{id:"--demo"},(0,i.kt)("a",{parentName:"h4",href:"https://codesandbox.io/s/practice-sort-by-multiple-conditions-w-flexible-way-0dgg7k?file=/Demo/index.js"}," \b\u270e DEMO")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u76ee\u6a19\u986f\u793a-2"},"\u76ee\u6a19\u986f\u793a 2"),(0,i.kt)("p",null,"\u4f9d\u5e8f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u79d1\u76ee\u7531A\u5230Z"),(0,i.kt)("li",{parentName:"ol"},"\u5e74\u5ea6\u7531\u4f4e\u5230\u9ad8"),(0,i.kt)("li",{parentName:"ol"},"\u540d\u5b57\u7531Z\u5230A")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("strong",null,"\u9810\u671f\u8cc7\u6599\u986f\u793a\u7d50\u679c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  const data = [\n    {\n      id: 1,\n      info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n      year: 2020,\n      subject: { title: "English", score: "97" }\n    },\n    {\n      id: 5,\n      info: { id: "A888", firstName: "David", lastName: "Ye" },\n      year: 2020,\n      subject: { title: "English", score: "67" }\n    },\n    {\n      id: 4,\n      info: { id: "A000", firstName: "David", lastName: "Tom" },\n      year: 2021,\n      subject: { title: "English", score: "81" }\n    },\n    {\n      id: 3,\n      info: { id: "A456", firstName: "David", lastName: "Tom" },\n      year: 2019,\n      subject: { title: "History", score: "18" }\n    },\n    {\n      id: 2,\n      info: { id: "A456", firstName: "David", lastName: "Tom" },\n      year: 2019,\n      subject: { title: "Math", score: "43" }\n    },\n    {\n      id: 3,\n      info: { id: "A123", firstName: "Joanna", lastName: "Chen" },\n      year: 2020,\n      subject: { title: "Math", score: "82" }\n    },\n    {\n      id: 6,\n      info: { id: "A999", firstName: "Eva", lastName: "Lee" },\n      year: 2020,\n      subject: { title: "Math", score: "70" }\n    },\n  ];\n'))),(0,i.kt)("p",null,"\u6548\u679c\u7b26\u5408\u9810\u671f\uff1a",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"\u6548\u679c\u7b26\u5408\u9810\u671f",src:n(9880).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://dev.to/markbdsouza/js-sort-an-array-of-objects-on-multiple-columns-keys-2bj1"},"JS: Sort an Array of Objects on multiple columns/keys"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://gomakethings.com/sorting-an-array-by-multiple-criteria-with-vanilla-javascript/"},"Sorting an array by multiple criteria with vanilla JavaScript"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@mr.whatever/node-js%E7%9A%84array-sort-75a13076318c"},"Node.js\u7684Array.sort"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://segmentfault.com/q/1010000007600522"},"\u8bf7\u6559\u4e00\u4e2a\u7b97\u6cd5\u95ee\u9898\uff0c\u6570\u7ec4\u5206\u7ec4\u6392\u5e8f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields"},"How to sort an array of objects by multiple fields?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/3230028/how-to-order-a-json-object-by-two-keys/3230748#3230748"},"How to order a JSON object by two keys?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/appxtech/localecompare-%E7%9A%84%E7%94%A8%E6%B3%95-6be2ab8401ad"},"localeCompare()\u7684\u7528\u6cd5")))))}m.isMDXComponent=!0},2471:function(t,e,n){e.Z=n.p+"assets/images/record_sort_mutiple_conditions_target1-b075d89f0608ef71dca0cabebf2b5e69.png"},9880:function(t,e,n){e.Z=n.p+"assets/images/record_sort_mutiple_conditions_target2-d6257bdae0c7ed63a8220ae979b64cc3.png"},7459:function(t,e,n){e.Z=n.p+"assets/images/record_sort_mutiple_conditions-2edd4579fd924286f75c1af9d5a30601.gif"}}]);