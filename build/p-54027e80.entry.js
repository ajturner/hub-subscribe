import{r as t,c as e,h as n,f as o,g as i}from"./p-c9ba45b0.js";import{c as a,d as l}from"./p-c1c4a458.js";import{a as s,j as r,s as c,b as h}from"./p-1631d2a0.js";import{c as d,d as p}from"./p-909ebb2d.js";import{c as u}from"./p-75a93a36.js";import{c as x,s as b,d as f,u as v}from"./p-3c05e9bf.js";import{C as m}from"./p-25d4ba13.js";import"./p-3f298b29.js";import"./p-ab6a0f88.js";import"./p-6ceba8f9.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const w={container:"container",content:"content",contentHeader:"content__header",contentBody:"content__body",contentFloat:"content--float",contentOverlay:"content--overlay",separator:"separator"};const g={actionBar:"action-bar",header:"header"};const y=":host{pointer-events:none;position:relative;display:flex;flex:0 1 auto;align-items:stretch;z-index:var(--calcite-shell-panel-z-index, var(--calcite-z-index));--calcite-shell-panel-detached-max-height:unset;--calcite-shell-panel-max-height:unset;--calcite-shell-panel-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl.content--overlay{--calcite-shell-panel-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04)}:host([layout=vertical]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-z-index) + 1))}:host([layout=vertical][display-mode=overlay]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-z-index-header) + 1))}:host([layout=vertical][width-scale=s]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 12vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 300px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 150px)}:host([layout=vertical][width-scale=m]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 20vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 420px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 240px)}:host([layout=vertical][width-scale=l]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 45vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 680px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 340px)}:host([layout=horizontal][height-scale=s]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 20vh)\n  )}:host([layout=horizontal]) .content{--calcite-shell-panel-min-height-internal:var(--calcite-shell-panel-min-height, 5vh);--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 30vh)\n  )}:host([layout=horizontal][height-scale=l]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 40vh)\n  )}.container{pointer-events:none;box-sizing:border-box;display:flex;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}.container *{box-sizing:border-box}:host([layout=horizontal]) .container{flex-direction:column}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-color-border-3)}.separator{pointer-events:auto;position:absolute;display:flex;background-color:transparent;opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-color-border-2)}.separator:focus{background-color:var(--calcite-color-brand);opacity:1}:host([layout=vertical]) .separator{inset-block:0px;block-size:100%;inline-size:0.125rem;cursor:col-resize}:host([layout=horizontal][position=start]) .separator{inset-block-end:0px}:host([layout=horizontal][position=end]) .separator{inset-block-start:0px}:host([layout=horizontal]) .separator{inset-inline-end:0px;block-size:0.125rem;inline-size:100%;cursor:row-resize}:host([layout=vertical][position=start]) .separator{inset-inline-end:-2px}:host([layout=horizontal][position=start]) .separator{inset-block-end:-2px}:host([layout=vertical][position=end]) .separator{inset-inline-start:-2px}:host([layout=horizontal][position=end]) .separator{inset-block-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}:host([layout=vertical]) .content{inline-size:var(--calcite-shell-panel-width-internal);max-inline-size:var(--calcite-shell-panel-max-width-internal);min-inline-size:var(--calcite-shell-panel-min-width-internal)}:host([layout=horizontal]) .content{block-size:var(--calcite-shell-panel-height-internal);max-block-size:var(--calcite-shell-panel-max-height-internal);min-block-size:var(--calcite-shell-panel-min-height-internal)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--overlay{position:absolute;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([layout=vertical]) .content--overlay{inset-block-start:0px;block-size:100%}:host([layout=horizontal]) .content--overlay{inset-inline-start:0px;inline-size:100%}:host([layout=vertical][position=start]) .content--overlay{inset-inline-start:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-start-internal)}:host([layout=vertical][position=end]) .content--overlay{inset-inline-end:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-end-internal)}:host([layout=horizontal][position=start]) .content--overlay{inset-block-start:100%;box-shadow:var(--calcite-shell-panel-shadow-block-start-internal)}:host([layout=horizontal][position=end]) .content--overlay{inset-block-end:100%;box-shadow:var(--calcite-shell-panel-shadow-block-end-internal)}.content--float{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-shell-panel-max-height-internal, calc(100% - 1rem))}.content--float ::slotted(calcite-panel),.content--float ::slotted(calcite-flow){max-block-size:unset}:host([layout=horizontal]) .content--float{margin-block:0.5rem}:host([position=start]) .content--float ::slotted(calcite-panel),:host([position=start]) .content--float ::slotted(calcite-flow),:host([position=end]) .content--float ::slotted(calcite-panel),:host([position=end]) .content--float ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name=action-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}:host([position=start]:not([slot=panel-end])) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]:not([slot=panel-end])) .content ::slotted(calcite-flow),:host([position=start]:not([slot=panel-end])) .content ::slotted(calcite-panel),:host([position=end][slot=panel-start]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end][slot=panel-start]) .content ::slotted(calcite-flow),:host([position=end][slot=panel-start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position=end]:not([slot=panel-start])) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]:not([slot=panel-start])) .content ::slotted(calcite-flow),:host([position=end]:not([slot=panel-start])) .content ::slotted(calcite-panel),:host([position=start][slot=panel-end]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start][slot=panel-end]) .content ::slotted(calcite-flow),:host([position=start][slot=panel-end]) .content ::slotted(calcite-panel){border-inline-end:none}:host([layout=horizontal]) slot[name=action-bar]::slotted(calcite-action-bar){border-inline:0}:host([layout=horizontal][position=start]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=start]) .content ::slotted(calcite-panel){border-inline:0;border-block-start:0}:host([layout=horizontal][position=end]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=end]) .content ::slotted(calcite-panel){border-inline:0;border-block-end:0}:host([hidden]){display:none}[hidden]{display:none}";const z=class{constructor(n){t(this,n);this.calciteInternalShellPanelResizeStart=e(this,"calciteInternalShellPanelResizeStart",6);this.calciteInternalShellPanelResizeEnd=e(this,"calciteInternalShellPanelResizeEnd",6);this.initialContentWidth=null;this.initialContentHeight=null;this.initialClientX=null;this.initialClientY=null;this.contentWidthMax=null;this.contentWidthMin=null;this.contentHeightMax=null;this.contentHeightMin=null;this.step=1;this.stepMultiplier=10;this.actionBars=[];this.storeContentEl=t=>{this.contentEl=t};this.getKeyAdjustedSize=t=>{const{key:e}=t;const{el:n,step:o,stepMultiplier:i,layout:a,contentWidthMin:l,contentWidthMax:r,initialContentWidth:c,initialContentHeight:h,contentHeightMin:d,contentHeightMax:p,position:u}=this;const x=o*i;const b=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"];if(b.indexOf(e)>-1){t.preventDefault()}const f=s(n);const v=["ArrowLeft","ArrowRight"];const m=["ArrowDown","ArrowUp"];const w=f==="rtl"&&v.includes(e)?-1:1;const g=a==="horizontal"?u==="end"?e===m[1]||e===v[0]:e===m[0]||e===v[1]:e===m[1]||(u==="end"?e===v[0]:e===v[1]);if(g){const e=t.shiftKey?x:o;return a==="horizontal"?h+w*e:c+w*e}const y=a==="horizontal"?u==="end"?e===m[0]||e===v[0]:e===m[1]||e===v[1]:e===m[0]||(u==="end"?e===v[1]:e===v[0]);if(y){const e=t.shiftKey?x:o;return a==="horizontal"?h-w*e:c-w*e}if(e==="Home"&&a==="horizontal"&&typeof d==="number"){return d}if(e==="Home"&&a==="vertical"&&typeof l==="number"){return l}if(e==="End"&&a==="horizontal"&&typeof p==="number"){return p}if(e==="End"&&a==="vertical"&&typeof r==="number"){return r}if(e==="PageDown"){return a==="horizontal"?h-x:c-x}if(e==="PageUp"){return a==="horizontal"?h+x:c+x}return null};this.initialKeydownWidth=t=>{this.setInitialContentWidth();const e=this.getKeyAdjustedSize(t);if(typeof e==="number"){this.setContentWidth(e)}};this.initialKeydownHeight=t=>{this.setInitialContentHeight();const e=this.getKeyAdjustedSize(t);if(typeof e==="number"){this.setContentHeight(e)}};this.separatorKeyDown=t=>{this.layout==="horizontal"?this.initialKeydownHeight(t):this.initialKeydownWidth(t)};this.separatorPointerMove=t=>{t.preventDefault();const{el:e,layout:n,initialContentWidth:o,initialContentHeight:i,position:a,initialClientX:l,initialClientY:r}=this;const c=n==="horizontal"?t.clientY-r:t.clientX-l;const h=n==="vertical"&&s(e)==="rtl"?-1:1;const d=n==="horizontal"?a==="end"?-h*c:h*c:a==="end"?-h*c:h*c;n==="horizontal"?this.setContentHeight(i+d):this.setContentWidth(o+d)};this.separatorPointerUp=t=>{if(!r(t)){return}this.calciteInternalShellPanelResizeEnd.emit();t.preventDefault();window.removeEventListener("pointerup",this.separatorPointerUp);window.removeEventListener("pointermove",this.separatorPointerMove)};this.setInitialContentHeight=()=>{var t;this.initialContentHeight=(t=this.contentEl)===null||t===void 0?void 0:t.getBoundingClientRect().height};this.setInitialContentWidth=()=>{var t;this.initialContentWidth=(t=this.contentEl)===null||t===void 0?void 0:t.getBoundingClientRect().width};this.separatorPointerDown=t=>{if(!r(t)){return}this.calciteInternalShellPanelResizeStart.emit();t.preventDefault();const{separatorEl:e}=this;e&&document.activeElement!==e&&e.focus();if(this.layout==="horizontal"){this.setInitialContentHeight();this.initialClientY=t.clientY}else{this.setInitialContentWidth();this.initialClientX=t.clientX}window.addEventListener("pointerup",this.separatorPointerUp);window.addEventListener("pointermove",this.separatorPointerMove)};this.connectSeparator=t=>{this.disconnectSeparator();this.separatorEl=t;t===null||t===void 0?void 0:t.addEventListener("pointerdown",this.separatorPointerDown)};this.disconnectSeparator=()=>{var t;(t=this.separatorEl)===null||t===void 0?void 0:t.removeEventListener("pointerdown",this.separatorPointerDown)};this.setActionBarsLayout=t=>{t.forEach((t=>t.layout=this.layout))};this.handleActionBarSlotChange=t=>{const e=c(t).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-action-bar")));this.actionBars=e;this.setActionBarsLayout(e)};this.handleHeaderSlotChange=t=>{this.hasHeader=h(t)};this.collapsed=false;this.detached=false;this.displayMode="dock";this.detachedHeightScale=undefined;this.heightScale=undefined;this.widthScale="m";this.layout="vertical";this.position="start";this.resizable=false;this.messages=undefined;this.messageOverrides=undefined;this.contentWidth=null;this.contentHeight=null;this.defaultMessages=undefined;this.effectiveLocale="";this.hasHeader=false}handleDetached(t){if(t){this.displayMode="float"}else if(this.displayMode==="float"){this.displayMode="dock"}}handleDisplayMode(t){this.detached=t==="float"}handleDetachedHeightScale(t){this.heightScale=t}handleHeightScale(t){this.detachedHeightScale=t}layoutHandler(){this.setActionBarsLayout(this.actionBars)}onMessagesChange(){}connectedCallback(){a(this);d(this);x(this)}async componentWillLoad(){await b(this)}disconnectedCallback(){l(this);this.disconnectSeparator();p(this);f(this)}componentDidLoad(){this.updateAriaValues()}effectiveLocaleChange(){v(this,this.effectiveLocale)}renderHeader(){return n("div",{class:w.contentHeader,hidden:!this.hasHeader,key:"header"},n("slot",{name:g.header,onSlotchange:this.handleHeaderSlotChange}))}render(){const{collapsed:t,position:e,initialContentWidth:o,initialContentHeight:i,contentWidth:a,contentWidthMax:l,contentWidthMin:r,contentHeight:c,contentHeightMax:h,contentHeightMin:d,resizable:p,layout:u,displayMode:x}=this;const b=s(this.el);const f=x!=="float"&&p;const v=f?u==="horizontal"?c?{height:`${c}px`}:null:a?{width:`${a}px`}:null:null;const y=!t&&f?n("div",{"aria-label":this.messages.resize,"aria-orientation":u==="horizontal"?"vertical":"horizontal","aria-valuemax":u=="horizontal"?h:l,"aria-valuemin":u=="horizontal"?d:r,"aria-valuenow":u=="horizontal"?c!==null&&c!==void 0?c:i:a!==null&&a!==void 0?a:o,class:w.separator,key:"separator",onKeyDown:this.separatorKeyDown,role:"separator",tabIndex:0,"touch-action":"none",ref:this.connectSeparator}):null;const z=()=>{if(u==="horizontal"){return e==="start"?m.calciteAnimateInDown:m.calciteAnimateInUp}else{const t=b==="ltr"&&e==="end"||b==="rtl"&&e==="start";return t?m.calciteAnimateInLeft:m.calciteAnimateInRight}};const k=n("div",{class:{[m.rtl]:b==="rtl",[w.content]:true,[w.contentOverlay]:x==="overlay",[w.contentFloat]:x==="float",[m.calciteAnimate]:x==="overlay",[z()]:x==="overlay"},hidden:t,key:"content",style:v,ref:this.storeContentEl},this.renderHeader(),n("div",{class:w.contentBody},n("slot",null)),y);const H=n("slot",{key:"action-bar",name:g.actionBar,onSlotchange:this.handleActionBarSlotChange});const M=[H,k];if(e==="end"){M.reverse()}return n("div",{class:{[w.container]:true}},M)}setContentWidth(t){const{contentWidthMax:e,contentWidthMin:n}=this;const o=Math.round(t);this.contentWidth=typeof e==="number"&&typeof n==="number"?u(o,n,e):o}updateAriaValues(){const{contentEl:t}=this;const e=t&&getComputedStyle(t);if(!e){return}this.layout==="horizontal"?this.updateHeights(e):this.updateWidths(e);o(this)}setContentHeight(t){const{contentHeightMax:e,contentHeightMin:n}=this;const o=Math.round(t);this.contentHeight=typeof e==="number"&&typeof n==="number"?u(o,n,e):o}updateWidths(t){const e=parseInt(t.getPropertyValue("max-width"),10);const n=parseInt(t.getPropertyValue("min-width"),10);const o=parseInt(t.getPropertyValue("width"),10);if(typeof o==="number"&&!isNaN(o)){this.initialContentWidth=o}if(typeof e==="number"&&!isNaN(e)){this.contentWidthMax=e}if(typeof n==="number"&&!isNaN(n)){this.contentWidthMin=n}}updateHeights(t){const e=parseInt(t.getPropertyValue("max-height"),10);const n=parseInt(t.getPropertyValue("min-height"),10);const o=parseInt(t.getPropertyValue("height"),10);if(typeof o==="number"&&!isNaN(o)){this.initialContentHeight=o}if(typeof e==="number"&&!isNaN(e)){this.contentHeightMax=e}if(typeof n==="number"&&!isNaN(n)){this.contentHeightMin=n}}static get assetsDirs(){return["assets"]}get el(){return i(this)}static get watchers(){return{detached:["handleDetached"],displayMode:["handleDisplayMode"],detachedHeightScale:["handleDetachedHeightScale"],heightScale:["handleHeightScale"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};z.style=y;export{z as calcite_shell_panel};
//# sourceMappingURL=p-54027e80.entry.js.map