import{a as x,t as m,c as g}from"../chunks/disclose-version.Dv-B70xr.js";import{p as v,F as b,a as h}from"../chunks/runtime.Dxd9X7SM.js";import{b as C}from"../chunks/this.yAm5qJJ-.js";import{S as o}from"../chunks/svgFilterBuilder.CBncK7HC.js";var y=m('<main class="svelte-qu7u5c"><article class="svelte-qu7u5c"><svg id="mySVG"></svg> <div contenteditable="true" class="svelte-qu7u5c">hello</div></article></main>');function G(n,s){v(s,!0);let a,l=t=>{let u=t*t,p=t+1;return Array.from({length:u},(B,c)=>+!(c%p))},e=16,r=.5*e,d=Array(l(e).join(" "));b(()=>{new o("back").feTurbulence({baseFrequency:".0371 .0713",result:"one"}).feTurbulence({baseFrequency:".173 .317"}).feDisplacementMap({in:"one",scale:25,xChannelSelector:"R"}).feDiffuseLightingWithLight({"lighting-color":"#4a7997",result:"textured"},"feDistantLight",{azimuth:90,elevation:50}).feColorMatrix({in:"SourceGraphic",values:"0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 1 0 0 0 0",result:"baseline"}).feComposite({in:"textured",operator:"in"}).feDropShadow({dx:"0",dy:"2"}).feBlend({in2:"textured",result:"textline"}).feGaussianBlur({in:"baseline",stdDeviation:"1"}).feOffset({dy:"1"}).feComposite({in:"baseline",operator:"out"}).feBlend({in2:"textline",mode:"screen",result:"stripe"}).feColorMatrix({in:"SourceGraphic",values:"0 0 0 0 .5 0 0 0 0 .85 0 0 0 0 .95 0 1 0 0 0"}).feBlend({in2:"stripe",mode:"overlay"}).appendTo("svg"),new o("extruded",{"color-interpolation-filters":"sRGB",x:"-50%",y:"-50%",width:"200%",height:"200%"}).feColorMatrix({values:"0 0 0 0 .01 0 0 0 0 .085 0 0 0 0 .14 0 1 0 0 0",result:"basegrad"}).feTurbulence({type:"fractalNoise",baseFrequency:".5713"}).feDisplacementMap({in:"basegrad",scale:64,xChannelSelector:"R",result:"mixtgrad"}).feComponentTransferFuncA({result:"narrgrad"},{type:"table",tableValues:"-.5 1.5"}).feComponentTransferFuncA({result:"easegrad"},{type:"gamma",exponent:"1.35"}).feColorMatrix({in:"SourceGraphic",values:"0 0 0 0 0 0 0 0 0 .375 0 0 0 0 .515 0 0 1 0 0",result:"basetext"}).feComposite({in:"easegrad",operator:"in"}).feBlend({in2:"basetext",result:"gradtext"}).feComposite({in2:"gradtext",operator:"in"}).feBlend({in2:"gradtext",result:"mixttext"}).feOffset({dx:"2",dy:"2"}).feGaussianBlur({stdDeviation:"1"}).feComponentTransferFuncA({},{type:"linear",slope:".8"}).feComposite({in:"mixttext",operator:"out"}).feBlend({in2:"mixttext",mode:"screen"}).feDropShadow({result:"middtext"}).feColorMatrix({in:"SourceGraphic",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0",result:"baseline"}).feConvolveMatrix({order:e,divisor:1,kernelMatrix:d.join(" ")}).feOffset({dx:r,dy:r}).feColorMatrix({values:"0 0 0 0 .85 0 0 0 0 .68 0 0 0 0 .26 0 0 0 1 0",result:"extrbase"}).feComposite({in:"easegrad",operator:"in"}).feColorMatrix({values:"0 0 0 0 .48 0 0 0 0 .13 0 0 0 0 .13 0 0 0 1 0"}).feBlend({in2:"extrbase",result:"extrgrad"}).feDropShadow({in:"baseline",dx:0,dy:0,stdDeviation:r,"flood-color":"#fffc"}).feComposite({in2:"extrgrad",operator:"in"}).feBlend({in2:"extrgrad",mode:"screen"}).feBlend({in:"middtext"}).feDropShadow({dx:2*e,dy:2*e,stdDeviation:2*e,"flood-color":"#000c"}).appendTo("svg")});var i=y(),f=g(i);C(f,t=>a=t,()=>a),x(n,i),h()}export{G as component};
