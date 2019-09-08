/* eslint-disable no-console */
import {menuTemplate} from "./components/menu";
import {searchTemplate} from "./components/search";
import {filterTemplate} from "./components/filter";
import Task from "./components/task";
import TaskEdit from "./components/task-edit";
import {loadMoreTemplate} from "./components/load-more-button";
import {boardTemplate} from "./components/board-template";
import {boardFilterTemplate} from "./components/board-filter";
import {filters, tasks} from "./data";
import {render, unrendear, Position} from "./utils";


const renderTemplate = (container, template, type = `beforeend`) => {
  container.insertAdjacentHTML(type, template);
};

const mainContainer = document.querySelector(`.main`);

renderTemplate(mainContainer.querySelector(`.main__control`), menuTemplate());
renderTemplate(mainContainer, searchTemplate());
renderTemplate(mainContainer, filterTemplate(filters));
renderTemplate(mainContainer, boardTemplate());


const boardElement = mainContainer.querySelector(`.board`);
const tasksContainer = mainContainer.querySelector(`.board__tasks`);

renderTemplate(boardElement, boardFilterTemplate(), `afterBegin`);
renderTemplate(boardElement, loadMoreTemplate());

const renderTask = (taskMock) => {
  const task = new Task(taskMock);
  const taskEdit = new TaskEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  task.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
    tasksContainer.replaceChild(taskEdit.getElement(), task.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  render(tasksContainer, task.getElement(), Position.BEFOREEND);
};

const LOAD_TASK_NUMBER = 8;
tasks.slice(0, LOAD_TASK_NUMBER).forEach(task => renderTask(task));


const btnLoadMore = boardElement.querySelector(`.load-more`);

btnLoadMore.addEventListener(`click`, () => {
  const taskCount = tasksContainer.childElementCount;
  if (taskCount < tasks.length) {
    tasks.slice(taskCount, taskCount + LOAD_TASK_NUMBER).forEach(task => renderTask(task));
    btnLoadMore.className = `${tasksContainer.childElementCount === tasks.length ? 'visually-hidden' : 'load-more'}`;
  }
});


