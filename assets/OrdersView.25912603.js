import{_ as D,X as P,r as B,e as $,F as s,G as a,H as t,I as i,J as g,K as h,bd as x,$ as v,a0 as S,Y as V,N as q,O as A,a1 as c,a2 as f,P as C}from"./index.203bee11.js";import{_ as E}from"./Space.273e991b.js";import{_ as F}from"./Pagination.d92230b8.js";import{_ as L,a as z}from"./Table.4838ea35.js";import{_ as G}from"./Button.8763d6b9.js";import"./use-rtl.900ecf69.js";import"./Input.24b0556f.js";import"./Scrollbar.b386f35e.js";import"./toString.0293ed04.js";import"./delegate.d660cb22.js";import"./FadeInExpandTransition.ff762a0e.js";import"./Popover.b93c305d.js";import"./keep.76d496a2.js";import"./Tag.69000419.js";import"./upperFirst.0d8f5109.js";const I=d=>(q("data-v-89e41313"),d=d(),A(),d),H=I(()=>t("h1",null,"\u8A02\u55AE\u7BA1\u7406",-1)),J={class:"container"},K={class:"ordersbox"},M=I(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u4F7F\u7528\u8005"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1"),t("th",null,"\u522A\u9664")])],-1)),T={key:0},U=C(" \u522A\u9664 "),X={key:1},Y=C(" \u522A\u9664 "),j={__name:"OrdersView",setup(d){const m=P([]),l=B(1),_=5,y=$(()=>m.slice(l.value*_-_,l.value*_)),k=async(n,o)=>{try{await x.delete("/orders/"+n),v.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),m.splice(o,1)}catch(r){v.fire({icon:"error",title:"\u5931\u6557",text:r.isAxiosError?r.response.data.message:r.message})}};return(async()=>{try{const{data:n}=await x.get("/orders/all");m.push(...n.result.map(o=>(o.totalPrice=o.products.reduce((r,u)=>r+u.product.price*u.quantity,0),o)))}catch(n){console.log(n),v.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(n,o)=>{const r=L,u=G,N=z,O=E,b=F;return s(),a(h,null,[H,t("div",J,[t("div",K,[i(r),t("div",null,[i(O,{vertical:""},{default:g(()=>[i(N,{striped:""},{default:g(()=>[M,t("tbody",null,[(s(!0),a(h,null,S(V(y),(e,w)=>(s(),a(h,null,[V(y).length>0?(s(),a("tr",{key:e._id},[t("td",null,c(e._id),1),t("td",null,c(new Date(e.date).toLocaleDateString()),1),t("td",null,c(e.user.account),1),t("td",null,c(e.totalPrice),1),t("td",null,[t("ul",null,[(s(!0),a(h,null,S(e.products,p=>(s(),a("li",{key:p._id},c(p.product.name)+" x "+c(p.quantity),1))),128))])]),l.value===1?(s(),a("td",T,[i(u,{type:"error",onClick:p=>k(e._id,w),loading:n.loading},{default:g(()=>[U]),_:2},1032,["onClick","loading"])])):f("",!0),l.value>1?(s(),a("td",X,[i(u,{type:"error",onClick:p=>k(e._id,w+(l.value-1)*_),loading:n.loading},{default:g(()=>[Y]),_:2},1032,["onClick","loading"])])):f("",!0)])):f("",!0)],64))),256))])]),_:1})]),_:1})]),i(b,{page:l.value,"onUpdate:page":o[0]||(o[0]=e=>l.value=e),"page-count":Math.ceil(m.length/_)},null,8,["page","page-count"])])])],64)}}},pt=D(j,[["__scopeId","data-v-89e41313"]]);export{pt as default};
