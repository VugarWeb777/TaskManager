import {menuTemplate} from "./components/menu";
import {searchTemplate} from "./components/search";

import {filterTemplate} from "./components/filter";
import {taskTemplate} from "./components/task";
import {editTask} from "./components/task-edit";
import {loadMoreTemplate} from "./components/load-more-button";

import {boardTemplate} from "./components/board-template";
import {boardFilterTemplate} from "./components/board-filter";


const renderTemplate = (container, template, type = `beforeend`) => {
  container.insertAdjacentHTML(type, template);
};

const mainContainer = document.querySelector(`.main`);

renderTemplate(mainContainer.querySelector(`.main__control`), menuTemplate());
renderTemplate(mainContainer, searchTemplate());
renderTemplate(mainContainer, filterTemplate());
renderTemplate(mainContainer, boardTemplate());

const boardElement = mainContainer.querySelector(`.board`);
const taskListElement = mainContainer.querySelector(`.board__tasks`);

renderTemplate(boardElement, boardFilterTemplate(), `afterBegin`);
renderTemplate(taskListElement, editTask(), `afterBegin`);

new Array(3).fill(``).forEach(()=> renderTemplate(taskListElement, taskTemplate()));

renderTemplate(boardElement, loadMoreTemplate());


