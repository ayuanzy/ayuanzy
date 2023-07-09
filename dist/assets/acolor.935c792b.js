var w=Object.defineProperty;var H=(i,t,e)=>t in i?w(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var a=(i,t,e)=>(H(i,typeof t!="symbol"?t+"":t,e),e);import{q as S,ac as y,r as p,i as x,z as b,O as L,R as _,S as f,U as u,B as M,ah as E,a6 as I,a7 as C,u as g,W as k,$ as m,Z as v,J as N,F as O,ab as U,ad as A,aa as T}from"./vue.78b138a2.js";import{g as B,t as G}from"./localRequestFile.11b20013.js";import{g as D,bq as V,am as X,bw as F}from"./index.a49a4610.js";import"./init.89db40ad.js";class j{constructor(t,e){a(this,"scroll",null);a(this,"list",null);a(this,"background",null);a(this,"ITEM_HEIGHT",150);a(this,"COUNT",0);a(this,"MAX_COUNT",0);a(this,"switchScrollScale",null);a(this,"TICK",!1);a(this,"isvirtual",!0);a(this,"virtualData",[]);a(this,"scacheData",[]);a(this,"scontinueload",!0);a(this,"domList",null);a(this,"domBackground",null);a(this,"vmessage",null);a(this,"smessage",null);a(this,"sloaddata",null);this.scroll=t.scroll,this.list=t.list,this.isvirtual=e==null?void 0:e.isvirtual,this.ITEM_HEIGHT=(e==null?void 0:e.itemheight)||this.ITEM_HEIGHT,this.COUNT=this.virtualData.length,this.MAX_COUNT=Math.ceil(this.scroll.clientHeight/this.ITEM_HEIGHT),this.switchScrollScale=[0,this.MAX_COUNT*this.ITEM_HEIGHT]}_getLineHeight(t){return t*this.ITEM_HEIGHT}_setBackgroundHeight(){this.COUNT=this.virtualData.length,this.isvirtual&&typeof this.domBackground=="function"&&this.domBackground(this._getListHeight(this.ITEM_HEIGHT,this.COUNT)+"px")}_getListHeight(t,e){return t*e}_switchScroll(t){return t>this.switchScrollScale[0]&&t<this.switchScrollScale[1]}_changeSwitchScale(t,e,l){const r=Math.ceil(t)*this.ITEM_HEIGHT,s=Math.floor(l)*this.ITEM_HEIGHT;this.switchScrollScale=[r,s]}_getStartIndex(t){let e=0,l=this.virtualData.length-1;for(;e<l;){const r=Math.floor((l+e)/2),{top:s}=this.virtualData[r];if(t>=s&&t<s+this.ITEM_HEIGHT){e=r;break}else t>=s+this.ITEM_HEIGHT?e=r+1:t<s&&(l=r-1)}return e<0?0:e}_beforeIndex(t){return t-this.MAX_COUNT<0?0:t-this.MAX_COUNT}_afterIndex(t){return t+this.MAX_COUNT>this.COUNT?this.COUNT:t+this.MAX_COUNT}_changeListTop(t,{top:e}){return e}_results(t){let e=0,l=[];for(;e<t.length;)l.push(t[e].text),e++;return l}_checkScrollView(){return this.list.offsetHeight<this.scroll.offsetHeight}async _vpromise(t,...e){return await t(...e)}_readChunkCacheData(){let t=this.scacheData.splice(0,this.MAX_COUNT*2);if(t.length)return this.isvirtual&&(this.addListData(t),this._setBackgroundHeight()),typeof this.smessage=="function"&&!this.isvirtual&&this._vpromise(this.smessage,t).then(()=>{this._checkScrollView()&&this.loadData(!0)}),!0}get queryCacheAndVirtualData(){return[this.virtualData,...this.scacheData]}addCacheData(t){return this.scacheData.push(...t)}fullCacheData(t){return this.scacheData=t}setSContinueLoadEnd(){this.scontinueload=!1}addListData(t){let e=0;for(;e<t.length;)this.virtualData.push({text:t[e],top:this._getLineHeight(this.virtualData.length)}),e++}_getScrollTop(){return Math.floor(this.scroll.scrollHeight-this.scroll.scrollTop)-400}_getScrollViewHeight(){return this._getScrollTop()<=this.scroll.clientHeight}loadData(t=!1){(this._getScrollViewHeight()||t)&&(this.scacheData.length>0?this._readChunkCacheData()&&this.isvirtual&&this.rendDataList():typeof this.sloaddata=="function"&&this.scontinueload===!0&&this._vpromise(this.sloaddata,this).then(()=>{this._readChunkCacheData()&&this.isvirtual&&this.rendDataList()}))}rendDataList(){if(!this.TICK&&this.isvirtual){this.TICK=!0,window.requestAnimationFrame(()=>{this.TICK=!1});let t=this.scroll.scrollTop;if(!this._switchScroll(t)){let e=this._getStartIndex(t),l=this.virtualData.slice(this._beforeIndex(e),e),r=this.virtualData.slice(e,e+this.MAX_COUNT),s=this.virtualData.slice(this._afterIndex(e),this._afterIndex(e)+this.MAX_COUNT),c=this._changeListTop(e,l[0]||this.virtualData[e]);this._changeSwitchScale(e,this._beforeIndex(e),this._afterIndex(e));let o=[...l,...r,...s];return typeof this.vmessage=="function"&&(typeof this.domList=="function"&&this.domList(`${c}px`),this.vmessage(this._results(o))),o}}}}const q=j,$=i=>(I("data-v-e904d6b5"),i=i(),C(),i),z={id:"scroll",class:"scroll"},K=$(()=>u("div",{id:"background"},null,-1)),J=S({__name:"ascroll",props:{sloaddata:{type:Function,default:null},vmessage:{type:Function,default:null},smessage:{type:Function,default:null},itemheight:{type:Number,default:50},isvirtual:{type:Boolean,default:!0}},setup(i){const t=i;y(h=>({"e904d6b5-backgroundhei":g(l),"e904d6b5-listtop":g(r)}));let e=null;const l=p("0px"),r=p("0px"),s=x("scrollevent");function c(h){l.value=h}function o(h){r.value=h}function n(h){e.scroll=h,e.loadData(),t.isvirtual&&e.rendDataList()}s.on("scroll",n);let d={itemheight:t.itemheight,isvirtual:t.isvirtual};return b(()=>{e=new q({scroll:document.querySelector("#ascroll .n-scrollbar-container"),list:document.querySelector("#list")},d),e.sloaddata=t.sloaddata,e.vmessage=t.vmessage,e.smessage=t.smessage,e.domBackground=c,e.domList=o,e.loadData()}),L(()=>{s.removeListener("scroll",n)}),(h,tt)=>(_(),f("div",z,[K,u("div",{class:E([t.isvirtual?"position":""]),id:"list"},[M(h.$slots,"default",{},void 0,!0)],2)]))}});const R=D(J,[["__scopeId","data-v-e904d6b5"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/ascroll.vue"]]),P=i=>(I("data-v-c7a0ae04"),i=i(),C(),i),Q={id:"acolor"},W=P(()=>u("div",{style:{height:"200px"}},"hi",-1)),Z={class:"a-color-text"},Y=S({__name:"acolor",setup(i){const t=k([]);function e(s,c){let o=F().diff(s.scacheData,c);o&&o.new_val?(s.fullCacheData(Object.values(o.new_val)),console.log(o)):(s.fullCacheData(c),console.log(o))}function l(s){t.value=[...t.value,...s]}function r(s){return new Promise((c,o)=>{B(G("/json/color/chinacolor.json")).then(function(n){let d=n[0];n&&d&&(s.setSContinueLoadEnd(),e(s,d),V("color_list_chinacolor.json",JSON.parse(JSON.stringify(d)),"public")),console.log(s),c("ok1")}),X("color_list_chinacolor.json","public").then(function(n){n&&n.data&&(e(s,n.data),s.setSContinueLoadEnd()),console.log(s),c("ok2")})})}return(s,c)=>(_(),f("div",Q,[W,m(R,{sloaddata:r,isvirtual:!1,smessage:l,itemheight:110},{default:v(()=>[m(N,{name:"list",tag:"ul",class:"a-color-ul"},{default:v(()=>[(_(!0),f(O,null,U(g(t),(o,n)=>(_(),f("li",{key:o,class:"a-color-li"},[u("span",{class:"a-color-li a-color-li-h",style:A({backgroundColor:o.hex})},null,4),u("ul",Z,[u("li",null,T(o.name),1),u("li",null,T(o.hex),1)])]))),128))]),_:1})]),_:1})]))}});const ot=D(Y,[["__scopeId","data-v-c7a0ae04"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/theme/acolor/acolor.vue"]]);export{ot as default};
