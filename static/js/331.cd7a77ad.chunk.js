"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[331],{2331:function(e,a,t){t.r(a);var s=t(885),r=t(2791),l=t(2981),o=t(8358),n=t(8282),c=function(e,a){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]])}return t},i=(0,r.memo)((function(e){var a=e.kcContext,t=e.i18n,i=e.doFetchDefaultThemeResources,m=void 0===i||i,d=e.Template,u=void 0===d?l.Z:d,p=c(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),k=a.social,b=a.realm,v=a.url,f=a.usernameEditDisabled,C=a.login,E=a.auth,g=a.registrationDisabled,h=t.msg,y=t.msgStr,w=(0,r.useState)(!1),F=(0,s.Z)(w,2),N=F[0],W=F[1],O=(0,n.useConstCallback)((function(e){var a;e.preventDefault(),W(!0);var t=e.target;null===(a=t.querySelector("input[name='email']"))||void 0===a||a.setAttribute("name","username"),t.submit()}));return r.createElement(u,Object.assign({},Object.assign({kcContext:a,i18n:t,doFetchDefaultThemeResources:m},p),{displayInfo:k.displayInfo,displayWide:b.password&&void 0!==k.providers,headerNode:h("doLogIn"),formNode:r.createElement("div",{id:"kc-form",className:(0,o.W)(b.password&&void 0!==k.providers&&p.kcContentWrapperClass)},r.createElement("div",{id:"kc-form-wrapper",className:(0,o.W)(b.password&&k.providers&&[p.kcFormSocialAccountContentClass,p.kcFormSocialAccountClass])},b.password&&r.createElement("form",{id:"kc-form-login",onSubmit:O,action:v.loginAction,method:"post"},r.createElement("div",{className:(0,o.W)(p.kcFormGroupClass)},function(){var e,a=b.loginWithEmailAllowed?b.registrationEmailAsUsername?"email":"usernameOrEmail":"username",t="usernameOrEmail"===a?"username":a;return r.createElement(r.Fragment,null,r.createElement("label",{htmlFor:t,className:(0,o.W)(p.kcLabelClass)},h(a)),r.createElement("input",Object.assign({tabIndex:1,id:t,className:(0,o.W)(p.kcInputClass),name:t,defaultValue:null!==(e=C.username)&&void 0!==e?e:"",type:"text"},f?{disabled:!0}:{autoFocus:!0,autoComplete:"off"})))}()),r.createElement("div",{className:(0,o.W)(p.kcFormGroupClass)},r.createElement("label",{htmlFor:"password",className:(0,o.W)(p.kcLabelClass)},h("password")),r.createElement("input",{tabIndex:2,id:"password",className:(0,o.W)(p.kcInputClass),name:"password",type:"password",autoComplete:"off"})),r.createElement("div",{className:(0,o.W)(p.kcFormGroupClass,p.kcFormSettingClass)},r.createElement("div",{id:"kc-form-options"},b.rememberMe&&!f&&r.createElement("div",{className:"checkbox"},r.createElement("label",null,r.createElement("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},C.rememberMe?{checked:!0}:{})),h("rememberMe")))),r.createElement("div",{className:(0,o.W)(p.kcFormOptionsWrapperClass)},b.resetPasswordAllowed&&r.createElement("span",null,r.createElement("a",{tabIndex:5,href:v.loginResetCredentialsUrl},h("doForgotPassword"))))),r.createElement("div",{id:"kc-form-buttons",className:(0,o.W)(p.kcFormGroupClass)},r.createElement("input",Object.assign({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===E||void 0===E?void 0:E.selectedCredential)?{value:E.selectedCredential}:{})),r.createElement("input",{tabIndex:4,className:(0,o.W)(p.kcButtonClass,p.kcButtonPrimaryClass,p.kcButtonBlockClass,p.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:y("doLogIn"),disabled:N})))),b.password&&void 0!==k.providers&&r.createElement("div",{id:"kc-social-providers",className:(0,o.W)(p.kcFormSocialAccountContentClass,p.kcFormSocialAccountClass)},r.createElement("ul",{className:(0,o.W)(p.kcFormSocialAccountListClass,k.providers.length>4&&p.kcFormSocialAccountDoubleListClass)},k.providers.map((function(e){return r.createElement("li",{key:e.providerId,className:(0,o.W)(p.kcFormSocialAccountListLinkClass)},r.createElement("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:(0,o.W)("zocial",e.providerId)},r.createElement("span",null,e.displayName)))}))))),infoNode:b.password&&b.registrationAllowed&&!g&&r.createElement("div",{id:"kc-registration"},r.createElement("span",null,h("noAccount"),r.createElement("a",{tabIndex:6,href:v.registrationUrl},h("doRegister"))))}))}));a.default=i}}]);
//# sourceMappingURL=331.cd7a77ad.chunk.js.map