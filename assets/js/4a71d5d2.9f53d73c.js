"use strict";(self.webpackChunkchenchens=self.webpackChunkchenchens||[]).push([[794],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9740:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:14,id:"run_local_project",title:"Run project on local",tags:["Local"]},c=void 0,p={unversionedId:"record/run_local_project",id:"record/run_local_project",title:"Run project on local",description:"Situation",source:"@site/docs/record/run_local_project.md",sourceDirName:"record",slug:"/record/run_local_project",permalink:"/myWebsite/docs/record/run_local_project",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/record/run_local_project.md",tags:[{label:"Local",permalink:"/myWebsite/docs/tags/local"}],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,id:"run_local_project",title:"Run project on local",tags:["Local"]},sidebar:"tutorialSidebar",previous:{title:"How to exact domain name from email?",permalink:"/myWebsite/docs/record/record_email_parsed_domain_name"},next:{title:"Project breaks when uploading Node.js version",permalink:"/myWebsite/docs/record/record_local_node_version_broken_project"}},s=[{value:"Situation",id:"situation",children:[],level:2},{value:"Record",id:"record",children:[{value:"(\u4e00) client-side\uff1arootUrl \u6307\u5411\u672c\u5730\u7aef",id:"\u4e00-client-siderooturl-\u6307\u5411\u672c\u5730\u7aef",children:[],level:3},{value:"(\u4e8c) server-side:",id:"\u4e8c-server-side",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"situation"},"Situation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"local \u8dd1\u5c08\u6848\uff0c\u5feb\u901f\u7d00\u9304\u64cd\u4f5c\u7b46\u8a18\u3002"),(0,o.kt)("li",{parentName:"ul"},"client-side + server-side(golang)")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"record"},"Record"),(0,o.kt)("h3",{id:"\u4e00-client-siderooturl-\u6307\u5411\u672c\u5730\u7aef"},"(\u4e00) client-side\uff1arootUrl \u6307\u5411\u672c\u5730\u7aef"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:port")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:port"))))),(0,o.kt)("h3",{id:"\u4e8c-server-side"},"(\u4e8c) server-side:"),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GitLab: \u8907\u88fd server \u5c08\u6848\u8def\u5f91")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sourcetree: new File / Clone from URL"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Source URL \u586b\u5165 \u5c08\u6848\u8def\u5f91"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u516c\u53f8\u5167\u7db2\uff0c\u8acb\u5c07 domain name \u6539\u6210 \u5167\u7db2\u8def\u5f91"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"VsCode: \u958b\u555f server\uff0c\u67e5\u770b \u8cc7\u6599\u593e ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," \u4e0b\uff0c\u6307\u5411\u7684 database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"pgAdmin: \u700f\u89bd ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," \u8cc7\u6599\u593e\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," \u7684 database\uff0c\u65b0\u589e\u6307\u5b9a database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u56de\u5230 server: \u57f7\u884c go ",(0,o.kt)("inlineCode",{parentName:"p"},"go run ./server/server.go"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u56de\u5230 client: \u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u78ba\u8a8d \u7db2\u9801 call API\uff0cRequest URL: domain name \u662f\u672c\u5730\u7aef"))))))}u.isMDXComponent=!0}}]);