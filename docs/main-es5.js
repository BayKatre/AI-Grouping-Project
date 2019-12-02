(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"text-center\">Yapay Zeka Sınıflandırma Task - BayKatre.com</h3>\n  <div class=\"d-flex justify-content-center\">\n      <canvas #canvas style=\"border: 2px solid\" width=\"1000\" height=\"700\"></canvas></div>\n      <div class=\"row\">\n          <div class=\"col-3\">\n              <button type=\"button\" (click)=\"start()\" ngbButton>Noktaları Üret!</button>\n          </div>\n          <div class=\"col-9 d-flex flex-nowrap\">\n              <h5 class=\"p-2\">Yeni Nokta</h5>\n              <form class=\"p-2 d-flex flex-nowrap\" [formGroup]=\"pointForm\" (ngSubmit)=\"appendPoint(pointForm.value)\">\n                  <div>\n                      <label for=\"pointx\">\n                      X:\n                      </label>\n                      <input id=\"x\" type=\"text\" formControlName=\"x\" placeholder=\"Max 1000\" required>\n                  </div>\n                  <div>\n                      <label for=\"pointy\">\n                      Y:\n                      </label>\n                      <input id=\"y\" type=\"text\" formControlName=\"y\" placeholder=\"Max 700\" required>\n                  </div>\n                  <div>\n                      <label for=\"pointx\">\n                          Yöntem: \n                      </label>\n                  </div>\n                  <p>\n                      <input type=\"radio\" value=\"mass\" formControlName=\"method\"> Ağırlık Merkezi\n                      <input type=\"radio\" value=\"knn\" formControlName=\"method\" > KNN\n                  </p>\n                  <button class=\"button\" type=\"submit\">Ekle</button>\n              </form>\n          </div>\n      </div>\n      \n  \n      \n  </div>\n  \n  "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.checkPointGenerate = false;
        this.pointsx = [];
        this.pointsy = [];
        this.coordinatesRedX = [];
        this.coordinatesBlueX = [];
        this.coordinatesGreenX = [];
        this.coordinatesRedY = [];
        this.coordinatesBlueY = [];
        this.coordinatesGreenY = [];
        this.pointForm = this.formBuilder.group({
            x: '',
            y: '',
            method: ''
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.screen = { x: window.innerWidth, y: window.innerHeight };
        this.massCenters = { red: { x: 0, y: 0 }, blue: { x: 0, y: 0 }, green: { x: 0, y: 0 } };
        this.pisagor = { red: 0, blue: 0, green: 0 };
        this.euklid = { red: 9999, blue: 9999, green: 9999 };
    };
    AppComponent.prototype.start = function () {
        this.checkPointGenerate = true;
        this.screen = { x: window.innerWidth, y: window.innerHeight };
        console.log(this.screen);
        this.randomPointGenerate(1);
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.fillStyle = 'red';
        for (var i = 0; i < 100; i++) {
            this.ctx.fillRect(this.pointsx[i], this.pointsy[i], 5, 5);
        }
        this.ctx.fillStyle = 'blue';
        this.randomPointGenerate(2);
        for (var i = 0; i < 100; i++) {
            this.ctx.fillRect(this.pointsx[i], this.pointsy[i], 5, 5);
        }
        this.ctx.fillStyle = 'green';
        this.randomPointGenerate(3);
        for (var i = 0; i < 100; i++) {
            this.ctx.fillRect(this.pointsx[i], this.pointsy[i], 5, 5);
        }
    };
    AppComponent.prototype.randomPointGenerate = function (value) {
        this.pointsx = [];
        this.pointsy = [];
        var totalx = 0, totaly = 0;
        screenX = this.screen.x;
        screenY = this.screen.y;
        for (var i = 0; i < 100; i++) {
            var element = Math.random();
            var element2 = Math.random();
            if (value == 1) {
                element = ((700 / 2) * element);
                element2 = ((1000 / 3) * element2);
                this.coordinatesRedX.push(element);
                this.coordinatesRedY.push(element2);
            }
            else if (value == 2) {
                element = ((700 / 2) * element + (700 * 0.8 / 2));
                element2 = ((1000 / 3) * element2);
                this.coordinatesBlueX.push(element);
                this.coordinatesBlueY.push(element2);
            }
            else if (value == 3) {
                element = ((700 / 2) * element + (700 * 0.5 / 2));
                element2 = ((1000 / 3) * element2 + (1000 * 0.8 / 3));
                this.coordinatesGreenX.push(element);
                this.coordinatesGreenY.push(element2);
            }
            this.pointsx.push(element);
            this.pointsy.push(element2);
            totalx = totalx + element;
            totaly += element2;
            switch (value) {
                case 1: {
                    this.massCenters.red = { x: totalx / 100, y: totaly / 100 };
                }
                case 2: {
                    this.massCenters.blue = { x: totalx / 100, y: totaly / 100 };
                }
                case 3: {
                    this.massCenters.green = { x: totalx / 100, y: totaly / 100 };
                }
            }
        }
        console.log(this.massCenters);
        console.log(this.coordinatesBlueX);
    };
    AppComponent.prototype.calculatePisagor = function (value) {
        var localX, localY;
        localX = this.massCenters.red.x - value.x;
        localY = this.massCenters.red.y - value.y;
        this.pisagor.red = Math.sqrt(localX * localX + localY * localY);
        localX = this.massCenters.blue.x - value.x;
        localY = this.massCenters.blue.y - value.y;
        this.pisagor.blue = Math.sqrt(localX * localX + localY * localY);
        localX = this.massCenters.green.x - value.x;
        localY = this.massCenters.green.y - value.y;
        this.pisagor.green = Math.sqrt(localX * localX + localY * localY);
        if (this.pisagor.red < this.pisagor.blue && this.pisagor.red < this.pisagor.green)
            this.ctx.fillStyle = 'red';
        else if (this.pisagor.blue < this.pisagor.red && this.pisagor.blue < this.pisagor.green)
            this.ctx.fillStyle = 'blue';
        else if (this.pisagor.green < this.pisagor.red && this.pisagor.green < this.pisagor.blue)
            this.ctx.fillStyle = 'green';
        this.ctx.fillRect(value.x, value.y, 10, 10);
        console.log(this.pisagor);
    };
    AppComponent.prototype.calculateEuclid = function (value) {
        var smallest = '';
        for (var i = 0; i < 100; i++) {
            var elementRed = Math.sqrt(Math.pow(this.coordinatesRedX[i] - value.x, 2) + Math.pow(this.coordinatesRedY[i] - value.y, 2));
            var elementBlue = Math.sqrt(Math.pow(this.coordinatesBlueX[i] - value.x, 2) + Math.pow(this.coordinatesBlueY[i] - value.y, 2));
            var elementGreen = Math.sqrt(Math.pow(this.coordinatesGreenX[i] - value.x, 2) + Math.pow(this.coordinatesGreenY[i] - value.y, 2));
            if (this.euklid.red > elementRed)
                this.euklid.red = elementRed;
            if (this.euklid.blue > elementBlue)
                this.euklid.blue = elementBlue;
            if (this.euklid.green > elementGreen)
                this.euklid.green = elementGreen;
        }
        if (this.euklid.red < this.euklid.blue && this.euklid.red < this.euklid.green)
            this.ctx.fillStyle = 'red';
        else if (this.euklid.blue < this.euklid.red && this.euklid.blue < this.euklid.green)
            this.ctx.fillStyle = 'blue';
        else if (this.euklid.green < this.euklid.red && this.euklid.green < this.euklid.blue)
            this.ctx.fillStyle = 'green';
        this.ctx.fillRect(value.x, value.y, 10, 10);
        console.log(this.euklid);
    };
    AppComponent.prototype.appendPoint = function (formValues) {
        console.log(formValues);
        if (!this.checkPointGenerate)
            window.alert("Önce nokta üretiniz!");
        else {
            if (formValues.method == 'mass')
                this.calculatePisagor(formValues);
            else if (formValues.method == 'knn')
                this.calculateEuclid(formValues);
            else
                window.alert("Önce koordinatları Giriniz!");
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
    ], AppComponent.prototype, "canvas", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/katre/Desktop/AIGroupingProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map