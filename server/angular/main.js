(self["webpackChunkangular_wefunder_hw"] = self["webpackChunkangular_wefunder_hw"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _companies_individual_profile_individual_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companies/individual-profile/individual-profile.component */ 2223);
/* harmony import */ var _companies_view_all_view_all_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companies/view-all/view-all.component */ 2149);
/* harmony import */ var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page/landing-page.component */ 6849);
/* harmony import */ var _onboarding_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding/main/main.component */ 2505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const routes = [
    { path: '', component: _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__.LandingPageComponent },
    {
        path: 'raise',
        children: [
            { path: '', component: _onboarding_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent },
            { path: 'all', component: _companies_view_all_view_all_component__WEBPACK_IMPORTED_MODULE_1__.ViewAllComponent },
            { path: ':companyId', component: _companies_individual_profile_individual_profile_component__WEBPACK_IMPORTED_MODULE_0__.IndividualProfileComponent },
        ],
    },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav/nav.component */ 4893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'angular-wefunder-hw';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav/nav.component */ 4893);
/* harmony import */ var _onboarding_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding/main/main.component */ 2505);
/* harmony import */ var _onboarding_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding/basic-info/basic-info.component */ 5441);
/* harmony import */ var _onboarding_upload_deck_upload_deck_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding/upload-deck/upload-deck.component */ 6417);
/* harmony import */ var _onboarding_preview_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding/preview/preview.component */ 5904);
/* harmony import */ var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page/landing-page.component */ 6849);
/* harmony import */ var _onboarding_nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onboarding/nav-btns/nav-btns.component */ 8383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-file-drop */ 721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _companies_individual_profile_individual_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companies/individual-profile/individual-profile.component */ 2223);
/* harmony import */ var _companies_view_all_view_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./companies/view-all/view-all.component */ 2149);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            ngx_file_drop__WEBPACK_IMPORTED_MODULE_14__.NgxFileDropModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _onboarding_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _onboarding_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_4__.BasicInfoComponent,
        _onboarding_upload_deck_upload_deck_component__WEBPACK_IMPORTED_MODULE_5__.UploadDeckComponent,
        _onboarding_preview_preview_component__WEBPACK_IMPORTED_MODULE_6__.PreviewComponent,
        _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__.LandingPageComponent,
        _onboarding_nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_8__.NavBtnsComponent,
        _companies_individual_profile_individual_profile_component__WEBPACK_IMPORTED_MODULE_9__.IndividualProfileComponent,
        _companies_view_all_view_all_component__WEBPACK_IMPORTED_MODULE_10__.ViewAllComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        ngx_file_drop__WEBPACK_IMPORTED_MODULE_14__.NgxFileDropModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule] }); })();


/***/ }),

/***/ 4274:
/*!************************************************!*\
  !*** ./src/app/companies/companies.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniesService": () => (/* binding */ CompaniesService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class CompaniesService {
    constructor(http) {
        this.http = http;
        // where to send API reqs
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/api/';
    }
    // get single company by id
    getCompany(companyId) {
        return this.http.get(this.serverUrl + 'company/' + companyId);
    }
    // get all published companies
    getAllCompanies() {
        return this.http.get(this.serverUrl + 'company/getAll');
    }
}
CompaniesService.ɵfac = function CompaniesService_Factory(t) { return new (t || CompaniesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CompaniesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CompaniesService, factory: CompaniesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2223:
/*!******************************************************************************!*\
  !*** ./src/app/companies/individual-profile/individual-profile.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndividualProfileComponent": () => (/* binding */ IndividualProfileComponent)
/* harmony export */ });
/* harmony import */ var _Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../companies.service */ 4274);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 2664);






const _c0 = ["ngcarousel"];

function IndividualProfileComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndividualProfileComponent_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r5.goToPrev();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function IndividualProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndividualProfileComponent_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r7.goToNext();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function IndividualProfileComponent_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const img_r9 = ctx_r12.$implicit;
    const i_r10 = ctx_r12.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", img_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "Slide ", i_r10, "");
  }
}

function IndividualProfileComponent_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IndividualProfileComponent_14_ng_template_0_Template, 2, 2, "ng-template", 19);
  }

  if (rf & 2) {
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", i_r10.toString());
  }
}

const _c1 = function (a0) {
  return {
    selected: a0
  };
};

function IndividualProfileComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndividualProfileComponent_div_22_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const i_r14 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r15.navigateToSlide(i_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const img_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, i_r14 === ctx_r4.currentSlide - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", img_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "Slide ", i_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "thumbnail", i_r14, "");
  }
}

