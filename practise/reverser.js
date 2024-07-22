class Reverse {
  constructor(arr, n) {
    this.array = arr;
    this.n = n;
  }
  reverseArray() {
    for (let i = 0; i < this.n; i++) {
      let temp = this.array[0];
      for (let j = 0; j < this.array.length - i; j++) {
        this.array[j] = this.array[j + 1];
      }
      this.array[this.array.length - 1] = temp;
    }
    return this.array;
  }
}
const objectReverse = new Reverse([1, 2, 3, 4, 5], 2);
console.log(objectReverse.reverseArray());
