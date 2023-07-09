import{q as P,f as D,A as w,K as R,F as N}from"./vue.78b138a2.js";import{i as H,D as z,c as V,b as _,u as O,br as j,m as K,bs as A,am as L,bt as Q}from"./index.a49a4610.js";import{g as T}from"./localRequestFile.11b20013.js";let F=!1;function $(){if(!!H&&!!window.CSS&&!F&&(F=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const I=z([V("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),z("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),W=Object.assign(Object.assign({},O.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),X=P({name:"Skeleton",inheritAttrs:!1,props:W,setup(t){$();const{mergedClsPrefixRef:r}=_(t),y=O("Skeleton","-skeleton",I,j,t,r);return{mergedClsPrefix:r,style:D(()=>{var f,g;const v=y.value,{common:{cubicBezierEaseInOut:E}}=v,B=v.self,{color:q,colorEnd:l,borderRadius:S}=B;let e;const{circle:u,sharp:n,round:s,width:d,height:h,size:a,text:i,animated:C}=t;a!==void 0&&(e=B[K("height",a)]);const o=u?(f=d!=null?d:h)!==null&&f!==void 0?f:e:d,x=(g=u&&d!=null?d:h)!==null&&g!==void 0?g:e;return{display:i?"inline-block":"",verticalAlign:i?"-0.125em":"",borderRadius:u?"50%":s?"4096px":n?"":S,width:typeof o=="number"?A(o):o,height:typeof x=="number"?A(x):x,animation:C?"":"none","--n-bezier":E,"--n-color-start":q,"--n-color-end":l}})}},render(){const{repeat:t,style:r,mergedClsPrefix:y,$attrs:f}=this,g=w("div",R({class:`${y}-skeleton`,style:r},f));return t>1?w(N,null,Array.apply(null,{length:t}).map(v=>[g,`
`])):g}});function G(t,r,y=[]){function f(e,u,n){var s;(s=r==null?void 0:r.message)==null||s.call(r,{id:t,msg:e,type:u,gkey:n.key})}async function g(e,u){var n,s;if((e.directrequest||e.needrequest)&&!((n=e==null?void 0:e.request)!=null&&n.length))return f("\u7F51\u7EDC\u8BF7\u6C42\u65F6\u201Crequest\u201D\u5B57\u6BB5\u5FC5\u987B\u6709\u503C","error",e);(s=e==null?void 0:e.request)==null||s.forEach(d=>{T(d.urllist).then(function(h){h.forEach(async a=>{var C,o,x;let i=(C=r.filter)==null?void 0:C.call(r,{data:a,type:!1,id:t,key:d.key,gkey:e.key});if(i)console.log(i),(o=r==null?void 0:r.data)==null||o.call(r,{id:t,needstore:!0,idb:u,req:i,type:!1,key:d.key,gkey:e.key});else if(u)(x=r==null?void 0:r.data)==null||x.call(r,{id:t,needstore:!1,idb:u,req:i,type:!0,key:e.key,gkey:e.key});else return f("\u6570\u636E\u4E3A\u7A7A","msg",e)})}).catch(h=>{var a;(a=r==null?void 0:r.message)==null||a.call(r,{id:t,msg:h.message,type:"error",gkey:e.key})})})}function v(e,u,n){var s;if(e!=null&&e.iexp&&Q(n,Number(e==null?void 0:e.iexp)))return g(e,u);(s=r==null?void 0:r.data)==null||s.call(r,{id:t,needstore:!1,idb:u,req:null,type:!0,key:e.key,gkey:e.key})}function E(e,u){e!=null&&e.needrequest?g(e,u):f("\u6570\u636E\u662F\u7A7A\u7684","msg",e)}function B(e){if((e==null?void 0:e.iid)&&(e==null?void 0:e.iname)){L(String(e.iid),e.iname).then(function(u){let n=r.filter({data:u,type:!0,id:t,key:e.key,gkey:e.key});n?v(e,n,u==null?void 0:u.exp):E(e,n)}).catch(u=>{f(u.message,"error",e)});return}return f("\u67E5\u8BE2\u672C\u5730\u6570\u636E\u5E93\u201Ciid\u3001iname\u201D\u5B57\u6BB5\u5FC5\u987B\u6709\u503C","error",e)}function q(e=""){if(!e){y.forEach(async(u,n)=>{u!=null&&u.directrequest?g(u):B(u)});return}e.split(",").forEach(async u=>{let n=y.map(d=>d.key).indexOf(u),s=y[n];s.key===u&&(s!=null&&s.directrequest?g(s):B(s))})}function l(e){let u=y.map(n=>n.key).indexOf(e);u>=0&&y.splice(u,1)}function S(e){y.push(e)}return{addOpstions:S,deleteOpstions:l,runOpstions:q}}const Y={bundleOptions:G};export{X as _,Y as q};
