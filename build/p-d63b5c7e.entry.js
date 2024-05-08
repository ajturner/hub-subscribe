import{r as t,c as i,h as s,H as e,g as h}from"./p-c9ba45b0.js";import{g as a,c as n,e as r,f as c,s as o}from"./p-5a3eaf44.js";import{c as l,a as d,s as f}from"./p-774fbe58.js";import{c as u,d as D,n as p,b as m}from"./p-909ebb2d.js";import{c as g,d as v,s as b,u as x}from"./p-3c05e9bf.js";import{g as y,a as w}from"./p-0ae05c01.js";import"./p-1631d2a0.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-6ceba8f9.js";import"./p-3f298b29.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const A=2;const C={dateStyle:"full"};const k=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:inline-block;inline-size:auto;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);vertical-align:top}:host([scale=s]){inline-size:234px;min-inline-size:216px;max-inline-size:380px}:host([scale=m]){inline-size:304px;min-inline-size:272px;max-inline-size:480px}:host([scale=l]){inline-size:370px;min-inline-size:320px;max-inline-size:600px}:host([hidden]){display:none}[hidden]{display:none}";const z=class{constructor(s){t(this,s);this.calciteDatePickerChange=i(this,"calciteDatePickerChange",6);this.calciteDatePickerRangeChange=i(this,"calciteDatePickerRangeChange",6);this.keyDownHandler=t=>{if(t.key==="Escape"){this.resetActiveDates()}};this.monthHeaderSelectChange=t=>{const i=new Date(t.detail);if(!this.range){this.activeDate=i}else{if(this.activeRange==="end"){this.activeEndDate=i}else{this.activeStartDate=i}this.mostRecentRangeValue=i}};this.monthActiveDateChange=t=>{const i=new Date(t.detail);if(!this.range){this.activeDate=i}else{if(this.activeRange==="end"){this.activeEndDate=i}else{this.activeStartDate=i}this.mostRecentRangeValue=i}};this.monthHoverChange=t=>{if(!this.range){this.hoverRange=undefined;return}const{valueAsDate:i}=this;const s=Array.isArray(i)&&i[0];const e=Array.isArray(i)&&i[1];const h=new Date(t.detail);this.hoverRange={focused:this.activeRange||"start",start:s,end:e};if(this.proximitySelectionDisabled){if(e&&s||!e&&h>=s){this.hoverRange.focused="end";this.hoverRange.end=h}else if(!e&&h<s){this.hoverRange={focused:"start",start:h,end:s}}else{this.hoverRange=undefined}}else{if(s&&e){const t=a(h,s);const i=a(h,e);if(i>0){this.hoverRange.end=h;this.hoverRange.focused="end"}else if(t<0){this.hoverRange.start=h;this.hoverRange.focused="start"}else if(t>i){this.hoverRange.start=h;this.hoverRange.focused="start"}else{this.hoverRange.end=h;this.hoverRange.focused="end"}}else{if(s){if(h<s){this.hoverRange={focused:"start",start:h,end:s}}else{this.hoverRange.end=h;this.hoverRange.focused="end"}}}}t.stopPropagation()};this.monthMouseOutChange=()=>{if(this.hoverRange){this.hoverRange=undefined}};this.resetActiveDates=()=>{const{valueAsDate:t}=this;if(!Array.isArray(t)&&t&&t!==this.activeDate){this.activeDate=new Date(t)}if(Array.isArray(t)){if(t[0]&&t[0]!==this.activeStartDate){this.activeStartDate=new Date(t[0])}if(t[1]&&t[1]!==this.activeEndDate){this.activeEndDate=new Date(t[1])}}};this.monthDateChange=t=>{const i=new Date(t.detail);const s=n(i);if(!this.range&&s===n(this.valueAsDate)){return}if(!this.range){this.value=s||"";this.valueAsDate=i||null;this.activeDate=i||null;this.calciteDatePickerChange.emit();return}const e=this.getStartDate();const h=this.getEndDate();if(!e||!h&&i<e){if(e){this.setEndDate(new Date(e))}if(this.activeRange=="end"){this.setEndDate(i)}else{this.setStartDate(i)}}else if(!h){this.setEndDate(i)}else{if(this.proximitySelectionDisabled){this.setStartDate(i);this.setEndDate(null)}else{if(this.activeRange){if(this.activeRange=="end"){this.setEndDate(i)}else{this.setStartDate(i)}}else{const t=a(i,e);const s=a(i,h);if(s===0||t<0){this.setStartDate(i)}else if(t===0||s<0){this.setEndDate(i)}else if(t<s){this.setStartDate(i)}else{this.setEndDate(i)}}}}this.calciteDatePickerChange.emit()};this.activeDate=undefined;this.activeRange=undefined;this.value=undefined;this.headingLevel=undefined;this.valueAsDate=undefined;this.minAsDate=undefined;this.maxAsDate=undefined;this.min=undefined;this.max=undefined;this.numberingSystem=undefined;this.scale="m";this.range=false;this.proximitySelectionDisabled=false;this.messageOverrides=undefined;this.messages=undefined;this.activeEndDate=undefined;this.activeStartDate=undefined;this.dateTimeFormat=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.endAsDate=undefined;this.hoverRange=undefined;this.localeData=undefined;this.mostRecentRangeValue=undefined;this.startAsDate=undefined}activeDateWatcher(t){if(this.activeRange==="end"){this.activeEndDate=t}}valueAsDateWatcher(t){if(this.range&&Array.isArray(t)){const{activeStartDate:i,activeEndDate:s}=this;const e=t[0];const h=t[1];this.activeStartDate=i!==e&&e;this.activeEndDate=s!==h&&h}else if(t&&t!==this.activeDate){this.activeDate=t}}onMinChanged(t){if(t){this.minAsDate=r(t)}}onMaxChanged(t){if(t){this.maxAsDate=r(t)}}onMessagesChange(){}async setFocus(){await l(this);this.el.focus()}async reset(){this.resetActiveDates();this.mostRecentRangeValue=undefined}connectedCallback(){u(this);g(this);if(Array.isArray(this.value)){this.valueAsDate=y(this.value)}else if(this.value){this.valueAsDate=r(this.value)}if(this.min){this.minAsDate=r(this.min)}if(this.max){this.maxAsDate=r(this.max)}}disconnectedCallback(){D(this);v(this)}async componentWillLoad(){d(this);await this.loadLocaleData();this.onMinChanged(this.min);this.onMaxChanged(this.max);await b(this)}componentDidLoad(){f(this)}render(){var t;const i=c(this.range&&Array.isArray(this.valueAsDate)?this.valueAsDate[0]:this.valueAsDate,this.minAsDate,this.maxAsDate);let h=this.getActiveDate(i,this.minAsDate,this.maxAsDate);const a=this.range&&Array.isArray(this.valueAsDate)?c(this.valueAsDate[1],this.minAsDate,this.maxAsDate):null;const n=this.getActiveEndDate(a,this.minAsDate,this.maxAsDate);if((this.activeRange==="end"||((t=this.hoverRange)===null||t===void 0?void 0:t.focused)==="end"&&(!this.proximitySelectionDisabled||a))&&n){h=n}if(this.range&&this.mostRecentRangeValue){h=this.mostRecentRangeValue}const r=this.range&&this.activeRange?this.activeRange==="start"?this.minAsDate:i||this.minAsDate:this.minAsDate;const o=this.range&&this.activeRange?this.activeRange==="start"?a||this.maxAsDate:this.maxAsDate:this.maxAsDate;return s(e,{key:"af94b669a3045e53c100cb5850381e9f77423133",onBlur:this.resetActiveDates,onKeyDown:this.keyDownHandler},this.renderCalendar(h,o,r,i,a))}effectiveLocaleChange(){x(this,this.effectiveLocale)}valueHandler(t){if(Array.isArray(t)){this.valueAsDate=y(t)}else if(t){this.valueAsDate=r(t)}}async loadLocaleData(){p.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:false};this.localeData=await w(this.effectiveLocale);this.dateTimeFormat=m(this.effectiveLocale,C)}renderCalendar(t,i,e,h,a){return this.localeData&&[s("calcite-date-picker-month-header",{activeDate:t,headingLevel:this.headingLevel||A,localeData:this.localeData,max:i,messages:this.messages,min:e,onCalciteInternalDatePickerSelect:this.monthHeaderSelectChange,scale:this.scale,selectedDate:this.activeRange==="end"?a:h||new Date}),s("calcite-date-picker-month",{activeDate:t,dateTimeFormat:this.dateTimeFormat,endDate:this.range?a:undefined,hoverRange:this.hoverRange,localeData:this.localeData,max:i,min:e,onCalciteInternalDatePickerActiveDateChange:this.monthActiveDateChange,onCalciteInternalDatePickerHover:this.monthHoverChange,onCalciteInternalDatePickerMouseOut:this.monthMouseOutChange,onCalciteInternalDatePickerSelect:this.monthDateChange,scale:this.scale,selectedDate:this.activeRange==="end"?a:h,startDate:this.range?h:undefined})]}getEndDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||undefined}setEndDate(t){const i=this.getStartDate();const s=t?o(t):t;this.value=[n(i),n(t)];this.valueAsDate=[i,t];this.mostRecentRangeValue=s;this.calciteDatePickerRangeChange.emit();this.activeEndDate=t||null}getStartDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[0]}setStartDate(t){const i=this.getEndDate();this.value=[n(t),n(i)];this.valueAsDate=[t,i];this.mostRecentRangeValue=t;this.calciteDatePickerRangeChange.emit();this.activeStartDate=t||null}getActiveDate(t,i,s){return c(this.activeDate,i,s)||t||c(new Date,i,s)}getActiveEndDate(t,i,s){return c(this.activeEndDate,i,s)||t||c(new Date,i,s)}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return h(this)}static get watchers(){return{activeDate:["activeDateWatcher"],valueAsDate:["valueAsDateWatcher"],min:["onMinChanged"],max:["onMaxChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange","loadLocaleData"],value:["valueHandler"]}}};z.style=k;export{z as calcite_date_picker};
//# sourceMappingURL=p-d63b5c7e.entry.js.map