import{r as t,c as e,h as o,H as r,g as i}from"./p-c9ba45b0.js";import{c as s}from"./p-3f298b29.js";import{C as a}from"./p-1375190d.js";const n=":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}";const d=class{constructor(o){t(this,o);this.calciteInternalDropdownItemChange=e(this,"calciteInternalDropdownItemChange",6);this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((t=>t.selectionMode=this.selectionMode))};this.mutationObserver=s("mutation",(()=>this.updateItems()));this.groupTitle=undefined;this.scale="m";this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){var t;this.updateItems();(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()}render(){const t=this.groupTitle?o("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null;const e=this.groupPosition>0?o("div",{class:"dropdown-separator",role:"separator"}):null;return o(r,{key:"c1b662afcbb612d775cea66edb949d71f5f63167","aria-label":this.groupTitle,role:"group"},o("div",{key:"cdfdb0919b1b6006f69f7fbcda0c16c2beefec5e",class:{[a.container]:true,[`${a.container}--${this.scale}`]:true}},e,t,o("slot",{key:"166c8236f3315d2f038f61b0619270d2bd9b344a"})))}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup;this.requestedDropdownItem=t.detail.requestedDropdownItem;this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return true}get el(){return i(this)}static get watchers(){return{selectionMode:["handlePropsChange"]}}};d.style=n;export{d as calcite_dropdown_group};
//# sourceMappingURL=p-af9cea44.entry.js.map