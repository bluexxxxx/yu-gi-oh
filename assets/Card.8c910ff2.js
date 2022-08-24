import{u as J,c as $}from"./use-rtl.0ede582a.js";import{c as Q,l as t,j as p,m as l,k as n,ap as U,aq as X,ar as Y,d as Z,u as oo,x as _,e as w,am as eo,y as ro,h as i,ak as f}from"./index.38b448af.js";import{a as to}from"./Tag.8bdf4b01.js";import{k as no}from"./Scrollbar.6d7c5f57.js";import{c as ao}from"./FadeInExpandTransition.9c37beeb.js";const lo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},io=o=>{const{primaryColor:v,borderRadius:g,lineHeight:e,fontSize:s,cardColor:c,textColor2:d,textColor1:r,dividerColor:a,fontWeightStrong:b,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:m}=o;return Object.assign(Object.assign({},lo),{lineHeight:e,color:c,colorModal:S,colorPopover:k,colorTarget:v,colorEmbedded:m,textColor:d,titleTextColor:r,borderColor:a,actionColor:m,titleFontWeight:b,closeColorHover:z,closeColorPressed:C,closeBorderRadius:g,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:s,fontSizeMedium:s,fontSizeLarge:s,fontSizeHuge:s,boxShadow:y,borderRadius:g})},so={name:"Card",common:Q,self:io},co=so,bo=t([p("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[p("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),p("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),U(p("card",{background:"var(--n-color-modal)"})),X(p("card",{background:"var(--n-color-popover)"})),p("card",[Y({background:"var(--n-color-modal)"})])]),T={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},uo=no(T),go=Object.assign(Object.assign({},_.props),T),xo=Z({name:"Card",props:go,setup(o){const v=()=>{const{onClose:b}=o;b&&ao(b)},{inlineThemeDisabled:g,mergedClsPrefixRef:e,mergedRtlRef:s}=oo(o),c=_("Card","-card",bo,co,o,e),d=J("Card",s,e),r=w(()=>{const{size:b}=o,{self:{color:h,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:m,lineHeight:P,closeIconColor:R,closeIconColorHover:B,closeIconColorPressed:O,closeColorHover:j,closeColorPressed:H,closeBorderRadius:E,closeIconSize:F,closeSize:I,boxShadow:M,colorPopover:L,colorEmbedded:V,[$("padding",b)]:W,[$("fontSize",b)]:K,[$("titleFontSize",b)]:q},common:{cubicBezierEaseInOut:A}}=c.value,{top:D,left:N,bottom:G}=eo(W);return{"--n-bezier":A,"--n-border-radius":m,"--n-color":o.embedded?V:h,"--n-color-modal":u,"--n-color-popover":L,"--n-color-target":x,"--n-text-color":z,"--n-line-height":P,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":R,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":O,"--n-close-color-hover":j,"--n-close-color-pressed":H,"--n-border-color":y,"--n-box-shadow":M,"--n-padding-top":D,"--n-padding-bottom":G,"--n-padding-left":N,"--n-font-size":K,"--n-title-font-size":q,"--n-close-size":I,"--n-close-icon-size":F,"--n-close-border-radius":E}}),a=g?ro("card",w(()=>o.size[0]),r,o):void 0;return{rtlEnabled:d,mergedClsPrefix:e,mergedTheme:c,handleCloseClick:v,cssVars:g?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:o,bordered:v,hoverable:g,mergedClsPrefix:e,rtlEnabled:s,onRender:c,$slots:d}=this;return c==null||c(),i("div",{class:[`${e}-card`,this.themeClass,{[`${e}-card--rtl`]:s,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:v,[`${e}-card--hoverable`]:g}],style:this.cssVars,role:this.role},f(d.cover,r=>r&&i("div",{class:`${e}-card-cover`,role:"none"},r)),f(d.header,r=>r||this.title||this.closable?i("div",{class:`${e}-card-header`,style:this.headerStyle},i("div",{class:`${e}-card-header__main`,role:"heading"},r||[this.title]),f(d["header-extra"],a=>a&&i("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},a)),this.closable?i(to,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),f(d.default,r=>r&&i("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},r)),f(d.footer,r=>r&&[i("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},r)]),f(d.action,r=>r&&i("div",{class:`${e}-card__action`,role:"none"},r)))}});export{xo as _,T as a,uo as b,co as c};
