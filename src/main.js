/* eslint-disable no-console */
import {menuTemplate} from "./components/menu";
import {searchTemplate} from "./components/search";
import {filterTemplate} from "./components/filter";


import Task from "./components/task";
import {editTaskTemplate} from "./components/task-edit";

import {loadMoreTemplate} from "./components/load-more-button";

import {boardTemplate} from "./components/board-template";
import {boardFilterTemplate} from "./components/board-filter";

import {tasks, filters} from "./data";

const renderTemplate = (container, template, type = `beforeend`) => {
  container.insertAdjacentHTML(type, template);
};

const mainContainer = document.querySelector(`.main`);

renderTemplate(mainContainer.querySelector(`.main__control`), menuTemplate());
renderTemplate(mainContainer, searchTemplate());
renderTemplate(mainContainer, filterTemplate(filters));
renderTemplate(mainContainer, boardTemplate());

const boardElement = mainContainer.querySelector(`.board`);
const taskListElement = mainContainer.querySelector(`.board__tasks`);

renderTemplate(boardElement, boardFilterTemplate(), `afterBegin`);


renderTemplate(boardElement, loadMoreTemplate());


const task = new Task();
console.log(task);
