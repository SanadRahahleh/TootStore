import{$a as Kt,$b as Er,Ac as Mr,B as pe,Ba as x,Ca as Wt,D as Vn,Da as nr,Db as mt,E as Gn,Ea as ae,Eb as ce,F as ge,Fa as rr,Fb as Ce,G as rt,Ga as ve,Gb as Xt,Ha as ir,Hb as ft,Ia as ye,Ib as ht,J as Wn,Ja as st,Jb as Ae,K as it,Ka as _e,La as De,Ma as or,Mb as pt,Na as ar,O as Kn,Oa as sr,Pa as cr,Q as ot,Qa as dr,R as Zn,Ra as ur,Rb as vr,S as Yn,Sa as lr,Sb as K,T as at,Ta as F,Tb as k,V as be,Va as se,Vb as yr,W as C,Wa as Ee,Wb as _r,Xa as mr,Xb as Dr,Ya as ct,Z as u,_,_a as fr,a as y,aa as f,ab as we,ac as gt,ba as m,bb as Zt,bc as B,ca as s,cb as Q,cc as Ie,d as nt,da as Ht,ea as Xn,eb as dt,f as he,fa as Be,ga as Jn,h as S,i as Un,ib as M,ja as Vt,jb as E,ka as qn,kb as T,la as L,lb as hr,lc as wr,ma as h,nb as ut,nc as Jt,o as j,ob as pr,p as jn,pa as Ue,qa as D,qc as Cr,ra as oe,rb as lt,s as I,sa as Qn,sb as gr,t as zn,tb as br,ua as je,uc as Ar,vb as Yt,vc as Ir,w as $n,wa as er,wc as Tr,xa as tr,xb as z,xc as H,y as Hn,ya as Gt,yc as Te}from"./chunk-CJVY4CSM.js";var Sr=null;function Z(){return Sr}function qt(n){Sr??=n}var ze=class{},Me=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:()=>s(xr),providedIn:"platform"})}return n})();var xr=(()=>{class n extends Me{_location;_history;_doc=s(h);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Z().getBaseHref(this._doc)}onPopState(e){let t=Z().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Z().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Or(n,r){return n?r?n.endsWith("/")?r.startsWith("/")?n+r.slice(1):n+r:r.startsWith("/")?n+r:`${n}/${r}`:n:r}function Fr(n){let r=n.search(/#|\?|$/);return n[r-1]==="/"?n.slice(0,r-1)+n.slice(r):n}function ee(n){return n&&n[0]!=="?"?`?${n}`:n}var bt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:()=>s(qi),providedIn:"root"})}return n})(),Ji=new f(""),qi=(()=>{class n extends bt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(h).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Or(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+ee(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,o){let a=this.prepareExternalUrl(i+ee(o));this._platformLocation.pushState(e,t,a)}replaceState(e,t,i,o){let a=this.prepareExternalUrl(i+ee(o));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(m(Me),m(Ji,8))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nr=(()=>{class n{_subject=new S;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=to(Fr(Rr(t))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+ee(t))}normalize(e){return n.stripTrailingSlash(eo(this._basePath,Rr(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ee(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ee(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t??void 0,complete:i??void 0})}static normalizeQueryParams=ee;static joinWithSlash=Or;static stripTrailingSlash=Fr;static \u0275fac=function(t){return new(t||n)(m(bt))};static \u0275prov=u({token:n,factory:()=>Qi(),providedIn:"root"})}return n})();function Qi(){return new Nr(m(bt))}function eo(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Rr(n){return n.replace(/\/index\.html$/,"")}function to(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var vt=class{$implicit;ngForOf;index;count;constructor(r,e,t,i){this.$implicit=r,this.ngForOf=e,this.index=t,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Br=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,t,i){this._viewContainer=e,this._template=t,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((i,o,a)=>{if(i.previousIndex==null)t.createEmbeddedView(this._template,new vt(i.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)t.remove(o===null?void 0:o);else if(o!==null){let c=t.get(o);t.move(c,a),Lr(c,i)}});for(let i=0,o=t.length;i<o;i++){let c=t.get(i).context;c.index=i,c.count=o,c.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);Lr(o,i)})}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(Q(dt),Q(Kt),Q(Ir))};static \u0275dir=T({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function Lr(n,r){n.context.$implicit=r.item}var no=(()=>{class n{_viewContainer;_context=new yt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,t){this._viewContainer=e,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){kr(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){kr(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)(Q(dt),Q(Kt))};static \u0275dir=T({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),yt=class{$implicit=null;ngIf=null};function kr(n,r){if(n&&!n.createEmbeddedView)throw new C(2020,!1)}var tn=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(L);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static \u0275fac=function(t){return new(t||n)(Q(dt))};static \u0275dir=T({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Gt]})}return n})();function ro(n,r){return new C(2100,!1)}var Qt=class{createSubscription(r,e,t){return Jt(()=>r.subscribe({next:e,error:t}))}dispose(r){Jt(()=>r.unsubscribe())}},en=class{createSubscription(r,e,t){return r.then(i=>e?.(i),i=>t?.(i)),{unsubscribe:()=>{e=null,t=null}}}dispose(r){r.unsubscribe()}},io=new en,oo=new Qt,ao=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=s(Qn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t),t=>this.applicationErrorHandler(t))}_selectStrategy(e){if(gr(e))return io;if(br(e))return oo;throw ro(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(t){return new(t||n)(Q(Ar,16))};static \u0275pipe=hr({name:"async",type:n,pure:!1})}return n})();var Ur=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({})}return n})();function $e(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,o]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var de=class{};var nn="browser";function jr(n){return n===nn}var He=class{_doc;constructor(r){this._doc=r}manager},_t=(()=>{class n extends He{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,i,o){return e.addEventListener(t,i,o),()=>this.removeEventListener(e,t,i,o)}removeEventListener(e,t,i,o){return e.removeEventListener(t,i,o)}static \u0275fac=function(t){return new(t||n)(m(h))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),wt=new f(""),sn=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof _t));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof _t);o&&this._plugins.push(o)}addEventListener(e,t,i,o){return this._findPluginFor(t).addEventListener(e,t,i,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(o=>o.supports(e)),!t)throw new C(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(m(wt),m(D))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),rn="ng-app-id";function zr(n){for(let r of n)r.remove()}function $r(n,r){let e=r.createElement("style");return e.textContent=n,e}function co(n,r,e,t){let i=n.head?.querySelectorAll(`style[${rn}="${r}"],link[${rn}="${r}"]`);if(i)for(let o of i)o.removeAttribute(rn),o instanceof HTMLLinkElement?t.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function an(n,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var cn=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,i,o={}){this.doc=e,this.appId=t,this.nonce=i,co(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let i of e)this.addUsage(i,this.inline,$r);t?.forEach(i=>this.addUsage(i,this.external,an))}removeStyles(e,t){for(let i of e)this.removeUsage(i,this.inline);t?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,t,i){let o=t.get(e);o?o.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,t){let i=t.get(e);i&&(i.usage--,i.usage<=0&&(zr(i.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])zr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:i}]of this.inline)i.push(this.addElement(e,$r(t,this.doc)));for(let[t,{elements:i}]of this.external)i.push(this.addElement(e,an(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(m(h),m(ae),m(ye,8),m(ve))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),on={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},dn=/%COMP%/g;var Vr="%COMP%",uo=`_nghost-${Vr}`,lo=`_ngcontent-${Vr}`,mo=!0,fo=new f("",{factory:()=>mo});function ho(n){return lo.replace(dn,n)}function po(n){return uo.replace(dn,n)}function Gr(n,r){return r.map(e=>e.replace(dn,n))}var un=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,i,o,a,c,d=null,l=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=c,this.nonce=d,this.tracingService=l,this.defaultRenderer=new Ve(e,a,c,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,t);return i instanceof Et?i.applyToHost(e):i instanceof Ge&&i.applyStyles(),i}getOrCreateRenderer(e,t){let i=this.rendererByCompId,o=i.get(t.id);if(!o){let a=this.doc,c=this.ngZone,d=this.eventManager,l=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,w=this.tracingService;switch(t.encapsulation){case st.Emulated:o=new Et(d,l,t,this.appId,p,a,c,w);break;case st.ShadowDom:return new Dt(d,e,t,a,c,this.nonce,w,l);case st.ExperimentalIsolatedShadowDom:return new Dt(d,e,t,a,c,this.nonce,w);default:o=new Ge(d,l,t,p,a,c,w);break}i.set(t.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(m(sn),m(cn),m(ae),m(fo),m(h),m(D),m(ye),m(ct,8))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),Ve=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,i){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(on[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Hr(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(Hr(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new C(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,i){if(i){e=i+":"+e;let o=on[i];o?r.setAttributeNS(o,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let i=on[t];i?r.removeAttributeNS(i,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,i){i&(Ee.DashCase|Ee.Important)?r.style.setProperty(e,t,i&Ee.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&Ee.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,i){if(typeof r=="string"&&(r=Z().getGlobalEventTarget(this.doc,r),!r))throw new C(5102,!1);let o=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Hr(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Dt=class extends Ve{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,i,o,a,c,d){super(r,i,o,c),this.hostEl=e,this.sharedStylesHost=d,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=t.styles;l=Gr(t.id,l);for(let w of l){let O=document.createElement("style");a&&O.setAttribute("nonce",a),O.textContent=w,this.shadowRoot.appendChild(O)}let p=t.getExternalStyles?.();if(p)for(let w of p){let O=an(w,i);a&&O.setAttribute("nonce",a),this.shadowRoot.appendChild(O)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ge=class extends Ve{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,i,o,a,c,d){super(r,o,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let l=t.styles;this.styles=d?Gr(d,l):l,this.styleUrls=t.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&mr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Et=class extends Ge{contentAttr;hostAttr;constructor(r,e,t,i,o,a,c,d){let l=i+"-"+t.id;super(r,e,t,o,a,c,d,l),this.contentAttr=ho(l),this.hostAttr=po(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}};var Ct=class n extends ze{supportsDOMEvents=!0;static makeCurrent(){qt(new n)}onAndCancel(r,e,t,i){return r.addEventListener(e,t,i),()=>{r.removeEventListener(e,t,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=bo();return e==null?null:vo(e)}resetBaseElement(){We=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return $e(document.cookie,r)}},We=null;function bo(){return We=We||document.head.querySelector("base"),We?We.getAttribute("href"):null}function vo(n){return new URL(n,document.baseURI).pathname}var yo=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})(),Wr=["alt","control","meta","shift"],_o={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Do={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Kr=(()=>{class n extends He{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,i,o){let a=n.parseEventName(t),c=n.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Z().onAndCancel(e,a.domEventName,c,o))}static parseEventName(e){let t=e.toLowerCase().split("."),i=t.shift();if(t.length===0||!(i==="keydown"||i==="keyup"))return null;let o=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),Wr.forEach(l=>{let p=t.indexOf(l);p>-1&&(t.splice(p,1),a+=l+".")}),a+=o,t.length!=0||o.length===0)return null;let d={};return d.domEventName=i,d.fullKey=a,d}static matchEventFullKeyCode(e,t){let i=_o[e.key]||e.key,o="";return t.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Wr.forEach(a=>{if(a!==i){let c=Do[a];c(e)&&(o+=a+".")}}),o+=i,o===t)}static eventCallback(e,t,i){return o=>{n.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>t(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(m(h))};static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})();async function Eo(n,r,e){let t=y({rootComponent:n},wo(r,e));return Tr(t)}function wo(n,r){return{platformRef:r?.platformRef,appProviders:[...Mo,...n?.providers??[]],platformProviders:To}}function Co(){Ct.makeCurrent()}function Ao(){return new oe}function Io(){return nr(document),document}var To=[{provide:ve,useValue:nn},{provide:rr,useValue:Co,multi:!0},{provide:h,useFactory:Io}];var Mo=[{provide:Xn,useValue:"root"},{provide:oe,useFactory:Ao},{provide:wt,useClass:_t,multi:!0},{provide:wt,useClass:Kr,multi:!0},un,cn,sn,{provide:we,useExisting:un},{provide:de,useClass:yo},[]];var te=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let i=e.slice(0,t),o=e.slice(t+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let t=r.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...t),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,t),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var It=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},Tt=class{encodeKey(r){return Zr(r)}encodeValue(r){return Zr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function So(n,r){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,c]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],d=e.get(a)||[];d.push(c),e.set(a,d)}),e}var xo=/%(\d[a-f0-9])/gi,Fo={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Zr(n){return encodeURIComponent(n).replace(xo,(r,e)=>Fo[e]??r)}function At(n){return`${n}`}var Y=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Tt,r.fromString){if(r.fromObject)throw new C(2805,!1);this.map=So(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],i=Array.isArray(t)?t.map(At):[At(t)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let i=r[t];Array.isArray(i)?i.forEach(o=>{e.push({param:t,value:o,op:"a"})}):e.push({param:t,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(At(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let t=this.map.get(r.param)||[],i=t.indexOf(At(r.value));i!==-1&&t.splice(i,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Ro(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Yr(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Xr(n){return typeof Blob<"u"&&n instanceof Blob}function Jr(n){return typeof FormData<"u"&&n instanceof FormData}function Oo(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var qr="Content-Type",Qr="Accept",ei="text/plain",ti="application/json",No=`${ti}, ${ei}, */*`,Se=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,i){this.url=e,this.method=r.toUpperCase();let o;if(Ro(this.method)||i?(this.body=t!==void 0?t:null,o=i):o=t,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new C(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new te,this.context??=new It,!this.params)this.params=new Y,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),d=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+d+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Yr(this.body)||Xr(this.body)||Jr(this.body)||Oo(this.body)?this.body:this.body instanceof Y?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Jr(this.body)?null:Xr(this.body)?this.body.type||null:Yr(this.body)?null:typeof this.body=="string"?ei:this.body instanceof Y?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ti:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,c=r.cache||this.cache,d=r.mode||this.mode,l=r.redirect||this.redirect,p=r.credentials||this.credentials,w=r.referrer??this.referrer,O=r.integrity||this.integrity,re=r.referrerPolicy||this.referrerPolicy,q=r.transferCache??this.transferCache,P=r.timeout??this.timeout,g=r.body!==void 0?r.body:this.body,b=r.withCredentials??this.withCredentials,N=r.reportProgress??this.reportProgress,W=r.headers||this.headers,A=r.params||this.params,ke=r.context??this.context;return r.setHeaders!==void 0&&(W=Object.keys(r.setHeaders).reduce((Pe,ie)=>Pe.set(ie,r.setHeaders[ie]),W)),r.setParams&&(A=Object.keys(r.setParams).reduce((Pe,ie)=>Pe.set(ie,r.setParams[ie]),A)),new n(e,t,g,{params:A,headers:W,context:ke,reportProgress:N,responseType:i,withCredentials:b,transferCache:q,keepalive:o,cache:c,priority:a,timeout:P,mode:d,redirect:l,credentials:p,referrer:w,integrity:O,referrerPolicy:re})}},ue=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ue||{}),Fe=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t="OK"){this.headers=r.headers||new te,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},Mt=class n extends Fe{constructor(r={}){super(r)}type=ue.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Ke=class n extends Fe{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ue.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},xe=class extends Fe{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Lo=200,ko=204;var Po=new f("");var Bo=/^\)\]\}',?\n/;var mn=(()=>{class n{xhrFactory;tracingService=s(ct,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new C(-2800,!1);let t=this.xhrFactory;return j(null).pipe(Yn(()=>new he(o=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((g,b)=>a.setRequestHeader(g,b.join(","))),e.headers.has(Qr)||a.setRequestHeader(Qr,No),!e.headers.has(qr)){let g=e.detectContentTypeHeader();g!==null&&a.setRequestHeader(qr,g)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();a.responseType=g!=="json"?g:"text"}let c=e.serializeBody(),d=null,l=()=>{if(d!==null)return d;let g=a.statusText||"OK",b=new te(a.getAllResponseHeaders()),N=a.responseURL||e.url;return d=new Mt({headers:b,status:a.status,statusText:g,url:N}),d},p=this.maybePropagateTrace(()=>{let{headers:g,status:b,statusText:N,url:W}=l(),A=null;b!==ko&&(A=typeof a.response>"u"?a.responseText:a.response),b===0&&(b=A?Lo:0);let ke=b>=200&&b<300;if(e.responseType==="json"&&typeof A=="string"){let Pe=A;A=A.replace(Bo,"");try{A=A!==""?JSON.parse(A):null}catch(ie){A=Pe,ke&&(ke=!1,A={error:ie,text:A})}}ke?(o.next(new Ke({body:A,headers:g,status:b,statusText:N,url:W||void 0})),o.complete()):o.error(new xe({error:A,headers:g,status:b,statusText:N,url:W||void 0}))}),w=this.maybePropagateTrace(g=>{let{url:b}=l(),N=new xe({error:g,status:a.status||0,statusText:a.statusText||"Unknown Error",url:b||void 0});o.error(N)}),O=w;e.timeout&&(O=this.maybePropagateTrace(g=>{let{url:b}=l(),N=new xe({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:b||void 0});o.error(N)}));let re=!1,q=this.maybePropagateTrace(g=>{re||(o.next(l()),re=!0);let b={type:ue.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),e.responseType==="text"&&a.responseText&&(b.partialText=a.responseText),o.next(b)}),P=this.maybePropagateTrace(g=>{let b={type:ue.UploadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),o.next(b)});return a.addEventListener("load",p),a.addEventListener("error",w),a.addEventListener("timeout",O),a.addEventListener("abort",w),e.reportProgress&&(a.addEventListener("progress",q),c!==null&&a.upload&&a.upload.addEventListener("progress",P)),a.send(c),o.next({type:ue.Sent}),()=>{a.removeEventListener("error",w),a.removeEventListener("abort",w),a.removeEventListener("load",p),a.removeEventListener("timeout",O),e.reportProgress&&(a.removeEventListener("progress",q),c!==null&&a.upload&&a.upload.removeEventListener("progress",P)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(m(de))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Uo(n,r){return r(n)}function jo(n,r,e){return(t,i)=>Jn(e,()=>r(t,o=>n(o,i)))}var fn=new f("",{factory:()=>[]}),ni=new f(""),ri=new f("",{factory:()=>!0});var hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(mn),i},providedIn:"root"})}return n})();var St=(()=>{class n{backend;injector;chain=null;pendingTasks=s(er);contributeToStability=s(ri);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(fn),...this.injector.get(ni,[])]));this.chain=t.reduceRight((i,o)=>jo(i,o,this.injector),Uo)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(it(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(m(hn),m(Be))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(St),i},providedIn:"root"})}return n})();function ln(n,r){return{body:r,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var xt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,i={}){let o;if(e instanceof Se)o=e;else{let d;i.headers instanceof te?d=i.headers:d=new te(i.headers);let l;i.params&&(i.params instanceof Y?l=i.params:l=new Y({fromObject:i.params})),o=new Se(e,t,i.body!==void 0?i.body:null,{headers:d,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=j(o).pipe(Gn(d=>this.handler.handle(d)));if(e instanceof Se||i.observe==="events")return a;let c=a.pipe(pe(d=>d instanceof Ke));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(I(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new C(2806,!1);return d.body}));case"blob":return c.pipe(I(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new C(2807,!1);return d.body}));case"text":return c.pipe(I(d=>{if(d.body!==null&&typeof d.body!="string")throw new C(2808,!1);return d.body}));default:return c.pipe(I(d=>d.body))}case"response":return c;default:throw new C(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new Y().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,i={}){return this.request("PATCH",e,ln(i,t))}post(e,t,i={}){return this.request("POST",e,ln(i,t))}put(e,t,i={}){return this.request("PUT",e,ln(i,t))}static \u0275fac=function(t){return new(t||n)(m(pn))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zo=new f("",{factory:()=>!0}),$o="XSRF-TOKEN",Ho=new f("",{factory:()=>$o}),Vo="X-XSRF-TOKEN",Go=new f("",{factory:()=>Vo}),Wo=(()=>{class n{cookieName=s(Ho);doc=s(h);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=$e(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(Wo),i},providedIn:"root"})}return n})();function Ko(n,r){if(!s(zo)||n.method==="GET"||n.method==="HEAD")return r(n);try{let i=s(Me).href,{origin:o}=new URL(i),{origin:a}=new URL(n.url,o);if(o!==a)return r(n)}catch{return r(n)}let e=s(ii).getToken(),t=s(Go);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),r(n)}var gn=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(gn||{});function Zo(n,r){return{\u0275kind:n,\u0275providers:r}}function Yo(...n){let r=[xt,St,{provide:pn,useExisting:St},{provide:hn,useFactory:()=>s(Po,{optional:!0})??s(mn)},{provide:fn,useValue:Ko,multi:!0}];for(let e of n)r.push(...e.\u0275providers);return Ht(r)}function Xo(n){return Zo(gn.Interceptors,n.map(r=>({provide:fn,useValue:r,multi:!0})))}var pu=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(m(h))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ze=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:function(t){let i=null;return t?i=new(t||n):i=m(qo),i},providedIn:"root"})}return n})(),qo=(()=>{class n extends Ze{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case F.NONE:return t;case F.HTML:return De(t,"HTML")?_e(t):lr(this._doc,String(t)).toString();case F.STYLE:return De(t,"Style")?_e(t):t;case F.SCRIPT:if(De(t,"Script"))return _e(t);throw new C(5200,!1);case F.URL:return De(t,"URL")?_e(t):ur(String(t));case F.RESOURCE_URL:if(De(t,"ResourceURL"))return _e(t);throw new C(5201,!1);default:throw new C(5202,!1)}}bypassSecurityTrustHtml(e){return or(e)}bypassSecurityTrustStyle(e){return ar(e)}bypassSecurityTrustScript(e){return sr(e)}bypassSecurityTrustUrl(e){return cr(e)}bypassSecurityTrustResourceUrl(e){return dr(e)}static \u0275fac=function(t){return new(t||n)(m(h))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ea=new f("cdk-dir-doc",{providedIn:"root",factory:()=>s(h)}),ta=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function oi(n){let r=n?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?ta.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var na=(()=>{class n{get value(){return this.valueSignal()}valueSignal=je("ltr");change=new Ue;constructor(){let e=s(ea,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(oi(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var V=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({})}return n})();var ra=["*"];var ia=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],oa=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],aa=new f("MAT_CARD_CONFIG"),Fu=(()=>{class n{appearance;constructor(){let e=s(aa,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,i){t&2&&B("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ra,decls:1,vars:0,template:function(t,i){t&1&&(K(),k(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ru=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Ou=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),Nu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var Lu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:oa,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,i){t&1&&(K(ia),k(0),ft(1,"div",0),k(2,1),ht(),k(3,2))},encapsulation:2,changeDetection:0})}return n})(),ku=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var Pu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({imports:[V]})}return n})();function Ye(n){return n.buttons===0||n.detail===0}function Xe(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var bn;function ai(){if(bn==null){let n=typeof document<"u"?document.head:null;bn=!!(n&&(n.createShadowRoot||n.attachShadow))}return bn}function vn(n){if(ai()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function sa(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let r=n.shadowRoot.activeElement;if(r===n)break;n=r}return n}function $(n){return n.composedPath?n.composedPath()[0]:n.target}var yn;try{yn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{yn=!1}var R=(()=>{class n{_platformId=s(ve);isBrowser=this._platformId?jr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||yn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Je;function si(){if(Je==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Je=!0}))}finally{Je=Je||!1}return Je}function Re(n){return si()?n:!!n.capture}function _n(n,r=0){return ci(n)?Number(n):arguments.length===2?r:0}function ci(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function G(n){return n instanceof x?n.nativeElement:n}var di=new f("cdk-input-modality-detector-options"),ui={ignoreKeys:[18,17,224,91,16]},li=650,Dn={passive:!0,capture:!0},mi=(()=>{class n{_platform=s(R);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Un(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=$(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<li||(this._modality.next(Ye(e)?"keyboard":"mouse"),this._mostRecentTarget=$(e))};_onTouchstart=e=>{if(Xe(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=$(e)};constructor(){let e=s(D),t=s(h),i=s(di,{optional:!0});if(this._options=y(y({},ui),i),this.modalityDetected=this._modality.pipe(ot(1)),this.modalityChanged=this.modalityDetected.pipe(Wn()),this._platform.isBrowser){let o=s(we).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Dn),o.listen(t,"mousedown",this._onMousedown,Dn),o.listen(t,"touchstart",this._onTouchstart,Dn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qe=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(qe||{}),fi=new f("cdk-focus-monitor-default-options"),Ft=Re({passive:!0,capture:!0}),En=(()=>{class n{_ngZone=s(D);_platform=s(R);_inputModalityDetector=s(mi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(h);_stopInputModalityDetector=new S;constructor(){let e=s(fi,{optional:!0});this._detectionMode=e?.detectionMode||qe.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=$(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=G(e);if(!this._platform.isBrowser||i.nodeType!==1)return j();let o=vn(i)||this._document,a=this._elementInfo.get(i);if(a)return t&&(a.checkChildren=!0),a.subject;let c={checkChildren:t,subject:new S,rootNode:o};return this._elementInfo.set(i,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let t=G(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let o=G(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,d])=>this._originChanged(c,t,d)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===qe.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===qe.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?li:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),o=$(e);!i||!i.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ft),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ft)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(at(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ft),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ft),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&t.push([o,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Rt=new WeakMap,X=(()=>{class n{_appRef;_injector=s(L);_environmentInjector=s(Be);load(e){let t=this._appRef=this._appRef||this._injector.get(Yt),i=Rt.get(t);i||(i={loaders:new Set,refs:[]},Rt.set(t,i),t.onDestroy(()=>{Rt.get(t)?.refs.forEach(o=>o.destroy()),Rt.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Mr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ot;function ca(){if(Ot===void 0&&(Ot=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Ot=n.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return Ot}function le(n){return ca()?.createHTML(n)||n}function hi(n,r,e){let t=e.sanitize(F.HTML,r);n.innerHTML=le(t||"")}function wn(n){return Array.isArray(n)?n:[n]}var pi=new Set,me,Lt=(()=>{class n{_platform=s(R);_nonce=s(ye,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ua}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&da(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function da(n,r){if(!pi.has(n))try{me||(me=document.createElement("style"),r&&me.setAttribute("nonce",r),me.setAttribute("type","text/css"),document.head.appendChild(me)),me.sheet&&(me.sheet.insertRule(`@media ${n} {body{ }}`,0),pi.add(n))}catch(e){console.error(e)}}function ua(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Cn=(()=>{class n{_mediaMatcher=s(Lt);_zone=s(D);_queries=new Map;_destroySubject=new S;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return gi(wn(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=gi(wn(e)).map(a=>this._registerQuery(a).observable),o=zn(i);return o=$n(o.pipe(rt(1)),o.pipe(ot(1),ge(0))),o.pipe(I(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:l})=>{c.matches=c.matches||d,c.breakpoints[l]=d}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new he(a=>{let c=d=>this._zone.run(()=>a.next(d));return t.addListener(c),()=>{t.removeListener(c)}}).pipe(Zn(t),I(({matches:a})=>({query:e,matches:a})),at(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function gi(n){return n.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function la(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let r=0;r<n.addedNodes.length;r++)if(!(n.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<n.removedNodes.length;r++)if(!(n.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var bi=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vi=(()=>{class n{_mutationObserverFactory=s(bi);_observedElements=new Map;_ngZone=s(D);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=G(e);return new he(i=>{let a=this._observeElement(t).pipe(I(c=>c.filter(d=>!la(d))),pe(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{i.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new S,i=this._mutationObserverFactory.create(o=>t.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:i}=this._observedElements.get(e);t&&t.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Bl=(()=>{class n{_contentObserver=s(vi);_elementRef=s(x);event=new Ue;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=_n(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(ge(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",H],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),yi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({providers:[bi]})}return n})();var wi=(()=>{class n{_platform=s(R);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return fa(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=ma(Da(e));if(t&&(_i(t)===-1||!this.isVisible(t)))return!1;let i=e.nodeName.toLowerCase(),o=_i(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ya(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return _a(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ma(n){try{return n.frameElement}catch{return null}}function fa(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function ha(n){let r=n.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function pa(n){return ba(n)&&n.type=="hidden"}function ga(n){return va(n)&&n.hasAttribute("href")}function ba(n){return n.nodeName.toLowerCase()=="input"}function va(n){return n.nodeName.toLowerCase()=="a"}function Ci(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let r=n.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function _i(n){if(!Ci(n))return null;let r=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function ya(n){let r=n.nodeName.toLowerCase(),e=r==="input"&&n.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function _a(n){return pa(n)?!1:ha(n)||ga(n)||n.hasAttribute("contenteditable")||Ci(n)}function Da(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var kt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,t,i,o=!1,a){this._element=r,this._checker=e,this._ngZone=t,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(r),!!t}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let t=0;t<e.length;t++){let i=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let t=e.length-1;t>=0;t--){let i=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?fr(r,{injector:this._injector}):setTimeout(r)}},Ea=(()=>{class n{_checker=s(wi);_ngZone=s(D);_document=s(h);_injector=s(L);constructor(){s(X).load(Nt)}create(e,t=!1){return new kt(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ai=new f("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ii=new f("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),wa=0,Ca=(()=>{class n{_ngZone=s(D);_defaultOptions=s(Ii,{optional:!0});_liveElement;_document=s(h);_sanitizer=s(Ze);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Ai,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let i=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:hi(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${wa++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let o=t[i],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ne=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(ne||{}),Di="cdk-high-contrast-black-on-white",Ei="cdk-high-contrast-white-on-black",An="cdk-high-contrast-active",Ti=(()=>{class n{_platform=s(R);_hasCheckedHighContrastMode=!1;_document=s(h);_breakpointSubscription;constructor(){this._breakpointSubscription=s(Cn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ne.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,i=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ne.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ne.BLACK_ON_WHITE}return ne.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(An,Di,Ei),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===ne.BLACK_ON_WHITE?e.add(An,Di):t===ne.WHITE_ON_BLACK&&e.add(An,Ei)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Aa=(()=>{class n{constructor(){s(Ti)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({imports:[yi]})}return n})();var Ia=200,Pt=class{_letterKeyStream=new S;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new S;selectedItem=this._selectedItem;constructor(r,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Ia;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(be(e=>this._pressedLetters.push(e)),ge(r),pe(()=>this._pressedLetters.length>0),I(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let i=(this._selectedItemIndex+t)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Mi(n,...r){return r.length?r.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Oe=class{_items;_activeItemIndex=je(-1);_activeItem=je(null);_wrap=!1;_typeaheadSubscription=nt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Wt?this._itemChangesSubscription=r.changes.subscribe(t=>this._itemsChanged(t.toArray())):lt(r)&&(this._effectRef=tr(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new S;change=new S;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Pt(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||Mi(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),t=typeof r=="number"?r:e.indexOf(r),i=e[t];this._activeItem.set(i??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let i=(this._activeItemIndex()+r*t+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let t=this._getItemsArray();if(t[r]){for(;this._skipPredicateFn(t[r]);)if(r+=e,!t[r])return;this.setActiveItem(r)}}_getItemsArray(){return lt(this._items)?this._items():this._items instanceof Wt?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let t=r.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var In=class extends Oe{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var Tn=class extends Oe{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Mn={},Sn=class n{_appId=s(ae);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Mn.hasOwnProperty(r)||(Mn[r]=0),`${r}${e?n._infix+"-":""}${Mn[r]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})};var xi=" ";function Ta(n,r,e){let t=Ut(n,r);e=e.trim(),!t.some(i=>i.trim()===e)&&(t.push(e),n.setAttribute(r,t.join(xi)))}function Ma(n,r,e){let t=Ut(n,r);e=e.trim();let i=t.filter(o=>o!==e);i.length?n.setAttribute(r,i.join(xi)):n.removeAttribute(r)}function Ut(n,r){return n.getAttribute(r)?.match(/\S+/g)??[]}var Fi="cdk-describedby-message",Bt="cdk-describedby-host",Fn=0,Pm=(()=>{class n{_platform=s(R);_document=s(h);_messageRegistry=new Map;_messagesContainer=null;_id=`${Fn++}`;constructor(){s(X).load(Nt),this._id=s(ae)+"-"+Fn++}describe(e,t,i){if(!this._canBeDescribed(e,t))return;let o=xn(t,i);typeof t!="string"?(Si(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,i){if(!t||!this._isElementNode(e))return;let o=xn(t,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Bt}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Bt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let i=this._document.createElement("div");Si(i,this._id),i.textContent=e,t&&i.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(xn(e,t),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let t=Ut(e,"aria-describedby").filter(i=>i.indexOf(Fi)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let i=this._messageRegistry.get(t);Ta(e,"aria-describedby",i.messageElement.id),e.setAttribute(Bt,this._id),i.referenceCount++}_removeMessageReference(e,t){let i=this._messageRegistry.get(t);i.referenceCount--,Ma(e,"aria-describedby",i.messageElement.id),e.removeAttribute(Bt)}_isElementDescribedByMessage(e,t){let i=Ut(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let i=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xn(n,r){return typeof n=="string"?`${r||""}/${n}`:n}function Si(n,r){n.id||(n.id=`${Fi}-${r}-${Fn++}`)}var Qe=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(Qe||{}),jt,fe;function Gm(){if(fe==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return fe=!1,fe;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)fe=!0;else{let n=Element.prototype.scrollTo;n?fe=!/\{\s*\[native code\]\s*\}/.test(n.toString()):fe=!1}}return fe}function Wm(){if(typeof document!="object"||!document)return Qe.NORMAL;if(jt==null){let n=document.createElement("div"),r=n.style;n.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),jt=Qe.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,jt=n.scrollLeft===0?Qe.NEGATED:Qe.INVERTED),n.remove()}return jt}function Zm(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ne,Ri=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Xm(){if(Ne)return Ne;if(typeof document!="object"||!document)return Ne=new Set(Ri),Ne;let n=document.createElement("input");return Ne=new Set(Ri.filter(r=>(n.setAttribute("type",r),n.type===r))),Ne}var tf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Sa=new f("MATERIAL_ANIMATIONS"),Oi=null;function Rn(){return s(Sa,{optional:!0})?.animationsDisabled||s(ir,{optional:!0})==="NoopAnimations"?"di-disabled":(Oi??=s(Lt).matchMedia("(prefers-reduced-motion)").matches,Oi?"reduced-motion":"enabled")}function Le(){return Rn()!=="enabled"}function cf(n){return n==null?"":typeof n=="string"?n:`${n}px`}function uf(n){return n!=null&&`${n}`!="false"}var U=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(U||{}),On=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=U.HIDDEN;constructor(r,e,t,i=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Ni=Re({passive:!0,capture:!0}),Nn=class{_events=new Map;addHandler(r,e,t,i){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(i):o.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ni)})}removeHandler(r,e,t){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(t),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Ni)))}_delegateEventHandler=r=>{let e=$(r);e&&this._events.get(r.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(o=>o.handleEvent(r))})}},et={enterDuration:225,exitDuration:150},xa=800,Li=Re({passive:!0,capture:!0}),ki=["mousedown","touchstart"],Pi=["mouseup","mouseleave","touchend","touchcancel"],Fa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),tt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Nn;constructor(r,e,t,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=G(t)),o&&o.get(X).load(Fa)}fadeInRipple(r,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},et),t.animation);t.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=t.radius||Ra(r,e,i),c=r-i.left,d=e-i.top,l=o.enterDuration,p=document.createElement("div");p.classList.add("mat-ripple-element"),p.style.left=`${c-a}px`,p.style.top=`${d-a}px`,p.style.height=`${a*2}px`,p.style.width=`${a*2}px`,t.color!=null&&(p.style.backgroundColor=t.color),p.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(p);let w=window.getComputedStyle(p),O=w.transitionProperty,re=w.transitionDuration,q=O==="none"||re==="0s"||re==="0s, 0s"||i.width===0&&i.height===0,P=new On(this,p,t,q);p.style.transform="scale3d(1, 1, 1)",P.state=U.FADING_IN,t.persistent||(this._mostRecentTransientRipple=P);let g=null;return!q&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let b=()=>{g&&(g.fallbackTimer=null),clearTimeout(W),this._finishRippleTransition(P)},N=()=>this._destroyRipple(P),W=setTimeout(N,l+100);p.addEventListener("transitionend",b),p.addEventListener("transitioncancel",N),g={onTransitionEnd:b,onTransitionCancel:N,fallbackTimer:W}}),this._activeRipples.set(P,g),(q||!l)&&this._finishRippleTransition(P),P}fadeOutRipple(r){if(r.state===U.FADING_OUT||r.state===U.HIDDEN)return;let e=r.element,t=y(y({},et),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",r.state=U.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=G(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ki.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Pi.forEach(e=>{this._triggerElement.addEventListener(e,this,Li)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===U.FADING_IN?this._startFadeOutTransition(r):r.state===U.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=U.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=U.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=Ye(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+xa;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!Xe(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===U.VISIBLE||r.config.terminateOnPointerUp&&r.state===U.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(ki.forEach(e=>n._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Pi.forEach(e=>r.removeEventListener(e,this,Li)),this._pointerUpEventsRegistered=!1))}};function Ra(n,r,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+i*i)}var Ln=new f("mat-ripple-global-options"),Cf=(()=>{class n{_elementRef=s(x);_animationsDisabled=Le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(D),t=s(R),i=s(Ln,{optional:!0}),o=s(L);this._globalOptions=i||{},this._rippleRenderer=new tt(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,y(y({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&B("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Oa={capture:!0},Na=["focus","mousedown","mouseenter","touchstart"],kn="mat-ripple-loader-uninitialized",Pn="mat-ripple-loader-class-name",Bi="mat-ripple-loader-centered",zt="mat-ripple-loader-disabled",Ui=(()=>{class n{_document=s(h);_animationsDisabled=Le();_globalRippleOptions=s(Ln,{optional:!0});_platform=s(R);_ngZone=s(D);_injector=s(L);_eventCleanups;_hosts=new Map;constructor(){let e=s(we).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Na.map(t=>e.listen(this._document,t,this._onInteraction,Oa)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(kn,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Pn))&&e.setAttribute(Pn,t.className||""),t.centered&&e.setAttribute(Bi,""),t.disabled&&e.setAttribute(zt,"")}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(zt,""):e.removeAttribute(zt)}_onInteraction=e=>{let t=$(e);if(t instanceof HTMLElement){let i=t.closest(`[${kn}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Pn)),e.append(t);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??et.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??et.exitDuration,c={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(zt),rippleConfig:{centered:e.hasAttribute(Bi),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},d=new tt(c,this._ngZone,t,this._platform,this._injector),l=!c.rippleDisabled;l&&d.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:d,hasSetUpEvents:l}),e.removeAttribute(kn)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var La=["mat-icon-button",""],ka=["*"],Pa=new f("MAT_BUTTON_CONFIG");function zi(n){return n==null?void 0:Te(n)}var Bn=(()=>{class n{_elementRef=s(x);_ngZone=s(D);_animationsDisabled=Le();_config=s(Pa,{optional:!0});_focusMonitor=s(En);_cleanupClick;_renderer=s(Zt);_rippleLoader=s(Ui);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(X).load(ji);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=T({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,i){t&2&&(z("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Ie(i.color?"mat-"+i.color:""),B("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",H],disabled:[2,"disabled","disabled",H],ariaDisabled:[2,"aria-disabled","ariaDisabled",H],disabledInteractive:[2,"disabledInteractive","disabledInteractive",H],tabIndex:[2,"tabIndex","tabIndex",zi],_tabindex:[2,"tabindex","_tabindex",zi]}})}return n})(),Ba=(()=>{class n extends Bn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ut],attrs:La,ngContentSelectors:ka,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(K(),Ae(0,"span",0),k(1),Ae(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var $i=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({imports:[V]})}return n})();var Ua=["matButton",""],ja=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],za=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Hi=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Jf=(()=>{class n extends Bn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=$a(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,i=this._appearance?Hi.get(this._appearance):null,o=Hi.get(e);i&&t.remove(...i),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ut],attrs:Ua,ngContentSelectors:za,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(K(ja),Ae(0,"span",0),k(1),ft(2,"span",1),k(3,1),ht(),k(4,2),Ae(5,"span",2)(6,"span",3)),t&2&&B("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function $a(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var qf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({imports:[$i,V]})}return n})();function Vi(n){return Error(`Unable to find icon with the name "${n}"`)}function Ha(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Gi(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Wi(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var J=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},Zi=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,o){return this._addSvgIconConfig(e,t,new J(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,o){let a=this._sanitizer.sanitize(F.HTML,i);if(!a)throw Wi(i);let c=le(a);return this._addSvgIconConfig(e,t,new J("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new J(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let o=this._sanitizer.sanitize(F.HTML,t);if(!o)throw Wi(t);let a=le(o);return this._addSvgIconSetConfig(e,new J("",a,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(F.RESOURCE_URL,e);if(!t)throw Gi(e);let i=this._cachedIconsByUrl.get(t);return i?j($t(i)):this._loadSvgIconFromConfig(new J(e,null)).pipe(be(o=>this._cachedIconsByUrl.set(t,o)),I(o=>$t(o)))}getNamedSvgIcon(e,t=""){let i=Ki(t,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):jn(Vi(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?j($t(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(I(t=>$t(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return j(i);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Vn(c=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(F.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(l)),j(null)})));return Hn(o).pipe(I(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Vi(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let o=t[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(be(t=>e.svgText=t),I(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?j(null):this._fetchIcon(e).pipe(be(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let c=this._svgElementFromString(le("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(le("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:c}=i[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw Ha();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(F.RESOURCE_URL,t);if(!a)throw Gi(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let d=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(I(l=>le(l)),it(()=>this._inProgressUrlFetches.delete(a)),Kn());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Ki(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](t,e);if(o)return Va(o)?new J(o.url,null,o.options):new J(o,null)}}static \u0275fac=function(t){return new(t||n)(m(xt,8),m(Ze),m(h,8),m(oe))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function $t(n){return n.cloneNode(!0)}function Ki(n,r){return n+":"+r}function Va(n){return!!(n.url&&n.options)}var Ga=["*"],Wa=new f("MAT_ICON_DEFAULT_OPTIONS"),Ka=new f("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(h),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Yi=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Za=Yi.map(n=>`[${n}]`).join(", "),Ya=/^url\(['"]?#(.*?)['"]?\)$/,vh=(()=>{class n{_elementRef=s(x);_iconRegistry=s(Zi);_location=s(Ka);_errorHandler=s(oe);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=nt.EMPTY;constructor(){let e=s(new Cr("aria-hidden"),{optional:!0}),t=s(Wa,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Za),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Yi.forEach(a=>{let c=t[o],d=c.getAttribute(a),l=d?d.match(Ya):null;if(l){let p=i.get(c);p||(p=[],i.set(c,p)),p.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(rt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(z("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Ie(i.color?"mat-"+i.color:""),B("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",H],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ga,decls:1,vars:0,template:function(t,i){t&1&&(K(),k(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),yh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({imports:[V]})}return n})();var Xa=["determinateSpinner"];function Ja(n,r){if(n&1&&(Vt(),ce(0,"svg",11),Xt(1,"circle",12),Ce()),n&2){let e=vr();z("viewBox",e._viewBox()),se(),gt("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),z("r",e._circleRadius())}}var qa=new f("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Xi})}),Xi=100,Qa=10,Fh=(()=>{class n{_elementRef=s(x);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(qa),t=Rn(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Xi;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Qa)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&yr(Xa,5),t&2){let o;_r(o=Dr())&&(i._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(z("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Ie("mat-"+i.color),gt("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),B("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Te],diameter:[2,"diameter","diameter",Te],strokeWidth:[2,"strokeWidth","strokeWidth",Te]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(pr(0,Ja,2,8,"ng-template",null,0,wr),ce(2,"div",2,1),Vt(),ce(4,"svg",3),Xt(5,"circle",4),Ce()(),qn(),ce(6,"div",5)(7,"div",6)(8,"div",7),pt(9,8),Ce(),ce(10,"div",9),pt(11,8),Ce(),ce(12,"div",10),pt(13,8),Ce()()()),t&2){let o=Er(1);se(4),z("viewBox",i._viewBox()),se(),gt("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),z("r",i._circleRadius()),se(4),mt("ngTemplateOutlet",o),se(2),mt("ngTemplateOutlet",o),se(2),mt("ngTemplateOutlet",o)}},dependencies:[tn],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Rh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=_({imports:[V]})}return n})();export{Z as a,bt as b,Nr as c,Br as d,no as e,tn as f,ao as g,Ur as h,un as i,Eo as j,Ke as k,xt as l,Yo as m,Xo as n,pu as o,na as p,V as q,Fu as r,Ru as s,Ou as t,Nu as u,Lu as v,ku as w,Pu as x,Ye as y,Xe as z,sa as A,$ as B,R as C,_n as D,ci as E,G as F,En as G,X as H,Nt as I,wn as J,Lt as K,Cn as L,Bl as M,yi as N,wi as O,Ea as P,Ca as Q,Aa as R,Mi as S,In as T,Tn as U,Sn as V,Ta as W,Ma as X,Pm as Y,cf as Z,uf as _,Qe as $,Gm as aa,Wm as ba,Zm as ca,Xm as da,tf as ea,Le as fa,tt as ga,Ln as ha,Cf as ia,ji as ja,Ba as ka,$i as la,Jf as ma,qf as na,vh as oa,yh as pa,Fh as qa,Rh as ra};
