import{r as t,c as e,h as i,F as s,H as r,a as o}from"./p-d4ba4c14.js";import{i as p}from"./p-be5c5009.js";import{d as a}from"./p-8cf4bd83.js";import{b as c}from"./p-040978e4.js";import{h as n}from"./p-b1a98ae3.js";import{b as l}from"./p-fd260f2d.js";import{g as m,c as h}from"./p-81a9bee2.js";import{a as d}from"./p-31aebb8c.js";import"./p-dfe5a97d.js";import"./p-9b205605.js";import"./p-1458dcfd.js";import"./p-b728aff4.js";import"./p-796574a4.js";import"./p-783242bc.js";import"./p-dd26efbb.js";import"./p-d1b12a9c.js";import"./p-dcdf7b57.js";import"./p-a0deb8c6.js";import"./p-6dcae6cd.js";import"./p-637ea136.js";import"./p-3f64a9d9.js";import"./p-377e1b5e.js";import"./p-2acb70a6.js";import"./p-903ef8af.js";import"./p-52612356.js";import"./p-af59e67b.js";import"./p-85d6867e.js";import"./p-6f931af6.js";import"./p-56b73d71.js";import"./p-3904125b.js";import"./p-b295a5ae.js";import"./p-cea8413b.js";import"./p-d763eacf.js";import"./p-ad325ed1.js";import"./p-8e7f4c22.js";import"./p-69555c48.js";import"./p-8dbea197.js";import"./p-7202c430.js";import"./p-75d6da59.js";import"./p-90dc0f6f.js";import"./p-59fd2498.js";import"./p-16a95e5b.js";import"./p-e43616ff.js";import"./p-ca048216.js";import"./p-4a14259a.js";import"./p-235bb6ee.js";import"./p-c836a9b6.js";import"./p-dafb2329.js";import"./p-992b9d10.js";import"./p-895b662f.js";import"./p-aa262d60.js";import"./p-ea6de7f6.js";import"./p-24ecdf64.js";import"./p-3363f483.js";import"./p-87582fe0.js";import"./p-859c5360.js";const u=({groupResult:t,intl:e},s)=>{let r;if(t.membershipSummary){const i=t.membershipSummary.total;r=0===i?e.t("groupBlock.memberCount.noMember"):1===i?e.t("groupBlock.memberCount.oneMember"):e.t("groupBlock.memberCount.members",{count:i})}else{const{owner:i,createdDate:s,access:o,userMembership:p}=t,a=[i,e.t("groupBlock.dateCreated",{localizedDate:s.toLocaleDateString(e.locale)}),e.t("groupBlock.sharing",{sharingLevel:e.t(`groupBlock.sharingLevels.${o}`)}),e.t("groupBlock.membership",{membershipLevel:e.t(`groupBlock.membershipLevels.${p||"none"}`)})];"rtl"===e.direction&&a.reverse(),r=a.join(" | ")}return i("calcite-block",{description:r,heading:t.name},i("calcite-avatar",{fullName:t.name,scale:"m",slot:"icon",thumbnail:t.links.thumbnail}),s)},b=class{constructor(i){t(this,i),this.groupsChangedEvent=e(this,"arcgisHubGroupListManagerChanged",7),this.hubTelemetry=e(this,"hubTelemetry",7),this.handleHubTelemetry=t=>{t.stopPropagation(),this.hubTelemetry.emit(t.detail)},this.groupIds=void 0,this.allowAdd=void 0,this.allowRemove=void 0,this.metadataMode="default",this.wellKnownPickerCatalog=void 0,this.pickerFacets=void 0,this.pickerToggleLabel=void 0,this.currentGroupSelection=void 0,this.currentGroups=void 0,this.showGroupPicker=!1,this._context=m(),l(this,"handleRemove","handlePickerOpen","handlePickerClose","handlePickerSelectionUpdate","handleHubTelemetry")}get pickerCatalogDefinition(){var t;const e={user:null===(t=this._context)||void 0===t?void 0:t.currentUser};return d(null,this.wellKnownPickerCatalog,"group",e)}async componentWillLoad(){this.intl=await p.loadIntlForComponent(this.element),this.fetchCurrentGroups()}connectedCallback(){h(this)}disconnectedCallback(){this.disconnectContext()}async fetchCurrentGroups(){const t="members"===this.metadataMode?["membershipSummary"]:["userMembership"];this.currentGroupSelection={channel:[],item:[],user:[],groupMember:[],event:[],group:this.groupIds},this.currentGroups=this.groupIds.length?await async function(t){const{selection:e,context:i,include:s}=t,r=c(e,"group"),o={requestOptions:null==i?void 0:i.hubRequestOptions,include:s||[]};try{let{results:t}=await n(r,o);const i=e.group;return t=t.slice().sort(((t,e)=>(i.includes(t.id)?i.indexOf(t.id):1/0)-(i.includes(e.id)?i.indexOf(e.id):1/0))),t}catch(t){console.error(`Unable to fetch selected entities: ${t}`)}}({selection:this.currentGroupSelection,context:this._context,include:t}):[]}handleRemove(t){const e=t.target.dataset.groupId,i=this.groupIds.filter((t=>t!==e));this.groupsChangedEvent.emit({updatedList:i,removed:[e]})}handlePickerOpen(){this.showGroupPicker=!0}handlePickerClose(){this.showGroupPicker=!1}handlePickerSelectionUpdate(t){const e=t.detail.group,i=e.filter((t=>!this.groupIds.includes(t))),s=this.groupIds.filter((t=>!e.includes(t))),r={updatedList:e};i.length&&(r.added=i),s.length&&(r.removed=s),this.groupsChangedEvent.emit(r)}renderGroup(t){return i(u,{groupResult:t,intl:this.intl},i("arcgis-hub-workspace-link",{href:`/groups/${t.id}`,relativeToOrigin:!0,slot:"control",target:"_blank",telemetry:a.dictionary.category.navigation.action.view.label.groups.details.profile},i("calcite-action",{icon:"launch",label:this.intl.t("newTab"),text:t.name})),this.allowRemove&&i("calcite-action",{"data-group-id":t.id,icon:"x-circle",onClick:this.handleRemove,slot:"control",text:t.name}))}renderGroupPicker(){if(this.allowAdd)return i(s,null,i("div",{class:"picker-button-container"},i("slot",{name:"secondary-picker-button"}),i("calcite-button",{appearance:"outline-fill",onClick:this.handlePickerOpen,round:!0},this.pickerToggleLabel||this.intl.t("pickerToggle"))),this.showGroupPicker&&i("arcgis-wormhole",{elAttributes:{unthemed:""}},i("arcgis-hub-gallery-picker",{catalogs:[this.pickerCatalogDefinition],context:this._context,facets:this.pickerFacets,gallerySelection:this.currentGroupSelection,modalTitle:this.intl.t("pickerTitle"),onArcgisHubGalleryPickerClose:this.handlePickerClose,onArcgisHubGalleryPickerSelectionUpdate:this.handlePickerSelectionUpdate,onHubTelemetry:this.handleHubTelemetry,open:this.showGroupPicker,showBadges:!1,showSearch:!0,showSelection:!0})))}render(){var t;return i(r,null,(null===(t=this.currentGroups)||void 0===t?void 0:t.length)?this.currentGroups.map((t=>this.renderGroup(t))):i("div",{class:"no-groups-message"},this.intl.t("noGroups")),this.renderGroupPicker())}static get assetsDirs(){return["locales"]}get element(){return o(this)}static get watchers(){return{groupIds:["fetchCurrentGroups"]}}};b.style=":host{display:block}.no-groups-message{font-weight:var(--calcite-font-weight-medium)}.picker-button-container{margin-top:1.75rem;display:flex;gap:0.75rem}";export{b as arcgis_hub_group_list_manager}