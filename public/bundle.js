/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board-filter.js":
/*!****************************************!*\
  !*** ./src/components/board-filter.js ***!
  \****************************************/
/*! exports provided: boardFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardFilterTemplate", function() { return boardFilterTemplate; });
var boardFilterTemplate = function boardFilterTemplate() {
  return "<div class=\"board__filter-list\">\n          <a href=\"#\" class=\"board__filter\">SORT BY DEFAULT</a>\n          <a href=\"#\" class=\"board__filter\">SORT BY DATE up</a>\n          <a href=\"#\" class=\"board__filter\">SORT BY DATE down</a>\n        </div>";
};

/***/ }),

/***/ "./src/components/board-template.js":
/*!******************************************!*\
  !*** ./src/components/board-template.js ***!
  \******************************************/
/*! exports provided: boardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardTemplate", function() { return boardTemplate; });
var boardTemplate = function boardTemplate() {
  return "<section class=\"board container\">\n      <div class=\"board__tasks\"></div>\n    </section>";
};

/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: filterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate", function() { return filterTemplate; });
var getFilter = function getFilter(_ref) {
  var title = _ref.title,
      count = _ref.count;
  return "\n      ".concat("<input type=\"radio\" id=\"filter__".concat(title, "\" \n      class=\"filter__input visually-hidden\" \n      name=\"filter\" \n      checked=\"\">\n      <label for=\"filter__all\" class=\"filter__label\">").concat(title, "\n      <span class=\"filter__all-count\">").concat(count, "</span>\n      </label>"), "\n ");
};

var filterTemplate = function filterTemplate(filters) {
  return "\n    <section class=\"main__filter filter container\"> \n      ".concat(filters.map(function (filter) {
    return getFilter(filter);
  }).join(""), "\n    </section>\n  ");
};

/***/ }),

/***/ "./src/components/load-more-button.js":
/*!********************************************!*\
  !*** ./src/components/load-more-button.js ***!
  \********************************************/
/*! exports provided: loadMoreTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreTemplate", function() { return loadMoreTemplate; });
var loadMoreTemplate = function loadMoreTemplate() {
  return "<button class=\"load-more\" type=\"button\">load more</button>";
};

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: menuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuTemplate", function() { return menuTemplate; });
var menuTemplate = function menuTemplate() {
  return "<section class=\"control__btn-wrap\">\n          <input\n            type=\"radio\"\n            name=\"control\"\n            id=\"control__new-task\"\n            class=\"control__input visually-hidden\"\n          />\n          <label for=\"control__new-task\" class=\"control__label control__label--new-task\"\n            >+ ADD NEW TASK</label\n          >\n          <input\n            type=\"radio\"\n            name=\"control\"\n            id=\"control__task\"\n            class=\"control__input visually-hidden\"\n            checked\n          />\n          <label for=\"control__task\" class=\"control__label\">TASKS</label>\n          <input\n            type=\"radio\"\n            name=\"control\"\n            id=\"control__statistic\"\n            class=\"control__input visually-hidden\"\n          />\n          <label for=\"control__statistic\" class=\"control__label\"\n            >STATISTICS</label\n          >\n        </section>";
};

/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/*! exports provided: searchTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTemplate", function() { return searchTemplate; });
var searchTemplate = function searchTemplate() {
  return "<section class=\"main__search search container\">\n        <input\n          type=\"text\"\n          id=\"search__input\"\n          class=\"search__input\"\n          placeholder=\"START TYPING \u2014 SEARCH BY WORD, #HASHTAG OR DATE\"\n          value=\"#work\"\n        />\n        <label class=\"visually-hidden\" for=\"search__input\">\u041F\u043E\u0438\u0441\u043A</label>\n      </section>";
};

/***/ }),

