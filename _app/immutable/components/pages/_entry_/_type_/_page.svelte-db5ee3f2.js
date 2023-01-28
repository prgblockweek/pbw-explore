import{S as st,i as ft,s as rt,a as B,e as Ie,I as it,h as i,c as H,b as k,f as K,t as Q,d as he,G as ot,o as at,k as w,q,w as be,l as T,m as A,r as P,x as Ee,n as z,H as D,y as ke,u as Z,g as ce,J as ge,z as we,K as oe,p as Ae,B as et}from"../../../../chunks/index-11c878f8.js";import{p as nt}from"../../../../chunks/stores-b90b4c3f.js";import{c as ve,E as ut}from"../../../../chunks/EventTypeBadge-65a24246.js";import{j as ae}from"../../../../chunks/singletons-89b665b0.js";import{F as ht,f as Be,g as _e,S as tt}from"../../../../chunks/Footer-ce6674ad.js";ae.disable_scroll_handling;const ct=ae.goto;ae.invalidate;ae.invalidateAll;ae.preload_data;ae.preload_code;ae.before_navigate;ae.after_navigate;var _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ze={},dt={get exports(){return ze},set exports(a){ze=a}};(function(a,e){(function(t,f){a.exports=f()})(_t,function(){return function(l){var t={};function f(r){if(t[r])return t[r].exports;var s=t[r]={exports:{},id:r,loaded:!1};return l[r].call(s.exports,s,s.exports,f),s.loaded=!0,s.exports}return f.m=l,f.c=t,f.p="",f(0)}([function(l,t,f){const r=f(1),s=f(2),o=new Array(4);function _(g){for(let m=0;m<o.length;m++)o[m]=0;for(let m=0;m<g.length;m++)o[m%4]=(o[m%4]<<5)-o[m%4]+g.charCodeAt(m)}function u(){const g=o[0]^o[0]<<11;return o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=o[3]^o[3]>>19^g^g>>8,(o[3]>>>0)/(1<<31>>>0)}function v(){const g=Math.floor(u()*360),m=u()*60+40,E=(u()+u()+u()+u())*25;return[g/360,m/100,E/100]}function n(g){const m=g,E=g,b=Math.ceil(m/2),N=m-b,$=[];for(let p=0;p<E;p++){let y=[];for(let R=0;R<b;R++)y[R]=Math.floor(u()*2.3);const G=y.slice(0,N).reverse();y=y.concat(G);for(let R=0;R<y.length;R++)$.push(y[R])}return $}function c(g,m,E,b,N,$){for(let p=0;p<b;p++)for(let y=0;y<N;y++)g.buffer[g.index(m+p,E+y)]=$}function I(g){if(!g.seed)throw new Error("No seed provided");return _(g.seed),Object.assign({size:8,scale:16,color:v(),bgcolor:v(),spotcolor:v()},g)}function d(g){const m=I({seed:g.toLowerCase()}),E=n(m.size),b=Math.sqrt(E.length),N=new r(m.size*m.scale,m.size*m.scale,3);N.color(...s(...m.bgcolor));const $=N.color(...s(...m.color)),p=N.color(...s(...m.spotcolor));for(let y=0;y<E.length;y++){const G=Math.floor(y/b),R=y%b;if(E[y]){const W=E[y]==1?$:p;c(N,R*m.scale,G*m.scale,m.scale,m.scale,W)}}return`data:image/png;base64,${N.getBase64()}`}l.exports=d},function(l,t){/**
 * A handy class to calculate color values.
 *
 * @version 1.0
 * @author Robert Eisele <robert@xarg.org>
 * @copyright Copyright (c) 2010, Robert Eisele
 * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 *
 */l.exports=function(f,r,s){function o(b,N){for(var $=2;$<arguments.length;$++)for(var p=0;p<arguments[$].length;p++)b[N++]=arguments[$].charAt(p)}function _(b){return String.fromCharCode(b>>8&255,b&255)}function u(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}function v(b){return String.fromCharCode(b&255,b>>8&255)}this.width=f,this.height=r,this.depth=s,this.pix_size=r*(f+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=4+4+13+4,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=4+4+3*s+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=4+4+s+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=4+4+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=4+4+4,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var n=new Array,c=0;c<this.buffer_size;c++)this.buffer[c]="\0";o(this.buffer,this.ihdr_offs,u(this.ihdr_size-12),"IHDR",u(f),u(r),"\b"),o(this.buffer,this.plte_offs,u(this.plte_size-12),"PLTE"),o(this.buffer,this.trns_offs,u(this.trns_size-12),"tRNS"),o(this.buffer,this.idat_offs,u(this.idat_size-12),"IDAT"),o(this.buffer,this.iend_offs,u(this.iend_size-12),"IEND");var I=8+(7<<4)<<8|3<<6;I+=31-I%31,o(this.buffer,this.idat_offs+8,_(I));for(var c=0;(c<<16)-1<this.pix_size;c++){var d,g;c+65535<this.pix_size?(d=65535,g="\0"):(d=this.pix_size-(c<<16)-c,g=""),o(this.buffer,this.idat_offs+8+2+(c<<16)+(c<<2),g,v(d),v(~d))}for(var c=0;c<256;c++){for(var m=c,E=0;E<8;E++)m&1?m=-306674912^m>>1&2147483647:m=m>>1&2147483647;n[c]=m}this.index=function(b,N){var $=N*(this.width+1)+b+1,p=this.idat_offs+8+2+5*Math.floor($/65535+1)+$;return p},this.color=function(b,N,$,p){p=p>=0?p:255;var y=((p<<8|b)<<8|N)<<8|$;if(typeof this.palette[y]>"u"){if(this.pindex==this.depth)return"\0";var G=this.plte_offs+8+3*this.pindex;this.buffer[G+0]=String.fromCharCode(b),this.buffer[G+1]=String.fromCharCode(N),this.buffer[G+2]=String.fromCharCode($),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(p),this.palette[y]=String.fromCharCode(this.pindex++)}return this.palette[y]},this.getBase64=function(){var b=this.getDump(),N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",$,p,y,G,R,W,O,V=b.length,M=0,x="";do $=b.charCodeAt(M),G=$>>2,p=b.charCodeAt(M+1),R=($&3)<<4|p>>4,y=b.charCodeAt(M+2),V<M+2?W=64:W=(p&15)<<2|y>>6,V<M+3?O=64:O=y&63,x+=N.charAt(G)+N.charAt(R)+N.charAt(W)+N.charAt(O);while((M+=3)<V);return x},this.getDump=function(){for(var b=65521,N=5552,$=1,p=0,y=N,G=0;G<this.height;G++)for(var R=-1;R<this.width;R++)$+=this.buffer[this.index(R,G)].charCodeAt(0),p+=$,(y-=1)==0&&($%=b,p%=b,y=N);$%=b,p%=b,o(this.buffer,this.idat_offs+this.idat_size-8,u(p<<16|$));function W(O,V,M){for(var x=-1,se=4;se<M-4;se+=1)x=n[(x^O[V+se].charCodeAt(0))&255]^x>>8&16777215;o(O,V+M-4,u(x^-1))}return W(this.buffer,this.ihdr_offs,this.ihdr_size),W(this.buffer,this.plte_offs,this.plte_size),W(this.buffer,this.trns_offs,this.trns_size),W(this.buffer,this.idat_offs,this.idat_size),W(this.buffer,this.iend_offs,this.iend_size),`PNG\r

`+this.buffer.join("")}}},function(l,t){function f(s,o,_){return _<0&&(_+=1),_>1&&(_-=1),_<1/6?s+(o-s)*6*_:_<1/2?o:_<2/3?s+(o-s)*(2/3-_)*6:s}function r(s,o,_){let u,v,n;if(o==0)u=v=n=_;else{const c=_<.5?_*(1+o):_+o-_*o,I=2*_-c;u=f(I,c,s+1/3),v=f(I,c,s),n=f(I,c,s-1/3)}return[Math.round(u*255),Math.round(v*255),Math.round(n*255),255]}l.exports=r}])})})(dt);const He=ze;function Me(a,e,l){const t=a.slice();return t[8]=e[l],t}function Se(a,e,l){const t=a.slice();return t[11]=e[l],t}function je(a,e,l){const t=a.slice();return t[11]=e[l],t}function Ve(a,e,l){const t=a.slice();return t[2]=e[l],t}function qe(a){let e,l,t,f,r,s,o,_,u,v,n=a[1].params.type+"",c,I,d,g,m,E=a[4].title+"",b,N,$=a[3].length+"",p,y,G,R,W,O,V,M,x,se,fe,Y,ue,ee,X,U=a[2]==="events"&&Pe(),h=a[2]==="speakers"&&Ge(),C=a[2]==="media-partners"&&Oe(),S=a[2]==="benefits"&&Ue(),te=a[3],J=[];for(let j=0;j<te.length;j+=1)J[j]=xe(Me(a,te,j));const pe=j=>Q(J[j],1,1,()=>{J[j]=null});return ee=new ht({props:{bundle:a[0].bundle}}),{c(){e=w("div"),l=w("div"),t=w("div"),f=w("div"),r=w("h1"),s=w("a"),o=q("#PBW23"),u=w("span"),v=q("."),c=q(n),I=B(),d=w("div"),g=B(),m=w("h2"),b=q(E),N=q(" ("),p=q($),y=q(")"),G=B(),R=w("div"),W=w("table"),O=w("thead"),V=w("tr"),U&&U.c(),M=B(),h&&h.c(),x=B(),C&&C.c(),se=B(),S&&S.c(),fe=B(),Y=w("tbody");for(let j=0;j<J.length;j+=1)J[j].c();ue=B(),be(ee.$$.fragment),this.h()},l(j){e=T(j,"DIV",{class:!0});var L=A(e);l=T(L,"DIV",{class:!0});var le=A(l);t=T(le,"DIV",{class:!0});var F=A(t);f=T(F,"DIV",{class:!0});var re=A(f);r=T(re,"H1",{class:!0});var ne=A(r);s=T(ne,"A",{href:!0});var ye=A(s);o=P(ye,"#PBW23"),ye.forEach(i),u=T(ne,"SPAN",{class:!0});var Te=A(u);v=P(Te,"."),c=P(Te,n),Te.forEach(i),ne.forEach(i),re.forEach(i),I=H(F),d=T(F,"DIV",{class:!0});var lt=A(d);lt.forEach(i),g=H(F),m=T(F,"H2",{class:!0});var de=A(m);b=P(de,E),N=P(de," ("),p=P(de,$),y=P(de,")"),de.forEach(i),G=H(F),R=T(F,"DIV",{class:!0});var $e=A(R);W=T($e,"TABLE",{class:!0});var me=A(W);O=T(me,"THEAD",{});var Ce=A(O);V=T(Ce,"TR",{class:!0});var ie=A(V);U&&U.l(ie),M=H(ie),h&&h.l(ie),x=H(ie),C&&C.l(ie),se=H(ie),S&&S.l(ie),ie.forEach(i),Ce.forEach(i),fe=H(me),Y=T(me,"TBODY",{});var Ne=A(Y);for(let De=0;De<J.length;De+=1)J[De].l(Ne);Ne.forEach(i),me.forEach(i),$e.forEach(i),ue=H(F),Ee(ee.$$.fragment,F),F.forEach(i),le.forEach(i),L.forEach(i),this.h()},h(){z(s,"href",_="/"+a[1].params.entry),z(u,"class","text-pbw-yellow"),z(r,"class","text-5xl font-bold text-pbw-red"),z(f,"class","flex gap-8 mb-10"),z(d,"class","flex flex-wrap md:flex-nowrap w-full"),z(m,"class","text-2xl uppercase font-bold text-gray-500"),z(V,"class","text-left svelte-z9qojq"),z(W,"class","w-full svelte-z9qojq"),z(R,"class","text-xl mt-6"),z(t,"class","mx-4 xl:mx-0"),z(l,"class","max-w-7xl mx-auto pt-5 md:pt-10"),z(e,"class","w-full")},m(j,L){k(j,e,L),D(e,l),D(l,t),D(t,f),D(f,r),D(r,s),D(s,o),D(r,u),D(u,v),D(u,c),D(t,I),D(t,d),D(t,g),D(t,m),D(m,b),D(m,N),D(m,p),D(m,y),D(t,G),D(t,R),D(R,W),D(W,O),D(O,V),U&&U.m(V,null),D(V,M),h&&h.m(V,null),D(V,x),C&&C.m(V,null),D(V,se),S&&S.m(V,null),D(W,fe),D(W,Y);for(let le=0;le<J.length;le+=1)J[le].m(Y,null);D(t,ue),ke(ee,t,null),X=!0},p(j,L){if((!X||L&2&&_!==(_="/"+j[1].params.entry))&&z(s,"href",_),(!X||L&2)&&n!==(n=j[1].params.type+"")&&Z(c,n),(!X||L&16)&&E!==(E=j[4].title+"")&&Z(b,E),(!X||L&8)&&$!==($=j[3].length+"")&&Z(p,$),j[2]==="events"?U||(U=Pe(),U.c(),U.m(V,M)):U&&(U.d(1),U=null),j[2]==="speakers"?h||(h=Ge(),h.c(),h.m(V,x)):h&&(h.d(1),h=null),j[2]==="media-partners"?C||(C=Oe(),C.c(),C.m(V,se)):C&&(C.d(1),C=null),j[2]==="benefits"?S||(S=Ue(),S.c(),S.m(V,null)):S&&(S.d(1),S=null),L&60){te=j[3];let F;for(F=0;F<te.length;F+=1){const re=Me(j,te,F);J[F]?(J[F].p(re,L),K(J[F],1)):(J[F]=xe(re),J[F].c(),K(J[F],1),J[F].m(Y,null))}for(ce(),F=te.length;F<J.length;F+=1)pe(F);he()}const le={};L&1&&(le.bundle=j[0].bundle),ee.$set(le)},i(j){if(!X){for(let L=0;L<te.length;L+=1)K(J[L]);K(ee.$$.fragment,j),X=!0}},o(j){J=J.filter(Boolean);for(let L=0;L<J.length;L+=1)Q(J[L]);Q(ee.$$.fragment,j),X=!1},d(j){j&&i(e),U&&U.d(),h&&h.d(),C&&C.d(),S&&S.d(),ge(J,j),we(ee)}}}function Pe(a){let e,l,t,f,r,s,o,_,u,v,n,c,I;return{c(){e=w("th"),l=q("📅"),t=B(),f=w("th"),r=B(),s=w("th"),o=q("Name"),_=B(),u=w("th"),v=q("📍"),n=B(),c=w("th"),I=q("👥"),this.h()},l(d){e=T(d,"TH",{class:!0});var g=A(e);l=P(g,"📅"),g.forEach(i),t=H(d),f=T(d,"TH",{}),A(f).forEach(i),r=H(d),s=T(d,"TH",{});var m=A(s);o=P(m,"Name"),m.forEach(i),_=H(d),u=T(d,"TH",{});var E=A(u);v=P(E,"📍"),E.forEach(i),n=H(d),c=T(d,"TH",{});var b=A(c);I=P(b,"👥"),b.forEach(i),this.h()},h(){z(e,"class","text-right pr-4")},m(d,g){k(d,e,g),D(e,l),k(d,t,g),k(d,f,g),k(d,r,g),k(d,s,g),D(s,o),k(d,_,g),k(d,u,g),D(u,v),k(d,n,g),k(d,c,g),D(c,I)},d(d){d&&i(e),d&&i(t),d&&i(f),d&&i(r),d&&i(s),d&&i(_),d&&i(u),d&&i(n),d&&i(c)}}}function Ge(a){let e,l,t,f,r,s,o,_,u,v,n,c,I;return{c(){e=w("th"),l=B(),t=w("th"),f=q("Name"),r=B(),s=w("th"),o=q("🌎"),_=B(),u=w("th"),v=q("🐦"),n=B(),c=w("th"),I=q("Bio")},l(d){e=T(d,"TH",{}),A(e).forEach(i),l=H(d),t=T(d,"TH",{});var g=A(t);f=P(g,"Name"),g.forEach(i),r=H(d),s=T(d,"TH",{});var m=A(s);o=P(m,"🌎"),m.forEach(i),_=H(d),u=T(d,"TH",{});var E=A(u);v=P(E,"🐦"),E.forEach(i),n=H(d),c=T(d,"TH",{});var b=A(c);I=P(b,"Bio"),b.forEach(i)},m(d,g){k(d,e,g),k(d,l,g),k(d,t,g),D(t,f),k(d,r,g),k(d,s,g),D(s,o),k(d,_,g),k(d,u,g),D(u,v),k(d,n,g),k(d,c,g),D(c,I)},d(d){d&&i(e),d&&i(l),d&&i(t),d&&i(r),d&&i(s),d&&i(_),d&&i(u),d&&i(n),d&&i(c)}}}function Oe(a){let e,l,t,f,r,s,o,_,u,v;return{c(){e=w("th"),l=B(),t=w("th"),f=q("Name"),r=B(),s=w("th"),o=q("🌎"),_=B(),u=w("th"),v=q("Description")},l(n){e=T(n,"TH",{}),A(e).forEach(i),l=H(n),t=T(n,"TH",{});var c=A(t);f=P(c,"Name"),c.forEach(i),r=H(n),s=T(n,"TH",{});var I=A(s);o=P(I,"🌎"),I.forEach(i),_=H(n),u=T(n,"TH",{});var d=A(u);v=P(d,"Description"),d.forEach(i)},m(n,c){k(n,e,c),k(n,l,c),k(n,t,c),D(t,f),k(n,r,c),k(n,s,c),D(s,o),k(n,_,c),k(n,u,c),D(u,v)},d(n){n&&i(e),n&&i(l),n&&i(t),n&&i(r),n&&i(s),n&&i(_),n&&i(u)}}}function Ue(a){let e,l,t,f;return{c(){e=w("th"),l=B(),t=w("th"),f=q("Name")},l(r){e=T(r,"TH",{}),A(e).forEach(i),l=H(r),t=T(r,"TH",{});var s=A(t);f=P(s,"Name"),s.forEach(i)},m(r,s){k(r,e,s),k(r,l,s),k(r,t,s),D(t,f)},d(r){r&&i(e),r&&i(l),r&&i(t)}}}function We(a){let e,l=Be(a[8])+"",t,f,r,s,o,_,u,v,n,c=a[8].name+"",I,d,g,m,E,b,N,$,p,y,G;function R(h,C){if(h[8].logo)return mt;if(h[8].types&&h[8].types[0])return pt}let W=R(a),O=W&&W(a),V=a[8].types,M=[];for(let h=0;h<V.length;h+=1)M[h]=Re(Ve(a,V,h));const x=h=>Q(M[h],1,1,()=>{M[h]=null});function se(h,C){return h[8].venueUrl?Et:h[8].venueName&&h[8].venueName!=="TBA"?bt:vt}let fe=se(a),Y=fe(a);function ue(h,C){return h[8].attendees?gt:kt}let ee=ue(a),X=ee(a),U=a[8].languages&&a[8].languages.length>0&&Fe(a);return{c(){e=w("td"),t=q(l),f=B(),r=w("td"),s=w("a"),O&&O.c(),_=B(),u=w("td"),v=w("div"),n=w("a"),I=q(c),g=B(),m=w("div");for(let h=0;h<M.length;h+=1)M[h].c();E=B(),b=w("td"),Y.c(),N=B(),$=w("td"),X.c(),p=B(),y=w("td"),U&&U.c(),this.h()},l(h){e=T(h,"TD",{class:!0});var C=A(e);t=P(C,l),C.forEach(i),f=H(h),r=T(h,"TD",{class:!0});var S=A(r);s=T(S,"A",{href:!0});var te=A(s);O&&O.l(te),te.forEach(i),S.forEach(i),_=H(h),u=T(h,"TD",{class:!0});var J=A(u);v=T(J,"DIV",{class:!0});var pe=A(v);n=T(pe,"A",{href:!0,class:!0});var j=A(n);I=P(j,c),j.forEach(i),pe.forEach(i),g=H(J),m=T(J,"DIV",{class:!0});var L=A(m);for(let ne=0;ne<M.length;ne+=1)M[ne].l(L);L.forEach(i),J.forEach(i),E=H(h),b=T(h,"TD",{});var le=A(b);Y.l(le),le.forEach(i),N=H(h),$=T(h,"TD",{});var F=A($);X.l(F),F.forEach(i),p=H(h),y=T(h,"TD",{});var re=A(y);U&&U.l(re),re.forEach(i),this.h()},h(){z(e,"class","text-right pr-4"),z(s,"href",o="/"+a[5]+"/"+a[4].model+"/"+a[8].id),z(r,"class","w-14"),z(n,"href",d="/"+a[5]+"/"+a[4].model+"/"+a[8].id),z(n,"class","text-pbw-red hover:underline"),z(v,"class",""),z(m,"class","flex gap-1 items-center ml-4"),z(u,"class","text-2xl flex items-center h-12")},m(h,C){k(h,e,C),D(e,t),k(h,f,C),k(h,r,C),D(r,s),O&&O.m(s,null),k(h,_,C),k(h,u,C),D(u,v),D(v,n),D(n,I),D(u,g),D(u,m);for(let S=0;S<M.length;S+=1)M[S].m(m,null);k(h,E,C),k(h,b,C),Y.m(b,null),k(h,N,C),k(h,$,C),X.m($,null),k(h,p,C),k(h,y,C),U&&U.m(y,null),G=!0},p(h,C){if((!G||C&8)&&l!==(l=Be(h[8])+"")&&Z(t,l),W===(W=R(h))&&O?O.p(h,C):(O&&O.d(1),O=W&&W(h),O&&(O.c(),O.m(s,null))),(!G||C&24&&o!==(o="/"+h[5]+"/"+h[4].model+"/"+h[8].id))&&z(s,"href",o),(!G||C&8)&&c!==(c=h[8].name+"")&&Z(I,c),(!G||C&24&&d!==(d="/"+h[5]+"/"+h[4].model+"/"+h[8].id))&&z(n,"href",d),C&8){V=h[8].types;let S;for(S=0;S<V.length;S+=1){const te=Ve(h,V,S);M[S]?(M[S].p(te,C),K(M[S],1)):(M[S]=Re(te),M[S].c(),K(M[S],1),M[S].m(m,null))}for(ce(),S=V.length;S<M.length;S+=1)x(S);he()}fe===(fe=se(h))&&Y?Y.p(h,C):(Y.d(1),Y=fe(h),Y&&(Y.c(),Y.m(b,null))),ee===(ee=ue(h))&&X?X.p(h,C):(X.d(1),X=ee(h),X&&(X.c(),X.m($,null))),h[8].languages&&h[8].languages.length>0?U?U.p(h,C):(U=Fe(h),U.c(),U.m(y,null)):U&&(U.d(1),U=null)},i(h){if(!G){for(let C=0;C<V.length;C+=1)K(M[C]);G=!0}},o(h){M=M.filter(Boolean);for(let C=0;C<M.length;C+=1)Q(M[C]);G=!1},d(h){h&&i(e),h&&i(f),h&&i(r),O&&O.d(),h&&i(_),h&&i(u),ge(M,h),h&&i(E),h&&i(b),Y.d(),h&&i(N),h&&i($),X.d(),h&&i(p),h&&i(y),U&&U.d()}}}function pt(a){let e;return{c(){e=w("div"),this.h()},l(l){e=T(l,"DIV",{class:!0,style:!0}),A(e).forEach(i),this.h()},h(){z(e,"class","w-10 h-10 pt-2 rounded"),Ae(e,"background","url("+He("0x"+a[8].hash.substr(0,40))+")"),Ae(e,"background-size","100% 100%")},m(l,t){k(l,e,t)},p(l,t){t&8&&Ae(e,"background","url("+He("0x"+l[8].hash.substr(0,40))+")")},d(l){l&&i(e)}}}function mt(a){let e,l;return{c(){e=w("img"),this.h()},l(t){e=T(t,"IMG",{src:!0,class:!0}),this.h()},h(){oe(e.src,l=a[8].logo)||z(e,"src",l),z(e,"class","w-10 rounded aspect-square object-cover")},m(t,f){k(t,e,f)},p(t,f){f&8&&!oe(e.src,l=t[8].logo)&&z(e,"src",l)},d(t){t&&i(e)}}}function Re(a){let e,l;return e=new ut({props:{type:a[2]}}),{c(){be(e.$$.fragment)},l(t){Ee(e.$$.fragment,t)},m(t,f){ke(e,t,f),l=!0},p(t,f){const r={};f&8&&(r.type=t[2]),e.$set(r)},i(t){l||(K(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){we(e,t)}}}function vt(a){let e,l;return{c(){e=w("span"),l=q("TBA"),this.h()},l(t){e=T(t,"SPAN",{class:!0});var f=A(e);l=P(f,"TBA"),f.forEach(i),this.h()},h(){z(e,"class","opacity-20")},m(t,f){k(t,e,f),D(e,l)},p:et,d(t){t&&i(e)}}}function bt(a){let e=a[8].venueName+"",l;return{c(){l=q(e)},l(t){l=P(t,e)},m(t,f){k(t,l,f)},p(t,f){f&8&&e!==(e=t[8].venueName+"")&&Z(l,e)},d(t){t&&i(l)}}}function Et(a){let e,l=a[8].venueName+"",t,f;return{c(){e=w("a"),t=q(l),this.h()},l(r){e=T(r,"A",{href:!0,class:!0});var s=A(e);t=P(s,l),s.forEach(i),this.h()},h(){z(e,"href",f=a[8].venueUrl),z(e,"class","underline hover:no-underline")},m(r,s){k(r,e,s),D(e,t)},p(r,s){s&8&&l!==(l=r[8].venueName+"")&&Z(t,l),s&8&&f!==(f=r[8].venueUrl)&&z(e,"href",f)},d(r){r&&i(e)}}}function kt(a){let e,l;return{c(){e=w("span"),l=q("TBA"),this.h()},l(t){e=T(t,"SPAN",{class:!0});var f=A(e);l=P(f,"TBA"),f.forEach(i),this.h()},h(){z(e,"class","opacity-20")},m(t,f){k(t,e,f),D(e,l)},p:et,d(t){t&&i(e)}}}function gt(a){let e=a[8].attendees+"",l;return{c(){l=q(e)},l(t){l=P(t,e)},m(t,f){k(t,l,f)},p(t,f){f&8&&e!==(e=t[8].attendees+"")&&Z(l,e)},d(t){t&&i(l)}}}function Fe(a){let e,l=a[8].languages,t=[];for(let f=0;f<l.length;f+=1)t[f]=Je(je(a,l,f));return{c(){e=w("div");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=T(f,"DIV",{class:!0});var r=A(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(i),this.h()},h(){z(e,"class","flex gap-1")},m(f,r){k(f,e,r);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(f,r){if(r&8){l=f[8].languages;let s;for(s=0;s<l.length;s+=1){const o=je(f,l,s);t[s]?t[s].p(o,r):(t[s]=Je(o),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(f){f&&i(e),ge(t,f)}}}function Je(a){let e,l=_e(a[11])+"",t;return{c(){e=w("div"),t=q(l)},l(f){e=T(f,"DIV",{});var r=A(e);t=P(r,l),r.forEach(i)},m(f,r){k(f,e,r),D(e,t)},p(f,r){r&8&&l!==(l=_e(f[11])+"")&&Z(t,l)},d(f){f&&i(e)}}}function Le(a){let e,l,t,f,r,s,o=a[8].name+"",_,u,v,n,c=(a[8].country&&a[8].country!=="xx"?_e(a[8].country,!1):"")+"",I,d,g,m,E,b,N,$=a[8].twitter&&Ke(a);return b=new tt({props:{source:a[8].caption}}),{c(){e=w("td"),l=w("img"),f=B(),r=w("td"),s=w("a"),_=q(o),v=B(),n=w("td"),I=q(c),d=B(),g=w("td"),$&&$.c(),m=B(),E=w("td"),be(b.$$.fragment),this.h()},l(p){e=T(p,"TD",{class:!0});var y=A(e);l=T(y,"IMG",{src:!0,class:!0}),y.forEach(i),f=H(p),r=T(p,"TD",{class:!0});var G=A(r);s=T(G,"A",{href:!0,class:!0});var R=A(s);_=P(R,o),R.forEach(i),G.forEach(i),v=H(p),n=T(p,"TD",{});var W=A(n);I=P(W,c),W.forEach(i),d=H(p),g=T(p,"TD",{});var O=A(g);$&&$.l(O),O.forEach(i),m=H(p),E=T(p,"TD",{});var V=A(E);Ee(b.$$.fragment,V),V.forEach(i),this.h()},h(){oe(l.src,t=a[8].photoUrl)||z(l,"src",t),z(l,"class","w-10 inline-block rounded aspect-square object-cover"),z(e,"class","w-14"),z(s,"href",u="/"+a[5]+"/"+a[4].model+"/"+a[8].id),z(s,"class","text-pbw-red hover:underline"),z(r,"class","text-2xl h-12")},m(p,y){k(p,e,y),D(e,l),k(p,f,y),k(p,r,y),D(r,s),D(s,_),k(p,v,y),k(p,n,y),D(n,I),k(p,d,y),k(p,g,y),$&&$.m(g,null),k(p,m,y),k(p,E,y),ke(b,E,null),N=!0},p(p,y){(!N||y&8&&!oe(l.src,t=p[8].photoUrl))&&z(l,"src",t),(!N||y&8)&&o!==(o=p[8].name+"")&&Z(_,o),(!N||y&24&&u!==(u="/"+p[5]+"/"+p[4].model+"/"+p[8].id))&&z(s,"href",u),(!N||y&8)&&c!==(c=(p[8].country&&p[8].country!=="xx"?_e(p[8].country,!1):"")+"")&&Z(I,c),p[8].twitter?$?$.p(p,y):($=Ke(p),$.c(),$.m(g,null)):$&&($.d(1),$=null);const G={};y&8&&(G.source=p[8].caption),b.$set(G)},i(p){N||(K(b.$$.fragment,p),N=!0)},o(p){Q(b.$$.fragment,p),N=!1},d(p){p&&i(e),p&&i(f),p&&i(r),p&&i(v),p&&i(n),p&&i(d),p&&i(g),$&&$.d(),p&&i(m),p&&i(E),we(b)}}}function Ke(a){let e,l,t=a[8].twitter+"",f,r;return{c(){e=q("@"),l=w("a"),f=q(t),this.h()},l(s){e=P(s,"@"),l=T(s,"A",{href:!0,class:!0});var o=A(l);f=P(o,t),o.forEach(i),this.h()},h(){z(l,"href",r="https://twitter.com/"+a[8].twitter),z(l,"class","underline hover:no-underline")},m(s,o){k(s,e,o),k(s,l,o),D(l,f)},p(s,o){o&8&&t!==(t=s[8].twitter+"")&&Z(f,t),o&8&&r!==(r="https://twitter.com/"+s[8].twitter)&&z(l,"href",r)},d(s){s&&i(e),s&&i(l)}}}function Xe(a){let e,l,t,f,r,s,o=a[8].name+"",_,u,v,n,c,I,d,g,m=a[8].languages&&a[8].languages.length>0&&Ye(a);return d=new tt({props:{source:a[8].description}}),{c(){e=w("td"),l=w("img"),f=B(),r=w("td"),s=w("a"),_=q(o),v=B(),n=w("td"),m&&m.c(),c=B(),I=w("td"),be(d.$$.fragment),this.h()},l(E){e=T(E,"TD",{class:!0});var b=A(e);l=T(b,"IMG",{src:!0,class:!0}),b.forEach(i),f=H(E),r=T(E,"TD",{class:!0});var N=A(r);s=T(N,"A",{href:!0,class:!0});var $=A(s);_=P($,o),$.forEach(i),N.forEach(i),v=H(E),n=T(E,"TD",{});var p=A(n);m&&m.l(p),p.forEach(i),c=H(E),I=T(E,"TD",{class:!0});var y=A(I);Ee(d.$$.fragment,y),y.forEach(i),this.h()},h(){oe(l.src,t=a[8].logo)||z(l,"src",t),z(l,"class","w-16 inline-block rounded aspect-[16/9] object-cover"),z(e,"class","w-20"),z(s,"href",u="/"+a[5]+"/"+a[4].model+"/"+a[8].id),z(s,"class","text-pbw-red hover:underline"),z(r,"class","text-2xl h-12"),z(I,"class","")},m(E,b){k(E,e,b),D(e,l),k(E,f,b),k(E,r,b),D(r,s),D(s,_),k(E,v,b),k(E,n,b),m&&m.m(n,null),k(E,c,b),k(E,I,b),ke(d,I,null),g=!0},p(E,b){(!g||b&8&&!oe(l.src,t=E[8].logo))&&z(l,"src",t),(!g||b&8)&&o!==(o=E[8].name+"")&&Z(_,o),(!g||b&24&&u!==(u="/"+E[5]+"/"+E[4].model+"/"+E[8].id))&&z(s,"href",u),E[8].languages&&E[8].languages.length>0?m?m.p(E,b):(m=Ye(E),m.c(),m.m(n,null)):m&&(m.d(1),m=null);const N={};b&8&&(N.source=E[8].description),d.$set(N)},i(E){g||(K(d.$$.fragment,E),g=!0)},o(E){Q(d.$$.fragment,E),g=!1},d(E){E&&i(e),E&&i(f),E&&i(r),E&&i(v),E&&i(n),m&&m.d(),E&&i(c),E&&i(I),we(d)}}}function Ye(a){let e,l=a[8].languages,t=[];for(let f=0;f<l.length;f+=1)t[f]=Qe(Se(a,l,f));return{c(){e=w("div");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=T(f,"DIV",{class:!0});var r=A(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(i),this.h()},h(){z(e,"class","flex gap-1")},m(f,r){k(f,e,r);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(f,r){if(r&8){l=f[8].languages;let s;for(s=0;s<l.length;s+=1){const o=Se(f,l,s);t[s]?t[s].p(o,r):(t[s]=Qe(o),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(f){f&&i(e),ge(t,f)}}}function Qe(a){let e,l=_e(a[11])+"",t;return{c(){e=w("div"),t=q(l)},l(f){e=T(f,"DIV",{});var r=A(e);t=P(r,l),r.forEach(i)},m(f,r){k(f,e,r),D(e,t)},p(f,r){r&8&&l!==(l=_e(f[11])+"")&&Z(t,l)},d(f){f&&i(e)}}}function Ze(a){let e,l,t,f,r,s,o=a[8].name+"",_,u;return{c(){e=w("td"),l=w("img"),f=B(),r=w("td"),s=w("a"),_=q(o),this.h()},l(v){e=T(v,"TD",{class:!0});var n=A(e);l=T(n,"IMG",{src:!0,class:!0}),n.forEach(i),f=H(v),r=T(v,"TD",{class:!0});var c=A(r);s=T(c,"A",{href:!0,class:!0});var I=A(s);_=P(I,o),I.forEach(i),c.forEach(i),this.h()},h(){oe(l.src,t=a[8].logo)||z(l,"src",t),z(l,"class","w-10 inline-block rounded aspect-square object-cover"),z(e,"class","w-14"),z(s,"href",u="/"+a[5]+"/"+a[4].model+"/"+a[8].id),z(s,"class","text-pbw-red hover:underline"),z(r,"class","text-2xl h-12")},m(v,n){k(v,e,n),D(e,l),k(v,f,n),k(v,r,n),D(r,s),D(s,_)},p(v,n){n&8&&!oe(l.src,t=v[8].logo)&&z(l,"src",t),n&8&&o!==(o=v[8].name+"")&&Z(_,o),n&24&&u!==(u="/"+v[5]+"/"+v[4].model+"/"+v[8].id)&&z(s,"href",u)},d(v){v&&i(e),v&&i(f),v&&i(r)}}}function xe(a){let e,l,t,f,r,s,o=a[2]==="events"&&We(a),_=a[2]==="speakers"&&Le(a),u=a[2]==="media-partners"&&Xe(a),v=a[2]==="benefits"&&Ze(a);return{c(){e=w("tr"),o&&o.c(),l=B(),_&&_.c(),t=B(),u&&u.c(),f=B(),v&&v.c(),r=B(),this.h()},l(n){e=T(n,"TR",{class:!0});var c=A(e);o&&o.l(c),l=H(c),_&&_.l(c),t=H(c),u&&u.l(c),f=H(c),v&&v.l(c),r=H(c),c.forEach(i),this.h()},h(){z(e,"class"," svelte-z9qojq")},m(n,c){k(n,e,c),o&&o.m(e,null),D(e,l),_&&_.m(e,null),D(e,t),u&&u.m(e,null),D(e,f),v&&v.m(e,null),D(e,r),s=!0},p(n,c){n[2]==="events"?o?(o.p(n,c),c&4&&K(o,1)):(o=We(n),o.c(),K(o,1),o.m(e,l)):o&&(ce(),Q(o,1,1,()=>{o=null}),he()),n[2]==="speakers"?_?(_.p(n,c),c&4&&K(_,1)):(_=Le(n),_.c(),K(_,1),_.m(e,t)):_&&(ce(),Q(_,1,1,()=>{_=null}),he()),n[2]==="media-partners"?u?(u.p(n,c),c&4&&K(u,1)):(u=Xe(n),u.c(),K(u,1),u.m(e,f)):u&&(ce(),Q(u,1,1,()=>{u=null}),he()),n[2]==="benefits"?v?v.p(n,c):(v=Ze(n),v.c(),v.m(e,r)):v&&(v.d(1),v=null)},i(n){s||(K(o),K(_),K(u),s=!0)},o(n){Q(o),Q(_),Q(u),s=!1},d(n){n&&i(e),o&&o.d(),_&&_.d(),u&&u.d(),v&&v.d()}}}function wt(a){var s;let e,l,t,f;document.title=e=((s=a[4])==null?void 0:s.title)+" | #PBW"+a[1].params.entry+" Inspector";let r=a[4]&&qe(a);return{c(){l=B(),r&&r.c(),t=Ie()},l(o){it("svelte-e7ot85",document.head).forEach(i),l=H(o),r&&r.l(o),t=Ie()},m(o,_){k(o,l,_),r&&r.m(o,_),k(o,t,_),f=!0},p(o,[_]){var u;(!f||_&18)&&e!==(e=((u=o[4])==null?void 0:u.title)+" | #PBW"+o[1].params.entry+" Inspector")&&(document.title=e),o[4]?r?(r.p(o,_),_&16&&K(r,1)):(r=qe(o),r.c(),K(r,1),r.m(t.parentNode,t)):r&&(ce(),Q(r,1,1,()=>{r=null}),he())},i(o){f||(K(r),f=!0)},o(o){Q(r),f=!1},d(o){o&&i(l),r&&r.d(o),o&&i(t)}}}function Tt(a,e,l){let t,f,r,s,o;ot(a,nt,n=>l(1,o=n));let{data:_}=e,u=o.params.entry;function v(n){return n?(n=JSON.parse(JSON.stringify(n)),t==="events"&&(n=n.sort((c,I)=>c.date>I.date?1:-1)),n):[]}return at(async()=>{if(!ve.collections[o.params.type]){const n=Object.keys(ve.collections).find(c=>ve.collections[c].model===o.params.type);n&&ct(`/${o.params.entry}/${n}`)}}),a.$$set=n=>{"data"in n&&l(0,_=n.data)},a.$$.update=()=>{a.$$.dirty&2&&l(2,t=o.params.type),a.$$.dirty&4&&l(4,f=ve.collections[t]),a.$$.dirty&5&&l(6,r=_.bundle[t]),a.$$.dirty&64&&l(3,s=v(r))},[_,o,t,s,f,u,r]}class Ct extends st{constructor(e){super(),ft(this,e,Tt,wt,rt,{data:0})}}export{Ct as default};
