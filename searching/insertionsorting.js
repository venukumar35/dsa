class insertionSorting {
  constructor(array) {
    this.array = array;
  }
  insertionSorting() {
    for (let i = 1; i < this.array.length; i++) {
      for (let j = i; j > 0; j--) {
        if (this.array[j] < this.array[j - 1]) {
          let temp = this.array[j];
          this.array[j] = this.array[j - 1];
          this.array[j - 1] = temp;
        } else {
          break;
        }
      }
    }
    return this.array;
  }
}
const objectInsertionSorting = new insertionSorting([9, 3, 5, 7, 2, 1, 8]);
console.log(objectInsertionSorting.insertionSorting());