class IndividualProfileComponent {
  constructor(companiesService, route) {
    this.companiesService = companiesService;
    this.route = route;
    this.currentSlide = 1;
    this.companyId = '';
    this.company = {};
    this.imageUrlArray = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // if theres no company passed from parent get company from url
      if (!_this.companyId) {
        _this.companyId = _this.route.snapshot.paramMap.get('companyId');
      }

      _this.company = yield _this.getCompany(_this.companyId); // create image url array for slideshow

      _this.imageUrlArray = _this.mapImageUrls(_this.company.deck);
    })();
  }
  /**
   * gets called on slide change
   * @param ngbSlideEvent - event with slide change details
   */


  slideActivate(ngbSlideEvent) {
    this.currentSlide = Number(ngbSlideEvent.current) + 1;
    this.scrollToThumbnail(ngbSlideEvent.current);
  }
  /**
   * returns company by id
   */


  getCompany(companyId) {
    var _this2 = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this2.companiesService.getCompany(companyId).toPromise();
    })();
  }
  /**
   * map deck into more useable format
   */


  mapImageUrls(deck) {
    return deck.map(page => ({
      url: page.imgUrl
    }));
  }
  /**
   * go to next slide in slideshow
   */


  goToNext() {
    this.ngCarousel.next();
  }
  /**
   * go to previous slide in slideshow
   */


  goToPrev() {
    this.ngCarousel.prev();
  }
  /**
   * go to slide num
   */


  navigateToSlide(num) {
    const item = num.toString();
    this.ngCarousel.select(item);
  }
  /**
   * scroll thumnail container horizontally
   * @param elementId - id of html element
   */


  scrollToThumbnail(elementId) {
    elementId = 'thumbnail' + elementId;
    const el = document.getElementById(elementId);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  /**
   * big scroll thumbnail bar
   */


  scrollToSide(direction) {
    const container = document.getElementById('scroller');
    if (!container) return;
    let widthOfSlider = container.offsetWidth;
    widthOfSlider = direction === 'right' ? widthOfSlider : -widthOfSlider;
    container.scrollBy(widthOfSlider * 0.85, 0);
  }

}

