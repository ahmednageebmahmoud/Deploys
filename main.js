(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/TAO":
/*!****************************************************!*\
  !*** ./src/directives/file.drag.drop.directive.ts ***!
  \****************************************************/
/*! exports provided: FileDragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDragDirective", function() { return FileDragDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



class FileDragDirective {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        /** On Selected Files Event */
        this.onSelectFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = "image/*";
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.drag_class = 'dropzone-dragover';
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.drag_class = null;
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.drag_class = null;
        // Pass Files Now To Compoennt
        this.passFilesToComponent(evt.dataTransfer.files);
    }
    onClick() {
        this.fileInput.click();
        this.fileInput.onchange = (ev) => {
            this.passFilesToComponent(this.fileInput.files);
        };
    }
    /** Read File And Pass To Compoenent */
    passFilesToComponent(files) {
        const newFile = [];
        for (let i = 0; i < files.length; i++) {
            newFile.push({
                file: files[i],
                url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i])),
            });
        }
        this.onSelectFiles.emit(newFile);
    }
} // End Class
FileDragDirective.ɵfac = function FileDragDirective_Factory(t) { return new (t || FileDragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
FileDragDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FileDragDirective, selectors: [["", "appDrag", ""]], hostVars: 2, hostBindings: function FileDragDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function FileDragDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDragDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function FileDragDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("click", function FileDragDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.drag_class);
    } }, outputs: { onSelectFiles: "onSelectFiles" } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ahmed/Programming/Projects/FreeProjects/Mostaql/AlAber/Front/src/main.ts */"zUnb");


/***/ }),

/***/ "1jmC":
/*!*******************************************************!*\
  !*** ./src/services/http/http.interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../local.storage.service */ "LKR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HttpInterceptorService {
    constructor() {
    }
    /**
     * Override On All Request To API
     * @param req
     * @param next
     intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

         //Add Access Token To Header If Not Null
         const clond = LocalStorageService.accessToken ? req.clone({
            headers: req.headers.append('authorization', `bearer ${LocalStorageService.accessToken.replace(/"/gm, '')}`)
            .append('content-type', `application/json`)
        }) : req.clone({
            headers: req.headers
            .append('content-type', `application/json`)
        });
        return next.handle(clond);
    }
    */
    intercept(req, next) {
        // Set Header Setting From Server
        const accessToken = _local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].accessToken;
        const allowContentTypeJson = req.url.search(/\/user\/createUser|\/user\/update$|\/user\/updateUserData$|\/freight\/createNewFreight|\/freight\/updateFreight$/gmi) == -1;
        let headerOverrided;
        if (accessToken) {
            // Set Access Token In Header
            if (allowContentTypeJson) {
                headerOverrided = req.clone({
                    headers: req.headers
                        .append('authorization', `bearer ${accessToken}`)
                        .append('content-type', `application/json`)
                });
            }
            else {
                headerOverrided = req.clone({
                    headers: req.headers
                        .append('authorization', `bearer ${accessToken}`)
                });
            }
        }
        else {
            headerOverrided = req.clone({
                headers: req.headers
                    .append('content-type', allowContentTypeJson ? `application/json` : '')
            });
        }
        return next.handle(headerOverrided);
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac });


/***/ }),

/***/ "5Uro":
/*!**************************************!*\
  !*** ./src/modules/shared.module.ts ***!
  \**************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _app_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/shared/breadcrumb/breadcrumb.component */ "APW9");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pipes/sort.pipe */ "MODS");
/* harmony import */ var _app_shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../app/shared/fop/fop-sort/fop-sort.component */ "mdKN");
/* harmony import */ var _app_shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app/shared/fop/fop-paging/fop.paging.component */ "Ajrf");
/* harmony import */ var _app_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app/shared/fop/fop-header/fop-header.component */ "kbE0");
/* harmony import */ var src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/directives/write.svg.directive */ "PlsR");
/* harmony import */ var src_directives_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/directives/file.drag.drop.directive */ "/TAO");
/* harmony import */ var src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/fop/fop.sort.pipe */ "O0Z9");
/* harmony import */ var src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pipes/fop/fop.filter.pipe */ "ePWN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-google-charts */ "liez");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/directives/deopify.directive */ "nTwK");
/* harmony import */ var src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/export-buttons/export.buttons.component */ "NAu2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_app_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_4__["FopHeaderComponent"],
        _app_shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_3__["FopPagingComponent"],
        _app_shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_2__["FopSortComponent"],
        src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FopFilterPipe"],
        src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["FopSortPipe"],
        src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_5__["WriteSVGDirective"],
        src_directives_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_6__["FileDragDirective"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_1__["SortPipe"],
        src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_12__["DeopifyDirective"],
        _app_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"],
        src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ExportButtonsComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]], exports: [_app_shared_fop_fop_header_fop_header_component__WEBPACK_IMPORTED_MODULE_4__["FopHeaderComponent"],
        _app_shared_fop_fop_paging_fop_paging_component__WEBPACK_IMPORTED_MODULE_3__["FopPagingComponent"],
        _app_shared_fop_fop_sort_fop_sort_component__WEBPACK_IMPORTED_MODULE_2__["FopSortComponent"],
        src_pipes_fop_fop_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FopFilterPipe"],
        src_pipes_fop_fop_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["FopSortPipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_10__["GoogleChartsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_5__["WriteSVGDirective"],
        src_directives_file_drag_drop_directive__WEBPACK_IMPORTED_MODULE_6__["FileDragDirective"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_1__["SortPipe"],
        src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_12__["DeopifyDirective"],
        _app_shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__["BreadcrumbComponent"],
        src_app_shared_export_buttons_export_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ExportButtonsComponent"]] }); })();


/***/ }),

/***/ "8B9z":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar-setting/nav-bar-setting.component */ "kLvF");



