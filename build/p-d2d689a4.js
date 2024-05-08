import{l as e,m as n,o as r,p as t,r as i,i as u,u as a}from"./p-1631d2a0.js";
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n,r){n=v(n);if(n in e){Object.defineProperty(e,n,{value:r,enumerable:true,configurable:true,writable:true})}else{e[n]=r}return e}function s(e,n){if(typeof e!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==undefined){var t=r.call(e,n||"default");if(typeof t!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function v(e){var n=s(e,"string");return typeof n==="symbol"?n:String(n)}var l={activateTrap:function e(n,r){if(n.length>0){var t=n[n.length-1];if(t!==r){t.pause()}}var i=n.indexOf(r);if(i===-1){n.push(r)}else{n.splice(i,1);n.push(r)}},deactivateTrap:function e(n,r){var t=n.indexOf(r);if(t!==-1){n.splice(t,1)}if(n.length>0){n[n.length-1].unpause()}}};var d=function e(n){return n.tagName&&n.tagName.toLowerCase()==="input"&&typeof n.select==="function"};var b=function e(n){return(n===null||n===void 0?void 0:n.key)==="Escape"||(n===null||n===void 0?void 0:n.key)==="Esc"||(n===null||n===void 0?void 0:n.keyCode)===27};var p=function e(n){return(n===null||n===void 0?void 0:n.key)==="Tab"||(n===null||n===void 0?void 0:n.keyCode)===9};var w=function e(n){return p(n)&&!n.shiftKey};var h=function e(n){return p(n)&&n.shiftKey};var m=function e(n){return setTimeout(n,0)};var y=function e(n,r){var t=-1;n.every((function(e,n){if(r(e)){t=n;return false}return true}));return t};var F=function e(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++){t[i-1]=arguments[i]}return typeof n==="function"?n.apply(void 0,t):n};var O=function e(n){return n.target.shadowRoot&&typeof n.composedPath==="function"?n.composedPath()[0]:n.target};var k=[];var j=function u(a,o){var c=(o===null||o===void 0?void 0:o.document)||document;var s=(o===null||o===void 0?void 0:o.trapStack)||k;var v=f({returnFocusOnDeactivate:true,escapeDeactivates:true,delayInitialFocus:true,isKeyForward:w,isKeyBackward:h},o);var j={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:false,paused:false,delayInitialFocusTimer:undefined,recentNavEvent:undefined};var T;var g=function e(n,r,t){return n&&n[r]!==undefined?n[r]:v[t||r]};var D=function e(n,r){var t=typeof(r===null||r===void 0?void 0:r.composedPath)==="function"?r.composedPath():undefined;return j.containerGroups.findIndex((function(e){var r=e.container,i=e.tabbableNodes;return r.contains(n)||(t===null||t===void 0?void 0:t.includes(r))||i.find((function(e){return e===n}))}))};var E=function e(n){var r=v[n];if(typeof r==="function"){for(var t=arguments.length,i=new Array(t>1?t-1:0),u=1;u<t;u++){i[u-1]=arguments[u]}r=r.apply(void 0,i)}if(r===true){r=undefined}if(!r){if(r===undefined||r===false){return r}throw new Error("`".concat(n,"` was specified but was not a node, or did not return a node"))}var a=r;if(typeof r==="string"){a=c.querySelector(r);if(!a){throw new Error("`".concat(n,"` as selector refers to no known node"))}}return a};var N=function e(){var n=E("initialFocus");if(n===false){return false}if(n===undefined||!i(n,v.tabbableOptions)){if(D(c.activeElement)>=0){n=c.activeElement}else{var r=j.tabbableGroups[0];var t=r&&r.firstTabbableNode;n=t||E("fallbackFocus")}}if(!n){throw new Error("Your focus-trap needs to have at least one focusable element")}return n};var P=function i(){j.containerGroups=j.containers.map((function(i){var u=e(i,v.tabbableOptions);var a=n(i,v.tabbableOptions);var o=u.length>0?u[0]:undefined;var f=u.length>0?u[u.length-1]:undefined;var c=a.find((function(e){return r(e)}));var s=a.slice().reverse().find((function(e){return r(e)}));var l=!!u.find((function(e){return t(e)>0}));return{container:i,tabbableNodes:u,focusableNodes:a,posTabIndexesFound:l,firstTabbableNode:o,lastTabbableNode:f,firstDomTabbableNode:c,lastDomTabbableNode:s,nextTabbableNode:function e(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var i=u.indexOf(n);if(i<0){if(t){return a.slice(a.indexOf(n)+1).find((function(e){return r(e)}))}return a.slice(0,a.indexOf(n)).reverse().find((function(e){return r(e)}))}return u[i+(t?1:-1)]}}}));j.tabbableGroups=j.containerGroups.filter((function(e){return e.tabbableNodes.length>0}));if(j.tabbableGroups.length<=0&&!E("fallbackFocus")){throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")}if(j.containerGroups.find((function(e){return e.posTabIndexesFound}))&&j.containerGroups.length>1){throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")}};var A=function e(n){var r=n.activeElement;if(!r){return}if(r.shadowRoot&&r.shadowRoot.activeElement!==null){return e(r.shadowRoot)}return r};var x=function e(n){if(n===false){return}if(n===A(document)){return}if(!n||!n.focus){e(N());return}n.focus({preventScroll:!!v.preventScroll});j.mostRecentlyFocusedNode=n;if(d(n)){n.select()}};var B=function e(n){var r=E("setReturnFocus",n);return r?r:r===false?false:n};var R=function e(n){var u=n.target,a=n.event,o=n.isBackward,f=o===void 0?false:o;u=u||O(a);P();var c=null;if(j.tabbableGroups.length>0){var s=D(u,a);var l=s>=0?j.containerGroups[s]:undefined;if(s<0){if(f){c=j.tabbableGroups[j.tabbableGroups.length-1].lastTabbableNode}else{c=j.tabbableGroups[0].firstTabbableNode}}else if(f){var d=y(j.tabbableGroups,(function(e){var n=e.firstTabbableNode;return u===n}));if(d<0&&(l.container===u||i(u,v.tabbableOptions)&&!r(u,v.tabbableOptions)&&!l.nextTabbableNode(u,false))){d=s}if(d>=0){var b=d===0?j.tabbableGroups.length-1:d-1;var w=j.tabbableGroups[b];c=t(u)>=0?w.lastTabbableNode:w.lastDomTabbableNode}else if(!p(a)){c=l.nextTabbableNode(u,false)}}else{var h=y(j.tabbableGroups,(function(e){var n=e.lastTabbableNode;return u===n}));if(h<0&&(l.container===u||i(u,v.tabbableOptions)&&!r(u,v.tabbableOptions)&&!l.nextTabbableNode(u))){h=s}if(h>=0){var m=h===j.tabbableGroups.length-1?0:h+1;var F=j.tabbableGroups[m];c=t(u)>=0?F.firstTabbableNode:F.firstDomTabbableNode}else if(!p(a)){c=l.nextTabbableNode(u)}}}else{c=E("fallbackFocus")}return c};var S=function e(n){var r=O(n);if(D(r,n)>=0){return}if(F(v.clickOutsideDeactivates,n)){T.deactivate({returnFocus:v.returnFocusOnDeactivate});return}if(F(v.allowOutsideClick,n)){return}n.preventDefault()};var C=function e(n){var r=O(n);var i=D(r,n)>=0;if(i||r instanceof Document){if(i){j.mostRecentlyFocusedNode=r}}else{n.stopImmediatePropagation();var u;var a=true;if(j.mostRecentlyFocusedNode){if(t(j.mostRecentlyFocusedNode)>0){var o=D(j.mostRecentlyFocusedNode);var f=j.containerGroups[o].tabbableNodes;if(f.length>0){var c=f.findIndex((function(e){return e===j.mostRecentlyFocusedNode}));if(c>=0){if(v.isKeyForward(j.recentNavEvent)){if(c+1<f.length){u=f[c+1];a=false}}else{if(c-1>=0){u=f[c-1];a=false}}}}}else{if(!j.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return t(e)>0}))}))){a=false}}}else{a=false}if(a){u=R({target:j.mostRecentlyFocusedNode,isBackward:v.isKeyBackward(j.recentNavEvent)})}if(u){x(u)}else{x(j.mostRecentlyFocusedNode||N())}}j.recentNavEvent=undefined};var I=function e(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;j.recentNavEvent=n;var t=R({event:n,isBackward:r});if(t){if(p(n)){n.preventDefault()}x(t)}};var G=function e(n){if(b(n)&&F(v.escapeDeactivates,n)!==false){n.preventDefault();T.deactivate();return}if(v.isKeyForward(n)||v.isKeyBackward(n)){I(n,v.isKeyBackward(n))}};var K=function e(n){var r=O(n);if(D(r,n)>=0){return}if(F(v.clickOutsideDeactivates,n)){return}if(F(v.allowOutsideClick,n)){return}n.preventDefault();n.stopImmediatePropagation()};var M=function e(){if(!j.active){return}l.activateTrap(s,T);j.delayInitialFocusTimer=v.delayInitialFocus?m((function(){x(N())})):x(N());c.addEventListener("focusin",C,true);c.addEventListener("mousedown",S,{capture:true,passive:false});c.addEventListener("touchstart",S,{capture:true,passive:false});c.addEventListener("click",K,{capture:true,passive:false});c.addEventListener("keydown",G,{capture:true,passive:false});return T};var U=function e(){if(!j.active){return}c.removeEventListener("focusin",C,true);c.removeEventListener("mousedown",S,true);c.removeEventListener("touchstart",S,true);c.removeEventListener("click",K,true);c.removeEventListener("keydown",G,true);return T};var Y=function e(n){var r=n.some((function(e){var n=Array.from(e.removedNodes);return n.some((function(e){return e===j.mostRecentlyFocusedNode}))}));if(r){x(N())}};var L=typeof window!=="undefined"&&"MutationObserver"in window?new MutationObserver(Y):undefined;var q=function e(){if(!L){return}L.disconnect();if(j.active&&!j.paused){j.containers.map((function(e){L.observe(e,{subtree:true,childList:true})}))}};T={get active(){return j.active},get paused(){return j.paused},activate:function e(n){if(j.active){return this}var r=g(n,"onActivate");var t=g(n,"onPostActivate");var i=g(n,"checkCanFocusTrap");if(!i){P()}j.active=true;j.paused=false;j.nodeFocusedBeforeActivation=c.activeElement;r===null||r===void 0||r();var u=function e(){if(i){P()}M();q();t===null||t===void 0||t()};if(i){i(j.containers.concat()).then(u,u);return this}u();return this},deactivate:function e(n){if(!j.active){return this}var r=f({onDeactivate:v.onDeactivate,onPostDeactivate:v.onPostDeactivate,checkCanReturnFocus:v.checkCanReturnFocus},n);clearTimeout(j.delayInitialFocusTimer);j.delayInitialFocusTimer=undefined;U();j.active=false;j.paused=false;q();l.deactivateTrap(s,T);var t=g(r,"onDeactivate");var i=g(r,"onPostDeactivate");var u=g(r,"checkCanReturnFocus");var a=g(r,"returnFocus","returnFocusOnDeactivate");t===null||t===void 0||t();var o=function e(){m((function(){if(a){x(B(j.nodeFocusedBeforeActivation))}i===null||i===void 0||i()}))};if(a&&u){u(B(j.nodeFocusedBeforeActivation)).then(o,o);return this}o();return this},pause:function e(n){if(j.paused||!j.active){return this}var r=g(n,"onPause");var t=g(n,"onPostPause");j.paused=true;r===null||r===void 0||r();U();q();t===null||t===void 0||t();return this},unpause:function e(n){if(!j.paused||!j.active){return this}var r=g(n,"onUnpause");var t=g(n,"onPostUnpause");j.paused=false;r===null||r===void 0||r();P();M();q();t===null||t===void 0||t();return this},updateContainerElements:function e(n){var r=[].concat(n).filter(Boolean);j.containers=r.map((function(e){return typeof e==="string"?c.querySelector(e):e}));if(j.active){P()}q();return this}};T.updateContainerElements(a);return T};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const T=globalThis["calciteConfig"];const g=T?.focusTrapStack||[];
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */function D(e,n){const{el:r}=e;const t=n?.focusTrapEl||r;if(!t){return}const i={clickOutsideDeactivates:true,escapeDeactivates:false,fallbackFocus:t,setReturnFocus:e=>{u(e);return false},...n?.focusTrapOptions,document:r.ownerDocument,tabbableOptions:a,trapStack:g};e.focusTrap=j(t,i)}function E(e,n){if(!e.focusTrapDisabled){e.focusTrap?.activate(n)}}function N(e,n){e.focusTrap?.deactivate(n)}function P(e){e.focusTrap?.updateContainerElements(e.el)}export{E as a,D as c,N as d,P as u};
//# sourceMappingURL=p-d2d689a4.js.map