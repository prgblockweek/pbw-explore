import{S as te,i as ie,s as re,a as A,e as F,c as O,b as y,f as D,g as C,d as H,t as S,O as ne,h as v,k as w,w as N,l as E,m as I,x as P,n as k,F as g,y as j,z as B,q as V,r as z,u as q}from"./index-bc2baea7.js";import{S as le}from"./SvelteMarkdown-a05ade2d.js";import{f as M}from"./utils-f207ab4c.js";import{I as fe}from"./Footer-cdca4abb.js";function R(f,e,l){const r=f.slice();return r[12]=e[l],r}function U(f){let e,l,r=f[12].slogan+"",i;return{c(){e=w("div"),l=w("div"),i=V(r),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=I(e);l=E(n,"DIV",{class:!0});var c=I(l);i=z(c,r),c.forEach(v),n.forEach(v),this.h()},h(){k(l,"class","bg-pbw-red py-0.5 px-1.5 rounded-md text-white uppercase text-base"),k(e,"class","absolute top-3 -left-2.5 z-50")},m(t,n){y(t,e,n),g(e,l),g(l,i)},p(t,n){n&1&&r!==(r=t[12].slogan+"")&&q(i,r)},d(t){t&&v(e)}}}function G(f){let e,l,r,i,t,n,c;function s(p,b){return p[12].hidden?se:ae}let m=s(f),a=m(f),u=f[2]==="event"&&J(f),o=f[2]==="media-partner"&&Q(f),h=f[2]==="speaker"&&T(f),_=f[2]==="union"&&W(f),d=f[2]==="place"&&X(f);return{c(){e=w("div"),a.c(),l=A(),u&&u.c(),r=A(),o&&o.c(),i=A(),h&&h.c(),t=A(),_&&_.c(),n=A(),d&&d.c(),this.h()},l(p){e=E(p,"DIV",{class:!0});var b=I(e);a.l(b),l=O(b),u&&u.l(b),r=O(b),o&&o.l(b),i=O(b),h&&h.l(b),t=O(b),_&&_.l(b),n=O(b),d&&d.l(b),b.forEach(v),this.h()},h(){k(e,"class","mt-2")},m(p,b){y(p,e,b),a.m(e,null),g(e,l),u&&u.m(e,null),g(e,r),o&&o.m(e,null),g(e,i),h&&h.m(e,null),g(e,t),_&&_.m(e,null),g(e,n),d&&d.m(e,null),c=!0},p(p,b){m===(m=s(p))&&a?a.p(p,b):(a.d(1),a=m(p),a&&(a.c(),a.m(e,l))),p[2]==="event"?u?u.p(p,b):(u=J(p),u.c(),u.m(e,r)):u&&(u.d(1),u=null),p[2]==="media-partner"?o?o.p(p,b):(o=Q(p),o.c(),o.m(e,i)):o&&(o.d(1),o=null),p[2]==="speaker"?h?(h.p(p,b),b&4&&D(h,1)):(h=T(p),h.c(),D(h,1),h.m(e,t)):h&&(C(),S(h,1,1,()=>{h=null}),H()),p[2]==="union"?_?(_.p(p,b),b&4&&D(_,1)):(_=W(p),_.c(),D(_,1),_.m(e,n)):_&&(C(),S(_,1,1,()=>{_=null}),H()),p[2]==="place"?d?d.p(p,b):(d=X(p),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(p){c||(D(h),D(_),c=!0)},o(p){S(h),S(_),c=!1},d(p){p&&v(e),a.d(),u&&u.d(),o&&o.d(),h&&h.d(),_&&_.d(),d&&d.d()}}}function ae(f){let e,l,r=(f[12].shortname||f[12].name)+"",i,t;return{c(){e=w("h3"),l=w("a"),i=V(r),this.h()},l(n){e=E(n,"H3",{class:!0});var c=I(e);l=E(c,"A",{href:!0,class:!0});var s=I(l);i=z(s,r),s.forEach(v),c.forEach(v),this.h()},h(){k(l,"href",t=f[8](f[2],f[12])),k(l,"class","hover:underline"),k(e,"class","text-pbw-red")},m(n,c){y(n,e,c),g(e,l),g(l,i)},p(n,c){c&1&&r!==(r=(n[12].shortname||n[12].name)+"")&&q(i,r),c&5&&t!==(t=n[8](n[2],n[12]))&&k(l,"href",t)},d(n){n&&v(e)}}}function se(f){let e=(f[12].shortname||f[12].name)+"",l,r;return{c(){l=V(e),r=V("*")},l(i){l=z(i,e),r=z(i,"*")},m(i,t){y(i,l,t),y(i,r,t)},p(i,t){t&1&&e!==(e=(i[12].shortname||i[12].name)+"")&&q(l,e)},d(i){i&&v(l),i&&v(r)}}}function J(f){let e,l,r=M(f[12])+"",i,t,n=f[12].attendees&&K(f);return{c(){e=w("div"),l=w("span"),i=V(r),t=A(),n&&n.c(),this.h()},l(c){e=E(c,"DIV",{class:!0});var s=I(e);l=E(s,"SPAN",{class:!0});var m=I(l);i=z(m,r),m.forEach(v),t=O(s),n&&n.l(s),s.forEach(v),this.h()},h(){k(l,"class","font-bold"),k(e,"class","text-xl pbw-text-color-secondary my-2")},m(c,s){y(c,e,s),g(e,l),g(l,i),g(e,t),n&&n.m(e,null)},p(c,s){s&1&&r!==(r=M(c[12])+"")&&q(i,r),c[12].attendees?n?n.p(c,s):(n=K(c),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(c){c&&v(e),n&&n.d()}}}function K(f){let e,l=f[12].attendees+"",r,i;return{c(){e=w("br"),r=V(l),i=V(" ppl")},l(t){e=E(t,"BR",{}),r=z(t,l),i=z(t," ppl")},m(t,n){y(t,e,n),y(t,r,n),y(t,i,n)},p(t,n){n&1&&l!==(l=t[12].attendees+"")&&q(r,l)},d(t){t&&v(e),t&&v(r),t&&v(i)}}}function Q(f){let e,l=f[12].description+"",r;return{c(){e=w("div"),r=V(l),this.h()},l(i){e=E(i,"DIV",{class:!0});var t=I(e);r=z(t,l),t.forEach(v),this.h()},h(){k(e,"class","text-base pbw-text-color-secondary my-2")},m(i,t){y(i,e,t),g(e,r)},p(i,t){t&1&&l!==(l=i[12].description+"")&&q(r,l)},d(i){i&&v(e)}}}function T(f){let e,l,r;return l=new le({props:{source:f[12].caption}}),{c(){e=w("div"),N(l.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var t=I(e);P(l.$$.fragment,t),t.forEach(v),this.h()},h(){k(e,"class","text-base pbw-text-color-secondary my-2")},m(i,t){y(i,e,t),j(l,e,null),r=!0},p(i,t){const n={};t&1&&(n.source=i[12].caption),l.$set(n)},i(i){r||(D(l.$$.fragment,i),r=!0)},o(i){S(l.$$.fragment,i),r=!1},d(i){i&&v(e),B(l)}}}function W(f){let e,l,r;return l=new le({props:{source:f[12].description}}),{c(){e=w("div"),N(l.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var t=I(e);P(l.$$.fragment,t),t.forEach(v),this.h()},h(){k(e,"class","text-base pbw-text-color-secondary my-2")},m(i,t){y(i,e,t),j(l,e,null),r=!0},p(i,t){const n={};t&1&&(n.source=i[12].description),l.$set(n)},i(i){r||(D(l.$$.fragment,i),r=!0)},o(i){S(l.$$.fragment,i),r=!1},d(i){i&&v(e),B(l)}}}function X(f){let e,l=f[12].capacity+"",r,i;return{c(){e=w("div"),r=V(l),i=V(" ppl"),this.h()},l(t){e=E(t,"DIV",{class:!0});var n=I(e);r=z(n,l),i=z(n," ppl"),n.forEach(v),this.h()},h(){k(e,"class","text-xl pbw-text-color-secondary my-2")},m(t,n){y(t,e,n),g(e,r),g(e,i)},p(t,n){n&1&&l!==(l=t[12].capacity+"")&&q(r,l)},d(t){t&&v(e)}}}function Y(f){let e,l,r,i,t,n,c,s,m,a=f[2]==="benefit"&&U(f);t=new fe({props:{item:f[12],width:"w-full",aspect:f[4],img:f[3],rounded:f[5]==="small"?"rounded-lg":"rounded-2xl"}});let u=f[2]!=="media-partner"&&G(f);return{c(){e=w("div"),l=w("div"),a&&a.c(),r=A(),i=w("a"),N(t.$$.fragment),c=A(),u&&u.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var h=I(e);l=E(h,"DIV",{class:!0});var _=I(l);a&&a.l(_),r=O(_),i=E(_,"A",{href:!0});var d=I(i);P(t.$$.fragment,d),d.forEach(v),_.forEach(v),c=O(h),u&&u.l(h),h.forEach(v),this.h()},h(){k(i,"href",n=f[8](f[2],f[12])),k(l,"class","w-full relative"),k(e,"class",s=(f[5]==="small"?"p-0.5 lg:p-1":"p-1 lg:p-1.5")+" "+(f[12].hidden?"":"hover:bg-pbw-yellow/20 dark:hover:bg-pbw-white/10")+" "+(f[5]==="small"?"rounded-lg":"rounded-2xl"))},m(o,h){y(o,e,h),g(e,l),a&&a.m(l,null),g(l,r),g(l,i),j(t,i,null),g(e,c),u&&u.m(e,null),m=!0},p(o,h){o[2]==="benefit"?a?a.p(o,h):(a=U(o),a.c(),a.m(l,r)):a&&(a.d(1),a=null);const _={};h&1&&(_.item=o[12]),h&16&&(_.aspect=o[4]),h&8&&(_.img=o[3]),h&32&&(_.rounded=o[5]==="small"?"rounded-lg":"rounded-2xl"),t.$set(_),(!m||h&5&&n!==(n=o[8](o[2],o[12])))&&k(i,"href",n),o[2]!=="media-partner"?u?(u.p(o,h),h&4&&D(u,1)):(u=G(o),u.c(),D(u,1),u.m(e,null)):u&&(C(),S(u,1,1,()=>{u=null}),H()),(!m||h&33&&s!==(s=(o[5]==="small"?"p-0.5 lg:p-1":"p-1 lg:p-1.5")+" "+(o[12].hidden?"":"hover:bg-pbw-yellow/20 dark:hover:bg-pbw-white/10")+" "+(o[5]==="small"?"rounded-lg":"rounded-2xl")))&&k(e,"class",s)},i(o){m||(D(t.$$.fragment,o),D(u),m=!0)},o(o){S(t.$$.fragment,o),S(u),m=!1},d(o){o&&v(e),a&&a.d(),B(t),u&&u.d()}}}function Z(f){let e,l,r,i,t,n,c,s,m,a=f[2]==="event"&&$(),u=f[2]==="benefit"&&x(),o=f[2]==="speaker"&&ee(f);return{c(){e=w("div"),l=w("div"),r=w("div"),i=V("+"),t=A(),n=w("div"),a&&a.c(),c=A(),u&&u.c(),s=A(),o&&o.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var _=I(e);l=E(_,"DIV",{class:!0});var d=I(l);r=E(d,"DIV",{class:!0});var p=I(r);i=z(p,"+"),p.forEach(v),t=O(d),n=E(d,"DIV",{});var b=I(n);a&&a.l(b),c=O(b),u&&u.l(b),s=O(b),o&&o.l(b),b.forEach(v),d.forEach(v),_.forEach(v),this.h()},h(){k(r,"class","text-6xl"),k(l,"class","p-4"),k(e,"class",m="flex text-gray-400 dark:text-gray-200 self-start "+(f[2]==="event"?"mt-8":""))},m(h,_){y(h,e,_),g(e,l),g(l,r),g(r,i),g(l,t),g(l,n),a&&a.m(n,null),g(n,c),u&&u.m(n,null),g(n,s),o&&o.m(n,null)},p(h,_){h[2]==="event"?a||(a=$(),a.c(),a.m(n,c)):a&&(a.d(1),a=null),h[2]==="benefit"?u||(u=x(),u.c(),u.m(n,s)):u&&(u.d(1),u=null),h[2]==="speaker"?o?o.p(h,_):(o=ee(h),o.c(),o.m(n,null)):o&&(o.d(1),o=null),_&4&&m!==(m="flex text-gray-400 dark:text-gray-200 self-start "+(h[2]==="event"?"mt-8":""))&&k(e,"class",m)},d(h){h&&v(e),a&&a.d(),u&&u.d(),o&&o.d()}}}function $(f){let e,l;return{c(){e=w("a"),l=V("Host your own event!"),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0});var i=I(e);l=z(i,"Host your own event!"),i.forEach(v),this.h()},h(){k(e,"href","https://guide.prgblockweek.com/event-host-guide"),k(e,"target","_blank"),k(e,"class","underline hover:no-underline")},m(r,i){y(r,e,i),g(e,l)},d(r){r&&v(e)}}}function x(f){let e,l;return{c(){e=w("a"),l=V("Offer visitors your own benefit!"),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0});var i=I(e);l=z(i,"Offer visitors your own benefit!"),i.forEach(v),this.h()},h(){k(e,"href","https://guide.prgblockweek.com/event-host-guide"),k(e,"target","_blank"),k(e,"class","underline hover:no-underline")},m(r,i){y(r,e,i),g(e,l)},d(r){r&&v(e)}}}function ee(f){let e,l,r;return{c(){e=w("a"),l=V("Participate as a speaker!"),this.h()},l(i){e=E(i,"A",{href:!0,class:!0});var t=I(e);l=z(t,"Participate as a speaker!"),t.forEach(v),this.h()},h(){k(e,"href",r="/"+f[1]+"/for-speakers"),k(e,"class","underline hover:no-underline")},m(i,t){y(i,e,t),g(e,l)},p(i,t){t&2&&r!==(r="/"+i[1]+"/for-speakers")&&k(e,"href",r)},d(i){i&&v(e)}}}function oe(f){let e,l,r,i=f[0].map(f[11]),t=[];for(let s=0;s<i.length;s+=1)t[s]=Y(R(f,i,s));const n=s=>S(t[s],1,1,()=>{t[s]=null});let c=f[6]&&Z(f);return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=A(),c&&c.c(),l=F()},l(s){for(let m=0;m<t.length;m+=1)t[m].l(s);e=O(s),c&&c.l(s),l=F()},m(s,m){for(let a=0;a<t.length;a+=1)t[a].m(s,m);y(s,e,m),c&&c.m(s,m),y(s,l,m),r=!0},p(s,[m]){if(m&445){i=s[0].map(s[11]);let a;for(a=0;a<i.length;a+=1){const u=R(s,i,a);t[a]?(t[a].p(u,m),D(t[a],1)):(t[a]=Y(u),t[a].c(),D(t[a],1),t[a].m(e.parentNode,e))}for(C(),a=i.length;a<t.length;a+=1)n(a);H()}s[6]?c?c.p(s,m):(c=Z(s),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},i(s){if(!r){for(let m=0;m<i.length;m+=1)D(t[m]);r=!0}},o(s){t=t.filter(Boolean);for(let m=0;m<t.length;m+=1)S(t[m]);r=!1},d(s){ne(t,s),s&&v(e),c&&c.d(s),s&&v(l)}}}function ue(f,e,l){let{arr:r}=e,{entry:i="23"}=e,{col:t="speaker"}=e,{img:n="photoUrl"}=e,{aspect:c="aspect-square"}=e,{size:s="normal"}=e,{offer:m=!1}=e,{bundle:a=null}=e,{currentItem:u=null}=e;function o(d){if(!a)return d;if(t==="speaker"&&!d.name){let p=null;for(const b of a.events)if(b.speakers&&(p=b.speakers.find(L=>L.id===d.id&&L.name),p))break;Object.assign(d,p||{})}return d}const h=(d,p)=>p.hidden?"":`/${i}/${d}/${p.id}`,_=d=>o(d);return f.$$set=d=>{"arr"in d&&l(0,r=d.arr),"entry"in d&&l(1,i=d.entry),"col"in d&&l(2,t=d.col),"img"in d&&l(3,n=d.img),"aspect"in d&&l(4,c=d.aspect),"size"in d&&l(5,s=d.size),"offer"in d&&l(6,m=d.offer),"bundle"in d&&l(9,a=d.bundle),"currentItem"in d&&l(10,u=d.currentItem)},[r,i,t,n,c,s,m,o,h,a,u,_]}class _e extends te{constructor(e){super(),ie(this,e,ue,oe,re,{arr:0,entry:1,col:2,img:3,aspect:4,size:5,offer:6,bundle:9,currentItem:10})}}export{_e as C};