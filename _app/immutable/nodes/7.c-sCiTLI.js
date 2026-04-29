import{$ as e,J as t,L as n,P as r,Q as i,S as a,Y as o,o as s,u as c,w as l}from"../chunks/lrzh8aLF.js";import"../chunks/CP97kCR3.js";import{t as u}from"../chunks/B4bRPIh-.js";var d=l(`<main class="svelte-wbntw"><article><svg id="mySVG" class="svelte-wbntw"></svg></article> <nav class="svelte-wbntw"><a href="#" class="svelte-wbntw">Home</a> <a href="#" class="svelte-wbntw">About</a> <a href="#" class="svelte-wbntw">Portfolio</a> <a href="#" class="svelte-wbntw">Team</a> <a href="#" class="svelte-wbntw">Contact</a></nav></main>`);function f(l,f){o(f,!0);let p,m=.5;function h(e){return+(e/255).toFixed(2)}function g(e,t=1,n){let[r,i,a]=e.map(e=>h(e));return new u().feColorMatrix({in:n,values:`0 0 0 0 ${r} 
  0 0 0 0 ${i} 
  0 0 0 0 ${a} 
  0 0 0 1   0`}).feBlend({in:`contline`}).feDisplacementMap({in2:`basedmap`,scale:t*.05,xChannelSelector:`R`,yChannelSelector:`G`,result:`lyr${t}text`})}r(()=>{new u(`shadow`,{"color-interpolation-filters":`sRGB`,primitiveUnits:`objectBoundingBox`}).feColorMatrix({values:`0 -1 0 0 1
			                      0  1 0 0 0
														0  0 0 0 0 
														0  0 0 1 0`,y:`0`,height:`1`}).feTile({result:`basedmap`}).feColorMatrix({in:`SourceGraphic`,values:`0 0 0 0 1 
														0 0 0 0 1 
														0 0 0 0 1 
														${1/m} 0 0 0 0`,result:`baseline`}).feColorMatrix({in:`SourceGraphic`,values:`0 0 0 0 0 
                    0 0 0 0 0 
														0 0 0 0 0 
														${1/m} 2 0 0 -2`,result:`contline`}).feColorMatrix({in:`SourceGraphic`,values:`0 0 0 0 1 
                    0 0 0 0 1 
														0 0 0 0 1 
														0 0 ${1/(1-m)} 0 0`,result:`basetext`}).addFilter(()=>g([210,20,202])).addFilter(()=>g([20,178,193],2,`basetext`)).feBlend({in2:`lyr1text`}).feBlend({in2:`baseline`}).feBlend({in2:`basetext`}).appendTo(`svg`)});var _=d();c(_,`--a: ${m}`),s(n(_),e=>p=e,()=>p),i(2),e(_),a(l,_),t()}export{f as component};