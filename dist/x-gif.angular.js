!function t(e,r,n){function i(u,s){if(!r[u]){if(!e[u]){var a="function"==typeof require&&require;if(!s&&a)return a(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var c=r[u]={exports:{}};e[u][0].call(c.exports,function(t){var r=e[u][1][t];return i(r?r:t)},c,c.exports,t,e,r,n)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(t){(function(t,e){!function(t){"use strict";function e(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}}function r(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++H+"$__"}function n(){var t=r();return z[t]=!0,t}function i(t){return"object"==typeof t&&t instanceof s}function o(t){return i(t)?"symbol":typeof t}function u(t){var e=new s(t);if(!(this instanceof u))return e;throw new TypeError("Symbol cannot be new'ed")}function s(t){var e=r();k(this,q,{value:this}),k(this,D,{value:e}),k(this,U,{value:t}),c(this),W[e]=this}function a(t){var e=t[Y];return e&&e.self===t?e:B(t)?(X.hash.value=V++,X.self.value=t,K.value=T(null,X),k(t,Y,K),K.value):void 0}function c(t){return a(t),A.apply(this,arguments)}function l(t){return a(t),L.apply(this,arguments)}function f(t){return a(t),C.apply(this,arguments)}function h(t){return i(t)?t[D]:t}function p(t){for(var e=[],r=N(t),n=0;n<r.length;n++){var i=r[n];W[i]||z[i]||e.push(i)}return e}function m(t,e){return M(t,h(e))}function d(t){for(var e=[],r=N(t),n=0;n<r.length;n++){var i=W[r[n]];i&&e.push(i)}return e}function v(t){return I.call(this,h(t))}function g(e){return t.traceur&&t.traceur.options[e]}function y(t,e,r){var n,o;return i(e)&&(n=e,e=e[D]),t[e]=r,n&&(o=M(t,e))&&k(t,e,{enumerable:!1}),r}function b(t,e,r){return i(e)&&(r.enumerable&&(r=T(r,{enumerable:{value:!1}})),e=e[D]),k(t,e,r),t}function j(t){k(t,"defineProperty",{value:b}),k(t,"getOwnPropertyNames",{value:p}),k(t,"getOwnPropertyDescriptor",{value:m}),k(t.prototype,"hasOwnProperty",{value:v}),k(t,"freeze",{value:c}),k(t,"preventExtensions",{value:l}),k(t,"seal",{value:f}),t.getOwnPropertySymbols=d}function w(t){for(var e=1;e<arguments.length;e++)for(var r=N(arguments[e]),n=0;n<r.length;n++){var i=r[n];z[i]||!function(e,r){k(t,r,{get:function(){return e[r]},enumerable:!0})}(arguments[e],r[n])}return t}function O(t){return null!=t&&("object"==typeof t||"function"==typeof t)}function x(t){if(null==t)throw R();return E(t)}function S(t){if(!O(t))throw R(t+" is not an Object");return t}function _(t){t.Symbol=u,j(t.Object)}if(!t.$traceurRuntime){var E=Object,R=TypeError,T=E.create,P=E.defineProperties,k=E.defineProperty,A=E.freeze,M=E.getOwnPropertyDescriptor,N=E.getOwnPropertyNames,$=E.keys,I=E.prototype.hasOwnProperty,L=(E.prototype.toString,Object.preventExtensions),C=Object.seal,B=Object.isExtensible,F={"void":function(){},any:function(){},string:function(){},number:function(){},"boolean":function(){}},G=e,H=0,D=r(),U=r(),q=r(),W=T(null),z=T(null);k(u.prototype,"constructor",e(u)),k(u.prototype,"toString",G(function(){var t=this[q];if(!g("symbols"))return t[D];if(!t)throw TypeError("Conversion from symbol to string");var e=t[U];return void 0===e&&(e=""),"Symbol("+e+")"})),k(u.prototype,"valueOf",G(function(){var t=this[q];if(!t)throw TypeError("Conversion from symbol to string");return g("symbols")?t:t[D]})),k(s.prototype,"constructor",e(u)),k(s.prototype,"toString",{value:u.prototype.toString,enumerable:!1}),k(s.prototype,"valueOf",{value:u.prototype.valueOf,enumerable:!1});var Y=n(),K={value:void 0},X={hash:{value:void 0},self:{value:void 0}},V=0;u.iterator=u(),c(s.prototype),_(t),t.$traceurRuntime={assertObject:S,createPrivateName:n,exportStar:w,getOwnHashObject:a,privateNames:z,setProperty:y,setupGlobals:_,toObject:x,toProperty:h,type:F,"typeof":o,defineProperties:P,defineProperty:k,getOwnPropertyDescriptor:M,getOwnPropertyNames:N,keys:$}}}("undefined"!=typeof e?e:this),function(){"use strict";function t(){for(var t=[],r=0,n=0;n<arguments.length;n++)for(var i=e(arguments[n]),o=0;o<i.length;o++)t[r++]=i[o];return t}var e=$traceurRuntime.toObject;$traceurRuntime.spread=t}(),function(){"use strict";function t(t,e){var r=d(t);do{var n=p(r,e);if(n)return n;r=d(r)}while(r);return void 0}function e(t,e,n,i){return r(t,e,n).apply(t,i)}function r(e,r,n){var i=t(r,n);return i?i.get?i.get.call(e):i.value:void 0}function n(e,r,n,i){var o=t(r,n);if(o&&o.set)return o.set.call(e,i),i;throw c("super has no setter '"+n+"'.")}function i(t){for(var e,r={},n=m(t),i=0;i<n.length;i++){var e=n[i];r[e]=p(t,e)}return r}function o(t,e,r,n){return h(e,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof n&&(t.__proto__=n),t.prototype=l(u(n),i(e))):t.prototype=e,h(t,"prototype",{configurable:!1,writable:!1}),f(t,i(r))}function u(t){if("function"==typeof t){var e=t.prototype;if(a(e)===e||null===e)return t.prototype}if(null===t)return null;throw new c}function s(t,r,n){null!==d(r)&&e(t,r,"constructor",n)}var a=Object,c=TypeError,l=a.create,f=$traceurRuntime.defineProperties,h=$traceurRuntime.defineProperty,p=$traceurRuntime.getOwnPropertyDescriptor,m=$traceurRuntime.getOwnPropertyNames,d=Object.getPrototypeOf;$traceurRuntime.createClass=o,$traceurRuntime.defaultSuperCall=s,$traceurRuntime.superCall=e,$traceurRuntime.superGet=r,$traceurRuntime.superSet=n}(),function(){"use strict";function t(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}}function e(t){return new Error("Traceur compiler bug: invalid state in state machine: "+t)}function r(){this.state=0,this.GState=g,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.tryStack_=[]}function n(t,e,r,n){switch(t.GState){case y:throw new Error('"'+r+'" on executing generator');case j:if("next"==r)return{value:void 0,done:!0};throw new Error('"'+r+'" on closed generator');case g:if("throw"===r)throw t.GState=j,n;if(void 0!==n)throw v("Sent value to newborn generator");case b:t.GState=y,t.action=r,t.sent=n;var i=e(t),o=i===t;return o&&(i=t.returnValue),t.GState=o?j:b,{value:i,done:o}}}function i(){}function o(){}function u(t,e,n){var i=l(t,n),o=new r,u=d(e.prototype);return u[x]=o,u[S]=i,u}function s(t){return t.prototype=d(o.prototype),t.__proto__=o,t}function a(){r.call(this),this.err=void 0;var t=this;t.result=new Promise(function(e,r){t.resolve=e,t.reject=r})}function c(t,e){var r=l(t,e),n=new a;return n.createCallback=function(t){return function(e){n.state=t,n.value=e,r(n)}},n.errback=function(t){f(n,t),r(n)},r(n),n.result}function l(t,e){return function(r){for(;;)try{return t.call(e,r)}catch(n){f(r,n)}}}function f(t,e){t.storedException=e;var r=t.tryStack_[t.tryStack_.length-1];return r?(t.state=void 0!==r.catch?r.catch:r.finally,void(void 0!==r.finallyFallThrough&&(t.finallyFallThrough=r.finallyFallThrough))):void t.handleException(e)}var h=$traceurRuntime.createPrivateName,p=$traceurRuntime.defineProperties,m=$traceurRuntime.defineProperty,d=Object.create,v=TypeError,g=0,y=1,b=2,j=3,w=-2,O=-3;r.prototype={pushTry:function(t,e){if(null!==e){for(var r=null,n=this.tryStack_.length-1;n>=0;n--)if(void 0!==this.tryStack_[n].catch){r=this.tryStack_[n].catch;break}null===r&&(r=O),this.tryStack_.push({"finally":e,finallyFallThrough:r})}null!==t&&this.tryStack_.push({"catch":t})},popTry:function(){this.tryStack_.pop()},get sent(){return this.maybeThrow(),this.sent_},set sent(t){this.sent_=t},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_},end:function(){switch(this.state){case w:return this;case O:throw this.storedException;default:throw e(this.state)}},handleException:function(t){throw this.GState=j,this.state=w,t}};var x=h(),S=h();i.prototype=o,m(o,"constructor",t(i)),o.prototype={constructor:o,next:function(t){return n(this[x],this[S],"next",t)},"throw":function(t){return n(this[x],this[S],"throw",t)}},p(o.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1}}),Object.defineProperty(o.prototype,Symbol.iterator,t(function(){return this})),a.prototype=d(r.prototype),a.prototype.end=function(){switch(this.state){case w:this.resolve(this.returnValue);break;case O:this.reject(this.storedException);break;default:this.reject(e(this.state))}},a.prototype.handleException=function(){this.state=O},$traceurRuntime.asyncWrap=c,$traceurRuntime.initGeneratorFunction=s,$traceurRuntime.createGeneratorInstance=u}(),function(){function t(t,e,r,n,i,o,u){var s=[];return t&&s.push(t,":"),r&&(s.push("//"),e&&s.push(e,"@"),s.push(r),n&&s.push(":",n)),i&&s.push(i),o&&s.push("?",o),u&&s.push("#",u),s.join("")}function e(t){return t.match(s)}function r(t){if("/"===t)return"/";for(var e="/"===t[0]?"/":"",r="/"===t.slice(-1)?"/":"",n=t.split("/"),i=[],o=0,u=0;u<n.length;u++){var s=n[u];switch(s){case"":case".":break;case"..":i.length?i.pop():o++;break;default:i.push(s)}}if(!e){for(;o-->0;)i.unshift("..");0===i.length&&i.push(".")}return e+i.join("/")+r}function n(e){var n=e[a.PATH]||"";return n=r(n),e[a.PATH]=n,t(e[a.SCHEME],e[a.USER_INFO],e[a.DOMAIN],e[a.PORT],e[a.PATH],e[a.QUERY_DATA],e[a.FRAGMENT])}function i(t){var r=e(t);return n(r)}function o(t,r){var i=e(r),o=e(t);if(i[a.SCHEME])return n(i);i[a.SCHEME]=o[a.SCHEME];for(var u=a.SCHEME;u<=a.PORT;u++)i[u]||(i[u]=o[u]);if("/"==i[a.PATH][0])return n(i);var s=o[a.PATH],c=s.lastIndexOf("/");return s=s.slice(0,c+1)+i[a.PATH],i[a.PATH]=s,n(i)}function u(t){if(!t)return!1;if("/"===t[0])return!0;var r=e(t);return r[a.SCHEME]?!0:!1}var s=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),a={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};$traceurRuntime.canonicalizeUrl=i,$traceurRuntime.isAbsolute=u,$traceurRuntime.removeDotSegments=r,$traceurRuntime.resolveUrl=o}(),function(t){"use strict";function e(t){if(t){var e=m.normalize(t);return a[e]}}function r(t){var e=arguments[1],r=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(n){var i,o;if(e===p){var u=Object.getOwnPropertyDescriptor(t,n);u.get&&(i=u.get)}i||(o=t[n],i=function(){return o}),Object.defineProperty(r,n,{get:i,enumerable:!0})}),Object.preventExtensions(r),r}var n,i=$traceurRuntime.assertObject($traceurRuntime),o=i.canonicalizeUrl,u=i.resolveUrl,s=i.isAbsolute,a=Object.create(null);n=t.location&&t.location.href?u(t.location.href,"./"):"";var c=function(t,e){this.url=t,this.value_=e};$traceurRuntime.createClass(c,{},{});var l=function(t,e){$traceurRuntime.superCall(this,f.prototype,"constructor",[t,null]),this.func=e},f=l;$traceurRuntime.createClass(l,{getUncoatedModule:function(){return this.value_?this.value_:this.value_=this.func.call(t)}},{},c);var h=Object.create(null),p={},m={normalize:function(t,e){if("string"!=typeof t)throw new TypeError("module name must be a string, not "+typeof t);if(s(t))return o(t);if(/[^\.]\/\.\.\//.test(t))throw new Error("module name embeds /../: "+t);return"."===t[0]&&e?u(e,t):o(t)},get:function(t){var n=e(t);if(!n)return void 0;var i=h[n.url];return i?i:(i=r(n.getUncoatedModule(),p),h[n.url]=i)},set:function(t,e){t=String(t),a[t]=new l(t,function(){return e}),h[t]=e},get baseURL(){return n},set baseURL(t){n=String(t)},registerModule:function(t,e){var r=m.normalize(t);if(a[r])throw new Error("duplicate module named "+r);a[r]=new l(r,e)},bundleStore:Object.create(null),register:function(t,e,r){e&&(e.length||r.length)?this.bundleStore[t]={deps:e,execute:function(){var t=arguments,n={};e.forEach(function(e,r){return n[e]=t[r]});var i=r.call(this,n);return i.execute.call(this),i.exports}}:this.registerModule(t,r)},getAnonymousModule:function(e){return new r(e.call(t),p)},getForTesting:function(t){var e=this;return this.testingPrefix_||Object.keys(h).some(function(t){var r=/(traceur@[^\/]*\/)/.exec(t);return r?(e.testingPrefix_=r[1],!0):void 0}),this.get(this.testingPrefix_+t)}};m.set("@traceur/src/runtime/ModuleStore",new r({ModuleStore:m}));var d=$traceurRuntime.setupGlobals;$traceurRuntime.setupGlobals=function(t){d(t)},$traceurRuntime.ModuleStore=m,t.System={register:m.register.bind(m),get:m.get,set:m.set,normalize:m.normalize},$traceurRuntime.getModuleImpl=function(t){var r=e(t);return r&&r.getUncoatedModule()}}("undefined"!=typeof e?e:this),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/utils",[],function(){"use strict";function t(t){return 0|t}function e(t){return t&&("object"==typeof t||"function"==typeof t)}function r(t){return"function"==typeof t}function n(t){return t=+t,isNaN(t)?0:isFinite(t)&&0!==t?t>0?Math.floor(t):Math.ceil(t):t}function i(t){var e=n(t);return 0>e?0:Math.min(e,u)}var o=$traceurRuntime.toObject,u=Math.pow(2,53)-1;return{get toObject(){return o},get toUint32(){return t},get isObject(){return e},get isCallable(){return r},get toInteger(){return n},get toLength(){return i}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Array",[],function(){"use strict";function t(t){var e=void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=s(this),i=u(n.length),a=o(e),c=void 0!==r?o(r):i;for(a=0>a?Math.max(i+a,0):Math.min(a,i),c=0>c?Math.max(i+c,0):Math.min(c,i);c>a;)n[a]=t,a++;return n}function e(t){var e=arguments[1];return n(this,t,e)}function r(t){var e=arguments[1];return n(this,t,e,!0)}function n(t,e){var r=arguments[2],n=void 0!==arguments[3]?arguments[3]:!1,i=s(t),o=u(i.length);if(!a(e))throw TypeError();for(var c=0;o>c;c++)if(c in i){var l=i[c];if(e.call(r,l,c,i))return n?c:l}return n?-1:void 0}var i=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")),o=i.toInteger,u=i.toLength,s=i.toObject,a=i.isCallable;return{get fill(){return t},get find(){return e},get findIndex(){return r}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/ArrayIterator",[],function(){"use strict";function t(t,e){var r=s(t),n=new h;return n.iteratorObject_=r,n.arrayIteratorNextIndex_=0,n.arrayIterationKind_=e,n}function e(t,e){return{value:t,done:e}}function r(){return t(this,f)}function n(){return t(this,c)}function i(){return t(this,l)}var o,u=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")),s=u.toObject,a=u.toUint32,c=1,l=2,f=3,h=function(){};return $traceurRuntime.createClass(h,(o={},Object.defineProperty(o,"next",{value:function(){var t=s(this),r=t.iteratorObject_;if(!r)throw new TypeError("Object is not an ArrayIterator");var n=t.arrayIteratorNextIndex_,i=t.arrayIterationKind_,o=a(r.length);return n>=o?(t.arrayIteratorNextIndex_=1/0,e(void 0,!0)):(t.arrayIteratorNextIndex_=n+1,i==l?e(r[n],!1):i==f?e([n,r[n]],!1):e(n,!1))},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(o,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),o),{}),{get entries(){return r},get keys(){return n},get values(){return i}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Map",[],function(){"use strict";function t(t,e){if(r(e)){var i=n(e);return i&&t.objectIndex_[i.hash]}return"string"==typeof e?t.stringIndex_[e]:t.primitiveIndex_[e]}function e(t){t.entries_=[],t.objectIndex_=Object.create(null),t.stringIndex_=Object.create(null),t.primitiveIndex_=Object.create(null),t.deletedCount_=0}var r=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")).isObject,n=$traceurRuntime.getOwnHashObject,i=Object.prototype.hasOwnProperty,o={},u=function(){var t=arguments[0];if(!r(this))throw new TypeError("Constructor Map requires 'new'");if(i.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");if(e(this),null!==t&&void 0!==t){var n=t[Symbol.iterator];if(void 0!==n)for(var o,u=t[Symbol.iterator]();!(o=u.next()).done;){var s=$traceurRuntime.assertObject(o.value),a=s[0],c=s[1];this.set(a,c)}}};return $traceurRuntime.createClass(u,{get size(){return this.entries_.length/2-this.deletedCount_},get:function(e){var r=t(this,e);return void 0!==r?this.entries_[r+1]:void 0},set:function(e,i){var o=r(e),u="string"==typeof e,s=t(this,e);if(void 0!==s)this.entries_[s+1]=i;else if(s=this.entries_.length,this.entries_[s]=e,this.entries_[s+1]=i,o){var a=n(e),c=a.hash;this.objectIndex_[c]=s}else u?this.stringIndex_[e]=s:this.primitiveIndex_[e]=s;return this},has:function(e){return void 0!==t(this,e)},"delete":function(t){var e,i,u=r(t),s="string"==typeof t;if(u){var a=n(t);a&&(e=this.objectIndex_[i=a.hash],delete this.objectIndex_[i])}else s?(e=this.stringIndex_[t],delete this.stringIndex_[t]):(e=this.primitiveIndex_[t],delete this.primitiveIndex_[t]);void 0!==e&&(this.entries_[e]=o,this.entries_[e+1]=void 0,this.deletedCount_++)},clear:function(){e(this)},forEach:function(t){for(var e=arguments[1],r=0,n=this.entries_.length;n>r;r+=2){var i=this.entries_[r],u=this.entries_[r+1];i!==o&&t.call(e,u,i,this)}}},{}),{get Map(){return u}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Object",[],function(){"use strict";function t(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function e(t){for(var e=1;e<arguments.length;e++){var r,n=arguments[e],i=s(n),o=i.length;for(r=0;o>r;r++){var u=i[r];a[u]||(t[u]=n[u])}}return t}function r(t,e){var r,n,s=u(e),c=s.length;for(r=0;c>r;r++){var l=s[r];a[l]||(n=o(e,s[r]),i(t,s[r],n))}return t}var n=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/utils")),n=(n.toInteger,n.toLength,n.toObject,n.isCallable,$traceurRuntime.assertObject($traceurRuntime)),i=n.defineProperty,o=n.getOwnPropertyDescriptor,u=n.getOwnPropertyNames,s=n.keys,a=n.privateNames;return{get is(){return t},get assign(){return e},get mixin(){return r}}}),System.register("traceur-runtime@0.0.42/node_modules/rsvp/lib/rsvp/asap",[],function(){"use strict";function e(){return function(){t.nextTick(i)}}function r(){var t=0,e=new a(i),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function n(){return function(){setTimeout(i,1)}}function i(){for(var t=0;t<c.length;t++){var e=c[t],r=e[0],n=e[1];r(n)}c=[]}var o,u=function(t,e){var r=c.push([t,e]);1===r&&o()},s="undefined"!=typeof window?window:{},a=s.MutationObserver||s.WebKitMutationObserver,c=[];return o="undefined"!=typeof t&&"[object process]"==={}.toString.call(t)?e():a?r():n(),{get default(){return u}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/Promise",[],function(){"use strict";function t(t){return t&&"object"==typeof t&&void 0!==t.status_}function e(t){return t}function r(t){throw t}function n(t){var n=void 0!==arguments[1]?arguments[1]:e,o=void 0!==arguments[2]?arguments[2]:r,u=i(t.constructor);switch(t.status_){case void 0:throw TypeError;case 0:t.onResolve_.push(n,u),t.onReject_.push(o,u);break;case 1:l(t.value_,[n,u]);break;case-1:l(t.value_,[o,u])}return u.promise}function i(t){if(this===g){var e=u(new g(d));return{promise:e,resolve:function(t){s(e,t)},reject:function(t){a(e,t)}}}var r={};return r.promise=new t(function(t,e){r.resolve=t,r.reject=e}),r}function o(t,e,r,n,i){return t.status_=e,t.value_=r,t.onResolve_=n,t.onReject_=i,t}function u(t){return o(t,0,void 0,[],[])}function s(t,e){c(t,1,e,t.onResolve_)}function a(t,e){c(t,-1,e,t.onReject_)}function c(t,e,r,n){0===t.status_&&(l(r,n),o(t,e,r))}function l(t,e){m(function(){for(var r=0;r<e.length;r+=2)f(t,e[r],e[r+1])})}function f(e,r,i){try{var o=r(e);if(o===i.promise)throw new TypeError;t(o)?n(o,i.resolve,i.reject):i.resolve(o)}catch(u){try{i.reject(u)}catch(u){}}}function h(t){return t&&("object"==typeof t||"function"==typeof t)}function p(e,r){if(!t(r)&&h(r)){var n;try{n=r.then}catch(o){var u=y.call(e,o);return r[b]=u,u}if("function"==typeof n){var s=r[b];if(s)return s;var a=i(e);r[b]=a.promise;try{n.call(r,a.resolve,a.reject)}catch(o){a.reject(o)}return a.promise}}return r}var m=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/node_modules/rsvp/lib/rsvp/asap")).default,d={},v=function(t){if(t!==d){if("function"!=typeof t)throw new TypeError;var e=u(this);try{t(function(t){s(e,t)},function(t){a(e,t)})}catch(r){a(e,r)}}};$traceurRuntime.createClass(v,{"catch":function(t){return this.then(void 0,t)},then:function(i,o){"function"!=typeof i&&(i=e),"function"!=typeof o&&(o=r);var u=this,s=this.constructor;return n(this,function(e){return e=p(s,e),e===u?o(new TypeError):t(e)?e.then(i,o):i(e)},o)}},{resolve:function(t){return this===g?o(new g(d),1,t):new this(function(e){e(t)})},reject:function(t){return this===g?o(new g(d),-1,t):new this(function(e,r){r(t)})},cast:function(e){if(e instanceof this)return e;if(t(e)){var r=i(this);return n(e,r.resolve,r.reject),r.promise}return this.resolve(e)},all:function(t){var e=i(this),r=[];try{var n=t.length;if(0===n)e.resolve(r);else for(var o=0;o<t.length;o++)this.resolve(t[o]).then(function(t,i){r[t]=i,0===--n&&e.resolve(r)}.bind(void 0,o),function(t){e.reject(t)})}catch(u){e.reject(u)}return e.promise},race:function(t){var e=i(this);try{for(var r=0;r<t.length;r++)this.resolve(t[r]).then(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}return e.promise}});var g=v,y=g.reject,b="@@thenable";return{get Promise(){return v}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/String",[],function(){"use strict";function t(t){var e=String(this);if(null==this||"[object RegExp]"==s.call(t))throw TypeError();var r=e.length,n=String(t),i=(n.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;isNaN(o)&&(o=0);var u=Math.min(Math.max(o,0),r);return a.call(e,n,o)==u}function e(t){var e=String(this);if(null==this||"[object RegExp]"==s.call(t))throw TypeError();var r=e.length,n=String(t),i=n.length,o=r;if(arguments.length>1){var u=arguments[1];void 0!==u&&(o=u?Number(u):0,isNaN(o)&&(o=0))}var a=Math.min(Math.max(o,0),r),l=a-i;return 0>l?!1:c.call(e,n,l)==l}function r(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=String(t),i=(n.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;isNaN(o)&&(o=0);Math.min(Math.max(o,0),r);return-1!=a.call(e,n,o)}function n(t){if(null==this)throw TypeError();var e=String(this),r=t?Number(t):0;if(isNaN(r)&&(r=0),0>r||1/0==r)throw RangeError();if(0==r)return"";for(var n="";r--;)n+=e;return n}function i(t){if(null==this)throw TypeError();var e=String(this),r=e.length,n=t?Number(t):0;if(isNaN(n)&&(n=0),0>n||n>=r)return void 0;var i,o=e.charCodeAt(n);return o>=55296&&56319>=o&&r>n+1&&(i=e.charCodeAt(n+1),i>=56320&&57343>=i)?1024*(o-55296)+i-56320+65536:o}function o(t){var e=t.raw,r=e.length>>>0;if(0===r)return"";for(var n="",i=0;;){if(n+=e[i],i+1===r)return n;n+=arguments[++i]}}function u(){var t,e,r=[],n=Math.floor,i=-1,o=arguments.length;if(!o)return"";for(;++i<o;){var u=Number(arguments[i]);if(!isFinite(u)||0>u||u>1114111||n(u)!=u)throw RangeError("Invalid code point: "+u);65535>=u?r.push(u):(u-=65536,t=(u>>10)+55296,e=u%1024+56320,r.push(t,e))}return String.fromCharCode.apply(null,r)}var s=Object.prototype.toString,a=String.prototype.indexOf,c=String.prototype.lastIndexOf;return{get startsWith(){return t},get endsWith(){return e},get contains(){return r},get repeat(){return n},get codePointAt(){return i},get raw(){return o},get fromCodePoint(){return u}}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfills/polyfills",[],function(){"use strict";function t(t,e,r){e in t||Object.defineProperty(t,e,{value:r,configurable:!0,enumerable:!1,writable:!0})}function e(e,r){for(var n=0;n<r.length;n+=2){var i=r[n],o=r[n+1];t(e,i,o)}}function r(t){t.Promise||(t.Promise=c)}function n(t){t.Map||(t.Map=a)}function i(t){e(t.prototype,["codePointAt",f,"contains",h,"endsWith",p,"startsWith",g,"repeat",d]),e(t,["fromCodePoint",m,"raw",v])}function o(t,r){e(t.prototype,["entries",w,"keys",O,"values",x,"fill",y,"find",b,"findIndex",j]),r&&r.iterator&&Object.defineProperty(t.prototype,r.iterator,{value:x,configurable:!0,enumerable:!1,writable:!0})}function u(t){e(t,["assign",S,"is",_,"mixin",E])}function s(t){r(t),n(t),i(t.String),o(t.Array,t.Symbol),u(t.Object)}var a=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Map")).Map,c=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Promise")).Promise,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/String")),f=l.codePointAt,h=l.contains,p=l.endsWith,m=l.fromCodePoint,d=l.repeat,v=l.raw,g=l.startsWith,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Array")),y=l.fill,b=l.find,j=l.findIndex,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/ArrayIterator")),w=l.entries,O=l.keys,x=l.values,l=$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/Object")),S=l.assign,_=l.is,E=l.mixin;s(this);var R=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(t){R(t),s(t)},{}}),System.register("traceur-runtime@0.0.42/src/runtime/polyfill-import",[],function(){"use strict";$traceurRuntime.assertObject(System.get("traceur-runtime@0.0.42/src/runtime/polyfills/polyfills"));return{}}),System.get("traceur-runtime@0.0.42/src/runtime/polyfill-import")}).call(this,t("1YiZ5S"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"1YiZ5S":2}],2:[function(t,e){function r(){}var n=e.exports={};n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var r=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(t){r.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.on=r,n.addListener=r,n.once=r,n.off=r,n.removeListener=r,n.removeAllListeners=r,n.emit=r,n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}],3:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return a}},__esModule:{value:!0}});var n=$traceurRuntime.assertObject(t("./gif.js")).default,i=$traceurRuntime.assertObject(t("./stream_reader.js")).default,o=$traceurRuntime.assertObject(t("./utils.js")).Promises,u=URL&&URL.createObjectURL?URL:webkitURL,s=new Map,a=function(){var t=function(t){this.file=t};return $traceurRuntime.createClass(t,{load:function(){var t=this,e=s.get(this.file);if(e)return e;var r=o.xhrGet(this.file,"*/*","arraybuffer").then(function(e){return t.explode(e)});return s.set(this.file,r),r},explode:function(t){return console.debug("EXPLODING "+this.file),new Promise(function(e,r){var o=[],s=new i(t);if("GIF89a"!=s.readAscii(6))return void r(Error("Not a GIF!"));if(s.skipBytes(4),s.peekBit(1)){s.log("GLOBAL COLOR TABLE");var a=7&s.readByte();s.log("GLOBAL COLOR TABLE IS "+3*Math.pow(2,a+1)+" BYTES"),s.skipBytes(2),s.skipBytes(3*Math.pow(2,a+1))}else s.log("NO GLOBAL COLOR TABLE");for(var c=t.slice(0,s.index),l=!0,f=!1;l;)if(s.isNext([33,255])){s.log("APPLICATION EXTENSION"),s.skipBytes(2);var h=s.readByte();if(s.log(s.readAscii(h)),s.isNext([3,1]))s.skipBytes(5);else{for(s.log("A weird application extension. Skip until we have 2 NULL bytes");0!==s.readByte()||0!==s.peekByte(););s.log("OK moving on"),s.skipBytes(1)}}else if(s.isNext([33,254])){for(s.log("COMMENT EXTENSION"),s.skipBytes(2);!s.isNext([0]);){var h=s.readByte();s.log(s.readAscii(h))}s.skipBytes(1)}else if(s.isNext([44])){if(s.log("IMAGE DESCRIPTOR!"),f||o.push({index:s.index,delay:0}),f=!1,s.skipBytes(9),s.peekBit(1)){s.log("LOCAL COLOR TABLE");var a=7&s.readByte();s.log("LOCAL COLOR TABLE IS "+3*Math.pow(2,a+1)+" BYTES"),s.skipBytes(3*Math.pow(2,a+1))}else s.log("NO LOCAL TABLE PHEW"),s.skipBytes(1);for(s.log("MIN CODE SIZE "+s.readByte()),s.log("DATA START");!s.isNext([0]);){var h=s.readByte();s.skipBytes(h)}s.log("DATA END"),s.skipBytes(1)}else if(s.isNext([33,249,4])){s.log("GRAPHICS CONTROL EXTENSION!");var p=s.index;s.skipBytes(3);var m=s.readByte()>>2;s.log("DISPOSAL "+m);var d=s.readByte()+256*s.readByte();o.push({index:p,delay:d,disposal:m}),s.log("FRAME DELAY "+d),s.skipBytes(2),f=!0}else{for(var v=s.index;!s.finished()&&!s.isNext([33,249,4]);)s.readByte();s.finished()?(s.index=v,s.log("WE END"),l=!1):s.log("UNKNOWN DATA FROM "+v)}for(var g=s.index,y=t.slice(-1),b=0;b<o.length;b++){var j=o[b],w=b<o.length-1?o[b+1].index:g;j.blob=new Blob([c,t.slice(j.index,w),y],{type:"image/gif"}),j.url=u.createObjectURL(j.blob)}e(new n(o))})}},{})}()},{"./gif.js":5,"./stream_reader.js":8,"./utils.js":9}],4:[function(t){"use strict";var e=$traceurRuntime.assertObject(t("./playback.js")).default,r=$traceurRuntime.assertObject(t("./strategies.js")).default;angular.module("x-gif",[]).directive("gif",function(){return{restrict:"E",template:'<div class="frames-wrapper"><div class="x-gif__frames"></div></div>',link:function(t,n,i){var o=Object.create(i,{fire:{value:function(t){console.log(t)}}});null!=o.exploded?o.playbackStrategy="noop":null!=o.sync?o.playbackStrategy="noop":o.hardBpm?o.playbackStrategy="hardBpm":o.bpm?o.playbackStrategy="bpm":(o.speed=o.speed||1,o.playbackStrategy="speed"),i.$observe("src",function(t){if(t){var i=r[o.playbackStrategy];o.playback=new e(o,n[0].querySelector(".x-gif__frames"),o.src,{pingPong:null!=o.pingPong,fill:null!=o.fill,stopped:null!=o.stopped}),o.playback.ready.then(i.bind(o))}}),i.$observe("speed",function(t){t&&o.playback&&(o.playback.speed=t)}),n[0].clock=function(t,e,r){o.playback&&o.playback.gif&&o.playback.fromClock(t,e,r)},n[0].relayout=function(){o.playback&&null!=o.fill&&o.playback.scaleToFill()}}}})},{"./playback.js":6,"./strategies.js":7}],5:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return i}},__esModule:{value:!0}});var n=10,i=function(){var t=function(t){var e=this;this.frames=t,this.length=0,this.offsets=[],t.forEach(function(t){e.offsets.push(e.length),e.length+=t.delay||n})};return $traceurRuntime.createClass(t,{frameAt:function(t){for(var e=t*this.length,r=1,n=this.offsets.length;n>r&&!(this.offsets[r]>e);r++);return r-1}},{})}()},{}],6:[function(t,e,r){"use strict";function n(t,e){t.classList.add("frame"),2==e.disposal&&t.classList.add("disposal-restore")}Object.defineProperties(r,{"default":{get:function(){return u}},__esModule:{value:!0}});var i=$traceurRuntime.assertObject(t("./exploder.js")).default,o=function(t){var e=new Image;return e.src=t.url,n(e,t),e},u=function(){var t=function(t,e,r,n){var u=this;this.xgif=t,this.element=e,this.onReady=n.onReady,this.pingPong=n.pingPong,this.fill=n.fill,this.stopped=n.stopped,this.snap=n.snap,this.nTimes=n.nTimes,this.ready=new Promise(function(t){var e=new i(r);e.load().then(function(e){console.debug("Received "+e.frames.length+" frames of gif "+r),u.gif=e,u.element.innerHTML="";var n=o;e.frames.map(n).forEach(u.element.appendChild,u.element),u.fill&&requestAnimationFrame(u.scaleToFill.bind(u)),t()})})};return $traceurRuntime.createClass(t,{scaleToFill:function(){if(this.element.offsetWidth&&this.element.offsetHeight){var t=this.element.parentElement.offsetWidth/this.element.offsetWidth,e=this.element.parentElement.offsetHeight/this.element.offsetHeight;this.element.style.webkitTransform="scale("+1.1*Math.max(t,e)+")"}else requestAnimationFrame(this.scaleToFill.bind(this))},setFrame:function(t,e){var r=this.gif.frameAt(this.pingPong&&e%2>=1?1-t:t);this.element.dataset.frame=r},start:function(){this.stopped=!1,this.startTime=performance.now(),this.animationLoop&&this.animationLoop()},stop:function(){this.stopped=!0},startSpeed:function(t){var e=this;this.speed=t,this.animationLoop=function(){var t=10*e.gif.length/e.speed,r=performance.now()-e.startTime,n=r/t,i=n%1;e.nTimes&&n>=e.nTimes?(e.setFrame(e.nTimes%1||1,n),e.element.dispatchEvent(new CustomEvent("x-gif-finished"),!0)):(e.setFrame(i,n),e.stopped||requestAnimationFrame(e.animationLoop))
},this.stopped||this.start()},fromClock:function(t,e,r){var n=1.5,i=this.snap?1:Math.max(1,Math.round(1/n*10*this.gif.length/e)),o=t%i,u=t/i,s=r/i+o/i;this.setFrame(s,u)},changeBpm:function(t){this.beatLength=6e4/t},startBpm:function(t){var e=this;this.changeBpm(t),this.animationLoop=function(){var t=performance.now()-e.startTime,r=Math.floor(t/e.beatLength),n=t%e.beatLength/e.beatLength;e.fromClock(r,e.beatLength,n),e.stopped||requestAnimationFrame(e.animationLoop)},this.stopped||this.start()}},{})}()},{"./exploder.js":3}],7:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return i}},__esModule:{value:!0}});var n={speed:function(){this.playback.startSpeed(this.speed,this.context.getAttribute("n-times"))},hardBpm:function(){this.playback.startHardBpm(parseFloat(this.context.getAttribute("hard-bpm")))},bpm:function(){this.playback.startBpm(parseFloat(this.context.getAttribute("bpm")))},noop:function(){}},i=n},{}],8:[function(t,e,r){"use strict";Object.defineProperties(r,{"default":{get:function(){return n}},__esModule:{value:!0}});var n=function(){var t=function(t){this.data=new Uint8Array(t),this.index=0,this.log("TOTAL LENGTH: "+this.data.length)};return $traceurRuntime.createClass(t,{finished:function(){return this.index>=this.data.length},readByte:function(){return this.data[this.index++]},peekByte:function(){return this.data[this.index]},skipBytes:function(t){this.index+=t},peekBit:function(t){return!!(this.peekByte()&1<<8-t)},readAscii:function(t){for(var e="",r=0;t>r;r++)e+=String.fromCharCode(this.readByte());return e},isNext:function(t){for(var e=0;e<t.length;e++)if(t[e]!==this.data[this.index+e])return!1;return!0},log:function(){},error:function(t){console.error(this.index+": "+t)}},{})}()},{}],9:[function(t,e,r){"use strict";Object.defineProperties(r,{Promises:{get:function(){return n}},__esModule:{value:!0}});var n={xhrGet:function(t,e,r){return new Promise(function(n,i){var o=new XMLHttpRequest;o.open("GET",t,!0),o.setRequestHeader("Accept",e),o.responseType=r,o.onload=function(){200==this.status?n(this.response):i(Error(this.statusText))},o.onerror=function(){i(Error("Network Error"))},o.send()})}}},{}]},{},[1,4]);