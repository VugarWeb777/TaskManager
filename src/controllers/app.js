import Menu from "../components/menu";
import Search from "../components/search";
import Filter from "../components/filter";
import Statistic from "../components/statistic";
import {Position, render} from "../utils";
import BoardController from "./board";
import {filters, tasks} from "../data";
import SearchController from "./search";

const ControlId = {
  taskId: `control__task`,
  statisticId: `control__statistic`,
  newTaskId: `control__new-task`,
};


class AppController {
  constructor(menuContainer, mainContainer) {
    this.menuContainer = menuContainer;
    this.mainContainer = mainContainer;
    this.siteMenu = new Menu();
    this.search = new Search();
    this.filter = new Filter(filters, tasks);
    this.statistic = new Statistic();
  }

  init() {
    this.statistic.getElement().classList.add(`visually-hidden`);
    render(this.menuContainer, this.siteMenu.getElement(), Position.BEFOREEND);
    render(this.mainContainer, this.search.getElement(), Position.BEFOREEND);
    render(this.mainContainer, this.filter.getElement(), Position.BEFOREEND);
    render(this.mainContainer, this.statistic.getElement(), Position.BEFOREEND);
    this.siteMenu.getElement().addEventListener(`change`, (evt) => this._componentSwitcher(evt));

    this.boardController = new BoardController(this.mainContainer,this._onDataChange);
    this.boardController.show(tasks);

    this.searchController = new SearchController(this.mainContainer,this.search,this.onSearchBackButtonClick.bind(this));

    this.search.getElement().addEventListener(`click`, ()=>{
      this.statistic.getElement().classList.add(`visually-hidden`);
      this.boardController.hide();
      this.searchController.show(tasks);
    })
  }

  _onDataChange(tasksMocks){
    tasksMocks = tasks;
  }

  _componentSwitcher(evt){
    if (evt.target.tagName !== `INPUT`) {
      return;
    }

    switch (evt.target.id) {
      case ControlId.taskId:
        this.statistic.getElement().classList.add(`visually-hidden`);
        this.searchController.hide();
        this.boardController.show(tasks);
        break;
      case ControlId.statisticId:
        this.boardController.hide();
        this.searchController.hide();
        this.statistic.getElement().classList.remove(`visually-hidden`);
        break;
      case ControlId.newTaskId :
        this.boardController.createTask();
        this.boardController.show(tasks);
        this.siteMenu.getElement().querySelector(`#${ControlId.taskId}`).checked = true;
        break;
    }
  }

  onSearchBackButtonClick(){
    this.statistic.getElement().classList.add(`visually-hidden`);
    this.searchController.hide();
    this.boardController.show(tasks);
  }
}

export default AppController;
