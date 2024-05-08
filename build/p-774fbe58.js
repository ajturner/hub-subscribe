import{f as n}from"./p-c9ba45b0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const a=new WeakMap;const e=new WeakMap;function s(n){e.set(n,new Promise((e=>a.set(n,e))))}function t(n){a.get(n)()}function o(n){return e.get(n)}async function r(a){await o(a);n(a);return new Promise((n=>requestAnimationFrame((()=>n()))))}export{s as a,o as b,r as c,t as s};
//# sourceMappingURL=p-774fbe58.js.map