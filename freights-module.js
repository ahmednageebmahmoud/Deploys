(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freights-module"],{

/***/ "1FIX":
/*!*****************************************************************!*\
  !*** ./src/app/freights/edit-freight/edit.freight.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFreightComponent", function() { return EditFreightComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/directives/deopify.directive */ "nTwK");
/* harmony import */ var _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/form-inputs/select-input/select-input.component */ "Dqz8");
/* harmony import */ var _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/form-inputs/text-input/text.input.component */ "Qcqt");
/* harmony import */ var _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/form-inputs/date-input/date.input.component */ "mJLk");
/* harmony import */ var _shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/form-inputs/text-big-input/text.big.input.component */ "TXz5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");















function EditFreightComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 57);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.u.r.loadingData);
} }
class EditFreightComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, http, activateRouter, freightService) {
        super();
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.activateRouter = activateRouter;
        this.freightService = freightService;
        this.titleResourcesKey = "editFreight";
    }
    ngOnInit() {
        this.freightService.initForm();
        this.freightService.form.disable();
        this.seo.updateSEO(this.titleResourcesKey);
        this.freightService.getItems();
        this.freightService.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        this.getFreightToUpdate();
        this.freightService.defaultImageUrl = "/assets/img/car_default_img.jpg";
        this.freightService.isCreate = false;
    }
    /**
     * Get Car Mark To Update
     */
    getFreightToUpdate() {
        this.http.getFreightToUpdate(this.freightService.form.controls._id.value).subscribe(res => {
            if (res.isSuccess) {
                this.freightService.form.setValue(res.result);
                this.freightService.form.enable();
                this.freightService.disapledControls();
                this.freightService.carPicture = {
                    url: res.result.carPicture
                };
            }
            else {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        });
    }
    /**
      * Update
      */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.formSubmitError = true;
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.freightService.formSubmitError = false;
        let formData = new FormData();
        formData.append("values", JSON.stringify(this.freightService.form.getRawValue()));
        formData.append("carPicture", this.freightService.carPicture.file);
        this.freightService.form.disable();
        this.allSubscriptions.push(this.http.updateFreight(formData).subscribe(res => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.freightService.form.enable();
            if (res.isSuccess) {
                this.freightService.carPicture.file = null;
            }
        }, error => {
            this.freightService.form.enable();
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
EditFreightComponent.ɵfac = function EditFreightComponent_Factory(t) { return new (t || EditFreightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_7__["FreightService"])); };
EditFreightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditFreightComponent, selectors: [["app-edit-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 61, vars: 108, consts: [["novalidate", "", "autocomplete", "off", 1, "account-settings-container", "layout-top-spacing", 3, "formGroup", "submit"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "freightService.form"], [1, "form-group", "d-flex", "justify-content-center"], [1, "form-group"], ["deopify", "", 1, "dropify-wrapper", "has-preview", 3, "title", "onSelectFiles"], [1, "dropify-preview", 2, "display", "block"], [1, "dropify-render"], [3, "src"], [1, "dropify-infos"], [1, "dropify-infos-inner"], [1, "dropify-filename"], [1, "file-icon"], [1, "dropify-filename-inner", 3, "innerHtml"], [1, "dropify-infos-message", 3, "innerHtml"], [1, "mt-2"], [1, "flaticon-cloud-upload", "mr-1"], ["app-select-input", "", "fcn", "userId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "cityId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "carPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "landFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "maritimeFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionPurchase", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "swift", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "auctionFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "storeFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titel", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "differenceTitel", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landGain", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "maritimeCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "maritimeGain", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "sellPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "arrivalDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-big-input", "", "fcn", "notes", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "account-settings-footer"], [1, "as-footer-container", "d-flex", "justify-content-end"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function EditFreightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function EditFreightComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelectFiles", function EditFreightComponent_Template_div_onSelectFiles_13_listener($event) { return ctx.freightService.carPicture = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_27_listener() { return ctx.freightService.reloadItems("clinets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_30_listener() { return ctx.freightService.reloadItems("freightCases"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_31_listener() { return ctx.freightService.reloadItems("buySources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_32_listener() { return ctx.freightService.reloadItems("freightState"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_33_listener() { return ctx.freightService.reloadItems("states"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_34_listener() { return ctx.freightService.reloadItems("ports"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_35_listener() { return ctx.freightService.reloadItems("navigationalWaye"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_37_listener() { return ctx.freightService.reloadItems("carSizes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function EditFreightComponent_Template_div_onReloadItems_43_listener() { return ctx.freightService.reloadItems("ports"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 52);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, EditFreightComponent_div_60_Template, 1, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r[ctx.titleResourcesKey], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.clickOrDargAndDrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (ctx.freightService.carPicture == null ? null : ctx.freightService.carPicture.url) || ctx.freightService.defaultImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.freightService.carPicture.file == null ? null : ctx.freightService.carPicture.file.name, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.clickOrDargAndDrop, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.carPicture, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.clinets)("form", ctx.freightService.form)("lable", ctx.u.r.clinet)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carMark)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carBodyNumber)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.freightCases)("form", ctx.freightService.form)("lable", ctx.u.r.freightCase)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.buySources)("form", ctx.freightService.form)("lable", ctx.u.r.buySource)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.states)("form", ctx.freightService.form)("lable", ctx.u.r.freightState)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.cities)("form", ctx.freightService.form)("lable", ctx.u.r.city)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.ports)("form", ctx.freightService.form)("lable", ctx.u.r.freightPort)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.navigationalWayes)("form", ctx.freightService.form)("lable", ctx.u.r.navigationalWaye)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.carSizes)("form", ctx.freightService.form)("lable", ctx.u.r.carSize)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.landFreightPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.maritimeFreightPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.commissionPurchase)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.commissionTransfare)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.swift)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.ports)("form", ctx.freightService.form)("lable", ctx.u.r.arrivalPort)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.auctionFines)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.storeFines)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.title)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.differenceTitle)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.landCost)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.landGain)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.maritimeCost)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.maritimeGain)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.sellPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.arrivalDate)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.refranceNumber)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.notes)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__["DeopifyDirective"], _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__["SelectInputComponent"], _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_11__["TextInputComponent"], _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__["DateInputComponent"], _shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_13__["TextBigInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "62F0":
/*!*****************************************!*\
  !*** ./src/services/freight.service.ts ***!
  \*****************************************/
/*! exports provided: FreightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightService", function() { return FreightService; });
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/consts/car.sizes.const */ "qB6b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom.validators.service */ "QVRC");
/* harmony import */ var src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/enums/car.sizes.enum */ "hLCK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/http.service */ "H5vj");









class FreightService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.clinets = [];
        this.carSizes = src_consts_car_sizes_const__WEBPACK_IMPORTED_MODULE_2__["carSizesArray"];
        this.formSubmitError = false;
        this.isRequestingToServer = false;
        this.carPicture = {};
        this.defaultImageUrl = "/assets/img/car_default_img.jpg";
        /** Deleted Item Event*/
        this.onDeletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.freightsSelected = [];
    }
    /**
     * Close: Back To The Page
     */
    closeModel() {
        this.formSubmitError = false;
        this.form.reset();
        this.router.navigate(['/freights']);
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            navigationalWayeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            carPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            landFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            maritimeFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            commissionPurchase: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            commissionTransfare: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            swift: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            sellPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            auctionFines: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            storeFines: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            titel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            differenceTitel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            landCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            landGain: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            maritimeCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            maritimeGain: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].invalidNumber]),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            carPicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
        this.disapledControls();
        this.form.controls.freightStateId.valueChanges.subscribe(value => { this.loadStateCities(value); this.updateFreightPrices(); });
        this.form.controls.carSizeId.valueChanges.subscribe(value => this.updateFreightPrices());
        this.form.controls.cityId.valueChanges.subscribe(value => this.updateFreightPrices());
        this.formSubmitError = false;
        this.isRequestingToServer = false;
    }
    /**
     * Init Form For Delete
     */
    initDeleteForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.form.disable();
    }
    /** Init Form For Search */
    initFilterForm() {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            clinetName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            carMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            freightCaseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            buySourceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            freightStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            carSizeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            freightPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            navigationalWayeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            arrivalPortId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            carBodyNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            refranceNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.filterForm.controls.freightStateId.valueChanges.subscribe(value => { this.loadStateCities(value); });
    }
    /**Disapled Controls */
    disapledControls() {
        this.form.controls.landFreightPrice.disable();
        this.form.controls.maritimeFreightPrice.disable();
        this.form.controls.refranceNumber.disable();
    }
    /**Get Items To Select From Them */
    getItems(itemName) {
        let itemsNames = itemName ? [itemName] : [
            "clinets", "freightCases", "buySources",
            "states", "ports", "navigationalWayes"
        ];
        this.http.getSelectItems(itemsNames).subscribe(res => {
            if (res.isSuccess) {
                itemsNames.forEach(itemName => {
                    this[itemName] = res.result[itemName];
                });
            }
            else {
                _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].showResponseMessage(res);
            }
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].canRequestError(error);
        });
    }
    //Reload Items
    reloadItems(itemName) {
        this.http.getSelectItems([itemName]).subscribe(res => {
            if (res.isSuccess) {
                this[itemName] = res.result[itemName];
                if (itemName == "states" && this.form.controls.freightStateId.value)
                    this.loadStateCities(this.form.controls.freightStateId.value);
            }
            _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].showResponseMessage(res);
        }, error => {
            _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].canRequestError(error);
        });
    }
    /** Load State Cities */
    loadStateCities(stateId) {
        var _a;
        if (!this.states)
            return;
        this.cities = (_a = this.states.find(m => m._id == stateId)) === null || _a === void 0 ? void 0 : _a.cities;
    }
    /**
     * تحديث سعر الشحن البحرى والبرى بناء على الدولة والمدينة وحجم السيارة
     */
    updateFreightPrices() {
        if (!this.form.controls.carSizeId.value || !this.form.controls.freightStateId.value)
            return;
        let state = this.states.find(st => st._id == this.form.controls.freightStateId.value);
        let city = state.cities.find(ci => ci._id == this.form.controls.cityId.value);
        //سعر الشحن البرى ثابت على المدينة او الولايه كلها انما البحرى فهو على حجم السيارة
        this.form.controls.landFreightPrice.setValue(+(city === null || city === void 0 ? void 0 : city.landFreightPrice) || +state.fullLandFreightPriceToState);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_5__["CarSizesEnum"].small)
            this.form.controls.maritimeFreightPrice.setValue(+state.maritimeFreightPriceToSmallCar);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_5__["CarSizesEnum"].medium)
            this.form.controls.maritimeFreightPrice.setValue(+state.maritimeFreightPriceToMediumCar);
        if (this.form.controls.carSizeId.value == src_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_5__["CarSizesEnum"].big)
            this.form.controls.maritimeFreightPrice.setValue(+state.maritimeFreightPriceToBigCar);
    }
    /**Select Freight */
    selectFreight(item) {
        item.IsSelected = !item.IsSelected;
        if (item.IsSelected) {
            this.freightsSelected.push(item);
        }
        else {
            this.freightsSelected.splice(this.freightsSelected.findIndex(f => f._id == item._id), 1);
        }
    }
} //End Class
FreightService.ɵfac = function FreightService_Factory(t) { return new (t || FreightService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"])); };
FreightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FreightService, factory: FreightService.ɵfac });


/***/ }),

/***/ "JvU1":
/*!*********************************************************************!*\
  !*** ./src/app/freights/delete-freight/delete.freight.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeleteFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFreightComponent", function() { return DeleteFreightComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/form-inputs/text-input/text.input.component */ "Qcqt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");










function DeleteFreightComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
} }
class DeleteFreightComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, freightService, http, activateRouter) {
        super();
        this.u = u;
        this.freightService = freightService;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        this.freightService.initDeleteForm();
        this.freightService.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        //Check If Must Be Get Object From The Server
        if (history.state.deletingRefranceNumber) {
            this.freightService.form.controls.refranceNumber.setValue(history.state.deletingRefranceNumber);
            this.freightService.form.controls.clinetName.setValue(history.state.deletingClinetName);
            history.state.deletingRefranceNumber = null;
            history.state.deletingClinetName = null;
        }
        else {
            //Get From The Serer
            this.getFreightToDelete();
        }
    }
    /**
     * Get Car Mark From Server To Update
     */
    getFreightToDelete() {
        this.freightService.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.getFreightToDelete(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.freightService.isRequestingToServer = false;
            if (res.isSuccess) {
                this.freightService.form.controls.refranceNumber.setValue(res.result.refranceNumber);
                this.freightService.form.controls.clinetName.setValue(res.result.clinetName);
            }
            else
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }, error => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Delete Item
     */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.formSubmitError = true;
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.deleteFreight(this.freightService.form.value)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.freightService.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.freightService.onDeletedItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.freightService.closeModel();
            }
        }, error => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
