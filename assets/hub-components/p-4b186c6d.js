import{b as e}from"./p-13f8e63a.js";function i(i,l){const a=[];return l.thumbnail&&"thumbnail/ago_downloaded.png"!==l.thumbnail||a.push({type:e.custom,display:"notice",labelKey:"shared.fields._thumbnail.defaultThumbnailNotice",icon:"lightbulb",allowShowBeforeInteract:!0,alwaysShow:!0}),{labelKey:"shared.fields._thumbnail.label",scope:"/properties/_thumbnail",type:"Control",options:{control:"hub-field-input-image-picker",imgSrc:l.thumbnailUrl,maxWidth:727,maxHeight:484,aspectRatio:1.5,helperText:{labelKey:`${i}.fields._thumbnail.helperText`},sizeDescription:{labelKey:"shared.fields._thumbnail.sizeDescription"},messages:a}}}export{i as g}