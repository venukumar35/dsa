class MultipleArray {
  constructor(arr1, arr2) {
    (this.arr1 = arr1), (this.arr2 = arr2);
  }
  multi() {
    let data1 = this.arr1.sort(function (a, b) {
      return a - b;
    });
    let data2 = this.arr2.sort(function (a, b) {
      return a - b;
    });
    let firstArrayIndex = data1[data1.length - 1];
    let secondArrayIndex = data2[0];

    return firstArrayIndex * secondArrayIndex;
  }
}
const ObjectForMultipleArray = new MultipleArray(
  [5, 7, 9, 3, 6, 2],
  [1, 2, 6, -1, 0, 9]
);
console.log(ObjectForMultipleArray.multi());
