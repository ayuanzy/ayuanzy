import{c as F,a as x,u as w,b as I,l as M,d as R,p as P,_ as S,s as L,e as V,N as A,f as E,g as y}from"./index.a49a4610.js";import{q as _,f as g,A as T,R as l,S as u,U as c,V as D,i as N,a as W,k as j,_ as b,$ as r,Z as i,Y as z,a3 as H,a0 as O,u as d,a4 as q,a5 as K,F as U,a6 as Y,a7 as Z}from"./vue.78b138a2.js";import{c as G,_ as J}from"./app.4a71e9dc.js";import{_ as Q}from"./Space.cf1084ce.js";import"./init.89db40ad.js";const X=F("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),x("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ee={position:P,inverted:Boolean,bordered:{type:Boolean,default:!1}},oe=_({name:"LayoutHeader",props:Object.assign(Object.assign({},w.props),ee),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=I(e),h=w("Layout","-layout-header",X,M,e,o),m=g(()=>{const{common:{cubicBezierEaseInOut:p},self:t}=h.value,a={"--n-bezier":p};return e.inverted?(a["--n-color"]=t.headerColorInverted,a["--n-text-color"]=t.textColorInverted,a["--n-border-color"]=t.headerBorderColorInverted):(a["--n-color"]=t.headerColor,a["--n-text-color"]=t.textColor,a["--n-border-color"]=t.headerBorderColor),a}),s=n?R("layout-header",g(()=>e.inverted?"a":"b"),m,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:m,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),T("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ne=c("path",{d:"M10 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z",fill:"currentColor"},null,-1),te=[ne],ae=_({name:"BlurCircularRound",render:function(o,n){return l(),u("svg",se,te)}}),re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},ce=c("g",{fill:"none"},[c("path",{d:"M7.456 2a6 6 0 1 1-5.406 8.605a.5.5 0 0 1 .36-.71c1.276-.231 3.278-.937 4.078-3.07c.563-1.5.512-3.015.283-4.23a.5.5 0 0 1 .475-.591C7.316 2 7.386 2 7.456 2z",fill:"currentColor"})],-1),le=[ce],ie=_({name:"WeatherMoon16Filled",render:function(o,n){return l(),u("svg",re,le)}}),de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_e=c("g",{fill:"none"},[c("path",{d:"M12.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5zm6.28 2.22a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0zM6.59 13a5.5 5.5 0 1 1 10.819 0h3.841a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h3.84zm.16 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75zm4 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5zM4.97 4.97a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 1 1-1.06 1.061L4.97 6.031a.75.75 0 0 1 0-1.061z",fill:"currentColor"})],-1),ue=[_e],me=_({name:"WeatherSunnyLow24Filled",render:function(o,n){return l(),u("svg",de,ue)}}),pe={class:"dock-content"},he=_({__name:"adock",setup(e){const o=D({loader:()=>S(()=>import("./amenu.933be45c.js"),["assets/amenu.933be45c.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/app.4a71e9dc.js","assets/Space.cf1084ce.js","assets/amenu.6794a59c.css"]),delay:0}),n=L(),h=V(),m=N("theme"),s=W({placement:"center",show:!0,showPaly:!0,comlistindex:0}),{comlistindex:p}=j(s),t=[{name:G.Search,props:{placement:s.placement,searchposition:s.placement}},{name:o,props:{mode:"horizontal",divider:!1,style:{flexWrap:"nowrap",gap:"0px 8px"}}}];function a(){n.setTheme()}function C(){h.setMenuActionShow(!0)}return(be,Ce)=>{const k=J,f=A,v=E,$=Q,B=oe;return l(),u(U,null,[b(" dock-filter dock-style-position  dock-card-top dock-card-size "),r(B,{id:"dock-card",class:"dock-card dock-card-size",bordered:""},{default:i(()=>[c("div",pe,[r(k,{"content-style":"height:100%;max-height:50px;","x-scrollable":""},{default:i(()=>[(l(),z(H,null,[(l(),z(O(t[d(p)].name),q(K(t[d(p)].props)),null,16))],1024))]),_:1})]),r($,{"wrap-item":!1,justify:"center",wrap:!1,class:"dock-space"},{default:i(()=>[r(v,{quaternary:"",circle:"",size:"small",focusable:!1,onClick:C,title:"Dock\u680F\u5185\u5BB9\u53D8\u6362"},{icon:i(()=>[r(f,{size:"16"},{default:i(()=>[r(d(ae))]),_:1})]),_:1}),r(v,{quaternary:"",circle:"",size:"small",focusable:!1,onClick:a,title:"\u5F00\u706F\u4E0E\u5173\u706F"},{icon:i(()=>[r(f,{size:"16",component:d(m)?d(ie):d(me)},null,8,["component"])]),_:1})]),_:1})]),_:1})],2112)}}});const fe=y(he,[["__scopeId","data-v-0d3fee14"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/adock.vue"]]);const ve={},xe=e=>(Y("data-v-97cf4634"),e=e(),Z(),e),we={class:"main main-size"},ge={class:"main main-dock"},ze=xe(()=>c("div",{style:{"max-width":"100%","font-size":"40px"}},"11:00:00",-1));function ye(e,o){const n=fe;return l(),u("div",we,[c("div",ge,[r(n,{style:{margin:"0px"}}),ze]),b(' <Iconlist style="margin: 0px 20px;" /> ')])}const Me=y(ve,[["render",ye],["__scopeId","data-v-97cf4634"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/view/main.vue"]]);export{Me as default};
