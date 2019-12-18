(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-header></app-header>\n    <app-banner *ngIf=\"router.url == '/'\"></app-banner>\n    <app-blogpost-featured *ngIf=\"router.url == '/'\"></app-blogpost-featured>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'blogger';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blogpost_blogpost_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogpost/blogpost.module */ "./src/app/blogpost/blogpost.module.ts");
/* harmony import */ var _cmspage_cmspage_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmspage/cmspage.module */ "./src/app/cmspage/cmspage.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_8__["BannerComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _blogpost_blogpost_module__WEBPACK_IMPORTED_MODULE_4__["BlogpostModule"],
                _cmspage_cmspage_module__WEBPACK_IMPORTED_MODULE_5__["CmspageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"banner\">\n    <div class=\"banner-box\">\n      <div class=\"intro-text\">\n        <div class=\"intro-text-box\">\n          <h1>Lorem Ipsum is simply dummy text</h1>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>\n        </div>\n      </div>\n      <img src=\"assets/images/banner.jpg\" alt=\"banner\" />\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-detail/blogpost-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-detail/blogpost-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"blog-detail mtb-40\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"blog-left\">\n          <h1>Sample blog post 1</h1>\n          <div class=\"posted-on\">\n              <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          </div>\n          <div class=\"detail-img\">\n             <img src=\"assets/images/img1.jpg\" alt=\"blog1\" />\n          </div>\n          <div class=\"blog-desc\">\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <app-blogpost-recent></app-blogpost-recent>\n        <app-categories></app-categories>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/blogpost/blogpost-detail/blogpost-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogpostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostDetailComponent", function() { return BlogpostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogpostDetailComponent = /** @class */ (function () {
    function BlogpostDetailComponent() {
    }
    BlogpostDetailComponent.prototype.ngOnInit = function () {
    };
    BlogpostDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogpost-detail',
            template: __webpack_require__(/*! ./blogpost-detail.component.html */ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.html"),
            styles: [__webpack_require__(/*! ./blogpost-detail.component.css */ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogpostDetailComponent);
    return BlogpostDetailComponent;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost-featured/blogpost-featured.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-featured/blogpost-featured.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogpost/blogpost-featured/blogpost-featured.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-featured/blogpost-featured.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"featured-blog mtb-40\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img1.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 1</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img2.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 2</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img3.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 3</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img4.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 4</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img5.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 5</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img6.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 6</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blogpost/blogpost-featured/blogpost-featured.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-featured/blogpost-featured.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlogpostFeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostFeaturedComponent", function() { return BlogpostFeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogpost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blogpost.service */ "./src/app/blogpost/blogpost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogpostFeaturedComponent = /** @class */ (function () {
    function BlogpostFeaturedComponent(blogpostService) {
        this.blogpostService = blogpostService;
    }
    BlogpostFeaturedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogpostService.getFeaturedBlogs().subscribe(function (data) { return _this.blogs = data; }, function (error) { return _this.error = error; });
    };
    BlogpostFeaturedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogpost-featured',
            template: __webpack_require__(/*! ./blogpost-featured.component.html */ "./src/app/blogpost/blogpost-featured/blogpost-featured.component.html"),
            styles: [__webpack_require__(/*! ./blogpost-featured.component.css */ "./src/app/blogpost/blogpost-featured/blogpost-featured.component.css")]
        }),
        __metadata("design:paramtypes", [_blogpost_service__WEBPACK_IMPORTED_MODULE_1__["BlogpostService"]])
    ], BlogpostFeaturedComponent);
    return BlogpostFeaturedComponent;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost-list/blogpost-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/blogpost/blogpost-list/blogpost-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogpost/blogpost-list/blogpost-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/blogpost/blogpost-list/blogpost-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"blog-list mtb-40\">\n  <div class=\"container\">\n    <h1>{{title}}</h1>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img1.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 1</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img2.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 2</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img3.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 3</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img4.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 4</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img5.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 5</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"blog-box\">\n          <img src=\"assets/images/img6.jpg\" alt=\"blog1\" />\n          <h3>Sample blog post 6</h3>\n          <p>by <span>_Ksumit</span> on <span>October 22, 2018</span></p>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n          <a href=\"detail.html\" class=\"btn btn-danger\">Read more...</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blogpost/blogpost-list/blogpost-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/blogpost/blogpost-list/blogpost-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: BlogpostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostListComponent", function() { return BlogpostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogpost_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blogpost.service */ "./src/app/blogpost/blogpost.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogpostListComponent = /** @class */ (function () {
    function BlogpostListComponent(titleService, blogpostService) {
        this.titleService = titleService;
        this.blogpostService = blogpostService;
        this.title = 'Blogs';
    }
    BlogpostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.title);
        this.blogpostService.getBlogs().subscribe(function (data) { return _this.blogs = data; }, function (error) { return _this.error = error; });
    };
    BlogpostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogpost-list',
            template: __webpack_require__(/*! ./blogpost-list.component.html */ "./src/app/blogpost/blogpost-list/blogpost-list.component.html"),
            styles: [__webpack_require__(/*! ./blogpost-list.component.css */ "./src/app/blogpost/blogpost-list/blogpost-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _blogpost_service__WEBPACK_IMPORTED_MODULE_1__["BlogpostService"]])
    ], BlogpostListComponent);
    return BlogpostListComponent;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost-recent/blogpost-recent.component.css":
/*!************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-recent/blogpost-recent.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogpost/blogpost-recent/blogpost-recent.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/blogpost/blogpost-recent/blogpost-recent.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"right-widget recent-post\">\n  <h3>Recent Blogs</h3>\n  <a href=\"#\">\n      <div class=\"rb-box\">\n          <div class=\"rb-box-img\">\n              <img src=\"assets/images/img1.jpg\" alt=\"blog1\" />\n          </div>\n          <div class=\"rb-box-desc\">\n              <h4>Sample blog post 1</h4>\n              <p>Posted On: October 22, 2018</p>\n          </div>\n      </div>\n  </a>\n  <a href=\"#\">\n      <div class=\"rb-box\">\n          <div class=\"rb-box-img\">\n              <img src=\"assets/images/img2.jpg\" alt=\"blog1\" />\n          </div>\n          <div class=\"rb-box-desc\">\n              <h4>Sample blog post 2</h4>\n              <p>Posted On: October 22, 2018</p>\n          </div>\n      </div>\n  </a>\n  <a href=\"#\">\n      <div class=\"rb-box\">\n          <div class=\"rb-box-img\">\n              <img src=\"assets/images/img3.jpg\" alt=\"blog1\" />\n          </div>\n          <div class=\"rb-box-desc\">\n              <h4>Sample blog post 3</h4>\n              <p>Posted On: October 22, 2018</p>\n          </div>\n      </div>\n  </a>\n  <a href=\"#\">\n      <div class=\"rb-box\">\n          <div class=\"rb-box-img\">\n              <img src=\"assets/images/img4.jpg\" alt=\"blog1\" />\n          </div>\n          <div class=\"rb-box-desc\">\n              <h4>Sample blog post 4</h4>\n              <p>Posted On: October 22, 2018</p>\n          </div>\n      </div>\n  </a>\n  <a href=\"#\">\n      <div class=\"rb-box\">\n          <div class=\"rb-box-img\">\n              <img src=\"assets/images/img5.jpg\" alt=\"blog1\" />\n          </div>\n          <div class=\"rb-box-desc\">\n              <h4>Sample blog post 5</h4>\n              <p>Posted On: October 22, 2018</p>\n          </div>\n      </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/blogpost/blogpost-recent/blogpost-recent.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/blogpost/blogpost-recent/blogpost-recent.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogpostRecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostRecentComponent", function() { return BlogpostRecentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogpostRecentComponent = /** @class */ (function () {
    function BlogpostRecentComponent() {
    }
    BlogpostRecentComponent.prototype.ngOnInit = function () {
    };
    BlogpostRecentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogpost-recent',
            template: __webpack_require__(/*! ./blogpost-recent.component.html */ "./src/app/blogpost/blogpost-recent/blogpost-recent.component.html"),
            styles: [__webpack_require__(/*! ./blogpost-recent.component.css */ "./src/app/blogpost/blogpost-recent/blogpost-recent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogpostRecentComponent);
    return BlogpostRecentComponent;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/blogpost/blogpost-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BlogpostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostRoutingModule", function() { return BlogpostRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogpost-list/blogpost-list.component */ "./src/app/blogpost/blogpost-list/blogpost-list.component.ts");
/* harmony import */ var _blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogpost-detail/blogpost-detail.component */ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'blog', component: _blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogpostListComponent"] },
    { path: 'blog/:id', component: _blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_3__["BlogpostDetailComponent"] }
];
var BlogpostRoutingModule = /** @class */ (function () {
    function BlogpostRoutingModule() {
    }
    BlogpostRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlogpostRoutingModule);
    return BlogpostRoutingModule;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blogpost/blogpost.module.ts ***!
  \*********************************************/
/*! exports provided: BlogpostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostModule", function() { return BlogpostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blogpost_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogpost-routing.module */ "./src/app/blogpost/blogpost-routing.module.ts");
/* harmony import */ var _blogpost_featured_blogpost_featured_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogpost-featured/blogpost-featured.component */ "./src/app/blogpost/blogpost-featured/blogpost-featured.component.ts");
/* harmony import */ var _blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogpost-list/blogpost-list.component */ "./src/app/blogpost/blogpost-list/blogpost-list.component.ts");
/* harmony import */ var _blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogpost-detail/blogpost-detail.component */ "./src/app/blogpost/blogpost-detail/blogpost-detail.component.ts");
/* harmony import */ var _blogpost_recent_blogpost_recent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogpost-recent/blogpost-recent.component */ "./src/app/blogpost/blogpost-recent/blogpost-recent.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/blogpost/categories/categories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BlogpostModule = /** @class */ (function () {
    function BlogpostModule() {
    }
    BlogpostModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blogpost_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogpostRoutingModule"]
            ],
            exports: [
                _blogpost_featured_blogpost_featured_component__WEBPACK_IMPORTED_MODULE_3__["BlogpostFeaturedComponent"]
            ],
            declarations: [_blogpost_featured_blogpost_featured_component__WEBPACK_IMPORTED_MODULE_3__["BlogpostFeaturedComponent"], _blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogpostListComponent"], _blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_5__["BlogpostDetailComponent"], _blogpost_recent_blogpost_recent_component__WEBPACK_IMPORTED_MODULE_6__["BlogpostRecentComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"]]
        })
    ], BlogpostModule);
    return BlogpostModule;
}());



