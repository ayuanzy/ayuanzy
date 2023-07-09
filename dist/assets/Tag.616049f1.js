import{q as ae,H as ne,r as le,G as te,d as se,f as R,A as g}from"./vue.78b138a2.js";import{c as ie,a as l,r as b,a7 as x,D as z,U as de,b as he,u as I,a8 as ge,k as be,m as a,d as ue,a3 as _,a5 as P,X as ve,$ as ke,R as Ce}from"./index.a49a4610.js";const fe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},pe=ie("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),b("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),b("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),b("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),b("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[b("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),b("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[x("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[x("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[x("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[x("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),me=Object.assign(Object.assign(Object.assign({},I.props),fe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),xe=ke("n-tag"),Be=ae({name:"Tag",props:me,setup(r){ne(()=>{r.onCheckedChange!==void 0&&de("tag","`on-checked-change` is deprecated, please use `on-update:checked` instead")});const i=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:u,inlineThemeDisabled:v,mergedRtlRef:y}=he(r),C=I("Tag","-tag",pe,ge,r,u);te(xe,{roundRef:se(r,"round")});function k(e){if(!r.disabled&&r.checkable){const{checked:c,onCheckedChange:h,onUpdateChecked:t,"onUpdate:checked":s}=r;t&&t(!c),s&&s(!c),h&&h(!c)}}function f(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:c}=r;c&&Ce(c,e)}}const p={setTextContent(e){const{value:c}=i;c&&(c.textContent=e)}},m=be("Tag",y,u),n=R(()=>{const{type:e,size:c,color:{color:h,textColor:t}={}}=r,{common:{cubicBezierEaseInOut:s},self:{padding:w,closeMargin:M,closeMarginRtl:T,borderRadius:O,opacityDisabled:S,textColorCheckable:H,textColorHoverCheckable:j,textColorPressedCheckable:F,textColorChecked:E,colorCheckable:U,colorHoverCheckable:N,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:A,closeBorderRadius:W,fontWeightStrong:q,[a("colorBordered",e)]:G,[a("closeSize",c)]:L,[a("closeIconSize",c)]:X,[a("fontSize",c)]:J,[a("height",c)]:B,[a("color",e)]:Q,[a("textColor",e)]:Y,[a("border",e)]:Z,[a("closeIconColor",e)]:$,[a("closeIconColorHover",e)]:ee,[a("closeIconColorPressed",e)]:oe,[a("closeColorHover",e)]:re,[a("closeColorPressed",e)]:ce}}=C.value;return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${B} - 8px)`,"--n-bezier":s,"--n-border-radius":O,"--n-border":Z,"--n-close-icon-size":X,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":$,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":$,"--n-close-margin":M,"--n-close-margin-rtl":T,"--n-close-size":L,"--n-color":h||(o.value?G:Q),"--n-color-checkable":U,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":A,"--n-color-hover-checkable":N,"--n-color-pressed-checkable":D,"--n-font-size":J,"--n-height":B,"--n-opacity-disabled":S,"--n-padding":w,"--n-text-color":t||Y,"--n-text-color-checkable":H,"--n-text-color-checked":E,"--n-text-color-hover-checkable":j,"--n-text-color-pressed-checkable":F}}),d=v?ue("tag",R(()=>{let e="";const{type:c,size:h,color:{color:t,textColor:s}={}}=r;return e+=c[0],e+=h[0],t&&(e+=`a${_(t)}`),s&&(e+=`b${_(s)}`),o.value&&(e+="c"),e}),n,r):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:u,contentRef:i,mergedBordered:o,handleClick:k,handleCloseClick:f,cssVars:v?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var r,i;const{mergedClsPrefix:o,rtlEnabled:u,closable:v,color:{borderColor:y}={},round:C,onRender:k,$slots:f}=this;k==null||k();const p=P(f.avatar,n=>n&&g("div",{class:`${o}-tag__avatar`},n)),m=P(f.icon,n=>n&&g("div",{class:`${o}-tag__icon`},n));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:u,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:C,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:v}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)),!this.checkable&&v?g(ve,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:C,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:y}}):null)}});export{Be as _,xe as t};
