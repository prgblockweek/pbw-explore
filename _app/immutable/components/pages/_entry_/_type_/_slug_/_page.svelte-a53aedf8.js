import{S as Al,i as Sl,s as Tl,a as T,k as m,q as D,w as ee,I as Nl,h as _,c as N,l as p,m as g,r as w,x as le,n as k,b as $,H as h,y as te,u as j,f as y,t as H,d as Z,z as ie,G as Pl,g as x,J as oe,e as fe,V as Bl,W as Hl,B as Be}from"../../../../../chunks/index-ca7dbb83.js";import{p as Cl}from"../../../../../chunks/stores-1315f220.js";import{C as he}from"../../../../../chunks/CollectionList-ae05b185.js";import{C as Ml}from"../../../../../chunks/CalendarList-9d7051f3.js";import{I as Ol,d as _e,F as jl,f as Pe}from"../../../../../chunks/Footer-4cc4ca98.js";import{E as ql}from"../../../../../chunks/EventTypeBadge-22746011.js";import{f as qe,S as Ve,g as Le,b as Ie}from"../../../../../chunks/utils-c6f80ac1.js";function Fe(o,e,i){const l=o.slice();return l[19]=e[i],l}function Re(o,e,i){const l=o.slice();return l[22]=e[i],l}function Ue(o,e,i){const l=o.slice();return l[25]=e[i],l}function We(o,e,i){const l=o.slice();return l[28]=e[i],l}function ze(o,e,i){const l=o.slice();return l[31]=e[i],l}function Ge(o,e,i){const l=o.slice();return l[34]=e[i],l}function Je(o,e,i){const l=o.slice();return l[22]=e[i],l}function Ke(o,e,i){const l=o.slice();return l[25]=e[i],l}function Qe(o){let e,i,l,r,n=qe(o[4],{full:!0})+"",f,t,s,u,a,c,d=o[4].types,v=[];for(let S=0;S<d.length;S+=1)v[S]=Xe(Ke(o,d,S));const E=S=>H(v[S],1,1,()=>{v[S]=null});function P(S,M){return S[4].venues?Rl:S[4].venueUrl?Fl:Ll}let A=P(o),V=A(o),B=o[4].attendees&&Ye(o);return{c(){e=m("div"),i=m("div");for(let S=0;S<v.length;S+=1)v[S].c();l=T(),r=m("div"),f=D(n),t=T(),s=m("div"),u=D(`📍 
                                    `),V.c(),a=T(),B&&B.c(),this.h()},l(S){e=p(S,"DIV",{class:!0});var M=g(e);i=p(M,"DIV",{class:!0});var b=g(i);for(let re=0;re<v.length;re+=1)v[re].l(b);b.forEach(_),l=N(M),r=p(M,"DIV",{class:!0});var C=g(r);f=w(C,n),C.forEach(_),t=N(M),s=p(M,"DIV",{});var K=g(s);u=w(K,`📍 
                                    `),V.l(K),K.forEach(_),a=N(M),B&&B.l(M),M.forEach(_),this.h()},h(){k(i,"class","flex gap-1 items-center"),k(r,"class",""),k(e,"class","text-2xl flex gap-4 mt-2 flex-wrap")},m(S,M){$(S,e,M),h(e,i);for(let b=0;b<v.length;b+=1)v[b].m(i,null);h(e,l),h(e,r),h(r,f),h(e,t),h(e,s),h(s,u),V.m(s,null),h(e,a),B&&B.m(e,null),c=!0},p(S,M){if(M[0]&16){d=S[4].types;let b;for(b=0;b<d.length;b+=1){const C=Ke(S,d,b);v[b]?(v[b].p(C,M),y(v[b],1)):(v[b]=Xe(C),v[b].c(),y(v[b],1),v[b].m(i,null))}for(x(),b=d.length;b<v.length;b+=1)E(b);Z()}(!c||M[0]&16)&&n!==(n=qe(S[4],{full:!0})+"")&&j(f,n),A===(A=P(S))&&V?V.p(S,M):(V.d(1),V=A(S),V&&(V.c(),V.m(s,null))),S[4].attendees?B?B.p(S,M):(B=Ye(S),B.c(),B.m(e,null)):B&&(B.d(1),B=null)},i(S){if(!c){for(let M=0;M<d.length;M+=1)y(v[M]);c=!0}},o(S){v=v.filter(Boolean);for(let M=0;M<v.length;M+=1)H(v[M]);c=!1},d(S){S&&_(e),oe(v,S),V.d(),B&&B.d()}}}function Xe(o){let e,i;return e=new ql({props:{type:o[25]}}),{c(){ee(e.$$.fragment)},l(l){le(e.$$.fragment,l)},m(l,r){te(e,l,r),i=!0},p(l,r){const n={};r[0]&16&&(n.type=l[25]),e.$set(n)},i(l){i||(y(e.$$.fragment,l),i=!0)},o(l){H(e.$$.fragment,l),i=!1},d(l){ie(e,l)}}}function Ll(o){let e=o[4].venueName+"",i;return{c(){i=D(e)},l(l){i=w(l,e)},m(l,r){$(l,i,r)},p(l,r){r[0]&16&&e!==(e=l[4].venueName+"")&&j(i,e)},d(l){l&&_(i)}}}function Fl(o){let e,i=o[4].venueName+"",l,r;return{c(){e=m("a"),l=D(i),this.h()},l(n){e=p(n,"A",{href:!0,target:!0,class:!0});var f=g(e);l=w(f,i),f.forEach(_),this.h()},h(){k(e,"href",r=o[4].venueUrl),k(e,"target","_blank"),k(e,"class","underline hover:no-underline external")},m(n,f){$(n,e,f),h(e,l)},p(n,f){f[0]&16&&i!==(i=n[4].venueName+"")&&j(l,i),f[0]&16&&r!==(r=n[4].venueUrl)&&k(e,"href",r)},d(n){n&&_(e)}}}function Rl(o){let e,i=o[4].venues.map(o[9]).join(", ")+"",l;return{c(){e=new Bl(!1),l=fe(),this.h()},l(r){e=Hl(r,!1),l=fe(),this.h()},h(){e.a=l},m(r,n){e.m(i,r,n),$(r,l,n)},p(r,n){n[0]&25&&i!==(i=r[4].venues.map(r[9]).join(", ")+"")&&e.p(i)},d(r){r&&_(l),r&&e.d()}}}function Ye(o){let e,i,l=o[4].attendees+"",r;return{c(){e=m("div"),i=D("👥 "),r=D(l)},l(n){e=p(n,"DIV",{});var f=g(e);i=w(f,"👥 "),r=w(f,l),f.forEach(_)},m(n,f){$(n,e,f),h(e,i),h(e,r)},p(n,f){f[0]&16&&l!==(l=n[4].attendees+"")&&j(r,l)},d(n){n&&_(e)}}}function Ze(o){let e,i,l,r,n;i=new Ve({props:{source:o[4].caption}});let f=Object.keys(o[7]),t=[];for(let s=0;s<f.length;s+=1)t[s]=el(Je(o,f,s));return{c(){e=m("div"),ee(i.$$.fragment),l=T(),r=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var u=g(e);le(i.$$.fragment,u),u.forEach(_),l=N(s),r=p(s,"DIV",{class:!0});var a=g(r);for(let c=0;c<t.length;c+=1)t[c].l(a);a.forEach(_),this.h()},h(){k(e,"class","text-2xl mt-2 markdown"),k(r,"class","flex flex-wrap gap-4 mt-4 text-xl")},m(s,u){$(s,e,u),te(i,e,null),$(s,l,u),$(s,r,u);for(let a=0;a<t.length;a+=1)t[a].m(r,null);n=!0},p(s,u){const a={};if(u[0]&16&&(a.source=s[4].caption),i.$set(a),u[0]&144){f=Object.keys(s[7]);let c;for(c=0;c<f.length;c+=1){const d=Je(s,f,c);t[c]?t[c].p(d,u):(t[c]=el(d),t[c].c(),t[c].m(r,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=f.length}},i(s){n||(y(i.$$.fragment,s),n=!0)},o(s){H(i.$$.fragment,s),n=!1},d(s){s&&_(e),ie(i),s&&_(l),s&&_(r),oe(t,s)}}}function xe(o){let e,i,l=o[22]+"",r,n,f,t,s=Ie(o[7][o[22]].col(o[4]),o[22])+"",u,a;return{c(){e=m("div"),i=m("span"),r=D(l),n=D(" →"),f=T(),t=m("a"),u=D(s),this.h()},l(c){e=p(c,"DIV",{});var d=g(e);i=p(d,"SPAN",{class:!0});var v=g(i);r=w(v,l),n=w(v," →"),v.forEach(_),f=N(d),t=p(d,"A",{href:!0,target:!0,class:!0});var E=g(t);u=w(E,s),E.forEach(_),d.forEach(_),this.h()},h(){k(i,"class","opacity-40 text-sm uppercase"),k(t,"href",a=o[7][o[22]].col(o[4])),k(t,"target","_blank"),k(t,"class","underline hover:no-underline")},m(c,d){$(c,e,d),h(e,i),h(i,r),h(i,n),h(e,f),h(e,t),h(t,u)},p(c,d){d[0]&16&&s!==(s=Ie(c[7][c[22]].col(c[4]),c[22])+"")&&j(u,s),d[0]&16&&a!==(a=c[7][c[22]].col(c[4]))&&k(t,"href",a)},d(c){c&&_(e)}}}function el(o){let e=o[7][o[22]].col(o[4]),i,l=e&&xe(o);return{c(){l&&l.c(),i=fe()},l(r){l&&l.l(r),i=fe()},m(r,n){l&&l.m(r,n),$(r,i,n)},p(r,n){n[0]&16&&(e=r[7][r[22]].col(r[4])),e?l?l.p(r,n):(l=xe(r),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(r){l&&l.d(r),r&&_(i)}}}function ll(o){let e,i,l,r,n,f,t,s,u,a,c,d=o[4].chains&&o[4].chains.length>0&&tl(o),v=o[4].tags&&o[4].tags.length>0&&sl(o),E=o[4].languages&&o[4].languages.length>0&&nl(o);u=new Ve({props:{source:o[4].org||"TBD"}});let P=o[4].poc&&fl(o);return{c(){e=m("div"),d&&d.c(),i=T(),v&&v.c(),l=T(),E&&E.c(),r=T(),n=m("div"),f=m("div"),t=D("Organizator"),s=m("div"),ee(u.$$.fragment),a=T(),P&&P.c(),this.h()},l(A){e=p(A,"DIV",{class:!0});var V=g(e);d&&d.l(V),i=N(V),v&&v.l(V),l=N(V),E&&E.l(V),r=N(V),n=p(V,"DIV",{});var B=g(n);f=p(B,"DIV",{class:!0});var S=g(f);t=w(S,"Organizator"),S.forEach(_),s=p(B,"DIV",{class:!0});var M=g(s);le(u.$$.fragment,M),M.forEach(_),B.forEach(_),a=N(V),P&&P.l(V),V.forEach(_),this.h()},h(){k(f,"class","uppercase text-sm opacity-40"),k(s,"class","markdown"),k(e,"class","flex flex-wrap gap-6 text-xl mt-4")},m(A,V){$(A,e,V),d&&d.m(e,null),h(e,i),v&&v.m(e,null),h(e,l),E&&E.m(e,null),h(e,r),h(e,n),h(n,f),h(f,t),h(n,s),te(u,s,null),h(e,a),P&&P.m(e,null),c=!0},p(A,V){A[4].chains&&A[4].chains.length>0?d?d.p(A,V):(d=tl(A),d.c(),d.m(e,i)):d&&(d.d(1),d=null),A[4].tags&&A[4].tags.length>0?v?v.p(A,V):(v=sl(A),v.c(),v.m(e,l)):v&&(v.d(1),v=null),A[4].languages&&A[4].languages.length>0?E?E.p(A,V):(E=nl(A),E.c(),E.m(e,r)):E&&(E.d(1),E=null);const B={};V[0]&16&&(B.source=A[4].org||"TBD"),u.$set(B),A[4].poc?P?(P.p(A,V),V[0]&16&&y(P,1)):(P=fl(A),P.c(),y(P,1),P.m(e,null)):P&&(x(),H(P,1,1,()=>{P=null}),Z())},i(A){c||(y(u.$$.fragment,A),y(P),c=!0)},o(A){H(u.$$.fragment,A),H(P),c=!1},d(A){A&&_(e),d&&d.d(),v&&v.d(),E&&E.d(),ie(u),P&&P.d()}}}function tl(o){let e,i,l,r,n,f=o[4].chains,t=[];for(let s=0;s<f.length;s+=1)t[s]=il(Ge(o,f,s));return{c(){e=m("div"),i=m("div"),l=D("Chains"),r=T(),n=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{});var u=g(e);i=p(u,"DIV",{class:!0});var a=g(i);l=w(a,"Chains"),a.forEach(_),r=N(u),n=p(u,"DIV",{class:!0});var c=g(n);for(let d=0;d<t.length;d+=1)t[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,i),h(i,l),h(e,r),h(e,n);for(let a=0;a<t.length;a+=1)t[a].m(n,null)},p(s,u){if(u[0]&16){f=s[4].chains;let a;for(a=0;a<f.length;a+=1){const c=Ge(s,f,a);t[a]?t[a].p(c,u):(t[a]=il(c),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=f.length}},d(s){s&&_(e),oe(t,s)}}}function il(o){let e,i=o[34].substr(0,1).toUpperCase()+o[34].substr(1)+"",l;return{c(){e=m("div"),l=D(i)},l(r){e=p(r,"DIV",{});var n=g(e);l=w(n,i),n.forEach(_)},m(r,n){$(r,e,n),h(e,l)},p(r,n){n[0]&16&&i!==(i=r[34].substr(0,1).toUpperCase()+r[34].substr(1)+"")&&j(l,i)},d(r){r&&_(e)}}}function sl(o){let e,i,l,r,n,f=o[4].tags,t=[];for(let s=0;s<f.length;s+=1)t[s]=rl(ze(o,f,s));return{c(){e=m("div"),i=m("div"),l=D("Tags"),r=T(),n=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{});var u=g(e);i=p(u,"DIV",{class:!0});var a=g(i);l=w(a,"Tags"),a.forEach(_),r=N(u),n=p(u,"DIV",{class:!0});var c=g(n);for(let d=0;d<t.length;d+=1)t[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,i),h(i,l),h(e,r),h(e,n);for(let a=0;a<t.length;a+=1)t[a].m(n,null)},p(s,u){if(u[0]&16){f=s[4].tags;let a;for(a=0;a<f.length;a+=1){const c=ze(s,f,a);t[a]?t[a].p(c,u):(t[a]=rl(c),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=f.length}},d(s){s&&_(e),oe(t,s)}}}function rl(o){let e,i,l=o[31]+"",r;return{c(){e=m("div"),i=D("#"),r=D(l)},l(n){e=p(n,"DIV",{});var f=g(e);i=w(f,"#"),r=w(f,l),f.forEach(_)},m(n,f){$(n,e,f),h(e,i),h(e,r)},p(n,f){f[0]&16&&l!==(l=n[31]+"")&&j(r,l)},d(n){n&&_(e)}}}function nl(o){let e,i,l,r,n,f=o[4].languages,t=[];for(let s=0;s<f.length;s+=1)t[s]=al(We(o,f,s));return{c(){e=m("div"),i=m("div"),l=D("Languages"),r=T(),n=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{});var u=g(e);i=p(u,"DIV",{class:!0});var a=g(i);l=w(a,"Languages"),a.forEach(_),r=N(u),n=p(u,"DIV",{class:!0});var c=g(n);for(let d=0;d<t.length;d+=1)t[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,i),h(i,l),h(e,r),h(e,n);for(let a=0;a<t.length;a+=1)t[a].m(n,null)},p(s,u){if(u[0]&16){f=s[4].languages;let a;for(a=0;a<f.length;a+=1){const c=We(s,f,a);t[a]?t[a].p(c,u):(t[a]=al(c),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=f.length}},d(s){s&&_(e),oe(t,s)}}}function al(o){let e,i=Le(o[28])+"",l,r,n=o[28]+"",f;return{c(){e=m("div"),l=D(i),r=T(),f=D(n)},l(t){e=p(t,"DIV",{});var s=g(e);l=w(s,i),r=N(s),f=w(s,n),s.forEach(_)},m(t,s){$(t,e,s),h(e,l),h(e,r),h(e,f)},p(t,s){s[0]&16&&i!==(i=Le(t[28])+"")&&j(l,i),s[0]&16&&n!==(n=t[28]+"")&&j(f,n)},d(t){t&&_(e)}}}function fl(o){let e,i,l,r,n,f;return n=new Ve({props:{source:o[4].poc}}),{c(){e=m("div"),i=m("div"),l=D("Point of contact"),r=m("div"),ee(n.$$.fragment),this.h()},l(t){e=p(t,"DIV",{});var s=g(e);i=p(s,"DIV",{class:!0});var u=g(i);l=w(u,"Point of contact"),u.forEach(_),r=p(s,"DIV",{class:!0});var a=g(r);le(n.$$.fragment,a),a.forEach(_),s.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(r,"class","markdown")},m(t,s){$(t,e,s),h(e,i),h(i,l),h(e,r),te(n,r,null),f=!0},p(t,s){const u={};s[0]&16&&(u.source=t[4].poc),n.$set(u)},i(t){f||(y(n.$$.fragment,t),f=!0)},o(t){H(n.$$.fragment,t),f=!1},d(t){t&&_(e),ie(n)}}}function ol(o){let e,i,l,r=o[4].address&&cl(o),n=o[4].capacity&&ul(o),f=o[4].eventTypes&&o[4].eventTypes.length>0&&dl(o);return{c(){e=m("div"),r&&r.c(),i=T(),n&&n.c(),l=T(),f&&f.c(),this.h()},l(t){e=p(t,"DIV",{class:!0});var s=g(e);r&&r.l(s),i=N(s),n&&n.l(s),l=N(s),f&&f.l(s),s.forEach(_),this.h()},h(){k(e,"class","flex flex-wrap gap-6 text-xl mt-4")},m(t,s){$(t,e,s),r&&r.m(e,null),h(e,i),n&&n.m(e,null),h(e,l),f&&f.m(e,null)},p(t,s){t[4].address?r?r.p(t,s):(r=cl(t),r.c(),r.m(e,i)):r&&(r.d(1),r=null),t[4].capacity?n?n.p(t,s):(n=ul(t),n.c(),n.m(e,l)):n&&(n.d(1),n=null),t[4].eventTypes&&t[4].eventTypes.length>0?f?f.p(t,s):(f=dl(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&_(e),r&&r.d(),n&&n.d(),f&&f.d()}}}function cl(o){let e,i,l,r,n,f=o[4].address+"",t;return{c(){e=m("div"),i=m("div"),l=D("Address"),r=T(),n=m("div"),t=D(f),this.h()},l(s){e=p(s,"DIV",{});var u=g(e);i=p(u,"DIV",{class:!0});var a=g(i);l=w(a,"Address"),a.forEach(_),r=N(u),n=p(u,"DIV",{class:!0});var c=g(n);t=w(c,f),c.forEach(_),u.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,i),h(i,l),h(e,r),h(e,n),h(n,t)},p(s,u){u[0]&16&&f!==(f=s[4].address+"")&&j(t,f)},d(s){s&&_(e)}}}function ul(o){let e,i,l,r,n,f=o[4].capacity+"",t,s;return{c(){e=m("div"),i=m("div"),l=D("Capacity"),r=T(),n=m("div"),t=D(f),s=D(" ppl"),this.h()},l(u){e=p(u,"DIV",{});var a=g(e);i=p(a,"DIV",{class:!0});var c=g(i);l=w(c,"Capacity"),c.forEach(_),r=N(a),n=p(a,"DIV",{class:!0});var d=g(n);t=w(d,f),s=w(d," ppl"),d.forEach(_),a.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(n,"class","flex gap-2")},m(u,a){$(u,e,a),h(e,i),h(i,l),h(e,r),h(e,n),h(n,t),h(n,s)},p(u,a){a[0]&16&&f!==(f=u[4].capacity+"")&&j(t,f)},d(u){u&&_(e)}}}function dl(o){let e,i,l,r,n,f=o[4].eventTypes,t=[];for(let s=0;s<f.length;s+=1)t[s]=_l(Ue(o,f,s));return{c(){e=m("div"),i=m("div"),l=D("Event Types"),r=T(),n=m("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{});var u=g(e);i=p(u,"DIV",{class:!0});var a=g(i);l=w(a,"Event Types"),a.forEach(_),r=N(u),n=p(u,"DIV",{class:!0});var c=g(n);for(let d=0;d<t.length;d+=1)t[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){k(i,"class","uppercase text-sm opacity-40"),k(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,i),h(i,l),h(e,r),h(e,n);for(let a=0;a<t.length;a+=1)t[a].m(n,null)},p(s,u){if(u[0]&16){f=s[4].eventTypes;let a;for(a=0;a<f.length;a+=1){const c=Ue(s,f,a);t[a]?t[a].p(c,u):(t[a]=_l(c),t[a].c(),t[a].m(n,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=f.length}},d(s){s&&_(e),oe(t,s)}}}function _l(o){let e,i=o[25]+"",l;return{c(){e=m("div"),l=D(i)},l(r){e=p(r,"DIV",{});var n=g(e);l=w(n,i),n.forEach(_)},m(r,n){$(r,e,n),h(e,l)},p(r,n){n[0]&16&&i!==(i=r[25]+"")&&j(l,i)},d(r){r&&_(e)}}}function hl(o){let e,i=Object.keys(o[4].links),l=[];for(let r=0;r<i.length;r+=1)l[r]=vl(Re(o,i,r));return{c(){e=m("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=p(r,"DIV",{class:!0});var n=g(e);for(let f=0;f<l.length;f+=1)l[f].l(n);n.forEach(_),this.h()},h(){k(e,"class","flex flex-wrap gap-4 mt-4 text-xl")},m(r,n){$(r,e,n);for(let f=0;f<l.length;f+=1)l[f].m(e,null)},p(r,n){if(n[0]&16){i=Object.keys(r[4].links);let f;for(f=0;f<i.length;f+=1){const t=Re(r,i,f);l[f]?l[f].p(t,n):(l[f]=vl(t),l[f].c(),l[f].m(e,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=i.length}},d(r){r&&_(e),oe(l,r)}}}function vl(o){let e,i,l=o[22]+"",r,n,f,t,s=Ie(o[4].links[o[22]],o[22])+"",u,a;return{c(){e=m("div"),i=m("span"),r=D(l),n=D(" →"),f=T(),t=m("a"),u=D(s),this.h()},l(c){e=p(c,"DIV",{});var d=g(e);i=p(d,"SPAN",{class:!0});var v=g(i);r=w(v,l),n=w(v," →"),v.forEach(_),f=N(d),t=p(d,"A",{href:!0,target:!0,class:!0});var E=g(t);u=w(E,s),E.forEach(_),d.forEach(_),this.h()},h(){k(i,"class","opacity-40 text-sm uppercase"),k(t,"href",a=o[4].links[o[22]]),k(t,"target","_blank"),k(t,"class","underline hover:no-underline")},m(c,d){$(c,e,d),h(e,i),h(i,r),h(i,n),h(e,f),h(e,t),h(t,u)},p(c,d){d[0]&16&&l!==(l=c[22]+"")&&j(r,l),d[0]&16&&s!==(s=Ie(c[4].links[c[22]],c[22])+"")&&j(u,s),d[0]&16&&a!==(a=c[4].links[c[22]])&&k(t,"href",a)},d(c){c&&_(e)}}}function ml(o){let e,i,l,r,n,f,t,s,u;function a(V,B){return V[4].registration.link?Wl:Ul}let c=a(o),d=c(o),v=o[4].registration.status&&pl(o);function E(V,B){return V[4].registration.type==="tickets"?et:xl}let P=E(o),A=P(o);return{c(){e=m("div"),i=m("div"),d.c(),l=T(),r=m("div"),v&&v.c(),n=T(),f=m("div"),t=m("span"),s=D("Price"),u=T(),A.c(),this.h()},l(V){e=p(V,"DIV",{class:!0});var B=g(e);i=p(B,"DIV",{class:!0});var S=g(i);d.l(S),l=N(S),r=p(S,"DIV",{});var M=g(r);v&&v.l(M),n=N(M),f=p(M,"DIV",{});var b=g(f);t=p(b,"SPAN",{class:!0});var C=g(t);s=w(C,"Price"),C.forEach(_),u=N(b),A.l(b),b.forEach(_),M.forEach(_),S.forEach(_),B.forEach(_),this.h()},h(){k(t,"class","opacity-40 text-sm uppercase mr-1"),k(i,"class","w-auto rounded-lg md:text-right gap-4"),k(e,"class","text-xl lg:flex-nowrap mt-6 lg:mt-0")},m(V,B){$(V,e,B),h(e,i),d.m(i,null),h(i,l),h(i,r),v&&v.m(r,null),h(r,n),h(r,f),h(f,t),h(t,s),h(f,u),A.m(f,null)},p(V,B){c===(c=a(V))&&d?d.p(V,B):(d.d(1),d=c(V),d&&(d.c(),d.m(i,l))),V[4].registration.status?v?v.p(V,B):(v=pl(V),v.c(),v.m(r,n)):v&&(v.d(1),v=null),P===(P=E(V))&&A?A.p(V,B):(A.d(1),A=P(V),A&&(A.c(),A.m(f,null)))},d(V){V&&_(e),d.d(),v&&v.d(),A.d()}}}function Ul(o){let e;function i(n,f){if(n[4].registration.type==="tickets")return Gl;if(n[4].registration.type==="invites")return zl}let l=i(o),r=l&&l(o);return{c(){e=m("div"),r&&r.c(),this.h()},l(n){e=p(n,"DIV",{class:!0});var f=g(e);r&&r.l(f),f.forEach(_),this.h()},h(){k(e,"class","inline-block py-2 px-4 border border-gray-400 text-gray-400 text-lg rounded-lg mb-2 cursor-not-allowed")},m(n,f){$(n,e,f),r&&r.m(e,null)},p(n,f){l!==(l=i(n))&&(r&&r.d(1),r=l&&l(n),r&&(r.c(),r.m(e,null)))},d(n){n&&_(e),r&&r.d()}}}function Wl(o){let e,i,l,r;function n(s,u){return s[4].registration.button?Ql:s[4].registration.type==="tickets"?Kl:Jl}let f=n(o),t=f(o);return{c(){e=m("div"),i=m("a"),l=m("div"),t.c(),this.h()},l(s){e=p(s,"DIV",{class:!0});var u=g(e);i=p(u,"A",{href:!0,class:!0,target:!0});var a=g(i);l=p(a,"DIV",{class:!0});var c=g(l);t.l(c),c.forEach(_),a.forEach(_),u.forEach(_),this.h()},h(){k(l,"class","inline-block py-3 px-6 border border-pbw-red hover:bg-pbw-red hover:text-white text-pbw-red text-xl rounded-lg"),k(i,"href",r=o[4].registration.link),k(i,"class",""),k(i,"target","_blank"),k(e,"class","pb-2")},m(s,u){$(s,e,u),h(e,i),h(i,l),t.m(l,null)},p(s,u){f===(f=n(s))&&t?t.p(s,u):(t.d(1),t=f(s),t&&(t.c(),t.m(l,null))),u[0]&16&&r!==(r=s[4].registration.link)&&k(i,"href",r)},d(s){s&&_(e),t.d()}}}function zl(o){let e;return{c(){e=D("Application form is not yet available")},l(i){e=w(i,"Application form is not yet available")},m(i,l){$(i,e,l)},d(i){i&&_(e)}}}function Gl(o){let e;return{c(){e=D("Tickets not yet available")},l(i){e=w(i,"Tickets not yet available")},m(i,l){$(i,e,l)},d(i){i&&_(e)}}}function Jl(o){let e;return{c(){e=D("Request tickets!")},l(i){e=w(i,"Request tickets!")},m(i,l){$(i,e,l)},p:Be,d(i){i&&_(e)}}}function Kl(o){let e;return{c(){e=D("Buy tickets!")},l(i){e=w(i,"Buy tickets!")},m(i,l){$(i,e,l)},p:Be,d(i){i&&_(e)}}}function Ql(o){let e=o[4].registration.button+"",i;return{c(){i=D(e)},l(l){i=w(l,e)},m(l,r){$(l,i,r)},p(l,r){r[0]&16&&e!==(e=l[4].registration.button+"")&&j(i,e)},d(l){l&&_(i)}}}function pl(o){let e,i,l,r;function n(s,u){if(s[4].registration.status==="available")return Zl;if(s[4].registration.status==="sold-out")return Yl;if(s[4].registration.status==="closed")return Xl}let f=n(o),t=f&&f(o);return{c(){e=m("div"),i=m("span"),l=D("Status"),r=T(),t&&t.c(),this.h()},l(s){e=p(s,"DIV",{});var u=g(e);i=p(u,"SPAN",{class:!0});var a=g(i);l=w(a,"Status"),a.forEach(_),r=N(u),t&&t.l(u),u.forEach(_),this.h()},h(){k(i,"class","opacity-40 text-sm uppercase mr-1")},m(s,u){$(s,e,u),h(e,i),h(i,l),h(e,r),t&&t.m(e,null)},p(s,u){f!==(f=n(s))&&(t&&t.d(1),t=f&&f(s),t&&(t.c(),t.m(e,null)))},d(s){s&&_(e),t&&t.d()}}}function Xl(o){let e,i;return{c(){e=m("span"),i=D("• Registration closed"),this.h()},l(l){e=p(l,"SPAN",{class:!0});var r=g(e);i=w(r,"• Registration closed"),r.forEach(_),this.h()},h(){k(e,"class","text-yellow-700")},m(l,r){$(l,e,r),h(e,i)},d(l){l&&_(e)}}}function Yl(o){let e,i;return{c(){e=m("span"),i=D("• Sold Out!"),this.h()},l(l){e=p(l,"SPAN",{class:!0});var r=g(e);i=w(r,"• Sold Out!"),r.forEach(_),this.h()},h(){k(e,"class","text-red-700")},m(l,r){$(l,e,r),h(e,i)},d(l){l&&_(e)}}}function Zl(o){let e,i;return{c(){e=m("span"),i=D("• Available"),this.h()},l(l){e=p(l,"SPAN",{class:!0});var r=g(e);i=w(r,"• Available"),r.forEach(_),this.h()},h(){k(e,"class","text-green-700")},m(l,r){$(l,e,r),h(e,i)},d(l){l&&_(e)}}}function xl(o){let e;return{c(){e=D("Free!")},l(i){e=w(i,"Free!")},m(i,l){$(i,e,l)},p:Be,d(i){i&&_(e)}}}function et(o){let e=(o[4].registration.price||"TBA")+"",i;return{c(){i=D(e)},l(l){i=w(l,e)},m(l,r){$(l,i,r)},p(l,r){r[0]&16&&e!==(e=(l[4].registration.price||"TBA")+"")&&j(i,e)},d(l){l&&_(i)}}}function gl(o){let e,i,l,r;return l=new Ve({props:{source:o[4].desc||o[4].description}}),{c(){e=m("div"),i=m("div"),ee(l.$$.fragment),this.h()},l(n){e=p(n,"DIV",{class:!0});var f=g(e);i=p(f,"DIV",{});var t=g(i);le(l.$$.fragment,t),t.forEach(_),f.forEach(_),this.h()},h(){k(e,"class","mt-4 text-xl markdown")},m(n,f){$(n,e,f),h(e,i),te(l,i,null),r=!0},p(n,f){const t={};f[0]&16&&(t.source=n[4].desc||n[4].description),l.$set(t)},i(n){r||(y(l.$$.fragment,n),r=!0)},o(n){H(l.$$.fragment,n),r=!1},d(n){n&&_(e),ie(l)}}}function bl(o){let e,i,l,r,n,f=o[4].segments&&kl(o),t=o[4].venues&&El(o),s=o[4].speakers&&Dl(o),u=o[4].events&&wl(o);return{c(){f&&f.c(),e=T(),t&&t.c(),i=T(),s&&s.c(),l=T(),u&&u.c(),r=fe()},l(a){f&&f.l(a),e=N(a),t&&t.l(a),i=N(a),s&&s.l(a),l=N(a),u&&u.l(a),r=fe()},m(a,c){f&&f.m(a,c),$(a,e,c),t&&t.m(a,c),$(a,i,c),s&&s.m(a,c),$(a,l,c),u&&u.m(a,c),$(a,r,c),n=!0},p(a,c){a[4].segments?f?(f.p(a,c),c[0]&16&&y(f,1)):(f=kl(a),f.c(),y(f,1),f.m(e.parentNode,e)):f&&(x(),H(f,1,1,()=>{f=null}),Z()),a[4].venues?t?(t.p(a,c),c[0]&16&&y(t,1)):(t=El(a),t.c(),y(t,1),t.m(i.parentNode,i)):t&&(x(),H(t,1,1,()=>{t=null}),Z()),a[4].speakers?s?(s.p(a,c),c[0]&16&&y(s,1)):(s=Dl(a),s.c(),y(s,1),s.m(l.parentNode,l)):s&&(x(),H(s,1,1,()=>{s=null}),Z()),a[4].events?u?(u.p(a,c),c[0]&16&&y(u,1)):(u=wl(a),u.c(),y(u,1),u.m(r.parentNode,r)):u&&(x(),H(u,1,1,()=>{u=null}),Z())},i(a){n||(y(f),y(t),y(s),y(u),n=!0)},o(a){H(f),H(t),H(s),H(u),n=!1},d(a){f&&f.d(a),a&&_(e),t&&t.d(a),a&&_(i),s&&s.d(a),a&&_(l),u&&u.d(a),a&&_(r)}}}function kl(o){let e,i,l,r,n,f=o[8](o[4]),t=[];for(let u=0;u<f.length;u+=1)t[u]=$l(Fe(o,f,u));const s=u=>H(t[u],1,1,()=>{t[u]=null});return{c(){e=m("h2"),i=D("Schedule"),l=T();for(let u=0;u<t.length;u+=1)t[u].c();r=fe(),this.h()},l(u){e=p(u,"H2",{class:!0});var a=g(e);i=w(a,"Schedule"),a.forEach(_),l=N(u);for(let c=0;c<t.length;c+=1)t[c].l(u);r=fe(),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500")},m(u,a){$(u,e,a),h(e,i),$(u,l,a);for(let c=0;c<t.length;c+=1)t[c].m(u,a);$(u,r,a),n=!0},p(u,a){if(a[0]&305){f=u[8](u[4]);let c;for(c=0;c<f.length;c+=1){const d=Fe(u,f,c);t[c]?(t[c].p(d,a),y(t[c],1)):(t[c]=$l(d),t[c].c(),y(t[c],1),t[c].m(r.parentNode,r))}for(x(),c=f.length;c<t.length;c+=1)s(c);Z()}},i(u){if(!n){for(let a=0;a<f.length;a+=1)y(t[a]);n=!0}},o(u){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)H(t[a]);n=!1},d(u){u&&_(e),u&&_(l),oe(t,u),u&&_(r)}}}function $l(o){let e,i,l,r=Pe(new Date(o[19]),"EEEE - MMMM d, yyyy")+"",n,f,t,s,u,a,c;function d(...v){return o[10](o[19],...v)}return u=new Ml({props:{date:o[19],segments:o[4].segments.filter(d),entry:o[5],bundle:o[0].bundle,event:o[4]}}),{c(){e=m("div"),i=m("h3"),l=m("a"),n=D(r),t=T(),s=m("div"),ee(u.$$.fragment),a=T(),this.h()},l(v){e=p(v,"DIV",{class:!0});var E=g(e);i=p(E,"H3",{class:!0});var P=g(i);l=p(P,"A",{href:!0});var A=g(l);n=w(A,r),A.forEach(_),P.forEach(_),t=N(E),s=p(E,"DIV",{class:!0});var V=g(s);le(u.$$.fragment,V),V.forEach(_),a=N(E),E.forEach(_),this.h()},h(){k(l,"href",f="/"+o[5]+"/day/"+o[19]),k(i,"class","mt-4 text-xl uppercase text-gray-500"),k(s,"class","mt-4"),k(e,"class","mb-6")},m(v,E){$(v,e,E),h(e,i),h(i,l),h(l,n),h(e,t),h(e,s),te(u,s,null),h(e,a),c=!0},p(v,E){o=v,(!c||E[0]&16)&&r!==(r=Pe(new Date(o[19]),"EEEE - MMMM d, yyyy")+"")&&j(n,r),(!c||E[0]&48&&f!==(f="/"+o[5]+"/day/"+o[19]))&&k(l,"href",f);const P={};E[0]&16&&(P.date=o[19]),E[0]&16&&(P.segments=o[4].segments.filter(d)),E[0]&32&&(P.entry=o[5]),E[0]&1&&(P.bundle=o[0].bundle),E[0]&16&&(P.event=o[4]),u.$set(P)},i(v){c||(y(u.$$.fragment,v),c=!0)},o(v){H(u.$$.fragment,v),c=!1},d(v){v&&_(e),ie(u)}}}function El(o){var a;let e,i,l=(((a=o[4].venues)==null?void 0:a.length)||0)+"",r,n,f,t,s,u;return s=new he({props:{arr:o[0].bundle.places.filter(o[11]),col:"place",img:"photo"}}),{c(){e=m("h2"),i=D("Venues ("),r=D(l),n=D(")"),f=T(),t=m("div"),ee(s.$$.fragment),this.h()},l(c){e=p(c,"H2",{class:!0});var d=g(e);i=w(d,"Venues ("),r=w(d,l),n=w(d,")"),d.forEach(_),f=N(c),t=p(c,"DIV",{class:!0});var v=g(t);le(s.$$.fragment,v),v.forEach(_),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),k(t,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(c,d){$(c,e,d),h(e,i),h(e,r),h(e,n),$(c,f,d),$(c,t,d),te(s,t,null),u=!0},p(c,d){var E;(!u||d[0]&16)&&l!==(l=(((E=c[4].venues)==null?void 0:E.length)||0)+"")&&j(r,l);const v={};d[0]&17&&(v.arr=c[0].bundle.places.filter(c[11])),s.$set(v)},i(c){u||(y(s.$$.fragment,c),u=!0)},o(c){H(s.$$.fragment,c),u=!1},d(c){c&&_(e),c&&_(f),c&&_(t),ie(s)}}}function Dl(o){var a;let e,i,l=(((a=o[4].speakers)==null?void 0:a.length)||0)+"",r,n,f,t,s,u;return s=new he({props:{arr:o[4].speakers}}),{c(){e=m("h2"),i=D("Speakers ("),r=D(l),n=D(")"),f=T(),t=m("div"),ee(s.$$.fragment),this.h()},l(c){e=p(c,"H2",{class:!0});var d=g(e);i=w(d,"Speakers ("),r=w(d,l),n=w(d,")"),d.forEach(_),f=N(c),t=p(c,"DIV",{class:!0});var v=g(t);le(s.$$.fragment,v),v.forEach(_),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),k(t,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(c,d){$(c,e,d),h(e,i),h(e,r),h(e,n),$(c,f,d),$(c,t,d),te(s,t,null),u=!0},p(c,d){var E;(!u||d[0]&16)&&l!==(l=(((E=c[4].speakers)==null?void 0:E.length)||0)+"")&&j(r,l);const v={};d[0]&16&&(v.arr=c[4].speakers),s.$set(v)},i(c){u||(y(s.$$.fragment,c),u=!0)},o(c){H(s.$$.fragment,c),u=!1},d(c){c&&_(e),c&&_(f),c&&_(t),ie(s)}}}function wl(o){var a;let e,i,l=(((a=o[4].events)==null?void 0:a.length)||0)+"",r,n,f,t,s,u;return s=new he({props:{arr:o[4].events}}),{c(){e=m("h2"),i=D("Sub-Events ("),r=D(l),n=D(")"),f=T(),t=m("div"),ee(s.$$.fragment),this.h()},l(c){e=p(c,"H2",{class:!0});var d=g(e);i=w(d,"Sub-Events ("),r=w(d,l),n=w(d,")"),d.forEach(_),f=N(c),t=p(c,"DIV",{class:!0});var v=g(t);le(s.$$.fragment,v),v.forEach(_),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),k(t,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center")},m(c,d){$(c,e,d),h(e,i),h(e,r),h(e,n),$(c,f,d),$(c,t,d),te(s,t,null),u=!0},p(c,d){var E;(!u||d[0]&16)&&l!==(l=(((E=c[4].events)==null?void 0:E.length)||0)+"")&&j(r,l);const v={};d[0]&16&&(v.arr=c[4].events),s.$set(v)},i(c){u||(y(s.$$.fragment,c),u=!0)},o(c){H(s.$$.fragment,c),u=!1},d(c){c&&_(e),c&&_(f),c&&_(t),ie(s)}}}function Il(o){var a,c;let e,i,l=((a=o[4].events)==null?void 0:a.map(o[12]).length)+"",r,n,f,t,s,u;return s=new he({props:{arr:(c=o[4].events)==null?void 0:c.map(o[13]),col:"event",img:"logo"}}),{c(){e=m("h2"),i=D("Big events ("),r=D(l),n=D(")"),f=T(),t=m("div"),ee(s.$$.fragment),this.h()},l(d){e=p(d,"H2",{class:!0});var v=g(e);i=w(v,"Big events ("),r=w(v,l),n=w(v,")"),v.forEach(_),f=N(d),t=p(d,"DIV",{class:!0});var E=g(t);le(s.$$.fragment,E),E.forEach(_),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),k(t,"class","grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-4 text-2xl text-center")},m(d,v){$(d,e,v),h(e,i),h(e,r),h(e,n),$(d,f,v),$(d,t,v),te(s,t,null),u=!0},p(d,v){var P,A;(!u||v[0]&17)&&l!==(l=((P=d[4].events)==null?void 0:P.map(d[12]).length)+"")&&j(r,l);const E={};v[0]&17&&(E.arr=(A=d[4].events)==null?void 0:A.map(d[13])),s.$set(E)},i(d){u||(y(s.$$.fragment,d),u=!0)},o(d){H(s.$$.fragment,d),u=!1},d(d){d&&_(e),d&&_(f),d&&_(t),ie(s)}}}function Vl(o){let e,i,l=(o[0].bundle.events.filter(o[14]).length||0)+"",r,n,f,t,s,u;return s=new he({props:{arr:o[0].bundle.events.filter(o[15]),col:"event",img:"logo"}}),{c(){e=m("h2"),i=D("Events ("),r=D(l),n=D(")"),f=T(),t=m("div"),ee(s.$$.fragment),this.h()},l(a){e=p(a,"H2",{class:!0});var c=g(e);i=w(c,"Events ("),r=w(c,l),n=w(c,")"),c.forEach(_),f=N(a),t=p(a,"DIV",{class:!0});var d=g(t);le(s.$$.fragment,d),d.forEach(_),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),k(t,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(a,c){$(a,e,c),h(e,i),h(e,r),h(e,n),$(a,f,c),$(a,t,c),te(s,t,null),u=!0},p(a,c){(!u||c[0]&17)&&l!==(l=(a[0].bundle.events.filter(a[14]).length||0)+"")&&j(r,l);const d={};c[0]&17&&(d.arr=a[0].bundle.events.filter(a[15])),s.$set(d)},i(a){u||(y(s.$$.fragment,a),u=!0)},o(a){H(s.$$.fragment,a),u=!1},d(a){a&&_(e),a&&_(f),a&&_(t),ie(s)}}}function yl(o){let e,i,l=(o[0].bundle.events.filter(o[16]).length||0)+"",r,n,f,t,s,u;return s=new he({props:{arr:o[0].bundle.events.filter(o[17]),col:"event",img:"logo"}}),{c(){e=m("h2"),i=D("Events ("),r=D(l),n=D(")"),f=T(),t=m("div"),ee(s.$$.fragment),this.h()},l(a){e=p(a,"H2",{class:!0});var c=g(e);i=w(c,"Events ("),r=w(c,l),n=w(c,")"),c.forEach(_),f=N(a),t=p(a,"DIV",{class:!0});var d=g(t);le(s.$$.fragment,d),d.forEach(_),this.h()},h(){k(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),k(t,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(a,c){$(a,e,c),h(e,i),h(e,r),h(e,n),$(a,f,c),$(a,t,c),te(s,t,null),u=!0},p(a,c){(!u||c[0]&17)&&l!==(l=(a[0].bundle.events.filter(a[16]).length||0)+"")&&j(r,l);const d={};c[0]&17&&(d.arr=a[0].bundle.events.filter(a[17])),s.$set(d)},i(a){u||(y(s.$$.fragment,a),u=!0)},o(a){H(s.$$.fragment,a),u=!1},d(a){a&&_(e),a&&_(f),a&&_(t),ie(s)}}}function lt(o){var He,Ce;let e,i,l,r,n,f,t,s,u,a,c,d,v,E=o[3].params.type+"",P,A,V,B,S,M,b,C,K=o[4].name+"",re,ye,me,pe,ge,be,Ae,Se,ke,$e,Ee,De,we,ae,ne;document.title=e=o[4].name+" | #PBW"+o[3].params.entry,S=new Ol({props:{item:o[4],img:((He=_e.collections[o[2]])==null?void 0:He.img)||"logo",aspect:((Ce=_e[o[1]])==null?void 0:Ce.aspect)||"aspect-square",width:"w-48 md:w-56 mr-5",rounded:"rounded-xl"}});let q=o[1]==="event"&&Qe(o),L=o[1]==="speaker"&&Ze(o),F=o[1]==="event"&&ll(o),Q=o[1]==="place"&&ol(o),X=o[4].links&&hl(o),Y=o[4].registration&&ml(o),R=(o[4].desc||o[4].description)&&gl(o),U=o[1]==="event"&&bl(o),W=o[1]==="union"&&Il(o),z=o[1]==="speaker"&&Vl(o),G=o[1]==="place"&&yl(o);return ae=new jl({props:{col:o[1],item:o[4],bundle:o[0].bundle}}),{c(){i=T(),l=m("div"),r=m("div"),n=m("div"),f=m("div"),t=m("h1"),s=m("a"),u=D("#PBW23"),c=m("a"),d=m("span"),v=D("."),P=D(E),V=T(),B=m("div"),ee(S.$$.fragment),M=T(),b=m("div"),C=m("h2"),re=D(K),ye=T(),q&&q.c(),me=T(),L&&L.c(),pe=T(),F&&F.c(),ge=T(),Q&&Q.c(),be=T(),X&&X.c(),Ae=T(),Y&&Y.c(),Se=T(),R&&R.c(),ke=T(),U&&U.c(),$e=T(),W&&W.c(),Ee=T(),z&&z.c(),De=T(),G&&G.c(),we=T(),ee(ae.$$.fragment),this.h()},l(I){Nl("svelte-80w11w",document.head).forEach(_),i=N(I),l=p(I,"DIV",{class:!0});var ce=g(l);r=p(ce,"DIV",{class:!0});var ue=g(r);n=p(ue,"DIV",{class:!0});var J=g(n);f=p(J,"DIV",{class:!0});var ve=g(f);t=p(ve,"H1",{class:!0});var Te=g(t);s=p(Te,"A",{href:!0});var Me=g(s);u=w(Me,"#PBW23"),Me.forEach(_),c=p(Te,"A",{href:!0});var Oe=g(c);d=p(Oe,"SPAN",{class:!0});var Ne=g(d);v=w(Ne,"."),P=w(Ne,E),Ne.forEach(_),Oe.forEach(_),Te.forEach(_),ve.forEach(_),V=N(J),B=p(J,"DIV",{class:!0});var de=g(B);le(S.$$.fragment,de),M=N(de),b=p(de,"DIV",{class:!0});var se=g(b);C=p(se,"H2",{class:!0});var je=g(C);re=w(je,K),je.forEach(_),ye=N(se),q&&q.l(se),me=N(se),L&&L.l(se),pe=N(se),F&&F.l(se),ge=N(se),Q&&Q.l(se),be=N(se),X&&X.l(se),se.forEach(_),Ae=N(de),Y&&Y.l(de),de.forEach(_),Se=N(J),R&&R.l(J),ke=N(J),U&&U.l(J),$e=N(J),W&&W.l(J),Ee=N(J),z&&z.l(J),De=N(J),G&&G.l(J),we=N(J),le(ae.$$.fragment,J),J.forEach(_),ue.forEach(_),ce.forEach(_),this.h()},h(){k(s,"href",a="/"+o[3].params.entry),k(d,"class","text-pbw-yellow"),k(c,"href",A="/"+o[3].params.entry+"/"+o[6][o[3].params.type]),k(t,"class","text-4xl md:text-5xl font-bold text-pbw-red"),k(f,"class","flex gap-8 mb-6 md:mb-10"),k(C,"class","text-4xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mt-4 md:mt-0"),k(b,"class","flex-grow"),k(B,"class","flex flex-wrap md:flex-nowrap w-full"),k(n,"class","mx-4 xl:mx-0"),k(r,"class","max-w-7xl mx-auto pt-5 md:pt-10"),k(l,"class","w-full dark:text-gray-400")},m(I,O){$(I,i,O),$(I,l,O),h(l,r),h(r,n),h(n,f),h(f,t),h(t,s),h(s,u),h(t,c),h(c,d),h(d,v),h(d,P),h(n,V),h(n,B),te(S,B,null),h(B,M),h(B,b),h(b,C),h(C,re),h(b,ye),q&&q.m(b,null),h(b,me),L&&L.m(b,null),h(b,pe),F&&F.m(b,null),h(b,ge),Q&&Q.m(b,null),h(b,be),X&&X.m(b,null),h(B,Ae),Y&&Y.m(B,null),h(n,Se),R&&R.m(n,null),h(n,ke),U&&U.m(n,null),h(n,$e),W&&W.m(n,null),h(n,Ee),z&&z.m(n,null),h(n,De),G&&G.m(n,null),h(n,we),te(ae,n,null),ne=!0},p(I,O){var J,ve;(!ne||O[0]&24)&&e!==(e=I[4].name+" | #PBW"+I[3].params.entry)&&(document.title=e),(!ne||O[0]&8&&a!==(a="/"+I[3].params.entry))&&k(s,"href",a),(!ne||O[0]&8)&&E!==(E=I[3].params.type+"")&&j(P,E),(!ne||O[0]&8&&A!==(A="/"+I[3].params.entry+"/"+I[6][I[3].params.type]))&&k(c,"href",A);const ce={};O[0]&16&&(ce.item=I[4]),O[0]&4&&(ce.img=((J=_e.collections[I[2]])==null?void 0:J.img)||"logo"),O[0]&2&&(ce.aspect=((ve=_e[I[1]])==null?void 0:ve.aspect)||"aspect-square"),S.$set(ce),(!ne||O[0]&16)&&K!==(K=I[4].name+"")&&j(re,K),I[1]==="event"?q?(q.p(I,O),O[0]&2&&y(q,1)):(q=Qe(I),q.c(),y(q,1),q.m(b,me)):q&&(x(),H(q,1,1,()=>{q=null}),Z()),I[1]==="speaker"?L?(L.p(I,O),O[0]&2&&y(L,1)):(L=Ze(I),L.c(),y(L,1),L.m(b,pe)):L&&(x(),H(L,1,1,()=>{L=null}),Z()),I[1]==="event"?F?(F.p(I,O),O[0]&2&&y(F,1)):(F=ll(I),F.c(),y(F,1),F.m(b,ge)):F&&(x(),H(F,1,1,()=>{F=null}),Z()),I[1]==="place"?Q?Q.p(I,O):(Q=ol(I),Q.c(),Q.m(b,be)):Q&&(Q.d(1),Q=null),I[4].links?X?X.p(I,O):(X=hl(I),X.c(),X.m(b,null)):X&&(X.d(1),X=null),I[4].registration?Y?Y.p(I,O):(Y=ml(I),Y.c(),Y.m(B,null)):Y&&(Y.d(1),Y=null),I[4].desc||I[4].description?R?(R.p(I,O),O[0]&16&&y(R,1)):(R=gl(I),R.c(),y(R,1),R.m(n,ke)):R&&(x(),H(R,1,1,()=>{R=null}),Z()),I[1]==="event"?U?(U.p(I,O),O[0]&2&&y(U,1)):(U=bl(I),U.c(),y(U,1),U.m(n,$e)):U&&(x(),H(U,1,1,()=>{U=null}),Z()),I[1]==="union"?W?(W.p(I,O),O[0]&2&&y(W,1)):(W=Il(I),W.c(),y(W,1),W.m(n,Ee)):W&&(x(),H(W,1,1,()=>{W=null}),Z()),I[1]==="speaker"?z?(z.p(I,O),O[0]&2&&y(z,1)):(z=Vl(I),z.c(),y(z,1),z.m(n,De)):z&&(x(),H(z,1,1,()=>{z=null}),Z()),I[1]==="place"?G?(G.p(I,O),O[0]&2&&y(G,1)):(G=yl(I),G.c(),y(G,1),G.m(n,we)):G&&(x(),H(G,1,1,()=>{G=null}),Z());const ue={};O[0]&2&&(ue.col=I[1]),O[0]&16&&(ue.item=I[4]),O[0]&1&&(ue.bundle=I[0].bundle),ae.$set(ue)},i(I){ne||(y(S.$$.fragment,I),y(q),y(L),y(F),y(R),y(U),y(W),y(z),y(G),y(ae.$$.fragment,I),ne=!0)},o(I){H(S.$$.fragment,I),H(q),H(L),H(F),H(R),H(U),H(W),H(z),H(G),H(ae.$$.fragment,I),ne=!1},d(I){I&&_(i),I&&_(l),ie(S),q&&q.d(),L&&L.d(),F&&F.d(),Q&&Q.d(),X&&X.d(),Y&&Y.d(),R&&R.d(),U&&U.d(),W&&W.d(),z&&z.d(),G&&G.d(),ie(ae)}}}function tt(o,e,i){let l,r,n,f,t;Pl(o,Cl,b=>i(3,t=b));let{data:s}=e;const u=Object.fromEntries(Object.keys(_e.collections).map(b=>[_e.collections[b].model,b])),a={twitter:{col:b=>b.twitter?"https://twitter.com/"+b.twitter:null},web:{col:b=>{var C;return(C=b.web)==null?void 0:C.url}},linkedin:{col:b=>b.linkedin?"https://linkedin.com/in/"+b.linkedin:null}};function c(b){const C=[];for(const K of b.segments){const re=Pe(new Date(K.startTime),"yyyy-MM-dd");C.includes(re)||C.push(re)}return C}const d=b=>{const C=s.bundle.places.find(K=>K.id===b);return`<a href="/${t.params.entry}/place/${C.id}" class="underline hover:no-underline">${C.name}</a>`},v=(b,C)=>C.startTime.match(new RegExp("^"+b)),E=b=>f.venues.includes(b.id),P=b=>s.bundle.events.find(C=>C.id===b),A=b=>s.bundle.events.find(C=>C.id===b),V=b=>{var C;return(C=b.speakers)==null?void 0:C.find(K=>K.id===f.id)},B=b=>{var C;return(C=b.speakers)==null?void 0:C.find(K=>K.id===f.id)},S=b=>{var C;return(C=b.venues)==null?void 0:C.includes(f.id)},M=b=>{var C;return(C=b.venues)==null?void 0:C.includes(f.id)};return o.$$set=b=>{"data"in b&&i(0,s=b.data)},o.$$.update=()=>{o.$$.dirty[0]&8&&i(5,l=t.params.entry),o.$$.dirty[0]&8&&i(1,r=t.params.type),o.$$.dirty[0]&2&&i(2,n=u[r]),o.$$.dirty[0]&13&&i(4,f=s.bundle[n].find(b=>b.id===t.params.slug)),o.$$.dirty[0]&3&&s.schema&&s.schema.definitions[r]},[s,r,n,t,f,l,u,a,c,d,v,E,P,A,V,B,S,M]}class ct extends Al{constructor(e){super(),Sl(this,e,tt,lt,Tl,{data:0},null,[-1,-1])}}export{ct as default};