/***/ }),

/***/ "./src/app/blogpost/blogpost.service.ts":
/*!**********************************************!*\
  !*** ./src/app/blogpost/blogpost.service.ts ***!
  \**********************************************/
/*! exports provided: BlogpostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostService", function() { return BlogpostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogpostService = /** @class */ (function () {
    function BlogpostService(http) {
        this.http = http;
        this.ServerUrl = 'http://localhost:8080/';
    }
    BlogpostService.prototype.getBlogs = function () {
        return this.http.get(this.ServerUrl + 'getBlog').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BlogpostService.prototype.getFeaturedBlogs = function () {
        return this.http.get(this.ServerUrl + 'api/featured_blogs').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BlogpostService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.errorData);
    };
    BlogpostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogpostService);
    return BlogpostService;
}());



/***/ }),

/***/ "./src/app/blogpost/categories/categories.component.css":
/*!**************************************************************!*\
  !*** ./src/app/blogpost/categories/categories.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogpost/categories/categories.component.html":
/*!***************************************************************!*\
  !*** ./src/app/blogpost/categories/categories.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"right-widget categories\">\n    <h3>Categories</h3>\n    <ul>\n       <li><a href=\"#\">Technology</a></li>\n       <li><a href=\"#\">Design</a></li>\n       <li><a href=\"#\">Culture</a></li>\n       <li><a href=\"#\">Business</a></li>\n       <li><a href=\"#\">Politics</a></li>\n       <li><a href=\"#\">Opinion</a></li>\n       <li><a href=\"#\">Science</a></li>\n       <li><a href=\"#\">Health</a></li>\n       <li><a href=\"#\">Style</a></li>\n       <li><a href=\"#\">Travel</a></li>\n   </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/blogpost/categories/categories.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blogpost/categories/categories.component.ts ***!
  \*************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/blogpost/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/blogpost/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/cmspage/cmspage-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cmspage/cmspage-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CmspageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmspageRoutingModule", function() { return CmspageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/page.component */ "./src/app/cmspage/page/page.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/cmspage/contact-form/contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'page/:slug', component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] },
    { path: 'contact', component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormComponent"] }
];
var CmspageRoutingModule = /** @class */ (function () {
    function CmspageRoutingModule() {
    }
    CmspageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CmspageRoutingModule);
    return CmspageRoutingModule;
}());



