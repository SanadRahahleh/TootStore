import{a as ti,b as Vt,c as gt,d as ei,e as ii,f as ni,g as ue,h as qi}from"./chunk-JKEFL4J4.js";import{a as Li,b as Fi}from"./chunk-NQVZNGFD.js";import{B as he,C as _t,D as pe,F as It,I as Ui,N as Hi,O as Qi,R as Gi,U as Wi,X as Yi,Y as Ki,Z as Xi,b as ai,ba as Zi,d as Mt,f as oi,g as ri,i as si,j as ci,k as li,l as mi,m as di,n as Ti,o as Ai,p as Ei,q as Oi,t as Pi,u as Ri}from"./chunk-BJUDP6GK.js";import{C as ot,D as Ct,G as St,H as Ht,L as yi,M as wi,N as ki,O as Mi,P as Ci,S as Qt,U as Si,V as Ii,_ as B,e as Nt,ea as Di,fa as mt,g as Ye,ga as zi,h as jt,ha as Bi,i as Ke,ia as Ni,j as Xe,ja as Gt,k as qe,ka as Wt,l as Ze,la as Yt,m as Je,ma as Kt,n as $e,na as Xt,oa as qt,p as Ut,pa as Zt,q as at,qa as ji,r as hi,ra as Vi,s as pi,t as ui,u as gi,v as _i,w as fi,x as bi,y as vi,z as xi}from"./chunk-7J3T4SXZ.js";import{$a as ze,$b as Ft,A as J,B as st,Ba as R,Ca as Ot,Db as v,Eb as c,F as De,Fb as l,G as At,Gb as M,H as re,Ha as Le,Hb as me,I as se,Ib as Ve,Kb as Rt,Lb as Lt,Nb as Q,Ob as Ue,P as Te,Pb as k,Qb as He,R as ct,Rb as _,S as ce,Sb as O,T as N,Tb as u,Ub as G,V as Ae,Va as d,Vb as q,W as Ee,Wb as f,Xb as b,Z as Et,Za as Fe,_ as $,_a as yt,a as ht,aa as z,ab as Be,ac as zt,b as Se,bb as wt,bc as y,ca as r,cc as Bt,d as pt,da as Oe,db as Pt,dc as m,eb as Ne,ec as lt,fc as kt,gc as W,h as F,ha as T,ia as A,ib as x,ic as Qe,ja as le,jb as et,jc as Ge,kb as L,kc as We,la as V,ma as tt,nb as j,o as vt,ob as U,oc as de,p as Ie,pa as K,pb as je,qa as H,s as xt,ta as Pe,ua as E,uc as Z,va as Re,xb as C,xc as ut,yb as it,za as X,zb as nt}from"./chunk-CJVY4CSM.js";var bn="@",vn=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=r(V);loadingSchedulerFn=r(xn,{optional:!0});_engine;constructor(t,e,i,a,s){this.doc=t,this.delegate=e,this.zone=i,this.animationType=a,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-VOBP2MBE.js").then(i=>i),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(i=>{throw new Ee(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new ge(i);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let w=s.createRenderer(t,e);a.use(w),this.scheduler??=this.injector.get(Re,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(e){Pt()};static \u0275prov=Et({token:n,factory:n.\u0275fac})}return n})(),ge=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,e,i){this.delegate.insertBefore(o,t,e,i)}removeChild(o,t,e,i){this.delegate.removeChild(o,t,e,i)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,e,i){this.delegate.setAttribute(o,t,e,i)}removeAttribute(o,t,e){this.delegate.removeAttribute(o,t,e)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,e,i){this.delegate.setStyle(o,t,e,i)}removeStyle(o,t,e){this.delegate.removeStyle(o,t,e)}setProperty(o,t,e){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(o,t,e)),this.delegate.setProperty(o,t,e)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,e,i){return this.shouldReplay(t)&&this.replay.push(a=>a.listen(o,t,e,i)),this.delegate.listen(o,t,e,i)}shouldReplay(o){return this.replay!==null&&o.startsWith(bn)}},xn=new z("");function Ji(n="animations"){return Fe("NgAsyncAnimations"),Oe([{provide:Be,useFactory:()=>new vn(r(tt),r(Ke),r(H),n)},{provide:Le,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Y=class n{http=r(Ze);router=r(gt);TOKEN_KEY="auth_token";USER_KEY="auth_user";currentUser=E(null);token=E(null);isLoggedIn=de(()=>this.currentUser()!==null);isAdmin=de(()=>this.currentUser()?.role==="Admin");constructor(){this.loadStorage()}loadStorage(){let o=localStorage.getItem(this.TOKEN_KEY),t=localStorage.getItem(this.USER_KEY);if(o&&t){this.token.set(o);try{this.currentUser.set(JSON.parse(t))}catch{this.logout()}}}decodeTokenAndGetUser(o){try{let t=o.split(".")[1],e=JSON.parse(atob(t.replace(/-/g,"+").replace(/_/g,"/"))),i=e["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]||e.sub||e.nameid,a=e["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]||e.email,s=e["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]||e["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role"]||e.role,w=e["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]||e.unique_name||e.name;return!i||!a?null:{id:i,email:a,fullName:w||a.split("@")[0],role:s==="Admin"?"Admin":"Employee",isActive:!0}}catch(t){return console.error("Error decoding authentication token:",t),null}}login(o){return this.http.post("/api/auth/login",o).pipe(Ae(t=>{let e=t.token||t.Token;if(!e)throw new Error("Authentication token was not returned.");let i=t.user||this.decodeTokenAndGetUser(e);if(!i)throw new Error("Unable to extract user profile from authentication token.");localStorage.setItem(this.TOKEN_KEY,e),localStorage.setItem(this.USER_KEY,JSON.stringify(i)),this.token.set(e),this.currentUser.set(i)}))}logout(){localStorage.removeItem(this.TOKEN_KEY),localStorage.removeItem(this.USER_KEY),this.token.set(null),this.currentUser.set(null),this.router.navigate(["/login"])}getToken(){return this.token()||localStorage.getItem(this.TOKEN_KEY)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Et({token:n,factory:n.\u0275fac,providedIn:"root"})};var $i=(n,o)=>{let t=r(Y),e=r(gt);if(!t.isLoggedIn())return e.navigate(["/login"],{queryParams:{returnUrl:o.url}}),!1;let i=n.data.roles,a=t.currentUser();return i&&a&&!i.includes(a.role)?(a.role==="Admin"?e.navigate(["/dashboard"]):e.navigate(["/attendance/my-attendance"]),!1):!0};function Mn(n,o){n&1&&(c(0,"mat-error"),m(1," Email is required. "),l())}function Cn(n,o){n&1&&(c(0,"mat-error"),m(1," Please enter a valid email address. "),l())}function Sn(n,o){n&1&&(c(0,"mat-error"),m(1," Password is required. "),l())}function In(n,o){n&1&&(c(0,"mat-error"),m(1," Password must be at least 6 characters. "),l())}function Dn(n,o){n&1&&(c(0,"span"),m(1,"Sign In"),l())}function Tn(n,o){n&1&&M(0,"mat-spinner",21)}var Jt=class n{fb=r(mi);authService=r(Y);router=r(gt);route=r(ti);snackBar=r(Ki);loginForm;isLoading=E(!1);hidePassword=E(!0);constructor(){this.authService.isLoggedIn()&&this.redirectUser(),this.loginForm=this.fb.group({email:["",[Mt.required,Mt.email]],password:["",[Mt.required,Mt.minLength(6)]]})}onSubmit(){if(this.loginForm.invalid)return;this.isLoading.set(!0);let o=this.loginForm.value;this.authService.login(o).subscribe({next:()=>{this.isLoading.set(!1);let t=this.authService.currentUser(),e=t?t.fullName:"User";this.snackBar.open(`Welcome back, ${e}!`,"Dismiss",{duration:3e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["snackbar-success"]}),this.redirectUser()},error:t=>{this.isLoading.set(!1);let e=t.error?.message||"Login failed. Please check your credentials.";this.snackBar.open(e,"Close",{duration:4e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["snackbar-error"]})}})}redirectUser(){let o=this.route.snapshot.queryParams.returnUrl;if(o){this.router.navigateByUrl(o);return}this.authService.isAdmin()?this.router.navigate(["/dashboard"]):this.router.navigate(["/attendance/my-attendance"])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-login"]],decls:41,vars:12,consts:[[1,"login-wrapper"],[1,"orb","orb-1"],[1,"orb","orb-2"],[1,"login-card","animate-fade-in"],[1,"login-header"],[1,"logo-box"],[1,"logo-icon"],[1,"title"],[1,"subtitle"],[1,"login-content"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"form-field"],["matInput","","type","email","formControlName","email","placeholder","name@company.com","autocomplete","email"],["matPrefix","",1,"field-icon"],[4,"ngIf"],["matInput","","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","autocomplete","current-password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-flat-button","","color","primary","type","submit",1,"submit-btn",3,"disabled"],["diameter","24","class","btn-spinner",4,"ngIf"],[1,"login-footer"],[1,"demo-info"],["diameter","24",1,"btn-spinner"]],template:function(t,e){if(t&1&&(c(0,"div",0),M(1,"div",1)(2,"div",2),c(3,"mat-card",3)(4,"mat-card-header",4)(5,"div",5)(6,"mat-icon",6),m(7,"schedule"),l()(),c(8,"mat-card-title",7),m(9,"AttendSync"),l(),c(10,"mat-card-subtitle",8),m(11,"Employee Attendance Management Portal"),l()(),c(12,"mat-card-content",9)(13,"form",10),k("ngSubmit",function(){return e.onSubmit()}),c(14,"mat-form-field",11)(15,"mat-label"),m(16,"Email Address"),l(),M(17,"input",12),c(18,"mat-icon",13),m(19,"mail_outline"),l(),U(20,Mn,2,0,"mat-error",14)(21,Cn,2,0,"mat-error",14),l(),c(22,"mat-form-field",11)(23,"mat-label"),m(24,"Password"),l(),M(25,"input",15),c(26,"mat-icon",13),m(27,"lock_open"),l(),c(28,"button",16),k("click",function(){return e.hidePassword.set(!e.hidePassword())}),c(29,"mat-icon"),m(30),l()(),U(31,Sn,2,0,"mat-error",14)(32,In,2,0,"mat-error",14),l(),c(33,"button",17),U(34,Dn,2,0,"span",14)(35,Tn,1,0,"mat-spinner",18),l()()(),c(36,"mat-card-footer",19)(37,"p",20),m(38,"Demo Admin: admin@system.com (Admin@123)"),l(),c(39,"p",20),m(40,"Demo Employee: employee@system.com (Employee@123)"),l()()()()),t&2){let i,a,s,w;d(13),v("formGroup",e.loginForm),d(7),v("ngIf",(i=e.loginForm.get("email"))==null?null:i.hasError("required")),d(),v("ngIf",(a=e.loginForm.get("email"))==null?null:a.hasError("email")),d(4),v("type",e.hidePassword()?"password":"text"),d(3),C("aria-label","Hide password")("aria-checked",e.hidePassword()),d(2),lt(e.hidePassword()?"visibility_off":"visibility"),d(),v("ngIf",(s=e.loginForm.get("password"))==null?null:s.hasError("required")),d(),v("ngIf",(w=e.loginForm.get("password"))==null?null:w.hasError("minlength")),d(),v("disabled",e.loginForm.invalid||e.isLoading()),d(),v("ngIf",!e.isLoading()),d(),v("ngIf",e.isLoading())}},dependencies:[jt,Nt,di,si,ai,oi,ri,li,ci,bi,hi,ui,fi,_i,gi,pi,Ri,Pi,Ti,Ai,Ei,Oi,Fi,Li,Xt,Kt,Wt,Zt,qt,Vi,ji,Xi],styles:[".login-wrapper[_ngcontent-%COMP%]{min-height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#090d16,#0f172a);position:relative;overflow:hidden;padding:24px}.orb[_ngcontent-%COMP%]{position:absolute;border-radius:var(--radius-full);filter:blur(120px);opacity:.15;pointer-events:none}.orb-1[_ngcontent-%COMP%]{width:400px;height:400px;background:var(--primary);top:-100px;left:-100px}.orb-2[_ngcontent-%COMP%]{width:500px;height:500px;background:var(--secondary);bottom:-150px;right:-100px}.login-card[_ngcontent-%COMP%]{width:100%;max-width:420px;background:#ffffff0d!important;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.08)!important;border-radius:var(--radius-lg)!important;box-shadow:0 20px 50px #0000004d!important;padding:32px 24px!important;display:flex;flex-direction:column}.login-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:32px;padding:0!important}.logo-box[_ngcontent-%COMP%]{width:56px;height:56px;background:linear-gradient(135deg,var(--primary) 0%,var(--secondary) 100%);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;margin-bottom:16px;box-shadow:0 8px 16px #4f46e540}.logo-icon[_ngcontent-%COMP%]{color:#fff;font-size:32px;width:32px;height:32px}.title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:#fff!important;margin:0 0 4px!important;letter-spacing:-.02em}.subtitle[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-light)!important;font-weight:400;margin:0!important}.login-content[_ngcontent-%COMP%]{padding:0!important}.form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}  .login-card .mat-mdc-form-field-flex{background-color:#ffffff08!important;border-radius:var(--radius-sm)!important}  .login-card .mat-mdc-text-field-wrapper:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--text-light)!important}  .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,   .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,   .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#ffffff1a!important}  .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled):hover .mdc-notched-outline__leading,   .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled):hover .mdc-notched-outline__notch,   .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled):hover .mdc-notched-outline__trailing{border-color:#fff3!important}  .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,   .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,   .login-card .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--primary)!important;border-width:2px!important}  .login-card input.mat-mdc-input-element{color:#fff!important;caret-color:#fff!important}.field-icon[_ngcontent-%COMP%]{color:var(--text-light);margin-right:8px}.submit-btn[_ngcontent-%COMP%]{width:100%;height:48px;margin-top:8px;background:linear-gradient(135deg,var(--primary) 0%,var(--secondary) 100%)!important;color:#fff!important;font-size:1rem!important;border-radius:var(--radius-sm)!important;transition:transform var(--transition-fast),box-shadow var(--transition-fast)!important}.submit-btn[_ngcontent-%COMP%]:not([disabled]):hover{transform:translateY(-1px);box-shadow:0 8px 20px #4f46e559!important}.submit-btn[disabled][_ngcontent-%COMP%]{background:#ffffff14!important;color:#ffffff40!important}.btn-spinner[_ngcontent-%COMP%]{margin:0 auto}  .btn-spinner circle{stroke:#fff!important}.login-footer[_ngcontent-%COMP%]{margin-top:24px;padding:16px!important;background-color:#ffffff05;border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,.04)}.demo-info[_ngcontent-%COMP%]{font-size:.72rem;color:var(--text-light);margin:4px 0;text-align:center;font-family:monospace}"]})};var ee=["*"],An=["content"],En=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],On=["mat-drawer","mat-drawer-content","*"];function Pn(n,o){if(n&1){let t=Q();c(0,"div",1),k("click",function(){T(t);let i=_();return A(i._onBackdropClicked())}),l()}if(n&2){let t=_();y("mat-drawer-shown",t._isShowingBackdrop())}}function Rn(n,o){n&1&&(c(0,"mat-drawer-content"),u(1,2),l())}var Ln=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Fn=["mat-sidenav","mat-sidenav-content","*"];function zn(n,o){if(n&1){let t=Q();c(0,"div",1),k("click",function(){T(t);let i=_();return A(i._onBackdropClicked())}),l()}if(n&2){let t=_();y("mat-drawer-shown",t._isShowingBackdrop())}}function Bn(n,o){n&1&&(c(0,"mat-sidenav-content"),u(1,2),l())}var Nn=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var jn=new z("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ve=new z("MAT_DRAWER_CONTAINER"),$t=(()=>{class n extends _t{_platform=r(ot);_changeDetectorRef=r(Z);_container=r(fe);constructor(){let t=r(R),e=r(he),i=r(H);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(zt("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),y("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[W([{provide:_t,useExisting:n}]),j],ngContentSelectors:ee,decls:1,vars:0,template:function(e,i){e&1&&(O(),u(0))},encapsulation:2,changeDetection:0})}return n})(),_e=(()=>{class n{_elementRef=r(R);_focusTrapFactory=r(Ci);_focusMonitor=r(St);_platform=r(ot);_ngZone=r(H);_renderer=r(wt);_interactivityChecker=r(Mi);_doc=r(tt);_container=r(ve,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=B(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=B(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(B(t))}_opened=E(!1);_openedVia=null;_animationStarted=new F;_animationEnd=new F;openedChange=new K(!0);_openedStream=this.openedChange.pipe(st(t=>t),xt(()=>{}));openedStart=this._animationStarted.pipe(st(()=>this.opened),re(void 0));_closedStream=this.openedChange.pipe(st(t=>!t),xt(()=>{}));closedStart=this._animationStarted.pipe(st(()=>!this.opened),re(void 0));_destroyed=new F;onPositionChanged=new K;_content;_modeChanged=new F;_injector=r(V);_changeDetectorRef=r(Z);constructor(){this.openedChange.pipe(N(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Qt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),s(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",i),s=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":yt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(At(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&q(An,5),e&2){let a;f(a=b())&&(i._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(C("align",null)("tabIndex",i.mode!=="side"?"-1":null),zt("visibility",!i._container&&!i.opened?"hidden":null),y("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(O(),c(0,"div",1,0),u(2),l())},dependencies:[_t],encapsulation:2,changeDetection:0})}return n})(),fe=(()=>{class n{_dir=r(Ut,{optional:!0});_element=r(R);_ngZone=r(H);_changeDetectorRef=r(Z);_animationDisabled=mt();_transitionsEnabled=!1;_allDrawers;_drawers=new Ot;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=B(t)}_autosize=r(jn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:B(t)}_backdropOverride=null;backdropClick=new K;_start=null;_end=null;_left=null;_right=null;_destroyed=new F;_doCheckSubject=new F;_contentMargins={left:null,right:null};_contentMarginChanges=new F;get scrollable(){return this._userContent||this._content}_injector=r(V);constructor(){let t=r(ot),e=r(pe);this._dir?.change.pipe(N(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(N(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ct(this._allDrawers),N(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ct(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(De(10),N(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(N(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(N(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(N(this._drawers.changes)).subscribe(()=>{yt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(N(J(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,a){if(e&1&&G(a,$t,5)(a,_e,5),e&2){let s;f(s=b())&&(i._content=s.first),f(s=b())&&(i._allDrawers=s)}},viewQuery:function(e,i){if(e&1&&q($t,5),e&2){let a;f(a=b())&&(i._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&y("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[W([{provide:ve,useExisting:n}])],ngContentSelectors:On,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(O(En),it(0,Pn,1,2,"div",0),u(1),u(2,1),it(3,Rn,2,0,"mat-drawer-content")),e&2&&(nt(i.hasBackdrop?0:-1),d(3),nt(i._content?-1:3))},dependencies:[$t],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),te=(()=>{class n extends $t{static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[W([{provide:_t,useExisting:n}]),j],ngContentSelectors:ee,decls:1,vars:0,template:function(e,i){e&1&&(O(),u(0))},encapsulation:2,changeDetection:0})}return n})(),xe=(()=>{class n extends _e{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=B(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Ct(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Ct(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(C("tabIndex",i.mode!=="side"?"-1":null)("align",null),zt("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),y("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[W([{provide:_e,useExisting:n}]),j],ngContentSelectors:ee,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(O(),c(0,"div",1,0),u(2),l())},dependencies:[_t],encapsulation:2,changeDetection:0})}return n})(),en=(()=>{class n extends fe{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,a){if(e&1&&G(a,te,5)(a,xe,5),e&2){let s;f(s=b())&&(i._content=s.first),f(s=b())&&(i._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&y("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[W([{provide:ve,useExisting:n},{provide:fe,useExisting:n}]),j],ngContentSelectors:Fn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(O(Ln),it(0,zn,1,2,"div",0),u(1),u(2,1),it(3,Bn,2,0,"mat-sidenav-content")),e&2&&(nt(i.hasBackdrop?0:-1),d(3),nt(i._content?-1:3))},dependencies:[te],styles:[Nn],encapsulation:2,changeDetection:0})}return n})(),nn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=et({type:n});static \u0275inj=$({imports:[It,at,It]})}return n})();var Un=["*",[["mat-toolbar-row"]]],Hn=["*","mat-toolbar-row"],Qn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),an=(()=>{class n{_elementRef=r(R);_platform=r(ot);_document=r(tt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,a){if(e&1&&G(a,Qn,5),e&2){let s;f(s=b())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(Bt(i.color?"mat-"+i.color:""),y("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Hn,decls:2,vars:0,template:function(e,i){e&1&&(O(Un),u(0),u(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var on=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=et({type:n});static \u0275inj=$({imports:[at]})}return n})();var Wn=["*"],Yn=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Kn=["unscopedContent"],Xn=["text"],qn=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Zn=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Jn=new z("ListOption"),we=(()=>{class n{_elementRef=r(R);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),$n=(()=>{class n{_elementRef=r(R);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),ta=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),rn=(()=>{class n{_listOption=r(Jn,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,hostVars:4,hostBindings:function(e,i){e&2&&y("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),ea=(()=>{class n extends rn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275dir=L({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[j]})}return n})(),ke=(()=>{class n extends rn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275dir=L({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[j]})}return n})(),ia=new z("MAT_LIST_CONFIG"),ye=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=B(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(B(t))}_disabled=E(!1);_defaultOptions=r(ia,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,hostVars:1,hostBindings:function(e,i){e&2&&C("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),na=(()=>{class n{_elementRef=r(R);_ngZone=r(H);_listBase=r(ye,{optional:!0});_platform=r(ot);_hostElement;_isButtonElement;_noopAnimations=mt();_avatars;_icons;set lines(t){this._explicitLines=Ct(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=B(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(B(t))}_disabled=E(!1);_subscriptions=new pt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){r(Ht).load(Gt);let t=r(Bi,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new zi(this,this._ngZone,this._hostElement,this._platform,r(V)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(J(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,contentQueries:function(e,i,a){if(e&1&&G(a,ea,4)(a,ke,4),e&2){let s;f(s=b())&&(i._avatars=s),f(s=b())&&(i._icons=s)}},hostVars:4,hostBindings:function(e,i){e&2&&(C("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),y("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var sn=(()=>{class n extends na{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=B(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,a){if(e&1&&G(a,$n,5)(a,we,5)(a,ta,5),e&2){let s;f(s=b())&&(i._lines=s),f(s=b())&&(i._titles=s),f(s=b())&&(i._meta=s)}},viewQuery:function(e,i){if(e&1&&q(Kn,5)(Xn,5),e&2){let a;f(a=b())&&(i._unscopedContent=a.first),f(a=b())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(C("aria-current",i._getAriaCurrent()),y("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[j],ngContentSelectors:Zn,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(O(qn),u(0),c(1,"span",1),u(2,1),u(3,2),c(4,"span",2,0),k("cdkObserveContent",function(){return i._updateItemLines(!0)}),u(6,3),l()(),u(7,4),u(8,5),M(9,"div",3))},dependencies:[wi],encapsulation:2,changeDetection:0})}return n})();var cn=(()=>{class n extends ye{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=X(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[W([{provide:ye,useExisting:n}]),j],ngContentSelectors:Wn,decls:1,vars:0,template:function(e,i){e&1&&(O(),u(0))},styles:[Yn],encapsulation:2,changeDetection:0})}return n})();var ln=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=et({type:n});static \u0275inj=$({imports:[ki,Yt,Zi,at,qi]})}return n})();var la=["mat-menu-item",""],ma=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],da=["mat-icon, [matMenuItemIcon]","*"];function ha(n,o){n&1&&(le(),c(0,"svg",2),M(1,"polygon",3),l())}var pa=["*"];function ua(n,o){if(n&1){let t=Q();me(0,"div",0),He("click",function(){T(t);let i=_();return A(i.closed.emit("click"))})("animationstart",function(i){T(t);let a=_();return A(a._onAnimationStart(i.animationName))})("animationend",function(i){T(t);let a=_();return A(a._onAnimationDone(i.animationName))})("animationcancel",function(i){T(t);let a=_();return A(a._onAnimationDone(i.animationName))}),me(1,"div",1),u(2),Ve()()}if(n&2){let t=_();Bt(t._classList),y("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Ue("id",t.panelId),C("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Ce=new z("MAT_MENU_PANEL"),Dt=(()=>{class n{_elementRef=r(R);_document=r(tt);_focusMonitor=r(St);_parentMenu=r(Ce,{optional:!0});_changeDetectorRef=r(Z);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new F;_focused=new F;_highlighted=!1;_triggersSubmenu=!1;constructor(){r(Ht).load(Gt),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,i){e&1&&k("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),e&2&&(C("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),y("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ut],disableRipple:[2,"disableRipple","disableRipple",ut]},exportAs:["matMenuItem"],attrs:la,ngContentSelectors:da,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,i){e&1&&(O(ma),u(0),c(1,"span",0),u(2,1),l(),M(3,"div",1),it(4,ha,2,0,":svg:svg",2)),e&2&&(d(3),v("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),d(),nt(i._triggersSubmenu?4:-1))},dependencies:[Ni],encapsulation:2,changeDetection:0})}return n})();var ga=new z("MatMenuContent");var _a=new z("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Me="_mat-menu-enter",ie="_mat-menu-exit",bt=(()=>{class n{_elementRef=r(R);_changeDetectorRef=r(Z);_injector=r(V);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=mt();_allItems;_directDescendantItems=new Ot;_classList={};_panelAnimationState="void";_animationDone=new F;_isAnimating=E(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,i=ht({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{i[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new K;close=this.closed;panelId=r(Ii).getId("mat-menu-panel-");constructor(){let t=r(_a);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Si(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ct(this._directDescendantItems),ce(t=>J(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let i=t.toArray(),a=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[a]&&!i[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ct(this._directDescendantItems),ce(e=>J(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:Qt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=yt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Se(ht({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===ie;(e||t===Me)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Me||t===ie)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ie),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Me:ie)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ct(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["mat-menu"]],contentQueries:function(e,i,a){if(e&1&&G(a,ga,5)(a,Dt,5)(a,Dt,4),e&2){let s;f(s=b())&&(i.lazyContent=s.first),f(s=b())&&(i._allItems=s),f(s=b())&&(i.items=s)}},viewQuery:function(e,i){if(e&1&&q(ze,5),e&2){let a;f(a=b())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(e,i){e&2&&C("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ut],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:ut(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[W([{provide:Ce,useExisting:n}])],ngContentSelectors:pa,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,i){e&1&&(O(),je(0,ua,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),fa=new z("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(V);return()=>Hi(n)}});var ft=new WeakMap,ba=(()=>{class n{_canHaveBackdrop;_element=r(R);_viewContainerRef=r(Ne);_menuItemInstance=r(Dt,{optional:!0,self:!0});_dir=r(Ut,{optional:!0});_focusMonitor=r(St);_ngZone=r(H);_injector=r(V);_scrollStrategy=r(fa);_changeDetectorRef=r(Z);_animationsDisabled=mt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=pt.EMPTY;_menuCloseSubscription=pt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=r(Ce,{optional:!0});this._parentMaterialMenu=e instanceof bt?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ft.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=ft.get(e);ft.set(e,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(e),s=a.getConfig(),w=s.positionStrategy;this._setPosition(e,w),this._canHaveBackdrop?s.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:s.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof bt&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(N(e.close)).subscribe(()=>{w.withLockedPosition(!1).reapplyLastPosition(),w.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof bt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(At(1)).subscribe(()=>{e.detach(),ft.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&ft.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Wi(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof bt&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new Qi({positionStrategy:Gi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX==="start"?"after":"before",s=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,s)})})}_setPosition(t,e){let[i,a]=t.xPosition==="before"?["end","start"]:["start","end"],[s,w]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[P,S]=[s,w],[I,p]=[i,a],h=0;if(this._triggersSubmenu()){if(p=i=t.xPosition==="before"?"start":"end",a=I=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let g=this._parentMaterialMenu.items.first;this._parentInnerPadding=g?g._getHostElement().offsetTop:0}h=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(P=s==="top"?"bottom":"top",S=w==="top"?"bottom":"top");e.withPositions([{originX:i,originY:P,overlayX:I,overlayY:s,offsetY:h},{originX:a,originY:P,overlayX:p,overlayY:s,offsetY:h},{originX:i,originY:S,overlayX:I,overlayY:w,offsetY:-h},{originX:a,originY:S,overlayX:p,overlayY:w,offsetY:-h}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:vt(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(st(s=>this._menuOpen&&s!==this._menuItemInstance)):vt();return J(t,i,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Ui(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return ft.get(t)===this}_triggerIsAriaDisabled(){return ut(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){Pt()};static \u0275dir=L({type:n})}return n})(),hn=(()=>{class n extends ba{_cleanupTouchstart;_hoverSubscription=pt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new K;onMenuOpen=this.menuOpened;menuClosed=new K;onMenuClose=this.menuClosed;constructor(){super(!0);let t=r(wt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{xi(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){vi(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=L({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,i){e&1&&k("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),e&2&&C("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[j]})}return n})();var pn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=et({type:n});static \u0275inj=$({imports:[Yt,Yi,at,It]})}return n})();var xa=["sidenav"],ya=n=>({isHandset:n});function wa(n,o){if(n&1&&(c(0,"div",20)(1,"div",21),m(2),l(),c(3,"div",22)(4,"div",23),m(5),l(),c(6,"span",24),m(7),l()()()),n&2){let t=o.ngIf;d(2),kt(" ",t.fullName.charAt(0).toUpperCase()," "),d(3),lt(t.fullName),d(),y("admin",t.role==="Admin"),d(),kt(" ",t.role," ")}}function ka(n,o){if(n&1){let t=Q();Rt(0),c(1,"a",25),k("click",function(){T(t);let i=_().ngIf,a=_();return A(a.onNavItemClick(i.isHandset??!1))}),c(2,"mat-icon",26),m(3,"dashboard"),l(),c(4,"span",27),m(5,"Dashboard"),l()(),c(6,"a",28),k("click",function(){T(t);let i=_().ngIf,a=_();return A(a.onNavItemClick(i.isHandset??!1))}),c(7,"mat-icon",26),m(8,"people"),l(),c(9,"span",27),m(10,"Employees"),l()(),c(11,"a",29),k("click",function(){T(t);let i=_().ngIf,a=_();return A(a.onNavItemClick(i.isHandset??!1))}),c(12,"mat-icon",26),m(13,"assignment"),l(),c(14,"span",27),m(15,"Attendance Logs"),l()(),Lt()}}function Ma(n,o){if(n&1){let t=Q();Rt(0),c(1,"a",30),k("click",function(){T(t);let i=_().ngIf,a=_();return A(a.onNavItemClick(i.isHandset??!1))}),c(2,"mat-icon",26),m(3,"watch_later"),l(),c(4,"span",27),m(5,"Clock In/Out"),l()(),Lt()}}function Ca(n,o){if(n&1){let t=Q();c(0,"button",31),k("click",function(){T(t),_();let i=Ft(3);return A(i.toggle())}),c(1,"mat-icon",32),m(2,"menu"),l()()}}function Sa(n,o){if(n&1){let t=Q();c(0,"div",33)(1,"button",34)(2,"span",35),m(3,"Hi, "),c(4,"strong"),m(5),l()(),c(6,"div",36),m(7),l(),c(8,"mat-icon",37),m(9,"keyboard_arrow_down"),l()(),c(10,"mat-menu",38,1)(12,"div",39)(13,"p",40),m(14),l(),c(15,"p",41),m(16),l()(),M(17,"mat-divider"),c(18,"button",42),k("click",function(){T(t);let i=_(2);return A(i.logout())}),c(19,"mat-icon",43),m(20,"exit_to_app"),l(),c(21,"span"),m(22,"Logout"),l()()()()}if(n&2){let t=o.ngIf,e=Ft(11);d(),v("matMenuTriggerFor",e),d(4),lt(t.fullName.split(" ")[0]),d(2),kt(" ",t.fullName.charAt(0).toUpperCase()," "),d(7),lt(t.fullName),d(2),lt(t.email)}}function Ia(n,o){if(n&1&&(Rt(0),c(1,"mat-sidenav-container",3)(2,"mat-sidenav",4,0)(4,"div",5)(5,"mat-icon",6),m(6,"schedule"),l(),c(7,"span",7),m(8,"AttendSync"),l()(),U(9,wa,8,5,"div",8),M(10,"mat-divider",9),c(11,"mat-nav-list",10),U(12,ka,16,0,"ng-container",2)(13,Ma,6,0,"ng-container",2),l(),c(14,"div",11)(15,"span",12),m(16,"v1.0.0"),l()()(),c(17,"mat-sidenav-content",13)(18,"mat-toolbar",14),U(19,Ca,3,0,"button",15),c(20,"span",16),m(21),l(),M(22,"span",17),U(23,Sa,23,5,"div",18),l(),c(24,"main",19),M(25,"router-outlet"),l()()(),Lt()),n&2){let t=o.ngIf,e=_();d(2),v("mode",t.isHandset?"over":"side")("opened",!t.isHandset),C("role",t.isHandset?"dialog":"navigation"),d(7),v("ngIf",e.authService.currentUser()),d(3),v("ngIf",e.authService.isAdmin()),d(),v("ngIf",!e.authService.isAdmin()),d(6),v("ngIf",t.isHandset),d(2),kt(" ",e.authService.isAdmin()?"Administrator Portal":"Employee WorkSpace"," "),d(2),v("ngIf",e.authService.currentUser())}}var ne=class n{authService=r(Y);breakpointObserver=r(yi);sidenav;isHandset$=this.breakpointObserver.observe(Di.Handset).pipe(xt(o=>o.matches),Te());onNavItemClick(o){o&&this.sidenav.close()}logout(){this.authService.logout()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-admin-layout"]],viewQuery:function(t,e){if(t&1&&q(xa,5),t&2){let i;f(i=b())&&(e.sidenav=i.first)}},decls:2,vars:5,consts:[["sidenav",""],["profileMenu","matMenu"],[4,"ngIf"],[1,"sidenav-container"],[1,"sidenav",3,"mode","opened"],[1,"logo-area"],[1,"logo-icon"],[1,"logo-text"],["class","user-panel",4,"ngIf"],[1,"divider"],[1,"nav-list"],[1,"sidebar-footer"],[1,"version"],[1,"content-panel"],["color","default",1,"toolbar"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],[1,"page-title"],[1,"spacer"],["class","header-right",4,"ngIf"],[1,"page-body"],[1,"user-panel"],[1,"avatar-circle"],[1,"user-info"],[1,"user-name"],[1,"role-badge"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/users","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/attendance/records","routerLinkActive","active",3,"click"],["mat-list-item","","routerLink","/attendance/my-attendance","routerLinkActive","active",3,"click"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"],[1,"header-right"],["mat-button","",1,"profile-trigger",3,"matMenuTriggerFor"],[1,"welcome-text"],[1,"header-avatar"],[1,"arrow-down"],["xPosition","before",1,"modern-menu"],[1,"menu-header-info"],[1,"menu-name"],[1,"menu-email"],["mat-menu-item","",3,"click"],[1,"text-danger"]],template:function(t,e){t&1&&(U(0,Ia,26,9,"ng-container",2),Ge(1,"async")),t&2&&v("ngIf",Qe(3,ya,We(1,1,e.isHandset$)))},dependencies:[jt,Nt,Vt,ei,ii,nn,xe,en,te,on,an,Zt,qt,Xt,Kt,Wt,ln,cn,sn,ke,ue,we,pn,bt,Dt,hn,Ye],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}.sidenav[_ngcontent-%COMP%]{width:260px;background-color:var(--bg-sidebar);color:var(--text-on-dark);display:flex;flex-direction:column;border-right:none!important}.logo-area[_ngcontent-%COMP%]{height:64px;display:flex;align-items:center;padding:0 24px;background-color:#090d16;gap:12px}.logo-icon[_ngcontent-%COMP%]{color:var(--secondary);font-size:28px;width:28px;height:28px}.logo-text[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:700;letter-spacing:-.025em;background:linear-gradient(135deg,#ffffff 30%,var(--secondary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.user-panel[_ngcontent-%COMP%]{padding:24px;display:flex;align-items:center;gap:16px;background-color:#ffffff05}.avatar-circle[_ngcontent-%COMP%]{width:48px;height:48px;background:linear-gradient(135deg,var(--primary) 0%,var(--secondary) 100%);color:#fff;border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:600;box-shadow:0 4px 12px #4f46e54d}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;overflow:hidden}.user-name[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.role-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;padding:2px 8px;border-radius:var(--radius-full);width:fit-content;background-color:#0ea5e926;color:var(--secondary);text-transform:uppercase}.role-badge.admin[_ngcontent-%COMP%]{background-color:#4f46e533;color:#a5b4fc}.divider[_ngcontent-%COMP%]{border-color:#ffffff14!important}.nav-list[_ngcontent-%COMP%]{padding:16px 12px!important;flex-grow:1}.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:var(--radius-sm);margin-bottom:4px;color:#94a3b8!important;transition:all var(--transition-fast);font-size:.95rem}.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#64748b!important;margin-right:16px;transition:color var(--transition-fast)}.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ffffff0a!important;color:#fff!important}.nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:#fff!important}.nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:linear-gradient(90deg,#4f46e526,#4f46e50d)!important;border-left:4px solid var(--primary);color:#fff!important;font-weight:500}.nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#a5b4fc!important}.sidebar-footer[_ngcontent-%COMP%]{padding:16px 24px;font-size:.75rem;color:var(--text-light);background-color:#090d16;text-align:center}.content-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.toolbar[_ngcontent-%COMP%]{background-color:var(--bg-card)!important;border-bottom:1px solid var(--border);box-shadow:0 1px 2px #00000008;padding:0 24px!important}.page-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:var(--text-main);letter-spacing:-.01em}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.header-right[_ngcontent-%COMP%]{display:flex;align-items:center}.profile-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:4px 8px 4px 16px!important;height:48px;border-radius:var(--radius-full)!important;transition:background var(--transition-fast)}.profile-trigger[_ngcontent-%COMP%]:hover{background-color:#f1f5f9!important}.welcome-text[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-muted);display:none}@media(min-width:600px){.welcome-text[_ngcontent-%COMP%]{display:inline}}.header-avatar[_ngcontent-%COMP%]{width:36px;height:36px;background-color:var(--primary-light);color:var(--primary);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:.95rem}.arrow-down[_ngcontent-%COMP%]{font-size:20px;color:var(--text-muted);margin-left:-4px}.modern-menu[_ngcontent-%COMP%]{border-radius:var(--radius-md)!important;overflow:hidden;box-shadow:var(--shadow-lg)!important;border:1px solid var(--border);min-width:200px!important}.menu-header-info[_ngcontent-%COMP%]{padding:16px 20px;display:flex;flex-direction:column;gap:2px}.menu-name[_ngcontent-%COMP%]{font-weight:600;color:var(--text-main);font-size:.95rem}.menu-email[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.8rem;margin:0}.text-danger[_ngcontent-%COMP%]{color:var(--danger)!important}.page-body[_ngcontent-%COMP%]{padding:32px;flex-grow:1;background-color:var(--bg-app);overflow-y:auto;min-height:calc(100vh - 64px)}@media(max-width:600px){.page-body[_ngcontent-%COMP%]{padding:16px}}"]})};var un=[{path:"login",component:Jt},{path:"",component:ne,canActivate:[$i],children:[{path:"",pathMatch:"full",redirectTo:"dashboard"},{path:"dashboard",loadComponent:()=>import("./chunk-VJO6HMJA.js").then(n=>n.DashboardComponent),data:{roles:["Admin"]}},{path:"users",loadComponent:()=>import("./chunk-NKPHQD4D.js").then(n=>n.UserListComponent),data:{roles:["Admin"]}},{path:"attendance/records",loadComponent:()=>import("./chunk-ONYP5MQN.js").then(n=>n.AttendanceRecordsComponent),data:{roles:["Admin"]}},{path:"attendance/my-attendance",loadComponent:()=>import("./chunk-65KDEP4D.js").then(n=>n.MyAttendanceComponent),data:{roles:["Employee"]}}]},{path:"**",redirectTo:""}];var Tt={production:!1,apiUrl:"https://localhost:7013",useMock:!1};var gn=(n,o)=>{let e=r(Y).getToken(),i=n;return n.url.startsWith("/api")&&!Tt.useMock&&(i=n.clone({url:`${Tt.apiUrl}${n.url}`})),e&&(i=i.clone({setHeaders:{Authorization:`Bearer ${e}`}})),o(i)};var Da=()=>{let n=localStorage.getItem("mock_users");if(n)return JSON.parse(n);let o=[{id:"1",fullName:"System Admin",email:"admin@system.com",role:"Admin",isActive:!0},{id:"2",fullName:"Jane Doe",email:"employee@system.com",role:"Employee",isActive:!0},{id:"3",fullName:"Bob Smith",email:"bob@system.com",role:"Employee",isActive:!0},{id:"4",fullName:"Alice Johnson",email:"alice@system.com",role:"Employee",isActive:!1}];return localStorage.setItem("mock_users",JSON.stringify(o)),o},Ta=()=>{let n=localStorage.getItem("mock_attendance");if(n)return JSON.parse(n);let o=new Date;o.setDate(o.getDate()-1);let t=o.toISOString().split("T")[0],e=[{id:"att-1",employeeId:"2",employeeName:"Jane Doe",date:t,startTime:"09:00:00",endTime:"17:00:00"},{id:"att-2",employeeId:"3",employeeName:"Bob Smith",date:t,startTime:"08:45:00",endTime:"16:30:00"}];return localStorage.setItem("mock_attendance",JSON.stringify(e)),e},_n=(n,o)=>{if(!Tt.useMock||!n.url.startsWith("/api"))return o(n);let t=Da(),e=Ta(),{url:i,method:a,body:s}=n,w=localStorage.getItem("auth_user"),P=w?JSON.parse(w):null,S=(p,h=200)=>vt(new qe({status:h,body:p})).pipe(se(400)),I=(p,h=400)=>Ie(()=>({status:h,error:{message:p}})).pipe(se(400));if(i.endsWith("/api/auth/login")&&a==="POST"){let{email:p,password:h}=s,g=t.find(dt=>dt.email.toLowerCase()===p.toLowerCase());if(!g)return I("User not found.",404);if(!g.isActive)return I("This account has been disabled. Contact an administrator.",403);if(h.length<6)return I("Invalid password structure. Password must be at least 6 characters.",400);let D=`mock-jwt-token-for-${g.role.toLowerCase()}-${g.id}`;return S({token:D,user:g})}if(i.includes("/api/users")){let p=i.split("/"),h=p[p.length-1]!=="users"?p[p.length-1]:null;if(a==="GET"&&!h)return S(t);if(a==="GET"&&h){let g=t.find(D=>D.id===h);return g?S(g):I("User not found",404)}if(a==="POST"){let g=s;return t.some(D=>D.email.toLowerCase()===g.email.toLowerCase())?I("Email already exists.",400):(g.id=Math.random().toString(36).substring(2,9),t.push(g),localStorage.setItem("mock_users",JSON.stringify(t)),S(g))}if(a==="PUT"&&h){let g=s,D=t.findIndex(dt=>dt.id===h);return D===-1?I("User not found",404):(t[D]=ht(ht({},t[D]),g),localStorage.setItem("mock_users",JSON.stringify(t)),P&&P.id===h&&localStorage.setItem("auth_user",JSON.stringify(t[D])),S(t[D]))}if(a==="DELETE"&&h){let g=t.findIndex(D=>D.id===h);return g===-1?I("User not found",404):(t[g].isActive=!1,localStorage.setItem("mock_users",JSON.stringify(t)),S({success:!0,message:"User deactivated successfully"}))}}if(i.includes("/api/attendance")){if(!P)return I("Unauthorized access.",401);if(i.endsWith("/api/attendance/start")&&a==="POST"){let p=new Date().toISOString().split("T")[0];if(e.find(oe=>oe.employeeId===P.id&&oe.date===p&&!oe.endTime))return I("You are already clocked in.",400);let D=new Date().toTimeString().split(" ")[0],dt={id:`att-${Math.random().toString(36).substring(2,9)}`,employeeId:P.id,employeeName:P.fullName,date:p,startTime:D};return e.unshift(dt),localStorage.setItem("mock_attendance",JSON.stringify(e)),S(dt)}if(i.endsWith("/api/attendance/end")&&a==="POST"){let p=e.find(g=>g.employeeId===P.id&&!g.endTime);if(!p)return I("No active clock-in session found.",400);let h=new Date;return p.endTime=h.toTimeString().split(" ")[0],localStorage.setItem("mock_attendance",JSON.stringify(e)),S(p)}if(i.endsWith("/api/attendance/my-records")&&a==="GET"){let p=e.filter(h=>h.employeeId===P.id);return S(p)}if(i.endsWith("/api/attendance/all")&&a==="GET")return P.role!=="Admin"?I("Access Denied. Admins only.",403):S(e);if(i.endsWith("/api/attendance/status")&&a==="GET"){let p=e.find(h=>h.employeeId===P.id&&!h.endTime);return S({isClockedIn:!!p,activeRecord:p})}}return o(n)};var fn={providers:[Pe(),ni(un),Je($e([gn,_n])),Ji()]};var ae=class n{title=E("attendance-app");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){t&1&&M(0,"router-outlet")},dependencies:[Vt],encapsulation:2})};Xe(ae,fn).catch(n=>console.error(n));
