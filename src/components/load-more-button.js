import AbstractComponent from "./abstract-component";

class LoadMoreButton extends AbstractComponent{
  constructor(){
    super();
  }

  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }
}

export  default LoadMoreButton;
