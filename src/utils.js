const randBoolean = () => Boolean(Math.round(Math.random()));

const arrayRandomLength = (arr) => {
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    [newArr[num], newArr[i]] = [newArr[i], newArr[num]];
  }
  return newArr.slice(0, Math.floor(Math.random() * arr.length - 1));
};

const getRandomElemArray = (array) => array[Math.floor(Math.random() * array.length)];

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,

};

const createElement = (template) => {
  const element = document.createElement("div");
  element.innerHTML = template;
  return element;
};

const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN :
      container.prepend(element);
      break;
    case Position.BEFOREEND :
      container.append(element);
      break;
  }
};

const unrendear = (element) => {
  if (element) {
    element.remove();
  }
};


export {randBoolean, arrayRandomLength, createElement, render, unrendear, Position,getRandomElemArray};
