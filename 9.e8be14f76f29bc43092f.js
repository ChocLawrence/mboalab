(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{hGdz:function(l,n,u){"use strict";u.d(n,"a",function(){return t});class t{}},mrSG:function(l,n,u){"use strict";function t(l,n,u,t){return new(u||(u=Promise))(function(i,o){function e(l){try{r(t.next(l))}catch(n){o(n)}}function s(l){try{r(t.throw(l))}catch(n){o(n)}}function r(l){var n;l.done?i(l.value):(n=l.value,n instanceof u?n:new u(function(l){l(n)})).then(e,s)}r((t=t.apply(l,n||[])).next())})}u.d(n,"a",function(){return t})},"v+Hw":function(l,n,u){"use strict";u.r(n),u.d(n,"PasswordResetModuleNgFactory",function(){return j});var t=u("8Y7J");class i{}var o=u("pMnS"),e=u("s7LF"),s=u("SVse"),r=u("iInd"),a=u("mrSG");class c{constructor(l,n,u,t){this.core=l,this.router=n,this.fb=u,this.authenticationservice=t,this.loading=!1,this.verification=!1,this.resetForm=this.fb.group({email:["",[e.t.required,e.t.email]]}),this.changePasswordForm=this.fb.group({password:["",[e.t.required]],confirmPassword:["",[e.t.required]]})}ngOnInit(){this.processReset()}onSubmitReset(){return this.resetFormIsValid()&&this.core.checkIfOnline()&&(this.loading=!0,this.authenticationservice.resetPassword(this.resetForm.value).then(l=>{this.core.showSuccess("Success","Check Email for reset link..."),setTimeout(function(){this.router.navigate(["/login"])},2e3),this.resetForm.reset(),this.loading=!1}).catch(l=>{this.loading=!1,this.core.handleError(l)})),!1}onSubmitChangePassword(){if(this.changePasswordFormIsValid()&&this.core.checkIfOnline()){this.loading=!0;let l=this.changePasswordForm.value;l.resetPasswordToken=this.resetId,this.authenticationservice.resetPasswordNow(l).then(l=>{this.core.showSuccess("Success","Password reset successfully"),setTimeout(function(){this.router.navigate(["/login"])},3e3),this.changePasswordForm.reset(),this.loading=!1}).catch(l=>{this.loading=!1,this.core.handleError(l)})}return!1}processReset(){return Object(a.a)(this,void 0,void 0,function*(){let l=this.router.url.split("/");this.state=l[2],this.resetId=l[3],this.core.isEmptyOrNull(this.resetId)||"change"!=this.state||(yield this.verifyResetId(this.resetId))})}verifyResetId(l){return Object(a.a)(this,void 0,void 0,function*(){this.loading=!0,yield this.authenticationservice.verifyResetId(l).then(l=>{this.loading=!1,this.verification=!0}).catch(l=>{this.loading=!1,this.verification=!1,this.core.handleError(l),this.redirectToLogin()})})}redirectToLogin(){this.core.showSuccess("Success","Redirecting to login.."),this.router.navigate(["/login"])}resetFormIsValid(){return this.resetForm.controls.email.valid}changePasswordFormIsValid(){return this.changePasswordForm.controls.password.valid&&this.changePasswordForm.controls.confirmPassword.valid&&this.passwordsMatch()}passwordsMatch(){return this.changePasswordForm.controls.password.value==this.changePasswordForm.controls.confirmPassword.value}}var b=u("mkVU"),d=u("ej43"),g=t.Cb({encapsulation:0,styles:[[".section-gap[_ngcontent-%COMP%]{padding-top:20px}.conatct-section[_ngcontent-%COMP%]   .conatct-one-bg[_ngcontent-%COMP%]{height:100vh;min-height:100vh}@media only screen and (max-width:768px){.photo[_ngcontent-%COMP%]{visibility:hidden;display:none}.security[_ngcontent-%COMP%]{padding-top:40%}.conatct-section[_ngcontent-%COMP%]   .contact-form-area[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]{font-size:19px}}"]],data:{}});function m(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,0,"img",[["alt","img"],["src","assets/img/security.jpg"]],null,null,null,null,null))],null,null)}function h(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,0,"img",[["alt","img"],["src","assets/img/new-password.jpg"]],null,null,null,null,null))],null,null)}function p(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,0,"i",[["class","fal fa-long-arrow-right"]],null,null,null,null,null))],null,null)}function f(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,2,"div",[["class","spinner-border float-right"],["role","status"]],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),t.dc(-1,null,["Loading..."]))],null,null)}function v(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,35,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,34,"div",[["class","contact-form"]],null,null,null,null,null)),(l()(),t.Eb(2,0,null,null,33,"form",[["id","resetForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==t.Tb(l,4).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Tb(l,4).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmitReset()&&i),i},null,null)),t.Db(3,16384,null,0,e.u,[],null,null),t.Db(4,671744,null,0,e.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Yb(2048,null,e.d,null,[e.h]),t.Db(6,16384,null,0,e.n,[[6,e.d]],null,null),(l()(),t.Eb(7,0,null,null,4,"h3",[["class","form-title"]],null,null,null,null,null)),(l()(),t.dc(-1,null,[" Forgot your password? "])),(l()(),t.Eb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.dc(-1,null,[" No worries. We got you. "])),(l()(),t.Eb(11,0,null,null,0,"i",[["class","fa fa-lock"]],null,null,null,null,null)),(l()(),t.Eb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.dc(-1,null,["Enter your account's email below."])),(l()(),t.Eb(14,0,null,null,21,"div",[["class","row mt-5"]],[[1,"disabled",0]],null,null,null,null)),(l()(),t.Eb(15,0,null,null,11,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),t.Eb(16,0,null,null,10,"div",[["class","input-group mt-30"]],null,null,null,null,null)),(l()(),t.Eb(17,0,null,null,7,"input",[["formControlName","email"],["name","email"],["placeholder","Email Here"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Tb(l,18)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Tb(l,18).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Tb(l,18)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Tb(l,18)._compositionEnd(u.target.value)&&i),i},null,null)),t.Db(18,16384,null,0,e.e,[t.L,t.o,[2,e.a]],null,null),t.Db(19,16384,null,0,e.r,[],{required:[0,"required"]},null),t.Yb(1024,null,e.j,function(l){return[l]},[e.r]),t.Yb(1024,null,e.k,function(l){return[l]},[e.e]),t.Db(22,671744,null,0,e.g,[[3,e.d],[6,e.j],[8,null],[6,e.k],[2,e.x]],{name:[0,"name"]},null),t.Yb(2048,null,e.l,null,[e.g]),t.Db(24,16384,null,0,e.m,[[4,e.l]],null,null),(l()(),t.Eb(25,0,null,null,1,"span",[["class","icon"]],null,null,null,null,null)),(l()(),t.Eb(26,0,null,null,0,"i",[["class","fal fa-envelope-open"]],null,null,null,null,null)),(l()(),t.Eb(27,0,null,null,8,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.Eb(28,0,null,null,7,"div",[["class","input-group textarea-group mt-30"]],null,null,null,null,null)),(l()(),t.Eb(29,0,null,null,6,"button",[["class","\n                        btn btn-block\n                        login-btn\n                        main-btn\n                        small-size\n                        rounded-btn\n                        icon-right\n                      "],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.dc(-1,null,[" Reset "])),(l()(),t.ob(16777216,null,null,1,null,p)),t.Db(32,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.dc(-1,null,[" \xa0 "])),(l()(),t.ob(16777216,null,null,1,null,f)),t.Db(35,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,u.resetForm),l(n,19,0,""),l(n,22,0,"email"),l(n,32,0,!u.loading),l(n,35,0,u.loading)},function(l,n){var u=n.component;l(n,2,0,t.Tb(n,6).is("untouched"),t.Tb(n,6).is("touched"),t.Tb(n,6).is("pristine"),t.Tb(n,6).is("dirty"),t.Tb(n,6).is("valid"),t.Tb(n,6).is("invalid"),t.Tb(n,6).is("pending")),l(n,14,0,u.loading),l(n,17,0,t.Tb(n,19).required?"":null,t.Tb(n,24).is("untouched"),t.Tb(n,24).is("touched"),t.Tb(n,24).is("pristine"),t.Tb(n,24).is("dirty"),t.Tb(n,24).is("valid"),t.Tb(n,24).is("invalid"),t.Tb(n,24).is("pending")),l(n,29,0,!u.resetFormIsValid()||u.loading)})}function w(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,0,"i",[["class","fal fa-long-arrow-right"]],null,null,null,null,null))],null,null)}function T(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,2,"div",[["class","spinner-border float-right"],["role","status"]],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),t.dc(-1,null,["Loading..."]))],null,null)}function E(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,47,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,46,"div",[["class","contact-form"]],null,null,null,null,null)),(l()(),t.Eb(2,0,null,null,45,"form",[["id","resetForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==t.Tb(l,4).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Tb(l,4).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.onSubmitChangePassword()&&i),i},null,null)),t.Db(3,16384,null,0,e.u,[],null,null),t.Db(4,671744,null,0,e.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Yb(2048,null,e.d,null,[e.h]),t.Db(6,16384,null,0,e.n,[[6,e.d]],null,null),(l()(),t.Eb(7,0,null,null,4,"h3",[["class","form-title"]],null,null,null,null,null)),(l()(),t.dc(-1,null,[" Reset Wizard"])),(l()(),t.Eb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.dc(-1,null,[" Setup new password. "])),(l()(),t.Eb(11,0,null,null,0,"i",[["class","fa fa-lock"]],null,null,null,null,null)),(l()(),t.Eb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.dc(-1,null,["Enter your new password and confirm below."])),(l()(),t.Eb(14,0,null,null,33,"div",[["class","row mt-5"]],[[1,"disabled",0]],null,null,null,null)),(l()(),t.Eb(15,0,null,null,11,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),t.Eb(16,0,null,null,10,"div",[["class","input-group mt-30"]],null,null,null,null,null)),(l()(),t.Eb(17,0,null,null,7,"input",[["formControlName","password"],["name","password"],["placeholder","Enter new password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Tb(l,18)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Tb(l,18).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Tb(l,18)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Tb(l,18)._compositionEnd(u.target.value)&&i),i},null,null)),t.Db(18,16384,null,0,e.e,[t.L,t.o,[2,e.a]],null,null),t.Db(19,16384,null,0,e.r,[],{required:[0,"required"]},null),t.Yb(1024,null,e.j,function(l){return[l]},[e.r]),t.Yb(1024,null,e.k,function(l){return[l]},[e.e]),t.Db(22,671744,null,0,e.g,[[3,e.d],[6,e.j],[8,null],[6,e.k],[2,e.x]],{name:[0,"name"]},null),t.Yb(2048,null,e.l,null,[e.g]),t.Db(24,16384,null,0,e.m,[[4,e.l]],null,null),(l()(),t.Eb(25,0,null,null,1,"span",[["class","icon"]],null,null,null,null,null)),(l()(),t.Eb(26,0,null,null,0,"i",[["class","fal fa-lock"]],null,null,null,null,null)),(l()(),t.Eb(27,0,null,null,11,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),t.Eb(28,0,null,null,10,"div",[["class","input-group mt-30"]],null,null,null,null,null)),(l()(),t.Eb(29,0,null,null,7,"input",[["formControlName","confirmPassword"],["name","password"],["placeholder","Confirm new password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var i=!0;return"input"===n&&(i=!1!==t.Tb(l,30)._handleInput(u.target.value)&&i),"blur"===n&&(i=!1!==t.Tb(l,30).onTouched()&&i),"compositionstart"===n&&(i=!1!==t.Tb(l,30)._compositionStart()&&i),"compositionend"===n&&(i=!1!==t.Tb(l,30)._compositionEnd(u.target.value)&&i),i},null,null)),t.Db(30,16384,null,0,e.e,[t.L,t.o,[2,e.a]],null,null),t.Db(31,16384,null,0,e.r,[],{required:[0,"required"]},null),t.Yb(1024,null,e.j,function(l){return[l]},[e.r]),t.Yb(1024,null,e.k,function(l){return[l]},[e.e]),t.Db(34,671744,null,0,e.g,[[3,e.d],[6,e.j],[8,null],[6,e.k],[2,e.x]],{name:[0,"name"]},null),t.Yb(2048,null,e.l,null,[e.g]),t.Db(36,16384,null,0,e.m,[[4,e.l]],null,null),(l()(),t.Eb(37,0,null,null,1,"span",[["class","icon"]],null,null,null,null,null)),(l()(),t.Eb(38,0,null,null,0,"i",[["class","fal fa-lock"]],null,null,null,null,null)),(l()(),t.Eb(39,0,null,null,8,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.Eb(40,0,null,null,7,"div",[["class","input-group textarea-group mt-30"]],null,null,null,null,null)),(l()(),t.Eb(41,0,null,null,6,"button",[["class","\n                        btn btn-block\n                        login-btn\n                        main-btn\n                        small-size\n                        rounded-btn\n                        icon-right\n                      "],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.dc(-1,null,[" Submit "])),(l()(),t.ob(16777216,null,null,1,null,w)),t.Db(44,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.dc(-1,null,[" \xa0 "])),(l()(),t.ob(16777216,null,null,1,null,T)),t.Db(47,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,u.changePasswordForm),l(n,19,0,""),l(n,22,0,"password"),l(n,31,0,""),l(n,34,0,"confirmPassword"),l(n,44,0,!u.loading),l(n,47,0,u.loading)},function(l,n){var u=n.component;l(n,2,0,t.Tb(n,6).is("untouched"),t.Tb(n,6).is("touched"),t.Tb(n,6).is("pristine"),t.Tb(n,6).is("dirty"),t.Tb(n,6).is("valid"),t.Tb(n,6).is("invalid"),t.Tb(n,6).is("pending")),l(n,14,0,u.loading),l(n,17,0,t.Tb(n,19).required?"":null,t.Tb(n,24).is("untouched"),t.Tb(n,24).is("touched"),t.Tb(n,24).is("pristine"),t.Tb(n,24).is("dirty"),t.Tb(n,24).is("valid"),t.Tb(n,24).is("invalid"),t.Tb(n,24).is("pending")),l(n,29,0,t.Tb(n,31).required?"":null,t.Tb(n,36).is("untouched"),t.Tb(n,36).is("touched"),t.Tb(n,36).is("pristine"),t.Tb(n,36).is("dirty"),t.Tb(n,36).is("valid"),t.Tb(n,36).is("invalid"),t.Tb(n,36).is("pending")),l(n,41,0,!u.changePasswordFormIsValid()||u.loading)})}function R(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,15,"section",[["class","conatct-section section-gap"]],null,null,null,null,null)),(l()(),t.Eb(1,0,null,null,13,"div",[["class","container security"]],null,null,null,null,null)),(l()(),t.Eb(2,0,null,null,12,"div",[["class","contact-form-area wow fadeInUp"],["data-wow-delay","0.3s"]],null,null,null,null,null)),(l()(),t.Eb(3,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Eb(4,0,null,null,6,"div",[["class","col-lg-5 photo"]],null,null,null,null,null)),(l()(),t.Eb(5,0,null,null,5,"div",[["class","contact-thumb mb-md-gap-50 pointer"],["routerLink","/"],["title","Go to homepage"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Tb(l,6).onClick()&&i),i},null,null)),t.Db(6,540672,null,0,r.m,[r.l,r.a,[8,null],t.L,t.o],{routerLink:[0,"routerLink"]},null),(l()(),t.ob(16777216,null,null,1,null,m)),t.Db(8,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,null,1,null,h)),t.Db(10,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,null,1,null,v)),t.Db(12,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.ob(16777216,null,null,1,null,E)),t.Db(14,16384,null,0,s.m,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.Eb(15,0,null,null,0,"div",[["class","conatct-one-bg"]],[[4,"background-image",null]],null,null,null,null))],function(l,n){var u=n.component;l(n,6,0,"/"),l(n,8,0,!u.verification),l(n,10,0,u.verification),l(n,12,0,!u.verification),l(n,14,0,u.verification)},function(l,n){l(n,15,0,"url(assets/img/security.jpg)")})}function y(l){return t.gc(0,[(l()(),t.Eb(0,0,null,null,1,"app-password-reset",[],null,null,null,R,g)),t.Db(1,114688,null,0,c,[b.a,r.l,e.f,d.a],null,null)],function(l,n){l(n,1,0)},null)}var I=t.Ab("app-password-reset",c,y,{},{},[]),P=u("9AJC"),D=u("XePT"),k=u("G0yt"),S=u("iryk"),F=u("lABs");class q{}var C=u("EApP"),_=u("fyIi"),O=u("hGdz"),j=t.Bb(i,[],function(l){return t.Qb([t.Rb(512,t.l,t.gb,[[8,[o.a,I,P.a,P.b,P.j,P.k,P.g,P.h,P.i,D.a]],[3,t.l],t.D]),t.Rb(4608,s.o,s.n,[t.z]),t.Rb(4608,k.w,k.w,[t.l,t.v,k.qb,k.x]),t.Rb(5120,S.a,F.b,[r.l]),t.Rb(1073742336,s.b,s.b,[]),t.Rb(1073742336,r.o,r.o,[[2,r.t],[2,r.l]]),t.Rb(1073742336,q,q,[]),t.Rb(1073742336,k.d,k.d,[]),t.Rb(1073742336,k.g,k.g,[]),t.Rb(1073742336,k.h,k.h,[]),t.Rb(1073742336,k.l,k.l,[]),t.Rb(1073742336,k.m,k.m,[]),t.Rb(1073742336,e.w,e.w,[]),t.Rb(1073742336,e.v,e.v,[]),t.Rb(1073742336,e.i,e.i,[]),t.Rb(1073742336,k.s,k.s,[]),t.Rb(1073742336,k.u,k.u,[]),t.Rb(1073742336,k.y,k.y,[]),t.Rb(1073742336,k.F,k.F,[]),t.Rb(1073742336,k.K,k.K,[]),t.Rb(1073742336,k.Q,k.Q,[]),t.Rb(1073742336,k.T,k.T,[]),t.Rb(1073742336,k.W,k.W,[]),t.Rb(1073742336,k.bb,k.bb,[]),t.Rb(1073742336,k.eb,k.eb,[]),t.Rb(1073742336,k.fb,k.fb,[]),t.Rb(1073742336,k.gb,k.gb,[]),t.Rb(1073742336,k.z,k.z,[]),t.Rb(1073742336,F.a,F.a,[]),t.Rb(1073742336,C.i,C.i,[]),t.Rb(1073742336,_.b,_.b,[]),t.Rb(1073742336,O.a,O.a,[]),t.Rb(1073742336,e.q,e.q,[]),t.Rb(1073742336,i,i,[]),t.Rb(1024,r.j,function(){return[[{path:"",component:c}]]},[]),t.Rb(256,C.b,{default:C.a,config:{timeOut:1e4,positionClass:"toast-top-right",preventDuplicates:!0}},[])])})}}]);