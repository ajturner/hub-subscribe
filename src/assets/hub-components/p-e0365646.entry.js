import{r as t,c as e,h as i,H as s,a}from"./p-d4ba4c14.js";import{b as r}from"./p-fd260f2d.js";import{i as o}from"./p-be5c5009.js";import{I as n,F as c}from"./p-c3d545c0.js";import{A as l}from"./p-c5919bc3.js";import{i as h,a as p,o as d}from"./p-d1b12a9c.js";import{s as m}from"./p-235bb6ee.js";import{_ as u}from"./p-9b205605.js";import{c as f}from"./p-ca048216.js";import{_ as g}from"./p-d763eacf.js";import{g as b}from"./p-377e1b5e.js";import{d as v,s as w,f as j}from"./p-cea8413b.js";import{a as x}from"./p-ad325ed1.js";import{r as y}from"./p-dcdf7b57.js";import{s as S}from"./p-c6da5747.js";import{i as O}from"./p-df1dc3df.js";import{f as C}from"./p-24ecdf64.js";import{s as I}from"./p-78bc8064.js";import"./p-2acb70a6.js";import"./p-796574a4.js";import"./p-b295a5ae.js";import"./p-8e7f4c22.js";import"./p-008d72ef.js";import"./p-b728aff4.js";import"./p-14a66e4a.js";import"./p-6d4e51c6.js";import"./p-903ef8af.js";import"./p-637ea136.js";import"./p-00849f08.js";import"./p-992b9d10.js";import"./p-7853d817.js";function _(t){return new Promise((e=>setTimeout(e,t)))}async function E(t){const{item:e,groups:i}=t,s=u(t,["item","groups"]),a=e.dataUrl||e.file;let r,o,n;if(r=e.file?await async function(t,e){const i=t.file;delete(t=Object.assign({},t)).file;const s=await f(Object.assign({item:t,filename:i.name,async:!0,multipart:!0,overwrite:!0},e)),a=s.id;try{const s=function(t,e,i,s,a){const r=[];let o=1,n=0;for(;n<t.size;)r.push(Object.assign({file:t.slice(n,n+s,t.type),owner:e,id:i,partNum:o},a)),o+=1,n+=s;return r.reverse()}(i,t.owner,a,6e6,e);await function(t,e,i=5){return t.reduce(((t,e)=>{let s=t[t.length-1];return s&&s.length!==i||(s=[],t.push(s)),s.push(e),t}),[]).reduce(((t,i)=>t.then((t=>{const s=i.map((t=>e(t)));return Promise.all(s).then((e=>t.concat(e)))}))),Promise.resolve([]))}(s,(async t=>{if(!(await function(t){var e=t.partNum;return!Number.isInteger(e)||e<1||e>1e4?Promise.reject(new Error("The part number must be an integer between 1 to 10000, inclusive.")):v(t).then((function(i){var s=b(t)+"/content/users/"+i+"/items/"+t.id+"/addPart?partNum="+e,a=x(t,["file"],{params:g({},t.params)});return y(s,a)}))}(t)).success)throw new Error("addItemPart failed")}),5),t.extent&&h(t.extent)&&(t.extent=p(t.extent)),await function(t){return v(t).then((function(e){var i=b(t)+"/content/users/"+e+"/items/"+t.id+"/commit",s=x(t,[],{params:g(g({},t.params),w(t.item))});return y(i,s)}))}(Object.assign({id:a,item:t,owner:t.owner},e))}catch(i){throw await function(t){return v(t).then((function(e){var i=b(t)+"/content/users/"+e+"/items/"+t.id+"/cancel";return y(i,t)}))}(Object.assign({id:a,owner:t.owner},e)),i}return s}(e,s):await async function(t,e){return await f(Object.assign({item:t,owner:t.owner,file:t.file,dataUrl:t.dataUrl,text:t.text,multipart:t.multipart,async:t.async},e))}(e,s),a&&await async function(t,e){let i;do{if(await _(2e3),i=await j(Object.assign({id:t},e)),"failed"===i.status)throw new Error(i.statusMessage)}while("completed"!==i.status)}(r.id,s),"private"!==e.access&&(o=await S(Object.assign({id:r.id,owner:e.owner,access:e.access},s))),null==i?void 0:i.length){const t=C(I);n=await Promise.all(i.map((i=>t(Object.assign({id:r.id,owner:e.owner,groupId:i.id,confirmItemControl:O(i)},s)))))}return{title:e.title,createdItem:r,itemAccessResponse:o,itemSharingResponse:n}}var P;!function(t){t.ITEM="item",t.METADATA="metadata",t.SHARING="sharing",t.CREATING="creating",t.COMPLETE="complete"}(P||(P={}));const F=class{constructor(i){t(this,i),this.arcgisHubItemCreationState=e(this,"arcgisHubItemCreationState",7),this.arcgisHubFileUploadManagerStageChange=e(this,"arcgisHubFileUploadManagerStageChange",7),this.arcgisHubFileOrUrlValid=e(this,"arcgisHubFileOrUrlValid",7),this.metadataValues={},this.secondStageComplete=!1,this.context=void 0,this.portal="https://www.arcgis.com",this.groups=void 0,this.selectedGroups=void 0,this.allowedFileTypes={types:[n.Image,n["Microsoft Word"],n["Microsoft Excel"],n["Microsoft Powerpoint"]],extensions:[c.pdf,c.csv]},this.showButtons=!1,this.selectedItem=void 0,this.stage=P.ITEM,this.duplicateFileId=void 0,this.thirdStageDisabled=!0,r(this,"setStepperEl","setFileSelectEl","_moveToNextStage","nextStage","_moveToPreviousStage","previousStage")}async componentWillLoad(){if(this.intl=await o.loadIntlForComponent(this.el),!this.context&&this.portal){const t=await l.create({portalUrl:this.portal});this.context=t.context}}async componentWillRender(){this.context&&this.context.portal&&!this.defaultExtent&&(this.defaultExtent=await d(this.context.hubRequestOptions))}async onPortalChange(){const t=await l.create({portalUrl:this.portal});this.context=t.context}async onStageChange(){if(this.stage===P.ITEM&&"file"===this.itemSource&&(this.selectedItem=void 0,this.fileSelectElement.clearSelectedFile(),this.itemSource=void 0,this.secondStageComplete=!1,this.thirdStageDisabled=!0,this.duplicateFileId=void 0),this.stage===P.METADATA&&this.selectedItem.file){const t=this.selectedItem,e=await m({q:`owner:${this.context.currentUser.username} ownerfolder:root type:${t.type}`,filter:`item:"${t.file.name.split(" ").join("_")}"`,authentication:this.context.session});e.results.length?(this.duplicateFileId=e.results[0].id,this.thirdStageDisabled=!0,this.arcgisHubFileOrUrlValid.emit({valid:!1,source:"file"})):this.thirdStageDisabled=!1}this.arcgisHubFileUploadManagerStageChange.emit(this.stage)}handleCalciteStepperChangeEvent(t){const{detail:{position:e}}=t;switch(e){case 0:this.stage=P.ITEM;break;case 1:this.stage=P.METADATA;break;case 2:this.stage=P.SHARING}}handleFileSelected(t){t.stopPropagation();const e=t.detail;this.selectedItem=e,this.itemSource="file",this.metadataValues={title:e.title},setTimeout(this._moveToNextStage,100),this.arcgisHubFileOrUrlValid.emit({valid:!0,source:"file"})}handleUrlValidation(t){t.stopPropagation();const e=t.detail;e.type?(this.selectedItem=e,this.itemSource="url",this.metadataValues={title:e.title},this.arcgisHubFileOrUrlValid.emit({valid:!0,source:"url"})):this.arcgisHubFileOrUrlValid.emit({valid:!1,source:"url"})}handleItemTypeSelection(t){t.stopPropagation();const e=t.detail;this.selectedItem=e,this.itemSource="url",this.metadataValues={title:e.title},this.arcgisHubFileOrUrlValid.emit({valid:!0,source:"url"})}mergeMetadataValuesWithItem(t){t.stopPropagation();const{values:e,valid:i}=t.detail;i?(this.selectedItem=Object.assign({},this.selectedItem,e),this.thirdStageDisabled=!1,this.secondStageComplete=!0,this.arcgisHubFileOrUrlValid.emit({valid:!0,source:this.itemSource})):(this.thirdStageDisabled=!0,this.arcgisHubFileOrUrlValid.emit({valid:!1,source:this.itemSource}))}updateSelectedGroups(t){t.stopPropagation(),this.selectedGroups=t.detail.share}updateAccessLevel(t){t.stopPropagation(),this.selectedItem.access=t.detail}async nextStage(){const{stage:t,selectedItem:e,selectedGroups:i}=this;if(t!==P.ITEM&&t!==P.METADATA||this._moveToNextStage(),t===P.SHARING){const t={type:e.type,access:e.access,groups:this.selectedGroups.map((t=>t.id))};try{this.stage=P.CREATING;const s=this.context.session,a=await E({item:e,groups:i,authentication:s});this.stage=P.COMPLETE,this.arcgisHubItemCreationState.emit(Object.assign(Object.assign({},t),a))}catch(i){this.stage=P.COMPLETE,this.arcgisHubItemCreationState.emit(Object.assign({title:e.title,createdItem:{id:void 0,success:!1,folder:void 0},itemAccessResponse:void 0,itemSharingResponse:void 0},t))}}}async previousStage(){this.stage!==P.METADATA&&this.stage!==P.SHARING||this._moveToPreviousStage()}_moveToPreviousStage(){this.stepperElement.prevStep()}_moveToNextStage(){this.stepperElement.nextStep()}setStepperEl(t){this.stepperElement=t}setFileSelectEl(t){this.fileSelectElement=t}renderItemStage(){var t,e,s,a,r,o,n;if(this.stage!==P.CREATING&&this.stage!==P.COMPLETE)return i("calcite-stepper",{ref:this.setStepperEl},i("calcite-stepper-item",{complete:!!this.selectedItem,heading:this.intl.t("firstStepHeader"),selected:!0},i("arcgis-hub-file-select",{allowedFileTypes:this.allowedFileTypes,defaultExtent:this.defaultExtent,owner:null===(t=this.context.currentUser)||void 0===t?void 0:t.username,portalName:null===(e=this.context.portal)||void 0===e?void 0:e.name,ref:this.setFileSelectEl}),i("span",{class:"separator"},this.intl.t("divider")),i("arcgis-hub-url-content-form",{defaultExtent:this.defaultExtent,owner:null===(s=this.context.currentUser)||void 0===s?void 0:s.username,portalName:null===(a=this.context.portal)||void 0===a?void 0:a.name})),i("calcite-stepper-item",{complete:this.secondStageComplete,disabled:!this.selectedItem,heading:this.intl.t("secondStepHeader")},i("arcgis-hub-file-metadata-editor",{class:{hide:!!this.duplicateFileId},values:this.metadataValues}),i("div",{class:{"duplicate-file-name":!!this.duplicateFileId,hide:!this.duplicateFileId}},i("calcite-icon",{"aria-label":this.intl.t("duplicateFileAriaLabel"),icon:"x-circle",scale:"l"}),i("span",{class:"duplicate-file-name-span"},this.intl.t("duplicateFileError",{a:(...t)=>i("a",{href:`${this.context.portalUrl}/home/item.html?id=${this.duplicateFileId}`,target:"_blank"},t)})))),i("calcite-stepper-item",{disabled:this.thirdStageDisabled,heading:this.intl.t("thirdStepHeader")},i("arcgis-hub-access-level-controls",{"access-level":null===(r=this.selectedItem)||void 0===r?void 0:r.access,context:this.context,"item-type":null===(o=this.selectedItem)||void 0===o?void 0:o.type,"org-name":null===(n=this.context.portal)||void 0===n?void 0:n.name}),i("arcgis-hub-groups-sharing",{groups:this.groups,selectedGroups:this.selectedGroups})))}renderCreating(){if(this.stage===P.CREATING)return i("calcite-loader",{label:this.intl.t("uploading"),scale:"l",type:"indeterminate"})}renderCompleteStage(){if(this.stage===P.COMPLETE)return i("slot",null)}renderButtons(){const{selectedItem:t,showButtons:e,stage:s,thirdStageDisabled:a}=this;if(e&&s!==P.CREATING&&s!==P.COMPLETE){const e=s===P.SHARING?"save":"next",r=!t||s===P.METADATA&&a;return i("div",{class:"button-container"},i("calcite-button",{appearance:"outline",disabled:s===P.ITEM,onClick:this.previousStage},this.intl.t("back")),i("calcite-button",{appearance:"solid",disabled:r,onClick:this.nextStage},this.intl.t(e)))}}render(){return i(s,null,this.renderItemStage(),this.renderCreating(),this.renderButtons(),this.renderCompleteStage())}static get assetsDirs(){return["locales"]}get el(){return a(this)}static get watchers(){return{portal:["onPortalChange"],stage:["onStageChange"]}}};F.style=":host{display:flex;width:80%;flex-direction:column}.button-container{margin-top:0.5rem;display:flex;width:100%;flex-direction:row;justify-content:flex-end;padding-top:1.25rem}calcite-button:first-child{margin-right:4px}.separator{display:flex;align-items:center;text-align:center}.separator::before,.separator::after{flex:1 1 0%;border-width:1px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);--tw-content:'';content:var(--tw-content)}.separator:not(:empty)::before{margin-right:0.25rem}.separator:not(:empty)::after{margin-left:0.25rem}arcgis-hub-file-select{margin-bottom:1rem}arcgis-hub-url-content-form{margin-top:2rem}arcgis-hub-groups-sharing{margin-top:1.25rem}.hide{display:none}.duplicate-file-name{margin-top:40px;display:flex;flex-direction:column;align-items:center;gap:0.25rem}.duplicate-file-name-span{width:80%;font-size:18px;margin-top:40px;margin-bottom:50px}calcite-icon{height:75px;width:75px;color:var(--calcite-ui-danger)}";export{F as arcgis_hub_file_upload_manager}