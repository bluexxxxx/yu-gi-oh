import{d as h,au as r,T as m,h as x}from"./index.e6f804b5.js";function v(e,...n){if(Array.isArray(e))e.forEach(a=>v(a,...n));else return e(...n)}const c=h({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:n}){function a(t){e.width?t.style.maxWidth=`${t.offsetWidth}px`:t.style.maxHeight=`${t.offsetHeight}px`,t.offsetWidth}function o(t){e.width?t.style.maxWidth="0":t.style.maxHeight="0",t.offsetWidth;const{onLeave:i}=e;i&&i()}function f(t){e.width?t.style.maxWidth="":t.style.maxHeight="";const{onAfterLeave:i}=e;i&&i()}function d(t){if(t.style.transition="none",e.width){const i=t.offsetWidth;t.style.maxWidth="0",t.offsetWidth,t.style.transition="",t.style.maxWidth=`${i}px`}else if(e.reverse)t.style.maxHeight=`${t.offsetHeight}px`,t.offsetHeight,t.style.transition="",t.style.maxHeight="0";else{const i=t.offsetHeight;t.style.maxHeight="0",t.offsetWidth,t.style.transition="",t.style.maxHeight=`${i}px`}t.offsetWidth}function s(t){var i;e.width?t.style.maxWidth="":e.reverse||(t.style.maxHeight=""),(i=e.onAfterEnter)===null||i===void 0||i.call(e)}return()=>{const t=e.group?r:m;return x(t,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:d,onAfterEnter:s,onBeforeLeave:a,onLeave:o,onAfterLeave:f},n)}}});export{c as N,v as c};