IndividualProfileComponent.ɵfac = function IndividualProfileComponent_Factory(t) {
  return new (t || IndividualProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_companies_service__WEBPACK_IMPORTED_MODULE_1__.CompaniesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};

IndividualProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: IndividualProfileComponent,
  selectors: [["app-individual-profile"]],
  viewQuery: function IndividualProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ngCarousel = _t.first);
    }
  },
  inputs: {
    companyId: "companyId"
  },
  decls: 25,
  vars: 12,
  consts: [[1, "holder"], [1, "sh-container"], [1, "slide-count"], [1, "slideshow"], [1, "arrows"], ["id", "left", "class", "left", 3, "click", 4, "ngIf"], ["id", "right", 3, "click", 4, "ngIf"], [3, "interval", "animation", "showNavigationArrows", "wrap", "slide"], ["ngcarousel", ""], [4, "ngFor", "ngForOf"], [3, "click"], [1, "thumbnails"], [1, "slide-buttons"], [1, "left", 3, "click"], ["id", "scroller", 1, "scroller"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "desc"], ["id", "left", 1, "left", 3, "click"], ["id", "right", 3, "click"], ["ngbSlide", "", 3, "id"], [1, "testy"], [3, "src", "alt"], [3, "ngClass", "click"], [3, "src", "alt", "id"]],
  template: function IndividualProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, IndividualProfileComponent_div_9_Template, 1, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, IndividualProfileComponent_div_11_Template, 1, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ngb-carousel", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("slide", function IndividualProfileComponent_Template_ngb_carousel_slide_12_listener($event) {
        return ctx.slideActivate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, IndividualProfileComponent_14_Template, 1, 1, undefined, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndividualProfileComponent_Template_button_click_15_listener() {
        return ctx.goToPrev();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndividualProfileComponent_Template_button_click_19_listener() {
        return ctx.scrollToSide("left");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndividualProfileComponent_Template_button_click_20_listener() {
        return ctx.scrollToSide("right");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, IndividualProfileComponent_div_22_Template, 2, 6, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.company.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Slide ", ctx.currentSlide, " of ", ctx.imageUrlArray.length, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSlide !== 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentSlide !== ctx.imageUrlArray.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("interval", 0)("animation", false)("showNavigationArrows", false)("wrap", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.imageUrlArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.imageUrlArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.company.description);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarousel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbSlide, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: [".holder[_ngcontent-%COMP%] {\n  padding: 50px 15vw 32px 10vw;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.sh-container[_ngcontent-%COMP%] {\n  width: var(--sh-width);\n}\n\n.slideshow[_ngcontent-%COMP%] {\n  position: relative;\n  height: var(--sh-height);\n}\n\n.arrows[_ngcontent-%COMP%] {\n  width: 120%;\n  position: absolute;\n  top: 50%;\n  left: -10%;\n  right: 0;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.arrows[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 36px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  background-image: url('right_chevron.svg');\n}\n\n.left[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n.testy[_ngcontent-%COMP%] {\n  width: var(--sh-width);\n  height: var(--sh-height);\n  background-color: var(--border-color);\n  display: flex;\n  justify-content: center;\n}\n\n.testy[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.thumbnails[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin-top: 16px;\n  background-color: var(--border-color);\n  height: 70px;\n  box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.04);\n  \n}\n\n.thumbnails[_ngcontent-%COMP%]:hover   .slide-buttons[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.slide-buttons[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  visibility: hidden;\n}\n\n.slide-buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 28px;\n  box-sizing: border-box;\n  padding: 0;\n  background-color: var(--dark-text-color);\n  border: none;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url('white_chevron_right.svg');\n  border-radius: 0 8px 8px 0;\n  position: absolute;\n  right: 0;\n}\n\n.slide-buttons[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 18px;\n}\n\n.slide-count[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  text-align: right;\n}\n\n.scroller[_ngcontent-%COMP%] {\n  \n  z-index: 2;\n  overflow: auto;\n  white-space: nowrap;\n  width: var(--sh-width);\n  padding: 5px;\n  scroll-behavior: smooth;\n}\n\n.scroller[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 60px;\n  background-color: var(--secondary-color);\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.scroller[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.05);\n}\n\n.selected[_ngcontent-%COMP%] {\n  border: 2px solid var(--secondary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGl2aWR1YWwtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsMENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGtEQUFrRDtFQUNsRCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVix3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0RBQStEO0VBQy9ELDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDIiwiZmlsZSI6ImluZGl2aWR1YWwtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbGRlciB7XG4gIHBhZGRpbmc6IDUwcHggMTV2dyAzMnB4IDEwdnc7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IHZhcigtLXNoLXdpZHRoKTtcbn1cblxuLnNsaWRlc2hvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiB2YXIoLS1zaC1oZWlnaHQpO1xufVxuXG4uYXJyb3dzIHtcbiAgd2lkdGg6IDEyMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IC0xMCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFycm93cyA+IGRpdiA+IGRpdiB7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDM2cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvcmlnaHRfY2hldnJvbi5zdmcpO1xufVxuXG4ubGVmdCB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi50ZXN0eSB7XG4gIHdpZHRoOiB2YXIoLS1zaC13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tc2gtaGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXN0eSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRodW1ibmFpbHMge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogNzBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbn1cblxuLnRodW1ibmFpbHM6aG92ZXIgLnNsaWRlLWJ1dHRvbnMge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc2xpZGUtYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnNsaWRlLWJ1dHRvbnMgPiBidXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy8vd2hpdGVfY2hldnJvbl9yaWdodC5zdmcpO1xuICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLnNsaWRlLWJ1dHRvbnMgLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4uZGVzYyB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNsaWRlLWNvdW50IHtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2Nyb2xsZXIge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IHZhcigtLXNoLXdpZHRoKTtcbiAgcGFkZGluZzogNXB4O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLnNjcm9sbGVyID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY3JvbGxlciA+IGRpdiA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 2149:
/*!**********************************************************!*\
  !*** ./src/app/companies/view-all/view-all.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAllComponent": () => (/* binding */ ViewAllComponent)
/* harmony export */ });
/* harmony import */ var _Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _companies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../companies.service */ 4274);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);






function ViewAllComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "There are currently no companies raising money");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Raise money");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function ViewAllComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewAllComponent_div_3_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const company_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r3.goToSinglePage(company_r2._id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const company_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", company_r2.deck[0].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "Slide 1 of ", company_r2.name, " deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r2.name);
  }
}

class ViewAllComponent {
  constructor(companiesService, router) {
    this.companiesService = companiesService;
    this.router = router;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.companies = yield _this.companiesService.getAllCompanies().toPromise();
    })();
  }
  /**
   * navigate to page of a company on click
   * @param companyId
   */


  goToSinglePage(companyId) {
    this.router.navigate(['raise', companyId]);
  }

}

ViewAllComponent.ɵfac = function ViewAllComponent_Factory(t) {
  return new (t || ViewAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_companies_service__WEBPACK_IMPORTED_MODULE_1__.CompaniesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

ViewAllComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ViewAllComponent,
  selectors: [["app-view-all"]],
  decls: 4,
  vars: 2,
  consts: [[1, "container"], ["class", "no-comps", 4, "ngIf"], [1, "grid-cont"], [3, "click", 4, "ngFor", "ngForOf"], [1, "no-comps"], ["routerLink", "/raise"], [3, "click"], [1, "img-holder"], [3, "src", "alt"], [1, "title-holder"]],
  template: function ViewAllComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ViewAllComponent_div_1_Template, 5, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ViewAllComponent_div_3_Template, 6, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companies.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.companies);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
  styles: [".no-comps[_ngcontent-%COMP%] {\n  padding: 120px 0;\n  text-align: center;\n}\n\n.grid-cont[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 50px 50px;\n  grid-template-columns: auto auto auto;\n  padding: 40px 0;\n}\n\n.grid-cont[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.grid-cont[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.12);\n}\n\n.img-holder[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 240px;\n  display: flex;\n  justify-content: center;\n}\n\n.grid-cont[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.title-holder[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0 0 8px 8px;\n  box-sizing: border-box;\n  padding: 16px;\n}\n\n.title-holder[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InZpZXctYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tY29tcHMge1xuICBwYWRkaW5nOiAxMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkLWNvbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogNTBweCA1MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG5cbi5ncmlkLWNvbnQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmdyaWQtY29udCA+IGRpdjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uaW1nLWhvbGRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JpZC1jb250IGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLWhvbGRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnRpdGxlLWhvbGRlciA+IGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"]
});

