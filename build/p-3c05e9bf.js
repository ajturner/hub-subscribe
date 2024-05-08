import{a as n}from"./p-c9ba45b0.js";import{g as t}from"./p-909ebb2d.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const s={};async function c(t,c){const a=`${c}_${t}`;if(s[a]){return s[a]}s[a]=fetch(n(`./assets/${c}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){o()}return n.json()})).catch((()=>o()));return s[a]}function o(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await i(n,n.effectiveLocale);a(n)}async function i(n,s){const{el:o}=n;const a=o.tagName.toLowerCase();const e=a.replace("calcite-","");return c(t(s,"t9n"),e)}async function r(n,t){n.defaultMessages=await i(n,t);a(n)}function u(n){n.onMessagesChange=m}function f(n){n.onMessagesChange=undefined}function m(){a(this)}export{u as c,f as d,e as s,r as u};
//# sourceMappingURL=p-3c05e9bf.js.map