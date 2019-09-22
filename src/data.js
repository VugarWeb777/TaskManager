/* eslint-disable no-console */
import {randBoolean, arrayRandomLength,getRandomElemArray} from "./utils";

const getTasks = () => ({
  id: Math.round(Math.random()* (200-1)+1),
  description: getRandomElemArray([`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`,`Изучить ES2015`, `Изучить ООП`, `JavaScript уровень 2`]),
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000 - (7 * 24 * 60 * 60 * 1000),
  repeatingDays: {
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: randBoolean(),
    Sa: false,
    Su: false,
  },
  tags: new Set(arrayRandomLength([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `learning`,
  ]
  )),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)],
  isFavorite: randBoolean(),
  isArchive: randBoolean(),
});

const TASK_COUNT = 17;

const tasks = new Array(TASK_COUNT).fill(``).map(getTasks);
const filters = [
  {
    title: `All`,
    count: tasks.length,
  },
  {
    title: `Overdue`,
    count: tasks.filter((value) => value.dueDate < Date.now()).length,
  },
  {
    title: `Today`,
    count: tasks.filter((value) => new Date(value.dueDate).toDateString() === new Date(Date.now()).toDateString()).length,
  },
  {
    title: `Favorites`,
    count: tasks.filter((value) => value.isFavorite === true).length,
  },
  {
    title: `Repeating `,
    count: tasks.filter((value) => {
      return (Object.values(value.repeatingDays).some((day) => day));
    }).length,
  },
  {
    title: `Tags`,
    count: tasks.filter((value) => value.tags).length,
  },
  {
    title: `Archive`,
    count: tasks.filter((value) => value.isArchive === true).length,
  },
];


export {tasks, filters};
