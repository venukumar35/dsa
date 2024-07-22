class Alternative {
  constructor(arr) {
    this.arr = arr;
  }
  Alternate() {
    let array = this.arr;
    let end = 1;
    let start = 2;
    let sort = array.sort((a, b) => a - b);
    let data = [];
    for (let i = 1; i <= sort.length; i++) {
      if (i % 2 == 0) {
        data[i - 1] = array[i - start];
        start++;
      }
      if (i % 2 != 0) {
        data[i - 1] = array[sort.length - end];
        end++;
      }
    }
    return data;
  }
}
const ObjectForAlternative = new Alternative([1, 6, 9, 4, 3, 7, 8, 2]);
console.log(ObjectForAlternative.Alternate());
