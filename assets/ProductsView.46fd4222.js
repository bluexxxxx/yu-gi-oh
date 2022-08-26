import{c as ye,ao as xe,j as ie,k as l,l as Z,m as y,aj as le,d as ke,u as Ce,x as ce,r as H,q as Se,n as Be,e as I,aa as ee,a9 as x,y as Ve,b4 as te,h as m,al as F,_ as $e,X as se,F as S,G as B,H as c,I as s,J as h,K as oe,bd as O,$ as N,a1 as X,bc as Re,a0 as Fe,Y as re,N as ze,O as We,P as V,a2 as A}from"./index.203bee11.js";import{_ as Pe}from"./Upload.4a7d3c0a.js";import{_ as Ue,a as Me}from"./Pagination.d92230b8.js";import{i as de,u as Ne,a as He,N as Le,_ as De}from"./Button.8763d6b9.js";import{c as z}from"./use-rtl.900ecf69.js";import{c as ne}from"./FadeInExpandTransition.ff762a0e.js";import{_ as Te}from"./Modal.d1113b28.js";import{_ as je}from"./Space.273e991b.js";import{a as Ae,_ as Ie}from"./FormItem.b8ad8c25.js";import{_ as Ke}from"./Input.24b0556f.js";import{_ as Ee}from"./InputNumber.6c43dc1b.js";import{_ as Oe,a as Xe}from"./Table.4838ea35.js";import{_ as Ye}from"./Avatar.f06ef1a9.js";import"./Add.89fa5129.js";import"./utils.3f54be48.js";import"./Scrollbar.b386f35e.js";import"./toString.0293ed04.js";import"./delegate.d660cb22.js";import"./Tooltip.96270933.js";import"./Popover.b93c305d.js";import"./keep.76d496a2.js";import"./Tag.69000419.js";import"./upperFirst.0d8f5109.js";import"./Card.2f786b63.js";const qe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Ge=t=>{const{primaryColor:d,opacityDisabled:_,borderRadius:p,textColor3:r}=t,f="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},qe),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:_,railColor:f,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:p,railBorderRadiusMedium:p,railBorderRadiusLarge:p,buttonBorderRadiusSmall:p,buttonBorderRadiusMedium:p,buttonBorderRadiusLarge:p,boxShadowFocus:`0 0 0 2px ${xe(d,{alpha:.2})}`})},Je={name:"Switch",common:ye,self:Ge},Qe=Je,Ze=ie("switch",`
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
 `),ie("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[de({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),l("checked, unchecked",`
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
 `),Z("&:focus",[l("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),y("round",[l("rail","border-radius: calc(var(--n-rail-height) / 2);",[l("button","border-radius: calc(var(--n-button-height) / 2);")])]),le("disabled",[le("icon",[y("rubber-band",[y("pressed",[l("rail",[l("button","max-width: var(--n-button-width-pressed);")])]),l("rail",[Z("&:active",[l("button","max-width: var(--n-button-width-pressed);")])]),y("active",[y("pressed",[l("rail",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),l("rail",[Z("&:active",[l("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),y("active",[l("rail",[l("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),l("rail",`
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
 `,[de()]),l("button",`
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
 `)]),y("active",[l("rail","background-color: var(--n-rail-color-active);")]),y("loading",[l("rail",`
 cursor: wait;
 `)]),y("disabled",[l("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),et=Object.assign(Object.assign({},ce.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),tt=ke({name:"Switch",props:et,setup(t){const{mergedClsPrefixRef:d,inlineThemeDisabled:_}=Ce(t),p=ce("Switch","-switch",Ze,Qe,t,d),r=Ne(t),{mergedSizeRef:f,mergedDisabledRef:b}=r,$=H(t.defaultValue),o=Se(t,"value"),v=Be(o,$),w=I(()=>v.value===t.checkedValue),k=H(!1),u=H(!1),i=I(()=>{const{railStyle:a}=t;if(!!a)return a({focused:u.value,checked:w.value})});function e(a){const{"onUpdate:value":W,onChange:P,onUpdateValue:U}=t,{nTriggerFormInput:L,nTriggerFormChange:n}=r;W&&ne(W,a),U&&ne(U,a),P&&ne(P,a),$.value=a,L(),n()}function g(){const{nTriggerFormFocus:a}=r;a()}function Y(){const{nTriggerFormBlur:a}=r;a()}function R(){t.loading||b.value||(v.value!==t.checkedValue?e(t.checkedValue):e(t.uncheckedValue))}function K(){u.value=!0,g()}function q(){u.value=!1,Y(),k.value=!1}function G(a){t.loading||b.value||a.key===" "&&(v.value!==t.checkedValue?e(t.checkedValue):e(t.uncheckedValue),k.value=!1)}function J(a){t.loading||b.value||a.key===" "&&(a.preventDefault(),k.value=!0)}const E=I(()=>{const{value:a}=f,{self:{opacityDisabled:W,railColor:P,railColorActive:U,buttonBoxShadow:L,buttonColor:n,boxShadowFocus:M,loadingColor:D,textColor:ue,iconColor:he,[z("buttonHeight",a)]:T,[z("buttonWidth",a)]:pe,[z("buttonWidthPressed",a)]:_e,[z("railHeight",a)]:j,[z("railWidth",a)]:Q,[z("railBorderRadius",a)]:me,[z("buttonBorderRadius",a)]:fe},common:{cubicBezierEaseInOut:ge}}=p.value,be=ee((x(j)-x(T))/2),ve=ee(Math.max(x(j),x(T))),we=x(j)>x(T)?Q:ee(x(Q)+x(T)-x(j));return{"--n-bezier":ge,"--n-button-border-radius":fe,"--n-button-box-shadow":L,"--n-button-color":n,"--n-button-width":pe,"--n-button-width-pressed":_e,"--n-button-height":T,"--n-height":ve,"--n-offset":be,"--n-opacity-disabled":W,"--n-rail-border-radius":me,"--n-rail-color":P,"--n-rail-color-active":U,"--n-rail-height":j,"--n-rail-width":Q,"--n-width":we,"--n-box-shadow-focus":M,"--n-loading-color":D,"--n-text-color":ue,"--n-icon-color":he}}),C=_?Ve("switch",I(()=>f.value[0]),E,t):void 0;return{handleClick:R,handleBlur:q,handleFocus:K,handleKeyup:G,handleKeydown:J,mergedRailStyle:i,pressed:k,mergedClsPrefix:d,mergedValue:v,checked:w,mergedDisabled:b,cssVars:_?void 0:E,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:d,checked:_,mergedRailStyle:p,onRender:r,$slots:f}=this;r==null||r();const{checked:b,unchecked:$,icon:o,"checked-icon":v,"unchecked-icon":w}=f,k=!(te(o)&&te(v)&&te(w));return m("div",{role:"switch","aria-checked":_,class:[`${t}-switch`,this.themeClass,k&&`${t}-switch--icon`,_&&`${t}-switch--active`,d&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},m("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:p},F(b,u=>F($,i=>u||i?m("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},m("div",{class:`${t}-switch__rail-placeholder`},m("div",{class:`${t}-switch__button-placeholder`}),u),m("div",{class:`${t}-switch__rail-placeholder`},m("div",{class:`${t}-switch__button-placeholder`}),i)):null)),m("div",{class:`${t}-switch__button`},F(o,u=>F(v,i=>F(w,e=>m(He,null,{default:()=>this.loading?m(Le,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(i||u)?m("div",{class:`${t}-switch__button-icon`,key:i?"checked-icon":"icon"},i||u):!this.checked&&(e||u)?m("div",{class:`${t}-switch__button-icon`,key:e?"unchecked-icon":"icon"},e||u):null})))),F(b,u=>u&&m("div",{key:"checked",class:`${t}-switch__checked`},u)),F($,u=>u&&m("div",{key:"unchecked",class:`${t}-switch__unchecked`},u)))))}});const ae=t=>(ze("data-v-55ebb46b"),t=t(),We(),t),ot=ae(()=>c("h1",null,"\u5546\u54C1\u7BA1\u7406",-1)),nt={class:"container"},at={class:"productsbox"},it=V(" \u65B0\u589E\u5546\u54C1 "),lt=V("\u9EDE\u64CA\u4E0A\u50B3"),st=ae(()=>c("h4",null,"\u8ACB\u9078\u64C7\u5546\u54C1\u985E\u578B",-1)),rt=V("\u662F\u5426\u4E0A\u67B6 "),dt=V(" \u78BA\u8A8D "),ct=ae(()=>c("thead",null,[c("tr",null,[c("th",null,"\u5716\u7247"),c("th",null,"\u540D\u7A31"),c("th",null,"\u50F9\u683C"),c("th",null,"\u63CF\u8FF0"),c("th",null,"\u7DE8\u8F2F"),c("th",null,"\u522A\u9664")])],-1)),ut={key:0},ht=V(" \u7DE8\u8F2F "),pt={key:1},_t=V(" \u7DE8\u8F2F "),mt={key:2},ft=V(" \u522A\u9664 "),gt={key:3},bt=V(" \u522A\u9664 "),vt={__name:"ProductsView",setup(t){const d=se([]),_=H(!1),p=H(!1),r=H(1),f=5,b=I(()=>d.slice(r.value*f-f,r.value*f)),$=[{label:"\u5927\u76D2",value:"\u5927\u76D2"},{label:"\u5C0F\u76D2",value:"\u5C0F\u76D2"}],o=se({_id:"",name:"",price:0,category:"",sell:!1,image:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),v=async(i,e)=>{try{await O.delete("/products/"+i),N.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),d.splice(e,1)}catch(g){N.fire({icon:"error",title:"\u5931\u6557",text:g.isAxiosError?g.response.data.message:g.message})}},w=(i,e)=>{p.value=!0,o._id=i,e>-1?(o.name=d[e].name,o.price=d[e].price,o.category=d[e].category,o.description=d[e].description,o.sell=d[e].sell):(o.name="",o.price=0,o.category="",o.description="",o.sell=!1),o.image=[],o.idx=e,o.dialog=!0,o.valid=!1,o.submitting=!1},k=async()=>{o.submitting=!0,_.value=!0;const i=new FormData;for(const e in o)["_id","idx","dialog","valid","submitting"].includes(e)||(e==="image"?o.image.length>0&&i.append(e,o[e][0].file):i.append(e,o[e]));try{if(o._id.length===0){const{data:e}=await O.post("/products",i);d.push(e.result),N.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:e}=await O.patch("/products/"+o._id,i);d[o.idx]=e.result,N.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}o.dialog=!1}catch(e){N.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}o.submitting=!1,_.value=!1};return(async()=>{try{const{data:i}=await O.get("/products/all");d.push(...i.result)}catch(i){console.log(i),N.fire({icon:"error",title:"\u5931\u6557",text:i.isAxiosError?i.response.data.message:i.message})}})(),(i,e)=>{const g=De,Y=Pe,R=Ae,K=Ke,q=Ee,G=Me,J=tt,E=Ie,C=Te,a=Oe,W=Ye,P=Xe,U=je,L=Ue;return S(),B(oe,null,[ot,c("div",nt,[c("div",at,[s(g,{type:"primary",onClick:e[0]||(e[0]=n=>w("",-1))},{default:h(()=>[it]),_:1}),s(C,{show:p.value,"onUpdate:show":e[9]||(e[9]=n=>p.value=n),preset:"dialog"},{default:h(()=>[c("h2",null,X(o._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1),s(E,{modelValue:o.valid,"onUpdate:modelValue":e[8]||(e[8]=n=>o.valid=n),onSubmit:Re(k,["prevent"])},{default:h(()=>[s(R,{label:"\u5716\u7247"},{default:h(()=>[s(Y,{"file-list":o.image,"onUpdate:file-list":e[1]||(e[1]=n=>o.image=n),"list-type":"image-card"},{default:h(()=>[s(g,null,{default:h(()=>[lt]),_:1})]),_:1},8,["file-list"])]),_:1}),s(R,{label:"\u5546\u54C1\u540D\u7A31"},{default:h(()=>[s(K,{value:o.name,"onUpdate:value":e[2]||(e[2]=n=>o.name=n),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u540D\u7A31"},null,8,["value"])]),_:1}),s(R,{label:"\u5546\u54C1\u50F9\u683C"},{default:h(()=>[s(q,{value:o.price,"onUpdate:value":e[3]||(e[3]=n=>o.price=n),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u50F9\u683C"},null,8,["value"])]),_:1}),st,s(G,{value:o.category,"onUpdate:value":e[4]||(e[4]=n=>o.category=n),options:$},null,8,["value"]),s(R,{label:"\u5546\u54C1\u63CF\u8FF0"},{default:h(()=>[s(K,{value:o.description,"onUpdate:value":e[5]||(e[5]=n=>o.description=n),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u63CF\u8FF0"},null,8,["value"])]),_:1}),s(R,{label:"\u4E0A\u67B6"},{default:h(()=>[s(J,{value:o.sell,"onUpdate:value":e[6]||(e[6]=n=>o.sell=n)},null,8,["value"]),rt]),_:1}),s(g,{type:"primary","attr-type":"submit",onClick:e[7]||(e[7]=n=>p.value=!1)},{default:h(()=>[dt]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["show"]),s(a),c("div",null,[s(U,{vertical:""},{default:h(()=>[s(P,{striped:""},{default:h(()=>[ct,c("tbody",null,[(S(!0),B(oe,null,Fe(re(b),(n,M)=>(S(),B(oe,null,[re(b).length>0?(S(),B("tr",{key:n._id},[c("td",null,[s(W,{size:100,"object-fit":"contain",color:"rgba(255, 255, 255, 0)",src:n.image},null,8,["src"])]),c("td",null,X(n.name),1),c("td",null,X(n.price),1),c("td",null,X(n.description),1),r.value===1?(S(),B("td",ut,[s(g,{type:"info",onClick:D=>w(n._id,M),loading:_.value},{default:h(()=>[ht]),_:2},1032,["onClick","loading"])])):A("",!0),r.value>1?(S(),B("td",pt,[s(g,{type:"info",onClick:D=>w(n._id,M+(r.value-1)*f),loading:_.value},{default:h(()=>[_t]),_:2},1032,["onClick","loading"])])):A("",!0),r.value===1?(S(),B("td",mt,[s(g,{type:"error",onClick:D=>v(n._id,M),loading:_.value},{default:h(()=>[ft]),_:2},1032,["onClick","loading"])])):A("",!0),r.value>1?(S(),B("td",gt,[s(g,{type:"error",onClick:D=>v(n._id,M+(r.value-1)*f),loading:_.value},{default:h(()=>[bt]),_:2},1032,["onClick","loading"])])):A("",!0)])):A("",!0)],64))),256))])]),_:1})]),_:1})]),s(L,{page:r.value,"onUpdate:page":e[10]||(e[10]=n=>r.value=n),"page-count":Math.ceil(d.length/f)},null,8,["page","page-count"])])])],64)}}},Kt=$e(vt,[["__scopeId","data-v-55ebb46b"]]);export{Kt as default};
