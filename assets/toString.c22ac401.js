import{Q as y,R as g,S as s,U as m}from"./index.e6f804b5.js";var l="[object Symbol]";function S(t){return typeof t=="symbol"||y(t)&&g(t)==l}function a(t,r){for(var n=-1,o=t==null?0:t.length,i=Array(o);++n<o;)i[n]=r(t[n],n,t);return i}var c=1/0,e=s?s.prototype:void 0,f=e?e.toString:void 0;function b(t){if(typeof t=="string")return t;if(m(t))return a(t,b)+"";if(S(t))return f?f.call(t):"";var r=t+"";return r=="0"&&1/t==-c?"-0":r}function u(t){return t==null?"":b(t)}export{a,S as i,u as t};
