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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mentee *ngIf=\"menteeView\"></app-mentee>\n\n<app-mentor *ngIf=\"mentorView\"></app-mentor>\n\n<!-- <app-parent></app-parent> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user-profile.service */ "./src/app/services/user-profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userProfileService) {
        this.userProfileService = userProfileService;
        this.devProfile = true;
        this.menteeView = false;
        this.mentorView = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.devProfile) {
            // MANUALLY SET THE VIEW
            this.mentorView = true;
        }
        else {
            this.userProfileService.getSessionProfile().subscribe(function (profile) {
                if (profile.role === 'MENTOR') {
                    _this.mentorView = true;
                }
                else if (profile.role === 'MENTEE') {
                    _this.menteeView = true;
                }
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_profile_service__WEBPACK_IMPORTED_MODULE_1__["UserProfileService"]])
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
/* harmony import */ var _services_mentee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/mentee.service */ "./src/app/services/mentee.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_user_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user-profile.service */ "./src/app/services/user-profile.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mentee/mentee.component */ "./src/app/mentee/mentee.component.ts");
/* harmony import */ var _mentor_mentor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mentor/mentor.component */ "./src/app/mentor/mentor.component.ts");
/* harmony import */ var _mentee_form_mentee_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mentee-form/mentee-form.component */ "./src/app/mentee-form/mentee-form.component.ts");
/* harmony import */ var _test_parent_parent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./test/parent/parent.component */ "./src/app/test/parent/parent.component.ts");
/* harmony import */ var _test_child_child_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test/child/child.component */ "./src/app/test/child/child.component.ts");
/* harmony import */ var _delete_conformation_delete_conformation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete-conformation/delete-conformation.component */ "./src/app/delete-conformation/delete-conformation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_9__["MenteeComponent"],
                _mentor_mentor_component__WEBPACK_IMPORTED_MODULE_10__["MentorComponent"],
                _mentee_form_mentee_form_component__WEBPACK_IMPORTED_MODULE_11__["MenteeFormComponent"],
                _test_parent_parent_component__WEBPACK_IMPORTED_MODULE_12__["ParentComponent"],
                _test_child_child_component__WEBPACK_IMPORTED_MODULE_13__["ChildComponent"],
                _delete_conformation_delete_conformation_component__WEBPACK_IMPORTED_MODULE_14__["DeleteConformationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrFormsNextModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
                _services_user_profile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"],
                _services_mentee_service__WEBPACK_IMPORTED_MODULE_0__["MenteeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete-conformation/delete-conformation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/delete-conformation/delete-conformation.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-conformation/delete-conformation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/delete-conformation/delete-conformation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-modal class=\"modal\" [(clrModalOpen)]=\"visable\"\n                         [clrModalClosable]=\"false\"\n                         [clrModalStaticBackdrop]=\"false\"\n                         [clrModalSize]=\"'md'\">\n  <h3 class=\"modal-title\">Are you sure you want to permanently delete this Mentee?</h3>\n  <div class=\"modal-body\">\n      <p>Really, really, REALLYYyY sure???</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline\" (click)=\"onConfirmDelete(menteeToDelete)\">Confirm</button>\n      <button type=\"button\" class=\"btn btn-outline\" (click)=\"onClose()\">Cancel</button>\n  </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/delete-conformation/delete-conformation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/delete-conformation/delete-conformation.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteConformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConformationComponent", function() { return DeleteConformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/mentee.service */ "./src/app/services/mentee.service.ts");
/* harmony import */ var _types_mentee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/mentee */ "./src/app/types/mentee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteConformationComponent = /** @class */ (function () {
    function DeleteConformationComponent(menteeService) {
        this.menteeService = menteeService;
        this.modalState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteConfirm = false;
    }
    DeleteConformationComponent.prototype.ngOnChanges = function () {
    };
    DeleteConformationComponent.prototype.onClose = function () {
        this.visable = false;
        this.modalState.emit(false);
    };
    DeleteConformationComponent.prototype.onConfirmDelete = function (mentee) {
        console.log('This is in on ConfirmDelete: ' + this.menteeToDelete);
        this.menteeDelete = mentee;
        this.submitDelete.emit(this.menteeDelete);
        this.onClose();
    };
    DeleteConformationComponent.prototype.menteeModalState = function (visable) {
        console.log('From the child: ', visable);
        this.deleteConfirm = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DeleteConformationComponent.prototype, "visable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _types_mentee__WEBPACK_IMPORTED_MODULE_2__["Mentee"])
    ], DeleteConformationComponent.prototype, "menteeToDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DeleteConformationComponent.prototype, "modalState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DeleteConformationComponent.prototype, "submitDelete", void 0);
    DeleteConformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-conformation',
            template: __webpack_require__(/*! ./delete-conformation.component.html */ "./src/app/delete-conformation/delete-conformation.component.html"),
            styles: [__webpack_require__(/*! ./delete-conformation.component.css */ "./src/app/delete-conformation/delete-conformation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mentee_service__WEBPACK_IMPORTED_MODULE_1__["MenteeService"]])
    ], DeleteConformationComponent);
    return DeleteConformationComponent;
}());



