import{r as t,c as i,f as e,h as n,H as o,g as s}from"./p-c9ba45b0.js";import{g as r,j as a,e as l,a as c}from"./p-1631d2a0.js";import{s as d,c as u,i as h,d as b,H as f}from"./p-f5be0a5d.js";import{c as p,d as m,u as v,I as g}from"./p-c09dab4d.js";import{n as x}from"./p-6ceba8f9.js";import{c as k,d as y,g as w}from"./p-021f7a5e.js";import{s as z,a as j,c as I}from"./p-774fbe58.js";import{n as C,i as E,p as W,s as D,e as L,c as A,d as N,B as M}from"./p-909ebb2d.js";import{c as B}from"./p-3f298b29.js";import{C as G}from"./p-25d4ba13.js";import{u as $,c as F,d as P,s as V}from"./p-3c05e9bf.js";import{g as O}from"./p-8c547715.js";import{V as S}from"./p-a18fcebe.js";import{s as U}from"./p-63447441.js";import"./p-ab6a0f88.js";import"./p-28de0941.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const H={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"};const K={action:"action"};const R=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const T=class{constructor(e){t(this,e);this.calciteInternalInputNumberFocus=i(this,"calciteInternalInputNumberFocus",6);this.calciteInternalInputNumberBlur=i(this,"calciteInternalInputNumberBlur",6);this.calciteInputNumberInput=i(this,"calciteInputNumberInput",7);this.calciteInputNumberChange=i(this,"calciteInputNumberChange",6);this.previousValueOrigin="initial";this.mutationObserver=B("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=t=>{if(this.readOnly||this.disabled||t.defaultPrevented){return}if(this.isClearable&&t.key==="Escape"){this.clearInputValue(t);t.preventDefault()}if(t.key==="Enter"){if(d(this)){t.preventDefault()}}};this.clearInputValue=t=>{this.setNumberValue({committing:true,nativeEvent:t,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedNumberValue){this.calciteInputNumberChange.emit();this.setPreviousEmittedNumberValue(this.value)}};this.inputNumberBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId);this.calciteInternalInputNumberBlur.emit();this.emitChangeIfUserModified()};this.clickHandler=t=>{if(this.disabled){return}const i=r(this.el,"action");if(t.target!==i){this.setFocus()}};this.inputNumberFocusHandler=()=>{this.calciteInternalInputNumberFocus.emit()};this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly){return}if(this.value==="Infinity"||this.value==="-Infinity"){return}const i=t.target.value;C.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const e=C.delocalize(i);if(t.inputType==="insertFromPaste"){if(!E(e)||this.integer&&(e.includes("e")||e.includes("."))){t.preventDefault()}this.setNumberValue({nativeEvent:t,origin:"user",value:W(e)});this.childNumberEl.value=this.displayedValue}else{this.setNumberValue({nativeEvent:t,origin:"user",value:e})}};this.inputNumberKeyDownHandler=t=>{if(this.disabled||this.readOnly){return}if(this.value==="Infinity"||this.value==="-Infinity"){t.preventDefault();if(t.key==="Backspace"||t.key==="Delete"){this.clearInputValue(t)}return}if(t.key==="ArrowUp"){t.preventDefault();this.nudgeNumberValue("up",t);return}if(t.key==="ArrowDown"){this.nudgeNumberValue("down",t);return}const i=[...x,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(t.altKey||t.ctrlKey||t.metaKey){return}const e=t.shiftKey&&t.key==="Tab";if(i.includes(t.key)||e){if(t.key==="Enter"){this.emitChangeIfUserModified()}return}C.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};if(t.key===C.decimal&&!this.integer){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.indexOf(C.decimal)===-1){return}}if(/[eE]/.test(t.key)&&!this.integer){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&!/[eE]/.test(this.childNumberEl.value)){return}}if(t.key==="-"){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.split("-").length<=2){return}}t.preventDefault()};this.nudgeNumberValue=(t,i)=>{if(i instanceof KeyboardEvent&&i.repeat){return}const e=this.maxString?parseFloat(this.maxString):null;const n=this.minString?parseFloat(this.minString):null;const o=150;this.incrementOrDecrementNumberValue(t,e,n,i);if(this.nudgeNumberValueIntervalId){window.clearInterval(this.nudgeNumberValueIntervalId)}let s=true;this.nudgeNumberValueIntervalId=window.setInterval((()=>{if(s){s=false;return}this.incrementOrDecrementNumberValue(t,e,n,i)}),o)};this.nudgeButtonPointerUpHandler=t=>{if(!a(t)){return}window.clearInterval(this.nudgeNumberValueIntervalId)};this.nudgeButtonPointerOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.nudgeButtonPointerDownHandler=t=>{if(!a(t)){return}t.preventDefault();const i=t.target.dataset.adjustment;if(!this.disabled){this.nudgeNumberValue(i,t)}};this.onHiddenFormInputInput=t=>{if(t.target.name===this.name){this.setNumberValue({value:t.target.value,origin:"direct"})}this.setFocus();t.stopPropagation()};this.setChildNumberElRef=t=>{this.childNumberEl=t};this.setInputNumberValue=t=>{if(!this.childNumberEl){return}this.childNumberEl.value=t};this.setPreviousEmittedNumberValue=t=>{this.previousEmittedNumberValue=this.normalizeValue(t)};this.setPreviousNumberValue=t=>{this.previousValue=this.normalizeValue(t)};this.setNumberValue=({committing:t=false,nativeEvent:i,origin:e,previousValue:n,value:o})=>{var s,r;C.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=((s=this.previousValue)===null||s===void 0?void 0:s.length)>o.length||((r=this.value)===null||r===void 0?void 0:r.length)>o.length;const l=this.integer?o.replace(/[e.]/g,""):o;const c=l.charAt(l.length-1)===".";const d=c&&a?l:D(l);const u=o&&!d?E(this.previousValue)?this.previousValue:"":d;let h=C.localize(u);if(e!=="connected"&&!c){h=L(h,u,C)}this.displayedValue=c&&a?`${h}${C.decimal}`:h;this.setPreviousNumberValue(n!==null&&n!==void 0?n:this.value);this.previousValueOrigin=e;this.userChangedValue=e==="user"&&this.value!==u;this.value=["-","."].includes(u)?"":u;if(e==="direct"){this.setInputNumberValue(h);this.setPreviousEmittedNumberValue(h)}if(i){const i=this.calciteInputNumberInput.emit();if(i.defaultPrevented){this.value=this.previousValue;this.displayedValue=C.localize(this.previousValue)}else if(t){this.emitChangeIfUserModified()}}};this.inputNumberKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.alignment="start";this.clearable=false;this.disabled=false;this.form=undefined;this.groupSeparator=false;this.icon=undefined;this.iconFlipRtl=false;this.integer=false;this.label=undefined;this.loading=false;this.numberingSystem=undefined;this.localeFormat=false;this.max=undefined;this.min=undefined;this.maxLength=undefined;this.minLength=undefined;this.validationMessage=undefined;this.validationIcon=undefined;this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.name=undefined;this.numberButtonType="vertical";this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.step=undefined;this.autocomplete=undefined;this.suffixText=undefined;this.editingEnabled=false;this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.displayedValue=undefined;this.slottedActionElDisabledInternally=false}handleGlobalAttributesChanged(){e(this)}disabledWatcher(){this.setDisabledAction()}maxWatcher(){var t;this.maxString=((t=this.max)===null||t===void 0?void 0:t.toString())||null}minWatcher(){var t;this.minString=((t=this.min)===null||t===void 0?void 0:t.toString())||null}onMessagesChange(){}valueWatcher(t,i){if(!this.userChangedValue){if(t==="Infinity"||t==="-Infinity"){this.displayedValue=t;this.previousEmittedNumberValue=t;return}this.setNumberValue({origin:"direct",previousValue:i,value:t==null||t==""?"":E(t)?t:this.previousValue||""});this.warnAboutInvalidNumberValue(t)}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=l({},this.icon,"number")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleWatcher(t){$(this,this.effectiveLocale);C.numberFormatOptions={locale:t,numberingSystem:this.numberingSystem,useGrouping:false}}connectedCallback(){var t;p(this);A(this);F(this);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}k(this);u(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener(h,this.onHiddenFormInputInput)}componentDidLoad(){z(this)}disconnectedCallback(){var t;m(this);y(this);b(this);N(this);P(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();this.el.removeEventListener(h,this.onHiddenFormInputInput)}async componentWillLoad(){var t,i;j(this);this.maxString=(t=this.max)===null||t===void 0?void 0:t.toString();this.minString=(i=this.min)===null||i===void 0?void 0:i.toString();this.requestedIcon=l({},this.icon,"number");await V(this);this.setPreviousEmittedNumberValue(this.value);this.setPreviousNumberValue(this.value);this.warnAboutInvalidNumberValue(this.value);if(this.value==="Infinity"||this.value==="-Infinity"){this.displayedValue=this.value;this.previousEmittedNumberValue=this.value}else{this.setNumberValue({origin:"connected",value:E(this.value)?this.value:""})}}componentShouldUpdate(t,i,e){if(e==="value"&&t&&!E(t)){this.setNumberValue({origin:"reset",value:i});return false}return true}componentDidRender(){v(this)}async setFocus(){var t;await I(this);(t=this.childNumberEl)===null||t===void 0?void 0:t.focus()}async selectText(){var t;(t=this.childNumberEl)===null||t===void 0?void 0:t.select()}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,i,e,n){const{value:o}=this;if(o==="Infinity"||o==="-Infinity"){return}const s=t==="up"?1:-1;const r=this.integer&&this.step!=="any"?Math.round(this.step):this.step;const a=r==="any"?1:Math.abs(r||1);const l=new M(o!==""?o:"0");const c=l.add(`${a*s}`);const d=()=>typeof e==="number"&&!isNaN(e)&&c.subtract(`${e}`).isNegative;const u=()=>typeof i==="number"&&!isNaN(i)&&!c.subtract(`${i}`).isNegative;const h=d()?`${e}`:u()?`${i}`:c.toString();this.setNumberValue({committing:true,nativeEvent:n,origin:"user",value:h})}syncHiddenFormInput(t){U("number",this,t)}setDisabledAction(){const t=r(this.el,"action");if(!t){return}if(this.disabled){if(t.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}t.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){t.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}normalizeValue(t){return E(t)?t:""}warnAboutInvalidNumberValue(t){if(t&&!E(t)){console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}}render(){const t=c(this.el);const i=n("div",{key:"29155555f7614867e208e88540cf39ff8e353e14",class:H.loader},n("calcite-progress",{key:"5cfafff27fcafca743911466b6340b02846777a5",label:this.messages.loading,type:"indeterminate"}));const e=n("button",{key:"a5b5297e957c8e6fd5a6f339156955a54e03ffe3","aria-label":this.messages.clear,class:H.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},n("calcite-icon",{key:"84a369ee19228da6507421c20c9c87536f8a124f",icon:"x",scale:O(this.scale)}));const s=n("calcite-icon",{key:"03585a6bbb458b87eed80e1e1f3ff0fbcc13f2ff",class:H.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:O(this.scale)});const r=this.numberButtonType==="horizontal";const a=n("button",{key:"df1a243d54978cd71233af46f77eef9edc36ab41","aria-hidden":"true",class:{[H.numberButtonItem]:true,[H.buttonItemHorizontal]:r},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"49f63b1ff62e0f8417dd2492f5e378877114f4dd",icon:"chevron-up",scale:O(this.scale)}));const l=n("button",{key:"55d37fbfe2a02acc5cf234781d736db9eaf6f9af","aria-hidden":"true",class:{[H.numberButtonItem]:true,[H.buttonItemHorizontal]:r},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerOutHandler,onPointerUp:this.nudgeButtonPointerUpHandler,tabIndex:-1,type:"button"},n("calcite-icon",{key:"bd24b05837fe72fdd84fa1f7ae84d2d282788d9a",icon:"chevron-down",scale:O(this.scale)}));const d=n("div",{key:"4f8f08ca711772a0f2bdbd947895e44159d9cc55",class:H.numberButtonWrapper},a,l);const u=n("div",{key:"d723c49e20f8f07c6adf611e1054127d749b563f",class:H.prefix},this.prefixText);const h=n("div",{key:"bee92e77d72ab80a415b9a61af69da196f551e49",class:H.suffix},this.suffixText);const b=n("input",{"aria-label":w(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?true:null,defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:undefined,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,type:"text",value:this.displayedValue,ref:this.setChildNumberElRef});return n(o,{key:"c532bec85b5ea1f2268d4755c6aa526cc3a65002",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n(g,{key:"03144ad4966c3a8c9a838afc02493c5d650a302e",disabled:this.disabled},n("div",{key:"4b47d599e4c8f0347a8583c43b42b5fcd76700fe",class:{[H.inputWrapper]:true,[G.rtl]:t==="rtl"}},this.numberButtonType==="horizontal"&&!this.readOnly?l:null,this.prefixText?u:null,n("div",{key:"ccaf9fddc5db60394a71d1c49b58c09c79e17478",class:H.wrapper},b,this.isClearable?e:null,this.requestedIcon?s:null,this.loading?i:null),n("div",{key:"3c39f821e4d851798d5e2e2fd5866b8c265da8d8",class:H.actionWrapper},n("slot",{key:"47ea7bc09f88d6a6b74a7297e35dbc9877789c13",name:K.action})),this.numberButtonType==="vertical"&&!this.readOnly?d:null,this.suffixText?h:null,this.numberButtonType==="horizontal"&&!this.readOnly?a:null,n(f,{key:"2e8a0268c7e3dfcf07d898ca5020fd1b310a60da",component:this})),this.validationMessage&&this.status==="invalid"?n(S,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleWatcher"]}}};T.style=R;export{T as calcite_input_number};
//# sourceMappingURL=p-57e8be9c.entry.js.map