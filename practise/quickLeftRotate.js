class QuickLeftRotation {
  constructor(arr, n, k) {
    this.arr = arr;
    this.n = n;
    this.k = k;
  }
  rotate() {
    // let temp;
    // for (let i = 0; i < 4; i++) {
    //   temp = this.arr[0];
    //   for (let j = 0; j < this.arr.length; j++) {
    //     this.arr[j] = this.arr[j + 1];
    //   }
    //   this.arr[this.arr.length - 1] = temp;
    // }
    // return this.arr;
    let k;
    console.log(this.k);
    k = this.k % this.n; // To handle cases where k is greater than the length of the array
    console.log(k);
    for (let i = 1; i < 5; i++) {
      this.arr[(i + k) % this.n];
      console.log((i + k) % this.n);
      //   console.log(this.arr[(i + k) % this.n]);
    }
    // return this.arr;
  }
}
const objectQuickLeftRotation = new QuickLeftRotation(
  [
    80, -62, -90, 7, 50, -41, 70, 8, -7, -9, 44, 22, -57, -97, 26, 72, 95, -39,
    65, -51, 52, -29, -18, 4, 98, -3, 95, -11, -90,
  ],
  29,
  9944
);
console.log(objectQuickLeftRotation.rotate());
