class penality {
  constructor(arr) {
    this.arr = arr;
  }
  pena() {
    let array = this.arr;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 2 && array[i + 1] == 1) {
        count++;
      }
    }

    return count;
  }
}
const ObjectForpenality = new penality("1012012112110");
console.log(ObjectForpenality.pena());