/***/ "./src/components/task-edit.js":
/*!*************************************!*\
  !*** ./src/components/task-edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/components/task.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var TaskEdit =
/*#__PURE__*/
function (_Task) {
  _inherits(TaskEdit, _Task);

  function TaskEdit(_ref) {
    var _this;

    var description = _ref.description,
        dueDate = _ref.dueDate,
        repeatingDays = _ref.repeatingDays,
        tags = _ref.tags,
        color = _ref.color,
        isFavorite = _ref.isFavorite,
        isArchive = _ref.isArchive;

    _classCallCheck(this, TaskEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TaskEdit).call(this, {
      description: description,
      dueDate: dueDate,
      repeatingDays: repeatingDays,
      tags: tags,
      color: color,
      isFavorite: isFavorite,
      isArchive: isArchive
    }));

    _defineProperty(_assertThisInitialized(_this), "getTemplate", function () {
      return "\n    <article class=\"card card--edit card--".concat(_this.color, " ").concat(Object.values(_this.repeatingDays).some(function (it) {
        return it === true;
      }) ? "card--repeat" : "", "\">\n      <form class=\"card__form\" method=\"get\">\n        <div class=\"card__inner\">\n          <div class=\"card__control\">\n            <button type=\"button\" class=\"card__btn card__btn--").concat(_this.isArchive ? "" : "disabled", "\">\n              archive\n            </button>\n            <button\n              type=\"button\"\n              class=\"card__btn card__btn--favorites card__btn--").concat(_this.isFavorite ? "" : "disabled", "\"\n            >\n              favorites\n            </button>\n          </div>\n    \n          <div class=\"card__color-bar\">\n            <svg class=\"card__color-bar-wave\" width=\"100%\" height=\"10\">\n              <use xlink:href=\"#wave\"></use>\n            </svg>\n          </div>\n    \n          <div class=\"card__textarea-wrap\">\n            <label>\n              <textarea\n                class=\"card__text\"\n                placeholder=\"Start typing your text here...\"\n                name=\"text\"\n              >").concat(_this.description, "</textarea>\n            </label>\n          </div>\n    \n          <div class=\"card__settings\">\n            <div class=\"card__details\">\n              <div class=\"card__dates\">\n                <button class=\"card__date-deadline-toggle\" type=\"button\">\n                  date: <span class=\"card__date-status\">yes</span>\n                </button>\n    \n                <fieldset class=\"card__date-deadline\">\n                  <label class=\"card__input-deadline-wrap\">\n                    <input\n                      class=\"card__date\"\n                      type=\"text\"\n                      placeholder=\"\"\n                      name=\"date\"\n                      value=\"").concat(new Date(_this.dueDate).toDateString(), "\"\n                    />\n                  </label>\n                </fieldset>\n    \n                <button class=\"card__repeat-toggle\" type=\"button\">\n                  repeat:<span class=\"card__repeat-status\">").concat(Object.keys(_this.repeatingDays).some(function (day) {
        return _this.repeatingDays[day];
      }) ? "yes" : "no", "</span>\n                </button>\n    \n                <fieldset class=\"card__repeat-days\">\n                  <div class=\"card__repeat-days-inner\">\n                    ").concat(Object.keys(_this.repeatingDays).map(function (day) {
        return "\n                    <input\n                      class=\"visually-hidden card__repeat-day-input\"\n                      type=\"checkbox\"\n                      id=\"repeat-".concat(day, "-4\"\n                      name=\"repeat\"\n                      value=\"").concat(day, "\"\n                      ").concat(_this.repeatingDays[day] ? "checked" : "", "\n                    />\n                    <label class=\"card__repeat-day\" for=\"repeat-").concat(day, "-4\"\n                      >").concat(day, "</label\n                    >                  \n                    ");
      }).join(""), "\n                  </div>\n                </fieldset>\n              </div>\n    \n              <div class=\"card__hashtag\">\n                <div class=\"card__hashtag-list\">\n                ").concat(Array.from(_this.tags).map(function (tag) {
        return "\n                <span class=\"card__hashtag-inner\">\n                  <input\n                    type=\"hidden\"\n                    name=\"hashtag\"\n                    value=\"repeat\"\n                    class=\"card__hashtag-hidden-input\"\n                  />\n                  <p class=\"card__hashtag-name\">\n                    #".concat(tag, "\n                  </p>\n                  <button type=\"button\" class=\"card__hashtag-delete\">\n                    delete\n                  </button>\n                </span>\n               ");
      }).join(""), "\n                </div>\n    \n                <label>\n                  <input\n                    type=\"text\"\n                    class=\"card__hashtag-input\"\n                    name=\"hashtag-input\"\n                    placeholder=\"Type new hashtag here\"\n                  />\n                </label>\n              </div>\n            </div>\n    \n            <div class=\"card__colors-inner\">\n              <h3 class=\"card__colors-title\">Color</h3>\n              <div class=\"card__colors-wrap\">\n                <input\n                type=\"radio\"\n                id=\"color-").concat(_this.color, "-4\"\n                class=\"card__color-input card__color-input--").concat(_this.color, " visually-hidden\"\n                name=\"color\"\n                value=\"").concat(_this.color, "\"\n                checked\n                />\n                <label\n                  for=\"color-black-4\"\n                  class=\"card__color card__color--").concat(_this.color, "\"\n                  >").concat(_this.color, "</label\n                >\n              </div>\n            </div>\n          </div>\n    \n          <div class=\"card__status-btns\">\n            <button class=\"card__save\" type=\"submit\">save</button>\n            <button class=\"card__delete\" type=\"button\">delete</button>\n          </div>\n        </div>\n      </form>\n    </article>    \n  ");
    });

    return _this;
  }

  _createClass(TaskEdit, [{
    key: "getElement",
    value: function getElement() {
      if (!this.element) {
        this.element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      }

      return this.element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this.element = null;
    }
  }]);

  return TaskEdit;
}(_task__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TaskEdit);

