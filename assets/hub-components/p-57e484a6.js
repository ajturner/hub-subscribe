import{i as r}from"./p-90dc0f6f.js";import{g as o}from"./p-796574a4.js";import{i as e}from"./p-df1dc3df.js";function t(t,s){let i=!1;const{itemControl:n,owner:p,orgId:a}=t,{roleId:d,role:f,username:m,groups:c,orgId:u}=s,l=r(["admin","update"],n)||!!p&&p===m||!(!a||a!==u)&&!d&&"org_admin"===f,g=function(o){const{privileges:e=[]}=o;return r(e,"portal:user:createItem")}(s);if(g&&l)i=!0;else if(g){const s=[...o(t,"groupIds")||[],o(t,"properties.collaborationGroupId")];i=c.some((o=>e(o)&&r(s,o.id)))}return i}export{t as c}