DeleteFreightComponent.ɵfac = function DeleteFreightComponent_Factory(t) { return new (t || DeleteFreightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_4__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
DeleteFreightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteFreightComponent, selectors: [["app-delete-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 15, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function DeleteFreightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function DeleteFreightComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DeleteFreightComponent_div_13_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeleteFreightComponent_Template_button_click_14_listener() { return ctx.freightService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.areYouSureToDeleteThe, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.clinetName)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.refranceNumber)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.yesDelete, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "W/pb":
/*!****************************************!*\
  !*** ./src/modules/freights.module.ts ***!
  \****************************************/
/*! exports provided: FreightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsModule", function() { return FreightsModule; });
/* harmony import */ var _form_inputs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.inputs.module */ "FcD6");
/* harmony import */ var _app_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/freights/edit-freight/edit.freight.component */ "1FIX");
/* harmony import */ var _app_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/freights/delete-freight/delete.freight.component */ "JvU1");
/* harmony import */ var _app_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/freights/create-freight/create.freight.component */ "gWRF");
/* harmony import */ var _app_freights_freights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app/freights/freights.component */ "uqrq");
/* harmony import */ var _services_freight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/freight.service */ "62F0");
/* harmony import */ var _freights_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./freights.router.module */ "ovms");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ "5Uro");
/* harmony import */ var src_app_freights_add_freights_to_container_add_freights_to_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/freights/add-freights-to-container/add.freights.to.container.component */ "zhDG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");










