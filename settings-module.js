(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-module"],{

/***/ "4pob":
/*!***********************************************************************!*\
  !*** ./src/app/settings/general-setting/general.setting.component.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingComponent", function() { return GeneralSettingComponent; });
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/http/http.service */ "H5vj");
/* harmony import */ var src_services_general_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/general.setting.service */ "WJzp");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "kbE0");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "mdKN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "Ajrf");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");















function GeneralSettingComponent_tr_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 20);
} }
const _c0 = function (a1, a3) { return ["/setting", a1, "edit", a3]; };
const _c1 = function (a0) { return { editingItemName: a0 }; };
function GeneralSettingComponent_tr_20_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, ctx_r3.gsService.currentPageTargetName, item_r1._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, item_r1.name))("title", ctx_r3.u.r.edit);
} }
const _c2 = function (a1, a3) { return ["/setting", a1, "delete", a3]; };
const _c3 = function (a0) { return { deletingItemName: a0 }; };
function GeneralSettingComponent_tr_20_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c2, ctx_r4.gsService.currentPageTargetName, item_r1._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c3, item_r1.name))("title", ctx_r4.u.r.delete);
} }
function GeneralSettingComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, GeneralSettingComponent_tr_20_div_3_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GeneralSettingComponent_tr_20_a_4_Template, 2, 8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GeneralSettingComponent_tr_20_a_5_Template, 2, 8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", item_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r1.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r1.actionDisapled);
} }
const _c4 = function (a1) { return ["/setting", a1, "create"]; };
/**
 * This a general controller
 *
 */
class GeneralSettingComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__["SharedComponents"] {
    constructor(u, activRouter, seo, http, gsService) {
        super();
        this.u = u;
        this.activRouter = activRouter;
        this.seo = seo;
        this.http = http;
        this.gsService = gsService;
        /**
         * Page Target
         */
        this.skip = 0;
        this.limit = 50;
        this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"]();
    }
    ngOnInit() {
        //Listener On Parems
        this.allSubscriptions.push(this.activRouter.params.subscribe(parms => {
            this.gsService.currentPageTargetName = parms.pageTargetName;
            this.seo.updateSEO(this.gsService.currentPageTargetName);
            this.entries = [];
            this.skip = 0;
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"]();
            this.getEntiries();
        }));
        //Listener On Create New Item Event
        this.allSubscriptions.push(this.gsService.onCreatedNewItem.subscribe(newItem => {
            this.entries = [newItem, ...this.entries];
            this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"](this.fop.fieldNames, this.entries.length);
        }));
        //Listener On Edit Item Event
        this.allSubscriptions.push(this.gsService.onEditedItem.subscribe(editedItem => {
            let editedNameTarget = this.entries.find(ent => ent._id == editedItem._id);
            if (editedNameTarget)
                editedNameTarget.name = editedItem.name;
        }));
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.gsService.onDeletedItem.subscribe(deletedItemId => {
            let deletedIndex = this.entries.findIndex(ent => ent._id == deletedItemId);
            if (deletedIndex >= 0) {
                this.entries.splice(deletedIndex, 1);
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"](this.fop.fieldNames, this.entries.length);
            }
        }));
    }
    /**
   * Get My Users
   */
    getEntiries(isFilter = false) {
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.http.getGeneralSettings(this.skip, this.limit, this.gsService.currentPageTargetName).subscribe(res => {
            //Update FOP Properties
            if (res.noMoreOfResult)
                this.fop.paging.disableGetMoreButton = true;
            this.fop.paging.isRequestingToServer = false;
            if (res.isSuccess) {
                this.entries = [...this.entries, ...res.result];
                //Fop 
                this.fop = new src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_0__["FOPModel"](this.fop.fieldNames, this.entries.length);
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
} //End Class
GeneralSettingComponent.ɵfac = function GeneralSettingComponent_Factory(t) { return new (t || GeneralSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_general_setting_service__WEBPACK_IMPORTED_MODULE_8__["GeneralSettingService"])); };
GeneralSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GeneralSettingComponent, selectors: [["app-setting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 23, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between"], [3, "innerHtml"], [1, "btn", "btn-outline-dark", "mb-2", 3, "routerLink", "innerHtml"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], ["tableId", "generalSettingTable", 3, "searchText"], ["id", "generalSettingTable", 1, "table", "mb-4", "table-hover"], [1, "th-90"], ["filedName", "name", 3, "fop", "fieldText"], [1, "th-10", 3, "innerHtml"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], ["class", "mr-2", 3, "routerLink", "state", "title", 4, "ngIf"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"], [1, "mr-2", 3, "routerLink", "state", "title"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"], [1, "far", "fa-trash-alt", "fa-1-5x", "jumb-animation"]], template: function GeneralSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fop-header", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function GeneralSettingComponent_Template_fop_header_searchText_12_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fop-sort", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GeneralSettingComponent_tr_20_Template, 6, 4, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "fop-paging", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function GeneralSettingComponent_Template_fop_paging_getMoreItems_24_listener() { return ctx.getEntiries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r[ctx.gsService.currentPageTargetName], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c4, ctx.gsService.currentPageTargetName))("innerHtml", ctx.u.r.createNew, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.actions, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](21, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](22, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](23, 17, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FopFilterPipe"]], encapsulation: 2 });


/***/ }),

/***/ "9Std":
/*!************************************************************************!*\
  !*** ./src/app/settings/states/create-state/create.state.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStateComponent", function() { return CreateStateComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/state.service */ "pqJn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/sweet.alert.service */ "QZpK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");











function CreateStateComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r4.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r5.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r6.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r7.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r8.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r9.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_small_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r10.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_tr_61_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r15.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_tr_61_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r16.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CreateStateComponent_tr_61_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateStateComponent_tr_61_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.stateService.removeCity(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx_r17.u.r.remove);
} }
function CreateStateComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateStateComponent_tr_61_small_3_Template, 1, 1, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CreateStateComponent_tr_61_small_6_Template, 1, 1, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateStateComponent_tr_61_button_8_Template, 1, 1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cityGroup_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", cityGroup_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cityGroup_r13.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cityGroup_r13.get("landFreightPrice").hasError("invalidNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !cityGroup_r13.get("IsDeleting").value);
} }
function CreateStateComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 44);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r12.u.r.loadingData);
} }
class CreateStateComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, http, stateService, router, sweetAlertService) {
        super();
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.stateService = stateService;
        this.router = router;
        this.sweetAlertService = sweetAlertService;
        this.titleResourcesKey = "createState";
    }
    ngOnInit() {
        this.seo.updateSEO(this.titleResourcesKey);
        this.stateService.initForm();
        this.stateService.formCities.reset();
    }
    /**
      * Create New Item
      */
    onSubmit() {
        if (this.stateService.form.invalid) {
            this.stateService.formSubmitError = true;
            return;
        }
        this.stateService.isRequestingToServer = true;
        this.stateService.formCiteisSubmitError = false;
        this.stateService.formSubmitError = false;
        this.stateService.form.disable();
        let objSaving = Object.assign(Object.assign({}, this.stateService.form.value), { cities: this.stateService.formCities.getRawValue().listOfCities });
        this.allSubscriptions.push(this.http.createNewState(objSaving)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                this.stateService.form.reset();
                this.stateService.formCities.reset();
                this.stateService.isRequestingToServer = false;
                this.stateService.form.enable();
                this.sweetAlertService.confirm(this.u.r.doYouWantEditCreatedItem, this.u.r.goToEdit, this.u.r.createNew).then(() => {
                    this.router.navigate(['/setting', 'states', 'edit', res.result._id]);
                });
            }
        }, error => {
            this.stateService.form.enable();
            this.stateService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
CreateStateComponent.ɵfac = function CreateStateComponent_Factory(t) { return new (t || CreateStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__["SweetAlertService"])); };
CreateStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateStateComponent, selectors: [["app-create-state"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 67, vars: 37, consts: [[1, "account-settings-container", "layout-top-spacing"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "form"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "submit"], [1, "col-sm-6", "mb-6", "form-group"], ["for", "name", 3, "innerHtml"], ["type", "text", "id", "name", "name", "name", "formControlName", "name", 1, "form-control", 3, "title"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], ["for", "fullLandFreightPriceToState", 3, "innerHtml"], ["type", "text", "id", "fullLandFreightPriceToState", "name", "fullFreightPriceToState", "formControlName", "fullLandFreightPriceToState", 1, "form-control", 3, "title"], ["for", "maritimeFreightPriceToSmallCar", 3, "innerHtml"], ["type", "text", "id", "maritimeFreightPriceToSmallCar", "name", "maritimeFreightPriceToSmallCar", "formControlName", "maritimeFreightPriceToSmallCar", 1, "form-control", 3, "title"], ["for", "maritimeFreightPriceToMediumCar", 3, "innerHtml"], ["type", "text", "id", "maritimeFreightPriceToMediumCar", "name", "maritimeFreightPriceToMediumCar", "formControlName", "maritimeFreightPriceToMediumCar", 1, "form-control", 3, "title"], [1, "col-sm-6", "mb-6"], [1, "form-group"], ["for", "maritimeFreightPriceToBigCar", 3, "innerHtml"], ["type", "text", "id", "maritimeFreightPriceToBigCar", "name", "maritimeFreightPriceToBigCar", "formControlName", "maritimeFreightPriceToBigCar", 1, "form-control", 3, "title"], ["type", "submit", "hidden", ""], ["novalidate", "", "autocomplete", "off", 3, "formGroup"], [1, "col-12", "form-group"], ["for", "models", 3, "innerHtml"], [1, "table", "mb-4", "table-hover", "table-bordered"], [1, "th-40", 3, "innerText"], [1, "th-10", 3, "innerText"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "landFreightPrice", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-dark", "mb-2", 3, "innerText", "click"], [3, "formGroup", 4, "ngFor", "ngForOf"], [1, "account-settings-footer"], [1, "as-footer-container", "d-flex", "justify-content-end"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"], [3, "formGroup"], ["type", "button", "class", "btn btn-outline-danger mb-2", 3, "innerText", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", "mb-2", 3, "innerText", "click"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function CreateStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CreateStateComponent_Template_form_submit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CreateStateComponent_small_16_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CreateStateComponent_small_20_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CreateStateComponent_small_21_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CreateStateComponent_small_26_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateStateComponent_small_27_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CreateStateComponent_small_31_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CreateStateComponent_small_32_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, CreateStateComponent_small_38_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CreateStateComponent_small_39_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CreateStateComponent_small_55_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, CreateStateComponent_small_58_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateStateComponent_Template_button_click_60_listener() { return ctx.stateService.addNewCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, CreateStateComponent_tr_61_Template, 9, 4, "tr", 35);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateStateComponent_Template_button_click_64_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, CreateStateComponent_div_66_Template, 1, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r[ctx.titleResourcesKey], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.stateService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.name, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.enterStateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("name").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.fullLandFreightPriceToState, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.fullLandFreightPriceToStateDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("fullLandFreightPriceToState").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("fullLandFreightPriceToState").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.maritimeFreightPriceToSmallCar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.maritimeFreightPriceToSmallCarDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToSmallCar").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToSmallCar").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.maritimeFreightPriceToMediumCar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.maritimeFreightPriceToMediumCarDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToMediumCar").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToMediumCar").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.maritimeFreightPriceToBigCar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.maritimeFreightPriceToBigCarDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToBigCar").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToBigCar").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.stateService.formCiteisSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.stateService.formCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.citties, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.formCities.get("name").hasError("required") && ctx.stateService.formCiteisSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.formCities.get("landFreightPrice").hasError("invalidNumber") && ctx.stateService.formCiteisSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stateService.listOfCitiesControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.stateService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "Btl5":
/*!************************************************************************!*\
  !*** ./src/app/settings/states/delete-state/delete.state.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStateComponent", function() { return DeleteStateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/state.service */ "pqJn");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");










function DeleteStateComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 17);
} }
class DeleteStateComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__["SharedComponents"] {
    constructor(u, stateService, http, activateRouter) {
        super();
        this.u = u;
        this.stateService = stateService;
        this.http = http;
        this.activateRouter = activateRouter;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.formSubmitError = false;
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        this.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        this.form.disable();
        //Check If Must Be Get Object From The Server
        if (history.state.deletingItemName) {
            this.form.controls.name.setValue(history.state.deletingItemName);
            history.state.deletingItemName = null;
        }
        else {
            //Get From The Serer
            this.getStateToUpdate();
        }
    }
    /**
     * Get Car Mark From Server To Update
     */
    getStateToUpdate() {
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.getStateToUpdate(this.activateRouter.snapshot.params.targetId)
            .subscribe(res => {
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                this.form.controls.name.setValue(res.result.name);
            }
        }, error => {
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Delete Item
     */
    onSubmit() {
        if (this.form.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.deleteState(this.form.value)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.stateService.onDeletedItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.stateService.closeModel();
            }
        }, error => {
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
DeleteStateComponent.ɵfac = function DeleteStateComponent_Factory(t) { return new (t || DeleteStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
DeleteStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeleteStateComponent, selectors: [["app-delete-state"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 11, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], [1, "form-group", "col"], ["for", "name", 3, "innerHtml"], ["type", "text", "id", "name", "formControlName", "name", "focus", "", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function DeleteStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function DeleteStateComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeleteStateComponent_div_14_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeleteStateComponent_Template_button_click_15_listener() { return ctx.stateService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.areYouSureToDeleteThe, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.yesDelete, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "CjCJ":
/*!***********************************************!*\
  !*** ./src/modules/settings.router.module.ts ***!
  \***********************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_settings_general_setting_create_general_setting_create_general_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/settings/general-setting/create-general-setting/create.general.setting.component */ "SARq");
/* harmony import */ var src_app_settings_general_setting_delete_general_setting_delete_general_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/settings/general-setting/delete-general-setting/delete.general.setting.component */ "fKbv");
/* harmony import */ var src_app_settings_general_setting_edit_general_setting_edit_general_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/settings/general-setting/edit-general-setting/edit.general.setting.component */ "e6lB");
/* harmony import */ var src_app_settings_general_setting_general_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/settings/general-setting/general.setting.component */ "4pob");
/* harmony import */ var src_app_settings_states_create_state_create_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/settings/states/create-state/create.state.component */ "9Std");
/* harmony import */ var src_app_settings_states_delete_state_delete_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/settings/states/delete-state/delete.state.component */ "Btl5");
/* harmony import */ var src_app_settings_states_edit_state_edit_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/settings/states/edit-state/edit-state.component */ "zPNh");
/* harmony import */ var src_app_settings_states_states_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/settings/states/states.component */ "OrfU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");











const ROUTS = [
    {
        path: 'states', component: src_app_settings_states_states_component__WEBPACK_IMPORTED_MODULE_8__["StatesComponent"],
        children: [
            {
                path: "delete/:targetId",
                component: src_app_settings_states_delete_state_delete_state_component__WEBPACK_IMPORTED_MODULE_6__["DeleteStateComponent"],
            }
        ]
    },
    { path: 'states/create', component: src_app_settings_states_create_state_create_state_component__WEBPACK_IMPORTED_MODULE_5__["CreateStateComponent"] },
    { path: 'states/edit/:targetId', component: src_app_settings_states_edit_state_edit_state_component__WEBPACK_IMPORTED_MODULE_7__["EditStateComponent"] },
    //General Setting
    {
        path: ':pageTargetName', component: src_app_settings_general_setting_general_setting_component__WEBPACK_IMPORTED_MODULE_4__["GeneralSettingComponent"],
        children: [
            {
                path: "create",
                component: src_app_settings_general_setting_create_general_setting_create_general_setting_component__WEBPACK_IMPORTED_MODULE_1__["CreateGeneralSettingComponent"]
            },
            {
                path: "edit/:targetId",
                component: src_app_settings_general_setting_edit_general_setting_edit_general_setting_component__WEBPACK_IMPORTED_MODULE_3__["EditGeneralSettingComponent"],
            },
            {
                path: "delete/:targetId",
                component: src_app_settings_general_setting_delete_general_setting_delete_general_setting_component__WEBPACK_IMPORTED_MODULE_2__["DeleteGeneralSettingComponent"],
            }
        ]
    },
];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(ROUTS)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "OrfU":
/*!*****************************************************!*\
  !*** ./src/app/settings/states/states.component.ts ***!
  \*****************************************************/
/*! exports provided: StatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesComponent", function() { return StatesComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_models_fop_fop_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/fop/fop.model */ "RL+I");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/state.service */ "pqJn");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/fop/fop-header/fop-header.component */ "kbE0");
/* harmony import */ var _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/fop/fop-sort/fop-sort.component */ "mdKN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/fop/fop-paging/fop.paging.component */ "Ajrf");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");















