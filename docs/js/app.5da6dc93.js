(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2be97741"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var u=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-poligon/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3b86":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("5f5b"),a=n("b1e0"),o=(n("2dd8"),n("f9e3"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"layout"},[n("div",{staticClass:"header"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v(" Vue Poligon ")])],1)],1),n("div",{staticClass:"main"},[n("SiteNav"),n("router-view")],1),n("div",{staticClass:"bottom"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("NavBar")])],1)],1)])])},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-nav",{attrs:{pills:""}},[n("b-nav-item",[n("router-link",{attrs:{to:"/",exact:"","exact-active-class":"router-link-active"}},[t._v(" Home ")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/base",exact:"","exact-active-class":"router-link-active"}},[t._v(" Base ")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/vuex-page",exact:"","exact-active-class":"router-link-active"}},[t._v(" VuexPage ")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/about",exact:"","exact-active-class":"router-link-active"}},[t._v("About")])],1)],1)],1)},u=[],c={name:"SiteNav"},v=c,f=(n("d712"),n("2877")),d=Object(f["a"])(v,l,u,!1,null,"e98fa9f2",null),p=d.exports,m={name:"App",components:{SiteNav:p}},b=m,_=(n("034f"),Object(f["a"])(b,i,s,!1,null,null,null)),h=_.exports,g=(n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"TemplateSyntax"}},[n("TemplateSyntax")],1),n("b-tab",{attrs:{title:"ComputedProperties"}},[n("ComputedProperties")],1),n("b-tab",{attrs:{title:"Styles"}},[n("Styles")],1),n("b-tab",{attrs:{title:"IfFor"}},[n("IfFor")],1),n("b-tab",{attrs:{title:"VOn"}},[n("VOn")],1),n("b-tab",{attrs:{title:"Forms"}},[n("Forms")],1)],1)],1)},x=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Message: "+t._s(t.msg))]),n("p",{domProps:{innerHTML:t._s(t.rawHtml)}}),n("button",{attrs:{disabled:t.isButtonDisabled}},[t._v(" v-bind:disabled: isButtonDisabled ")]),n("button",{attrs:{disabled:t.isButtonDisabled2}},[t._v(" v-bind:disabled: isButtonNotDisabled ")]),n("h2",[t._v("Directives")]),t.vifv?n("p",[t._v("v-if: visible")]):t._e(),t._e(),n("p",[n("a",{attrs:{href:t.url1}},[t._v(" v-bind:href= ")])])])},O=[],j={name:"TemplateSyntax",data:function(){return{msg:"message from js",rawHtml:'<span  style="color: red">v-html: rawHtml </span>',isButtonDisabled:!0,isButtonDisabled2:!1,vifv:!0,url1:"http://google.com"}}},w=j,C=Object(f["a"])(w,S,O,!1,null,null,null),k=C.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{"red-color":t.bul1}},[t._v("active red class")]),n("div",{style:{color:t.activeColor,fontSize:t.fontSize+"px"}},[t._v(" v-bind:style ")])])},$=[],E={name:"StylesVue",data:function(){return{bul1:!0,fontSize:30,activeColor:"green"}}},V=E,B=(n("c9f4"),Object(f["a"])(V,P,$,!1,null,null,null)),T=B.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"отредактируй меня"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("p",[t._v("Введённое сообщение: "+t._s(t.message))])])},H=[],M={name:"Forms",data:function(){return{message:""}}},A=M,D=Object(f["a"])(A,F,H,!1,null,null,null),N=D.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.yes1?n("div",[t._v("v-if: On")]):t._e(),t._e(),n("div",{staticStyle:{"background-color":"yellow"}},[n("h2",[t._v("v-else-if")]),"A"===t.type?n("div",[t._v(" A ")]):"B"===t.type?n("div",[t._v(" B ")]):"C"===t.type?n("div",[t._v(" C ")]):n("div",[t._v(" Не A/B/C ")])]),n("div",[n("h2",[t._v("V-for")]),t._l(t.arr1,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.title)+" ")])}))],2)])},z=[],L={name:"IfFor",data:function(){return{yes1:!0,type:"B",arr1:[{id:1,title:"title1"},{id:2,title:"title2"},{id:3,title:"title3"}]}}},J=L,q=Object(f["a"])(J,I,z,!1,null,null,null),G=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"example-1"}},[n("h2",[t._v("v-on:click")]),n("b-button",{attrs:{variant:"success"},on:{click:function(e){t.counter+=1}}},[t._v(" __ +1 __")]),n("p",[t._v("Кнопка выше была нажата "+t._s(t.counter)+" раз")]),n("div",{attrs:{id:"example-2"}},[n("b-button",{on:{click:t.greet}},[t._v("Поприветствовать")])],1),n("button",{on:{click:function(e){return t.say("hi")}}},[t._v("Скажи hi")])],1)},Q=[],R=(n("b0c0"),{name:"VOn",data:function(){return{counter:0,name:"Vue.js"}},methods:{greet:function(t){alert("Привет, "+this.name+"!"),t&&alert(t.target.tagName)},say:function(t){alert(t)}}}),U=R,W=Object(f["a"])(U,K,Q,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.reversedMessage))])},Z=[],tt={name:"ComputedProperties",computed:{reversedMessage:function(){var t="some computed string";return t}}},et=tt,nt=Object(f["a"])(et,Y,Z,!1,null,null,null),rt=nt.exports,at={name:"Base",components:{TemplateSyntax:k,ComputedProperties:rt,Styles:T,IfFor:G,VOn:X,Forms:N}},ot=at,it=Object(f["a"])(ot,y,x,!1,null,null,null),st=it.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Home")]),n("p",[t._v("vue/vuex test-project")])])}],ct={name:"Home"},vt=ct,ft=Object(f["a"])(vt,lt,ut,!1,null,null,null),dt=ft.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"StateCounters"}},[n("StateCounter")],1),n("b-tab",{attrs:{title:"StoreViewer"}},[n("StoreViewer")],1)],1)],1)},mt=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("from state: "+t._s(this.$store.state.stateCount))]),n("button",{on:{click:t.increment}},[t._v("increment")])])},_t=[],ht={name:"StateCounter",methods:{increment:function(){this.$store.commit("incrementStateCount")}}},gt=ht,yt=Object(f["a"])(gt,bt,_t,!1,null,null,null),xt=yt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Store:")]),n("pre",[t._v(t._s(this.$store.state))])])},Ot=[],jt={name:"StoreViewer"},wt=jt,Ct=Object(f["a"])(wt,St,Ot,!1,null,null,null),kt=Ct.exports,Pt={name:"VuexPage",components:{StateCounter:xt,StoreViewer:kt}},$t=Pt,Et=Object(f["a"])($t,pt,mt,!1,null,null,null),Vt=Et.exports;o["default"].use(g["a"]);var Bt=[{path:"/",name:"Home",component:dt},{path:"/base",name:"Base",component:st},{path:"/vuex-page",name:"VuexPage",component:Vt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Tt=new g["a"]({mode:"history",base:"/vue-poligon/",routes:Bt}),Ft=Tt,Ht=n("2f62");o["default"].use(Ht["a"]);var Mt=new Ht["a"].Store({state:{stateCount:100},mutations:{incrementStateCount:function(t){t.stateCount++}},actions:{},modules:{}});o["default"].use(r["a"]),o["default"].use(a["a"]),o["default"].config.productionTip=!1,new o["default"]({router:Ft,store:Mt,render:function(t){return t(h)}}).$mount("#app")},"5e47":function(t,e,n){},"85ec":function(t,e,n){},c9f4:function(t,e,n){"use strict";n("3b86")},d712:function(t,e,n){"use strict";n("5e47")}});
//# sourceMappingURL=app.5da6dc93.js.map