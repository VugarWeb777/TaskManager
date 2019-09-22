import Board from "../components/board";
import TaskList from "../components/task-list";
import Menu from "../components/menu";
import Search from "../components/search";
import Filter from "../components/filter";
import {Position, render} from "../utils";
import {filters} from "../data";
import LoadMoreButton from "../components/load-more-button";
import Sort from "../components/sort";
import TaskController from "./task";


class BoardController {

  constructor(container, tasks) {
    this.container = container;
    this.tasks = tasks;
    this.board = new Board();
    this.taskList = new TaskList();
    this.menu = new Menu();
    this.search = new Search();
    this.filter = new Filter(filters, this.tasks);
    this.sort = new Sort();
    this.loadMoreButton = new LoadMoreButton();
    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    render(this.container.querySelector(`.main__control`), this.menu.getElement(), Position.BEFOREEND);
    render(this.container, this.search.getElement(), Position.BEFOREEND);
    render(this.container, this.filter.getElement(), Position.BEFOREEND);
    render(this.container, this.board.getElement(), Position.BEFOREEND);

    if (this.tasks.length) {
      render(this.board.getElement(), this.taskList.getElement(), Position.BEFOREEND);
      render(this.board.getElement(), this.sort.getElement(), Position.AFTERBEGIN);
      this.sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));

      render(this.board.getElement(), this.loadMoreButton.getElement(), Position.BEFOREEND);

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

    render(this.board.getElement(), this.taskList.getElement(), Position.BEFOREEND);
    render(this.board.getElement(), this.loadMoreButton.getElement(), Position.BEFOREEND);

    const LOAD_TASK_NUMBER = 8;
    this.tasks.slice(0, LOAD_TASK_NUMBER).forEach(task => this._renderTask(task));
  }

  _renderTask(task) {
    const taskController = new TaskController(this.taskList, task, this._onDataChange, this._onChangeView);
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


export default BoardController;
