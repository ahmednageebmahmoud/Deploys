(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-module"],{

/***/ "+egL":
/*!************************************************************************************!*\
  !*** ./src/app/reports/clinet-freight-details/clinet-freight-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClinetFerightDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinetFerightDetailsComponent", function() { return ClinetFerightDetailsComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/export-buttons/export.buttons.component */ "NAu2");
/* harmony import */ var _shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/form-inputs/report-input/report.input.component */ "IwL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");








function ClinetFerightDetailsComponent_tr_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tran_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", tran_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, tran_r2.changedDate, "medium"));
} }
function ClinetFerightDetailsComponent_tr_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tran_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, tran_r3.paymentDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, tran_r3.paymentAmount_dollar, "$"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 9, tran_r3.paymentAmount_dinar, "LYD "));
} }
class ClinetFerightDetailsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activateRouter) {
        super();
        this.service = service;
        this.activateRouter = activateRouter;
        this.freight = {};
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        this.service.seo.updateSEO("freightDetils");
        //Get Detail From The Serer
        this.getFreightDetails();
    }
    /**
     * Get Details
     */
    getFreightDetails() {
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.service.http.getFreightDetailsToClinet(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                this.freight = res.result;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
ClinetFerightDetailsComponent.ɵfac = function ClinetFerightDetailsComponent_Factory(t) { return new (t || ClinetFerightDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ClinetFerightDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClinetFerightDetailsComponent, selectors: [["app-details-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 113, vars: 142, consts: [["id", "details-content", 1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between", "form-group"], [3, "innerText"], ["divId", "details-content"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], [1, "table", "no-borader"], ["colSpan", "3"], [1, "text-center"], ["width", "100", "height", "100", 3, "src"], ["app-report-input", "", 1, "th-35", 3, "titel", "data"], ["app-report-input", "", 3, "titel", "data"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]], template: function ClinetFerightDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](78, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](89, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, ClinetFerightDetailsComponent_tr_100_Template, 6, 5, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, ClinetFerightDetailsComponent_tr_112_Template, 10, 12, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.freightDetils + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.freight.carPicture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.name)("data", ctx.freight.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.phoneNumber)("data", ctx.freight.clinetPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.refranceNumber)("data", ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightCase)("data", ctx.freight.freightCaseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.createdDate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 81, ctx.freight.createdDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carMark)("data", ctx.freight.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carBodyNumber)("data", ctx.freight.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carSize)("data", ctx.freight.carSizeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 83, ctx.freight.carPrice, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightState)("data", ctx.freight.freightStateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.city)("data", ctx.freight.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightPort)("data", ctx.freight.freightPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.arrivalPort)("data", ctx.freight.arrivalPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.arrivalDate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 86, ctx.freight.arrivalDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.auctionFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 88, ctx.freight.auctionFines, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.storeFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](48, 91, ctx.freight.storeFines, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.title)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](50, 94, ctx.freight.titel, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.differenceTitle)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](52, 97, ctx.freight.differenceTitel, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.commissionPurchase)("data", ctx.freight.commissionPurchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.buySource)("data", ctx.freight.buySourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.navigationalWaye)("data", ctx.freight.navigationalWayeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.landCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](59, 100, ctx.freight.landCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.landGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](61, 103, ctx.freight.landGain, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.maritimeCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](63, 106, ctx.freight.maritimeCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.maritimeGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](66, 109, ctx.freight.maritimeGain, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.landFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 112, ctx.freight.landFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.maritimeFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](70, 115, ctx.freight.maritimeFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.swift)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](73, 118, ctx.freight.swift, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.commissionTransfare)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](75, 121, ctx.freight.commissionTransfare, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](78, 124, ctx.freight.totalAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalPaidAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](80, 127, ctx.freight.totalPaidAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalDueAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](82, 130, ctx.freight.totalDueAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](85, 133, ctx.freight.totalAmount_dinar, "LYD "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalPaidAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](87, 136, ctx.freight.totalPaidAmount_dinar, "LYD "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalDueAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](89, 139, ctx.freight.totalDueAmount_dinar, "LYD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.changedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freight.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paymentTransaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paidDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paidAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paidAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freight.paymentsTransaction);
    } }, directives: [src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ExportButtonsComponent"], _shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__["RepportInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".mt-container[_ngcontent-%COMP%]    {\n      height: auto;\n    }\n    .no-borader[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n      border:none !important\n    }\n\n    h6[_ngcontent-%COMP%]{\n      display: inline-block;\n      color:#1b55e2;\n      font-weight: 700;\n    font-size: 13px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    }\n\n    h6[_ngcontent-%COMP%]:after{\n      content:':'\n    }"] });