/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Task =
/*#__PURE__*/
function () {
  function Task(_ref) {
    var _this = this;

    var description = _ref.description,
        dueDate = _ref.dueDate,
        repeatingDays = _ref.repeatingDays,
        tags = _ref.tags,
        color = _ref.color,
        isFavorite = _ref.isFavorite,
        isArchive = _ref.isArchive;

    _classCallCheck(this, Task);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "dueDate", void 0);

    _defineProperty(this, "repeatingDays", void 0);

    _defineProperty(this, "tags", void 0);

    _defineProperty(this, "color", void 0);

    _defineProperty(this, "isFavorite", void 0);

    _defineProperty(this, "isArchive", void 0);

    _defineProperty(this, "getTemplate", function () {
      return "<article class=\"card card--".concat(_this.color, " ").concat(Object.values(_this.repeatingDays).some(function (it) {
        return it === true;
      }) ? "card--repeat" : "", "\">\n            <div class=\"card__form\">\n              <div class=\"card__inner\">\n                <div class=\"card__control\">\n                  <button type=\"button\" class=\"card__btn card__btn--edit\">\n                    edit\n                  </button>\n                 <button type=\"button\" class=\"card__btn  card__btn--").concat(_this.isArchive ? "" : "disabled", "\">\n                    archive\n                  </button>\n                  <button\n                    type=\"button\"\n                    class=\"card__btn card__btn--favorites card__btn--").concat(_this.isFavorite ? "" : "disabled", "\"\n                  >\n                    favorites\n                  </button>\n                </div>\n\n                <div class=\"card__color-bar\">\n                  <svg class=\"card__color-bar-wave\" width=\"100%\" height=\"10\">\n                    <use xlink:href=\"#wave\"></use>\n                  </svg>\n                </div>\n\n                <div class=\"card__textarea-wrap\">\n                  <p class=\"card__text\">").concat(_this.description, "</p>\n                </div>\n\n                <div class=\"card__settings\">\n                  <div class=\"card__details\">\n                    <div class=\"card__dates\">\n                      <div class=\"card__date-deadline\">\n                        <p class=\"card__input-deadline-wrap\">\n                          <span class=\"card__date\">").concat(new Date(_this.dueDate).toDateString(), "</span>\n                          <span class=\"card__time\">").concat(new Date(_this.dueDate).getHours(), " : ").concat(new Date(_this.dueDate).getMinutes(), "</span>\n                        </p>\n                      </div>\n                    </div>\n\n                    <div class=\"card__hashtag\">\n                      <div class=\"card__hashtag-list\">\n                      ").concat(Array.from(_this.tags).map(function (tag) {
        return "\n                       <span class=\"card__hashtag-inner\">\n                          <span class=\"card__hashtag-name\">\n                            ".concat(tag, "\n                          </span>\n                        </span>\n                      ");
      }).join(""), "\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </article>");
    });

    this.description = description;
    this.dueDate = new Date(dueDate);
    this.repeatingDays = repeatingDays;
    this.tags = _toConsumableArray(tags);
    this.color = color;
    this.isFavorite = isFavorite;
    this.isArchive = isArchive;
    this.element = null;
  }

  _createClass(Task, [{
    key: "getElement",
    value: function getElement() {
      if (!this.element) {
        this.element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      }

      return this.element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this.element = null;
    }
  }, {
    key: "info",
    get: function get() {
      console.log(this);
    }
  }]);

  return Task;
}();

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: tasks, filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasks", function() { return tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-console */


