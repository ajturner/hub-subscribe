import{r as s,h as i,H as t,a as e}from"./p-d4ba4c14.js";import{C as a,I as r,D as o}from"./p-c29c8d33.js";import{i as h}from"./p-be5c5009.js";import{g as n}from"./p-ec05d786.js";const c=class{constructor(i){s(this,i),this.actionLinks=void 0,this.baseUrl=void 0,this.clickable=void 0,this.corners=a.square,this.imageType=r.thumbnail,this.layout="row",this.lazy=!1,this.linkTarget=void 0,this.newTab=!1,this.selectable=!1,this.selected=!1,this.searchResult=void 0,this.shadow=o.none,this.showAdditionalInfo=!0,this.showBadges=!0,this.showOwner=!0,this.showThumbnail=!0,this.showType=!0,this.titleTag=void 0,this.isLoading=!1,this.model=void 0}get _model(){if(this.searchResult){const s=((s,i)=>{const{actionLinks:t=[],baseUrl:e="",locale:a="en-US",target:r="self"}=i||{},o=n(s,r,e);return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(s=>{const i=[],t=s.memberType;return t&&i.push(s.isGroupOwner?{icon:"user-key",color:"gray",i18nKey:"badges.members.owner",hideLabel:!0,tooltip:{i18nKey:"badges.members.owner"}}:"admin"===t?{icon:"user-up",color:"gray",i18nKey:"badges.members.admin",hideLabel:!0,tooltip:{i18nKey:"badges.members.admin"}}:{icon:"user",color:"gray",i18nKey:"badges.members.member",hideLabel:!0,tooltip:{i18nKey:"badges.members.member"}}),{access:s.access,badges:i,family:s.family,id:s.id,source:s.name?`@${s.id}`:void 0,summary:s.summary,title:s.name||`@${s.id}`,type:s.type}})(s)),{actionLinks:t}),!isNaN(s.index)&&{index:s.index}),{titleUrl:o}),s.links.thumbnail&&{thumbnailUrl:s.links.thumbnail})})(this.searchResult,{actionLinks:this.actionLinks,baseUrl:this.baseUrl,locale:this.intl.locale,target:this.linkTarget});return"private"!==s.access||s.summary||(s.summary=this.intl.t("privateProfileSummary")),s}}async componentWillLoad(){this.intl=await h.loadIntlForComponent(this.element)}render(){return i(t,{"data-element":"user-card"},i("arcgis-hub-card",{clickable:this.clickable,corners:this.corners,imageType:this.imageType,layout:this.layout,lazy:this.lazy,loading:this.isLoading,model:this._model,newTab:this.newTab,selectable:this.selectable,selected:this.selected,shadow:this.shadow,showAdditionalInfo:this.showAdditionalInfo,showBadges:this.showBadges,showOwner:this.showOwner,showThumbnail:this.showThumbnail,showType:this.showType,titleTag:this.titleTag}))}static get assetsDirs(){return["locales"]}get element(){return e(this)}};export{c as arcgis_hub_user_card}