import{f as e}from"./p-e65c0b02.js";import{g as i}from"./p-69555c48.js";import{g as r}from"./p-c8e0e01f.js";async function n(i,r){try{return e("content",i,r)}catch(e){console.error(e)}}async function t(e,r){var n;try{return await i({url:e,authentication:null===(n=null==r?void 0:r.userRequestOptions)||void 0===n?void 0:n.authentication})}catch(e){console.error(e)}}async function l(e,i,n){var t;let l=[];try{const s=await r({url:`${e}/${n}`,authentication:null===(t=null==i?void 0:i.userRequestOptions)||void 0===t?void 0:t.authentication});s&&(l=s.fields)}catch(e){}return l}function s(e){return{esriFieldTypeBlob:"file-text",esriFieldTypeDate:"calendar",esriFieldTypeDouble:"number",esriFieldTypeGeometry:"vertex-check",esriFieldTypeGlobalID:"fingerprint",esriFieldTypeGUID:"fingerprint",esriFieldTypeInteger:"number",esriFieldTypeOID:"fingerprint",esriFieldTypeRaster:"string",esriFieldTypeSingle:"number",esriFieldTypeSmallInteger:"number",esriFieldTypeString:"string",esriFieldTypeXML:"string"}[e]}const a=["esriFieldTypeDouble","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle"];export{a as N,n as a,t as b,l as c,s as g}