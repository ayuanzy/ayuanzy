import{q as te,H as ve,r as O,d as pe,f as P,A as i,a as me,k as _e,R as we,Y as ke,Z as d,$ as f,u as E,b as U,l as G,a6 as ye,a7 as xe,U as ae}from"./vue.78b138a2.js";import{c as J,r as a,b7 as Q,D as q,a as g,a7 as ee,U as Be,b as Ce,u as ne,by as $e,bd as Se,L as Ee,m as B,bs as L,o as v,d as Fe,b1 as Y,a5 as C,b8 as Ve,b9 as Re,R as X,s as ze,f as Ae,g as Ie}from"./index.a49a4610.js";import{_ as De}from"./Slider.03d7137f.js";import{_ as Pe}from"./Space.cf1084ce.js";import{_ as Ue}from"./Statistic.676e0256.js";import{_ as Te}from"./Input.276eb8b0.js";import"./init.89db40ad.js";import"./Follower.75107c8b.js";import"./cssr.4e262cfb.js";import"./use-locale.d750d564.js";import"./Eye.b0b6abaa.js";const Ne=J("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[a("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),a("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),a("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),J("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Q({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),a("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),a("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),a("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),q("&:focus",[a("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),g("round",[a("rail","border-radius: calc(var(--n-rail-height) / 2);",[a("button","border-radius: calc(var(--n-button-height) / 2);")])]),ee("disabled",[ee("icon",[g("rubber-band",[g("pressed",[a("rail",[a("button","max-width: var(--n-button-width-pressed);")])]),a("rail",[q("&:active",[a("button","max-width: var(--n-button-width-pressed);")])]),g("active",[g("pressed",[a("rail",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),a("rail",[q("&:active",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),g("active",[a("rail",[a("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),a("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[a("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Q()]),a("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),g("active",[a("rail","background-color: var(--n-rail-color-active);")]),g("loading",[a("rail",`
 cursor: wait;
 `)]),g("disabled",[a("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Me=Object.assign(Object.assign({},ne.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let V;const We=te({name:"Switch",props:Me,setup(e){ve(()=>{e.onChange&&Be("switch","`on-change` is deprecated, please use `on-update:value` instead.")}),V===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?V=CSS.supports("width","max(1px)"):V=!1:V=!0);const{mergedClsPrefixRef:s,inlineThemeDisabled:k}=Ce(e),p=ne("Switch","-switch",Ne,$e,e,s),r=Se(e),{mergedSizeRef:m,mergedDisabledRef:u}=r,y=O(e.defaultValue),$=pe(e,"value"),b=Ee($,y),x=P(()=>b.value===e.checkedValue),o=O(!1),t=O(!1),h=P(()=>{const{railStyle:n}=e;if(!!n)return n({focused:t.value,checked:x.value})});function l(n){const{"onUpdate:value":A,onChange:I,onUpdateValue:D}=e,{nTriggerFormInput:M,nTriggerFormChange:W}=r;A&&X(A,n),D&&X(D,n),I&&X(I,n),y.value=n,M(),W()}function T(){const{nTriggerFormFocus:n}=r;n()}function R(){const{nTriggerFormBlur:n}=r;n()}function z(){e.loading||u.value||(b.value!==e.checkedValue?l(e.checkedValue):l(e.uncheckedValue))}function N(){t.value=!0,T()}function c(){t.value=!1,R(),o.value=!1}function ie(n){e.loading||u.value||n.key===" "&&(b.value!==e.checkedValue?l(e.checkedValue):l(e.uncheckedValue),o.value=!1)}function se(n){e.loading||u.value||n.key===" "&&(n.preventDefault(),o.value=!0)}const Z=P(()=>{const{value:n}=m,{self:{opacityDisabled:A,railColor:I,railColorActive:D,buttonBoxShadow:M,buttonColor:W,boxShadowFocus:re,loadingColor:le,textColor:ue,iconColor:ce,[B("buttonHeight",n)]:_,[B("buttonWidth",n)]:de,[B("buttonWidthPressed",n)]:he,[B("railHeight",n)]:w,[B("railWidth",n)]:F,[B("railBorderRadius",n)]:fe,[B("buttonBorderRadius",n)]:be},common:{cubicBezierEaseInOut:ge}}=p.value;let K,H,j;return V?(K=`calc((${w} - ${_}) / 2)`,H=`max(${w}, ${_})`,j=`max(${F}, calc(${F} + ${_} - ${w}))`):(K=L((v(w)-v(_))/2),H=L(Math.max(v(w),v(_))),j=v(w)>v(_)?F:L(v(F)+v(_)-v(w))),{"--n-bezier":ge,"--n-button-border-radius":be,"--n-button-box-shadow":M,"--n-button-color":W,"--n-button-width":de,"--n-button-width-pressed":he,"--n-button-height":_,"--n-height":H,"--n-offset":K,"--n-opacity-disabled":A,"--n-rail-border-radius":fe,"--n-rail-color":I,"--n-rail-color-active":D,"--n-rail-height":w,"--n-rail-width":F,"--n-width":j,"--n-box-shadow-focus":re,"--n-loading-color":le,"--n-text-color":ue,"--n-icon-color":ce}}),S=k?Fe("switch",P(()=>m.value[0]),Z,e):void 0;return{handleClick:z,handleBlur:c,handleFocus:N,handleKeyup:ie,handleKeydown:se,mergedRailStyle:h,pressed:o,mergedClsPrefix:s,mergedValue:b,checked:x,mergedDisabled:u,cssVars:k?void 0:Z,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:s,checked:k,mergedRailStyle:p,onRender:r,$slots:m}=this;r==null||r();const{checked:u,unchecked:y,icon:$,"checked-icon":b,"unchecked-icon":x}=m,o=!(Y($)&&Y(b)&&Y(x));return i("div",{role:"switch","aria-checked":k,class:[`${e}-switch`,this.themeClass,o&&`${e}-switch--icon`,k&&`${e}-switch--active`,s&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:p},C(u,t=>C(y,h=>t||h?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),t),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),h)):null)),i("div",{class:`${e}-switch__button`},C($,t=>C(b,h=>C(x,l=>i(Ve,null,{default:()=>this.loading?i(Re,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(h||t)?i("div",{class:`${e}-switch__button-icon`,key:h?"checked-icon":"icon"},h||t):!this.checked&&(l||t)?i("div",{class:`${e}-switch__button-icon`,key:l?"unchecked-icon":"icon"},l||t):null})))),C(u,t=>t&&i("div",{key:"checked",class:`${e}-switch__checked`},t)),C(y,t=>t&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},t)))))}}),oe=e=>(ye("data-v-9a9a5f7e"),e=e(),xe(),e),Ke=oe(()=>ae("span",{class:"span_font_style"},"\u56FE\u50CF\u58C1\u7EB8",-1)),He=oe(()=>ae("span",{class:"span_font_style"},"\u52A8\u6001\u58C1\u7EB8",-1)),je=te({__name:"backandtheme",setup(e){const s=ze(),k=me({backgroundImg:s.getBackgroundImg,backgroundVideo:s.getBackgroundVideo,imgMasks:s.getImgMasks,backgroundPrior:s.getBackgroundPrior}),{backgroundImg:p,backgroundVideo:r,imgMasks:m,backgroundPrior:u}=_e(k),y=o=>{s.setImgMasks(o)},$=o=>{s.setBackgroundImg(o)},b=o=>{s.setBackgroundVideo(o)},x=o=>{s.setBackgroundPrior(o)};return(o,t)=>{const h=We,l=Ue,T=De,R=Ae,z=Te,N=Pe;return we(),ke(N,{vertical:""},{default:d(()=>[f(l,{class:"setting_box_width",label:"\u58C1\u7EB8\u4F18\u5148\u7EA7"},{default:d(()=>[f(h,{round:!1,size:"large",value:E(u),"onUpdate:value":[t[0]||(t[0]=c=>U(u)?u.value=c:null),x]},{checked:d(()=>[Ke]),unchecked:d(()=>[He]),_:1},8,["value"])]),_:1}),f(l,{class:"setting_box_width",label:"\u58C1\u7EB8\u660E\u6697\u5EA6"},{default:d(()=>[f(T,{value:E(m),"onUpdate:value":[t[1]||(t[1]=c=>U(m)?m.value=c:null),y],step:1,size:"large",min:0,max:100},null,8,["value"])]),_:1}),f(l,{label:"\u5728\u7EBF\u56FE\u50CF\u58C1\u7EB8\u94FE\u63A5",class:"setting_box_width"},{default:d(()=>[f(z,{type:"text",value:E(p),"onUpdate:value":t[3]||(t[3]=c=>U(p)?p.value=c:null),"passively-activated":!0,size:"large",placeholder:"\u9700\u8981\u8BBE\u5B9A\u4E3A\u7F51\u7EDC\u8D44\u6E90\u94FE\u63A5",clearable:""},{suffix:d(()=>[f(R,{quaternary:"",focusable:!1,onClick:t[2]||(t[2]=c=>$(E(p)))},{default:d(()=>[G("\u786E\u8BA4")]),_:1})]),_:1},8,["value"])]),_:1}),f(l,{label:"\u5728\u7EBF\u52A8\u6001\u58C1\u7EB8\u94FE\u63A5",class:"setting_box_width"},{default:d(()=>[f(z,{type:"text",value:E(r),"onUpdate:value":t[5]||(t[5]=c=>U(r)?r.value=c:null),"passively-activated":!0,size:"large",placeholder:"\u9700\u8981\u8BBE\u5B9A\u4E3A\u7F51\u7EDC\u8D44\u6E90\u94FE\u63A5",clearable:""},{suffix:d(()=>[f(R,{quaternary:"",focusable:!1,onClick:t[4]||(t[4]=c=>b(E(r)))},{default:d(()=>[G("\u786E\u8BA4")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})}}});const at=Ie(je,[["__scopeId","data-v-9a9a5f7e"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/setting/backandtheme/backandtheme.vue"]]);export{at as default};
