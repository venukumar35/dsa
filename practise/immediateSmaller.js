class ImmedateSmaller {
  constructor(arr, n) {
    this.arr = arr;
    this.next = n;
  }
  immedate() {
    let arr1 = new Array(this.arr.length);
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] < this.arr[i + 1]) {
        this.arr[i] = -1;
      } else {
        this.arr[i] = this.arr[i + 1] ?? -1;
      }
    }
    return this.arr;
  }
}
const objectImmedateSmaller = new ImmedateSmaller([4, 2, 1, 5, 3], 5);
console.log(objectImmedateSmaller.immedate());
