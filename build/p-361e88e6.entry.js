import{r as t,c as e,h as i,H as n,g as s}from"./p-c9ba45b0.js";import{b as o,v as a,a as c,t as l}from"./p-1631d2a0.js";import{c as r,u as d,d as h,I as f}from"./p-c09dab4d.js";import{c as u,d as p}from"./p-909ebb2d.js";import{u as b,c as g,s as m,d as v}from"./p-3c05e9bf.js";import{a as y,s as C,c as x}from"./p-774fbe58.js";import{a as k,g as w,b as S,u as I}from"./p-e3835546.js";import{a as L,I as j,C as E,S as D}from"./p-0034828c.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-28de0941.js";import"./p-6ceba8f9.js";import"./p-3f298b29.js";const z=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.indent{display:flex;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:flex;flex-direction:column}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;padding-block:0px;color:var(--calcite-color-border-input)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}";const A=new Map;const M="calcite-list";const F=class{constructor(i){t(this,i);this.calciteListItemSelect=e(this,"calciteListItemSelect",6);this.calciteListItemClose=e(this,"calciteListItemClose",6);this.calciteListItemDragHandleChange=e(this,"calciteListItemDragHandleChange",6);this.calciteListItemToggle=e(this,"calciteListItemToggle",6);this.calciteInternalListItemSelect=e(this,"calciteInternalListItemSelect",6);this.calciteInternalListItemSelectMultiple=e(this,"calciteInternalListItemSelectMultiple",6);this.calciteInternalListItemActive=e(this,"calciteInternalListItemActive",6);this.calciteInternalFocusPreviousItem=e(this,"calciteInternalFocusPreviousItem",6);this.calciteInternalListItemChange=e(this,"calciteInternalListItemChange",6);this.dragHandleSelectedChangeHandler=t=>{this.dragSelected=t.target.selected;this.calciteListItemDragHandleChange.emit();t.stopPropagation()};this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()};this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)};this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)};this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)};this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)};this.handleCloseClick=()=>{this.closed=true;this.calciteListItemClose.emit()};this.handleContentSlotChange=t=>{this.hasCustomContent=o(t)};this.handleActionsStartSlotChange=t=>{this.hasActionsStart=o(t)};this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=o(t)};this.handleContentStartSlotChange=t=>{this.hasContentStart=o(t)};this.handleContentEndSlotChange=t=>{this.hasContentEnd=o(t)};this.handleContentBottomSlotChange=t=>{this.hasContentBottom=o(t)};this.handleDefaultSlotChange=t=>{this.handleOpenableChange(t.target)};this.handleToggleClick=()=>{this.toggle()};this.toggle=(t=!this.open)=>{this.open=t;this.calciteListItemToggle.emit()};this.handleItemClick=t=>{if(t.defaultPrevented){return}this.toggleSelected(t.shiftKey)};this.toggleSelected=t=>{const{selectionMode:e,selected:i}=this;if(this.disabled){return}if(e==="multiple"||e==="single"){this.selected=!i}else if(e==="single-persist"){this.selected=true}this.calciteInternalListItemSelectMultiple.emit({selectMultiple:t&&e==="multiple"});this.calciteListItemSelect.emit()};this.handleItemKeyDown=t=>{if(t.defaultPrevented){return}const{key:e}=t;const i=t.composedPath();const{containerEl:n,actionsStartEl:s,actionsEndEl:o,open:a,openable:c}=this;const l=this.getGridCells();const r=l.findIndex((t=>i.includes(t)));if(e==="Enter"&&!i.includes(s)&&!i.includes(o)){t.preventDefault();this.toggleSelected(t.shiftKey)}else if(e==="ArrowRight"){t.preventDefault();const e=r+1;if(r===-1){if(!a&&c){this.toggle(true);this.focusCell(null)}else if(l[0]){this.focusCell(l[0])}}else if(l[r]&&l[e]){this.focusCell(l[e])}}else if(e==="ArrowLeft"){t.preventDefault();const e=r-1;if(r===-1){this.focusCell(null);if(a&&c){this.toggle(false)}else{this.calciteInternalFocusPreviousItem.emit()}}else if(r===0){this.focusCell(null);n.focus()}else if(l[r]&&l[e]){this.focusCell(l[e])}}};this.focusCellNull=()=>{this.focusCell(null)};this.handleCellFocusIn=t=>{this.setFocusCell(t,a(t),true)};this.setFocusCell=(t,e,i)=>{const{parentListEl:n}=this;if(i){A.set(n,null)}const s=this.getGridCells();s.forEach((t=>{t.tabIndex=-1;t.removeAttribute(L)}));if(!t){return}t.tabIndex=t===e?0:-1;t.setAttribute(L,"");if(i){A.set(n,s.indexOf(t))}};this.focusCell=(t,e=true)=>{const i=a(t);this.setFocusCell(t,i,e);i===null||i===void 0?void 0:i.focus()};this.active=false;this.bordered=false;this.closable=false;this.closed=false;this.description=undefined;this.disabled=false;this.dragDisabled=false;this.dragHandle=false;this.dragSelected=false;this.filterHidden=false;this.label=undefined;this.metadata=undefined;this.open=false;this.setSize=null;this.setPosition=null;this.selected=false;this.value=undefined;this.selectionMode=null;this.selectionAppearance=null;this.messageOverrides=undefined;this.messages=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.level=null;this.parentListEl=undefined;this.openable=false;this.hasActionsStart=false;this.hasActionsEnd=false;this.hasCustomContent=false;this.hasContentStart=false;this.hasContentEnd=false;this.hasContentBottom=false}activeHandler(t){if(!t){this.focusCell(null,false)}}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(t){t.stopPropagation();this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){b(this,this.effectiveLocale)}connectedCallback(){r(this);u(this);g(this);const{el:t}=this;this.parentListEl=t.closest(M);this.level=k(t)+1;this.setSelectionDefaults()}async componentWillLoad(){y(this);await m(this)}componentDidLoad(){C(this)}componentDidRender(){d(this)}disconnectedCallback(){h(this);p(this);v(this)}async setFocus(){await x(this);const{containerEl:t,parentListEl:e}=this;const i=A.get(e);if(typeof i==="number"){const e=this.getGridCells();if(e[i]){this.focusCell(e[i])}else{t===null||t===void 0?void 0:t.focus()}return}t===null||t===void 0?void 0:t.focus()}renderSelected(){const{selected:t,selectionMode:e,selectionAppearance:n}=this;if(e==="none"||n==="border"){return null}return i("td",{class:{[E.selectionContainer]:true,[E.selectionContainerSingle]:e==="single"||e==="single-persist"},key:"selection-container",onClick:this.handleItemClick},i("calcite-icon",{icon:t?e==="multiple"?j.selectedMultiple:j.selectedSingle:e==="multiple"?j.unselectedMultiple:j.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:t,dragHandle:e,dragSelected:n,dragDisabled:s,setPosition:o,setSize:a}=this;return e?i("td",{"aria-label":t,class:E.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,role:"gridcell",ref:t=>this.handleGridEl=t},i("calcite-handle",{disabled:s,label:t,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:o,setSize:a})):null}renderOpen(){const{el:t,open:e,openable:n,messages:s}=this;const o=c(t);const a=e?j.open:o==="rtl"?j.closedRTL:j.closedLTR;const l=e?s.collapse:s.expand;return n?i("td",{class:E.openContainer,key:"open-container",onClick:this.handleToggleClick,title:l},i("calcite-icon",{icon:a,key:a,scale:"s"})):null}renderActionsStart(){const{label:t,hasActionsStart:e}=this;return i("td",{"aria-label":t,class:E.actionsStart,hidden:!e,key:"actions-start-container",onFocusin:this.focusCellActionsStart,role:"gridcell",ref:t=>this.actionsStartEl=t},i("slot",{name:D.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:t,hasActionsEnd:e,closable:n,messages:s}=this;return i("td",{"aria-label":t,class:E.actionsEnd,hidden:!(e||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,role:"gridcell",ref:t=>this.actionsEndEl=t},i("slot",{name:D.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?i("calcite-action",{appearance:"transparent",icon:j.close,key:"close-action",label:s.close,onClick:this.handleCloseClick,text:s.close}):null)}renderContentStart(){const{hasContentStart:t}=this;return i("div",{class:E.contentStart,hidden:!t},i("slot",{name:D.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:t}=this;return i("div",{class:E.customContent,hidden:!t},i("slot",{name:D.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:t}=this;return i("div",{class:E.contentEnd,hidden:!t},i("slot",{name:D.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:t}=this;return i("div",{class:E.contentBottom,hidden:!t},i("slot",{name:D.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return i("div",{class:{[E.nestedContainer]:true,[E.nestedContainerHidden]:this.openable&&!this.open}},i("slot",{onSlotchange:this.handleDefaultSlotChange,ref:t=>this.defaultSlotEl=t}))}renderContentProperties(){const{label:t,description:e,hasCustomContent:n}=this;return!n&&(!!t||!!e)?i("div",{class:E.content,key:"content"},t?i("div",{class:E.label,key:"label"},t):null,e?i("div",{class:E.description,key:"description"},e):null):null}renderContentContainer(){const{description:t,label:e,selectionMode:n,hasCustomContent:s}=this;const o=s||!!e||!!t;const a=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":e,class:{[E.contentContainer]:true,[E.contentContainerSelectable]:n!=="none",[E.contentContainerHasCenterContent]:o},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,role:"gridcell",ref:t=>this.contentEl=t},a)}render(){const{openable:t,open:e,level:s,setPosition:o,setSize:a,active:c,label:r,selected:d,selectionAppearance:h,selectionMode:u,closed:p,filterHidden:b,bordered:g,disabled:m}=this;const v=u!=="none"&&h==="border";const y=v&&d;const C=v&&!d;return i(n,{key:"15651b0bef6af7db01d650ff74b732db28758292"},i(f,{key:"a0a4c2b6587a5c173710235518bf97aafc7d3b2a",disabled:m},i("div",{key:"f4dceb92cd6164d4d5445a9977aebfa9ae4073ff",class:{[E.wrapper]:true,[E.wrapperBordered]:g}},i("tr",{key:"105d3b31fde1dabc1b606b25e28f9f7535367503","aria-expanded":t?l(e):null,"aria-label":r,"aria-level":s,"aria-posinset":o,"aria-selected":l(d),"aria-setsize":a,class:{[E.container]:true,[E.containerHover]:true,[E.containerBorder]:v,[E.containerBorderSelected]:y,[E.containerBorderUnselected]:C},hidden:p||b,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,role:"row",tabIndex:c?0:-1,ref:t=>this.containerEl=t},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),i("div",{key:"2018e3a2e07547caca69c18ce58a3e19ae66b3e8",class:E.indent},this.renderDefaultContainer())))}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:t,selectionMode:e,selectionAppearance:i}=this;if(!t){return}if(!e){this.selectionMode=t.selectionMode}if(!i){this.selectionAppearance=t.selectionAppearance}}handleOpenableChange(t){if(!t){return}const e=w(t);const i=S(t);I(e);this.openable=!!e.length||!!i.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter((t=>t&&!t.hidden))}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};F.style=z;export{F as calcite_list_item};
//# sourceMappingURL=p-361e88e6.entry.js.map