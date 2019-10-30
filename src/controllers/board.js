import Board from "../components/board";
import TaskList from "../components/task-list";
import Filter from "../components/filter";
import {Position, render, unrendear} from "../utils";
import {filters} from "../data";
import LoadMoreButton from "../components/load-more-button";
import Sort from "../components/sort";
import TaskListController from "./task-list";

const TASK_IN_ROW = 8;


class BoardController {

  constructor(container,onDataChange) {
    this.container = container;
    this.tasks = [];
    this.board = new Board();
    this.taskList = new TaskList();
    this.filter = new Filter(filters, this.tasks);
    this.sort = new Sort();
    this.loadMoreButton = new LoadMoreButton();
    this.showedTasks = TASK_IN_ROW;
    this.onDataChangeMain = onDataChange;

    this._taskListController = new TaskListController(this.taskList.getElement(),this._onDataChange.bind(this));
    this.init();
  }


  init() {
    render(this.container, this.board.getElement(), Position.BEFOREEND);

    this._renderBoard();
  }

  hide(){
    this.board.getElement().classList.add(`visually-hidden`);
  }

  show(tasks){
    if (tasks !== this.tasks){
      this._setTasks(tasks)
    }
    this.board.getElement().classList.remove(`visually-hidden`);
  }

  createTask(){
    this._taskListController.createTask();
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

      this._taskListController.setTasks(this.tasks.slice(0,this.showedTasks));
      this.loadMoreButton.getElement().addEventListener(`click`, ()=> this._onLoadMore());
      this.sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    }

    if (this.showedTasks < this.tasks.length){
      render(this.board.getElement(),this.loadMoreButton.getElement(),Position.BEFOREEND);
    }
  }

  _setTasks(tasks){
    this.tasks = tasks;
    this.showedTasks = TASK_IN_ROW;

    this._renderBoard();
  }

  _onDataChange(tasks){
    this.tasks = tasks;
    this.onDataChangeMain(this.tasks);
    this._renderBoard();
  }

  _onLoadMore(){
   this._taskListController.addTasks(this.tasks.slice(this.showedTasks,this.showedTasks + TASK_IN_ROW));
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
        this._taskListController.setTasks(sortedByDateUpTasks);
        break;
      case `date-down`:
        const sortedByDateDownTasks = this.tasks.slice().sort((a, b) => b.dueDate - a.dueDate);
        this._taskListController.setTasks(sortedByDateDownTasks);
        break;
      case `default`:
        this._taskListController.setTasks(this.tasks);
        break;
    }
  }
}


export default BoardController;
