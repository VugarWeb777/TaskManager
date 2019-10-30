import AbstractComponent from "./abstract-component";

class SearchResultInfo extends AbstractComponent{
  constructor ({title,count}){
    super();

    this.title = title;
    this.count = count;
  }

  getTemplate() {
    return `<h2 class="result__title">
    ${this.title}<span class="result__count">${this.count}</span>
    </h2>`
  }
}

export  default SearchResultInfo;
