import{r as t,c as i,f as e,h as s,H as n,g as o}from"./p-c9ba45b0.js";import{g as a,e as l,a as r}from"./p-1631d2a0.js";import{s as c,c as d,i as h,d as u,H as p}from"./p-f5be0a5d.js";import{c as f,d as b,u as m,I as v}from"./p-c09dab4d.js";import{c as g,d as x,g as k}from"./p-021f7a5e.js";import{a as y,s as w,c as z}from"./p-774fbe58.js";import{c as j,d as C}from"./p-909ebb2d.js";import{c as I}from"./p-3f298b29.js";import{C as L}from"./p-25d4ba13.js";import{u as E,c as W,d as M,s as D}from"./p-3c05e9bf.js";import{g as A}from"./p-8c547715.js";import{V as T}from"./p-a18fcebe.js";import{s as F}from"./p-63447441.js";import"./p-ab6a0f88.js";import"./p-28de0941.js";import"./p-6ceba8f9.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const G={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper"};const H={action:"action"};const R=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const V=class{constructor(e){t(this,e);this.calciteInternalInputTextFocus=i(this,"calciteInternalInputTextFocus",7);this.calciteInternalInputTextBlur=i(this,"calciteInternalInputTextBlur",7);this.calciteInputTextInput=i(this,"calciteInputTextInput",7);this.calciteInputTextChange=i(this,"calciteInputTextChange",7);this.previousValueOrigin="initial";this.mutationObserver=I("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=t=>{if(this.readOnly||this.disabled||t.defaultPrevented){return}if(this.isClearable&&t.key==="Escape"){this.clearInputTextValue(t);t.preventDefault()}if(t.key==="Enter"){if(c(this)){t.preventDefault()}}};this.clearInputTextValue=t=>{this.setValue({committing:true,nativeEvent:t,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue){this.calciteInputTextChange.emit();this.setPreviousEmittedValue(this.value)}};this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value});this.emitChangeIfUserModified()};this.clickHandler=t=>{if(this.disabled){return}const i=a(this.el,"action");if(t.target!==i){this.setFocus()}};this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})};this.inputTextInputHandler=t=>{if(this.disabled||this.readOnly){return}this.setValue({nativeEvent:t,origin:"user",value:t.target.value})};this.inputTextKeyDownHandler=t=>{if(this.disabled||this.readOnly){return}if(t.key==="Enter"){this.emitChangeIfUserModified()}};this.onHiddenFormInputInput=t=>{if(t.target.name===this.name){this.setValue({value:t.target.value,origin:"direct"})}this.setFocus();t.stopPropagation()};this.setChildElRef=t=>{this.childEl=t};this.setInputValue=t=>{if(!this.childEl){return}this.childEl.value=t};this.setPreviousEmittedValue=t=>{this.previousEmittedValue=t};this.setPreviousValue=t=>{this.previousValue=t};this.setValue=({committing:t=false,nativeEvent:i,origin:e,previousValue:s,value:n})=>{this.setPreviousValue(s!==null&&s!==void 0?s:this.value);this.previousValueOrigin=e;this.userChangedValue=e==="user"&&n!==this.value;this.value=n;if(e==="direct"){this.setInputValue(n);this.setPreviousEmittedValue(n)}if(i){const i=this.calciteInputTextInput.emit();if(i.defaultPrevented){this.value=this.previousValue}else if(t){this.emitChangeIfUserModified()}}};this.alignment="start";this.clearable=false;this.disabled=false;this.form=undefined;this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.loading=false;this.maxLength=undefined;this.minLength=undefined;this.validationMessage=undefined;this.validationIcon=undefined;this.validity={valid:false,badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valueMissing:false};this.name=undefined;this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.autocomplete=undefined;this.pattern=undefined;this.suffixText=undefined;this.editingEnabled=false;this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined;this.slottedActionElDisabledInternally=false}handleGlobalAttributesChanged(){e(this)}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(t,i){if(!this.userChangedValue){this.setValue({origin:"direct",previousValue:i,value:!t?"":t})}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=l({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){E(this,this.effectiveLocale)}connectedCallback(){var t;f(this);j(this);W(this);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}g(this);d(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener(h,this.onHiddenFormInputInput)}disconnectedCallback(){var t;b(this);x(this);u(this);C(this);M(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();this.el.removeEventListener(h,this.onHiddenFormInputInput)}async componentWillLoad(){y(this);this.requestedIcon=l({},this.icon,"text");await D(this);this.setPreviousEmittedValue(this.value);this.setPreviousValue(this.value)}componentDidLoad(){w(this)}componentDidRender(){m(this)}async setFocus(){var t;await z(this);(t=this.childEl)===null||t===void 0?void 0:t.focus()}async selectText(){var t;(t=this.childEl)===null||t===void 0?void 0:t.select()}onLabelClick(){this.setFocus()}syncHiddenFormInput(t){F("text",this,t)}setDisabledAction(){const t=a(this.el,"action");if(!t){return}if(this.disabled){if(t.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}t.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){t.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}render(){const t=r(this.el);const i=s("div",{key:"9162181c241e45fdecb94bf029f53d4b7e61051c",class:G.loader},s("calcite-progress",{key:"3b8a44d0a0270f8dd49b29c7652590af93330c9d",label:this.messages.loading,type:"indeterminate"}));const e=s("button",{key:"e4a4bf84cf19dae37bd76f658fd77bc4e49b0a13","aria-label":this.messages.clear,class:G.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},s("calcite-icon",{key:"7e6c9ee74b52f344ebd518ca451f4b505fd6c34b",icon:"x",scale:A(this.scale)}));const o=s("calcite-icon",{key:"e62b5c18c01c4f1ce357c0006a1a16a946a82bcc",class:G.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:A(this.scale)});const a=s("div",{key:"cb3b6d712099127cc494c08d7420f8f08df22917",class:G.prefix},this.prefixText);const l=s("div",{key:"925b0b74702d3f3b36f38f811111fd1ebf021bf1",class:G.suffix},this.suffixText);const c=s("input",{key:"1716549929284b7f13f8bf09f60dc7eb6b7b5442","aria-label":k(this),autocomplete:this.autocomplete,autofocus:this.el.autofocus?true:null,class:{[G.editingEnabled]:this.editingEnabled,[G.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:this.required?true:null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value,ref:this.setChildElRef});return s(n,{key:"04c12015fbbea4d05ad70054386b9e65ed43386e",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},s(v,{key:"7c50e75118ab67363dbb3d164377292a11f0bce9",disabled:this.disabled},s("div",{key:"543d33986709ed0675e589a22b0c40cccbf47b65",class:{[G.inputWrapper]:true,[L.rtl]:t==="rtl"}},this.prefixText?a:null,s("div",{key:"8f760912f5372c5521d0551a6567e22d3a4f054c",class:G.wrapper},c,this.isClearable?e:null,this.requestedIcon?o:null,this.loading?i:null),s("div",{key:"c3fbdaebec28a38bdb952dee430614ecbec08053",class:G.actionWrapper},s("slot",{key:"10fe0347c1d1398612e52792af8e5cd4e0748a41",name:H.action})),this.suffixText?l:null,s(p,{key:"1c7b1064ffbe51e9c85a7a47bff9779f1f54064b",component:this})),this.validationMessage&&this.status==="invalid"?s(T,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{autofocus:["handleGlobalAttributesChanged"],enterkeyhint:["handleGlobalAttributesChanged"],inputmode:["handleGlobalAttributesChanged"],disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};V.style=R;export{V as calcite_input_text};
//# sourceMappingURL=p-ce43006d.entry.js.map