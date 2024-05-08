import{r as t,c as e,h as i,H as s,g as a}from"./p-c9ba45b0.js";import{a as o}from"./p-1631d2a0.js";import{a as n,c as r,d as l,H as c}from"./p-f5be0a5d.js";import{c as d,d as h,u as f,I as p}from"./p-c09dab4d.js";import{c as m,d as u}from"./p-021f7a5e.js";import{a as b,s as g,c as w}from"./p-774fbe58.js";import{c as v}from"./p-3f298b29.js";import{V as y}from"./p-a18fcebe.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-28de0941.js";import"./p-8c547715.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const k={itemWrapper:"item-wrapper"};const x=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.item-wrapper{display:flex;background-color:var(--calcite-color-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-color-border-input);outline-offset:-1px}:host([appearance=outline])>.item-wrapper{background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([layout=vertical])>.item-wrapper{flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full])>.item-wrapper{inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full])>.item-wrapper ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical])>.item-wrapper ::slotted(calcite-segmented-control-item){justify-content:flex-start}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const j=class{constructor(i){t(this,i);this.calciteSegmentedControlChange=e(this,"calciteSegmentedControlChange",6);this.handleClick=t=>{if(this.disabled){return}if(t.target.localName==="calcite-segmented-control-item"){this.selectItem(t.target,true)}};this.mutationObserver=v("mutation",(()=>this.setUpItems()));this.appearance="solid";this.disabled=false;this.form=undefined;this.required=false;this.name=undefined;this.layout="horizontal";this.scale="m";this.value=null;this.selectedItem=undefined;this.status="idle";this.validationMessage=undefined;this.validationIcon=undefined;this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.width="auto"}handlePropsChange(){this.handleItemPropChange()}valueHandler(t){const e=this.getItems();e.forEach((e=>e.checked=e.value===t))}handleSelectedItemChange(t,e){this.value=t===null||t===void 0?void 0:t.value;if(t===e){return}const i=this.getItems();const s=i.filter((e=>e===t)).pop();if(s){this.selectItem(s)}else if(i[0]){i[0].tabIndex=0}}componentWillLoad(){b(this);this.setUpItems()}componentDidLoad(){n(this,this.value);g(this)}connectedCallback(){var t;d(this);m(this);r(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.handleItemPropChange()}disconnectedCallback(){var t;h(this);u(this);l(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.unobserve(this.el)}componentDidRender(){f(this)}render(){return i(s,{key:"1241947631795e70e18ad5f923ecaab81d75eae9",onClick:this.handleClick,role:"radiogroup"},i("div",{key:"1e1172df2df7a6ecd307f2e927e4bc766b8a1418",class:k.itemWrapper},i(p,{key:"874fc408bafb73b99748769ec5d361848b1b1fff",disabled:this.disabled},i("slot",{key:"629d9b015a690804e8548e4b50dde9ad4c3fa9b7"}),i(c,{key:"3fedcebb6e1fe5a8d5ef426d301f510e7c1fc4f3",component:this}))),this.validationMessage&&this.status==="invalid"?i(y,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null)}handleSelected(t){t.preventDefault();this.selectItem(t.target);t.stopPropagation()}handleKeyDown(t){const e=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "];const{key:i}=t;const{el:s,selectedItem:a}=this;if(e.indexOf(i)===-1){return}let n=i;if(o(s)==="rtl"){if(i==="ArrowRight"){n="ArrowLeft"}if(i==="ArrowLeft"){n="ArrowRight"}}const r=this.getItems();let l=-1;r.forEach(((t,e)=>{if(t===a){l=e}}));switch(n){case"ArrowLeft":case"ArrowUp":t.preventDefault();const e=l<1?r[r.length-1]:r[l-1];this.selectItem(e,true);return;case"ArrowRight":case"ArrowDown":t.preventDefault();const i=l===-1?r[1]:r[l+1]||r[0];this.selectItem(i,true);return;case" ":t.preventDefault();this.selectItem(t.target,true);return;default:return}}async setFocus(){var t;await w(this);(t=this.selectedItem||this.getItems()[0])===null||t===void 0?void 0:t.focus()}handleItemPropChange(){const t=this.getItems();t.forEach((t=>{t.appearance=this.appearance;t.layout=this.layout;t.scale=this.scale}))}onLabelClick(){this.setFocus()}getItems(){return Array.from(this.el.querySelectorAll("calcite-segmented-control-item"))}selectItem(t,e=false){if(t===this.selectedItem){return}const i=this.getItems();let s=null;i.forEach((i=>{const a=i===t;if(a&&!i.checked||!a&&i.checked){i.checked=a}i.tabIndex=a?0:-1;if(a){s=i;if(e){this.calciteSegmentedControlChange.emit()}}}));this.selectedItem=s;if(s){s.focus()}}setUpItems(){const t=this.getItems();const e=t.filter((t=>t.checked)).pop();if(e){this.selectItem(e)}else if(t[0]){t[0].tabIndex=0}}get el(){return a(this)}static get watchers(){return{appearance:["handlePropsChange"],layout:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],selectedItem:["handleSelectedItemChange"]}}};j.style=x;export{j as calcite_segmented_control};
//# sourceMappingURL=p-9b3569d4.entry.js.map