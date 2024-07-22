class FirstRepeating {
  constructor(arr) {
    this.arr = arr;
  }
  rep() {
    let array = this.arr;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] == array[j]) {
          count++;
          if (count > 1) {
            return i + 1;
          }
        }
      }
      count = 0;
    }
    return -1;
  }
}
const ObjectForFirstRepeating = new FirstRepeating([
  9, 4, 7, 8, 3, 5, 1, 2, 0, 1, 6,
]);
console.log(ObjectForFirstRepeating.rep());
