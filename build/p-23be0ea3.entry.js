import{r as e,h as s,H as t,g as a}from"./p-c9ba45b0.js";import{g as i}from"./p-ab6a0f88.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const c={container:"container",selected:"selected"};const n=":host{display:flex}.container{display:none;inline-size:var(--calcite-container-size-content-fluid)}:host([selected]) .container{display:block}:host([hidden]){display:none}[hidden]{display:none}";const d=class{constructor(s){e(this,s);this.guid=`calcite-carousel-item-${i()}`;this.label=undefined;this.selected=false}render(){const e=this.el.id||this.guid;return s(t,{key:"6d4ac387ae1b4748050c82d8387edd30e6c0e662",id:e},s("div",{key:"c6a4c67d99dd6e34198b2d128efb518e757277ce","aria-label":this.label,class:{[c.container]:true,[c.selected]:this.selected},role:"tabpanel"},s("slot",{key:"2ed94883d41dba5430a39933c6fe91bb25b12703"})))}get el(){return a(this)}};d.style=n;export{d as calcite_carousel_item};
//# sourceMappingURL=p-23be0ea3.entry.js.map