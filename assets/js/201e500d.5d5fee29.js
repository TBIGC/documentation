(self.webpackChunk_institutegc_digital_dashboard_docs=self.webpackChunk_institutegc_digital_dashboard_docs||[]).push([[691],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3328:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"add-content",title:"Adding content",sidebar_label:"Adding content",slug:"/add-content"},c={unversionedId:"add-content",id:"add-content",isDocsHomePage:!1,title:"Adding content",description:"You can add content whenever you see the blue plus sign in the corner of your",source:"@site/docs/add-content.mdx",sourceDirName:".",slug:"/add-content",permalink:"/documentation/docs/add-content",version:"current",sidebar_label:"Adding content",frontMatter:{id:"add-content",title:"Adding content",sidebar_label:"Adding content",slug:"/add-content"},sidebar:"someSidebar",previous:{title:"Adding a new user",permalink:"/documentation/docs/create-user"},next:{title:"Updating content",permalink:"/documentation/docs/updating-content"}},d=[],l={toc:d};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can add content whenever you see the blue plus sign in the corner of your\nscreen. Hover over this sign and select which type of content you want to add"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"image",src:n(2571).Z}))),(0,a.kt)("p",null,"There are 3 types of content you can add to a dashboard:"),(0,a.kt)("h4",{id:"1-actions"},"1. Actions"),(0,a.kt)("p",null,"Actions are the most common content to add. They are given a deadline and are\nassigned to a single user who has responsibility for updating / completing that\naction."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"image",src:n(4071).Z}))),(0,a.kt)("p",null,"The action form has 5 parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Action title - try to keep this short")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Additional information  / details - extra information that will help the user\nunderstand and complete the action")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Assigned to - the user who is reponsible for updating / completing the action")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Already completed? - check this box if you are recording an action that has\nalready been completed")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Deadline - the date when the action needs to be completed by")),(0,a.kt)("h4",{id:"2-milestones"},"2. Milestones"),(0,a.kt)("p",null,"Milestones are achievements rather than tasks. They have a deadline but are not\nassigned to a user - instead the intervention lead / co-lead have responsibility\nmilestones in their intervention."),(0,a.kt)("p",null,"The add milestone form is the same as the add action form (above) except\nthat there is no option to assign the milestone to a user."),(0,a.kt)("h4",{id:"3-issues"},"3. Issues"),(0,a.kt)("p",null,"Issues are raised by regular users who do not have permission\nto add actions (see ",(0,a.kt)("a",{parentName:"p",href:"dashboard-roles"},"dashboard roles"),"). An issue does not have\na deadline / assignee until an admin user converts it to an action\n(see ",(0,a.kt)("a",{parentName:"p",href:"updating-content"},"updating content"),")"),(0,a.kt)("p",null,"The raise issue form is the same as the add action form (above) except\nthat there is no option to assign the issue to a user or give it a deadline"))}u.isMDXComponent=!0},4071:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-action-003141b3af2180e393eb21b140799e1f.png"},2571:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-content-button-cfb07e8f0a348b74fba6bd9a7920d475.png"}}]);