function StatesComponent_tr_28_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 26);
} }
const _c0 = function (a3) { return ["/setting", "states", "edit", a3]; };
const _c1 = function (a0) { return { editingItemName: a0 }; };
function StatesComponent_tr_28_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, item_r1._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, item_r1.name))("title", ctx_r3.u.r.edit);
} }
const _c2 = function (a3) { return ["/setting", "states", "delete", a3]; };
const _c3 = function (a0) { return { deletingItemName: a0 }; };
function StatesComponent_tr_28_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c2, item_r1._id))("state", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c3, item_r1.name))("title", ctx_r4.u.r.delete);
} }
function StatesComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StatesComponent_tr_28_div_7_Template, 1, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StatesComponent_tr_28_a_8_Template, 2, 7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, StatesComponent_tr_28_a_9_Template, 2, 7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r1.fullLandFreightPriceToState);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r1.maritimeFreightPriceToSmallCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r1.maritimeFreightPriceToMediumCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", item_r1.maritimeFreightPriceToBigCar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r1.actionDisapled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r1.actionDisapled);
} }
const _c4 = function () { return ["/setting", "states", "create"]; };
class StatesComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, stateService, http) {
        super();
        this.u = u;
        this.seo = seo;
        this.stateService = stateService;
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
        this.seo.updateSEO("states");
        this.getEntiries();
        //Listener On Delete Item Event
        this.allSubscriptions.push(this.stateService.onDeletedItem.subscribe(deletedItemId => {
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
    getEntiries() {
        this.fop.paging.isRequestingToServer = true;
        //Get Users Now From Server
        this.allSubscriptions.push(this.http.getStates(this.skip, this.limit).subscribe(res => {
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
StatesComponent.ɵfac = function StatesComponent_Factory(t) { return new (t || StatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"])); };
StatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StatesComponent, selectors: [["app-state"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 30, consts: [[1, "row", "layout-top-spacing"], [1, "col-lg-12"], [1, "statbox", "widget"], [1, "widget-header"], [1, "d-flex", "justify-content-between"], [3, "innerText"], [1, "btn", "btn-outline-dark", "mb-2", 3, "routerLink", "innerText"], [1, "widget-content", "widget-content-area"], [1, "row", "form-group"], [1, "table-responsive"], ["id", "statesTable", 3, "searchText"], ["id", "statesTable", 1, "table", "mb-4", "table-hover"], [1, "th-15"], ["filedName", "name", 3, "fop", "fieldText"], [1, "th-20"], ["filedName", "fullLandFreightPriceToState", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPriceToSmallCar", 3, "fop", "fieldText"], [1, "th-25"], ["filedName", "maritimeFreightPriceToMediumCar", 3, "fop", "fieldText"], ["filedName", "maritimeFreightPriceToBigCar", 3, "fop", "fieldText"], [1, "th-5", 3, "innerText"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "fop", "getMoreItems"], [2, "display", "inline-flex"], ["class", "spinner-grow text-danger align-self-center loader-sm", 4, "ngIf"], ["class", "mr-2", 3, "routerLink", "state", "title", 4, "ngIf"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"], [1, "mr-2", 3, "routerLink", "state", "title"], [1, "far", "fa-edit", "fa-1-5x", "jumb-animation"], [1, "far", "fa-trash-alt", "fa-1-5x", "jumb-animation"]], template: function StatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fop-header", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchText", function StatesComponent_Template_fop_header_searchText_12_listener($event) { return ctx.fopSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fop-sort", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "fop-sort", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "fop-sort", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "fop-sort", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "fop-sort", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, StatesComponent_tr_28_Template, 10, 8, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "fopSortPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "fopFilterPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "fop-paging", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getMoreItems", function StatesComponent_Template_fop_paging_getMoreItems_32_listener() { return ctx.getEntiries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c4))("innerText", ctx.u.r.createNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.fullLandFreightPriceToState);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.maritimeFreightPriceToSmallCar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.maritimeFreightPriceToMediumCar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop)("fieldText", ctx.u.r.maritimeFreightPriceToBigCar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerText", ctx.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](29, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](30, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](31, 25, ctx.entries, ctx.fopSearch, ctx.fop), ctx.fop.sort.fieldName, ctx.fop.sort.reverse), ctx.fop.paging.pagingLimt.skip, ctx.fop.paging.pagingLimt.take))("ngForTrackBy", ctx.funTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fop", ctx.fop);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_9__["FopHeaderComponent"], _shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_10__["FopSortComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_12__["FopPagingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["FopSortPipe"], src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FopFilterPipe"]], encapsulation: 2 });


/***/ }),

/***/ "SARq":
/*!*****************************************************************************************************!*\
  !*** ./src/app/settings/general-setting/create-general-setting/create.general.setting.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CreateGeneralSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGeneralSettingComponent", function() { return CreateGeneralSettingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _services_general_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/general.setting.service */ "WJzp");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "H5vj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");









function CreateGeneralSettingComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "small", 22);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function CreateGeneralSettingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 23);
} }
class CreateGeneralSettingComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_1__["SharedComponents"] {
    constructor(u, gsService, http) {
        super();
        this.u = u;
        this.gsService = gsService;
        this.http = http;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.formSubmitError = false;
        this.isRequestingToServer = false;
    }
    ngOnInit() {
    }
    /**
     * Create New Item
     */
    onSubmit() {
        if (this.form.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.isRequestingToServer = true;
        this.form.disable();
        this.allSubscriptions.push(this.http.createNewGeneralSetting(this.form.value, this.gsService.currentPageTargetName)
            .subscribe(res => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.gsService.onCreatedNewItem.emit(res.result);
                //Back To Component
                this.gsService.closeModel();
            }
        }, error => {
            this.form.enable();
            this.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
CreateGeneralSettingComponent.ɵfac = function CreateGeneralSettingComponent_Factory(t) { return new (t || CreateGeneralSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_general_setting_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
CreateGeneralSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateGeneralSettingComponent, selectors: [["app-create-general-setting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 12, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", 3, "innerHtml"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-x"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group", "col"], ["for", "name", 3, "innerHtml"], ["type", "text", "id", "name", "formControlName", "name", "focus", "", 1, "form-control", 3, "placeholder"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "invalid-data", 3, "innerHtml"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function CreateGeneralSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateGeneralSettingComponent_Template_button_click_5_listener() { return ctx.gsService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function CreateGeneralSettingComponent_Template_form_submit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreateGeneralSettingComponent_small_15_Template, 1, 1, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CreateGeneralSettingComponent_div_19_Template, 1, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateGeneralSettingComponent_Template_button_click_20_listener() { return ctx.gsService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.createNew, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.create, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "WJzp":
/*!*************************************************!*\
  !*** ./src/services/general.setting.service.ts ***!
  \*************************************************/
/*! exports provided: GeneralSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingService", function() { return GeneralSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class GeneralSettingService {
    constructor(router) {
        this.router = router;
        /** Created New Item Event*/
        this.onCreatedNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Updated Item Event*/
        this.onEditedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Deleted Item Event*/
        this.onDeletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Close: Back To The Page
     */
    closeModel() {
        this.router.navigate(['/setting', this.currentPageTargetName]);
    }
} //End Class
GeneralSettingService.ɵfac = function GeneralSettingService_Factory(t) { return new (t || GeneralSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GeneralSettingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralSettingService, factory: GeneralSettingService.ɵfac });


/***/ }),

/***/ "e02R":
/*!****************************************!*\
  !*** ./src/modules/settings.module.ts ***!
  \****************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var src_app_settings_general_setting_create_general_setting_create_general_setting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/settings/general-setting/create-general-setting/create.general.setting.component */ "SARq");
/* harmony import */ var src_app_settings_general_setting_delete_general_setting_delete_general_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/settings/general-setting/delete-general-setting/delete.general.setting.component */ "fKbv");
/* harmony import */ var src_app_settings_general_setting_edit_general_setting_edit_general_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/settings/general-setting/edit-general-setting/edit.general.setting.component */ "e6lB");
/* harmony import */ var src_app_settings_general_setting_general_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/settings/general-setting/general.setting.component */ "4pob");
/* harmony import */ var src_app_settings_states_create_state_create_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/settings/states/create-state/create.state.component */ "9Std");
/* harmony import */ var src_app_settings_states_delete_state_delete_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/settings/states/delete-state/delete.state.component */ "Btl5");
/* harmony import */ var src_app_settings_states_edit_state_edit_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/settings/states/edit-state/edit-state.component */ "zPNh");
/* harmony import */ var src_app_settings_states_states_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/settings/states/states.component */ "OrfU");
/* harmony import */ var src_services_general_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/general.setting.service */ "WJzp");
/* harmony import */ var src_services_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/state.service */ "pqJn");
/* harmony import */ var _settings_router_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.router.module */ "CjCJ");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared.module */ "5Uro");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");













