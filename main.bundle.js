webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 128;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(170);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(231),
        styles: [__webpack_require__(225)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidenav_sidenav_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cmp_a_cmp_a_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cmp_b_cmp_b_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cmp_c_cmp_c_component__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'a', component: __WEBPACK_IMPORTED_MODULE_10__cmp_a_cmp_a_component__["a" /* CmpAComponent */] },
    { path: 'b', component: __WEBPACK_IMPORTED_MODULE_11__cmp_b_cmp_b_component__["a" /* CmpBComponent */] },
    { path: 'c', component: __WEBPACK_IMPORTED_MODULE_12__cmp_c_cmp_c_component__["a" /* CmpCComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cmp_a_cmp_a_component__["a" /* CmpAComponent */],
            __WEBPACK_IMPORTED_MODULE_11__cmp_b_cmp_b_component__["a" /* CmpBComponent */],
            __WEBPACK_IMPORTED_MODULE_12__cmp_c_cmp_c_component__["a" /* CmpCComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmpAComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CmpAComponent = (function () {
    function CmpAComponent() {
    }
    CmpAComponent.prototype.ngOnInit = function () {
    };
    return CmpAComponent;
}());
CmpAComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-cmp-a',
        template: __webpack_require__(232),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], CmpAComponent);

//# sourceMappingURL=cmp-a.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmpBComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CmpBComponent = (function () {
    function CmpBComponent() {
    }
    CmpBComponent.prototype.ngOnInit = function () {
    };
    return CmpBComponent;
}());
CmpBComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-cmp-b',
        template: __webpack_require__(233),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], CmpBComponent);

//# sourceMappingURL=cmp-b.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmpCComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CmpCComponent = (function () {
    function CmpCComponent() {
    }
    CmpCComponent.prototype.ngOnInit = function () {
    };
    return CmpCComponent;
}());
CmpCComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-cmp-c',
        template: __webpack_require__(234),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], CmpCComponent);

//# sourceMappingURL=cmp-c.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(235),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sidenav',
        template: __webpack_require__(236),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "/* .example-sidenav-fab-container {\n    width: 500px;\n    height: 300px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  } */\n  \n  /* .example-sidenav-fab-container mat-sidenav {\n    max-width: 700px;\n  }\n  \n  .example-sidenav-fab-container .mat-sidenav-content,\n  .example-sidenav-fab-container mat-sidenav {\n    display: flex;\n    overflow: visible;\n  }\n  \n  .example-scrolling-content {\n    overflow: auto;\n    height: 100%;\n  }\n  \n  .example-fab.mat-mini-fab {\n    position: absolute;\n    right: 20px;\n    bottom: 10px;\n  } */\n  \n  .example-container {\n    width: 1000px;\n    height: 900px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n\n.sidenav {\n  height: 100%; /* Full-height: remove this if you want \"auto\" height */\n  width: 250px; /* Set the width of the sidebar */\n  position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n  z-index: 1; /* Stay on top */\n  top: 0; /* Stay at the top */\n  left: 0;\n  background-color: #007da0;\n  overflow-x: hidden; /* Disable horizontal scroll */\n}\n\n/* The navigation menu links */\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n  background-color: #006f8e;\n  transition: ease 0.4s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".btn {\n    border-radius: 35px;\n    font-family: Roboto;\n    color: #ffffff;\n    font-size: 20px;\n    background: #00a4d3;\n    padding: 20px 25px 20px 25px;\n    text-decoration: none;\n    float: right;\n    border-style: solid;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "/* .example-container {\n    width: 500px;\n    height: 300px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n  \n  .example-sidenav-content {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .example-sidenav {\n    padding: 20px;\n  }\n   */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav class=\"sidenav\" mode=\"side\" opened=\"true\">\n    <a [routerLink]=\"['/a']\"><img width=\"40px\" src=\"assets/capital_a.png\"></a>\n    <br>\n    <a [routerLink]=\"['/b']\"><img width=\"40px\" src=\"assets/capital_b.png\"></a>\n    <br>\n    <a [routerLink]=\"['/c']\"><img width=\"40px\" src=\"assets/capital_c.png\"></a>\n  </mat-sidenav>\n\n  <div class=\"example-sidenav-content\">\n    <!-- <button type=\"button\" mat-button (click)=\"sidenav.open()\">\n      Open sidenav\n    </button> -->\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n  </div>\n</mat-sidenav-container>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<p>\n  cmp-a works!\n</p>\n<img src=\"assets/capital_a.png\">\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<p>\n  cmp-b works!\n</p>\n<img src=\"assets/capital_b.png\">"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<p>\n  cmp-c works!\n</p>\n<img src=\"assets/capital_c.png\">"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <p class=\"network-name\">abc #1</p>\n      <p class=\"navbar-brand\">\n        <span>\n          MenuSidebar - TEST\n        </span>\n      </p>\n      <p style=\"text-align:right\">\n        <span>\n          <button class=\"btn\">Logout</button>\n        </span>\n      </p>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"side\" opened=\"true\">\n    Jolly good!\n  </mat-sidenav>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"sidenav.open()\">\n      Open sidenav\n    </button>\n  </div>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ })

},[300]);
//# sourceMappingURL=main.bundle.js.map