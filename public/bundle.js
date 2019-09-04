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
const boardFilterTemplate = ()=> {
  return `<div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>`;
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
const boardTemplate = () => {
  return `<section class="board container">
      <div class="board__tasks"></div>
    </section>`;
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
const getFilter = ({title, count}) => {
  return `
      ${`<input type="radio" id="filter__${title}" 
      class="filter__input visually-hidden" 
      name="filter" 
      checked="">
      <label for="filter__all" class="filter__label">${title}
      <span class="filter__all-count">${count}</span>
      </label>`}
 `;
};

const filterTemplate = (filters) => {
  return `
    <section class="main__filter filter container"> 
      ${filters.map((filter) => getFilter(filter)).join(``)}
    </section>
  `;
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
const loadMoreTemplate = ()=> {
  return `<button class="load-more" type="button">load more</button>`;
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
const menuTemplate = ()=> {
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
const searchTemplate = function () {
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
};


/***/ }),

/***/ "./src/components/task-edit.js":
/*!*************************************!*\
  !*** ./src/components/task-edit.js ***!
  \*************************************/
/*! exports provided: editTaskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTaskTemplate", function() { return editTaskTemplate; });
const editTaskTemplate = ({description, dueDate, repeatingDays, tags, color, isFavorite, isArchive}) => {
  return `
    <article class="card card--edit card--${color} ${Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? `card--repeat` : ``}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--${isArchive ? `` : `disabled`}">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--${isFavorite ? `` : `disabled`}"
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
              >${description}</textarea>
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
                      value="${new Date(dueDate).toDateString()}"
                    />
                  </label>
                </fieldset>
    
                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? `yes` : `no`}</span>
                </button>
    
                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${Object.keys(repeatingDays).map((day)=> `
                    <input
                      class="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-${day}-4"
                      name="repeat"
                      value="${day}"
                      ${(repeatingDays[day]) ? `checked` : ``}
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
                ${Array.from(tags).map((tag)=> `
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
                id="color-${color}-4"
                class="card__color-input card__color-input--${color} visually-hidden"
                name="color"
                value="${color}"
                checked
                />
                <label
                  for="color-black-4"
                  class="card__color card__color--${color}"
                  >${color}</label
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


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/*! exports provided: taskTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskTemplate", function() { return taskTemplate; });
const taskTemplate = ({description, dueDate, repeatingDays, tags, color, isFavorite, isArchive})=> {
  return `
          <article class="card card--${color} ${Object.keys(repeatingDays).some((day) => repeatingDays[day]) ? `card--repeat` : ``}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                 <button type="button" class="card__btn  card__btn--${isArchive ? `` : `disabled`}">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--${isFavorite ? `` : `disabled`}"
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
                  <p class="card__text">${description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${new Date(dueDate).toDateString()}</span>
                          <span class="card__time">${new Date(dueDate).getHours()} : ${new Date(dueDate).getMinutes()}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                      ${Array.from(tags).map((tag)=> `
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
          </article>
`;
};


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
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`][Math.floor(Math.random() * 3)],
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

const tasks = new Array(3).fill(``).map(getTasks);
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
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search */ "./src/components/search.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter */ "./src/components/filter.js");
/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/task */ "./src/components/task.js");
/* harmony import */ var _components_task_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task-edit */ "./src/components/task-edit.js");
/* harmony import */ var _components_load_more_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/load-more-button */ "./src/components/load-more-button.js");
/* harmony import */ var _components_board_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/board-template */ "./src/components/board-template.js");
/* harmony import */ var _components_board_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/board-filter */ "./src/components/board-filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* eslint-disable no-console */















const renderTemplate = (container, template, type = `beforeend`) => {
  container.insertAdjacentHTML(type, template);
};

const mainContainer = document.querySelector(`.main`);

renderTemplate(mainContainer.querySelector(`.main__control`), Object(_components_menu__WEBPACK_IMPORTED_MODULE_0__["menuTemplate"])());
renderTemplate(mainContainer, Object(_components_search__WEBPACK_IMPORTED_MODULE_1__["searchTemplate"])());
renderTemplate(mainContainer, Object(_components_filter__WEBPACK_IMPORTED_MODULE_2__["filterTemplate"])(_data__WEBPACK_IMPORTED_MODULE_8__["filters"]));
renderTemplate(mainContainer, Object(_components_board_template__WEBPACK_IMPORTED_MODULE_6__["boardTemplate"])());

const boardElement = mainContainer.querySelector(`.board`);
const taskListElement = mainContainer.querySelector(`.board__tasks`);

renderTemplate(boardElement, Object(_components_board_filter__WEBPACK_IMPORTED_MODULE_7__["boardFilterTemplate"])(), `afterBegin`);


renderTemplate(boardElement, Object(_components_load_more_button__WEBPACK_IMPORTED_MODULE_5__["loadMoreTemplate"])());


_data__WEBPACK_IMPORTED_MODULE_8__["tasks"].forEach((task) => {
  taskListElement.insertAdjacentHTML(`beforeend`, Object(_components_task__WEBPACK_IMPORTED_MODULE_3__["taskTemplate"])(task));
});
renderTemplate(taskListElement, Object(_components_task_edit__WEBPACK_IMPORTED_MODULE_4__["editTaskTemplate"])(_data__WEBPACK_IMPORTED_MODULE_8__["tasks"][0]), `afterBegin`);

_data__WEBPACK_IMPORTED_MODULE_8__["tasks"].forEach((value) => console.log(value.dueDate));


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: randBoolean, arrayRandomLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randBoolean", function() { return randBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRandomLength", function() { return arrayRandomLength; });
const randBoolean = ()=> Boolean(Math.round(Math.random()));

const arrayRandomLength = (arr) => {
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    [newArr[num], newArr[i]] = [newArr[i], newArr[num]];
  }
  return newArr.slice(0, Math.floor(Math.random() * arr.length - 1));
};





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map