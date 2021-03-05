(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf"],{

/***/ "BV3C":
/*!*******************************************!*\
  !*** ./src/models/fop/fop.paging.mode.ts ***!
  \*******************************************/
/*! exports provided: FopPagingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopPagingModel", function() { return FopPagingModel; });
/* harmony import */ var _fop_paging_limt_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fop.paging.limt.model */ "UEro");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local.storage.service */ "LKR5");


/**
* هذة الكلاس هيا مهمتها القيام بعمليات التقسيم للعناصر والتنقل بين الصفح وخلافة من هذا القبيل
 *
 */
class FopPagingModel {
    /**
     * هذة الكلاس هيا مهمتها القيام بعمليات التقسيم للعناصر والتنقل بين الصفح وخلافة من هذا القبيل
     * @param {Number} from من
     * @param {Number} to الى
     * @param {Number} countItems جميع عدد العناصر
     * @param {Number} currentPage رقم الصفحة الحالية
     * @param {bool} allowNextPage السماح بتفعيل زر الصفحة القادة
     * @param {bool} allowPreviousPage السماح بتفعيل زر الصفحة السابقة
        * @param {number} pagesSeliceTakeC عدد ارقام الصفح التى سوف تعرض للمستخدم للتنقل بينهم
     * @param {number} pagesSeliceSkipC عدد ارفام الصفحة التى سوف نتخطبها على المستخدم
     * @param {Number[]} pages ارقام الصفح
     * @param {PagingLimt} pagingLimt الحدود
        
     */
    constructor(from, to, takeItemsCount, itemsCount, currentPage, allowNextPage, allowPreviousPage, pagesSeliceTake, pagesSeliceSkip) {
        this.pagesSeliceTakeDefault = 5;
        this.pagesSeliceSkipDefault = 0;
        this.from = from;
        this.to = to;
        this.takeItemsCount = takeItemsCount;
        this.itemsCount = itemsCount;
        this.currentPage = currentPage;
        this.allowNextPage = allowNextPage;
        this.allowPreviousPage = allowPreviousPage;
        this.pagesSeliceTake = pagesSeliceTake;
        this.pagesSeliceSkip = pagesSeliceSkip;
        this.pagingLimt = new _fop_paging_limt_model__WEBPACK_IMPORTED_MODULE_0__["FopPagingLimtModel"](0, takeItemsCount);
        ;
        this.pagination(itemsCount, takeItemsCount);
    }
    //change count item displayed 
    changeCountItemDisplaying(countResultDisplay) {
        //Save Last Take Count In Local Storage
        _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].fopNumberOfDisplayResultInPage = countResultDisplay;
        //if -1 as all items
        if (countResultDisplay == -1)
            countResultDisplay = this.itemsCount;
        this.takeItemsCount = countResultDisplay;
        //change limit items
        this.pagingLimt.skip = 0;
        this.pagingLimt.take = countResultDisplay;
        //reset pages number
        this.pagination(this.itemsCount, countResultDisplay);
        //got page number 1
        this.gotoPage(1, true);
    }
    ;
    //go to page by page number 
    gotoPage(pageNum, resetPages = false) {
        //Now we calculate and for limit items 
        /*
        The equation:
        vrtialTake =  pageNum * currentTake
        Skip =vrtialTake-  currentTake
        */
        var vrtialTake = pageNum * this.takeItemsCount;
        this.pagingLimt.skip = vrtialTake - (this.takeItemsCount);
        this.pagingLimt.take = this.takeItemsCount * pageNum;
        //change paging lable
        this.resetPaging(pageNum, resetPages);
    }
    ;
    //change Paging numbers 
    resetPaging(pageNum, resetPages = false) {
        //reset page num to default if falsy
        if (!pageNum)
            pageNum = 1;
        var vrtialTo = pageNum * this.pagingLimt.take;
        debugger;
        //rewset showing for lable
        this.to = vrtialTo > this.itemsCount ? this.itemsCount : vrtialTo;
        ;
        this.from = !this.itemsCount ? 0 : this.pagingLimt.skip + 1;
        //reset allow buttons newxt and Previous
        this.allowNextPage = pageNum + 1 <= this.pages.length;
        this.allowPreviousPage = pageNum - 1 >= 1;
        if (resetPages) {
            this.pagesSeliceTake = this.pagesSeliceTakeDefault;
            this.pagesSeliceSkip = this.pagesSeliceSkipDefault;
        }
        //reset showing pages number
        if (this.pages.length + 1 != this.pagesSeliceTakeDefault) {
            //الغرض هوا جلب نفس مجموعة الصفح الذى تعرض الان
            var pagesVrtial = [...this.pages].splice(this.pagesSeliceSkip, this.pagesSeliceTakeDefault);
            //نتحقق هل الرقم الصفحة التى بعد بعد صفحة المستخدم موجود ام لاء وفى هذة الحالة هوا يذهب للامام 
            var findNextPageIndex = pagesVrtial.findIndex(p => p == pageNum + 1);
            //  نتحقق هل الرقم الصفحة التى قبل قبل صفحة المستخدم موجود ام لا وفى هذة الحالة هوا يرجع للخلف 
            var findPreviousIndex = pagesVrtial.findIndex(p => p == pageNum - 1);
            //اذا كانت ليست موجود والصفحة هى ليست آخر صفحة نزيد معدل الاخفاء عرض الصفح 
            if (findNextPageIndex == -1 && this.allowNextPage)
                this.pagesSeliceSkip += 2;
            //اذا كانت الصفحة السابقة والصفحة هى ليست اول صفحة ليست موجودة ننقص معدل الاخفاء
            else if (findPreviousIndex == -1 && this.allowPreviousPage)
                this.pagesSeliceSkip -= 2;
            this.pagesSeliceTake = (this.pagesSeliceSkip + this.pagesSeliceTakeDefault);
        }
        //set current page for active class
        this.currentPage = pageNum;
    }
    ;
    //Go next Page
    gotoNextPage() {
        if (this.allowNextPage)
            this.gotoPage(this.currentPage + 1);
    }
    ;
    //Go previous Page
    gotoPreviousPage() {
        if (this.allowPreviousPage)
            this.gotoPage(this.currentPage - 1);
    }
    ;
    /**
    * هذة الوظيفة من اجالة اعادة انشاء ترقيم الصفحات
    *  ستم المداء عليها فى حالة زيادة او نقصاد عدد العناصر
     * @param {Number} itemsCount عدد العناصر
     * @param {Number} currentTake عدد العناصر المراد عرضها فى الصفحة الواحدة
     */
    pagination(itemsCount, currentTake, notTrdrtPsging = false) {
        /*
    The equation:
    pagesCount= itemsCount / currentTake;
    */
        var pages = [];
        var pagesCount = itemsCount / currentTake;
        for (var i = 0; i < pagesCount; i++) {
            pages.push(i + 1);
        }
        this.pages = pages;
        if (itemsCount != this.itemsCount) {
            this.itemsCount = itemsCount;
            this.pages = pages;
            this.resetPaging(1);
        }
        else {
            this.itemsCount = itemsCount;
            if (notTrdrtPsging)
                this.resetPaging(this.currentPage);
        }
    }
}