/***/ }),

/***/ 6849:
/*!*********************************************************************!*\
  !*** ./src/app/landing-page/landing-page/landing-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "inner-landing-page"], ["id", "time"], [1, "ctas"], ["routerLink", "/raise", 1, "raise"], ["routerLink", "/raise/all", 1, "navigate-out"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start raising money in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "15 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " We take the pain out of raising money. Raise $50K to $5M from superfans & angel investors who believe in you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RAISE MONEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Or view companies currently raising");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".inner-landing-page[_ngcontent-%COMP%] {\n  width: 1100px;\n  margin: 0 auto;\n  max-width: 90%;\n}\n\n.inner-landing-page[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin: 124px 0 12px 0;\n}\n\n.inner-landing-page[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n#time[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\n.ctas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 72px;\n}\n\n.raise[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  padding: 20px;\n  padding-right: 100px;\n  border: none;\n  color: white;\n  box-shadow: 0px 4px 20px rgba(219, 90, 72, 0.2);\n  border-radius: 6px;\n  font-size: 18px;\n  background-image: url('white-arrow.svg');\n  background-position: right 20px center;\n  background-repeat: no-repeat;\n  transition: padding-right 250ms;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.raise[_ngcontent-%COMP%]:hover {\n  padding-right: 110px;\n}\n\n.navigate-out[_ngcontent-%COMP%] {\n  color: var(--dark-text-color);\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdEO0VBQ3hELHNDQUFzQztFQUN0Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLWxhbmRpbmctcGFnZSB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmlubmVyLWxhbmRpbmctcGFnZSA+IGgxIHtcbiAgbWFyZ2luOiAxMjRweCAwIDEycHggMDtcbn1cblxuLmlubmVyLWxhbmRpbmctcGFnZSA+IHAge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiN0aW1lIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uY3RhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiA3MnB4O1xufVxuXG4ucmFpc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDIxOSwgOTAsIDcyLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3doaXRlLWFycm93LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMjBweCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IHBhZGRpbmctcmlnaHQgMjUwbXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmFpc2U6aG92ZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMTBweDtcbn1cblxuLm5hdmlnYXRlLW91dCB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 4893:
/*!******************************************!*\
  !*** ./src/app/nav/nav/nav.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 2, vars: 0, consts: [[1, "nav"], ["routerLink", "", "src", "../../../assets/ryfunder.png", "alt", "Ryfunder Logo"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".nav[_ngcontent-%COMP%] {\n  height: var(--nav-height);\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n}\n.nav[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xuICBoZWlnaHQ6IHZhcigtLW5hdi1oZWlnaHQpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5uYXYgPiBpbWcge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 5441:
/*!***************************************************************!*\
  !*** ./src/app/onboarding/basic-info/basic-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInfoComponent": () => (/* binding */ BasicInfoComponent)
/* harmony export */ });
/* harmony import */ var _Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _onboarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onboarding.service */ 2150);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-btns/nav-btns.component */ 8383);









function BasicInfoComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BasicInfoComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class BasicInfoComponent {
  constructor(onboardingService, fb) {
    this.onboardingService = onboardingService;
    this.fb = fb;
    this.attempedToSubmitForm = false; // if someone has attempted to submit form (next)
    // sidepanel information in main onborading component

    this.newSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.slideContent = {
      title: 'Tell us about your company',
      content: 'The first step to raising money on Wefunder is learning more about you!',
      img: {
        fileName: 'basic-information.svg',
        alt: 'photo book'
      }
    };
    this.basicInfoForm = this.fb.group({
      name: [this.onboardingService.company.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      description: [this.onboardingService.company.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }

  ngOnInit() {
    // tell main onboarding component to update sidebar to new info
    this.newSlide.emit(this.slideContent);
  }

  get name() {
    return this.basicInfoForm.get('name');
  }

  get description() {
    return this.basicInfoForm.get('description');
  }
  /**
   * if no errors, create/update the company and go to next step in flow
   */


  nextPage() {
    var _this = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.attempedToSubmitForm = true; // if form invalid don't move on

      if (_this.basicInfoForm.invalid) return; // update the company

      yield _this.modifyCompany(); // go to next page in onboarding

      return _this.onboardingService.nextPage();
    })();
  }
  /**
   * update or create new company if none exists
   */


  modifyCompany() {
    var _this2 = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const companyId = _this2.onboardingService.company._id; // if theres no company created yet create a new one

      _this2.onboardingService.company = !companyId ? yield _this2.createNewCompany(_this2.basicInfoForm.value) : // else update current one
      yield _this2.updateCompany(companyId, _this2.basicInfoForm.value);
    })();
  }
  /**
   * creates and returns new company
   */


  createNewCompany(formVals) {
    var _this3 = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this3.onboardingService.createCompany(formVals).toPromise();
    })();
  }
  /**
   * updates company and returns updated company
   */


  updateCompany(companyId, formVals) {
    var _this4 = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4.onboardingService.updateCompany(companyId, formVals).toPromise();
    })();
  }

}

