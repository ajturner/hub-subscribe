import{r as t,h as e,H as s,a as i}from"./p-d4ba4c14.js";import{i as r}from"./p-be5c5009.js";import{C as a,I as o,D as c}from"./p-c29c8d33.js";import{b as n}from"./p-fd260f2d.js";import{g as h,c as m}from"./p-81a9bee2.js";import{a as d,L as l}from"./p-008d72ef.js";import{j as p}from"./p-cea8413b.js";import{g as u}from"./p-796574a4.js";import{a as g}from"./p-16a95e5b.js";import"./p-859c5360.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-dcdf7b57.js";import"./p-ad325ed1.js";const f=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];d.setLogLevel(l.info);const b=["jpg","jpeg","gif","png"],j={year:"2-digit",month:"numeric",day:"numeric"},y=class{constructor(e){t(this,e),this._context=h(),this.itemId=void 0,this.selectable=void 0,this.layout="grid",this.resources=[],n(this,"renderImageResource")}connectedCallback(){m(this)}disconnectedCallback(){this.disconnectContext()}getImageUrl(t){var e;const s=null===(e=this._context)||void 0===e?void 0:e.sharingApiUrl;return s?`${s}/content/items/${this.itemId}/resources/${t}`:void 0}parseCreatedDate(t){return this.intl.formatDate(t,j)}async fetchResources(){var t;if(this.itemId){this.resources=[];try{const e=null===(t=this._context)||void 0===t?void 0:t.sharingApiUrl,s=await p(this.itemId,{portal:e});this.resources=s.resources}catch(t){const e=u(t,"message");d.error(e)}}}async handleCardAction(t){var e,s;if(t.stopPropagation(),"delete-action"===t.detail.action&&(null===(e=this._context)||void 0===e?void 0:e.session)){const e=t.detail.model.id;try{await g({authentication:null===(s=this._context)||void 0===s?void 0:s.session,id:this.itemId,resource:e}),this.fetchResources()}catch(t){const e=u(t,"message");d.error(e)}}}async componentWillLoad(){return this.intl=await r.loadIntlForComponent(this.element),this.fetchResources()}get imageResources(){return this.resources.filter((t=>{const e=t.resource.split(".")[1];return b.includes(e)}))}getPopoverInfo(t,e,s){return e=this.parseCreatedDate(e),`size:${t=function(t,e={}){let s;s=0===t?f.indexOf(e.unit||"KB"):e.unit?f.indexOf(e.unit):Math.min(Math.floor(Math.log10(t)/3),f.length-1);const i=Number.isInteger(e.round)?e.round:2,r=Math.pow(10,i);return t/=Math.pow(1e3,s),(t=Math.round(t*r)/r).toLocaleString(e.locale)+" "+f[s]}(t)}|dateCreated:${e}|resourceName:${s}`}renderImageResource(t){const s=`|delete-action:trash:${this.intl.t("deleteFile")}`,i=this.getImageUrl(t.resource);return e("arcgis-hub-card",{actionLinks:s,"additional-info":this.getPopoverInfo(t.size,t.created,t.resource),corners:a.round,family:"image",identifier:t.resource,imageType:o.thumbnail,layout:"grid"===this.layout?"card":"row",lazy:!0,selectable:this.selectable,shadow:c.medium,showOwner:!1,showThumbnail:!0,thumbnailUrl:i,type:"Image"})}render(){return e(s,null,this.imageResources.map(this.renderImageResource))}static get assetsDirs(){return["locales"]}get element(){return i(this)}static get watchers(){return{itemId:["fetchResources"],_context:["fetchResources"]}}};y.style=":host([layout='grid']){display:grid;gap:0.5rem;grid-template-columns:repeat(auto-fill, minmax(max(400px, (100% - (4 - 1) * 0.5rem) / 4), 1fr))}:host([layout='list']) arcgis-hub-card{margin-bottom:0.5rem}";export{y as arcgis_hub_media_gallery}