const _c0 = function () { return ["/"]; };
class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
} //End Class
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 21, vars: 4, consts: [[1, "header-container", "fixed-top"], [1, "header", "navbar", "navbar-expand-sm", "d-flex", "justify-content-between"], [1, "navbar-nav", "theme-brand", "flex-row", "text-center"], [1, "nav-item", "theme-logo"], [3, "routerLink"], ["src", "assets/img/logo.jpeg", "alt", "logo", 1, "navbar-logo"], [1, "nav-item", "theme-text"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "toggle-sidebar"], ["href", "javascript:void(0);", "data-placement", "bottom", 1, "sidebarCollapse"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-list"], ["x1", "8", "y1", "6", "x2", "21", "y2", "6"], ["x1", "8", "y1", "12", "x2", "21", "y2", "12"], ["x1", "8", "y1", "18", "x2", "21", "y2", "18"], ["x1", "3", "y1", "6", "x2", "3", "y2", "6"], ["x1", "3", "y1", "12", "x2", "3", "y2", "12"], ["x1", "3", "y1", "18", "x2", "3", "y2", "18"], [1, "navbar-item", "flex-row", "navbar-dropdown"], [1, "nav-item", "dropdown", "user-profile-dropdown", "order-lg-0", "order-1"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-nav-bar-setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_2__["NavBarSettingComponent"]], encapsulation: 2 });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





class HomeComponent {
    constructor(u, http, seo) {
        this.u = u;
        this.http = http;
        this.seo = seo;
    }
    ngOnInit() {
        this.seo.updateSEO("accountSetting");
    }
} // End Class
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SEOService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [["routerLink", "signIn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0632\u0631 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "APW9":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/behavior.subject.service */ "okBh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





const _c0 = function (a0) { return { "active": a0 }; };
function BreadcrumbComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const isLast_r3 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, isLast_r3 && !ctx_r0.allowStaticBreadcrumd));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.u.r[item_r2], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function BreadcrumbComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r1.title.getTitle(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class BreadcrumbComponent {
    constructor(u, title) {
        this.u = u;
        this.title = title;
        this.items = [];
    }
    ngOnInit() {
        _services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.subscribe(res => {
            this.items = [];
            this.allowStaticBreadcrumd = res.isActiveByNesterUrls && res.isAllowShowBreadcrumbToNestedUrls;
            if (res.menu)
                this.items.push(res.menu.resourceKey_title);
            if (res.subMenu)
                this.items.push(res.subMenu.resourceKey_title);
        });
    }
} //End Class
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 6, vars: 3, consts: [["aria-label", "breadcrumb", 1, "breadcrumb-two"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/", 3, "innerHtml"], ["class", "breadcrumb-item ", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "ngClass"], [3, "innerHtml"], [1, "breadcrumb-item", "active"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BreadcrumbComponent_li_4_Template, 2, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BreadcrumbComponent_li_5_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.u.r.home, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allowStaticBreadcrumd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "Ajrf":
/*!***************************************************************!*\
  !*** ./src/app/shared/fop/fop-paging/fop.paging.component.ts ***!
  \***************************************************************/
/*! exports provided: FopPagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopPagingComponent", function() { return FopPagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





function FopPagingComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 18);
} if (rf & 2) {
    const li_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", li_r4.limit)("innerHtml", li_r4.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function FopPagingComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_li_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const pagNum_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.fop.paging.gotoPage(pagNum_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pagNum_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, pagNum_r5 == ctx_r1.fop.paging.currentPage))("title", ctx_r1.u.r.page + " " + pagNum_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", pagNum_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FopPagingComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.fop.paging.disableGetMoreButton ? null : ctx_r8.getMoreItems.emit(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.u.r.getMoreItems)("innerHtml", ctx_r2.u.r.getMoreItems, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FopPagingComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r3.u.r.loadingData);
} }
const _c1 = function (a0) { return { "disabled": a0 }; };
class FopPagingComponent {
    constructor(u) {
        this.u = u;
        //Get More Items Firreing With Click On Display More Buttons
        this.getMoreItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    ngOnInit() {
    }
} //End Class
FopPagingComponent.ɵfac = function FopPagingComponent_Factory(t) { return new (t || FopPagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FopPagingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FopPagingComponent, selectors: [["fop-paging"]], inputs: { fop: "fop" }, outputs: { getMoreItems: "getMoreItems" }, decls: 24, vars: 26, consts: [[1, "d-flex", "justify-content-between"], [1, "pagination"], [1, "page-item"], [1, "form-control", "form-control-sm", 2, "height", "35px", "border-radius", "0%", "border-top-left-radius", ".25rem", "border-bottom-left-radius", ".25rem", 3, "ngModel", "ngModelChange", "change"], [3, "value", "innerHtml", 4, "ngFor", "ngForOf"], [1, "page-link"], [1, "page-item", 3, "ngClass", "title", "click"], ["href", "javascript:void(0)", 1, "page-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-left"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], ["class", "page-item ", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-right"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "page-item", 3, "ngClass"], ["class", "page-link", "href", "javascript:void(0)", 3, "title", "innerHtml", "click", 4, "ngIf"], ["class", "page-link ", "href", "javascript:void(0)", "style", "height: 35px;", 3, "title", 4, "ngIf"], [3, "value", "innerHtml"], [1, "page-item", 3, "ngClass", "title"], ["href", "javascript:void(0)", 1, "page-link", 3, "innerHtml", "click"], ["href", "javascript:void(0)", 1, "page-link", 3, "title", "innerHtml", "click"], ["href", "javascript:void(0)", 1, "page-link", 2, "height", "35px", 3, "title"], [1, "spinner-grow", "text-danger", "align-self-center", "loader-sm"]], template: function FopPagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FopPagingComponent_Template_select_ngModelChange_3_listener($event) { return ctx.fop.numberOfDisplayResiltInPage = $event; })("change", function FopPagingComponent_Template_select_change_3_listener() { return ctx.fop.paging.changeCountItemDisplaying(ctx.fop.numberOfDisplayResiltInPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FopPagingComponent_option_4_Template, 1, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_Template_li_click_9_listener() { return ctx.fop.paging.gotoPreviousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polyline", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FopPagingComponent_li_14_Template, 2, 5, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopPagingComponent_Template_li_click_16_listener() { return ctx.fop.paging.gotoNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "polyline", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FopPagingComponent_a_22_Template, 1, 2, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FopPagingComponent_a_23_Template, 2, 1, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fop.numberOfDisplayResiltInPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fop.paging.pagingLimt.limitOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", ctx.u.r.showing, " ", ctx.fop.paging.from, " - ", ctx.fop.paging.to, " ", ctx.u.r.of, " ", ctx.fop.paging.itemsCount, " ", ctx.u.r.entiries, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, !ctx.fop.paging.allowPreviousPage))("title", ctx.u.r.privousPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 16, ctx.fop.paging.pages, ctx.fop.paging.pagesSeliceSkip, ctx.fop.paging.pagesSeliceTake));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, !ctx.fop.paging.allowNextPage))("title", ctx.u.r.nextPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.fop.paging.disableGetMoreButton));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fop.paging.isRequestingToServer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fop.paging.isRequestingToServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    website_url: "http://localhost:4100/",
    api_url: "http://localhost:41001/",
    api_url1: "http://localhost:41001"
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

/***/ "C2k8":
/*!*************************************!*\
  !*** ./src/services/seo.service.ts ***!
  \*************************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");



/**
 * SEO Service
 */
class SEOService {
    constructor(meta, title, u) {
        this.meta = meta;
        this.title = title;
        this.u = u;
    }
    /**
     * Update Static Seo Like ('Home Page','PostsPage','VideosPage',....)
     * @param seo
     */
    updateSEO(pageTitleKey) {
        //Save Current Seo Information For Refresh Affter Cchange Resources
        this.title.setTitle(this.u.r[pageTitleKey]);
    }
} //End Class
SEOService.ɵfac = function SEOService_Factory(t) { return new (t || SEOService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
SEOService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SEOService, factory: SEOService.ɵfac });


/***/ }),

/***/ "FIK1":
/*!*****************************************!*\
  !*** ./src/enums/response.type.enum.ts ***!
  \*****************************************/
/*! exports provided: ResponseTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTypeEnum", function() { return ResponseTypeEnum; });
var ResponseTypeEnum;
(function (ResponseTypeEnum) {
    ResponseTypeEnum[ResponseTypeEnum["success"] = 1] = "success";
    ResponseTypeEnum[ResponseTypeEnum["error"] = 2] = "error";
    ResponseTypeEnum[ResponseTypeEnum["info"] = 3] = "info";
    ResponseTypeEnum[ResponseTypeEnum["unauthorized"] = 4] = "unauthorized";
    ResponseTypeEnum[ResponseTypeEnum["invalidAccessToken"] = 5] = "invalidAccessToken";
})(ResponseTypeEnum || (ResponseTypeEnum = {}));


/***/ }),

/***/ "H5vj":
/*!*******************************************!*\
  !*** ./src/services/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class HttpService {
    constructor(http) {
        this.http = http;
    }
    /**
   * User Sign In
   * @param userLoginInfo User Sign In Data
   */
    signIn(userInfo) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/signInByUserName`, JSON.stringify(userInfo), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
    * Create A New User
    * @param userLoginInfo Create A New User
    */
    createUser(userData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/createUser`, userData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Current Account Information For Update
     */
    getCurrentUserInformationForUpdate() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getCurrentUserInformationForUpdate`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Update Current User Information
     * @param post
     * @param image
     */
    updateUserInformtion(formData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/update`, formData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
  * Get Users
  */
    getUsers(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getUsers/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Delete User
     * @param id
     */
    deleteUser(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/delete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     *
     * @param id Get User Information To Update
     */
    getUserInformationToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/getUserInformationToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
    * Update User
    */
    updateUser(video) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/update`, JSON.stringify(video), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
   * Update User Data By Admin
   */
    updateUserData(formData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/user/updateUserData`, formData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get General Settings*/
    getGeneralSettings(skip, limit, pageTargetName) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/getGeneralSettings/${skip}/${limit}/${pageTargetName}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New General Setting */
    createNewGeneralSetting(value, pageTargetName) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/createNewGeneralSetting/${pageTargetName}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Genral Setting From Server To Update  */
    getGenralSettingToUpdate(id, pageTargetName) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/getGenralSettingToUpdate/${id}/${pageTargetName}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update General Setting */
    updateGeneralSetting(value, pageTargetName) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/updateGeneralSetting/${pageTargetName}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete General Setting */
    deleteGeneralSetting(value, pageTargetName) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/setting/deleteGeneralSetting/${pageTargetName}`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get States*/
    getStates(skip, limit) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/getStates/${skip}/${limit}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New State */
    createNewState(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/createNewState`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get State From Server To Update  */
    getStateToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/getStateToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update State */
    updateState(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/updateState`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete State */
    deleteState(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/state/deleteState`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Freights*/
    getFreights(skip, limit, filterOption) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/getFreights/${skip}/${limit}`, JSON.stringify(filterOption), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New Freight */
    createNewFreight(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/createNewFreight`, value, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Freight From Server To Update  */
    getFreightToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/getFreightToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get Freight From Server To Delete  */
    getFreightToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/getFreightToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update Freight */
    updateFreight(formData) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/updateFreight`, formData, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete Freight */
    deleteFreight(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/deleteFreight`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Select Items
     * @param itemsNames
     */
    getSelectItems(itemsNames) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/selectItem/getSelectItems`, JSON.stringify(itemsNames), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Move Freights To Container
     * @param itemsNames
     */
    moveFreightsToContainer(containerId, ids) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/freight/moveToContainer/${containerId}`, JSON.stringify(ids), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get FinancialTransfers*/
    getFinancialTransfers(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransfers/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New FinancialTransfer */
    createNewFinancialTransfer(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/createNewFinancialTransfer`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get FinancialTransfer From Server To Update  */
    getFinancialTransferToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransferToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get FinancialTransfer From Server To Delete  */
    getFinancialTransferToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransferToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update FinancialTransfer */
    updateFinancialTransfer(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/updateFinancialTransfer`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete FinancialTransfer */
    deleteFinancialTransfer(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/deleteFinancialTransfer/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Financial Transfer To Payment */
    getFinancialTransferToPayment(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getFinancialTransferToPayment/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Financial Transfer Payment Amount*/
    financialTrans_paymentAmount(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/paymentAmount`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Financial Transfer Details*/
    getFinancialTransferDetails(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/financialTransfer/getDetails/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get Container Report*/
    getContainersReport(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getContainersReport/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Clinet Freights Report
     */
    getClinetFreightsReport(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getClinetFreightsReport/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
   * Get Freight Details To Clinet
   */
    getFreightDetailsToClinet(id) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getFreightDetailsToClinet/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Freight Details
     */
    getFreightDetails(id) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/report/getFreightDetails/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Get SectorSales*/
    getSectorSales(skip, limit, filter) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getSectorSales/${skip}/${limit}`, JSON.stringify(filter), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Create New SectorSale */
    createNewSectorSale(value) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/createNewSectorSale`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get SectorSale From Server To Update  */
    getSectorSaleToUpdate(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getSectorSaleToUpdate/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**Get SectorSale From Server To Delete  */
    getSectorSaleToDelete(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getSectorSaleToDelete/${id}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Update SectorSale */
    updateSectorSale(value) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/updateSectorSale`, JSON.stringify(value), { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /** Delete SectorSale */
    deleteSectorSale(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/deleteSectorSale/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
    /**
     * Get Sector Sale Details
     */
    getSectorSaleDetails(id) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_url}api/sectorSale/getDetails/${id}`, "", { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.body));
    }
} // End CLass
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });


/***/ }),

/***/ "IRI6":
/*!******************************************!*\
  !*** ./src/modules/app.router.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/home/home.component */ "9vUh");
/* harmony import */ var src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentcation/user.auth.can.active.service */ "bPFj");
/* harmony import */ var src_app_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account-setting/account-setting.component */ "qCTy");
/* harmony import */ var src_app_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sigh-in/sigh.in.component */ "Sx1+");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");









const ROUTS = [
    {
        path: '', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'accountsetting', component: src_app_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_4__["AccountSettingComponent"], canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"]],
        data: {
            breadcrumbs: ["accountSetting"]
        }
    },
    { path: 'signIn', component: src_app_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_5__["SighInComponent"] },
    {
        path: 'setting',
        loadChildren: () => Promise.all(/*! import() | settings-module */[__webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"), __webpack_require__.e("settings-module")]).then(__webpack_require__.bind(null, /*! ./settings.module */ "e02R")).then(mod => mod.SettingsModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
    },
    {
        path: 'users',
        loadChildren: () => Promise.all(/*! import() | users-module */[__webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"), __webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~users-module"), __webpack_require__.e("users-module")]).then(__webpack_require__.bind(null, /*! ./users.module */ "ZgGy")).then(mod => mod.UsersModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
    },
    {
        path: 'freights',
        loadChildren: () => Promise.all(/*! import() | freights-module */[__webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"), __webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~users-module"), __webpack_require__.e("common"), __webpack_require__.e("freights-module")]).then(__webpack_require__.bind(null, /*! ./freights.module */ "W/pb")).then(mod => mod.FreightsModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
    },
    {
        path: 'financialTransfers',
        loadChildren: () => Promise.all(/*! import() | financial-transfares-module */[__webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"), __webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~users-module"), __webpack_require__.e("financial-transfares-module")]).then(__webpack_require__.bind(null, /*! ./financial.transfares.module */ "1vx0")).then(mod => mod.FinancialTransfersModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"], src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_6__["AdminAuthCanActive"]],
    },
    {
        path: 'reports',
        loadChildren: () => Promise.all(/*! import() | reports-module */[__webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"), __webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~users-module"), __webpack_require__.e("common"), __webpack_require__.e("reports-module")]).then(__webpack_require__.bind(null, /*! ./reports.module */ "IOzy")).then(mod => mod.ReportsModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"]],
    },
    {
        path: 'sectorSales',
        loadChildren: () => Promise.all(/*! import() | sector-sales-module */[__webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"), __webpack_require__.e("default~financial-transfares-module~freights-module~reports-module~sector-sales-module~users-module"), __webpack_require__.e("common"), __webpack_require__.e("sector-sales-module")]).then(__webpack_require__.bind(null, /*! ./sector.sales.module */ "0eXW")).then(mod => mod.SectorSalesModule),
        canActivate: [_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthCanActive"]],
    },
    { path: '**', component: src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTS, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "J4aQ":
/*!************************************************************!*\
  !*** ./src/services/authentcation/current.user.service.ts ***!
  \************************************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var _behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../behavior.subject.service */ "okBh");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local.storage.service */ "LKR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/resources/resources.ar.model */ "wG7n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");






class CurrentUserService {
    /**
     *
     */
    constructor(router) {
        this.router = router;
        /**
           * Resources
           */
        this.r = new src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_3__["ResourcesArModel"]();
        /**
    * When User Changed Language From Fotter Of Changed By Socket.io
    */
        this.onChangeLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // listener User If Changed
        _behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].userInformation.subscribe(res => {
            this.changedUserInformation(res);
        });
    }
    /**
     * CUrrent User Information
     */
    get u() {
        return _behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].userInformation.value;
    }
    ;
    changedUserInformation(userInfo) {
        this.isUserlogged = userInfo._id ? true : false;
    }
    /**
     * Log Out User
     */
    logOut(donotTellServer = null) {
        _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].setUsereInformation({});
        _local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].removeAccessToken();
        this.router.navigate(['/']);
    }
} // End CLass
CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CurrentUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CurrentUserService, factory: CurrentUserService.ɵfac });


/***/ }),

/***/ "LKR5":
/*!***********************************************!*\
  !*** ./src/services/local.storage.service.ts ***!
  \***********************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/local.storage.keys.const */ "jBFT");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "BOF4");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _behavior_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behavior.subject.service */ "okBh");



class LocalStorageService {
    /**
     * Get Access Token
     */
    static get accessToken() { return localStorage.getItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].userAccessToken); }
    /**
     * Save Access Token In Loacl Storage
     */
    static set accessToken(accessToken) {
        // Save Access Token
        localStorage.setItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].userAccessToken, accessToken);
        // Decode User Information For Upate Header And Resources And Another
        this.setUsereInformation(jwt_decode__WEBPACK_IMPORTED_MODULE_1__(accessToken));
    }
    /**
     * Remove Access Token
     */
    static removeAccessToken() {
        localStorage.removeItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].userAccessToken);
    }
    /**
     * Save User Login Informarion In Local Storage
     * @param userInfo
     */
    static setUsereInformation(userInfo) {
        let userData = {
            _id: userInfo._id,
            userName: userInfo.userName,
            fullName: userInfo.fullName,
            picturePath: userInfo.picturePath,
            languageCode: userInfo.languageCode,
            userTypeId: userInfo.userTypeId
        };
        localStorage.setItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].currentUserInformation, JSON.stringify(userData));
        // Update User Info
        _behavior_subject_service__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubjectService"].userInformation.next(userData);
    }
    /**
     * Get Current User Information Saved
     */
    static getUserInformation() {
        const userInfo = localStorage.getItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].currentUserInformation);
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    }
    /**
     * Set User Lanuge And The Default Lanugage Is English
     */
    static setLanugage(newLanguageCode) {
        let userInfo = this.getUserInformation();
        if (userInfo) {
            // Update Current User Information
            userInfo.languageCode = newLanguageCode;
        }
        else {
            // Set New User Information
            userInfo = {
                languageCode: newLanguageCode
            };
        }
        this.setUsereInformation(userInfo);
    }
    /**
     * SET: Number Of Result In Page
     */
    static set fopNumberOfDisplayResultInPage(val) {
        localStorage.setItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].fopNumberOfDisplayResultInPage, val.toString());
    }
    /**
     * GET: Number Of Result In Page
     */
    static get fopNumberOfDisplayResultInPage() {
        let data = JSON.parse(localStorage.getItem(_consts_local_storage_keys_const__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].fopNumberOfDisplayResultInPage));
        if (data)
            return Number(data);
        return data;
    }
} // end class


/***/ }),

/***/ "MODS":
/*!********************************!*\
  !*** ./src/pipes/sort.pipe.ts ***!
  \********************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");


/**
 * Sort By Dynamic Value From Resourcs
 */
class SortPipe {
    constructor(u) {
        this.u = u;
    }
    transform(items, fieldName, reverse) {
        if (!items || !fieldName) {
            return items;
        }
        if (reverse) {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = this.u.r[b[fieldName]]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = this.u.r[a[fieldName]]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return -1;
                }
                else if (curretnValue > nextValue) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = this.u.r[b[fieldName]]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = this.u.r[a[fieldName]]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return 1;
                }
                else if (curretnValue > nextValue) {
                    return -1;
                }
                return 0;
            });
        }
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sortPipe", type: SortPipe, pure: true });


/***/ }),

/***/ "NAu2":
/*!*******************************************************************!*\
  !*** ./src/app/shared/export-buttons/export.buttons.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExportButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportButtonsComponent", function() { return ExportButtonsComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");



class ExportButtonsComponent {
    constructor(u) {
        this.u = u;
        this.styleLinks = "";
    }
    ngOnInit() {
        let allStylesLink = document.querySelectorAll('title,link,style');
        for (let index = 0; index <= allStylesLink.length - 1; index++)
            this.styleLinks += allStylesLink.item(index).outerHTML;
    }
    /**
     * Print Content
     */
    print() {
        debugger;
        let printWindow = window.open(null, "");
        printWindow.document.write(`
        <html >
            <head>
            <base href="${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].website_url}">
                <style>
                @media print{
                    app-export-buttons{
                        display:none
                    }
                    }
                }
                </style>
                ${this.styleLinks}
            </head>
            <body>
            ${document.getElementById(this.targetDivId).outerHTML}
            </body>
        </html>`);
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.document.close();
            printWindow.close();
        }, 100);
    }
} //End Class
ExportButtonsComponent.ɵfac = function ExportButtonsComponent_Factory(t) { return new (t || ExportButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
ExportButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExportButtonsComponent, selectors: [["app-export-buttons"]], inputs: { targetDivId: ["divId", "targetDivId"] }, decls: 1, vars: 1, consts: [[1, "btn", "btn-outline-primary", "m-1", 3, "innerText", "click"]], template: function ExportButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExportButtonsComponent_Template_button_click_0_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.u.r.print);
    } }, styles: [""] });


/***/ }),

/***/ "NqkH":
/*!***************************************!*\
  !*** ./src/services/alert.service.ts ***!
  \***************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/resources/resources.ar.model */ "wG7n");
/* harmony import */ var src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/enums/response.type.enum */ "FIK1");


class AlertService {
    /**
     * Show Alert By Response Type
     * @param res
     */
    static showResponseMessage(res) {
        switch (res.responseType) {
            case src_enums_response_type_enum__WEBPACK_IMPORTED_MODULE_1__["ResponseTypeEnum"].error:
                {
                    console.info(res);
                    return AlertService.errorMessage(res.message);
                }
            default:
                {
                    console.log(res);
                    return AlertService.infoMesage(res.message);
                }
        }
    }
    /**
     * Show Error Alert
     * @param message
     */
    static errorMessage(message) {
        this.defultOptions.text = message;
        this.defultOptions.backgroundColor = 'rgb(231, 81, 90)';
        window['Snackbar'].show(this.defultOptions);
    }
    /**
     * Show Info Alert
     * @param message
     */
    static infoMesage(message) {
        this.defultOptions.backgroundColor = null;
        this.defultOptions.text = message;
        window['Snackbar'].show(this.defultOptions);
    }
    /**
     * Show Message For : Observable Error When Request To Server
     * @param error
     */
    static canRequestError(error, r = new src_models_resources_resources_ar_model__WEBPACK_IMPORTED_MODULE_0__["ResourcesArModel"]()) {
        console.log('Error', error);
        AlertService.errorMessage((error === null || error === void 0 ? void 0 : error.message) || r.iCanNotAccessToServer);
    }
} // End Class
AlertService.defultOptions = {
    actionText: '✖'
    //   pos: I Will change This Value Of Key From CurrentUserService
};


/***/ }),

/***/ "O0Z9":
/*!****************************************!*\
  !*** ./src/pipes/fop/fop.sort.pipe.ts ***!
  \****************************************/
/*! exports provided: FopSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopSortPipe", function() { return FopSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class FopSortPipe {
    constructor() { }
    transform(items, fieldName, reverse) {
        if (!items || !fieldName) {
            return items;
        }
        if (reverse) {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = b[fieldName]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = a[fieldName]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return -1;
                }
                else if (curretnValue > nextValue) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            return items.sort((a, b) => {
                var _a, _b;
                const curretnValue = (_a = b[fieldName]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
                const nextValue = (_b = a[fieldName]) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
                if (curretnValue < nextValue) {
                    return 1;
                }
                else if (curretnValue > nextValue) {
                    return -1;
                }
                return 0;
            });
        }
    }
}
FopSortPipe.ɵfac = function FopSortPipe_Factory(t) { return new (t || FopSortPipe)(); };
FopSortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fopSortPipe", type: FopSortPipe, pure: true });


/***/ }),

/***/ "O43r":
/*!*********************************************************************!*\
  !*** ./src/services/authentcation/admin.auth.can.active.service.ts ***!
  \*********************************************************************/
/*! exports provided: AdminAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthCanActive", function() { return AdminAuthCanActive; });
/* harmony import */ var src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/i.user.type.enum */ "sSkb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




/**
 * هنا ما يهمنا فقط ان يكون المستخدم ادمن
 */
class AdminAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (this.u.u.userTypeId != src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin) {
            this.router.navigate(['/404']);
        }
        return this.u.isUserlogged;
    }
} //End Class
AdminAuthCanActive.ɵfac = function AdminAuthCanActive_Factory(t) { return new (t || AdminAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminAuthCanActive, factory: AdminAuthCanActive.ɵfac });


/***/ }),

/***/ "PlsR":
/*!***********************************************!*\
  !*** ./src/directives/write.svg.directive.ts ***!
  \***********************************************/
/*! exports provided: WriteSVGDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteSVGDirective", function() { return WriteSVGDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

/**
 * Render SVG Conten I Used In Sidbar
 */
class WriteSVGDirective {
    constructor(elm) {
        this.elm = elm;
    }
    ngOnInit() {
        this.elm.nativeElement.innerHTML = this.writeSVG;
    }
} //End Class
WriteSVGDirective.ɵfac = function WriteSVGDirective_Factory(t) { return new (t || WriteSVGDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
WriteSVGDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WriteSVGDirective, selectors: [["", "writeSVG", ""]], inputs: { writeSVG: "writeSVG" } });


/***/ }),

/***/ "QVRC":
/*!***************************************************!*\
  !*** ./src/services/custom.validators.service.ts ***!
  \***************************************************/
/*! exports provided: CustomValidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidatorsService", function() { return CustomValidatorsService; });
/**
 * Custom Validatros Service
 */
class CustomValidatorsService {
    /**
     * Invlaid Url Validator
     */
    static url(abs) {
        if (abs.value && !RegExp(/(http:\/\/)..*|(https:\/\/)..*/gi).test(abs.value)) {
            return { invalidUrl: true };
        }
        return null;
    }
    /**
     * Invlaid UserName Validator
     * Check From User Name Value If Not Avliable, Must Be Enter English Word And Numebr And (_) And (.) Only
     */
    static userName(abs) {
        if (abs.value && RegExp(/[^A-z0-9_.]/).test(abs.value)) {
            return { invalidUserName: true };
        }
        return null;
    }
    /**
     * Invlaid Phone Number Validator
     * Check From Phone Number Value
     */
    static phoneNumber(abs) {
        if (abs.value && !RegExp("^[0-9]{10,15}$").test(abs.value)) {
            return { invalidPhoneNumber: true };
        }
        return null;
    }
    /**Check If Invalid Number */
    static invalidNumber(abs) {
        if (abs.value && !RegExp("^([0-9][0-9]*)$|^([0-9].[0-9]*)$").test(abs.value)) {
            return { invalidNumber: true };
        }
        return null;
    }
    /**
     * Check If Invalid Date
     * @param abs
     */
    static invalidDate(abs) {
        // if (abs.value && )) {
        //     return { invalidNumber: true };
        // }
        return null;
    }
} // End Class


/***/ }),

/***/ "QZpK":
/*!*********************************************!*\
  !*** ./src/services/sweet.alert.service.ts ***!
  \*********************************************/
/*! exports provided: SweetAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertService", function() { return SweetAlertService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentcation/current.user.service */ "J4aQ");



class SweetAlertService {
    constructor(u) {
        this.u = u;
    }
    confirm(text, confirmButtonText, cancelButtonText) {
        return new Promise((resolve, reject) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                // title: title,
                text: text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: confirmButtonText || this.u.r.ok,
                cancelButtonText: cancelButtonText || this.u.r.cancel,
                padding: '2em'
            }).then((result) => {
                //Resolve When Ok Only
                if (result.value) {
                    resolve();
                }
            });
        });
    }
} //End Class
SweetAlertService.ɵfac = function SweetAlertService_Factory(t) { return new (t || SweetAlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
SweetAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SweetAlertService, factory: SweetAlertService.ɵfac });


/***/ }),

/***/ "Qttl":
/*!**************************************!*\
  !*** ./src/services/menu.service.ts ***!
  \**************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/i.user.type.enum */ "sSkb");

class MenuService {
    static getMenu() {
        return [
            //All
            {
                url: "/",
                isLonly: true,
                resourceKey_title: "homePage",
                svgIcon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home" >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline> <line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            },
            //Settings
            {
                id: "settings",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "settings",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-cogs fa-w-20 fa-3x"><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin],
                subMenus: [
                    {
                        url: "/setting/ports",
                        nestedurls: [new RegExp(/setting\/ports\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "ports",
                    }, {
                        url: "/setting/freightCases",
                        nestedurls: [new RegExp(/setting\/freightCases\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "freightCases",
                    },
                    {
                        url: "/setting/buySources",
                        nestedurls: [new RegExp(/setting\/buySources\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "buySources",
                    },
                    {
                        url: "/setting/containers",
                        nestedurls: [new RegExp(/setting\/containers\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "containers",
                    },
                    {
                        url: "/setting/navigationalWayes",
                        nestedurls: [new RegExp(/setting\/navigationalWayes\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: false,
                        resourceKey_title: "navigationalWayes",
                    },
                    {
                        url: "/setting/carMarks",
                        nestedurls: [new RegExp(/setting\/carMarks\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "carMarks",
                    },
                    {
                        url: "/setting/states",
                        nestedurls: [new RegExp(/setting\/states\/(create|edit|delete)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "states",
                    },
                ]
            },
            //Users
            {
                id: "users",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "users",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users-cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-users-cog fa-w-20 fa-3x"><path fill="currentColor" d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin],
                subMenus: [
                    {
                        url: "/users",
                        nestedurls: [new RegExp(/users\/edit/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "users",
                    }, {
                        url: "/users/create",
                        resourceKey_title: "createANewUser",
                    }
                ]
            },
            //Freights
            {
                id: "freights",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "freights",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-network-wired fa-w-20 fa-3x"><path fill="currentColor" d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin],
                subMenus: [
                    {
                        url: "/freights",
                        nestedurls: [new RegExp(/freights\/edit/, 'i'), new RegExp(/reports\/freights\/fullDetails/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "freights",
                    }, {
                        url: "/freights/create",
                        resourceKey_title: "createANewFreight",
                    }
                ]
            },
            //Financial Transfers
            {
                id: "financialTransfers",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "financialTransfers",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" class="svg-inline--fa fa-dollar-sign fa-w-9 fa-3x"><path fill="currentColor" d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin],
                subMenus: [
                    {
                        url: "/financialTransfers",
                        nestedurls: [new RegExp(/financialTransfers\/(edit|payAmount|details)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "financialTransfers",
                    }, {
                        url: "/financialTransfers/create",
                        resourceKey_title: "createANewFinancialTransfer",
                    }
                ]
            },
            //Sector Sales
            {
                id: "sectorSales",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "theSectorSales",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-coins fa-w-16 fa-3x"><path fill="currentColor" d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin],
                subMenus: [
                    {
                        url: "/sectorSales",
                        nestedurls: [new RegExp(/sectorSales\/(edit|details)/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "sectorSales",
                    }, {
                        url: "/sectorSales/create",
                        resourceKey_title: "createANewSectorSale",
                    }
                ]
            },
            //Reports
            {
                id: "reports",
                nestedurls: [],
                isLonly: false,
                resourceKey_title: "reports",
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" class="svg-inline--fa fa-chart-pie fa-w-17 fa-3x"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].admin],
                subMenus: [
                    {
                        url: "/reports/containers",
                        nestedurls: [new RegExp(/reports\/containers/, 'i')],
                        isAllowShowBreadcrumbToNestedUrls: true,
                        resourceKey_title: "containersReport",
                    },
                ]
            },
            //Reports Freights For Clinets
            {
                url: "/reports/freights",
                isLonly: true,
                resourceKey_title: "freightsReport",
                nestedurls: [new RegExp(/reports\/freights\/details/, 'i')],
                svgIcon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-network-wired fa-w-20 fa-3x"><path fill="currentColor" d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z" class=""></path></svg>`,
                userTypesId: [src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].company, src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].personal],
            }
        ];
    }
} //End Class


/***/ }),

/***/ "Sx1+":
/*!**********************************************!*\
  !*** ./src/app/sigh-in/sigh.in.component.ts ***!
  \**********************************************/
/*! exports provided: SighInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SighInComponent", function() { return SighInComponent; });
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");












function SighInComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 28);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function SighInComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 28);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.invalidEmail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function SighInComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 28);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
class SighInComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_0__["SharedComponents"] {
    constructor(u, seo, http, router) {
        super();
        this.u = u;
        this.seo = seo;
        this.http = http;
        this.router = router;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            showPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.formSubmitError = false;
    }
    ngOnInit() {
        this.seo.updateSEO("signIn");
    }
    /**
     * Sign In
     */
    signIn() {
        if (this.signInForm.invalid) {
            this.formSubmitError = true;
            return;
        }
        this.signInForm.disable();
        this.allSubscriptions.push(this.http.signIn(this.signInForm.value).subscribe(res => {
            debugger;
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].showResponseMessage(res);
            if (res.isSuccess) {
                src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"].accessToken = res.result;
                this.router.navigate(['/']);
            }
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"].canRequestError(error);
        }, () => {
            this.signInForm.enable();
        }));
    }
} //End CLass
SighInComponent.ɵfac = function SighInComponent_Factory(t) { return new (t || SighInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_7__["SEOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
SighInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SighInComponent, selectors: [["app-sigh-in"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 10, consts: [[1, "form-container"], [1, "form-form"], [1, "form-form-wrap"], [1, "form-content"], [1, "", 3, "innerHTML"], [1, "text-left", 3, "formGroup", "submit"], [1, "form"], ["id", "username-field", 1, "field-wrapper", "input"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-user"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["id", "userName", "name", "userName", "type", "text", "formControlName", "userName", 1, "form-control", 3, "placeholder"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], ["id", "password-field", 1, "field-wrapper", "input", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-lock"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "password", "name", "password", "formControlName", "password", 1, "form-control", 3, "type", "placeholder"], [1, "d-sm-flex", "justify-content-between"], [1, "field-wrapper", "toggle-pass"], [1, "d-inline-block", 3, "innerHTML"], [1, "switch", "s-primary"], ["type", "checkbox", "id", "toggle-password", "formControlName", "showPassword", 1, "d-none"], [1, "slider", "round"], [1, "field-wrapper"], ["type", "submit", "value", "", 1, "btn", "btn-primary", 3, "innerHTML"], [1, "form-image"], [1, "l-image"], [1, "invalid-data", 3, "innerHtml"]], template: function SighInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function SighInComponent_Template_form_submit_6_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "circle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SighInComponent_small_13_Template, 1, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SighInComponent_small_14_Template, 1, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "rect", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, SighInComponent_small_20_Template, 1, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.u.r.signIn, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signInForm.get("userName").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signInForm.get("userName").hasError("userName") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.signInForm.get("showPassword").value ? "text" : "password")("placeholder", ctx.u.r.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signInForm.get("password").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.u.r.showPassword, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.u.r.signIn, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/ar-SA */ "YyKh");
/* harmony import */ var _angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/behavior.subject.service */ "okBh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/sid-bar/sid-bar.component */ "WB2Y");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "APW9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");













function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-sid-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
} }
class AppComponent {
    constructor(u, http) {
        this.u = u;
        this.http = http;
    }
    ngOnInit() {
        // Load Current User Information
        this.loadCurrentUserInformation();
        this.registerLocales();
    }
    /**
     * Register Locale Here For Use In Any Component
     */
    registerLocales() {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_ar_SA__WEBPACK_IMPORTED_MODULE_2___default.a, "ar");
    }
    /**
     * Load User Information From Local Storage And If Not Logged In I Will Set Default Lanugage For Him
     */
    loadCurrentUserInformation() {
        /**
         * If Not Found Language I Will Add Langage Id In Local Storage In Key "UI (User Information)"
         */
        const currentUserInformation = src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"].getUserInformation();
        if (currentUserInformation) {
            src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubjectService"].userInformation.next(currentUserInformation);
        }
    }
} // End CLass
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["userNotLoggedIn", ""], ["id", "container", 1, "main-container"], [1, "overlay"], [1, "search-overlay"], ["id", "content", 1, "main-content"], [1, "layout-px-spacing", "layout-top-spacing"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.u.isUserlogged)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_8__["SidBarComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [""] });


/***/ }),

/***/ "WB2Y":
/*!*****************************************************!*\
  !*** ./src/app/shared/sid-bar/sid-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidBarComponent", function() { return SidBarComponent; });
/* harmony import */ var src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/behavior.subject.service */ "okBh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/menu.service */ "Qttl");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/directives/write.svg.directive */ "PlsR");









function SidBarComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", menu_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("writeSVG", menu_r1.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r2.u.r[menu_r1.resourceKey_title], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SidBarComponent_li_10_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "polyline", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#", menu_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("writeSVG", menu_r1.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r3.u.r[menu_r1.resourceKey_title], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SidBarComponent_li_10_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", sub_r7.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", sub_r7.url)("innerHtml", ctx_r4.u.r[sub_r7.resourceKey_title], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function SidBarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidBarComponent_li_10_a_1_Template, 4, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidBarComponent_li_10_a_2_Template, 7, 4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidBarComponent_li_10_li_4_Template, 2, 4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.isLonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !menu_r1.isLonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("show", menu_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menu_r1.subMenus);
} }
class SidBarComponent {
    constructor(u, router, location) {
        this.u = u;
        this.router = router;
        this.location = location;
        this.menus = [];
    }
    ngOnInit() {
        this.menus = src_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"].getMenu().filter(m => !m.userTypesId || m.userTypesId.findIndex(t => t == this.u.u.userTypeId) >= 0);
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(reo => reo instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(r => {
            src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.next({});
            //Check If This Home Page
            let menuIsFound = false;
            this.menus.forEach(m => {
                var _a;
                m.isActive = false;
                if (menuIsFound)
                    return;
                if (m.isLonly) {
                    //Active Menu
                    let isActiveByBasicUrl = m.url.toLowerCase() == r['url'].toLowerCase();
                    let isActiveByNesterUrls = ((_a = m.nestedurls) === null || _a === void 0 ? void 0 : _a.findIndex(url => url.test(r['url']))) > -1;
                    m.isActive = isActiveByBasicUrl || isActiveByNesterUrls;
                    if (m.isActive)
                        menuIsFound = true;
                    src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.next({ menu: m, subMenu: null, isActiveByNesterUrls: isActiveByBasicUrl, isActiveByBasicUrl: isActiveByBasicUrl, isAllowShowBreadcrumbToNestedUrls: true });
                }
                else {
                    m.subMenus.forEach(sub => {
                        var _a;
                        sub.isActive = false;
                        if (menuIsFound)
                            return;
                        //Active Submenu
                        let isActiveByBasicUrl = sub.url.toLowerCase() == r['url'].toLowerCase();
                        let isActiveByNesterUrls = ((_a = sub.nestedurls) === null || _a === void 0 ? void 0 : _a.findIndex(url => url.test(r['url']))) > -1;
                        sub.isActive = isActiveByBasicUrl || isActiveByNesterUrls;
                        //Active Parent
                        m.isActive = sub.isActive;
                        if (sub.isActive) {
                            menuIsFound = true;
                            src_services_behavior_subject_service__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubjectService"].activePage.next({ menu: m, subMenu: sub, isActiveByNesterUrls: isActiveByNesterUrls, isActiveByBasicUrl: isActiveByBasicUrl, isAllowShowBreadcrumbToNestedUrls: sub.isAllowShowBreadcrumbToNestedUrls });
                        }
                    });
                }
            });
            //Init App For Redesign Menu
            setTimeout(() => {
                window['App'].initSideBar();
            }, 1000);
        });
    }
} //End CLass
SidBarComponent.ɵfac = function SidBarComponent_Factory(t) { return new (t || SidBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
SidBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidBarComponent, selectors: [["app-sid-bar"]], decls: 11, vars: 5, consts: [[1, "sidebar-wrapper", "sidebar-theme"], ["id", "sidebar"], [1, "profile-info"], [1, "user-cover-image"], [1, "user-info"], ["width", "50", "height", "50", 3, "src", "alt"], [3, "innerHtml"], [1, "shadow-bottom"], ["id", "accordionExample", 1, "list-unstyled", "menu-categories"], ["class", "menu", 3, "active", 4, "ngFor", "ngForOf"], [1, "menu"], ["class", "dropdown-toggle", 3, "routerLink", 4, "ngIf"], ["data-toggle", "collapse", "class", "dropdown-toggle", 3, "href", 4, "ngIf"], ["data-parent", "#accordionExample", 1, "collapse", "submenu", "list-unstyled", 3, "id"], [3, "active", 4, "ngFor", "ngForOf"], [1, "dropdown-toggle", 3, "routerLink"], [3, "writeSVG"], ["data-toggle", "collapse", 1, "dropdown-toggle", 3, "href"], [1, ""], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-right"], ["points", "9 18 15 12 9 6"], [3, "routerLink", "innerHtml"]], template: function SidBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SidBarComponent_li_10_Template, 5, 8, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.u.u.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.u.r.userPicture);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.u.u.fullName, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", "@" + (ctx.u.u == null ? null : ctx.u.u.userName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], src_directives_write_svg_directive__WEBPACK_IMPORTED_MODULE_7__["WriteSVGDirective"]], encapsulation: 2 });


/***/ }),