BasicInfoComponent.ɵfac = function BasicInfoComponent_Factory(t) {
  return new (t || BasicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_onboarding_service__WEBPACK_IMPORTED_MODULE_1__.OnboardingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};

BasicInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BasicInfoComponent,
  selectors: [["app-basic-info"]],
  outputs: {
    newSlide: "newSlide"
  },
  decls: 14,
  vars: 3,
  consts: [[3, "formGroup"], [1, "form-section"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name"], ["class", "error", 4, "ngIf"], ["for", "description"], ["name", "", "id", "description", "formControlName", "description"], [3, "nextPage"], [1, "error"]],
  template: function BasicInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Basic Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Company name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BasicInfoComponent_span_7_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Short company description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BasicInfoComponent_span_12_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "app-nav-btns", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nextPage", function BasicInfoComponent_Template_app_nav_btns_nextPage_13_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attempedToSubmitForm && ctx.name.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attempedToSubmitForm && ctx.description.invalid);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_2__.NavBtnsComponent],
  styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImJhc2ljLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 2505:
/*!***************************************************!*\
  !*** ./src/app/onboarding/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _onboarding_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../onboarding.service */ 2150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic-info/basic-info.component */ 5441);
/* harmony import */ var _upload_deck_upload_deck_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-deck/upload-deck.component */ 6417);
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../preview/preview.component */ 5904);







