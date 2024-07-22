class minMaxArray {
  constructor(arr, n) {
    this.arr = arr;
    this.n = n;
  }
  minmax() {
    let sortedData = this.arr.sort(function (a, b) {
      return a - b;
    });
    let min = sortedData[0];
    let max = sortedData[sortedData.length - 1];

    return { min, max };
  }
}
const objectminMaxArray = new minMaxArray([1, 2, 6, 4, 5], 5);
console.log(objectminMaxArray.minmax());
