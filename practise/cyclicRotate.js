class CyclicRotate {
  constructor(arr, n) {
    this.array = arr;
    this.n = n;
  }
  rotate() {
    let end = this.n;
    let start = 0;
    for (let i = this.n - 1; i > 0; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[start] = end;
    return this.array;
  }
}
const objectForCyclicRotate = new CyclicRotate([1, 2, 3, 4, 5], 5);
console.log(objectForCyclicRotate.rotate());
