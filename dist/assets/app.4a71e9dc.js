import{q as u,r as m,A as p,V as o}from"./vue.78b138a2.js";import{u as v,h as f,_ as t}from"./index.a49a4610.js";const y=Object.assign(Object.assign({},v.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),E=u({name:"Scrollbar",props:y,setup(){const i=m(null);return Object.assign(Object.assign({},{scrollTo:(...e)=>{var r;(r=i.value)===null||r===void 0||r.scrollTo(e[0],e[1])},scrollBy:(...e)=>{var r;(r=i.value)===null||r===void 0||r.scrollBy(e[0],e[1])}}),{scrollbarInstRef:i})},render(){return p(f,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),b=E,A={Login:o({loader:()=>t(()=>import("./login.2c6f3a81.js"),["assets/login.2c6f3a81.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/Add.fb8c3934.js","assets/use-compitable.f5e6d299.js","assets/cssr.4e262cfb.js","assets/Space.cf1084ce.js"]),delay:0}),Music:o({loader:()=>t(()=>import("./music.624b0365.js"),["assets/music.624b0365.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css"]),delay:0}),Search:o({loader:()=>t(()=>import("./search.35e10d90.js"),["assets/search.35e10d90.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/Popover.62fea1d1.js","assets/Follower.75107c8b.js","assets/cssr.4e262cfb.js","assets/use-compitable.f5e6d299.js","assets/Input.276eb8b0.js","assets/use-locale.d750d564.js","assets/Eye.b0b6abaa.js","assets/search.4e493dc8.css"]),delay:0}),Peer:o({loader:()=>t(()=>import("./peer.e71438cb.js"),["assets/peer.e71438cb.js","assets/index.a49a4610.js","assets/vue.78b138a2.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/Statistic.676e0256.js","assets/Space.cf1084ce.js","assets/Input.276eb8b0.js","assets/use-locale.d750d564.js","assets/Eye.b0b6abaa.js"]),delay:0}),Setting:o({loader:()=>t(()=>import("./setting.a5dab653.js"),["assets/setting.a5dab653.js","assets/index.a49a4610.js","assets/vue.78b138a2.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/use-locale.d750d564.js","assets/Input.276eb8b0.js","assets/Eye.b0b6abaa.js","assets/Add.fb8c3934.js","assets/Space.cf1084ce.js","assets/Statistic.676e0256.js","assets/setting.2926239d.css"]),delay:0}),Searchlist:o({loader:()=>t(()=>import("./searchlist.0d6e2f97.js"),["assets/searchlist.0d6e2f97.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/queryNeedData.80e9e1d5.js","assets/localRequestFile.11b20013.js","assets/Tag.616049f1.js","assets/Popover.62fea1d1.js","assets/Follower.75107c8b.js","assets/cssr.4e262cfb.js","assets/use-compitable.f5e6d299.js","assets/Space.cf1084ce.js","assets/Input.276eb8b0.js","assets/use-locale.d750d564.js","assets/Eye.b0b6abaa.js","assets/searchlist.b37df63d.css"]),delay:0}),IconList:o({loader:()=>t(()=>import("./iconlist.e981148f.js"),["assets/iconlist.e981148f.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/queryNeedData.80e9e1d5.js","assets/localRequestFile.11b20013.js","assets/Avatar.b926ebae.js","assets/utils.e2a66002.js","assets/Tag.616049f1.js","assets/iconlist.e4990db2.css"]),delay:0,loadingComponent:p("div",{innerHTML:"loading"})}),Notive:o({loader:()=>t(()=>import("./notive.22c74094.js"),["assets/notive.22c74094.js","assets/vue.78b138a2.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/notive.e3b0c442.css"]),delay:0}),Acolor:o({loader:()=>t(()=>import("./acolor.935c792b.js"),["assets/acolor.935c792b.js","assets/vue.78b138a2.js","assets/localRequestFile.11b20013.js","assets/index.a49a4610.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/acolor.e63e5d39.css"]),delay:0}),AWallpaper:o({loader:()=>t(()=>import("./awallpaper.f4160db2.js"),["assets/awallpaper.f4160db2.js","assets/index.a49a4610.js","assets/vue.78b138a2.js","assets/init.89db40ad.js","assets/index.25712eee.css","assets/localRequestFile.11b20013.js","assets/awallpaper.4422ade5.css"]),delay:0})};function L(i){let n=[],e=Object.values(i);if(e){for(let r=0;r<e.length;r++)if(e[r].is_menu){let d=e[r];n.push(d)}}return n}function T(i,n=!0){let e=JSON.parse(JSON.stringify(i));function r(l){let s=[];for(let a=0;a<l.length;a++){const c=l[a].classtype;s.push(c)}return s.filter((a,c)=>s.indexOf(a)===c)}function d(){for(let l=0;l<_.length-1;l++)e.push({name:"divider",key:"divider-"+_[l],type:"divider",classtype:_[l]})}let _=r(e);return _.sort(),n&&d(),e.sort((l,s)=>l.classtype-s.classtype),e}export{b as _,A as c,T as m,L as q};