/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */
const t="calcite-list";const c="calcite-list-item-group";const n="calcite-list-item";function e(c){return Array.from(c.assignedElements({flatten:true}).filter((c=>c.matches(t))))}function s(e){const s=e.assignedElements({flatten:true});const a=s.filter((t=>t?.matches(c))).map((t=>Array.from(t.querySelectorAll(n)))).reduce(((t,c)=>[...t,...c]),[]);const i=s.filter((t=>t?.matches(n)));const l=s.filter((c=>c?.matches(t))).map((t=>Array.from(t.querySelectorAll(n)))).reduce(((t,c)=>[...t,...c]),[]);return[...l,...a,...i]}function a(t){t.forEach((c=>{c.setPosition=t.indexOf(c)+1;c.setSize=t.length}))}function i(t,c=false){const n=c?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";const e=document.evaluate(n,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return e.snapshotLength}export{i as a,e as b,s as g,a as u};
//# sourceMappingURL=p-e3835546.js.map