import{r as t,c as i,h as o,H as e,g as s}from"./p-c9ba45b0.js";import{c as a,d as n}from"./p-c1c4a458.js";import{s as l,b as c,f as d}from"./p-1631d2a0.js";import{s as r,a as h,c as p}from"./p-774fbe58.js";import{c as u,d as f}from"./p-909ebb2d.js";import{c as b}from"./p-3f298b29.js";import{u as g,c as v,s as x,d as m}from"./p-3c05e9bf.js";import{t as y,o as w,q as j,g as z,a as H,E as A,b as C}from"./p-4bc3b0ea.js";import{d as k}from"./p-58421494.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-6ceba8f9.js";import"./p-173002ce.js";import"./p-117dc3d7.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const D={actionGroupEnd:"action-group--end"};const L={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"};const G=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}";const E=class{constructor(o){t(this,o);this.calciteActionBarToggle=i(this,"calciteActionBarToggle",6);this.mutationObserver=b("mutation",(()=>{const{el:t,expanded:i}=this;y({el:t,expanded:i});this.overflowActions()}));this.resizeObserver=b("resize",(t=>this.resizeHandlerEntries(t)));this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const i=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{if(!i.includes(t)){t.menuOpen=false}}))}};this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)};this.resizeHandler=t=>{const{width:i,height:o}=t.contentRect;this.resize({width:i,height:o})};this.resize=k((({width:t,height:i})=>{const{el:o,expanded:e,expandDisabled:s,layout:a,overflowActionsDisabled:n}=this;if(n||a==="vertical"&&!i||a==="horizontal"&&!t){return}const l=j(o);const c=s?l.length:l.length+1;const d=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(d);const r=this.hasActionsEnd||this.hasBottomActions||!s?d.length+1:d.length;const{actionHeight:h,actionWidth:p}=z(l);const u=C({layout:a,actionCount:c,actionHeight:h,actionWidth:p,height:i,width:t,groupCount:r});H({actionGroups:d,expanded:e,overflowCount:u})}),w);this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionBarToggle.emit()};this.setExpandToggleRef=t=>{this.expandToggleEl=t};this.handleDefaultSlotChange=t=>{const i=l(t).filter((t=>t.matches("calcite-action-group")));this.setGroupLayout(i)};this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=c(t)};this.handleBottomActionsSlotChange=t=>{this.hasBottomActions=c(t)};this.handleTooltipSlotChange=t=>{const i=l(t).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-tooltip")));this.expandTooltip=i[0]};this.actionsEndGroupLabel=undefined;this.expandDisabled=false;this.expanded=false;this.layout="vertical";this.overflowActionsDisabled=false;this.overlayPositioning="absolute";this.position=undefined;this.scale=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.hasActionsEnd=false;this.hasBottomActions=false;this.expandTooltip=undefined;this.defaultMessages=undefined}expandHandler(){this.overflowActions()}expandedHandler(){const{el:t,expanded:i}=this;y({el:t,expanded:i});this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(t){var i,o;if(t){(i=this.resizeObserver)===null||i===void 0?void 0:i.disconnect();return}(o=this.resizeObserver)===null||o===void 0?void 0:o.observe(this.el);this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){g(this,this.effectiveLocale)}componentDidLoad(){const{el:t,expanded:i}=this;r(this);y({el:t,expanded:i});this.overflowActions()}connectedCallback(){var t,i;const{el:o,expanded:e}=this;u(this);v(this);y({el:o,expanded:e});(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(o,{childList:true,subtree:true});if(!this.overflowActionsDisabled){(i=this.resizeObserver)===null||i===void 0?void 0:i.observe(o)}this.overflowActions();a(this)}async componentWillLoad(){h(this);await x(this)}disconnectedCallback(){var t,i;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();(i=this.resizeObserver)===null||i===void 0?void 0:i.disconnect();n(this);f(this);m(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await p(this);d(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(t){t.forEach((t=>t.layout=this.layout))}renderBottomActionGroup(){const{expanded:t,expandDisabled:i,el:e,position:s,toggleExpand:a,scale:n,layout:l,messages:c,actionsEndGroupLabel:d,overlayPositioning:r}=this;const h=!i?o(A,{collapseText:c.collapse,el:e,expandText:c.expand,expanded:t,position:s,scale:n,toggle:a,tooltip:this.expandTooltip,ref:this.setExpandToggleRef}):null;return o("calcite-action-group",{class:D.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:d,layout:l,overlayPositioning:r,scale:n},o("slot",{name:L.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),o("slot",{name:L.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),o("slot",{name:L.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),h)}render(){return o(e,{key:"578047ec3165559551c136005f1553bb216ecf57",onCalciteActionMenuOpen:this.actionMenuOpenHandler},o("slot",{key:"74768d564c8f7041d4e0e49c4b117875cb65273f",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};E.style=G;export{E as calcite_action_bar};
//# sourceMappingURL=p-c78ea1ea.entry.js.map