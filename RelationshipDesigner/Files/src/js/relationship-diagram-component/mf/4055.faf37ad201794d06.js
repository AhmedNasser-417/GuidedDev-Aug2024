(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4055],{74499:(p,l,r)=>{r.r(l),r.d(l,{FakeMatIconRegistry:()=>t,MatIconHarness:()=>c,MatIconTestingModule:()=>i});var o=r(8239),d=r(21936),s=r(94450),g=r(72856),_=r(21322);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class c extends d.ComponentHarness{static with(e={}){return new d.HarnessPredicate(c,e).addOption("type",e.type,function(){var n=(0,o.Z)(function*(a,m){return(yield a.getType())===m});return function(a,m){return n.apply(this,arguments)}}()).addOption("name",e.name,(n,a)=>d.HarnessPredicate.stringMatches(n.getName(),a)).addOption("namespace",e.namespace,(n,a)=>d.HarnessPredicate.stringMatches(n.getNamespace(),a))}getType(){var e=this;return(0,o.Z)(function*(){return(yield(yield e.host()).getAttribute("data-mat-icon-type"))==="svg"?0:1})()}getName(){var e=this;return(0,o.Z)(function*(){const n=yield e.host(),a=yield n.getAttribute("data-mat-icon-name");return a||((yield e.getType())===1?n.text():null)})()}getNamespace(){var e=this;return(0,o.Z)(function*(){return(yield e.host()).getAttribute("data-mat-icon-namespace")})()}isInline(){var e=this;return(0,o.Z)(function*(){return(yield e.host()).hasClass("mat-icon-inline")})()}}c.hostSelector=".mat-icon";/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class t{addSvgIcon(){return this}addSvgIconLiteral(){return this}addSvgIconInNamespace(){return this}addSvgIconLiteralInNamespace(){return this}addSvgIconSet(){return this}addSvgIconSetLiteral(){return this}addSvgIconSetInNamespace(){return this}addSvgIconSetLiteralInNamespace(){return this}registerFontClassAlias(){return this}classNameForFontAlias(e){return e}getDefaultFontSetClass(){return["material-icons"]}getSvgIconFromUrl(){return(0,_.of)(this._generateEmptySvg())}getNamedSvgIcon(){return(0,_.of)(this._generateEmptySvg())}setDefaultFontSetClass(){return this}addSvgIconResolver(){return this}ngOnDestroy(){}_generateEmptySvg(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.classList.add("fake-testing-svg"),e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),e}}t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&s.\u0275setClassMetadata(t,[{type:s.Injectable}],null,null)}();class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=s.\u0275\u0275defineInjector({providers:[{provide:g.MatIconRegistry,useClass:t}]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&s.\u0275setClassMetadata(i,[{type:s.NgModule,args:[{providers:[{provide:g.MatIconRegistry,useClass:t}]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
