import Board from "../components/board";
import TaskList from "../components/task-list";
import Search from "../components/search";
import Filter from "../components/filter";
import {Position, render, unrendear} from "../utils";
import {filters} from "../data";
import LoadMoreButton from "../components/load-more-button";
import Sort from "../components/sort";
import TaskController from "./task";

const TASK_IN_ROW = 8;


class BoardController {

  constructor(container, tasks) {
    this.container = container;
    this.tasks = tasks;
    this.board = new Board();
    this.taskList = new TaskList();
    this.search = new Search();
    this.filter = new Filter(filters, this.tasks);
    this.sort = new Sort();
    this.loadMoreButton = new LoadMoreButton();
    this.showedTasks = TASK_IN_ROW;
    this.creatingTask = null;

    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  init() {
    render(this.container, this.board.getElement(), Position.BEFOREEND);

   this._renderBoard();
  }

  hide(){
    this.board.getElement().classList.add(`visually-hidden`);
  }

  show(){
    this.board.getElement().classList.remove(`visually-hidden`);
  }

  createTask(){

    if (this.creatingTask){
      return;
    }

    const defaultTask = {
      description: ``,
      dueDate: new Date(),
      tags: new Set(),
      color: [],
      repeatingDays: {},
      isFavorite: false,
      isArchive: false,
    };

    this.creatingTask = new TaskController(this.taskList,defaultTask,`ADDING`,this._onDataChange, this._onChangeView);
  }

  _renderBoard(){
    unrendear(this.taskList.getElement());
    this.taskList.removeElement();

    render(this.board.getElement(), this.taskList.getElement(),Position.BEFOREEND);

    unrendear(this.loadMoreButton);
    this.loadMoreButton.removeElement();

    if (this.tasks.length) {
      render(this.board.getElement(), this.taskList.getElement(), Position.BEFOREEND);
      render(this.board.getElement(), this.sort.getElement(), Position.AFTERBEGIN);
      render(this.board.getElement(), this.loadMoreButton.getElement(), Position.BEFOREEND);

      this.tasks.slice(0 , this.showedTasks).forEach((task)=> this._renderTask(task));
      this.loadMoreButton.getElement().addEventListener(`click`, ()=> this._onLoadMore());
      this.sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    }

    if (this.showedTasks < this.tasks.length){
      render(this.board.getElement(),this.loadMoreButton.getElement(),Position.BEFOREEND);
    }
  }

  _renderTask(task) {
    const taskController = new TaskController(this.taskList, task,`DEFAULT`,this._onDataChange, this._onChangeView);
    this._subscriptions.push(taskController.setDefaultView.bind(taskController));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _onDataChange(newData, oldData) {
    const index = this.tasks.findIndex((task)=> task === oldData);

    if (newData === null){
      this.tasks = [...this.tasks.slice(0,index), ...this.tasks.slice(index + 1)];
      this.showedTasks = Math.min(this.showedTasks, this.tasks.length);
    } else if (oldData === null) {
      this.creatingTask = null;
      this.tasks = [newData, ...this.tasks];
    }
    else {
      this.tasks[index] = newData;
    }

    this._renderBoard();
  }

  _onLoadMore(){
    this.tasks.slice(this.showedTasks, this.showedTasks + TASK_IN_ROW).forEach((task)=> this._renderTask(task));
    this.showedTasks += TASK_IN_ROW;

    if (this.showedTasks>= this.tasks.length){
      unrendear(this.loadMoreButton.getElement());
      this.loadMoreButton.removeElement();
    }
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