/***/ }),

/***/ "./src/app/mentee-form/mentee-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mentee-form/mentee-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mentee-form/mentee-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/mentee-form/mentee-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ADD NEW MENTEE MODAL -->\n<clr-modal class=\"modal\" style=\"height: fit-content;\"\n                         [(clrModalOpen)]=\"visable\"\n                         [clrModalClosable]=\"false\"\n                         [clrModalStaticBackdrop]=\"false\">\n  <h3 class=\"modal-title\">Add New Mentee</h3>\n  <div class=\"modal-body\">\n      <!-- verical, horizonal or compact -->\n    <form clrForm\n          clrLayout=\"horizontal\"\n          (ngSubmit)=\"onSubmit(menteeForm)\"\n          #menteeForm='ngForm'\n          id=\"ngForm\">\n        <clr-input-container>\n            <label>Mentee Name</label>\n            <input clrInput type=\"text\"\n                            required\n                            [(ngModel)]=\"model.name\"\n                            name=\"name\"\n                            #spy />\n            <clr-control-helper>This helper text displays while the input is pristine and valid</clr-control-helper>\n            <clr-control-helper>This is an Error message that displays on no focus and input is invalid</clr-control-helper>\n        </clr-input-container>\n        <clr-input-container>\n            <label>Working Site</label>\n            <select clrInput  required\n                                [(ngModel)]=\"model.site\"\n                                name=\"site\">\n                <option value=\"MN\">Minnesota</option>\n                <option value=\"CA\">California</option>\n            </select>\n            <clr-control-helper>Select a fucking option, there is only two!</clr-control-helper>\n            <clr-control-error>If you are seeing this, you are really good at fucking up</clr-control-error>\n        </clr-input-container>\n        <clr-input-container>\n            <label>Business Unit</label>\n            <select clrInput\n                    required\n                    [(ngModel)]=\"model.bu\"\n                    name=\"bu\">\n                <option value=\"DEV\">Development</option>\n                <option value=\"Cisco\">Cisco Data</option>\n                <option value=\"PM\">Project Management</option>\n            </select>\n            <clr-control-helper>Please enter you job position</clr-control-helper>\n            <clr-control-error>This field is required!</clr-control-error>\n        </clr-input-container>\n        <input clrInput type=\"hidden\" name=\"id\" [(ngModel)]=\"model.id\" />\n        <input clrInput type=\"hidden\" name=\"input\" [(ngModel)]=\"model.assignedVirlInstance\" />\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-outline\" (click)=\"onClose()\">Cancel</button>\n    <button class=\"btn btn-primary\" form=\"ngForm\" [disabled]=\"!menteeForm.form.valid\">Save</button>\n</div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/mentee-form/mentee-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mentee-form/mentee-form.component.ts ***!
  \******************************************************/
