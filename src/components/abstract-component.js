import {createElement} from "../utils";

class AbstractComponent {
  constructor (){
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this._element = null;
  }

   getTemplate (){
    throw Error (`Abstract method is not implemented`);
  }

  updateTemplate(){
    throw Error (`Abstract method is not implemented`);
  }
}

export  default AbstractComponent;
