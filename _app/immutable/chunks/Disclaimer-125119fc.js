import{S as p,i as m,s as v,k,a as b,l as g,m as _,c as y,h as r,n as w,b as c,F as x,B as l,q as f,r as u}from"./index-41559e88.js";function h(s){let e;return{c(){e=f(`⚠️ All events published here are independent and have their own organisers. Prague Blockchain
		Week is an independent initiative that informs about these events. If you want information about
		tickets, or to contact the organizers of a specific event - then contact them directly.`)},l(n){e=u(n,`⚠️ All events published here are independent and have their own organisers. Prague Blockchain
		Week is an independent initiative that informs about these events. If you want information about
		tickets, or to contact the organizers of a specific event - then contact them directly.`)},m(n,t){c(n,e,t)},d(n){n&&r(e)}}}function d(s){let e;return{c(){e=f(`⚠️ All these people are guests of the individual events, which have their own organizers and
		have no direct connection to Prague Blockchain Week.`)},l(n){e=u(n,`⚠️ All these people are guests of the individual events, which have their own organizers and
		have no direct connection to Prague Blockchain Week.`)},m(n,t){c(n,e,t)},d(n){n&&r(e)}}}function B(s){let e,n,t=s[0]==="events"&&h(),i=s[0]==="speakers"&&d();return{c(){e=k("div"),t&&t.c(),n=b(),i&&i.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var o=_(e);t&&t.l(o),n=y(o),i&&i.l(o),o.forEach(r),this.h()},h(){w(e,"class","mt-4 mb-8 text-xl bg-pbw-yellow/20 dark:bg-gray-700 p-4 pbw-text-color-secondary")},m(a,o){c(a,e,o),t&&t.m(e,null),x(e,n),i&&i.m(e,null)},p(a,[o]){a[0]==="events"?t||(t=h(),t.c(),t.m(e,n)):t&&(t.d(1),t=null),a[0]==="speakers"?i||(i=d(),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:l,o:l,d(a){a&&r(e),t&&t.d(),i&&i.d()}}}function z(s,e,n){let{type:t="events"}=e;return s.$$set=i=>{"type"in i&&n(0,t=i.type)},[t]}class P extends p{constructor(e){super(),m(this,e,z,B,v,{type:0})}}export{P as D};
