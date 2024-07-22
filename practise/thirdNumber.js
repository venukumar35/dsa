class ThirdLargestNumber {
  constructor(arr) {
    this.arr = arr;
  }

  sorting() {
    if (this.arr.length == 1) {
      return this.arr;
    }
    let start = 0;
    let end = this.arr.length;
    let mid = Math.floor(this.arr.length / 2);
    let leftData = this.arr.slice(start, mid);
    let rightData = this.arr.slice(mid, end);

    let left = new ThirdLargestNumber(leftData).sorting();
    let right = new ThirdLargestNumber(rightData).sorting();
    const data = this.mergeing(left, right);
    return data;
  }
  mergeing(leftarray, rightarray) {
    let i = 0;
    let j = 0;
    let k = 0;
    const arr = new Array(leftarray.length, rightarray.length);
    while (i < leftarray.length && j < rightarray.length) {
      if (leftarray[i] > rightarray[j]) {
        arr[k] = leftarray[i];
        k++;
        i++;
      } else {
        arr[k] = rightarray[j];
        k++;
        j++;
      }
    }
    while (i < leftarray.length) {
      arr[k] = leftarray[i];
      k++;
      i++;
    }

    while (j < rightarray.length) {
      arr[k] = rightarray[j];
      k++;
      j++;
    }
    return arr;
  }
}
const obj = new ThirdLargestNumber([2, 4, 22, 11, 555, 1, 10, 60]);
console.log(obj.sorting());
