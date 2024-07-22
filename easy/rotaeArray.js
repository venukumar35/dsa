class RotateArray {
  constructor(arr, k) {
    this.arr = arr;
    this.k = k;
  }
  rotate() {
    let array = this.arr;
    let start = array.slice(0, this.k);
    let end = array.slice(this.k);
    let data = [...end, ...start];
    return data;
    // for (let i = 0; i < 2; i++) {
    //   temp = array[0];
    //   for (let j = 0; j < array.length; j++) {
    //     array[j] = array[j + 1];
    //   }
    //   array[array.length - 1] = temp;
    // }
    // return array;
  }
}
const ObjectForRotateArray = new RotateArray(
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  3
);
console.log(ObjectForRotateArray.rotate());
