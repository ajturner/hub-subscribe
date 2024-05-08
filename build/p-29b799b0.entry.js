import{r as t,c as e,h as i,g as s}from"./p-c9ba45b0.js";import{n as a}from"./p-6ceba8f9.js";import{i as c,c as n,d as o}from"./p-909ebb2d.js";import{u as r,c as h,s as l,d}from"./p-3c05e9bf.js";import{a as u,p as f,i as b,b as p,g as m,c as k,d as w,e as v,h as g,j as y,m as x}from"./p-53f0fe6b.js";import{g as S}from"./p-8c547715.js";import{c as D,a as $,s as I}from"./p-774fbe58.js";import{d as A,g as M}from"./p-75a93a36.js";import"./p-1631d2a0.js";import"./p-ab6a0f88.js";import"./p-25d4ba13.js";import"./p-3f298b29.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const z={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonFractionalSecondDown:"button--fractionalSecond-down",buttonFractionalSecondUp:"button--fractionalSecond-up",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",fractionalSecond:"fractionalSecond",hour:"hour",input:"input",inputFocus:"inputFocus",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"};const C=":host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-color-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:var(--calcite-z-index-header);outline-offset:0}.time-picker .button:active{background-color:var(--calcite-color-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-color-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-2);z-index:var(--calcite-z-index-header)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;outline-offset:0}.time-picker .input.inputFocus,.time-picker .input:hover.inputFocus{box-shadow:inset 0 0 0 2px var(--calcite-color-brand);z-index:var(--calcite-z-index-header)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}:host([hidden]){display:none}[hidden]{display:none}";function F(t){return t.charAt(0).toUpperCase()+t.slice(1)}const j=class{constructor(i){t(this,i);this.calciteInternalTimePickerBlur=e(this,"calciteInternalTimePickerBlur",6);this.calciteInternalTimePickerChange=e(this,"calciteInternalTimePickerChange",6);this.calciteInternalTimePickerFocus=e(this,"calciteInternalTimePickerFocus",6);this.pointerActivated=false;this.decrementHour=()=>{const t=!this.hour?0:this.hour==="00"?23:parseInt(this.hour)-1;this.setValuePart("hour",t)};this.decrementMeridiem=()=>{const t=this.meridiem==="PM"?"AM":"PM";this.setValuePart("meridiem",t)};this.decrementMinuteOrSecond=t=>{let e;if(c(this[t])){const i=parseInt(this[t]);e=i===0?59:i-1}else{e=59}this.setValuePart(t,e)};this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")};this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")};this.focusHandler=t=>{if(this.pointerActivated){return}this.activeEl=t.currentTarget};this.fractionalSecondKeyDownHandler=t=>{const{key:e}=t;if(a.includes(e)){const t=A(this.step);const i=parseInt(this.fractionalSecond);const s=i.toString().length;let a;if(s>=t){a=e.padStart(t,"0")}else if(s<t){a=`${i}${e}`.padStart(t,"0")}this.setValuePart("fractionalSecond",parseFloat(`0.${a}`))}else{switch(e){case"Backspace":case"Delete":this.setValuePart("fractionalSecond",null);break;case"ArrowDown":t.preventDefault();this.nudgeFractionalSecond("down");break;case"ArrowUp":t.preventDefault();this.nudgeFractionalSecond("up");break;case" ":t.preventDefault();break}}};this.fractionalSecondDownClickHandler=()=>{this.activeEl=this.fractionalSecondEl;this.fractionalSecondEl.focus();this.nudgeFractionalSecond("down")};this.fractionalSecondUpClickHandler=()=>{this.activeEl=this.fractionalSecondEl;this.fractionalSecondEl.focus();this.nudgeFractionalSecond("up")};this.hourDownClickHandler=()=>{this.activeEl=this.hourEl;this.hourEl.focus();this.decrementHour()};this.hourKeyDownHandler=t=>{const{key:e}=t;if(a.includes(e)){const t=parseInt(e);let i;if(c(this.hour)){switch(this.hourCycle){case"12":i=this.hour==="01"&&t>=0&&t<=2?`1${t}`:t;break;case"24":if(this.hour==="01"){i=`1${t}`}else if(this.hour==="02"&&t>=0&&t<=3){i=`2${t}`}else{i=t}break}}else{i=t}this.setValuePart("hour",i)}else{switch(e){case"Backspace":case"Delete":this.setValuePart("hour",null);break;case"ArrowDown":t.preventDefault();this.decrementHour();break;case"ArrowUp":t.preventDefault();this.incrementHour();break;case" ":t.preventDefault();break}}};this.hourUpClickHandler=()=>{this.activeEl=this.hourEl;this.hourEl.focus();this.incrementHour()};this.incrementMeridiem=()=>{const t=this.meridiem==="AM"?"PM":"AM";this.setValuePart("meridiem",t)};this.incrementHour=()=>{const t=c(this.hour)?this.hour==="23"?0:parseInt(this.hour)+1:1;this.setValuePart("hour",t)};this.incrementMinuteOrSecond=t=>{const e=c(this[t])?this[t]==="59"?0:parseInt(this[t])+1:0;this.setValuePart(t,e)};this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")};this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")};this.inputClickHandler=t=>{this.activeEl=t.target};this.meridiemUpClickHandler=()=>{this.activeEl=this.meridiemEl;this.meridiemEl.focus();this.incrementMeridiem()};this.meridiemKeyDownHandler=t=>{switch(t.key){case"a":this.setValuePart("meridiem","AM");break;case"p":this.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":this.setValuePart("meridiem",null);break;case"ArrowUp":t.preventDefault();this.incrementMeridiem();break;case"ArrowDown":t.preventDefault();this.decrementMeridiem();break;case" ":t.preventDefault();break}};this.meridiemDownClickHandler=()=>{this.activeEl=this.meridiemEl;this.meridiemEl.focus();this.decrementMeridiem()};this.minuteDownClickHandler=()=>{this.activeEl=this.minuteEl;this.minuteEl.focus();this.decrementMinute()};this.minuteUpClickHandler=()=>{this.activeEl=this.minuteEl;this.minuteEl.focus();this.incrementMinute()};this.minuteKeyDownHandler=t=>{const{key:e}=t;if(a.includes(e)){const t=parseInt(e);let i;if(c(this.minute)&&this.minute.startsWith("0")){const e=parseInt(this.minute);i=e>x?t:`${e}${t}`}else{i=t}this.setValuePart("minute",i)}else{switch(e){case"Backspace":case"Delete":this.setValuePart("minute",null);break;case"ArrowDown":t.preventDefault();this.decrementMinute();break;case"ArrowUp":t.preventDefault();this.incrementMinute();break;case" ":t.preventDefault();break}}};this.nudgeFractionalSecond=t=>{const e=M(this.step);const i=A(this.step);const s=parseInt(this.fractionalSecond);const a=parseFloat(`0.${this.fractionalSecond}`);let c;let n;let o;let r;if(t==="up"){c=isNaN(s)?0:a+e;n=parseFloat(c.toFixed(i));o=M(n);r=n<1&&A(o)>0?u(o,i):"".padStart(i,"0")}if(t==="down"){c=isNaN(s)||s===0?1-e:a-e;n=parseFloat(c.toFixed(i));o=M(n);r=n<1&&A(o)>0&&Math.sign(o)===1?u(o,i):"".padStart(i,"0")}this.setValuePart("fractionalSecond",r)};this.sanitizeValue=t=>{const{hour:e,minute:i,second:s,fractionalSecond:a}=f(t);if(a){const t=this.sanitizeFractionalSecond(a);return`${e}:${i}:${s}.${t}`}return b(t)&&t};this.sanitizeFractionalSecond=t=>t&&A(this.step)!==t.length?parseFloat(`0.${t}`).toFixed(A(this.step)).replace("0.",""):t;this.secondKeyDownHandler=t=>{const{key:e}=t;if(a.includes(e)){const t=parseInt(e);let i;if(c(this.second)&&this.second.startsWith("0")){const e=parseInt(this.second);i=e>x?t:`${e}${t}`}else{i=t}this.setValuePart("second",i)}else{switch(e){case"Backspace":case"Delete":this.setValuePart("second",null);break;case"ArrowDown":t.preventDefault();this.decrementSecond();break;case"ArrowUp":t.preventDefault();this.incrementSecond();break;case" ":t.preventDefault();break}}};this.secondDownClickHandler=()=>{this.activeEl=this.secondEl;this.secondEl.focus();this.decrementSecond()};this.secondUpClickHandler=()=>{this.activeEl=this.secondEl;this.secondEl.focus();this.incrementSecond()};this.setHourEl=t=>this.hourEl=t;this.setMeridiemEl=t=>this.meridiemEl=t;this.setMinuteEl=t=>this.minuteEl=t;this.setSecondEl=t=>this.secondEl=t;this.setFractionalSecondEl=t=>this.fractionalSecondEl=t;this.setValue=t=>{if(b(t)){const{hour:e,minute:i,second:s,fractionalSecond:a}=f(t);const{effectiveLocale:c,numberingSystem:n}=this;const{localizedHour:o,localizedHourSuffix:r,localizedMinute:h,localizedMinuteSuffix:l,localizedSecond:d,localizedDecimalSeparator:u,localizedFractionalSecond:b,localizedSecondSuffix:w,localizedMeridiem:v}=p({value:t,locale:c,numberingSystem:n});this.hour=e;this.minute=i;this.second=s;this.fractionalSecond=this.sanitizeFractionalSecond(a);this.localizedHour=o;this.localizedHourSuffix=r;this.localizedMinute=h;this.localizedMinuteSuffix=l;this.localizedSecond=d;this.localizedDecimalSeparator=u;this.localizedFractionalSecond=b;this.localizedSecondSuffix=w;if(v){this.localizedMeridiem=v;this.meridiem=m(this.hour);const e=k({value:t,locale:c,numberingSystem:n});this.meridiemOrder=this.getMeridiemOrder(e)}}else{this.hour=null;this.fractionalSecond=null;this.localizedHour=null;this.localizedHourSuffix=w("hour",this.effectiveLocale,this.numberingSystem);this.localizedMeridiem=null;this.localizedMinute=null;this.localizedMinuteSuffix=w("minute",this.effectiveLocale,this.numberingSystem);this.localizedSecond=null;this.localizedDecimalSeparator=v(this.effectiveLocale,this.numberingSystem);this.localizedFractionalSecond=null;this.localizedSecondSuffix=w("second",this.effectiveLocale,this.numberingSystem);this.meridiem=null;this.minute=null;this.second=null;this.value=null}};this.setValuePart=(t,e)=>{var i,s;const{effectiveLocale:a,numberingSystem:n}=this;if(t==="meridiem"){this.meridiem=e;if(c(this.hour)){const t=parseInt(this.hour);switch(e){case"AM":if(t>=12){this.hour=u(t-12)}break;case"PM":if(t<12){this.hour=u(t+12)}break}this.localizedHour=g({value:this.hour,part:"hour",locale:a,numberingSystem:n})}}else if(t==="fractionalSecond"){const t=A(this.step);if(typeof e==="number"){this.fractionalSecond=e===0?"".padStart(t,"0"):u(e,t)}else{this.fractionalSecond=e}this.localizedFractionalSecond=g({value:this.fractionalSecond,part:"fractionalSecond",locale:a,numberingSystem:n})}else{this[t]=typeof e==="number"?u(e):e;this[`localized${F(t)}`]=g({value:this[t],part:t,locale:a,numberingSystem:n})}let o=false;let r;if(this.hour&&this.minute){r=`${this.hour}:${this.minute}`;if(this.showSecond){r=`${r}:${(i=this.second)!==null&&i!==void 0?i:"00"}`;if(this.showFractionalSecond&&this.fractionalSecond){r=`${r}.${this.fractionalSecond}`}}}else{r=null}if(this.value!==r){o=true}this.value=r;this.localizedMeridiem=this.value?((s=p({value:this.value,locale:a,numberingSystem:n}))===null||s===void 0?void 0:s.localizedMeridiem)||null:g({value:this.meridiem,part:"meridiem",locale:a,numberingSystem:n});if(o){this.calciteInternalTimePickerChange.emit()}};this.scale="m";this.step=60;this.numberingSystem=undefined;this.value=null;this.messages=undefined;this.messageOverrides=undefined;this.activeEl=undefined;this.effectiveLocale="";this.fractionalSecond=undefined;this.hour=undefined;this.hourCycle=undefined;this.localizedDecimalSeparator=".";this.localizedHour=undefined;this.localizedHourSuffix=undefined;this.localizedMeridiem=undefined;this.localizedFractionalSecond=undefined;this.localizedMinute=undefined;this.localizedMinuteSuffix=undefined;this.localizedSecond=undefined;this.localizedSecondSuffix=undefined;this.meridiem=undefined;this.minute=undefined;this.second=undefined;this.showFractionalSecond=undefined;this.showSecond=undefined;this.defaultMessages=undefined}stepChange(){this.toggleSecond()}valueWatcher(t){this.setValue(t)}onMessagesChange(){}effectiveLocaleWatcher(){this.updateLocale()}blurHandler(){this.activeEl=undefined;this.pointerActivated=false;this.calciteInternalTimePickerBlur.emit()}hostFocusHandler(){this.calciteInternalTimePickerFocus.emit()}keyDownHandler(t){this.pointerActivated=false;const{defaultPrevented:e,key:i}=t;if(e){return}switch(this.activeEl){case this.hourEl:if(i==="ArrowRight"){this.focusPart("minute");t.preventDefault()}break;case this.minuteEl:switch(i){case"ArrowLeft":this.focusPart("hour");t.preventDefault();break;case"ArrowRight":if(this.step!==60){this.focusPart("second");t.preventDefault()}else if(this.hourCycle==="12"){this.focusPart("meridiem");t.preventDefault()}break}break;case this.secondEl:switch(i){case"ArrowLeft":this.focusPart("minute");t.preventDefault();break;case"ArrowRight":if(this.showFractionalSecond){this.focusPart("fractionalSecond")}else if(this.hourCycle==="12"){this.focusPart("meridiem");t.preventDefault()}break}break;case this.fractionalSecondEl:switch(i){case"ArrowLeft":this.focusPart("second");t.preventDefault();break;case"ArrowRight":if(this.hourCycle==="12"){this.focusPart("meridiem");t.preventDefault()}break}break;case this.meridiemEl:switch(i){case"ArrowLeft":if(this.showFractionalSecond){this.focusPart("fractionalSecond")}else if(this.step!==60){this.focusPart("second");t.preventDefault()}else{this.focusPart("minute");t.preventDefault()}break}break}}pointerDownHandler(){this.pointerActivated=true}async setFocus(){var t;await D(this);(t=this.el)===null||t===void 0?void 0:t.focus()}async focusPart(t){var e;await D(this);(e=this[`${t||"hour"}El`])===null||e===void 0?void 0:e.focus()}toggleSecond(){this.showSecond=this.step<60;this.showFractionalSecond=A(this.step)>0}getMeridiemOrder(t){const e=this.effectiveLocale;const i=e==="ar"||e==="he";if(t&&!i){const e=t.findIndex((t=>t.value===this.localizedMeridiem));return e}return 0}updateLocale(){r(this,this.effectiveLocale);this.hourCycle=y(this.effectiveLocale,this.numberingSystem);this.localizedDecimalSeparator=v(this.effectiveLocale,this.numberingSystem);this.setValue(this.sanitizeValue(this.value))}connectedCallback(){n(this);this.updateLocale();h(this);this.toggleSecond();this.meridiemOrder=this.getMeridiemOrder(k({value:"0:00:00",locale:this.effectiveLocale,numberingSystem:this.numberingSystem}))}async componentWillLoad(){$(this);await l(this)}componentDidLoad(){I(this)}disconnectedCallback(){o(this);d(this)}render(){const t=c(this.hour);const e=S(this.scale);const s=c(this.minute);const a=c(this.second);const n=c(this.fractionalSecond);const o=this.hourCycle==="12";return i("div",{key:"a14cbeb1861fce5acdb6c06210c62d1a60e2c7e7",class:{[z.timePicker]:true,[z.showMeridiem]:o,[z.showSecond]:this.showSecond,[z[`scale-${this.scale}`]]:true},dir:"ltr"},i("div",{key:"a53db9fc5411776df398bdf4df8a2521cc16c938",class:z.column,role:"group"},i("span",{key:"117e2b1eca1cd8ee8b5f79a9cfc0b003e165967d","aria-label":this.messages.hourUp,class:{[z.button]:true,[z.buttonHourUp]:true,[z.buttonTopLeft]:true},onClick:this.hourUpClickHandler,role:"button"},i("calcite-icon",{key:"d1dfd48891fb26a56873ec597ec9822b2ae9cf5e",icon:"chevron-up",scale:e})),i("span",{key:"2f299ba278f86107a2ef4a34fbe8fb5d9ec05f51","aria-label":this.messages.hour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":t&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[z.input]:true,[z.hour]:true,[z.inputFocus]:this.activeEl&&this.activeEl===this.hourEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setHourEl},this.localizedHour||"--"),i("span",{key:"72bf35a4c3152282cdac87a9bb636dbed52652b4","aria-label":this.messages.hourDown,class:{[z.button]:true,[z.buttonHourDown]:true,[z.buttonBottomLeft]:true},onClick:this.hourDownClickHandler,role:"button"},i("calcite-icon",{key:"70f55cec6f85950079520f710f4bb1a76589bd90",icon:"chevron-down",scale:e}))),i("span",{key:"93641650ddbbe9a0c8753034e4b4418a4dd6f33b",class:z.delimiter},this.localizedHourSuffix),i("div",{key:"197cebdb724341cd763ed0a58f7c10090621fac0",class:z.column,role:"group"},i("span",{key:"10a3705875f07b57c4f494af7ef2d81581985242","aria-label":this.messages.minuteUp,class:{[z.button]:true,[z.buttonMinuteUp]:true},onClick:this.minuteUpClickHandler,role:"button"},i("calcite-icon",{key:"601b4929b942735034e37b634aac614a6640c209",icon:"chevron-up",scale:e})),i("span",{key:"7ef20135cd182c3794c1ce9f7309b09804903171","aria-label":this.messages.minute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":s&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[z.input]:true,[z.minute]:true,[z.inputFocus]:this.activeEl&&this.activeEl===this.minuteEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setMinuteEl},this.localizedMinute||"--"),i("span",{key:"5c9f8d832d0e1e06b8f637fceaac7209aab6d58d","aria-label":this.messages.minuteDown,class:{[z.button]:true,[z.buttonMinuteDown]:true},onClick:this.minuteDownClickHandler,role:"button"},i("calcite-icon",{key:"ca3672e19d9dc9b9c4105144c5232d84b7489711",icon:"chevron-down",scale:e}))),this.showSecond&&i("span",{key:"5f484d639db6288275e213ceb5f0690a2752f618",class:z.delimiter},this.localizedMinuteSuffix),this.showSecond&&i("div",{key:"d52bb3a7fdfa867bbccbe78d3279fb0ceb76a88b",class:z.column,role:"group"},i("span",{key:"28436193da89813ac7f018e9455241bf4e2d07d0","aria-label":this.messages.secondUp,class:{[z.button]:true,[z.buttonSecondUp]:true},onClick:this.secondUpClickHandler,role:"button"},i("calcite-icon",{key:"839450a3d5330ba189d2d9e7ba66cf2618e632f2",icon:"chevron-up",scale:e})),i("span",{key:"433feb864cc9f44ff7f6ffcaaef128f974a0634b","aria-label":this.messages.second,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":a&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[z.input]:true,[z.second]:true,[z.inputFocus]:this.activeEl&&this.activeEl===this.secondEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setSecondEl},this.localizedSecond||"--"),i("span",{key:"808c3402b58419dd68e34274e560b670fdd1d1f0","aria-label":this.messages.secondDown,class:{[z.button]:true,[z.buttonSecondDown]:true},onClick:this.secondDownClickHandler,role:"button"},i("calcite-icon",{key:"f09e4ac46e13232647e49f9038475f797e215497",icon:"chevron-down",scale:e}))),this.showFractionalSecond&&i("span",{key:"f1043c1c34a7c9296994ff2cb63fb5b8f00a14b8",class:z.delimiter},this.localizedDecimalSeparator),this.showFractionalSecond&&i("div",{key:"9c19c935c10e46b54c60c02e701952bd398c7e33",class:z.column,role:"group"},i("span",{key:"0f59c173041cfdf3820982e8d7dd8ed829a543ce","aria-label":this.messages.fractionalSecondUp,class:{[z.button]:true,[z.buttonFractionalSecondUp]:true},onClick:this.fractionalSecondUpClickHandler,role:"button"},i("calcite-icon",{key:"cd94cfecf478a52536c58252ead83ed41d65bb69",icon:"chevron-up",scale:e})),i("span",{key:"0d494152f7b11714127f811e41c33d77010b2bbb","aria-label":this.messages.fractionalSecond,"aria-valuemax":"999","aria-valuemin":"1","aria-valuenow":n&&parseInt(this.fractionalSecond)||"0","aria-valuetext":this.localizedFractionalSecond,class:{[z.input]:true,[z.fractionalSecond]:true,[z.inputFocus]:this.activeEl&&this.activeEl===this.fractionalSecondEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.fractionalSecondKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setFractionalSecondEl},this.localizedFractionalSecond||"--"),i("span",{key:"424ee367ab5ee7c6715d32cff9edbc47e6c964a6","aria-label":this.messages.fractionalSecondDown,class:{[z.button]:true,[z.buttonFractionalSecondDown]:true},onClick:this.fractionalSecondDownClickHandler,role:"button"},i("calcite-icon",{key:"91c71ca8891cb44a07a38cef3b144f170d1dc264",icon:"chevron-down",scale:e}))),this.localizedSecondSuffix&&i("span",{key:"43066eb805fff853f88210ee4f17e2fbf5f9fb97",class:z.delimiter},this.localizedSecondSuffix),o&&i("div",{key:"866b964e1e08c9b46d4e5a943a1471c767394ca9",class:{[z.column]:true,[z.meridiemStart]:this.meridiemOrder===0},role:"group"},i("span",{key:"2b0046366a6784fa6ff99be3a3c5370b6a5c01d9","aria-label":this.messages.meridiemUp,class:{[z.button]:true,[z.buttonMeridiemUp]:true,[z.buttonTopRight]:true},onClick:this.meridiemUpClickHandler,role:"button"},i("calcite-icon",{key:"0c5fae03afd08adc4a3065ce595195610d23f96d",icon:"chevron-up",scale:e})),i("span",{key:"148c4d7b777999d1fe2ca5937f16dfca61fcfd8c","aria-label":this.messages.meridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":this.meridiem==="PM"&&"2"||"1","aria-valuetext":this.meridiem,class:{[z.input]:true,[z.meridiem]:true,[z.inputFocus]:this.activeEl&&this.activeEl===this.meridiemEl},onClick:this.inputClickHandler,onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setMeridiemEl},this.localizedMeridiem||"--"),i("span",{key:"ee470559d0034555ba1f2a26199e54326d728b6a","aria-label":this.messages.meridiemDown,class:{[z.button]:true,[z.buttonMeridiemDown]:true,[z.buttonBottomRight]:true},onClick:this.meridiemDownClickHandler,role:"button"},i("calcite-icon",{key:"093408bb889d14238bfb2987db200e7d223addfa",icon:"chevron-down",scale:e}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{step:["stepChange"],value:["valueWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};j.style=C;export{j as calcite_time_picker};
//# sourceMappingURL=p-29b799b0.entry.js.map