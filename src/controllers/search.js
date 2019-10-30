import SearchResult from "../components/search-result";
import SearchResultInfo from "../components/search-result-info";
import SearchResultGroup from "../components/search-result-group";
import TaskListController from "./task-list";
import {Position, render, unrendear} from "../utils";

class SearchController {
  constructor(container, search, onBackButtonClick) {
    this.container = container;
    this.search = search;
    this.onBackButtonClick = onBackButtonClick;

    this.tasks = [];

    this.searchResult = new SearchResult();
    this.searchResultInfo = new SearchResultInfo({});
    this.searchResultGroup = new SearchResultGroup();

    this.taskListController = new TaskListController(this.searchResultGroup.getElement().querySelector(`.result__cards`), this._onDataChange.bind(this));
    this.init();
  }

  init() {
    this.hide();

    render(this.container, this.searchResult.getElement(), Position.BEFOREEND);
    render(this.searchResult.getElement(), this.searchResultGroup.getElement(), Position.BEFOREEND);
    render(this.searchResultGroup.getElement(), this.searchResultInfo.getElement(), Position.BEFOREEND);

    this.searchResult.getElement().querySelector(`.result__back`).addEventListener(`click`, () => {
      this.search.getElement().querySelector(`input`).value = ``;
      this.onBackButtonClick();
    });
    this.search.getElement().querySelector(`input`).addEventListener(`keyup`, (evt) => {
      const {value} = evt.target;
      const tasks = this.tasks.filter((task) => {
        return task.description.includes(value);
      });

      tasks.forEach(value1 => {
        if (value1.description === value){
          this.showSearchResult(value,tasks);
        }
      })

    });
  }

  hide() {
    this.searchResult.getElement().classList.add(`visually-hidden`);
  }

  show(tasks) {
    this.tasks = tasks;

    if (this.searchResult.getElement().classList.contains(`visually-hidden`)) {
      this.showSearchResult(``, this.tasks);
      this.searchResult.getElement().classList.remove(`visually-hidden`);
    }
  }

  showSearchResult(text, tasks) {
    if (this.searchResultInfo) {
      unrendear(this.searchResultInfo.getElement());
      this.searchResultInfo.removeElement();
    }
    this.searchResultInfo = new SearchResultInfo({title: text, count: tasks.length});
    render(this.searchResultGroup.getElement(), this.searchResultInfo.getElement(), Position.AFTERBEGIN);
    this.taskListController.setTasks(tasks);
  }

  _onDataChange(tasks) {
    this.tasks = tasks;
  }

}

export default SearchController;
