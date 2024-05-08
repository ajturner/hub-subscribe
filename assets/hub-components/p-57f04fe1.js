import{r as t}from"./p-5b420841.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function n(n){var e;const o=["geometry","featureGeometry"].reduce(((t,n)=>t[n]?Object.assign(Object.assign({},t),{[n]:JSON.stringify(t[n])}):t),Object.assign({},null!==(e=n.data)&&void 0!==e?e:{}));return t("/posts",Object.assign(Object.assign({},n),{data:o,httpMethod:"GET"}))}function e(n){return t("/posts",Object.assign({httpMethod:"POST"},a(n)))}function o(n){return t(`/posts/${n.postId}/reply`,Object.assign({httpMethod:"POST"},a(n)))}function r(n){const e=`/posts/${n.postId}`;return n.httpMethod="GET",t(e,n)}function s(n){const e=`/posts/${n.postId}`;return n.httpMethod="DELETE",t(e,n)}function c(n){return t(`/posts/${n.postId}`,Object.assign({httpMethod:"PATCH"},a(n)))}function u(n){const e=`/posts/${n.postId}/status`;return n.httpMethod="PATCH",t(e,n)}function a(t){const{mentionUrl:n}=t,e=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e}(t,["mentionUrl"]);return n&&(e.headers=Object.assign(Object.assign({},e.headers),{"mention-url":n})),e}export{c as a,o as b,e as c,r as f,s as r,n as s,u}