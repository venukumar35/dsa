class ArrayBalance {
  constructor(arr) {
    this.arr = arr;
  }
  balance() {
    let arr = this.arr;
    let mid = arr.length / 2;
    let start = 0;
    let data1 = arr.splice(start, mid);
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < mid; i++) {
      sum1 += data1[i];
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      sum2 += arr[i];
    }
    console.log(sum1, sum2);
    return sum1 - sum2;
  }
}
const objectForArrayBalance = new ArrayBalance([1, 5, 3, 2]);
console.log(objectForArrayBalance.balance());
