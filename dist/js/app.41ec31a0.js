(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1416:function(t,e,a){},"1ee8":function(t,e,a){},2231:function(t,e,a){"use strict";a("5b19")},"27d9":function(t,e,a){"use strict";a("7fe7")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("d3b7"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppBar",{attrs:{show:!t.$vuetify.breakpoint.mobile,drawer:t.drawer,menu:t.menu},on:{"update:drawer":function(e){t.drawer=e}}}),a("Drawer",{attrs:{drawer:t.drawer},on:{"update:drawer":function(e){t.drawer=e}}}),a("BottomBar",{attrs:{show:t.$vuetify.breakpoint.mobile,menu:t.menu}}),a("v-main",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{value:t.drawer,"mobile-breakpoint":0,temporary:this.$vuetify.breakpoint.xs,clipped:"",app:"",touchless:"",width:t.$vuetify.breakpoint.smAndUp?300:256},on:{input:function(e){return t.$emit("update:drawer",e)}}})},o=[],l={props:{drawer:Boolean},mounted:function(){console.log(this.$vuetify.breakpoint.xs)}},c=l,d=a("2877"),u=a("6544"),f=a.n(u),p=a("f774"),m=Object(d["a"])(c,i,o,!1,null,null,null),h=m.exports;f()(m,{VNavigationDrawer:p["a"]});var v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{staticClass:"shadow-primary",attrs:{app:"",color:"white","clipped-left":""}},[s("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("update:drawer",!t.drawer)}}}),s("v-progress-linear",{attrs:{active:t.loading,indeterminate:t.loading,absolute:"",bottom:""}}),s("div",{staticClass:"fill-height d-flex align-center mr-4"},[s("v-img",{attrs:{contain:"","max-height":"100%",src:a("cf05")}}),s("div",{},[s("div",{staticClass:"font-weight-bold condensed",style:{fontSize:t.$vuetify.breakpoint.mdAndUp?"1.25rem":"1rem",lineHeight:1}},[t._v("Министерство энергетики")]),s("div",{staticClass:"condensed",staticStyle:{"font-size":".75rem"}},[t._v("Российской Федерации")])])],1),t.show?s("div",{staticClass:"d-flex"},t._l(t.menu,(function(e,a){return s("v-btn",{key:a,staticClass:"mr-3",attrs:{to:e.link,text:t.$route.path!==e.link,outlined:t.$route.path===e.link,color:t.$route.path===e.link?"secondary":"dark"}},[t._v(t._s(e.text))])})),1):t._e(),s("v-spacer")],1)},b=[],g=a("5530"),y=a("2f62"),j={props:{drawer:Boolean,menu:Array,show:Boolean},computed:Object(g["a"])({},Object(y["b"])(["loading"]))},w=j,_=a("40dc"),k=a("5bc1"),x=a("8336"),C=a("adda"),S=a("8e36"),D=a("2fa4"),$=Object(d["a"])(w,v,b,!1,null,null,null),M=$.exports;f()($,{VAppBar:_["a"],VAppBarNavIcon:k["a"],VBtn:x["a"],VImg:C["a"],VProgressLinear:S["a"],VSpacer:D["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-bottom-navigation",{attrs:{grow:"",app:""}},t._l(t.menu,(function(e,s){return a("v-btn",{key:s,attrs:{to:e.link}},[a("span",[t._v(t._s(e.text))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1):t._e()},O=[],V={props:{menu:Array,show:Boolean}},z=V,A=a("b81c"),B=a("132d"),T=Object(d["a"])(z,E,O,!1,null,null,null),F=T.exports;f()(T,{VBottomNavigation:A["a"],VBtn:x["a"],VIcon:B["a"]});var Y={components:{Drawer:h,AppBar:M,BottomBar:F},data:function(){return{drawer:!1,menu:[{text:"Статистика",link:"/",icon:"mdi-trending-up"},{text:"Документы",link:"#",icon:"mdi-file-document-outline"},{text:"Аккаунт",link:"#",icon:"mdi-account"}]}}},L=Y,R=a("7496"),P=a("f6c4"),I=Object(d["a"])(L,r,n,!1,null,null,null),N=I.exports;f()(I,{VApp:R["a"],VMain:P["a"]});var G=a("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var U=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-bg fill-height"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"auto"}},[a("v-menu",{ref:"oesMenu",attrs:{"offset-y":"","return-value":t.filters.oes},on:{"update:returnValue":function(e){return t.$set(t.filters,"oes",e)},"update:return-value":function(e){return t.$set(t.filters,"oes",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"shadow-primary",attrs:{color:"primary",dark:"","x-large":t.$vuetify.breakpoint.smAndUp}},"v-btn",r,!1),s),[t._v(" "+t._s(t.filters.oes&&t.filters.oes.title)+" "),a("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-down")])],1)]}}])},[a("v-list",t._l(t.availableOes,(function(e,s){return a("v-list-item",{key:s,attrs:{disabled:e.disabled},on:{click:function(a){return t.$refs.oesMenu.save(e)}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),a("v-spacer",{staticClass:"d-none d-md-block"}),a("v-col",[a("v-menu",{ref:"dateStartMenu",attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"white shadow-primary",attrs:{value:t.$moment(t.filters.dateStart).format("DD MMM YYYY"),label:"Начало периода","prepend-inner-icon":"mdi-calendar",readonly:"",outlined:"","hide-details":"auto",dense:t.$vuetify.breakpoint.smAndDown}},"v-text-field",r,!1),s))]}}])},[a("v-date-picker",{model:{value:t.filters.dateStart,callback:function(e){t.$set(t.filters,"dateStart",e)},expression:"filters.dateStart"}})],1)],1),a("v-col",[a("v-menu",{ref:"dateEndMenu",attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"white shadow-primary",attrs:{value:t.$moment(t.filters.dateEnd).format("DD MMM YYYY"),label:"Конец периода","prepend-inner-icon":"mdi-calendar",readonly:"",outlined:"",dense:t.$vuetify.breakpoint.smAndDown,"hide-details":"auto"}},"v-text-field",r,!1),s))]}}])},[a("v-date-picker",{model:{value:t.filters.dateEnd,callback:function(e){t.$set(t.filters,"dateEnd",e)},expression:"filters.dateEnd"}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"9"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("FilterGroupSelect",{attrs:{name:"Отрасли",items:t.availableIndustries,color:"primary",value:t.filters.industries},on:{input:function(e){return t.$store.commit("SET_FILTERS",Object.assign({},t.filters,{industries:e}))}}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("FilterGroupSelect",{attrs:{name:"Экономические показатели",items:t.availableEconomics,color:"secondary",value:t.filters.economics},on:{input:function(e){return t.$store.commit("SET_FILTERS",Object.assign({},t.filters,{economics:e}))}}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("FilterGroupSelect",{attrs:{name:"Неэкономические показатели",items:t.availableFeatures,color:"warning",value:t.filters.features},on:{input:function(e){return t.$store.commit("SET_FILTERS",Object.assign({},t.filters,{features:e}))}}})],1)],1),a("v-row",[a("v-col",[a("LineDiagram",{staticClass:"pa-3 rounded-lg shadow shadow-primary border-primary bg-white",attrs:{edit:!0}})],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"text-h4 font-weight-bold mb-6"},[t._v(" Сегодня "),a("div",{staticClass:"primary--text"},[t._v(t._s(t.$moment().format("DD MMMM YYYY")))])]),t._l(Array(2),(function(e,s){return a("div",{key:s,staticClass:"pa-3 rounded-lg shadow shadow-primary bg-white mb-6"},[a("div",{staticClass:"title text-truncate"},[t._v("Возможно веерное отключение электроэнергии")]),a("p",[t._v("Был замечен рост продаж обогревательных элементов. Ожидается повышение нагрузки...")]),a("div",{staticClass:"d-flex justify-space-between"},[a("v-chip",{staticClass:"shadow-primary",attrs:{label:"",color:"white",link:""}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-map-marker ")]),t._v(" Пермь ")],1),a("v-btn",{attrs:{to:"#",outlined:"",color:"primary"}},[t._v("Подробнее")])],1)])}))],2)],1),a("div",{staticClass:"text-h4 font-weight-bold mt-6 mb-3"},[t._v("Экономические показатели")]),a("v-row",[a("v-col",[a("MiniGraph",{attrs:{type:"bars",title:"Температура воздуха",subtitle:"в регионе",dataSet:t.temperatureSmall}})],1),a("v-col",[a("MiniGraph",{attrs:{type:"bars"}})],1),a("v-col",[a("MiniGraph",{attrs:{type:"horizontal-bars",title:"Коэффициенты корелляции",subtitle:"факторы для прогноза",dataSet:Object.entries(t.corellation).map((function(e){var a=e[0],s=e[1];return{date:t.mapFeat[a],value:s}})).sort((function(t,e){return e.value-t.value}))}})],1)],1),a("div",{staticClass:"text-h4 font-weight-bold mt-6 mb-3"},[t._v("Неэкономические показатели")]),a("v-row",[a("v-col",[a("MiniGraph",{attrs:{type:"bars"}})],1),a("v-col",[a("MiniGraph",{attrs:{type:"bars"}})],1),a("v-col",[a("MiniGraph",{attrs:{type:"horizontal-bars"}})],1)],1)],1)],1)},H=[],J=(a("d81d"),a("96cf"),a("1da1")),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-3 rounded-lg shadow shadow-primary border-primary bg-white mb-6"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"flex-grow-1"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"caption secondary--text"},[t._v(t._s(t.subtitle))])]),a("v-select",{staticClass:"flex-grow-0 secondary--text",attrs:{items:t.items,color:"secondary",outlined:"",dense:"",label:"Территории"}})],1),a(t.graphType,{tag:"component",attrs:{horizontal:t.horizontal,dataSet:t.dataSet}})],1)},K=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:t.horizontal?12:8}},[a(t.horizontal?"HorBars":"Bars",{ref:"bar",tag:"component",staticStyle:{position:"relative"},attrs:{options:t.options,chartData:t.chartData,loading:t.loading}})],1),t.horizontal?t._e():a("v-col",{attrs:{cols:"12",sm:t.horizontal?12:4}},[a("div",{staticClass:"pa-3 rounded-lg shadow shadow-primary"},[a("div",{staticClass:"title"},[t._v("Индекс")]),a("span",{staticClass:"text-h5",class:{"success--text":t.indx>0,"error--text":t.indx<=0}},[t._v(t._s(t.indx>0?"+":"-")+t._s(Math.abs(t.indx)))]),t._v(" "),a("span",[t._v("%")])])])],1)],1)},X=[],Z=(a("fb6a"),a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bars-canvas-container"},[a("transition",{attrs:{name:"fade"}},[t.loading?a("div",{staticClass:"bars-loader-spin"},[a("svg",{staticClass:"lds-dual-ring",staticStyle:{background:"none"},attrs:{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("circle",{attrs:{cx:"50",cy:"50",fill:"none","stroke-linecap":"round",r:"40","stroke-width":"4",stroke:"#E834B1","stroke-dasharray":"62.83185307179586 62.83185307179586",transform:"rotate(257.961 50 50)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})],1)])]):t._e()]),a("canvas",{ref:"canvas"})],1)}),tt=[],et=a("1fca"),at={extends:et["a"],mixins:[et["e"].reactiveProp],props:{options:Object,loading:Boolean},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{update:function(){this.renderChart(this.chartData,this.options)}}},st=at,rt=(a("2231"),Object(d["a"])(st,Z,tt,!1,null,null,null)),nt=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bars-canvas-container"},[a("transition",{attrs:{name:"fade"}},[t.loading?a("div",{staticClass:"bars-loader-spin"},[a("svg",{staticClass:"lds-dual-ring",staticStyle:{background:"none"},attrs:{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("circle",{attrs:{cx:"50",cy:"50",fill:"none","stroke-linecap":"round",r:"40","stroke-width":"4",stroke:"#E834B1","stroke-dasharray":"62.83185307179586 62.83185307179586",transform:"rotate(257.961 50 50)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})],1)])]):t._e()]),a("canvas",{ref:"canvas"})],1)},ot=[],lt={extends:et["c"],mixins:[et["e"].reactiveProp],props:{options:Object,loading:Boolean},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{update:function(){this.renderChart(this.chartData,this.options)}}},ct=lt,dt=(a("fcb0"),Object(d["a"])(ct,it,ot,!1,null,null,null)),ut=dt.exports,ft={components:{Bars:nt,HorBars:ut},props:{method:Number,horizontal:Boolean,dataSet:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,options:{aspectRatio:4/3,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}]}}}},computed:{chartData:function(){return{labels:(this.dataSet||[]).map((function(t){return t.date})),datasets:[{label:"Porteblenie",backgroundColor:this.$vuetify.theme.themes.light.secondary,borderColor:this.$vuetify.theme.themes.light.secondary,data:(this.dataSet||[]).map((function(t){return t.value})),type:this.horizontal?"horizontalBar":"bar"}]}},indx:function(){var t=this.dataSet&&this.dataSet.length>0?this.dataSet.slice(-1)[0].value/this.dataSet[0].value:0;return Math.round(1e3*t-1e3)/10}}},pt=ft,mt=a("62ad"),ht=a("0fd9"),vt=Object(d["a"])(pt,Q,X,!1,null,null,null),bt=vt.exports;f()(vt,{VCol:mt["a"],VRow:ht["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("Donuts",{ref:"donuts",staticStyle:{position:"relative"},attrs:{options:t.options,chartData:t.chartData,loading:t.loading}})],1),a("v-col",{staticClass:"align-end d-flex",attrs:{cols:"6"}},[a("div",{staticClass:"white pa-3 rounded-lg shadow shadow-primary"},t._l(t.chartData.labels,(function(e,s){return a("div",{key:s,staticClass:"d-flex align-center"},[a("div",{staticClass:"dot mr-1",style:{backgroundColor:t.chartData.datasets[0].backgroundColor[s]}}),a("div",{staticClass:"caption"},[t._v(t._s(e))])])})),0)])],1)],1)},yt=[],jt=a("2909"),wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bars-canvas-container"},[a("transition",{attrs:{name:"fade"}},[t.loading?a("div",{staticClass:"bars-loader-spin"},[a("svg",{staticClass:"lds-dual-ring",staticStyle:{background:"none"},attrs:{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("circle",{attrs:{cx:"50",cy:"50",fill:"none","stroke-linecap":"round",r:"40","stroke-width":"4",stroke:"#E834B1","stroke-dasharray":"62.83185307179586 62.83185307179586",transform:"rotate(257.961 50 50)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})],1)])]):t._e()]),a("canvas",{ref:"canvas"})],1)},_t=[],kt={extends:et["b"],mixins:[et["e"].reactiveProp],props:{options:Object,loading:Boolean},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{update:function(){this.renderChart(this.chartData,this.options)}}},xt=kt,Ct=(a("6882"),Object(d["a"])(xt,wt,_t,!1,null,null,null)),St=Ct.exports,Dt={components:{Donuts:St},props:{method:Number},data:function(){return{apiData:[],loading:!1,options:{aspectRatio:1,legend:{display:!1}}}},computed:{chartData:function(){return{labels:this.apiData.map((function(t){return t.date})),datasets:[{label:"Porteblenie",backgroundColor:this.apiData.map((function(t){return t.color})),data:this.apiData.map((function(t){return t.value})),type:"doughnut"}]}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.apiData=Object(jt["a"])(Array(3)).map((function(e,a){return{date:"Ярославская область",value:Math.ceil(200*Math.random()),color:[t.$vuetify.theme.themes.light.primary,t.$vuetify.theme.themes.light.secondary,t.$vuetify.theme.themes.light.error,t.$vuetify.theme.themes.light.success][Math.round(3*Math.random())]}}))}}},$t=Dt,Mt=(a("27d9"),Object(d["a"])($t,gt,yt,!1,null,null,null)),Et=Mt.exports;f()(Mt,{VCol:mt["a"],VRow:ht["a"]});var Ot={props:{type:String,dataSet:Array,title:String,subtitle:String,value:Array,items:Array},components:{DonutPie:Et,BarsChart:bt},computed:{graphType:function(){var t="BarsChart";switch(this.type){case"bars":case"horizontal-bars":t="BarsChart";break;case"donut":t="DonutPie";break;default:break}return t},horizontal:function(){return"horizontal-bars"===this.type}}},Vt=Ot,zt=a("b974"),At=Object(d["a"])(Vt,W,K,!1,null,null,null),Bt=At.exports;f()(At,{VSelect:zt["a"]});var Tt={components:{MiniGraph:Bt},data:function(){return{tempApi:"/api/data/GetWeather",availableOes:[{title:"ОЭС Урала",value:"ural",disabled:!1},{title:"ОЭС Юга",value:"south",disabled:!0},{title:"ОЭС Востока",value:"east",disabled:!0},{title:"ОЭС Центра",value:"center",disabled:!0},{title:"ОЭС Северо-Запада",value:"nord-west",disabled:!0},{title:"ОЭС Сибири",value:"sibir",disabled:!0},{title:"ОЭС Средней Волги",value:"mid-volga",disabled:!0}],availableIndustries:[{title:"Нефтедобыча",color:"green"},{title:"Металлургия",color:"green"}],availableEconomics:[{title:"Инвестиции",color:"investment"},{title:"ВРП",color:"vrp"}],availableFeatures:[{title:"Освещённость",color:"luminous"},{title:"Температура",color:"temperature"}],corellation:{temp:1,foodprice:.0060233219967535745,sale:.0013977712738945324,night_minutes:.8904449120968831,covid:.09484649644344838,holidays:.034676430122137655,salary_arrears:.017900551935658086},mapFeat:{temp:"Температура",foodprice:"ИПЦ",sale:"Розничные продажи",night_minutes:"Продолж. темн. вр.сут.",covid:"Режим смоизоляции",holidays:"Празд и вых. дни",salary_arrears:"Задолженность по з.п."}}},computed:Object(g["a"])(Object(g["a"])({},Object(y["b"])(["temperatureSmall","filters"])),{},{filters:{set:function(t){this.$store.commit("SET_FILTERS",t)},get:function(){return this.$store.state.filters}}}),created:function(){var t;null!==(t=this.filters.oes)&&void 0!==t&&t.value||this.$set(this.filters,"oes",this.availableOes[0]),this.filters.dateEnd||this.$set(this.filters,"dateEnd",this.$moment().format("YYYY-MM-DD")),this.filters.dateStart||this.$set(this.filters,"dateStart",this.$moment().subtract(1,"M").format("YYYY-MM-DD")),this.callApi("temperature")},methods:{callApi:function(t){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function a(){var s,r,n,i,o,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s="",r="",n=null,a.t0=t,a.next="temperature"===a.t0?6:9;break;case 6:return s=e.tempApi,r="SET_TEMPERATURE_SMALL",a.abrupt("break",10);case 9:return a.abrupt("break",10);case 10:return i="http://91.243.84.18"+s,o={startDate:e.filters.dateStart,endDate:e.filters.dateEnd,step:"mounth"},a.next=14,e.$axios.get(i,{params:o});case 14:l=a.sent,console.log(l);try{n=l.data.x.map((function(t,e){return{date:t,value:l.data.y[e]}}))}catch(c){console.log(c)}e.$store.commit(r,n);case 18:case"end":return a.stop()}}),a)})))()}}},Ft=Tt,Yt=a("cc20"),Lt=a("a523"),Rt=a("2e4b"),Pt=a("8860"),It=a("da13"),Nt=a("5d23"),Gt=a("e449"),Ut=a("8654"),qt=Object(d["a"])(Ft,q,H,!1,null,null,null),Ht=qt.exports;f()(qt,{VBtn:x["a"],VChip:Yt["a"],VCol:mt["a"],VContainer:Lt["a"],VDatePicker:Rt["a"],VIcon:B["a"],VList:Pt["a"],VListItem:It["a"],VListItemTitle:Nt["b"],VMenu:Gt["a"],VRow:ht["a"],VSpacer:D["a"],VTextField:Ut["a"]}),s["a"].use(U["a"]);var Jt=[{path:"/",name:"Home",component:Ht}],Wt=new U["a"]({mode:"history",base:"/",routes:Jt}),Kt=Wt;s["a"].use(y["a"]);var Qt=new y["a"].Store({state:{filters:{},energy:null,loading:!1,temperatureSmall:null},mutations:{SET_FILTERS:function(t,e){t.filters=e},SET_ENERGY:function(t,e){t.energy=e},SET_LOADING:function(t,e){t.loading=e},SET_TEMPERATURE_SMALL:function(t,e){t.temperatureSmall=e}},actions:{},modules:{}}),Xt=a("f309"),Zt=a("2992"),te=a.n(Zt);s["a"].use(Xt["a"]);var ee=new Xt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#8094F1",secondary:"#43ACD2",accent:"#82B1FF",error:"#F87C92",info:"#2196F3",success:"#1DABAD",warning:"#E8BE87"}}},lang:{locales:{ru:te.a},current:"ru"}}),ae=a("2ef0"),se=a("c1df"),re=a.n(se),ne=a("bc3a"),ie=a.n(ne),oe=(a("d5e8"),a("5363"),a("f572"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8",lg:"9"}},[a("Lines",{ref:"line",staticStyle:{position:"relative"},attrs:{options:t.options,chartData:t.chartData,loading:t.loading}})],1),a("v-col",{staticClass:"d-flex flex-column justify-start",attrs:{cols:"12",sm:"4",lg:"3"}},[a("div",{staticClass:"title"},[t._v("Показать/скрыть")]),a("v-switch",{attrs:{label:"COVID","hide-details":"auto"},model:{value:t.covid,callback:function(e){t.covid=e},expression:"covid"}}),a("v-switch",{attrs:{value:"mounth","hide-details":"auto",label:"Детализация день / месяц"},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}}),t._l(t.chartData.datasets,(function(e,s){return a("v-checkbox",{key:s,attrs:{label:e.label,value:e.name,"hide-details":"auto"},model:{value:t.showedDatasets,callback:function(e){t.showedDatasets=e},expression:"showedDatasets"}})})),t.edit?a("v-btn",{staticClass:"mt-4",attrs:{color:"primary",outlined:""},on:{click:function(e){t.customize=!t.customize}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-tune ")]),t._v(" Изменить ")],1):t._e()],2)],1),a("v-dialog",{attrs:{width:"100%",fullscreen:t.$vuetify.breakpoint.smAndDown,scrollable:""},model:{value:t.customize,callback:function(e){t.customize=e},expression:"customize"}},[a("Customize",{attrs:{open:t.customize},on:{"update:open":function(e){t.customize=e}}})],1)],1)}),le=[],ce=(a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bars-canvas-container"},[a("transition",{attrs:{name:"fade"}},[t.loading?a("div",{staticClass:"bars-loader-spin"},[a("svg",{staticClass:"lds-dual-ring",staticStyle:{background:"none"},attrs:{width:"200px",height:"200px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("circle",{attrs:{cx:"50",cy:"50",fill:"none","stroke-linecap":"round",r:"40","stroke-width":"4",stroke:"#E834B1","stroke-dasharray":"62.83185307179586 62.83185307179586",transform:"rotate(257.961 50 50)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}})],1)])]):t._e()]),a("canvas",{ref:"canvas"})],1)}),de=[],ue={extends:et["d"],mixins:[et["e"].reactiveProp],props:{options:Object,loading:Boolean},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{update:function(){this.renderChart(this.chartData,this.options)}}},fe=ue,pe=(a("9b25"),Object(d["a"])(fe,ce,de,!1,null,null,null)),me=pe.exports,he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-3 rounded-lg shadow shadow-primary border-primary bg-white fill-height"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"auto"}},[a("v-btn",{attrs:{link:"",text:"",color:"primary"},on:{click:function(e){return t.$emit("update:open",!1)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left")]),t._v(" Назад ")],1)],1),a("v-col",[a("div",{staticClass:"pa-3 rounded-lg shadow shadow-primary border-primary"},[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"auto"}},[a("v-menu",{ref:"statMenu",attrs:{"offset-y":"","return-value":t.stat},on:{"update:returnValue":function(e){t.stat=e},"update:return-value":function(e){t.stat=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"shadow-primary",attrs:{color:"primary",dark:"",outlined:""}},"v-btn",r,!1),s),[t._v(" "+t._s(t.stat.title)+" "),a("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-down")])],1)]}}])},[a("v-list",t._l(t.availableStats,(function(e,s){return a("v-list-item",{key:s,attrs:{disabled:e.disabled},on:{click:function(a){return t.$refs.statMenu.save(e)}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),a("v-col",{attrs:{cols:"12",md:"auto"}},[a("div",{staticClass:"subtitle"},[t._v("Всего за период:")]),a("div",[a("span",{staticClass:"text-h3"},[t._v(t._s(t.total))]),t._v(" "),a("span",[t._v("млн.Квт*час")])])]),a("v-col",{attrs:{cols:"12",md:"auto"}},[a("div",{staticClass:"subtitle"},[t._v("Изменение за период:")]),a("div",{},[a("span",{staticClass:"text-h3",class:{"success--text":t.indx>0,"error--text":t.indx<=0}},[t._v(t._s(t.indx>0?"+":"-")+t._s(Math.abs(t.indx)))]),t._v(" "),a("span",[t._v("%")])])])],1)],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("LineDiagram",{staticClass:"pa-3 rounded-lg shadow shadow-primary border-primary bg-white"})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("FilterGroupSelect",{attrs:{name:"Выбранные показатели",items:t.availableFilters,color:"primary"},model:{value:t.allFilters,callback:function(e){t.allFilters=e},expression:"allFilters"}})],1)],1),a("v-row",[a("v-col",[a("div",{staticClass:"title"},[t._v("Регулируемые параметры")]),a("div",{staticClass:"d-flex"},t._l(t.customFilters,(function(e,s){return a("div",{key:s,staticStyle:{"min-width":"16rem"}},[a("v-subheader",{staticClass:"pl-0"},[t._v(" "+t._s(e.title)+" ")]),a("v-slider",{attrs:{"thumb-label":""},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1)})),0)])],1)],1)},ve=[],be=(a("13d5"),{props:{open:Boolean,availableFilters:Array},data:function(){return{stat:null,availableStats:[{title:"Электроэнергия",value:"electroenergy"}],customFilters:[]}},computed:Object(g["a"])(Object(g["a"])({},Object(y["b"])(["filters","energy"])),{},{total:function(){return Math.round(this.energy.map((function(t){return t.value})).reduce((function(t,e){return t+e}),0))},indx:function(){var t=this.energy&&this.energy.length>0?this.energy.slice(-1)[0].value/this.energy[0].value:0;return Math.round(1e3*t-1e3)/10},allFilters:{set:function(t){},get:function(){var t=[];for(var e in this.filters)if(!["dateStart","dateEnd","oes"].includes(e)){var a=this.filters[e];t.push.apply(t,Object(jt["a"])(a))}return t}}}),watch:{allFilters:{handler:function(){this.customFilters=Object(jt["a"])(this.allFilters)}}},created:function(){this.stat=this.availableStats[0]}}),ge=be,ye=a("ba0d"),je=a("e0c7"),we=Object(d["a"])(ge,he,ve,!1,null,null,null),_e=we.exports;f()(we,{VBtn:x["a"],VCol:mt["a"],VIcon:B["a"],VList:Pt["a"],VListItem:It["a"],VListItemTitle:Nt["b"],VMenu:Gt["a"],VRow:ht["a"],VSlider:ye["a"],VSubheader:je["a"]});var ke={components:{Lines:me,Customize:_e},props:{method:Number,edit:Boolean},data:function(){return{apiData:[],loading:!1,options:{aspectRatio:16/9,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1},offset:!1}]}},customize:!1,availableDatasets:{electroenergy:"Энергопотребление"},showedDatasets:[],step:null,covid:!0}},computed:Object(g["a"])(Object(g["a"])({},Object(y["b"])(["filters","energy"])),{},{chartData:function(){var t=this;return{labels:(this.energy||[]).map((function(t){return t.date})),datasets:[{label:this.availableDatasets.electroenergy,name:"electroenergy",backgroundColor:"transparent",borderColor:this.$vuetify.theme.themes.light.success,data:(this.energy||[]).map((function(t){return t.value})),type:"line",showLine:this.showedDatasets.includes("electroenergy")},{label:"Сегодня",backgroundColor:this.$vuetify.theme.themes.light.secondary,borderColor:this.$vuetify.theme.themes.light.secondary,data:(this.energy||[]).map((function(e){var a=Math.max.apply(Math,Object(jt["a"])(t.energy.map((function(t){return t.value})))),s=null;return t.$moment(e.date).format("DD-MM-YYYY")===t.$moment().format("DD-MM-YYYY")&&(s=a),s})),barThickness:3,type:"bar"}]}}}),watch:{"filters.dateStart":{handler:function(t){this.calcStep(),this.getData()}},"filters.dateEnd":{handler:function(t){this.calcStep(),this.getData()}},step:{handler:function(){this.getData()}},covid:{handler:function(){this.getData()}}},created:function(){this.energy?!this.showedDatasets.includes("electroenergy")&&this.showedDatasets.push("electroenergy"):this.getData()},methods:{getData:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var a,s,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=[],s="".concat("http://91.243.84.18","/api/data/getprediction"),r={startDate:t.filters.dateStart,endDate:t.filters.dateEnd,step:t.step,covidEnabled:t.covid},e.next=5,t.$axios.get(s,{params:r});case 5:n=e.sent,console.log(n);try{a=n.data.x.map((function(t,e){return{date:t,value:n.data.y[e]}})),!t.showedDatasets.includes("electroenergy")&&t.showedDatasets.push("electroenergy")}catch(i){console.log(i)}t.$store.commit("SET_ENERGY",a);case 9:case"end":return e.stop()}}),e)})))()},calcStep:function(){var t=null;return this.filters.dateStart&&this.filters.dateEnd&&Math.abs(this.$moment(this.filters.dateStart).diff(this.$moment(this.filters.dateEnd),"months"))>11&&(t="mounth"),this.step=t,t}}},xe=ke,Ce=a("ac7c"),Se=a("169a"),De=a("b73d"),$e=Object(d["a"])(xe,oe,le,!1,null,null,null),Me=$e.exports;f()($e,{VBtn:x["a"],VCheckbox:Ce["a"],VCol:mt["a"],VDialog:Se["a"],VIcon:B["a"],VRow:ht["a"],VSwitch:De["a"]});var Ee=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"pa-3 rounded-lg shadow-primary bg-white",class:(t={},t["border-"+e.color]=!0,t)},[s("v-select",{attrs:{items:e.items,label:e.name,multiple:"","return-object":"","item-text":"title",outlined:"",dense:"","item-color":e.color,"hide-details":"auto"},scopedSlots:e._u([{key:"selection",fn:function(t){var a=t.index;return[0===a?s("span",[e._v("Выбрано: "+e._s(e.selected.length))]):e._e()]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),s("v-chip-group",{attrs:{column:""}},e._l(e.selected,(function(t,a){return s("v-chip",{key:a,attrs:{label:"",close:"",color:e.color},on:{"click:close":function(){return e.selected=e.selected.filter((function(e){return e!==t}))}}},[e._v(" "+e._s(t.title)+" ")])})),1)],1)},Oe=[],Ve={props:{name:String,value:Array,items:Array,color:String},computed:{selected:{set:function(t){this.$emit("input",t)},get:function(){return this.value}}},methods:{del:function(t){console.log(t)}}},ze=Ve,Ae=a("ef9a"),Be=Object(d["a"])(ze,Ee,Oe,!1,null,null,null),Te=Be.exports;f()(Be,{VChip:Yt["a"],VChipGroup:Ae["a"],VSelect:zt["a"]}),s["a"].config.productionTip=!1;var Fe=ie.a.create({});Fe.interceptors.request.use((function(t){return Qt.commit("SET_LOADING",!0),t}),(function(t){return Promise.reject(t)})),Fe.interceptors.response.use((function(t){return Qt.commit("SET_LOADING",!1),t}),(function(t){return Promise.reject(t)})),re.a.locale("ru"),s["a"].prototype.$lodash={merge:ae["merge"]},s["a"].prototype.$axios=Fe,s["a"].prototype.$moment=re.a,s["a"].component("LineDiagram",Me),s["a"].component("FilterGroupSelect",Te),new s["a"]({router:Kt,store:Qt,vuetify:ee,render:function(t){return t(N)}}).$mount("#app")},"5b19":function(t,e,a){},6882:function(t,e,a){"use strict";a("1416")},"7a92":function(t,e,a){},"7fe7":function(t,e,a){},"9b25":function(t,e,a){"use strict";a("7a92")},cf05:function(t,e,a){t.exports=a.p+"img/logo.9db76ee3.png"},f572:function(t,e,a){},fcb0:function(t,e,a){"use strict";a("1ee8")}});
//# sourceMappingURL=app.41ec31a0.js.map