import{_ as k,aC as w,W as V,F as s,G as l,I as _,J as n,Y as C,Z as S,L as q,K as I,$ as N,M as B,N as P,H as e,a3 as u,a0 as i,X as U,a1 as $,O as F,P as L}from"./index.e6f804b5.js";import{_ as D}from"./InputNumber.fb5f0078.js";import{_ as E}from"./Space.08685c9c.js";import{_ as G}from"./Button.8ec095fd.js";import{_ as H}from"./Card.591d87c1.js";import"./use-rtl.e684085e.js";import"./Input.f4055f64.js";import"./Scrollbar.779fc948.js";import"./delegate.64eb1156.js";import"./replaceable.9eb0e7fa.js";import"./upperFirst.7f2578c3.js";import"./toString.c22ac401.js";import"./FadeInExpandTransition.d024d85f.js";import"./Add.e778a72b.js";import"./Close.82cd7a31.js";const J=o=>(B("data-v-ee9be56f"),o=o(),P(),o),K={class:"container"},M=J(()=>e("h1",null,"\u5546\u54C1\u5C08\u5340",-1)),O={class:"n-card-container"},T={class:"imgbox"},W=["src"],X={class:"btn"},Y=F(" \u52A0\u5165\u8CFC\u7269\u8ECA "),Z={__name:"ProductView",setup(o){const m=w(),{addCart:d}=m,a=V([]);return(async()=>{try{const{data:c}=await C.get("/products");a.push(...c.result.map(r=>({...r,quantity:0})))}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,r)=>{const f=D,g=E,h=G,v=H,y=L,b=q;return s(),l("div",K,[M,_(b,{cols:"1 s:2 l:3",responsive:"screen",class:"mg-t"},{default:n(()=>[(s(!0),l(I,null,N(a,(t,x)=>(s(),u(y,{key:x},{default:n(()=>[e("div",O,[a.length>0?(s(),u(v,{key:t._id},{cover:n(()=>[e("div",T,[e("img",{src:t.image},null,8,W)])]),default:n(()=>[e("p",null,i(t.name),1),e("h2",null,"\u5546\u54C1\u50F9\u683C "+i(t.price),1),e("h3",null,i(t.description),1),_(g,{vertical:""},{default:n(()=>[_(f,{class:"buybutton",value:t.quantity,"onUpdate:value":p=>t.quantity=p,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),e("div",X,[_(h,{onClick:p=>U(d)({product:t._id,quantity:t.quantity}),round:"",color:"rgb(254,74,14)"},{default:n(()=>[Y]),_:2},1032,["onClick"])])]),_:2},1024)):$("",!0)])]),_:2},1024))),128))]),_:1})])}}},lt=k(Z,[["__scopeId","data-v-ee9be56f"]]);export{lt as default};
