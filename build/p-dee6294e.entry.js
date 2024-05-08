import{r as t,h as e,H as o}from"./p-c9ba45b0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const n="calcite-mode-auto";const c="calcite-mode-dark";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */function s(){const{classList:t}=document.body;const e=window.matchMedia("(prefers-color-scheme: dark)").matches;const o=()=>t.contains(c)||t.contains(n)&&e?"dark":"light";const s=t=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:t}}));const i=t=>{a!==t&&s(t);a=t};let a=o();s(a);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>i(t.matches?"dark":"light")));new MutationObserver((()=>i(o()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function i(){const t=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(t){if(document.readyState==="interactive"){s()}else{document.addEventListener("DOMContentLoaded",(()=>s()),{once:true})}}}const a=i;a();const d=":host{display:block}";const l=class{constructor(e){t(this,e)}componentDidLoad(){const t=document.querySelector("arcgis-hub-subscribe-button");const e=document.querySelector("#example-modal");t.addEventListener("click",(()=>{e.open=true}))}render(){return e(o,null,e("slot",null),e("arcgis-hub-subscribe-button",null),e("calcite-modal",{"aria-labelledby":"modal-title",id:"example-modal"},e("div",{slot:"header",id:"modal-title"},"Create a Subscription"),e("div",{slot:"content"})),e("arcgis-hub-subscribe-configuration",null))}};l.style=d;export{l as arcgis_hub_subscribe};
//# sourceMappingURL=p-dee6294e.entry.js.map