import{r as i,h as e,H as t,g as s}from"./p-c9ba45b0.js";import{e as n}from"./p-1631d2a0.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const a={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"};const o=":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";const c=class{constructor(e){i(this,e);this.icon=undefined;this.iconFlipRtl=false;this.scale="m";this.status="idle"}handleIconEl(){this.requestedIcon=n(a,this.icon,this.status)}connectedCallback(){this.requestedIcon=n(a,this.icon,this.status)}render(){const i=this.el.hidden;return e(t,{key:"7d7329dbca2d5abb5a9b92dbee9767ba14488caa","calcite-hydrated-hidden":i},this.renderIcon(this.requestedIcon),e("slot",{key:"2fc037f47b40f25698cecdd52df9436da86ecfcf"}))}renderIcon(i){if(i){return e("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:i,scale:"s"})}}get el(){return s(this)}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}};c.style=o;export{c as calcite_input_message};
//# sourceMappingURL=p-a014e527.entry.js.map