const _c0 = function (a0) { return { "current-page": a0 }; };
function MainComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, page_r4 == ctx_r0.onboardingService.currentView));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r5 + 1);
} }
function MainComponent_app_basic_info_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-basic-info", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newSlide", function MainComponent_app_basic_info_18_Template_app_basic_info_newSlide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.setSlideContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MainComponent_app_upload_deck_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-upload-deck", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newSlide", function MainComponent_app_upload_deck_19_Template_app_upload_deck_newSlide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.setSlideContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MainComponent_app_preview_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-preview", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newSlide", function MainComponent_app_preview_20_Template_app_preview_newSlide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.setSlideContent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(onboardingService, cdr) {
        this.onboardingService = onboardingService;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.slideContent = {};
    }
    /**
     * get slide content for sidebar from children and update it
     */
    setSlideContent(slideContent) {
        this.slideContent = slideContent;
        // need to manually redect changes after slide change
        this.cdr.detectChanges();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_onboarding_service__WEBPACK_IMPORTED_MODULE_0__.OnboardingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_onboarding_service__WEBPACK_IMPORTED_MODULE_0__.OnboardingService])], decls: 21, vars: 8, consts: [[1, "m-container"], [1, "sidebar"], [1, "numbers"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "dash"], [1, "content"], [3, "src", "alt"], [1, "contact"], ["href", "mailto:hello@wefunder.com"], [1, "component-holder"], [3, "newSlide", 4, "ngIf"], [3, "ngClass"], [3, "newSlide"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MainComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "hello@wefunder.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MainComponent_app_basic_info_18_Template, 1, 0, "app-basic-info", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MainComponent_app_upload_deck_19_Template, 1, 0, "app-upload-deck", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MainComponent_app_preview_20_Template, 1, 0, "app-preview", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.onboardingService.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", ctx.slideContent.img == null ? null : ctx.slideContent.img.fileName, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.slideContent.img == null ? null : ctx.slideContent.img.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.slideContent.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.slideContent.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onboardingService.currentView === "basic-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onboardingService.currentView === "upload-deck");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onboardingService.currentView === "preview");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_1__.BasicInfoComponent, _upload_deck_upload_deck_component__WEBPACK_IMPORTED_MODULE_2__.UploadDeckComponent, _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__.PreviewComponent], styles: [".m-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: calc(100vh - var(--nav-height));\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 30%;\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 36px;\n  box-sizing: border-box;\n  background-color: var(--background-color);\n}\n\n.numbers[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.numbers[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n}\n\n.numbers[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.current-page[_ngcontent-%COMP%] {\n  border: 1px solid var(--primary-color);\n  border-radius: 50%;\n}\n\n.current-page[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n}\n\n.component-holder[_ngcontent-%COMP%] {\n  width: 70%;\n  box-sizing: border-box;\n  padding: 36px;\n  display: flex;\n  flex-direction: column;\n}\n\n.child-page[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.dash[_ngcontent-%COMP%] {\n  width: 50px;\n  border-bottom: 4px solid var(--dark-text-color);\n  opacity: 0.1;\n  margin: 36px 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 84px;\n}\n\n.content[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 24px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 8px 0;\n}\n\n.contact[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--light-text-color);\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0NBQStDO0VBQy9DLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2LWhlaWdodCkpO1xufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDM2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ubnVtYmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5udW1iZXJzID4gZGl2IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5udW1iZXJzID4gZGl2ID4gcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmN1cnJlbnQtcGFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jdXJyZW50LXBhZ2UgPiBwIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29tcG9uZW50LWhvbGRlciB7XG4gIHdpZHRoOiA3MCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jaGlsZC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZGFzaCB7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcbiAgb3BhY2l0eTogMC4xO1xuICBtYXJnaW46IDM2cHggMDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50ID4gaW1nIHtcbiAgaGVpZ2h0OiA4NHB4O1xufVxuXG4uY29udGVudCA+IGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWN0ID4gaDMge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmNvbnRhY3QgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8383:
/*!***********************************************************!*\
  !*** ./src/app/onboarding/nav-btns/nav-btns.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBtnsComponent": () => (/* binding */ NavBtnsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _onboarding_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../onboarding.service */ 2150);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function NavBtnsComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBtnsComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " PREVIOUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavBtnsComponent {
    constructor(onboardingService) {
        this.onboardingService = onboardingService;
        this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    /**
     * tell parent component the user wants to visit next page
     */
    next() {
        this.nextPage.emit(true);
    }
    /**
     * if user is on first page in onboarding flow
     */
    isFirstPage() {
        return this.onboardingService.currentPageIndex() === 0;
    }
    /**
     * if user is on last page in onboarding flow
     */
    isLastPage() {
        return (this.onboardingService.currentPageIndex() ===
            this.onboardingService.pages.length - 1);
    }
    /**
     * go to previous page
     */
    goBack() {
        if (this.isFirstPage())
            return;
        this.onboardingService.currentView =
            this.onboardingService.pages[this.onboardingService.currentPageIndex() - 1];
    }
}
NavBtnsComponent.ɵfac = function NavBtnsComponent_Factory(t) { return new (t || NavBtnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_onboarding_service__WEBPACK_IMPORTED_MODULE_0__.OnboardingService)); };
NavBtnsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBtnsComponent, selectors: [["app-nav-btns"]], outputs: { nextPage: "nextPage" }, decls: 6, vars: 2, consts: [[1, "nav-btns"], ["class", "prev", 3, "click", 4, "ngIf"], [1, "next", 3, "click"], [1, "prev", 3, "click"]], template: function NavBtnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavBtnsComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBtnsComponent_Template_button_click_4_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isLastPage() ? "PUBLISH" : "NEXT", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".nav-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 32px 0 0 0;\n}\n.nav-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 150px;\n  border: none;\n  border-radius: 6px;\n  padding: 14px 20px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.prev[_ngcontent-%COMP%] {\n  background-color: var(--border-color);\n  color: var(--dark-text-color);\n}\n.next[_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1idG5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2QiLCJmaWxlIjoibmF2LWJ0bnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAzMnB4IDAgMCAwO1xufVxuLm5hdi1idG5zIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByZXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcbn1cblxuLm5leHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ 2150:
/*!**************************************************!*\
  !*** ./src/app/onboarding/onboarding.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingService": () => (/* binding */ OnboardingService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class OnboardingService {
    constructor(http) {
        this.http = http;
        this.pages = ['basic-info', 'upload-deck', 'preview']; // pages in onboarding flow
        // where to send API reqs
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/api/';
        this.currentView = this.pages[0];
        this.company = {};
    }
    /**
     * @returns index of current page in onboarding flow
     */
    currentPageIndex() {
        return this.pages.findIndex((page) => page === this.currentView);
    }
    /**
     * Go to next page in onboarding flow
     */
    nextPage() {
        if (this.currentPageIndex() + 1 === this.pages.length)
            return;
        this.currentView = this.pages[this.currentPageIndex() + 1];
    }
    /**
     * creates company then returns it
     */
    createCompany(payload) {
        return this.http.post(this.serverUrl + 'company/newCompany', payload);
    }
    /**
     *
     * @param companyId
     * @param file - Buffer of either ppt or pdf
     * @returns modified company object
     */
    uploadDeck(companyId, formData) {
        return this.http.put(this.serverUrl + 'company/addDeck/' + companyId, formData);
    }
    /**
     * updates company and returns updated company
     */
    updateCompany(companyId, payload) {
        return this.http.put(this.serverUrl + 'company/modify/' + companyId, payload);
    }
}
OnboardingService.ɵfac = function OnboardingService_Factory(t) { return new (t || OnboardingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OnboardingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OnboardingService, factory: OnboardingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5904:
/*!*********************************************************!*\
  !*** ./src/app/onboarding/preview/preview.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewComponent": () => (/* binding */ PreviewComponent)
/* harmony export */ });
/* harmony import */ var _Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _onboarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onboarding.service */ 2150);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _companies_individual_profile_individual_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../companies/individual-profile/individual-profile.component */ 2223);
/* harmony import */ var _nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav-btns/nav-btns.component */ 8383);







