class Arrange {
  constructor(arr) {
    this.arr = arr;
  }
  arrays() {
    let arr = this.arr;
    let sort = arr.sort((a, b) => a - b);
    let start = 0;
    let end = 1;
    let data = [];
    for (let i = 1; i <= sort.length; i++) {
      if (i % 2 == 0) {
        data[i - 1] = sort[arr.length - end];
        end++;
      }

      if (i % 2 != 0) {
        data[i - 1] = sort[start];
        start++;
      }
    }
    return data.join(" ");
  }
}
const ObjectForArrange = new Arrange([1, 9, 2, 8, 3, 7, 4, 6, 5]);
console.log(ObjectForArrange.arrays());
