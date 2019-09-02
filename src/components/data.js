const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randBoolean = ()=> Boolean(Math.round(Math.random()));

const mixArray = (arr) => {
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    [newArr[num],newArr[i]]=[newArr[i],newArr[num]]
  }
  return newArr;
};

const arrayRandomLength = (arr) => mixArray(arr).slice(0, getRandomNum(1, 4));

const getTasks = ()=> ({
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 1000,
  repeatingDays: {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: randBoolean(),
    Saturday: false,
    Sunday: false,
  },
  tags: new Set(arrayRandomLength([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `learning`
    ]
  )),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
  isFavorite: true,
  isArchive: false,
});

const tasks = new Array(3).fill(``).map(getTasks);


export {tasks};
