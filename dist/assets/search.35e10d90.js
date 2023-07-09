import{q as v,A as j,R as m,S as g,U as i,ac as G,k as I,i as W,f as y,a as Z,W as H,r as J,a8 as O,$ as o,Z as r,u as t,l as Q,aa as C,b as X,ae as tt,F as et,ab as ot,Y as rt,a6 as at,a7 as st}from"./vue.78b138a2.js";import{c as a,D as n,r as f,b as nt,az as it,e as lt,s as ct,N as pt,f as ut,g as dt}from"./index.a49a4610.js";import{_ as mt}from"./Popover.62fea1d1.js";import{_ as _t}from"./Input.276eb8b0.js";import{_ as ht}from"./app.4a71e9dc.js";import"./init.89db40ad.js";import"./Follower.75107c8b.js";import"./cssr.4e262cfb.js";import"./use-compitable.f5e6d299.js";import"./use-locale.d750d564.js";import"./Eye.b0b6abaa.js";const bt=a("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[n(">",[a("input",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),n("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),a("button",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[f("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),n("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[f("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),n("*",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[n(">",[a("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a("base-selection",[a("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),a("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),f("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),n("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[n(">",[a("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a("base-selection",[a("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),a("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),f("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),ft={},gt=v({name:"InputGroup",props:ft,setup(e){const{mergedClsPrefixRef:l}=nt(e);return it("-input-group",bt,l),{mergedClsPrefix:l}},render(){const{mergedClsPrefix:e}=this;return j("div",{class:`${e}-input-group`},this.$slots)}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},xt=i("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",fill:"currentColor"},null,-1),wt=[xt],yt=v({name:"CloseRound",render:function(l,x){return m(),g("svg",vt,wt)}}),Ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},kt=i("g",{fill:"none"},[i("path",{d:"M8.5 3a5.5 5.5 0 0 1 4.383 8.823l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073l-4.147-4.147A5.5 5.5 0 1 1 8.5 3zm0 1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8z",fill:"currentColor"})],-1),St=[kt],zt=v({name:"Search20Filled",render:function(l,x){return m(),g("svg",Ct,St)}}),Ft=e=>(at("data-v-93c6ab4d"),e=e(),st(),e),It={class:"main_box search_box"},$t={class:"search"},Bt={class:"search-tip-btn"},Dt=Ft(()=>i("h6",null,"\u641C\u7D22\u63A8\u8350",-1)),Lt={class:"search-tip"},Rt={class:"search-tip-text"},Nt=v({__name:"search",props:{placement:{type:String,default:"center"},paddingvar:{type:String,default:"0px"},searchposition:{type:String,default:""}},setup(e){const l=e;G(s=>({"93c6ab4d-placement":t(x),"93c6ab4d-search_position":t(R),"93c6ab4d-paddingvar":t($)}));const{placement:x,paddingvar:$,searchposition:B}=I(l),D=lt(),p=ct(),L=W("appMenu"),R=y(()=>B.value||p.getSearchPosition),k=y(()=>p.getSearchName),w=y(()=>p.getYiYan+"@"+p.getYiYanAuthor),N=Z({searchInput:"",searchvideolist:[],show:!1,pdisabled:!0}),q=H([{name:"\u6587\u672C\u641C\u7D22",click:function(){console.log("\u6587\u672C\u641C\u7D22")}},{name:"\u89C6\u9891\u641C\u7D22",click:function(){console.log("\u89C6\u9891\u641C\u7D22")}},{name:"\u89C6\u9891\u89E3\u6790",click:function(){console.log("\u89C6\u9891\u89E3\u6790")}}]),_=J(void 0),{searchInput:c,show:S,pdisabled:h}=I(N);O();function A(){h.value=!0,z()}function z(){let s=c.value||w.value;window.open(p.getSearchUrl+s,"_blank")}function M(s){var u;S.value||(S.value=!0),(u=_.value)==null||u.setShow(!0)}function P(){var s;(s=_.value)==null||s.setShow(!1)}function Y(){var s;h.value=!1,(s=_.value)==null||s.setShow(!1)}function E(){h.value=!0,D.setSelectModelTheComponent(L.value.Searchlist)}return(s,u)=>{const F=pt,b=ut,V=_t,K=gt,T=ht,U=mt;return m(),g("div",It,[i("div",$t,[o(U,{trigger:"click","show-arrow":!1,placement:"top-end",width:"trigger",scrollable:!1,to:"#dock-card.dock-card","display-directive":"show",disabled:t(h),style:{margin:"10px",padding:"10px 0px"},"header-style":"border:0px;padding-top:0px","content-style":"padding:0px",ref_key:"searchpopover",ref:_},{header:r(()=>[i("div",Bt,[Dt,o(b,{size:"tiny",quaternary:"",onClick:P},{icon:r(()=>[o(F,{size:"16"},{default:r(()=>[o(t(yt))]),_:1})]),_:1})])]),trigger:r(()=>[o(K,{style:{"align-items":"center",gap:"0 1px"}},{default:r(()=>[o(b,{onClick:E,quaternary:"",size:"tiny",title:t(k),class:"search-btn"},{default:r(()=>[Q(C(t(k)),1)]),_:1},8,["title"]),o(V,{value:t(c),"onUpdate:value":u[0]||(u[0]=d=>X(c)?c.value=d:null),bordered:!1,class:"search_input",autofocus:!1,clearable:!0,autocomplete:"off",title:t(c)||t(w),placeholder:t(w),onFocus:Y,"passively-activated":!1,onKeyup:tt(z,["enter"]),max:70,onInput:M},null,8,["value","title","placeholder","onKeyup"]),o(b,{style:{"margin-left":"4px"},onClick:A,size:"tiny",class:"search-btn",quaternary:"",title:"\u70B9\u51FB\u641C\u7D22"},{icon:r(()=>[o(F,{size:"16"},{default:r(()=>[o(t(zt))]),_:1})]),_:1})]),_:1})]),default:r(()=>[o(T,{style:{"max-height":"180px"}},{default:r(()=>[i("div",Lt,[(m(!0),g(et,null,ot(t(q),(d,qt)=>(m(),rt(b,{key:d,quaternary:"",onClick:d.click,style:{"max-width":"100%",width:"100%","text-align":"start","justify-content":"start"}},{default:r(()=>[i("span",Rt,C(d.name)+" "+C(t(c)),1)]),_:2},1032,["onClick"]))),128))])]),_:1})]),_:1},8,["disabled"])])])}}});const Wt=dt(Nt,[["__scopeId","data-v-93c6ab4d"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/search/search.vue"]]);export{Wt as default};
