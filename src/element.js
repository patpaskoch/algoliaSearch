(function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"===typeof exports?exports:e)[a]=n[a]}})(self,(function(){return function(){"use strict";var e={154:function(e,t,n){var a=n(751),o=n(422),r=n(641),i=n(953),l=n(33),u=n(518),s=n(232),c=n(978),f=n(92),d=n(643),p=n.n(d);const v=e=>((0,r.Qi)("data-v-2499bed7"),e=e(),(0,r.jt)(),e),y=v((()=>(0,r.Lk)("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"},null,-1))),g={class:"fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20"},h={class:"relative"},b={class:"hit-post_title"},m={class:"hit-content"},w={key:1,class:"p-4 text-sm text-gray-500"};var x={__name:"SearchWidget",props:{appId:{type:String,required:!0},apiKey:{type:String,required:!0},indexName:{type:String,required:!0}},setup(e){const t=e,n=p()(t.appId,t.apiKey),a=n.initIndex(t.indexName),o=(0,i.KR)(!0),d=(0,i.KR)(""),v=(0,i.KR)([]),x=async()=>{if(""!==d.value){const{hits:e}=await a.search(d.value);v.value=e}else v.value=[]};function k(e){e&&(window.location=e.url)}return(0,r.wB)(d,x),console.log("widget on"),(e,t)=>((0,r.uX)(),(0,r.Wv)((0,i.R1)(s.O),{show:o.value,as:"template",onAfterLeave:t[3]||(t[3]=e=>d.value=""),appear:""},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(c.lG),{class:"relative z-10",onClose:t[2]||(t[2]=e=>o.value=!1)},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(s._),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,r.k6)((()=>[y])),_:1}),(0,r.Lk)("div",g,[(0,r.bF)((0,i.R1)(s._),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(c.Lj),{class:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(f.G3),{"onUpdate:modelValue":k},{default:(0,r.k6)((()=>[(0,r.Lk)("div",h,[(0,r.bF)((0,i.R1)(u.A),{class:"pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,r.bF)((0,i.R1)(f.oK),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:t[0]||(t[0]=e=>d.value=e.target.value),onBlur:t[1]||(t[1]=e=>d.value="")})]),v.value.length>0?((0,r.uX)(),(0,r.Wv)((0,i.R1)(f.Kc),{key:0,static:"",class:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(v.value,(e=>((0,r.uX)(),(0,r.Wv)((0,i.R1)(f.jO),{key:e.objectID,value:e,as:"template"},{default:(0,r.k6)((({active:t})=>[(0,r.Lk)("li",{class:(0,l.C4)(["cursor-default select-none px-4 py-2",t&&"bg-indigo-600 text-white"])},[(0,r.Lk)("div",b,(0,l.v_)(e.post_title),1),(0,r.Lk)("div",m,(0,l.v_)(e.content),1)],2)])),_:2},1032,["value"])))),128))])),_:1})):(0,r.Q3)("",!0),""!==d.value&&0===v.value.length?((0,r.uX)(),(0,r.CE)("p",w,"No results found.")):(0,r.Q3)("",!0)])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1},8,["show"]))}},k=n(262);const _=(0,k.A)(x,[["__scopeId","data-v-2499bed7"]]);var j=_;const O=(0,a.Ef)(j),R=(0,o.A)(O,j);window.customElements.define("search-widget",R)}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var l=!0,u=0;u<a.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.j=853}(),function(){var e={853:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],l=a[1],u=a[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(a);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkalgolia_widget"]=self["webpackChunkalgolia_widget"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(154)}));return a=n.O(a),a}()}));
//# sourceMappingURL=element.js.map