/***/ }),

/***/ "./src/app/cmspage/cmspage.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cmspage/cmspage.module.ts ***!
  \*******************************************/
/*! exports provided: CmspageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmspageModule", function() { return CmspageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cmspage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmspage-routing.module */ "./src/app/cmspage/cmspage-routing.module.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/cmspage/page/page.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/cmspage/contact-form/contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CmspageModule = /** @class */ (function () {
    function CmspageModule() {
    }
    CmspageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cmspage_routing_module__WEBPACK_IMPORTED_MODULE_2__["CmspageRoutingModule"]
            ],
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"]]
        })
    ], CmspageModule);
    return CmspageModule;
}());



/***/ }),

/***/ "./src/app/cmspage/contact-form/contact-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cmspage/contact-form/contact-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cmspage/contact-form/contact-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cmspage/contact-form/contact-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"cmspage mtb-40\">\n    <div class=\"container\">\n      <div class=\"page-desc\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-8\">\n            <h1>Contact</h1>\n            <form>\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"E-Mail\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"phone\" class=\"form-control\" placeholder=\"Phone\">\n              </div>\n              <div class=\"form-group\">\n                <textarea name=\"message\" rows=\"5\" class=\"form-control\" placeholder=\"Message\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                <button class=\"btn btn-success\">Send Message</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),

