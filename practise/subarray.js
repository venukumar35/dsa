class SubArray {
  constructor(arr) {
    this.arr = arr;
  }
  sub() {
    let length = this.arr.length / 2;
    let start = 0;
    let mid = length;
    let sum1 = 0;
    let sum2 = 0;
    let data1 = this.arr.splice(start, mid);
    for (let i = 0; i < data1.length; i++) {
      sum1 = sum1 + data1[i];
    }
    for (let i = 0; i < this.arr.length; i++) {
      sum2 = sum2 + this.arr[i];
    }
    return sum1 * sum2;
  }
}
const objectForSub = new SubArray([1, 2, 3, 4]);
console.log(objectForSub.sub());
