import{q as C,f as B,A as c,F as v,a8 as M,i as x,r as R,z as P,R as u,S as _,_ as f,$ as T,Z as b,ab as V,Y as y,l as j,aa as D,u as N}from"./vue.78b138a2.js";import{c as S,a7 as h,r as d,a as o,b as q,u as w,ao as F,d as O,e as A,f as E,g as I}from"./index.a49a4610.js";import{m as L,q as H}from"./app.4a71e9dc.js";import{_ as W}from"./Space.cf1084ce.js";import"./init.89db40ad.js";const Y=S("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[h("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[h("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),o("title-position-left",[d("line",[o("left",{width:"28px"})])]),o("title-position-right",[d("line",[o("right",{width:"28px"})])]),o("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),o("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),h("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),o("dashed",[d("line",{borderColor:"var(--n-color)"})]),o("vertical",{backgroundColor:"var(--n-color)"})]),Z=Object.assign(Object.assign({},w.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),G=C({name:"Divider",props:Z,setup(n){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=q(n),a=w("Divider","-divider",Y,F,n,i),l=B(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:r,textColor:g,fontWeight:m}}=a.value;return{"--n-bezier":e,"--n-color":r,"--n-text-color":g,"--n-font-weight":m}}),t=s?O("divider",void 0,l,n):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;const{$slots:i,titlePlacement:s,vertical:a,dashed:l,cssVars:t,mergedClsPrefix:e}=this;return(n=this.onRender)===null||n===void 0||n.call(this),c("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:a,[`${e}-divider--no-title`]:!i.default,[`${e}-divider--dashed`]:l,[`${e}-divider--title-position-${s}`]:i.default&&s}],style:t},a?null:c("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!a&&i.default?c(v,null,c("div",{class:`${e}-divider__title`},this.$slots),c("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),J=C({__name:"amenu",props:{mode:{type:null,default:"vertical"},divider:{type:Boolean,default:!0}},setup(n){const i=n,s=M(),a=x("appMenu");x("message");const l=A(),t=R([]);function e(r){l.setMenuActionShow(!1),r!=null&&r.is_route?s.push({name:r.is_route}):r&&setTimeout(()=>{l.setItemClassType(r)},100)}return P(()=>{t.value=L(H(a.value),i.divider)}),(r,g)=>{const m=E,$=G,k=W;return u(),_(v,null,[f(" \u83DC\u5355 "),T(k,{wrap:!0,vertical:i.mode==="vertical",justify:"center"},{default:b(()=>[(u(!0),_(v,null,V(N(t),(p,z)=>(u(),_(v,{key:z},[p.type!="divider"?(u(),y(m,{key:0,style:{"min-width":"50px",width:"100%"},size:"small",quaternary:"",onClick:K=>e(p)},{default:b(()=>[j(D(p.title),1)]),_:2},1032,["onClick"])):f("v-if",!0),p.type==="divider"?(u(),y($,{key:1,vertical:i.mode!="vertical",style:{margin:"0px"}},null,8,["vertical"])):f("v-if",!0)],64))),128))]),_:1},8,["vertical"])],2112)}}});const ie=I(J,[["__scopeId","data-v-6b37323e"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/menu/amenu.vue"]]);export{ie as default};
