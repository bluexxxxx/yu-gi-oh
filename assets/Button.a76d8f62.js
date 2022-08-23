import{i as so,p as Ro,e as j,g as xo,b as ho,d as Q,ae as _o,ao as Go,h as u,T as Wo,l as h,aG as go,j as K,k as d,aC as po,q as vo,r as V,E as Oo,b4 as mo,aw as Z,c as Mo,m as I,ai as co,x as yo,a7 as jo,u as No,an as U,y as Lo,ak as uo,b3 as Ko}from"./index.b2e56ac1.js";import{u as Vo}from"./upperFirst.91e07e71.js";import{u as Qo,c as n}from"./use-rtl.6f413480.js";import{N as qo,c as Xo}from"./FadeInExpandTransition.687d483a.js";function bo(o){return o.replace(/#|\(|\)|,|\s/g,"_")}const fo=ho("n-form-item");function Yo(o,{defaultSize:i="medium",mergedSize:s,mergedDisabled:a}={}){const r=so(fo,null);Ro(fo,null);const x=j(s?()=>s(r):()=>{const{size:$}=o;if($)return $;if(r){const{mergedSize:N}=r;if(N.value!==void 0)return N.value}return i}),G=j(a?()=>a(r):()=>{const{disabled:$}=o;return $!==void 0?$:r?r.disabled.value:!1}),W=j(()=>{const{status:$}=o;return $||(r==null?void 0:r.mergedValidationStatus.value)});return xo(()=>{r&&r.restoreValidation()}),{mergedSizeRef:x,mergedDisabledRef:G,mergedStatusRef:W,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}function he(o,i){return Q({name:Vo(o),setup(){var s;const a=(s=so(_o,null))===null||s===void 0?void 0:s.mergedIconsRef;return()=>{var r;const x=(r=a==null?void 0:a.value)===null||r===void 0?void 0:r[o];return x?x():i}}})}const Co=Q({name:"BaseIconSwitchTransition",setup(o,{slots:i}){const s=Go();return()=>u(Wo,{name:"icon-switch-transition",appear:s.value},i)}}),{cubicBezierEaseInOut:Ao}=go;function io({originalTransform:o="",left:i=0,top:s=0,transition:a=`all .3s ${Ao} !important`}={}){return[h("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:i,top:s,opacity:0}),h("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:i,top:s,opacity:1}),h("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:i,top:s,transition:a})]}const Uo=h([h("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),h("@keyframes loading-layer-rotate",`
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
 `),h("@keyframes loading-left-spin",`
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
 `),h("@keyframes loading-right-spin",`
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
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[io()]),d("container",`
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
 `,[d("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),d("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[d("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),d("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),d("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[d("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[io({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Jo=Q({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(o){po("-base-loading",Uo,vo(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:i,strokeWidth:s,stroke:a,scale:r}=this,x=i/r;return u("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},u(Co,null,{default:()=>this.show?u("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},u("div",{class:`${o}-base-loading__container`},u("div",{class:`${o}-base-loading__container-layer`},u("div",{class:`${o}-base-loading__container-layer-left`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*x} ${2*x}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:x,cy:x,r:i-s/2,"stroke-dasharray":4.91*i,"stroke-dashoffset":2.46*i}))),u("div",{class:`${o}-base-loading__container-layer-patch`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*x} ${2*x}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:x,cy:x,r:i-s/2,"stroke-dasharray":4.91*i,"stroke-dashoffset":2.46*i}))),u("div",{class:`${o}-base-loading__container-layer-right`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*x} ${2*x}`,xmlns:"http://www.w3.org/2000/svg",style:{color:a}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:x,cy:x,r:i-s/2,"stroke-dasharray":4.91*i,"stroke-dashoffset":2.46*i})))))):u("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),Zo=K("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),oe=Q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){po("-base-wave",Zo,vo(o,"clsPrefix"));const i=V(null),s=V(!1);let a=null;return xo(()=>{a!==null&&window.clearTimeout(a)}),{active:s,selfRef:i,play(){a!==null&&(window.clearTimeout(a),s.value=!1,a=null),Oo(()=>{var r;(r=i.value)===null||r===void 0||r.offsetHeight,s.value=!0,a=window.setTimeout(()=>{s.value=!1,a=null},1e3)})}}},render(){const{clsPrefix:o}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:_}=go;function ee({duration:o=".2s",delay:i=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${_},
 max-width ${o} ${_} ${i},
 margin-left ${o} ${_} ${i},
 margin-right ${o} ${_} ${i};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${_} ${i},
 max-width ${o} ${_},
 margin-left ${o} ${_},
 margin-right ${o} ${_};
 `)]}function M(o){return mo(o,[255,255,255,.16])}function J(o){return mo(o,[0,0,0,.12])}const re=ho("n-button-group"),te=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const ne=Z&&navigator.userAgent.includes("Safari")&&!te,ie={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},se=o=>{const{heightTiny:i,heightSmall:s,heightMedium:a,heightLarge:r,borderRadius:x,fontSizeTiny:G,fontSizeSmall:W,fontSizeMedium:$,fontSizeLarge:N,opacityDisabled:oo,textColor2:P,textColor3:eo,primaryColorHover:v,primaryColorPressed:T,borderColor:q,primaryColor:B,baseColor:c,infoColor:F,infoColorHover:w,infoColorPressed:t,successColor:b,successColorHover:y,successColorPressed:e,warningColor:k,warningColorHover:S,warningColorPressed:E,errorColor:z,errorColorHover:m,errorColorPressed:R,fontWeight:D,buttonColor2:L,buttonColor2Hover:H,buttonColor2Pressed:f,fontWeightStrong:X}=o;return Object.assign(Object.assign({},ie),{heightTiny:i,heightSmall:s,heightMedium:a,heightLarge:r,borderRadiusTiny:x,borderRadiusSmall:x,borderRadiusMedium:x,borderRadiusLarge:x,fontSizeTiny:G,fontSizeSmall:W,fontSizeMedium:$,fontSizeLarge:N,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:L,colorSecondaryHover:H,colorSecondaryPressed:f,colorTertiary:L,colorTertiaryHover:H,colorTertiaryPressed:f,colorQuaternary:"#0000",colorQuaternaryHover:H,colorQuaternaryPressed:f,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:P,textColorTertiary:eo,textColorHover:v,textColorPressed:T,textColorFocus:v,textColorDisabled:P,textColorText:P,textColorTextHover:v,textColorTextPressed:T,textColorTextFocus:v,textColorTextDisabled:P,textColorGhost:P,textColorGhostHover:v,textColorGhostPressed:T,textColorGhostFocus:v,textColorGhostDisabled:P,border:`1px solid ${q}`,borderHover:`1px solid ${v}`,borderPressed:`1px solid ${T}`,borderFocus:`1px solid ${v}`,borderDisabled:`1px solid ${q}`,rippleColor:B,colorPrimary:B,colorHoverPrimary:v,colorPressedPrimary:T,colorFocusPrimary:v,colorDisabledPrimary:B,textColorPrimary:c,textColorHoverPrimary:c,textColorPressedPrimary:c,textColorFocusPrimary:c,textColorDisabledPrimary:c,textColorTextPrimary:B,textColorTextHoverPrimary:v,textColorTextPressedPrimary:T,textColorTextFocusPrimary:v,textColorTextDisabledPrimary:P,textColorGhostPrimary:B,textColorGhostHoverPrimary:v,textColorGhostPressedPrimary:T,textColorGhostFocusPrimary:v,textColorGhostDisabledPrimary:B,borderPrimary:`1px solid ${B}`,borderHoverPrimary:`1px solid ${v}`,borderPressedPrimary:`1px solid ${T}`,borderFocusPrimary:`1px solid ${v}`,borderDisabledPrimary:`1px solid ${B}`,rippleColorPrimary:B,colorInfo:F,colorHoverInfo:w,colorPressedInfo:t,colorFocusInfo:w,colorDisabledInfo:F,textColorInfo:c,textColorHoverInfo:c,textColorPressedInfo:c,textColorFocusInfo:c,textColorDisabledInfo:c,textColorTextInfo:F,textColorTextHoverInfo:w,textColorTextPressedInfo:t,textColorTextFocusInfo:w,textColorTextDisabledInfo:P,textColorGhostInfo:F,textColorGhostHoverInfo:w,textColorGhostPressedInfo:t,textColorGhostFocusInfo:w,textColorGhostDisabledInfo:F,borderInfo:`1px solid ${F}`,borderHoverInfo:`1px solid ${w}`,borderPressedInfo:`1px solid ${t}`,borderFocusInfo:`1px solid ${w}`,borderDisabledInfo:`1px solid ${F}`,rippleColorInfo:F,colorSuccess:b,colorHoverSuccess:y,colorPressedSuccess:e,colorFocusSuccess:y,colorDisabledSuccess:b,textColorSuccess:c,textColorHoverSuccess:c,textColorPressedSuccess:c,textColorFocusSuccess:c,textColorDisabledSuccess:c,textColorTextSuccess:b,textColorTextHoverSuccess:y,textColorTextPressedSuccess:e,textColorTextFocusSuccess:y,textColorTextDisabledSuccess:P,textColorGhostSuccess:b,textColorGhostHoverSuccess:y,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:y,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${y}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${y}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:k,colorHoverWarning:S,colorPressedWarning:E,colorFocusWarning:S,colorDisabledWarning:k,textColorWarning:c,textColorHoverWarning:c,textColorPressedWarning:c,textColorFocusWarning:c,textColorDisabledWarning:c,textColorTextWarning:k,textColorTextHoverWarning:S,textColorTextPressedWarning:E,textColorTextFocusWarning:S,textColorTextDisabledWarning:P,textColorGhostWarning:k,textColorGhostHoverWarning:S,textColorGhostPressedWarning:E,textColorGhostFocusWarning:S,textColorGhostDisabledWarning:k,borderWarning:`1px solid ${k}`,borderHoverWarning:`1px solid ${S}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${S}`,borderDisabledWarning:`1px solid ${k}`,rippleColorWarning:k,colorError:z,colorHoverError:m,colorPressedError:R,colorFocusError:m,colorDisabledError:z,textColorError:c,textColorHoverError:c,textColorPressedError:c,textColorFocusError:c,textColorDisabledError:c,textColorTextError:z,textColorTextHoverError:m,textColorTextPressedError:R,textColorTextFocusError:m,textColorTextDisabledError:P,textColorGhostError:z,textColorGhostHoverError:m,textColorGhostPressedError:R,textColorGhostFocusError:m,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${m}`,borderPressedError:`1px solid ${R}`,borderFocusError:`1px solid ${m}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:D,fontWeightStrong:X})},ae={name:"Button",common:Mo,self:se},le=ae,de=h([K("button",`
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
 `,[I("color",[d("border",{borderColor:"var(--n-border-color)"}),I("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),co("disabled",[h("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),I("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),I("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),co("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),I("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),I("loading","cursor: wait;"),K("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[I("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),d("border",{border:"var(--n-border)"}),d("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),d("icon",`
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
 `,[io({top:"50%",originalTransform:"translateY(-50%)"})]),ee()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),I("block",`
 display: flex;
 width: 100%;
 `),I("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),I("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),ce=Object.assign(Object.assign({},yo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!ne}}),wo=Q({name:"Button",props:ce,setup(o){const i=V(null),s=V(null),a=V(!1),r=jo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),x=so(re,{}),{mergedSizeRef:G}=Yo({},{defaultSize:"medium",mergedSize:t=>{const{size:b}=o;if(b)return b;const{size:y}=x;if(y)return y;const{mergedSize:e}=t||{};return e?e.value:"medium"}}),W=j(()=>o.focusable&&!o.disabled),$=t=>{var b;W.value||t.preventDefault(),!o.nativeFocusBehavior&&(t.preventDefault(),!o.disabled&&W.value&&((b=i.value)===null||b===void 0||b.focus({preventScroll:!0})))},N=t=>{var b;if(!o.disabled&&!o.loading){const{onClick:y}=o;y&&Xo(y,t),o.text||(b=s.value)===null||b===void 0||b.play()}},oo=t=>{switch(t.key){case"Enter":if(!o.keyboard)return;a.value=!1}},P=t=>{switch(t.key){case"Enter":if(!o.keyboard||o.loading){t.preventDefault();return}a.value=!0}},eo=()=>{a.value=!1},{inlineThemeDisabled:v,mergedClsPrefixRef:T,mergedRtlRef:q}=No(o),B=yo("Button","-button",de,le,o,T),c=Qo("Button",q,T),F=j(()=>{const t=B.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:y},self:e}=t,{rippleDuration:k,opacityDisabled:S,fontWeight:E,fontWeightStrong:z}=e,m=G.value,{dashed:R,type:D,ghost:L,text:H,color:f,round:X,circle:ro,textColor:O,secondary:Po,tertiary:ao,quaternary:So,strong:$o}=o,To={"font-weight":$o?z:E};let g={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Y=D==="tertiary",lo=D==="default",l=Y?"default":D;if(H){const p=O||f,C=p||e[n("textColorText",l)];g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":p?M(p):e[n("textColorTextHover",l)],"--n-text-color-pressed":p?J(p):e[n("textColorTextPressed",l)],"--n-text-color-focus":p?M(p):e[n("textColorTextHover",l)],"--n-text-color-disabled":p||e[n("textColorTextDisabled",l)]}}else if(L||R){const p=O||f;g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":f||e[n("rippleColor",l)],"--n-text-color":p||e[n("textColorGhost",l)],"--n-text-color-hover":p?M(p):e[n("textColorGhostHover",l)],"--n-text-color-pressed":p?J(p):e[n("textColorGhostPressed",l)],"--n-text-color-focus":p?M(p):e[n("textColorGhostHover",l)],"--n-text-color-disabled":p||e[n("textColorGhostDisabled",l)]}}else if(Po){const p=lo?e.textColor:Y?e.textColorTertiary:e[n("color",l)],C=f||p,A=D!=="default"&&D!=="tertiary";g={"--n-color":A?U(C,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":A?U(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":A?U(C,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":A?U(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":C,"--n-text-color-pressed":C,"--n-text-color-focus":C,"--n-text-color-disabled":C}}else if(ao||So){const p=lo?e.textColor:Y?e.textColorTertiary:e[n("color",l)],C=f||p;ao?(g["--n-color"]=e.colorTertiary,g["--n-color-hover"]=e.colorTertiaryHover,g["--n-color-pressed"]=e.colorTertiaryPressed,g["--n-color-focus"]=e.colorSecondaryHover,g["--n-color-disabled"]=e.colorTertiary):(g["--n-color"]=e.colorQuaternary,g["--n-color-hover"]=e.colorQuaternaryHover,g["--n-color-pressed"]=e.colorQuaternaryPressed,g["--n-color-focus"]=e.colorQuaternaryHover,g["--n-color-disabled"]=e.colorQuaternary),g["--n-ripple-color"]="#0000",g["--n-text-color"]=C,g["--n-text-color-hover"]=C,g["--n-text-color-pressed"]=C,g["--n-text-color-focus"]=C,g["--n-text-color-disabled"]=C}else g={"--n-color":f||e[n("color",l)],"--n-color-hover":f?M(f):e[n("colorHover",l)],"--n-color-pressed":f?J(f):e[n("colorPressed",l)],"--n-color-focus":f?M(f):e[n("colorFocus",l)],"--n-color-disabled":f||e[n("colorDisabled",l)],"--n-ripple-color":f||e[n("rippleColor",l)],"--n-text-color":O||(f?e.textColorPrimary:Y?e.textColorTertiary:e[n("textColor",l)]),"--n-text-color-hover":O||(f?e.textColorHoverPrimary:e[n("textColorHover",l)]),"--n-text-color-pressed":O||(f?e.textColorPressedPrimary:e[n("textColorPressed",l)]),"--n-text-color-focus":O||(f?e.textColorFocusPrimary:e[n("textColorFocus",l)]),"--n-text-color-disabled":O||(f?e.textColorDisabledPrimary:e[n("textColorDisabled",l)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};H?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[n("border",l)],"--n-border-hover":e[n("borderHover",l)],"--n-border-pressed":e[n("borderPressed",l)],"--n-border-focus":e[n("borderFocus",l)],"--n-border-disabled":e[n("borderDisabled",l)]};const{[n("height",m)]:no,[n("fontSize",m)]:ko,[n("padding",m)]:zo,[n("paddingRound",m)]:Ho,[n("iconSize",m)]:Bo,[n("borderRadius",m)]:Fo,[n("iconMargin",m)]:Io,waveOpacity:Do}=e,Eo={"--n-width":ro&&!H?no:"initial","--n-height":H?"initial":no,"--n-font-size":ko,"--n-padding":ro||H?"initial":X?Ho:zo,"--n-icon-size":Bo,"--n-icon-margin":Io,"--n-border-radius":H?"initial":ro||X?no:Fo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":y,"--n-ripple-duration":k,"--n-opacity-disabled":S,"--n-wave-opacity":Do},To),g),to),Eo)}),w=v?Lo("button",j(()=>{let t="";const{dashed:b,type:y,ghost:e,text:k,color:S,round:E,circle:z,textColor:m,secondary:R,tertiary:D,quaternary:L,strong:H}=o;b&&(t+="a"),e&&(t+="b"),k&&(t+="c"),E&&(t+="d"),z&&(t+="e"),R&&(t+="f"),D&&(t+="g"),L&&(t+="h"),H&&(t+="i"),S&&(t+="j"+bo(S)),m&&(t+="k"+bo(m));const{value:f}=G;return t+="l"+f[0],t+="m"+y[0],t}),F,o):void 0;return{selfElRef:i,waveElRef:s,mergedClsPrefix:T,mergedFocusable:W,mergedSize:G,showBorder:r,enterPressed:a,rtlEnabled:c,handleMousedown:$,handleKeydown:P,handleBlur:eo,handleKeyup:oo,handleClick:N,customColorCssVars:j(()=>{const{color:t}=o;if(!t)return null;const b=M(t);return{"--n-border-color":t,"--n-border-color-hover":b,"--n-border-color-pressed":J(t),"--n-border-color-focus":b,"--n-border-color-disabled":t}}),cssVars:v?void 0:F,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:o,tag:i,onRender:s}=this;s==null||s();const a=uo(this.$slots.default,r=>r&&u("span",{class:`${o}-button__content`},r));return u(i,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&a,u(qo,{width:!0},{default:()=>uo(this.$slots.icon,r=>(this.loading||r)&&u("span",{class:`${o}-button__icon`,style:{margin:Ko(this.$slots.default)?"0":""}},u(Co,null,{default:()=>this.loading?u(Jo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},r)})))}),this.iconPlacement==="left"&&a,this.text?null:u(oe,{ref:"waveElRef",clsPrefix:o}),this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),ge=wo,pe=wo;export{Jo as N,pe as X,ge as _,Co as a,le as b,bo as c,re as d,fo as f,io as i,he as r,Yo as u};
