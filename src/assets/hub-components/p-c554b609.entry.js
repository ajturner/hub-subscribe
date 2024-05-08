import{r as e,c as t,h as i,H as s,a as o}from"./p-d4ba4c14.js";import{b as h}from"./p-fd260f2d.js";import{i as a}from"./p-be5c5009.js";import{d}from"./p-8cf4bd83.js";import{watch as n}from"@arcgis/core/core/watchUtils.js";import l from"@arcgis/core/widgets/Legend.js";import{l as g}from"./p-e16232c9.js";import"./p-dfe5a97d.js";import"./p-4c02fe5e.js";import"@arcgis/core/kernel.js";const r=class{constructor(i){e(this,i),this.arcgisHubWidgetPanelToggled=t(this,"arcgisHubWidgetPanelToggled",7),this.hubTelemetry=t(this,"hubTelemetry",7),this.scale="m",this.view=void 0,this.active=void 0,this.bottomOffset=0,this.topOffset=0,this.closed=!0,this.viewHeight=void 0,this.viewHeightWithOffset=void 0,this.viewWidth=void 0,h(this,"toggleClosed","setPanelHeight","handleSetPanelRef","handleSetWidgetRef")}async componentWillLoad(){const{el:e}=this,t=e&&e.closest("arcgis-hub-map-widget-container");this.viewPosition=null==t?void 0:t.viewPosition,this.intl=await a.loadIntlForComponent(e)}async componentDidLoad(){const{view:e}=this;e&&this.addWidget(),g()}addWidgetToView(e,t){e&&e!==t&&this.addWidget()}updateViewHeightWhenOpen(){const{closed:e}=this;this.active=!e,this.active&&this.setPanelHeight()}emitEventOnActiveChange(e){this.hubTelemetry.emit(e?d.dictionary.category.interaction.action.open.label.panel.details.legend:d.dictionary.category.interaction.action.close.label.panel.details.legend)}handleCalcitePanelDismissedChange(e){e.stopPropagation(),this.arcgisHubWidgetPanelToggled.emit(e.target.closed)}handlePanelToggled(e){const{target:t,detail:i}=e,{el:s}=this;t===s?this.closed=i:i||(this.closed=!0)}handleSetPanelRef(e){e&&(this.panelEl=e)}handleSetWidgetRef(e){e&&(this.legendEl=e)}toggleClosed(){this.closed=!this.closed}setPanelHeight(){const{legendEl:e,view:{size:t,container:i}}=this,[s,o]=t;this.viewHeight=o,this.viewWidth=s;const{top:h,bottom:a}=i.getBoundingClientRect(),{top:d,bottom:n}=e.getBoundingClientRect();this.topOffset=d-h,this.viewPosition.includes("top")?this.viewHeightWithOffset=o-this.topOffset:(this.bottomOffset=a-n,this.viewHeightWithOffset=o-this.bottomOffset)}async addWidget(){const{legend:e,view:t,panelEl:i}=this;t&&i&&!e&&(await t.when(),this.legend=new l({view:t,container:i}),n(t,"size",this.setPanelHeight))}get positionClass(){const{viewPosition:e}=this;if(e)return`hub-widget-legend ${e.split("-").join(" ")}`}get styles(){const{viewHeight:e,viewWidth:t,viewHeightWithOffset:i,bottomOffset:s,topOffset:o,active:h}=this;let a=640;return a>e&&(a=e),{"--panel-height":`${i}px`,"--panel-height-mobile":`${a}px`,"--view-width":`${t}px`,"--bottom-offset":`${s}px`,"--top-offset":`${o}px`,"--mobile-display":h?"flex":"none"}}get _messageOverrides(){return{close:this.intl.t("textClose")}}render(){const{styles:e,positionClass:t,closed:o,active:h,scale:a}=this,d=this.intl.t("heading"),n=this.intl.t("textOpen"),l=this.intl.t("textClose");return i(s,{"data-element":"map-widget-legend",style:e},i("calcite-panel",{class:t,closable:!0,closed:o,heading:d,messageOverrides:this._messageOverrides,ref:this.handleSetPanelRef}),i("arcgis-hub-map-widget-generic",{active:h,icon:"legend",onClick:this.toggleClosed,ref:this.handleSetWidgetRef,scale:a,text:h?l:n}))}static get assetsDirs(){return["locales"]}get el(){return o(this)}static get watchers(){return{view:["addWidgetToView"],closed:["updateViewHeightWhenOpen"],active:["emitEventOnActiveChange"]}}};r.style=":host{display:block}calcite-panel{height:inherit}calcite-panel div{background-color:var(--calcite-ui-foreground-1)}.esri-legend__service,.esri-legend__service>.esri-widget__heading{color:var(--calcite-ui-text-1)}.hub-widget-legend{min-width:none !important;max-width:none !important;padding:0px}calcite-panel[closed]{display:none}@media only screen and (min-width: 640px){.hub-widget-legend.top{position:absolute}.hub-widget-legend.top{width:25rem}.hub-widget-legend.top{padding:0px}.hub-widget-legend.top{max-height:calc(var(--panel-height) - 2rem)}.hub-widget-legend.bottom{position:absolute}.hub-widget-legend.bottom{width:25rem}.hub-widget-legend.bottom{padding:0px}.hub-widget-legend.bottom{bottom:calc(var(--bottom-offset) - 2rem);max-height:calc(var(--panel-height) - 1rem)}.hub-widget-legend.right{right:100%}.hub-widget-legend.right{margin-right:1rem}.hub-widget-legend.left{left:100%}.hub-widget-legend.left{margin-left:1rem}.hub-widget-legend.bottom.left{margin-left:0.5rem}.hub-widget-legend.bottom.right{margin-right:0.5rem}}@media only screen and (max-width: 640px){.hub-widget-legend.top{position:absolute}.hub-widget-legend.top{z-index:50}.hub-widget-legend.top{padding:0px}.hub-widget-legend.top{top:calc(var(--panel-height) - var(--panel-height-mobile) + var(--top-offset) - 1rem);width:calc(var(--view-width) + 1px);display:var(--mobile-display);height:var(--panel-height-mobile)}.hub-widget-legend.bottom{position:absolute}.hub-widget-legend.bottom{z-index:50}.hub-widget-legend.bottom{padding:0px}.hub-widget-legend.bottom{bottom:calc(var(--panel-height-mobile) - var(--panel-height) - var(--bottom-offset) - 1rem);width:calc(var(--view-width) + 1px);display:var(--mobile-display);height:var(--panel-height-mobile)}.hub-widget-legend.right{right:-1rem}.hub-widget-legend.left{left:-1rem}}";export{r as arcgis_hub_map_widget_legend}