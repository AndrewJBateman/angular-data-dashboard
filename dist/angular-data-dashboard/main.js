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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/line-chart/line-chart.component */ "./src/app/google-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _google_chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart/pie-chart/pie-chart.component */ "./src/app/google-chart/pie-chart/pie-chart.component.ts");
/* harmony import */ var _google_chart_table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-chart/table-chart/table-chart.component */ "./src/app/google-chart/table-chart/table-chart.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "angular-data-dashboard";
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "container"], [1, "header"], [1, "row"], [1, "col-7"], [1, "col-5"], [1, "col-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Angular Sales Dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-line-chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-pie-chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-table-chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__["LineChartComponent"], _google_chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"], _google_chart_table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_3__["TableChartComponent"]], styles: [".header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 20px;\r\n    font-family: serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxufVxyXG4iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-chart/google-chart.module */ "./src/app/google-chart/google-chart.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_3__["GoogleChartModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/google-chart/google-chart.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/google-chart/google-chart.module.ts ***!
  \*****************************************************/
/*! exports provided: GoogleChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartModule", function() { return GoogleChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/service.module */ "./src/app/google-chart/service/service.module.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/google-chart/line-chart/line-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/google-chart/pie-chart/pie-chart.component.ts");
/* harmony import */ var _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-chart/table-chart.component */ "./src/app/google-chart/table-chart/table-chart.component.ts");







var GoogleChartModule = /** @class */ (function () {
    function GoogleChartModule() {
    }
    GoogleChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleChartModule });
    GoogleChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleChartModule_Factory(t) { return new (t || GoogleChartModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]
            ]] });
    return GoogleChartModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleChartModule, { declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_5__["TableChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]], exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_5__["TableChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_5__["TableChartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _service_service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]
                ],
                exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"], _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_5__["TableChartComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/google-chart/line-chart/line-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/google-chart/line-chart/line-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");




var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        // Load the Visualization API and the controls package.
        this.gLib.charts.load("current", { packages: ["corechart", "table"] });
        // Set a callback to run when the Google Visualization API is loaded.
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    LineChartComponent.prototype.ngOnInit = function () { };
    // method using the Google Charts library using the gLib variable
    // create a new chart using the LineChart method, passing in the container div to show the line chart.
    LineChartComponent.prototype.drawChart = function () {
        var data = this.gLib.visualization.arrayToDataTable([
            ["Year", "Sales", "Expenses"],
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540],
        ]);
        var options = {
            title: "Company Performance",
            curveType: "function",
            legend: { position: "bottom" },
        };
        var chart = new this.gLib.visualization.LineChart(document.getElementById("divLineChart"));
        chart.draw(data, options);
    };
    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"])); };
    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], decls: 1, vars: 0, consts: [["id", "divLineChart"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
    return LineChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-line-chart",
                templateUrl: "./line-chart.component.html",
                styleUrls: ["./line-chart.component.css"],
            }]
    }], function () { return [{ type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/google-chart/pie-chart/pie-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/google-chart/pie-chart/pie-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");




var PieChartComponent = /** @class */ (function () {
    function PieChartComponent(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        // Load the Visualization API and the controls package.
        this.gLib.charts.load("current", { packages: ["corechart", "table"] });
        // Set a callback to run when the Google Visualization API is loaded.
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    PieChartComponent.prototype.ngOnInit = function () { };
    PieChartComponent.prototype.drawChart = function () {
        var chart = new this.gLib.visualization.PieChart(document.getElementById("divPieChart"));
        var data = new this.gLib.visualization.DataTable();
        data.addColumn("string", "Accessories");
        data.addColumn("number", "Quantity");
        data.addRows([
            ["Computers", 3],
            ["Hard Drives", 6],
            ["Printers", 4],
            ["Monitors", 5],
            ["RAM", 2],
        ]);
        var options = { title: "Sales Info" };
        chart.draw(data, options);
    };
    PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"])); };
    PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], decls: 1, vars: 0, consts: [["id", "divPieChart"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, styles: ["#divPieChart[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLWNoYXJ0L3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlLWNoYXJ0L3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZQaWVDaGFydHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"] });
    return PieChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-pie-chart",
                templateUrl: "./pie-chart.component.html",
                styleUrls: ["./pie-chart.component.css"],
            }]
    }], function () { return [{ type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/google-chart/service/google-chart.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/google-chart/service/google-chart.service.ts ***!
  \**************************************************************/
/*! exports provided: GoogleChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartService", function() { return GoogleChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.module */ "./src/app/google-chart/service/service.module.ts");



var GoogleChartService = /** @class */ (function () {
    function GoogleChartService() {
        this.google = google;
    }
    GoogleChartService.prototype.getGoogle = function () {
        return this.google;
    };
    GoogleChartService.ɵfac = function GoogleChartService_Factory(t) { return new (t || GoogleChartService)(); };
    GoogleChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleChartService, factory: GoogleChartService.ɵfac, providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"] });
    return GoogleChartService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _service_module__WEBPACK_IMPORTED_MODULE_1__["ServiceModule"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/google-chart/service/service.module.ts":
/*!********************************************************!*\
  !*** ./src/app/google-chart/service/service.module.ts ***!
  \********************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
    ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return ServiceModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/google-chart/table-chart/table-chart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/google-chart/table-chart/table-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: TableChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableChartComponent", function() { return TableChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/google-chart.service */ "./src/app/google-chart/service/google-chart.service.ts");




var TableChartComponent = /** @class */ (function () {
    function TableChartComponent(gChartService) {
        this.gChartService = gChartService;
        this.gLib = this.gChartService.getGoogle();
        this.gLib.charts.load("current", { packages: ["corechart", "table"] });
        this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    TableChartComponent.prototype.ngOnInit = function () { };
    TableChartComponent.prototype.drawChart = function () {
        var chart = new this.gLib.visualization.Table(document.getElementById("divTableChart"));
        var data = new this.gLib.visualization.DataTable();
        data.addColumn("string", "Year");
        data.addColumn("number", "Sales");
        data.addColumn("number", "Expenses");
        data.addRows([
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540],
        ]);
        var options = {
            title: "Sales Tabular Data",
            width: "100%",
            height: "100%",
        };
        chart.draw(data, options);
    };
    TableChartComponent.ɵfac = function TableChartComponent_Factory(t) { return new (t || TableChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"])); };
    TableChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableChartComponent, selectors: [["app-table-chart"]], decls: 1, vars: 0, consts: [["id", "divTableChart"]], template: function TableChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS1jaGFydC90YWJsZS1jaGFydC90YWJsZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
    return TableChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-table-chart",
                templateUrl: "./table-chart.component.html",
                styleUrls: ["./table-chart.component.css"],
            }]
    }], function () { return [{ type: _service_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gomez\code\angular-data-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map