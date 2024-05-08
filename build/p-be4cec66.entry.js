import{r as i,c as e,h as t,g as s}from"./p-c9ba45b0.js";import{s as a,h as o,t as l}from"./p-1631d2a0.js";import{c as n,d,u as c,I as h}from"./p-c09dab4d.js";import{s as r,a as p,c as f}from"./p-774fbe58.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-28de0941.js";const b=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";const u=class{constructor(t){i(this,t);this.calciteChipGroupSelect=e(this,"calciteChipGroupSelect",6);this.items=[];this.updateItems=i=>{var e,t,s;const o=(e=this.slotRefEl)===null||e===void 0?void 0:e.assignedElements({flatten:true}).filter((i=>i===null||i===void 0?void 0:i.matches("calcite-chip")));this.items=!i?o:a(i);if(((t=this.items)===null||t===void 0?void 0:t.length)<1){return}(s=this.items)===null||s===void 0?void 0:s.forEach((i=>{i.interactive=true;i.scale=this.scale;i.selectionMode=this.selectionMode;i.parentChipGroup=this.el}));this.setSelectedItems(false)};this.updateSelectedItems=()=>{var i;this.selectedItems=(i=this.items)===null||i===void 0?void 0:i.filter((i=>i.selected))};this.setSelectedItems=(i,e)=>{var t;if(e){(t=this.items)===null||t===void 0?void 0:t.forEach((i=>{const t=e===i;switch(this.selectionMode){case"multiple":if(t){i.selected=!i.selected}break;case"single":i.selected=t?!i.selected:false;break;case"single-persist":i.selected=!!t;break}}))}this.updateSelectedItems();if(i){this.calciteChipGroupSelect.emit()}};this.disabled=false;this.label=undefined;this.scale="m";this.selectionMode="none";this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}connectedCallback(){n(this)}componentDidRender(){d(this);c(this)}componentDidLoad(){r(this)}async componentWillLoad(){p(this)}calciteInternalChipKeyEventListener(i){var e;if(i.composedPath().includes(this.el)){const t=(e=this.items)===null||e===void 0?void 0:e.filter((i=>!i.disabled));switch(i.detail.key){case"ArrowRight":o(t,i.detail.target,"next");break;case"ArrowLeft":o(t,i.detail.target,"previous");break;case"Home":o(t,i.detail.target,"first");break;case"End":o(t,i.detail.target,"last");break}}i.stopPropagation()}calciteChipCloseListener(i){var e,t,s,a;const l=i.target;if((e=this.items)===null||e===void 0?void 0:e.includes(l)){if(((t=this.items)===null||t===void 0?void 0:t.indexOf(l))>0){o(this.items,l,"previous")}else if(((s=this.items)===null||s===void 0?void 0:s.indexOf(l))===0){o(this.items,l,"next")}else{o(this.items,l,"first")}}this.items=(a=this.items)===null||a===void 0?void 0:a.filter((i=>i!==l));i.stopPropagation()}calciteChipSelectListener(i){if(i.composedPath().includes(this.el)){this.setSelectedItems(true,i.target)}i.stopPropagation()}calciteInternalChipSelectListener(i){if(i.composedPath().includes(this.el)){this.setSelectedItems(false,i.target)}i.stopPropagation()}calciteInternalSyncSelectedChips(i){if(i.composedPath().includes(this.el)){this.updateSelectedItems();if(this.selectionMode==="single"&&this.selectedItems.length>1){this.setSelectedItems(false,i.target)}}i.stopPropagation()}async setFocus(){var i;await f(this);if(!this.disabled){return(i=this.selectedItems[0]||this.items[0])===null||i===void 0?void 0:i.setFocus()}}render(){const i=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup";const{disabled:e}=this;return t(h,{key:"341dd9e8f25d4d358ea6e33740d8b851a5fa0e9d",disabled:e},t("div",{key:"66c9eaa00b7ca0c602f94a017f5b6ef6afc3bd93","aria-disabled":l(e),"aria-label":this.label,class:"container",role:i},t("slot",{key:"9611ab9bbadf169969834f1e39a29b79ad7ca68b",onSlotchange:this.updateItems,ref:i=>this.slotRefEl=i})))}get el(){return s(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};u.style=b;export{u as calcite_chip_group};
//# sourceMappingURL=p-be4cec66.entry.js.map