import{h as t}from"./p-c9ba45b0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const o={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};const r={width:12,height:6,strokeWidth:1};const e=({floatingLayout:e,key:i,ref:a})=>{const{width:s,height:n,strokeWidth:c}=r;const h=s/2;const d=e==="vertical";const l="M0,0"+` H${s}`+` L${s-h},${n}`+` Q${h},${n} ${h},${n}`+" Z";return t("svg",{"aria-hidden":"true",class:o.arrow,height:s,key:i,viewBox:`0 0 ${s} ${s+(!d?c:0)}`,width:s+(d?c:0),ref:a},c>0&&t("path",{class:o.arrowStroke,d:l,fill:"none","stroke-width":c+1}),t("path",{d:l,stroke:"none"}))};export{e as F};
//# sourceMappingURL=p-aed61052.js.map