/*! exports provided: MenteeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeFormComponent", function() { return MenteeFormComponent; });
/* harmony import */ var _types_mentee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../types/mentee */ "./src/app/types/mentee.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenteeFormComponent = /** @class */ (function () {
    function MenteeFormComponent() {
        this.submitMentee = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // model = this.populateMenteeForm(this.currentMentee);
        this.model = new _types_mentee__WEBPACK_IMPORTED_MODULE_0__["Mentee"]('', '', '');
        this.submitted = false;
    }
    MenteeFormComponent.prototype.ngOnChanges = function () {
        this.model = this.currentMentee;
    };
    MenteeFormComponent.prototype.onSubmit = function (menteeForm) {
        console.log('Mentee Form: ' + menteeForm.value);
        console.log('model assign: ' + this.model.id);
        console.log('model assign: ' + this.model.name);
        this.model = menteeForm.value;
        console.log('model assign: ' + this.model.id);
        console.log('model assign: ' + this.model.name);
        this.submitted = true;
        this.submitMentee.emit(this.model);
        this.visable = false;
        this.onClose(menteeForm);
    };
    MenteeFormComponent.prototype.populateMenteeForm = function (mentee) {
        if (mentee === null) {
            this.model = new _types_mentee__WEBPACK_IMPORTED_MODULE_0__["Mentee"]('', '', '');
        }
        else {
            this.model = new _types_mentee__WEBPACK_IMPORTED_MODULE_0__["Mentee"]('newMentee', '', '');
            //this.model = mentee; 
        }
    };
    MenteeFormComponent.prototype.onClose = function (menteeForm) {
        this.visable = false;
        this.modalState.emit(false);
    };
    Object.defineProperty(MenteeFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], MenteeFormComponent.prototype, "visable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _types_mentee__WEBPACK_IMPORTED_MODULE_0__["Mentee"])
    ], MenteeFormComponent.prototype, "currentMentee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenteeFormComponent.prototype, "submitMentee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenteeFormComponent.prototype, "modalState", void 0);
    MenteeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-form',
            template: __webpack_require__(/*! ./mentee-form.component.html */ "./src/app/mentee-form/mentee-form.component.html"),
            styles: [__webpack_require__(/*! ./mentee-form.component.css */ "./src/app/mentee-form/mentee-form.component.css")]
        })
    ], MenteeFormComponent);
    return MenteeFormComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee.component.css":
/*!*********************************************!*\
  !*** ./src/app/mentee/mentee.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mentee/mentee.component.html":
/*!**********************************************!*\
  !*** ./src/app/mentee/mentee.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mentee/mentee.component.ts":
/*!********************************************!*\
  !*** ./src/app/mentee/mentee.component.ts ***!
  \********************************************/
/*! exports provided: MenteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeComponent", function() { return MenteeComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenteeComponent = /** @class */ (function () {
    function MenteeComponent(http) {
        this.http = http;
    }
    MenteeComponent.prototype.ngOnInit = function () {
    };
    MenteeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee',
            template: __webpack_require__(/*! ./mentee.component.html */ "./src/app/mentee/mentee.component.html"),
            styles: [__webpack_require__(/*! ./mentee.component.css */ "./src/app/mentee/mentee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MenteeComponent);
    return MenteeComponent;
}());



/***/ }),

/***/ "./src/app/mentor/mentor.component.css":
/*!*********************************************!*\
  !*** ./src/app/mentor/mentor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-box {\n    padding: 20px;\n}"

/***/ }),

/***/ "./src/app/mentor/mentor.component.html":
/*!**********************************************!*\
  !*** ./src/app/mentor/mentor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-box\">\n    <div>\n        <!-- BUTTON GROUP -->\n        <div class=\"btn-group btn-primary\">\n            <button class=\"btn\">\n                <clr-icon shape=\"home\"></clr-icon>\n                Home\n            </button>\n            <button class=\"btn\" (click)='newModal()'>\n                <clr-icon shape=\"plus\"></clr-icon>\n                new\n            </button>\n            <button class=\"btn\" (click)='errorModal = true'>\n                <clr-icon shape=\"error\"></clr-icon>\n                error\n            </button>\n            <clr-dropdown>\n                <button class=\"btn btn-outline-primary\" clrDropdownTrigger>\n                    <clr-icon shape=\"ellipsis-horizontal\"></clr-icon>\n                </button>\n                <clr-dropdown-menu clrPosition=\"bottom-left\" *clrIfOpen>\n                    <label class=\"dropdown-header\" aria-hidden=\"true\">Dropdown header</label>\n                    <div clrDropdownItem>Action 1</div>\n                    <div class=\"dropdown-divider\" role=\"separator\" aria-hidden=\"true\"></div>\n                    <div clrDropdownItem>Link 2</div>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n        </div>\n    </div>\n\n  <clr-datagrid>\n    <clr-dg-column [clrDgField]=\"'id'\">ID</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'name'\">Mentee Name</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'site'\">Site</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'bu'\">BU</clr-dg-column>\n    <clr-dg-column [clrDgField]=\"'assignedVirlInstance'\">Assigned VIRL Instance</clr-dg-column>\n    <clr-dg-column>Actions</clr-dg-column>\n\n    <clr-dg-row *clrDgItems=\"let mentee of mentees\">\n        <clr-dg-cell>{{mentee.id}}</clr-dg-cell>\n        <clr-dg-cell>{{mentee.name}}</clr-dg-cell>\n        <clr-dg-cell>{{mentee.site}}</clr-dg-cell>\n        <clr-dg-cell>{{mentee.bu}}</clr-dg-cell>\n        <clr-dg-cell>{{mentee.assignedVirlInstance}}</clr-dg-cell>\n        <clr-dg-cell>\n            <!-- UD BUTTON GROUP -->\n            <div class=\"btn-group\">\n                <button class=\"btn btn-primary\" (click)=\"editModal(mentee)\">\n                    <clr-icon shape=\"pencil\"></clr-icon>\n                    Edit\n                </button>\n                <button class=\"btn btn-danger\" (click)=\"deleteConfirm(mentee)\">\n                    <clr-icon shape=\"remove\"></clr-icon>\n                    Delete\n                </button>\n            </div>\n        </clr-dg-cell>\n    </clr-dg-row>\n\n    <clr-dg-footer>{{mentees.length}} mentees</clr-dg-footer>\n  </clr-datagrid>\n</div>\n\n<!-- new mentee modal now in mentee-form -->\n<app-mentee-form [visable]=\"newMenteeModal\"\n                 [currentMentee]=\"newVar\"\n                 (submitMentee)=\"saveMentee($event)\"\n                 (modalState)=\"menteeModalState($event)\">\n</app-mentee-form>\n\n<!-- ERROR MODAL -->\n<clr-modal class=\"modal\" [(clrModalOpen)]=\"errorModal\"\n                         [clrModalClosable]=\"false\"\n                         [clrModalStaticBackdrop]=\"false\"\n                         [clrModalSize]=\"'sm'\">\n  <h3 class=\"modal-title\">You just experienced an ERROR!</h3>\n  <div class=\"modal-body\">\n      <p>error, error, ERROR!!!</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline\" (click)=\"errorModal = false\">ok</button>\n  </div>\n</clr-modal>\n\n<!-- DELETE CONFORMATION MODAL -->\n<app-delete-conformation [visable]=\"conformationModal\"\n                         [menteeToDelete]=\"newVar\"\n                         (modalState)=\"deleteConfirmModalState($event)\"\n                         (submitDelete)=\"removeMentee($event)\">\n</app-delete-conformation>"

/***/ }),

