import{q as W,r as p,i as H,f as y,w as A,z as K,H as N,y as V,A as R}from"./vue.78b138a2.js";import{i as P,o as G}from"./utils.e2a66002.js";import{t as D}from"./Tag.616049f1.js";import{$ as q,c as k,a0 as U,D as C,a1 as X,r as w,b as Y,u as $,a2 as J,m as Q,d as Z,a3 as ee,a4 as oe,a5 as re,a6 as te}from"./index.a49a4610.js";const ne=q("n-avatar-group"),ae=k("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[U(C("&","--n-merged-color: var(--n-color-modal);")),X(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),k("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),se=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ue=W({name:"Avatar",props:se,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=Y(r),s=p(!1);let d=null;const m=p(null),i=p(null),j=()=>{const{value:e}=m;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=i;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:S}=e,L=.9,E=Math.min(n/a*L,t/S*L,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${E})`}}},g=H(ne,null),b=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=g||{};return o||"medium"}),x=$("Avatar","-avatar",ae,J,r,l),c=H(D,null),u=y(()=>{if(g)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),z=y(()=>g?!0:r.bordered||!1),f=e=>{var o;if(!O.value)return;s.value=!0;const{onError:n,imgProps:t}=r;(o=t==null?void 0:t.onError)===null||o===void 0||o.call(t,e),n&&n(e)};A(()=>r.src,()=>s.value=!1);const T=y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r,{self:{borderRadius:a,fontSize:S,color:L,border:E,colorModal:B,colorPopover:I},common:{cubicBezierEaseInOut:M}}=x.value;let F;return typeof e=="number"?F=`${e}px`:F=x.value.self[Q("height",e)],{"--n-font-size":S,"--n-border":n?E:"none","--n-border-radius":o?"50%":a,"--n-color":t||L,"--n-color-modal":t||B,"--n-color-popover":t||I,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${F})`}}),v=h?Z("avatar",y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=ee(t)),a}),T,r):void 0,O=p(!r.lazy);K(()=>{if(P)return;let e;const o=N(()=>{e==null||e(),e=void 0,r.lazy&&(e=G(i.value,r.intersectionObserverOptions,O))});V(()=>{o(),e==null||e()})});const _=p(!r.lazy);return{textRef:m,selfRef:i,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:j,cssVars:h?void 0:T,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender,hasLoadError:s,handleError:f,shouldStartLoading:O,loaded:_,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n==null||n(e),(o=t==null?void 0:t.onLoad)===null||o===void 0||o.call(t,e),_.value=!0}}},render(){var r,l;const{$slots:h,src:s,mergedClsPrefix:d,lazy:m,onRender:i,mergedOnLoad:j,shouldStartLoading:g,loaded:b,hasLoadError:x}=this;i==null||i();let c;const u=!b&&!x&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():oe(h.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=re(h.default,z=>{if(z)return R(te,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${d}-avatar__text`},z)});if(s){const{imgProps:f}=this;return R("img",Object.assign(Object.assign({},f),{loading:P&&!this.intersectionObserverOptions&&m?"lazy":"eager",src:P||g||b?s:void 0,onLoad:j,"data-image-src":s,onError:this.handleError,style:[f==null?void 0:f.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,m&&u)}});export{ue as _};
