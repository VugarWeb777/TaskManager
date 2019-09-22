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

/***/ "./src/components/abstract-component.js":
/*!**********************************************!*\
  !*** ./src/components/abstract-component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class AbstractComponent {
  constructor (){
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      this.element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this._element = null;
  }

   getTemplate (){
    throw Error (`Abstract method is not implemented`);
  }

  updateTemplate(){
    throw Error (`Abstract method is not implemented`);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (AbstractComponent);


/***/ }),

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Board extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(){
    super();
  }

  getTemplate() {
    return `<section class="board container"></section>`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Filter extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]{

  constructor(filters, tasks) {
    super();
    this.filters = filters;
    this.tasks = tasks;
  }
  getTemplate() {
    return `<section class="main__filter filter container">
      ${this.filters.map((filter)=> `
      <input
        type="radio"
        id="filter__${filter.title}"
        class="filter__input visually-hidden"
        name="filter"
        checked
      />
      <label for="filter__${filter.title}" class="filter__label">
      ${filter.title} <span class="filter__all-count">${filter.count}</span></label>`).join(``)}
    </section>`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Filter);


/***/ }),

/***/ "./src/components/load-more-button.js":
/*!********************************************!*\
  !*** ./src/components/load-more-button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class LoadMoreButton extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
  }

  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LoadMoreButton);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Menu extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
  }

  getTemplate() {
    return `<section class="control__btn-wrap">
          <input
            type="radio"
            name="control"
            id="control__new-task"
            class="control__input visually-hidden"
          />
          <label for="control__new-task" class="control__label control__label--new-task"
            >+ ADD NEW TASK</label
          >
          <input
            type="radio"
            name="control"
            id="control__task"
            class="control__input visually-hidden"
            checked
          />
          <label for="control__task" class="control__label">TASKS</label>
          <input
            type="radio"
            name="control"
            id="control__statistic"
            class="control__input visually-hidden"
          />
          <label for="control__statistic" class="control__label"
            >STATISTICS</label
          >
        </section>`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);


/***/ }),

/***/ "./src/components/search.js":
/*!**********************************!*\
  !*** ./src/components/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Search extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
  }

  getTemplate() {
    return `<section class="main__search search container">
        <input
          type="text"
          id="search__input"
          class="search__input"
          placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
          value="#work"
        />
        <label class="visually-hidden" for="search__input">Поиск</label>
      </section>`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Search);


/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Sort extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(){
    super();
  }

  getTemplate() {
    return `<div class="board__filter-list">
          <a href="#" data-sort-type="default" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" data-sort-type="date-up" class="board__filter">SORT BY DATE up</a>
          <a href="#" data-sort-type="date-down" class="board__filter">SORT BY DATE down</a>
        </div>`;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sort);


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



class TaskEdit extends _task__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(data) {
    super(data);
    this._subscribeOnEvents();
  }


  getTemplate() {
    return `
    <article id="task-edit_${this.id}"  class="card card--edit card--${this.color} ${Object.values(this.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
      <form class="card__form" method="get">
      <input type="hidden" name="id" value="${this.id}">
        <div class="card__inner">
          <div class="card__control">
        <button type="button" class="card__btn card__btn--archive ${this.isArchive ? ` card__btn--disabled` : ``}">
            archive
        </button>
        <button type="button" class="card__btn card__btn--favorites ${this.isFavorite ? ` card__btn--disabled` : ``}">
            favorites
        </button>
        </div>
    
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
    
          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${this.description}</textarea>
            </label>
          </div>
    
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">yes</span>
                </button>
    
                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder=""
                      name="date"
                      value="${new Date(this.dueDate).toDateString()}"
                    />
                  </label>
                </fieldset>
    
                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${Object.keys(this.repeatingDays).some((day) => this.repeatingDays[day]) ? `yes` : `no`}</span>
                </button>
    
                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${Object.keys(this.repeatingDays).map((day) => `
                    <input
                      class="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-${day}-4"
                      name="repeat"
                      value="${day}"
                      ${(this.repeatingDays[day]) ? `checked` : ``}
                    />
                    <label class="card__repeat-day" for="repeat-${day}-4"
                      >${day}</label
                    >                  
                    `).join(``)}
                  </div>
                </fieldset>
              </div>
    
              <div class="card__hashtag">
                <div class="card__hashtag-list">
                ${Array.from(this.tags).map((tag) => `
                <span class="card__hashtag-inner">
                  <input
                    type="hidden"
                    name="hashtag"
                    value="repeat"
                    class="card__hashtag-hidden-input"
                  />
                  <p class="card__hashtag-name">
                    #${tag}
                  </p>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>
               `).join(``)}
                </div>
    
                <label>
                  <input
                    type="text"
                    class="card__hashtag-input"
                    name="hashtag-input"
                    placeholder="Type new hashtag here"
                  />
                </label>
              </div>
            </div>
    
            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                <input type="radio" id="color-black-1" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" checked="">
                <label for="color-black-1" class="card__color card__color--black">black</label>
                <input type="radio" id="color-yellow-1" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow">
                <label for="color-yellow-1" class="card__color card__color--yellow">yellow</label>
                <input type="radio" id="color-blue-1" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
                <label for="color-blue-1" class="card__color card__color--blue">blue</label>
                <input type="radio" id="color-green-1" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
                <label for="color-green-1" class="card__color card__color--green">green</label>
                <input type="radio" id="color-pink-1" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
                <label for="color-pink-1" class="card__color card__color--pink">pink</label>
            </div>
            </div>
          </div>
    
          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>    
  `;
  };

  updateTemplate(newData) {
    return `<article id="task_${newData.id}" class="card card--${newData.color} ${Object.values(newData.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                 <button type="button" class="card__btn  card__btn--${newData.isArchive ? `` : `disabled`}">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--${newData.isFavorite ? `` : `disabled`}"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${newData.description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${new Date(newData.dueDate).toDateString()}</span>
                          <span class="card__time">${new Date(newData.dueDate).getHours()} : ${new Date(newData.dueDate).getMinutes()}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                      ${Array.from(newData.tags).map((tag) => `
                       <span class="card__hashtag-inner">
                          <span class="card__hashtag-name">
                            ${tag}
                          </span>
                        </span>
                      `).join(``)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`;
  };

  _subscribeOnEvents() {

    this.getElement().querySelector(`.card__color-input--${this.color}`).checked = true;

    this.getElement()
      .querySelector(`.card__hashtag-input`).addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === `13`) {
        evt.preventDefault();
        this.getElement().querySelector(`.card__hashtag-list`).insertAdjacentHTML(`beforeend`, `<span class="card__hashtag-inner">
        <input
          type="hidden"
          name="hashtag"
          value="${evt.target.value}"
          class="card__hashtag-hidden-input"
        />
        <p class="card__hashtag-name">
          #${evt.target.value}
        </p>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`);
        evt.target.value = ``;
      }
    });

    document.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`card__hashtag-delete`)) {
        evt.preventDefault();
        evt.target.closest(`.card__hashtag-inner`).remove();
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TaskEdit);


/***/ }),

