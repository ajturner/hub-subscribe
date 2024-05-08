import{r as t,c as e,h as i,F as s,H as o,a}from"./p-d4ba4c14.js";import{i as l}from"./p-be5c5009.js";import{b as r}from"./p-fd260f2d.js";import{T as n,g as c}from"./p-9d8f80aa.js";import{d as h}from"./p-8cf4bd83.js";import{i as p}from"./p-547e8db0.js";import{c as d,a as g}from"./p-b728aff4.js";import"./p-dfe5a97d.js";import"./p-796574a4.js";const u={required:[],type:"object",properties:{title:{type:"string",maxLength:255},description:{type:"string",maxLength:500},canCollapse:{type:"boolean"}}},m={type:"Layout",elements:[{labelKey:"title",scope:"/properties/title",type:"Control"},{labelKey:"description",scope:"/properties/description",type:"Control",options:{control:"hub-field-input-input",type:"textarea"}}]},b={required:["title"],type:"object",properties:{title:{type:"string",maxLength:255,minLength:1},timeframe:{type:"string"},stageDescription:{type:"string",maxLength:500},link:{type:"object",properties:{href:{type:"string",if:{minLength:1},then:{format:"url"}},title:{type:"string"}}},status:{type:"string",default:"notStarted"}}},y={type:"Layout",elements:[{labelKey:"title",scope:"/properties/title",type:"Control",options:{messages:[{type:"ERROR",keyword:"required",icon:!0,labelKey:"titleRequiredError"}]}},{labelKey:"timeframe",scope:"/properties/timeframe",type:"Control"},{labelKey:"stageDescription",scope:"/properties/stageDescription",type:"Control",options:{control:"hub-field-input-input",type:"textarea"}},{labelKey:"linkHref",scope:"/properties/link/properties/href",type:"Control",options:{helperText:{labelKey:"linkHrefHelperText"},messages:[{type:"ERROR",keyword:"format",icon:!0,labelKey:"linkHrefFormatError"},{type:"ERROR",keyword:"if",hidden:!0}]}},{labelKey:"linkTitle",scope:"/properties/link/properties/title",type:"Control"},{labelKey:"status",scope:"/properties/status",type:"Control",options:{control:"hub-field-input-combobox",selectionMode:"single",placeholder:"{{setStatus:translate}}",items:Object.keys(n).map((t=>({value:t,label:`{{${t}:translate}}`,icon:c(t)})))}}]},f=class{constructor(i){t(this,i),this.arcgisHubTimelineEditorChange=e(this,"arcgisHubTimelineEditorChange",7),this.hubTelemetry=e(this,"hubTelemetry",7),this._timelineSchema=d(u),this._timelineUiSchema=d(m),this._stageSchema=d(b),this.handleRemoveStage=t=>{var e;const i=null===(e=t.target)||void 0===e?void 0:e.getAttribute("data-key"),s=[...this._timeline.stages];let o;s.forEach(((t,e)=>{t.key===i&&(o=e)})),!isNaN(o)&&s.splice(o,1),this._currentStageIdx=-1,this.updateStages(s),this.hubTelemetry.emit(Object.assign(Object.assign({},h.dictionary.category.interaction.action.remove.label.step.details.timeline),{count:s.length}))},this.handleStageEditorChangeEvent=t=>{var e;t.stopPropagation();const i=null===(e=t.target)||void 0===e?void 0:e.getAttribute("data-key"),s=[...this._timeline.stages];s.forEach(((e,o)=>{e.key===i&&(s[o]=Object.assign(Object.assign({},e),t.detail.values))})),this.updateStages(s,t.detail.valid)},this.onStageEditorOpen=t=>{var e;const i=null===(e=t.target)||void 0===e?void 0:e.getAttribute("data-key");[...this._timeline.stages].forEach(((t,e)=>{t.key===i&&(this._currentStageIdx=e)}))},this.handleCalciteSwitchChange=t=>{this._timeline.canCollapse=t.target.checked,this.arcgisHubTimelineEditorChange.emit({values:this._timeline,valid:!0}),this.hubTelemetry.emit(Object.assign(Object.assign({},h.dictionary.category.interaction.action[t.target.checked?"enable":"disable"].label.collapse.details.timeline),{count:this.stages.length}))},this.values=void 0,this.showTitleAndDescription=!0,this.stages=[],this._currentStageIdx=-1,r(this,"handleAddStage","handleEditorChangeEvent","handleStageOrderChangeEvent","translationFunc")}async componentWillLoad(){var t;this.intl=await l.loadIntlForComponent(this.element),this._timeline=this.values,this.stages=(null===(t=this.values)||void 0===t?void 0:t.stages)||[],this._stageUiSchema=d(p(this.intl,y))}get isCollapseToggleDisabled(){var t;return(null===(t=this._timeline.stages)||void 0===t?void 0:t.length)<6}translationFunc(t,e,i){return this.intl.t(t,e,i)}updateStages(t,e=!0){this.stages=t,this._timeline.stages=t,(this._timeline.canCollapse||void 0===this._timeline.canCollapse&&this.stages.length>=6)&&(this._timeline.canCollapse=this.stages.length>=6),this.arcgisHubTimelineEditorChange.emit({values:this._timeline,valid:e})}handleAddStage(){const t=g("stage"),e=[...this._timeline.stages||[]],i=e.push({key:t,title:"",timeframe:"",stageDescription:"",status:n.notStarted});this._currentStageIdx=i-1,this.updateStages(e),setTimeout((()=>{this.setStageFocus(t)}),300),this.hubTelemetry.emit(Object.assign(Object.assign({},h.dictionary.category.interaction.action.add.label.step.details.timeline),{count:i}))}setStageFocus(t){this.element.querySelector(`calcite-block[data-key=${t}] arcgis-configuration-editor`).setFocus()}handleEditorChangeEvent(t){t.stopPropagation(),this._timeline=Object.assign(Object.assign({},this._timeline),t.detail.values),this.arcgisHubTimelineEditorChange.emit({values:this._timeline,valid:t.detail.valid})}handleStageOrderChangeEvent(t){var e,i;t.stopPropagation();const s=null===(e=this._timeline.stages[this._currentStageIdx])||void 0===e?void 0:e.key,o=(null===(i=t.target)||void 0===i?void 0:i.children)||[],a=Array.from(o).map((t=>t.getAttribute("data-key"))),l=[...this._timeline.stages];l.sort((function(t,e){return a.indexOf(t.key)-a.indexOf(e.key)})),this._currentStageIdx=l.findIndex((t=>t.key===s)),this.updateStages(l)}renderStages(){return i("calcite-sortable-list",{onCalciteListOrderChange:this.handleStageOrderChangeEvent},this.stages.map(((t,e)=>this.renderStage(t,e))))}renderStage(t,e){const o={title:t.title,timeframe:t.timeframe,stageDescription:t.stageDescription,link:t.link,status:t.status};return i(s,null,i("calcite-block",{collapsible:!0,"data-key":t.key,description:t.timeframe,"drag-handle":!0,heading:t.title,key:t.key,onCalciteBlockToggle:this.onStageEditorOpen,open:e===this._currentStageIdx},t.status&&i("calcite-icon",{icon:c(t.status),scale:"s",slot:"icon"}),i("calcite-card",{class:"stage-editor",dir:this.intl.direction},i("arcgis-configuration-editor",{"data-key":t.key,onArcgisConfigurationEditorChange:this.handleStageEditorChangeEvent,schema:this._stageSchema,t:this.translationFunc,uiSchema:this._stageUiSchema,values:o}),i("calcite-button",{appearance:"outline",color:"red","data-key":t.key,onClick:this.handleRemoveStage,scale:"s",width:"auto"},this.intl.t("delete")))))}render(){var t,e;const s={title:null===(t=this._timeline)||void 0===t?void 0:t.title,description:null===(e=this._timeline)||void 0===e?void 0:e.description};return i(o,{"data-element":"timeline-editor"},this.showTitleAndDescription&&i("arcgis-configuration-editor",{onArcgisConfigurationEditorChange:this.handleEditorChangeEvent,schema:this._timelineSchema,t:this.translationFunc,uiSchema:this._timelineUiSchema,values:s}),i("div",{class:"steps-heading"},this.intl.t("steps")),this.renderStages(),i("calcite-button",{appearance:"outline-fill",class:"add-step-btn",color:"blue",onClick:this.handleAddStage,round:!0,type:"button",width:"auto"},this.intl.t("addNewStep")),i("calcite-label",null,i("div",{class:"collapse-toggle-heading"},this.intl.t("enableCollapse"),i("div",null,i("calcite-icon",{icon:"information-f",id:"collapse-tooltip",scale:"s"}),i("calcite-tooltip",{label:this.intl.t("collapseToggle"),placement:"right","reference-element":"collapse-tooltip"},i("span",null,this.intl.t("collapseToggleTooltip"))))),i("calcite-switch",{checked:this._timeline.canCollapse,disabled:this.isCollapseToggleDisabled,onCalciteSwitchChange:this.handleCalciteSwitchChange})))}static get assetsDirs(){return["locales"]}get element(){return a(this)}};f.style=".sc-arcgis-hub-timeline-editor-h{display:block}calcite-sortable-list.sc-arcgis-hub-timeline-editor{margin-bottom:1.5rem}.stage-editor.sc-arcgis-hub-timeline-editor{margin-left:1rem}calcite-combobox.sc-arcgis-hub-timeline-editor{margin-bottom:0.5rem}.collapse-toggle-heading.sc-arcgis-hub-timeline-editor{display:flex;gap:0.25rem}.steps-heading.sc-arcgis-hub-timeline-editor{padding-top:0.75rem;padding-bottom:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.add-step-btn.sc-arcgis-hub-timeline-editor{margin-bottom:1.5rem}";export{f as arcgis_hub_timeline_editor}