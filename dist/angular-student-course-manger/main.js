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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\n  background-color: red;\n  border-color: red;\n}\n\n.active.wbdv a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row\">\n  <div class=\"col-4\">\n    <h2>Admin Page</h2>\n    <a routerLink=\"/profile\">Profile</a>\n    <a routerLink=\"/home\">Home</a>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Courses</li>\n      <li *ngFor=\"let course of courses\"\n          class=\"list-group-item wbdv\"\n          [ngClass]=\"{'active': course.id == courseId}\">\n        <a routerLink=\"/admin/course/{{course.id}}/section\"\n        (click)=\"setCourseId(course.id)\">\n          {{course.title}}\n        </a>\n      </li>\n    </ul>\n\n  </div>\n  <div class=\"col-8\">\n    <app-section-list></app-section-list>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent(service) {
        this.service = service;
        this.courses = [];
        this.courseId = '';
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    AdminPageComponent.prototype.setCourseId = function (courseId) {
        this.courseId = courseId;
    };
    AdminPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-list/course-list.component */ "./src/app/course-list/course-list.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./topic-list/topic-list.component */ "./src/app/topic-list/topic-list.component.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _course_list_course_list_component__WEBPACK_IMPORTED_MODULE_6__["CourseListComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_8__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_9__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_11__["LessonTabsComponent"],
                _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_13__["TopicListComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_21__["SectionListComponent"],
                _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_23__["AdminPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_10__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_12__["LessonServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_14__["TopicServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_16__["WidgetServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_18__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_22__["SectionServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");








var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__["SectionListComponent"] },
    { path: 'admin', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__["AdminPageComponent"] },
    { path: 'admin/course/:courseId/section', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__["AdminPageComponent"] },
    { path: '**', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-list/course-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-list/course-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/course-list/course-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-list/course-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Course Grid ({{courses.length}})</h2>\n\n  <div class=\"row\">\n    <div *ngFor=\"let course of courses\" class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{course.title}}</h5>\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n          <a routerLink=\"/course/{{course.id}}\"\n             class=\"btn btn-primary\"\n             style=\"margin-right: 10px\">See More</a>\n          <a routerLink=\"/course/{{course.id}}/section\"\n             class=\"btn btn-primary\">Enroll</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/course-list/course-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-list/course-list.component.ts ***!
  \******************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(service) {
        this.service = service;
        this.courses = [];
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.css */ "./src/app/course-list/course-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>{{course.title}}</h2>\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.course = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-view',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <Span class=\"navbar-brand disabled\">White Board</Span>\n    <div class='row flex-lg-row'>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a routerLink=\"/login\" class=\"nav-link\">Login <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a routerLink=\"/register\" class=\"nav-link\">Register <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/quizzes\" class=\"nav-link disabled\">Quizzes</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid\">\n    <div *ngIf=\"isLoggedIn\" style=\"margin-top: 10px; margin-bottom: 10px\">\n      <h3>Current User: {{user.username}}</h3>\n      <h4>Enrolled course: {{enrolledCourse.length}}</h4>\n      <div *ngFor=\"let course of enrolledCourse\" class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{course.title}}</h5>\n            <a routerLink=\"/course/{{course.id}}\"\n               class=\"btn btn-primary\"\n               style=\"margin-right: 10px\">See More</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-course-list></app-course-list>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(service, sectionService, courseService) {
        this.service = service;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.isLoggedIn = false;
        this.enrolledCourse = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) {
            _this.user = user;
            console.log(user);
            if (!user.error) {
                _this.isLoggedIn = true;
                _this.sectionService
                    .findSectionsForStudent(user._id)
                    .then(function (sections) {
                    sections.forEach(function (section) {
                        _this.courseService.findCourseById(section.section.courseId)
                            .then(function (course) {
                            var isThere = false;
                            _this.enrolledCourse.forEach(function (temp) {
                                if (temp.id === course.id) {
                                    isThere = true;
                                }
                            });
                            if (!isThere) {
                                _this.enrolledCourse.push(course);
                            }
                        });
                    });
                });
            }
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item\">\n    <a class=\"nav-link\"\n       [ngClass]=\"{'active': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n<app-topic-list></app-topic-list>\n<!--<app-widget-list></app-widget-list>-->\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    // dataLoaded = false;
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        if (this.moduleId) {
            this.loadLessons(this.moduleId);
        }
    };
    LessonTabsComponent.prototype.loadLessons = function (moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        this.service.findLessonsForModule(moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_1__["LessonServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#links {\n  justify-content: space-between;\n  margin:10px\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n  <div id=\"links\" class=\"row\">\n    <a routerLink=\"/register\">Register</a>\n    <a routerLink=\"/home\">Home</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        // console.log([username, password]);
        if (!(username && password)) {
            alert('Password and username required');
            return;
        }
        else {
            this.service
                .login(username, password)
                .then(function (response) {
                return response.json();
            })
                .then(function (user) {
                if (user.error) {
                    alert('User do not exist or password is incorrect');
                }
                else {
                    _this.router.navigate(['profile']);
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\n  background-color: red;\n  border-color: red;\n}\n\n.active.wbdv a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item active\">Modules</li>\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item wbdv\">\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  margin-top: 5px;\n}\n\n#links {\n  justify-content: space-between;\n  margin:10px\n}\n\n#buttons {\n  justify-content: space-between;\n  margin:10px\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Profile</h1>\n\n  <div id=\"links\" class = \"row\">\n    <a *ngIf=\"isAdmin\" routerLink=\"/admin\">Admin</a>\n    <a routerLink=\"/home\">Home Page</a>\n  </div>\n\n  <input [(ngModel)]=\"user.username\"\n         placeholder=\"username\"\n         class=\"form-control input\" readonly/>\n  <input [(ngModel)]=\"user.firstName\"\n         placeholder=\"first name\"\n         class=\"form-control input\"/>\n  <input [(ngModel)]=\"user.lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control input\"/>\n  <input [(ngModel)]=\"user.email\"\n         placeholder=\"email\"\n         class=\"form-control input\"/>\n  <input [(ngModel)]=\"user.phoneNumber\"\n         placeholder=\"phone\"\n         class=\"form-control input\"/>\n  <input [(ngModel)]=\"user.address\"\n         placeholder=\"address\"\n         class=\"form-control input\"/>\n  <button (click)=\"update()\"\n          class=\"float-right btn btn-primary btn-block input\">\n    Update\n  </button>\n\n  <h2 style=\"margin-top: 20px\">Enrolled Courses - total: ({{courses.length}})</h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let course of courses\" class=\"list-group-item\">\n      {{course.title}}\n      <a routerLink=\"/course/{{course.id}}\" style=\"margin-left: 20px\">See More About Course</a>\n      <a routerLink=\"/course/{{course.id}}/section\" style=\"margin-left: 20px\">See Sections</a>\n    </li>\n  </ul>\n\n  <h2 style=\"margin-top: 20px\">Enrolled Sections - total: ({{sections.length}})</h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n      Section Name:{{enrollment.section.name}}\n      Available Seats:({{enrollment.section.seats}})\n      <button class=\"btn btn-danger\"\n              (click)=\"unenrollment(user._id, enrollment.section._id)\">\n        un-enroll\n      </button>\n    </li>\n  </ul>\n\n  <div id=\"buttons\" class = \"row\">\n    <button class=\"btn btn-danger\" (click)=\"DeleteUser()\">Delete Profile</button>\n    <button (click)=\"logout()\" class=\"btn btn-primary\">Logout</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, courseService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.isAdmin = false;
        this.sections = [];
        this.courses = [];
    }
    ProfileComponent.prototype.update = function () {
        // console.log(this.user);
        this.service.updateUser(this.user).then(function () { return alert('Updated Successfully'); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.unenrollment = function (userId, sectionId) {
        var _this = this;
        this.sectionService
            .unenrollStudentInSection(userId, sectionId)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            if (res.error) {
                alert(res.error);
            }
            else {
                _this.sectionService
                    .findSectionsForStudent(userId)
                    .then(function (sections) {
                    if (sections.error) {
                        alert(sections.error);
                    }
                    else {
                        _this.sections = sections;
                        _this.findEnrolledCourses(sections);
                        alert('Un-enrollment successfully');
                    }
                });
            }
        });
    };
    ProfileComponent.prototype.initialUser = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            if (user.error) {
                alert('You have logged out!');
            }
            else {
                _this.user = user;
                if (user.username === 'admin' && user.password === 'admin') {
                    _this.isAdmin = true;
                }
                _this.sectionService
                    .findSectionsForStudent(user._id)
                    .then(function (sections) {
                    // console.log(sections);
                    if (sections.error) {
                        alert(sections.error);
                    }
                    else {
                        _this.sections = sections;
                        _this.findEnrolledCourses(sections);
                    }
                });
            }
        });
    };
    ProfileComponent.prototype.findEnrolledCourses = function (sections) {
        var _this = this;
        this.courses = new Array();
        sections.forEach(function (section) {
            _this.courseService.findCourseById(section.section.courseId)
                .then(function (course) { _this.courses.push(course); console.log(_this.courses); });
        });
    };
    ProfileComponent.prototype.DeleteUser = function () {
        var _this = this;
        if (confirm('Are you sure to cancel the account ? It can not be retrieved again')) {
            this.service
                .deleteUser(this.user)
                .then(function (res) { return res.json(); })
                .then(function (res) {
                if (res.err) {
                    alert(res.err);
                }
                else {
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.initialUser();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#links {\n  justify-content: space-between;\n  margin:10px\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Register</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password2\"\n         placeholder=\"verify password\"\n         class=\"form-control\"/>\n  <button (click)=\"register(username, password, password2)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n  <div id=\"links\" class=\"row\">\n    <a routerLink=\"/login\">Login</a>\n    <a routerLink=\"/home\">Home</a>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (password !== password2) {
            alert('The passwords do not match');
            return;
        }
        this.service.findUserByUsername(username).then(function (res) {
            if (res !== null) {
                alert('Username has been taken');
                return;
            }
            else {
                _this.service
                    .createUser(username, password)
                    .then(function () {
                    return _this.router.navigate(['profile']);
                });
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2 *ngIf=\"course\">Sections for course: {{course.title}}</h2>\n  <h4  *ngIf=\" student && student.username !== 'admin'\"> Note: you can just register only one section for per course</h4>\n  <div *ngIf=\"student && student.username === 'admin' && student.password === 'admin' && courseId\">\n    <input [(ngModel)]=\"sectionName\"\n           placeholder=\"Section Name\"\n           class=\"form-control\">\n    <input [(ngModel)]=\"seats\"\n           placeholder=\"Seats available\"\n           class=\"form-control\">\n    <button (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success btn-block\">\n      Add Section\n    </button>\n  </div>\n\n  <div *ngIf=\"isUpdating\">\n    <h2>Modifying Section: </h2>\n    <input [(ngModel)]=\"updatingSectionName\"\n           placeholder=\"Section Name\"\n           class=\"form-control\">\n    <input [(ngModel)]=\"updatingSectionSeat\"\n           placeholder=\"Seats available\"\n           class=\"form-control\">\n    <button class=\"btn btn-primary\"\n    (click)=\"saveUpdate()\">Save Update</button>\n  </div>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      Name:{{section.name}}   Available Seats:{{section.seats}}\n      <button (click)=\"enroll(section)\"\n              *ngIf=\" student && student.username !== 'admin'\"\n              class=\"float-right btn btn-primary\">Enroll</button>\n      <button class=\"btn btn-warning\"\n              (click)=\"updateSection(section)\"\n              *ngIf=\"student && student.username === 'admin'\">\n        Update\n      </button>\n      <button class=\"btn btn-danger\"\n              (click)=\"deleteSection(section)\"\n              *ngIf=\"student && student.username === 'admin'\">\n        Delete\n      </button>\n    </li>\n  </ul>\n\n  <a routerLink=\"/profile\">Go Back To Profile</a>\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, userService, router, courseService, route) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.router = router;
        this.courseService = courseService;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sections = [];
        this.isUpdating = false;
        this.updatingSectionSeat = 0;
        this.route.params.subscribe(function (params) {
            _this.courseService.findCourseById(params['courseId']).then(function (course) { return _this.course = course; });
            _this.loadSections(params['courseId']);
        });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        if (courseId) {
            this.courseId = courseId;
            this.service
                .findSectionsForCourse(courseId)
                .then(function (sections) { return _this.sections = sections; });
        }
    };
    SectionListComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        if (seats === '') {
            alert('please enter the number of section seats');
        }
        else {
            if (sectionName === '') {
                sectionName = this.course.title + ' ' + 'Section' + (this.sections.length + 1);
            }
            this
                .service
                .createSection(this.courseId, sectionName, seats)
                .then(function () {
                alert('Successfully created');
                _this.loadSections(_this.courseId);
            });
        }
    };
    SectionListComponent.prototype.hasEnrolled = function (sections) {
        var _this = this;
        sections.forEach(function (section) {
            if (section.courseId === _this.courseId) {
                return true;
            }
        });
        return false;
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        // console.log(this.student);
        if (this.student.error) {
            alert(this.student.error);
        }
        else {
            this.service.findSectionsForStudent(this.student._id)
                .then(function (sections) {
                if (_this.hasEnrolled(_this.sections)) {
                    alert('You has been enrolled in this course');
                }
                else {
                    _this.service
                        .enrollStudentInSection(_this.student._id, section._id)
                        .then(function (temp) { return temp.json(); })
                        .then(function (result) {
                        if (result.error) {
                            alert(result.error);
                        }
                        else {
                            _this.router.navigate(['profile']);
                        }
                    });
                }
            });
        }
    };
    SectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            if (user !== undefined) {
                _this.student = user;
            }
        });
    };
    SectionListComponent.prototype.updateSection = function (section) {
        this.isUpdating = !this.isUpdating;
        this.updatingSectionName = section.name;
        this.updatingSectionSeat = section.seats;
        this.updatingSectionId = section._id;
    };
    SectionListComponent.prototype.saveUpdate = function () {
        var _this = this;
        var newSection = {
            _id: this.updatingSectionId,
            name: this.updatingSectionName,
            seats: this.updatingSectionSeat
        };
        this.service
            .updateSection(newSection)
            .then(function () {
            _this.isUpdating = false;
            alert('Successfully updated');
            _this.loadSections(_this.courseId);
        });
    };
    SectionListComponent.prototype.deleteSection = function (section) {
        var _this = this;
        this.service
            .deleteSection(section)
            .then(function () {
            alert('Successfully deleted');
            _this.loadSections(_this.courseId);
        });
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://zhemingg-assignment.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        // console.log(this.COURSE_URL + '/' + courseId);
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
    }
    LessonServiceClient.prototype.findLessonsForModule = function (moduleId) {
        return fetch('http://zhemingg-assignment.herokuapp.com/api/course/courseId/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = 'https://zhemingg-assignment.herokuapp.com/api/course/COURSE_ID/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'https://zhemingg-node-student.herokuapp.com/api/course/COURSEID/section';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function (studentId) {
        var url = 'https://zhemingg-node-student.herokuapp.com/api/student/' + studentId + '/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (studentId, sectionId) {
        var url = 'https://zhemingg-node-student.herokuapp.com/api/student/' + studentId + '/section/' + sectionId;
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.unenrollStudentInSection = function (studentId, sectionId) {
        var url = 'https://zhemingg-node-student.herokuapp.com/api/student/' + studentId + '/section/' + sectionId;
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
        // console.log('unenrollment');
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.updateSection = function (newSection) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/section/' + newSection._id, {
            method: 'put',
            body: JSON.stringify(newSection),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.deleteSection = function (section) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/section/' + section._id, {
            method: 'delete',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.hasEnrollment = function (studentId, sectionId, courseId) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/student/' + studentId + '/course/' + courseId + '/section/' + sectionId, {
            credentials: 'include',
        })
            .then(function (res) { return res.json(); });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
    }
    TopicServiceClient.prototype.findTopicsForLesson = function (lessonId) {
        return fetch('http://zhemingg-assignment.herokuapp.com/api/course/courseId/module/moduleId/lesson/' + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/users/' + username)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://zhemingg-node-student.herokuapp.com/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch('https://zhemingg-node-student.herokuapp.com/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/profile', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.deleteUser = function (user) {
        return fetch('https://zhemingg-node-student.herokuapp.com/api/profile', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForTopic = function (topicId) {
        return fetch('http://zhemingg-assignment.herokuapp.com/api/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-list/topic-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\n  background-color: red;\n  border-color: red;\n}\n\n.active.wbdv a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/topic-list/topic-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ul class=\"list-group\">-->\n  <!--<li *ngFor=\"let topic of topics\"-->\n      <!--class=\"list-group-item active\">-->\n    <!--<a class=\"nav-link\"-->\n       <!--[ngClass]=\"{'active': topic.id == topicId}\"-->\n       <!--routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">-->\n      <!--{{topic.title}}-->\n    <!--</a>-->\n  <!--</li>-->\n<!--</ul>-->\n\n\n    <ul class=\"list-group\">\n      <li [ngClass]=\"{'active': topic.id == topicId}\" *ngFor=\"let topic of topics\"\n          class=\"list-group-item wbdv\">\n        <a routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n          {{topic.title}}</a>\n      </li>\n    </ul>\n\n<app-widget-list></app-widget-list>\n"

/***/ }),

/***/ "./src/app/topic-list/topic-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.ts ***!
  \****************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicListComponent = /** @class */ (function () {
    function TopicListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        if (this.lessonId) {
            this.loadTopics(this.lessonId);
        }
    };
    TopicListComponent.prototype.loadTopics = function (lessonId) {
        var _this = this;
        this.lessonId = lessonId;
        this.service.findTopicsForLesson(lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicListComponent.prototype.ngOnInit = function () {
    };
    TopicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-list',
            template: __webpack_require__(/*! ./topic-list.component.html */ "./src/app/topic-list/topic-list.component.html"),
            styles: [__webpack_require__(/*! ./topic-list.component.css */ "./src/app/topic-list/topic-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_1__["TopicServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let widget of widgets\">\n    <div *ngIf=\"widget.widgetType === 'Heading Widget' && widget.size === '1'\">\n      <h1>{{widget.text}}</h1>\n    </div>\n    <div *ngIf=\"widget.widgetType === 'Heading Widget' && widget.size === '2'\">\n      <h2>{{widget.text}}</h2>\n    </div>\n    <div *ngIf=\"widget.widgetType === 'Heading Widget' && widget.size === '3'\">\n      <h3>{{widget.text}}</h3>\n    </div>\n\n    <div *ngIf=\"widget.widgetType === 'Paragraph Widget'\">\n      {{widget.text}}\n    </div>\n\n    <div *ngIf=\"widget.widgetType === 'List Widget' && widget.listType === 'ordered'\">\n      <ol>\n        <li *ngFor=\"let line of widget.listItems.split('\\n')\">{{line}}</li>\n      </ol>\n    </div>\n\n    <div *ngIf=\"widget.widgetType === 'List Widget' && widget.listType === 'unordered'\">\n      <ul>\n        <li *ngFor=\"let line of widget.listItems.split('\\n')\">{{line}}</li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"widget.widgetType === 'Image Widget'\">\n      <img src={{widget.src}}/>\n    </div>\n\n    <div *ngIf=\"widget.widgetType === 'Link Widget'\">\n      <a href={{widget.href}}>{{widget.text}}</a>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    WidgetListComponent.prototype.setParams = function (params) {
        this.topicId = params['topicId'];
        if (this.topicId) {
            this.loadWidgets(this.topicId);
        }
    };
    WidgetListComponent.prototype.loadWidgets = function (topicId) {
        var _this = this;
        this.topicId = topicId;
        this.service.findWidgetsForTopic(topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zheminggao/neu/angular-student-course-manger/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map