/***/ "YSHg":
/*!**********************************************************************!*\
  !*** ./src/services/authentcation/clinet.auth.can.active.service.ts ***!
  \**********************************************************************/
/*! exports provided: ClinetAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinetAuthCanActive", function() { return ClinetAuthCanActive; });
/* harmony import */ var src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enums/i.user.type.enum */ "sSkb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




/**
 * هنا ما يهمنا فقط ان يكون المستخدم عميل سواء شركة او فرد
 */
class ClinetAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (this.u.u.userTypeId != src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].company && this.u.u.userTypeId != src_enums_i_user_type_enum__WEBPACK_IMPORTED_MODULE_0__["UserTypeEnum"].personal) {
            this.router.navigate(['/404']);
        }
        return this.u.isUserlogged;
    }
} //End Class
ClinetAuthCanActive.ɵfac = function ClinetAuthCanActive_Factory(t) { return new (t || ClinetAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ClinetAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClinetAuthCanActive, factory: ClinetAuthCanActive.ɵfac });


/***/ }),

/***/ "bPFj":
/*!********************************************************************!*\
  !*** ./src/services/authentcation/user.auth.can.active.service.ts ***!
  \********************************************************************/
/*! exports provided: UserAuthCanActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthCanActive", function() { return UserAuthCanActive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



/**
 * هنا ما يهمنا فقط ان يكون المستخدم مسجل الدخول للموقع
 */
