import{r as t,h as s,H as i}from"./p-d4ba4c14.js";import{g as a}from"./p-81a9bee2.js";import"./p-859c5360.js";const r=["https://survey123.arcgis.com","https://survey123dev.arcgis.com","https://survey123qa.arcgis.com","https://insights.arcgis.com","https://insightsdev.arcgis.com","https://insightsqa.arcgis.com","https://urban.arcgis.com","https://urbandev.arcgis.com","https://urbanqa.arcgis.com","https://solutions.arcgis.com","https://services.arcgis.com","https://storymaps.arcgis.com","https://storymaps2dev.arcgis.com","https://storymaps2qa.arcgis.com","https://storymapsqa.arcgis.com","https://storymapsdev.arcgis.com","https://hub.arcgis.com","https://hubqa.arcgis.com","https://hubdev.arcgis.com","https://opendata.arcgis.com","https://opendataqa.arcgis.com","https://opendatadev.arcgis.com","https://experience.arcgis.com","https://experienceqa.arcgis.com","https://experiencedev.arcgis.com","https://livingatlas.arcgis.com","https://bao.arcgis.com","https://communityanalyst.arcgis.com","https://qaext.arcgis.com","https://devext.arcgis.com","https://www.arcgis.com"];function c(t){return new URL(t).origin}function e(t){const s=t.split("/");let i=s[2];return 0!==t.indexOf("http")&&(i=s[0]),i}function o(t){return e(t).endsWith("arcgis.com")}const h=class{constructor(s){t(this,s),this.src=void 0,this.iframeTitle=void 0,this.height=150,this.autoplay=!1,this.camera=!1,this.clipboardRead=!1,this.clipboardWrite=!1,this.displayCapture=!1,this.fullscreen=!1,this.geolocation=!1,this.microphone=!1}get _context(){return a()}get _allow(){const t=[];try{const s=new URL(this.src).origin;this.autoplay&&t.push(`autoplay ${s};`),this.camera&&t.push(`camera ${s};`),this.clipboardRead&&t.push(`clipboard-read ${s};`),this.clipboardWrite&&t.push(`clipboard-write ${s};`),this.displayCapture&&t.push(`display-capture ${s};`),this.fullscreen&&t.push(`fullscreen ${s};`),this.geolocation&&t.push(`geolocation ${s};`),this.microphone&&t.push(`microphone ${s};`)}catch(t){console.warn(t)}return t.join(" ")}get _iframeSrc(){let t=this.src;this.src||(t=void 0);try{new URL(this.src)}catch(s){t=void 0}return t}renderIframe(){var t,i;const a=function(t,s,i,a){let h=t;if(a){h=t=function(t,s){let i=t;if(o(t)&&o(s)&&function(t){let s=!0;const i=e(t);return["survey123.","survey123dev.","survey123qa.","insights.","insightsdev.","insightsqa.","urban.","urbandev.","urbanqa.","solutions.","services.","storymaps.","storymaps2dev.","storymaps2qa.","storymapsqa.","storymapsdev.","hub.arcgis.com","hubqa.arcgis.com","hubdev.arcgis.com","opendata.arcgis.com","opendataqa.arcgis.com","opendatadev.arcgis.com","experience.","experienceqa.","experiencedev.","livingatlas.","bao.","communityanalyst."].forEach((t=>{i.includes(t)&&(s=!1)})),s&&["embedGallery.html"].forEach((i=>{t.includes(i)&&(s=!1)})),s}(t)){const a=t.split("arcgis.com")[0];i=t.replace(`${a}arcgis.com`,s)}return i}(t,c(s));const n=[c(s),...r].map((t=>t.toLowerCase())),m=c(t);n.includes(m.toLowerCase())&&(h=function(t,s,i){const a=new URL(t);return a.searchParams.set("arcgis-auth-origin",s),a.searchParams.set("arcgis-auth-portal",i),a.toString()}(h,i,a.portal),a.disablePostMessageAuth(),a.enablePostMessageAuth(n))}return h}(this._iframeSrc,null===(t=this._context)||void 0===t?void 0:t.portalUrl,window.location.origin,null===(i=this._context)||void 0===i?void 0:i.session);return this.src&&s("iframe",{allow:this._allow,"data-src":a,height:this.height,src:a,title:this.iframeTitle})}render(){return s(i,{"data-element":"embed"},this.renderIframe())}};h.style=":host{display:flex}iframe{border:none;width:100%}";export{h as arcgis_hub_embed}