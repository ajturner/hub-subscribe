import{n}from"./p-1631d2a0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const t="CALCITE-COMBOBOX-ITEM";const i="CALCITE-COMBOBOX-ITEM-GROUP";const o=`${t}, ${i}`;const c={input:"input",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon"};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */function s(n){const t=n.parentElement?.closest(o);const i=t?.parentElement?.closest(o);return[t,i].filter((n=>n))}function e(n){return n.ancestors?.filter((n=>n.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function a(t){return n(t.querySelectorAll("calcite-combobox-item"))}function l(t){const i=n(t.querySelectorAll("calcite-combobox-item"));return i.filter((n=>n.selected)).length>0}function r(n){const t=document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",n,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return t.snapshotLength}function u(n){return n.includes("single")}export{c as C,r as a,o as b,e as c,a as d,t as e,i as f,s as g,l as h,u as i};
//# sourceMappingURL=p-e955550e.js.map