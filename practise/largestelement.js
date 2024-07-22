class LargestElement {
  constructor(arr, n) {
    (this.arr = arr), (this.n = n);
  }
  largestnum() {
    let data = this.arr.sort(function (a, b) {
      return a - b;
    });
    return data[data.length - 1];
  }
}
const objectForLargestElement = new LargestElement(
  [1, 10, 3, 4, 5, 6, 12, 22, 40],
  6
);
console.log(objectForLargestElement.largestnum());
