import{_ as k,W as U,r as b,e as C,F as l,G as p,H as t,I as a,J as u,K as d,aN as f,Z as m,$ as B,X as h,M as A,N as D,a0 as v,a1 as E,O as F}from"./index.c7164d39.js";import{_ as M}from"./Pagination.a4e89120.js";import{_ as $}from"./Space.1668ef72.js";import{_ as z,a as G}from"./Table.290d1e3d.js";import{_ as H}from"./Button.1feb4102.js";import"./use-rtl.7cada67b.js";import"./Input.a124a44e.js";import"./Scrollbar.c69640d2.js";import"./delegate.64eb1156.js";import"./FadeInExpandTransition.6f54bce6.js";import"./Popover.6bd0b042.js";import"./index.aa3a84e7.js";import"./index.d62e03b3.js";import"./toString.935b6664.js";import"./get.63d948e6.js";import"./keep.76d496a2.js";import"./Tag.3d327440.js";import"./Close.6136751c.js";import"./index.20db2190.js";import"./upperFirst.21c61fe8.js";const x=r=>(A("data-v-7c3fedac"),r=r(),D(),r),J=x(()=>t("h1",null,"\u6703\u54E1\u7BA1\u7406",-1)),K={class:"container"},L={class:"usersbox"},O=x(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"\u4F7F\u7528\u8005"),t("th",null,"\u522A\u9664")])],-1)),P=F("\u522A\u9664"),T={__name:"UsersView",setup(r){const n=U([]),c=b(1),i=5,g=C(()=>n.slice(c.value*i-i,c.value*i)),y=async(e,_)=>{try{await f.delete("/users/"+e),m.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),n.splice(_,1)}catch(s){m.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}};return(async()=>{try{const{data:e}=await f.get("/users/all");n.push(...e.result),console.log(n)}catch(e){console.log(e),m.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u6703\u54E1\u8CC7\u6599"})}})(),(e,_)=>{const s=z,w=H,V=G,I=$,N=M;return l(),p(d,null,[J,t("div",K,[t("div",L,[a(s),t("div",null,[a(I,{vertical:""},{default:u(()=>[a(V,{striped:""},{default:u(()=>[O,t("tbody",null,[(l(!0),p(d,null,B(h(g),(o,S)=>(l(),p(d,null,[h(g).length>0?(l(),p("tr",{key:o._id},[t("td",null,v(o._id),1),t("td",null,v(o.account),1),t("td",null,[a(w,{type:"error",onClick:X=>y(o._id,S)},{default:u(()=>[P]),_:2},1032,["onClick"])])])):E("",!0)],64))),256))])]),_:1})]),_:1})]),a(N,{page:c.value,"onUpdate:page":_[0]||(_[0]=o=>c.value=o),"page-count":Math.ceil(n.length/i)},null,8,["page","page-count"])])])],64)}}},mt=k(T,[["__scopeId","data-v-7c3fedac"]]);export{mt as default};