/***/ }),

/***/ "2FXN":
/*!************************************************************************************!*\
  !*** ./src/app/reports/clinet-freights-report/clinet.freights.report.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClinetFreightsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinetFreightsReportComponent", function() { return ClinetFreightsReportComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/form-inputs/text-input/text.input.component */ "Qcqt");
/* harmony import */ var _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/form-inputs/select-input/select-input.component */ "Dqz8");
/* harmony import */ var _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/form-inputs/date-input/date.input.component */ "mJLk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "kbE0");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "mdKN");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "Ajrf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");
















function ClinetFreightsReportComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 50);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
const _c0 = function (a0) { return { "table-info": a0 }; };
const _c1 = function (a3) { return ["/reports", "freights", "details", a3]; };
function ClinetFreightsReportComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](54, _c0, item_r2.IsSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 22, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 24, item_r2.carPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 27, item_r2.commissionPurchase, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 30, item_r2.landFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 33, item_r2.maritimeFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 36, item_r2.totalAmount_dollar, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 39, item_r2.totalAmount_dinar, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 42, item_r2.totalPaidAmount_dollar, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 45, item_r2.totalPaidAmount_dinar, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 48, item_r2.totalDueAmount_dollar, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](30, 51, item_r2.totalDueAmount_dinar, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](56, _c1, item_r2._id))("title", ctx_r1.service.u.r.details);
} }
class ClinetFreightsReportComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service) {
        super();
        this.service = service;
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
    }
    ngOnInit() {
        this.service.initClinetFreightsFilterForm();
        this.service.seo.updateSEO("freightsReport");
        this.service.getItems();
        this.getEntiries(true);
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            this.skip = 0;
            this.entries = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getClinetFreightsReport(this.skip, this.limit, this.service.form.value).subscribe(res => {
            //Update FOP Properties
            if (res.noMoreOfResult)
                this.fop.paging.disableGetMoreButton = true;
            this.fop.paging.isRequestingToServer = false;
            if (res.isSuccess) {
                this.entries = [...this.entries, ...res.result];
                //Fop 
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
                this.skip += this.limit;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
            this.fop.paging.isRequestingToServer = false;
        }, () => {
            this.fop.paging.isRequestingToServer = false;
        }));
    }
    funTrack(index, entitiy) {
        return entitiy === null || entitiy === void 0 ? void 0 : entitiy._id;
    }
} //End CLass
ClinetFreightsReportComponent.ɵfac = function ClinetFreightsReportComponent_Factory(t) { return new (t || ClinetFreightsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"])); };
ClinetFreightsReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClinetFreightsReportComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 84, vars: 94, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "clinetFreightsTable", 3, "searchText"], ["id", "clinetFreightsTable", 1, "table", "mb-4", "table-hover"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carPrice", 3, "fop", "fieldText"], ["filedName", "commissionPurchase", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "totalAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalAmount_dinar", 3, "fop", "fieldText"], ["filedName", "totalPaidAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalPaidAmount_dinar", 3, "fop", "fieldText"], ["filedName", "totalDueAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalDueAmount_dinar", 3, "fop", "fieldText"], [1, "th-5", 3, "innerText"], [3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [3, "ngClass"], [2, "display", "inline-flex"], [1, "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-print", "fa-1-5x"]], template: function ClinetFreightsReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ClinetFreightsReportComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ClinetFreightsReportComponent_div_23_Template, 1, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "fop-header", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function ClinetFreightsReportComponent_Template_fop_header_searchText_35_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "fop-sort", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "fop-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "fop-sort", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "fop-sort", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "fop-sort", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "fop-sort", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "fop-sort", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, ClinetFreightsReportComponent_tr_79_Template, 34, 58, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](81, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "fop-paging", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function ClinetFreightsReportComponent_Template_fop_paging_getMoreItems_83_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.freightCases)("form", ctx.service.form)("lable", ctx.service.u.r.freightCase)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.buySources)("form", ctx.service.form)("lable", ctx.service.u.r.buySource)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.states)("form", ctx.service.form)("lable", ctx.service.u.r.freightState)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.ports)("form", ctx.service.form)("lable", ctx.service.u.r.freightPort)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.carSizes)("form", ctx.service.form)("lable", ctx.service.u.r.carSize)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.service.ports)("form", ctx.service.form)("lable", ctx.service.u.r.arrivalPort)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.commissionPurchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalPaidAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalPaidAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalDueAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.totalDueAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](80, 82, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](81, 86, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](82, 90, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_7__["SelectInputComponent"], _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_8__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_10__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_11__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], encapsulation: 2 });


