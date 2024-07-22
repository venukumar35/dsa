class pair {
  constructor(arr, k) {
    this.arr = arr;
    this.k = k;
  }

  pairs() {
    let array = this.arr;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > this.k) {
        continue;
      }
      let data = this.k - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > this.k || array[j] != data) {
          continue;
        }
        console.log(array[j]);
        count++;
      }
    }
    return count;
  }
}
const ObjectForPair = new pair(
  [
    48, 24, 99, 51, 33, 39, 29, 83, 74, 72, 22, 46, 40, 51, 67, 37, 78, 76, 26,
    28, 76, 25, 10, 65, 64, 47, 34, 88, 26, 49, 86, 73, 73, 36, 75, 5, 26, 4,
    39, 99, 27, 12, 97, 67, 63, 15, 3, 92, 90,
  ],
  50
);
console.log(ObjectForPair.pairs());
