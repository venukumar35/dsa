class CheckTwoEqualArray {
  constructor(arr, ele) {
    (this.array = arr), (this.ele = ele);
  }
  findsameelement() {
    let data = this.array.includes(this.ele);

    if (data) {
      return this.array.indexOf(this.ele);
    }
    return -1;
  }
}
const objectCheckTwoEqualArray = new CheckTwoEqualArray([1, 2, 3, 4], 5);
console.log(objectCheckTwoEqualArray.findsameelement());