/***/ }),

/***/ "6NMO":
/*!**********************************************************************!*\
  !*** ./src/app/reports/freight-details/freight-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: FerightDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FerightDetailsComponent", function() { return FerightDetailsComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/export-buttons/export.buttons.component */ "NAu2");
/* harmony import */ var _shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/form-inputs/report-input/report.input.component */ "IwL1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");








function FerightDetailsComponent_tr_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tran_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", tran_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, tran_r2.changedDate, "medium"));
} }
function FerightDetailsComponent_tr_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tran_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, tran_r3.paymentDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, tran_r3.paymentAmount_dollar, "$"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 9, tran_r3.paymentAmount_dinar, "LYD "));
} }
class FerightDetailsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service, activateRouter) {
        super();
        this.service = service;
        this.activateRouter = activateRouter;
        this.freight = {};
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        this.service.seo.updateSEO("freightDetils");
        //Get Detail From The Serer
        this.getFreightDetails();
    }
    /**
     * Get Details
     */
    getFreightDetails() {
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.service.http.getFreightDetails(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                this.freight = res.result;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
FerightDetailsComponent.ɵfac = function FerightDetailsComponent_Factory(t) { return new (t || FerightDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
FerightDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FerightDetailsComponent, selectors: [["app-details-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 124, vars: 164, consts: [["id", "details-content", 1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between", "form-group"], [3, "innerText"], ["divId", "details-content"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], [1, "table", "no-borader"], ["colSpan", "3"], [1, "text-center"], ["width", "100", "height", "100", 3, "src"], ["app-report-input", "", 1, "th-35", 3, "titel", "data"], ["app-report-input", "", 3, "titel", "data"], ["colSpan", "3", "app-report-input", "", 3, "titel", "data"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]], template: function FerightDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-export-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](77, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](84, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](89, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](94, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](98, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, FerightDetailsComponent_tr_111_Template, 6, 5, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, FerightDetailsComponent_tr_123_Template, 10, 12, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.freightDetils + " " + ctx.service.u.r.number + " #" + ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.freight.carPicture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.name)("data", ctx.freight.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.phoneNumber)("data", ctx.freight.clinetPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.refranceNumber)("data", ctx.freight.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightCase)("data", ctx.freight.freightCaseName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.createdDate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 91, ctx.freight.createdDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carMark)("data", ctx.freight.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carBodyNumber)("data", ctx.freight.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carSize)("data", ctx.freight.carSizeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 93, ctx.freight.carPrice, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightState)("data", ctx.freight.freightStateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.city)("data", ctx.freight.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightPort)("data", ctx.freight.freightPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.arrivalPort)("data", ctx.freight.arrivalPortName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.arrivalDate)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 96, ctx.freight.arrivalDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.auctionFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](45, 98, ctx.freight.auctionFines, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.storeFines)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](48, 101, ctx.freight.storeFines, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.title)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](50, 104, ctx.freight.titel, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.differenceTitle)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](52, 107, ctx.freight.differenceTitel, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.commissionPurchase)("data", ctx.freight.commissionPurchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.buySource)("data", ctx.freight.buySourceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.navigationalWaye)("data", ctx.freight.navigationalWayeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.landCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](59, 110, ctx.freight.landCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.landGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](61, 113, ctx.freight.landGain, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.maritimeCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](63, 116, ctx.freight.maritimeCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.maritimeGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](66, 119, ctx.freight.maritimeGain, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.landFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 122, ctx.freight.landFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.maritimeFreightPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](70, 125, ctx.freight.maritimeFreightPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.swift)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](73, 128, ctx.freight.swift, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.commissionTransfare)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](75, 131, ctx.freight.commissionTransfare, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.freightPublicGain)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](77, 134, ctx.freight.freightPublicGain, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](80, 137, ctx.freight.totalAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalPaidAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](82, 140, ctx.freight.totalPaidAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalDueAmount_dollar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](84, 143, ctx.freight.totalDueAmount_dollar, "$"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](87, 146, ctx.freight.totalAmount_dinar, "LYD "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalPaidAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](89, 149, ctx.freight.totalPaidAmount_dinar, "LYD "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.totalDueAmount_dinar)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](91, 152, ctx.freight.totalDueAmount_dinar, "LYD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.carCost)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](94, 155, ctx.freight.carCost, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.sellPrice)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](96, 158, ctx.freight.sellPrice, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.netProfit)("data", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](98, 161, ctx.freight.netProfit, " "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("titel", ctx.service.u.r.notes)("data", ctx.freight.notes || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.changedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freight.freightCasees);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paymentTransaction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paidDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paidAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.service.u.r.paidAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freight.paymentsTransaction);
    } }, directives: [src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ExportButtonsComponent"], _shared_form_inputs_report_input_report_input_component__WEBPACK_IMPORTED_MODULE_6__["RepportInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".mt-container[_ngcontent-%COMP%]    {\n      height: auto;\n    }\n    .no-borader[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{\n      border:none !important\n    }\n\n    h6[_ngcontent-%COMP%]{\n      display: inline-block;\n      color:#1b55e2;\n      font-weight: 700;\n    font-size: 13px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    }\n\n    h6[_ngcontent-%COMP%]:after{\n      content:':'\n    }"] });


