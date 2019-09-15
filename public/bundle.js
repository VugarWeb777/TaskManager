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

   getTemplate (){
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
  }

  getTemplate (){
    return `
    <article class="card card--edit card--${this.color} ${Object.values(this.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--${this.isArchive ? `` : `disabled`}">
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
                <input
                type="radio"
                id="color-${this.color}-4"
                class="card__color-input card__color-input--${this.color} visually-hidden"
                name="color"
                value="${this.color}"
                checked
                />
                <label
                  for="color-black-4"
                  class="card__color card__color--${this.color}"
                  >${this.color}</label
                >
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
  constructor({description,dueDate,repeatingDays,tags,color,isFavorite,isArchive}) {
    super();
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.repeatingDays = repeatingDays;
    this.tags = [...tags];
    this.color = color;
    this.isFavorite = isFavorite;
    this.isArchive = isArchive;
  }

  getTemplate (){
    return`<article class="card card--${this.color} ${Object.values(this.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
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
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/task */ "./src/components/task.js");
/* harmony import */ var _components_task_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task-edit */ "./src/components/task-edit.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search */ "./src/components/search.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/filter */ "./src/components/filter.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _components_load_more_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/load-more-button */ "./src/components/load-more-button.js");
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sort */ "./src/components/sort.js");













class BoardController {

  constructor(container, tasks) {
    this.container = container;
    this.tasks = tasks;
    this.board = new _components_board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.taskList = new _components_task_list__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.menu = new _components_menu__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.search = new _components_search__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.filter = new _components_filter__WEBPACK_IMPORTED_MODULE_6__["default"](_data__WEBPACK_IMPORTED_MODULE_8__["filters"], this.tasks);
    this.sort = new _components_sort__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this.loadMoreButton = new _components_load_more_button__WEBPACK_IMPORTED_MODULE_9__["default"]();

  }

  _renderTask(task) {
    const taskComponent = new _components_task__WEBPACK_IMPORTED_MODULE_2__["default"](task);
    const taskEditComponent = new _components_task_edit__WEBPACK_IMPORTED_MODULE_3__["default"](task);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this.taskList.getElement().replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    taskComponent.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
      this.taskList.getElement().replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    taskEditComponent.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    taskEditComponent.getElement()
      .querySelector(`.card__save`)
      .addEventListener(`click`, () => {
        this.taskList.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    taskEditComponent.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.taskList.getElement(), taskComponent.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);
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

  init() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.container.querySelector(`.main__control`), this.menu.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.container, this.search.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.container, this.filter.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.container, this.board.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);

    if (this.tasks.length) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.board.getElement(), this.taskList.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.board.getElement(), this.sort.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].AFTERBEGIN);
      this.sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));

      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["render"])(this.board.getElement(), this.loadMoreButton.getElement(), _utils__WEBPACK_IMPORTED_MODULE_7__["Position"].BEFOREEND);

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
}


/* harmony default export */ __webpack_exports__["default"] = (BoardController);


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