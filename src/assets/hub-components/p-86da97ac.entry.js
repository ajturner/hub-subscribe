import{r as t,c as e,h as i}from"./p-d4ba4c14.js";import{b as a}from"./p-fd260f2d.js";import{g as s}from"./p-d9eeaeaf.js";const l=class{constructor(i){t(this,i),this.arcgisConfigurationEditorFieldInputChange=e(this,"arcgisConfigurationEditorFieldInputChange",7),this.params=void 0,a(this,"handleCalciteSelectChange")}handleCalciteSelectChange(t){const e=t.target.selectedOption.getAttribute("data-option-index");this.arcgisConfigurationEditorFieldInputChange.emit(this.params.schema.enum[e])}renderOptions({schema:t,uiSchema:e,value:a,t:l}){return(t.enum||[]).map(((t,o)=>{var n,d;const c=(null===(n=e.options)||void 0===n?void 0:n.labels)?(null===(d=e.options)||void 0===d?void 0:d.labels[o])||t:s(e,t,l,{path:"label",fallback:t});return i("calcite-option",{"data-option-index":o,key:t,selected:t===a,value:t},c)}))}render(){var t,e;return i("calcite-select",{disabled:this.params.disabled||(null===(e=null===(t=this.params.uiSchema)||void 0===t?void 0:t.options)||void 0===e?void 0:e.disabled),label:this.params.schema.title,onCalciteSelectChange:this.handleCalciteSelectChange},this.renderOptions(this.params))}};export{l as hub_field_input_select}