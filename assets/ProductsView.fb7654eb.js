import{c as we,an as xe,j as ne,k as l,l as Y,m as v,ai as oe,d as ye,u as ke,x as re,r as z,q as Se,n as Ce,e as P,a9 as q,a8 as w,y as Be,b3 as G,h as m,ak as B,_ as Ve,W as ae,F as D,G as T,H as s,I as r,J as f,K as J,bc as Z,Z as I,bb as Re,$ as $e,X as ie,M as Fe,N as ze,O as U,a0 as Q,a1 as We}from"./index.23b0ca4b.js";import{_ as Me}from"./Upload.efa274a8.js";import{_ as Pe,a as Ue}from"./Pagination.a76b6872.js";import{i as le,u as Ne,a as He,N as Le,_ as De}from"./Button.9d89bb21.js";import{c as V}from"./use-rtl.c1e91907.js";import{c as ee}from"./FadeInExpandTransition.76abbc7b.js";import{_ as Te}from"./Modal.4aeb7a76.js";import{_ as Ie}from"./Space.b3dc3fef.js";import{a as je,_ as Ae}from"./FormItem.3b2bb2df.js";import{_ as Ke}from"./Input.296a4134.js";import{_ as Oe}from"./InputNumber.f027d0e5.js";import{_ as Ee,a as Xe}from"./Table.1da3a8a5.js";import{_ as Ye}from"./Avatar.0e0c0552.js";import"./Add.d3cf3b2b.js";import"./utils.3f54be48.js";import"./Scrollbar.0bb5a8ce.js";import"./toString.0179cbee.js";import"./delegate.d660cb22.js";import"./Tooltip.00a317b5.js";import"./Popover.7437eb70.js";import"./keep.76d496a2.js";import"./Tag.528c576f.js";import"./upperFirst.0a0eecce.js";import"./Card.2b7126b3.js";const qe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Ge=t=>{const{primaryColor:p,opacityDisabled:g,borderRadius:c,textColor3:u}=t,_="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},qe),{iconColor:u,textColor:"white",loadingColor:p,opacityDisabled:g,railColor:_,railColorActive:p,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:c,railBorderRadiusMedium:c,railBorderRadiusLarge:c,buttonBorderRadiusSmall:c,buttonBorderRadiusMedium:c,buttonBorderRadiusLarge:c,boxShadowFocus:`0 0 0 2px ${xe(p,{alpha:.2})}`})},Je={name:"Switch",common:we,self:Ge},Ze=Je,Qe=ne("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[l("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),l("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),l("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),ne("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[le({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),l("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),l("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),l("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Y("&:focus",[l("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),v("round",[l("rail","border-radius: calc(var(--n-rail-height) / 2);",[l("button","border-radius: calc(var(--n-button-height) / 2);")])]),oe("disabled",[oe("icon",[v("rubber-band",[v("pressed",[l("rail",[l("button","max-width: var(--n-button-width-pressed);")])]),l("rail",[Y("&:active",[l("button","max-width: var(--n-button-width-pressed);")])]),v("active",[v("pressed",[l("rail",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),l("rail",[Y("&:active",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),v("active",[l("rail",[l("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),l("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[l("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[le()]),l("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),v("active",[l("rail","background-color: var(--n-rail-color-active);")]),v("loading",[l("rail",`
 cursor: wait;
 `)]),v("disabled",[l("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),et=Object.assign(Object.assign({},re.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),tt=ye({name:"Switch",props:et,setup(t){const{mergedClsPrefixRef:p,inlineThemeDisabled:g}=ke(t),c=re("Switch","-switch",Qe,Ze,t,p),u=Ne(t),{mergedSizeRef:_,mergedDisabledRef:d}=u,y=z(t.defaultValue),n=Se(t,"value"),b=Ce(n,y),k=P(()=>b.value===t.checkedValue),S=z(!1),o=z(!1),e=P(()=>{const{railStyle:i}=t;if(!!i)return i({focused:o.value,checked:k.value})});function h(i){const{"onUpdate:value":R,onChange:$,onUpdateValue:F}=t,{nTriggerFormInput:a,nTriggerFormChange:L}=u;R&&ee(R,i),F&&ee(F,i),$&&ee($,i),y.value=i,a(),L()}function j(){const{nTriggerFormFocus:i}=u;i()}function C(){const{nTriggerFormBlur:i}=u;i()}function N(){t.loading||d.value||(b.value!==t.checkedValue?h(t.checkedValue):h(t.uncheckedValue))}function A(){o.value=!0,j()}function K(){o.value=!1,C(),S.value=!1}function O(i){t.loading||d.value||i.key===" "&&(b.value!==t.checkedValue?h(t.checkedValue):h(t.uncheckedValue),S.value=!1)}function E(i){t.loading||d.value||i.key===" "&&(i.preventDefault(),S.value=!0)}const H=P(()=>{const{value:i}=_,{self:{opacityDisabled:R,railColor:$,railColorActive:F,buttonBoxShadow:a,buttonColor:L,boxShadowFocus:se,loadingColor:de,textColor:ce,iconColor:ue,[V("buttonHeight",i)]:W,[V("buttonWidth",i)]:he,[V("buttonWidthPressed",i)]:pe,[V("railHeight",i)]:M,[V("railWidth",i)]:X,[V("railBorderRadius",i)]:me,[V("buttonBorderRadius",i)]:fe},common:{cubicBezierEaseInOut:ge}}=c.value,_e=q((w(M)-w(W))/2),be=q(Math.max(w(M),w(W))),ve=w(M)>w(W)?X:q(w(X)+w(W)-w(M));return{"--n-bezier":ge,"--n-button-border-radius":fe,"--n-button-box-shadow":a,"--n-button-color":L,"--n-button-width":he,"--n-button-width-pressed":pe,"--n-button-height":W,"--n-height":be,"--n-offset":_e,"--n-opacity-disabled":R,"--n-rail-border-radius":me,"--n-rail-color":$,"--n-rail-color-active":F,"--n-rail-height":M,"--n-rail-width":X,"--n-width":ve,"--n-box-shadow-focus":se,"--n-loading-color":de,"--n-text-color":ce,"--n-icon-color":ue}}),x=g?Be("switch",P(()=>_.value[0]),H,t):void 0;return{handleClick:N,handleBlur:K,handleFocus:A,handleKeyup:O,handleKeydown:E,mergedRailStyle:e,pressed:S,mergedClsPrefix:p,mergedValue:b,checked:k,mergedDisabled:d,cssVars:g?void 0:H,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:p,checked:g,mergedRailStyle:c,onRender:u,$slots:_}=this;u==null||u();const{checked:d,unchecked:y,icon:n,"checked-icon":b,"unchecked-icon":k}=_,S=!(G(n)&&G(b)&&G(k));return m("div",{role:"switch","aria-checked":g,class:[`${t}-switch`,this.themeClass,S&&`${t}-switch--icon`,g&&`${t}-switch--active`,p&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},m("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:c},B(d,o=>B(y,e=>o||e?m("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},m("div",{class:`${t}-switch__rail-placeholder`},m("div",{class:`${t}-switch__button-placeholder`}),o),m("div",{class:`${t}-switch__rail-placeholder`},m("div",{class:`${t}-switch__button-placeholder`}),e)):null)),m("div",{class:`${t}-switch__button`},B(n,o=>B(b,e=>B(k,h=>m(He,null,{default:()=>this.loading?m(Le,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(e||o)?m("div",{class:`${t}-switch__button-icon`,key:e?"checked-icon":"icon"},e||o):!this.checked&&(h||o)?m("div",{class:`${t}-switch__button-icon`,key:h?"unchecked-icon":"icon"},h||o):null})))),B(d,o=>o&&m("div",{key:"checked",class:`${t}-switch__checked`},o)),B(y,o=>o&&m("div",{key:"unchecked",class:`${t}-switch__unchecked`},o)))))}});const te=t=>(Fe("data-v-924cea85"),t=t(),ze(),t),nt=te(()=>s("h1",null,"\u5546\u54C1\u7BA1\u7406",-1)),ot={class:"container"},at={class:"productsbox"},it=U(" \u65B0\u589E\u5546\u54C1 "),lt=U("\u9EDE\u64CA\u4E0A\u50B3"),rt=te(()=>s("h4",null,"\u8ACB\u9078\u64C7\u5546\u54C1\u985E\u578B",-1)),st=U("\u662F\u5426\u4E0A\u67B6 "),dt=U(" \u78BA\u8A8D "),ct=te(()=>s("thead",null,[s("tr",null,[s("th",null,"\u5716\u7247"),s("th",null,"\u540D\u7A31"),s("th",null,"\u50F9\u683C"),s("th",null,"\u63CF\u8FF0"),s("th",null,"\u7DE8\u8F2F")])],-1)),ut=U(" \u7DE8\u8F2F "),ht={__name:"ProductsView",setup(t){const p=ae([]),g=z(!1),c=z(!1),u=z(1),_=10,d=P(()=>p.slice(u.value*_-_,u.value*_)),y=[{label:"\u5927\u76D2",value:"\u5927\u76D2"},{label:"\u5C0F\u76D2",value:"\u5C0F\u76D2"}],n=ae({_id:"",name:"",price:0,category:"",sell:!1,image:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),b=o=>{const e=d.value.findIndex(h=>h._id===o);c.value=!0,n._id=o,e>-1?(n.name=d.value[e].name,n.price=d.value[e].price,n.category=d.value[e].category,n.description=d.value[e].description,n.sell=d.value[e].sell):(n.name="",n.price=0,n.category="",n.description="",n.sell=!1),n.image=[],n.idx=e,n.dialog=!0,n.valid=!1,n.submitting=!1},k=async()=>{n.submitting=!0,g.value=!0;const o=new FormData;for(const e in n)["_id","idx","dialog","valid","submitting"].includes(e)||(e==="image"?n.image.length>0&&o.append(e,n[e][0].file):o.append(e,n[e]));try{if(n._id.length===0){const{data:e}=await Z.post("/products",o);p.push(e.result),I.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:e}=await Z.patch("/products/"+n._id,o);p[n.idx]=e.result,I.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}n.dialog=!1}catch(e){I.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}n.submitting=!1,g.value=!1};return(async()=>{try{const{data:o}=await Z.get("/products/all");p.push(...o.result)}catch(o){console.log(o),I.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError?o.response.data.message:o.message})}})(),(o,e)=>{const h=De,j=Me,C=je,N=Ke,A=Oe,K=Ue,O=tt,E=Ae,H=Te,x=Ee,i=Ye,R=Xe,$=Ie,F=Pe;return D(),T(J,null,[nt,s("div",ot,[s("div",at,[r(h,{type:"primary",onClick:e[0]||(e[0]=a=>b(""))},{default:f(()=>[it]),_:1}),r(H,{show:c.value,"onUpdate:show":e[9]||(e[9]=a=>c.value=a),preset:"dialog",title:"\u65B0\u589E\u5546\u54C1"},{default:f(()=>[r(E,{modelValue:n.valid,"onUpdate:modelValue":e[8]||(e[8]=a=>n.valid=a),onSubmit:Re(k,["prevent"])},{default:f(()=>[r(C,{label:"\u5716\u7247"},{default:f(()=>[r(j,{"file-list":n.image,"onUpdate:file-list":e[1]||(e[1]=a=>n.image=a),"list-type":"image-card"},{default:f(()=>[r(h,null,{default:f(()=>[lt]),_:1})]),_:1},8,["file-list"])]),_:1}),r(C,{label:"\u5546\u54C1\u540D\u7A31"},{default:f(()=>[r(N,{value:n.name,"onUpdate:value":e[2]||(e[2]=a=>n.name=a),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u540D\u7A31"},null,8,["value"])]),_:1}),r(C,{label:"\u5546\u54C1\u50F9\u683C"},{default:f(()=>[r(A,{value:n.price,"onUpdate:value":e[3]||(e[3]=a=>n.price=a),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u50F9\u683C"},null,8,["value"])]),_:1}),rt,r(K,{value:n.category,"onUpdate:value":e[4]||(e[4]=a=>n.category=a),options:y},null,8,["value"]),r(C,{label:"\u5546\u54C1\u63CF\u8FF0"},{default:f(()=>[r(N,{value:n.description,"onUpdate:value":e[5]||(e[5]=a=>n.description=a),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u63CF\u8FF0"},null,8,["value"])]),_:1}),r(C,{label:"\u4E0A\u67B6"},{default:f(()=>[r(O,{value:n.sell,"onUpdate:value":e[6]||(e[6]=a=>n.sell=a)},null,8,["value"]),st]),_:1}),r(h,{type:"primary","attr-type":"submit",onClick:e[7]||(e[7]=a=>c.value=!1)},{default:f(()=>[dt]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["show"]),r(x),s("div",null,[r($,{vertical:""},{default:f(()=>[r(R,{striped:""},{default:f(()=>[ct,s("tbody",null,[(D(!0),T(J,null,$e(ie(d),a=>(D(),T(J,null,[ie(d).length>0?(D(),T("tr",{key:a._id},[s("td",null,[r(i,{size:100,"object-fit":"contain",color:"rgba(255, 255, 255, 0)",src:a.image},null,8,["src"])]),s("td",null,Q(a.name),1),s("td",null,Q(a.price),1),s("td",null,Q(a.description),1),s("td",null,[r(h,{type:"info",onClick:L=>b(a._id),loading:g.value},{default:f(()=>[ut]),_:2},1032,["onClick","loading"])])])):We("",!0)],64))),256))])]),_:1})]),_:1})]),r(F,{page:u.value,"onUpdate:page":e[10]||(e[10]=a=>u.value=a),"page-count":Math.ceil(p.length/_)},null,8,["page","page-count"])])])],64)}}},Ht=Ve(ht,[["__scopeId","data-v-924cea85"]]);export{Ht as default};
