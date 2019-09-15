import AbstractComponent from "./abstract-component";

class Filter extends AbstractComponent{

  constructor(filters, tasks) {
    super();
    this.filters = filters;
    this.tasks = tasks;
  }
  getTemplate() {
    return `<section class="main__filter filter container">
      ${this.filters.map((filter)=> `
      <input
        type="radio"
        id="filter__${filter.title}"
        class="filter__input visually-hidden"
        name="filter"
        checked
      />
      <label for="filter__${filter.title}" class="filter__label">
      ${filter.title} <span class="filter__all-count">${filter.count}</span></label>`).join(``)}
    </section>`;
  }
}

export default Filter;
