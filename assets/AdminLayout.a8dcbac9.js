import{r as $,v as fe,W as Ne,ab as Qe,ac as Ye,g as eo,aa as oo,d as F,h as c,ae as ke,c as Ke,aA as de,b as ne,i as L,e as f,p as B,az as te,T as to,ak as _e,aO as no,aj as ro,K as ge,j as h,al as io,l as z,av as oe,m as P,k as p,n as pe,q as M,u as Te,x as se,y as Oe,af as lo,aP as ao,w as Se,_ as co,aJ as so,F as uo,G as vo,H as mo,I as me,aQ as ee,aR as po}from"./index.b612cb48.js";import{p as Fe,r as U,a as ho,d as fo}from"./index.38beddd7.js";import{p as go,V as xo,a as bo,b as yo,r as wo,N as Co,c as Le,t as Io,d as zo,f as So,u as Ao}from"./Tooltip.e7e27370.js";import{h as Ae,c as Me}from"./create.4dfd35f9.js";import{X as Ho,k as xe}from"./Scrollbar.320e291a.js";import{o as ie,a as le}from"./delegate.64eb1156.js";import{c as V,N as Po}from"./FadeInExpandTransition.b43fd86c.js";import{c as J}from"./use-rtl.9c04a378.js";import{k as ce}from"./keep.76d496a2.js";import"./index.d62e03b3.js";import"./toString.c16b89ef.js";import"./get.2274ba0e.js";function Ro(e){return t=>{t?e.value=t.$el:e.value=null}}function No(e,t,o){if(!t)return e;const n=$(e.value);let i=null;return fe(e,a=>{i!==null&&window.clearTimeout(i),a===!0?o&&!o.value?n.value=!0:i=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}function ko(e={},t){const o=Ne({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:i}=e,a=d=>{switch(d.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(g=>{if(g!==d.key)return;const y=n[g];if(typeof y=="function")y(d);else{const{stop:w=!1,prevent:m=!1}=y;w&&d.stopPropagation(),m&&d.preventDefault(),y.handler(d)}})},s=d=>{switch(d.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}i!==void 0&&Object.keys(i).forEach(g=>{if(g!==d.key)return;const y=i[g];if(typeof y=="function")y(d);else{const{stop:w=!1,prevent:m=!1}=y;w&&d.stopPropagation(),m&&d.preventDefault(),y.handler(d)}})},u=()=>{(t===void 0||t.value)&&(le("keydown",document,a),le("keyup",document,s)),t!==void 0&&fe(t,d=>{d?(le("keydown",document,a),le("keyup",document,s)):(ie("keydown",document,a),ie("keyup",document,s))})};return Qe()?(Ye(u),eo(()=>{(t===void 0||t.value)&&(ie("keydown",document,a),ie("keyup",document,s))})):u(),oo(o)}const Ko=F({name:"ChevronRight",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),_o=F({name:"ChevronDownFilled",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),To={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},Oo=e=>{const{primaryColor:t,textColor2:o,dividerColor:n,hoverColor:i,popoverColor:a,invertedColor:s,borderRadius:u,fontSizeSmall:d,fontSizeMedium:g,fontSizeLarge:y,fontSizeHuge:w,heightSmall:m,heightMedium:R,heightLarge:k,heightHuge:_,textColor3:H,opacityDisabled:O}=e;return Object.assign(Object.assign({},To),{optionHeightSmall:m,optionHeightMedium:R,optionHeightLarge:k,optionHeightHuge:_,borderRadius:u,fontSizeSmall:d,fontSizeMedium:g,fontSizeLarge:y,fontSizeHuge:w,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:n,suffixColor:o,prefixColor:o,optionColorHover:i,optionColorActive:de(t,{alpha:.1}),groupHeaderTextColor:H,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:O})},Fo=ke({name:"Dropdown",common:Ke,peers:{Popover:go},self:Oo}),$e=Fo,Be=F({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return c("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),be=ne("n-dropdown-menu"),ue=ne("n-dropdown"),He=ne("n-dropdown-option");function he(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Lo(e){return e.type==="group"}function De(e){return e.type==="divider"}function Mo(e){return e.type==="render"}const Ee=F({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=L(ue),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:s,animatedRef:u,mergedShowRef:d,renderLabelRef:g,renderIconRef:y,labelFieldRef:w,childrenFieldRef:m,renderOptionRef:R,nodePropsRef:k,menuPropsRef:_}=t,H=L(He,null),O=L(be),W=L(Fe),q=f(()=>e.tmNode.rawNode),D=f(()=>{const{value:x}=m;return he(e.tmNode.rawNode,x)}),E=f(()=>{const{disabled:x}=e.tmNode;return x}),Y=f(()=>{if(!D.value)return!1;const{key:x,disabled:T}=e.tmNode;if(T)return!1;const{value:G}=o,{value:X}=n,{value:ve}=i,{value:Z}=a;return G!==null?Z.includes(x):X!==null?Z.includes(x)&&Z[Z.length-1]!==x:ve!==null?Z.includes(x):!1}),j=f(()=>n.value===null&&!u.value),b=No(Y,300,j),C=f(()=>!!(H!=null&&H.enteringSubmenuRef.value)),r=$(!1);B(He,{enteringSubmenuRef:r});function I(){r.value=!0}function v(){r.value=!1}function N(){const{parentKey:x,tmNode:T}=e;T.disabled||!d.value||(i.value=x,n.value=null,o.value=T.key)}function A(){const{tmNode:x}=e;x.disabled||!d.value||o.value!==x.key&&N()}function S(x){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:T}=x;T&&!Ae({target:T},"dropdownOption")&&!Ae({target:T},"scrollbarRail")&&(o.value=null)}function l(){const{value:x}=D,{tmNode:T}=e;!d.value||!x&&!T.disabled&&(t.doSelect(T.key,T.rawNode),t.doUpdateShow(!1))}return{labelField:w,renderLabel:g,renderIcon:y,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:_,popoverBody:W,animated:u,mergedShowSubmenu:f(()=>b.value&&!C.value),rawNode:q,hasSubmenu:D,pending:te(()=>{const{value:x}=a,{key:T}=e.tmNode;return x.includes(T)}),childActive:te(()=>{const{value:x}=s,{key:T}=e.tmNode,G=x.findIndex(X=>T===X);return G===-1?!1:G<x.length-1}),active:te(()=>{const{value:x}=s,{key:T}=e.tmNode,G=x.findIndex(X=>T===X);return G===-1?!1:G===x.length-1}),mergedDisabled:E,renderOption:R,nodeProps:k,handleClick:l,handleMouseMove:A,handleMouseEnter:N,handleMouseLeave:S,handleSubmenuBeforeEnter:I,handleSubmenuAfterEnter:v}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:i,clsPrefix:a,siblingHasIcon:s,siblingHasSubmenu:u,renderLabel:d,renderIcon:g,renderOption:y,nodeProps:w,props:m,scrollable:R}=this;let k=null;if(i){const W=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);k=c(je,Object.assign({},W,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const _={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},H=w==null?void 0:w(n),O=c("div",Object.assign({class:[`${a}-dropdown-option`,H==null?void 0:H.class],"data-dropdown-option":!0},H),c("div",_e(_,m),[c("div",{class:[`${a}-dropdown-option-body__prefix`,s&&`${a}-dropdown-option-body__prefix--show-icon`]},[g?g(n):U(n.icon)]),c("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},d?d(n):U((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),c("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,u&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?c(no,null,{default:()=>c(Ko,null)}):null)]),this.hasSubmenu?c(xo,null,{default:()=>[c(bo,null,{default:()=>c("div",{class:`${a}-dropdown-offset-container`},c(yo,{show:this.mergedShowSubmenu,placement:this.placement,to:R&&this.popoverBody||void 0,teleportDisabled:!R},{default:()=>c("div",{class:`${a}-dropdown-menu-wrapper`},o?c(to,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>k}):k)}))})]}):null);return y?y({node:O,option:n}):O}}),$o=F({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=L(be),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:i,renderOptionRef:a}=L(ue);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:i,renderOption:a}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:i,renderLabel:a,renderOption:s}=this,{rawNode:u}=this.tmNode,d=c("div",Object.assign({class:`${t}-dropdown-option`},i==null?void 0:i(u)),c("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},c("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},U(u.icon)),c("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(u):U((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),c("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:d,option:u}):d}}),Bo=F({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return c(ge,null,c($o,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(i=>De(i.rawNode)?c(Be,{clsPrefix:o,key:i.key}):i.isGroup?(ro("dropdown","`group` node is not allowed to be put in `group` node."),null):c(Ee,{clsPrefix:o,tmNode:i,parentKey:t,key:i.key})))}}),Do=F({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return c("div",t,[e==null?void 0:e()])}}),je=F({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=L(ue);B(be,{showIconRef:f(()=>{const i=t.value;return e.tmNodes.some(a=>{var s;if(a.isGroup)return(s=a.children)===null||s===void 0?void 0:s.some(({rawNode:d})=>i?i(d):d.icon);const{rawNode:u}=a;return i?i(u):u.icon})}),hasSubmenuRef:f(()=>{const{value:i}=o;return e.tmNodes.some(a=>{var s;if(a.isGroup)return(s=a.children)===null||s===void 0?void 0:s.some(({rawNode:d})=>he(d,i));const{rawNode:u}=a;return he(u,i)})})});const n=$(null);return B(ho,null),B(fo,null),B(Fe,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(i=>{const{rawNode:a}=i;return Mo(a)?c(Do,{tmNode:i,key:i.key}):De(a)?c(Be,{clsPrefix:t,key:i.key}):Lo(a)?c(Bo,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key}):c(Ee,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:o})});return c("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?c(Ho,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?wo({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),Eo=h("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[io(),h("dropdown-option",`
 position: relative;
 `,[z("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),h("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[z("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),oe("disabled",[P("pending",{color:"var(--n-option-text-color-hover)"},[p("prefix, suffix",{color:"var(--n-option-text-color-hover)"}),z("&::before","background-color: var(--n-option-color-hover);")]),P("active",{color:"var(--n-option-text-color-active)"},[p("prefix, suffix",{color:"var(--n-option-text-color-active)"}),z("&::before","background-color: var(--n-option-color-active);")]),P("child-active",{color:"var(--n-option-text-color-child-active)"},[p("prefix, suffix",{color:"var(--n-option-text-color-child-active)"})])]),P("disabled",{cursor:"not-allowed",opacity:"var(--n-option-opacity-disabled)"}),P("group",{fontSize:"calc(var(--n-font-size) - 1px)",color:"var(--n-group-header-text-color)"},[p("prefix",{width:"calc(var(--n-option-prefix-width) / 2)"},[P("show-icon",{width:"calc(var(--n-option-icon-prefix-width) / 2)"})])]),p("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `,[P("show-icon",{width:"var(--n-option-icon-prefix-width)"}),h("icon",{fontSize:"var(--n-option-icon-size)"})]),p("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),p("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `,[P("has-submenu",{width:"var(--n-option-icon-suffix-width)"}),h("icon",{fontSize:"var(--n-option-icon-size)"})]),h("dropdown-menu","pointer-events: all;")]),h("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),h("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),h("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),z(">",[h("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),oe("scrollable",`
 padding: var(--n-padding);
 `),P("scrollable",[p("content",`
 padding: var(--n-padding);
 `)])]),jo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Vo=Object.keys(Le),Uo=Object.assign(Object.assign(Object.assign({},Le),jo),se.props),Wo=F({name:"Dropdown",inheritAttrs:!1,props:Uo,setup(e){const t=$(!1),o=pe(M(e,"show"),t),n=f(()=>{const{keyField:v,childrenField:N}=e;return Me(e.options,{getKey(A){return A[v]},getDisabled(A){return A.disabled===!0},getIgnored(A){return A.type==="divider"||A.type==="render"},getChildren(A){return A[N]}})}),i=f(()=>n.value.treeNodes),a=$(null),s=$(null),u=$(null),d=f(()=>{var v,N,A;return(A=(N=(v=a.value)!==null&&v!==void 0?v:s.value)!==null&&N!==void 0?N:u.value)!==null&&A!==void 0?A:null}),g=f(()=>n.value.getPath(d.value).keyPath),y=f(()=>n.value.getPath(e.value).keyPath),w=te(()=>e.keyboard&&o.value);ko({keydown:{ArrowUp:{prevent:!0,handler:E},ArrowRight:{prevent:!0,handler:D},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:q},Escape:W},keyup:{Enter:j}},w);const{mergedClsPrefixRef:m,inlineThemeDisabled:R}=Te(e),k=se("Dropdown","-dropdown",Eo,$e,e,m);B(ue,{labelFieldRef:M(e,"labelField"),childrenFieldRef:M(e,"childrenField"),renderLabelRef:M(e,"renderLabel"),renderIconRef:M(e,"renderIcon"),hoverKeyRef:a,keyboardKeyRef:s,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:g,activeKeyPathRef:y,animatedRef:M(e,"animated"),mergedShowRef:o,nodePropsRef:M(e,"nodeProps"),renderOptionRef:M(e,"renderOption"),menuPropsRef:M(e,"menuProps"),doSelect:_,doUpdateShow:H}),fe(o,v=>{!e.animated&&!v&&O()});function _(v,N){const{onSelect:A}=e;A&&V(A,v,N)}function H(v){const{"onUpdate:show":N,onUpdateShow:A}=e;N&&V(N,v),A&&V(A,v),t.value=v}function O(){a.value=null,s.value=null,u.value=null}function W(){H(!1)}function q(){C("left")}function D(){C("right")}function E(){C("up")}function Y(){C("down")}function j(){const v=b();v!=null&&v.isLeaf&&(_(v.key,v.rawNode),H(!1))}function b(){var v;const{value:N}=n,{value:A}=d;return!N||A===null?null:(v=N.getNode(A))!==null&&v!==void 0?v:null}function C(v){const{value:N}=d,{value:{getFirstAvailableNode:A}}=n;let S=null;if(N===null){const l=A();l!==null&&(S=l.key)}else{const l=b();if(l){let x;switch(v){case"down":x=l.getNext();break;case"up":x=l.getPrev();break;case"right":x=l.getChild();break;case"left":x=l.getParent();break}x&&(S=x.key)}}S!==null&&(a.value=null,s.value=S)}const r=f(()=>{const{size:v,inverted:N}=e,{common:{cubicBezierEaseInOut:A},self:S}=k.value,{padding:l,dividerColor:x,borderRadius:T,optionOpacityDisabled:G,[J("optionIconSuffixWidth",v)]:X,[J("optionSuffixWidth",v)]:ve,[J("optionIconPrefixWidth",v)]:Z,[J("optionPrefixWidth",v)]:Ge,[J("fontSize",v)]:Xe,[J("optionHeight",v)]:Ze,[J("optionIconSize",v)]:Je}=S,K={"--n-bezier":A,"--n-font-size":Xe,"--n-padding":l,"--n-border-radius":T,"--n-option-height":Ze,"--n-option-prefix-width":Ge,"--n-option-icon-prefix-width":Z,"--n-option-suffix-width":ve,"--n-option-icon-suffix-width":X,"--n-option-icon-size":Je,"--n-divider-color":x,"--n-option-opacity-disabled":G};return N?(K["--n-color"]=S.colorInverted,K["--n-option-color-hover"]=S.optionColorHoverInverted,K["--n-option-color-active"]=S.optionColorActiveInverted,K["--n-option-text-color"]=S.optionTextColorInverted,K["--n-option-text-color-hover"]=S.optionTextColorHoverInverted,K["--n-option-text-color-active"]=S.optionTextColorActiveInverted,K["--n-option-text-color-child-active"]=S.optionTextColorChildActiveInverted,K["--n-prefix-color"]=S.prefixColorInverted,K["--n-suffix-color"]=S.suffixColorInverted,K["--n-group-header-text-color"]=S.groupHeaderTextColorInverted):(K["--n-color"]=S.color,K["--n-option-color-hover"]=S.optionColorHover,K["--n-option-color-active"]=S.optionColorActive,K["--n-option-text-color"]=S.optionTextColor,K["--n-option-text-color-hover"]=S.optionTextColorHover,K["--n-option-text-color-active"]=S.optionTextColorActive,K["--n-option-text-color-child-active"]=S.optionTextColorChildActive,K["--n-prefix-color"]=S.prefixColor,K["--n-suffix-color"]=S.suffixColor,K["--n-group-header-text-color"]=S.groupHeaderTextColor),K}),I=R?Oe("dropdown",f(()=>`${e.size[0]}${e.inverted?"i":""}`),r,e):void 0;return{mergedClsPrefix:m,mergedTheme:k,tmNodes:i,mergedShow:o,handleAfterLeave:()=>{!e.animated||O()},doUpdateShow:H,cssVars:R?void 0:r,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const e=(n,i,a,s,u)=>{var d;const{mergedClsPrefix:g,menuProps:y}=this;(d=this.onRender)===null||d===void 0||d.call(this);const w=(y==null?void 0:y(void 0,this.tmNodes.map(R=>R.rawNode)))||{},m={ref:Ro(i),class:[n,`${g}-dropdown`,this.themeClass],clsPrefix:g,tmNodes:this.tmNodes,style:[a,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:u};return c(je,_e(this.$attrs,m,w))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return c(Co,Object.assign({},ce(this.$props,Vo),o),{trigger:()=>{var n,i;return(i=(n=this.$slots).default)===null||i===void 0?void 0:i.call(n)}})}});function qo(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const Go=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:i,textColor1:a,fontSize:s,dividerColor:u,hoverColor:d,primaryColorHover:g}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:d,itemColorActive:de(n,{alpha:.1}),itemColorActiveHover:de(n,{alpha:.1}),itemColorActiveCollapsed:de(n,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:g,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:g,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:u},qo("#BBB",n,"#FFF","#AAA"))},Xo=ke({name:"Menu",common:Ke,peers:{Tooltip:Io,Dropdown:$e},self:Go}),Zo=Xo,re=ne("n-menu"),ye=ne("n-submenu"),we=ne("n-menu-item-group"),ae=8;function Ce(e){const t=L(re),{props:o,mergedCollapsedRef:n}=t,i=L(ye,null),a=L(we,null),s=f(()=>o.mode==="horizontal"),u=f(()=>s.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=f(()=>{var m;return Math.max((m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize,o.iconSize)}),g=f(()=>{var m;return!s.value&&e.root&&n.value&&(m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize}),y=f(()=>{if(s.value)return;const{collapsedWidth:m,indent:R,rootIndent:k}=o,{root:_,isGroup:H}=e,O=k===void 0?R:k;if(_)return n.value?m/2-d.value/2:O;if(a)return R/2+a.paddingLeftRef.value;if(i)return(H?R/2:R)+i.paddingLeftRef.value}),w=f(()=>{const{collapsedWidth:m,indent:R,rootIndent:k}=o,{value:_}=d,{root:H}=e;return s.value||!H||!n.value?ae:(k===void 0?R:k)+_+ae-(m+_)/2});return{dropdownPlacement:u,activeIconSize:g,maxIconSize:d,paddingLeft:y,iconMarginRight:w,NMenu:t,NSubmenu:i}}const Ie={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ve=Object.assign(Object.assign({},Ie),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Jo=F({name:"MenuOptionGroup",props:Ve,setup(e){B(ye,null);const t=Ce(e);B(we,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=L(re);return function(){const{value:i}=o,a=t.paddingLeft.value,{nodeProps:s}=n,u=s==null?void 0:s(e.tmNode.rawNode);return c("div",{class:`${i}-menu-item-group`,role:"group"},c("div",Object.assign({},u,{class:[`${i}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),U(e.title),e.extra?c(ge,null," ",U(e.extra)):null),c("div",null,e.tmNodes.map(d=>ze(d,n))))}}}),Ue=F({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=L(re);return{menuProps:t,style:f(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:f(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:i}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:i,expandIcon:a}}=this,s=o?o(t.rawNode):U(this.icon);return c("div",{onClick:u=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&c("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),c("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):U(this.title),this.extra||i?c("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):U(this.extra)):null),this.showArrow?c(lo,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):c(_o,null)}):null)}}),We=Object.assign(Object.assign({},Ie),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Qo=F({name:"Submenu",props:We,setup(e){const t=Ce(e),{NMenu:o,NSubmenu:n}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:s}=o,u=f(()=>{const{disabled:m}=e;return n!=null&&n.mergedDisabledRef.value||i.disabled?!0:m}),d=$(!1);B(ye,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),B(we,null);function g(){const{onClick:m}=e;m&&m()}function y(){u.value||(a.value||o.toggleExpand(e.internalKey),g())}function w(m){d.value=m}return{menuProps:i,mergedTheme:s,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:d,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:o.mergedValueRef,childActive:te(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:f(()=>i.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:f(()=>!u.value&&(i.mode==="horizontal"||a.value)),handlePopoverShowChange:w,handleClick:y}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,i=()=>{const{isHorizontal:s,paddingLeft:u,collapsed:d,mergedDisabled:g,maxIconSize:y,activeIconSize:w,title:m,childActive:R,icon:k,handleClick:_,menuProps:{nodeProps:H},dropdownShow:O,iconMarginRight:W,tmNode:q,mergedClsPrefix:D}=this,E=H==null?void 0:H(q.rawNode);return c("div",Object.assign({},E,{class:[`${D}-menu-item`,E==null?void 0:E.class],role:"menuitem"}),c(Ue,{tmNode:q,paddingLeft:u,collapsed:d,disabled:g,iconMarginRight:W,maxIconSize:y,activeIconSize:w,title:m,showArrow:!s,childActive:R,clsPrefix:D,icon:k,hover:O,onClick:_}))},a=()=>c(Po,null,{default:()=>{const{tmNodes:s,collapsed:u}=this;return u?null:c("div",{class:`${t}-submenu-children`,role:"menu"},s.map(d=>ze(d,this.menuProps)))}});return this.root?c(Wo,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>c("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:a())}):c("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),a())}}),qe=Object.assign(Object.assign({},Ie),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Yo=F({name:"MenuOption",props:qe,setup(e){const t=Ce(e),{NSubmenu:o,NMenu:n}=t,{props:i,mergedClsPrefixRef:a,mergedCollapsedRef:s}=n,u=o?o.mergedDisabledRef:{value:!1},d=f(()=>u.value||e.disabled);function g(w){const{onClick:m}=e;m&&m(w)}function y(w){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),g(w))}return{mergedClsPrefix:a,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:i,dropdownEnabled:te(()=>e.root&&s.value&&i.mode!=="horizontal"&&!d.value),selected:f(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:y}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:i}}=this,a=i==null?void 0:i(o.rawNode);return c("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),c(zo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):U(this.title),trigger:()=>c(Ue,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),et=F({name:"MenuDivider",setup(){const e=L(re),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:c("div",{class:`${t.value}-menu-divider`})}}),ot=xe(Ve),tt=xe(qe),nt=xe(We);function rt(e){return e.type==="divider"||e.type==="render"}function it(e){return e.type==="divider"}function ze(e,t){const{rawNode:o}=e;if(rt(o))return it(o)?c(et,Object.assign({key:e.key},o.props)):void 0;const{labelField:n}=t,{key:i,level:a,isGroup:s}=e,u=Object.assign(Object.assign({},o),{title:o.title||o[n],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?c(Jo,ce(u,ot,{tmNode:e,tmNodes:e.children,key:i})):c(Qo,ce(u,nt,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):c(Yo,ce(u,tt,{key:i,tmNode:e}))}const Pe=[z("&::before","background-color: var(--n-item-color-hover);"),p("arrow",`
 color: var(--n-arrow-color-hover);
 `),p("icon",`
 color: var(--n-item-icon-color-hover);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[z("a",`
 color: var(--n-item-text-color-hover);
 `),p("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Re=[p("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),h("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],lt=z([h("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[P("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[h("submenu","margin: 0;"),h("menu-item","margin: 0;"),h("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[z("&::before","display: none;"),P("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),h("menu-item-content",[P("selected",[p("icon","color: var(--n-item-icon-color-active-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-horizontal);"),p("extra","color: var(--n-item-text-color-active-horizontal);")])]),P("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),p("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),p("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),oe("disabled",[oe("selected, child-active",[z("&:focus-within",Re)]),P("selected",[Q(null,[p("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),P("child-active",[Q(null,[p("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),p("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Q("border-bottom: 2px solid var(--n-border-color-horizontal);",Re)]),h("menu-item-content-header",[z("a","color: var(--n-item-text-color-horizontal);")])])]),P("collapsed",[h("menu-item-content",[P("selected",[z("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),h("menu-item-content-header","opacity: 0;"),p("arrow","opacity: 0;"),p("icon","color: var(--n-item-icon-color-collapsed);")])]),h("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),h("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z("> *","z-index: 1;"),z("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),P("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),P("collapsed",[p("arrow","transform: rotate(0);")]),P("selected",[z("&::before","background-color: var(--n-item-color-active);"),p("arrow","color: var(--n-arrow-color-active);"),p("icon","color: var(--n-item-icon-color-active);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[z("a","color: var(--n-item-text-color-active);"),p("extra","color: var(--n-item-text-color-active);")])]),P("child-active",[h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[z("a",`
 color: var(--n-item-text-color-child-active);
 `),p("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),p("arrow",`
 color: var(--n-arrow-color-child-active);
 `),p("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),oe("disabled",[oe("selected, child-active",[z("&:focus-within",Pe)]),P("selected",[Q(null,[p("arrow","color: var(--n-arrow-color-active-hover);"),p("icon","color: var(--n-item-icon-color-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[z("a","color: var(--n-item-text-color-active-hover);"),p("extra","color: var(--n-item-text-color-active-hover);")])])]),P("child-active",[Q(null,[p("arrow","color: var(--n-arrow-color-child-active-hover);"),p("icon","color: var(--n-item-icon-color-child-active-hover);"),h("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[z("a","color: var(--n-item-text-color-child-active-hover);"),p("extra","color: var(--n-item-text-color-child-active-hover);")])])]),P("selected",[Q(null,[z("&::before","background-color: var(--n-item-color-active-hover);")])]),Q(null,Pe)]),p("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),p("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),h("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[z("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),p("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),h("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[h("menu-item-content",`
 height: var(--n-item-height);
 `),h("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[So({duration:".2s"})])]),h("menu-item-group",[h("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),h("menu-tooltip",[z("a",`
 color: inherit;
 text-decoration: none;
 `)]),h("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Q(e,t){return[P("hover",e,t),z("&:hover",e,t)]}const at=Object.assign(Object.assign({},se.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),dt=F({name:"Menu",props:at,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Te(e),n=se("Menu","-menu",lt,Zo,e,t),i=L(ao,null),a=f(()=>{var b;const{collapsed:C}=e;if(C!==void 0)return C;if(i){const{collapseModeRef:r,collapsedRef:I}=i;if(r.value==="width")return(b=I.value)!==null&&b!==void 0?b:!1}return!1}),s=f(()=>{const{keyField:b,childrenField:C}=e;return Me(e.items||e.options,{getChildren(r){return r[C]},getKey(r){var I;return(I=r[b])!==null&&I!==void 0?I:r.name}})}),u=f(()=>new Set(s.value.treeNodes.map(b=>b.key))),{watchProps:d}=e,g=$(null);d!=null&&d.includes("defaultValue")?Se(()=>{g.value=e.defaultValue}):g.value=e.defaultValue;const y=M(e,"value"),w=pe(y,g),m=$([]),R=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(w.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?Se(R):R();const k=Ao(e,["expandedNames","expandedKeys"]),_=pe(k,m),H=f(()=>s.value.treeNodes),O=f(()=>s.value.getPath(w.value).keyPath);B(re,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:w,mergedExpandedKeysRef:_,activePathRef:O,mergedClsPrefixRef:t,isHorizontalRef:f(()=>e.mode==="horizontal"),invertedRef:M(e,"inverted"),doSelect:W,toggleExpand:D});function W(b,C){const{"onUpdate:value":r,onUpdateValue:I,onSelect:v}=e;I&&V(I,b,C),r&&V(r,b,C),v&&V(v,b,C),g.value=b}function q(b){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:r,onExpandedNamesChange:I,onOpenNamesChange:v}=e;C&&V(C,b),r&&V(r,b),I&&V(I,b),v&&V(v,b),m.value=b}function D(b){const C=Array.from(_.value),r=C.findIndex(I=>I===b);if(~r)C.splice(r,1);else{if(e.accordion&&u.value.has(b)){const I=C.findIndex(v=>u.value.has(v));I>-1&&C.splice(I,1)}C.push(b)}q(C)}const E=b=>{const C=s.value.getPath(b!=null?b:w.value,{includeSelf:!1}).keyPath;if(!C.length)return;const r=Array.from(_.value),I=new Set([...r,...C]);e.accordion&&u.value.forEach(v=>{I.has(v)&&!C.includes(v)&&I.delete(v)}),q(Array.from(I))},Y=f(()=>{const{inverted:b}=e,{common:{cubicBezierEaseInOut:C},self:r}=n.value,{borderRadius:I,borderColorHorizontal:v,fontSize:N,itemHeight:A,dividerColor:S}=r,l={"--n-divider-color":S,"--n-bezier":C,"--n-font-size":N,"--n-border-color-horizontal":v,"--n-border-radius":I,"--n-item-height":A};return b?(l["--n-group-text-color"]=r.groupTextColorInverted,l["--n-color"]=r.colorInverted,l["--n-item-text-color"]=r.itemTextColorInverted,l["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,l["--n-item-text-color-active"]=r.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=r.itemIconColorInverted,l["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=r.arrowColorInverted,l["--n-arrow-color-hover"]=r.arrowColorHoverInverted,l["--n-arrow-color-active"]=r.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=r.itemColorHoverInverted,l["--n-item-color-active"]=r.itemColorActiveInverted,l["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=r.groupTextColor,l["--n-color"]=r.color,l["--n-item-text-color"]=r.itemTextColor,l["--n-item-text-color-hover"]=r.itemTextColorHover,l["--n-item-text-color-active"]=r.itemTextColorActive,l["--n-item-text-color-child-active"]=r.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,l["--n-item-icon-color"]=r.itemIconColor,l["--n-item-icon-color-hover"]=r.itemIconColorHover,l["--n-item-icon-color-active"]=r.itemIconColorActive,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=r.arrowColor,l["--n-arrow-color-hover"]=r.arrowColorHover,l["--n-arrow-color-active"]=r.arrowColorActive,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,l["--n-arrow-color-child-active"]=r.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,l["--n-item-color-hover"]=r.itemColorHover,l["--n-item-color-active"]=r.itemColorActive,l["--n-item-color-active-hover"]=r.itemColorActiveHover,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),l}),j=o?Oe("menu",f(()=>e.inverted?"a":"b"),Y,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:k,uncontrolledExpanededKeys:m,mergedExpandedKeys:_,uncontrolledValue:g,mergedValue:w,activePath:O,tmNodes:H,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:Y,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender,showOption:E}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),c("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>ze(i,this.$props)))}});const ct={class:"mg-t"},st={__name:"AdminLayout",setup(e){const t=$(null),o=Ne([{label:()=>c(ee,{to:{path:"/"}},{default:()=>"\u56DE\u9996\u9801"}),key:"back"},{label:()=>c(ee,{to:{path:"/admin/UsersAdmin"}},{default:()=>"\u6703\u54E1\u7BA1\u7406"}),key:"user"},{label:()=>c(ee,{to:{path:"/admin/productsAdmin"}},{default:()=>"\u5546\u54C1\u7BA1\u7406"}),key:"products"},{label:()=>c(ee,{to:{path:"/admin/ordersAdmin"}},{default:()=>"\u8A02\u55AE\u7BA1\u7406"}),key:"orders"},{label:()=>c(ee,{to:{path:"/admin/newcardsAdmin"}},{default:()=>"\u65B0\u5361\u7BA1\u7406"}),key:"newcards"},{label:()=>c(ee,{to:{path:"/admin/decksAdmin"}},{default:()=>"\u5C08\u6B04\u7BA1\u7406"}),key:"decks"}]);return(n,i)=>{const a=dt,s=so("RouterView"),u=po;return uo(),vo(ge,null,[mo("div",ct,[me(a,{value:t.value,"onUpdate:value":i[0]||(i[0]=d=>t.value=d),options:o},null,8,["value","options"])]),me(s),me(u,{right:100,"visibility-height":10})],64)}}},It=co(st,[["__scopeId","data-v-ffb9f429"]]);export{It as default};
