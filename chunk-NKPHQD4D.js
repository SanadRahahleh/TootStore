import{a as Wt}from"./chunk-CCTMT7JY.js";import{a as ve,b as ye}from"./chunk-NQVZNGFD.js";import{a as Xt,b as Yt,c as Zt,d as Kt,e as Jt,f as ei,g as ti,h as ii,i as ni,j as ai,k as oi,l as ri,m as si,n as li,o as di,p as ci,q as mi,r as hi,s as Ee,t as pi,u as Ie,v as gi,w as ui}from"./chunk-CE4WQCMK.js";import{C as Bt,H as Ue,I as jt,J as Ut,K as X,L as Y,M as Me,O as Vt,P as qt,Q as Ht,S as Ae,U as Gt,X as Se,Y as Qt,Z as $t,a as pt,b as gt,c as ut,d as M,f as ft,g as _t,i as bt,j as vt,k as yt,l as wt,m as Ct,n as _e,o as Tt,p as Ot,q as Pt,t as be,u as Lt}from"./chunk-BJUDP6GK.js";import{A as ge,C as Mt,D as je,G as ue,H as At,O as St,P as Et,R as It,S as fe,V as O,d as ht,e as me,fa as W,h as he,ia as Ft,ja as Rt,ka as we,ma as Ce,na as De,oa as ke,p as Be,pa as xe,q as pe,qa as Nt,r as Dt,ra as zt,t as kt,x as xt}from"./chunk-7J3T4SXZ.js";import{$a as tt,$b as de,A as Xe,B as H,Ba as R,Db as p,Eb as o,Fb as s,G as L,Gb as u,Kb as B,Lb as j,Nb as ze,Ob as Q,Pb as f,R as te,Rb as $,Sb as se,Tb as le,Va as d,Vb as U,Wb as E,Xb as I,Y as Ye,Z as ie,_ as F,_a as et,a as y,aa as w,b as We,bb as it,bc as v,ca as l,cb as nt,cc as st,dc as c,ec as V,fc as k,gc as lt,h as x,ha as ne,hc as dt,ia as ae,ib as b,j as Re,ja as Ze,jb as N,kb as G,la as D,ma as Ke,mb as at,nb as z,ob as g,pa as S,qa as Je,qc as ct,ua as oe,uc as ce,x as ee,xb as C,xc as T,ya as Ne,yb as ot,yc as mt,za as re,zb as rt}from"./chunk-CJVY4CSM.js";var Ei=["mat-internal-form-field",""],Ii=["*"],fi=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&v("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ei,ngContentSelectors:Ii,decls:1,vars:0,template:function(t,n){t&1&&(se(),le(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ti=["switch"],Oi=["*"];function Pi(i,a){i&1&&(o(0,"span",11),Ze(),o(1,"svg",13),u(2,"path",14),s(),o(3,"svg",15),u(4,"path",16),s()())}var Li=new w("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Te=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},Ve=(()=>{class i{_elementRef=l(R);_focusMonitor=l(ue);_changeDetectorRef=l(ce);defaults=l(Li);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Te(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=W();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new S;toggleChange=new S;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(At).load(Rt);let e=l(new ct("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(O).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Te(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&U(Ti,5),t&2){let r;E(r=I())&&(n._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(Q("id",n.id),C("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),st(n.color?"mat-"+n.color:""),v("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",T],color:"color",disabled:[2,"disabled","disabled",T],disableRipple:[2,"disableRipple","disableRipple",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:mt(e)],checked:[2,"checked","checked",T],hideIcon:[2,"hideIcon","hideIcon",T],disabledInteractive:[2,"disabledInteractive","disabledInteractive",T]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[lt([{provide:pt,useExisting:Ye(()=>i),multi:!0},{provide:ut,useExisting:i,multi:!0}]),Ne],ngContentSelectors:Oi,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(se(),o(0,"div",1)(1,"button",2,0),f("click",function(){return n._handleClick()}),u(3,"div",3)(4,"span",4),o(5,"span",5)(6,"span",6)(7,"span",7),u(8,"span",8),s(),o(9,"span",9),u(10,"span",10),s(),ot(11,Pi,5,0,"span",11),s()()(),o(12,"label",12),f("click",function(h){return h.stopPropagation()}),le(13),s()()),t&2){let r=de(2);p("labelPosition",n.labelPosition),d(),v("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),p("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),C("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),d(9),p("matRippleTrigger",r)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),d(),rt(n.hideIcon?-1:11),d(),p("for",n.buttonId),C("id",n._labelId)}},dependencies:[Ft,fi],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),_i=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=F({imports:[Ve,pe]})}return i})();function Ri(i,a){}var A=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var He=(()=>{class i extends Ut{_elementRef=l(R);_focusTrapFactory=l(Et);_config;_interactivityChecker=l(St);_ngZone=l(Je);_focusMonitor=l(ue);_renderer=l(it);_changeDetectorRef=l(ce);_injector=l(D);_platform=l(Mt);_document=l(Ke);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(A,{optional:!0})||new A,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),h(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",n),h=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||et(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=ge(),r=this._elementRef.nativeElement;(!n||n===this._document.body||n===r||r.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=ge();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ge()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&U(X,7),t&2){let r;E(r=I())&&(n._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&C("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[z],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&g(0,Ri,0,0,"ng-template",0)},dependencies:[X],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),K=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!fe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},Ni=new w("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(D);return()=>Me(i)}}),zi=new w("DialogData"),Bi=new w("DefaultDialogConfig");function ji(i){let a=oe(i),e=new S;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Ge=(()=>{class i{_injector=l(D);_defaultOptions=l(Bi,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(qt);_idGenerator=l(O);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=l(Ni);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ee(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(te(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new A;t=y(y({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),h=Gt(this._injector,r),m=new K(h,t),_=this._attachContainer(h,m,t);if(m.containerInstance=_,!this.openDialogs.length){let P=this._overlayContainer.getContainerElement();_._focusTrapped?_._focusTrapped.pipe(L(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(P)}):this._hideNonDialogContentFromAssistiveTechnology(P)}return this._attachDialogContent(e,m,_,t),this.openDialogs.push(m),m.closed.subscribe(()=>this._removeOpenDialog(m,!0)),this.afterOpened.next(m),m}closeAll(){qe(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){qe(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),qe(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Vt({positionStrategy:e.positionStrategy||Ae().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let r=n.injector||n.viewContainerRef?.injector,h=[{provide:A,useValue:n},{provide:K,useValue:t},{provide:Ht,useValue:e}],m;n.container?typeof n.container=="function"?m=n.container:(m=n.container.type,h.push(...n.container.providers(n))):m=He;let _=new Ue(m,n.viewContainerRef,D.create({parent:r||this._injector,providers:h}));return e.attach(_).instance}_attachDialogContent(e,t,n,r){if(e instanceof tt){let h=this._createInjector(r,t,n,void 0),m={$implicit:r.data,dialogRef:t};r.templateContext&&(m=y(y({},m),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),n.attachTemplatePortal(new jt(e,null,m,h))}else{let h=this._createInjector(r,t,n,this._injector),m=n.attachComponentPortal(new Ue(e,r.viewContainerRef,h));t.componentRef=m,t.componentInstance=m.instance}}_createInjector(e,t,n,r){let h=e.injector||e.viewContainerRef?.injector,m=[{provide:zi,useValue:e.data},{provide:K,useValue:t}];return e.providers&&(typeof e.providers=="function"?m.push(...e.providers(t,e,n)):m.push(...e.providers)),e.direction&&(!h||!h.get(Be,null,{optional:!0}))&&m.push({provide:Be,useValue:ji(e.direction)}),D.create({parent:h||r,providers:m})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,h)=>{r?h.setAttribute("aria-hidden",r):h.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let r=t[n];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function qe(i,a){let e=i.length;for(;e--;)a(i[e])}var vi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=F({providers:[Ge],imports:[Se,Y,It,Y]})}return i})();function Ui(i,a){}var Pe=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Qe="mdc-dialog--open",yi="mdc-dialog--opening",wi="mdc-dialog--closing",Vi=150,qi=75,Hi=(()=>{class i extends He{_animationStateChanged=new S;_animationsEnabled=!W();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Di(this._config.enterAnimationDuration)??Vi:0;_exitAnimationDuration=this._animationsEnabled?Di(this._config.exitAnimationDuration)??qi:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ci,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(yi,Qe)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Qe),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Qe),this._animationsEnabled?(this._hostElement.style.setProperty(Ci,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(wi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(yi,wi)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=re(i)))(n||i)}})();static \u0275cmp=b({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Q("id",n._config.id),C("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),v("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[z],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1),g(2,Ui,0,0,"ng-template",2),s()())},dependencies:[X],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Ci="--mat-dialog-transition-duration";function Di(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?je(i.substring(0,i.length-2)):i.endsWith("s")?je(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Oe=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Oe||{}),q=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Re(1);_beforeClosed=new Re(1);_result;_closeFallbackTimeout;_state=Oe.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(H(n=>n.state==="opened"),L(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(H(n=>n.state==="closed"),L(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Xe(this.backdropClick(),this.keydownEvents().pipe(H(n=>n.keyCode===27&&!this.disableClose&&!fe(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Gi(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(H(t=>t.state==="closing"),L(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Oe.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Oe.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Gi(i,a,e){return i._closeInteractionType=a,i.close(e)}var $e=new w("MatMdcDialogData"),Qi=new w("mat-mdc-dialog-default-options"),$i=new w("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(D);return()=>Me(i)}}),Le=(()=>{class i{_defaultOptions=l(Qi,{optional:!0});_scrollStrategy=l($i);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(O);_injector=l(D);_dialog=l(Ge);_animationsDisabled=W();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=Pe;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ee(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(te(void 0)));constructor(){this._dialogRefConstructor=q,this._dialogContainerType=Hi,this._dialogDataToken=$e}open(e,t){let n;t=y(y({},this._defaultOptions||new Pe),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,We(y({},t),{positionStrategy:Ae(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:A,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(h,m,_)=>(n=new this._dialogRefConstructor(h,t,_),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:_},{provide:this._dialogDataToken,useValue:m.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let h=this.openDialogs.indexOf(n);h>-1&&(this.openDialogs.splice(h,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ie({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ki=(()=>{class i{_dialogRef=l(q,{optional:!0});_elementRef=l(R);_dialog=l(Le);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Wi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i})}return i})(),xi=(()=>{class i extends ki{id=l(O).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=re(i)))(n||i)}})();static \u0275dir=G({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&Q("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[z]})}return i})(),Mi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=G({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[at([Bt])]})}return i})(),Ai=(()=>{class i extends ki{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=re(i)))(n||i)}})();static \u0275dir=G({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&v("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[z]})}return i})();function Wi(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Fe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=F({providers:[Le],imports:[vi,Se,Y,pe]})}return i})();function nn(i,a){i&1&&(o(0,"mat-error"),c(1," Full Name is required. "),s())}function an(i,a){i&1&&(o(0,"mat-error"),c(1," Email Address is required. "),s())}function on(i,a){i&1&&(o(0,"mat-error"),c(1," Please enter a valid email address. "),s())}function rn(i,a){if(i&1&&(o(0,"mat-option",14),c(1),s()),i&2){let e=a.$implicit;p("value",e),d(),k(" ",e," ")}}function sn(i,a){i&1&&(o(0,"mat-error"),c(1," Role selection is required. "),s())}function ln(i,a){i&1&&(o(0,"mat-error"),c(1," Password is required. "),s())}function dn(i,a){i&1&&(o(0,"mat-error"),c(1," Password must be at least 6 characters. "),s())}var J=class i{constructor(a){this.data=a;this.isEditMode=!!a,this.userForm=this.fb.group({fullName:[a?.fullName||"",[M.required]],email:[a?.email||"",[M.required,M.email]],role:[a?.role||"Employee",[M.required]],password:["",this.isEditMode?[M.minLength(6)]:[M.required,M.minLength(6)]],isActive:[a!==null?a.isActive:!0]})}fb=l(wt);dialogRef=l(q);userForm;isEditMode;hidePassword=!0;roles=["Admin","Employee"];onSubmit(){if(this.userForm.invalid)return;let a=y({},this.userForm.value);this.isEditMode&&!a.password&&delete a.password,this.dialogRef.close(a)}onCancel(){this.dialogRef.close(null)}static \u0275fac=function(e){return new(e||i)(nt($e))};static \u0275cmp=b({type:i,selectors:[["app-user-dialog"]],decls:35,vars:16,consts:[["mat-dialog-title","",1,"dialog-title"],[3,"ngSubmit","formGroup"],[1,"dialog-content"],["appearance","outline",1,"form-field"],["matInput","","type","text","formControlName","fullName","placeholder","John Doe"],[4,"ngIf"],["matInput","","type","email","formControlName","email","placeholder","john.doe@company.com"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",3,"type"],["mat-icon-button","","matSuffix","","type","button",2,"color","var(--text-light)",3,"click"],["align","end",1,"dialog-actions"],["mat-button","","type","button",3,"click"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(e,t){if(e&1&&(o(0,"h2",0),c(1),s(),o(2,"form",1),f("ngSubmit",function(){return t.onSubmit()}),o(3,"mat-dialog-content",2)(4,"mat-form-field",3)(5,"mat-label"),c(6,"Full Name"),s(),u(7,"input",4),g(8,nn,2,0,"mat-error",5),s(),o(9,"mat-form-field",3)(10,"mat-label"),c(11,"Email Address"),s(),u(12,"input",6),g(13,an,2,0,"mat-error",5)(14,on,2,0,"mat-error",5),s(),o(15,"mat-form-field",3)(16,"mat-label"),c(17,"System Role"),s(),o(18,"mat-select",7),g(19,rn,2,2,"mat-option",8),s(),g(20,sn,2,0,"mat-error",5),s(),o(21,"mat-form-field",3)(22,"mat-label"),c(23),s(),u(24,"input",9),o(25,"button",10),f("click",function(){return t.hidePassword=!t.hidePassword}),o(26,"mat-icon"),c(27),s()(),g(28,ln,2,0,"mat-error",5)(29,dn,2,0,"mat-error",5),s()(),o(30,"mat-dialog-actions",11)(31,"button",12),f("click",function(){return t.onCancel()}),c(32,"Cancel"),s(),o(33,"button",13),c(34),s()()()),e&2){let n,r,h,m,_,P;d(),k(" ",t.isEditMode?"Modify Employee Details":"Register New Employee",`
`),d(),p("formGroup",t.userForm),d(6),p("ngIf",(n=t.userForm.get("fullName"))==null?null:n.hasError("required")),d(5),p("ngIf",(r=t.userForm.get("email"))==null?null:r.hasError("required")),d(),p("ngIf",(h=t.userForm.get("email"))==null?null:h.hasError("email")),d(5),p("ngForOf",t.roles),d(),p("ngIf",(m=t.userForm.get("role"))==null?null:m.hasError("required")),d(3),V(t.isEditMode?"Password (Leave blank to keep current)":"Password"),d(),p("type",t.hidePassword?"password":"text"),d(),C("aria-label","Hide password")("aria-checked",t.hidePassword),d(2),V(t.hidePassword?"visibility_off":"visibility"),d(),p("ngIf",(_=t.userForm.get("password"))==null?null:_.hasError("required")),d(),p("ngIf",(P=t.userForm.get("password"))==null?null:P.hasError("minlength")),d(4),p("disabled",t.userForm.invalid),d(),k(" ",t.isEditMode?"Save Changes":"Create Account"," ")}},dependencies:[he,ht,me,Ct,bt,gt,ft,_t,yt,vt,Fe,xi,Ai,Mi,Lt,be,_e,Tt,Pt,ye,ve,ci,di,li,De,Ce,we,xe,ke],styles:[".dialog-title[_ngcontent-%COMP%]{font-family:Outfit,sans-serif!important;font-size:1.25rem!important;font-weight:600!important;color:var(--text-main);padding:24px 24px 16px!important;letter-spacing:-.01em}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 24px 8px!important;max-height:65vh}.form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}.dialog-actions[_ngcontent-%COMP%]{padding:16px 24px 24px!important;gap:8px}.dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:38px;border-radius:var(--radius-sm);font-family:Outfit,sans-serif!important}"]})};var cn=()=>[5,10,25,100];function mn(i,a){i&1&&(o(0,"div",29),u(1,"mat-spinner",30),o(2,"p"),c(3,"Refreshing employee records..."),s()())}function hn(i,a){i&1&&(o(0,"th",31),c(1,"Name"),s())}function pn(i,a){if(i&1&&(o(0,"td",32)(1,"div",33)(2,"div",34),c(3),s(),o(4,"span",35),c(5),s()()()),i&2){let e=a.$implicit;d(3),k(" ",e.fullName.charAt(0).toUpperCase()," "),d(2),V(e.fullName)}}function gn(i,a){i&1&&(o(0,"th",31),c(1,"Email"),s())}function un(i,a){if(i&1&&(o(0,"td",36),c(1),s()),i&2){let e=a.$implicit;d(),V(e.email)}}function fn(i,a){i&1&&(o(0,"th",31),c(1,"Role"),s())}function _n(i,a){if(i&1&&(o(0,"td",32)(1,"span",37),c(2),s()()),i&2){let e=a.$implicit;d(),v("badge-success",e.role==="Admin")("badge-info",e.role==="Employee"),d(),k(" ",e.role," ")}}function bn(i,a){i&1&&(o(0,"th",31),c(1,"Status"),s())}function vn(i,a){if(i&1){let e=ze();o(0,"td",32)(1,"div",38)(2,"mat-slide-toggle",39),f("change",function(){let n=ne(e).$implicit,r=$();return ae(r.toggleStatus(n))}),s(),o(3,"span",40),c(4),s()()()}if(i&2){let e=a.$implicit;d(2),p("checked",e.isActive)("disabled",e.role==="Admin"),d(),v("active-label",e.isActive),d(),k(" ",e.isActive?"Active":"Disabled"," ")}}function yn(i,a){i&1&&(o(0,"th",41),c(1,"Actions"),s())}function wn(i,a){if(i&1){let e=ze();o(0,"td",42)(1,"button",43),f("click",function(){let n=ne(e).$implicit,r=$();return ae(r.openEditDialog(n))}),o(2,"mat-icon"),c(3,"edit"),s()(),o(4,"button",44),f("click",function(){let n=ne(e).$implicit,r=$();return ae(r.deleteEmployee(n))}),o(5,"mat-icon"),c(6,"block"),s()()()}if(i&2){let e=a.$implicit;d(4),p("disabled",e.role==="Admin")}}function Cn(i,a){i&1&&u(0,"tr",45)}function Dn(i,a){i&1&&u(0,"tr",46)}function kn(i,a){if(i&1&&(o(0,"tr",47)(1,"td",48)(2,"mat-icon",49),c(3,"search_off"),s(),o(4,"p"),c(5),s()()()),i&2){$();let e=de(18);d(5),k('No employees found matching the filter "',e.value,'"')}}var Si=class i{userService=l(Wt);dialog=l(Le);snackBar=l(Qt);displayedColumns=["fullName","email","role","isActive","actions"];dataSource=new si([]);isLoading=oe(!0);paginator;sort;ngOnInit(){this.loadEmployees()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}loadEmployees(){this.isLoading.set(!0),this.userService.getUsers().subscribe({next:a=>{this.dataSource.data=a,this.isLoading.set(!1)},error:()=>{this.isLoading.set(!1),this.showToast("Failed to load employee records.","snackbar-error")}})}applyFilter(a){let e=a.target.value;this.dataSource.filter=e.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}toggleStatus(a){let e=!a.isActive;this.userService.updateUser(a.id,{isActive:e}).subscribe({next:t=>{a.isActive=t.isActive,this.showToast(`Employee ${a.fullName} has been ${e?"enabled":"disabled"}.`,"snackbar-success")},error:()=>{this.showToast("Failed to update employee status.","snackbar-error"),this.loadEmployees()}})}openAddDialog(){this.dialog.open(J,{width:"450px",data:null}).afterClosed().subscribe(e=>{e&&(this.isLoading.set(!0),this.userService.createUser(e).subscribe({next:()=>{this.loadEmployees(),this.showToast("Employee account created successfully!","snackbar-success")},error:t=>{this.isLoading.set(!1);let n=t.error?.message||"Failed to create employee.";this.showToast(n,"snackbar-error")}}))})}openEditDialog(a){this.dialog.open(J,{width:"450px",data:a}).afterClosed().subscribe(t=>{t&&(this.isLoading.set(!0),this.userService.updateUser(a.id,t).subscribe({next:()=>{this.loadEmployees(),this.showToast("Employee account updated successfully!","snackbar-success")},error:n=>{this.isLoading.set(!1);let r=n.error?.message||"Failed to update employee.";this.showToast(r,"snackbar-error")}}))})}deleteEmployee(a){confirm(`Are you sure you want to disable/delete the employee ${a.fullName}?`)&&(this.isLoading.set(!0),this.userService.deleteUser(a.id).subscribe({next:()=>{this.loadEmployees(),this.showToast("Employee disabled successfully.","snackbar-success")},error:()=>{this.isLoading.set(!1),this.showToast("Failed to disable employee.","snackbar-error")}}))}showToast(a,e){this.snackBar.open(a,"Dismiss",{duration:3e3,horizontalPosition:"end",verticalPosition:"top",panelClass:[e]})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-user-list"]],viewQuery:function(e,t){if(e&1&&U(Ee,5)(Ie,5),e&2){let n;E(n=I())&&(t.paginator=n.first),E(n=I())&&(t.sort=n.first)}},decls:45,vars:8,consts:[["input",""],[1,"user-list-wrapper"],[1,"header-section","animate-fade-in"],[1,"welcome-title"],[1,"welcome-subtitle"],["mat-flat-button","","color","primary",1,"add-btn",3,"click"],[1,"filter-card","animate-fade-in"],["appearance","outline",1,"search-field"],["matInput","","placeholder","Search by name or email...",3,"keyup"],["matPrefix",""],[1,"table-card","animate-fade-in"],["class","table-loading",4,"ngIf"],[1,"table-content-area"],[1,"table-responsive"],["mat-table","","matSort","",1,"full-width-table",3,"dataSource"],["matColumnDef","fullName"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["mat-cell","","class","email-cell",4,"matCellDef"],["matColumnDef","role"],["matColumnDef","isActive"],["matColumnDef","actions"],["mat-header-cell","","class","actions-header",4,"matHeaderCellDef"],["mat-cell","","class","actions-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","table-row",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",1,"paginator",3,"pageSizeOptions"],[1,"table-loading"],["diameter","40"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"name-cell"],[1,"avatar-sm"],[1,"user-fullname"],["mat-cell","",1,"email-cell"],[1,"badge"],[1,"status-cell"],["matTooltip","Toggle Active Status","color","primary",3,"change","checked","disabled"],[1,"status-label"],["mat-header-cell","",1,"actions-header"],["mat-cell","",1,"actions-cell"],["mat-icon-button","","color","primary","matTooltip","Edit Account",3,"click"],["mat-icon-button","","color","warn","matTooltip","Disable Account",3,"click","disabled"],["mat-header-row",""],["mat-row","",1,"table-row"],[1,"mat-row"],["colspan","5",1,"mat-cell","empty-table-cell"],[1,"no-data-icon"]],template:function(e,t){e&1&&(o(0,"div",1)(1,"div",2)(2,"div")(3,"h1",3),c(4,"Employee Directory"),s(),o(5,"p",4),c(6,"Create, modify, and manage user accounts and system permissions."),s()(),o(7,"button",5),f("click",function(){return t.openAddDialog()}),o(8,"mat-icon"),c(9,"person_add"),s(),o(10,"span"),c(11,"Add Employee"),s()()(),o(12,"mat-card",6)(13,"mat-card-content")(14,"mat-form-field",7)(15,"mat-label"),c(16,"Search employees..."),s(),o(17,"input",8,0),f("keyup",function(r){return t.applyFilter(r)}),s(),o(19,"mat-icon",9),c(20,"search"),s()()()(),o(21,"mat-card",10),g(22,mn,4,0,"div",11),o(23,"mat-card-content",12)(24,"div",13)(25,"table",14),B(26,15),g(27,hn,2,0,"th",16)(28,pn,6,2,"td",17),j(),B(29,18),g(30,gn,2,0,"th",16)(31,un,2,1,"td",19),j(),B(32,20),g(33,fn,2,0,"th",16)(34,_n,3,5,"td",17),j(),B(35,21),g(36,bn,2,0,"th",16)(37,vn,5,5,"td",17),j(),B(38,22),g(39,yn,2,0,"th",23)(40,wn,7,1,"td",24),j(),g(41,Cn,1,0,"tr",25)(42,Dn,1,0,"tr",26)(43,kn,6,1,"tr",27),s()(),u(44,"mat-paginator",28),s()()()),e&2&&(d(22),p("ngIf",t.isLoading()),d(),v("hidden",t.isLoading()),d(2),p("dataSource",t.dataSource),d(16),p("matHeaderRowDef",t.displayedColumns),d(),p("matRowDefColumns",t.displayedColumns),d(2),p("pageSizeOptions",dt(7,cn)))},dependencies:[he,me,ri,Xt,Zt,ti,Kt,Yt,ii,Jt,ei,ni,ai,oi,pi,Ee,ui,Ie,gi,ye,ve,be,_e,Ot,De,Ce,we,xe,ke,_i,Ve,Fe,zt,Nt,$t,hi,mi,xt,Dt,kt],styles:[".user-list-wrapper[_ngcontent-%COMP%]{position:relative;min-height:calc(100vh - 128px)}.header-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;gap:16px}.welcome-title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;color:var(--text-main);letter-spacing:-.02em;margin-bottom:4px}.welcome-subtitle[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.95rem}.add-btn[_ngcontent-%COMP%]{border-radius:var(--radius-sm)!important;height:40px}.filter-card[_ngcontent-%COMP%]{margin-bottom:24px;border-radius:var(--radius-md)!important;border:1px solid var(--border)!important;box-shadow:var(--shadow-sm)!important}.search-field[_ngcontent-%COMP%]{width:100%;max-width:400px;margin-bottom:0!important}  .search-field .mat-mdc-form-field-subscript-wrapper{display:none!important}.table-card[_ngcontent-%COMP%]{border-radius:var(--radius-md)!important;border:1px solid var(--border)!important;box-shadow:var(--shadow-sm)!important;position:relative;overflow:hidden}.table-loading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 24px;color:var(--text-muted);gap:16px}.table-content-area[_ngcontent-%COMP%]{padding:0!important}.table-content-area.hidden[_ngcontent-%COMP%]{display:none}.table-responsive[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.full-width-table[_ngcontent-%COMP%]{width:100%;border:none!important;box-shadow:none!important;border-radius:0!important}.name-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.avatar-sm[_ngcontent-%COMP%]{width:32px;height:32px;background-color:var(--primary-light);color:var(--primary);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:600}.user-fullname[_ngcontent-%COMP%]{font-weight:500;color:var(--text-main)}.email-cell[_ngcontent-%COMP%]{color:var(--text-muted)!important}.status-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.status-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500;color:var(--text-muted)}.status-label.active-label[_ngcontent-%COMP%]{color:var(--success);font-weight:600}.actions-header[_ngcontent-%COMP%]{text-align:right!important;padding-right:24px!important}.actions-cell[_ngcontent-%COMP%]{text-align:right!important;padding-right:16px!important;white-space:nowrap}.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:4px}.paginator[_ngcontent-%COMP%]{background-color:transparent!important;border-top:1px solid var(--border)}.empty-table-cell[_ngcontent-%COMP%]{text-align:center!important;padding:48px 24px!important;color:var(--text-light)}.no-data-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;margin-bottom:8px}"]})};export{Si as UserListComponent};
