import Menu from "../components/menu";
import Search from "../components/search";
import Filter from "../components/filter";
import Statistic from "../components/statistic";
import {Position, render} from "../utils";
import BoardController from "./board";
import {filters, tasks} from "../data";

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

    this.boardController = new BoardController(this.mainContainer, tasks);

    this.boardController.init();

    this.siteMenu.getElement().addEventListener(`change`, (evt) => this._componentSwitcher(evt));
  }


  _componentSwitcher(evt){
    if (evt.target.tagName !== `INPUT`) {
      return;
    }
    switch (evt.target.id) {
      case ControlId.taskId:
        this.statistic.getElement().classList.add(`visually-hidden`);
        this.boardController.show();
        break;
      case ControlId.statisticId:
        this.boardController.hide();
        this.statistic.getElement().classList.remove(`visually-hidden`);
        break;
    }
  }
}

export default AppController;