/***/ }),

/***/ "RL+I":
/*!*************************************!*\
  !*** ./src/models/fop/fop.model.ts ***!
  \*************************************/
/*! exports provided: FOPModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOPModel", function() { return FOPModel; });
/* harmony import */ var _fop_sort_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fop.sort.model */ "mdi9");
/* harmony import */ var src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/local.storage.service */ "LKR5");
/* harmony import */ var _fop_paging_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fop.paging.mode */ "BV3C");



/**
     * FOP : Filter OrderBy Paging
 *
 */
class FOPModel {
    /**
     *  FOP : Filter OrderBy Paging
     * @param {number} itemsCount  مجموع عدد العناصر التالية
     * @param {number} currentPageNumber رقم الصفحة الحالية
     * @param {number} pagesSeliceTakeC عدد ارقام الصفح التى سوف تعرض للمستخدم للتنقل بينهم
     * @param {number} pagesSeliceSkipC عدد ارفام الصفحة التى سوف نتخطبها على المستخدم
     */
    constructor(fieldNames = [], itemsCount = 0, currentPageNumber = 1, pagesSeliceTake = 5, pagesSeliceSkip = 0, sort = new _fop_sort_model__WEBPACK_IMPORTED_MODULE_0__["FopSortModel"]()) {
        this.fieldNames = fieldNames;
        this.itemsCount = itemsCount;
        this.sort = sort;
        //نقوم بـ التالى بحيث عند تزويد الداتا لا نرحع الى اول صفحة لا نثق عند آخر صفحة وايضا نظهر نفس مجموعة ارقام الصفح
        let currentPageNo = currentPageNumber;
        let displayEntiriesCount = src_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].fopNumberOfDisplayResultInPage;
        //Check If User Want Display All Item In One Page
        if (displayEntiriesCount == -1)
            this.numberOfDisplayResiltInPage = this.itemsCount;
        else
            this.numberOfDisplayResiltInPage = displayEntiriesCount || 10;
        //Paging
        this.paging = new _fop_paging_mode__WEBPACK_IMPORTED_MODULE_2__["FopPagingModel"](
        //From
        this.itemsCount == 0 ? 0 : 1, 
        //To
        this.numberOfDisplayResiltInPage > this.itemsCount ? this.itemsCount : this.numberOfDisplayResiltInPage, this.numberOfDisplayResiltInPage, itemsCount, currentPageNo, true, false, pagesSeliceTake, pagesSeliceSkip);
    }
    reFop(itemsCount, numberOfDisplayResiltInPage = this.numberOfDisplayResiltInPage) {
        this.itemsCount = itemsCount >= 0 ? itemsCount : this.itemsCount;
        this.numberOfDisplayResiltInPage = numberOfDisplayResiltInPage;
        this.paging.pagination(this.itemsCount, this.numberOfDisplayResiltInPage);
    }
}