/***/ "./src/app/mentor/mentor.component.ts":
/*!********************************************!*\
  !*** ./src/app/mentor/mentor.component.ts ***!
  \********************************************/
/*! exports provided: MentorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorComponent", function() { return MentorComponent; });
/* harmony import */ var _types_mentee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../types/mentee */ "./src/app/types/mentee.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mentee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mentee.service */ "./src/app/services/mentee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MentorComponent = /** @class */ (function () {
    function MentorComponent(menteeService) {
        this.menteeService = menteeService;
        this.mentees = [];
        this.newMenteeModal = false;
        this.errorModal = false;
        this.conformationModal = false;
        this.newVar = new _types_mentee__WEBPACK_IMPORTED_MODULE_0__["Mentee"]('', '', '');
    }
    MentorComponent.prototype.ngOnInit = function () {
        this.getMentees();
    };
    MentorComponent.prototype.getMentees = function () {
        var _this = this;
        this.menteeService.getMentees()
            .subscribe(function (mentees) { return _this.mentees = mentees; });
    };
    MentorComponent.prototype.saveMentee = function (newMentee) {
        var _this = this;
        this.newMenteeModal = false;
        if (newMentee.id === undefined) {
            console.log('This is in the create new mentee.');
            this.menteeService.addMentee(newMentee)
                .subscribe(function (mentee) { return _this.mentees.push(mentee); });
        }
        else {
            console.log('This is in the update mentee.');
            this.menteeService.addMentee(newMentee)
                .subscribe(function (mentee) { return console.log('Mentee has been updated'); });
        }
    };
    MentorComponent.prototype.newModal = function () {
        this.newVar = new _types_mentee__WEBPACK_IMPORTED_MODULE_0__["Mentee"]('', '', '');
        this.newMenteeModal = true;
    };
    MentorComponent.prototype.editModal = function (mentee) {
        this.newVar = mentee;
        this.newMenteeModal = true;
    };
    MentorComponent.prototype.deleteConfirm = function (mentee) {
        this.newVar = mentee;
        this.conformationModal = true;
    };
    MentorComponent.prototype.removeMentee = function (mentee) {
        var _this = this;
        console.log('Deleteing Mentee: ' + mentee);
        this.menteeService.deleteMentee(mentee.id)
            .subscribe(function (removeMenteee) { return _this.mentees.splice(_this.mentees.indexOf(mentee), 1); });
        console.log('Finished removeMentee: ' + mentee);
    };
    MentorComponent.prototype.menteeModalState = function (visable) {
        console.log('From the child: ', visable);
        this.newMenteeModal = visable;
    };
    MentorComponent.prototype.deleteConfirmModalState = function (visable) {
        this.conformationModal = visable;
    };
    MentorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentor',
            template: __webpack_require__(/*! ./mentor.component.html */ "./src/app/mentor/mentor.component.html"),
            styles: [__webpack_require__(/*! ./mentor.component.css */ "./src/app/mentor/mentor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mentee_service__WEBPACK_IMPORTED_MODULE_2__["MenteeService"]])
    ], MentorComponent);
    return MentorComponent;
}());



