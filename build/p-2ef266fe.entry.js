import{r as t,h as e,H as i,c as o,g as a}from"./p-c9ba45b0.js";import{c as n,d as s}from"./p-c1c4a458.js";import{g as l,b as r,f as c,x as d}from"./p-1631d2a0.js";import{d as h,a as m,c as b,u as p}from"./p-d2d689a4.js";import{a as u,s as f,c as g}from"./p-774fbe58.js";import{c as v}from"./p-3f298b29.js";import{o as x}from"./p-bd5903d4.js";import{c as k,d as y}from"./p-909ebb2d.js";import{s as z,c as w,d as C,u as j}from"./p-3c05e9bf.js";import{g as $,c as M}from"./p-8c547715.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-6ceba8f9.js";const O=":host{display:block}";const B=class{constructor(e){t(this,e)}render(){return e(i,null,e("slot",null),e("calcite-button",null,"Subscribe"))}};B.style=O;const F=":host{display:block}";const D=class{constructor(e){t(this,e)}render(){return e(i,null,e("slot",null),"Config",e("arcgis-configuration-form",{disabled:"false","is-open":"true","is-saving":"false",layout:"fixed",variant:""}))}};D.style=F;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const S={modal:"modal",title:"title",header:"header",footer:"footer",scrim:"scrim",back:"back",close:"close",secondary:"secondary",primary:"primary",container:"container",containerOpen:"container--open",content:"content",contentNoFooter:"content--no-footer",contentBottom:"content-bottom",contentTop:"content-top",slottedInShell:"slotted-in-shell",openingIdle:"modal--opening-idle",openingActive:"modal--opening-active",closingIdle:"modal--closing-idle",closingActive:"modal--closing-active"};const T={close:"x"};const _={content:"content",contentBottom:"content-bottom",contentTop:"content-top",header:"header",back:"back",secondary:"secondary",primary:"primary"};const L=":host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}";let A=0;let E="";const I=class{constructor(e){t(this,e);this.calciteModalBeforeClose=o(this,"calciteModalBeforeClose",6);this.calciteModalClose=o(this,"calciteModalClose",6);this.calciteModalBeforeOpen=o(this,"calciteModalBeforeOpen",6);this.calciteModalOpen=o(this,"calciteModalOpen",6);this.ignoreOpenChange=false;this.mutationObserver=v("mutation",(()=>this.handleMutationObserver()));this.cssVarObserver=v("mutation",(()=>{this.updateSizeCssVars()}));this.openTransitionProp="opacity";this.setTransitionEl=t=>{this.transitionEl=t};this.openEnd=()=>{this.setFocus();this.el.removeEventListener("calciteModalOpen",this.openEnd)};this.handleCloseClick=()=>{this.open=false};this.handleOutsideClose=()=>{if(this.outsideCloseDisabled){return}this.open=false};this.closeModal=async()=>{if(this.beforeClose){try{await this.beforeClose(this.el)}catch(t){requestAnimationFrame((()=>{this.ignoreOpenChange=true;this.open=true;this.ignoreOpenChange=false}));return}}A--;this.opened=false;this.removeOverflowHiddenClass()};this.handleMutationObserver=()=>{this.updateFooterVisibility();this.updateFocusTrapElements()};this.updateFooterVisibility=()=>{this.hasFooter=!!l(this.el,[_.back,_.primary,_.secondary])};this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width");this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")};this.contentTopSlotChangeHandler=t=>{this.hasContentTop=r(t)};this.contentBottomSlotChangeHandler=t=>{this.hasContentBottom=r(t)};this.open=false;this.opened=false;this.beforeClose=undefined;this.closeButtonDisabled=false;this.focusTrapDisabled=false;this.outsideCloseDisabled=false;this.docked=undefined;this.escapeDisabled=false;this.scale="m";this.widthScale="m";this.fullscreen=undefined;this.kind=undefined;this.messages=undefined;this.messageOverrides=undefined;this.slottedInShell=undefined;this.cssWidth=undefined;this.cssHeight=undefined;this.hasFooter=true;this.hasContentTop=false;this.hasContentBottom=false;this.effectiveLocale=undefined;this.defaultMessages=undefined}handleFocusTrapDisabled(t){if(!this.open){return}t?h(this):m(this)}onMessagesChange(){}async componentWillLoad(){await z(this);u(this);if(this.open){this.openModal()}}componentDidLoad(){f(this)}connectedCallback(){var t,e;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true});(e=this.cssVarObserver)===null||e===void 0?void 0:e.observe(this.el,{attributeFilter:["style"]});this.updateSizeCssVars();this.updateFooterVisibility();n(this);k(this);w(this);b(this)}disconnectedCallback(){var t,e;this.removeOverflowHiddenClass();(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();(e=this.cssVarObserver)===null||e===void 0?void 0:e.disconnect();s(this);h(this);y(this);C(this);this.slottedInShell=false}render(){return e(i,{key:"b7f4d97818454e50db3870714f97cc626b97dd33","aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},e("div",{key:"721d5a12fdfcc99dc9dba820b17cd7ffecd9d0b1",class:{[S.container]:true,[S.containerOpen]:this.opened,[S.slottedInShell]:this.slottedInShell}},e("calcite-scrim",{key:"842588afb9d19ec36a355277ba06b8cb1a454ba3",class:S.scrim,onClick:this.handleOutsideClose}),this.renderStyle(),e("div",{key:"b98514b2ef65856b94cca345285785fc0b056f45",class:{[S.modal]:true},ref:this.setTransitionEl},e("div",{key:"fdbe8abc670bd2889c05ccd6597f485bc0c0b135",class:S.header},this.renderCloseButton(),e("header",{key:"d956c14a762c22d13920e0e34b11fc8bc1b9305b",class:S.title},e("slot",{key:"d7dcd4a9a4e2029a8e5961519538aeaad6092942",name:S.header}))),this.renderContentTop(),e("div",{key:"5b3fd60ed69388e2b001bd188be169c86f5d40db",class:{[S.content]:true,[S.contentNoFooter]:!this.hasFooter},ref:t=>this.modalContent=t},e("slot",{key:"84a4dbeb3d1188c3f9c5b7877bf751f735262a87",name:_.content})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?e("div",{class:S.footer,key:"footer"},e("span",{class:S.back},e("slot",{name:_.back})),e("span",{class:S.secondary},e("slot",{name:_.secondary})),e("span",{class:S.primary},e("slot",{name:_.primary}))):null}renderContentTop(){return e("div",{class:S.contentTop,hidden:!this.hasContentTop},e("slot",{name:_.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return e("div",{class:S.contentBottom,hidden:!this.hasContentBottom},e("slot",{name:_.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return!this.closeButtonDisabled?e("button",{"aria-label":this.messages.close,class:S.close,key:"button",onClick:this.handleCloseClick,title:this.messages.close,ref:t=>this.closeButtonEl=t},e("calcite-icon",{icon:T.close,scale:$(this.scale)})):null}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight)){return e("style",null,`.${S.container} {\n              ${this.docked&&this.cssWidth?`align-items: center !important;`:""}\n            }\n            .${S.modal} {\n              block-size: ${this.cssHeight?this.cssHeight:"auto"} !important;\n              ${this.cssWidth?`inline-size: ${this.cssWidth} !important;`:""}\n              ${this.cssWidth?`max-inline-size: ${this.cssWidth} !important;`:""}\n              ${this.docked?`border-radius: var(--calcite-border-radius) !important;`:""}\n            }\n            @media screen and (max-width: ${this.cssWidth}) {\n              .${S.container} {\n                ${this.docked?`align-items: flex-end !important;`:""}\n              }\n              .${S.modal} {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ${!this.docked?`block-size: 100% !important;`:""}\n                ${!this.docked?`border-radius: 0 !important;`:""}\n                ${this.docked?`border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;`:""}\n              }\n            }\n          `)}}effectiveLocaleChange(){j(this,this.effectiveLocale)}handleEscape(t){if(this.open&&!this.escapeDisabled&&t.key==="Escape"&&!t.defaultPrevented){this.open=false;t.preventDefault()}}async setFocus(){await g(this);c(this.el)}async updateFocusTrapElements(){p(this)}async scrollContent(t=0,e=0){if(this.modalContent){if(this.modalContent.scrollTo){this.modalContent.scrollTo({top:t,left:e,behavior:"smooth"})}else{this.modalContent.scrollTop=t;this.modalContent.scrollLeft=e}}}onBeforeOpen(){this.transitionEl.classList.add(S.openingActive);this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove(S.openingIdle,S.openingActive);this.calciteModalOpen.emit();m(this)}onBeforeClose(){this.transitionEl.classList.add(S.closingActive);this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove(S.closingIdle,S.closingActive);this.calciteModalClose.emit();h(this)}toggleModal(t){if(this.ignoreOpenChange){return}if(t){this.openModal()}else{this.closeModal()}}handleOpenedChange(t){const e=t?S.openingIdle:S.closingIdle;this.transitionEl.classList.add(e);x(this)}async openModal(){await M(this.el);this.el.addEventListener("calciteModalOpen",this.openEnd);this.opened=true;const t=l(this.el,_.header);const e=l(this.el,_.content);this.titleId=d(t);this.contentId=d(e);if(!this.slottedInShell){if(A===0){E=document.documentElement.style.overflow}A++;document.documentElement.style.setProperty("overflow","hidden")}}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",E)}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}};I.style=L;export{B as arcgis_hub_subscribe_button,D as arcgis_hub_subscribe_configuration,I as calcite_modal};
//# sourceMappingURL=p-2ef266fe.entry.js.map