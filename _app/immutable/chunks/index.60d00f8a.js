var J=Object.defineProperty;var K=(t,e,n)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var B=(t,e,n)=>(K(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,m as M,f as D,i as Q,p as L,q as U,v as X,w as Y,x as Z,y as T,z as tt,A as et,B as nt}from"./scheduler.1ed64432.js";const I=typeof window<"u";let it=I?()=>window.performance.now():()=>Date.now(),R=I?t=>requestAnimationFrame(t):w;const g=new Set;function k(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&R(k)}function rt(t){let e;return g.size===0&&R(k),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let C=!1;function st(){C=!0}function lt(){C=!1}function at(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:at(1,o,h=>e[n[h]].claim_order,a))-1;i[r]=n[_]+1;const f=_+1;n[f]=r,o=Math.max(f,o)}const c=[],l=[];let s=e.length-1;for(let r=n[o]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);s>=r;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[r],_)}}function ct(t,e){t.appendChild(e)}function H(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ft(t){const e=V("style");return e.textContent="/* empty */",ut(H(t),e),e.sheet}function ut(t,e){return ct(t.head||t,e),e.sheet}function _t(t,e){if(C){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){C&&!n?_t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function Rt(){return z(" ")}function zt(){return z("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const ht=["width","height"];function Tt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&ht.indexOf(i)===-1?t[i]=e[i]:dt(t,i,e[i])}function qt(t){return t.dataset.svelteH}function mt(t){return Array.from(t.childNodes)}function pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,o=!1){pt(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,o||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const r=n(s);return r===void 0?t.splice(l,1):t[l]=r,o?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function $t(t,e,n,i){return W(t,o=>o.nodeName===e,o=>{const c=[];for(let l=0;l<o.attributes.length;l++){const s=o.attributes[l];n[s.name]||c.push(s.name)}c.forEach(l=>o.removeAttribute(l))},()=>i(e))}function It(t,e,n){return $t(t,e,n,V)}function yt(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function kt(t){return yt(t," ")}function Ht(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ft(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Vt(t,e){return new t(e)}const A=new Map;let E=0;function xt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function wt(t,e){const n={stylesheet:ft(e),rules:{}};return A.set(t,n),n}function q(t,e,n,i,o,c,l,s=0){const r=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=r){const y=e+(n-e)*c(d);a+=d*100+`%{${l(y,1-y)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${xt(_)}_${s}`,h=H(t),{stylesheet:$,rules:u}=A.get(h)||wt(h,t);u[f]||(u[f]=!0,$.insertRule(`@keyframes ${f} ${_}`,$.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${o}ms 1 both`,E+=1,f}function vt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),E-=o,E||bt())}function bt(){R(()=>{E||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),A.clear())})}let x;function Nt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function P(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const N=new Set;let p;function Wt(){p={r:0,c:[],p}}function Gt(){p.r||v(p.c),p=p.p}function At(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),p.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Et={duration:0};function Kt(t,e,n,i){let c=e(t,n,{direction:"both"}),l=i?0:1,s=null,r=null,a=null,_;function f(){a&&vt(t,a)}function h(u,m){const d=u.b-l;return m*=Math.abs(d),{a:l,b:u.b,d,duration:m,start:u.start,end:u.start+m,group:u.group}}function $(u){const{delay:m=0,duration:d=300,easing:y=Q,tick:S=w,css:O}=c||Et,j={start:it()+m,b:u};u||(j.group=p,p.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),s||r?r=j:(O&&(f(),a=q(t,l,u,d,m,y,O)),u&&S(0,1),s=h(j,d),D(()=>P(t,u,"start")),rt(b=>{if(r&&b>r.start&&(s=h(r,d),r=null,P(t,s.b,"start"),O&&(f(),a=q(t,l,s.b,s.duration,0,y,c.css))),s){if(b>=s.end)S(l=s.b,1-l),P(t,s.b,"end"),r||(s.b?f():--s.group.r||v(s.group.c)),s=null;else if(b>=s.start){const G=b-s.start;l=s.a+s.d*y(G/s.duration),S(l,1-l)}}return!!(s||r)}))}return{run(u){M(c)?Nt().then(()=>{c=c({direction:u?"in":"out"}),$(u)}):$(u)},end(){f(),s=r=null}}}function Qt(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function Ct(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),D(()=>{const c=t.$$.on_mount.map(tt).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(D)}function St(t,e){const n=t.$$;n.fragment!==null&&(Y(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(et.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,o,c,l,s=[-1]){const r=Z;T(t);const a=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:o,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:L(),dirty:s,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...$)=>{const u=$.length?$[0]:h;return a.ctx&&o(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&Ot(t,f)),h}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){st();const f=mt(e.target);a.fragment&&a.fragment.l(f),f.forEach(F)}else a.fragment&&a.fragment.c();e.intro&&At(t.$$.fragment),Ct(t,e.target,e.anchor),lt(),U()}T(r)}class Yt{constructor(){B(this,"$$");B(this,"$$set")}$destroy(){St(this,1),this.$destroy=w}$on(e,n){if(!M(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const jt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(jt);export{Lt as A,Mt as B,Tt as C,Yt as S,Dt as a,Gt as b,kt as c,At as d,zt as e,F as f,V as g,It as h,Xt as i,mt as j,dt as k,Ft as l,z as m,yt as n,Ht as o,Wt as p,Vt as q,Qt as r,Rt as s,Jt as t,Ut as u,Ct as v,St as w,_t as x,qt as y,Kt as z};
