import{n as l,s as k,l as q,r as v,m as x}from"./scheduler.1ed64432.js";const c=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=l){let n;const r=new Set;function a(t){if(k(e,t)&&(e=t,n)){const o=!c.length;for(const s of r)s[1](),c.push(s,e);if(o){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,o=l){const s=[t,o];return r.add(s),r.size===1&&(n=i(a,b)||l),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:a,update:b,subscribe:f}}function E(e,i,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=i.length<2;return z(n,(f,t)=>{let o=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=i(r?s[0]:s,f,t);b?f(u):p=x(u)?u:l},w=a.map((u,_)=>q(u,y=>{s[_]=y,d&=~(1<<_),o&&g()},()=>{d|=1<<_}));return o=!0,g(),function(){v(w),p(),o=!1}})}var h;const T=((h=globalThis.__sveltekit_lwk1rm)==null?void 0:h.base)??"";var m;const S=((m=globalThis.__sveltekit_lwk1rm)==null?void 0:m.assets)??T;export{S as a,T as b,E as d,z as r,A as w};