/***/ "./src/components/task-list.js":
/*!*************************************!*\
  !*** ./src/components/task-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class TaskList extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(){
    super();
  }

  getTemplate() {
    return `<div class="board__tasks"></div>`
  }
}
/* harmony default export */ __webpack_exports__["default"] = (TaskList);


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component */ "./src/components/abstract-component.js");


class Task extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor({description,dueDate,repeatingDays,tags,color,isFavorite,isArchive,id}) {
    super();
    this.id = id;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.repeatingDays = repeatingDays;
    this.tags = [...tags];
    this.color = color;
    this.isFavorite = isFavorite;
    this.isArchive = isArchive;
  }

  getTemplate (){
    return`<article id="task_${this.id}" class="card card--${this.color} ${Object.values(this.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                 <button type="button" class="card__btn  card__btn--${this.isArchive ? `` : `disabled`}">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--${this.isFavorite ? `` : `disabled`}"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${this.description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${new Date(this.dueDate).toDateString()}</span>
                          <span class="card__time">${new Date(this.dueDate).getHours()} : ${new Date(this.dueDate).getMinutes()}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                      ${Array.from(this.tags).map((tag) => `
                       <span class="card__hashtag-inner">
                          <span class="card__hashtag-name">
                            ${tag}
                          </span>
                        </span>
                      `).join(``)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`;
  };
}


/* harmony default export */ __webpack_exports__["default"] = (Task);


/***/ }),

/***/ "./src/controllers/board.js":
/*!**********************************!*\
  !*** ./src/controllers/board.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/board */ "./src/components/board.js");
/* harmony import */ var _components_task_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task-list */ "./src/components/task-list.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search */ "./src/components/search.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/filter */ "./src/components/filter.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _components_load_more_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/load-more-button */ "./src/components/load-more-button.js");
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sort */ "./src/components/sort.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task */ "./src/controllers/task.js");












class BoardController {

  constructor(container, tasks) {
    this.container = container;
    this.tasks = tasks;
    this.board = new _components_board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.taskList = new _components_task_list__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.menu = new _components_menu__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.search = new _components_search__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.filter = new _components_filter__WEBPACK_IMPORTED_MODULE_4__["default"](_data__WEBPACK_IMPORTED_MODULE_6__["filters"], this.tasks);
    this.sort = new _components_sort__WEBPACK_IMPORTED_MODULE_8__["default"]();
    this.loadMoreButton = new _components_load_more_button__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.container.querySelector(`.main__control`), this.menu.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.container, this.search.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.container, this.filter.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.container, this.board.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);

