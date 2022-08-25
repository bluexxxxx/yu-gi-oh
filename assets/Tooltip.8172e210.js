import{l as a,aG as $,ag as g,c as b,b4 as f,d as l,x as m,r as x,e as v,h as O}from"./index.d42ac355.js";import{p as u,N as j,g as T}from"./Popover.7cf05d2f.js";const{cubicBezierEaseInOut:s,cubicBezierEaseOut:E,cubicBezierEaseIn:C}=$;function _({overflow:n="hidden",duration:e=".3s",originalTransition:t="",leavingDelay:o="0s",foldPadding:i=!1,enterToProps:d=void 0,leaveToProps:h=void 0,reverse:c=!1}={}){const p=c?"leave":"enter",r=c?"enter":"leave";return[a(`&.fade-in-height-expand-transition-${r}-from,
 &.fade-in-height-expand-transition-${p}-to`,Object.assign(Object.assign({},d),{opacity:1})),a(`&.fade-in-height-expand-transition-${r}-to,
 &.fade-in-height-expand-transition-${p}-from`,Object.assign(Object.assign({},h),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),a(`&.fade-in-height-expand-transition-${r}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${s} ${o},
 opacity ${e} ${E} ${o},
 margin-top ${e} ${s} ${o},
 margin-bottom ${e} ${s} ${o},
 padding-top ${e} ${s} ${o},
 padding-bottom ${e} ${s} ${o}
 ${t?","+t:""}
 `),a(`&.fade-in-height-expand-transition-${p}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${s},
 opacity ${e} ${C},
 margin-top ${e} ${s},
 margin-bottom ${e} ${s},
 padding-top ${e} ${s},
 padding-bottom ${e} ${s}
 ${t?","+t:""}
 `)]}const P={padding:"8px 14px"},B=n=>{const{borderRadius:e,boxShadow2:t,baseColor:o}=n;return Object.assign(Object.assign({},P),{borderRadius:e,boxShadow:t,color:f(o,"rgba(0, 0, 0, .85)"),textColor:o})},w=g({name:"Tooltip",common:b,peers:{Popover:u},self:B}),R=w,L=Object.assign(Object.assign({},T),m.props),z=l({name:"Tooltip",props:L,__popover__:!0,setup(n){const e=m("Tooltip","-tooltip",void 0,R,n),t=x(null);return Object.assign(Object.assign({},{syncPosition(){t.value.syncPosition()},setShow(i){t.value.setShow(i)}}),{popoverRef:t,mergedTheme:e,popoverThemeOverrides:v(()=>e.value.self)})},render(){const{mergedTheme:n,internalExtraClass:e}=this;return O(j,Object.assign(Object.assign({},this.$props),{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:e.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{z as N,_ as f,R as t};
