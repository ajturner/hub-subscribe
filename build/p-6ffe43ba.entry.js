import{r as e,c as t,h as a,H as r,g as s,F as i}from"./p-c9ba45b0.js";import{c as n,h as o,f as c,i as d,j as l,n as h,p as f,k as p,l as g}from"./p-5a3eaf44.js";import{c as u,t as v}from"./p-1631d2a0.js";import{I as y,c as b,u as m,d as w}from"./p-c09dab4d.js";import{i as x}from"./p-6ceba8f9.js";import{n as k}from"./p-909ebb2d.js";import{a as z,s as D,c as j}from"./p-774fbe58.js";import{H as I}from"./p-8daf1935.js";import{g as C}from"./p-8c547715.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-28de0941.js";import"./p-3f298b29.js";const S=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;cursor:pointer;color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.day-v-wrapper{flex:1 1 auto}.day-wrapper{position:relative;display:flex;flex-direction:column;align-items:center}:host([range]) .day-wrapper:before,:host([range]) .day-wrapper:after,:host([range-hover]) .day-wrapper:before,:host([range-hover]) .day-wrapper:after{pointer-events:none;position:absolute;inset-block:0;content:"";block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.day{z-index:var(--calcite-z-index);display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent;block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]){--calcite-internal-day-size:27px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-day-size:33px}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding:0px}:host([scale=m]) .day{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-day-size:43px}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{font-size:var(--calcite-font-size-0)}:host(:not([current-month])) .day{opacity:var(--calcite-opacity-disabled)}:host(:hover:not([disabled]):not([selected])) .day,:host([active]:not([range]):not([selected])) .day{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-color-brand);color:var(--calcite-color-foreground-1)}:host(:focus:not([disabled])) .day,:host([start-of-range]:not(:focus)) .day,:host([end-of-range]:not(:focus)) .day{box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}:host([range-hover]:not([selected])) .day-wrapper:before,:host([highlighted]:not([selected])) .day-wrapper:before{inset-inline-end:50%;border-radius:0}:host([range-hover]:not([selected])) .day-wrapper:after,:host([highlighted]:not([selected])) .day-wrapper:after{inset-inline-start:50%;border-radius:0}:host([range-hover]:not([selected])) .day,:host([highlighted]:not([selected])) .day{color:var(--calcite-color-text-1)}:host([highlighted]) .day-wrapper:before,:host([highlighted]) .day-wrapper:after,:host([selected]:not(.hover--outside-range)) .day-wrapper:before,:host([selected]:not(.hover--outside-range)) .day-wrapper:after{background-color:var(--calcite-color-foreground-current)}:host([range-hover]:not([selected])) .day-wrapper:before,:host([range-hover]:not([selected])) .day-wrapper:after{background-color:var(--calcite-color-foreground-2)}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper:before,:host([highlighted][end-of-range]) .day-wrapper:before,:host([highlighted][range-edge=end]) .day-wrapper:before,:host([range-hover][range-edge=end]) .day-wrapper:before,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper:before{inset-inline-end:50%}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper:after,:host([highlighted][end-of-range]) .day-wrapper:after,:host([highlighted][range-edge=end]) .day-wrapper:after,:host([range-hover][range-edge=end]) .day-wrapper:after,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper:after{inset-inline-start:50%;border-start-end-radius:var(--calcite-internal-day-size);border-end-end-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper:before,:host([highlighted][range-edge=start]) .day-wrapper:before,:host([range-hover][range-edge=start]) .day-wrapper:before,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper:before,:host([start-of-range].hover--inside-range) .day-wrapper:before,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper:before{inset-inline-end:50%;border-start-start-radius:var(--calcite-internal-day-size);border-end-start-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper:after,:host([highlighted][range-edge=start]) .day-wrapper:after,:host([range-hover][range-edge=start]) .day-wrapper:after,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper:after,:host([start-of-range].hover--inside-range) .day-wrapper:after,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper:after{inset-inline-start:50%}:host([range-hover][start-of-range][range-edge=end]) .day-wrapper:after,:host([range-hover][start-of-range][range-edge=end]) .day-wrapper:before,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper:after,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper:before,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper:after,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper:before,:host([end-of-range]) .day-wrapper:after,:host([end-of-range]) .day-wrapper:before{content:unset}:host(:hover[range-hover]:not([selected]).focused--start) .day,:host(:hover[range-hover]:not([selected]).focused--end) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .day{box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){.day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host(:hover:not([selected])) .day{border-radius:50%}:host([range][selected]) .day-wrapper:before,:host([range][selected]) .day-wrapper:after,:host([highlighted]) .day-wrapper:before,:host([highlighted]) .day-wrapper:after,:host([range-hover]:not([selected])) .day-wrapper:before,:host([range-hover]:not([selected])) .day-wrapper:after{background-color:highlight}:host([range-hover]) .day-wrapper:before,:host([range-hover]) .day-wrapper:after,:host([range][selected][start-of-range]) .day-wrapper:before,:host([range][selected][start-of-range]) .day-wrapper:after,:host([range][selected][end-of-range]) .day-wrapper:before,:host([range][selected][end-of-range]) .day-wrapper:after{background-color:canvas}}:host([hidden]){display:none}[hidden]{display:none}';const O=class{constructor(a){e(this,a);this.calciteDaySelect=t(this,"calciteDaySelect",6);this.calciteInternalDayHover=t(this,"calciteInternalDayHover",6);this.onClick=()=>{if(this.disabled){return}this.calciteDaySelect.emit()};this.keyDownHandler=e=>{if(x(e.key)){!this.disabled&&this.calciteDaySelect.emit();e.preventDefault()}};this.day=undefined;this.dateTimeFormat=undefined;this.disabled=false;this.currentMonth=false;this.selected=false;this.highlighted=false;this.range=false;this.rangeEdge=undefined;this.startOfRange=false;this.endOfRange=false;this.rangeHover=false;this.active=false;this.scale=undefined;this.value=undefined}pointerOverHandler(){if(this.disabled){return}this.calciteInternalDayHover.emit()}async componentWillLoad(){z(this);this.parentDatePickerEl=u(this.el,"calcite-date-picker")}componentDidLoad(){D(this)}async setFocus(){await j(this);this.el.focus()}render(){const e=n(this.value).replaceAll("-","");if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;k.numberFormatOptions=Object.assign(Object.assign({useGrouping:false},e&&{numberingSystem:e}),t&&{locale:t})}const t=k.localize(String(this.day));const s=this.dateTimeFormat.format(this.value);return a(r,{key:"8de3dbeb652bfeb5ea9e9a490c3cec6a3663aeea","aria-disabled":v(this.disabled),"aria-label":s,"aria-selected":v(this.active),id:e,onClick:this.onClick,onKeyDown:this.keyDownHandler,role:"button",tabIndex:this.active&&!this.disabled?0:-1},a(y,{key:"edb52f389027ea4f48067e2c0a4c6a28251bc4ab",disabled:this.disabled},a("div",{key:"fd75d2ebcd2e6ca21afdefb3f4e6f02089b43609","aria-hidden":"true",class:{"day-v-wrapper":true}},a("div",{key:"d4ac04c544b7f26c1e1992f4b8046c608c6174cd",class:"day-wrapper"},a("span",{key:"8453fd6dd54fa642f1779b99e2f1012a2277cfda",class:"day"},a("span",{key:"fb704e33e0d0af0ce76988983b530e640a361299",class:"text"},t))))))}connectedCallback(){b(this)}componentDidRender(){m(this)}disconnectedCallback(){w(this)}get el(){return s(this)}};O.style=S;const M=":host([hidden]){display:none}[hidden]{display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:100%}.day calcite-date-picker-day{inline-size:100%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:grid;grid-template-columns:repeat(7, 1fr);grid-auto-rows:1fr;padding-block:0;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";const P=7;const R=6;const H=class{constructor(a){e(this,a);this.calciteInternalDatePickerSelect=t(this,"calciteInternalDatePickerSelect",6);this.calciteInternalDatePickerHover=t(this,"calciteInternalDatePickerHover",6);this.calciteInternalDatePickerActiveDateChange=t(this,"calciteInternalDatePickerActiveDateChange",6);this.calciteInternalDatePickerMouseOut=t(this,"calciteInternalDatePickerMouseOut",6);this.keyDownHandler=e=>{if(e.defaultPrevented){return}const t=this.el.dir==="rtl";switch(e.key){case"ArrowUp":e.preventDefault();this.addDays(-7);break;case"ArrowRight":e.preventDefault();this.addDays(t?-1:1);break;case"ArrowDown":e.preventDefault();this.addDays(7);break;case"ArrowLeft":e.preventDefault();this.addDays(t?1:-1);break;case"PageUp":e.preventDefault();this.addMonths(-1);break;case"PageDown":e.preventDefault();this.addMonths(1);break;case"Home":e.preventDefault();this.activeDate.setDate(1);this.addDays();break;case"End":e.preventDefault();this.activeDate.setDate(new Date(this.activeDate.getFullYear(),this.activeDate.getMonth()+1,0).getDate());this.addDays();break;case"Enter":case" ":e.preventDefault();break;case"Tab":this.activeFocus=false}};this.disableActiveFocus=()=>{this.activeFocus=false};this.dayHover=e=>{const t=e.target;if(t.disabled){this.calciteInternalDatePickerMouseOut.emit()}else{this.calciteInternalDatePickerHover.emit(t.value)}e.stopPropagation()};this.daySelect=e=>{const t=e.target;this.calciteInternalDatePickerSelect.emit(t.value)};this.dateTimeFormat=undefined;this.selectedDate=undefined;this.activeDate=new Date;this.startDate=undefined;this.endDate=undefined;this.min=undefined;this.max=undefined;this.scale=undefined;this.localeData=undefined;this.hoverRange=undefined}pointerOutHandler(){this.calciteInternalDatePickerMouseOut.emit()}render(){const e=this.activeDate.getMonth();const t=this.activeDate.getFullYear();const s=this.localeData.weekStart%7;const{abbreviated:i,short:n,narrow:c}=this.localeData.days;const d=this.scale==="s"?c||n||i:n||i||c;const l=[...d.slice(s,7),...d.slice(0,s)];const h=this.getCurrentMonthDays(e,t);const f=this.getPreviousMonthDays(e,t,s);const p=this.getNextMonthDays(e,t,s);let g=0;const u=()=>g++%7;const v=[...f.map((a=>({active:false,day:a,dayInWeek:u(),date:new Date(t,e-1,a)}))),...h.map((a=>{const r=new Date(t,e,a);const s=o(r,this.activeDate);return{active:s,currentMonth:true,day:a,dayInWeek:u(),date:r,ref:true}})),...p.map((a=>({active:false,day:a,dayInWeek:u(),date:new Date(t,e+1,a)})))];return a(r,{onFocusout:this.disableActiveFocus,onKeyDown:this.keyDownHandler},a("div",{class:"calendar",role:"grid"},a("div",{class:"week-headers",role:"row"},l.map((e=>a("span",{class:"week-header",role:"columnheader"},e)))),a("div",{class:"week-days",role:"row"},v.map(((e,t)=>this.renderDateDay(e,t))))))}addMonths(e){const t=new Date(this.activeDate);t.setMonth(this.activeDate.getMonth()+e);this.calciteInternalDatePickerActiveDateChange.emit(c(t,this.min,this.max));this.activeFocus=true}addDays(e=0){const t=new Date(this.activeDate);t.setDate(this.activeDate.getDate()+e);this.calciteInternalDatePickerActiveDateChange.emit(c(t,this.min,this.max));this.activeFocus=true}getPreviousMonthDays(e,t,a){const r=new Date(t,e,0);const s=r.getDate();const i=r.getDay();const n=[];if(i===(a+R)%P){return n}if(i===a){return[s]}for(let e=(P+i-a)%P;e>=0;e--){n.push(s-e)}return n}getCurrentMonthDays(e,t){const a=new Date(t,e+1,0).getDate();const r=[];for(let e=0;e<a;e++){r.push(e+1)}return r}getNextMonthDays(e,t,a){const r=new Date(t,e+1,0).getDay();const s=[];if(r===(a+R)%P){return s}for(let e=0;e<(R-(r-a))%P;e++){s.push(e+1)}return s}betweenSelectedRange(e){return!!(this.startDate&&this.endDate&&e>this.startDate&&e<this.endDate&&!this.isRangeHover(e))}isSelected(e){return!!(o(e,this.selectedDate)||this.startDate&&o(e,this.startDate)||this.endDate&&o(e,this.endDate))}isStartOfRange(e){return!!(this.startDate&&!o(this.startDate,this.endDate)&&o(this.startDate,e)&&!this.isEndOfRange(e))}isEndOfRange(e){return!!(this.endDate&&!o(this.startDate,this.endDate)&&o(this.endDate,e)||!this.endDate&&this.hoverRange&&o(this.startDate,this.hoverRange.end)&&o(e,this.hoverRange.end))}renderDateDay({active:e,currentMonth:t,date:r,day:s,dayInWeek:i,ref:n},c){var l;const h=this.isFocusedOnStart();const f=this.isHoverInRange()||!this.endDate&&this.hoverRange&&o((l=this.hoverRange)===null||l===void 0?void 0:l.end,this.startDate);return a("div",{class:"day",key:c,role:"gridcell"},a("calcite-date-picker-day",{active:e,class:{"hover--inside-range":this.startDate&&f,"hover--outside-range":this.startDate&&!f,"focused--start":h,"focused--end":!h},currentMonth:t,dateTimeFormat:this.dateTimeFormat,day:s,disabled:!d(r,this.min,this.max),endOfRange:this.isEndOfRange(r),highlighted:this.betweenSelectedRange(r),onCalciteDaySelect:this.daySelect,onCalciteInternalDayHover:this.dayHover,range:!!this.startDate&&!!this.endDate&&!o(this.startDate,this.endDate),rangeEdge:i===0?"start":i===6?"end":undefined,rangeHover:this.isRangeHover(r),scale:this.scale,selected:this.isSelected(r),startOfRange:this.isStartOfRange(r),value:r,ref:t=>{if(n&&e&&this.activeFocus){t===null||t===void 0?void 0:t.setFocus()}}}))}isFocusedOnStart(){var e;return((e=this.hoverRange)===null||e===void 0?void 0:e.focused)==="start"}isHoverInRange(){if(!this.hoverRange){return false}const{start:e,end:t}=this.hoverRange;return!!(!this.isFocusedOnStart()&&this.startDate&&(!this.endDate||t<this.endDate)||this.isFocusedOnStart()&&this.startDate&&e>this.startDate)}isRangeHover(e){if(!this.hoverRange){return false}const{start:t,end:a}=this.hoverRange;const r=this.isFocusedOnStart();const s=this.isHoverInRange();const i=s&&(!r&&e>this.startDate&&(e<a||o(e,a))||r&&e<this.endDate&&(e>t||o(e,t)));const n=!s&&(!r&&e>=this.endDate&&(e<a||o(e,a))||r&&(this.startDate&&e<this.startDate||this.endDate&&o(e,this.startDate))&&(t&&e>t||o(e,t)));return i||n}get el(){return s(this)}};H.style=M;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const Y={header:"header",month:"month",chevron:"chevron",suffix:"suffix",yearSuffix:"year--suffix",yearWrap:"year-wrap",textReverse:"text--reverse"};const _={chevronLeft:"chevron-left",chevronRight:"chevron-right"};const N=":host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding-inline:0.25rem;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}";const A=class{constructor(a){e(this,a);this.calciteInternalDatePickerSelect=t(this,"calciteInternalDatePickerSelect",6);this.onYearKey=e=>{const t=this.parseCalendarYear(e.target.value);switch(e.key){case"ArrowDown":e.preventDefault();this.setYear({localizedYear:t,offset:-1});break;case"ArrowUp":e.preventDefault();this.setYear({localizedYear:t,offset:1});break}};this.onYearChange=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value)})};this.onYearInput=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value),commit:false})};this.prevMonthClick=e=>{this.handleArrowClick(e,this.prevMonthDate)};this.prevMonthKeydown=e=>{if(x(e.key)){this.prevMonthClick(e)}};this.nextMonthClick=e=>{this.handleArrowClick(e,this.nextMonthDate)};this.nextMonthKeydown=e=>{if(x(e.key)){this.nextMonthClick(e)}};this.handleArrowClick=(e,t)=>{e.preventDefault();this.calciteInternalDatePickerSelect.emit(t)};this.selectedDate=undefined;this.activeDate=undefined;this.headingLevel=undefined;this.min=undefined;this.max=undefined;this.scale=undefined;this.localeData=undefined;this.messages=undefined;this.nextMonthDate=undefined;this.prevMonthDate=undefined}componentWillLoad(){this.parentDatePickerEl=u(this.el,"calcite-date-picker")}connectedCallback(){this.setNextPrevMonthDates()}render(){return a("div",{key:"9e392da76cbe365de812b6219b3ee7ada90a09e6",class:Y.header},this.renderContent())}renderContent(){var e;const{messages:t,localeData:r,activeDate:s}=this;if(!s||!r){return null}if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;k.numberFormatOptions=Object.assign(Object.assign({useGrouping:false},e&&{numberingSystem:e}),t&&{locale:t})}const n=s.getMonth();const{months:o,unitOrder:c}=r;const d=(o.wide||o.narrow||o.abbreviated)[n];const h=this.formatCalendarYear(s.getFullYear());const f=l(c);const p=f.indexOf("y")<f.indexOf("m");const g=(e=r.year)===null||e===void 0?void 0:e.suffix;return a(i,null,a("a",{"aria-disabled":`${this.prevMonthDate.getMonth()===n}`,"aria-label":t.prevMonth,class:Y.chevron,href:"#",onClick:this.prevMonthClick,onKeyDown:this.prevMonthKeydown,role:"button",tabindex:this.prevMonthDate.getMonth()===n?-1:0},a("calcite-icon",{"flip-rtl":true,icon:_.chevronLeft,scale:C(this.scale)})),a("div",{class:{text:true,[Y.textReverse]:p}},a(I,{class:Y.month,level:this.headingLevel},d),a("span",{class:Y.yearWrap},a("input",{"aria-label":t.year,class:{year:true,[Y.yearSuffix]:!!g},inputmode:"numeric",maxlength:"4",minlength:"1",onChange:this.onYearChange,onInput:this.onYearInput,onKeyDown:this.onYearKey,pattern:"\\d*",type:"text",value:h,ref:e=>this.yearInput=e}),g&&a("span",{class:Y.suffix},g))),a("a",{"aria-disabled":`${this.nextMonthDate.getMonth()===n}`,"aria-label":t.nextMonth,class:Y.chevron,href:"#",onClick:this.nextMonthClick,onKeyDown:this.nextMonthKeydown,role:"button",tabindex:this.nextMonthDate.getMonth()===n?-1:0},a("calcite-icon",{"flip-rtl":true,icon:_.chevronRight,scale:C(this.scale)})))}setNextPrevMonthDates(){if(!this.activeDate){return}this.nextMonthDate=c(h(this.activeDate),this.min,this.max);this.prevMonthDate=c(f(this.activeDate),this.min,this.max)}formatCalendarYear(e){return k.localize(`${p(e,this.localeData)}`)}parseCalendarYear(e){return k.localize(`${g(Number(k.delocalize(e)),this.localeData)}`)}getInRangeDate({localizedYear:e,offset:t=0}){const{min:a,max:r,activeDate:s}=this;const i=Number(k.delocalize(e));const n=i.toString().length;const o=isNaN(i)?false:i+t;const d=o&&(!a||a.getFullYear()<=o)&&(!r||r.getFullYear()>=o);if(o&&d&&n===e.length){const e=new Date(s);e.setFullYear(o);return c(e,a,r)}}setYear({localizedYear:e,commit:t=true,offset:a=0}){const{yearInput:r,activeDate:s}=this;const i=this.getInRangeDate({localizedYear:e,offset:a});if(i){this.calciteInternalDatePickerSelect.emit(i)}if(t){r.value=this.formatCalendarYear((i||s).getFullYear())}}get el(){return s(this)}static get watchers(){return{min:["setNextPrevMonthDates"],max:["setNextPrevMonthDates"],activeDate:["setNextPrevMonthDates"]}}};A.style=N;export{O as calcite_date_picker_day,H as calcite_date_picker_month,A as calcite_date_picker_month_header};
//# sourceMappingURL=p-6ffe43ba.entry.js.map