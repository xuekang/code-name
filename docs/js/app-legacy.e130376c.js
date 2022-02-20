(function(){var e={3821:function(e,t,r){"use strict";r(6992),r(8674),r(9601),r(7727);var n=r(8935),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Hello App!")]),r("p",[r("router-link",{attrs:{to:"/"}},[e._v("Go to Home")]),r("router-link",{attrs:{to:"/hellow"}},[e._v("Go to hellow")])],1),r("router-view")],1)},u=[],a={name:"App",components:{}},i=a,s=r(1001),l=(0,s.Z)(i,o,u,!1,null,null,null),c=l.exports,f=(r(1539),r(3948),r(4916),r(5306),r(4665)),v={size:function(e){return e.app.size},device:function(e){return e.app.device},errorLogs:function(e){return e.errorLog.logs}},p=v;n["default"].use(f.ZP);var d=r(2645),h=d.keys().reduce((function(e,t){var r=t.replace(/^\.\/(.*)\.\w+$/,"$1"),n=d(t);return e[r]=n.default,e}),{}),g=new f.ZP.Store({modules:h,getters:p}),_=g,m=r(2809),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v("1")]),r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")]),r("h3",[e._v("Installed CLI Plugins")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])]),r("h3",[e._v("Essential Links")]),r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])]),r("h3",[e._v("Ecosystem")]),r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])])}],j={name:"HelloWorld"},E=j,O=(0,s.Z)(E,b,k,!1,null,"416c4f39",null),w=O.exports;n["default"].use(m.Z);var y=[{path:"/hellow",component:w}],L=function(){return new m.Z({scrollBehavior:function(){return{y:0}},routes:y})},R=L(),C=R,P=r(4549),S=r.n(P);n["default"].use(S());r(1703);var T=r(6166),D=r.n(T),G=D().create({baseURL:"/api",withCredentials:!0,timeout:5e3});G.interceptors.request.use((function(e){return _.getters.token&&(e.headers["token"]=""),e}),(function(e){return console.log(e),Promise.reject(e)})),G.interceptors.response.use((function(e){var t=e.data;return 0!==t.code?((0,P.Message)({message:t.message||"Error",type:"error",duration:5e3}),Promise.reject(new Error(t.message||"Error"))):t.data}),(function(e){return console.log("err"+e),(0,P.Message)({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var Z=G;n["default"].config.productionTip=!1,Object.defineProperty(n["default"].prototype,"request",{value:Z}),new n["default"]({el:"#app",store:_,router:C,render:function(e){return e(c)}})},589:function(e,t,r){"use strict";r.r(t);var n=r(329),o={device:"desktop",size:n.Z.get("size")||"medium"},u={TOGGLE_DEVICE:function(e,t){e.device=t},SET_SIZE:function(e,t){e.size=t,n.Z.set("size",t)}},a={toggleDevice:function(e,t){var r=e.commit;r("TOGGLE_DEVICE",t)},setSize:function(e,t){var r=e.commit;r("SET_SIZE",t)}};t["default"]={namespaced:!0,state:o,mutations:u,actions:a}},1279:function(e,t,r){"use strict";r.r(t);r(561);var n={logs:[]},o={ADD_ERROR_LOG:function(e,t){e.logs.push(t)},CLEAR_ERROR_LOG:function(e){e.logs.splice(0)}},u={addErrorLog:function(e,t){var r=e.commit;r("ADD_ERROR_LOG",t)},clearErrorLog:function(e){var t=e.commit;t("CLEAR_ERROR_LOG")}};t["default"]={namespaced:!0,state:n,mutations:o,actions:u}},2645:function(e,t,r){var n={"./app.js":589,"./errorLog.js":1279};function o(e){var t=u(e);return r(t)}function u(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=u,e.exports=o,o.id=2645}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,u){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],u=e[c][2];for(var i=!0,s=0;s<n.length;s++)(!1&u||a>=u)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,u<a&&(a=u));if(i){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[n,o,u]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,a=n[0],i=n[1],s=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var c=s(r)}for(t&&t(n);l<a.length;l++)u=a[l],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(c)},n=self["webpackChunkcode_name"]=self["webpackChunkcode_name"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3821)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.e130376c.js.map