import{o as V}from"./utils.3f54be48.js";import{t as A}from"./Tag.34245d12.js";import{c as K,b4 as T,b as N,j as F,ap as G,l as O,aq as q,k as _,d as D,u as U,r as y,i as B,e as x,x as M,v as X,y as Y,f as J,w as Q,g as Z,h as R,ak as ee,V as oe}from"./index.6446108b.js";import{c as re}from"./use-rtl.d34f6b7c.js";import{c as te}from"./Button.99bd50f7.js";const H=!1,ne=r=>{const{borderRadius:s,avatarColor:i,cardColor:t,fontSize:l,heightTiny:u,heightSmall:a,heightMedium:b,heightLarge:f,heightHuge:v,modalColor:h,popoverColor:d}=r;return{borderRadius:s,fontSize:l,border:`2px solid ${t}`,heightTiny:u,heightSmall:a,heightMedium:b,heightLarge:f,heightHuge:v,color:T(t,i),colorModal:T(h,i),colorPopover:T(d,i)}},ae={name:"Avatar",common:K,self:ne},se=ae,ie=N("n-avatar-group"),le=F("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[G(O("&","--n-merged-color: var(--n-color-modal);")),q(O("&","--n-merged-color: var(--n-color-popover);")),O("img",`
 width: 100%;
 height: 100%;
 `),_("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),_("text","line-height: 1.25")]),de=Object.assign(Object.assign({},M.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),me=D({name:"Avatar",props:de,setup(r){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=U(r),t=y(!1);let l=null;const u=y(null),a=y(null),b=()=>{const{value:e}=u;if(e&&(l===null||l!==e.innerHTML)){l=e.innerHTML;const{value:o}=a;if(o){const{offsetWidth:z,offsetHeight:c}=o,{offsetWidth:n,offsetHeight:C}=e,L=.9,j=Math.min(z/n*L,c/C*L,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},f=B(ie,null),v=x(()=>{const{size:e}=r;if(e)return e;const{size:o}=f||{};return o||"medium"}),h=M("Avatar","-avatar",le,se,r,s),d=B(A,null),m=x(()=>{if(f)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:d?d.roundRef.value:!1}),p=x(()=>f?!0:r.bordered||!1),k=e=>{if(!S.value)return;t.value=!0;const{onError:o}=r;o&&o(e)};X(()=>r.src,()=>t.value=!1);const $=x(()=>{const e=v.value,o=m.value,z=p.value,{color:c}=r,{self:{borderRadius:n,fontSize:C,color:L,border:j,colorModal:I,colorPopover:P},common:{cubicBezierEaseInOut:W}}=h.value;let E;return typeof e=="number"?E=`${e}px`:E=h.value.self[re("height",e)],{"--n-font-size":C,"--n-border":z?j:"none","--n-border-radius":o?"50%":n,"--n-color":c||L,"--n-color-modal":c||I,"--n-color-popover":c||P,"--n-bezier":W,"--n-merged-size":`var(--n-avatar-size-override, ${E})`}}),g=i?Y("avatar",x(()=>{const e=v.value,o=m.value,z=p.value,{color:c}=r;let n="";return e&&(typeof e=="number"?n+=`a${e}`:n+=e[0]),o&&(n+="b"),z&&(n+="c"),c&&(n+=te(c)),n}),$,r):void 0,S=y(!r.lazy);J(()=>{if(H)return;let e;const o=Q(()=>{e==null||e(),e=void 0,r.lazy&&(e=V(a.value,r.intersectionObserverOptions,S))});Z(()=>{o(),e==null||e()})});const w=y(!r.lazy);return{textRef:u,selfRef:a,mergedRoundRef:m,mergedClsPrefix:s,fitTextTransform:b,cssVars:i?void 0:$,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:t,handleError:k,shouldStartLoading:S,loaded:w,mergedOnLoad:e=>{const{onLoad:o}=r;o==null||o(e),w.value=!0}}},render(){var r,s;const{$slots:i,src:t,mergedClsPrefix:l,lazy:u,onRender:a,mergedOnLoad:b,shouldStartLoading:f,loaded:v,hasLoadError:h}=this;a==null||a();let d;const m=!v&&!h&&((s=(r=this.$slots).placeholder)===null||s===void 0?void 0:s.call(r));return this.hasLoadError?d=R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):d=ee(i.default,p=>{if(p)return R(oe,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},p)});if(t)return R("img",{loading:H&&u?"lazy":"eager",src:H||f||v?t:void 0,onLoad:b,"data-image-src":t,onError:this.handleError,style:[{objectFit:this.objectFit},m?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},d,u&&m)}});export{me as _};
