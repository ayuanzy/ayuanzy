import{_ as f,s as x,bx as b,am as I,an as A,f as B,g as k}from"./index.a49a4610.js";import{q as R,V as g,W as h,z as V,R as j,S as E,U as i,$ as c,u as n,Z as F,l as L}from"./vue.78b138a2.js";import{g as U,t as m}from"./localRequestFile.11b20013.js";import"./init.89db40ad.js";const C={style:{position:"relative"}},D={style:{margin:"10px 0px"}},K={style:{display:"flex","flex-wrap":"wrap",gap:"8px"}},N={style:{margin:"10px auto 0 auto",display:"flex","justify-content":"center","align-items":"center"}},O={style:{width:"320px",height:"calc(160px * 2)",display:"flex","justify-content":"center","align-items":"center"}},P=R({__name:"awallpaper",setup(T){const y=g({loader:()=>f(()=>import("./aupload.dc299d10.js"),["assets/aupload.dc299d10.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/Add.fb8c3934.js","assets/Image.354ccd71.js","assets/utils.e2a66002.js","assets/use-locale.d750d564.js","assets/Popover.62fea1d1.js","assets/Follower.75107c8b.js","assets/cssr.4e262cfb.js","assets/use-compitable.f5e6d299.js","assets/Eye.b0b6abaa.js","assets/Space.cf1084ce.js"]),delay:0}),d=g({loader:()=>f(()=>import("./aimage.84f027a5.js"),["assets/aimage.84f027a5.js","assets/vue.78b138a2.js","assets/Image.354ccd71.js","assets/utils.e2a66002.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/use-locale.d750d564.js","assets/Popover.62fea1d1.js","assets/Follower.75107c8b.js","assets/cssr.4e262cfb.js","assets/use-compitable.f5e6d299.js","assets/aimage.9a59af26.css"]),delay:0}),s=x(),_=[],o=h([]),p=h([]);async function v(){o.value.length===0&&U(m("/json/img/wallpaper.json")).then(a=>{if(a&&a[0]){let t=[];for(let e=0;e<a[0].length;e++)t.push(m(a[0][e])[0]);t.length&&(o.value.length?o.value=[...o.value[0],t]:o.value=t)}}).catch(a=>{console.log(a)})}async function r(){v(),w()}async function w(){b("wallpaper").then(a=>{if(a){let t=a.filter(e=>!_.some(l=>l===e));t.length&&I(t[0],"wallpaper").then(e=>{if(_.push(t[0]),e&&e.data)for(let l=0;l<e.data.length;l++)p.value=[...p.value,{url:A(e.data[l].file),id:e.data[l].id,batchId:e.data[l].batchId}]})}})}function u(a,t,e,l){console.log(e),a===0?l?(s.setBackgroundImg(e.url),s.setBackgroundKey(e.batchId,e.id)):(s.setBackgroundImg(e.url),s.setBackgroundKey("")):a===1&&console.log("down")}return V(()=>{r()}),(a,t)=>{const e=B;return j(),E("div",C,[i("div",D,[c(n(y))]),i("div",K,[c(n(d),{list:n(o),onUpdateHandle:u},null,8,["list"]),c(n(d),{list:n(p),onUpdateHandle:u,diy:!0},null,8,["list"])]),i("div",N,[i("div",O,[c(e,{quaternary:"",focusable:!1,style:{"margin-top":"auto"},onClick:r},{default:F(()=>[L("\u52A0\u8F7D\u66F4\u591A")]),_:1})])])])}}});const G=k(P,[["__scopeId","data-v-c948179e"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/theme/awallpaper/awallpaper.vue"]]);export{G as default};
