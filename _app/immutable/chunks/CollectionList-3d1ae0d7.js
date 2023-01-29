import{S as re,i as ae,s as ne,a as A,e as U,c as S,b as V,f as z,g as N,d as j,t as H,J as fe,h as _,k as I,w as B,l as E,m as D,x as L,n as p,H as b,y as J,z as M,q as O,r as q,u as C}from"./index-ca7dbb83.js";import{f as F,S as ie}from"./utils-04f3c5f5.js";import{I as se}from"./Footer-158db6a7.js";function G(n,e,l){const r=n.slice();return r[12]=e[l],r}function K(n){let e,l,r=n[12].slogan+"",i;return{c(){e=I("div"),l=I("div"),i=O(r),this.h()},l(t){e=E(t,"DIV",{class:!0});var a=D(e);l=E(a,"DIV",{class:!0});var c=D(l);i=q(c,r),c.forEach(_),a.forEach(_),this.h()},h(){p(l,"class","bg-pbw-red py-0.5 px-1.5 rounded-md text-white uppercase text-base"),p(e,"class","absolute top-3 -left-4")},m(t,a){V(t,e,a),b(e,l),b(l,i)},p(t,a){a&1&&r!==(r=t[12].slogan+"")&&C(i,r)},d(t){t&&_(e)}}}function Q(n){let e,l,r,i=(n[12].shortname||n[12].name)+"",t,a,c,f,u,s,d,h,m=n[1]==="event"&&T(n),v=n[1]==="media-partner"&&X(n),o=n[1]==="speaker"&&Y(n),k=n[1]==="union"&&Z(n),y=n[1]==="place"&&$(n);return{c(){e=I("div"),l=I("h3"),r=I("a"),t=O(i),c=A(),m&&m.c(),f=A(),v&&v.c(),u=A(),o&&o.c(),s=A(),k&&k.c(),d=A(),y&&y.c(),this.h()},l(g){e=E(g,"DIV",{class:!0});var w=D(e);l=E(w,"H3",{class:!0});var P=D(l);r=E(P,"A",{href:!0,class:!0});var R=D(r);t=q(R,i),R.forEach(_),P.forEach(_),c=S(w),m&&m.l(w),f=S(w),v&&v.l(w),u=S(w),o&&o.l(w),s=S(w),k&&k.l(w),d=S(w),y&&y.l(w),w.forEach(_),this.h()},h(){p(r,"href",a=n[7](n[1],n[12])),p(r,"class","hover:underline"),p(l,"class","text-pbw-red"),p(e,"class","mt-2")},m(g,w){V(g,e,w),b(e,l),b(l,r),b(r,t),b(e,c),m&&m.m(e,null),b(e,f),v&&v.m(e,null),b(e,u),o&&o.m(e,null),b(e,s),k&&k.m(e,null),b(e,d),y&&y.m(e,null),h=!0},p(g,w){(!h||w&1)&&i!==(i=(g[12].shortname||g[12].name)+"")&&C(t,i),(!h||w&3&&a!==(a=g[7](g[1],g[12])))&&p(r,"href",a),g[1]==="event"?m?m.p(g,w):(m=T(g),m.c(),m.m(e,f)):m&&(m.d(1),m=null),g[1]==="media-partner"?v?v.p(g,w):(v=X(g),v.c(),v.m(e,u)):v&&(v.d(1),v=null),g[1]==="speaker"?o?(o.p(g,w),w&2&&z(o,1)):(o=Y(g),o.c(),z(o,1),o.m(e,s)):o&&(N(),H(o,1,1,()=>{o=null}),j()),g[1]==="union"?k?(k.p(g,w),w&2&&z(k,1)):(k=Z(g),k.c(),z(k,1),k.m(e,d)):k&&(N(),H(k,1,1,()=>{k=null}),j()),g[1]==="place"?y?y.p(g,w):(y=$(g),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},i(g){h||(z(o),z(k),h=!0)},o(g){H(o),H(k),h=!1},d(g){g&&_(e),m&&m.d(),v&&v.d(),o&&o.d(),k&&k.d(),y&&y.d()}}}function T(n){let e,l,r=F(n[12])+"",i,t,a=n[12].attendees&&W(n);return{c(){e=I("div"),l=I("span"),i=O(r),t=A(),a&&a.c(),this.h()},l(c){e=E(c,"DIV",{class:!0});var f=D(e);l=E(f,"SPAN",{class:!0});var u=D(l);i=q(u,r),u.forEach(_),t=S(f),a&&a.l(f),f.forEach(_),this.h()},h(){p(l,"class","font-bold"),p(e,"class","text-xl text-gray-500 dark:text-gray-400 my-2")},m(c,f){V(c,e,f),b(e,l),b(l,i),b(e,t),a&&a.m(e,null)},p(c,f){f&1&&r!==(r=F(c[12])+"")&&C(i,r),c[12].attendees?a?a.p(c,f):(a=W(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(c){c&&_(e),a&&a.d()}}}function W(n){let e,l=n[12].attendees+"",r,i;return{c(){e=I("br"),r=O(l),i=O(" ppl")},l(t){e=E(t,"BR",{}),r=q(t,l),i=q(t," ppl")},m(t,a){V(t,e,a),V(t,r,a),V(t,i,a)},p(t,a){a&1&&l!==(l=t[12].attendees+"")&&C(r,l)},d(t){t&&_(e),t&&_(r),t&&_(i)}}}function X(n){let e,l=n[12].description+"",r;return{c(){e=I("div"),r=O(l),this.h()},l(i){e=E(i,"DIV",{class:!0});var t=D(e);r=q(t,l),t.forEach(_),this.h()},h(){p(e,"class","text-base text-gray-500 dark:text-gray-400 my-2")},m(i,t){V(i,e,t),b(e,r)},p(i,t){t&1&&l!==(l=i[12].description+"")&&C(r,l)},d(i){i&&_(e)}}}function Y(n){let e,l,r;return l=new ie({props:{source:n[12].caption}}),{c(){e=I("div"),B(l.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var t=D(e);L(l.$$.fragment,t),t.forEach(_),this.h()},h(){p(e,"class","text-base text-gray-500 dark:text-gray-400 my-2")},m(i,t){V(i,e,t),J(l,e,null),r=!0},p(i,t){const a={};t&1&&(a.source=i[12].caption),l.$set(a)},i(i){r||(z(l.$$.fragment,i),r=!0)},o(i){H(l.$$.fragment,i),r=!1},d(i){i&&_(e),M(l)}}}function Z(n){let e,l,r;return l=new ie({props:{source:n[12].description}}),{c(){e=I("div"),B(l.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var t=D(e);L(l.$$.fragment,t),t.forEach(_),this.h()},h(){p(e,"class","text-base text-gray-500 dark:text-gray-400 my-2")},m(i,t){V(i,e,t),J(l,e,null),r=!0},p(i,t){const a={};t&1&&(a.source=i[12].description),l.$set(a)},i(i){r||(z(l.$$.fragment,i),r=!0)},o(i){H(l.$$.fragment,i),r=!1},d(i){i&&_(e),M(l)}}}function $(n){let e,l=n[12].capacity+"",r,i;return{c(){e=I("div"),r=O(l),i=O(" ppl"),this.h()},l(t){e=E(t,"DIV",{class:!0});var a=D(e);r=q(a,l),i=q(a," ppl"),a.forEach(_),this.h()},h(){p(e,"class","text-xl text-gray-500 dark:text-gray-400 my-2")},m(t,a){V(t,e,a),b(e,r),b(e,i)},p(t,a){a&1&&l!==(l=t[12].capacity+"")&&C(r,l)},d(t){t&&_(e)}}}function x(n){let e,l,r,i,t,a,c,f,u,s=n[1]==="benefit"&&K(n);t=new se({props:{item:n[12],width:"w-full",aspect:n[3],img:n[2],rounded:n[4]==="small"?"rounded-lg":"rounded-2xl"}});let d=n[1]!=="media-partner"&&Q(n);return{c(){e=I("div"),l=I("div"),s&&s.c(),r=A(),i=I("a"),B(t.$$.fragment),c=A(),d&&d.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var m=D(e);l=E(m,"DIV",{class:!0});var v=D(l);s&&s.l(v),r=S(v),i=E(v,"A",{href:!0});var o=D(i);L(t.$$.fragment,o),o.forEach(_),v.forEach(_),c=S(m),d&&d.l(m),m.forEach(_),this.h()},h(){p(i,"href",a=n[7](n[1],n[12])),p(l,"class","w-full relative"),p(e,"class",f=(n[4]==="small"?"p-0.5 lg:p-1":"p-1 lg:p-1.5")+" hover:bg-pbw-yellow/20 dark:hover:bg-pbw-white/10 "+(n[4]==="small"?"rounded-lg":"rounded-2xl"))},m(h,m){V(h,e,m),b(e,l),s&&s.m(l,null),b(l,r),b(l,i),J(t,i,null),b(e,c),d&&d.m(e,null),u=!0},p(h,m){h[1]==="benefit"?s?s.p(h,m):(s=K(h),s.c(),s.m(l,r)):s&&(s.d(1),s=null);const v={};m&1&&(v.item=h[12]),m&8&&(v.aspect=h[3]),m&4&&(v.img=h[2]),m&16&&(v.rounded=h[4]==="small"?"rounded-lg":"rounded-2xl"),t.$set(v),(!u||m&3&&a!==(a=h[7](h[1],h[12])))&&p(i,"href",a),h[1]!=="media-partner"?d?(d.p(h,m),m&2&&z(d,1)):(d=Q(h),d.c(),z(d,1),d.m(e,null)):d&&(N(),H(d,1,1,()=>{d=null}),j()),(!u||m&16&&f!==(f=(h[4]==="small"?"p-0.5 lg:p-1":"p-1 lg:p-1.5")+" hover:bg-pbw-yellow/20 dark:hover:bg-pbw-white/10 "+(h[4]==="small"?"rounded-lg":"rounded-2xl")))&&p(e,"class",f)},i(h){u||(z(t.$$.fragment,h),z(d),u=!0)},o(h){H(t.$$.fragment,h),H(d),u=!1},d(h){h&&_(e),s&&s.d(),M(t),d&&d.d()}}}function ee(n){let e,l,r,i,t,a,c,f,u=n[1]==="event"&&le(),s=n[1]==="benefit"&&te();return{c(){e=I("div"),l=I("div"),r=I("div"),i=O("+"),t=A(),a=I("div"),u&&u.c(),c=A(),s&&s.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var h=D(e);l=E(h,"DIV",{class:!0});var m=D(l);r=E(m,"DIV",{class:!0});var v=D(r);i=q(v,"+"),v.forEach(_),t=S(m),a=E(m,"DIV",{});var o=D(a);u&&u.l(o),c=S(o),s&&s.l(o),o.forEach(_),m.forEach(_),h.forEach(_),this.h()},h(){p(r,"class","text-6xl"),p(l,"class","p-4"),p(e,"class",f="flex text-gray-400 self-start "+(n[1]==="event"?"mt-8":""))},m(d,h){V(d,e,h),b(e,l),b(l,r),b(r,i),b(l,t),b(l,a),u&&u.m(a,null),b(a,c),s&&s.m(a,null)},p(d,h){d[1]==="event"?u||(u=le(),u.c(),u.m(a,c)):u&&(u.d(1),u=null),d[1]==="benefit"?s||(s=te(),s.c(),s.m(a,null)):s&&(s.d(1),s=null),h&2&&f!==(f="flex text-gray-400 self-start "+(d[1]==="event"?"mt-8":""))&&p(e,"class",f)},d(d){d&&_(e),u&&u.d(),s&&s.d()}}}function le(n){let e,l;return{c(){e=I("a"),l=O("Host your own event!"),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0});var i=D(e);l=q(i,"Host your own event!"),i.forEach(_),this.h()},h(){p(e,"href","https://guide.prgblockweek.com/event-host-guide"),p(e,"target","_blank"),p(e,"class","underline hover:no-underline")},m(r,i){V(r,e,i),b(e,l)},d(r){r&&_(e)}}}function te(n){let e,l;return{c(){e=I("a"),l=O("Offer visitors your own benefit!"),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0});var i=D(e);l=q(i,"Offer visitors your own benefit!"),i.forEach(_),this.h()},h(){p(e,"href","https://guide.prgblockweek.com/event-host-guide"),p(e,"target","_blank"),p(e,"class","underline hover:no-underline")},m(r,i){V(r,e,i),b(e,l)},d(r){r&&_(e)}}}function oe(n){let e,l,r,i=n[0].map(n[11]),t=[];for(let f=0;f<i.length;f+=1)t[f]=x(G(n,i,f));const a=f=>H(t[f],1,1,()=>{t[f]=null});let c=n[5]&&ee(n);return{c(){for(let f=0;f<t.length;f+=1)t[f].c();e=A(),c&&c.c(),l=U()},l(f){for(let u=0;u<t.length;u+=1)t[u].l(f);e=S(f),c&&c.l(f),l=U()},m(f,u){for(let s=0;s<t.length;s+=1)t[s].m(f,u);V(f,e,u),c&&c.m(f,u),V(f,l,u),r=!0},p(f,[u]){if(u&223){i=f[0].map(f[11]);let s;for(s=0;s<i.length;s+=1){const d=G(f,i,s);t[s]?(t[s].p(d,u),z(t[s],1)):(t[s]=x(d),t[s].c(),z(t[s],1),t[s].m(e.parentNode,e))}for(N(),s=i.length;s<t.length;s+=1)a(s);j()}f[5]?c?c.p(f,u):(c=ee(f),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},i(f){if(!r){for(let u=0;u<i.length;u+=1)z(t[u]);r=!0}},o(f){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)H(t[u]);r=!1},d(f){fe(t,f),f&&_(e),c&&c.d(f),f&&_(l)}}}function ue(n,e,l){let{arr:r}=e,{entry:i="23"}=e,{col:t="speaker"}=e,{img:a="photoUrl"}=e,{aspect:c="aspect-square"}=e,{size:f="normal"}=e,{offer:u=!1}=e,{bundle:s}=e,{currentItem:d}=e;function h(o){if(t==="speaker"&&!o.name){let k=null;for(const y of s.events)y.speakers&&(d&&y.id===d.id||(k=y.speakers.find(g=>g.id===o.id)));Object.assign(o,k)}return o}const m=(o,k)=>`/${i}/${o}/${k.id}`,v=o=>h(o);return n.$$set=o=>{"arr"in o&&l(0,r=o.arr),"entry"in o&&l(8,i=o.entry),"col"in o&&l(1,t=o.col),"img"in o&&l(2,a=o.img),"aspect"in o&&l(3,c=o.aspect),"size"in o&&l(4,f=o.size),"offer"in o&&l(5,u=o.offer),"bundle"in o&&l(9,s=o.bundle),"currentItem"in o&&l(10,d=o.currentItem)},[r,t,a,c,f,u,h,m,i,s,d,v]}class me extends re{constructor(e){super(),ae(this,e,ue,oe,ne,{arr:0,entry:8,col:1,img:2,aspect:3,size:4,offer:5,bundle:9,currentItem:10})}}export{me as C};
