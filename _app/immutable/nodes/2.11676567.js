import{i as xe,s as te,n as j,f as We,o as ze,e as G,h as qe,t as Ge,j as be,k as ke,r as Ke}from"../chunks/scheduler.1ed64432.js";import{S as ne,i as re,e as me,a as H,d as K,t as Q,f as E,g as A,h as T,j as C,y as we,k as L,x as _,z as ge,A as He,B as Ue,C as V,m as I,s as N,n as P,c as W,p as Ye,b as Je,r as fe,u as ie,v as ue,o as ye,w as de}from"../chunks/index.60d00f8a.js";import{b as Qe,w as ve,d as Ve,r as je}from"../chunks/paths.51161840.js";function pe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function _e(t,e){const r={},n={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const l in a)l in c||(n[l]=1);for(const l in c)o[l]||(r[l]=c[l],o[l]=1);t[s]=c}else for(const l in a)o[l]=1}for(const a in n)a in r||(r[a]=void 0);return r}function Xe(t){const e=t-1;return e*e*e+1}function Fe(t,{delay:e=0,duration:r=400,easing:n=xe}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:n,css:s=>`opacity: ${s*o}`}}function Se(t,{delay:e=0,duration:r=400,easing:n=Xe,axis:o="y"}={}){const s=getComputedStyle(t),a=+s.opacity,c=o==="y"?"height":"width",l=parseFloat(s[c]),u=o==="y"?["top","bottom"]:["left","right"],d=u.map(i=>`${i[0].toUpperCase()}${i.slice(1)}`),h=parseFloat(s[`padding${d[0]}`]),y=parseFloat(s[`padding${d[1]}`]),v=parseFloat(s[`margin${d[0]}`]),g=parseFloat(s[`margin${d[1]}`]),p=parseFloat(s[`border${d[0]}Width`]),F=parseFloat(s[`border${d[1]}Width`]);return{delay:e,duration:r,easing:n,css:i=>`overflow: hidden;opacity: ${Math.min(i*20,1)*a};${c}: ${i*l}px;padding-${u[0]}: ${i*h}px;padding-${u[1]}: ${i*y}px;margin-${u[0]}: ${i*v}px;margin-${u[1]}: ${i*g}px;border-${u[0]}-width: ${i*p}px;border-${u[1]}-width: ${i*F}px;`}}function Ze(t){let e,r,n=`made by <img class="uno-miy8hv" src="${Qe}/Henrik.png" alt="avatar"/>henrikvilhelmberglund`,o,s;return{c(){e=A("footer"),r=A("a"),r.innerHTML=n,this.h()},l(a){e=T(a,"FOOTER",{});var c=C(e);r=T(c,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),we(r)!=="svelte-1136w2i"&&(r.innerHTML=n),c.forEach(E),this.h()},h(){L(r,"class","uno-azlc6j"),L(r,"href","https://github.com/henrikvilhelmberglund")},m(a,c){H(a,e,c),_(e,r),s=!0},i(a){s||(a&&We(()=>{s&&(o||(o=ge(r,Fe,{},!0)),o.run(1))}),s=!0)},o(a){a&&(o||(o=ge(r,Fe,{},!1)),o.run(0)),s=!1},d(a){a&&E(e),a&&o&&o.end()}}}function et(t){let e,r=Ze();return{c(){r&&r.c(),e=me()},l(n){r&&r.l(n),e=me()},m(n,o){r&&r.m(n,o),H(n,e,o)},p:j,i(n){K(r)},o(n){Q(r)},d(n){n&&E(e),r&&r.d(n)}}}class tt extends ne{constructor(e){super(),re(this,e,null,et,te,{})}}function nt(t){let e,r,n;return{c(){e=A("button"),this.h()},l(o){e=T(o,"BUTTON",{class:!0}),C(e).forEach(E),this.h()},h(){L(e,"class","uno-541bw2")},m(o,s){H(o,e,s),r||(n=He(e,"click",t[1]),r=!0)},p:j,i:j,o:j,d(o){o&&E(e),r=!1,n()}}}function rt(t){let e;ze(()=>{e=localStorage.theme==="dark"});function r(){e=!e,e||(localStorage.theme="light"),e&&(localStorage.theme="dark"),localStorage.theme==="dark"||!("theme"in localStorage)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return[r,()=>r()]}class at extends ne{constructor(e){super(),re(this,e,rt,nt,te,{})}}var $e={};function st(t){return t==="local"?localStorage:sessionStorage}function ot(t,e,r){var n,o;const s=(n=r==null?void 0:r.serializer)!=null?n:JSON,a=(o=r==null?void 0:r.storage)!=null?o:"local",c=typeof window<"u"&&typeof document<"u",l=c?st(a):null;function u(d,h){l==null||l.setItem(d,s.stringify(h))}if(!$e[t]){const d=ve(e,v=>{const g=l==null?void 0:l.getItem(t);if(g?v(s.parse(g)):u(t,e),c){const p=F=>{F.key===t&&v(F.newValue?s.parse(F.newValue):null)};return window.addEventListener("storage",p),()=>window.removeEventListener("storage",p)}}),{subscribe:h,set:y}=d;$e[t]={set(v){u(t,v),y(v)},update(v){return d.update(g=>{const p=v(g);return u(t,p),p})},subscribe:h}}return $e[t]}const Ae=ot("color","blue",{serializer:{stringify:t=>t,parse:t=>t}}),R={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},light:{50:"#fdfdfd",100:"#fcfcfc",200:"#fafafa",300:"#f8f9fa",400:"#f6f6f6",500:"#f2f2f2",600:"#f1f3f5",700:"#e9ecef",800:"#dee2e6",900:"#dde1e3",950:"#d8dcdf"},dark:{50:"#4a4a4a",100:"#3c3c3c",200:"#323232",300:"#2d2d2d",400:"#222222",500:"#1f1f1f",600:"#1c1c1e",700:"#1b1b1b",800:"#181818",900:"#0f0f0f",950:"#080808"},get lightblue(){return this.sky},get lightBlue(){return this.sky},get warmgray(){return this.stone},get warmGray(){return this.stone},get truegray(){return this.neutral},get trueGray(){return this.neutral},get coolgray(){return this.gray},get coolGray(){return this.gray},get bluegray(){return this.slate},get blueGray(){return this.slate}};Object.values(R).forEach(t=>{typeof t!="string"&&t!==void 0&&(t.DEFAULT=t.DEFAULT||t[400],Object.keys(t).forEach(e=>{const r=+e/100;r===Math.round(r)&&(t[r]=t[e])}))});const lt=ct([{name:"blue",primary:R.blue,secondary:R.purple,gray:R.slate},{name:"green",primary:R.green,secondary:R.orange,gray:R.gray},{name:"yellow",primary:R.yellow,secondary:R.pink,gray:R.stone},{name:"pink",primary:R.pink,secondary:R.rose,gray:R.stone}]),Te=Object.entries(lt).map(t=>t[0]);function ct(t){function e(n,o,s,a){const c={primary:{50:o[50],100:o[100],200:o[200],300:o[300],400:o[400],500:o[500],600:o[600],700:o[700],800:o[800],900:o[900],950:o[950]},secondary:{50:s[50],100:s[100],200:s[200],300:s[300],400:s[400],500:s[500],600:s[600],700:s[700],800:s[800],900:s[900],950:s[950]},gray:{50:a[50],100:a[100],200:a[200],300:a[300],400:a[400],500:a[500],600:a[600],700:a[700],800:a[800],900:a[900],950:a[950]}},l={};return l[n]={colors:c},l}const r=t.map(n=>{const{name:o,primary:s,secondary:a,gray:c}=n;return e(o,s,a,c)});return Object.assign({},...r)}function Oe(t,e,r){const n=t.slice();return n[3]=e[r],n}function Ce(t){let e,r,n;function o(){return t[1](t[3])}return{c(){e=A("button"),this.h()},l(s){e=T(s,"BUTTON",{class:!0}),C(e).forEach(E),this.h()},h(){L(e,"class","uno-owzz1y bg-"+t[3]+"-500")},m(s,a){H(s,e,a),r||(n=He(e,"click",o),r=!0)},p(s,a){t=s},d(s){s&&E(e),r=!1,n()}}}function ft(t){let e,r=pe(Te),n=[];for(let o=0;o<r.length;o+=1)n[o]=Ce(Oe(t,r,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=me()},l(o){for(let s=0;s<n.length;s+=1)n[s].l(o);e=me()},m(o,s){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(o,s);H(o,e,s)},p(o,[s]){if(s&1){r=pe(Te);let a;for(a=0;a<r.length;a+=1){const c=Oe(o,r,a);n[a]?n[a].p(c,s):(n[a]=Ce(c),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=r.length}},i:j,o:j,d(o){o&&E(e),Ue(n,o)}}}function it(t,e,r){let n;G(t,Ae,a=>r(2,n=a));let o;const s=a=>r(0,o=a);return t.$$.update=()=>{t.$$.dirty&1&&o&&(Te.forEach(a=>{document.documentElement.classList.remove(a)}),qe(Ae,n=o,n),document.documentElement.classList.add(o))},[o,s]}class ut extends ne{constructor(e){super(),re(this,e,it,ft,te,{})}}function Re(t){function e(r){return r(t),()=>{}}return{subscribe:e}}function dt(t){if(!bt)return null;const e=document.querySelector(`[data-melt-id="${t}"]`);return ee(e)?e:null}const he=t=>new Proxy(t,{get(e,r,n){return Reflect.get(e,r,n)},ownKeys(e){return Reflect.ownKeys(e).filter(r=>r!=="action")}}),Le=t=>typeof t=="function";function X(t,e){const{stores:r,action:n,returned:o}=e??{},s=(()=>{if(r&&o)return Ve(r,c=>{const l=o(c);if(Le(l)){const u=(...d)=>he({...l(...d),[`data-melt-${t}`]:"",action:n??J});return u.action=n??J,u}return he({...l,[`data-melt-${t}`]:"",action:n??J})});{const c=o,l=c==null?void 0:c();if(Le(l)){const u=(...d)=>he({...l(...d),[`data-melt-${t}`]:"",action:n??J});return u.action=n??J,Re(u)}return Re(he({...l,[`data-melt-${t}`]:"",action:n??J}))}})(),a=n??(()=>{});return a.subscribe=s.subscribe,a}function ht(t){const e=s=>s?`${t}-${s}`:t,r=s=>`data-melt-${t}${s?`-${s}`:""}`,n=s=>`[data-melt-${t}${s?`-${s}`:""}]`;return{name:e,attribute:r,selector:n,getEl:s=>document.querySelector(n(s))}}const bt=typeof document<"u";function ee(t){return t instanceof HTMLElement}function mt(...t){return(...e)=>{for(const r of t)typeof r=="function"&&r(...e)}}function J(){}function Be(t,e,r,n){const o=Array.isArray(e)?e:[e];return o.forEach(s=>t.addEventListener(s,r,n)),()=>{o.forEach(s=>t.removeEventListener(s,r,n))}}function Me(t,e,r,n){const o=Array.isArray(e)?e:[e];if(typeof r=="function"){const s=pt(a=>r(a));return o.forEach(a=>t.addEventListener(a,s,n)),()=>{o.forEach(a=>t.removeEventListener(a,s,n))}}return()=>void 0}function gt(t){const e=t.currentTarget;if(!ee(e))return null;const r=new CustomEvent(`m-${t.type}`,{detail:{originalEvent:t},cancelable:!0});return e.dispatchEvent(r),r}function pt(t){return e=>{const r=gt(e);if(!(r!=null&&r.defaultPrevented))return t(e)}}function _t(t,...e){const r={};for(const n of Object.keys(t))e.includes(n)||(r[n]=t[n]);return r}const vt=(t,e)=>{const r=(o,s)=>{t.update(a=>{const c=o(a);let l=c;return e&&(l=e({curr:a,next:c})),s==null||s(l),l})};return{...t,update:r,set:o=>{r(()=>o)}}};function yt(t){return Object.keys(t).reduce((e,r)=>t[r]===void 0?e:e+`${r}:${t[r]};`,"")}let $t="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Et=(t=21)=>{let e="",r=t;for(;r--;)e+=$t[Math.random()*64|0];return e};function Ee(){return Et(10)}const M={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control"};function kt(t){const e={};return Object.keys(t).forEach(r=>{const n=r,o=t[n];e[n]=ve(o)}),e}const{name:Z,selector:Ie}=ht("accordion"),wt={multiple:!1,disabled:!1,forceVisible:!1},At=t=>{const e={...wt,...t},r=kt(_t(e,"value","onValueChange","defaultValue")),{disabled:n,forceVisible:o}=r,s=e.value??ve(e.defaultValue),a=vt(s,e==null?void 0:e.onValueChange),c=(f,b)=>b===void 0?!1:typeof b=="string"?b===f:b.includes(f),l=Ve(a,f=>b=>c(b,f)),u={root:Ee()},d=X(Z(),{returned:()=>({"data-melt-id":u.root})}),h=f=>typeof f=="string"?{value:f}:f,y=f=>typeof f=="number"?{level:f}:f,v=X(Z("item"),{stores:a,returned:f=>b=>{const{value:m,disabled:w}=h(b);return{"data-state":c(m,f)?"open":"closed","data-disabled":w?!0:void 0}}}),g=X(Z("trigger"),{stores:[a,n],returned:([f,b])=>m=>{const{value:w,disabled:S}=h(m);return{disabled:b||S,"aria-expanded":!!c(w,f),"aria-disabled":!!S,"data-disabled":S?!0:void 0,"data-value":w,"data-state":c(w,f)?"open":"closed"}},action:f=>({destroy:mt(Me(f,"click",()=>{const m=f.dataset.disabled==="true",w=f.dataset.value;m||!w||i(w)}),Me(f,"keydown",m=>{if(![M.ARROW_DOWN,M.ARROW_UP,M.HOME,M.END].includes(m.key))return;if(m.preventDefault(),m.key===M.SPACE||m.key===M.ENTER){const B=f.dataset.disabled==="true",Y=f.dataset.value;if(B||!Y)return;i(Y);return}const w=m.target,S=dt(u.root);if(!S||!ee(w))return;const O=Array.from(S.querySelectorAll(Ie("trigger"))).filter(B=>ee(B)?B.dataset.disabled!=="true":!1);if(!O.length)return;const D=O.indexOf(w);m.key===M.ARROW_DOWN&&O[(D+1)%O.length].focus(),m.key===M.ARROW_UP&&O[(D-1+O.length)%O.length].focus(),m.key===M.HOME&&O[0].focus(),m.key===M.END&&O[O.length-1].focus()}))})}),p=X(Z("content"),{stores:[a,n,o],returned:([f,b,m])=>w=>{const{value:S}=h(w),U=c(S,f)||m;return{"data-state":U?"open":"closed","data-disabled":b?!0:void 0,"data-value":S,hidden:U?void 0:!0,style:yt({display:U?void 0:"none"})}},action:f=>{Ge().then(()=>{const b=Ee(),m=Ee(),w=document.querySelector(`${Ie("trigger")}, [data-value="${f.dataset.value}"]`);ee(w)&&(f.id=b,w.setAttribute("aria-controls",b),w.id=m)})}}),F=X(Z("heading"),{returned:()=>f=>{const{level:b}=y(f);return{role:"heading","aria-level":b,"data-heading-level":b}}});function i(f){a.update(b=>b===void 0?e.multiple?[f]:f:Array.isArray(b)?b.includes(f)?b.filter(m=>m!==f):(b.push(f),b):b===f?void 0:f)}return{elements:{root:d,item:v,trigger:g,content:p,heading:F},states:{value:a},helpers:{isSelected:l},options:r}};je(void 0,t=>{function e(n){t(n),t(void 0)}return Be(document,"pointerdown",e,{passive:!1,capture:!0})});je(void 0,t=>{function e(n){n&&n.key===M.ESCAPE&&t(n),t(void 0)}return Be(document,"keydown",e,{passive:!1,capture:!0})});function Pe(t,e,r){const n=t.slice();n[12]=e[r].id,n[13]=e[r].title,n[14]=e[r].description,n[19]=r;const o=n[1](n[12]);n[15]=o;const s=n[2](n[12]);n[16]=s;const a=n[3](n[12]);return n[17]=a,n}function De(t){let e,r,n=t[14]+"",o,s,a,c,l,u=[{class:"uno-x1fi0r"},t[15]],d={};for(let h=0;h<u.length;h+=1)d=be(d,u[h]);return{c(){e=A("div"),r=A("div"),o=I(n),this.h()},l(h){e=T(h,"DIV",{class:!0});var y=C(e);r=T(y,"DIV",{class:!0});var v=C(r);o=P(v,n),v.forEach(E),y.forEach(E),this.h()},h(){L(r,"class","uno-pb9ywm"),V(e,d)},m(h,y){H(h,e,y),_(e,r),_(r,o),a=!0,c||(l=ke(t[15].action(e)),c=!0)},p(h,y){V(e,d=_e(u,[{class:"uno-x1fi0r"},y&2&&h[15]]))},i(h){a||(h&&We(()=>{a&&(s||(s=ge(e,Se,{},!0)),s.run(1))}),a=!0)},o(h){h&&(s||(s=ge(e,Se,{},!1)),s.run(0)),a=!1},d(h){h&&E(e),h&&s&&s.end(),c=!1,l()}}}function Ne(t){let e,r,n,o=t[13]+"",s,a,c,l=t[4](t[12]),u,d,h,y=[t[16],{class:a="uno-t3rk4y text-primary-700 "+(t[19]===t[10].length-1?"uno-e8n10k":"")}],v={};for(let i=0;i<y.length;i+=1)v=be(v,y[i]);let g=l&&De(t),p=[t[17],{class:"uno-63ag4b"}],F={};for(let i=0;i<p.length;i+=1)F=be(F,p[i]);return{c(){e=A("div"),r=A("h2"),n=A("button"),s=I(o),c=N(),g&&g.c(),u=N(),this.h()},l(i){e=T(i,"DIV",{class:!0});var f=C(e);r=T(f,"H2",{class:!0});var b=C(r);n=T(b,"BUTTON",{class:!0});var m=C(n);s=P(m,o),m.forEach(E),b.forEach(E),c=W(f),g&&g.l(f),u=W(f),f.forEach(E),this.h()},h(){V(n,v),L(r,"class","uno-v1jran"),V(e,F)},m(i,f){H(i,e,f),_(e,r),_(r,n),_(n,s),n.autofocus&&n.focus(),_(e,c),g&&g.m(e,null),_(e,u),d||(h=[ke(t[16].action(n)),ke(t[17].action(e))],d=!0)},p(i,f){V(n,v=_e(y,[f&4&&i[16],{class:a}])),f&16&&(l=i[4](i[12])),l?g?(g.p(i,f),f&16&&K(g,1)):(g=De(i),g.c(),K(g,1),g.m(e,u)):g&&(Ye(),Q(g,1,1,()=>{g=null}),Je()),V(e,F=_e(p,[f&8&&i[17],{class:"uno-63ag4b"}]))},d(i){i&&E(e),g&&g.d(),d=!1,Ke(h)}}}function Tt(t){let e,r=pe(t[10]),n=[];for(let a=0;a<r.length;a+=1)n[a]=Ne(Pe(t,r,a));let o=[{class:"uno-fe1gqs"},t[0]],s={};for(let a=0;a<o.length;a+=1)s=be(s,o[a]);return{c(){e=A("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=T(a,"DIV",{class:!0});var c=C(e);for(let l=0;l<n.length;l+=1)n[l].l(c);c.forEach(E),this.h()},h(){V(e,s)},m(a,c){H(a,e,c);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(a,[c]){if(c&1054){r=pe(a[10]);let l;for(l=0;l<r.length;l+=1){const u=Pe(a,r,l);n[l]?n[l].p(u,c):(n[l]=Ne(u),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=r.length}V(e,s=_e(o,[{class:"uno-fe1gqs"},c&1&&a[0]]))},i:j,o:j,d(a){a&&E(e),Ue(n,a)}}}function Ft(t,e,r){let n,o,s,a,c;const l=ve("item-1"),{elements:{content:u,item:d,trigger:h,root:y},helpers:{isSelected:v}}=At({value:l});return G(t,u,p=>r(1,o=p)),G(t,d,p=>r(3,a=p)),G(t,h,p=>r(2,s=p)),G(t,y,p=>r(0,n=p)),G(t,v,p=>r(4,c=p)),[n,o,s,a,c,u,d,h,y,v,[{id:"item-1",title:"Is it accessible?",description:"Yes. It adheres to the WAI-ARIA design pattern."},{id:"item-2",title:"Is it unstyled?",description:"Yes. It's unstyled by default, giving you freedom over the look & feel."},{id:"item-3",title:"Can it be animated?",description:"Yes! You can use the transition prop to configure the animation."}]]}class St extends ne{constructor(e){super(),re(this,e,Ft,Tt,te,{})}}function Ot(t){let e,r,n,o,s,a,c,l="Hello!",u,d,h,y,v,g,p,F,i,f,b,m,w,S,U,O,D,B="Now with Melt!",Y,x,ae,z,q;return n=new ut({}),s=new at({}),x=new St({}),z=new tt({}),{c(){e=A("main"),r=A("header"),fe(n.$$.fragment),o=N(),fe(s.$$.fragment),a=N(),c=A("h1"),c.textContent=l,u=N(),d=A("p"),h=I("This is the "),y=I(t[0]),v=I(" theme."),g=N(),p=A("button"),F=I("A "),i=I(t[0]),f=I(" button"),b=N(),m=A("button"),w=I("A "),S=I(t[0]),U=I(" secondary button"),O=N(),D=A("p"),D.textContent=B,Y=N(),fe(x.$$.fragment),ae=N(),fe(z.$$.fragment),this.h()},l($){e=T($,"MAIN",{class:!0});var k=C(e);r=T(k,"HEADER",{});var se=C(r);ie(n.$$.fragment,se),o=W(se),ie(s.$$.fragment,se),se.forEach(E),a=W(k),c=T(k,"H1",{class:!0,["data-svelte-h"]:!0}),we(c)!=="svelte-m773gp"&&(c.textContent=l),u=W(k),d=T(k,"P",{class:!0});var oe=C(d);h=P(oe,"This is the "),y=P(oe,t[0]),v=P(oe," theme."),oe.forEach(E),g=W(k),p=T(k,"BUTTON",{class:!0});var le=C(p);F=P(le,"A "),i=P(le,t[0]),f=P(le," button"),le.forEach(E),b=W(k),m=T(k,"BUTTON",{class:!0});var ce=C(m);w=P(ce,"A "),S=P(ce,t[0]),U=P(ce," secondary button"),ce.forEach(E),O=W(k),D=T(k,"P",{class:!0,["data-svelte-h"]:!0}),we(D)!=="svelte-1ukh95"&&(D.textContent=B),Y=W(k),ie(x.$$.fragment,k),k.forEach(E),ae=W($),ie(z.$$.fragment,$),this.h()},h(){L(c,"class","uno-nbhmb5 text-primary-900"),L(d,"class","uno-bb4k34 text-primary-900"),L(p,"class","uno-bp6dfh"),L(m,"class","uno-bvfdrh"),L(D,"class","uno-bb4k34 text-primary-900"),L(e,"class","uno-2v54cn bg-primary-100")},m($,k){H($,e,k),_(e,r),ue(n,r,null),_(r,o),ue(s,r,null),_(e,a),_(e,c),_(e,u),_(e,d),_(d,h),_(d,y),_(d,v),_(e,g),_(e,p),_(p,F),_(p,i),_(p,f),_(e,b),_(e,m),_(m,w),_(m,S),_(m,U),_(e,O),_(e,D),_(e,Y),ue(x,e,null),H($,ae,k),ue(z,$,k),q=!0},p($,[k]){(!q||k&1)&&ye(y,$[0]),(!q||k&1)&&ye(i,$[0]),(!q||k&1)&&ye(S,$[0])},i($){q||(K(n.$$.fragment,$),K(s.$$.fragment,$),K(x.$$.fragment,$),K(z.$$.fragment,$),q=!0)},o($){Q(n.$$.fragment,$),Q(s.$$.fragment,$),Q(x.$$.fragment,$),Q(z.$$.fragment,$),q=!1},d($){$&&(E(e),E(ae)),de(n),de(s),de(x),de(z,$)}}}function Ct(t,e,r){let n;return G(t,Ae,o=>r(0,n=o)),[n]}class It extends ne{constructor(e){super(),re(this,e,Ct,Ot,te,{})}}export{It as component};
