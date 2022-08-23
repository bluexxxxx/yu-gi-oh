import{u as B,c as C}from"./use-rtl.e684085e.js";import{ad as G,d as R,u as E,x as S,e as j,z as L,aE as M,h as y,aF as _,aG as v}from"./index.e6f804b5.js";const I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},P=()=>I,T={name:"Space",self:P},A=T;let h;const F=()=>{if(!G)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h},O=Object.assign(Object.assign({},S.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),H=R({name:"Space",props:O,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:u}=E(e),a=S("Space","-space",void 0,A,e,n),g=B("Space",u,n);return{useGap:F(),rtlEnabled:g,mergedClsPrefix:n,margin:j(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[C("gap",t)]:f}}=a.value,{row:l,col:p}=_(f);return{horizontal:v(p),vertical:v(l)}})}},render(){const{vertical:e,align:n,inline:u,justify:a,itemStyle:g,margin:t,wrap:f,mergedClsPrefix:l,rtlEnabled:p,useGap:o,wrapItem:b,internalUseGap:w}=this,c=L(M(this));if(!c.length)return null;const x=`${t.horizontal}px`,m=`${t.horizontal/2}px`,z=`${t.vertical}px`,i=`${t.vertical/2}px`,s=c.length-1,d=a.startsWith("space-");return y("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(a)?"flex-"+a:a,flexWrap:!f||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:n,gap:o?`${t.vertical}px ${t.horizontal}px`:""}},!b&&(o||w)?c:c.map(($,r)=>y("div",{role:"none",style:[g,{maxWidth:"100%"},o?"":e?{marginBottom:r!==s?z:""}:p?{marginLeft:d?a==="space-between"&&r===s?"":m:r!==s?x:"",marginRight:d?a==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:d?a==="space-between"&&r===s?"":m:r!==s?x:"",marginLeft:d?a==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}]},$)))}});export{H as _};
