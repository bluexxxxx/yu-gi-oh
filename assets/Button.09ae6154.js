import{i as fo,p as Ro,e as N,g as xo,b as ho,d as J,am as Go,h as c,T as _o,l as x,at as go,j as K,k as l,aw as po,q as vo,r as V,E as Wo,ay as mo,ad as Z,c as Mo,m as I,av as lo,x as yo,az as Oo,u as No,aA as Y,y as jo,a8 as co,aB as Lo}from"./index.ecaef8db.js";import{u as Ko,c as t}from"./use-rtl.ee97bda6.js";import{N as Vo,c as Qo}from"./FadeInExpandTransition.3006eba6.js";function uo(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const bo=ho("n-form-item");function qo(o,{defaultSize:i="medium",mergedSize:s,mergedDisabled:u}={}){const n=fo(bo,null);Ro(bo,null);const h=N(s?()=>s(n):()=>{const{size:$}=o;if($)return $;if(n){const{mergedSize:j}=n;if(j.value!==void 0)return j.value}return i}),_=N(u?()=>u(n):()=>{const{disabled:$}=o;return $!==void 0?$:n?n.disabled.value:!1}),W=N(()=>{const{status:$}=o;return $||(n==null?void 0:n.mergedValidationStatus.value)});return xo(()=>{n&&n.restoreValidation()}),{mergedSizeRef:h,mergedDisabledRef:_,mergedStatusRef:W,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const Co=J({name:"BaseIconSwitchTransition",setup(o,{slots:i}){const s=Go();return()=>c(_o,{name:"icon-switch-transition",appear:s.value},i)}}),{cubicBezierEaseInOut:Ao}=go;function io({originalTransform:o="",left:i=0,top:s=0,transition:u=`all .3s ${Ao} !important`}={}){return[x("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:i,top:s,opacity:0}),x("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:i,top:s,opacity:1}),x("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:i,top:s,transition:u})]}const Xo=x([x("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),x("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),x("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),x("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),K("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[l("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[io()]),l("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[l("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),l("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[l("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[l("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),l("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[l("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),l("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[l("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),l("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[io({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Yo=J({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(o){po("-base-loading",Xo,vo(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:i,strokeWidth:s,stroke:u,scale:n}=this,h=i/n;return c("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},c(Co,null,{default:()=>this.show?c("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},c("div",{class:`${o}-base-loading__container`},c("div",{class:`${o}-base-loading__container-layer`},c("div",{class:`${o}-base-loading__container-layer-left`},c("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:h,cy:h,r:i-s/2,"stroke-dasharray":4.91*i,"stroke-dashoffset":2.46*i}))),c("div",{class:`${o}-base-loading__container-layer-patch`},c("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:h,cy:h,r:i-s/2,"stroke-dasharray":4.91*i,"stroke-dashoffset":2.46*i}))),c("div",{class:`${o}-base-loading__container-layer-right`},c("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:h,cy:h,r:i-s/2,"stroke-dasharray":4.91*i,"stroke-dashoffset":2.46*i})))))):c("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),Uo=K("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Jo=J({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){po("-base-wave",Uo,vo(o,"clsPrefix"));const i=V(null),s=V(!1);let u=null;return xo(()=>{u!==null&&window.clearTimeout(u)}),{active:s,selfRef:i,play(){u!==null&&(window.clearTimeout(u),s.value=!1,u=null),Wo(()=>{var n;(n=i.value)===null||n===void 0||n.offsetHeight,s.value=!0,u=window.setTimeout(()=>{s.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:o}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=go;function Zo({duration:o=".2s",delay:i=".1s"}={}){return[x("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),x("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),x("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G},
 max-width ${o} ${G} ${i},
 margin-left ${o} ${G} ${i},
 margin-right ${o} ${G} ${i};
 `),x("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G} ${i},
 max-width ${o} ${G},
 margin-left ${o} ${G},
 margin-right ${o} ${G};
 `)]}function O(o){return mo(o,[255,255,255,.16])}function U(o){return mo(o,[0,0,0,.12])}const oe=ho("n-button-group"),ee=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const re=Z&&navigator.userAgent.includes("Safari")&&!ee,te={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},ne=o=>{const{heightTiny:i,heightSmall:s,heightMedium:u,heightLarge:n,borderRadius:h,fontSizeTiny:_,fontSizeSmall:W,fontSizeMedium:$,fontSizeLarge:j,opacityDisabled:oo,textColor2:P,textColor3:eo,primaryColorHover:v,primaryColorPressed:T,borderColor:Q,primaryColor:B,baseColor:d,infoColor:F,infoColorHover:w,infoColorPressed:r,successColor:b,successColorHover:y,successColorPressed:e,warningColor:k,warningColorHover:S,warningColorPressed:E,errorColor:z,errorColorHover:m,errorColorPressed:R,fontWeight:D,buttonColor2:L,buttonColor2Hover:H,buttonColor2Pressed:f,fontWeightStrong:q}=o;return Object.assign(Object.assign({},te),{heightTiny:i,heightSmall:s,heightMedium:u,heightLarge:n,borderRadiusTiny:h,borderRadiusSmall:h,borderRadiusMedium:h,borderRadiusLarge:h,fontSizeTiny:_,fontSizeSmall:W,fontSizeMedium:$,fontSizeLarge:j,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:L,colorSecondaryHover:H,colorSecondaryPressed:f,colorTertiary:L,colorTertiaryHover:H,colorTertiaryPressed:f,colorQuaternary:"#0000",colorQuaternaryHover:H,colorQuaternaryPressed:f,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:P,textColorTertiary:eo,textColorHover:v,textColorPressed:T,textColorFocus:v,textColorDisabled:P,textColorText:P,textColorTextHover:v,textColorTextPressed:T,textColorTextFocus:v,textColorTextDisabled:P,textColorGhost:P,textColorGhostHover:v,textColorGhostPressed:T,textColorGhostFocus:v,textColorGhostDisabled:P,border:`1px solid ${Q}`,borderHover:`1px solid ${v}`,borderPressed:`1px solid ${T}`,borderFocus:`1px solid ${v}`,borderDisabled:`1px solid ${Q}`,rippleColor:B,colorPrimary:B,colorHoverPrimary:v,colorPressedPrimary:T,colorFocusPrimary:v,colorDisabledPrimary:B,textColorPrimary:d,textColorHoverPrimary:d,textColorPressedPrimary:d,textColorFocusPrimary:d,textColorDisabledPrimary:d,textColorTextPrimary:B,textColorTextHoverPrimary:v,textColorTextPressedPrimary:T,textColorTextFocusPrimary:v,textColorTextDisabledPrimary:P,textColorGhostPrimary:B,textColorGhostHoverPrimary:v,textColorGhostPressedPrimary:T,textColorGhostFocusPrimary:v,textColorGhostDisabledPrimary:B,borderPrimary:`1px solid ${B}`,borderHoverPrimary:`1px solid ${v}`,borderPressedPrimary:`1px solid ${T}`,borderFocusPrimary:`1px solid ${v}`,borderDisabledPrimary:`1px solid ${B}`,rippleColorPrimary:B,colorInfo:F,colorHoverInfo:w,colorPressedInfo:r,colorFocusInfo:w,colorDisabledInfo:F,textColorInfo:d,textColorHoverInfo:d,textColorPressedInfo:d,textColorFocusInfo:d,textColorDisabledInfo:d,textColorTextInfo:F,textColorTextHoverInfo:w,textColorTextPressedInfo:r,textColorTextFocusInfo:w,textColorTextDisabledInfo:P,textColorGhostInfo:F,textColorGhostHoverInfo:w,textColorGhostPressedInfo:r,textColorGhostFocusInfo:w,textColorGhostDisabledInfo:F,borderInfo:`1px solid ${F}`,borderHoverInfo:`1px solid ${w}`,borderPressedInfo:`1px solid ${r}`,borderFocusInfo:`1px solid ${w}`,borderDisabledInfo:`1px solid ${F}`,rippleColorInfo:F,colorSuccess:b,colorHoverSuccess:y,colorPressedSuccess:e,colorFocusSuccess:y,colorDisabledSuccess:b,textColorSuccess:d,textColorHoverSuccess:d,textColorPressedSuccess:d,textColorFocusSuccess:d,textColorDisabledSuccess:d,textColorTextSuccess:b,textColorTextHoverSuccess:y,textColorTextPressedSuccess:e,textColorTextFocusSuccess:y,textColorTextDisabledSuccess:P,textColorGhostSuccess:b,textColorGhostHoverSuccess:y,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:y,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${y}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${y}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:k,colorHoverWarning:S,colorPressedWarning:E,colorFocusWarning:S,colorDisabledWarning:k,textColorWarning:d,textColorHoverWarning:d,textColorPressedWarning:d,textColorFocusWarning:d,textColorDisabledWarning:d,textColorTextWarning:k,textColorTextHoverWarning:S,textColorTextPressedWarning:E,textColorTextFocusWarning:S,textColorTextDisabledWarning:P,textColorGhostWarning:k,textColorGhostHoverWarning:S,textColorGhostPressedWarning:E,textColorGhostFocusWarning:S,textColorGhostDisabledWarning:k,borderWarning:`1px solid ${k}`,borderHoverWarning:`1px solid ${S}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${S}`,borderDisabledWarning:`1px solid ${k}`,rippleColorWarning:k,colorError:z,colorHoverError:m,colorPressedError:R,colorFocusError:m,colorDisabledError:z,textColorError:d,textColorHoverError:d,textColorPressedError:d,textColorFocusError:d,textColorDisabledError:d,textColorTextError:z,textColorTextHoverError:m,textColorTextPressedError:R,textColorTextFocusError:m,textColorTextDisabledError:P,textColorGhostError:z,textColorGhostHoverError:m,textColorGhostPressedError:R,textColorGhostFocusError:m,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${m}`,borderPressedError:`1px solid ${R}`,borderFocusError:`1px solid ${m}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:q})},ie={name:"Button",common:Mo,self:ne},se=ie,ae=x([K("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[I("color",[l("border",{borderColor:"var(--n-border-color)"}),I("disabled",[l("border",{borderColor:"var(--n-border-color-disabled)"})]),lo("disabled",[x("&:focus",[l("state-border",{borderColor:"var(--n-border-color-focus)"})]),x("&:hover",[l("state-border",{borderColor:"var(--n-border-color-hover)"})]),x("&:active",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[l("border",{border:"var(--n-border-disabled)"})]),lo("disabled",[x("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[l("state-border",{border:"var(--n-border-focus)"})]),x("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[l("state-border",{border:"var(--n-border-hover)"})]),x("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),K("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?x("&::moz-focus-inner",{border:0}):null,l("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),l("border",{border:"var(--n-border)"}),l("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),l("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[K("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[io({top:"50%",originalTransform:"translateY(-50%)"})]),Zo()]),l("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[x("~",[l("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[l("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),x("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),x("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),le=Object.assign(Object.assign({},yo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!re}}),wo=J({name:"Button",props:le,setup(o){const i=V(null),s=V(null),u=V(!1),n=Oo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),h=fo(oe,{}),{mergedSizeRef:_}=qo({},{defaultSize:"medium",mergedSize:r=>{const{size:b}=o;if(b)return b;const{size:y}=h;if(y)return y;const{mergedSize:e}=r||{};return e?e.value:"medium"}}),W=N(()=>o.focusable&&!o.disabled),$=r=>{var b;W.value||r.preventDefault(),!o.nativeFocusBehavior&&(r.preventDefault(),!o.disabled&&W.value&&((b=i.value)===null||b===void 0||b.focus({preventScroll:!0})))},j=r=>{var b;if(!o.disabled&&!o.loading){const{onClick:y}=o;y&&Qo(y,r),o.text||(b=s.value)===null||b===void 0||b.play()}},oo=r=>{switch(r.key){case"Enter":if(!o.keyboard)return;u.value=!1}},P=r=>{switch(r.key){case"Enter":if(!o.keyboard||o.loading){r.preventDefault();return}u.value=!0}},eo=()=>{u.value=!1},{inlineThemeDisabled:v,mergedClsPrefixRef:T,mergedRtlRef:Q}=No(o),B=yo("Button","-button",ae,se,o,T),d=Ko("Button",Q,T),F=N(()=>{const r=B.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:y},self:e}=r,{rippleDuration:k,opacityDisabled:S,fontWeight:E,fontWeightStrong:z}=e,m=_.value,{dashed:R,type:D,ghost:L,text:H,color:f,round:q,circle:ro,textColor:M,secondary:Po,tertiary:so,quaternary:So,strong:$o}=o,To={"font-weight":$o?z:E};let g={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const A=D==="tertiary",ao=D==="default",a=A?"default":D;if(H){const p=M||f,C=p||e[t("textColorText",a)];g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":p?O(p):e[t("textColorTextHover",a)],"--n-text-color-pressed":p?U(p):e[t("textColorTextPressed",a)],"--n-text-color-focus":p?O(p):e[t("textColorTextHover",a)],"--n-text-color-disabled":p||e[t("textColorTextDisabled",a)]}}else if(L||R){const p=M||f;g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":f||e[t("rippleColor",a)],"--n-text-color":p||e[t("textColorGhost",a)],"--n-text-color-hover":p?O(p):e[t("textColorGhostHover",a)],"--n-text-color-pressed":p?U(p):e[t("textColorGhostPressed",a)],"--n-text-color-focus":p?O(p):e[t("textColorGhostHover",a)],"--n-text-color-disabled":p||e[t("textColorGhostDisabled",a)]}}else if(Po){const p=ao?e.textColor:A?e.textColorTertiary:e[t("color",a)],C=f||p,X=D!=="default"&&D!=="tertiary";g={"--n-color":X?Y(C,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":X?Y(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":X?Y(C,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":X?Y(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":C,"--n-text-color-pressed":C,"--n-text-color-focus":C,"--n-text-color-disabled":C}}else if(so||So){const p=ao?e.textColor:A?e.textColorTertiary:e[t("color",a)],C=f||p;so?(g["--n-color"]=e.colorTertiary,g["--n-color-hover"]=e.colorTertiaryHover,g["--n-color-pressed"]=e.colorTertiaryPressed,g["--n-color-focus"]=e.colorSecondaryHover,g["--n-color-disabled"]=e.colorTertiary):(g["--n-color"]=e.colorQuaternary,g["--n-color-hover"]=e.colorQuaternaryHover,g["--n-color-pressed"]=e.colorQuaternaryPressed,g["--n-color-focus"]=e.colorQuaternaryHover,g["--n-color-disabled"]=e.colorQuaternary),g["--n-ripple-color"]="#0000",g["--n-text-color"]=C,g["--n-text-color-hover"]=C,g["--n-text-color-pressed"]=C,g["--n-text-color-focus"]=C,g["--n-text-color-disabled"]=C}else g={"--n-color":f||e[t("color",a)],"--n-color-hover":f?O(f):e[t("colorHover",a)],"--n-color-pressed":f?U(f):e[t("colorPressed",a)],"--n-color-focus":f?O(f):e[t("colorFocus",a)],"--n-color-disabled":f||e[t("colorDisabled",a)],"--n-ripple-color":f||e[t("rippleColor",a)],"--n-text-color":M||(f?e.textColorPrimary:A?e.textColorTertiary:e[t("textColor",a)]),"--n-text-color-hover":M||(f?e.textColorHoverPrimary:e[t("textColorHover",a)]),"--n-text-color-pressed":M||(f?e.textColorPressedPrimary:e[t("textColorPressed",a)]),"--n-text-color-focus":M||(f?e.textColorFocusPrimary:e[t("textColorFocus",a)]),"--n-text-color-disabled":M||(f?e.textColorDisabledPrimary:e[t("textColorDisabled",a)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};H?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[t("border",a)],"--n-border-hover":e[t("borderHover",a)],"--n-border-pressed":e[t("borderPressed",a)],"--n-border-focus":e[t("borderFocus",a)],"--n-border-disabled":e[t("borderDisabled",a)]};const{[t("height",m)]:no,[t("fontSize",m)]:ko,[t("padding",m)]:zo,[t("paddingRound",m)]:Ho,[t("iconSize",m)]:Bo,[t("borderRadius",m)]:Fo,[t("iconMargin",m)]:Io,waveOpacity:Do}=e,Eo={"--n-width":ro&&!H?no:"initial","--n-height":H?"initial":no,"--n-font-size":ko,"--n-padding":ro||H?"initial":q?Ho:zo,"--n-icon-size":Bo,"--n-icon-margin":Io,"--n-border-radius":H?"initial":ro||q?no:Fo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":y,"--n-ripple-duration":k,"--n-opacity-disabled":S,"--n-wave-opacity":Do},To),g),to),Eo)}),w=v?jo("button",N(()=>{let r="";const{dashed:b,type:y,ghost:e,text:k,color:S,round:E,circle:z,textColor:m,secondary:R,tertiary:D,quaternary:L,strong:H}=o;b&&(r+="a"),e&&(r+="b"),k&&(r+="c"),E&&(r+="d"),z&&(r+="e"),R&&(r+="f"),D&&(r+="g"),L&&(r+="h"),H&&(r+="i"),S&&(r+="j"+uo(S)),m&&(r+="k"+uo(m));const{value:f}=_;return r+="l"+f[0],r+="m"+y[0],r}),F,o):void 0;return{selfElRef:i,waveElRef:s,mergedClsPrefix:T,mergedFocusable:W,mergedSize:_,showBorder:n,enterPressed:u,rtlEnabled:d,handleMousedown:$,handleKeydown:P,handleBlur:eo,handleKeyup:oo,handleClick:j,customColorCssVars:N(()=>{const{color:r}=o;if(!r)return null;const b=O(r);return{"--n-border-color":r,"--n-border-color-hover":b,"--n-border-color-pressed":U(r),"--n-border-color-focus":b,"--n-border-color-disabled":r}}),cssVars:v?void 0:F,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:o,tag:i,onRender:s}=this;s==null||s();const u=co(this.$slots.default,n=>n&&c("span",{class:`${o}-button__content`},n));return c(i,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,c(Vo,{width:!0},{default:()=>co(this.$slots.icon,n=>(this.loading||n)&&c("span",{class:`${o}-button__icon`,style:{margin:Lo(this.$slots.default)?"0":""}},c(Co,null,{default:()=>this.loading?c(Yo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):c("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},n)})))}),this.iconPlacement==="left"&&u,this.text?null:c(Jo,{ref:"waveElRef",clsPrefix:o}),this.showBorder?c("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?c("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),be=wo,fe=wo;export{Co as N,fe as X,be as _,Yo as a,se as b,oe as c,uo as d,bo as f,io as i,qo as u};
