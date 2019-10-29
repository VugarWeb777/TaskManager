import TaskController from "./task";

class TaskListController {
  constructor(container,onDataChange){
    this.container = container;
    this.onDataChangeMain = onDataChange;

    this.creatingTask = null;
    this._subscriptions = [];
    this.tasks = [];

    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
  }

  setTasks(tasks){
    this.tasks = tasks;
    this._subscriptions = [];

    this.container.innerHTML = "";
    this.tasks.forEach((task)=> this._renderTask(task));
  }

  addTasks(tasks){
    tasks.forEach((task)=> this._renderTask(task));
    this.tasks = this.tasks.concat(tasks);
  }

  createTask(){
    if (this.creatingTask){
      return
    }

    const defaultTask = {
      description: "",
      dueDate: new Date(),
      tags: new Set(),
      color: [],
      repeatingDays: {},
      isFavorite: false,
      isArchive: false,
    };

    this.creatingTask = new TaskController(this.container,defaultTask,`ADDING`,this._onDataChange,this._onChangeView);
  }

  _renderTask(task){
    const  taskController = new TaskController(this.container,task,`DEFAULT`,this._onDataChange,this._onChangeView);
    this._subscriptions.push(taskController.setDefaultView.bind(taskController));
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
  }

  _onDataChange(newData,oldData){
    const index = this.tasks.findIndex((task)=> task === oldData);

    if (newData === null){
      this.tasks = [...this.tasks.slice(0,index), ...this.tasks.slice(index + 1)];
    } else if (oldData === null){
      this.tasks = [newData, ...this.tasks];
    } else {
      this.tasks[index] = newData;
    }

    this.setTasks(this.tasks);
    this.onDataChangeMain(this.tasks);
  }
}

export  default  TaskListController;
