import AbstractComponent from "./abstract-component";

class Task extends AbstractComponent{
  constructor({description,dueDate,repeatingDays,tags,color,isFavorite,isArchive}) {
    super();
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.repeatingDays = repeatingDays;
    this.tags = [...tags];
    this.color = color;
    this.isFavorite = isFavorite;
    this.isArchive = isArchive;
  }

  getTemplate (){
    return`<article class="card card--${this.color} ${Object.values(this.repeatingDays).some((it) => it === true) ? `card--repeat` : ``}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                 <button type="button" class="card__btn  card__btn--${this.isArchive ? `` : `disabled`}">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--${this.isFavorite ? `` : `disabled`}"
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
                  <p class="card__text">${this.description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${new Date(this.dueDate).toDateString()}</span>
                          <span class="card__time">${new Date(this.dueDate).getHours()} : ${new Date(this.dueDate).getMinutes()}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                      ${Array.from(this.tags).map((tag) => `
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
}


export default Task;
