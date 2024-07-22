class nondecreasing {
  constructor(arr) {
    this.arr = arr;
  }
  decreasing() {
    let array = this.arr;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          return 0;
        }
      }
    }
    return 1;
  }
}
const ObjectFornondecreasing = new nondecreasing([10, 90, 30, 40, 50]);
console.log(ObjectFornondecreasing.decreasing());
