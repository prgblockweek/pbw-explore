import{S as Se,i as Ue,s as qe,a as $,e as de,I as Me,h as s,c as V,b as c,f as Q,t as Z,d as ue,G as We,o as Fe,k as d,q,w as Ae,l as p,m as b,r as M,x as Ne,n as D,H as v,y as $e,u as L,g as ne,J as Ve,z as je,K as ie,B as le}from"../../../../chunks/index-11c878f8.js";import{p as Ge}from"../../../../chunks/stores-b90b4c3f.js";import{j as g}from"../../../../chunks/singletons-89b665b0.js";import{F as Oe,f as pe,g as ae,S as Re}from"../../../../chunks/Footer-ce6674ad.js";const re={collections:{events:{title:"Events",model:"event"},speakers:{title:"Speakers",model:"speaker"}}};g.disable_scroll_handling;const ze=g.goto;g.invalidate;g.invalidateAll;g.preload_data;g.preload_code;g.before_navigate;g.after_navigate;function be(u,f,r){const t=u.slice();return t[8]=f[r],t}function Ee(u,f,r){const t=u.slice();return t[11]=f[r],t}function ke(u){let f,r,t,i,l,e,a,h,y,A,k,T,U=u[4].title+"",m,w,W=u[3].length+"",_,I,F,z,G,P,n,B,C,J,Y,O,j,o=u[1]==="events"&&Te(),E=u[1]==="speakers"&&we(),X=u[3],S=[];for(let H=0;H<X.length;H+=1)S[H]=Be(be(u,X,H));const te=H=>Z(S[H],1,1,()=>{S[H]=null});return O=new Oe({props:{bundle:u[0].bundle}}),{c(){f=d("div"),r=d("div"),t=d("div"),i=d("div"),l=d("h1"),e=d("a"),a=q("#PBW23"),y=$(),A=d("div"),k=$(),T=d("h2"),m=q(U),w=q(" ("),_=q(W),I=q(")"),F=$(),z=d("div"),G=d("table"),P=d("thead"),n=d("tr"),o&&o.c(),B=$(),E&&E.c(),C=$(),J=d("tbody");for(let H=0;H<S.length;H+=1)S[H].c();Y=$(),Ae(O.$$.fragment),this.h()},l(H){f=p(H,"DIV",{class:!0});var R=b(f);r=p(R,"DIV",{class:!0});var K=b(r);t=p(K,"DIV",{class:!0});var N=b(t);i=p(N,"DIV",{class:!0});var x=b(i);l=p(x,"H1",{class:!0});var _e=b(l);e=p(_e,"A",{href:!0});var ce=b(e);a=M(ce,"#PBW23"),ce.forEach(s),_e.forEach(s),x.forEach(s),y=V(N),A=p(N,"DIV",{class:!0});var Pe=b(A);Pe.forEach(s),k=V(N),T=p(N,"H2",{class:!0});var ee=b(T);m=M(ee,U),w=M(ee," ("),_=M(ee,W),I=M(ee,")"),ee.forEach(s),F=V(N),z=p(N,"DIV",{class:!0});var he=b(z);G=p(he,"TABLE",{class:!0});var fe=b(G);P=p(fe,"THEAD",{});var me=b(P);n=p(me,"TR",{class:!0});var se=b(n);o&&o.l(se),B=V(se),E&&E.l(se),se.forEach(s),me.forEach(s),C=V(fe),J=p(fe,"TBODY",{});var ve=b(J);for(let oe=0;oe<S.length;oe+=1)S[oe].l(ve);ve.forEach(s),fe.forEach(s),he.forEach(s),Y=V(N),Ne(O.$$.fragment,N),N.forEach(s),K.forEach(s),R.forEach(s),this.h()},h(){D(e,"href",h="/"+u[2].params.entry),D(l,"class","text-5xl uppercase font-bold text-pbw-red"),D(i,"class","flex gap-8 mb-10"),D(A,"class","flex flex-wrap md:flex-nowrap w-full"),D(T,"class","text-2xl uppercase font-bold text-gray-500"),D(n,"class","text-left"),D(G,"class","w-full"),D(z,"class","text-xl mt-6"),D(t,"class","mx-4 xl:mx-0"),D(r,"class","max-w-7xl mx-auto pt-5 md:pt-10"),D(f,"class","w-full")},m(H,R){c(H,f,R),v(f,r),v(r,t),v(t,i),v(i,l),v(l,e),v(e,a),v(t,y),v(t,A),v(t,k),v(t,T),v(T,m),v(T,w),v(T,_),v(T,I),v(t,F),v(t,z),v(z,G),v(G,P),v(P,n),o&&o.m(n,null),v(n,B),E&&E.m(n,null),v(G,C),v(G,J);for(let K=0;K<S.length;K+=1)S[K].m(J,null);v(t,Y),$e(O,t,null),j=!0},p(H,R){if((!j||R&4&&h!==(h="/"+H[2].params.entry))&&D(e,"href",h),(!j||R&16)&&U!==(U=H[4].title+"")&&L(m,U),(!j||R&8)&&W!==(W=H[3].length+"")&&L(_,W),H[1]==="events"?o||(o=Te(),o.c(),o.m(n,B)):o&&(o.d(1),o=null),H[1]==="speakers"?E||(E=we(),E.c(),E.m(n,null)):E&&(E.d(1),E=null),R&58){X=H[3];let N;for(N=0;N<X.length;N+=1){const x=be(H,X,N);S[N]?(S[N].p(x,R),Q(S[N],1)):(S[N]=Be(x),S[N].c(),Q(S[N],1),S[N].m(J,null))}for(ne(),N=X.length;N<S.length;N+=1)te(N);ue()}const K={};R&1&&(K.bundle=H[0].bundle),O.$set(K)},i(H){if(!j){for(let R=0;R<X.length;R+=1)Q(S[R]);Q(O.$$.fragment,H),j=!0}},o(H){S=S.filter(Boolean);for(let R=0;R<S.length;R+=1)Z(S[R]);Z(O.$$.fragment,H),j=!1},d(H){H&&s(f),o&&o.d(),E&&E.d(),Ve(S,H),je(O)}}}function Te(u){let f,r,t,i,l,e,a,h,y,A,k,T,U,m,w,W;return{c(){f=d("th"),r=q("📅"),t=$(),i=d("th"),l=$(),e=d("th"),a=q("Name"),h=$(),y=d("th"),A=q("Type"),k=$(),T=d("th"),U=q("📍"),m=$(),w=d("th"),W=q("👥"),this.h()},l(_){f=p(_,"TH",{class:!0});var I=b(f);r=M(I,"📅"),I.forEach(s),t=V(_),i=p(_,"TH",{}),b(i).forEach(s),l=V(_),e=p(_,"TH",{});var F=b(e);a=M(F,"Name"),F.forEach(s),h=V(_),y=p(_,"TH",{});var z=b(y);A=M(z,"Type"),z.forEach(s),k=V(_),T=p(_,"TH",{});var G=b(T);U=M(G,"📍"),G.forEach(s),m=V(_),w=p(_,"TH",{});var P=b(w);W=M(P,"👥"),P.forEach(s),this.h()},h(){D(f,"class","text-right pr-4")},m(_,I){c(_,f,I),v(f,r),c(_,t,I),c(_,i,I),c(_,l,I),c(_,e,I),v(e,a),c(_,h,I),c(_,y,I),v(y,A),c(_,k,I),c(_,T,I),v(T,U),c(_,m,I),c(_,w,I),v(w,W)},d(_){_&&s(f),_&&s(t),_&&s(i),_&&s(l),_&&s(e),_&&s(h),_&&s(y),_&&s(k),_&&s(T),_&&s(m),_&&s(w)}}}function we(u){let f,r,t,i,l,e,a,h,y,A,k,T,U;return{c(){f=d("th"),r=$(),t=d("th"),i=q("Name"),l=$(),e=d("th"),a=q("🌎"),h=$(),y=d("th"),A=q("🐦"),k=$(),T=d("th"),U=q("Bio")},l(m){f=p(m,"TH",{}),b(f).forEach(s),r=V(m),t=p(m,"TH",{});var w=b(t);i=M(w,"Name"),w.forEach(s),l=V(m),e=p(m,"TH",{});var W=b(e);a=M(W,"🌎"),W.forEach(s),h=V(m),y=p(m,"TH",{});var _=b(y);A=M(_,"🐦"),_.forEach(s),k=V(m),T=p(m,"TH",{});var I=b(T);U=M(I,"Bio"),I.forEach(s)},m(m,w){c(m,f,w),c(m,r,w),c(m,t,w),v(t,i),c(m,l,w),c(m,e,w),v(e,a),c(m,h,w),c(m,y,w),v(y,A),c(m,k,w),c(m,T,w),v(T,U)},d(m){m&&s(f),m&&s(r),m&&s(t),m&&s(l),m&&s(e),m&&s(h),m&&s(y),m&&s(k),m&&s(T)}}}function De(u){let f,r=pe(u[8])+"",t,i,l,e,a,h,y,A,k=u[8].name+"",T,U,m,w,W=u[8].types.join(", ")+"",_,I,F,z,G,P=(u[8].attendees||"TBA")+"",n,B,C;function J(o,E){return o[8].venueUrl?Je:Ce}let Y=J(u),O=Y(u),j=u[8].languages&&u[8].languages.length>0&&ye(u);return{c(){f=d("td"),t=q(r),i=$(),l=d("td"),e=d("img"),h=$(),y=d("td"),A=d("a"),T=q(k),m=$(),w=d("td"),_=q(W),I=$(),F=d("td"),O.c(),z=$(),G=d("td"),n=q(P),B=$(),C=d("td"),j&&j.c(),this.h()},l(o){f=p(o,"TD",{class:!0});var E=b(f);t=M(E,r),E.forEach(s),i=V(o),l=p(o,"TD",{});var X=b(l);e=p(X,"IMG",{src:!0,class:!0}),X.forEach(s),h=V(o),y=p(o,"TD",{class:!0});var S=b(y);A=p(S,"A",{href:!0,class:!0});var te=b(A);T=M(te,k),te.forEach(s),S.forEach(s),m=V(o),w=p(o,"TD",{});var H=b(w);_=M(H,W),H.forEach(s),I=V(o),F=p(o,"TD",{});var R=b(F);O.l(R),R.forEach(s),z=V(o),G=p(o,"TD",{});var K=b(G);n=M(K,P),K.forEach(s),B=V(o),C=p(o,"TD",{});var N=b(C);j&&j.l(N),N.forEach(s),this.h()},h(){D(f,"class","text-right pr-4"),ie(e.src,a=u[8].logo)||D(e,"src",a),D(e,"class","w-10 inline-block rounded"),D(A,"href",U="/"+u[5]+"/"+u[4].model+"/"+u[8].id),D(A,"class","text-pbw-red hover:underline"),D(y,"class","text-2xl")},m(o,E){c(o,f,E),v(f,t),c(o,i,E),c(o,l,E),v(l,e),c(o,h,E),c(o,y,E),v(y,A),v(A,T),c(o,m,E),c(o,w,E),v(w,_),c(o,I,E),c(o,F,E),O.m(F,null),c(o,z,E),c(o,G,E),v(G,n),c(o,B,E),c(o,C,E),j&&j.m(C,null)},p(o,E){E&8&&r!==(r=pe(o[8])+"")&&L(t,r),E&8&&!ie(e.src,a=o[8].logo)&&D(e,"src",a),E&8&&k!==(k=o[8].name+"")&&L(T,k),E&24&&U!==(U="/"+o[5]+"/"+o[4].model+"/"+o[8].id)&&D(A,"href",U),E&8&&W!==(W=o[8].types.join(", ")+"")&&L(_,W),Y===(Y=J(o))&&O?O.p(o,E):(O.d(1),O=Y(o),O&&(O.c(),O.m(F,null))),E&8&&P!==(P=(o[8].attendees||"TBA")+"")&&L(n,P),o[8].languages&&o[8].languages.length>0?j?j.p(o,E):(j=ye(o),j.c(),j.m(C,null)):j&&(j.d(1),j=null)},d(o){o&&s(f),o&&s(i),o&&s(l),o&&s(h),o&&s(y),o&&s(m),o&&s(w),o&&s(I),o&&s(F),O.d(),o&&s(z),o&&s(G),o&&s(B),o&&s(C),j&&j.d()}}}function Ce(u){let f=u[8].venueName+"",r;return{c(){r=q(f)},l(t){r=M(t,f)},m(t,i){c(t,r,i)},p(t,i){i&8&&f!==(f=t[8].venueName+"")&&L(r,f)},d(t){t&&s(r)}}}function Je(u){let f,r=u[8].venueName+"",t,i;return{c(){f=d("a"),t=q(r),this.h()},l(l){f=p(l,"A",{href:!0,class:!0});var e=b(f);t=M(e,r),e.forEach(s),this.h()},h(){D(f,"href",i=u[8].venueUrl),D(f,"class","underline hover:no-underline")},m(l,e){c(l,f,e),v(f,t)},p(l,e){e&8&&r!==(r=l[8].venueName+"")&&L(t,r),e&8&&i!==(i=l[8].venueUrl)&&D(f,"href",i)},d(l){l&&s(f)}}}function ye(u){let f,r=u[8].languages,t=[];for(let i=0;i<r.length;i+=1)t[i]=Ie(Ee(u,r,i));return{c(){f=d("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){f=p(i,"DIV",{class:!0});var l=b(f);for(let e=0;e<t.length;e+=1)t[e].l(l);l.forEach(s),this.h()},h(){D(f,"class","flex gap-1")},m(i,l){c(i,f,l);for(let e=0;e<t.length;e+=1)t[e].m(f,null)},p(i,l){if(l&8){r=i[8].languages;let e;for(e=0;e<r.length;e+=1){const a=Ee(i,r,e);t[e]?t[e].p(a,l):(t[e]=Ie(a),t[e].c(),t[e].m(f,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=r.length}},d(i){i&&s(f),Ve(t,i)}}}function Ie(u){let f,r=ae(u[11])+"",t;return{c(){f=d("div"),t=q(r)},l(i){f=p(i,"DIV",{});var l=b(f);t=M(l,r),l.forEach(s)},m(i,l){c(i,f,l),v(f,t)},p(i,l){l&8&&r!==(r=ae(i[11])+"")&&L(t,r)},d(i){i&&s(f)}}}function He(u){let f,r,t,i,l,e,a=u[8].name+"",h,y,A,k,T=(u[8].country&&u[8].country!=="xx"?ae(u[8].country,!1):"")+"",U,m,w,W,_,I,F;function z(n,B){return n[8].twitter?Le:Ke}let G=z(u),P=G(u);return I=new Re({props:{source:u[8].caption}}),{c(){f=d("td"),r=d("img"),i=$(),l=d("td"),e=d("a"),h=q(a),A=$(),k=d("td"),U=q(T),m=$(),w=d("td"),P.c(),W=$(),_=d("td"),Ae(I.$$.fragment),this.h()},l(n){f=p(n,"TD",{});var B=b(f);r=p(B,"IMG",{src:!0,class:!0}),B.forEach(s),i=V(n),l=p(n,"TD",{class:!0});var C=b(l);e=p(C,"A",{href:!0,class:!0});var J=b(e);h=M(J,a),J.forEach(s),C.forEach(s),A=V(n),k=p(n,"TD",{});var Y=b(k);U=M(Y,T),Y.forEach(s),m=V(n),w=p(n,"TD",{});var O=b(w);P.l(O),O.forEach(s),W=V(n),_=p(n,"TD",{});var j=b(_);Ne(I.$$.fragment,j),j.forEach(s),this.h()},h(){ie(r.src,t=u[8].photoUrl)||D(r,"src",t),D(r,"class","w-10 inline-block rounded aspect-square object-cover"),D(e,"href",y="/"+u[5]+"/"+u[4].model+"/"+u[8].id),D(e,"class","text-pbw-red underline hover:no-underline"),D(l,"class","text-2xl")},m(n,B){c(n,f,B),v(f,r),c(n,i,B),c(n,l,B),v(l,e),v(e,h),c(n,A,B),c(n,k,B),v(k,U),c(n,m,B),c(n,w,B),P.m(w,null),c(n,W,B),c(n,_,B),$e(I,_,null),F=!0},p(n,B){(!F||B&8&&!ie(r.src,t=n[8].photoUrl))&&D(r,"src",t),(!F||B&8)&&a!==(a=n[8].name+"")&&L(h,a),(!F||B&24&&y!==(y="/"+n[5]+"/"+n[4].model+"/"+n[8].id))&&D(e,"href",y),(!F||B&8)&&T!==(T=(n[8].country&&n[8].country!=="xx"?ae(n[8].country,!1):"")+"")&&L(U,T),G===(G=z(n))&&P?P.p(n,B):(P.d(1),P=G(n),P&&(P.c(),P.m(w,null)));const C={};B&8&&(C.source=n[8].caption),I.$set(C)},i(n){F||(Q(I.$$.fragment,n),F=!0)},o(n){Z(I.$$.fragment,n),F=!1},d(n){n&&s(f),n&&s(i),n&&s(l),n&&s(A),n&&s(k),n&&s(m),n&&s(w),P.d(),n&&s(W),n&&s(_),je(I)}}}function Ke(u){return{c:le,l:le,m:le,p:le,d:le}}function Le(u){let f,r,t=u[8].twitter+"",i,l;return{c(){f=q("@"),r=d("a"),i=q(t),this.h()},l(e){f=M(e,"@"),r=p(e,"A",{href:!0,class:!0});var a=b(r);i=M(a,t),a.forEach(s),this.h()},h(){D(r,"href",l="https://twitter.com/"+u[8].twitter),D(r,"class","underline hover:no-underline")},m(e,a){c(e,f,a),c(e,r,a),v(r,i)},p(e,a){a&8&&t!==(t=e[8].twitter+"")&&L(i,t),a&8&&l!==(l="https://twitter.com/"+e[8].twitter)&&D(r,"href",l)},d(e){e&&s(f),e&&s(r)}}}function Be(u){let f,r,t,i,l=u[1]==="events"&&De(u),e=u[1]==="speakers"&&He(u);return{c(){f=d("tr"),l&&l.c(),r=$(),e&&e.c(),t=$(),this.h()},l(a){f=p(a,"TR",{class:!0});var h=b(f);l&&l.l(h),r=V(h),e&&e.l(h),t=V(h),h.forEach(s),this.h()},h(){D(f,"class","")},m(a,h){c(a,f,h),l&&l.m(f,null),v(f,r),e&&e.m(f,null),v(f,t),i=!0},p(a,h){a[1]==="events"?l?l.p(a,h):(l=De(a),l.c(),l.m(f,r)):l&&(l.d(1),l=null),a[1]==="speakers"?e?(e.p(a,h),h&2&&Q(e,1)):(e=He(a),e.c(),Q(e,1),e.m(f,t)):e&&(ne(),Z(e,1,1,()=>{e=null}),ue())},i(a){i||(Q(e),i=!0)},o(a){Z(e),i=!1},d(a){a&&s(f),l&&l.d(),e&&e.d()}}}function Ye(u){var e;let f,r,t,i;document.title=f=((e=u[4])==null?void 0:e.title)+" | #PBW"+u[2].params.entry+" Inspector";let l=u[4]&&ke(u);return{c(){r=$(),l&&l.c(),t=de()},l(a){Me("svelte-e7ot85",document.head).forEach(s),r=V(a),l&&l.l(a),t=de()},m(a,h){c(a,r,h),l&&l.m(a,h),c(a,t,h),i=!0},p(a,[h]){var y;(!i||h&20)&&f!==(f=((y=a[4])==null?void 0:y.title)+" | #PBW"+a[2].params.entry+" Inspector")&&(document.title=f),a[4]?l?(l.p(a,h),h&16&&Q(l,1)):(l=ke(a),l.c(),Q(l,1),l.m(t.parentNode,t)):l&&(ne(),Z(l,1,1,()=>{l=null}),ue())},i(a){i||(Q(l),i=!0)},o(a){Z(l),i=!1},d(a){a&&s(r),l&&l.d(a),a&&s(t)}}}function Qe(u,f,r){let t,i,l,e,a;We(u,Ge,k=>r(2,a=k));let{data:h}=f,y=a.params.entry;function A(k){return t==="events"&&(k=k.sort((T,U)=>T.date>U.date?1:-1)),k}return Fe(async()=>{if(!re.collections[a.params.type]){const k=Object.keys(re.collections).find(T=>re.collections[T].model===a.params.type);k&&ze(`/${a.params.entry}/${k}`)}}),u.$$set=k=>{"data"in k&&r(0,h=k.data)},u.$$.update=()=>{u.$$.dirty&4&&r(1,t=a.params.type),u.$$.dirty&2&&r(4,i=re.collections[t]),u.$$.dirty&3&&r(6,l=h.bundle[t]),u.$$.dirty&64&&r(3,e=A(l))},[h,t,a,e,i,y,l]}class el extends Se{constructor(f){super(),Ue(this,f,Qe,Ye,qe,{data:0})}}export{el as default};