/***/ }),

/***/ "./src/app/services/mentee.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/mentee.service.ts ***!
  \********************************************/
/*! exports provided: MenteeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeService", function() { return MenteeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var MenteeService = /** @class */ (function () {
    function MenteeService(http) {
        this.http = http;
        this.menteeUrl = '/api/mentee/';
    }
    MenteeService.prototype.getMentees = function () {
        return this.http.get(this.menteeUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MenteeService.prototype.addMentee = function (mentee) {
        console.log(mentee);
        return this.http.post(this.menteeUrl, mentee, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MenteeService.prototype.deleteMentee = function (id) {
        var url = this.menteeUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MenteeService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it accordingly
            console.error('An error occurred: ', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code
            // The response body may contain clues to what went wrong
            console.error("Backend returned code: " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    MenteeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MenteeService);
    return MenteeService;
}());



/***/ }),

/***/ "./src/app/services/user-profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-profile.service.ts ***!
  \**************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileService = /** @class */ (function () {
    function UserProfileService(http) {
        this.http = http;
        this.serviceMessage = 'Service Injected';
    }
    UserProfileService.prototype.getUserProfile = function (name) {
        this.http.get('/api/profile/' + name).subscribe(function (profile) { console.log(profile); });
    };
    UserProfileService.prototype.getSessionProfile = function () {
        return this.http.get('/api/profile/');
    };
    UserProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserProfileService);
    return UserProfileService;
}());



/***/ }),

/***/ "./src/app/test/child/child.component.html":
/*!*************************************************!*\
  !*** ./src/app/test/child/child.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  child works!\n</p>\n\n {{parent_message}}\n <br>\n {{parent_message2}}\n <br>\n {{ teachChild }}\n <hr>\n <input type='text' (keyup)='notifyParent()' [(ngModel)]=\"child_message\" />\n <button (click)='notifyParent()'>Send Message to parent</button>"

/***/ }),

/***/ "./src/app/test/child/child.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test/child/child.component.ts ***!
  \***********************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChildComponent.prototype.notifyParent = function () {
        this.notify.emit(this.child_message);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "parent_message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "parent_message2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "teachChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChildComponent.prototype, "notify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "child_message", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/test/child/child.component.html")
        })
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/test/parent/parent.component.html":
/*!***************************************************!*\
  !*** ./src/app/test/parent/parent.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  parent works!\n</p>\n\n{{ messageFromChild }}\n\n<br>\n\n<input type='text' [(ngModel)]='message_to_child' />\n\n<hr>\n\n<app-child [parent_message]='message'\n           [parent_message2]='message2'\n           (notify)='onNotify($event)'\n           [teachChild]='message_to_child'></app-child>"

/***/ }),

/***/ "./src/app/test/parent/parent.component.ts":
/*!*************************************************!*\
  !*** ./src/app/test/parent/parent.component.ts ***!
  \*************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.message = 'This is a message from the parent component.';
        this.message2 = 'This is the second message from parent!';
    }
    ParentComponent.prototype.onNotify = function (message) {
        this.messageFromChild = message;
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/test/parent/parent.component.html")
        })
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/types/mentee.ts":
/*!*********************************!*\
  !*** ./src/app/types/mentee.ts ***!
  \*********************************/
/*! exports provided: Mentee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mentee", function() { return Mentee; });
// OLD WAY 
// export class Mentee {
//     id: string;
//     name: string;
//     site: string;
//     bu: string;
//     assignedVirlInstance: string;
// }
// NEW WAY -- with optionals,
styleUrls: ['./testparent.component.css'];
var Mentee = /** @class */ (function () {
    function Mentee(name, site, bu, assignedVirlInstance, id) {
        this.name = name;
        this.site = site;
        this.bu = bu;
        this.assignedVirlInstance = assignedVirlInstance;
        this.id = id;
    }
    return Mentee;
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

module.exports = __webpack_require__(/*! /home/mrolfe/IdeaProjects/com.astontech.virl.student/src/main/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map