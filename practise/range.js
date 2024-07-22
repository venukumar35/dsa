class Range {
  constructor(array, num1, num2) {
    this.arr = array;
    this.start = num1;
    this.end = num2;
  }
  findRange() {
    let indexOfStart = this.arr.indexOf(this.start);
    let indexOfEnd = this.arr.indexOf(this.end);

    if (indexOfStart == -1 || indexOfEnd == -1) {
      return "No";
    }
    let data = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] >= this.start && this.arr[i] <= this.end) {
        data.push(this.arr[i]);
      }
    }
    console.log(data);
    if (data.includes(this.start) && data.includes(this.end)) {
      return "Yes";
    }
    return "No";
  }
}
//1 9 1 1 5 8 9 4 3 8 10 9 4 1 8 2 6 5 1 8 5 2 6 8 2 8 9 5 10
const objectForRange = new Range(
  [
    1, 9, 1, 1, 5, 8, 9, 4, 3, 8, 10, 9, 4, 1, 8, 2, 6, 5, 1, 8, 5, 2, 6, 8, 2,
    8, 9, 5, 10,
  ],
  3,
  4
);
console.log(objectForRange.findRange());
