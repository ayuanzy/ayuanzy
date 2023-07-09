import{x as oe,b as ue,k as Se,y as ze,z as $e,A as Ce,B as ke,C as Ae,F as Ee,h as he,D as a,G as V,c as g,a as z,r as I,H as Re,J as Te,u as fe,K as Fe,L as ne,M as ae,O as Me,d as Oe,P as Pe,Q as Ie,R as O,T as De,U,V as Le,X as Ne,_ as Ue,e as He,Y as je,Z as Ye,g as Xe}from"./index.a49a4610.js";import{q as K,r as D,i as re,f as A,H,w as We,y as Ve,G as j,M as te,N as se,A as i,I as W,K as Ke,d as ie,V as qe,a as Ge,k as Ze,z as Je,R as J,S as Qe,_ as Q,$ as B,Z as $,u as _,b as ee,F as et,U as tt,Y as le,a0 as de}from"./vue.78b138a2.js";import{s as ot}from"./init.89db40ad.js";import{c as ce,_ as rt}from"./app.4a71e9dc.js";import{t as nt}from"./localRequestFile.11b20013.js";import{_ as at}from"./Avatar.b926ebae.js";import"./utils.e2a66002.js";import"./Tag.616049f1.js";const st=K({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=D(!!e.show),o=D(null),c=re(oe);let h=0,p="",d=null;const v=D(!1),f=D(!1),w=A(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:u,mergedRtlRef:P}=ue(e),l=Se("Drawer",P,u),E=r=>{f.value=!0,h=w.value?r.clientY:r.clientX,p=document.body.style.cursor,document.body.style.cursor=w.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",C),document.body.addEventListener("mouseleave",y),document.body.addEventListener("mouseup",x)},R=()=>{d!==null&&(window.clearTimeout(d),d=null),f.value?v.value=!0:d=window.setTimeout(()=>{v.value=!0},300)},T=()=>{d!==null&&(window.clearTimeout(d),d=null),v.value=!1},{doUpdateHeight:L,doUpdateWidth:N}=c,C=r=>{var m,F;if(f.value)if(w.value){let S=((m=o.value)===null||m===void 0?void 0:m.offsetHeight)||0;const b=h-r.clientY;S+=e.placement==="bottom"?b:-b,L(S),h=r.clientY}else{let S=((F=o.value)===null||F===void 0?void 0:F.offsetWidth)||0;const b=h-r.clientX;S+=e.placement==="right"?b:-b,N(S),h=r.clientX}},x=()=>{f.value&&(h=0,f.value=!1,document.body.style.cursor=p,document.body.removeEventListener("mousemove",C),document.body.removeEventListener("mouseup",x),document.body.removeEventListener("mouseleave",y))},y=x;H(()=>{e.show&&(t.value=!0)}),We(()=>e.show,r=>{r||x()}),Ve(()=>{x()});const n=A(()=>{const{show:r}=e,m=[[se,r]];return e.showMask||m.push([ze,e.onClickoutside,void 0,{capture:!0}]),m});function s(){var r;t.value=!1,(r=e.onAfterLeave)===null||r===void 0||r.call(e)}return $e(A(()=>e.blockScroll&&t.value)),j(Ce,o),j(ke,null),j(Ae,null),{bodyRef:o,rtlEnabled:l,mergedClsPrefix:c.mergedClsPrefixRef,isMounted:c.isMountedRef,mergedTheme:c.mergedThemeRef,displayed:t,transitionName:A(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:s,bodyDirectives:n,handleMousedownResizeTrigger:E,handleMouseenterResizeTrigger:R,handleMouseleaveResizeTrigger:T,isDragging:f,isHoverOnResizeTrigger:v}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?te(i("div",{role:"none"},i(Ee,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>i(W,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>te(i("div",Ke(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?i("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?i("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):i(he,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[se,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:it,cubicBezierEaseOut:lt}=V;function dt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${it}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${lt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:ct,cubicBezierEaseOut:ut}=V;function ht({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ct}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${ut}`}),a(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:ft,cubicBezierEaseOut:mt}=V;function pt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ft}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${mt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:vt,cubicBezierEaseOut:bt}=V;function gt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[a(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${vt}`}),a(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${bt}`}),a(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),a(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),a(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),a(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const wt=a([g("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[dt(),ht(),pt(),gt(),z("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),z("native-scrollbar",[g("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),I("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[z("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),g("drawer-content-wrapper",`
 box-sizing: border-box;
 `),g("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[z("native-scrollbar",[g("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),g("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),g("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),g("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[I("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),g("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),z("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[I("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),z("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[I("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),z("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[I("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),z("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[I("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),a("body",[a(">",[g("drawer-container",{position:"fixed"})])]),g("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[a("> *",{pointerEvents:"all"})]),g("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[z("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Re({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),yt=Object.assign(Object.assign({},fe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),_t=K({name:"Drawer",inheritAttrs:!1,props:yt,setup(e){H(()=>{e.drawerStyle!==void 0&&U("drawer","`drawer-style` is deprecated, please use `style` instead."),e.drawerClass!==void 0&&U("drawer","`drawer-class` is deprecated, please use `class` instead."),e.target!==void 0&&U("drawer","`target` is deprecated, please use `to` instead."),e.onShow!==void 0&&U("drawer","`on-show` is deprecated, please use `on-update:show` instead."),e.onHide!==void 0&&U("drawer","`on-hide` is deprecated, please use `on-update:show` instead.")});const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:c}=ue(e),h=Te(),p=fe("Drawer","-drawer",wt,Fe,e,t),d=D(e.defaultWidth),v=D(e.defaultHeight),f=ne(ie(e,"width"),d),w=ne(ie(e,"height"),v),u=A(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":ae(f.value)}),P=A(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":ae(w.value)}),l=n=>{const{onUpdateWidth:s,"onUpdate:width":r}=e;s&&O(s,n),r&&O(r,n),d.value=n},E=n=>{const{onUpdateHeight:s,"onUpdate:width":r}=e;s&&O(s,n),r&&O(r,n),v.value=n},R=A(()=>[{width:u.value,height:P.value},e.drawerStyle||""]);function T(n){const{onMaskClick:s,maskClosable:r}=e;r&&C(!1),s&&s(n)}const L=Me();function N(n){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&De(n)&&!L.value&&C(!1)}function C(n){const{onHide:s,onUpdateShow:r,"onUpdate:show":m}=e;r&&O(r,n),m&&O(m,n),s&&!n&&O(s,n)}j(oe,{isMountedRef:h,mergedThemeRef:p,mergedClsPrefixRef:t,doUpdateShow:C,doUpdateHeight:E,doUpdateWidth:l});const x=A(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:s,cubicBezierEaseOut:r},self:{color:m,textColor:F,boxShadow:S,lineHeight:b,headerPadding:k,footerPadding:q,bodyPadding:Y,titleFontSize:X,titleTextColor:G,titleFontWeight:Z,headerBorderBottom:M,footerBorderTop:me,closeIconColor:pe,closeIconColorHover:ve,closeIconColorPressed:be,closeColorHover:ge,closeColorPressed:we,closeIconSize:ye,closeSize:_e,closeBorderRadius:xe,resizableTriggerColorHover:Be}}=p.value;return{"--n-line-height":b,"--n-color":m,"--n-text-color":F,"--n-box-shadow":S,"--n-bezier":n,"--n-bezier-out":r,"--n-bezier-in":s,"--n-header-padding":k,"--n-body-padding":Y,"--n-footer-padding":q,"--n-title-text-color":G,"--n-title-font-size":X,"--n-title-font-weight":Z,"--n-header-border-bottom":M,"--n-footer-border-top":me,"--n-close-icon-color":pe,"--n-close-icon-color-hover":ve,"--n-close-icon-color-pressed":be,"--n-close-size":_e,"--n-close-color-hover":ge,"--n-close-color-pressed":we,"--n-close-icon-size":ye,"--n-close-border-radius":xe,"--n-resize-trigger-color-hover":Be}}),y=c?Oe("drawer",void 0,x,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:R,handleMaskClick:T,handleEsc:N,mergedTheme:p,cssVars:c?void 0:x,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,isMounted:h}},render(){const{mergedClsPrefix:e}=this;return i(Ie,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),te(i("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?i(W,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?i("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,i(st,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Pe,{zIndex:this.zIndex,enabled:this.show}]])}})}}),xt={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Bt=K({name:"DrawerContent",props:xt,setup(){const e=re(oe,null);e||Le("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:c,bodyStyle:h,bodyContentStyle:p,headerStyle:d,footerStyle:v,scrollbarProps:f,closable:w,$slots:u}=this;return i("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},u.header||e||w?i("div",{class:`${t}-drawer-header`,style:d,role:"none"},i("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},u.header!==void 0?u.header():e),w&&i(Ne,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?i("div",{class:`${t}-drawer-body`,style:h,role:"none"},i("div",{class:`${t}-drawer-body-content-wrapper`,style:p,role:"none"},u)):i(he,Object.assign({themeOverrides:c.peerOverrides.Scrollbar,theme:c.peers.Scrollbar},f,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:p}),u),u.footer?i("div",{class:`${t}-drawer-footer`,style:v,role:"none"},u.footer()):null)}}),St={style:{"min-height":"100%",padding:"0 24px"}},zt=K({__name:"asimple",setup(e){const t=qe({loader:()=>Ue(()=>import("./amenu.933be45c.js"),["assets/amenu.933be45c.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/app.4a71e9dc.js","assets/Space.cf1084ce.js","assets/amenu.6794a59c.css"]),delay:0}),o=He(),c=new je,h=nt("/logo.svg");re("appMenu");const{menuActionShow:p,modalBoxBool:d,drawerBoxAction:v,modalBoxName:f,modalBoxTitle:w,drawerBoxActionName:u,drawerBoxActionTitle:P}=ot(o),l=Ge({_menuActionShow:!0,_modalBoxBool:!1,_drawerBoxAction:!1,_modalBoxName:"",_modalBoxTitle:"",_drawerBoxActionName:"",_drawerBoxActionTitle:""}),{_menuActionShow:E,_modalBoxBool:R,_drawerBoxAction:T,_modalBoxName:L,_modalBoxTitle:N,_drawerBoxActionName:C,_drawerBoxActionTitle:x}=Ze(l);H(async()=>{l._modalBoxBool=d.value}),H(async()=>{l._drawerBoxAction=v.value}),H(async()=>{l._menuActionShow=p.value});async function y(){l._modalBoxName!=f.value&&(l._modalBoxName=f.value),l._modalBoxTitle!=w.value&&(l._modalBoxTitle=w.value)}async function n(){l._drawerBoxActionName!=u.value&&(l._drawerBoxActionName=u.value),l._drawerBoxActionTitle!=P.value&&(l._drawerBoxActionTitle=P.value)}async function s(){d.value=!1}async function r(){v.value=!1}async function m(){p.value=!1}j("scrollevent",c);async function F(b){c.emit("scroll",b.target,"modal")}async function S(b){c.emit("scroll",b.target,"drawer")}return Je(()=>{}),(b,k)=>{const q=at,Y=Bt,X=_t,G=rt,Z=Ye;return J(),Qe(et,null,[Q(" \u83DC\u5355\u4FA7\u8FB9 "),B(X,{show:_(E),"onUpdate:show":k[0]||(k[0]=M=>ee(E)?E.value=M:null),"show-mask":"transparent",placement:"left","block-scroll":!1,"display-directive":"show","auto-focus":!1,"content-style":"max-height: 100%;height:500px;pointer-events: all;background-color:var(--n-color);border-radius:8px",style:{width:"auto","max-width":"calc(100% - 26px)",margin:"10px","border-radius":"8px",display:"flex","pointer-events":"none","align-items":"center","background-color":"transparent","box-shadow":"0 0 0 0"},onAfterLeave:m},{default:$(()=>[B(Y,{"body-content-style":"min-height:100%;padding:6px 8px;","native-scrollbar":!1,closable:"","auto-focus":!1,"header-style":"border-bottom:0px","footer-style":"border-top:0px;justify-content:center;flex-wrap:wrap"},{footer:$(()=>[B(q,{size:40,src:_(h)[0].url,color:"transparent"},null,8,["src"])]),default:$(()=>[B(_(t))]),_:1})]),_:1},8,["show"]),Q(" \u6A21\u6001\u6846 "),B(Z,{show:_(R),"onUpdate:show":k[1]||(k[1]=M=>ee(R)?R.value=M:null),"transform-origin":"center","display-directive":"show","show-mask":"transparent",style:{"max-width":"90%",width:"780px",border:"0","box-shadow":"0 0 0","padding-bottom":"24px"},title:_(N),preset:"card",onAfterEnter:y,onAfterLeave:s,"header-style":"padding:14px","content-style":"padding:0px;"},{default:$(()=>[B(G,{trigger:"none",style:{"max-height":"360px",height:"360px"},id:"ascroll",onScroll:F,"content-style":"width:100%;min-height:100%;"},{default:$(()=>[tt("div",St,[B(W,{name:"slide",mode:"out-in"},{default:$(()=>[(J(),le(de(_(ce)[_(L)])))]),_:1})])]),_:1})]),_:1},8,["show","title"]),Q(" \u5F39\u51FA\u5C42 "),B(X,{show:_(T),"onUpdate:show":k[2]||(k[2]=M=>ee(T)?T.value=M:null),"show-mask":"transparent",placement:"left","block-scroll":!1,width:"480",style:{"max-width":"100%"},"display-directive":"show","auto-focus":!1,onAfterLeave:r,onAfterEnter:n},{default:$(()=>[B(Y,{"body-style":"max-width:100%","header-style":"border-bottom:0px","body-content-style":"min-height:100%;padding-top:0px",title:_(x),closable:"","native-scrollbar":!1,"auto-focus":!1,"scrollbar-props":{onScroll:S}},{default:$(()=>[B(W,{name:"slide",mode:"out-in"},{default:$(()=>[(J(),le(de(_(ce)[_(C)])))]),_:1})]),_:1},8,["title","scrollbar-props"])]),_:1},8,["show"])],64)}}});const Mt=Xe(zt,[["__scopeId","data-v-a59a351a"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/asimple.vue"]]);export{Mt as default};
