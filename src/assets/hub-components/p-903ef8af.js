import{r as t,N as e,e as r,A as n}from"./p-dcdf7b57.js";import{c as i}from"./p-637ea136.js";
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
***************************************************************************** */var s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function o(e,r){var n=r;return n.rawResponse=!1,t(e,n).then((function(t){var e={token:t.access_token,username:t.username,expires:new Date(Date.now()+(1e3*t.expires_in-1e3)),ssl:!0===t.ssl};return t.refresh_token&&(e.refreshToken=t.refresh_token),e}))}function a(r,n){var i=n;return i.params.referer="undefined"!=typeof window&&window.location&&window.location.host?window.location.host:e,t(r,i)}var u=/^https?:\/\/(\S+)\.arcgis\.com.+/;function h(t){return u.test(t)}function c(t){if(!u.test(t))return null;var e=t.match(u)[1].split(".").pop();return e.includes("dev")?"dev":e.includes("qa")?"qa":"production"}var f=function(){function e(t){if(this.clientId=t.clientId,this._refreshToken=t.refreshToken,this._refreshTokenExpires=t.refreshTokenExpires,this.username=t.username,this.password=t.password,this._token=t.token,this._tokenExpires=t.tokenExpires,this.portal=t.portal?i(t.portal):"https://www.arcgis.com/sharing/rest",this.ssl=t.ssl,this.provider=t.provider||"arcgis",this.tokenDuration=t.tokenDuration||20160,this.redirectUri=t.redirectUri,this.refreshTokenTTL=t.refreshTokenTTL||20160,this.server=t.server,this.federatedServers={},this.trustedDomains=[],t.server){var e=this.getServerRootUrl(t.server);this.federatedServers[e]={token:t.token,expires:t.tokenExpires}}this._pendingTokenRequests={}}return Object.defineProperty(e.prototype,"token",{get:function(){return this._token},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tokenExpires",{get:function(){return this._tokenExpires},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"refreshToken",{get:function(){return this._refreshToken},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"refreshTokenExpires",{get:function(){return this._refreshTokenExpires},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"trustedServers",{get:function(){return console.log("DEPRECATED: use federatedServers instead"),this.federatedServers},enumerable:!1,configurable:!0}),e.beginOAuth2=function(t,i){void 0===i&&(i=window),t.duration&&console.log("DEPRECATED: 'duration' is deprecated - use 'expiration' instead");var o,a=s({portal:"https://www.arcgis.com/sharing/rest",provider:"arcgis",expiration:20160,popup:!0,popupWindowFeatures:"height=400,width=600,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes",state:t.clientId,locale:""},t),u=a.portal,h=a.provider,c=a.clientId,f=a.expiration,p=a.redirectUri,d=a.popup,l=a.popupWindowFeatures,w=a.state,m=a.locale,v=a.params;if(o="arcgis"===h?u+"/oauth2/authorize?client_id="+c+"&response_type=token&expiration="+(t.duration||f)+"&redirect_uri="+encodeURIComponent(p)+"&state="+w+"&locale="+m:u+"/oauth2/social/authorize?client_id="+c+"&socialLoginProviderName="+h+"&autoAccountCreateForSocial=true&response_type=token&expiration="+(t.duration||f)+"&redirect_uri="+encodeURIComponent(p)+"&state="+w+"&locale="+m,v&&(o=o+"&"+r(v)),d){var g,k=((g={promise:null,resolve:null,reject:null}).promise=new Promise((function(t,e){g.resolve=t,g.reject=e})),g);return i["__ESRI_REST_AUTH_HANDLER_"+c]=function(t,r){if(t){var i=JSON.parse(t);k.reject(new n(i.errorMessage,i.error))}else if(r){var s=JSON.parse(r);k.resolve(new e({clientId:c,portal:u,ssl:s.ssl,token:s.token,tokenExpires:new Date(s.expires),username:s.username}))}},i.open(o,"oauth-window",l),k.promise}i.location.href=o},e.completeOAuth2=function(t,r){void 0===r&&(r=window);var i=s({portal:"https://www.arcgis.com/sharing/rest",popup:!0},t),o=i.portal,a=i.clientId,u=i.popup;function h(t,i){try{var s=void 0,h="__ESRI_REST_AUTH_HANDLER_"+a;if(u&&(r.opener?r.opener.parent&&r.opener.parent[h]?s=r.opener.parent[h]:r.opener&&r.opener[h]&&(s=r.opener[h]):r!==r.parent&&r.parent&&r.parent[h]&&(s=r.parent[h]),s))return s(t?JSON.stringify(t):void 0,JSON.stringify(i)),void r.close()}catch(t){throw new n('Unable to complete authentication. It\'s possible you specified popup based oAuth2 but no handler from "beginOAuth2()" present. This generally happens because the "popup" option differs between "beginOAuth2()" and "completeOAuth2()".')}if(t)throw new n(t.errorMessage,t.error);return new e({clientId:a,portal:o,ssl:i.ssl,token:i.token,tokenExpires:i.expires,username:i.username})}var c=r.location.hash.replace(/^#/,"").split("&").reduce((function(t,e){var r=function(t){var e=t.split("="),r=e[1];return{key:decodeURIComponent(e[0]),value:decodeURIComponent(r)}}(e);return t[r.key]=r.value,t}),{});if(!c.access_token){var f=void 0,p="Unknown error";return c.error&&(f=c.error,p=c.error_description),h({error:f,errorMessage:p})}return h(void 0,{token:c.access_token,expires:new Date(Date.now()+1e3*parseInt(c.expires_in,10)-6e4),ssl:"true"===c.ssl,username:c.username})},e.fromParent=function(t,r){var n;return!r&&window&&(r=window),new Promise((function(i,s){r.addEventListener("message",n=function(t){if(t.source===r.parent&&t.data)try{return i(e.parentMessageHandler(t))}catch(t){return s(t)}},!1),r.parent.postMessage({type:"arcgis:auth:requestCredential"},t)})).then((function(t){return r.removeEventListener("message",n,!1),t}))},e.authorize=function(t,e){t.duration&&console.log("DEPRECATED: 'duration' is deprecated - use 'expiration' instead");var r=s({portal:"https://arcgis.com/sharing/rest",expiration:20160},t);e.writeHead(301,{Location:r.portal+"/oauth2/authorize?client_id="+r.clientId+"&expiration="+(t.duration||r.expiration)+"&response_type=code&redirect_uri="+encodeURIComponent(r.redirectUri)}),e.end()},e.exchangeAuthorizationCode=function(t,r){var n=s({portal:"https://www.arcgis.com/sharing/rest",refreshTokenTTL:20160},t),i=n.portal,a=n.clientId,u=n.redirectUri,h=n.refreshTokenTTL;return o(i+"/oauth2/token",{params:{grant_type:"authorization_code",client_id:a,redirect_uri:u,code:r}}).then((function(t){return new e({clientId:a,portal:i,ssl:t.ssl,redirectUri:u,refreshToken:t.refreshToken,refreshTokenTTL:h,refreshTokenExpires:new Date(Date.now()+60*(h-1)*1e3),token:t.token,tokenExpires:t.expires,username:t.username})}))},e.deserialize=function(t){var r=JSON.parse(t);return new e({clientId:r.clientId,refreshToken:r.refreshToken,refreshTokenExpires:new Date(r.refreshTokenExpires),username:r.username,password:r.password,token:r.token,tokenExpires:new Date(r.tokenExpires),portal:r.portal,ssl:r.ssl,tokenDuration:r.tokenDuration,redirectUri:r.redirectUri,refreshTokenTTL:r.refreshTokenTTL})},e.fromCredential=function(t){var r=void 0===t.ssl||t.ssl,n=t.expires||Date.now()+72e5;return new e({portal:t.server.includes("sharing/rest")?t.server:t.server+"/sharing/rest",ssl:r,token:t.token,username:t.userId,tokenExpires:new Date(n)})},e.parentMessageHandler=function(t){if("arcgis:auth:credential"===t.data.type)return e.fromCredential(t.data.credential);if("arcgis:auth:error"===t.data.type){var r=new Error(t.data.error.message);throw r.name=t.data.error.name,r}throw new Error("Unknown message type.")},e.prototype.toCredential=function(){return{expires:this.tokenExpires.getTime(),server:this.portal,ssl:this.ssl,token:this.token,userId:this.username}},e.prototype.getUser=function(e){var r=this;if(this._pendingUserRequest)return this._pendingUserRequest;if(this._user)return Promise.resolve(this._user);var n=this.portal+"/community/self",i=s(s({httpMethod:"GET",authentication:this},e),{rawResponse:!1});return this._pendingUserRequest=t(n,i).then((function(t){return r._user=t,r._pendingUserRequest=null,t})),this._pendingUserRequest},e.prototype.getPortal=function(e){var r=this;if(this._pendingPortalRequest)return this._pendingPortalRequest;if(this._portalInfo)return Promise.resolve(this._portalInfo);var n=this.portal+"/portals/self",i=s(s({httpMethod:"GET",authentication:this},e),{rawResponse:!1});return this._pendingPortalRequest=t(n,i).then((function(t){return r._portalInfo=t,r._pendingPortalRequest=null,t})),this._pendingPortalRequest},e.prototype.getUsername=function(){return this.username?Promise.resolve(this.username):this._user?Promise.resolve(this._user.username):this.getUser().then((function(t){return t.username}))},e.prototype.getToken=function(t,e){return n=t,i=h(r=this.portal),s=h(n),o=c(r),a=c(n),i&&s&&o===a||new RegExp(this.portal,"i").test(t)?this.getFreshToken(e):this.getTokenForServer(t,e);var r,n,i,s,o,a},e.prototype.validateAppAccess=function(e){return this.getToken(this.portal).then((function(r){return function(e,r,n){return void 0===n&&(n="https://www.arcgis.com/sharing/rest"),t(n+"/oauth2/validateAppAccess",{method:"POST",params:{f:"json",client_id:r,token:e}})}(r,e)}))},e.prototype.toJSON=function(){return{clientId:this.clientId,refreshToken:this.refreshToken,refreshTokenExpires:this.refreshTokenExpires,username:this.username,password:this.password,token:this.token,tokenExpires:this.tokenExpires,portal:this.portal,ssl:this.ssl,tokenDuration:this.tokenDuration,redirectUri:this.redirectUri,refreshTokenTTL:this.refreshTokenTTL}},e.prototype.serialize=function(){return JSON.stringify(this)},e.prototype.enablePostMessageAuth=function(t,e){!e&&window&&(e=window),this._hostHandler=this.createPostMessageHandler(t),e.addEventListener("message",this._hostHandler,!1)},e.prototype.disablePostMessageAuth=function(t){!t&&window&&(t=window),t.removeEventListener("message",this._hostHandler,!1)},e.prototype.refreshSession=function(t){return this._user=null,this.username&&this.password?this.refreshWithUsernameAndPassword(t):this.clientId&&this.refreshToken?this.refreshWithRefreshToken():Promise.reject(new n("Unable to refresh token."))},e.prototype.getServerRootUrl=function(t){var e=i(t).split(/\/rest(\/admin)?\/services(?:\/|#|\?|$)/)[0].match(/(https?:\/\/)(.+)/),r=e[1],n=e[2].split("/"),s=n[0],o=n.slice(1);return""+r+s.toLowerCase()+"/"+o.join("/")},e.prototype.getDomainCredentials=function(t){return this.trustedDomains&&this.trustedDomains.length&&this.trustedDomains.some((function(e){return t.startsWith(e)}))?"include":"same-origin"},e.prototype.createPostMessageHandler=function(t){var e=this;return function(r){var n=t.indexOf(r.origin)>-1,i="arcgis:auth:requestCredential"===r.data.type,s=e.tokenExpires.getTime()>Date.now();if(n&&i){var o={};if(s){var a=e.toCredential();a.server=a.server.replace("/sharing/rest",""),o={type:"arcgis:auth:credential",credential:a}}else o={type:"arcgis:auth:error",error:{name:"tokenExpiredError",message:"Session token was expired, and not returned to the child application"}};r.source.postMessage(o,r.origin)}}},e.prototype.getTokenForServer=function(e,r){var s=this,o=this.getServerRootUrl(e),h=this.federatedServers[o];return h&&h.expires&&h.expires.getTime()>Date.now()?Promise.resolve(h.token):(this._pendingTokenRequests[o]||(this._pendingTokenRequests[o]=this.fetchAuthorizedDomains().then((function(){return t(o+"/rest/info",{credentials:s.getDomainCredentials(e)}).then((function(a){if(a.owningSystemUrl){if(h=a.owningSystemUrl,f=i(function(t){if(!u.test(t))return t;switch(c(t)){case"dev":return"https://devext.arcgis.com/sharing/rest";case"qa":return"https://qaext.arcgis.com/sharing/rest";default:return"https://www.arcgis.com/sharing/rest"}}(s.portal)).replace(/https?:\/\//,""),p=i(h).replace(/https?:\/\//,""),new RegExp(p,"i").test(f))return t(a.owningSystemUrl+"/sharing/rest/info",r);throw new n(e+" is not federated with "+s.portal+".","NOT_FEDERATED")}var h,f,p;if(a.authInfo&&void 0!==s.federatedServers[o])return Promise.resolve({authInfo:a.authInfo});throw new n(e+" is not federated with any portal and is not explicitly trusted.","NOT_FEDERATED")})).then((function(t){return t.authInfo.tokenServicesUrl})).then((function(t){return s.token&&s.tokenExpires.getTime()>Date.now()?a(t,{params:{token:s.token,serverUrl:e,expiration:s.tokenDuration,client:"referer"}}):a(t,{params:{username:s.username,password:s.password,expiration:s.tokenDuration,client:"referer"}}).then((function(t){return s._token=t.token,s._tokenExpires=new Date(t.expires),t}))})).then((function(t){return s.federatedServers[o]={expires:new Date(t.expires),token:t.token},delete s._pendingTokenRequests[o],t.token}))}))),this._pendingTokenRequests[o])},e.prototype.getFreshToken=function(t){var e=this;return this.token&&!this.tokenExpires||this.token&&this.tokenExpires&&this.tokenExpires.getTime()>Date.now()?Promise.resolve(this.token):(this._pendingTokenRequests[this.portal]||(this._pendingTokenRequests[this.portal]=this.refreshSession(t).then((function(t){return e._pendingTokenRequests[e.portal]=null,t.token}))),this._pendingTokenRequests[this.portal])},e.prototype.refreshWithUsernameAndPassword=function(t){var e=this,r=s({params:{username:this.username,password:this.password,expiration:this.tokenDuration}},t);return a(this.portal+"/generateToken",r).then((function(t){return e._token=t.token,e._tokenExpires=new Date(t.expires),e}))},e.prototype.refreshWithRefreshToken=function(t){var e=this;if(this.refreshToken&&this.refreshTokenExpires&&this.refreshTokenExpires.getTime()<Date.now())return this.refreshRefreshToken(t);var r=s({params:{client_id:this.clientId,refresh_token:this.refreshToken,grant_type:"refresh_token"}},t);return o(this.portal+"/oauth2/token",r).then((function(t){return e._token=t.token,e._tokenExpires=t.expires,e}))},e.prototype.refreshRefreshToken=function(t){var e=this,r=s({params:{client_id:this.clientId,refresh_token:this.refreshToken,redirect_uri:this.redirectUri,grant_type:"exchange_refresh_token"}},t);return o(this.portal+"/oauth2/token",r).then((function(t){return e._token=t.token,e._tokenExpires=t.expires,e._refreshToken=t.refreshToken,e._refreshTokenExpires=new Date(Date.now()+60*(e.refreshTokenTTL-1)*1e3),e}))},e.prototype.fetchAuthorizedDomains=function(){var t=this;return this.server||!this.portal?Promise.resolve(this):this.getPortal().then((function(e){return e.authorizedCrossOriginDomains&&e.authorizedCrossOriginDomains.length&&(t.trustedDomains=e.authorizedCrossOriginDomains.filter((function(t){return!t.startsWith("http://")})).map((function(t){return t.startsWith("https://")?t:"https://"+t}))),t}))},e}();export{f as U}