class UserAuthCanActive {
    constructor(u, router) {
        this.u = u;
        this.router = router;
    }
    canActivate() {
        if (!this.u.isUserlogged) {
            this.router.navigate(['/signIn']);
        }
        return this.u.isUserlogged;
    }
} //End Class
UserAuthCanActive.ɵfac = function UserAuthCanActive_Factory(t) { return new (t || UserAuthCanActive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserAuthCanActive.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserAuthCanActive, factory: UserAuthCanActive.ɵfac });


/***/ }),

/***/ "ePWN":
/*!******************************************!*\
  !*** ./src/pipes/fop/fop.filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FopFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopFilterPipe", function() { return FopFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");


/**
 * Fop Filter
 */
class FopFilterPipe {
    constructor(u) {
        this.u = u;
    }
    transform(items, searchText, fop) {
        if (!items || !searchText)
            return items;
        return this.filterArray(items, searchText, fop);
    }
    /**
 * اتمام عغملية الفلترة
 * @param {any} items العناصر الذى سوف تفلتر
 * @param {any} searchText
 * @param {any} fieldTargets الحقول الذى سوف نبحث بها
 */
    filterArray(items, searchText, fop) {
        let result = [], searchTextIsNotNumber = isNaN(Number(searchText));
        //Filter Now
        items.forEach(it => {
            let isAllow = false;
            for (const field of fop.fieldNames) {
                /**
                               * اذا كان البحث عن نص اذا سوف نبحث عن القيم الى ما بين "" فقط
                               * اذا كان رقم يبقى نبحث عادى لاكن الارقم لا توضع بين علامات تنصيص لذا اعتمدت على ان يكون هوا اخر حقل فى الاوبجكت او يلية حقل جديد  وطبيع الفاصل بينهم بيكون العلامة , دى
                               */
                let pattern = searchTextIsNotNumber ? `"${field}":".*${searchText}.*"` : `"${field}":.*${searchText}.*(,|\})`, reg = RegExp(pattern, "mi");
                isAllow = reg.test(JSON.stringify(it));
                //Out Fro Loop If Current Object Is Allow 
                if (isAllow)
                    break;
            }
            if (isAllow)
                result.push(it);
        });
        //ReFop Now For Update pagination
        fop.reFop(result.length);
        return result;
    }
} //End Clss
FopFilterPipe.ɵfac = function FopFilterPipe_Factory(t) { return new (t || FopFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FopFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fopFilterPipe", type: FopFilterPipe, pure: true });


/***/ }),

