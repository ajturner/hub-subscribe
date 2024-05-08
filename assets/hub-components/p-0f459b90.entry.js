import{r as t,h as s,H as i,a as e}from"./p-d4ba4c14.js";import{C as o,I as r}from"./p-c29c8d33.js";import{i as a}from"./p-be5c5009.js";import{S as h}from"./p-d9f314b6.js";import{g as n}from"./p-4ddcf682.js";import{A as c}from"./p-c5919bc3.js";import{a as l}from"./p-cea8413b.js";import{c as u,m as p}from"./p-b728aff4.js";import"./p-2acb70a6.js";import"./p-796574a4.js";import"./p-b295a5ae.js";import"./p-8e7f4c22.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-dcdf7b57.js";import"./p-008d72ef.js";import"./p-14a66e4a.js";import"./p-6d4e51c6.js";import"./p-24ecdf64.js";import"./p-903ef8af.js";import"./p-ad325ed1.js";var d;!function(t){t.dynamic="dynamic",t.manual="manual"}(d||(d={}));const g=class{constructor(s){t(this,s),this.context=void 0,this.access=[],this.catalogs=[],this.categories=[],this.groups=[],this.ids=[],this.limit=10,this.orgid=void 0,this.portal="https://www.arcgis.com",this.sort=void 0,this.tags=[],this.types=[],this.mode=d.dynamic,this.newTab=!1,this.cardTitleTag="h4",this.corners=o.square,this.imageType=void 0,this.lazy=!0,this.showEmptyState=!0,this.shadow=void 0,this.showLinkButton=!1,this.linkButtonText=void 0,this.linkButtonStyle=void 0,this.linkButtonBackgroundColor=void 0,this.linkButtonBackgroundHoverColor=void 0,this.linkButtonTextColor=void 0,this.shareable=!1,this.shareableByValue=!1,this.shareableByReference=!1,this.shareableOnHover=!1,this.baseUrl=void 0,this.catalogData=void 0,this.hasResults=!1}get _limit(){const t=this._getArrayProp("ids");return this._isManualMode?t.length:this.limit}get _linkButtonStyle(){return{primary:"solid",default:"outline"}[this.linkButtonStyle]}get _linkButtonText(){return this.linkButtonText||this.intl.t("linkButtonDefaultText")}get _imageType(){return{Thumbnails:r.thumbnail,Icons:r.icon}[this.imageType]||r.thumbnail}get _isManualMode(){return this.mode===d.manual}setButtonStyles(t,s,i){i={linkButtonBackgroundColor:"--calcite-ui-brand",linkButtonBackgroundHoverColor:"--calcite-ui-brand-hover",linkButtonTextColor:"--calcite-ui-text-inverse"}[i],t?this.element.style.setProperty(i,t):this.element.style.removeProperty(i)}onResultsChange(t){this.hasResults=t.detail.length>0}async componentWillLoad(){if(this.intl=await a.loadIntlForComponent(this.element),this.setButtonStyles(this.linkButtonBackgroundColor,void 0,"linkButtonBackgroundColor"),this.setButtonStyles(this.linkButtonBackgroundHoverColor,void 0,"linkButtonBackgroundHoverColor"),this.setButtonStyles(this.linkButtonTextColor,void 0,"linkButtonTextColor"),!this.context&&this.portal){const t=await c.create({portalUrl:this.portal});this.context=t.context}return this._fetchCatalogData()}async _fetchCatalogData(){const t=this._getArrayProp("catalogs");if(t.length&&this.mode===d.dynamic){const{context:{session:s,sharingApiUrl:i}}=this,e={authentication:s,portal:i},o=await Promise.all(t.map((t=>l(t,e))));this.catalogData=o.reduce(((t,s)=>{s.catalog.hasOwnProperty("groups")&&(s.catalog.group=s.catalog.groups,delete s.catalog.groups);const i={predicates:[s.catalog],operation:"AND"};return[...t,i]}),[])}else this.catalogData=void 0}_getArrayProps(){return["access","catalogs","categories","groups","ids","tags","types"].reduce(((t,s)=>{const i=this._getArrayProp(s);return t[s]=i,t}),{})}_getArrayProp(t){let s=this[t];return s&&!Array.isArray(s)&&(s=s.split(",").map((t=>t.trim())).filter((t=>!!t))),[...s]}async getState(){const{element:t}=this,s=await n(t),i=this._getArrayProps();return Object.assign(Object.assign(Object.assign({},s),i),{"base-url":this.baseUrl})}get typeFilters(){const t=this._getArrayProp("types");if(!this._isManualMode&&t.length)return{operation:"OR",predicates:t.map((t=>("pageForCurrentSite"===t&&(t="page"),{type:`$${t.toLowerCase()}`})))}}get scope(){const{catalogData:t,orgid:s,typeFilters:i}=this,{access:e,categories:o,groups:r,ids:a,tags:h}=this._getArrayProps();let n=[];!this._isManualMode&&t&&(n=[...n,...u(t)]);const c={operation:"AND",predicates:[]},l=t=>t.reduce(((t,s)=>!t&&s.predicates.reduce(((t,s)=>!t&&s.hasOwnProperty("group")),!1)),!1);return this._isManualMode?c.predicates.push({id:a}):(o.length&&c.predicates.push({categories:o}),e.length&&(e.includes("private")&&e.push("shared"),c.predicates.push({access:e})),r.length&&(l(n)?n.forEach((t=>{t.predicates.forEach((t=>{t.hasOwnProperty("group")&&(t.group=[...t.group,...r])}))})):c.predicates.push({group:r})),this._isManualMode||!s||r.length||l(n)||c.predicates.push({orgid:s}),!this._isManualMode&&h.length&&c.predicates.push({tags:h})),c.predicates.length&&(n=p(c,n)),n=p(i,n),{targetEntity:"item",filters:n}}get sortDirection(){return"title"===this.sort?"asc":"desc"}get collection(){const{scope:t,sort:s,sortDirection:i}=this,e={include:[],key:"default",label:"Default",scope:t,sortDirection:i,sortField:s,targetEntity:"item"};return JSON.stringify(e)==JSON.stringify(this._oldCollection)?this._oldCollection:(this._oldCollection=u(e),e)}get shouldQuery(){const{catalogs:t,groups:s,types:i}=this._getArrayProps();return!!(this._isManualMode||i.length||s.length||t.length)}_renderGallery(){if(this.shouldQuery){const t=this._getArrayProp("ids"),i=this._isManualMode?t:void 0,e=this.collection.include&&this.collection.include.join("|");return s("arcgis-hub-gallery",{cardTitleTag:this.cardTitleTag,clickableCards:!0,context:this.context,corners:this.corners,imageType:this._imageType,include:e,layout:"grid-filled",lazy:this.lazy,limit:this._limit,linkButtonStyle:this._linkButtonStyle,linkButtonText:this._linkButtonText,linkTarget:"siteRelative",newTab:this.newTab,query:this.collection.scope,shadow:this.shadow,showAdditionalInfo:!1,showBadges:!1,showEmptyState:this.showEmptyState,showLinkButton:this.showLinkButton,showOwner:!1,showThumbnail:!0,showType:!1,sortByIds:i,sortField:this.sort,sortOrder:this.sortDirection})}if(this.showEmptyState)return s("arcgis-hub-empty-state",null)}render(){return s(i,{"data-element":"gallery-card"},s(h,{context:this,showShareUi:this.hasResults||this.showEmptyState},this._renderGallery()))}static get assetsDirs(){return["locales"]}get element(){return e(this)}static get watchers(){return{linkButtonBackgroundColor:["setButtonStyles"],linkButtonBackgroundHoverColor:["setButtonStyles"],linkButtonTextColor:["setButtonStyles"],catalogs:["_fetchCatalogData"]}}};g.style=":host{display:block}arcgis-hub-gallery{--hub-text-decoration:none;text-align:center;--calcite-ui-text-link:var(--calcite-ui-text-2)}";export{g as arcgis_hub_gallery_card}