class FreightsModule {
}
FreightsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FreightsModule });
FreightsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function FreightsModule_Factory(t) { return new (t || FreightsModule)(); }, providers: [_services_freight_service__WEBPACK_IMPORTED_MODULE_5__["FreightService"]], imports: [[
            _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _freights_router_module__WEBPACK_IMPORTED_MODULE_6__["FreightsRoutingModule"],
            _form_inputs_module__WEBPACK_IMPORTED_MODULE_0__["FormInputsModeul"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FreightsModule, { declarations: [_app_freights_freights_component__WEBPACK_IMPORTED_MODULE_4__["FreightsComponent"],
        _app_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_3__["CreateFreightComponent"],
        _app_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_2__["DeleteFreightComponent"],
        _app_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_1__["EditFreightComponent"],
        src_app_freights_add_freights_to_container_add_freights_to_container_component__WEBPACK_IMPORTED_MODULE_8__["AddFreightsToContainerComponent"]], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _freights_router_module__WEBPACK_IMPORTED_MODULE_6__["FreightsRoutingModule"],
        _form_inputs_module__WEBPACK_IMPORTED_MODULE_0__["FormInputsModeul"]] }); })();


/***/ }),

/***/ "gWRF":
/*!*********************************************************************!*\
  !*** ./src/app/freights/create-freight/create.freight.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateFreightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFreightComponent", function() { return CreateFreightComponent; });
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared.components */ "iY+S");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/seo.service */ "C2k8");
/* harmony import */ var _services_freight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/freight.service */ "62F0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/sweet.alert.service */ "QZpK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/directives/deopify.directive */ "nTwK");
/* harmony import */ var _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/form-inputs/select-input/select-input.component */ "Dqz8");
/* harmony import */ var _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/form-inputs/text-input/text.input.component */ "Qcqt");
/* harmony import */ var _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/form-inputs/date-input/date.input.component */ "mJLk");
/* harmony import */ var _shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/form-inputs/text-big-input/text.big.input.component */ "TXz5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "SVse");















function CreateFreightComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 57);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.u.r.loadingData);
} }
class CreateFreightComponent extends _shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, freightService, router, sweetAlertService) {
        super();
        this.u = u;
        this.seo = seo;
        this.freightService = freightService;
        this.router = router;
        this.sweetAlertService = sweetAlertService;
        this.titleResourcesKey = "createANewFreight";
    }
    ngOnInit() {
        this.seo.updateSEO(this.titleResourcesKey);
        this.freightService.getItems();
        this.freightService.initForm();
        this.freightService.defaultImageUrl = "/assets/img/car_default_img.jpg";
        this.freightService.isCreate = false;
    }
    /**
      * Create New Item
      */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.formSubmitError = true;
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.freightService.formSubmitError = false;
        let formData = new FormData();
        formData.append("values", JSON.stringify(this.freightService.form.getRawValue()));
        formData.append("carPicture", this.freightService.carPicture.file);
        this.freightService.form.disable();
        this.allSubscriptions.push(this.freightService.http.createNewFreight(formData)
            .subscribe(res => {
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                this.freightService.form.reset();
                this.freightService.isRequestingToServer = false;
                this.freightService.form.enable();
                this.freightService.disapledControls();
                this.sweetAlertService.confirm(this.u.r.doYouWantEditCreatedItem, this.u.r.goToEdit, this.u.r.createNew).then(() => {
                    this.router.navigate(['/freights', 'edit', res.result._id]);
                });
            }
        }, error => {
            this.freightService.form.enable();
            this.freightService.isRequestingToServer = false;
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
CreateFreightComponent.ɵfac = function CreateFreightComponent_Factory(t) { return new (t || CreateFreightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_freight_service__WEBPACK_IMPORTED_MODULE_5__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_7__["SweetAlertService"])); };
CreateFreightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateFreightComponent, selectors: [["app-create-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 61, vars: 108, consts: [["novalidate", "", "autocomplete", "off", 1, "account-settings-container", "layout-top-spacing", 3, "formGroup", "submit"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "freightService.form"], [1, "form-group", "d-flex", "justify-content-center"], [1, "form-group"], ["deopify", "", 1, "dropify-wrapper", "has-preview", 3, "title", "onSelectFiles"], [1, "dropify-preview", 2, "display", "block"], [1, "dropify-render"], [3, "src"], [1, "dropify-infos"], [1, "dropify-infos-inner"], [1, "dropify-filename"], [1, "file-icon"], [1, "dropify-filename-inner", 3, "innerHtml"], [1, "dropify-infos-message", 3, "innerHtml"], [1, "mt-2"], [1, "flaticon-cloud-upload", "mr-1"], ["app-select-input", "", "fcn", "userId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "cityId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "carPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "landFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "maritimeFreightPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionPurchase", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "commissionTransfare", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "swift", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], ["app-text-input", "", "fcn", "auctionFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "storeFines", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "titel", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "differenceTitel", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "landGain", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "maritimeCost", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "maritimeGain", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "sellPrice", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-date-input", "", "fcn", "arrivalDate", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-6", "col-md-4", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], ["app-text-big-input", "", "fcn", "notes", 1, "col-sm-12", "mb-6", "form-group", 3, "form", "lable", "formSubmitError"], [1, "account-settings-footer"], [1, "as-footer-container", "d-flex", "justify-content-end"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function CreateFreightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CreateFreightComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelectFiles", function CreateFreightComponent_Template_div_onSelectFiles_13_listener($event) { return ctx.freightService.carPicture = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_27_listener() { return ctx.freightService.reloadItems("clinets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_30_listener() { return ctx.freightService.reloadItems("freightCases"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_31_listener() { return ctx.freightService.reloadItems("buySources"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_32_listener() { return ctx.freightService.reloadItems("freightState"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_33_listener() { return ctx.freightService.reloadItems("states"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_34_listener() { return ctx.freightService.reloadItems("ports"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_35_listener() { return ctx.freightService.reloadItems("navigationalWaye"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_37_listener() { return ctx.freightService.reloadItems("carSizes"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onReloadItems", function CreateFreightComponent_Template_div_onReloadItems_43_listener() { return ctx.freightService.reloadItems("ports"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 52);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, CreateFreightComponent_div_60_Template, 1, 1, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r[ctx.titleResourcesKey], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.clickOrDargAndDrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (ctx.freightService.carPicture == null ? null : ctx.freightService.carPicture.url) || ctx.freightService.defaultImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.freightService.carPicture.file == null ? null : ctx.freightService.carPicture.file.name, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.clickOrDargAndDrop, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.carPicture, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.clinets)("form", ctx.freightService.form)("lable", ctx.u.r.clinet)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carMark)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carBodyNumber)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.freightCases)("form", ctx.freightService.form)("lable", ctx.u.r.freightCase)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.buySources)("form", ctx.freightService.form)("lable", ctx.u.r.buySource)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.states)("form", ctx.freightService.form)("lable", ctx.u.r.freightState)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.cities)("form", ctx.freightService.form)("lable", ctx.u.r.city)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.ports)("form", ctx.freightService.form)("lable", ctx.u.r.freightPort)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.navigationalWayes)("form", ctx.freightService.form)("lable", ctx.u.r.navigationalWaye)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.carPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.carSizes)("form", ctx.freightService.form)("lable", ctx.u.r.carSize)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.landFreightPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.maritimeFreightPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.commissionPurchase)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.commissionTransfare)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.swift)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("list", ctx.freightService.ports)("form", ctx.freightService.form)("lable", ctx.u.r.arrivalPort)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.auctionFines)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.storeFines)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.title)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.differenceTitle)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.landCost)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.landGain)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.maritimeCost)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.maritimeGain)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.sellPrice)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.arrivalDate)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.refranceNumber)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", ctx.freightService.form)("lable", ctx.u.r.notes)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__["DeopifyDirective"], _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__["SelectInputComponent"], _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_11__["TextInputComponent"], _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_12__["DateInputComponent"], _shared_form_inputs_text_big_input_text_big_input_component__WEBPACK_IMPORTED_MODULE_13__["TextBigInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "ovms":
/*!***********************************************!*\
  !*** ./src/modules/freights.router.module.ts ***!
  \***********************************************/
/*! exports provided: FreightsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsRoutingModule", function() { return FreightsRoutingModule; });
/* harmony import */ var _app_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/freights/edit-freight/edit.freight.component */ "1FIX");
/* harmony import */ var _app_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/freights/delete-freight/delete.freight.component */ "JvU1");
/* harmony import */ var _app_freights_freights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../app/freights/freights.component */ "uqrq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/freights/create-freight/create.freight.component */ "gWRF");
/* harmony import */ var src_app_freights_add_freights_to_container_add_freights_to_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/freights/add-freights-to-container/add.freights.to.container.component */ "zhDG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");








const ROUTS = [
    {
        path: '', component: _app_freights_freights_component__WEBPACK_IMPORTED_MODULE_2__["FreightsComponent"],
        children: [
            {
                path: "delete/:targetId",
                component: _app_freights_delete_freight_delete_freight_component__WEBPACK_IMPORTED_MODULE_1__["DeleteFreightComponent"],
            },
            {
                path: "addToContainer",
                component: src_app_freights_add_freights_to_container_add_freights_to_container_component__WEBPACK_IMPORTED_MODULE_5__["AddFreightsToContainerComponent"],
            }
        ]
    },
    { path: 'create', component: _app_freights_create_freight_create_freight_component__WEBPACK_IMPORTED_MODULE_4__["CreateFreightComponent"] },
    { path: 'edit/:targetId', component: _app_freights_edit_freight_edit_freight_component__WEBPACK_IMPORTED_MODULE_0__["EditFreightComponent"] },
];
class FreightsRoutingModule {
}
FreightsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FreightsRoutingModule });
FreightsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function FreightsRoutingModule_Factory(t) { return new (t || FreightsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FreightsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "uqrq":
/*!************************************************!*\
  !*** ./src/app/freights/freights.component.ts ***!
  \************************************************/
/*! exports provided: FreightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreightsComponent", function() { return FreightsComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/form-inputs/text-input/text.input.component */ "Qcqt");
/* harmony import */ var _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/form-inputs/select-input/select-input.component */ "Dqz8");
/* harmony import */ var _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/form-inputs/date-input/date.input.component */ "mJLk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/fop/fop-header/fop-header.component */ "kbE0");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/fop/fop-sort/fop-sort.component */ "mdKN");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/fop/fop-paging/fop.paging.component */ "Ajrf");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");



















function FreightsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 51);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx_r0.u.r.loadingData);
} }
function FreightsComponent_tr_81_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 61);
} }
const _c0 = function (a2) { return ["/financialTransfers", "payAmount", a2]; };
function FreightsComponent_tr_81_div_29_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, item_r2.financialTransferId))("title", ctx_r5.u.r.paymentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.u.r.paymentAmount, " ");
} }
const _c1 = function (a2) { return ["/freights", "edit", a2]; };
function FreightsComponent_tr_81_div_29_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, item_r2._id))("title", ctx_r6.u.r.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.u.r.edit, " ");
} }
const _c2 = function (a2) { return ["/freights", "delete", a2]; };
const _c3 = function (a0, a1) { return { deletingRefranceNumber: a0, deletingClinetName: a1 }; };
function FreightsComponent_tr_81_div_29_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c2, item_r2._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c3, item_r2.refranceNumber, item_r2.clinetName))("title", ctx_r7.u.r.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.u.r.delete, " ");
} }
const _c4 = function (a3) { return ["/reports", "freights", "fullDetails", a3]; };
const _c5 = function (a2) { return ["/financialTransfers", "details", a2]; };
function FreightsComponent_tr_81_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "circle", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "circle", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "circle", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FreightsComponent_tr_81_div_29_a_13_Template, 3, 5, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FreightsComponent_tr_81_div_29_a_14_Template, 3, 5, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FreightsComponent_tr_81_div_29_a_15_Template, 3, 9, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c4, item_r2._id))("title", ctx_r4.u.r.fullDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.u.r.fullDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c5, item_r2.financialTransferId))("title", ctx_r4.u.r.transferDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.u.r.transferDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
} }
const _c6 = function (a0) { return { "table-info": a0 }; };
function FreightsComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 52);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FreightsComponent_tr_81_Template_td_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const item_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.freightService.selectFreight(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FreightsComponent_tr_81_Template_input_ngModelChange_24_listener($event) { const item_r2 = ctx.$implicit; return item_r2.IsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, FreightsComponent_tr_81_div_28_Template, 1, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, FreightsComponent_tr_81_div_29_Template, 16, 13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c6, item_r2.IsSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.clinetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 22, item_r2.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.refranceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carMark);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carBodyNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightCaseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.buySourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightStateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.freightPortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.carSizeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 24, item_r2.landFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 27, item_r2.maritimeFreightPrice, " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.commissionPurchase);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalAmount_dollar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.totalAmount_dinar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r2.containerName || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r2.IsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r2.IsSelected ? ctx_r1.u.r.unSelect : ctx_r1.u.r.select, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.actionDisapled);
} }
const _c7 = function () { return ["/freights", "addToContainer"]; };
class FreightsComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, freightService, http) {
        super();
        this.u = u;
        this.seo = seo;
        this.freightService = freightService;
        this.http = http;
        /**
         * Page Target
         */
        this.skip = 0;
        this.limit = 50;
        this.entries = [];
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"]();
    }
    ngOnInit() {
        this.freightService.initFilterForm();
        this.seo.updateSEO("freights");
        this.getEntiries(true);
        this.freightService.freightsSelected = [];
        this.freightService.getItems();
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.freightService.onDeletedItem.subscribe(deletedItemId => {
            let deletedIndex = this.entries.findIndex(ent => ent._id == deletedItemId);
            if (deletedIndex >= 0) {
                this.entries.splice(deletedIndex, 1);
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__["FOPModel"](this.fop.fieldNames, this.entries.length);
            }
        }));
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
        this.allSubscriptions.push(this.http.getFreights(this.skip, this.limit, this.freightService.filterForm.value).subscribe(res => {
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
FreightsComponent.ɵfac = function FreightsComponent_Factory(t) { return new (t || FreightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"])); };
FreightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FreightsComponent, selectors: [["app-freight"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 87, vars: 100, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "row"], [1, "col-xl-12", "col-md-12", "col-sm-12", "col-12"], [3, "innerText"], [1, "widget-content", "widget-content-area"], ["novalidate", "", 3, "formGroup", "submit"], ["app-text-input", "", "fcn", "clinetName", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "refranceNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carMark", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-text-input", "", "fcn", "carBodyNumber", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], ["app-select-input", "", "fcn", "freightCaseId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "buySourceId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "freightStateId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "freightPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "navigationalWayeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "carSizeId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-select-input", "", "fcn", "arrivalPortId", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "list", "form", "lable", "isNoReload"], ["app-date-input", "", "fcn", "createdDate", 1, "col-sm-4", "col-md-3", "mb-6", "form-group", 3, "form", "lable"], [1, "form-group", "mb-2", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-lg", "btn-secondary", "mb-3", "mr-3", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], ["type", "reset", "type", "button", 1, "btn", "btn-warning", "btn-lg", "mb-3", "mr-3", 3, "innerText", "disabled"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-outline-dark", "m-2", 3, "routerLink", "innerText"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "allFreights", 3, "se`archText"], ["id", "allFreights", 1, "table", "mb-4", "table-hover"], ["filedName", "clinetName", 3, "fop", "fieldText"], ["filedName", "createdDate", 3, "fop", "fieldText"], ["filedName", "refranceNumber", 3, "fop", "fieldText"], ["filedName", "carMark", 3, "fop", "fieldText"], ["filedName", "carBodyNumber", 3, "fop", "fieldText"], ["filedName", "freightCaseName", 3, "fop", "fieldText"], ["filedName", "buySourceName", 3, "fop", "fieldText"], ["filedName", "freightStateName", 3, "fop", "fieldText"], ["filedName", "freightPortName", 3, "fop", "fieldText"], ["filedName", "carPrice", 3, "fop", "fieldText"], ["filedName", "carSizeName", 3, "fop", "fieldText"], ["filedName", "landFreightPrice", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPrice", 3, "fop", "fieldText"], ["filedName", "commissionPurchase", 3, "fop", "fieldText"], ["filedName", "totalAmount_dollar", 3, "fop", "fieldText"], ["filedName", "totalAmount_dinar", 3, "fop", "fieldText"], ["filedName", "containerName", 3, "fop", "fieldText"], [1, "th-5", 3, "innerText"], [3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"], [3, "ngClass"], [1, "cursor-pointer", 3, "click"], [1, "n-chk"], [1, "new-control", "new-checkbox", "checkbox-outline-default"], ["type", "checkbox", "disabled", "", 1, "new-control-input", 3, "ngModel", "ngModelChange"], [1, "new-control-indicator"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], ["class", "dropdown dropup custom-dropdown-icon    ", 4, "ngIf"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"], [1, "dropdown", "dropup", "custom-dropdown-icon"], ["href", "#", "role", "button", "id", "dropdownMenuLink-3", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-more-vertical"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "19", "r", "1"], ["aria-labelledby", "dropdownMenuLink-3", 1, "dropdown-menu", "dropdown-menu-right", 2, "will-change", "transform"], [1, "dropdown-item", "mr-2", 3, "routerLink", "title"], [1, "fas", "fa-print", "fa-1-5x"], ["class", "dropdown-item mr-2", 3, "routerLink", "title", 4, "ngIf"], ["class", "dropdown-item mr-2", 3, "routerLink", "state", "title", 4, "ngIf"], [1, "fas", "fa-hand-holding-usd", "fa-1-5x", "jumb-animation"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"], [1, "dropdown-item", "mr-2", 3, "routerLink", "state", "title"], [1, "far", "fa-trash-alt", "fa-1-5x", "jumb-animation"]], template: function FreightsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function FreightsComponent_Template_form_submit_8_listener() { return ctx.getEntiries(true); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, FreightsComponent_div_25_Template, 1, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "fop-header", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("se`archText", function FreightsComponent_Template_fop_header_se_archText_39_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "fop-sort", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "fop-sort", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "fop-sort", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "fop-sort", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fop-sort", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "fop-sort", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "fop-sort", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "fop-sort", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "fop-sort", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "fop-sort", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "fop-sort", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "fop-sort", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "fop-sort", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "fop-sort", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "fop-sort", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "fop-sort", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "fop-sort", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "th", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, FreightsComponent_tr_81_Template, 30, 32, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "fop-paging", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function FreightsComponent_Template_fop_paging_getMoreItems_85_listener() { return ctx.getEntiries(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.filterIn + " " + ctx.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.freightService.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.clinetName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.freightCases)("form", ctx.freightService.filterForm)("lable", ctx.u.r.freightCase)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.buySources)("form", ctx.freightService.filterForm)("lable", ctx.u.r.buySource)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.states)("form", ctx.freightService.filterForm)("lable", ctx.u.r.freightState)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.ports)("form", ctx.freightService.filterForm)("lable", ctx.u.r.freightPort)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.navigationalWayes)("form", ctx.freightService.filterForm)("lable", ctx.u.r.navigationalWaye)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.carSizes)("form", ctx.freightService.filterForm)("lable", ctx.u.r.carSize)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.freightService.ports)("form", ctx.freightService.filterForm)("lable", ctx.u.r.arrivalPort)("isNoReload", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.freightService.filterForm)("lable", ctx.u.r.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.search, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.cancel)("disabled", ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.freights);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](99, _c7))("innerText", ctx.u.r.addFreightsSelectedToContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.clinet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.trnasactionDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.refranceNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carMark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carBodyNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.freightCase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.buySource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.freightState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.freightPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.carSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.maritimeFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.commissionPurchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.totalAmount_dollar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.totalAmount_dinar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.container);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.selectForAddToContainer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](82, 87, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](83, 91, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](84, 95, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _shared_form_inputs_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_9__["TextInputComponent"], _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_10__["SelectInputComponent"], _shared_form_inputs_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_11__["DateInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_14__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_15__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_16__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_17__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FopFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CurrencyPipe"]], encapsulation: 2 });


/***/ }),

/***/ "zhDG":
/*!*******************************************************************************************!*\
  !*** ./src/app/freights/add-freights-to-container/add.freights.to.container.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddFreightsToContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFreightsToContainerComponent", function() { return AddFreightsToContainerComponent; });
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/freight.service */ "62F0");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/form-inputs/select-input/select-input.component */ "Dqz8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");












function AddFreightsToContainerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 13);
} }
class AddFreightsToContainerComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__["SharedComponents"] {
    constructor(u, freightService, http, activateRouter) {
        super();
        this.u = u;
        this.freightService = freightService;
        this.http = http;
        this.activateRouter = activateRouter;
    }
    ngOnInit() {
        if (!this.freightService.freightsSelected.length) {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage({
                responseType: src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_0__["ResponseTypeEnum"].error,
                message: this.u.r.youMustSelectFreightsFirst
            });
            this.freightService.closeModel();
        }
        this.freightService.getItems("containers");
        this.freightService.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            containerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    /**
     * Delete Item
     */
    onSubmit() {
        if (this.freightService.form.invalid) {
            this.freightService.formSubmitError = true;
            return;
        }
        this.freightService.isRequestingToServer = true;
        this.allSubscriptions.push(this.freightService.http.moveFreightsToContainer(this.freightService.form.controls.containerId.value, this.freightService.freightsSelected.map(f => f._id))
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage(res);
            this.freightService.isRequestingToServer = false;
            if (res.isSuccess) {
                let containerName = this.freightService.containers.find(c => c._id == this.freightService.form.controls.containerId.value).name;
                this.freightService.freightsSelected.forEach(fe => {
                    fe.IsSelected = false;
                    fe.containerName = containerName;
                });
                this.freightService.freightsSelected = [];
                //Back To Component
                this.freightService.closeModel();
            }
        }, error => {
            this.freightService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
AddFreightsToContainerComponent.ɵfac = function AddFreightsToContainerComponent_Factory(t) { return new (t || AddFreightsToContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_freight_service__WEBPACK_IMPORTED_MODULE_6__["FreightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
AddFreightsToContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddFreightsToContainerComponent, selectors: [["app-add-freights-to-container"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 12, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], ["app-select-input", "", "fcn", "containerId", 1, "form-group", "col", 3, "list", "form", "lable", "formSubmitError", "onReloadItems"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function AddFreightsToContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function AddFreightsToContainerComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onReloadItems", function AddFreightsToContainerComponent_Template_div_onReloadItems_6_listener() { return ctx.freightService.reloadItems("containers"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AddFreightsToContainerComponent_div_10_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddFreightsToContainerComponent_Template_button_click_11_listener() { return ctx.freightService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("form-submited", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.freightService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("list", ctx.freightService.containers)("form", ctx.freightService.form)("lable", ctx.u.r.selectTheContainerYouWnatMove + " " + ctx.freightService.freightsSelected.length + " " + ctx.u.r.freightsToIt)("formSubmitError", ctx.freightService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.freightService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_form_inputs_select_input_select_input_component__WEBPACK_IMPORTED_MODULE_9__["SelectInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=freights-module.js.map