/***/ "fvGp":
/*!***********************************!*\
  !*** ./src/modules/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/shared/sid-bar/sid-bar.component */ "WB2Y");
/* harmony import */ var _app_shared_nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app/shared/nav-bar-setting/nav-bar-setting.component */ "kLvF");
/* harmony import */ var _app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../app/shared/footer/footer.component */ "jQpT");
/* harmony import */ var _app_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app/shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app/app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.module */ "5Uro");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.router.module */ "IRI6");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_http_http_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/http/http.interceptor.service */ "1jmC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/custom.validators.service */ "QVRC");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var _services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/sweet.alert.service */ "QZpK");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/home/home.component */ "9vUh");
/* harmony import */ var src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var src_app_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/sigh-in/sigh.in.component */ "Sx1+");
/* harmony import */ var src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/authentcation/clinet.auth.can.active.service */ "YSHg");
/* harmony import */ var src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/authentcation/admin.auth.can.active.service */ "O43r");
/* harmony import */ var src_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/authentcation/user.auth.can.active.service */ "bPFj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "8Y7J");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_8__["CurrentUserService"],
        src_services_alert_service__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
        src_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_13__["CustomValidatorsService"],
        _services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_15__["SweetAlertService"],
        src_services_seo_service__WEBPACK_IMPORTED_MODULE_14__["SEOService"],
        src_services_authentcation_user_auth_can_active_service__WEBPACK_IMPORTED_MODULE_21__["UserAuthCanActive"],
        src_services_authentcation_admin_auth_can_active_service__WEBPACK_IMPORTED_MODULE_20__["AdminAuthCanActive"],
        src_services_authentcation_clinet_auth_can_active_service__WEBPACK_IMPORTED_MODULE_19__["ClinetAuthCanActive"],
        {
            //  HTTP_INTERCEPTORS >>  Injection Token Or Another In Any Request
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: src_services_http_http_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptorService"],
            multi: true
        }
    ], imports: [[
            _app_router_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        src_app_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        src_app_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
        _app_shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _app_shared_sid_bar_sid_bar_component__WEBPACK_IMPORTED_MODULE_0__["SidBarComponent"],
        _app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _app_shared_nav_bar_setting_nav_bar_setting_component__WEBPACK_IMPORTED_MODULE_1__["NavBarSettingComponent"],
        src_app_sigh_in_sigh_in_component__WEBPACK_IMPORTED_MODULE_18__["SighInComponent"]], imports: [_app_router_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"]] }); })();


/***/ }),

