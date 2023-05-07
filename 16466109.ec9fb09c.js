(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),o=t.n(r),a=(t(20),t(413)),i=t(244);const c=e=>{let{type:n,children:t}=e,r=n;return"tip"===n&&(r="success"),"note"===n&&(r="secondary"),o.a.createElement(a.a,{theme:Object(i.b)()},o.a.createElement("div",{className:`admonition admonition-${n} alert alert--${r}`},o.a.createElement("div",{className:"admonition-heading"},o.a.createElement("h5",null,o.a.createElement("span",{className:"admonition-icon"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),o.a.createElement("div",{className:"admonition-content"},o.a.createElement("p",null,t))))},l=()=>o.a.createElement(c,{type:"note"},"See"," ",o.a.createElement("a",{href:"/demos/#demo-environment"},o.a.createElement("b",null,o.a.createElement("i",null,"here")))," ","for more on the ",o.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=(t(0),t(165)),a=(t(179),t(177));const i={id:"override",title:"Override Grouping"},c={unversionedId:"group/override",id:"group/override",isDocsHomePage:!1,title:"Override Grouping",description:"Usage",source:"@site/demos/group/override.mdx",slug:"/group/override",permalink:"/demos/group/override",version:"current",sidebar:"sidebar",previous:{title:"Basic Grouping",permalink:"/demos/group/basic"},next:{title:"Basic Localization",permalink:"/demos/localization/basic"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],u={toc:l};function s(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"To override the grouping text within the group row, use the column.groupRender callback function.\nIt returns the grouped string for each group row for the given column and expects a renderable react node."),Object(o.b)("p",null,"Additionally, the options.showGroupingCount (boolean) can be used to display the amount of items that are grouped under each group."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ... other props\n  columns={[field: "test", renderGroup: () => "Test"]}\n  options={{\n    showGroupingCount: true,\n  }}\n/>;\n')),Object(o.b)("h2",{id:"live-demo"},"Live Demo"),Object(o.b)(a.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function GroupingOverrideDemo() {\n  return (\n    <MaterialTable\n      data={DEMO_DATA}\n      columns={DEMO_COLS.map((col) => ({\n        ...col,\n        groupRender: (value) => `Test ${value}`,\n      }))}\n      options={{\n        // Enabling grouping\n        grouping: true,\n        // Show the child count in brackets\n        showGroupingCount: true,\n      }}\n    />\n  );\n}\n")))}s.isMDXComponent=!0}}]);