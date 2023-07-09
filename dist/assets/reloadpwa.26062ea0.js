import{r as B,q as L,a as j,k as P,R as d,S as p,_ as h,$ as E,Z as k,u as l,U as F,l as S,Y as V,aa as W,F as b,ab as O}from"./vue.78b138a2.js";import{_ as U,a9 as q,aa as z,f as T,g as A}from"./index.a49a4610.js";import{g as I,t as M}from"./localRequestFile.11b20013.js";import{_ as Y}from"./Time.f56cc638.js";import"./init.89db40ad.js";import"./use-locale.d750d564.js";function Z(m={}){const{immediate:u=!1,onNeedRefresh:a,onOfflineReady:t,onRegistered:c,onRegisteredSW:f,onRegisterError:_}=m;let e,r,n;const g=async(y=!0)=>{await r,await(n==null?void 0:n())};async function R(){if("serviceWorker"in navigator){const{Workbox:y}=await U(()=>import("./workbox-window.prod.es5.e0cc53cf.js"),[]);e=new y("/sw.js",{scope:"/",type:"classic"}),n=async()=>{await(e==null?void 0:e.messageSkipWaiting())};{let s=!1;const v=()=>{s=!0,e==null||e.addEventListener("controlling",o=>{o.isUpdate&&window.location.reload()}),a==null||a()};e.addEventListener("installed",o=>{typeof o.isUpdate>"u"?typeof o.isExternal<"u"?o.isExternal?v():!s&&(t==null||t()):o.isExternal?window.location.reload():!s&&(t==null||t()):o.isUpdate||t==null||t()}),e.addEventListener("waiting",v),e.addEventListener("externalwaiting",v)}e.register({immediate:u}).then(s=>{f?f("/sw.js",s):c==null||c(s)}).catch(s=>{_==null||_(s)})}}return r=R(),g}function $(m={}){const{immediate:u=!0,onNeedRefresh:a,onOfflineReady:t,onRegistered:c,onRegisteredSW:f,onRegisterError:_}=m,e=B(!1),r=B(!1);return{updateServiceWorker:Z({immediate:u,onNeedRefresh(){e.value=!0,a==null||a()},onOfflineReady(){r.value=!0,t==null||t()},onRegistered:c,onRegisteredSW:f,onRegisterError:_}),offlineReady:r,needRefresh:e}}const G={key:0,class:"pwa-toast",role:"alert"},H={key:0},J={key:1},K={key:2,style:{"font-size":"10px"}},Q={style:{display:"flex",gap:"4px 8px","flex-wrap":"wrap","justify-content":"flex-start"}},X={style:{"font-size":"10px","margin-left":"2px"}},ee=L({__name:"reloadpwa",setup(m){const{offlineReady:u,needRefresh:a,updateServiceWorker:t}=$();async function c(){u.value=!1,a.value=!1}async function f(){c()}async function _(){t()}const e="1.0.0",r=["info","success"],n=j({version:"",time:0,content:"",type:r[1]}),{version:g,time:R,content:y,type:s}=P(n);function v(){return I(M("/json/version.json")).then(o=>{if(o[0].data){let i=Object.values(o[0].data);i.sort((w,x)=>w.time-x.time),z(i[i.length-1].version,e)===1?n.type=r[1]:n.type=r[0],n.version=i[i.length-1].version,n.time=i[i.length-1].time,n.content=i[i.length-1].content}}),u.value||a.value}return(o,i)=>{const C=Y,w=T,x=q;return v()?(d(),p("div",G,[h(" \u7248\u672C\u66F4\u65B0 "),E(x,{title:"\u76EE\u524D\u7248\u672C"+l(e),style:{width:"100%",margin:"16px","text-align":"start"},"show-icon":!1,onClose:c},{action:k(()=>[F("div",Q,[E(w,{strong:"",secondary:"",onClick:f},{default:k(()=>[S("\u5FFD\u7565\u672C\u6B21")]),_:1}),l(a)?(d(),V(w,{key:0,strong:"",secondary:"",type:l(s),onClick:_},{default:k(()=>[S("\u524D\u5F80\u7248\u672C"),F("span",X,W(l(g)),1)]),_:1},8,["type"])):h("v-if",!0)])]),default:k(()=>[l(u)?(d(),p("span",H," \u5E94\u7528\u5DF2\u7ECF\u51C6\u5907\u597D\u79BB\u7EBF\u5DE5\u4F5C\uFF01 ")):(d(),p("span",J," \u5E94\u7528\u53D1\u73B0\u4E86\u65B0\u7684\u5185\u5BB9\u7B49\u5F85\u4F60\u66F4\u65B0\uFF01 ")),l(g)?(d(),p("div",K,[F("ul",null,[(d(!0),p(b,null,O(l(y),(D,N)=>(d(),p("li",{key:N},W(D),1))),128))]),E(C,{time:l(R)},null,8,["time"])])):h("v-if",!0)]),_:1},8,["title"])])):h("v-if",!0)}}});const re=A(ee,[["__file","F:/wwwroot/ayuanzy/vue-app/src/components/reloadpwa.vue"]]);export{re as default};