import{q as C,f as S,A as a}from"./vue.78b138a2.js";import{c as n,r as o,b as R,u as v,bi as $,k as T,d as w,a5 as r}from"./index.a49a4610.js";const E=n("statistic",[o("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),n("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[o("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[n("icon",{verticalAlign:"-0.125em"})]),o("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),o("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[n("icon",{verticalAlign:"-0.125em"})])])]),P=Object.assign(Object.assign({},v.props),{tabularNums:Boolean,label:String,value:[String,Number]}),V=C({name:"Statistic",props:P,setup(s){const{mergedClsPrefixRef:t,inlineThemeDisabled:l,mergedRtlRef:c}=R(s),u=v("Statistic","-statistic",E,$,s,t),f=T("Statistic",c,t),e=S(()=>{const{self:{labelFontWeight:b,valueFontSize:d,valueFontWeight:x,valuePrefixTextColor:m,labelTextColor:h,valueSuffixTextColor:p,valueTextColor:g,labelFontSize:z},common:{cubicBezierEaseInOut:_}}=u.value;return{"--n-bezier":_,"--n-label-font-size":z,"--n-label-font-weight":b,"--n-label-text-color":h,"--n-value-font-weight":x,"--n-value-font-size":d,"--n-value-prefix-text-color":m,"--n-value-suffix-text-color":p,"--n-value-text-color":g}}),i=l?w("statistic",void 0,e,s):void 0;return{rtlEnabled:f,mergedClsPrefix:t,cssVars:l?void 0:e,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s;const{mergedClsPrefix:t,$slots:{default:l,label:c,prefix:u,suffix:f}}=this;return(s=this.onRender)===null||s===void 0||s.call(this),a("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},r(c,e=>a("div",{class:`${t}-statistic__label`},this.label||e)),a("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},r(u,e=>e&&a("span",{class:`${t}-statistic-value__prefix`},e)),this.value!==void 0?a("span",{class:`${t}-statistic-value__content`},this.value):r(l,e=>e&&a("span",{class:`${t}-statistic-value__content`},e)),r(f,e=>e&&a("span",{class:`${t}-statistic-value__suffix`},e))))}});export{V as _};
