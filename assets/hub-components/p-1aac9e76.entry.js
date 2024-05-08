import{r as e,h as i,H as t,a as s}from"./p-d4ba4c14.js";import{i as r}from"./p-be5c5009.js";import{C as n}from"./p-c29c8d33.js";import a from"@arcgis/core/Graphic.js";import{b as c}from"./p-fd260f2d.js";import{s as o,S as l,d as h}from"./p-a5a61c3e.js";import{g as d}from"./p-81a9bee2.js";import{b as m}from"./p-d1b12a9c.js";import"@arcgis/core/geometry/geometryEngine.js";import"./p-859c5360.js";import"./p-796574a4.js";import"./p-dcdf7b57.js";const u=class{constructor(i){e(this,i),this.stats=[{cardTitle:"Completed Meetings",trailingText:"(Meetings)",value:6,textAlign:"center"},{cardTitle:"Remaining Meetings",trailingText:"(Meetings)",value:1,textAlign:"center"},{cardTitle:"Team Survey Responses",trailingText:"(Responses)",value:51,textAlign:"center"}],this.teams=[{name:"Planning Core Team",members:["Patric Roberts + 2 others"]},{name:"Outreach and Engagement Team",members:["Mary Crawley + 5 others"]},{name:"Review Board",members:["Joe DePietro + 1 other"]}],this.tags=["Road Work","Construction","Ward 5","Public Works","Planning","Transportation"],this.audience=[{thumbnail:"",name:"Marianne Lee"},{thumbnail:"",name:"Jess Stanley"},{thumbnail:"",name:"Ruthie Quinn"}],this.events=[{name:"November 2021 Final Design Virtual Public Meeting",description:"Online event",icon:"video"},{name:"Review Board meeting",description:"Online event",icon:"video"},{name:"Ground Breaking",description:"Florida Ave./New York Ave. Intersection",icon:"pin-tear"}],this.project=void 0,this.featuredContentCollection=void 0,this.hasFeaturedContent=!1,c(this,"handleFeaturedContentResultsChange")}get _context(){return d()}async componentWillLoad(){this.intl=await r.loadIntlForComponent(this.element)}get hasLocation(){return this.project.location&&"none"!==this.project.location.type}get extent(){return this.hasLocation?m(this.project.location.extent):void 0}get graphics(){const{geometries:e=[]}=this.project.location;return this.hasLocation?e.length?e.map((e=>new a({geometry:e,symbol:o[e.type](l.DEFAULT,h[e.type])}))):[{symbol:o.polygon(l.DEFAULT,h.polygon),geometry:Object.assign({type:"extent"},this.extent)}]:[]}renderTimeline(){const{timeline:e}=this.project.view;return i("arcgis-hub-timeline",{canCollapse:e.canCollapse,description:e.description,stages:e.stages,timelineTitle:e.title})}get featuredImageUrl(){var e,i;const t=(null===(e=this._context)||void 0===e?void 0:e.isAuthenticated)?`?token=${this._context.session.token}`:"";return((e,i="v")=>{if(!e)return e;const t=e.indexOf("?")>-1?"&":"?";return e+`${t}${i}=${(new Date).getTime()}`})(`${null===(i=this.project.view)||void 0===i?void 0:i.featuredImageUrl}${t}`)}renderEvents(e){return i("div",null,i("strong",null,e.name),i("div",{class:"flex-center entity-view-side-bar__upcoming-event"},i("calcite-icon",{icon:e.icon,scale:"l"}),i("div",null,e.description)))}handleFeaturedContentResultsChange(e){this.hasFeaturedContent=!!e.detail.length}renderFeaturedContent(){var e,t;const s={targetEntity:"item",filters:[{predicates:[{id:null===(e=this.project.view)||void 0===e?void 0:e.featuredContentIds}]}]};return i("div",null,this.hasFeaturedContent&&i("h2",null,this.intl.t("featuredContent")),i("arcgis-hub-gallery",{context:this._context,layout:"grid",limit:4,"link-target":"siteRelative",onArcgisHubGalleryResultsChange:this.handleFeaturedContentResultsChange,query:s,showEmptyState:!1,sortByIds:null===(t=this.project.view)||void 0===t?void 0:t.featuredContentIds}))}render(){var e,s,r,a;return i(t,{class:"entity-view"},i("div",{class:"entity-view-header"},i("arcgis-hub-content-hero",{extent:this.extent,graphics:this.graphics,"hero-title":this.project.name,showMap:null===(e=this.project.view)||void 0===e?void 0:e.showMap,thumbnailUrl:this.hasLocation&&(null===(s=this.project.view)||void 0===s?void 0:s.showMap)?null:this.project.thumbnailUrl})),i("div",{class:"entity-view-body entity-view-main"},this.project.summary&&i("div",{class:"entity-view-main__summary"},i("h2",null,this.intl.t("purpose")),i("p",null,this.project.summary)),this.project.description&&i("div",{class:"entity-view-main__description"},i("h2",null,this.intl.t("description")),i("p",null,this.project.description)),(null===(r=this.project.view)||void 0===r?void 0:r.featuredImageUrl)&&i("div",{class:"entity-view-main__featured-image"},i("arcgis-hub-image",{alt:(null===(a=this.project.view)||void 0===a?void 0:a.featuredImageAltText)||"",corners:n.round,src:this.featuredImageUrl})),this.renderFeaturedContent()),i("div",{class:"entity-view-body entity-view-side-bar"},i("div",{class:"entity-view-side-bar__project-status"},i("h2",null,this.intl.t("status.label")),i("calcite-chip",{icon:"complete"===this.project.status?"check":"",scale:"l",value:this.project.status},this.intl.t(`status.${this.project.status}`))),i("div",{class:"entity-view-main__timeline"},this.project.view.timeline&&this.renderTimeline()),i("div",{class:"entity-view-side-bar__metadata"},i("h2",null,this.intl.t("details")),i("arcgis-hub-entity-metadata",{context:this._context,entity:this.project,exclude:["owner"]}))))}static get assetsDirs(){return["locales"]}get element(){return s(this)}};u.style='.sc-arcgis-hub-project-view-h{display:grid;column-gap:4rem;grid-template-columns:2fr 1fr;grid-template-areas:"header header"\n    "main sideBar"}h2.sc-arcgis-hub-project-view{font-size:var(--calcite-font-size-3)}.flex-center.sc-arcgis-hub-project-view{display:flex;align-items:center}.entity-view-header.sc-arcgis-hub-project-view{grid-area:header;margin-bottom:1.5rem}.entity-view-body.sc-arcgis-hub-project-view{margin-top:1.5rem}.entity-view-body.sc-arcgis-hub-project-view>div.sc-arcgis-hub-project-view:not(:last-child){margin-bottom:2.5rem}calcite-icon.sc-arcgis-hub-project-view{margin-right:0.75rem}.entity-view-main.sc-arcgis-hub-project-view{grid-area:main}arcgis-hub-content-view.sc-arcgis-hub-project-view{flex-basis:33%}calcite-chip.sc-arcgis-hub-project-view{margin-right:0.5rem}.entity-view-side-bar.sc-arcgis-hub-project-view{grid-area:sideBar}.entity-view-side-bar__project-status.sc-arcgis-hub-project-view calcite-icon.sc-arcgis-hub-project-view,.entity-view-side-bar__project-status.sc-arcgis-hub-project-view h4.sc-arcgis-hub-project-view{color:green}.entity-view-side-bar__upcoming-event.sc-arcgis-hub-project-view{margin-top:0.5rem;margin-bottom:0.5rem}@media only screen and (max-width: 768px){.sc-arcgis-hub-project-view-h{display:block}.entity-view-body.sc-arcgis-hub-project-view{margin:0px}.entity-view-side-bar.sc-arcgis-hub-project-view{margin-top:2.5rem}}';export{u as arcgis_hub_project_view}