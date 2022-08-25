import{c as Ot,a as et,p as Ut,i as jt,t as Bt,b as Zt,d as ve,u as pe,r as U,o as Wt,h as w,e as h,f as tt,g as nt,j as Ft,k as f,l as L,m as v,n as Xt,q as Yt,w as Kt,s as Ht,v as ce,x as ot,y as Gt,z as Jt,V as Ue,A as je,B as qt,C as Qt,T as en,D as tn,E as Be,_ as nn,F as on,G as sn,H as n,I,J as k,K as rn,L as an,M as ln,N as un,O as Ze,P as cn}from"./index.4d80bd92.js";import{i as dn,o as Q,a as ee}from"./delegate.d660cb22.js";import{t as ke}from"./toString.bbe186bc.js";import{u as fn}from"./upperFirst.dc61c9b9.js";import{k as We}from"./keep.76d496a2.js";function vn(e){return fn(ke(e).toLowerCase())}function pn(e,s,r,l){var c=-1,m=e==null?0:e.length;for(l&&m&&(r=e[++c]);++c<m;)r=s(r,e[c],c,e);return r}function hn(e){return function(s){return e==null?void 0:e[s]}}var xn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},mn=hn(xn);const gn=mn;var bn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_n="\\u0300-\\u036f",wn="\\ufe20-\\ufe2f",yn="\\u20d0-\\u20ff",Sn=_n+wn+yn,Cn="["+Sn+"]",Rn=RegExp(Cn,"g");function zn(e){return e=ke(e),e&&e.replace(bn,gn).replace(Rn,"")}var Pn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function In(e){return e.match(Pn)||[]}var kn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Dn(e){return kn.test(e)}var st="\\ud800-\\udfff",An="\\u0300-\\u036f",En="\\ufe20-\\ufe2f",Nn="\\u20d0-\\u20ff",Tn=An+En+Nn,rt="\\u2700-\\u27bf",at="a-z\\xdf-\\xf6\\xf8-\\xff",Vn="\\xac\\xb1\\xd7\\xf7",$n="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ln="\\u2000-\\u206f",Mn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",lt="A-Z\\xc0-\\xd6\\xd8-\\xde",On="\\ufe0e\\ufe0f",it=Vn+$n+Ln+Mn,ut="['\u2019]",Fe="["+it+"]",Un="["+Tn+"]",ct="\\d+",jn="["+rt+"]",dt="["+at+"]",ft="[^"+st+it+ct+rt+at+lt+"]",Bn="\\ud83c[\\udffb-\\udfff]",Zn="(?:"+Un+"|"+Bn+")",Wn="[^"+st+"]",vt="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",K="["+lt+"]",Fn="\\u200d",Xe="(?:"+dt+"|"+ft+")",Xn="(?:"+K+"|"+ft+")",Ye="(?:"+ut+"(?:d|ll|m|re|s|t|ve))?",Ke="(?:"+ut+"(?:D|LL|M|RE|S|T|VE))?",ht=Zn+"?",xt="["+On+"]?",Yn="(?:"+Fn+"(?:"+[Wn,vt,pt].join("|")+")"+xt+ht+")*",Kn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Hn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Gn=xt+ht+Yn,Jn="(?:"+[jn,vt,pt].join("|")+")"+Gn,qn=RegExp([K+"?"+dt+"+"+Ye+"(?="+[Fe,K,"$"].join("|")+")",Xn+"+"+Ke+"(?="+[Fe,K+Xe,"$"].join("|")+")",K+"?"+Xe+"+"+Ye,K+"+"+Ke,Hn,Kn,ct,Jn].join("|"),"g");function Qn(e){return e.match(qn)||[]}function eo(e,s,r){return e=ke(e),s=r?void 0:s,s===void 0?Dn(e)?Qn(e):In(e):e.match(s)||[]}var to="['\u2019]",no=RegExp(to,"g");function oo(e){return function(s){return pn(eo(zn(s).replace(no,"")),e,"")}}var so=oo(function(e,s,r){return s=s.toLowerCase(),e+(r?vn(s):s)});const He=so,ro=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),ao={name:"Carousel",common:Ot,self:ro},lo=ao;function io(e){const{length:s}=e;return s>1&&(e.push(Ge(e[0],0,"append")),e.unshift(Ge(e[s-1],s-1,"prepend"))),e}function Ge(e,s,r){return et(e,{key:`carousel-item-duplicate-${s}-${r}`})}function Je(e,s,r){return r?e===0?s-3:e===s-1?0:e-1:e}function Pe(e,s){return s?e+1:e}function uo(e,s,r){return e<0?null:e===0?r?s-1:null:e-1}function co(e,s,r){return e>s-1?null:e===s-1?r?0:null:e+1}function fo(e,s){return s&&e>3?e-2:e}function qe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Qe(e,s){let{width:r,height:l}=e.getBoundingClientRect();if(s){const c=getComputedStyle(e);r=r-parseFloat(c.getPropertyValue("padding-left"))-parseFloat(c.getPropertyValue("padding-right")),l=l-parseFloat(c.getPropertyValue("padding-top"))-parseFloat(c.getPropertyValue("padding-bottom"))}return{width:r,height:l}}function de(e,s,r){return e<s?s:e>r?r:e}function vo(e){if(e===void 0)return 0;if(typeof e=="number")return e;const s=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(s);if(r){const[,l,,c="ms"]=r;return Number(l)*(c==="ms"?1:1e3)}return 0}const mt=Zt("n-carousel-methods"),po=e=>Ut(mt,e),De=(e="unknown",s="component")=>{const r=jt(mt);return r||Bt(e,`\`${s}\` must be placed inside \`n-carousel\`.`),r},ho={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},xo=ve({name:"CarouselDots",props:ho,setup(e){const{mergedClsPrefixRef:s}=pe(e),r=U([]),l=De();function c(g,p){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(p);return}e.keyboard&&S(g)}function m(g){e.trigger==="hover"&&l.to(g)}function D(g){e.trigger==="click"&&l.to(g)}function S(g){var p;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const _=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();if(_==="input"||_==="textarea")return;const{code:z}=g,j=z==="PageUp"||z==="ArrowUp",B=z==="PageDown"||z==="ArrowDown",R=z==="PageUp"||z==="ArrowRight",P=z==="PageDown"||z==="ArrowLeft",A=l.isVertical(),M=A?j:R,H=A?B:P;!M&&!H||(g.preventDefault(),M&&!l.isNextDisabled()?(l.next(),C(l.currentIndexRef.value)):H&&!l.isPrevDisabled()&&(l.prev(),C(l.currentIndexRef.value)))}function C(g){var p;(p=r.value[g])===null||p===void 0||p.focus()}return Wt(()=>r.value.length=0),{mergedClsPrefix:s,dotEls:r,handleKeydown:c,handleMouseenter:m,handleClick:D}},render(){const{mergedClsPrefix:e,dotEls:s}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},dn(this.total,r=>{const l=r===this.currentIndex;return w("div",{"aria-selected":l,ref:c=>s.push(c),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:r,onClick:()=>this.handleClick(r),onMouseenter:()=>this.handleMouseenter(r),onKeydown:c=>this.handleKeydown(c,r)})}))}}),mo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),go=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),bo=ve({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:s}=pe(e),{isVertical:r,isPrevDisabled:l,isNextDisabled:c,prev:m,next:D}=De();return{mergedClsPrefix:s,isVertical:r,isPrevDisabled:l,isNextDisabled:c,prev:m,next:D}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},mo),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},go))}}),fe="CarouselItem",_o=e=>{var s;return((s=e.type)===null||s===void 0?void 0:s.name)===fe},wo=ve({name:fe,setup(e){const{mergedClsPrefixRef:s}=pe(e),r=De(He(fe),`n-${He(fe)}`),l=U(),c=h(()=>{const{value:p}=l;return p?r.getSlideIndex(p):-1}),m=h(()=>r.isPrev(c.value)),D=h(()=>r.isNext(c.value)),S=h(()=>r.isActive(c.value)),C=h(()=>r.getSlideStyle(c.value));tt(()=>r.addSlide(l.value)),nt(()=>{r.removeSlide(l.value)});function g(p){const{value:_}=c;_!==void 0&&(r==null||r.onCarouselItemClick(_,p))}return{mergedClsPrefix:s,selfElRef:l,isPrev:m,isNext:D,isActive:S,index:c,style:C,handleClick:g}},render(){var e;const{$slots:s,mergedClsPrefix:r,isPrev:l,isNext:c,isActive:m,index:D,style:S}=this,C=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:m,[`${r}-carousel__slide--prev`]:l,[`${r}-carousel__slide--next`]:c}];return w("div",{ref:"selfElRef",class:C,role:"option",tabindex:"-1","data-index":D,"aria-hidden":!m,style:S,onClickCapture:this.handleClick},(e=s.default)===null||e===void 0?void 0:e.call(s,{isPrev:l,isNext:c,isActive:m,index:D}))}}),yo=Ft("carousel",`
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
 `)])])]),So=["transitionDuration","transitionTimingFunction"],Co=Object.assign(Object.assign({},ot.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const Ro=ve({name:"Carousel",props:Co,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:r}=pe(e),l=U(null),c=U(null),m=U([]),D={value:[]},S=h(()=>e.direction==="vertical"),C=h(()=>S.value?"height":"width"),g=h(()=>S.value?"bottom":"right"),p=h(()=>e.effect==="slide"),_=h(()=>e.loop&&e.slidesPerView===1&&p.value),z=h(()=>e.effect==="custom"),j=h(()=>!p.value||e.centeredSlides?1:e.slidesPerView),B=h(()=>z.value?1:e.slidesPerView),R=h(()=>j.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=U({width:0,height:0}),A=h(()=>{const{value:t}=m;if(!t.length)return[];const{value:o}=R;if(o)return t.map(b=>Qe(b));const{value:a}=B,{value:u}=P,{value:d}=C;let i=u[d];if(a!=="auto"){const{spaceBetween:b}=e,E=i-(a-1)*b,ue=1/Math.max(1,a);i=E*ue}const x=Object.assign(Object.assign({},u),{[d]:i});return t.map(()=>x)}),M=h(()=>{const{value:t}=A;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:u}=C,{[u]:d}=P.value;let i=0;return t.map(({[u]:x})=>{let b=i;return o&&(b+=(x-d)/2),i+=x+a,b})}),H=U(!1),he=h(()=>{const{transitionStyle:t}=e;return t?We(t,So):{}}),xe=h(()=>z.value?0:vo(he.value.transitionDuration)),Ae=h(()=>{const{value:t}=m;if(!t.length)return[];const o=!(R.value||B.value===1),a=x=>{if(o){const{value:b}=C;return{[b]:`${A.value[x][b]}px`}}};if(z.value)return t.map((x,b)=>a(b));const{effect:u,spaceBetween:d}=e,{value:i}=g;return t.reduce((x,b,E)=>{const ue=Object.assign(Object.assign({},a(E)),{[`margin-${i}`]:`${d}px`});return x.push(ue),H.value&&(u==="fade"||u==="card")&&Object.assign(ue,he.value),x},[])}),N=h(()=>{const{value:t}=j,{length:o}=m.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=A,{length:u}=a;if(!u)return o;const{value:d}=M,{value:i}=C,x=P.value[i];let b=a[a.length-1][i],E=u;for(;E>1&&b<x;)E--,b+=d[E]-d[E-1];return de(E+1,1,u)}}),me=h(()=>fo(N.value,_.value)),gt=Pe(e.defaultIndex,_.value),ge=U(Je(gt,N.value,_.value)),T=Xt(Yt(e,"currentIndex"),ge),V=h(()=>Pe(T.value,_.value));function G(t){var o,a;t=de(t,0,N.value-1);const u=Je(t,N.value,_.value),{value:d}=T;u!==T.value&&(ge.value=u,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,u,d),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,u,d))}function te(t=V.value){return uo(t,N.value,e.loop)}function ne(t=V.value){return co(t,N.value,e.loop)}function bt(t){const o=W(t);return o!==null&&te()===o}function _t(t){const o=W(t);return o!==null&&ne()===o}function Ee(t){return V.value===W(t)}function wt(t){return T.value===t}function Ne(){return te()===null}function Te(){return ne()===null}function be(t){const o=de(Pe(t,_.value),0,N.value);(t!==T.value||o!==V.value)&&G(o)}function _e(){const t=te();t!==null&&G(t)}function oe(){const t=ne();t!==null&&G(t)}function yt(){(!$||!_.value)&&_e()}function St(){(!$||!_.value)&&oe()}let $=!1,Z=0;const we=U({});function se(t,o=0){we.value=Object.assign({},he.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function J(t=0){p.value?ye(V.value,t):Z!==0&&(!$&&t>0&&($=!0),se(Z=0,t))}function ye(t,o){const a=Ve(t);a!==Z&&o>0&&($=!0),Z=Ve(V.value),se(a,o)}function Ve(t){let o;return t>=N.value-1?o=$e():o=M.value[t]||0,o}function $e(){if(j.value==="auto"){const{value:t}=C,{[t]:o}=P.value,{value:a}=M,u=a[a.length-1];let d;if(u===void 0)d=o;else{const{value:i}=A;d=u+i[i.length-1][t]}return d-o}else{const{value:t}=M;return t[N.value-1]||0}}const q={currentIndexRef:T,to:be,prev:yt,next:St,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:bt,isNext:_t,isActive:Ee,isPrevDisabled:Ne,isNextDisabled:Te,getSlideIndex:W,getSlideStyle:zt,addSlide:Ct,removeSlide:Rt,onCarouselItemClick:Pt};po(q);function Ct(t){!t||m.value.push(t)}function Rt(t){if(!t)return;const o=W(t);o!==-1&&m.value.splice(o,1)}function W(t){return typeof t=="number"?t:t?m.value.indexOf(t):-1}function zt(t){const o=W(t);if(o!==-1){const a=[Ae.value[o]],u=q.isPrev(o),d=q.isNext(o);return u&&a.push(e.prevSlideStyle||""),d&&a.push(e.nextSlideStyle||""),tn(a)}}function Pt(t,o){let a=!$&&!le&&!ze;e.effect==="card"&&a&&!Ee(t)&&(be(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let re=null;function ae(){re&&(clearInterval(re),re=null)}function F(){ae(),!e.autoplay||me.value<2||(re=window.setInterval(oe,e.interval))}let Se=0,Ce=0,O=0,Re=0,le=!1,ze=!1;function Le(t){var o;if(Ie||!(!((o=c.value)===null||o===void 0)&&o.contains(t.target)))return;Ie=!0,le=!0,ze=!1,Re=Date.now(),ae(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=qe(t)?t.touches[0]:t;S.value?Ce=a.clientY:Se=a.clientX,e.touchable&&(ee("touchmove",document,ie,{passive:!0}),ee("touchend",document,X),ee("touchcancel",document,X)),e.draggable&&(ee("mousemove",document,ie),ee("mouseup",document,X))}function ie(t){const{value:o}=S,{value:a}=C,u=qe(t)?t.touches[0]:t,d=o?u.clientY-Ce:u.clientX-Se,i=P.value[a];O=de(d,-i,i),t.cancelable&&t.preventDefault(),p.value&&se(Z-O,0)}function X(){const{value:t}=V;let o=t;if(!$&&O!==0&&p.value){const a=Z-O,u=[...M.value.slice(0,N.value-1),$e()];let d=null;for(let i=0;i<u.length;i++){const x=Math.abs(u[i]-a);if(d!==null&&d<x)break;d=x,o=i}}if(o===t){const a=Date.now()-Re,{value:u}=C,d=P.value[u];O>d/2||O/a>.4?o=te(t):(O<-d/2||O/a<-.4)&&(o=ne(t))}o!==null&&o!==t?(ze=!0,G(o),Be(()=>{(!_.value||ge.value!==T.value)&&J(xe.value)})):J(xe.value),Me(),F()}function Me(){le&&(Ie=!1),le=!1,Se=0,Ce=0,O=0,Re=0,Q("touchmove",document,ie),Q("touchend",document,X),Q("touchcancel",document,X),Q("mousemove",document,ie),Q("mouseup",document,X)}function It(){if(p.value&&$){const{value:t}=V;ye(t,0)}else F();p.value&&(we.value.transitionDuration="0ms"),$=!1}function kt(t){if(t.preventDefault(),$)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const u=-1,d=1,i=(o||a)>0?d:u;let x=0,b=0;S.value?b=i:x=i;const E=10;(b*a>=E||x*o>=E)&&(i===d&&!Te()?oe():i===u&&!Ne()&&_e())}function Dt(){P.value=Qe(l.value,!0),F()}function At(){var t,o;R.value&&((o=(t=A.effect).scheduler)===null||o===void 0||o.call(t),A.effect.run())}function Et(){e.autoplay&&ae()}function Nt(){e.autoplay&&F()}tt(()=>{Kt(F),requestAnimationFrame(()=>H.value=!0)}),nt(()=>{Me(),ae()}),Ht(()=>{const{value:t}=m,{value:o}=D,a=new Map,u=i=>a.has(i)?a.get(i):-1;let d=!1;for(let i=0;i<t.length;i++){const x=o.findIndex(b=>b.el===t[i]);x!==i&&(d=!0),a.set(t[i],x)}d&&t.sort((i,x)=>u(i)-u(x))}),ce(V,(t,o)=>{if(t!==o)if(F(),p.value){if(_.value){const{value:a}=N;t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}ye(t,xe.value)}else J()},{immediate:!0}),ce([_,j],()=>void Be(()=>G(V.value))),ce(M,()=>p.value&&J(),{deep:!0}),ce(p,t=>{t?J():($=!1,se(Z=0))});const Tt=h(()=>({onTouchstartPassive:e.touchable?Le:void 0,onMousedown:e.draggable?Le:void 0,onWheel:e.mousewheel?kt:void 0})),Vt=h(()=>Object.assign(Object.assign({},We(q,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:me.value,currentIndex:T.value})),$t=h(()=>({total:me.value,currentIndex:T.value,to:q.to})),Lt={getCurrentIndex:()=>T.value,to:be,prev:_e,next:oe},Mt=ot("Carousel","-carousel",yo,lo,e,s),Oe=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:u,dotColorFocus:d,dotLineWidth:i,dotLineWidthActive:x,arrowColor:b}}=Mt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":d,"--n-dot-color-active":u,"--n-dot-size":o,"--n-dot-line-width":i,"--n-dot-line-width-active":x,"--n-arrow-color":b}}),Y=r?Gt("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:s,selfElRef:l,slidesElRef:c,slideVNodes:D,duplicatedable:_,userWantsControl:z,autoSlideSize:R,displayIndex:T,realIndex:V,slideStyles:Ae,translateStyle:we,slidesControlListeners:Tt,handleTransitionEnd:It,handleResize:Dt,handleSlideResize:At,handleMouseenter:Et,handleMouseleave:Nt,isActive:wt,arrowSlotProps:Vt,dotSlotProps:$t},Lt),{cssVars:r?void 0:Oe,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:s,showArrow:r,userWantsControl:l,slideStyles:c,dotType:m,dotPlacement:D,slidesControlListeners:S,transitionProps:C={},arrowSlotProps:g,dotSlotProps:p,$slots:{default:_,dots:z,arrow:j}}=this,B=_&&Jt(_())||[];let R=zo(B);return R.length||(R=B.map(P=>w(wo,null,{default:()=>et(P)}))),this.duplicatedable&&(R=io(R)),this.slideVNodes.value=R,this.autoSlideSize&&(R=R.map(P=>w(Ue,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${s}-carousel`,this.direction==="vertical"&&`${s}-carousel--vertical`,this.showArrow&&`${s}-carousel--show-arrow`,`${s}-carousel--${D}`,`${s}-carousel--${this.direction}`,`${s}-carousel--${this.effect}`,l&&`${s}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Ue,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${s}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?R.map((P,A)=>w("div",{style:c[A],key:A},qt(w(en,Object.assign({},C),{default:()=>P}),[[Qt,this.isActive(A)]]))):R)}),this.showDots&&p.total>1&&je(z,p,()=>[w(xo,{key:m+D,total:p.total,currentIndex:p.currentIndex,dotType:m,trigger:this.trigger,keyboard:this.keyboard})]),r&&je(j,g,()=>[w(bo,null)]))}});function zo(e){return e.reduce((s,r)=>(_o(r)&&s.push(r),s),[])}const Po=""+new URL("carousel_07.c7868ba3.jpg",import.meta.url).href,Io=""+new URL("carousel_08.691cd7be.jpg",import.meta.url).href,ko=""+new URL("carousel_09.c0baad10.jpg",import.meta.url).href,Do=""+new URL("type_of_card_01.7cb2ba0d.png",import.meta.url).href,Ao=""+new URL("type_of_card_02.252ee971.png",import.meta.url).href,Eo=""+new URL("type_of_card_03.987cfe1c.png",import.meta.url).href,No=""+new URL("card_see_01.385b2cae.png",import.meta.url).href,To=""+new URL("card_see_02.61b71002.png",import.meta.url).href,Vo=""+new URL("card_see_03.757052f6.png",import.meta.url).href;const $o={},y=e=>(ln("data-v-6124f250"),e=e(),un(),e),Lo={class:"container"},Mo=y(()=>n("div",{style:{width:"100%"}},[n("img",{class:"carousel-img",src:Po})],-1)),Oo=y(()=>n("div",{style:{width:"100%"}},[n("img",{class:"carousel-img",src:Io})],-1)),Uo=y(()=>n("div",{style:{width:"100%"}},[n("img",{class:"carousel-img",src:ko})],-1)),jo={class:"container"},Bo=y(()=>n("div",{class:"header"},[n("div",{class:"headerText"},[n("h1",null,"\u898F\u5247\u8AAA\u660E"),n("p",null,"\u904A\u6232\u738B\u516C\u5F0F\u5361\u7247\u904A\u6232\u662F\u5229\u7528\u4F60\u7684\u300A\u5361\u7D44\u300B\u4F86\u8DDF\u5C0D\u624B\u9032\u884C\u300A\u6C7A\u9B25\u300B\u7684\u5361\u724C\u904A\u6232!"),n("p",null,"\u904A\u6232\u7684\u76EE\u7684\uFF0C \u662F\u5F9E\u300A\u624B\u724C\u300B\u4E2D\u300A\u53EC\u559A\u300B\u51FA\u5404\u5F0F\u5404\u6A23\u7684\u602A\u7269\uFF0C \u9B54\u6CD5\uFF0C \u9677\u9631\u5361\u653B\u64CA\u5C0D\u624B\uFF0C "),n("p",null,"\u7576\u5C0D\u624B\u7684\u751F\u547D\u9EDE\u6578\u300ALP\u300B\u8B8A\u70BA0\u6642\uFF0C \u4FBF\u53EF\u53D6\u5F97\u52DD\u5229\u3002")])],-1)),Zo=y(()=>n("h1",{class:"title"},"\u5361\u724C\u7A2E\u985E",-1)),Wo=y(()=>n("p",{class:"small-title"},"\u5361\u724C\u4E3B\u8981\u5206\u70BA\uFF13\u7A2E\uFF0C\u5206\u5225\u70BA\u300C\u602A\u7378\u5361\u300D\u3001\u300C\u9B54\u6CD5\u5361\u300D\u53CA\u300C\u9677\u9631\u5361\u300D\u3002",-1)),Fo={id:"content"},Xo=y(()=>n("div",{class:"flex-content"},null,-1)),Yo=y(()=>n("div",{class:"content"},[n("h3",{class:"monster-card font-size-2rem"},"\u602A\u7378\u5361"),n("p",null,"\u602A\u7378\u5361\u662F\u6230\u5834\u7684\u4E3B\u89D2\uFF01"),n("p",null,"\u6C92\u6709\u6301\u6709\u4EFB\u4F55\u300A\u52B9\u679C\u300B\u7684\u300C\u901A\u5E38\u602A\u7378\u300D"),n("p",null,"\u64C1\u6709\u7279\u6B8A\u300A\u52B9\u679C\u300B\u7684\u300C\u6548\u679C\u602A\u7378\u300D"),n("p",null,"\u9664\u4E86\u9019\u4E9B\u5361\u724C\u5916\uFF0C\u9084\u6709\u300C\u5100\u5F0F\u602A\u7378\u300D\u3001\u300C\u878D\u5408\u602A\u7378\u300D\u3001\u300C\u540C\u6B65\u602A\u7378\u300D\u3001\u300C\u8D85\u91CF\u602A"),n("p",null,[Ze("\u7378\u300D\u3001\u300C\u9418\u64FA\u602A\u7378\u300D\u3001\u300C\u9023\u7D50\u602A\u7378\u300D\u300D\u7B49\u5F37\u529B\u7684\u602A\u7378\u5361\uFF01\u8A73\u60C5\u8ACB\u53C3\u95B1 "),n("a",{href:"https://www.yugioh-card.com/hk/howto/?lang=cn-t",target:"_blank"},"\u516C\u5F0F\u898F\u5247\u66F8"),Ze(" \u5427\uFF01")])],-1)),Ko=y(()=>n("div",{class:"content-img"},[n("img",{src:Do})],-1)),Ho=y(()=>n("div",{class:"content-img"},[n("img",{src:Ao})],-1)),Go=y(()=>n("div",{class:"content"},[n("h3",{class:"magic-card font-size-2rem"},"\u9B54\u6CD5\u5361"),n("p",null,"\u9B54\u6CD5\u5361\u300A\u767C\u52D5\u300B\u5F8C\u80FD\u5920\u767C\u63EE\u5404\u7A2E\u300A\u52B9\u679C\u300B\uFF01\u5728\u6C7A\u9B25\u4E2D\u4E0D\u53EF\u6216\u7F3A\uFF01")],-1)),Jo=y(()=>n("div",{class:"content"},[n("h3",{class:"trap-card font-size-2rem"},"\u9677\u9631\u5361"),n("p",null,"\u96D6\u7136\u9677\u9631\u5361\u4F7F\u7528\u7684\u6642\u6A5F\u6709\u6240\u9650\u5236\uFF0C\u4F46\u82E5\u80FD\u52A0\u4EE5\u5584\u7528\u7684\u8A71\uFF0C\u4FBF\u6709\u6A5F\u6703\u626D\u8F49\u5C40\u52E2\uFF01"),n("p",null,"\u300A\u767C\u52D5\u300B\u9677\u9631\u667A\u53D6\u5C0D\u624B\uFF01")],-1)),qo=y(()=>n("div",{class:"content-img"},[n("img",{src:Eo})],-1)),Qo=y(()=>n("h1",{class:"title"},"\u5361\u724C\u770B\u6CD5",-1)),es={id:"content"},ts=y(()=>n("div",{class:"content-img margin-bottom"},[n("img",{src:No})],-1)),ns=y(()=>n("div",{class:"content monster-card"},[n("h3",{class:"font-size-2rem"},"\u602A\u7378\u5361"),n("li",null,[n("h4",null,"\u2460 \u5361\u540D"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E0A\u4E86\u5361\u724C\u540D\u7A31\u3002")]),n("li",null,[n("h4",null,"\u2461 \u5C6C\u6027"),n("p",null,"\u602A\u7378\u4E3B\u8981\u5206\u70BA6\u7A2E\u5C6C\u6027! \u5361\u724C\u7684\u6548\u679C\u4E2D\u4E5F\u6709\u53EA\u5F71\u97FF\u7279\u5B9A\u5C6C\u6027\u7684\u6548\u679C\u5B58\u5728\u3002")]),n("li",null,[n("h4",null,"\u2462 \u7B49\u7D1A"),n("p",null,"\u4EE5\u2605\u7684\u6578\u76EE\u4F86\u8868\u793A\u8A72\u602A\u7378\u7684\u7B49\u7D1A\u3002")]),n("li",null,[n("h4",null,"\u2463 \u602A\u7378\u60C5\u5831"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E86\u5361\u724C\u6548\u679C\u53CA\u4F7F\u7528\u65B9\u6CD5\u3002(\u901A\u5E38\u602A\u7378\u9664\u5916)")]),n("li",null,[n("h4",null,"\u2464 \u7A2E\u65CF"),n("p",null,"\u602A\u7378\u5340\u5206\u70BA\u8A31\u591A\u4E0D\u540C\u7A2E\u65CF\u3002\u6B64\u5916\uFF0C\u6301\u6709\u7279\u5B9A\u80FD\u529B\u7684\u602A\u7378\u5728\u6B64\u8655\u9084\u6703\u6709\u53E6\u5916\u7684\u6A19\u793A\u3002")]),n("li",null,[n("h4",null,"\u2465 \u653B\u64CA\u529B\u30FB\u5B88\u5099\u529B"),n("p",null,"ATK\u6307\u7684\u662F\u602A\u7378\u7684\u653B\u64CA\u529B\u3001DEF\u5247\u8868\u793A\u602A\u7378\u7684\u5B88\u5099\u529B\uFF0C\u6578\u503C\u8D8A\u9AD8\uFF0C\u5728\u6230\u9B25\u6642\u8D8A\u6709\u5229\u3002")])],-1)),os=y(()=>n("div",{class:"content magic-card"},[n("h3",{class:"font-size-2rem"},"\u9B54\u6CD5\u5361"),n("li",null,[n("h4",null,"\u2460 \u5361\u540D"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E0A\u4E86\u5361\u724C\u540D\u7A31\u3002")]),n("li",null,[n("h4",null,"\u2461 \u5361\u724C\u7A2E\u985E"),n("p",null,"\u770B\u898B\u300C\u9B54\u300D\u7684\u6A19\u8A8C\uFF0C\u5C31\u4EE3\u8868\u9019\u5F35\u5361\u662F\u9B54\u6CD5\u5361\u3002")]),n("li",null,[n("h4",null,"\u2462 \u6548\u679C\u6A19\u8A18"),n("p",null,"\u9B54\u6CD5\u5361\u57FA\u672C\u7684\u516D\u500B\u6548\u679C\u7A2E\u985E\u5206\u5225\u4EE5\u6A19\u8A18\u4F5C\u70BA\u8A18\u865F\u3002")]),n("li",null,[n("h4",null,"\u2463 \u6548\u679C\u8AAA\u660E"),n("p",null,"\u8A18\u8FF0\u8457\u9B54\u6CD5\u5361\u7684\u767C\u52D5\u689D\u4EF6\u53CA\u6548\u679C\u3002\u4ED4\u7D30\u95B1\u8B80\u5F8C\u4F7F\u7528\u5427\uFF01")])],-1)),ss=y(()=>n("div",{class:"content-img margin-top"},[n("img",{src:To})],-1)),rs=y(()=>n("div",{class:"content-img"},[n("img",{src:Vo})],-1)),as=y(()=>n("div",{class:"content trap-card"},[n("h3",{class:"font-size-2rem"},"\u9677\u9631\u5361"),n("li",null,[n("h4",null,"\u2460 \u5361\u540D"),n("p",null,"\u5728\u9019\u4F4D\u7F6E\u4E0A\u5BEB\u4E0A\u4E86\u5361\u724C\u540D\u7A31\u3002")]),n("li",null,[n("h4",null,"\u2461 \u5361\u724C\u7A2E\u985E"),n("p",null,"\u770B\u898B\u300C\u7F60\u300D\u7684\u6A19\u8A8C\uFF0C\u5C31\u4EE3\u8868\u9019\u5F35\u5361\u662F\u9677\u9631\u5361\u3002")]),n("li",null,[n("h4",null,"\u2462 \u6548\u679C\u6A19\u8A18"),n("p",null,"\u9677\u9631\u5361\u57FA\u672C\u7684\u4E09\u500B\u6548\u679C\u7A2E\u985E\u5206\u5225\u4EE5\u6A19\u8A18\u4F5C\u70BA\u8A18\u865F\u3002")]),n("li",null,[n("h4",null,"\u2463 \u6548\u679C\u8AAA\u660E"),n("p",null,"\u8A18\u8FF0\u8457\u9677\u9631\u5361\u7684\u767C\u52D5\u689D\u4EF6\u53CA\u6548\u679C\u3002\u4ED4\u7D30\u95B1\u8B80\u5F8C\u4F7F\u7528\u5427\uFF01")])],-1));function ls(e,s){const r=Ro,l=cn,c=an;return on(),sn(rn,null,[n("div",Lo,[I(r,{"show-dots":!1,autoplay:"",interval:"3000"},{default:k(()=>[Mo,Oo,Uo]),_:1})]),n("div",jo,[Bo,Zo,Wo,n("div",Fo,[I(c,{cols:"1 s:2",responsive:"screen"},{default:k(()=>[Xo,I(l,{class:"order1"},{default:k(()=>[Yo]),_:1}),I(l,{class:"order2"},{default:k(()=>[Ko]),_:1}),I(l,{class:"order3"},{default:k(()=>[Ho]),_:1}),I(l,{class:"order4"},{default:k(()=>[Go]),_:1}),I(l,{class:"order5"},{default:k(()=>[Jo]),_:1}),I(l,{class:"order6"},{default:k(()=>[qo]),_:1})]),_:1})]),Qo,n("div",es,[I(c,{cols:"1 s:2",responsive:"screen"},{default:k(()=>[I(l,{class:"order7"},{default:k(()=>[ts]),_:1}),I(l,{class:"order8"},{default:k(()=>[ns]),_:1}),I(l,{class:"order9"},{default:k(()=>[os]),_:1}),I(l,{class:"order10"},{default:k(()=>[ss]),_:1}),I(l,{class:"order11"},{default:k(()=>[rs]),_:1}),I(l,{class:"order12"},{default:k(()=>[as]),_:1})]),_:1})])])],64)}const vs=nn($o,[["render",ls],["__scopeId","data-v-6124f250"]]);export{vs as default};
