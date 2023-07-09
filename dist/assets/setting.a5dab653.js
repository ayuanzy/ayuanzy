import{D as Ae,c as le,U as Pe,b as Ee,u as pe,bj as Oe,bd as ke,L as Ue,b3 as b,k as $e,bk as Le,a5 as ie,aA as ae,a4 as oe,v as se,bl as de,R as V,s as He,e as je,_ as k,g as ze}from"./index.a49a4610.js";import{q as Y,A as o,H as Ge,r as T,d as Ke,w as We,f as qe,n as Xe,V as U,R as Ze,S as Je,$ as g,Z as F,u as $,b as Qe,l as Ye,a6 as en,a7 as nn,U as ee}from"./vue.78b138a2.js";import{s as tn}from"./init.89db40ad.js";import{u as un}from"./use-locale.d750d564.js";import{_ as rn}from"./Input.276eb8b0.js";import{A as ln}from"./Add.fb8c3934.js";import{_ as an}from"./Space.cf1084ce.js";import{_ as on}from"./Statistic.676e0256.js";import"./Eye.b0b6abaa.js";const sn=Y({name:"Remove",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}});function dn(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function fn(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function J(n){return n==null?!0:!Number.isNaN(n)}function fe(n,l){return n==null?"":l===void 0?String(n):n.toFixed(l)}function Q(n){if(n===null)return null;if(typeof n=="number")return n;{const l=Number(n);return Number.isNaN(l)?null:l}}const cn=Ae([le("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),le("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ce=800,me=100,mn=Object.assign(Object.assign({},pe.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),pn=Y({name:"InputNumber",props:mn,setup(n){Ge(()=>{n.onChange!==void 0&&Pe("input-number","`on-change` is deprecated, please use `on-update:value` instead")});const{mergedBorderedRef:l,mergedClsPrefixRef:s,mergedRtlRef:I}=Ee(n),i=pe("InputNumber","-input-number",cn,Oe,n,s),{localeRef:c}=un("InputNumber"),m=ke(n),{mergedSizeRef:L,mergedDisabledRef:S,mergedStatusRef:D}=m,a=T(null),M=T(null),A=T(null),y=T(n.defaultValue),ve=Ke(n,"value"),p=Ue(ve,y),_=T(""),H=e=>{const t=String(e).split(".")[1];return t?t.length:0},he=e=>{const t=[n.min,n.max,n.step,e].map(u=>u===void 0?0:H(u));return Math.max(...t)},ge=b(()=>{const{placeholder:e}=n;return e!==void 0?e:c.value.placeholder}),P=b(()=>{const e=Q(n.step);return e!==null?e===0?1:Math.abs(e):1}),te=b(()=>{const e=Q(n.min);return e!==null?e:null}),ue=b(()=>{const e=Q(n.max);return e!==null?e:null}),B=e=>{const{value:t}=p;if(e===t){x();return}const{"onUpdate:value":u,onUpdateValue:r,onChange:f}=n,{nTriggerFormInput:v,nTriggerFormChange:w}=m;f&&V(f,e),r&&V(r,e),u&&V(u,e),y.value=e,v(),w()},d=({offset:e,doUpdateIfValid:t,fixPrecision:u,isInputing:r})=>{const{value:f}=_;if(r&&fn(f))return!1;const v=(n.parse||dn)(f);if(v===null)return t&&B(null),null;if(J(v)){const w=H(v),{precision:N}=n;if(N!==void 0&&N<w&&!u)return!1;let h=parseFloat((v+e).toFixed(N!=null?N:he(v)));if(J(h)){const{value:X}=ue,{value:Z}=te;if(X!==null&&h>X){if(!t||r)return!1;h=X}if(Z!==null&&h<Z){if(!t||r)return!1;h=Z}return n.validator&&!n.validator(h)?!1:(t&&B(h),h)}}return!1},x=()=>{const{value:e}=p;if(J(e)){const{format:t,precision:u}=n;t?_.value=t(e):e===null||u===void 0||H(e)>u?_.value=fe(e,void 0):_.value=fe(e,u)}else _.value=String(e)};x();const _e=b(()=>d({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),j=b(()=>{const{value:e}=p;if(n.validator&&e===null)return!1;const{value:t}=P;return d({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),z=b(()=>{const{value:e}=p;if(n.validator&&e===null)return!1;const{value:t}=P;return d({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function be(e){const{onFocus:t}=n,{nTriggerFormFocus:u}=m;t&&V(t,e),u()}function xe(e){var t,u;if(e.target===((t=a.value)===null||t===void 0?void 0:t.wrapperElRef))return;const r=d({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(r!==!1){const w=(u=a.value)===null||u===void 0?void 0:u.inputElRef;w&&(w.value=String(r||"")),p.value===r&&x()}else x();const{onBlur:f}=n,{nTriggerFormBlur:v}=m;f&&V(f,e),v(),Xe(()=>{x()})}function we(e){const{onClear:t}=n;t&&V(t,e)}function G(){const{value:e}=z;if(!e){q();return}const{value:t}=p;if(t===null)n.validator||B(re());else{const{value:u}=P;d({offset:u,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function K(){const{value:e}=j;if(!e){W();return}const{value:t}=p;if(t===null)n.validator||B(re());else{const{value:u}=P;d({offset:-u,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Ve=be,Ie=xe;function re(){if(n.validator)return null;const{value:e}=te,{value:t}=ue;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function ye(e){we(e),B(null)}function Be(e){var t,u,r;!((t=A.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((u=M.value)===null||u===void 0)&&u.$el.contains(e.target)&&e.preventDefault(),(r=a.value)===null||r===void 0||r.activate()}let R=null,C=null,E=null;function W(){E&&(window.clearTimeout(E),E=null),R&&(window.clearInterval(R),R=null)}function q(){O&&(window.clearTimeout(O),O=null),C&&(window.clearInterval(C),C=null)}function Re(){W(),E=window.setTimeout(()=>{R=window.setInterval(()=>{K()},me)},ce),ae("mouseup",document,W,{once:!0})}let O=null;function Ce(){q(),O=window.setTimeout(()=>{C=window.setInterval(()=>{G()},me)},ce),ae("mouseup",document,q,{once:!0})}const Ne=()=>{C||G()},Te=()=>{R||K()};function Fe(e){var t,u;if(e.key==="Enter"){if(e.target===((t=a.value)===null||t===void 0?void 0:t.wrapperElRef))return;d({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((u=a.value)===null||u===void 0||u.deactivate())}else if(e.key==="ArrowUp"){if(!z.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),d({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&G()}else if(e.key==="ArrowDown"){if(!j.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),d({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&K()}}function Se(e){_.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&d({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}We(p,()=>{x()});const De={focus:()=>{var e;return(e=a.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=a.value)===null||e===void 0?void 0:e.blur()}},Me=$e("InputNumber",I,s);return Object.assign(Object.assign({},De),{rtlEnabled:Me,inputInstRef:a,minusButtonInstRef:M,addButtonInstRef:A,mergedClsPrefix:s,mergedBordered:l,uncontrolledValue:y,mergedValue:p,mergedPlaceholder:ge,displayedValueInvalid:_e,mergedSize:L,mergedDisabled:S,displayedValue:_,addable:z,minusable:j,mergedStatus:D,handleFocus:Ve,handleBlur:Ie,handleClear:ye,handleMouseDown:Be,handleAddClick:Ne,handleMinusClick:Te,handleAddMousedown:Ce,handleMinusMousedown:Re,handleKeyDown:Fe,handleUpdateDisplayedValue:Se,mergedTheme:i,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:qe(()=>{const{self:{iconColorDisabled:e}}=i.value,[t,u,r,f]=Le(e);return{textColorTextDisabled:`rgb(${t}, ${u}, ${r})`,opacityDisabled:`${f}`}})})},render(){const{mergedClsPrefix:n,$slots:l}=this,s=()=>o(de,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>oe(l["minus-icon"],()=>[o(se,{clsPrefix:n},{default:()=>o(sn,null)})])}),I=()=>o(de,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>oe(l["add-icon"],()=>[o(se,{clsPrefix:n},{default:()=>o(ln,null)})])});return o("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},o(rn,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var i;return this.showButton&&this.buttonPlacement==="both"?[s(),ie(l.prefix,c=>c?o("span",{class:`${n}-input-number-prefix`},c):null)]:(i=l.prefix)===null||i===void 0?void 0:i.call(l)},suffix:()=>{var i;return this.showButton?[ie(l.suffix,c=>c?o("span",{class:`${n}-input-number-suffix`},c):null),this.buttonPlacement==="right"?s():null,I()]:(i=l.suffix)===null||i===void 0?void 0:i.call(l)}}))}}),ne=n=>(en("data-v-02dd31e1"),n=n(),nn(),n),vn={class:"main_box"},hn=ne(()=>ee("h4",null,"\u5F53\u524D\u72B6\u6001\u751F\u6548(\u4E0E\u65B9\u6848\u540C\u6B65)",-1)),gn=ne(()=>ee("h4",null,"\u5168\u90E8\u72B6\u6001\u751F\u6548(\u975E\u65B9\u6848)",-1)),_n=ne(()=>ee("h4",null,"\u5E03\u5C40\u65B9\u6848",-1)),bn=Y({__name:"setting",setup(n){He();const l=je(),s=U(()=>k(()=>import("./notfound.caec8aba.js"),["assets/notfound.caec8aba.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/notfound.213022fd.css"])),I=U({loader:()=>k(()=>import("./backandtheme.f6ac14ee.js"),["assets/backandtheme.f6ac14ee.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/Slider.03d7137f.js","assets/Follower.75107c8b.js","assets/cssr.4e262cfb.js","assets/Space.cf1084ce.js","assets/Statistic.676e0256.js","assets/Input.276eb8b0.js","assets/use-locale.d750d564.js","assets/Eye.b0b6abaa.js","assets/backandtheme.f579180f.css"]),errorComponent:s}),i=U({loader:()=>k(()=>import("./darwerbottom.f23e93f0.js"),["assets/darwerbottom.f23e93f0.js","assets/vue.78b138a2.js","assets/init.89db40ad.js","assets/index.a49a4610.js","assets/index.25712eee.css","assets/Space.cf1084ce.js","assets/Slider.03d7137f.js","assets/Follower.75107c8b.js","assets/cssr.4e262cfb.js","assets/Statistic.676e0256.js"]),errorComponent:s}),c=U({loader:()=>k(()=>import("./scheme.a34f14ac.js"),["assets/scheme.a34f14ac.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/Space.cf1084ce.js","assets/Time.f56cc638.js","assets/use-locale.d750d564.js","assets/Statistic.676e0256.js","assets/Input.276eb8b0.js","assets/Eye.b0b6abaa.js"]),errorComponent:s}),{update_wait_time:m}=tn(l);function L(S){S||(m.value=3e3)}return(S,D)=>{const a=an,M=pn,A=on;return Ze(),Je("div",vn,[g(a,{vertical:""},{default:F(()=>[hn,g(a,{vertical:""},{default:F(()=>[g($(I)),g($(i))]),_:1}),gn,g(a,null,{default:F(()=>[g(A,{class:"setting_box_width",label:"\u540C\u6B65\u81F3\u672C\u5730\u6570\u636E\u5E93\u7684\u89E6\u53D1\u65F6\u95F4(\u7ACB\u5373\u751F\u6548)"},{default:F(()=>[g(M,{value:$(m),"onUpdate:value":[D[0]||(D[0]=y=>Qe(m)?m.value=y:null),L],size:"large",step:"100",min:"1000",max:"3000"},{suffix:F(()=>[Ye(" ms ")]),_:1},8,["value"])]),_:1})]),_:1}),_n,g($(c))]),_:1})])}}});const Tn=ze(bn,[["__scopeId","data-v-02dd31e1"],["__file","F:/wwwroot/ayuanzy/vue-app/src/components/setting/setting.vue"]]);export{Tn as default};