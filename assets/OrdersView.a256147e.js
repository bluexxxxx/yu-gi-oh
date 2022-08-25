import{_ as D,W as B,r as P,e as $,F as s,G as a,H as t,I as i,J as g,K as h,bc as x,Z as v,$ as S,X as V,M as q,N as A,a0 as c,a1 as f,O as C}from"./index.acc27337.js";import{_ as E}from"./Space.756ad5df.js";import{_ as F}from"./Pagination.97bd8b5d.js";import{_ as L,a as M}from"./Table.281366c5.js";import{_ as z}from"./Button.69bcb57d.js";import"./use-rtl.1606ff06.js";import"./Input.52c03417.js";import"./Scrollbar.355b8ba7.js";import"./toString.264dffb0.js";import"./delegate.d660cb22.js";import"./FadeInExpandTransition.fa9e53b5.js";import"./Popover.19ce6a88.js";import"./keep.76d496a2.js";import"./Tag.396caf99.js";import"./upperFirst.c6d82e7e.js";const I=d=>(q("data-v-89e41313"),d=d(),A(),d),G=I(()=>t("h1",null,"\u8A02\u55AE\u7BA1\u7406",-1)),H={class:"container"},J={class:"ordersbox"},K=I(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u4F7F\u7528\u8005"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1"),t("th",null,"\u522A\u9664")])],-1)),T={key:0},U=C(" \u522A\u9664 "),W={key:1},X=C(" \u522A\u9664 "),Z={__name:"OrdersView",setup(d){const m=B([]),l=P(1),_=5,y=$(()=>m.slice(l.value*_-_,l.value*_)),k=async(n,o)=>{try{await x.delete("/orders/"+n),v.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),m.splice(o,1)}catch(r){v.fire({icon:"error",title:"\u5931\u6557",text:r.isAxiosError?r.response.data.message:r.message})}};return(async()=>{try{const{data:n}=await x.get("/orders/all");m.push(...n.result.map(o=>(o.totalPrice=o.products.reduce((r,u)=>r+u.product.price*u.quantity,0),o)))}catch(n){console.log(n),v.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(n,o)=>{const r=L,u=z,N=M,O=E,b=F;return s(),a(h,null,[G,t("div",H,[t("div",J,[i(r),t("div",null,[i(O,{vertical:""},{default:g(()=>[i(N,{striped:""},{default:g(()=>[K,t("tbody",null,[(s(!0),a(h,null,S(V(y),(e,w)=>(s(),a(h,null,[V(y).length>0?(s(),a("tr",{key:e._id},[t("td",null,c(e._id),1),t("td",null,c(new Date(e.date).toLocaleDateString()),1),t("td",null,c(e.user.account),1),t("td",null,c(e.totalPrice),1),t("td",null,[t("ul",null,[(s(!0),a(h,null,S(e.products,p=>(s(),a("li",{key:p._id},c(p.product.name)+" x "+c(p.quantity),1))),128))])]),l.value===1?(s(),a("td",T,[i(u,{type:"error",onClick:p=>k(e._id,w),loading:n.loading},{default:g(()=>[U]),_:2},1032,["onClick","loading"])])):f("",!0),l.value>1?(s(),a("td",W,[i(u,{type:"error",onClick:p=>k(e._id,w+(l.value-1)*_),loading:n.loading},{default:g(()=>[X]),_:2},1032,["onClick","loading"])])):f("",!0)])):f("",!0)],64))),256))])]),_:1})]),_:1})]),i(b,{page:l.value,"onUpdate:page":o[0]||(o[0]=e=>l.value=e),"page-count":Math.ceil(m.length/_)},null,8,["page","page-count"])])])],64)}}},pt=D(Z,[["__scopeId","data-v-89e41313"]]);export{pt as default};