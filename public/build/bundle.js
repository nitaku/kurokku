var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function a(t){return document.createTextNode(t)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function d(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let g;function y(t){g=t}function $(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const m=[],h=[],x=[],b=[],_=Promise.resolve();let w=!1;function v(t){x.push(t)}const k=new Set;let M=0;function A(){const t=g;do{for(;M<m.length;){const t=m[M];M++,y(t),D(t.$$)}for(y(null),m.length=0,M=0;h.length;)h.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];k.has(n)||(k.add(n),n())}x.length=0}while(m.length);for(;b.length;)b.pop()();w=!1,k.clear(),y(t)}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const E=new Set;function B(t,n){t&&t.i&&(E.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function S(t){t&&t.c()}function C(t,e,r,i){const{fragment:s,on_mount:u,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,r),i||v((()=>{const e=u.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(v)}function F(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(m.push(t),w||(w=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(n,c,r,i,s,l,a,p=[-1]){const f=g;y(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(f?f.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:c.target||f.$$.root};a&&a(d.root);let $=!1;if(d.ctx=r?r(n,c.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=c)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](c),$&&O(n,t)),e})):[],d.update(),$=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),c.target){if(c.hydrate){const t=(m=c.target,Array.from(m.childNodes));d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();c.intro&&B(n.$$.fragment),C(n,c.target,c.anchor,c.customElement),A()}var m;y(f)}class z{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(n){let e,o,c=n[4](n[0].getHours())+(n[1]?":":" ")+n[4](n[0].getMinutes());return{c(){e=l("text"),o=a(c),p(e,"x",n[2]),p(e,"y",n[3]),p(e,"dy",".35em"),p(e,"class","svelte-13n2mut")},m(t,n){s(t,e,n),i(e,o)},p(t,[n]){3&n&&c!==(c=t[4](t[0].getHours())+(t[1]?":":" ")+t[4](t[0].getMinutes()))&&f(o,c),4&n&&p(e,"x",t[2]),8&n&&p(e,"y",t[3])},i:t,o:t,d(t){t&&u(e)}}}function P(t,n,e){let{date:o}=n,{tick:c}=n,{x:r}=n,{y:i}=n;return t.$$set=t=>{"date"in t&&e(0,o=t.date),"tick"in t&&e(1,c=t.tick),"x"in t&&e(2,r=t.x),"y"in t&&e(3,i=t.y)},[o,c,r,i,t=>t<10?"0"+t:t]}class H extends z{constructor(t){super(),j(this,t,P,G,r,{date:0,tick:1,x:2,y:3})}}function I(n){let e,o,c=n[3][n[0].getDay()]+" "+n[0].getDate()+" "+n[4][n[0].getMonth()]+" "+n[0].getFullYear();return{c(){e=l("text"),o=a(c),p(e,"x",n[1]),p(e,"y",n[2]),p(e,"dy",".35em"),p(e,"class","svelte-1htoamu")},m(t,n){s(t,e,n),i(e,o)},p(t,[n]){1&n&&c!==(c=t[3][t[0].getDay()]+" "+t[0].getDate()+" "+t[4][t[0].getMonth()]+" "+t[0].getFullYear())&&f(o,c),2&n&&p(e,"x",t[1]),4&n&&p(e,"y",t[2])},i:t,o:t,d(t){t&&u(e)}}}function L(t,n,e){let{date:o}=n,{x:c}=n,{y:r}=n;return t.$$set=t=>{"date"in t&&e(0,o=t.date),"x"in t&&e(1,c=t.x),"y"in t&&e(2,r=t.y)},[o,c,r,["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"]]}class T extends z{constructor(t){super(),j(this,t,L,I,r,{date:0,x:1,y:2})}}function Y(t){let n,e,o,c,r,a,f,g,y,$,m,h,x,b,_,w,v,k,M,A,D,E,O,j,z,G,P,I,L,Y,q,V,J,K,Q,R,U;return Q=new H({props:{x:"0",y:"-80",date:t[0],tick:t[1]}}),R=new T({props:{x:"0",y:"180",date:t[0]}}),{c(){n=l("svg"),e=l("defs"),o=l("symbol"),c=l("circle"),r=l("g"),a=l("polygon"),f=l("polygon"),g=l("g"),y=l("polygon"),$=l("polygon"),m=l("g"),h=l("polygon"),x=l("polygon"),b=l("g"),_=l("polygon"),w=l("polygon"),v=l("g"),k=l("polygon"),M=l("polygon"),A=l("g"),D=l("polygon"),E=l("polygon"),O=l("g"),j=l("polygon"),z=l("polygon"),G=l("g"),P=l("polygon"),I=l("polygon"),L=l("symbol"),Y=l("circle"),q=l("path"),V=l("symbol"),J=l("path"),K=l("path"),S(Q.$$.fragment),S(R.$$.fragment),p(c,"cx","50"),p(c,"cy","50"),p(c,"r","33.715"),p(a,"points","50,5 47.275,13.334 52.725,13.334  "),p(f,"points","50,95 47.275,86.667 52.725,86.667  "),p(y,"points","95,50 86.666,47.276 86.666,52.725  "),p($,"points","5,50 13.333,47.276 13.333,52.725  "),p(h,"points","18.18,18.18 22.146,26 26,22.146  "),p(x,"points","81.82,81.82 74.002,77.854 77.854,74  "),p(_,"points","81.82,18.18 74.002,22.146 77.854,25.999  "),p(w,"points","18.18,81.82 22.146,74 26,77.854  "),p(k,"points","32.961,8.351 33.595,17.095 38.638,15.032  "),p(M,"points","67.039,91.649 61.361,84.968 66.405,82.904  "),p(D,"points","91.649,32.961 82.905,33.595 84.969,38.638  "),p(E,"points","8.351,67.039 15.032,61.362 17.096,66.405  "),p(j,"points","8.501,32.598 15.133,38.333 17.239,33.308  "),p(z,"points","91.499,67.402 82.76,66.691 84.867,61.668  "),p(P,"points","67.402,8.501 61.668,15.133 66.691,17.24  "),p(I,"points","32.598,91.499 33.308,82.761 38.333,84.868  "),p(o,"id","sun_symbol"),p(o,"viewBox","0 0 100 100"),p(Y,"r","30"),d(Y,"fill","black"),d(Y,"fill-opacity","0.1"),p(q,"d","M0 30 A30 30 0 1 1 0 -30 A30 30 0 1 1 0 30"),p(L,"id","moon_symbol"),p(L,"viewBox","-34 -34 68 68"),p(J,"d","M642.02-364.11c-0.772,0-1.519,0.114-2.229,0.313c-0.17-6.744-5.679-12.162-12.464-12.162   c-4.368,0-8.201,2.251-10.428,5.65c-1.38-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.95,1.229-6.456,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.787,0.317,2.634h95.921c0.146-0.609,0.229-1.243,0.229-1.896   C650.233-360.433,646.556-364.11,642.02-364.11z"),p(K,"d","M90.02,48.188c-0.771,0-1.518,0.113-2.229,0.312c-0.17-6.744-5.678-12.162-12.463-12.162   c-4.369,0-8.201,2.251-10.428,5.65c-1.381-2.61-4.117-4.393-7.275-4.393c-2.621,0-4.951,1.229-6.457,3.139   c-2.865-6.496-9.357-11.031-16.913-11.031c-8.99,0-16.479,6.42-18.138,14.926c-0.937-0.248-1.911-0.393-2.925-0.393   c-6.312,0-11.427,5.116-11.427,11.427c0,0.907,0.117,1.786,0.317,2.634h95.92c0.146-0.609,0.23-1.243,0.23-1.896   C98.234,51.863,94.557,48.188,90.02,48.188z"),p(V,"id","cloud_symbol"),p(V,"viewBox","0 0 100 100"),p(n,"viewBox","-1080 -720 2160 1440"),p(n,"class","svelte-21cyu6")},m(t,u){s(t,n,u),i(n,e),i(e,o),i(o,c),i(o,r),i(r,a),i(r,f),i(o,g),i(g,y),i(g,$),i(o,m),i(m,h),i(m,x),i(o,b),i(b,_),i(b,w),i(o,v),i(v,k),i(v,M),i(o,A),i(A,D),i(A,E),i(o,O),i(O,j),i(O,z),i(o,G),i(G,P),i(G,I),i(e,L),i(L,Y),i(L,q),i(e,V),i(V,J),i(V,K),C(Q,n,null),C(R,n,null),U=!0},p(t,[n]){const e={};1&n&&(e.date=t[0]),2&n&&(e.tick=t[1]),Q.$set(e);const o={};1&n&&(o.date=t[0]),R.$set(o)},i(t){U||(B(Q.$$.fragment,t),B(R.$$.fragment,t),U=!0)},o(t){N(Q.$$.fragment,t),N(R.$$.fragment,t),U=!1},d(t){t&&u(n),F(Q),F(R)}}}function q(t,n,e){let o=new Date,c=!0;return $((()=>{const t=setInterval((()=>{e(0,o=new Date),e(1,c=!c)}),500);return()=>{clearInterval(t)}})),[o,c]}return new class extends z{constructor(t){super(),j(this,t,q,Y,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