/***/ "iY+S":
/*!**************************************!*\
  !*** ./src/app/shared.components.ts ***!
  \**************************************/
/*! exports provided: SharedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponents", function() { return SharedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class SharedComponents {
    constructor() {
        //All Setinternvale You Want Clear When Destory Compoenent
        this.allSetinternvale = [];
        //All Subscription You Want Unsubscribe When Destory Compoenent
        this.allSubscriptions = [];
    }
    ngOnDestroy() {
        this.allSetinternvale.forEach(d => clearInterval(d));
        this.allSubscriptions.forEach(d => d.unsubscribe());
    }
}
SharedComponents.ɵfac = function SharedComponents_Factory(t) { return new (t || SharedComponents)(); };
SharedComponents.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponents, selectors: [["ng-component"]], decls: 0, vars: 0, template: function SharedComponents_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "jBFT":
/*!************************************************!*\
  !*** ./src/consts/local.storage.keys.const.ts ***!
  \************************************************/
/*! exports provided: LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
const LocalStorageKeys = {
    userAccessToken: 'uat',
    /**
     * User Information
     */
    currentUserInformation: 'UI',
    /**
     * Number Or Result Display In Page
     */
    fopNumberOfDisplayResultInPage: "fopNumberOfResultInPage"
};


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer-wrapper"], [1, "footer-section", "f-section-1"], [1, ""], ["target", "_blank", "routerLink", "/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u062D\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \u0645\u062D\u0641\u0648\u0638\u0629 \u00A9 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u062F\u0631\u0629 \u0627\u0644\u062F\u0648\u0644\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "kLvF":
/*!*********************************************************************!*\
  !*** ./src/app/shared/nav-bar-setting/nav-bar-setting.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavBarSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarSettingComponent", function() { return NavBarSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



class NavBarSettingComponent {
    constructor(u) {
        this.u = u;
    }
    ngOnInit() {
    }
    /**
   * User Log Out
   */
    logOut() {
        this.u.logOut(true);
    }
} //End Class
NavBarSettingComponent.ɵfac = function NavBarSettingComponent_Factory(t) { return new (t || NavBarSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
NavBarSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarSettingComponent, selectors: [["app-nav-bar-setting"]], decls: 24, vars: 6, consts: [["href", "javascript:void(0);", "id", "userProfileDropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "user"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-settings"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"], ["aria-labelledby", "userProfileDropdown", 1, "dropdown-menu", "position-absolute", "animated", "fadeInUp"], [1, "user-profile-section"], [1, "media", "mx-auto"], [1, "img-fluid", "mr-2", 3, "src", "alt"], [1, "media-body"], [3, "innerHtml"], [1, "dropdown-item"], ["routerLink", "accountsetting"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-user"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["href", "javascript:void()", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-log-out"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"]], template: function NavBarSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarSettingComponent_Template_a_click_18_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "polyline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.u.u.picturePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.u.r.userPicture);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.u.u.fullName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", "@" + (ctx.u.u == null ? null : ctx.u.u.userName), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.u.r.accountSetting, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.u.r.logOut, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "kbE0":
/*!***************************************************************!*\
  !*** ./src/app/shared/fop/fop-header/fop-header.component.ts ***!
  \***************************************************************/
/*! exports provided: FopHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopHeaderComponent", function() { return FopHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var table_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! table-export */ "RWDY");
/* harmony import */ var table_export__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(table_export__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






class FopHeaderComponent {
    constructor(u) {
        this.u = u;
        /**
         *
         */
        this.searchText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.styleLinks = "";
    }
    ngOnInit() {
        let allStylesLink = document.querySelectorAll('title,link,style');
        for (let index = 0; index <= allStylesLink.length - 1; index++)
            this.styleLinks += allStylesLink.item(index).outerHTML;
    }
    //Output Search Text
    sendSearchText(val) {
        this.searchText.emit(val);
    }
    /**Export Table To Excel */
    exportAs(exportType) {
        table_export__WEBPACK_IMPORTED_MODULE_2__(this.tableId, document.title + " " + new Date().toDateString().replace(/\//g, '-'), exportType);
    }
    /**
     * Print
     */
    print() {
        let printWindow = window.open(null, "");
        printWindow.document.write(`
    <html >
        <head>
        <base href="${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].website_url}">
            <style>
            @media print{
                app-export-buttons{
                    display:none
                }
                }
            }
            </style>
            ${this.styleLinks}
        </head>
        <body>
        ${document.getElementById(this.tableId).outerHTML}
        </body>
    </html>`);
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.document.close();
            printWindow.close();
        }, 100);
    }
} //End Class
FopHeaderComponent.ɵfac = function FopHeaderComponent_Factory(t) { return new (t || FopHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"])); };
FopHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FopHeaderComponent, selectors: [["fop-header"]], inputs: { tableId: "tableId" }, outputs: { searchText: "searchText" }, decls: 18, vars: 2, consts: [[1, "d-flex", "justify-content-between", "mb-3"], ["type", "search", 1, "form-control", "form-control-sm", 3, "placeholder", "ngModel", "ngModelChange", "input"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]], template: function FopHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FopHeaderComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchValue = $event; })("input", function FopHeaderComponent_Template_input_input_2_listener() { return ctx.sendSearchText(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_4_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_6_listener() { return ctx.exportAs("txt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_8_listener() { return ctx.exportAs("csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_10_listener() { return ctx.exportAs("xml"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "XML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_12_listener() { return ctx.exportAs("xls"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_14_listener() { return ctx.exportAs("doc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopHeaderComponent_Template_button_click_16_listener() { return ctx.exportAs("image"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.u.r.searchInResult + ". . .")("ngModel", ctx.searchValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });


/***/ }),

/***/ "mdKN":
/*!***********************************************************!*\
  !*** ./src/app/shared/fop/fop-sort/fop-sort.component.ts ***!
  \***********************************************************/
/*! exports provided: FopSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopSortComponent", function() { return FopSortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");



const _c0 = function (a0, a1) { return { "ascending": a0, "descending": a1 }; };
class FopSortComponent {
    constructor(u) {
        this.u = u;
    }
    ngOnInit() {
        //Add Field Name To Array Fro Using in Filter 
        this.fop.fieldNames.push(this.filedName);
    }
    //Sort
    sort() {
        this.fop.sort.fieldName = this.filedName;
        this.fop.sort.reverse = !this.fop.sort.reverse;
    }
}
FopSortComponent.ɵfac = function FopSortComponent_Factory(t) { return new (t || FopSortComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"])); };
FopSortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FopSortComponent, selectors: [["fop-sort"]], inputs: { fop: "fop", filedName: "filedName", fieldText: "fieldText" }, decls: 1, vars: 5, consts: [[1, "fop-sort", 3, "ngClass", "innerHtml", "click"]], template: function FopSortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FopSortComponent_Template_div_click_0_listener() { return ctx.sort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.fop.sort.reverse && ctx.fop.sort.fieldName == ctx.filedName, !ctx.fop.sort.reverse && ctx.fop.sort.fieldName == ctx.filedName))("innerHtml", ctx.fieldText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Atc29ydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "nTwK":
/*!*********************************************!*\
  !*** ./src/directives/deopify.directive.ts ***!
  \*********************************************/
/*! exports provided: DeopifyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeopifyDirective", function() { return DeopifyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



class DeopifyDirective {
    constructor(sanitizer, elm) {
        this.sanitizer = sanitizer;
        this.elm = elm;
        /** On Selected Files Event */
        this.onSelectFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = "image/*";
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // Pass Files Now To Compoennt
        this.passFilesToComponent(evt.dataTransfer.files);
    }
    onClick() {
        this.fileInput.click();
        this.fileInput.onchange = (ev) => {
            this.passFilesToComponent(this.fileInput.files);
        };
    }
    /** Read File And Pass To Compoenent */
    passFilesToComponent(files) {
        const newFile = [];
        for (let i = 0; i < files.length; i++) {
            newFile.push({
                file: files[i],
                url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i])),
            });
        }
        debugger;
        this.onSelectFiles.emit(newFile);
    }
} // End Class
DeopifyDirective.ɵfac = function DeopifyDirective_Factory(t) { return new (t || DeopifyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DeopifyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DeopifyDirective, selectors: [["", "deopify", ""]], hostBindings: function DeopifyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DeopifyDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("drop", function DeopifyDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("click", function DeopifyDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, outputs: { onSelectFiles: "onSelectFiles" } });


/***/ }),

/***/ "okBh":
/*!**************************************************!*\
  !*** ./src/services/behavior.subject.service.ts ***!
  \**************************************************/
/*! exports provided: BehaviorSubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubjectService", function() { return BehaviorSubjectService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class BehaviorSubjectService {
} //End Class
/**
* Current User Information
*/
BehaviorSubjectService.userInformation = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
//Active Page : Detect Dynamic
BehaviorSubjectService.activePage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});


/***/ }),

