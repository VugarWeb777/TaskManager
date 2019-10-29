import Board from "../components/board";
import TaskList from "../components/task-list";
import Search from "../components/search";
import Filter from "../components/filter";
import {Position, render, unrendear} from "../utils";
import {filters} from "../data";
import LoadMoreButton from "../components/load-more-button";
import Sort from "../components/sort";
import TaskListController from "./task-list";

const TASK_IN_ROW = 8;


class BoardController {

  constructor(container) {
    this.container = container;
    this.tasks = [];
    this.board = new Board();
    this.taskList = new TaskList();
    this.search = new Search();
    this.filter = new Filter(filters, this.tasks);
    this.sort = new Sort();
    this.loadMoreButton = new LoadMoreButton();
    this.showedTasks = TASK_IN_ROW;

    this._taskListController = new TaskListController(this.taskList.getElement(),this._onDataChange.bind(this));
    this.init();
  }

  init() {
    render(this.container, this.board.getElement(), Position.BEFOREEND);
    render(this.board.getElement(), this.sort.getElement(),Position.BEFOREEND);
    render(this.board.getElement(), this.taskList.getElement(),Position.BEFOREEND);

    this.sort.getElement().addEventListener("click", (evt)=> this._onSortLinkClick(evt));
  }

  hide(){
    this.board.getElement().classList.add(`visually-hidden`);
  }

  show(tasks){
    this._setTasks(tasks);
    this.board.getElement().classList.remove(`visually-hidden`);
  }

  createTask(){
    this._taskListController.createTask();
  }



  _renderBoard(){
    render(this.board.getElement(), this.taskList.getElement(),Position.BEFOREEND);

    unrendear(this.loadMoreButton.getElement());
    this.loadMoreButton.removeElement();

    if (this.showedTasks < this.tasks.length){
      render(this.board.getElement(), this.loadMoreButton.getElement(),Position.BEFOREEND);
    }
    this._taskListController.setTasks(this.tasks.slice(0,this.showedTasks));
    this.loadMoreButton.getElement().addEventListener("click", ()=> {
      this._onLoadMore();
    })
  }

  _setTasks(tasks){
    this.tasks = tasks;
    this.showedTasks = TASK_IN_ROW;

    this._renderBoard();
  }

  _onDataChange(tasks){
    this.tasks = tasks;
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

    // if (evt.target.tagName !== `A`) {
    //   return;
    // }
    // this.taskList.getElement().innerHTML = ``;
    //
    // switch (evt.target.dataset.sortType) {
    //   case `date-up`:
    //     const sortedByDateUpTasks = this.tasks.slice().sort((a, b) => a.dueDate - b.dueDate);
    //     sortedByDateUpTasks.forEach((task) => this._renderTask(task));
    //     break;
    //   case `date-down`:
    //     const sortedByDateDownTasks = this.tasks.slice().sort((a, b) => b.dueDate - a.dueDate);
    //     sortedByDateDownTasks.forEach((task) => this._renderTask(task));
    //     break;
    //   case `default`:
    //     this.tasks.forEach((task) => this._renderTask(task));
    //     break;
    // }
  }
}


export default BoardController;
