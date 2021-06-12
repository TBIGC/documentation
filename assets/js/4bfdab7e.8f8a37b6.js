(self.webpackChunk_institutegc_digital_dashboard_docs=self.webpackChunk_institutegc_digital_dashboard_docs||[]).push([[272],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,g=d["".concat(s,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(g,u(u({ref:t},l),{},{components:r})):n.createElement(g,u({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return u}});var n=r(2263),o=r(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,a=void 0!==u&&u,s=i.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(i,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},6646:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},countries:function(){return f},CurrentUsage:function(){return d},default:function(){return g}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),u=r(4996),a=["components"],s={id:"usage",title:"Who uses the dashboard?",sidebar_label:"Who uses the dashboard?",slug:"/usage"},c={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Who uses the dashboard?",description:"export const countries = [",source:"@site/docs/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/documentation/docs/usage",version:"current",sidebar_label:"Who uses the dashboard?",frontMatter:{id:"usage",title:"Who uses the dashboard?",sidebar_label:"Who uses the dashboard?",slug:"/usage"},sidebar:"someSidebar",previous:{title:"What does it do?",permalink:"/documentation/docs/"},next:{title:"History",permalink:"/documentation/docs/history"}},l=[],f=[{country:"Sierra Leone",logo:"sl-gov.png",users:["Ministry of Finance","Ministry of Agriculture","Covid Economic Recovery plan"]},{country:"Kenya",logo:"kenya-gov.png",users:["Postal Corporation","Nyeri County Government"]},{country:"Democratic Republic of Congo",logo:"drc.png",users:["Cellule Climat des Affaires","Team of the special adviser"]},{country:"Spanning multiple countries",logo:"tbilogo.jpg",users:["Health Programmes ICS"]}],d=function(e){var t=e.countries;return(0,i.kt)("div",null,t.map((function(e){return(0,i.kt)("div",null,(0,i.kt)("div",{className:"usage"},(0,i.kt)("img",{src:(0,u.Z)("/assets/"+e.logo),width:"80",className:"align-self-center"}),(0,i.kt)("h2",{className:"align-self-center country-title"},(0,i.kt)("b",null,(0,i.kt)("u",null,e.country)))),(0,i.kt)("ul",{style:{marginLeft:"90px"}},e.users.map((function(e){return(0,i.kt)("li",null,e)}))))})))},p={toc:l,countries:f,CurrentUsage:d};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{countries:f,mdxType:"CurrentUsage"}))}g.isMDXComponent=!0}}]);