import BoardController from "./controllers/board";
import {tasks} from "./data";

const  mainContainer = document.body.querySelector(`.main`);
const boardController = new BoardController(mainContainer,tasks);
boardController.init();