var getTasks = function getTasks() {
  return {
    description: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElemArray"])(["\u0418\u0437\u0443\u0447\u0438\u0442\u044C \u0442\u0435\u043E\u0440\u0438\u044E", "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u043E\u043C\u0430\u0448\u043A\u0443", "\u041F\u0440\u043E\u0439\u0442\u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432 \u043D\u0430 \u0441\u043E\u0442\u043E\u0447\u043A\u0443", "\u0418\u0437\u0443\u0447\u0438\u0442\u044C ES2015", "\u0418\u0437\u0443\u0447\u0438\u0442\u044C \u041E\u041E\u041F", "JavaScript \u0443\u0440\u043E\u0432\u0435\u043D\u044C 2"]),
    dueDate: Date.now() + 1 + Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000 - 7 * 24 * 60 * 60 * 1000,
    repeatingDays: {
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randBoolean"])(),
      Sa: false,
      Su: false
    },
    tags: new Set(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["arrayRandomLength"])(["homework", "theory", "practice", "intensive", "learning"])),
    color: ["black", "yellow", "blue", "green", "pink"][Math.floor(Math.random() * 5)],
    isFavorite: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randBoolean"])(),
    isArchive: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randBoolean"])()
  };
};

var TASK_COUNT = 17;
var tasks = new Array(TASK_COUNT).fill("").map(getTasks);
var filters = [{
  title: "All",
  count: tasks.length
}, {
  title: "Overdue",
  count: tasks.filter(function (value) {
    return value.dueDate < Date.now();
  }).length
}, {
  title: "Today",
  count: tasks.filter(function (value) {
    return new Date(value.dueDate).toDateString() === new Date(Date.now()).toDateString();
  }).length
}, {
  title: "Favorites",
  count: tasks.filter(function (value) {
    return value.isFavorite === true;
  }).length
}, {
  title: "Repeating ",
  count: tasks.filter(function (value) {
    return Object.values(value.repeatingDays).some(function (day) {
      return day;
    });
  }).length
}, {
  title: "Tags",
  count: tasks.filter(function (value) {
    return value.tags;
  }).length
}, {
  title: "Archive",
  count: tasks.filter(function (value) {
    return value.isArchive === true;
  }).length
}];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search */ "./src/components/search.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter */ "./src/components/filter.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");
/* harmony import */ var _components_task_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-edit */ "./src/components/task-edit.js");
/* harmony import */ var _components_load_more_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/load-more-button */ "./src/components/load-more-button.js");
/* harmony import */ var _components_board_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/board-template */ "./src/components/board-template.js");
/* harmony import */ var _components_board_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/board-filter */ "./src/components/board-filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* eslint-disable no-console */











var renderTemplate = function renderTemplate(container, template) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "beforeend";
  container.insertAdjacentHTML(type, template);
};