class PreviewComponent {
  constructor(onboardingService, router) {
    this.onboardingService = onboardingService;
    this.router = router; // sidepanel information in main onborading component

    this.newSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.slideContent = {
      title: 'Everything look good?',
      content: "When you're ready, publish your deck and start raising money from your customers",
      img: {
        fileName: 'preview.svg',
        alt: 'checkboard with green check'
      }
    };
  }

  ngOnInit() {
    // tell main onboarding component to update sidebar to new info
    this.newSlide.emit(this.slideContent);
  }
  /**
   * mark company as published in db
   * navigate user to published page
   */


  publish() {
    var _this = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const payload = {
        published: true
      };
      yield _this.onboardingService.updateCompany(_this.onboardingService.company._id, payload).toPromise(); // navigate to published companys page

      _this.router.navigate(['raise', _this.onboardingService.company._id]);
    })();
  }

}

PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
  return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_onboarding_service__WEBPACK_IMPORTED_MODULE_1__.OnboardingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

PreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PreviewComponent,
  selectors: [["app-preview"]],
  outputs: {
    newSlide: "newSlide"
  },
  decls: 11,
  vars: 1,
  consts: [[1, "preview"], [1, "top-bar"], [1, "circles"], ["id", "red"], ["id", "yellow"], ["id", "green"], [1, "content"], [3, "companyId"], [3, "nextPage"]],
  template: function PreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Preview your company page");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-individual-profile", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-nav-btns", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nextPage", function PreviewComponent_Template_app_nav_btns_nextPage_10_listener() {
        return ctx.publish();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("companyId", ctx.onboardingService.company._id);
    }
  },
  directives: [_companies_individual_profile_individual_profile_component__WEBPACK_IMPORTED_MODULE_2__.IndividualProfileComponent, _nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_3__.NavBtnsComponent],
  styles: [".preview[_ngcontent-%COMP%] {\n  height: 60vh;\n  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.08);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  min-height: 28px;\n  background-color: #e8eaed;\n  border-radius: 12px 12px 0 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: scroll;\n}\n\n.circles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.circles[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-left: 6px;\n  height: 14px;\n  width: 14px;\n}\n\n#red[_ngcontent-%COMP%] {\n  background-color: #ee6a5f;\n}\n\n#yellow[_ngcontent-%COMP%] {\n  background-color: #f7be4f;\n}\n\n#green[_ngcontent-%COMP%] {\n  background-color: #64c656;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJwcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldyB7XG4gIGhlaWdodDogNjB2aDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAzMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b3AtYmFyIHtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWFlZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jaXJjbGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2lyY2xlcyA+IGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbn1cbiNyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2YTVmO1xufVxuI3llbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2JlNGY7XG59XG4jZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRjNjU2O1xufVxuIl19 */"]
});

/***/ }),

/***/ 6417:
/*!*****************************************************************!*\
  !*** ./src/app/onboarding/upload-deck/upload-deck.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDeckComponent": () => (/* binding */ UploadDeckComponent)
/* harmony export */ });
/* harmony import */ var _Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _onboarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onboarding.service */ 2150);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-file-drop */ 721);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-btns/nav-btns.component */ 8383);








function UploadDeckComponent_ng_template_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Success! Your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " page pitch deck is ready to go. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Want to use a different deck?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.onboardingService.company.deck.length);
  }
}

function UploadDeckComponent_ng_template_4_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Drop your file here or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Max file size 50mb, Types: PDF, PPT, or DOC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function UploadDeckComponent_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UploadDeckComponent_ng_template_4_div_1_div_1_Template, 11, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UploadDeckComponent_ng_template_4_div_1_div_2_Template, 7, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.onboardingService.company.deck.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.onboardingService.company.deck.length === 0);
  }
}

function UploadDeckComponent_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Uploading, one moment please.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.filename);
  }
}

function UploadDeckComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UploadDeckComponent_ng_template_4_div_1_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UploadDeckComponent_ng_template_4_div_2_Template, 14, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadDeckComponent_ng_template_4_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const openFileSelector_r2 = restoredCtx.openFileSelector;
      return openFileSelector_r2();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Browse Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.fileUploadLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.fileUploadLoading);
  }
}

function UploadDeckComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please upload a deck before continouing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

