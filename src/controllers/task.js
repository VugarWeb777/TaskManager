import Task from "../components/task";
import TaskEdit from "../components/task-edit";
import {Position, render} from "../utils";
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css'
import 'flatpickr/dist/themes/light.css'

class TaskController{
  constructor(container, data,mode, onDataChange, onChangeView) {
    this.container = container;
    this.data = data;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this.taskView = new Task(data);
    this.taskEdit = new TaskEdit(data);
    this.create(mode);
  }

  create(mode) {

    let renderPosition = Position.BEFOREEND;
    let currentView = this.taskView;

    if (mode === `ADDING`){
      renderPosition = Position.AFTERBEGIN;
      currentView = this.taskEdit;
    }

    flatpickr(this.taskEdit.getElement().querySelector(`.card__date`), {
      altInput: true,
      allowInput: true,
      defaultDate: this.data.dueDate,
    });


    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        if (mode === `DEFAULT`){
          if (this.container.contains(this.taskEdit.getElement())){
            this.container.replaceChild(this.taskView.getElement(), this.taskEdit.getElement());
          }
          else if (mode === `ADDING`){
            this.container.removeChild(currentView.getElement())
          }
        }
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    this.taskView.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, () => {
      this._onChangeView();
      this.container.replaceChild(this.taskEdit.getElement(), this.taskView.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    this.taskEdit.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    this.taskEdit.getElement()
      .querySelector(`.card__save`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(
          this.taskEdit.getElement().querySelector(`.card__form`),
        );

        const entry = {
          id: formData.get(`id`),
          description: formData.get(`text`),
          color: formData.get(`color`),
          tags: new Set(formData.getAll(`hashtag`)),
          dueDate: new Date(formData.get(`date`)),
          repeatingDays: formData.getAll(`repeat`).reduce(
            (acc, it) => {
              acc[it] = true;
              return acc;
            },
            {
              mo: false,
              tu: false,
              we: false,
              th: false,
              fr: false,
              sa: false,
              su: false,
            },
          ),
        };


        this._onDataChange(entry,mode === `DEFAULT` ? this.data : null);

        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    this.taskEdit.getElement().querySelector(`.card__delete`)
      .addEventListener(`click`, ()=> {

        this._onDataChange(null, this.data);
      });


    this.taskEdit
      .getElement()
      .querySelector(`.card__btn--favorites`)
      .addEventListener(`click`, () => {

        this.taskEdit.getElement().querySelector(`.card__btn--favorites`).classList.toggle(`card__btn--disabled`);

      });

    this.taskEdit
      .getElement()
      .querySelector(`.card__btn--archive`)
      .addEventListener(`click`, () => {

        this.taskEdit.getElement().querySelector(`.card__btn--archive`).classList.toggle(`card__btn--disabled`);

      });

    this.taskEdit.getElement()
      .querySelector(`.card__date-deadline-toggle`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const fieldsetElement = this.taskEdit.getElement().querySelector(`.card__date-deadline`);
      if (fieldsetElement.hasAttribute(`disabled`)) {
        fieldsetElement.removeAttribute(`disabled`);
        this.taskEdit.getElement().querySelector(`.card__date-status`).textContent = `yes`;
      } else {
        fieldsetElement.setAttribute(`disabled`, `true`);
        this.taskEdit.getElement().querySelector(`.card__date-status`).textContent = `no`;

      }
    });

    this.taskEdit.getElement()
      .querySelector(`.card__repeat-toggle`).addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const fieldsetElement = this.taskEdit.getElement().querySelector(`.card__repeat-days`);
      if (fieldsetElement.hasAttribute(`disabled`)) {
        fieldsetElement.removeAttribute(`disabled`);
        this.taskEdit.getElement().querySelector(`.card__repeat-status`).textContent = `yes`;
      } else {
        fieldsetElement.setAttribute(`disabled`, `true`);
        this.taskEdit.getElement().querySelector(`.card__repeat-status`).textContent = `no`;
        this.taskEdit.getElement().querySelectorAll(`.card__repeat-day-input`).forEach((checkItem) => {
          checkItem.checked = false;
        });
      }
    });

    this.taskEdit.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

    render(this.container, currentView.getElement(), renderPosition);
  }


  setDefaultView() {
    if (this.container.contains(this.taskEdit.getElement())) {
      this.container.replaceChild(this.taskView.getElement(), this.taskEdit.getElement());
    }
  }
}

export default TaskController;
