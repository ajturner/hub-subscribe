import{r as s,c as i,h as t,F as e,H as a,a as o}from"./p-d4ba4c14.js";import{i as n}from"./p-be5c5009.js";import{f as r,a as d}from"./p-953effcc.js";import{f as c}from"./p-4db6fd24.js";import{m as l}from"./p-1b73120f.js";import{S as h}from"./p-e3cddc63.js";import{C as u}from"./p-7b9982ce.js";import{C as p}from"./p-c29c8d33.js";import{b}from"./p-fd260f2d.js";import{C as g}from"./p-1fde1b24.js";import{g as m}from"./p-fbd5dcee.js";import{f as v}from"./p-c7306802.js";import{i as y}from"./p-6f931af6.js";import{S as f}from"./p-56b73d71.js";import{c as w}from"./p-57e484a6.js";import{g as _}from"./p-7202c430.js";import"./p-4a14259a.js";import"./p-796574a4.js";import"./p-adee2925.js";import"./p-c94c130f.js";import"./p-992b9d10.js";import"./p-d763eacf.js";import"./p-377e1b5e.js";import"./p-637ea136.js";import"./p-dcdf7b57.js";import"./p-ad325ed1.js";import"./p-9e418183.js";import"./p-5b420841.js";import"./p-3363f483.js";import"./p-87582fe0.js";import"./p-35a4fa90.js";import"./p-8ccaf06d.js";import"./p-9b205605.js";import"./p-b728aff4.js";import"./p-c8e0e01f.js";import"./p-59fd2498.js";import"./p-97274a47.js";import"./p-3904125b.js";import"./p-3f64a9d9.js";import"./p-a0deb8c6.js";import"./p-30a7cbb2.js";import"./p-90dc0f6f.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-6dcae6cd.js";import"./p-2acb70a6.js";import"./p-10274eb9.js";import"./p-69555c48.js";import"./p-cea8413b.js";import"./p-e43616ff.js";import"./p-895b662f.js";import"./p-bded806b.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-b295a5ae.js";import"./p-8e7f4c22.js";import"./p-df1dc3df.js";import"./p-75d6da59.js";var j=function(s,i,t,e){var a,o=arguments.length,n=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(s,i,t,e);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(n=(o<3?a(n):o>3?a(i,t,n):a(i,t))||n);return o>3&&n&&Object.defineProperty(i,t,n),n};const x=class{constructor(t){s(this,t),this.arcgisHubDiscussionsViewThread=i(this,"arcgisHubDiscussionsViewThread",7),this.arcgisAppIdentityStartSignIn=i(this,"arcgisAppIdentityStartSignIn",7),this.arcgisHubDiscussionsFeatureDeleted=i(this,"arcgisHubDiscussionsFeatureDeleted",7),this.arcgisHubDiscussionsFeature=i(this,"arcgisHubDiscussionsFeature",7),this.arcgisHubPostEditorReady=i(this,"arcgisHubPostEditorReady",7),this.arcgisHubGeometryFeatureSelect=i(this,"arcgisHubGeometryFeatureSelect",7),this.arcgisHubGeometryFeatureHover=i(this,"arcgisHubGeometryFeatureHover",7),this.arcgisHubGeometryDrawCreate=i(this,"arcgisHubGeometryDrawCreate",7),this.arcgisHubGeometryDrawTypeSelect=i(this,"arcgisHubGeometryDrawTypeSelect",7),this.arcgisHubGeometryDrawEdit=i(this,"arcgisHubGeometryDrawEdit",7),this.arcgisHubGeometryDrawEditCancel=i(this,"arcgisHubGeometryDrawEditCancel",7),this.arcgisHubGeometryDrawReset=i(this,"arcgisHubGeometryDrawReset",7),this.arcgisHubGeometrySelect=i(this,"arcgisHubGeometrySelect",7),this.arcgisHubGeometryDeselect=i(this,"arcgisHubGeometryDeselect",7),this.arcgisHubFeatureRemove=i(this,"arcgisHubFeatureRemove",7),this.arcgisHubGeometryClearAll=i(this,"arcgisHubGeometryClearAll",7),this.context=void 0,this.entity=void 0,this.entityId=void 0,this.entityType=void 0,this.parentId=void 0,this.postId=void 0,this.channelId=void 0,this.isHub=void 0,this.isMobile=void 0,this.layout="grid",this.unsavedFeatures=[],this.unsavedRelatedFeatures=[],this.unsavedExistingFeatures=[],this.hasMap=!1,this.allowedChannelIds=void 0,this.allowedLocations=void 0,this.displayFieldValid=void 0,this.displayFieldValue=void 0,this.displayFieldKey=void 0,this.intl=void 0,this.pending=!0,this.channel=void 0,this.channelGroups=void 0,this.discussion=void 0,this.blockedWords=void 0,this.defaultChannelId=void 0,this.postRefs={},this.listScrollTarget=void 0,this.threadScrollTarget=void 0,this.postListProps=void 0,this.threadProps=void 0,this.view="default",this.mapView=void 0,this.drawRef=void 0,b(this,"renderParent","handlePostReady","handleBackToList","handleBackToThread","handleThreadReady","handlePostListReady","handlePostListUpdated","handleAboutClicked","handleAboutBack","handleSignInClicked","handleMapViewReady")}componentWillLoad(){this.loadTranslations(),this.loadDependencies()}async loadTranslations(){this.intl=await n.loadIntlForComponent(this.element)}loadDependencies(){if(this.context)return this.pending=!0,this.fetchDependencies().then((s=>{Object.assign(this,s,{pending:!1})}))}resetMapView(){this.activeFeature=void 0,this.mapView=void 0}handleContextChanged(s,i){var t,e;(null===(t=null==s?void 0:s.currentUser)||void 0===t?void 0:t.username)!==(null===(e=null==i?void 0:i.currentUser)||void 0===e?void 0:e.username)&&this.loadDependencies()}handleAboutBack(){this.view="default"}handleSignInClicked(){this.arcgisAppIdentityStartSignIn.emit()}async handleMapViewReady(s){const{view:i}=s.detail;i.ui.components=[],await i.when(),this.mapView=i}fetchDependencies(){return this._fetchDependencies()}async _fetchDependencies(){var s;const{isHub:i,context:t,entity:e,entityId:a,entityType:o}=this,[n,l]=await Promise.all([r({isHub:i},t.hubRequestOptions),d({entity:e,entityId:a,entityType:o,discussionType:"board"},t.hubRequestOptions)]),h=await v(l.entity.id,t.hubRequestOptions);let u;return(null===(s=h.allowedChannelIds)||void 0===s?void 0:s.length)&&(u=await c({channelId:h.allowedChannelIds[0]},t.hubRequestOptions)),Object.assign(Object.assign(Object.assign(Object.assign({},n),l),h),u)}get isLoading(){const{intl:s,context:i,pending:t}=this;return!s||!i||t}get isOpenForSubmissions(){return Boolean(this.channel)&&y(this.entity)}get accessIcon(){const{intl:s,channel:i}=this;let t,e;return i.access===f.PRIVATE?(t="lock",e=s.t("visiblePrivate")):i.access===f.ORG?(t="organization",e=s.t("visibleOrg")):(t="globe",e=s.t("visibleAll")),{icon:t,label:e}}get noticeConfig(){let s;const{entityId:i,entityType:t,entity:e,context:a,isHub:o,channel:n,isOpenForSubmissions:r}=this;return(null==a?void 0:a.currentUser)?n?r||(s={kind:"warning",title:"statusClosed",message:"statusClosedMessage"}):s="content"===t&&w(e.item,a.currentUser)?{title:"channelNotSetTitle",message:"channelNotSetMessage",link:{text:"channelNotSetAction",href:(o?"":a.hubUrl)+_(e.type,i)},kind:"danger",icon:"exclamation-mark-triangle"}:{title:"comingSoonTitle",message:"comingSoonMessage",kind:"warning",icon:"exclamation-mark-triangle"}:s={title:"signInTitle",kind:"info",icon:"information",link:{text:"signInAction",action:this.handleSignInClicked}},s}get locationDescriptionText(){let s;return"map"!==this.layout&&(s=this.intl.t("locationDescriptionText")),s}sanitizedEntityDescription(){return this.entity.description}async handlePostDeleted(s){var i,t;const{postListProps:e,threadProps:a}=this,o=({id:i})=>i===s.detail.id;(null===(i=this.postListProps)||void 0===i?void 0:i.items.find(o))&&(this.postListProps=Object.assign(Object.assign({},e),{items:e.items.filter((s=>!o(s))),nextStart:e.nextStart>-1?e.nextStart-1:e.nextStart,total:e.total-1})),s.detail.id===(null===(t=null==a?void 0:a.parent)||void 0===t?void 0:t.id)&&(this.threadProps=Object.assign(Object.assign({},a),{parent:null})),this.arcgisHubDiscussionsFeatureDeleted.emit(s.detail)}async handlePostEdited(s){var i,t;const{postListProps:e,threadProps:a}=this,o=({id:i})=>i===s.detail.id;(null===(i=this.postListProps)||void 0===i?void 0:i.items.find(o))&&(this.postListProps=Object.assign(Object.assign({},e),{items:e.items.map((i=>o(i)?s.detail:i))})),s.detail.id===(null===(t=null==a?void 0:a.parent)||void 0===t?void 0:t.id)&&(this.threadProps=Object.assign(Object.assign({},a),{parent:s.detail})),this.arcgisHubDiscussionsFeature.emit({post:s.detail,create:!1})}handlePostSelect(s){const{parentId:i,channelId:t,channel:e,channelGroups:a,parent:o,parentCreator:n,parentCreatorOrg:r,scrollTarget:d,postId:c,post:l,postCreator:h,postCreatorOrg:u}=s.detail;Object.assign(this,{parentId:i,channelId:t,threadScrollTarget:d,listScrollTarget:i,postId:c,showPostEditor:!1,threadProps:i?{channel:e,channelGroups:a,parent:o,parentCreator:n,parentCreatorOrg:r,post:l,postCreator:h,postCreatorOrg:u}:null}),this.arcgisHubDiscussionsViewThread.emit({parentId:i,channelId:t})}handleLayoutChanged(s){s.stopPropagation(),this.resetMapView(),this.layout=s.detail,this.hasMap=Boolean("map"===this.layout)}handlePostEditorReady(s){const{detail:i}=s;s.stopPropagation(),this.arcgisHubPostEditorReady.emit(i)}handlePostCreate(s){this.arcgisHubDiscussionsFeature.emit({post:s.detail,create:!0})}handleGeometryFeatureSelect(s){s.stopPropagation(),"map"!==this.layout&&(this.activeFeature=s.detail,this.layout="map"),this.arcgisHubGeometryFeatureSelect.emit(s.detail)}handleGeometryFeatureHover(s){s.stopPropagation(),this.arcgisHubGeometryFeatureHover.emit(s.detail)}handleGeometryDrawCreate(s){s.stopPropagation(),this.arcgisHubGeometryDrawCreate.emit(s.detail)}handleGeometryDrawTypeSelect(s){s.stopPropagation(),this.arcgisHubGeometryDrawTypeSelect.emit(s.detail)}handleGeometryDrawEdit(s){s.stopPropagation(),this.arcgisHubGeometryDrawEdit.emit(s.detail)}handleGeometryDrawEditCancel(s){s.stopPropagation(),this.arcgisHubGeometryDrawEditCancel.emit()}handleGeometryDrawReset(s){s.stopPropagation(),this.arcgisHubGeometryDrawReset.emit()}handleGeometrySelect(s){s.stopPropagation(),this.arcgisHubGeometrySelect.emit(s.detail)}handleFeatureRemove(s){s.stopPropagation(),this.arcgisHubFeatureRemove.emit(s.detail)}handleGeometryDeselect(s){s.stopPropagation(),this.arcgisHubGeometryDeselect.emit()}handleGeometryClearAll(s){s.stopPropagation(),this.arcgisHubGeometryClearAll.emit()}scrollToTarget(s){this.element.scrollTo({behavior:"smooth",left:s.offsetLeft,top:s.offsetTop})}async scrollToThreadTarget(){var s,i;let t;"list"===this.threadScrollTarget?t=await(null===(s=this.thread)||void 0===s?void 0:s.getPostListRef()):"editor"===this.threadScrollTarget&&(t=await(null===(i=this.thread)||void 0===i?void 0:i.getPostEditorRef())),t&&(this.threadScrollTarget=null,this.scrollToTarget(t))}async scrollToListTarget(){var s;if(this.listScrollTarget){const i=await(null===(s=this.postListEl)||void 0===s?void 0:s.getPostRefByPostId(this.listScrollTarget));i&&(this.listScrollTarget=null,this.scrollToTarget(i))}}handleThreadReady(){setTimeout((()=>this.scrollToThreadTarget()),500)}handlePostListReady(){setTimeout((()=>this.scrollToListTarget()),500)}handlePostListUpdated(s){const i=s.target,{nextStart:t,start:e,total:a,items:o}=i;this.postListProps={nextStart:t,start:e,total:a,items:o}}handleBackToList(){const{channelId:s}=this;this.threadScrollTarget=null,this.threadProps=null,this.channelId=null,this.parentId=null,this.postId=null,this.arcgisHubDiscussionsViewThread.emit({parentId:null,channelId:s})}handleBackToThread(){const{thread:{parentId:s,channelId:i}}=this;this.postId=null,this.arcgisHubDiscussionsViewThread.emit({parentId:s,channelId:i})}handlePostReady(s){const i=s.target;this.postRefs=Object.assign(Object.assign({},this.postRefs),{[i.postId]:s.target})}handleAboutClicked(){this.view="about"}renderSkeleton(){return null}renderHeroChannelStatus(){const{channel:s,channelGroups:i}=this;if(s){const{accessIcon:e,isOpenForSubmissions:a,intl:o}=this;return t("div",{class:"discussions_channel_status"},t("div",{class:"discussions_channel_status__status"},o.t(a?"statusOpen":"statusClosed")),t("div",{class:"discussions_channel_status__info"},t("div",{class:"discussions_channel_status__name"},m(s,i,o.t("unnamedChannel"))),t("span",null,"·"),t("calcite-icon",{icon:e.icon,scale:"s","text-label":e.label})))}}renderHeroEntityInfo(){const{entity:s}=this;return t("div",{class:"discussions_entity_details"},t("header",null,s.title),t("div",{innerHTML:this.sanitizedEntityDescription()}))}renderHeroThumbnail(){const{isMobile:s,entity:i}=this;if(!s)return t("arcgis-hub-image",{alt:"my alt text",corners:p.round,fallback:"https://static.arcgis.com/images/discussion.png",src:i.thumbnailUrl})}renderHeroLinks(){return t("div",null,t("calcite-link",{onClick:this.handleAboutClicked},this.intl.t("linkAbout")))}renderHeroIntro(){return t("div",{class:"discussions_intro"},this.renderHeroChannelStatus(),this.renderHeroThumbnail(),this.renderHeroEntityInfo(),this.renderHeroLinks())}renderHero(){return t("div",{class:"discussions_hero"},this.renderHeroIntro())}renderEditor(){if(this.isOpenForSubmissions){const{context:s,channel:i,entity:e,intl:a,discussion:o,hasMap:n,isMobile:r,unsavedFeatures:d,unsavedExistingFeatures:c,unsavedRelatedFeatures:l}=this;if(s.currentUser&&i)return t("arcgis-hub-discussions-post-editor",{channel:i,collapsed:!0,collapsible:!0,context:s,createParentBodyPlaceholderText:a.t("postBodyPlaceholder"),createParentSaveButtonText:a.t("addPostButtonText"),discussion:o,entity:e,hasMap:n,showLocations:!r,unsavedExistingFeatures:c,unsavedFeatures:d,unsavedRelatedFeatures:l})}}renderParent(s,i,a,o){const{context:n,isHub:r,entity:d,entityId:c,entityType:l,isMobile:h,channel:u,channelGroups:p,postRefs:b,discussion:g,displayFieldValid:m,displayFieldKey:v,displayFieldValue:y,channelId:f,hasMap:w,handlePostReady:_,locationDescriptionText:j,unsavedExistingFeatures:x,unsavedFeatures:k,unsavedRelatedFeatures:T}=this;return t("arcgis-hub-discussions-post",{context:n,entity:d,entityId:c,entityType:l,hasMap:w,index:i,isHub:r,isMobile:h,key:s.id,lastIndex:a.length-1,loading:o,locationDescriptionText:j,onArcgisHubDiscussionsPostReady:_,post:s,postId:s.id,preview:!0,role:"listitem",showLocations:!h,unsavedExistingFeatures:x,unsavedFeatures:k,unsavedRelatedFeatures:T},Boolean(b[s.id])&&t(e,null,t("arcgis-hub-discussions-post-header",{channel:u,channelGroups:p,context:n,iconScale:"l",index:i,isHub:r,post:s,postCreator:b[s.id].postCreator,postCreatorOrg:b[s.id].postCreatorOrg,showChannelAccessIcon:!0,showCreatorAvatar:!0,showPopover:!0,showTimestamp:!0,slot:"metadata"}),t("arcgis-hub-discussions-post-editor",{channel:u,channelGroups:p,channelId:f,context:n,discussion:g,displayFieldKey:v,displayFieldValid:m,displayFieldValue:y,entity:d,entityId:c,entityType:l,hasMap:w,index:i,isHub:r,isMobile:h,post:s,postCreator:b[s.id].postCreator,postCreatorOrg:b[s.id].postCreatorOrg,postId:s.id,showHeader:!0,showLocations:!h,slot:"editor",unsavedExistingFeatures:x,unsavedFeatures:k,unsavedRelatedFeatures:T})))}renderPostList(){const{context:s,entity:i,channel:e,discussion:a,renderParent:o,displayFieldKey:n,displayFieldValid:r,displayFieldValue:d,entityId:c,entityType:l,hasMap:h,isHub:u,isMobile:p,layout:b,locationDescriptionText:g,postListProps:m,unsavedExistingFeatures:v,unsavedFeatures:y,unsavedRelatedFeatures:f}=this;if(e)return t("arcgis-hub-discussions-post-list",{channelIds:[e.id],context:s,discussion:a,displayFieldKey:n,displayFieldValid:r,displayFieldValue:d,entity:i,entityId:c,entityType:l,hasMap:h,isHub:u,isMobile:p,items:null==m?void 0:m.items,layout:b,locationDescriptionText:g,nextStart:null==m?void 0:m.nextStart,onArcgisHubDiscussionsPostListReady:this.handlePostListReady,onArcgisHubDiscussionsPostListUpdated:this.handlePostListUpdated,parentIds:[],ref:s=>{this.postListEl=s},renderPost:o,showCounts:!0,showLayoutActions:!0,showLocations:!p,showSearchActions:!0,showSortActions:!0,start:null==m?void 0:m.start,total:null==m?void 0:m.total,unsavedExistingFeatures:v,unsavedFeatures:y,unsavedRelatedFeatures:f})}renderThread(){var s,i,e,a,o,n,r,d;const c=this.postId?{heading:this.intl.t("reply.heading"),description:this.intl.t("reply.description"),handleBackClick:this.handleBackToThread}:{heading:this.intl.t("heading"),description:this.intl.t("description"),handleBackClick:this.handleBackToList};return t("calcite-panel",{description:c.description,heading:c.heading},t("calcite-action",{onClick:c.handleBackClick,scale:"s",slot:"header-actions-start",text:this.intl.t("back")},t("calcite-icon",{icon:"chevron-left",scale:"s"})),t("arcgis-hub-discussions-thread",{channel:null===(s=this.threadProps)||void 0===s?void 0:s.channel,channelGroups:null===(i=this.threadProps)||void 0===i?void 0:i.channelGroups,channelId:this.channel.id,context:this.context,displayFieldKey:this.displayFieldKey,displayFieldValue:this.displayFieldValue,entityId:this.entityId,entityType:this.entityType,hasMap:this.hasMap,isHub:this.isHub,isMobile:this.isMobile,locationDescriptionText:this.locationDescriptionText,onArcgisHubDiscussionsThreadReady:this.handleThreadReady,parent:null===(e=this.threadProps)||void 0===e?void 0:e.parent,parentCreator:null===(a=this.threadProps)||void 0===a?void 0:a.parentCreator,parentCreatorOrg:null===(o=this.threadProps)||void 0===o?void 0:o.parentCreatorOrg,parentId:this.parentId,post:null===(n=this.threadProps)||void 0===n?void 0:n.post,postCreator:null===(r=this.threadProps)||void 0===r?void 0:r.postCreator,postCreatorOrg:null===(d=this.threadProps)||void 0===d?void 0:d.postCreatorOrg,postId:this.postId,ref:s=>{this.thread=s},showLocations:!this.isMobile,unsavedExistingFeatures:this.unsavedExistingFeatures,unsavedFeatures:this.unsavedFeatures,unsavedRelatedFeatures:this.unsavedRelatedFeatures}))}renderNotice(){const{noticeConfig:s,intl:i}=this;if(s)return t("calcite-notice",{icon:s.icon,kind:s.kind,open:!0,scale:"m"},t("div",{slot:"title"},i.t(s.title)),Boolean(s.message)&&t("div",{slot:"message"},i.t(s.message)),Boolean(s.link)&&t("calcite-link",{href:s.link.href,onClick:s.link.action,slot:"link"},i.t(s.link.text)))}renderEditorAndPostList(){return t(e,null,this.renderEditor(),this.renderPostList())}renderContent(){return t("div",{class:"discussions_content"},this.renderNotice(),this.parentId?this.renderThread():this.renderEditorAndPostList())}renderAbout(){var s;const{intl:i,view:e}=this;if("about"===e)return t("calcite-flow-item",{description:i.t("flowAboutDescription"),heading:i.t("flowAboutHeading"),onCalciteFlowItemBack:this.handleAboutBack},t("arcgis-hub-discussions-view",{allowedChannelIds:this.allowedChannelIds,channel:this.channel,channelId:null===(s=this.channel)||void 0===s?void 0:s.id,context:this.context,entity:this.entity,entityId:this.entityId,entityType:this.entityType,isHub:this.isHub,isMobile:this.isMobile}))}renderDefault(){return t("calcite-flow-item",null,t("div",{class:"discussions_board"},"map"===this.layout?this.renderMapLayout():this.renderGridListLayout()))}renderBoard(){return t("calcite-flow",null,this.renderDefault(),this.renderAbout())}renderGridListLayout(){return t(e,null,(!this.isMobile||!this.parentId)&&t("div",{class:"discussions_board-secondary_section"},this.renderHero()),t("div",{class:"discussions_board-primary_section"},this.renderContent()))}renderMapLayout(){return t(e,null,t("div",{class:"discussions_board-map_secondary_section"},(!this.isMobile||!this.parentId)&&t("div",null,this.renderHero()),t("div",null,this.renderContent())),t("div",{class:"discussions_board-map_primary_section"},t("arcgis-hub-map",{basemap:"streets-navigation-vector",onArcgisHubMapViewReady:this.handleMapViewReady}),this.renderMapIntegrator()))}renderMapIntegrator(){const s="top-right",i="m";return t(e,null,t("arcgis-hub-discussions-map-integrator",{activeFeature:this.activeFeature,context:this.context,discussionsRef:this.element,drawRef:this.drawRef,entity:this.entity,isHub:this.isHub,view:this.mapView}),t("arcgis-hub-map-widget-container",{"expand-disabled":!0,scale:i,view:this.mapView,viewPosition:s},t("arcgis-hub-map-widget-search",{scale:i,view:this.mapView})),t("arcgis-hub-map-widget-container",{"expand-disabled":!0,scale:i,view:this.mapView,viewPosition:s},t("arcgis-hub-map-widget-zoom",{scale:i,view:this.mapView})),t("arcgis-hub-map-widget-container",{"expand-disabled":!0,id:"draw-tools-container",scale:i,view:this.mapView,viewPosition:s},t("arcgis-hub-map-widget-draw",{disablePrimaryOptions:!0,enableMapTips:!0,ref:s=>{this.drawRef=s},scale:i,tools:["select","point","polyline","polygon"],view:this.mapView})))}render(){const{isLoading:s}=this;return t(a,{"data-element":"discussions-board"},t("div",{class:"wrapper"},s?this.renderSkeleton():this.renderBoard()))}static get assetsDirs(){return["locales"]}get element(){return o(this)}static get watchers(){return{context:["handleContextChanged"]}}};j([l({delay:300})],x.prototype,"fetchDependencies",null),j([u({scope:"arcgis-hub-discussions-board-description",getKey(){var s;return null!==(s=this.entity.description)&&void 0!==s?s:this.entity.id}}),h()],x.prototype,"sanitizedEntityDescription",null),j([g({when(){return this.mapView}})],x.prototype,"renderMapIntegrator",null),x.style='.sc-arcgis-hub-discussions-board-h{display:block;background-color:var(--calcite-ui-background)}.wrapper.sc-arcgis-hub-discussions-board{display:block;min-width:50.5rem;max-width:89rem;background-color:var(--calcite-ui-background)}.discussions_board.sc-arcgis-hub-discussions-board{display:grid;column-gap:3.5rem;padding-left:3.5rem;padding-right:3.5rem;grid-template-columns:minmax(20.5rem, 25rem) minmax(20rem, 53.5rem)}.discussions_board-primary_section.sc-arcgis-hub-discussions-board{grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:1}.discussions_board-secondary_section.sc-arcgis-hub-discussions-board{grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:1}[layout="map"].sc-arcgis-hub-discussions-board-h>.wrapper.sc-arcgis-hub-discussions-board{display:block;min-width:50.5rem;max-width:100%;background-color:var(--calcite-ui-background)}[layout="map"].sc-arcgis-hub-discussions-board-h .discussions_board.sc-arcgis-hub-discussions-board{display:grid;height:100%;column-gap:0px;padding-left:0px;padding-right:0px;grid-template-columns:minmax(20.5rem, 25rem) 1fr}.discussions_board-map_primary_section.sc-arcgis-hub-discussions-board{grid-column-start:2;grid-column-end:2;grid-row-start:1;grid-row-end:1}.discussions_board-map_secondary_section.sc-arcgis-hub-discussions-board{grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:1;max-height:100vh;overflow-y:auto}.discussions_board-map_secondary_section.sc-arcgis-hub-discussions-board .discussions_content.sc-arcgis-hub-discussions-board{padding-left:1rem;padding-right:1rem}#draw-tools-container.sc-arcgis-hub-discussions-board{display:none}arcgis-hub-map.sc-arcgis-hub-discussions-board{display:block;height:100%;width:100%}.discussions_hero.sc-arcgis-hub-discussions-board{padding:1rem}.discussions_intro.sc-arcgis-hub-discussions-board{display:grid;row-gap:1rem}.discussions_channel_warning.sc-arcgis-hub-discussions-board{font-size:var(--calcite-font-size--1);line-height:1rem}.discussions_channel_status.sc-arcgis-hub-discussions-board{display:grid;grid-template-rows:repeat(2, minmax(0, 1fr));row-gap:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.discussions_channel_status__info.sc-arcgis-hub-discussions-board{display:flex;flex-wrap:nowrap;font-size:var(--calcite-font-size--1);line-height:1rem}.discussions_channel_status__status.sc-arcgis-hub-discussions-board{font-weight:var(--calcite-font-weight-medium);text-transform:uppercase;color:var(--calcite-ui-text-2)}.discussions_channel_status__name.sc-arcgis-hub-discussions-board{word-break:break-all;color:var(--calcite-ui-text-2);overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.discussions_channel_status__info.sc-arcgis-hub-discussions-board>span.sc-arcgis-hub-discussions-board{display:flex;width:1rem;justify-content:center}.discussions_entity_details.sc-arcgis-hub-discussions-board{display:grid;row-gap:0.5rem}.discussions_entity_details.sc-arcgis-hub-discussions-board>header.sc-arcgis-hub-discussions-board{font-size:var(--calcite-font-size-3);line-height:2rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.discussions_entity_details.sc-arcgis-hub-discussions-board>div.sc-arcgis-hub-discussions-board{font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.discussions_content.sc-arcgis-hub-discussions-board{padding-top:1rem;padding-bottom:1rem}calcite-notice.sc-arcgis-hub-discussions-board{margin-bottom:2rem}arcgis-hub-discussions-post-editor.sc-arcgis-hub-discussions-board{margin-bottom:2rem}arcgis-hub-discussions-post-list.sc-arcgis-hub-discussions-board{--arcgis-hub-layout-list-min-column-width:20rem;--arcgis-hub-layout-list-gap:2rem;--arcgis-hub-layout-list-actions-gap:.25rem;--arcgis-hub-layout-list-actions-margin:1rem;background-color:var(--calcite-ui-background)}arcgis-hub-discussions-view.sc-arcgis-hub-discussions-board{padding-left:3.5rem;padding-right:3.5rem;padding-top:1rem;padding-bottom:1rem}[is-mobile].sc-arcgis-hub-discussions-board-h .wrapper.sc-arcgis-hub-discussions-board{min-width:20rem;max-width:47rem}[is-mobile].sc-arcgis-hub-discussions-board-h .discussions_board.sc-arcgis-hub-discussions-board{grid-template-columns:repeat(1, minmax(0, 1fr));padding-left:1rem;padding-right:1rem}[is-mobile].sc-arcgis-hub-discussions-board-h .discussions_entity_details.sc-arcgis-hub-discussions-board>header.sc-arcgis-hub-discussions-board{font-size:var(--calcite-font-size-0);line-height:1.25rem}[is-mobile].sc-arcgis-hub-discussions-board-h .discussions_board-primary_section.sc-arcgis-hub-discussions-board{grid-column-start:1;grid-column-end:1;grid-row-start:2;grid-row-end:2}[is-mobile].sc-arcgis-hub-discussions-board-h .discussions_hero.sc-arcgis-hub-discussions-board{padding-left:0px;padding-right:0px}[is-mobile].sc-arcgis-hub-discussions-board-h arcgis-hub-discussions-post-list.sc-arcgis-hub-discussions-board{--arcgis-hub-layout-list-gap:0;--arcgis-hub-layout-list-min-column-width:18rem}';export{x as arcgis_hub_discussions_board}