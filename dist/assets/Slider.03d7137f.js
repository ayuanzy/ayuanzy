import{r as x,ai as We,q as qe,f as w,d as Je,w as se,n as W,y as Ge,A as h,I as Qe}from"./vue.78b138a2.js";import{D as V,c as n,a as v,r as P,bo as de,a0 as Ze,a1 as eo,b as oo,u as ve,bz as to,bd as ao,L as no,d as ce,J as ro,a4 as lo,aA as _,aB as U,R as ue}from"./index.a49a4610.js";import{u as q,b as io,a as so,V as co}from"./Follower.75107c8b.js";function he(a){return window.TouchEvent&&a instanceof window.TouchEvent}function fe(){const a=x(new Map),i=T=>p=>{a.value.set(T,p)};return We(()=>a.value.clear()),[a,i]}const uo=V([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[v("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),v("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),v("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[P("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),v("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),v("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),v("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),V("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),v("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[P("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),V("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[v("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[v("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[de()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[v("top",`
 margin-bottom: 12px;
 `),v("right",`
 margin-left: 12px;
 `),v("bottom",`
 margin-top: 12px;
 `),v("left",`
 margin-right: 12px;
 `),de()]),Ze(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),eo(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]),ho=0,fo=Object.assign(Object.assign({},ve.props),{to:q.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),go=qe({name:"Slider",props:fo,setup(a){const{mergedClsPrefixRef:i,namespaceRef:T,inlineThemeDisabled:p}=oo(a),f=ve("Slider","-slider",uo,to,a,i),d=x(null),[M,C]=fe(),[me,be]=fe(),ge=x(new Set),J=ao(a),{mergedDisabledRef:D}=J,G=w(()=>{const{step:e}=a;if(e<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),j=x(a.defaultValue),we=Je(a,"value"),N=no(we,j),m=w(()=>{const{value:e}=N;return(a.range?e:[e]).map(ne)}),Q=w(()=>m.value.length>2),pe=w(()=>a.placement===void 0?a.vertical?"right":"top":a.placement),Z=w(()=>{const{marks:e}=a;return e?Object.keys(e).map(parseFloat):null}),b=x(-1),ee=x(-1),y=x(-1),R=x(!1),$=x(!1),O=w(()=>{const{vertical:e,reverse:o}=a;return e?o?"top":"bottom":o?"right":"left"}),xe=w(()=>{if(Q.value)return;const e=m.value,o=B(a.range?Math.min(...e):a.min),t=B(a.range?Math.max(...e):e[0]),{value:r}=O;return a.vertical?{[r]:`${o}%`,height:`${t-o}%`}:{[r]:`${o}%`,width:`${t-o}%`}}),ke=w(()=>{const e=[],{marks:o}=a;if(o){const t=m.value.slice();t.sort((c,u)=>c-u);const{value:r}=O,{value:l}=Q,{range:s}=a,g=l?()=>!1:c=>s?c>=t[0]&&c<=t[t.length-1]:c<=t[0];for(const c of Object.keys(o)){const u=Number(c);e.push({active:g(u),label:o[c],style:{[r]:`${B(u)}%`}})}}return e});function ye(e,o){const t=B(e),{value:r}=O;return{[r]:`${t}%`,zIndex:o===b.value?1:0}}function oe(e){return a.showTooltip||y.value===e||b.value===e&&R.value}function Re(e){return R.value?!(b.value===e&&ee.value===e):!0}function ze(e){var o;~e&&(b.value=e,(o=M.value.get(e))===null||o===void 0||o.focus())}function Se(){me.value.forEach((e,o)=>{oe(o)&&e.syncPosition()})}function te(e){const{"onUpdate:value":o,onUpdateValue:t}=a,{nTriggerFormInput:r,nTriggerFormChange:l}=J;t&&ue(t,e),o&&ue(o,e),j.value=e,r(),l()}function ae(e){const{range:o}=a;if(o){if(Array.isArray(e)){const{value:t}=m;e.join()!==t.join()&&te(e)}}else Array.isArray(e)||m.value[0]!==e&&te(e)}function L(e,o){if(a.range){const t=m.value.slice();t.splice(o,1,e),ae(t)}else ae(e)}function K(e,o,t){const r=t!==void 0;t||(t=e-o>0?1:-1);const l=Z.value||[],{step:s}=a;if(s==="mark"){const u=I(e,l.concat(o),r?t:void 0);return u?u.value:o}if(s<=0)return o;const{value:g}=G;let c;if(r){const u=Number((o/s).toFixed(g)),k=Math.floor(u),X=u>k?k:k-1,Y=u<k?k:k+1;c=I(o,[Number((X*s).toFixed(g)),Number((Y*s).toFixed(g)),...l],t)}else{const u=Ce(e);c=I(e,[...l,u])}return c?ne(c.value):o}function ne(e){return Math.min(a.max,Math.max(a.min,e))}function B(e){const{max:o,min:t}=a;return(e-t)/(o-t)*100}function Te(e){const{max:o,min:t}=a;return t+(o-t)*e}function Ce(e){const{step:o,min:t}=a;if(o<=0||o==="mark")return e;const r=Math.round((e-t)/o)*o+t;return Number(r.toFixed(G.value))}function I(e,o=Z.value,t){if(!(o!=null&&o.length))return null;let r=null,l=-1;for(;++l<o.length;){const s=o[l]-e,g=Math.abs(s);(t===void 0||s*t>0)&&(r===null||g<r.distance)&&(r={index:l,distance:g,value:o[l]})}return r}function re(e){const o=d.value;if(!o)return;const t=he(e)?e.touches[0]:e,r=o.getBoundingClientRect();let l;return a.vertical?l=(r.bottom-t.clientY)/r.height:l=(t.clientX-r.left)/r.width,a.reverse&&(l=1-l),Te(l)}function Ve(e){if(D.value||!a.keyboard)return;const{vertical:o,reverse:t}=a;switch(e.key){case"ArrowUp":e.preventDefault(),A(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),A(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),A(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),A(!o&&t?1:-1);break}}function A(e){const o=b.value;if(o===-1)return;const{step:t}=a,r=m.value[o],l=t<=0||t==="mark"?r:r+t*e;L(K(l,r,e>0?1:-1),o)}function Me(e){var o,t;if(D.value||!he(e)&&e.button!==ho)return;const r=re(e);if(r===void 0)return;const l=m.value.slice(),s=a.range?(t=(o=I(r,l))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;s!==-1&&(e.preventDefault(),ze(s),De(),L(K(r,m.value[s]),s))}function De(){R.value||(R.value=!0,_("touchend",document,E),_("mouseup",document,E),_("touchmove",document,F),_("mousemove",document,F))}function H(){R.value&&(R.value=!1,U("touchend",document,E),U("mouseup",document,E),U("touchmove",document,F),U("mousemove",document,F))}function F(e){const{value:o}=b;if(!R.value||o===-1){H();return}const t=re(e);L(K(t,m.value[o]),o)}function E(){H()}function $e(e){b.value=e,D.value||(y.value=e)}function Be(e){b.value===e&&(b.value=-1,H()),y.value===e&&(y.value=-1)}function Ie(e){y.value=e}function Ae(e){y.value===e&&(y.value=-1)}se(b,(e,o)=>void W(()=>ee.value=o)),se(N,()=>{if(a.marks){if($.value)return;$.value=!0,W(()=>{$.value=!1})}W(Se)}),Ge(()=>{H()});const le=w(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:r,fillColorHover:l,handleColor:s,opacityDisabled:g,dotColor:c,dotColorModal:u,handleBoxShadow:k,handleBoxShadowHover:X,handleBoxShadowActive:Y,handleBoxShadowFocus:He,dotBorder:Fe,dotBoxShadow:Ee,railHeight:Pe,railWidthVertical:_e,handleSize:Ue,dotHeight:je,dotWidth:Ne,dotBorderRadius:Oe,fontSize:Le,dotBorderActive:Ke,dotColorPopover:Xe},common:{cubicBezierEaseInOut:Ye}}=f.value;return{"--n-bezier":Ye,"--n-dot-border":Fe,"--n-dot-border-active":Ke,"--n-dot-border-radius":Oe,"--n-dot-box-shadow":Ee,"--n-dot-color":c,"--n-dot-color-modal":u,"--n-dot-color-popover":Xe,"--n-dot-height":je,"--n-dot-width":Ne,"--n-fill-color":r,"--n-fill-color-hover":l,"--n-font-size":Le,"--n-handle-box-shadow":k,"--n-handle-box-shadow-active":Y,"--n-handle-box-shadow-focus":He,"--n-handle-box-shadow-hover":X,"--n-handle-color":s,"--n-handle-size":Ue,"--n-opacity-disabled":g,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":Pe,"--n-rail-width-vertical":_e,"--n-mark-font-size":e}}),z=p?ce("slider",void 0,le,a):void 0,ie=w(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:r,indicatorBorderRadius:l}}=f.value;return{"--n-font-size":e,"--n-indicator-border-radius":l,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":r}}),S=p?ce("slider-indicator",void 0,ie,a):void 0;return{mergedClsPrefix:i,namespace:T,uncontrolledValue:j,mergedValue:N,mergedDisabled:D,mergedPlacement:pe,isMounted:ro(),adjustedTo:q(a),dotTransitionDisabled:$,markInfos:ke,isShowTooltip:oe,shouldKeepTooltipTransition:Re,handleRailRef:d,setHandleRefs:C,setFollowerRefs:be,fillStyle:xe,getHandleStyle:ye,activeIndex:b,arrifiedValues:m,followerEnabledIndexSet:ge,handleRailMouseDown:Me,handleHandleFocus:$e,handleHandleBlur:Be,handleHandleMouseEnter:Ie,handleHandleMouseLeave:Ae,handleRailKeyDown:Ve,indicatorCssVars:p?void 0:ie,indicatorThemeClass:S==null?void 0:S.themeClass,indicatorOnRender:S==null?void 0:S.onRender,cssVars:p?void 0:le,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){var a;const{mergedClsPrefix:i,themeClass:T,formatTooltip:p}=this;return(a=this.onRender)===null||a===void 0||a.call(this),h("div",{class:[`${i}-slider`,T,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},h("div",{class:`${i}-slider-rail`},h("div",{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?h("div",{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(f=>h("div",{key:f.label,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:f.active}],style:f.style}))):null,h("div",{ref:"handleRailRef",class:`${i}-slider-handles`},this.arrifiedValues.map((f,d)=>{const M=this.isShowTooltip(d);return h(io,null,{default:()=>[h(so,null,{default:()=>h("div",{ref:this.setHandleRefs(d),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(f,d),onFocus:()=>this.handleHandleFocus(d),onBlur:()=>this.handleHandleBlur(d),onMouseenter:()=>this.handleHandleMouseEnter(d),onMouseleave:()=>this.handleHandleMouseLeave(d)},lo(this.$slots.thumb,()=>[h("div",{class:`${i}-slider-handle`})]))}),this.tooltip&&h(co,{ref:this.setFollowerRefs(d),show:M,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===q.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>h(Qe,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var C;return M?((C=this.indicatorOnRender)===null||C===void 0||C.call(this),h("div",{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(f):f)):null}})})]})})),this.marks?h("div",{class:`${i}-slider-marks`},this.markInfos.map(f=>h("div",{key:f.label,class:`${i}-slider-mark`,style:f.style},f.label))):null))}});export{go as _};
