class missingNumber {
  constructor(arr) {
    this.arr = arr;
  }
  number() {
    let max = Math.max(...this.arr);
    for (let j = this.arr.length - 1; j >= 0; j--) {
      if (max != this.arr[j]) {
        return max;
      }
      max = max - 1;
    }
  }
}

const objectmissingNumber = new missingNumber([1, 3, 4, 7, 9]);
console.log(objectmissingNumber.number());
