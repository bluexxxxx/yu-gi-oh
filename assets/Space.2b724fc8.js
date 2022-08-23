import{u as B,c as C}from"./use-rtl.6f413480.js";import{aw as G,d as R,u as j,x as v,e as E,z as L,b7 as M,h as y,b8 as _,a8 as b}from"./index.b2e56ac1.js";const I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},P=()=>I,T={name:"Space",self:P},A=T;let h;const O=()=>{if(!G)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},W=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),H=R({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:u}=j(e),n=v("Space","-space",void 0,A,e,a),g=B("Space",u,a);return{useGap:O(),rtlEnabled:g,mergedClsPrefix:a,margin:E(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[C("gap",t)]:f}}=n.value,{row:l,col:p}=_(f);return{horizontal:b(p),vertical:b(l)}})}},render(){const{vertical:e,align:a,inline:u,justify:n,itemStyle:g,margin:t,wrap:f,mergedClsPrefix:l,rtlEnabled:p,useGap:o,wrapItem:w,internalUseGap:S}=this,c=L(M(this));if(!c.length)return null;const x=`${t.horizontal}px`,m=`${t.horizontal/2}px`,z=`${t.vertical}px`,i=`${t.vertical/2}px`,s=c.length-1,d=n.startsWith("space-");return y("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!f||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:a,gap:o?`${t.vertical}px ${t.horizontal}px`:""}},!w&&(o||S)?c:c.map(($,r)=>y("div",{role:"none",style:[g,{maxWidth:"100%"},o?"":e?{marginBottom:r!==s?z:""}:p?{marginLeft:d?n==="space-between"&&r===s?"":m:r!==s?x:"",marginRight:d?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:d?n==="space-between"&&r===s?"":m:r!==s?x:"",marginLeft:d?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}]},$)))}});export{H as _};
