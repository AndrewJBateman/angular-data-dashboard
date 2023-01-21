"use strict";
(self["webpackChunkangular_data_dashboard"] = self["webpackChunkangular_data_dashboard"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-chart/line-chart/line-chart.component */ 9095);
/* harmony import */ var _google_chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/pie-chart/pie-chart.component */ 9916);
/* harmony import */ var _google_chart_table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-chart/table-chart/table-chart.component */ 3387);




class AppComponent {
  constructor() {
    this.title = "angular-data-dashboard";
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 12,
  vars: 0,
  consts: [[1, "container"], [1, "header"], [1, "row"], [1, "col-7"], [1, "col-5"], [1, "col-12"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Angular Sales Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-line-chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-pie-chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2)(10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-table-chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_google_chart_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_0__.LineChartComponent, _google_chart_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__.PieChartComponent, _google_chart_table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_2__.TableChartComponent],
  styles: [".header[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 20px;\n    font-family: serif;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart/google-chart.module */ 1648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_1__.GoogleChartModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _google_chart_google_chart_module__WEBPACK_IMPORTED_MODULE_1__.GoogleChartModule]
  });
})();

/***/ }),

/***/ 1648:
/*!*****************************************************!*\
  !*** ./src/app/google-chart/google-chart.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleChartModule": () => (/* binding */ GoogleChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/service.module */ 9990);
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart/line-chart.component */ 9095);
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ 9916);
/* harmony import */ var _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-chart/table-chart.component */ 3387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class GoogleChartModule {}

GoogleChartModule.ɵfac = function GoogleChartModule_Factory(t) {
  return new (t || GoogleChartModule)();
};

GoogleChartModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: GoogleChartModule
});
GoogleChartModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _service_service_module__WEBPACK_IMPORTED_MODULE_0__.ServiceModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GoogleChartModule, {
    declarations: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__.LineChartComponent, _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent, _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_3__.TableChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _service_service_module__WEBPACK_IMPORTED_MODULE_0__.ServiceModule],
    exports: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_1__.LineChartComponent, _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent, _table_chart_table_chart_component__WEBPACK_IMPORTED_MODULE_3__.TableChartComponent]
  });
})();

/***/ }),

/***/ 9095:
/*!*****************************************************************!*\
  !*** ./src/app/google-chart/line-chart/line-chart.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineChartComponent": () => (/* binding */ LineChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/google-chart.service */ 4340);


class LineChartComponent {
  constructor(gChartService) {
    this.gChartService = gChartService;
    this.gLib = this.gChartService.getGoogle(); // Load the Visualization API and the controls package.

    this.gLib.charts.load("current", {
      packages: ["corechart", "table"]
    }); // Set a callback to run when the Google Visualization API is loaded.

    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {} // method using the Google Charts library using the gLib variable
  // create a new chart using the LineChart method, passing in the container div to show the line chart.


  drawChart() {
    const data = this.gLib.visualization.arrayToDataTable([["Year", "Sales", "Expenses"], ["2004", 1000, 400], ["2005", 1170, 460], ["2006", 660, 1120], ["2007", 1030, 540]]);
    const options = {
      title: "Company Performance",
      curveType: "function",
      legend: {
        position: "bottom"
      }
    };
    const chart = new this.gLib.visualization.LineChart(document.getElementById("divLineChart"));
    chart.draw(data, options);
  }

}

LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
  return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_0__.GoogleChartService));
};

LineChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LineChartComponent,
  selectors: [["app-line-chart"]],
  decls: 1,
  vars: 0,
  consts: [["id", "divLineChart"]],
  template: function LineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9916:
/*!***************************************************************!*\
  !*** ./src/app/google-chart/pie-chart/pie-chart.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartComponent": () => (/* binding */ PieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/google-chart.service */ 4340);


class PieChartComponent {
  constructor(gChartService) {
    this.gChartService = gChartService;
    this.gLib = this.gChartService.getGoogle(); // Load the Visualization API and the controls package.

    this.gLib.charts.load("current", {
      packages: ["corechart", "table"]
    }); // Set a callback to run when the Google Visualization API is loaded.

    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {}

  drawChart() {
    const chart = new this.gLib.visualization.PieChart(document.getElementById("divPieChart"));
    const data = new this.gLib.visualization.DataTable();
    data.addColumn("string", "Accessories");
    data.addColumn("number", "Quantity");
    data.addRows([["Computers", 3], ["Hard Drives", 6], ["Printers", 4], ["Monitors", 5], ["RAM", 2]]);
    const options = {
      title: "Sales Info"
    };
    chart.draw(data, options);
  }

}

PieChartComponent.ɵfac = function PieChartComponent_Factory(t) {
  return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_0__.GoogleChartService));
};

PieChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PieChartComponent,
  selectors: [["app-pie-chart"]],
  decls: 1,
  vars: 0,
  consts: [["id", "divPieChart"]],
  template: function PieChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["#divPieChart[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ29vZ2xlLWNoYXJ0L3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdlBpZUNoYXJ0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4340:
/*!**************************************************************!*\
  !*** ./src/app/google-chart/service/google-chart.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleChartService": () => (/* binding */ GoogleChartService)
/* harmony export */ });
/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.module */ 9990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class GoogleChartService {
  constructor() {
    this.google = google;
  }

  getGoogle() {
    return this.google;
  }

}

GoogleChartService.ɵfac = function GoogleChartService_Factory(t) {
  return new (t || GoogleChartService)();
};

GoogleChartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GoogleChartService,
  factory: GoogleChartService.ɵfac,
  providedIn: _service_module__WEBPACK_IMPORTED_MODULE_0__.ServiceModule
});

/***/ }),

/***/ 9990:
/*!********************************************************!*\
  !*** ./src/app/google-chart/service/service.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceModule": () => (/* binding */ ServiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ServiceModule {}

ServiceModule.ɵfac = function ServiceModule_Factory(t) {
  return new (t || ServiceModule)();
};

ServiceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ServiceModule
});
ServiceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 3387:
/*!*******************************************************************!*\
  !*** ./src/app/google-chart/table-chart/table-chart.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableChartComponent": () => (/* binding */ TableChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_google_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/google-chart.service */ 4340);


class TableChartComponent {
  constructor(gChartService) {
    this.gChartService = gChartService;
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", {
      packages: ["corechart", "table"]
    });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {}

  drawChart() {
    const chart = new this.gLib.visualization.Table(document.getElementById("divTableChart"));
    const data = new this.gLib.visualization.DataTable();
    data.addColumn("string", "Year");
    data.addColumn("number", "Sales");
    data.addColumn("number", "Expenses");
    data.addRows([["2004", 1000, 400], ["2005", 1170, 460], ["2006", 660, 1120], ["2007", 1030, 540]]);
    const options = {
      title: "Sales Tabular Data",
      width: "100%",
      height: "100%"
    };
    chart.draw(data, options);
  }

}

TableChartComponent.ɵfac = function TableChartComponent_Factory(t) {
  return new (t || TableChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_google_chart_service__WEBPACK_IMPORTED_MODULE_0__.GoogleChartService));
};

TableChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TableChartComponent,
  selectors: [["app-table-chart"]],
  decls: 1,
  vars: 0,
  consts: [["id", "divTableChart"]],
  template: function TableChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map