class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, providers: [src_services_general_setting_service__WEBPACK_IMPORTED_MODULE_8__["GeneralSettingService"], src_services_state_service__WEBPACK_IMPORTED_MODULE_9__["StateService"]], imports: [[
            _shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _settings_router_module__WEBPACK_IMPORTED_MODULE_10__["SettingsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [src_app_settings_general_setting_general_setting_component__WEBPACK_IMPORTED_MODULE_3__["GeneralSettingComponent"],
        src_app_settings_general_setting_create_general_setting_create_general_setting_component__WEBPACK_IMPORTED_MODULE_0__["CreateGeneralSettingComponent"],
        src_app_settings_general_setting_edit_general_setting_edit_general_setting_component__WEBPACK_IMPORTED_MODULE_2__["EditGeneralSettingComponent"],
        src_app_settings_general_setting_delete_general_setting_delete_general_setting_component__WEBPACK_IMPORTED_MODULE_1__["DeleteGeneralSettingComponent"],
        src_app_settings_states_states_component__WEBPACK_IMPORTED_MODULE_7__["StatesComponent"],
        src_app_settings_states_create_state_create_state_component__WEBPACK_IMPORTED_MODULE_4__["CreateStateComponent"],
        src_app_settings_states_delete_state_delete_state_component__WEBPACK_IMPORTED_MODULE_5__["DeleteStateComponent"],
        src_app_settings_states_edit_state_edit_state_component__WEBPACK_IMPORTED_MODULE_6__["EditStateComponent"]], imports: [_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _settings_router_module__WEBPACK_IMPORTED_MODULE_10__["SettingsRoutingModule"]] }); })();


/***/ }),

/***/ "e6lB":
/*!*************************************************************************************************!*\
  !*** ./src/app/settings/general-setting/edit-general-setting/edit.general.setting.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditGeneralSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGeneralSettingComponent", function() { return EditGeneralSettingComponent; });
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/alert.service */ "NqkH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _services_general_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/general.setting.service */ "WJzp");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");










function EditGeneralSettingComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "small", 22);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function EditGeneralSettingComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 23);
} }
class EditGeneralSettingComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__["SharedComponents"] {
    constructor(u, gsService, http, activateRouter) {
        super();
        this.u = u;
        this.gsService = gsService;
        this.http = http;
        this.activateRouter = activateRouter;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.formSubmitError = false;
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        if (!this.activateRouter.snapshot.params.targetId) {
            this.gsService.closeModel();
            return;
        }
        this.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        //Check If Must Be Get Object From The Server
        if (history.state.editingItemName) {
            this.form.controls.name.setValue(history.state.editingItemName);
            history.state.editingItemName = null;
        }
        else {
            //Get From The Serer
            this.getGenralSettingToUpdate();
        }
    }
    /**
     * Get Genral Setting From Server To Update
     */
    getGenralSettingToUpdate() {
        this.allSubscriptions.push(this.http.getGenralSettingToUpdate(this.activateRouter.snapshot.params.targetId, this.gsService.currentPageTargetName)
            .subscribe(res => {
            if (res.isSuccess) {
                this.form.controls.name.setValue(res.result.name);
            }
        }, error => {
            _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Update Item
     */
    onSubmit() {
        if (this.form.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.isRequestingToServer = true;
        this.form.disable();
        this.allSubscriptions.push(this.http.updateGeneralSetting(this.form.value, this.gsService.currentPageTargetName)
            .subscribe(res => {
            _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.gsService.onEditedItem.emit(res.result);
                //Back To Component
                this.gsService.closeModel();
            }
        }, error => {
            _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
EditGeneralSettingComponent.ɵfac = function EditGeneralSettingComponent_Factory(t) { return new (t || EditGeneralSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_general_setting_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
EditGeneralSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditGeneralSettingComponent, selectors: [["app-edit-general-setting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 12, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", 3, "innerHtml"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-x"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group", "col"], ["for", "name", 3, "innerHtml"], ["type", "text", "id", "name", "formControlName", "name", "focus", "", 1, "form-control", 3, "placeholder"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "invalid-data", 3, "innerHtml"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function EditGeneralSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditGeneralSettingComponent_Template_button_click_5_listener() { return ctx.gsService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function EditGeneralSettingComponent_Template_form_submit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EditGeneralSettingComponent_small_15_Template, 1, 1, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EditGeneralSettingComponent_div_19_Template, 1, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditGeneralSettingComponent_Template_button_click_20_listener() { return ctx.gsService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "div", 21);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.editing, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("name").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "fKbv":
/*!*****************************************************************************************************!*\
  !*** ./src/app/settings/general-setting/delete-general-setting/delete.general.setting.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DeleteGeneralSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteGeneralSettingComponent", function() { return DeleteGeneralSettingComponent; });
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/alert.service */ "NqkH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _services_general_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/general.setting.service */ "WJzp");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");










function DeleteGeneralSettingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 17);
} }
class DeleteGeneralSettingComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_2__["SharedComponents"] {
    constructor(u, gsService, http, activateRouter) {
        super();
        this.u = u;
        this.gsService = gsService;
        this.http = http;
        this.activateRouter = activateRouter;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.formSubmitError = false;
        this.isRequestingToServer = false;
    }
    ngOnInit() {
        if (!this.activateRouter.snapshot.params.targetId) {
            this.gsService.closeModel();
            return;
        }
        this.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        this.form.disable();
        //Check If Must Be Get Object From The Server
        if (history.state.deletingItemName) {
            this.form.controls.name.setValue(history.state.deletingItemName);
            history.state.deletingItemName = null;
        }
        else {
            //Get From The Serer
            this.getGenralSettingToUpdate();
        }
    }
    /**
     * Get Genral Setting From Server To Update
     */
    getGenralSettingToUpdate() {
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.getGenralSettingToUpdate(this.activateRouter.snapshot.params.targetId, this.gsService.currentPageTargetName)
            .subscribe(res => {
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                this.form.controls.name.setValue(res.result.name);
            }
        }, error => {
            this.isRequestingToServer = false;
            _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].canRequestError(error);
        }));
    }
    /**
     * Delete Item
     */
    onSubmit() {
        if (this.form.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.isRequestingToServer = true;
        this.allSubscriptions.push(this.http.deleteGeneralSetting(this.form.value, this.gsService.currentPageTargetName)
            .subscribe(res => {
            _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].showResponseMessage(res);
            this.isRequestingToServer = false;
            if (res.isSuccess) {
                //Pass The New Item To Page
                this.gsService.onDeletedItem.emit(this.activateRouter.snapshot.params.targetId);
                //Back To Component
                this.gsService.closeModel();
            }
        }, error => {
            this.isRequestingToServer = false;
            _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"].canRequestError(error);
        }));
    }
} //End Class
DeleteGeneralSettingComponent.ɵfac = function DeleteGeneralSettingComponent_Factory(t) { return new (t || DeleteGeneralSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_general_setting_service__WEBPACK_IMPORTED_MODULE_5__["GeneralSettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
DeleteGeneralSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeleteGeneralSettingComponent, selectors: [["app-delete-general-setting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 11, consts: [["tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "false", 1, "modal", "fade", "show", 2, "display", "block"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["novalidate", "", 3, "formGroup", "submit"], [1, "modal-body"], [1, "form-row", "mb-2"], [1, "form-group"], [1, "text-center", 3, "innerHtml"], [1, "form-group", "col"], ["for", "name", 3, "innerHtml"], ["type", "text", "id", "name", "formControlName", "name", "focus", "", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 4, "ngIf"], [1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "flaticon-cancel-12"], [1, "modal-backdrop", "fade", "show"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm"]], template: function DeleteGeneralSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function DeleteGeneralSettingComponent_Template_form_submit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeleteGeneralSettingComponent_div_14_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeleteGeneralSettingComponent_Template_button_click_15_listener() { return ctx.gsService.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-submited", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.areYouSureToDeleteThe, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.u.r.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.u.r.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.u.r.yesDelete, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.u.r.cancel, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "pqJn":
/*!***************************************!*\
  !*** ./src/services/state.service.ts ***!
  \***************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.validators.service */ "QVRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");






class StateService {
    constructor(router, builder) {
        this.router = router;
        this.builder = builder;
        this.formSubmitError = false;
        this.isRequestingToServer = false;
        this.formCiteisSubmitError = false;
        this.citties = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.formCities = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        /** Deleted Item Event*/
        this.onDeletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** Init Form */
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fullLandFreightPriceToState: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__["CustomValidatorsService"].invalidNumber]),
            maritimeFreightPriceToBigCar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__["CustomValidatorsService"].invalidNumber]),
            maritimeFreightPriceToSmallCar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__["CustomValidatorsService"].invalidNumber]),
            maritimeFreightPriceToMediumCar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__["CustomValidatorsService"].invalidNumber]),
        });
        this.formCities = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            landFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__["CustomValidatorsService"].invalidNumber),
            listOfCities: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    get listOfCitiesControl() {
        return this.formCities.get('listOfCities').controls;
    }
    /**
     * Close: Back To The Page
     */
    closeModel() {
        this.formSubmitError = false;
        this.formCiteisSubmitError = false;
        this.form.reset();
        this.router.navigate(['/setting', 'states']);
    }
    /**
     * Add New City
     */
    addNewCity() {
        if (this.formCities.invalid) {
            this.formCiteisSubmitError = true;
            return;
        }
        this.formCities.get('listOfCities')
            .push(this.builder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.formCities.controls.name.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            landFreightPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.formCities.controls.landFreightPrice.value, _custom_validators_service__WEBPACK_IMPORTED_MODULE_0__["CustomValidatorsService"].invalidNumber),
            IsDeleting: false
        }));
        this.formCities.controls.name.setValue(null);
        this.formCities.controls.landFreightPrice.setValue(null);
        this.formCiteisSubmitError = false;
    }
    /**
     * Add New City To Update
     */
    addNewCityV2(cities) {
        let fArray = this.formCities.get('listOfCities');
        cities.forEach(ci => fArray.push(this.builder.group({
            _id: ci._id,
            name: ci.name,
            landFreightPrice: +ci.landFreightPrice,
            IsDeleting: false,
        })));
    }
    /** Remove City */
    removeCity(index) {
        let formArray = this.formCities.get('listOfCities');
        let deletingObject = formArray.controls[index];
        //Check If This Is Update Process
        if (!this.form.controls._id.value || !deletingObject.value._id) {
            //Remove In Create Case
            formArray.removeAt(index);
        }
        else {
            deletingObject.patchValue({
                _id: deletingObject.value._id,
                name: deletingObject.value.name,
                landFreightPrice: +deletingObject.value.landFreightPrice,
                IsDeleting: true
            });
            deletingObject.disable();
        }
    }
} //End Class
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac });


