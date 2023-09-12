import{_ as w}from"./preload-helper.41c905a7.js";import{w as P,d as V}from"./index.d178a9b3.js";import{g as d}from"./scheduler.0045946e.js";var se=Object.defineProperty,ne=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,M=(r,e,a)=>e in r?se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,u=(r,e)=>{for(var a in e||(e={}))J.call(e,a)&&M(r,a,e[a]);if(E)for(var a of E(e))Q.call(e,a)&&M(r,a,e[a]);return r},m=(r,e)=>ne(r,ce(e)),R=(r,e)=>{var a={};for(var t in r)J.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&E)for(var t of E(r))e.indexOf(t)<0&&Q.call(r,t)&&(a[t]=r[t]);return a},I=["error","warn","debug"],U=({logger:r=console,level:e=I[1],prefix:a="[i18n]: "})=>I.reduce((t,i,l)=>m(u({},t),{[i]:o=>I.indexOf(e)>=l&&r[i](`${a}${o}`)}),{}),p=U({}),ue=r=>{p=r},z=r=>{var e=r,{parser:a,key:t,params:i,translations:l,locale:o,fallbackLocale:s}=e,n=R(e,["parser","key","params","translations","locale","fallbackLocale"]);if(!t)return p.warn(`No translation key provided ('${o}' locale). Skipping translation...`),"";if(!o)return p.warn(`No locale provided for '${t}' key. Skipping translation...`),"";let c=(l[o]||{})[t];return s&&c===void 0&&(c=(l[s]||{})[t]),n.hasOwnProperty("fallbackValue")&&c===void 0?n.fallbackValue:a.parse(c,i,o,t)},y=(...r)=>r.length?r.filter(e=>!!e).map(e=>{let a=`${e}`.toLowerCase();try{let[t]=Intl.Collator.supportedLocalesOf(e);if(!t)throw new Error;a=t}catch{p.warn(`'${e}' locale is non-standard.`)}return a}):[],S=(r,e,a)=>Object.keys(r||{}).reduce((t,i)=>{let l=r[i],o=a?`${a}.${i}`:`${i}`;return e&&Array.isArray(l)?m(u({},t),{[o]:l.map(s=>S(s,e))}):l&&typeof l=="object"?u(u({},t),S(l,e,o)):m(u({},t),{[o]:l})},{}),de=r=>r.reduce((e,{key:a,data:t,locale:i})=>{if(!t)return e;let[l]=y(i),o=m(u({},e[l]||{}),{[a]:t});return m(u({},e),{[l]:o})},{}),pe=async r=>{try{let e=await Promise.all(r.map(a=>{var t=a,{loader:i}=t,l=R(t,["loader"]);return new Promise(async o=>{let s;try{s=await i()}catch(n){p.error(`Failed to load translation. Verify your '${l.locale}' > '${l.key}' Loader.`),p.error(n)}o(m(u({loader:i},l),{data:s}))})}));return de(e)}catch(e){p.error(e)}return{}},fe=r=>e=>{try{if(typeof e=="string")return e===r;if(typeof e=="object")return e.test(r)}catch{p.error("Invalid route config!")}return!1},H=(r,e)=>{let a=!0;try{a=Object.keys(r).filter(t=>r[t]!==void 0).every(t=>r[t]===e[t])}catch{}return a},q=1e3*60*60*24,he=class{constructor(r){this.cachedAt=0,this.loadedKeys={},this.currentRoute=P(),this.config=P(),this.isLoading=P(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,a)=>{let{fallbackLocale:t}=d(this.config),i=Array.from(this.promises).filter(l=>{let o=H({locale:y(e)[0],route:a},l);return t&&(o=o||H({locale:y(t)[0],route:a},l)),o}).map(({promise:l})=>l);return Promise.all(i)},get:()=>d(this.isLoading)},this.privateRawTranslations=P({}),this.rawTranslations={subscribe:this.privateRawTranslations.subscribe,get:()=>d(this.rawTranslations)},this.privateTranslations=P({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>d(this.translations)},this.locales=m(u({},V([this.config,this.privateTranslations],([e,a])=>{if(!e)return[];let{loaders:t=[]}=e,i=t.map(({locale:o})=>o),l=Object.keys(a).map(o=>o);return Array.from(new Set([...y(...i),...y(...l)]))},[])),{get:()=>d(this.locales)}),this.internalLocale=P(),this.loaderTrigger=V([this.internalLocale,this.currentRoute],([e,a],t)=>{var i,l;e!==void 0&&a!==void 0&&!(e===((i=d(this.loaderTrigger))==null?void 0:i[0])&&a===((l=d(this.loaderTrigger))==null?void 0:l[1]))&&(p.debug("Triggering translation load..."),t([e,a]))},[]),this.localeHelper=P(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>d(this.locale)},this.initialized=V([this.locale,this.currentRoute,this.privateTranslations],([e,a,t],i)=>{d(this.initialized)||i(e!==void 0&&a!==void 0&&!!Object.keys(t).length)}),this.translation=V([this.privateTranslations,this.locale,this.isLoading],([e,a,t],i)=>{let l=e[a];l&&Object.keys(l).length&&!t&&i(l)},{}),this.t=m(u({},V([this.config,this.translation],e=>{var[a]=e,t=a,{parser:i,fallbackLocale:l}=t,o=R(t,["parser","fallbackLocale"]);return(s,...n)=>z(u({parser:i,key:s,params:n,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:l},o.hasOwnProperty("fallbackValue")?{fallbackValue:o.fallbackValue}:{}))})),{get:(e,...a)=>d(this.t)(e,...a)}),this.l=m(u({},V([this.config,this.translations],e=>{var[a,...t]=e,i=a,{parser:l,fallbackLocale:o}=i,s=R(i,["parser","fallbackLocale"]),[n]=t;return(c,f,...O)=>z(u({parser:l,key:f,params:O,translations:n,locale:c,fallbackLocale:o},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(e,a,...t)=>d(this.l)(e,a,...t)}),this.getLocale=e=>{let{fallbackLocale:a}=d(this.config)||{},t=e||a;if(!t)return;let i=this.locales.get();return i.find(l=>y(t).includes(l))||i.find(l=>y(a).includes(l))},this.setLocale=e=>{if(e&&e!==d(this.internalLocale))return p.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,d(this.currentRoute))},this.setRoute=e=>{if(e!==d(this.currentRoute)){p.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let a=d(this.internalLocale);return this.loading.toPromise(a,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),a=d(this.currentRoute))=>{let t=d(this.config);if(!t||!e)return[];let i=this.translations.get(),{loaders:l,fallbackLocale:o="",cache:s=q}=t||{},n=Number.isNaN(+s)?q:+s;this.cachedAt?Date.now()>n+this.cachedAt&&(p.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(p.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[c,f]=y(e,o),O=i[c],$=i[f],_=(l||[]).map(h=>{var v=h,{locale:T}=v,g=R(v,["locale"]);return m(u({},g),{locale:y(T)[0]})}).filter(({routes:h})=>!h||(h||[]).some(fe(a))).filter(({key:h,locale:v})=>v===c&&(!O||!(this.loadedKeys[c]||[]).includes(h))||o&&v===f&&(!$||!(this.loadedKeys[f]||[]).includes(h)));if(_.length){this.isLoading.set(!0),p.debug("Fetching translations...");let h=await pe(_);this.isLoading.set(!1);let v=Object.keys(h).reduce((g,b)=>m(u({},g),{[b]:Object.keys(h[b])}),{}),T=_.filter(({key:g,locale:b})=>(v[b]||[]).some(j=>`${j}`.startsWith(g))).reduce((g,{key:b,locale:j})=>m(u({},g),{[j]:[...g[j]||[],b]}),{});return[h,T]}return[]},this.addTranslations=(e,a)=>{if(!e)return;let t=d(this.config),{preprocess:i}=t||{};p.debug("Adding translations...");let l=Object.keys(e||{});this.privateRawTranslations.update(o=>l.reduce((s,n)=>m(u({},s),{[n]:u(u({},s[n]||{}),e[n])}),o)),this.privateTranslations.update(o=>l.reduce((s,n)=>{let c=!0,f=e[n];return typeof i=="function"&&(f=i(f)),(typeof i=="function"||i==="none")&&(c=!1),m(u({},s),{[n]:u(u({},s[n]||{}),c?S(f,i==="preserveArrays"):f)})},o)),l.forEach(o=>{let s=Object.keys(e[o]).map(n=>`${n}`.split(".")[0]);a&&(s=a[o]),this.loadedKeys[o]=Array.from(new Set([...this.loadedKeys[o]||[],...s||[]]))})},this.loader=async([e,a])=>{let t=this.getLocale(e)||void 0;p.debug(`Adding loader promise for '${t}' locale and '${a}' route.`);let i=(async()=>{let l=await this.getTranslationProps(t,a);l.length&&this.addTranslations(...l)})();this.promises.add({locale:t,route:a,promise:i}),i.then(()=>{t&&this.locale.get()!==t&&this.locale.forceSet(t)})},this.loadTranslations=(e,a=d(this.currentRoute)||"")=>{let t=this.getLocale(e);if(t)return this.setRoute(a),this.setLocale(t),this.loading.toPromise(t,a)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),p.debug("Loader promises have been purged."))}),r&&this.loadConfig(r)}async configLoader(r){if(!r)return p.error("No config provided!");let e=r,{initLocale:a,fallbackLocale:t,translations:i,log:l}=e,o=R(e,["initLocale","fallbackLocale","translations","log"]);l&&ue(U(l)),[a]=y(a),[t]=y(t),p.debug("Setting config."),this.config.set(u({initLocale:a,fallbackLocale:t,translations:i},o)),i&&this.addTranslations(i),a&&await this.loadTranslations(a)}},X=Object.defineProperty,me=Object.defineProperties,ye=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,W=(r,e,a)=>e in r?X(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,k=(r,e)=>{for(var a in e||(e={}))Y.call(e,a)&&W(r,a,e[a]);if(A)for(var a of A(e))Z.call(e,a)&&W(r,a,e[a]);return r},N=(r,e)=>me(r,ye(e)),L=(r,e)=>{var a={};for(var t in r)Y.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&A)for(var t of A(r))e.indexOf(t)<0&&Z.call(r,t)&&(a[t]=r[t]);return a},ve=(r,e)=>{for(var a in e)X(r,a,{get:e[a],enumerable:!0})},ee={};ve(ee,{ago:()=>_e,currency:()=>je,date:()=>we,eq:()=>K,gt:()=>te,gte:()=>ke,lt:()=>ae,lte:()=>be,ne:()=>ge,number:()=>Oe});var x=(r,e)=>{let{modifierDefaults:a}=e||{},{[r]:t}=a||{};return t||{}},K=({value:r,options:e=[],defaultValue:a=""})=>(e.find(({key:t})=>`${t}`.toLowerCase()===`${r}`.toLowerCase())||{}).value||a,ge=({value:r,options:e=[],defaultValue:a=""})=>(e.find(({key:t})=>`${t}`.toLowerCase()!==`${r}`.toLowerCase())||{}).value||a,ae=({value:r,options:e=[],defaultValue:a=""})=>(e.sort((t,i)=>+t.key-+i.key).find(({key:t})=>+r<+t)||{}).value||a,te=({value:r,options:e=[],defaultValue:a=""})=>(e.sort((t,i)=>+i.key-+t.key).find(({key:t})=>+r>+t)||{}).value||a,be=({value:r,options:e=[],defaultValue:a=""})=>K({value:r,options:e,defaultValue:ae({value:r,options:e,defaultValue:a})}),ke=({value:r,options:e=[],defaultValue:a=""})=>K({value:r,options:e,defaultValue:te({value:r,options:e,defaultValue:a})}),Oe=({value:r,props:e,defaultValue:a="",locale:t="",parserOptions:i})=>{if(!t)return"";let l=x("number",i),{maximumFractionDigits:o}=l,s=L(l,["maximumFractionDigits"]),n=(e==null?void 0:e.number)||{},{maximumFractionDigits:c=o||2}=n,f=L(n,["maximumFractionDigits"]);return new Intl.NumberFormat(t,k(N(k({},s),{maximumFractionDigits:c}),f)).format(+r||+a)},we=({value:r,props:e,defaultValue:a="",locale:t="",parserOptions:i})=>{if(!t)return"";let l=L(x("date",i),[]),o=L((e==null?void 0:e.date)||{},[]);return new Intl.DateTimeFormat(t,k(k({},l),o)).format(+r||+a)},F=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],re=(r="",e="")=>new RegExp(`^${r}s?$`).test(e),$e=r=>F.indexOf(F.find(({key:e})=>re(e,r))),Le=(r,e)=>F.reduce(([a,t],{key:i,multiplier:l},o)=>{if(re(t,e))return[a,t];if(!t||o===$e(t)+1){let s=Math.round(a/l);if(!t||Math.abs(s)>=1||e!=="auto")return[s,i]}return[a,t]},[r,""]),_e=({value:r,defaultValue:e="",locale:a="",props:t,parserOptions:i})=>{if(!a)return"";let l=x("ago",i),{format:o,numeric:s}=l,n=L(l,["format","numeric"]),c=(t==null?void 0:t.ago)||{},{format:f=o||"auto",numeric:O=s||"auto"}=c,$=L(c,["format","numeric"]),_=+r||+e,h=Le(_,f);return new Intl.RelativeTimeFormat(a,k(N(k({},n),{numeric:O}),$)).format(...h)},je=({value:r,defaultValue:e="",locale:a="",props:t,parserOptions:i})=>{if(!a)return"";let l=x("currency",i),{ratio:o,currency:s}=l,n=L(l,["ratio","currency"]),c=(t==null?void 0:t.currency)||{},{ratio:f=o||1,currency:O=s}=c,$=L(c,["ratio","currency"]);return new Intl.NumberFormat(a,k(N(k({},n),{style:"currency",currency:O}),$)).format(f*(r||e))},Pe=r=>typeof r=="string"&&/{{(?:(?!{{|}}).)+}}/.test(r),C=r=>typeof r=="string"?r.replace(/\\(?=:|;|{|})/g,""):r,Te=({value:r,props:e,payload:a,parserOptions:t,locale:i})=>`${r}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,l=>{let o=C(`${l.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=a==null?void 0:a[o],[,n=""]=l.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;}])*)(?=\s*(?:;|}}$))/i)||[];n=n||(a==null?void 0:a.default)||"";let[,c=""]=l.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&c!=="ne")return n;let f=!!c,{customModifiers:O}=t||{},$=k(k({},ee),O||{});c=Object.keys($).includes(c)?c:"eq";let _=$[c],h=(l.match(/[^\s:;{](?:[^;]|\\[;])+[^:;}]/gi)||[]).reduce((v,T,g)=>{if(g>0){let b=C(`${T.match(/(?:(?:\\:)|[^:])+/)}`.trim()),j=`${T.match(/(?:(?:\\:)|[^:])+$/)}`.trimStart();if(b&&b!=="default"&&j)return[...v,{key:b,value:j}]}return v},[]);return!f&&!h.length?s:_({value:s,options:h,props:e,defaultValue:n,locale:i,parserOptions:t})}),le=({value:r,props:e,payload:a,parserOptions:t,locale:i})=>{if(Pe(r)){let l=Te({value:r,payload:a,props:e,parserOptions:t,locale:i});return le({value:l,payload:a,props:e,parserOptions:t,locale:i})}else return C(r)},Ve=r=>({parse:(e,[a,t],i,l)=>(a!=null&&a.default&&e===void 0&&(e=a.default),e===void 0&&(e=l),le({value:e,payload:a,props:t,parserOptions:r,locale:i}))}),Re=Ve,Ee=Object.defineProperty,Ae=Object.defineProperties,De=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,B=(r,e,a)=>e in r?Ee(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,xe=(r,e)=>{for(var a in e||(e={}))ie.call(e,a)&&B(r,a,e[a]);if(D)for(var a of D(e))oe.call(e,a)&&B(r,a,e[a]);return r},Ie=(r,e)=>Ae(r,De(e)),Se=(r,e)=>{var a={};for(var t in r)ie.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&D)for(var t of D(r))e.indexOf(t)<0&&oe.call(r,t)&&(a[t]=r[t]);return a},G=r=>{var e=r,{parserOptions:a={}}=e,t=Se(e,["parserOptions"]);return Ie(xe({},t),{parser:Re(a)})},Fe=class extends he{constructor(e){super(e&&G(e)),this.loadConfig=a=>super.configLoader(G(a))}},Ce=Fe;const Ne={loaders:[{locale:"en",key:"common",loader:async()=>(await w(()=>import("./common.80d60566.js"),[],import.meta.url)).default},{locale:"en",key:"nav",loader:async()=>(await w(()=>import("./nav.489ac6ef.js"),[],import.meta.url)).default},{locale:"en",key:"projects",routes:["/projects"],loader:async()=>(await w(()=>import("./projects.830a8c82.js"),[],import.meta.url)).default},{locale:"se",key:"common",loader:async()=>(await w(()=>import("./common.9fd2f40d.js"),[],import.meta.url)).default},{locale:"se",key:"nav",loader:async()=>(await w(()=>import("./nav.98c9b299.js"),[],import.meta.url)).default},{locale:"se",key:"projects",routes:["/projects"],loader:async()=>(await w(()=>import("./projects.d62add62.js"),[],import.meta.url)).default},{locale:"ja",key:"common",loader:async()=>(await w(()=>import("./common.87a205f2.js"),[],import.meta.url)).default},{locale:"ja",key:"nav",loader:async()=>(await w(()=>import("./nav.c00a0268.js"),[],import.meta.url)).default},{locale:"ja",key:"projects",routes:["/projects"],loader:async()=>(await w(()=>import("./projects.596840e7.js"),[],import.meta.url)).default}]},{t:qe,locale:We,locales:Be,loading:Ge,loadTranslations:Je}=new Ce(Ne);export{We as a,Je as l,qe as t};
