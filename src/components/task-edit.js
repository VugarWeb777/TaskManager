import {createElement} from "../utils";
import Task from "./task";

class TaskEdit extends Task {
  constructor(data) {
    super(data);
    this._subscribeOnEvents();
  }


  getTemplate() {
    return `
    <article id="task-edit_${this.id}"  class="card card--edit card--${this.color} ${Object.values(this.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
      <form class="card__form" method="get">
      <input type="hidden" name="id" value="${this.id}">
        <div class="card__inner">
          <div class="card__control">
        <button type="button" class="card__btn card__btn--archive ${this.isArchive ? ` card__btn--disabled` : ``}">
            archive
        </button>
        <button type="button" class="card__btn card__btn--favorites ${this.isFavorite ? ` card__btn--disabled` : ``}">
            favorites
        </button>
        </div>
    
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
    
          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${this.description}</textarea>
            </label>
          </div>
    
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">yes</span>
                </button>
    
                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder=""
                      name="date"
                      value="${new Date(this.dueDate).toDateString()}"
                    />
                  </label>
                </fieldset>
    
                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">${Object.keys(this.repeatingDays).some((day) => this.repeatingDays[day]) ? `yes` : `no`}</span>
                </button>
    
                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${Object.keys(this.repeatingDays).map((day) => `
                    <input
                      class="visually-hidden card__repeat-day-input"
                      type="checkbox"
                      id="repeat-${day}-4"
                      name="repeat"
                      value="${day}"
                      ${(this.repeatingDays[day]) ? `checked` : ``}
                    />
                    <label class="card__repeat-day" for="repeat-${day}-4"
                      >${day}</label
                    >                  
                    `).join(``)}
                  </div>
                </fieldset>
              </div>
    
              <div class="card__hashtag">
                <div class="card__hashtag-list">
                ${Array.from(this.tags).map((tag) => `
                <span class="card__hashtag-inner">
                  <input
                    type="hidden"
                    name="hashtag"
                    value="repeat"
                    class="card__hashtag-hidden-input"
                  />
                  <p class="card__hashtag-name">
                    #${tag}
                  </p>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>
               `).join(``)}
                </div>
    
                <label>
                  <input
                    type="text"
                    class="card__hashtag-input"
                    name="hashtag-input"
                    placeholder="Type new hashtag here"
                  />
                </label>
              </div>
            </div>
    
            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                <input type="radio" id="color-black-1" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" checked="">
                <label for="color-black-1" class="card__color card__color--black">black</label>
                <input type="radio" id="color-yellow-1" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow">
                <label for="color-yellow-1" class="card__color card__color--yellow">yellow</label>
                <input type="radio" id="color-blue-1" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
                <label for="color-blue-1" class="card__color card__color--blue">blue</label>
                <input type="radio" id="color-green-1" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
                <label for="color-green-1" class="card__color card__color--green">green</label>
                <input type="radio" id="color-pink-1" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
                <label for="color-pink-1" class="card__color card__color--pink">pink</label>
            </div>
            </div>
          </div>
    
          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>    
  `;
  };

  updateTemplate(newData) {
    return `<article id="task_${newData.id}" class="card card--${newData.color} ${Object.values(newData.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                 <button type="button" class="card__btn  card__btn--${newData.isArchive ? `` : `disabled`}">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--${newData.isFavorite ? `` : `disabled`}"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${newData.description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${new Date(newData.dueDate).toDateString()}</span>
                          <span class="card__time">${new Date(newData.dueDate).getHours()} : ${new Date(newData.dueDate).getMinutes()}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                      ${Array.from(newData.tags).map((tag) => `
                       <span class="card__hashtag-inner">
                          <span class="card__hashtag-name">
                            ${tag}
                          </span>
                        </span>
                      `).join(``)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`;
  };

  _subscribeOnEvents() {

    // this.getElement().querySelector(`.card__color-input--${this.color}`).checked = true;

    this.getElement()
      .querySelector(`.card__hashtag-input`).addEventListener(`keydown`, (evt) => {
      if (evt.keyCode === `13`) {
        evt.preventDefault();
        this.getElement().querySelector(`.card__hashtag-list`).insertAdjacentHTML(`beforeend`, `<span class="card__hashtag-inner">
        <input
          type="hidden"
          name="hashtag"
          value="${evt.target.value}"
          class="card__hashtag-hidden-input"
        />
        <p class="card__hashtag-name">
          #${evt.target.value}
        </p>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`);
        evt.target.value = ``;
      }
    });

    document.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`card__hashtag-delete`)) {
        evt.preventDefault();
        evt.target.closest(`.card__hashtag-inner`).remove();
      }
    });
  }
}

export default TaskEdit;