class UploadDeckComponent {
  constructor(onboardingService) {
    this.onboardingService = onboardingService;
    this.fileUploadLoading = false; // for displaying loader

    this.nextPageAttempted = false; // if the user has pressed the next button. for display purposes
    // sidepanel information in main onborading component

    this.newSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.slideContent = {
      title: 'Share your pitch',
      content: "We can't wait till help you show your pitch off to the world!",
      img: {
        fileName: 'upload-deck.svg',
        alt: 'folder or file being uploaded to the cloud'
      }
    };
    this.filename = '';
    this.errorMessage = '';
  } // see https://www.npmjs.com/package/ngx-file-drop for full documentation


  dropped(files) {
    var _this = this;

    // clear any error message on reupload
    this.errorMessage = '';
    const droppedFile = files[0];
    const fileEntry = droppedFile.fileEntry;
    fileEntry.file( /*#__PURE__*/function () {
      var _ref = (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (file) {
        // create FormData and add file information
        const formData = new FormData();
        formData.append('deck', file, droppedFile.relativePath);
        _this.filename = droppedFile.relativePath; // show file loader

        _this.fileUploadLoading = true; // upload file to server and save to company

        const companyId = _this.onboardingService.company._id;
        const updatedCompany = yield _this.uploadFile(companyId, formData);
        if (updatedCompany) _this.onboardingService.company = updatedCompany; // hide file loader

        _this.fileUploadLoading = false;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    // tell main onboarding component to update sidebar to new info
    this.newSlide.emit(this.slideContent);
  }
  /**
   * uploads deck and returns company with deck
   */


  uploadFile(companyId, formData) {
    var _this2 = this;

    return (0,_Users_ryansoderberg_Desktop_wefunder_angular_wefunder_hw_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        return yield _this2.onboardingService.uploadDeck(companyId, formData).toPromise();
      } catch (e) {
        _this2.errorMessage = e.statusText;
      }
    })();
  }
  /**
   * goes to next page in onboarding flow if no errors
   */


  nextPage() {
    this.nextPageAttempted = true; // if there is a slide deck allow it

    if (this.onboardingService.company.deck.length > 0) {
      // go to next page in onboarding
      return this.onboardingService.nextPage();
    }
  }

}

UploadDeckComponent.ɵfac = function UploadDeckComponent_Factory(t) {
  return new (t || UploadDeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_onboarding_service__WEBPACK_IMPORTED_MODULE_1__.OnboardingService));
};

UploadDeckComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: UploadDeckComponent,
  selectors: [["app-upload-deck"]],
  outputs: {
    newSlide: "newSlide"
  },
  decls: 9,
  vars: 3,
  consts: [["dropZoneLabel", "Drop files here", "dropZoneClassName", "dropbox", "accept", ".pdf,.pptx,.ppt,.doc,.docx", 3, "multiple", "onFileDrop"], ["ngx-file-drop-content-tmp", ""], ["class", "error", 4, "ngIf"], [1, "error"], [3, "nextPage"], [1, "upload"], ["class", "upload-center", 4, "ngIf"], ["type", "button", "id", "fileDrop", 1, "fileButton", 3, "click"], [1, "upload-center"], ["src", "../../../assets/check.svg", "alt", "green check mark"], ["id", "change", 1, "info"], ["for", "fileDrop"], [1, "info"], [1, "lds-roller"]],
  template: function UploadDeckComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Upload pitch deck");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ngx-file-drop", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileDrop", function UploadDeckComponent_Template_ngx_file_drop_onFileDrop_3_listener($event) {
        return ctx.dropped($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UploadDeckComponent_ng_template_4_Template, 5, 2, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UploadDeckComponent_span_5_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-nav-btns", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nextPage", function UploadDeckComponent_Template_app_nav_btns_nextPage_8_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nextPageAttempted && ctx.onboardingService.company.deck.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.errorMessage);
    }
  },
  directives: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__.NgxFileDropComponent, ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__.NgxFileDropContentTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _nav_btns_nav_btns_component__WEBPACK_IMPORTED_MODULE_2__.NavBtnsComponent],
  styles: [".upload-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.upload-center[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-bottom: 20px;\n}\n\n.upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n#change[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.upload[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .upload[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary-color);\n}\n\n.upload[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fileButton[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1kZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJ1cGxvYWQtZGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnVwbG9hZC1jZW50ZXIgPiBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51cGxvYWQgcCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbiNjaGFuZ2Uge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4udXBsb2FkIGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXBsb2FkIGxhYmVsLFxuLnVwbG9hZCBwID4gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnVwbG9hZCAuaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbGVCdXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */", ".lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--secondary-color);\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.036s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.072s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.108s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.144s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.18s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.216s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.252s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.288s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOztBQUU1QjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdFQUFnRTtFQUNoRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoibG9hZGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGh0dHBzOi8vbG9hZGluZy5pby9jc3MvICovXG5cbi5sZHMtcm9sbGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDYzcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogNTZweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogMTdweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map