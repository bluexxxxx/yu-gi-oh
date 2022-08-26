import{u as to,c as h}from"./use-rtl.5053befe.js";import{h as b,j as U,m as u,l as g,ai as P,d as D,aC as io,q as V,af as ho,c as bo,an as e,k as z,r as uo,u as go,x as K,p as Co,e as F,y as vo,ak as O,b as po}from"./index.67f4b75a.js";import{r as fo,c as N}from"./Button.7c522543.js";import{c as ko}from"./FadeInExpandTransition.5213e6a5.js";const mo=fo("close",b("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},b("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},b("g",{fill:"currentColor","fill-rule":"nonzero"},b("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),xo=U("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[u("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),g("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),P("disabled",[g("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),g("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),g("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),g("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),g("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),u("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),u("round",[g("&::before",`
 border-radius: 50%;
 `)])]),yo=D({name:"BaseClose",props:{clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(l){return io("-base-close",xo,V(l,"clsPrefix")),()=>{const{clsPrefix:n,disabled:o,absolute:p,round:c}=l;return b("button",{type:"button",tabindex:o||!l.focusable?-1:0,"aria-disabled":o,"aria-label":"close",disabled:o,class:[`${n}-base-close`,p&&`${n}-base-close--absolute`,o&&`${n}-base-close--disabled`,c&&`${n}-base-close--round`],onMousedown:s=>{l.focusable||s.preventDefault()},onClick:l.onClick},b(ho,{clsPrefix:n},{default:()=>b(mo,null)}))}}}),zo={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},Po=l=>{const{textColor2:n,primaryColorHover:o,primaryColorPressed:p,primaryColor:c,infoColor:s,successColor:i,warningColor:t,errorColor:d,baseColor:x,borderColor:y,opacityDisabled:C,tagColor:k,closeIconColor:r,closeIconColorHover:a,closeIconColorPressed:m,borderRadiusSmall:v,fontSizeMini:f,fontSizeTiny:I,fontSizeSmall:S,fontSizeMedium:B,heightMini:$,heightTiny:H,heightSmall:M,heightMedium:w,closeColorHover:R,closeColorPressed:L,buttonColor2Hover:T,buttonColor2Pressed:E,fontWeightStrong:_}=l;return Object.assign(Object.assign({},zo),{closeBorderRadius:v,heightTiny:$,heightSmall:H,heightMedium:M,heightLarge:w,borderRadius:v,opacityDisabled:C,fontSizeTiny:f,fontSizeSmall:I,fontSizeMedium:S,fontSizeLarge:B,fontWeightStrong:_,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:x,colorCheckable:"#0000",colorHoverCheckable:T,colorPressedCheckable:E,colorChecked:c,colorCheckedHover:o,colorCheckedPressed:p,border:`1px solid ${y}`,textColor:n,color:k,colorBordered:"rgb(250, 250, 252)",closeIconColor:r,closeIconColorHover:a,closeIconColorPressed:m,closeColorHover:R,closeColorPressed:L,borderPrimary:`1px solid ${e(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:e(c,{alpha:.12}),colorBorderedPrimary:e(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:e(c,{alpha:.12}),closeColorPressedPrimary:e(c,{alpha:.18}),borderInfo:`1px solid ${e(s,{alpha:.3})}`,textColorInfo:s,colorInfo:e(s,{alpha:.12}),colorBorderedInfo:e(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:e(s,{alpha:.12}),closeColorPressedInfo:e(s,{alpha:.18}),borderSuccess:`1px solid ${e(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:e(i,{alpha:.12}),colorBorderedSuccess:e(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:e(i,{alpha:.12}),closeColorPressedSuccess:e(i,{alpha:.18}),borderWarning:`1px solid ${e(t,{alpha:.35})}`,textColorWarning:t,colorWarning:e(t,{alpha:.15}),colorBorderedWarning:e(t,{alpha:.12}),closeIconColorWarning:t,closeIconColorHoverWarning:t,closeIconColorPressedWarning:t,closeColorHoverWarning:e(t,{alpha:.12}),closeColorPressedWarning:e(t,{alpha:.18}),borderError:`1px solid ${e(d,{alpha:.23})}`,textColorError:d,colorError:e(d,{alpha:.1}),colorBorderedError:e(d,{alpha:.08}),closeIconColorError:d,closeIconColorHoverError:d,closeIconColorPressedError:d,closeColorHoverError:e(d,{alpha:.12}),closeColorPressedError:e(d,{alpha:.18})})},Io={name:"Tag",common:bo,self:Po},So=Io,Bo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},$o=U("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[u("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),z("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),u("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),u("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),u("icon, avatar",[u("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),u("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),u("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[P("disabled",[g("&:hover","background-color: var(--n-color-hover-checkable);",[P("checked","color: var(--n-text-color-hover-checkable);")]),g("&:active","background-color: var(--n-color-pressed-checkable);",[P("checked","color: var(--n-text-color-pressed-checkable);")])]),u("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[P("disabled",[g("&:hover","background-color: var(--n-color-checked-hover);"),g("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ho=Object.assign(Object.assign(Object.assign({},K.props),Bo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),Mo=po("n-tag"),Eo=D({name:"Tag",props:Ho,setup(l){const n=uo(null),{mergedBorderedRef:o,mergedClsPrefixRef:p,inlineThemeDisabled:c,mergedRtlRef:s}=go(l),i=K("Tag","-tag",$o,So,l,p);Co(Mo,{roundRef:V(l,"round")});function t(r){if(!l.disabled&&l.checkable){const{checked:a,onCheckedChange:m,onUpdateChecked:v,"onUpdate:checked":f}=l;v&&v(!a),f&&f(!a),m&&m(!a)}}function d(r){if(l.internalStopClickPropagation&&r.stopPropagation(),!l.disabled){const{onClose:a}=l;a&&ko(a,r)}}const x={setTextContent(r){const{value:a}=n;a&&(a.textContent=r)}},y=to("Tag",s,p),C=F(()=>{const{type:r,size:a,color:{color:m,textColor:v}={}}=l,{common:{cubicBezierEaseInOut:f},self:{padding:I,closeMargin:S,closeMarginRtl:B,borderRadius:$,opacityDisabled:H,textColorCheckable:M,textColorHoverCheckable:w,textColorPressedCheckable:R,textColorChecked:L,colorCheckable:T,colorHoverCheckable:E,colorPressedCheckable:_,colorChecked:q,colorCheckedHover:A,colorCheckedPressed:X,closeBorderRadius:Y,fontWeightStrong:Z,[h("colorBordered",r)]:G,[h("closeSize",a)]:J,[h("closeIconSize",a)]:Q,[h("fontSize",a)]:oo,[h("height",a)]:j,[h("color",r)]:eo,[h("textColor",r)]:ro,[h("border",r)]:lo,[h("closeIconColor",r)]:W,[h("closeIconColorHover",r)]:co,[h("closeIconColorPressed",r)]:ao,[h("closeColorHover",r)]:no,[h("closeColorPressed",r)]:so}}=i.value;return{"--n-font-weight-strong":Z,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":f,"--n-border-radius":$,"--n-border":lo,"--n-close-icon-size":Q,"--n-close-color-pressed":so,"--n-close-color-hover":no,"--n-close-border-radius":Y,"--n-close-icon-color":W,"--n-close-icon-color-hover":co,"--n-close-icon-color-pressed":ao,"--n-close-icon-color-disabled":W,"--n-close-margin":S,"--n-close-margin-rtl":B,"--n-close-size":J,"--n-color":m||(o.value?G:eo),"--n-color-checkable":T,"--n-color-checked":q,"--n-color-checked-hover":A,"--n-color-checked-pressed":X,"--n-color-hover-checkable":E,"--n-color-pressed-checkable":_,"--n-font-size":oo,"--n-height":j,"--n-opacity-disabled":H,"--n-padding":I,"--n-text-color":v||ro,"--n-text-color-checkable":M,"--n-text-color-checked":L,"--n-text-color-hover-checkable":w,"--n-text-color-pressed-checkable":R}}),k=c?vo("tag",F(()=>{let r="";const{type:a,size:m,color:{color:v,textColor:f}={}}=l;return r+=a[0],r+=m[0],v&&(r+=`a${N(v)}`),f&&(r+=`b${N(f)}`),o.value&&(r+="c"),r}),C,l):void 0;return Object.assign(Object.assign({},x),{rtlEnabled:y,mergedClsPrefix:p,contentRef:n,mergedBordered:o,handleClick:t,handleCloseClick:d,cssVars:c?void 0:C,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var l,n;const{mergedClsPrefix:o,rtlEnabled:p,closable:c,color:{borderColor:s}={},round:i,onRender:t,$slots:d}=this;t==null||t();const x=O(d.avatar,C=>C&&b("div",{class:`${o}-tag__avatar`},C)),y=O(d.icon,C=>C&&b("div",{class:`${o}-tag__icon`},C));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:p,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:i,[`${o}-tag--avatar`]:x,[`${o}-tag--icon`]:y,[`${o}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},y||x,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(l=this.$slots).default)===null||n===void 0?void 0:n.call(l)),!this.checkable&&c?b(yo,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});export{Eo as N,yo as a,Mo as t};
