class Swiping {
  constructor(arr) {
    this.arr = arr;
  }
  swap() {
    let array = this.arr;
    let temp = 0;
    for (let i = 0; i < array.length - 1; i++) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      i++;
    }
    return array;
  }
}
const ObjectForSwiping = new Swiping([2, 4, 7, 8, 9, 10]);
console.log(ObjectForSwiping.swap());