/***/ }),

/***/ "UEro":
/*!*************************************************!*\
  !*** ./src/models/fop/fop.paging.limt.model.ts ***!
  \*************************************************/
/*! exports provided: FopPagingLimtModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopPagingLimtModel", function() { return FopPagingLimtModel; });
/**
 * Paging Limt class
 */
class FopPagingLimtModel {
    /**
     *
     * @param {number} skip skip items
     * @param {number} take take items
     * @param {string} allName name from resources
     */
    constructor(skip = 0, take = 10) {
        this.skip = skip,
            this.take = take;
        this.limitOptions = [{ limit: 5, name: '5' },
            { limit: 10, name: '10' },
            { limit: 20, name: '20' },
            { limit: 70, name: '70' },
            { limit: 100, name: '100' },
            { limit: -1, name: 'All' }];
    }
}


/***/ }),

/***/ "mdi9":
/*!******************************************!*\
  !*** ./src/models/fop/fop.sort.model.ts ***!
  \******************************************/
/*! exports provided: FopSortModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FopSortModel", function() { return FopSortModel; });
/**
 * sort items
 */
class FopSortModel {
    /**
     * sort items
     * @param {String} propName اسم البروبرتى الافتراية
     * @param {Bool} reverse طريقة الترتيب الافتراضية
     */
    constructor(fieldName = null, reverse = null) {
        this.fieldName = fieldName;
        this.reverse = reverse;
    }
    //set property name for sort
    sortBy(_fieldName) {
        if (_fieldName === this.fieldName)
            this.reverse = !this.reverse;
        else
            this.reverse = true;
        this.fieldName = _fieldName;
    }
    ;
    //check from sort case and name for set specific class
    ifSortClass(fieldName, sortCase) {
        return this.fieldName === fieldName && this.reverse == sortCase;
    }
    ;
}


/***/ })

}]);
//# sourceMappingURL=default~financial-transfares-module~freights-module~reports-module~sector-sales-module~settings-modu~46c0bdaf.js.map