import{_ as E,W as k,r as F,F as f,G as g,H as n,I as l,J as a,K as y,aN as v,Z as _,aK as z,$ as B,M,N as K,O as u,a0 as w,a1 as G}from"./index.e6f804b5.js";import{_ as H}from"./Button.8ec095fd.js";import{_ as J}from"./Modal.23030a20.js";import{_ as L}from"./Space.08685c9c.js";import{_ as O}from"./Upload.f51f0f2f.js";import{a as T,_ as W}from"./FormItem.0f15ad00.js";import{_ as Z}from"./Input.f4055f64.js";import{_ as j,a as q}from"./Table.10ad34be.js";import"./use-rtl.e684085e.js";import"./FadeInExpandTransition.d024d85f.js";import"./Scrollbar.779fc948.js";import"./delegate.64eb1156.js";import"./Card.591d87c1.js";import"./Close.82cd7a31.js";import"./replaceable.9eb0e7fa.js";import"./upperFirst.7f2578c3.js";import"./toString.c22ac401.js";import"./index.3c6b3f63.js";import"./index.d62e03b3.js";import"./keep.76d496a2.js";import"./Add.e778a72b.js";import"./utils.3f54be48.js";import"./Tooltip.f661f2a8.js";import"./get.3cc54b5e.js";const x=c=>(M("data-v-40d81eb6"),c=c(),K(),c),P=x(()=>n("h1",null,"\u5C08\u6B04\u7BA1\u7406",-1)),Q={class:"container"},R={class:"decksbox"},X=u(" \u65B0\u589E\u5C08\u6B04 "),Y=u("\u9EDE\u64CA\u4E0A\u50B3"),ee=u(" \u78BA\u8A8D "),te=x(()=>n("thead",null,[n("tr",null,[n("th",null,"\u5716\u7247"),n("th",null,"\u540D\u7A31"),n("th",null,"\u63CF\u8FF0"),n("th",null,"\u7DE8\u8F2F"),n("th",null,"\u522A\u9664")])],-1)),oe=["src"],le={style:{"white-space":"pre"}},ne=u(" \u7DE8\u8F2F "),se=u(" \u522A\u9664 "),ae={__name:"DecksView",setup(c){const i=k([]),m=F(!1),t=k({_id:"",name:"",image:[],description:"",playstyle:"",decklogic:"",article:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),h=(s,e)=>{m.value=!0,t._id=s,e>-1?(t.name=i[e].name,t.description=i[e].description,t.playstyle=i[e].playstyle,t.decklogic=i[e].decklogic,t.article=i[e].article):(t.name="",t.description="",t.article="",t.playstyle="",t.decklogic=""),t.image=[],t.idx=e,t.dialog=!0,t.valid=!1,t.submitting=!1},V=async()=>{t.submitting=!0;const s=new FormData;for(const e in t)["_id","idx","dialog","valid","submitting"].includes(e)||(e==="image"?t.image.length>0&&s.append(e,t[e][0].file):s.append(e,t[e]));try{if(t._id.length===0){const{data:e}=await v.post("/decks",s);i.push(e.result),_.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:e}=await v.patch("/decks/"+t._id,s);i[t.idx]=e.result,_.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}t.dialog=!1}catch(e){_.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}t.submitting=!1},C=async(s,e)=>{try{await v.delete("/decks/"+s),_.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),i.splice(e,1)}catch(r){_.fire({icon:"error",title:"\u5931\u6557",text:r.isAxiosError?r.response.data.message:r.message})}};return(async()=>{try{const{data:s}=await v.get("/decks/all");i.push(...s.result)}catch(s){console.log(s),_.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,e)=>{const r=H,U=O,p=T,d=Z,S=W,D=J,N=j,I=q,$=L;return f(),g(y,null,[P,n("div",Q,[n("div",R,[l(r,{type:"primary",onClick:e[0]||(e[0]=o=>h("",-1))},{default:a(()=>[X]),_:1}),l(D,{show:m.value,"onUpdate:show":e[9]||(e[9]=o=>m.value=o),preset:"dialog",title:"\u65B0\u589E\u5361\u7247"},{default:a(()=>[l(S,{modelValue:t.valid,"onUpdate:modelValue":e[8]||(e[8]=o=>t.valid=o),onSubmit:z(V,["prevent"])},{default:a(()=>[l(p,{label:"\u5716\u7247"},{default:a(()=>[l(U,{"file-list":t.image,"onUpdate:file-list":e[1]||(e[1]=o=>t.image=o),"list-type":"image-card"},{default:a(()=>[l(r,null,{default:a(()=>[Y]),_:1})]),_:1},8,["file-list"])]),_:1}),l(p,{label:"\u5C08\u6B04\u540D\u7A31"},{default:a(()=>[l(d,{value:t.name,"onUpdate:value":e[2]||(e[2]=o=>t.name=o),placeholder:"\u8ACB\u8F38\u5165\u5C08\u6B04\u540D\u7A31"},null,8,["value"])]),_:1}),l(p,{label:"\u89C0\u5FF5\u89E3\u6790"},{default:a(()=>[l(d,{type:"textarea",autosize:"",value:t.description,"onUpdate:value":e[3]||(e[3]=o=>t.description=o),placeholder:"\u8ACB\u8F38\u5165\u89C0\u5FF5\u89E3\u6790"},null,8,["value"])]),_:1}),l(p,{label:"\u904A\u73A9\u98A8\u683C"},{default:a(()=>[l(d,{type:"textarea",autosize:"",value:t.playstyle,"onUpdate:value":e[4]||(e[4]=o=>t.playstyle=o),placeholder:"\u8ACB\u8F38\u5165\u904A\u73A9\u98A8\u683C"},null,8,["value"])]),_:1}),l(p,{label:"\u7D44\u724C\u908F\u8F2F"},{default:a(()=>[l(d,{type:"textarea",autosize:"",value:t.decklogic,"onUpdate:value":e[5]||(e[5]=o=>t.decklogic=o),placeholder:"\u8ACB\u8F38\u5165\u7D44\u724C\u908F\u8F2F"},null,8,["value"])]),_:1}),l(p,{label:"\u6587\u7AE0\u4F86\u6E90"},{default:a(()=>[l(d,{value:t.article,"onUpdate:value":e[6]||(e[6]=o=>t.article=o),placeholder:"\u8ACB\u8F38\u5165\u6587\u7AE0\u7DB2\u5740"},null,8,["value"])]),_:1}),l(r,{type:"primary","attr-type":"submit",onClick:e[7]||(e[7]=o=>m.value=!1)},{default:a(()=>[ee]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["show"]),l(N),n("div",null,[l($,{vertical:""},{default:a(()=>[l(I,{striped:""},{default:a(()=>[te,n("tbody",null,[(f(!0),g(y,null,B(i,(o,b)=>(f(),g(y,null,[i.length>0?(f(),g("tr",{key:o._id},[n("td",null,[n("img",{src:o.image},null,8,oe)]),n("td",null,w(o.name),1),n("td",le,w(o.description),1),n("td",null,[l(r,{type:"info",onClick:A=>h(o._id,b)},{default:a(()=>[ne]),_:2},1032,["onClick"])]),n("td",null,[l(r,{type:"error",onClick:A=>C(o._id,b)},{default:a(()=>[se]),_:2},1032,["onClick"])])])):G("",!0)],64))),256))])]),_:1})]),_:1})])])])],64)}}},Ae=E(ae,[["__scopeId","data-v-40d81eb6"]]);export{Ae as default};