/***/ }),

/***/ "By0b":
/*!**********************************************!*\
  !*** ./src/modules/reports.router.module.ts ***!
  \**********************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _app_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/reports/freight-details/freight-details.component */ "6NMO");
/* harmony import */ var _app_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app/reports/clinet-freight-details/clinet-freight-details.component */ "+egL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/reports/clinet-freights-report/clinet.freights.report.component */ "2FXN");
/* harmony import */ var src_app_reports_containers_report_containers_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/reports/containers-report/containers.report.component */ "ijPm");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/clinet.auth.can.active.service */ "YSHg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");









const ROUTS = [
    { path: 'containers', component: src_app_reports_containers_report_containers_report_component__WEBPACK_IMPORTED_MODULE_4__["ContainersReportComponent"], canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthCanActive"]] },
    { path: 'freights', component: src_app_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_3__["ClinetFreightsReportComponent"], canActivate: [src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["ClinetAuthCanActive"]] },
    { path: 'freights/details/:targetId', component: _app_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_1__["ClinetFerightDetailsComponent"], canActivate: [src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["ClinetAuthCanActive"]] },
    { path: 'freights/fullDetails/:targetId', component: _app_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_0__["FerightDetailsComponent"], canActivate: [src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_5__["AdminAuthCanActive"]] },
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "IOzy":
/*!***************************************!*\
  !*** ./src/modules/reports.module.ts ***!
  \***************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _app_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/reports/clinet-freight-details/clinet-freight-details.component */ "+egL");
/* harmony import */ var src_app_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/reports/clinet-freights-report/clinet.freights.report.component */ "2FXN");
/* harmony import */ var src_app_reports_containers_report_containers_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/reports/containers-report/containers.report.component */ "ijPm");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.inputs.module */ "FcD6");
/* harmony import */ var _reports_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports.router.module */ "By0b");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.module */ "5Uro");
/* harmony import */ var src_app_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/reports/freight-details/freight-details.component */ "6NMO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, providers: [src_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]], imports: [[
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _reports_router_module__WEBPACK_IMPORTED_MODULE_5__["ReportsRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_4__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [src_app_reports_containers_report_containers_report_component__WEBPACK_IMPORTED_MODULE_2__["ContainersReportComponent"],
        src_app_reports_clinet_freights_report_clinet_freights_report_component__WEBPACK_IMPORTED_MODULE_1__["ClinetFreightsReportComponent"],
        _app_reports_clinet_freight_details_clinet_freight_details_component__WEBPACK_IMPORTED_MODULE_0__["ClinetFerightDetailsComponent"],
        src_app_reports_freight_details_freight_details_component__WEBPACK_IMPORTED_MODULE_7__["FerightDetailsComponent"]], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _reports_router_module__WEBPACK_IMPORTED_MODULE_5__["ReportsRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_4__["FormInputsModeul"]] }); })();


/***/ }),

/***/ "ijPm":
/*!**************************************************************************!*\
  !*** ./src/app/reports/containers-report/containers.report.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContainersReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainersReportComponent", function() { return ContainersReportComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/report.service */ "kU/X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/form-inputs/text-input/text.input.component */ "Qcqt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "kbE0");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "mdKN");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "Ajrf");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");













function ContainersReportComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 32);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.service.u.r.loadingData);
} }
function ContainersReportComponent_tbody_52_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "td", 34);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowSpan", item_r2.freights.length)("innerText", item_r2.container.name);
} }
function ContainersReportComponent_tbody_52_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContainersReportComponent_tbody_52_tr_1_td_1_Template, 1, 2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fe_r4 = ctx.$implicit;
    const freightIndex_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", freightIndex_r5 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.navigationalWayeName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.clinetPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.freightPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.arrivalPortName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 11, fe_r4.arrivalDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", fe_r4.releaseStatus);
} }
function ContainersReportComponent_tbody_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContainersReportComponent_tbody_52_tr_1_Template, 13, 13, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "fopSortPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "fopFilterPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](4, 10, item_r2.freights, ctx_r1.fopSearch, ctx_r1.fop), ctx_r1.fop.sort.fieldName, ctx_r1.fop.sort.reverse), ctx_r1.fop.paging.pagingLimt.skip, ctx_r1.fop.paging.pagingLimt.take))("ngForTrackBy", ctx_r1.funTrack);
} }
class ContainersReportComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(service) {
        super();
        this.service = service;
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
    }
    ngOnInit() {
        this.service.initContinersFilterForm();
        this.service.seo.updateSEO("containersReport");
        this.getEntiries(true);
    }
    /**
   * Get My Users
   */
    getEntiries(isReset) {
        if (isReset) {
            this.skip = 0;
            this.entries = [];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.service.http.getContainersReport(this.skip, this.limit, this.service.form.value).subscribe(res => {
            //Update FOP Properties
            if (res.noMoreOfResult)
                this.fop.paging.disableGetMoreButton = true;
            this.fop.paging.isRequestingToServer = false;
            if (res.isSuccess) {
                this.entries = [...this.entries, ...res.result];
                //Fop 
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
                this.skip += this.limit;
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
            this.fop.paging.isRequestingToServer = false;
        }, () => {
            this.fop.paging.isRequestingToServer = false;
        }));
    }
    funTrack(index, entitiy) {
        return entitiy === null || entitiy === void 0 ? void 0 : entitiy._id;
    }
} //End CLass
ContainersReportComponent.ɵfac = function ContainersReportComponent_Factory(t) { return new (t || ContainersReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"])); };
ContainersReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContainersReportComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 57, vars: 47, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "name", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "containerTables", 3, "searchText"], ["id", "containerTables", 1, "table", "mb-4", "table-hover"], ["filedName", "name", 3, "fop", "fieldText"], ["filedName", "navigationalWayeName", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "clinetPhoneNumber", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "arrivalPortName", 3, "fop", "fieldText"], ["filedName", "arrivalDate", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "releaseStatus", 3, "fop", "fieldText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [3, "rowSpan", "innerText", 4, "ngIf"], [3, "rowSpan", "innerText"]], template: function ContainersReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ContainersReportComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ContainersReportComponent_div_14_Template, 1, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "fop-header", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function ContainersReportComponent_Template_fop_header_searchText_26_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "fop-sort", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "fop-sort", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "fop-sort", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "fop-sort", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "fop-sort", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "fop-sort", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "fop-sort", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "fop-sort", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "fop-sort", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "fop-sort", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "fop-sort", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ContainersReportComponent_tbody_52_Template, 5, 14, "tbody", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "fop-paging", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function ContainersReportComponent_Template_fop_paging_getMoreItems_56_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.filterIn + " " + ctx.service.u.r.containers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.service.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.service.form)("lable", ctx.service.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.service.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.service.u.r.containers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.navigationalWaye);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.arrivalDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.service.u.r.releaseStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](53, 35, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](54, 39, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](55, 43, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_6__["TextInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_8__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_9__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_10__["FopPagingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_11__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "kU/X":
/*!****************************************!*\
  !*** ./src/services/report.service.ts ***!
  \****************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/consts/car.sizes.const */ "qB6b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seo.service */ "C2k8");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/http.service */ "H5vj");







class ReportService {
    constructor(u, seo, http) {
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.carSizes = src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_2__["carSizesArray"];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
    }
    /** Init Continers Filter Form */
    initContinersFilterForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
    }
    /** Init Clinet Freights Filter Form */
    initClinetFreightsFilterForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
    }
    /**Get Items To Select From Them */
    getItems(itemName) {
        let itemsNames = itemName ? [itemName] : [
            "freightCases", "buySources", "states", "ports"
        ];
        this.http.getSelectItems(itemsNames).subscribe(res => {
            if (res.isSuccess) {
                itemsNames.forEach(itemName => {
                    this[itemName] = res.result[itemName];
                });
            }
            else {
                _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        });
    }
} //End Class
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=reports-module.js.map