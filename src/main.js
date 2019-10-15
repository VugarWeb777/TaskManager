import AppController from "./controllers/app";

const mainContainer = document.body.querySelector(`.main`);
const menuContainer = mainContainer.querySelector(`.main__control`);

const appController = new AppController(menuContainer,mainContainer);
appController.init();