/***/ "qCTy":
/*!**************************************************************!*\
  !*** ./src/app/account-setting/account-setting.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingComponent", function() { return AccountSettingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/alert.service */ "NqkH");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var src_app_shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared.components */ "iY+S");
/* harmony import */ var src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/custom.validators.service */ "QVRC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/authentcation/current.user.service */ "J4aQ");
/* harmony import */ var src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/http/http.service */ "H5vj");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");
/* harmony import */ var src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/directives/deopify.directive */ "nTwK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");












function AccountSettingComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r0.u.r.maxLengthIs100, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r1.u.r.thisFieldIsRequierd, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r2.u.r.invalidEmail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r3.u.r.phoneNumberInvalid, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r5.u.r.maxLengthIs50, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_small_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "small", 54);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r6.u.r.minLengthIs5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function AccountSettingComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 55);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r7.u.r.loadingData);
} }
class AccountSettingComponent extends src_app_shared_components__WEBPACK_IMPORTED_MODULE_3__["SharedComponents"] {
    constructor(u, http, seo) {
        super();
        this.u = u;
        this.http = http;
        this.seo = seo;
        this.userInfo = {};
        this.newPicture = {};
    }
    ngOnInit() {
        this.seo.updateSEO("accountSetting");
        //Get Account Information
        this.getAccountInformationForUpdate();
        //Init Form Group
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, src_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__["CustomValidatorsService"].phoneNumber),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
        });
    }
    /**
     * Get Current Account Information For Update
     */
    getAccountInformationForUpdate() {
        this.allSubscriptions.push(this.http.getCurrentUserInformationForUpdate().subscribe(res => {
            if (!res.isSuccess) {
                src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
                return;
            }
            this.userInfo = res.result;
            this.passValeToFormGroup();
        }, error => {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].canRequestError(error);
        }));
    }
    /** Pass Value To From Group */
    passValeToFormGroup() {
        this.form.get('userName').setValue(this.userInfo.userName);
        this.form.get('userName').disable();
        this.form.get('fullName').setValue(this.userInfo.fullName);
        this.form.get('email').setValue(this.userInfo.email);
        this.form.get('phoneNumber').setValue(this.userInfo.phoneNumber);
        this.newPicture.file = null;
        this.newPicture.url = this.userInfo.picturePath;
    }
    /**
     * Save Change
     */
    saveChange() {
        //Check Form Is Valid
        if (this.form.invalid) {
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].errorMessage(this.u.r.youHaveSomeErrors);
            this.formSubmitError = true;
            return;
        }
        this.userInfo.actionDisapled = true;
        this.form.disable();
        let fomrD = new FormData();
        if (this.form.controls.fullName.value)
            fomrD.append('fullName', this.form.controls.fullName.value);
        fomrD.append('email', this.form.controls.email.value);
        fomrD.append('userName', this.form.controls.userName.value);
        fomrD.append('phoneNumber', this.form.controls.phoneNumber.value);
        fomrD.append('password', this.form.controls.password.value);
        if (this.newPicture.file)
            fomrD.append('image', this.newPicture.file);
        this.allSubscriptions.push(this.http.updateUserInformtion(fomrD).subscribe(res => {
            this.userInfo.actionDisapled = false;
            this.form.enable();
            this.form.controls.userName.disable();
            if (res.isSuccess) {
                this.form.reset();
                this.userInfo = res.result;
                this.passValeToFormGroup();
                src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"].setUsereInformation(this.userInfo);
            }
            src_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"].showResponseMessage(res);
        }));
    }
    /** Show And Hide Password Toggel */
    showPasswordToggal(elementTrget) {
        if (elementTrget.type == "password")
            elementTrget.type = "text";
        else
            elementTrget.type = "password";
    }
} //End Class
AccountSettingComponent.ɵfac = function AccountSettingComponent_Factory(t) { return new (t || AccountSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_authentcation_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_8__["SEOService"])); };
AccountSettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccountSettingComponent, selectors: [["app-account-setting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 81, vars: 29, consts: [["novalidate", "", "autocomplete", "off", 1, "account-settings-container", "layout-top-spacing", 3, "formGroup", "submit"], [1, "account-content"], ["data-spy", "scroll", "data-target", "#account-settings-scroll", "data-offset", "-100", 1, "scrollspy-example"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "layout-spacing"], [1, "section"], [1, "info"], [1, "", 3, "innerHtml"], [1, "col-lg-11", "mx-auto"], [1, "col-xl-2", "col-lg-12", "col-md-4"], [1, "upload", "mt-4", "pr-md-4"], ["deopify", "", 1, "dropify-wrapper", "has-preview", 3, "title", "onSelectFiles"], [1, "dropify-preview", 2, "display", "block"], [1, "dropify-render"], [3, "src"], [1, "dropify-infos"], [1, "dropify-infos-inner"], [1, "dropify-filename"], [1, "file-icon"], [1, "dropify-filename-inner", 3, "innerHtml"], [1, "dropify-infos-message", 3, "innerHtml"], [1, "mt-2"], [1, "flaticon-cloud-upload", "mr-1"], [1, "col-xl-10", "col-lg-12", "col-md-8", "mt-md-0", "mt-4"], [1, "form"], [1, "col-sm-6", "mb-4"], [1, "form-group"], ["for", "userName", 3, "innerHtml"], ["type", "text", "id", "userName", "name", "userName", "formControlName", "userName", 1, "form-control"], [1, "col-sm-6"], ["for", "fullName", 3, "innerHtml"], ["type", "text", "id", "fullName", "name", "fullname", "formControlName", "fullName", 1, "form-control", 3, "placeholder"], ["class", "invalid-data", 3, "innerHtml", 4, "ngIf"], [1, "col-md-11", "mx-auto"], [1, "col-md-6"], [1, "form-group", "mb-4"], ["for", "email", 3, "innerHtml"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "phone", 3, "innerHtml"], ["type", "text", "id", "phone", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], [1, "col-12", "layout-spacing"], ["for", "password", 3, "innerHtml"], [1, "input-group"], ["type", "password", "name", "userPass", "id", "userPass", "autocomplete", "new-password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["userPass", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "id", "toggle-password", 1, "feather", "feather-eye"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "account-settings-footer"], [1, "as-footer-container", "d-flex", "justify-content-end"], ["id", "multiple-messages", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-grow text-white mr-2 align-self-center loader-sm", 3, "title", 4, "ngIf"], [1, "invalid-data", 3, "innerHtml"], [1, "spinner-grow", "text-white", "mr-2", "align-self-center", "loader-sm", 3, "title"]], template: function AccountSettingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AccountSettingComponent_Template_form_submit_0_listener() { return ctx.saveChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectFiles", function AccountSettingComponent_Template_div_onSelectFiles_13_listener($event) { return ctx.newPicture = $event[0]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AccountSettingComponent_small_37_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AccountSettingComponent_small_49_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, AccountSettingComponent_small_50_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AccountSettingComponent_small_55_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountSettingComponent_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68); return ctx.showPasswordToggal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "svg", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, AccountSettingComponent_small_74_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, AccountSettingComponent_small_75_Template, 1, 1, "small", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, AccountSettingComponent_div_80_Template, 1, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("form-submited", ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.generalInformation, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.u.r.clickOrDargAndDrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.newPicture == null ? null : ctx.newPicture.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.newPicture.file == null ? null : ctx.newPicture.file.name, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.clickOrDargAndDrop, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.u.r.accountPicture, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.userName, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.fullName, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterFullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("fullName").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.contact, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.email, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("email") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourPhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("phoneNumber").hasError("invalidPhoneNumber") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.newPassword, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.u.r.newPassword, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.u.r.enterYourNewPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("maxlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("minlength") && ctx.formSubmitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.userInfo.actionDisapled);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.u.r.saveChange, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userInfo.actionDisapled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], src_directives_deopify_directive__WEBPACK_IMPORTED_MODULE_9__["DeopifyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/seo.service */ "C2k8");


class PageNotFoundComponent {
    constructor(seo) {
        this.seo = seo;
    }
    ngOnInit() {
        this.seo.updateSEO("pageNotFound");
    }
} // End Class
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SEOService"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 1, vars: 0, consts: [["src", "/assets/img/404_Icon.svg", "alt", "notFound"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "sSkb":
/*!***************************************!*\
  !*** ./src/enums/i.user.type.enum.ts ***!
  \***************************************/
/*! exports provided: UserTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeEnum", function() { return UserTypeEnum; });
var UserTypeEnum;
(function (UserTypeEnum) {
    UserTypeEnum[UserTypeEnum["admin"] = 1] = "admin";
    UserTypeEnum[UserTypeEnum["company"] = 2] = "company";
    UserTypeEnum[UserTypeEnum["personal"] = 3] = "personal";
})(UserTypeEnum || (UserTypeEnum = {}));


/***/ }),

/***/ "wG7n":
/*!****************************************************!*\
  !*** ./src/models/resources/resources.ar.model.ts ***!
  \****************************************************/
