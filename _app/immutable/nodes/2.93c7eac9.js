import{s as W,f as k}from"../chunks/scheduler.b1afbd0b.js";import{S as z,i as B,s as j,g as d,r as q,E as I,f as m,c as x,h as v,j as g,u as y,k as h,a as _,v as A,A as E,d as C,t as H,w as T,m as b,n as w,o as S}from"../chunks/index.7de13197.js";import{H as N,W as D}from"../chunks/WhiteTextBox.d4eee645.js";import{t as F}from"../chunks/i18n.1ffe273d.js";function G(i){let s=i[0]("common.greeting")+"",o;return{c(){o=b(s)},l(e){o=w(e,s)},m(e,a){_(e,o,a)},p(e,a){a&1&&s!==(s=e[0]("common.greeting")+"")&&S(o,s)},d(e){e&&m(o)}}}function J(i){let s,o=i[0]("common.introduction")+"",e,a,f,r=i[0]("common.purpose")+"",p,t,n,c=i[0]("nav.cta")+"",$;return{c(){s=d("p"),e=b(o),a=j(),f=d("p"),p=b(r),t=j(),n=d("a"),$=b(c),this.h()},l(l){s=v(l,"P",{class:!0});var u=g(s);e=w(u,o),u.forEach(m),a=x(l),f=v(l,"P",{class:!0});var O=g(f);p=w(O,r),O.forEach(m),t=x(l),n=v(l,"A",{href:!0,class:!0});var P=g(n);$=w(P,c),P.forEach(m),this.h()},h(){h(s,"class","uno-t820d0"),h(f,"class","uno-yrrhze"),h(n,"href","/projects"),h(n,"class","uno-qdrj0t bg-primary-100")},m(l,u){_(l,s,u),E(s,e),_(l,a,u),_(l,f,u),E(f,p),_(l,t,u),_(l,n,u),E(n,$)},p(l,u){u&1&&o!==(o=l[0]("common.introduction")+"")&&S(e,o),u&1&&r!==(r=l[0]("common.purpose")+"")&&S(p,r),u&1&&c!==(c=l[0]("nav.cta")+"")&&S($,c)},d(l){l&&(m(s),m(a),m(f),m(t),m(n))}}}function K(i){let s,o,e,a,f,r,p;return document.title=s=i[0]("common.SEOtitle"),a=new N({props:{$$slots:{default:[G]},$$scope:{ctx:i}}}),r=new D({props:{$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){o=j(),e=d("section"),q(a.$$.fragment),f=j(),q(r.$$.fragment),this.h()},l(t){I("svelte-1ay2xcm",document.head).forEach(m),o=x(t),e=v(t,"SECTION",{class:!0});var c=g(e);y(a.$$.fragment,c),f=x(c),y(r.$$.fragment,c),c.forEach(m),this.h()},h(){h(e,"class","uno-mofbav")},m(t,n){_(t,o,n),_(t,e,n),A(a,e,null),E(e,f),A(r,e,null),p=!0},p(t,[n]){(!p||n&1)&&s!==(s=t[0]("common.SEOtitle"))&&(document.title=s);const c={};n&3&&(c.$$scope={dirty:n,ctx:t}),a.$set(c);const $={};n&3&&($.$$scope={dirty:n,ctx:t}),r.$set($)},i(t){p||(C(a.$$.fragment,t),C(r.$$.fragment,t),p=!0)},o(t){H(a.$$.fragment,t),H(r.$$.fragment,t),p=!1},d(t){t&&(m(o),m(e)),T(a),T(r)}}}function L(i,s,o){let e;return k(i,F,a=>o(0,e=a)),[e]}class V extends z{constructor(s){super(),B(this,s,L,K,W,{})}}export{V as component};
