class LinearSort {
  sort() {
    console.log("initial array:", this.array);

    for (let i = 0; i < this.array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
      }

      // Swapping
      let temp = this.array[i];
      console.log(temp);
      this.array[i] = this.array[minIndex];
      console.log(temp);
      this.array[minIndex] = temp;
    }

    return this.array;
  }

  constructor(array) {
    this.array = array;
  }
}

const obj = new LinearSort([4, 5, 3, 8, 9, 6]);
console.log(obj.sort());
