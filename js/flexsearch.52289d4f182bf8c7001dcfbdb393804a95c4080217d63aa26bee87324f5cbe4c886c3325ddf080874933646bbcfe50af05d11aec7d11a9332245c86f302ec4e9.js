(()=>{var st=Object.create;var et=Object.defineProperty;var rt=Object.getOwnPropertyDescriptor;var ot=Object.getOwnPropertyNames;var ht=Object.getPrototypeOf,lt=Object.prototype.hasOwnProperty;var ct=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports);var ft=(e,i,n,s)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of ot(i))!lt.call(e,r)&&r!==n&&et(e,r,{get:()=>i[r],enumerable:!(s=rt(i,r))||s.enumerable});return e};var ut=(e,i,n)=>(n=e!=null?st(ht(e)):{},ft(i||!e||!e.__esModule?et(n,"default",{value:e,enumerable:!0}):n,e));var it=ct((exports,module)=>{(function _f(self){"use strict";try{module&&(self=module)}catch(e){}self._factory=_f;var t;function u(e){return typeof e!="undefined"?e:!0}function aa(e){let i=Array(e);for(let n=0;n<e;n++)i[n]=v();return i}function v(){return Object.create(null)}function ba(e,i){return i.length-e.length}function x(e){return typeof e=="string"}function C(e){return typeof e=="object"}function D(e){return typeof e=="function"}function ca(e,i){var n=da;if(e&&(i&&(e=E(e,i)),this.H&&(e=E(e,this.H)),this.J&&1<e.length&&(e=E(e,this.J)),n||n==="")){if(e=e.split(n),this.filter){i=this.filter,n=e.length;let s=[];for(let r=0,o=0;r<n;r++){let h=e[r];h&&!i[h]&&(s[o++]=h)}e=s}return e}return e}let da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(e,i){let n=Object.keys(e),s=n.length,r=[],o="",h=0;for(let l=0,f,p;l<s;l++)f=n[l],(p=e[f])?(r[h++]=F(i?"(?!\\b)"+f+"(\\b|_)":f),r[h++]=p):o+=(o?"|":"")+f;return o&&(r[h++]=F(i?"(?!\\b)("+o+")(\\b|_)":"("+o+")"),r[h]=""),r}function E(e,i){for(let n=0,s=i.length;n<s&&(e=e.replace(i[n],i[n+1]),e);n+=2);return e}function F(e){return new RegExp(e,"g")}function ha(e){let i="",n="";for(let s=0,r=e.length,o;s<r;s++)(o=e[s])!==n&&(i+=n=o);return i}var ja={encode:ia,F:!1,G:""};function ia(e){return ca.call(this,(""+e).toLowerCase(),!1)}let ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,i){e[i+"Async"]=function(){let n=this,s=arguments;var r=s[s.length-1];let o;return D(r)&&(o=r,delete s[s.length-1]),r=new Promise(function(h){setTimeout(function(){n.async=!0;let l=n[i].apply(n,s);n.async=!1,h(l)})}),o?(r.then(o),this):r}}function ma(e,i,n,s){let r=e.length,o=[],h,l,f=0;s&&(s=[]);for(let p=r-1;0<=p;p--){let m=e[p],A=m.length,w=v(),k=!h;for(let g=0;g<A;g++){let y=m[g],R=y.length;if(R)for(let B=0,H,_;B<R;B++)if(_=y[B],h){if(h[_]){if(!p){if(n)n--;else if(o[f++]=_,f===i)return o}(p||s)&&(w[_]=1),k=!0}if(s&&(H=(l[_]||0)+1,l[_]=H,H<r)){let z=s[H-2]||(s[H-2]=[]);z[z.length]=_}}else w[_]=1}if(s)h||(l=w);else if(!k)return[];h=w}if(s)for(let p=s.length-1,m,A;0<=p;p--){m=s[p],A=m.length;for(let w=0,k;w<A;w++)if(k=m[w],!h[k]){if(n)n--;else if(o[f++]=k,f===i)return o;h[k]=1}}return o}function na(e,i){let n=v(),s=v(),r=[];for(let o=0;o<e.length;o++)n[e[o]]=1;for(let o=0,h;o<i.length;o++){h=i[o];for(let l=0,f;l<h.length;l++)f=h[l],n[f]&&!s[f]&&(s[f]=1,r[r.length]=f)}return r}function J(e){this.l=e!==!0&&e,this.cache=v(),this.h=[]}function oa(e,i,n){C(e)&&(e=e.query);let s=this.cache.get(e);return s||(s=this.search(e,i,n),this.cache.set(e,s)),s}J.prototype.set=function(e,i){if(!this.cache[e]){var n=this.h.length;for(n===this.l?delete this.cache[this.h[n-1]]:n++,--n;0<n;n--)this.h[n]=this.h[n-1];this.h[0]=e}this.cache[e]=i},J.prototype.get=function(e){let i=this.cache[e];if(this.l&&i&&(e=this.h.indexOf(e))){let n=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=n}return i};let qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(e,i,n,s,r,o,h){setTimeout(function(){let l=e(n?n+"."+s:s,JSON.stringify(h));l&&l.then?l.then(function(){i.export(e,i,n,r,o+1)}):i.export(e,i,n,r,o+1)})}function K(e,i){if(!(this instanceof K))return new K(e);var n;if(e){x(e)?e=qa[e]:(n=e.preset)&&(e=Object.assign({},n[n],e)),n=e.charset;var s=e.lang;x(n)&&(n.indexOf(":")===-1&&(n+=":default"),n=G[n]),x(s)&&(s=ka[s])}else e={};let r,o,h=e.context||{};if(this.encode=e.encode||n&&n.encode||ia,this.register=i||v(),this.D=r=e.resolution||9,this.G=i=n&&n.G||e.tokenize||"strict",this.depth=i==="strict"&&h.depth,this.l=u(h.bidirectional),this.s=o=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=o?aa(r):v(),this.A=r=h.resolution||1,this.h=o?aa(r):v(),this.F=n&&n.F||e.rtl,this.H=(i=e.matcher||s&&s.H)&&fa(i,!1),this.J=(i=e.stemmer||s&&s.J)&&fa(i,!0),n=i=e.filter||s&&s.filter){n=i,s=v();for(let l=0,f=n.length;l<f;l++)s[n[l]]=1;n=s}this.filter=n,this.cache=(i=e.cache)&&new J(i)}t=K.prototype,t.append=function(e,i){return this.add(e,i,!0)},t.add=function(e,i,n,s){if(i&&(e||e===0)){if(!s&&!n&&this.register[e])return this.update(e,i);if(i=this.encode(i),s=i.length){let p=v(),m=v(),A=this.depth,w=this.D;for(let k=0;k<s;k++){let g=i[this.F?s-1-k:k];var r=g.length;if(g&&r>=this.B&&(A||!m[g])){var o=L(w,s,k),h="";switch(this.G){case"full":if(2<r){for(o=0;o<r;o++)for(var l=r;l>o;l--)if(l-o>=this.B){var f=L(w,s,k,r,o);h=g.substring(o,l),M(this,m,h,f,e,n)}break}case"reverse":if(1<r){for(l=r-1;0<l;l--)h=g[l]+h,h.length>=this.B&&M(this,m,h,L(w,s,k,r,l),e,n);h=""}case"forward":if(1<r){for(l=0;l<r;l++)h+=g[l],h.length>=this.B&&M(this,m,h,o,e,n);break}default:if(this.C&&(o=Math.min(o/this.C(i,g,k)|0,w-1)),M(this,m,g,o,e,n),A&&1<s&&k<s-1){for(r=v(),h=this.A,o=g,l=Math.min(A+1,s-k),r[o]=1,f=1;f<l;f++)if((g=i[this.F?s-1-k-f:k+f])&&g.length>=this.B&&!r[g]){r[g]=1;let y=this.l&&g>o;M(this,p,y?o:g,L(h+(s/2>h?0:1),s,k,l-1,f-1),e,n,y?g:o)}}}}}this.m||(this.register[e]=1)}}return this};function L(e,i,n,s,r){return n&&1<e?i+(s||0)<=e?n+(r||0):(e-1)/(i+(s||0))*(n+(r||0))+1|0:0}function M(e,i,n,s,r,o,h){let l=h?e.h:e.map;(!i[n]||h&&!i[n][h])&&(e.s&&(l=l[s]),h?(i=i[n]||(i[n]=v()),i[h]=1,l=l[h]||(l[h]=v())):i[n]=1,l=l[n]||(l[n]=[]),e.s||(l=l[s]||(l[s]=[])),o&&l.includes(r)||(l[l.length]=r,e.m&&(e=e.register[r]||(e.register[r]=[]),e[e.length]=l)))}t.search=function(e,i,n){n||(!i&&C(e)?(n=e,e=n.query):C(i)&&(n=i));let s=[],r,o,h=0;if(n){e=n.query||e,i=n.limit,h=n.offset||0;var l=n.context;o=n.suggest}if(e&&(e=this.encode(""+e),r=e.length,1<r)){n=v();var f=[];for(let m=0,A=0,w;m<r;m++)if((w=e[m])&&w.length>=this.B&&!n[w])if(this.s||o||this.map[w])f[A++]=w,n[w]=1;else return s;e=f,r=e.length}if(!r)return s;i||(i=100),l=this.depth&&1<r&&l!==!1,n=0;let p;l?(p=e[0],n=1):1<r&&e.sort(ba);for(let m,A;n<r;n++){if(A=e[n],l?(m=sa(this,s,o,i,h,r===2,A,p),o&&m===!1&&s.length||(p=A)):m=sa(this,s,o,i,h,r===1,A),m)return m;if(o&&n===r-1){if(f=s.length,!f){if(l){l=0,n=-1;continue}return s}if(f===1)return ta(s[0],i,h)}}return ma(s,i,h,o)};function sa(e,i,n,s,r,o,h,l){let f=[],p=l?e.h:e.map;if(e.s||(p=ua(p,h,l,e.l)),p){let m=0,A=Math.min(p.length,l?e.A:e.D);for(let w=0,k=0,g,y;w<A&&!((g=p[w])&&(e.s&&(g=ua(g,h,l,e.l)),r&&g&&o&&(y=g.length,y<=r?(r-=y,g=null):(g=g.slice(r),r=0)),g&&(f[m++]=g,o&&(k+=g.length,k>=s))));w++);if(m){if(o)return ta(f,s,0);i[i.length]=f;return}}return!n&&f}function ta(e,i,n){return e=e.length===1?e[0]:[].concat.apply([],e),n||e.length>i?e.slice(n,n+i):e}function ua(e,i,n,s){return n?(s=s&&i>n,e=(e=e[s?i:n])&&e[s?n:i]):e=e[i],e}t.contain=function(e){return!!this.register[e]},t.update=function(e,i){return this.remove(e).add(e,i)},t.remove=function(e,i){let n=this.register[e];if(n){if(this.m)for(let s=0,r;s<n.length;s++)r=n[s],r.splice(r.indexOf(e),1);else N(this.map,e,this.D,this.s),this.depth&&N(this.h,e,this.A,this.s);if(i||delete this.register[e],this.cache){i=this.cache;for(let s=0,r,o;s<i.h.length;s++)o=i.h[s],r=i.cache[o],r.includes(e)&&(i.h.splice(s--,1),delete i.cache[o])}}return this};function N(e,i,n,s,r){let o=0;if(e.constructor===Array)if(r)i=e.indexOf(i),i!==-1?1<e.length&&(e.splice(i,1),o++):o++;else{r=Math.min(e.length,n);for(let h=0,l;h<r;h++)(l=e[h])&&(o=N(l,i,n,s,r),s||o||delete e[h])}else for(let h in e)(o=N(e[h],i,n,s,r))||delete e[h];return o}t.searchCache=oa,t.export=function(e,i,n,s,r){let o,h;switch(r||(r=0)){case 0:if(o="reg",this.m){h=v();for(let l in this.register)h[l]=1}else h=this.register;break;case 1:o="cfg",h={doc:0,opt:this.s?1:0};break;case 2:o="map",h=this.map;break;case 3:o="ctx",h=this.h;break;default:return}return ra(e,i||this,n,o,s,r,h),!0},t.import=function(e,i){if(i)switch(x(i)&&(i=JSON.parse(i)),e){case"cfg":this.s=!!i.opt;break;case"reg":this.m=!1,this.register=i;break;case"map":this.map=i;break;case"ctx":this.h=i}},la(K.prototype);function va(e){e=e.data;var i=self._index;let n=e.args;var s=e.task;switch(s){case"init":s=e.options||{},e=e.factory,i=s.encode,s.cache=!1,i&&i.indexOf("function")===0&&(s.encode=Function("return "+i)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(s),delete self.FlexSearch):self._index=new K(s);break;default:e=e.id,i=i[s].apply(i,n),postMessage(s==="search"?{id:e,msg:i}:{id:e})}}let wa=0;function O(e){if(!(this instanceof O))return new O(e);var i;e?D(i=e.encode)&&(e.encode=i.toString()):e={},(i=(self||window)._factory)&&(i=i.toString());let n=typeof window=="undefined"&&self.exports,s=this;this.o=xa(i,n,e.worker),this.h=v(),this.o&&(n?this.o.on("message",function(r){s.h[r.id](r.msg),delete s.h[r.id]}):this.o.onmessage=function(r){r=r.data,s.h[r.id](r.msg),delete s.h[r.id]},this.o.postMessage({task:"init",factory:i,options:e}))}P("add"),P("append"),P("search"),P("update"),P("remove");function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){let i=this,n=[].slice.call(arguments);var s=n[n.length-1];let r;return D(s)&&(r=s,n.splice(n.length-1,1)),s=new Promise(function(o){setTimeout(function(){i.h[++wa]=o,i.o.postMessage({task:e,id:wa,args:n})})}),r?(s.then(r),this):s}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var i=e.document||e.doc||e,n;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(n=i.key||i.id)&&S(n,this.A)||"id",this.m=u(e.fastupdate),this.C=(n=i.store)&&n!==!0&&[],this.store=n&&v(),this.I=(n=i.tag)&&S(n,this.A),this.l=n&&v(),this.cache=(n=e.cache)&&new J(n),e.cache=!1,this.o=e.worker,this.async=!1,n=v();let s=i.index||i.field||i;x(s)&&(s=[s]);for(let r=0,o,h;r<s.length;r++)o=s[r],x(o)||(h=o,o=o.field),h=C(h)?Object.assign({},e,h):e,this.o&&(n[o]=new O(h),n[o].o||(this.o=!1)),this.o||(n[o]=new K(h,this.register)),this.K[r]=S(o,this.A),this.h[r]=o;if(this.C)for(e=i.store,x(e)&&(e=[e]),i=0;i<e.length;i++)this.C[i]=S(e[i],this.A);this.index=n}function S(e,i){let n=e.split(":"),s=0;for(let r=0;r<n.length;r++)e=n[r],0<=e.indexOf("[]")&&(e=e.substring(0,e.length-2))&&(i[s]=!0),e&&(n[s++]=e);return s<n.length&&(n.length=s),1<s?n:n[0]}function T(e,i){if(x(i))e=e[i];else for(let n=0;e&&n<i.length;n++)e=e[i[n]];return e}function U(e,i,n,s,r){if(e=e[r],s===n.length-1)i[r]=e;else if(e)if(e.constructor===Array)for(i=i[r]=Array(e.length),r=0;r<e.length;r++)U(e,i,n,s,r);else i=i[r]||(i[r]=v()),r=n[++s],U(e,i,n,s,r)}function V(e,i,n,s,r,o,h,l){if(e=e[h])if(s===i.length-1){if(e.constructor===Array){if(n[s]){for(i=0;i<e.length;i++)r.add(o,e[i],!0,!0);return}e=e.join(" ")}r.add(o,e,l,!0)}else if(e.constructor===Array)for(h=0;h<e.length;h++)V(e,i,n,s,r,o,h,l);else h=i[++s],V(e,i,n,s,r,o,h,l)}t=Q.prototype,t.add=function(e,i,n){if(C(e)&&(i=e,e=T(i,this.key)),i&&(e||e===0)){if(!n&&this.register[e])return this.update(e,i);for(let s=0,r,o;s<this.h.length;s++)o=this.h[s],r=this.K[s],x(r)&&(r=[r]),V(i,r,this.A,0,this.index[o],e,r[0],n);if(this.I){let s=T(i,this.I),r=v();x(s)&&(s=[s]);for(let o=0,h,l;o<s.length;o++)if(h=s[o],!r[h]&&(r[h]=1,l=this.l[h]||(this.l[h]=[]),!n||!l.includes(e))&&(l[l.length]=e,this.m)){let f=this.register[e]||(this.register[e]=[]);f[f.length]=l}}if(this.store&&(!n||!this.store[e])){let s;if(this.C){s=v();for(let r=0,o;r<this.C.length;r++)o=this.C[r],x(o)?s[o]=i[o]:U(i,s,o,0,o[0])}this.store[e]=s||i}}return this},t.append=function(e,i){return this.add(e,i,!0)},t.update=function(e,i){return this.remove(e).add(e,i)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var i=0;i<this.h.length&&(this.index[this.h[i]].remove(e,!this.o),!this.m);i++);if(this.I&&!this.m)for(let n in this.l){i=this.l[n];let s=i.indexOf(e);s!==-1&&(1<i.length?i.splice(s,1):delete this.l[n])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,i,n,s){n||(!i&&C(e)?(n=e,e=""):C(i)&&(n=i,i=0));let r=[],o=[],h,l,f,p,m,A,w=0;if(n)if(n.constructor===Array)f=n,n=null;else{if(e=n.query||e,f=(h=n.pluck)||n.index||n.field,p=n.tag,l=this.store&&n.enrich,m=n.bool==="and",i=n.limit||i||100,A=n.offset||0,p&&(x(p)&&(p=[p]),!e)){for(let g=0,y;g<p.length;g++)(y=ya.call(this,p[g],i,A,l))&&(r[r.length]=y,w++);return w?r:[]}x(f)&&(f=[f])}f||(f=this.h),m=m&&(1<f.length||p&&1<p.length);let k=!s&&(this.o||this.async)&&[];for(let g=0,y,R,B;g<f.length;g++){let H;if(R=f[g],x(R)||(H=R,R=H.field,e=H.query||e,i=H.limit||i),k)k[g]=this.index[R].searchAsync(e,i,H||n);else{if(s?y=s[g]:y=this.index[R].search(e,i,H||n),B=y&&y.length,p&&B){let _=[],z=0;m&&(_[0]=[y]);for(let X=0,tt,j;X<p.length;X++)tt=p[X],(B=(j=this.l[tt])&&j.length)&&(z++,_[_.length]=m?[j]:j);z&&(y=m?ma(_,i||100,A||0):na(y,_),B=y.length)}if(B)o[w]=R,r[w++]=y;else if(m)return[]}}if(k){let g=this;return new Promise(function(y){Promise.all(k).then(function(R){y(g.search(e,i,n,R))})})}if(!w)return[];if(h&&(!l||!this.store))return r[0];for(let g=0,y;g<o.length;g++){if(y=r[g],y.length&&l&&(y=za.call(this,y)),h)return y;r[g]={field:o[g],result:y}}return r};function ya(e,i,n,s){let r=this.l[e],o=r&&r.length-n;if(o&&0<o)return(o>i||n)&&(r=r.slice(n,n+i)),s&&(r=za.call(this,r)),{tag:e,result:r}}function za(e){let i=Array(e.length);for(let n=0,s;n<e.length;n++)s=e[n],i[n]={id:s,doc:this.store[s]};return i}t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,i){return this.store[e]=i,this},t.searchCache=oa,t.export=function(e,i,n,s,r){if(r||(r=0),s||(s=0),s<this.h.length){let o=this.h[s],h=this.index[o];i=this,setTimeout(function(){h.export(e,i,r?o:"",s,r++)||(s++,r=1,i.export(e,i,o,s,r))})}else{let o,h;switch(r){case 1:o="tag",h=this.l;break;case 2:o="store",h=this.store;break;default:return}ra(e,this,n,o,s,r,h)}},t.import=function(e,i){if(i)switch(x(i)&&(i=JSON.parse(i)),e){case"tag":this.l=i;break;case"reg":this.m=!1,this.register=i;for(let s=0,r;s<this.h.length;s++)r=this.index[this.h[s]],r.register=i,r.m=!1;break;case"store":this.store=i;break;default:e=e.split(".");let n=e[0];e=e[1],n&&e&&this.index[n].import(e,i)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};let Ca=[F("[\xE0\xE1\xE2\xE3\xE4\xE5]"),"a",F("[\xE8\xE9\xEA\xEB]"),"e",F("[\xEC\xED\xEE\xEF]"),"i",F("[\xF2\xF3\xF4\xF5\xF6\u0151]"),"o",F("[\xF9\xFA\xFB\xFC\u0171]"),"u",F("[\xFD\u0177\xFF]"),"y",F("\xF1"),"n",F("[\xE7c]"),"k",F("\xDF"),"s",F(" & ")," and "];function Aa(e){var i=e=""+e;return i.normalize&&(i=i.normalize("NFD").replace(ea,"")),ca.call(this,i.toLowerCase(),!e.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};let Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",\u00DF:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(e){e=Aa.call(this,e).join(" ");let i=[];if(e){let n=e.split(Fa),s=n.length;for(let r=0,o,h=0;r<s;r++)if((e=n[r])&&(!this.filter||!this.filter[e])){o=e[0];let l=Ga[o]||o,f=l;for(let p=1;p<e.length;p++){o=e[p];let m=Ga[o]||o;m&&m!==f&&(l+=m,f=m)}i[h++]=l}}return i}var Ia={encode:Ha,F:!1,G:""};let Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(e,i){return e&&(e=Da.call(this,e).join(" "),2<e.length&&(e=E(e,Ja)),i||(1<e.length&&(e=ha(e)),e&&(e=e.split(" ")))),e||[]}var La={encode:Ka,F:!1,G:""};let Ma=F("(?!\\b)[aeo]");function Ka(e){return e&&(e=Ha.call(this,e,!0),1<e.length&&(e=e.replace(Ma,"")),1<e.length&&(e=ha(e)),e&&(e=e.split(" "))),e||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;let W=self,Y,Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,i){G[e]=i},registerLanguage:function(e,i){ka[e]=i}};(Y=W.define)&&Y.amd?Y([],function(){return Z}):W.exports?W.exports=Z:W.FlexSearch=Z})(exports)});var nt=ut(it());var $=document.getElementById("search__text"),q=document.getElementById("search__suggestions");$!==null&&document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="/"?(e.preventDefault(),$.focus()):e.key==="Escape"&&($.blur(),q.classList.add("search__suggestions--hidden"))});document.addEventListener("click",e=>{q.contains(e.target)||q.classList.add("search__suggestions--hidden")});document.addEventListener("keydown",e=>{if(q.classList.contains("search__suggestions--hidden"))return;let n=[...q.querySelectorAll("a")];if(n.length===0)return;let s=n.indexOf(document.activeElement);if(e.key==="ArrowDown"){e.preventDefault();let r=s+1<n.length?s+1:s;n[r].focus()}else e.key==="ArrowUp"&&(e.preventDefault(),nextIndex=s>0?s-1:0,n[nextIndex].focus())});(function(){let e=new nt.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/blog/setting-up-self-signed-certificate-on-windows/",title:"Setting Up Self-Signed Certificate on Windows",description:`Self-signed certificates are public key certificates used in testing environments. They are not issued by Certificate Authority (CA) and thus do not provide any trust. Yet they are free and easy to create, which is an excellent option for testing applications with endpoints over HTTPS.
There are several ways to create a certificate on Windows: OpenSSL, makecert, Windows Certificate Manager (Certmgr), and Powershell&rsquo;s New-SelfSignedCertificate cmdlet. I will use the latter in this post as it is built-in in Powershell and utilizes CLI.`,content:`Self-signed certificates are public key certificates used in testing environments. They are not issued by Certificate Authority (CA) and thus do not provide any trust. Yet they are free and easy to create, which is an excellent option for testing applications with endpoints over HTTPS.
There are several ways to create a certificate on Windows: OpenSSL, makecert, Windows Certificate Manager (Certmgr), and Powershell&rsquo;s New-SelfSignedCertificate cmdlet. I will use the latter in this post as it is built-in in Powershell and utilizes CLI.
To create a certificate, execute the following command:
New-SelfSignedCertificate -DnsName localhost,127.0.0.1 -notafter (Get-Date).AddMonths(12) -CertStoreLocation Cert:\\LocalMachine\\My\\ -KeyExportPolicy Exportable -KeyUsage CertSign,CRLSign,DigitalSignature -KeySpec KeyExchange -KeyLength 2048 -KeyUsageProperty All -KeyAlgorithm &#39;RSA&#39; -HashAlgorithm &#39;SHA256&#39; -Provider &#39;Microsoft Enhanced RSA and AES Cryptographic Provider&#39; -DnsName flag specifies the DNS name of the certificate. In this example, it is set to localhost and 127.0.0.1. -notafter flag specifies the certificate&rsquo;s expiration date, with the Get-Date command used to set the time until expiration. -CertStoreLocation flag indicates the certificate store where the certificate will be stored; here, it is set to the Certificate Store in the Local Machine. -KeyExportPolicy flag indicates if the private key associated with the certificate can be exported. -KeyUsage flag specifies the different operations that can be performed with the certificate. I have set to CertSign, CRLSign, and DigitalSignature, which indicate that the certificate can be used to sign and verify other certificates, CRLs (Certificate Revocation Lists), and digital signatures. -KeySpec flag specifies the key type; here, it is set to KeyExchange, indicating that the certificate is intended for encrypting and decrypting data. -KeyLength flag specifies the length of the key in bits; -KeyUsageProperty flag indicates the operations for which the certificate can be used; here, it is set to All. -KeyAlgorithm and -HashAlgorithm flags specify the encryption algorithm and the hashing algorithm used for generating the certificate -Provider flag specifies the cryptographic provider used to generate the certificate. Refer to the cmdlet documentation to get more information.
The code above will create and save the certificate in Windows Certificate Manager under Personal/Certificates. You can export it via UI in Certificate Manager or execute the PowerShell script below to place it in the specified &lt;path&gt;.
$selfSignedRootCA = New-SelfSignedCertificate -DnsName MPTSQL01,localhost,127.0.0.1 -notafter (Get-Date).AddMonths(12) -CertStoreLocation Cert:\\LocalMachine\\My\\ -KeyExportPolicy Exportable -KeyUsage CertSign,CRLSign,DigitalSignature -KeySpec KeyExchange -KeyLength 2048 -KeyUsageProperty All -KeyAlgorithm &#39;RSA&#39; -HashAlgorithm &#39;SHA256&#39; -Provider &#39;Microsoft Enhanced RSA and AES Cryptographic Provider&#39; $CertPassword = ConvertTo-SecureString -String &#34;&lt;your_password&gt;&#34; -Force -AsPlainText $selfSignedRootCA | Export-PfxCertificate -FilePath &lt;path&gt; -Password $CertPassword `}),$.addEventListener("input",function(){let n=this.value,s=e.search(n,5,{enrich:!0}),r=new Map;for(let o of s.flatMap(h=>h.result))r.has(o.href)||r.set(o.doc.href,o.doc);if(q.innerHTML="",q.classList.remove("search__suggestions--hidden"),r.size===0&&n){let o=document.createElement("div");o.innerHTML=`No results for "<strong>${n}</strong>"`,o.classList.add("search__no-results"),q.appendChild(o);return}for(let[o,h]of r){let l=document.createElement("a");l.href=o,l.classList.add("search__suggestion-item"),q.appendChild(l);let f=document.createElement("div");f.textContent=h.title,f.classList.add("search__suggestion-title"),l.appendChild(f);let p=document.createElement("div");if(p.textContent=h.description,p.classList.add("search__suggestion-description"),l.appendChild(p),q.childElementCount===5)break}})})();})();
/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
//! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js