    if (this.tasks.length) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.board.getElement(), this.taskList.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.board.getElement(), this.sort.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].AFTERBEGIN);
      this.sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));

      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.board.getElement(), this.loadMoreButton.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);

      const LOAD_TASK_NUMBER = 8;
      this.tasks.slice(0, LOAD_TASK_NUMBER).forEach(task => this._renderTask(task));

      this.loadMoreButton.getElement().addEventListener(`click`, () => {
        const taskCount = this.taskList.getElement().childElementCount;
        if (taskCount < this.tasks.length) {
          this.tasks.slice(taskCount, taskCount + LOAD_TASK_NUMBER).forEach(task => this._renderTask(task));
          this.loadMoreButton.getElement().className = `${this.taskList.getElement().childElementCount === this.tasks.length ? 'visually-hidden' : 'load-more'}`;
        }
      });
    }
  }

  _renderBoard(){
    document.querySelector(`.board__tasks`).innerHTML = "";
    document.querySelector(`.load-more`).remove();

    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.board.getElement(), this.taskList.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["render"])(this.board.getElement(), this.loadMoreButton.getElement(), _utils__WEBPACK_IMPORTED_MODULE_5__["Position"].BEFOREEND);

    const LOAD_TASK_NUMBER = 8;
    this.tasks.slice(0, LOAD_TASK_NUMBER).forEach(task => this._renderTask(task));
  }

  _renderTask(task) {
    const taskController = new _task__WEBPACK_IMPORTED_MODULE_9__["default"](this.taskList, task, this._onDataChange, this._onChangeView);
    this._subscriptions.push(taskController.setDefaultView.bind(taskController));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _onDataChange(newData, oldData) {
    this.tasks[this.tasks.findIndex((it) => it === oldData)] = newData;
    this._renderBoard();
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }
    this.taskList.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `date-up`:
        const sortedByDateUpTasks = this.tasks.slice().sort((a, b) => a.dueDate - b.dueDate);
        sortedByDateUpTasks.forEach((task) => this._renderTask(task));
        break;
      case `date-down`:
        const sortedByDateDownTasks = this.tasks.slice().sort((a, b) => b.dueDate - a.dueDate);
        sortedByDateDownTasks.forEach((task) => this._renderTask(task));
        break;
      case `default`:
        this.tasks.forEach((task) => this._renderTask(task));
        break;
    }
  }
}


/* harmony default export */ __webpack_exports__["default"] = (BoardController);


/***/ }),

/***/ "./src/controllers/task.js":
/*!*********************************!*\
  !*** ./src/controllers/task.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/task */ "./src/components/task.js");
/* harmony import */ var _components_task_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task-edit */ "./src/components/task-edit.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




class TaskController {
  constructor(container, data, onDataChange, onChangeView) {
    this.container = container;
    this.data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this.taskView = new _components_task__WEBPACK_IMPORTED_MODULE_0__["default"](data);
    this.taskEdit = new _components_task_edit__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    this.init();
  }

