import{c as Ot,a as et,p as Ut,i as jt,t as Bt,b as Zt,d as ve,u as pe,r as U,o as Wt,h as w,e as h,f as tt,g as nt,j as Ft,k as f,l as L,m as v,n as Xt,q as Yt,w as Kt,s as Ht,v as ce,x as ot,y as Gt,z as Jt,V as Ue,A as je,B as qt,C as Qt,T as en,D as tn,E as Be,_ as nn,F as on,G as an,H as n,I,J as k,K as sn,L as rn,M as ln,N as un,O as cn,P as Ze,Q as dn}from"./index.7d7728d0.js";import{i as fn,o as Q,a as ee}from"./delegate.d660cb22.js";import{t as ke}from"./toString.9508659a.js";import{u as vn}from"./upperFirst.8f13d154.js";import{k as We}from"./keep.76d496a2.js";function pn(e){return vn(ke(e).toLowerCase())}function hn(e,a,s,l){var c=-1,m=e==null?0:e.length;for(l&&m&&(s=e[++c]);++c<m;)s=a(s,e[c],c,e);return s}function xn(e){return function(a){return e==null?void 0:e[a]}}var mn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},gn=xn(mn);const bn=gn;var _n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wn="\\u0300-\\u036f",yn="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Cn=wn+yn+Sn,Rn="["+Cn+"]",zn=RegExp(Rn,"g");function Pn(e){return e=ke(e),e&&e.replace(_n,bn).replace(zn,"")}var In=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function kn(e){return e.match(In)||[]}var Dn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function An(e){return Dn.test(e)}var at="\\ud800-\\udfff",Nn="\\u0300-\\u036f",En="\\ufe20-\\ufe2f",Tn="\\u20d0-\\u20ff",Vn=Nn+En+Tn,st="\\u2700-\\u27bf",rt="a-z\\xdf-\\xf6\\xf8-\\xff",$n="\\xac\\xb1\\xd7\\xf7",Ln="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mn="\\u2000-\\u206f",On=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",lt="A-Z\\xc0-\\xd6\\xd8-\\xde",Un="\\ufe0e\\ufe0f",it=$n+Ln+Mn+On,ut="['\u2019]",Fe="["+it+"]",jn="["+Vn+"]",ct="\\d+",Bn="["+st+"]",dt="["+rt+"]",ft="[^"+at+it+ct+st+rt+lt+"]",Zn="\\ud83c[\\udffb-\\udfff]",Wn="(?:"+jn+"|"+Zn+")",Fn="[^"+at+"]",vt="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",K="["+lt+"]",Xn="\\u200d",Xe="(?:"+dt+"|"+ft+")",Yn="(?:"+K+"|"+ft+")",Ye="(?:"+ut+"(?:d|ll|m|re|s|t|ve))?",Ke="(?:"+ut+"(?:D|LL|M|RE|S|T|VE))?",ht=Wn+"?",xt="["+Un+"]?",Kn="(?:"+Xn+"(?:"+[Fn,vt,pt].join("|")+")"+xt+ht+")*",Hn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Jn=xt+ht+Kn,qn="(?:"+[Bn,vt,pt].join("|")+")"+Jn,Qn=RegExp([K+"?"+dt+"+"+Ye+"(?="+[Fe,K,"$"].join("|")+")",Yn+"+"+Ke+"(?="+[Fe,K+Xe,"$"].join("|")+")",K+"?"+Xe+"+"+Ye,K+"+"+Ke,Gn,Hn,ct,qn].join("|"),"g");function eo(e){return e.match(Qn)||[]}function to(e,a,s){return e=ke(e),a=s?void 0:a,a===void 0?An(e)?eo(e):kn(e):e.match(a)||[]}var no="['\u2019]",oo=RegExp(no,"g");function ao(e){return function(a){return hn(to(Pn(a).replace(oo,"")),e,"")}}var so=ao(function(e,a,s){return a=a.toLowerCase(),e+(s?pn(a):a)});const He=so,ro=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),lo={name:"Carousel",common:Ot,self:ro},io=lo;function uo(e){const{length:a}=e;return a>1&&(e.push(Ge(e[0],0,"append")),e.unshift(Ge(e[a-1],a-1,"prepend"))),e}function Ge(e,a,s){return et(e,{key:`carousel-item-duplicate-${a}-${s}`})}function Je(e,a,s){return s?e===0?a-3:e===a-1?0:e-1:e}function Pe(e,a){return a?e+1:e}function co(e,a,s){return e<0?null:e===0?s?a-1:null:e-1}function fo(e,a,s){return e>a-1?null:e===a-1?s?0:null:e+1}function vo(e,a){return a&&e>3?e-2:e}function qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Qe(e,a){let{width:s,height:l}=e.getBoundingClientRect();if(a){const c=getComputedStyle(e);s=s-parseFloat(c.getPropertyValue("padding-left"))-parseFloat(c.getPropertyValue("padding-right")),l=l-parseFloat(c.getPropertyValue("padding-top"))-parseFloat(c.getPropertyValue("padding-bottom"))}return{width:s,height:l}}function de(e,a,s){return e<a?a:e>s?s:e}function po(e){if(e===void 0)return 0;if(typeof e=="number")return e;const a=/^((\d+)?\.?\d+?)(ms|s)?$/,s=e.match(a);if(s){const[,l,,c="ms"]=s;return Number(l)*(c==="ms"?1:1e3)}return 0}const mt=Zt("n-carousel-methods"),ho=e=>Ut(mt,e),De=(e="unknown",a="component")=>{const s=jt(mt);return s||Bt(e,`\`${a}\` must be placed inside \`n-carousel\`.`),s},xo={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},mo=ve({name:"CarouselDots",props:xo,setup(e){const{mergedClsPrefixRef:a}=pe(e),s=U([]),l=De();function c(g,p){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(p);return}e.keyboard&&S(g)}function m(g){e.trigger==="hover"&&l.to(g)}function D(g){e.trigger==="click"&&l.to(g)}function S(g){var p;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const _=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();if(_==="input"||_==="textarea")return;const{code:z}=g,j=z==="PageUp"||z==="ArrowUp",B=z==="PageDown"||z==="ArrowDown",R=z==="PageUp"||z==="ArrowRight",P=z==="PageDown"||z==="ArrowLeft",A=l.isVertical(),M=A?j:R,H=A?B:P;!M&&!H||(g.preventDefault(),M&&!l.isNextDisabled()?(l.next(),C(l.currentIndexRef.value)):H&&!l.isPrevDisabled()&&(l.prev(),C(l.currentIndexRef.value)))}function C(g){var p;(p=s.value[g])===null||p===void 0||p.focus()}return Wt(()=>s.value.length=0),{mergedClsPrefix:a,dotEls:s,handleKeydown:c,handleMouseenter:m,handleClick:D}},render(){const{mergedClsPrefix:e,dotEls:a}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},fn(this.total,s=>{const l=s===this.currentIndex;return w("div",{"aria-selected":l,ref:c=>a.push(c),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:s,onClick:()=>this.handleClick(s),onMouseenter:()=>this.handleMouseenter(s),onKeydown:c=>this.handleKeydown(c,s)})}))}}),go=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),bo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),_o=ve({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:a}=pe(e),{isVertical:s,isPrevDisabled:l,isNextDisabled:c,prev:m,next:D}=De();return{mergedClsPrefix:a,isVertical:s,isPrevDisabled:l,isNextDisabled:c,prev:m,next:D}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},go),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},bo))}}),fe="CarouselItem",wo=e=>{var a;return((a=e.type)===null||a===void 0?void 0:a.name)===fe},yo=ve({name:fe,setup(e){const{mergedClsPrefixRef:a}=pe(e),s=De(He(fe),`n-${He(fe)}`),l=U(),c=h(()=>{const{value:p}=l;return p?s.getSlideIndex(p):-1}),m=h(()=>s.isPrev(c.value)),D=h(()=>s.isNext(c.value)),S=h(()=>s.isActive(c.value)),C=h(()=>s.getSlideStyle(c.value));tt(()=>s.addSlide(l.value)),nt(()=>{s.removeSlide(l.value)});function g(p){const{value:_}=c;_!==void 0&&(s==null||s.onCarouselItemClick(_,p))}return{mergedClsPrefix:a,selfElRef:l,isPrev:m,isNext:D,isActive:S,index:c,style:C,handleClick:g}},render(){var e;const{$slots:a,mergedClsPrefix:s,isPrev:l,isNext:c,isActive:m,index:D,style:S}=this,C=[`${s}-carousel__slide`,{[`${s}-carousel__slide--current`]:m,[`${s}-carousel__slide--prev`]:l,[`${s}-carousel__slide--next`]:c}];return w("div",{ref:"selfElRef",class:C,role:"option",tabindex:"-1","data-index":D,"aria-hidden":!m,style:S,onClickCapture:this.handleClick},(e=a.default)===null||e===void 0?void 0:e.call(a,{isPrev:l,isNext:c,isActive:m,index:D}))}}),So=Ft("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[f("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[f("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[L("> img",`
 display: block;
 `)])]),f("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[v("dot",[f("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[L("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 background-color: var(--n-dot-color-active);
 `)])]),v("line",[f("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[L("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),v("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),f("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[L("svg",`
 height: 1em;
 width: 1em;
 `),L("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),v("vertical",`
 touch-action: pan-x;
 `,[f("slides",`
 flex-direction: column;
 `),v("fade",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),v("card",[f("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[v("current",`
 transform: translateY(-50%) translateZ(0);
 `),v("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),v("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),v("usercontrol",[f("slides",[L(">",[L("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),v("left",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `)]),f("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),v("vertical",[f("arrow",`
 transform: rotate(90deg);
 `)]),v("show-arrow",[v("bottom",[f("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),v("top",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("left",[f("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),v("right",[f("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),v("left",[f("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[L("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("right",[f("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[v("line",[f("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[v("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),f("dot",`
 margin: 4px 0;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[L("> *:first-child",`
 margin-bottom: 12px;
 `)])]),v("top",[f("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 top: 12px;
 right: 12px;
 `,[L("> *:first-child",`
 margin-right: 12px;
 `)])]),v("bottom",[f("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[v("line",[f("dot",`
 margin: 0 4px;
 `)])]),f("dot",`
 margin: 0 4px;
 `),f("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[L("> *:first-child",`
 margin-right: 12px;
 `)])]),v("fade",[f("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[v("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),v("card",[f("slides",`
 perspective: 1000px;
 `),f("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[v("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),v("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),v("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),Co=["transitionDuration","transitionTimingFunction"],Ro=Object.assign(Object.assign({},ot.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const zo=ve({name:"Carousel",props:Ro,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:s}=pe(e),l=U(null),c=U(null),m=U([]),D={value:[]},S=h(()=>e.direction==="vertical"),C=h(()=>S.value?"height":"width"),g=h(()=>S.value?"bottom":"right"),p=h(()=>e.effect==="slide"),_=h(()=>e.loop&&e.slidesPerView===1&&p.value),z=h(()=>e.effect==="custom"),j=h(()=>!p.value||e.centeredSlides?1:e.slidesPerView),B=h(()=>z.value?1:e.slidesPerView),R=h(()=>j.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=U({width:0,height:0}),A=h(()=>{const{value:t}=m;if(!t.length)return[];const{value:o}=R;if(o)return t.map(b=>Qe(b));const{value:r}=B,{value:u}=P,{value:d}=C;let i=u[d];if(r!=="auto"){const{spaceBetween:b}=e,N=i-(r-1)*b,ue=1/Math.max(1,r);i=N*ue}const x=Object.assign(Object.assign({},u),{[d]:i});return t.map(()=>x)}),M=h(()=>{const{value:t}=A;if(!t.length)return[];const{centeredSlides:o,spaceBetween:r}=e,{value:u}=C,{[u]:d}=P.value;let i=0;return t.map(({[u]:x})=>{let b=i;return o&&(b+=(x-d)/2),i+=x+r,b})}),H=U(!1),he=h(()=>{const{transitionStyle:t}=e;return t?We(t,Co):{}}),xe=h(()=>z.value?0:po(he.value.transitionDuration)),Ae=h(()=>{const{value:t}=m;if(!t.length)return[];const o=!(R.value||B.value===1),r=x=>{if(o){const{value:b}=C;return{[b]:`${A.value[x][b]}px`}}};if(z.value)return t.map((x,b)=>r(b));const{effect:u,spaceBetween:d}=e,{value:i}=g;return t.reduce((x,b,N)=>{const ue=Object.assign(Object.assign({},r(N)),{[`margin-${i}`]:`${d}px`});return x.push(ue),H.value&&(u==="fade"||u==="card")&&Object.assign(ue,he.value),x},[])}),E=h(()=>{const{value:t}=j,{length:o}=m.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:r}=A,{length:u}=r;if(!u)return o;const{value:d}=M,{value:i}=C,x=P.value[i];let b=r[r.length-1][i],N=u;for(;N>1&&b<x;)N--,b+=d[N]-d[N-1];return de(N+1,1,u)}}),me=h(()=>vo(E.value,_.value)),gt=Pe(e.defaultIndex,_.value),ge=U(Je(gt,E.value,_.value)),T=Xt(Yt(e,"currentIndex"),ge),V=h(()=>Pe(T.value,_.value));function G(t){var o,r;t=de(t,0,E.value-1);const u=Je(t,E.value,_.value),{value:d}=T;u!==T.value&&(ge.value=u,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,u,d),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,u,d))}function te(t=V.value){return co(t,E.value,e.loop)}function ne(t=V.value){return fo(t,E.value,e.loop)}function bt(t){const o=W(t);return o!==null&&te()===o}function _t(t){const o=W(t);return o!==null&&ne()===o}function Ne(t){return V.value===W(t)}function wt(t){return T.value===t}function Ee(){return te()===null}function Te(){return ne()===null}function be(t){const o=de(Pe(t,_.value),0,E.value);(t!==T.value||o!==V.value)&&G(o)}function _e(){const t=te();t!==null&&G(t)}function oe(){const t=ne();t!==null&&G(t)}function yt(){(!$||!_.value)&&_e()}function St(){(!$||!_.value)&&oe()}let $=!1,Z=0;const we=U({});function ae(t,o=0){we.value=Object.assign({},he.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function J(t=0){p.value?ye(V.value,t):Z!==0&&(!$&&t>0&&($=!0),ae(Z=0,t))}function ye(t,o){const r=Ve(t);r!==Z&&o>0&&($=!0),Z=Ve(V.value),ae(r,o)}function Ve(t){let o;return t>=E.value-1?o=$e():o=M.value[t]||0,o}function $e(){if(j.value==="auto"){const{value:t}=C,{[t]:o}=P.value,{value:r}=M,u=r[r.length-1];let d;if(u===void 0)d=o;else{const{value:i}=A;d=u+i[i.length-1][t]}return d-o}else{const{value:t}=M;return t[E.value-1]||0}}const q={currentIndexRef:T,to:be,prev:yt,next:St,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:bt,isNext:_t,isActive:Ne,isPrevDisabled:Ee,isNextDisabled:Te,getSlideIndex:W,getSlideStyle:zt,addSlide:Ct,removeSlide:Rt,onCarouselItemClick:Pt};ho(q);function Ct(t){!t||m.value.push(t)}function Rt(t){if(!t)return;const o=W(t);o!==-1&&m.value.splice(o,1)}function W(t){return typeof t=="number"?t:t?m.value.indexOf(t):-1}function zt(t){const o=W(t);if(o!==-1){const r=[Ae.value[o]],u=q.isPrev(o),d=q.isNext(o);return u&&r.push(e.prevSlideStyle||""),d&&r.push(e.nextSlideStyle||""),tn(r)}}function Pt(t,o){let r=!$&&!le&&!ze;e.effect==="card"&&r&&!Ne(t)&&(be(t),r=!1),r||(o.preventDefault(),o.stopPropagation())}let se=null;function re(){se&&(clearInterval(se),se=null)}function F(){re(),!e.autoplay||me.value<2||(se=window.setInterval(oe,e.interval))}let Se=0,Ce=0,O=0,Re=0,le=!1,ze=!1;function Le(t){var o;if(Ie||!(!((o=c.value)===null||o===void 0)&&o.contains(t.target)))return;Ie=!0,le=!0,ze=!1,Re=Date.now(),re(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=qe(t)?t.touches[0]:t;S.value?Ce=r.clientY:Se=r.clientX,e.touchable&&(ee("touchmove",document,ie,{passive:!0}),ee("touchend",document,X),ee("touchcancel",document,X)),e.draggable&&(ee("mousemove",document,ie),ee("mouseup",document,X))}function ie(t){const{value:o}=S,{value:r}=C,u=qe(t)?t.touches[0]:t,d=o?u.clientY-Ce:u.clientX-Se,i=P.value[r];O=de(d,-i,i),t.cancelable&&t.preventDefault(),p.value&&ae(Z-O,0)}function X(){const{value:t}=V;let o=t;if(!$&&O!==0&&p.value){const r=Z-O,u=[...M.value.slice(0,E.value-1),$e()];let d=null;for(let i=0;i<u.length;i++){const x=Math.abs(u[i]-r);if(d!==null&&d<x)break;d=x,o=i}}if(o===t){const r=Date.now()-Re,{value:u}=C,d=P.value[u];O>d/2||O/r>.4?o=te(t):(O<-d/2||O/r<-.4)&&(o=ne(t))}o!==null&&o!==t?(ze=!0,G(o),Be(()=>{(!_.value||ge.value!==T.value)&&J(xe.value)})):J(xe.value),Me(),F()}function Me(){le&&(Ie=!1),le=!1,Se=0,Ce=0,O=0,Re=0,Q("touchmove",document,ie),Q("touchend",document,X),Q("touchcancel",document,X),Q("mousemove",document,ie),Q("mouseup",document,X)}function It(){if(p.value&&$){const{value:t}=V;ye(t,0)}else F();p.value&&(we.value.transitionDuration="0ms"),$=!1}function kt(t){if(t.preventDefault(),$)return;let{deltaX:o,deltaY:r}=t;t.shiftKey&&!o&&(o=r);const u=-1,d=1,i=(o||r)>0?d:u;let x=0,b=0;S.value?b=i:x=i;const N=10;(b*r>=N||x*o>=N)&&(i===d&&!Te()?oe():i===u&&!Ee()&&_e())}function Dt(){P.value=Qe(l.value,!0),F()}function At(){var t,o;R.value&&((o=(t=A.effect).scheduler)===null||o===void 0||o.call(t),A.effect.run())}function Nt(){e.autoplay&&re()}function Et(){e.autoplay&&F()}tt(()=>{Kt(F),requestAnimationFrame(()=>H.value=!0)}),nt(()=>{Me(),re()}),Ht(()=>{const{value:t}=m,{value:o}=D,r=new Map,u=i=>r.has(i)?r.get(i):-1;let d=!1;for(let i=0;i<t.length;i++){const x=o.findIndex(b=>b.el===t[i]);x!==i&&(d=!0),r.set(t[i],x)}d&&t.sort((i,x)=>u(i)-u(x))}),ce(V,(t,o)=>{if(t!==o)if(F(),p.value){if(_.value){const{value:r}=E;t===r-2&&o===1?t=0:t===1&&o===r-2&&(t=r-1)}ye(t,xe.value)}else J()},{immediate:!0}),ce([_,j],()=>void Be(()=>G(V.value))),ce(M,()=>p.value&&J(),{deep:!0}),ce(p,t=>{t?J():($=!1,ae(Z=0))});const Tt=h(()=>({onTouchstartPassive:e.touchable?Le:void 0,onMousedown:e.draggable?Le:void 0,onWheel:e.mousewheel?kt:void 0})),Vt=h(()=>Object.assign(Object.assign({},We(q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:me.value,currentIndex:T.value})),$t=h(()=>({total:me.value,currentIndex:T.value,to:q.to})),Lt={getCurrentIndex:()=>T.value,to:be,prev:_e,next:oe},Mt=ot("Carousel","-carousel",So,io,e,a),Oe=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:r,dotColorActive:u,dotColorFocus:d,dotLineWidth:i,dotLineWidthActive:x,arrowColor:b}}=Mt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":d,"--n-dot-color-active":u,"--n-dot-size":o,"--n-dot-line-width":i,"--n-dot-line-width-active":x,"--n-arrow-color":b}}),Y=s?Gt("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:a,selfElRef:l,slidesElRef:c,slideVNodes:D,duplicatedable:_,userWantsControl:z,autoSlideSize:R,displayIndex:T,realIndex:V,slideStyles:Ae,translateStyle:we,slidesControlListeners:Tt,handleTransitionEnd:It,handleResize:Dt,handleSlideResize:At,handleMouseenter:Nt,handleMouseleave:Et,isActive:wt,arrowSlotProps:Vt,dotSlotProps:$t},Lt),{cssVars:s?void 0:Oe,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:a,showArrow:s,userWantsControl:l,slideStyles:c,dotType:m,dotPlacement:D,slidesControlListeners:S,transitionProps:C={},arrowSlotProps:g,dotSlotProps:p,$slots:{default:_,dots:z,arrow:j}}=this,B=_&&Jt(_())||[];let R=Po(B);return R.length||(R=B.map(P=>w(yo,null,{default:()=>et(P)}))),this.duplicatedable&&(R=uo(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(P=>w(Ue,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${a}-carousel`,this.direction==="vertical"&&`${a}-carousel--vertical`,this.showArrow&&`${a}-carousel--show-arrow`,`${a}-carousel--${D}`,`${a}-carousel--${this.direction}`,`${a}-carousel--${this.effect}`,l&&`${a}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Ue,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${a}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?R.map((P,A)=>w("div",{style:c[A],key:A},qt(w(en,Object.assign({},C),{default:()=>P}),[[Qt,this.isActive(A)]]))):R)}),this.showDots&&p.total>1&&je(z,p,()=>[w(mo,{key:m+D,total:p.total,currentIndex:p.currentIndex,dotType:m,trigger:this.trigger,keyboard:this.keyboard})]),s&&je(j,g,()=>[w(_o,null)]))}});function Po(e){return e.reduce((a,s)=>(wo(s)&&a.push(s),a),[])}const Io=""+new URL("carousel_01.6548f682.jpg",import.meta.url).href,ko=""+new URL("carousel_02.be21ba88.jpg",import.meta.url).href,Do=""+new URL("carousel_03.f7742d23.jpg",import.meta.url).href,Ao=""+new URL("type_of_card_01.7cb2ba0d.png",import.meta.url).href,No=""+new URL("type_of_card_02.252ee971.png",import.meta.url).href,Eo=""+new URL("type_of_card_03.987cfe1c.png",import.meta.url).href,To=""+new URL("card_see_01.385b2cae.png",import.meta.url).href,Vo=""+new URL("card_see_02.61b71002.png",import.meta.url).href,$o=""+new URL("card_see_03.757052f6.png",import.meta.url).href;const Lo={},y=e=>(un("data-v-1f928aca"),e=e(),cn(),e),Mo={class:"container"},Oo=y(()=>n("div",{style:{width:"100%"}},[n("img",{class:"carousel-img",src:Io})],-1)),Uo=y(()=>n("div",{style:{width:"100%"}},[n("img",{class:"carousel-img",src:ko})],-1)),jo=y(()=>n("div",{style:{width:"100%"}},[n("img",{class:"carousel-img",src:Do})],-1)),Bo={class:"container"},Zo=rn('<div class="header" data-v-1f928aca><div class="headerText" data-v-1f928aca><h1 data-v-1f928aca>\u898F\u5247\u8AAA\u660E</h1><p data-v-1f928aca>\u904A\u6232\u738B\u516C\u5F0F\u5361\u7247\u904A\u6232\u662F\u5229\u7528\u4F60\u7684\u300A\u5361\u7D44\u300B\u4F86\u8DDF\u5C0D\u624B</p><p data-v-1f928aca>\u9032\u884C\u300A\u6C7A\u9B25\u300B\u7684\u5361\u724C\u904A\u6232\uFF01</p><p data-v-1f928aca>\u904A\u6232\u7684\u76EE\u7684\uFF0C\u662F\u5F9E\u300A\u624B\u724C\u300B\u4E2D\u300A\u53EC\u559A\u300B</p><p data-v-1f928aca>\u5404\u5F0F\u5404\u6A23\u7684\u602A\u7269\u3001\u9B54\u6CD5\u3001\u9677\u9631\u5361\u653B\u64CA\u5C0D\u624B\uFF0C</p><p data-v-1f928aca>\u7576\u5C0D\u624B\u7684\u751F\u547D\u9EDE\u6578\u300ALP\u300B\u8B8A\u70BA0\u6642\uFF0C</p><p data-v-1f928aca>\u4FBF\u53EF\u53D6\u5F97\u52DD\u5229\u3002</p></div></div><h1 class="title" data-v-1f928aca>\u5361\u724C\u7A2E\u985E</h1><p class="small-title" data-v-1f928aca>\u5361\u724C\u4E3B\u8981\u5206\u70BA\uFF13\u7A2E\uFF0C\u5206\u5225\u70BA\u300C\u602A\u7378\u5361\u300D\u3001\u300C\u9B54\u6CD5\u5361\u300D\u53CA\u300C\u9677\u9631\u5361\u300D\u3002</p>',3),Wo={id:"content"},Fo=y(()=>n("div",{class:"flex-content"},null,-1)),Xo=y(()=>n("div",{class:"content"},[n("h3",{class:"monster-card font-size-2rem"},"\u602A\u7378\u5361"),n("p",null,"\u602A\u7378\u5361\u662F\u6230\u5834\u7684\u4E3B\u89D2\uFF01"),n("p",null,"\u6C92\u6709\u6301\u6709\u4EFB\u4F55\u300A\u52B9\u679C\u300B\u7684\u300C\u901A\u5E38\u602A\u7378\u300D"),n("p",null,"\u64C1\u6709\u7279\u6B8A\u300A\u52B9\u679C\u300B\u7684\u300C\u6548\u679C\u602A\u7378\u300D"),n("p",null,"\u9664\u4E86\u9019\u4E9B\u5361\u724C\u5916\uFF0C\u9084\u6709\u300C\u5100\u5F0F\u602A\u7378\u300D\u3001\u300C\u878D\u5408\u602A\u7378\u300D\u3001\u300C\u540C\u6B65\u602A\u7378\u300D\u3001\u300C\u8D85\u91CF\u602A"),n("p",null,[Ze("\u7378\u300D\u3001\u300C\u9418\u64FA\u602A\u7378\u300D\u3001\u300C\u9023\u7D50\u602A\u7378\u300D\u300D\u7B49\u5F37\u529B\u7684\u602A\u7378\u5361\uFF01\u8A73\u60C5\u8ACB\u53C3\u95B1 "),n("a",{href:"https://www.yugioh-card.com/hk/howto/?lang=cn-t",target:"_blank"},"\u516C\u5F0F\u898F\u5247\u66F8"),Ze(" \u5427\uFF01")])],-1)),Yo=y(()=>n("div",{class:"content-img","data-aos":"fade-left","data-aos-duration":"500"},[n("img",{src:Ao})],-1)),Ko=y(()=>n("div",{class:"content-img","data-aos":"fade-right","data-aos-duration":"500"},[n("img",{src:No})],-1)),Ho=y(()=>n("div",{class:"content"},[n("h3",{class:"magic-card font-size-2rem"},"\u9B54\u6CD5\u5361"),n("p",null,"\u9B54\u6CD5\u5361\u300A\u767C\u52D5\u300B\u5F8C\u80FD\u5920\u767C\u63EE\u5404\u7A2E\u300A\u52B9\u679C\u300B\uFF01\u5728\u6C7A\u9B25\u4E2D\u4E0D\u53EF\u6216\u7F3A\uFF01")],-1)),Go=y(()=>n("div",{class:"content"},[n("h3",{class:"trap-card font-size-2rem"},"\u9677\u9631\u5361"),n("p",null,"\u96D6\u7136\u9677\u9631\u5361\u4F7F\u7528\u7684\u6642\u6A5F\u6709\u6240\u9650\u5236\uFF0C\u4F46\u82E5\u80FD\u52A0\u4EE5\u5584\u7528\u7684\u8A71\uFF0C\u4FBF\u6709\u6A5F\u6703\u626D\u8F49\u5C40\u52E2\uFF01"),n("p",null,"\u300A\u767C\u52D5\u300B\u9677\u9631\u667A\u53D6\u5C0D\u624B\uFF01")],-1)),Jo=y(()=>n("div",{class:"content-img","data-aos":"fade-left","data-aos-duration":"500"},[n("img",{src:Eo})],-1)),qo=y(()=>n("h1",{class:"title"},"\u5361\u724C\u770B\u6CD5",-1)),Qo={id:"content"},ea=y(()=>n("div",{class:"content-img margin-bottom","data-aos":"fade-right","data-aos-duration":"500"},[n("img",{src:To})],-1)),ta=y(()=>n("div",{class:"content monster-card"},[n("h3",{class:"font-size-2rem"},"\u602A\u7378\u5361"),n("li",null,[n("h4",null,"\u2460 \u5361\u540D"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E0A\u4E86\u5361\u724C\u540D\u7A31\u3002")]),n("li",null,[n("h4",null,"\u2461 \u5C6C\u6027"),n("p",null,"\u602A\u7378\u4E3B\u8981\u5206\u70BA6\u7A2E\u5C6C\u6027! \u5361\u724C\u7684\u6548\u679C\u4E2D\u4E5F\u6709\u53EA\u5F71\u97FF\u7279\u5B9A\u5C6C\u6027\u7684\u6548\u679C\u5B58\u5728\u3002")]),n("li",null,[n("h4",null,"\u2462 \u7B49\u7D1A"),n("p",null,"\u4EE5\u2605\u7684\u6578\u76EE\u4F86\u8868\u793A\u8A72\u602A\u7378\u7684\u7B49\u7D1A\u3002")]),n("li",null,[n("h4",null,"\u2463 \u602A\u7378\u60C5\u5831"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E86\u5361\u724C\u6548\u679C\u53CA\u4F7F\u7528\u65B9\u6CD5\u3002(\u901A\u5E38\u602A\u7378\u9664\u5916)")]),n("li",null,[n("h4",null,"\u2464 \u7A2E\u65CF"),n("p",null,"\u602A\u7378\u5340\u5206\u70BA\u8A31\u591A\u4E0D\u540C\u7A2E\u65CF\u3002\u6B64\u5916\uFF0C\u6301\u6709\u7279\u5B9A\u80FD\u529B\u7684\u602A\u7378\u5728\u6B64\u8655\u9084\u6703\u6709\u53E6\u5916\u7684\u6A19\u793A\u3002")]),n("li",null,[n("h4",null,"\u2465 \u653B\u64CA\u529B\u30FB\u5B88\u5099\u529B"),n("p",null,"ATK\u6307\u7684\u662F\u602A\u7378\u7684\u653B\u64CA\u529B\u3001DEF\u5247\u8868\u793A\u602A\u7378\u7684\u5B88\u5099\u529B\uFF0C\u6578\u503C\u8D8A\u9AD8\uFF0C\u5728\u6230\u9B25\u6642\u8D8A\u6709\u5229\u3002")])],-1)),na=y(()=>n("div",{class:"content magic-card"},[n("h3",{class:"font-size-2rem"},"\u9B54\u6CD5\u5361"),n("li",null,[n("h4",null,"\u2460 \u5361\u540D"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E0A\u4E86\u5361\u724C\u540D\u7A31\u3002")]),n("li",null,[n("h4",null,"\u2461 \u5361\u724C\u7A2E\u985E"),n("p",null,"\u770B\u898B\u300C\u9B54\u300D\u7684\u6A19\u8A8C\uFF0C\u5C31\u4EE3\u8868\u9019\u5F35\u5361\u662F\u9B54\u6CD5\u5361\u3002")]),n("li",null,[n("h4",null,"\u2462 \u6548\u679C\u6A19\u8A18"),n("p",null,"\u9B54\u6CD5\u5361\u57FA\u672C\u7684\u516D\u500B\u6548\u679C\u7A2E\u985E\u5206\u5225\u4EE5\u6A19\u8A18\u4F5C\u70BA\u8A18\u865F\u3002")]),n("li",null,[n("h4",null,"\u2463 \u6548\u679C\u8AAA\u660E"),n("p",null,"\u8A18\u8FF0\u8457\u9B54\u6CD5\u5361\u7684\u767C\u52D5\u689D\u4EF6\u53CA\u6548\u679C\u3002\u4ED4\u7D30\u95B1\u8B80\u5F8C\u4F7F\u7528\u5427\uFF01")])],-1)),oa=y(()=>n("div",{class:"content-img margin-top","data-aos":"fade-left","data-aos-duration":"500"},[n("img",{src:Vo})],-1)),aa=y(()=>n("div",{class:"content-img","data-aos":"fade-right","data-aos-duration":"500"},[n("img",{src:$o})],-1)),sa=y(()=>n("div",{class:"content trap-card"},[n("h3",{class:"font-size-2rem"},"\u9677\u9631\u5361"),n("li",null,[n("h4",null,"\u2460 \u5361\u540D"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E0A\u4E86\u5361\u724C\u540D\u7A31\u3002")]),n("li",null,[n("h4",null,"\u2461 \u5361\u724C\u7A2E\u985E"),n("p",null,"\u770B\u898B\u300C\u7F60\u300D\u7684\u6A19\u8A8C\uFF0C\u5C31\u4EE3\u8868\u9019\u5F35\u5361\u662F\u9677\u9631\u5361\u3002")]),n("li",null,[n("h4",null,"\u2462 \u6548\u679C\u6A19\u8A18"),n("p",null,"\u9677\u9631\u5361\u57FA\u672C\u7684\u4E09\u500B\u6548\u679C\u7A2E\u985E\u5206\u5225\u4EE5\u6A19\u8A18\u4F5C\u70BA\u8A18\u865F\u3002")]),n("li",null,[n("h4",null,"\u2463 \u6548\u679C\u8AAA\u660E"),n("p",null,"\u8A18\u8FF0\u8457\u9677\u9631\u5361\u7684\u767C\u52D5\u689D\u4EF6\u53CA\u6548\u679C\u3002\u4ED4\u7D30\u95B1\u8B80\u5F8C\u4F7F\u7528\u5427\uFF01")])],-1));function ra(e,a){const s=zo,l=dn,c=ln;return on(),an(sn,null,[n("div",Mo,[I(s,{"show-dots":!1,autoplay:"",interval:"3000"},{default:k(()=>[Oo,Uo,jo]),_:1})]),n("div",Bo,[Zo,n("div",Wo,[I(c,{cols:"1 s:2",responsive:"screen"},{default:k(()=>[Fo,I(l,{class:"order1"},{default:k(()=>[Xo]),_:1}),I(l,{class:"order2"},{default:k(()=>[Yo]),_:1}),I(l,{class:"order3"},{default:k(()=>[Ko]),_:1}),I(l,{class:"order4"},{default:k(()=>[Ho]),_:1}),I(l,{class:"order5"},{default:k(()=>[Go]),_:1}),I(l,{class:"order6"},{default:k(()=>[Jo]),_:1})]),_:1})]),qo,n("div",Qo,[I(c,{cols:"1 s:2",responsive:"screen"},{default:k(()=>[I(l,{class:"order7"},{default:k(()=>[ea]),_:1}),I(l,{class:"order8"},{default:k(()=>[ta]),_:1}),I(l,{class:"order9"},{default:k(()=>[na]),_:1}),I(l,{class:"order10"},{default:k(()=>[oa]),_:1}),I(l,{class:"order11"},{default:k(()=>[aa]),_:1}),I(l,{class:"order12"},{default:k(()=>[sa]),_:1})]),_:1})])])],64)}const fa=nn(Lo,[["render",ra],["__scopeId","data-v-1f928aca"]]);export{fa as default};
