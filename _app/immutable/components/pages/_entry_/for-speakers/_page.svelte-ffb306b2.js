import{S as re,i as ne,s as oe,a as C,w as T,k as v,q as W,L as ie,h as d,c as x,x as U,l as _,m as g,r as B,n as m,b as j,y as X,F as r,f as N,d as fe,t as O,z as Y,M as ce,K as ue,u as Q,g as de}from"../../../../chunks/index-41559e88.js";import{p as he}from"../../../../chunks/stores-ec53abc6.js";import{F as me,I as pe}from"../../../../chunks/Footer-e8b834db.js";import{H as ve}from"../../../../chunks/Header-a6deb8ad.js";import{f as ee}from"../../../../chunks/utils-70a92022.js";function te(c,a,u){const o=c.slice();return o[2]=a[u],o}function ae(c){let a,u=c[2].cfp.text+"",o;return{c(){a=v("div"),o=W(u),this.h()},l(h){a=_(h,"DIV",{class:!0});var f=g(a);o=B(f,u),f.forEach(d),this.h()},h(){m(a,"class","mt-2")},m(h,f){j(h,a,f),r(a,o)},p(h,f){f&1&&u!==(u=h[2].cfp.text+"")&&Q(o,u)},d(h){h&&d(a)}}}function le(c){let a,u,o,h,f,b,p=c[2].name+"",V,A,S,k,q,F,I=ee(c[2],{full:!0})+"",H,z,P,w,D,$,E=c[2].cfp.link+"",n,L,e,s;o=new pe({props:{item:c[2],width:"w-12"}});let i=c[2].cfp.text&&ae(c);return{c(){a=v("div"),u=v("div"),T(o.$$.fragment),h=C(),f=v("div"),b=v("a"),V=W(p),S=C(),k=v("div"),q=W("Date: "),F=v("span"),H=W(I),z=C(),i&&i.c(),P=C(),w=v("div"),D=W("CfP link: "),$=v("a"),n=W(E),e=C(),this.h()},l(t){a=_(t,"DIV",{class:!0});var l=g(a);u=_(l,"DIV",{class:!0});var y=g(u);U(o.$$.fragment,y),h=x(y),f=_(y,"DIV",{});var G=g(f);b=_(G,"A",{href:!0,class:!0});var J=g(b);V=B(J,p),J.forEach(d),G.forEach(d),y.forEach(d),S=x(l),k=_(l,"DIV",{class:!0});var K=g(k);q=B(K,"Date: "),F=_(K,"SPAN",{});var M=g(F);H=B(M,I),M.forEach(d),K.forEach(d),z=x(l),i&&i.l(l),P=x(l),w=_(l,"DIV",{class:!0});var R=g(w);D=B(R,"CfP link: "),$=_(R,"A",{href:!0,target:!0,class:!0});var Z=g($);n=B(Z,E),Z.forEach(d),R.forEach(d),e=x(l),l.forEach(d),this.h()},h(){m(b,"href",A="/"+c[1].params.entry+"/event/"+c[2].id),m(b,"class","text-pbw-red hover:underline"),m(u,"class","flex items-center h-14 gap-2 text-3xl"),m(k,"class","mt-2"),m($,"href",L=c[2].cfp.link),m($,"target","_blank"),m($,"class","underline hover:no-underline"),m(w,"class","mt-2"),m(a,"class","mb-10 text-xl")},m(t,l){j(t,a,l),r(a,u),X(o,u,null),r(u,h),r(u,f),r(f,b),r(b,V),r(a,S),r(a,k),r(k,q),r(k,F),r(F,H),r(a,z),i&&i.m(a,null),r(a,P),r(a,w),r(w,D),r(w,$),r($,n),r(a,e),s=!0},p(t,l){const y={};l&1&&(y.item=t[2]),o.$set(y),(!s||l&1)&&p!==(p=t[2].name+"")&&Q(V,p),(!s||l&3&&A!==(A="/"+t[1].params.entry+"/event/"+t[2].id))&&m(b,"href",A),(!s||l&1)&&I!==(I=ee(t[2],{full:!0})+"")&&Q(H,I),t[2].cfp.text?i?i.p(t,l):(i=ae(t),i.c(),i.m(a,P)):i&&(i.d(1),i=null),(!s||l&1)&&E!==(E=t[2].cfp.link+"")&&Q(n,E),(!s||l&1&&L!==(L=t[2].cfp.link))&&m($,"href",L)},i(t){s||(N(o.$$.fragment,t),s=!0)},o(t){O(o.$$.fragment,t),s=!1},d(t){t&&d(a),Y(o),i&&i.d()}}}function _e(c){let a,u,o,h,f,b,p,V,A,S,k,q,F,I,H,z,P,w,D,$;document.title=a="For speakers | #PBW"+c[1].params.entry,o=new ve({props:{path:"schedule",type:"for-speakers"}});let E=c[0].bundle.events.filter(se),n=[];for(let e=0;e<E.length;e+=1)n[e]=le(te(c,E,e));const L=e=>O(n[e],1,1,()=>{n[e]=null});return D=new me({props:{bundle:c[0].bundle}}),{c(){u=C(),T(o.$$.fragment),h=C(),f=v("div"),b=v("div"),p=v("div"),V=v("h2"),A=W("For speakers"),S=C(),k=v("div"),q=W(`Want to participate in #PBW23 and be a speaker at one of the events? In the following list
				you will find events that have open CfP for anyone.`),F=C(),I=v("div"),H=W(`CfP means "Call for Papers" and it is a proposal system for talks or other content. Please
				learn in detail about the focus of each conference or event before submitting a proposal.`),z=C(),P=v("div");for(let e=0;e<n.length;e+=1)n[e].c();w=C(),T(D.$$.fragment),this.h()},l(e){ie("svelte-1nzlb9w",document.head).forEach(d),u=x(e),U(o.$$.fragment,e),h=x(e),f=_(e,"DIV",{class:!0});var i=g(f);b=_(i,"DIV",{class:!0});var t=g(b);p=_(t,"DIV",{class:!0});var l=g(p);V=_(l,"H2",{class:!0});var y=g(V);A=B(y,"For speakers"),y.forEach(d),S=x(l),k=_(l,"DIV",{class:!0});var G=g(k);q=B(G,`Want to participate in #PBW23 and be a speaker at one of the events? In the following list
				you will find events that have open CfP for anyone.`),G.forEach(d),F=x(l),I=_(l,"DIV",{class:!0});var J=g(I);H=B(J,`CfP means "Call for Papers" and it is a proposal system for talks or other content. Please
				learn in detail about the focus of each conference or event before submitting a proposal.`),J.forEach(d),z=x(l),P=_(l,"DIV",{class:!0});var K=g(P);for(let M=0;M<n.length;M+=1)n[M].l(K);K.forEach(d),l.forEach(d),t.forEach(d),i.forEach(d),w=x(e),U(D.$$.fragment,e),this.h()},h(){m(V,"class","text-2xl uppercase font-bold pbw-text-color-secondary"),m(k,"class","text-xl mt-4"),m(I,"class","text-xl mt-2"),m(P,"class","mt-10"),m(p,"class","mx-4 xl:mx-0"),m(b,"class","max-w-7xl mx-auto pt-5 md:pt-10"),m(f,"class","w-full")},m(e,s){j(e,u,s),X(o,e,s),j(e,h,s),j(e,f,s),r(f,b),r(b,p),r(p,V),r(V,A),r(p,S),r(p,k),r(k,q),r(p,F),r(p,I),r(I,H),r(p,z),r(p,P);for(let i=0;i<n.length;i+=1)n[i].m(P,null);j(e,w,s),X(D,e,s),$=!0},p(e,[s]){if((!$||s&2)&&a!==(a="For speakers | #PBW"+e[1].params.entry)&&(document.title=a),s&3){E=e[0].bundle.events.filter(se);let t;for(t=0;t<E.length;t+=1){const l=te(e,E,t);n[t]?(n[t].p(l,s),N(n[t],1)):(n[t]=le(l),n[t].c(),N(n[t],1),n[t].m(P,null))}for(de(),t=E.length;t<n.length;t+=1)L(t);fe()}const i={};s&1&&(i.bundle=e[0].bundle),D.$set(i)},i(e){if(!$){N(o.$$.fragment,e);for(let s=0;s<E.length;s+=1)N(n[s]);N(D.$$.fragment,e),$=!0}},o(e){O(o.$$.fragment,e),n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)O(n[s]);O(D.$$.fragment,e),$=!1},d(e){e&&d(u),Y(o,e),e&&d(h),e&&d(f),ce(n,e),e&&d(w),Y(D,e)}}}const se=c=>c.cfp;function ge(c,a,u){let o;ue(c,he,f=>u(1,o=f));let{data:h}=a;return c.$$set=f=>{"data"in f&&u(0,h=f.data)},[h,o]}class Pe extends re{constructor(a){super(),ne(this,a,ge,_e,oe,{data:0})}}export{Pe as default};