  init() {
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this.container.getElement().replaceChild(this.taskView.getElement(), this.taskEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    this.taskView.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
      this._onChangeView();
      this.container.getElement().replaceChild(this.taskEdit.getElement(), this.taskView.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    this.taskEdit.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    this.taskEdit.getElement()
      .querySelector(`.card__save`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(
          this.taskEdit.getElement().querySelector(`.card__form`),
        );

        const entry = {
          id: formData.get(`id`),
          description: formData.get(`text`),
          color: formData.get(`color`),
          tags: new Set(formData.getAll(`hashtag`)),
          dueDate: new Date(formData.get(`date`)),
          repeatingDays: formData.getAll(`repeat`).reduce(
            (acc, it) => {
              acc[it] = true;
              return acc;
            },
            {
              mo: false,
              tu: false,
              we: false,
              th: false,
              fr: false,
              sa: false,
              su: false,
            },
          ),
        };

        //Update one task - when replacing, the handler is deleted and the form is not edited
        // const newTaskTemplate = this.taskEdit.updateTemplate(entry);
        // const newTaskElement = createElement(newTaskTemplate);
        // const editTaskElement = this.container.getElement().querySelector(`article#task-edit_${entry.id}`);
        // this.container.getElement().replaceChild(newTaskElement, editTaskElement);

        this._onDataChange(entry, this.data);

        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    this.taskEdit
      .getElement()
      .querySelector(`.card__btn--favorites`)
      .addEventListener(`click`, () => {

        this.taskEdit.getElement().querySelector(`.card__btn--favorites`).classList.toggle(`card__btn--disabled`);

      });

    this.taskEdit
      .getElement()
      .querySelector(`.card__btn--archive`)
      .addEventListener(`click`, () => {

        this.taskEdit.getElement().querySelector(`.card__btn--archive`).classList.toggle(`card__btn--disabled`);

      });

    this.taskEdit.getElement()
      .querySelector(`.card__date-deadline-toggle`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const fieldsetElement = this.taskEdit.getElement().querySelector(`.card__date-deadline`);
      if (fieldsetElement.hasAttribute(`disabled`)) {
        fieldsetElement.removeAttribute(`disabled`);
        this.taskEdit.getElement().querySelector(`.card__date-status`).textContent = `yes`;
      } else {
        fieldsetElement.setAttribute(`disabled`, `true`);
        this.taskEdit.getElement().querySelector(`.card__date-status`).textContent = `no`;

      }
    });

    this.taskEdit.getElement()
      .querySelector(`.card__repeat-toggle`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const fieldsetElement = this.taskEdit.getElement().querySelector(`.card__repeat-days`);
      if (fieldsetElement.hasAttribute(`disabled`)) {
        fieldsetElement.removeAttribute(`disabled`);
        this.taskEdit.getElement().querySelector(`.card__repeat-status`).textContent = `yes`;
      } else {
        fieldsetElement.setAttribute(`disabled`, `true`);
        this.taskEdit.getElement().querySelector(`.card__repeat-status`).textContent = `no`;
        this.taskEdit.getElement().querySelectorAll(`.card__repeat-day-input`).forEach((checkItem) => {
          checkItem.checked = false;
        });
      }
    });

    this.taskEdit.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["render"])(this.container.getElement(), this.taskView.getElement(), _utils__WEBPACK_IMPORTED_MODULE_2__["Position"].BEFOREEND);
  }


  setDefaultView() {
    if (this.container.getElement().contains(this.taskEdit.getElement())) {
      this.container
        .getElement()
        .replaceChild(this.taskView.getElement(), this.taskEdit.getElement());
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TaskController);


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


const getTasks = () => ({
  id: Math.round(Math.random()* (200-1)+1),
  description: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomElemArray"])([`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`,`Изучить ES2015`, `Изучить ООП`, `JavaScript уровень 2`]),
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000 - (7 * 24 * 60 * 60 * 1000),
  repeatingDays: {
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randBoolean"])(),
    Sa: false,
    Su: false,
  },
  tags: new Set(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["arrayRandomLength"])([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `learning`,
  ]
  )),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
  isFavorite: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randBoolean"])(),
  isArchive: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randBoolean"])(),
});

const TASK_COUNT = 17;

const tasks = new Array(TASK_COUNT).fill(``).map(getTasks);
const filters = [
  {
    title: `All`,
    count: tasks.length,
  },
  {
    title: `Overdue`,
    count: tasks.filter((value) => value.dueDate < Date.now()).length,
  },
  {
    title: `Today`,
    count: tasks.filter((value) => new Date(value.dueDate).toDateString() === new Date(Date.now()).toDateString()).length,
  },
  {
    title: `Favorites`,
    count: tasks.filter((value) => value.isFavorite === true).length,
  },
  {
    title: `Repeating `,
    count: tasks.filter((value) => {
      return (Object.values(value.repeatingDays).some((day) => day));
    }).length,
  },
  {
    title: `Tags`,
    count: tasks.filter((value) => value.tags).length,
  },
  {
    title: `Archive`,
    count: tasks.filter((value) => value.isArchive === true).length,
  },
];





/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/board */ "./src/controllers/board.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");



const  mainContainer = document.body.querySelector(`.main`);
const boardController = new _controllers_board__WEBPACK_IMPORTED_MODULE_0__["default"](mainContainer,_data__WEBPACK_IMPORTED_MODULE_1__["tasks"]);
boardController.init();


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
const randBoolean = () => Boolean(Math.round(Math.random()));

const arrayRandomLength = (arr) => {
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    [newArr[num], newArr[i]] = [newArr[i], newArr[num]];
  }
  return newArr.slice(0, Math.floor(Math.random() * arr.length - 1));
};

const getRandomElemArray = (array) => array[Math.floor(Math.random() * array.length)];

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,

};

const createElement = (template) => {
  const element = document.createElement("div");
  element.innerHTML = template;
  return element.firstElementChild;
};

const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN :
      container.prepend(element);
      break;
    case Position.BEFOREEND :
      container.append(element);
      break;
  }
};

const unrendear = (element) => {
  if (element) {
    element.remove();
  }
};





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map