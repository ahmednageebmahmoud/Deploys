(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "hLCK":
/*!*************************************!*\
  !*** ./src/enums/car.sizes.enum.ts ***!
  \*************************************/
/*! exports provided: CarSizesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSizesEnum", function() { return CarSizesEnum; });
var CarSizesEnum;
(function (CarSizesEnum) {
    CarSizesEnum[CarSizesEnum["small"] = 1] = "small";
    CarSizesEnum[CarSizesEnum["medium"] = 2] = "medium";
    CarSizesEnum[CarSizesEnum["big"] = 3] = "big";
})(CarSizesEnum || (CarSizesEnum = {}));


/***/ }),

/***/ "qB6b":
/*!***************************************!*\
  !*** ./src/consts/car.sizes.const.ts ***!
  \***************************************/
/*! exports provided: carSizesArray, carSizesObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carSizesArray", function() { return carSizesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carSizesObject", function() { return carSizesObject; });
/* harmony import */ var _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../enums/car.sizes.enum */ "hLCK");

const carSizesArray = [{ _id: _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small, name: "صغيرة" },
    { _id: _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small, name: "متوسطة" },
    { _id: _enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small, name: "كبيرة" }];
const carSizesObject = {
    [_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small]: "صغيرة",
    [_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small]: "متوسطة",
    [_enums_car_sizes_enum__WEBPACK_IMPORTED_MODULE_0__["CarSizesEnum"].small]: "كبيرة"
};
Object.freeze(carSizesObject);
Object.freeze(carSizesArray);


/***/ })

}]);
//# sourceMappingURL=common.js.map