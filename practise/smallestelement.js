class SmallestElement {
  constructor(arr) {
    this.arr = arr;
  }
  smallNumber() {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = i; j < this.arr.length; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }
    console.log(this.arr);
    let setData = new Set(this.arr);
    let data = [...setData];
    console.log(data);
    return data.splice(0, 2).join(" ").toString("");
  }
}
const ObjectSmallestElement = new SmallestElement([2, 10, 9, 3, 7]);
console.log(ObjectSmallestElement.smallNumber());