/***/ "./src/app/cmspage/contact-form/contact-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cmspage/contact-form/contact-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/cmspage/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/cmspage/contact-form/contact-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/cmspage/page/page.component.css":
/*!*************************************************!*\
  !*** ./src/app/cmspage/page/page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cmspage/page/page.component.html":
/*!**************************************************!*\
  !*** ./src/app/cmspage/page/page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"cmspage mtb-40\">\n    <div class=\"container\">\n      <h1>About</h1>\n      <div class=\"page-desc\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cmspage/page/page.component.ts":
/*!************************************************!*\
  !*** ./src/app/cmspage/page/page.component.ts ***!
  \************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/cmspage/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/cmspage/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n      <div class=\"copyright\">\n        <div>Designed by _ksumit</div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my_logo img{\r\n  height: 100px;\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-blue\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <div class=\"my_logo\">\n        <img src=\"assets/images/my_log.png\" alt=\"Angular Project\" /></div>\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-link\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/page/about\" routerLinkActive=\"active\" class=\"nav-link\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/contact\" routerLinkActive=\"active\" class=\"nav-link\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/blog\" routerLinkActive=\"active\" class=\"nav-link\">Blog</a>\n          </li>\n\n\n\n        </ul>\n      </div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"cmspage mtb-40\">\n    <div class=\"container\">\n      <div class=\"error-404\">\n        <h1>404</h1>\n        <h2>There is nothing here!</h2>\n        <p>Sorry, the page you were looking for in this blog does not exist.</p>\n        <button (click)=\"gotoHome()\" class=\"btn btn-danger\">Go to Home</button>\n      </div>\n    </div>\n  </section>\n  "

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Angular\blogger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map