/*! exports provided: ResourcesArModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesArModel", function() { return ResourcesArModel; });
class ResourcesArModel {
    constructor() {
        this.minLengthIs5 = "اقل رقم هوا 5";
        this.logo = "الشعار";
        this.dashboard = "لوحة التحكم";
        this.userPicture = "صورة المستخدم";
        this.icon = "ايقونة";
        this.logOut = "تسجيل الخروج";
        this.startNow = "ابداء الآن";
        this.pageNotFound = "الصفحة المطلوبة غير موجودة";
        this.e404 = "الصفحة المطلوبة غير موجودة";
        this.signIn = 'تسجيل الدخول';
        this.signUp = 'تسجيل حساب';
        this.signInNow = 'تسجيل الدخول الآن';
        this.signUpNow = 'تسجيل الحساب الآن';
        this.userName = 'اسم المستخدم';
        this.email = 'البريد الإلكترونى';
        this.password = 'كلمة السر';
        this.resetMyPassword = 'إعادة تعيين كلمة السر';
        this.or = 'أو';
        this.thisFieldIsRequierd = 'هذا الحقل مطلوب';
        this.invalidEmail = 'البريد الإلكترونى غير صحيح';
        this.enterYoureEmail = 'ادخل البريد الإلكترونى الخاص بك';
        this.enterYoureUserName = 'ادخل اسم المستخدم الخاص بك';
        this.enterYourePassword = 'ادخل كلمة السر الخاصة بك';
        this.maxLengthIs50 = 'اكبر عدد للاحرف هوا 50';
        this.maxLengthIs4000 = 'اكبر عدد للاحرف هوا 4000';
        this.maxLengthIs100 = 'اكبر عدد للاحرف هوا 100';
        this.areYouSure = "هل انت متاكد من قيام تلك العملية";
        this.cancel = "الغاء";
        this.ok = "موافق";
        this.youHaveSomeErrors = "لديك بعض الاخطاء يجب معالجتها اولا";
        this.iCanNotAccessToServer = "لا استطيع الاتصال بالسيرفر";
        this.actions = "العمليات";
        this.createdDateTime = "تاريخ ووقت المعاملة";
        this.users = "المستخدمين";
        this.filter = "تصفية";
        this.clickOrDargAndDrop = "اضغط او سحب وافلات الملف";
        this.createdDate = "تاريخ المعاملة";
        this.filterInUsers = "البحث فى المستخدمين";
        this.saveChange = "حفظ التغيرات";
        this.phoneNumber = "رقم الهاتف";
        this.enterYourPhoneNumber = "ادخل رقم هاتفك";
        this.nextPage = "الصفحة التالية";
        this.showPassword = "اظهار";
        this.contact = "تواصل";
        this.newPassword = "كلمة مرور جديدة";
        this.generalInformation = "بيانات عامة";
        this.searchInResult = "بحث فى النتائج";
        this.showing = "اظهار";
        this.accountSetting = "اعدادات الحساب";
        this.fullName = "اسم الزبون او اسم الشركة";
        this.enterFullName = "ادخل اسم الزبون او الشركة";
        this.enterYourEmail = "ادخل البريد الآلكترونى";
        this.of = "من";
        this.accountPicture = "صورة المستخدم";
        this.enterYourNewPassword = "ادخل كلمة المرور";
        this.privousPage = "الصفحة السابقة";
        this.entiries = "العناصر";
        this.createANewUser = "انشاء مستخدم جديد";
        this.enterUserName = "ادخل اسم المستخدم";
        this.editUser = "تعديل المستخدم";
        this.getMoreItems = "عرض المزيد";
        this.userNameInvalid = "الاسم غير صالح يجب استخدما الاحرف الانجليزية والارقام و _ فقط";
        this.phoneNumberInvalid = "ادحل رقم الهاتف ما بين 10 و 15 رقم";
        this.search = "بحث";
        this.home = "الرئيسية";
        this.settings = "الإعدادت";
        this.ports = "الموانى";
        this.freightCases = "حالات الشحن";
        this.buySources = "مصادر الشراء";
        this.addNew = "اضافة جديد";
        this.name = "الاسم";
        this.delete = "حذف";
        this.add = "اضافة";
        this.create = "إنشاء";
        this.createNew = "إنشاء جديد";
        this.editing = "تعديل";
        this.areYouSureToDeleteThe = "هل متاكد من حذف العمصر ؟";
        this.yesDelete = "نعم احذف";
        this.carMarks = "ماركات السيارات";
        this.carModels = "الموديلات";
        this.createCarMark = "انشاء ماركة سيارة";
        this.editCarMark = "تعديل ماركة سيارة";
        this.enterPerModelInNewLine = "ادخل كل موديل فى سطر جديد";
        this.numberOfModels = "عدد الموديلات هو ";
        this.enterCarMarkName = "ادخل نوع السيارة";
        this.carMark = "نوع السيارة";
        this.doYouWantEditCreatedItem = "هل تريد تعديل العنصر الذى تم إنشائه ام اناشء عنصر جديد؟";
        this.goToEdit = "اذهب للتعديل";
        this.enterStateName = "ادخل اسم الولايه";
        this.citties = "المدن";
        this.cityName = "اسم المدينة ";
        this.createState = "انشاء ولايه";
        this.editState = "تعديل ولايه";
        this.states = "الولايات";
        this.fullLandFreightPriceToState = "سعر الشحن البري للولايه بالكامل";
        this.fullLandFreightPriceToStateDis = "ادخل سعر الشحن الذى سوف يطبق فى حاله عدم تحديد مدينة اثناء انشاء عمليه شحن او عدم وجود سعر للشحن البري الخاص بالمدينة";
        this.maritimeFreightPriceToBigCar = "سعر الشحن البحرى للسيارة كبيرة الحجم";
        this.maritimeFreightPriceToSmallCar = "سعر الشحن البحرى للسيارة صغيرة الحجم";
        this.maritimeFreightPriceToMediumCar = "سعر الشحن البحرى للسيارة متوسطتة الحجم";
        this.maritimeFreightPriceToBigCarDis = "ادخل سعر الشخن البحرى الذى سوف يطبق على السيارة كبيرة الحجم";
        this.maritimeFreightPriceToSmallCarDis = "ادخل سعر الشخن البحرى الذى سوف يطبق على السيارة صغيرة الحجم";
        this.maritimeFreightPriceToMediumCarDis = "ادخل سعر الشخن البحرى الذى سوف يطبق على السيارة متوسطة الحجم";
        this.LandFreightPrice = "سعر الشحن البري";
        this.remove = "إزاله";
        this.invalidNumber = "الرقم الذى ادخلته غير صالح";
        this.edit = "تعديل";
        this.navigationalWayes = "خطوت ملاحيه";
        this.containers = "الحاويات";
        this.loadingData = "جار تحميل بعض البيانات";
        this.creationDate = "تاريخ ووقت المعاملة";
        this.refranceNumber = "الرقم الاشاري";
        this.carModel = "موديل السيارة";
        this.carBodyNumber = "رقم هيكل السيارة";
        this.freightCase = "حاله الشحن";
        this.buySource = "مصدر الشراء";
        this.freightState = "ولايه الشحن";
        this.city = "المدينة";
        this.carPrice = "سعر السيارة";
        this.carSize = "حجم السيارة";
        this.carPicture = "صورة السيارة";
        this.notes = "ملحوظات";
        this.maritimeFreightPrice = "سعر الشحن البحري";
        this.commissionPurchase = "عمولة شراء";
        this.swift = "سويفت";
        this.auctionFines = "غرامات مزاد";
        this.storeFines = "غرامات مخزن";
        this.title = "تايتل";
        this.differenceTitle = "فرق التايل";
        this.landCost = "تكلفة داخلى";
        this.landGain = "مكسب دخلى";
        this.maritimeCost = "تكلفة بحري";
        this.maritimeGain = "مكسب بحري";
        this.container = "رقم الحاوية";
        this.navigationalWaye = "الخط الملاحى";
        this.freightPort = "ميناء الشحن";
        this.arrivalPort = "ميناء الوصول";
        this.arrivalDate = "موعد الموصول";
        this.landFreightPrice = "سعر الشحن البري للمدينة";
        this.freights = "الشحنات";
        this.createANewFreight = "انشاء شحنة جديدة";
        this.clinet = "الزبون";
        this.page = "الصفحة";
        this.reloadThisItems = "إعادة تحميل هذة العناصر";
        this.editFreight = "تعديل الشحنة";
        this.userType = "نوع المستخدم";
        this.commissionTransfare = "عمولة تحويل";
        this.selectForAddToContainer = "تحديد من اجل اضافتهم على حاوية";
        this.select = "تحديد";
        this.unSelect = "إلغاء التحديد";
        this.addFreightsSelectedToContainer = "اضافة الشحنات الذى تم تحميلها على الحاوية";
        this.youMustSelectFreightsFirst = "يجب تحديد السحنات اولا";
        this.selectTheContainerYouWnatMove = "اختر الحاوية الذى تريد نقل الـ ";
        this.freightsToIt = "شحنات اليها";
        this.financialTransfers = "الحوالات المالية";
        this.createANewFinancialTransfer = "انشاء حوالة مالية جديدة";
        this.trnasactionDate = "تاريخ المعاملة";
        this.trnasactionType = "نوع المعاملة";
        this.totalAmount_dollar = "اجمالى المبلغ بالدولار";
        this.totalAmount_dinar = "اجمالى المبلغ بالدينار";
        this.totalPaidAmount_dollar = "اجمالى المدفوع بالدولار";
        this.totalPaidAmount_dinar = "اجمالى المدفوع بالدينار";
        this.totalDueAmount_dollar = "اجمالى المستحق بالدولار";
        this.totalDueAmount_dinar = "اجمالى المستحق بالدينار";
        this.isPaidAllAmount = "تم الاستلام";
        this.theReceive = "تم الاستلام";
        this.clinetName = "اسم الزيون";
        this.clinetEmail = "بريد آلكترونى الزيون";
        this.clinetPhoneNumber = "رقم هاتف الزيون";
        this.invalidDate = "تاريخ غير صالح";
        this.filterIn = "البحث فى ";
        this.editFinancialTransfer = "تعديل الحوالة المالية";
        this.paymentAmount = "دفع الاموال";
        this.paymentAmount_dollar = "المبلغ المطلوب دفعه بالدولار";
        this.paymentAmount_dinar = "المبلغ المطلوب دفعه بالدينار";
        this.newPaymentAmount = "حركة دفع جديدة";
        this.paymentNow = "ادفع الآن";
        this.financialTransferDetils = "تفاصيل الحوالة";
        this.details = "التفاصيل";
        this.paymentTransaction = "عمليات التحصيل";
        this.paidDate = "تاريخ التحصيل";
        this.paidAmount_dollar = "مبلغ الدفع بالدولار";
        this.paidAmount_dinar = "مبلغ الدفع بالدينار";
        this.print = "طباعة";
        this.containersReport = "تقارير الحاويات";
        this.reports = "تقارير";
        this.releaseStatus = "حالة الإصدار";
        this.freightsReport = "تقارير الشحنات";
        this.transferDetails = "تفاصيل الحوالة";
        this.homePage = "الصفحة الرئيسية";
        this.freightDetils = "تفاصيل الشحنة";
        this.number = "رقم";
        this.changedDate = "تاريخ التغير";
        this.freightCasees = "حالات الشحنة";
        this.fullDetails = "التفاصيل";
        this.freightNotes = "ملحوظات الشحنة";
        this.transferNotes = "ملحوظات الحوالة";
        this.freightPublicGain = "مكسب الشحن العام";
        this.carCost = "تكلفة السيارة";
        this.netProfit = "صافى الربح";
        this.sellPrice = "سعر البيع";
        this.sectorSales = "مبيعات قطاعى";
        this.createANewSectorSale = "انشاء بيع قطاعى جديد";
        this.editSectorSale = "تعديل بيع قطاعى";
        this.sectorSalerDetils = "تفاصيل بيع قطاعى";
        this.theSectorSales = "المبيعات القطاعى";
        this.copy = "نسخ";
        this.excel = "إكسل";
        this.pdf = "PDF";
    }
} //End Class


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app.module */ "fvGp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_modules_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map