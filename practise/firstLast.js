class firstLast {
  constructor(arr, num) {
    this.arr = arr;
    this.n = num;
  }
  second() {
    let arr = this.arr;
    let data = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == this.n) {
        data.push(i);
      }
    }
    if (data.length == 0) {
      return -1;
    }
    let data1 = data[0];
    let data2 = data[data.length - 1];
    return [data1, data2].join("");
  }
}
const objectForfirstLast = new firstLast([0, 0, 0, 0, 1, 1, 1, 1], 1);
console.log(objectForfirstLast.second());
