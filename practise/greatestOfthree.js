class Greatest {
  constructor(arr) {
    this.arr = arr;
  }
  bubbleSorting() {
    let arrdata = [];
    if (this.arr.length < 2) {
      return -1;
    }

    for (let i = 0; i <= this.arr.length; i++) {
      for (let j = 0; j <= this.arr.length; j++) {
        if (this.arr[j] < this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }
    arrdata.push(this.arr[2]);
    return this.arr;
  }
}
const objectOfGreatest = new Greatest([1, 2, 3, 4, 5]);
console.log(objectOfGreatest.bubbleSorting());
