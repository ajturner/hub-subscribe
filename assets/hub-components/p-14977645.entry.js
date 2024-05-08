import{r as t,c as s,h as i,a}from"./p-d4ba4c14.js";import{i as e}from"./p-be5c5009.js";import{b as r}from"./p-fd260f2d.js";import{g as h}from"./p-94a4bb53.js";import"./p-b728aff4.js";import"./p-796574a4.js";import"./p-a7af8413.js";const o=class{constructor(i){t(this,i),this.arcgisStatCardEditorChange=s(this,"arcgisStatCardEditorChange",7),this.values={},this.context=void 0,this.themeColors=[],this.currentValues={},this._schema=void 0,this._uiSchema=void 0,r(this,"handleEditorChangeEvent","translationFunc","_getEditorConfig")}get uiSchemaOptions(){return{themeColors:this.themeColors}}get facets(){return[{label:this.intl.t("dynamicStat.facets.sharing"),key:"access",field:"access",display:"multi-select",operation:"OR"}]}async componentWillLoad(){this.intl=await e.loadIntlForComponent(this.element),this.values=this.migrateValues(this.values),this.currentValues=this.values,this._getEditorConfig()}async _getEditorConfig(){const t=await h("","hub:card:stat",this.uiSchemaOptions,this.context);this._schema=t.schema,this._uiSchema=t.uiSchema}migrateValues(t){return"string"==typeof t.shareableOnHover&&(t.shareableOnHover="hover"===t.shareableOnHover),void 0===t.allowUnitFormatting&&(t.allowUnitFormatting=!!t.unit),void 0===t.allowLink&&(t.allowLink=!!t.sourceLink||!!t.sourceTitle),t}async handleEditorChangeEvent(t){var s;t.stopPropagation();const{valid:i,values:a}=t.detail;this.currentValues=Object.assign(Object.assign({},this.currentValues),a);let{legacyWhere:e}=this.currentValues;(null===(s=a.expressionSet)||void 0===s?void 0:s.length)&&(e=""),this.arcgisStatCardEditorChange.emit({valid:i,values:Object.assign(Object.assign({},a),{cardId:this.currentValues.cardId,schemaVersion:this.currentValues.schemaVersion,legacyWhere:e})})}updateSchemas(){this._getEditorConfig()}translationFunc(t,s,i){return this.intl.t(t,s,i)}render(){return this._schema?i("arcgis-configuration-editor",{context:this.context,onArcgisConfigurationEditorChange:this.handleEditorChangeEvent,schema:this._schema,t:this.translationFunc,uiSchema:this._uiSchema,values:this.values}):i("arcgis-skeleton-loader",{active:!0})}static get assetsDirs(){return["locales"]}get element(){return a(this)}static get watchers(){return{context:["updateSchemas"]}}};o.style=":host{display:block}";export{o as arcgis_stat_card_editor}