/***/ }),

/***/ "zPNh":
/*!********************************************************************!*\
  !*** ./src/app/settings/states/edit-state/edit-state.component.ts ***!
  \********************************************************************/
/*! exports provided: EditStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStateComponent", function() { return EditStateComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_services_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/state.service */ "pqJn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");










function EditStateComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r4.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r5.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r6.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r7.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r8.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r9.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_small_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r10.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_tr_61_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r15.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_tr_61_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "small", 40);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r16.u.r.invalidNumber, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function EditStateComponent_tr_61_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditStateComponent_tr_61_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.stateService.removeCity(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx_r17.u.r.remove);
} }
function EditStateComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditStateComponent_tr_61_small_3_Template, 1, 1, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditStateComponent_tr_61_small_6_Template, 1, 1, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditStateComponent_tr_61_button_8_Template, 1, 1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cityGroup_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", cityGroup_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cityGroup_r13.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cityGroup_r13.get("landFreightPrice").hasError("invalidNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !cityGroup_r13.get("IsDeleting").value);
} }
function EditStateComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 44);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r12.u.r.loadingData);
} }
class EditStateComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, http, activateRouter, stateService) {
        super();
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.activateRouter = activateRouter;
        this.stateService = stateService;
        this.titleResourcesKey = "editState";
    }
    ngOnInit() {
        this.seo.updateSEO(this.titleResourcesKey);
        this.stateService.initForm();
        this.stateService.form.controls._id.setValue(this.activateRouter.snapshot.params.targetId);
        this.stateService.form.disable();
        this.stateService.formCities.reset();
        this.getStateToUpdate();
    }
    /**
     * Get Car Mark To Update
     */
    getStateToUpdate() {
        this.http.getStateToUpdate(this.stateService.form.controls._id.value).subscribe(res => {
            if (res.isSuccess) {
                this.updateFormData(res.result);
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
        if (this.stateService.form.invalid) {
            this.stateService.formSubmitError = true;
            return;
        }
        this.stateService.isRequestingToServer = true;
        this.stateService.form.disable();
        let objSaving = Object.assign(Object.assign({}, this.stateService.form.value), { cities: this.stateService.formCities.getRawValue().listOfCities });
        this.allSubscriptions.push(this.http.updateState(objSaving).subscribe(res => {
            this.stateService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
            this.stateService.form.enable();
            if (res.isSuccess) {
                this.stateService.initForm();
                this.updateFormData(res.result);
            }
        }, error => {
            this.stateService.form.enable();
            this.stateService.isRequestingToServer = false;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /** Update Form Data */
    updateFormData(res) {
        this.stateService.form.enable();
        this.stateService.form.controls._id.setValue(res._id);
        this.stateService.form.controls.name.setValue(res.name);
        this.stateService.form.controls.fullLandFreightPriceToState.setValue(res.fullLandFreightPriceToState);
        this.stateService.form.controls.maritimeFreightPriceToBigCar.setValue(res.maritimeFreightPriceToBigCar);
        this.stateService.form.controls.maritimeFreightPriceToSmallCar.setValue(res.maritimeFreightPriceToSmallCar);
        this.stateService.form.controls.maritimeFreightPriceToMediumCar.setValue(res.maritimeFreightPriceToMediumCar);
        this.stateService.addNewCityV2(res.cities);
    }
} //End Class
EditStateComponent.ɵfac = function EditStateComponent_Factory(t) { return new (t || EditStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_services_state_service__WEBPACK_IMPORTED_MODULE_7__["StateService"])); };
EditStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditStateComponent, selectors: [["app-edit-state"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 67, vars: 37, consts: [[1, "account-settings-container", "layout-top-spacing"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "form"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "submit"], [1, "col-sm-6", "mb-6", "form-group"], ["for", "name", 3, "innerHtml"], ["type", "text", "id", "name", "name", "name", "formControlName", "name", 1, "form-control", 3, "title"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], ["for", "fullLandFreightPriceToState", 3, "innerHtml"], ["type", "text", "id", "fullLandFreightPriceToState", "name", "fullFreightPriceToState", "formControlName", "fullLandFreightPriceToState", 1, "form-control", 3, "title"], ["for", "maritimeFreightPriceToSmallCar", 3, "innerHtml"], ["type", "text", "id", "maritimeFreightPriceToSmallCar", "name", "maritimeFreightPriceToSmallCar", "formControlName", "maritimeFreightPriceToSmallCar", 1, "form-control", 3, "title"], ["for", "maritimeFreightPriceToMediumCar", 3, "innerHtml"], ["type", "text", "id", "maritimeFreightPriceToMediumCar", "name", "maritimeFreightPriceToMediumCar", "formControlName", "maritimeFreightPriceToMediumCar", 1, "form-control", 3, "title"], [1, "col-sm-6", "mb-6"], [1, "form-group"], ["for", "maritimeFreightPriceToBigCar", 3, "innerHtml"], ["type", "text", "id", "maritimeFreightPriceToBigCar", "name", "maritimeFreightPriceToBigCar", "formControlName", "maritimeFreightPriceToBigCar", 1, "form-control", 3, "title"], ["type", "submit", "hidden", ""], ["novalidate", "", "autocomplete", "off", 3, "formGroup"], [1, "col-12", "form-group"], ["for", "models", 3, "innerHtml"], [1, "table", "mb-4", "table-hover", "table-bordered"], [1, "th-40", 3, "innerText"], [1, "th-10", 3, "innerText"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "landFreightPrice", 1, "form-control"], ["type", "button", 1, "btn", "btn-outline-dark", "mb-2", 3, "innerText", "click"], [3, "formGroup", 4, "ngFor", "ngForOf"], [1, "account-settings-footer"], [1, "as-footer-container", "d-flex", "justify-content-end"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"], [3, "formGroup"], ["type", "button", "class", "btn btn-outline-danger mb-2", 3, "innerText", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", "mb-2", 3, "innerText", "click"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function EditStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function EditStateComponent_Template_form_submit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, EditStateComponent_small_16_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, EditStateComponent_small_20_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, EditStateComponent_small_21_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EditStateComponent_small_26_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EditStateComponent_small_27_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, EditStateComponent_small_31_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, EditStateComponent_small_32_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, EditStateComponent_small_38_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, EditStateComponent_small_39_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, EditStateComponent_small_55_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, EditStateComponent_small_58_Template, 1, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditStateComponent_Template_button_click_60_listener() { return ctx.stateService.addNewCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, EditStateComponent_tr_61_Template, 9, 4, "tr", 35);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditStateComponent_Template_button_click_64_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, EditStateComponent_div_66_Template, 1, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r[ctx.titleResourcesKey], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.stateService.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.name, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.enterStateName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("name").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.fullLandFreightPriceToState, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.fullLandFreightPriceToStateDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("fullLandFreightPriceToState").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("fullLandFreightPriceToState").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.maritimeFreightPriceToSmallCar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.maritimeFreightPriceToSmallCarDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToSmallCar").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToSmallCar").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.maritimeFreightPriceToMediumCar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.maritimeFreightPriceToMediumCarDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToMediumCar").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToMediumCar").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.maritimeFreightPriceToBigCar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.u.r.maritimeFreightPriceToBigCarDis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToBigCar").hasError("required") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.form.get("maritimeFreightPriceToBigCar").hasError("invalidNumber") && ctx.stateService.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("form-submited", ctx.stateService.formCiteisSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.stateService.formCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx.u.r.citties, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.landFreightPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.formCities.get("name").hasError("required") && ctx.stateService.formCiteisSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.formCities.get("landFreightPrice").hasError("invalidNumber") && ctx.stateService.formCiteisSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", ctx.u.r.add);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stateService.listOfCitiesControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.stateService.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stateService.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=settings-module.js.map