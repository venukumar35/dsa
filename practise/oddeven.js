class odd {
  constructor(arr) {
    this.arr = arr;
  }
  oddeven() {
    let arr = this.arr;
    let start = 0;
    let even = [];
    let odd = [];
    while (start < arr.length) {
      if (arr[start] % 2 == 0) {
        even.push(arr[start]);
      } else {
        odd.push(arr[start]);
      }
      start++;
    }
    let data1 = even.sort(function (a, b) {
      return a + b;
    });
    for (let i = 0; i < odd.length; i++) {
      for (let j = 0; j < odd.length; j++) {
        if (odd[j] < odd[j + 1]) {
          let temp = odd[j];
          odd[j] = odd[j + 1];
          odd[j + 1] = temp;
        }
      }
      let data = arr.sort((a, b) => a - b).reverse();
      let start = data[0];
      let second = data[1];
      return start * second;
    }

    return [...odd, ...data1];
  }
}
const objectForodd = new odd([1, 2, 3, 4, 5, 6, 7]);
console.log(objectForodd.oddeven());
