class arraypuzzle {
  constructor(arr) {
    this.arr = arr;
  }
  puzzle() {
    let array = this.arr;
    let store = [];
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i == j) {
          continue;
        }
        sum = sum * array[j];
      }
      store.push(sum);
      sum = 1;
    }
    console.log(store);
  }
}
const ObjectForarraypuzzle = new arraypuzzle([
  7, 8, 6, 4, 6, 7, 3, 10, 2, 3, 8, 1, 10, 4, 7, 1, 7, 3, 7, 2, 9, 8, 10, 3, 1,
  3, 1, 1, 1, 1, 1, 1, 1, 1,
]);
console.log(ObjectForarraypuzzle.puzzle());
