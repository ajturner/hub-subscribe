import{r as i,h as e,H as a,c as o}from"./p-d4ba4c14.js";import{b as t}from"./p-fd260f2d.js";const n=class{constructor(e){i(this,e),this.open=!1}render(){return e(a,{class:{open:this.open},"data-element":"nonmodal"},e("div",{class:"container"},e("div",{class:"nonmodal"},e("div",{class:"header"},e("header",{class:"title"},e("slot",{name:"header"}))),e("div",{class:"content"},e("slot",{name:"content"})),e("div",{class:"footer"},e("span",{class:"back"},e("slot",{name:"back"})),e("span",{class:"secondary"},e("slot",{name:"secondary"})),e("span",{class:"primary"},e("slot",{name:"primary"}))))))}};n.style=':host{visibility:hidden;position:fixed;bottom:1.5rem;right:1.5rem;z-index:10;display:block;opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),\n              opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--nonmodal-padding-block:0.75rem;--nonmodal-padding-inline:1rem}:host(.open){visibility:visible;opacity:1;transition-delay:0ms}.nonmodal{display:flex;flex-direction:column;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:0.25rem;max-inline-size:45rem}.container{display:flex;align-items:center;justify-content:center;overflow-y:hidden;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.header{display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);border-block-end-width:1px;border-start-end-radius:0.25rem;border-start-start-radius:0.25rem;flex:0 0 auto;max-inline-size:100%;min-inline-size:0px}.title{display:flex;flex:1 1 auto;align-items:center;padding-block:var(--nonmodal-padding-block);padding-inline:var(--nonmodal-padding-inline)}slot[name="header"]::slotted(*),::slotted([slot="header"]){margin:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;color:var(--calcite-ui-text-1)}.content{display:block;overflow:auto;background-color:var(--calcite-ui-foreground-1);block-size:100%;max-block-size:100%;padding:var(--nonmodal-padding-block)}.footer{box-sizing:border-box;display:flex;justify-content:space-between;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);border-block-start-width:1px;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;flex:0 0 auto;inline-size:100%;margin-block-start:auto;padding-block:var(--nonmodal-padding-block);padding-inline:var(--nonmodal-padding-inline);z-index:var(--calcite-app-z-index-header)}.back{display:block;margin-inline-end:auto}.secondary{display:block;margin-inline:0.25rem}slot[name="primary"]{display:block}@media (max-width: 576px){:host{bottom:0px}:host{left:0px}:host{right:0px}.footer{flex-direction:column}.back,.secondary{margin:0px}.back,.secondary{margin-block-end:0.25rem}}';const r=class{constructor(e){i(this,e),this.config={},this.intl=void 0}renderConsentMessage(){var i,a,o,t;const n=null===(o=null===(a=null===(i=this.config)||void 0===i?void 0:i.disclaimer)||void 0===a?void 0:a[0])||void 0===o?void 0:o.text,r=null===(t=this.config)||void 0===t?void 0:t.policyURL,s=[e("div",{key:"esri-privacy-policy"},this.intl.t("privacyPolicy")),e("calcite-link",{href:"https://www.esri.com/privacy",key:"esri-privacy-link"},"www.esri.com/privacy")];return n&&s.push(e("div",null,n)),r&&s.push(e("calcite-link",{href:r},r)),s}render(){return e(a,null,this.renderConsentMessage())}};r.style=":host{display:flex;flex-direction:column;gap:0.5rem}";const s=class{constructor(e){i(this,e),this.hubInternalUserPrivacySettingsChanged=o(this,"hubInternalUserPrivacySettingsChanged",7),this.userSettings={accepted:!1,performance:!1,targeting:!1,functional:!1,id:"",timestamp:0},this.intl=void 0,this.esriTrackingEnabled=!1,this.thirdPartyTrackingEnabled=!1,t(this,"handleSettingsChange")}handleSettingsChange(i){const{value:e,checked:a}=i.target,o={};e.split(",").forEach((i=>{o[i]=a})),this.hubInternalUserPrivacySettingsChanged.emit(Object.assign(Object.assign({},this.userSettings),o))}render(){return e("form",null,e("calcite-accordion",null,e("calcite-accordion-item",{heading:this.intl.t("necessary.heading")},e("p",null,this.intl.t("necessary.helpText"))),this.esriTrackingEnabled&&e("calcite-accordion-item",{heading:this.intl.t("anonymous.heading")},e("calcite-switch",{checked:this.userSettings.performance,label:this.intl.t("anonymous.heading"),onCalciteSwitchChange:this.handleSettingsChange,slot:"actions-end",value:"performance"}),e("p",null,this.intl.t("anonymous.helpText"))),this.thirdPartyTrackingEnabled&&e("calcite-accordion-item",{heading:this.intl.t("thirdParty.heading")},e("calcite-switch",{checked:this.userSettings.targeting,label:this.intl.t("thirdParty.heading"),onCalciteSwitchChange:this.handleSettingsChange,slot:"actions-end",value:"targeting,functional"}),e("p",null,this.intl.t("anonymous.helpText")))))}};s.style=":host{margin-top:1.5rem;display:block}calcite-switch{margin-inline-end:0.5rem}";export{n as arcgis_hub_nonmodal,r as arcgis_privacy_consent,s as arcgis_privacy_settings}