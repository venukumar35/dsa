class BubbleSorting {
  constructor(array) {
    this.array = array;
  }
  sorting() {
    for (let i = 0; i < this.array.length; i++) {
      let swapping = false;
      for (let j = 0; j < this.array.length - i; j++) {
        let index = j;
        if (this.array[j] > this.array[j + 1]) {
          index = j + 1;
        }
        //swaping
        swapping = true;
        let temp = this.array[j];
        this.array[j] = this.array[index];
        this.array[index] = temp;
      }
      if (!swapping) {
        break;
      }
    }
    return this.array;
  }
}
const objectForBubbleSort = new BubbleSorting([9, 8, 6, 7, 4, 5, 2]);
console.log(objectForBubbleSort.sorting());
