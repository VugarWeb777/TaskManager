const randBoolean = ()=> Boolean(Math.round(Math.random()));

const arrayRandomLength = (arr) => {
  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    let num = Math.floor(Math.random() * (i + 1));
    [newArr[num], newArr[i]] = [newArr[i], newArr[num]];
  }
  return newArr.slice(0, Math.floor(Math.random() * arr.length - 1));
};


export {randBoolean, arrayRandomLength};
