class binary {
  constructor(arr, n, targetNumber) {
    this.array = arr;
    this.n = n;
    this.k = targetNumber;
  }
  binarysearch() {
    let mid = Math.floor(this.n / 2);
    console.log(mid);
    while (this.array[mid] < this.k) {
      if (this.array[++mid] == this.k) {
        return mid;
      }
    }
    while (this.array[mid] > this.k) {
      if (this.array[--mid] == this.k) {
        return mid;
      }
    }
    if (this.array[mid] == this.k) {
      return mid;
    }
    return -1;
  }
}
const object = new binary([1, 2, 3, 4, 56], 5, 3);
console.log(object.binarysearch());
