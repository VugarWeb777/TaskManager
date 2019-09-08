class Filter {
  title;
  count;

  constructor({title, count}) {
    this.title = title;
    this.count = count;
  }

  getTemplate = () => {
    return `
      ${`<input type="radio" id="filter__${this.title.toLowerCase()}" 
      class="filter__input visually-hidden" 
      name="filter" 
      checked="">
      <label for="filter__${this.title.toLowerCase()}" class="filter__label">${this.title}
      <span class="filter__${this.title.toLowerCase()}-count">${this.count}</span>
      </label>`}`;
  };
}

export default Filter;