var mainContainer = document.querySelector(".main");
renderTemplate(mainContainer.querySelector(".main__control"), Object(_components_menu__WEBPACK_IMPORTED_MODULE_0__["menuTemplate"])());
renderTemplate(mainContainer, Object(_components_search__WEBPACK_IMPORTED_MODULE_1__["searchTemplate"])());
renderTemplate(mainContainer, Object(_components_filter__WEBPACK_IMPORTED_MODULE_2__["filterTemplate"])(_data__WEBPACK_IMPORTED_MODULE_8__["filters"]));
renderTemplate(mainContainer, Object(_components_board_template__WEBPACK_IMPORTED_MODULE_6__["boardTemplate"])());
var boardElement = mainContainer.querySelector(".board");
var tasksContainer = mainContainer.querySelector(".board__tasks");
renderTemplate(boardElement, Object(_components_board_filter__WEBPACK_IMPORTED_MODULE_7__["boardFilterTemplate"])(), "afterBegin");
renderTemplate(boardElement, Object(_components_load_more_button__WEBPACK_IMPORTED_MODULE_5__["loadMoreTemplate"])());

var renderTask = function renderTask(taskMock) {
  var task = new _components_task__WEBPACK_IMPORTED_MODULE_3__["default"](taskMock);
  var taskEdit = new _components_task_edit__WEBPACK_IMPORTED_MODULE_4__["default"](taskMock);

  var onEscKeyDown = function onEscKeyDown(evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener("keydown", onEscKeyDown);
    }
  };

  task.getElement().querySelector(".card__btn--edit").addEventListener("click", function () {
    tasksContainer.replaceChild(taskEdit.getElement(), task.getElement());
    document.addEventListener("keydown", onEscKeyDown);
  });
  taskEdit.getElement().querySelector("textarea").addEventListener("focus", function () {
    document.removeEventListener("keydown", onEscKeyDown);
  });
  taskEdit.getElement().querySelector(".card__save").addEventListener("click", function () {
    tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
    document.removeEventListener("keydown", onEscKeyDown);
  });
  taskEdit.getElement().querySelector("textarea").addEventListener("blur", function () {
    document.addEventListener("keydown", onEscKeyDown);
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["render"])(tasksContainer, task.getElement(), _utils__WEBPACK_IMPORTED_MODULE_9__["Position"].BEFOREEND);
};

var LOAD_TASK_NUMBER = 8;
_data__WEBPACK_IMPORTED_MODULE_8__["tasks"].slice(0, LOAD_TASK_NUMBER).forEach(function (task) {
  return renderTask(task);
});
var btnLoadMore = boardElement.querySelector(".load-more");
btnLoadMore.addEventListener("click", function () {
  var taskCount = tasksContainer.childElementCount;

  if (taskCount < _data__WEBPACK_IMPORTED_MODULE_8__["tasks"].length) {
    _data__WEBPACK_IMPORTED_MODULE_8__["tasks"].slice(taskCount, taskCount + LOAD_TASK_NUMBER).forEach(function (task) {
      return renderTask(task);
    });
    btnLoadMore.className = "".concat(tasksContainer.childElementCount === _data__WEBPACK_IMPORTED_MODULE_8__["tasks"].length ? 'visually-hidden' : 'load-more');
  }
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randBoolean, arrayRandomLength, createElement, render, unrendear, Position, getRandomElemArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randBoolean", function() { return randBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRandomLength", function() { return arrayRandomLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unrendear", function() { return unrendear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElemArray", function() { return getRandomElemArray; });
var randBoolean = function randBoolean() {
  return Boolean(Math.round(Math.random()));
};

var arrayRandomLength = function arrayRandomLength(arr) {
  var newArr = arr.slice();

  for (var i = 0; i < newArr.length; i++) {
    var num = Math.floor(Math.random() * (i + 1));
    var _ref = [newArr[i], newArr[num]];
    newArr[num] = _ref[0];
    newArr[i] = _ref[1];
  }

  return newArr.slice(0, Math.floor(Math.random() * arr.length - 1));
};

var getRandomElemArray = function getRandomElemArray(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var Position = {
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend"
};

var createElement = function createElement(template) {
  var element = document.createElement("div");
  element.innerHTML = template;
  return element;
};

var render = function render(container, element, place) {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;

    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

var unrendear = function unrendear(element) {
  if (element) {
    element.remove();
  }
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map