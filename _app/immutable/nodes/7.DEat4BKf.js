import{a as T,t as k,c as m,s as e}from"../chunks/disclose-version.Dv-B70xr.js";import{p as w,F as A,t as s,a as D}from"../chunks/runtime.Dxd9X7SM.js";import{s as t}from"../chunks/attributes.Bgl5bfIy.js";import{b as R}from"../chunks/this.yAm5qJJ-.js";import{g as j}from"../chunks/index.BrkCjSsj.js";import{S as _}from"../chunks/svgFilterBuilder.CBncK7HC.js";var E=k('<main class="svelte-4yu1xt"><article><svg id="mySVG" class="svelte-4yu1xt"></svg></article> <nav class="svelte-4yu1xt"><a class="svelte-4yu1xt">Home</a> <a class="svelte-4yu1xt">About</a> <a class="svelte-4yu1xt">Portfolio</a> <a class="svelte-4yu1xt">Team</a> <a class="svelte-4yu1xt">Contact</a></nav></main>');function J(x,b){w(b,!0);let n,l=.5,h=.05;function g(r){return+(r/255).toFixed(2)}function o(r,v=1,S){let[$,F,G]=r.map(M=>g(M));return new _().feColorMatrix({in:S,values:`0 0 0 0 ${$} 
  0 0 0 0 ${F} 
  0 0 0 0 ${G} 
  0 0 0 1   0`}).feBlend({in:"contline"}).feDisplacementMap({in2:"basedmap",scale:v*h,xChannelSelector:"R",yChannelSelector:"G",result:`lyr${v}text`})}A(()=>{new _("shadow",{"color-interpolation-filters":"sRGB",primitiveUnits:"objectBoundingBox"}).feColorMatrix({values:`0 -1 0 0 1
			                      0  1 0 0 0
														0  0 0 0 0 
														0  0 0 1 0`,y:"0",height:"1"}).feTile({result:"basedmap"}).feColorMatrix({in:"SourceGraphic",values:`0 0 0 0 1 
														0 0 0 0 1 
														0 0 0 0 1 
														${1/l} 0 0 0 0`,result:"baseline"}).feColorMatrix({in:"SourceGraphic",values:`0 0 0 0 0 
                    0 0 0 0 0 
														0 0 0 0 0 
														${1/l} 2 0 0 -2`,result:"contline"}).feColorMatrix({in:"SourceGraphic",values:`0 0 0 0 1 
                    0 0 0 0 1 
														0 0 0 0 1 
														0 0 ${1/(1-l)} 0 0`,result:"basetext"}).addFilter(()=>o([210,20,202])).addFilter(()=>o([20,178,193],2,"basetext")).feBlend({in2:"lyr1text"}).feBlend({in2:"baseline"}).feBlend({in2:"basetext"}).appendTo("svg")});const y=j(),[a,H]=y;var i=E();t(i,"style",`--a: ${l}`);var u=m(i);R(u,r=>n=r,()=>n);var B=e(e(u,!0)),c=m(B);s(()=>t(c,"href",a("#",void 0)));var f=e(e(c,!0));s(()=>t(f,"href",a("#",void 0)));var d=e(e(f,!0));s(()=>t(d,"href",a("#",void 0)));var p=e(e(d,!0));s(()=>t(p,"href",a("#",void 0)));var C=e(e(p,!0));s(()=>t(C,"href",a("#",void 0))),T(x,i),D()}export{J as component};
