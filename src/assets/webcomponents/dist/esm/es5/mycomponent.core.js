/*!
 * mycomponent: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)$.push(arguments[f]);for(;$.length>0;){var c=$.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)$.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&$.push(f);t.class=$.join(" "),$.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],A):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"mycomponent";return F||(F=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[s].u(function i(n){var t=E(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!D[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),D[s]=L(s,u,n,i,c,o,r)}if(window.customStyleShim)return D[s].l=window.customStyleShim,D[s].l.initShim().then(t);t()})}this&&this.v;var i=this&&this.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=this&&this.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,j:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=this,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===W?s(n,t.C):t.A===x?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===T&&(n.C=t,n.A=W,0!==n._.length&&M(p,n))}function l(n,t){n.A===T&&(n.A=x,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+W]=e,i[o+x]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===T&&(i&&f?c(t,o):a?l(t,u):n===W?s(t,o):n===x&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},j=(y=void 0!==n?n:void 0)||{},k=j.MutationObserver||j.WebKitMutationObserver;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),T=void 0,W=1,x=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===T&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==T?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===T&&(this.L--,n===x?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(W,t,n)},function(n){return e.H(x,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.U=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.B=function(n){g=n},L.I=function(n){M=n},L.G=M,L.Y=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.Y(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Z||1===r.Z&&!t.K.J)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.V.head;if(e.J)if(1===r.Z)f=i.shadowRoot;else{var a=i.getRootNode();a.host&&(f=a)}var s=t.X.get(f);if(s||t.X.set(f,s={}),!s[o]){var l=void 0;if(t.l?l=t.l.createHostStyle(i,o,u):((l=e.nn("style")).innerHTML=u,s[o]=!0),l){var v=f.querySelectorAll("[data-styles]");e.tn(f,l,v.length&&v[v.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS(y,p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS(y,p(t),e):n.setAttribute(t,e))},y="http://www.w3.org/1999/xlink",w=function(n,t,e,r,i,o,u){if("class"!==e||o)if("style"===e){for(var f in r)i&&null!=i[f]||(/-/.test(f)?t.style.removeProperty(f):t.style[f]="");for(var f in i)r&&i[f]===r[f]||(/-/.test(f)?t.style.setProperty(f,i[f]):t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var c=n.en(t);c&&c.rn&&c.rn[e]?(m(t,e,i),u&&c.rn[e].in&&h(t,c.rn[e].on,i,4===c.rn[e].un)):"ref"!==e&&(m(t,e,null==i?"":i),null!=i&&!1!==i||n.K.fn(t,e))}else null!=i&&"key"!==e?h(t,e,i):(o||n.K.cn(t,e)&&(null==i||!1===i))&&n.K.fn(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.K.an(t,e,i):n.K.sn(t,e);else if(r!==i){var a=b(r),s=b(i),l=a.filter(function(n){return!s.includes(n)}),v=b(t.className).filter(function(n){return!l.includes(n)}),d=s.filter(function(n){return!a.includes(n)&&!v.includes(n)});v.push.apply(v,d),t.className=v.join(" ")}},b=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},m=function(n,t,e){try{n[t]=e}catch(n){}},g=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||w(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||w(n,o,i,u[i],f[i],r,e.o)},M=!1,j=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){j(n,t)}))},k=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},$=[],A={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},E=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{on:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={ln:e[1],in:!!e[2],on:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,un:e[4]};return{t:r,s:i,rn:Object.assign({},c),Z:u,vn:f?f.map(C):void 0}},C=function(n){return{pn:n[0],dn:n[1],hn:!!n[2],yn:!!n[3],wn:!!n[4]}},S=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},O=function(n,t,e){n.bn.add(t),n.mn.has(t)||(n.mn.set(t,!0),n.gn?n.queue.write(function(){return _(n,t,e)}):n.queue.tick(function(){return _(n,t,e)}))},_=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.mn.delete(r),n.Mn.has(r))return[3,12];if(a=n.jn.get(r))return[3,6];if((s=n.kn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){_(n,r,f)}),[2];if(!(a=P(n,r,n.$n.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.An(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.An(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u,f=r.En.host,c=r.En.encapsulation,a="shadow"===c&&n.K.J,s=i;if(u=function(n,t,e){return n&&Object.keys(n).forEach(function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])}),e}(r.En.properties,o),a&&(s=i.shadowRoot),!i["s-rn"]){n.Cn(n,n.K,r,i);var l=i["s-sc"];l&&(n.K.Sn(i,t(l,!0)),"scoped"===c&&n.K.Sn(i,t(l)))}if(o.render||o.hostData||f||u){n.On=!0;var v=o.render&&o.render(),p=void 0;u&&(p=p?Object.assign(p,u):u),n.On=!1;var d=e(null,p,v),h=n._n.get(i)||{};h.i=s,d.o=!0,n._n.set(i,n.render(i,h,d,a,c))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.On=!1,n.An(t,8,i,!0)}})(n,n.en(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},T=function(n,t,e,r,i,o,u){(u=n.Tn.get(t))||n.Tn.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.jn.get(t))){var c=u[x+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.On&&t["s-rn"]&&O(n,t,i)}},W=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},x="wc-",P=function(n,t,e,r,i,o){try{i=new(o=n.en(t).En),function(n,t,e,r,i,o){n.Wn.set(r,e),n.Tn.has(e)||n.Tn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n.Tn.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.xn)&&v(c=f[t.attr])&&(a[i]=S(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=S(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),t.watchCallbacks&&(a[x+i]=t.watchCallbacks.slice()),W(r,i,function s(t){return(t=n.Tn.get(n.Wn.get(this)))&&t[i]},function l(e,r){(r=n.Wn.get(this))&&(t.state||t.mutable)&&T(n,r,i,e,u)})}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function u(n,t,e){if(t){var r=n.Wn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Pn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.An(e,7,t,!0)}return n.jn.set(t,i),i},N=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.en(r)&&!n.Nn.has(r))return!1;if(!N(n,r))return!1}}return!0},R=function(n,t,e,r,i,o){if(n.bn.delete(t),(i=n.kn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.kn.delete(t)),n.Rn.length&&!n.bn.size)for(;o=n.Rn.shift();)o()},L=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={V:e,J:!!e.documentElement.attachShadow,Ln:!1,Dn:function(n){return n.nodeType},nn:function(n){return e.createElement(n)},Fn:function(n,t){return e.createElementNS(n,t)},Hn:function(n){return e.createTextNode(n)},qn:function(n){return e.createComment(n)},tn:function(n,t,e){return n.insertBefore(t,e)},Un:function(n){return n.remove()},Bn:function(n,t){return n.appendChild(t)},Sn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},In:function(n){return n.childNodes},Gn:function(n){return n.parentNode},Qn:function(n){return n.nextSibling},Yn:function(n){return n.previousSibling},Zn:function(n){return p(n.nodeName)},zn:function(n){return n.textContent},Jn:function(n,t){return n.textContent=t},Kn:function(n,t){return n.getAttribute(t)},Vn:function(n,t,e){return n.setAttribute(t,e)},fn:function(n,t){return n.removeAttribute(t)},cn:function(n,t){return n.hasAttribute(t)},Xn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},nt:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.tt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},an:function(t,e,o,u,f,c,a,l,v){var p=t,d=o,h=r.get(t);v=e,h&&h[v]&&h[v](),"string"==typeof c?p=i.nt(t,c):"object"==typeof c?p=c:(l=e.split(":")).length>1&&(p=i.nt(t,l[0]),e=l[1]),p&&((l=e.split(".")).length>1&&(e=l[0],d=function(n){n.keyCode===s[l[1]]&&o(n)}),a=i.Ln?{capture:!!u,passive:!!f}:!!u,n.ael(p,e,d,a),h||r.set(t,h={}),h[v]=function(){p&&n.rel(p,e,d,a),h[v]=null})},sn:function(n,t,e){(e=r.get(n))&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},et:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},tt:function(n,t){return(t=i.Gn(n))&&11===i.Dn(t)?t.host:t},rt:function(n,t,e,r){return n.setAttributeNS(t,e,r)},it:function(n,t){return n.attachShadow(t)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Ln=!0}}))}catch(n){}return i}(d,r,i),y=h.V.documentElement,w=r["s-defined"]=r["s-defined"]||{},b={K:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.Mn.delete(e),n.Nn.has(e)||(n.ot=!0,n.bn.add(e),n.Nn.set(e,!0),function(n,t,e){for(e=t;e=n.K.tt(e);)if(n.ut(e)){n.ft.has(t)||(n.kn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.$n.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.Xn(e)),e["s-cr"]||n.Kn(e,"ssrv")||n.J&&1===t.Z||(e["s-cr"]=n.Hn(""),e["s-cr"]["s-cn"]=!0,n.tn(e,e["s-cr"],n.In(e)[0])),n.J||1!==t.Z||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),1===t.Z&&n.J&&!e.shadowRoot&&n.it(e,{mode:"open"}),r={xn:{}},t.rn&&Object.keys(t.rn).forEach(function(o){(i=t.rn[o].on)&&(r.xn[i]=n.Kn(e,i))}),r}(n.K,t,e)),n.ct(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.at&&function(n,t){for(;t;){if(!n.Gn(t))return 9!==n.Dn(t);t=n.Gn(t)}}(n.K,t)&&(n.Mn.set(t,!0),R(n,t),j(n._n.get(t),!0),n.K.sn(t),n.st.delete(t),n.l&&n.l.removeHost(t),[n.kn,n.lt,n.$n].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o){if(N(n,t)&&n.jn.get(t)&&!n.Mn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ft.set(t,!0),n.vt.has(t)||(n.vt.set(t,!0),t["s-ld"]=void 0,n.K.Sn(t,e));try{j(n._n.get(t)),(o=n.lt.get(t))&&(o.forEach(function(n){return n(t)}),n.lt.delete(t))}catch(e){n.An(e,4,t)}R(n,t)}})(n,this,r)},e.forceUpdate=function(){O(n,this,i)},t.rn){var o=Object.entries(t.rn);(function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.ln&&W(e,i,function t(){return(n.Tn.get(this)||{})[i]},function t(e){T(n,this,i,S(o.un,e),r)})})})(n,0,e,i)}}(b,a[n.t]=n,t.prototype,u,f),r.customElements.define(n.t,t))},en:function(n){return a[h.Zn(n)]},pt:function(n){return t[n]},isClient:!0,ut:function(n){return!(!w[h.Zn(n)]&&!b.en(n))},An:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=k(d,r),ct:function(n,t){var e=!h.J,r={mode:t.mode,scoped:e};n.s(r).then(function(e){try{n.En=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Z,e.style,e.styleMode)}catch(t){console.error(t),n.En=function i(){}}O(b,t,f)})},On:!1,gn:!1,at:!1,Cn:l,kn:new WeakMap,X:new WeakMap,Nn:new WeakMap,st:new WeakMap,vt:new WeakMap,ft:new WeakMap,Wn:new WeakMap,$n:new WeakMap,jn:new WeakMap,Mn:new WeakMap,mn:new WeakMap,lt:new WeakMap,dt:new WeakMap,_n:new WeakMap,Tn:new WeakMap,bn:new Set,Rn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,b.Pn=t.emit=function(n,e,r){return h.et(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return b.queue.write(function(){return b.bn.size?b.Rn.push(n):n()})})},b.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,b,m){if(b=l.vchildren[p],e||(o=!0,"slot"===b.vtag&&(r&&t.Sn(d,r+"-s"),b.vchildren?b.ht=!0:b.yt=!0)),v(b.vtext))b.i=t.Hn(b.vtext);else if(b.yt)b.i=t.Hn("");else{if(y=b.i=M||"svg"===b.vtag?t.Fn("http://www.w3.org/2000/svg",b.vtag):t.nn(b.ht?"slot-fb":b.vtag),n.ut(y)&&n.ft.delete(c),M="svg"===b.vtag||"foreignObject"!==b.vtag&&M,g(n,null,b,M),v(r)&&y["s-si"]!==r&&t.Sn(y,y["s-si"]=r),b.vchildren)for(h=0;h<b.vchildren.length;++h)(w=a(i,b,h,y))&&t.Bn(y,w);"svg"===b.vtag&&(M=!1)}return b.i["s-hn"]=f,(b.ht||b.yt)&&(b.i["s-sr"]=!0,b.i["s-cr"]=u,b.i["s-sn"]=b.vname||"",(m=i&&i.vchildren&&i.vchildren[p])&&m.vtag===b.vtag&&i.i&&s(i.i)),b.i},s=function(e,r,i,u){n.at=!0;var c=t.In(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.Un(u),t.tn(y(u),u,h(u)),t.Un(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.at=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.Gn(l)||n).shadowRoot&&t.Zn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Hn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.tn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.Un(o["s-ol"]):s(o,!0),t.Un(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.Gn(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;M=r.i&&v(t.tt(r.i))&&void 0!==r.i.ownerSVGElement,M="svg"===r.vtag||"foreignObject"!==r.vtag&&M,v(r.vtext)?(i=o["s-cr"])?t.Jn(t.Gn(i),r.vtext):e.vtext!==r.vtext&&t.Jn(o,r.vtext):("slot"!==r.vtag&&g(n,e,r,M),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];b<=g&&m<=k;)if(null==M)M=e[++b];else if(null==j)j=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--k];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(j,A))w(j,A),j=e[--g],A=i[--k];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(M.i)),w(M,A),t.tn(n,M.i,t.Qn(j.i)),M=e[++b],A=i[--k];else if(d(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.Gn(j.i)),w(j,$),t.tn(n,j.i,M.i),j=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.tn(y(M.i),f,h(M.i))}b>g?l(n,null==i[k+1]?null:i[k+1].i,r,i,m,k):m>k&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.Jn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),M&&"svg"===r.vtag&&(M=!1)},b=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.In(n)).length;i<o;i++)if(e=r[i],1===t.Dn(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Dn(r[u]),""!==f){if(1===c&&f===t.Kn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.zn(r[u]).trim()){e.hidden=!0;break}b(e)}},m=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.In(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.In(t.Gn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Dn(o))||8===l)&&""===s||1===l&&null===t.Kn(o,"slot")&&""===s||1===l&&t.Kn(o,"slot")===s)&&(m.some(function(n){return n.wt===o})||(i=!0,o["s-sn"]=s,m.push({bt:r,wt:o})));1===t.Dn(r)&&j(r)}};return function(a,s,l,v,p,d,h,y,g,M,k,$){if(c=a,f=t.Zn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(j(l.i),h=0;h<m.length;h++)(y=m[h]).wt["s-ol"]||((g=t.Hn(""))["s-nr"]=y.wt,t.tn(t.Gn(y.wt),y.wt["s-ol"]=g,y.wt));for(n.at=!0,h=0;h<m.length;h++){for(y=m[h],k=t.Gn(y.bt),$=t.Qn(y.bt),g=y.wt["s-ol"];g=t.Yn(g);)if((M=g["s-nr"])&&M&&M["s-sn"]===y.wt["s-sn"]&&k===t.Gn(M)&&(M=t.Qn(M))&&M&&!M["s-nr"]){$=M;break}(!$&&k!==t.Gn(y.wt)||t.Qn(y.wt)!==$)&&y.wt!==$&&(t.Un(y.wt),t.tn(k,y.wt,$))}n.at=!1}return i&&b(l.i),m.length=0,l}}(b,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){b.ft.set(y,d.loaded=b.gn=!0),h.et(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.en(t);if(r)if(n.ft.has(t))e(t);else{var i=n.lt.get(t)||[];i.push(e),n.lt.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(b,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,b},D={},F=!1;export{r as defineCustomElement,e as h};