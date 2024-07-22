class QuickSort {
  constructor(array, low, high) {
    this.array = array;
    this.low = low;
    this.high = high;
  }

  sorting() {
    let start = this.low;
    let end = this.high;
    let mid = Math.floor((start + end) / 2);
    let pivot = this.array[mid];
    if (this.low >= this.high) {
      return; // base case for recursion
    }

    while (start <= end) {
      while (this.array[start] < pivot) {
        start++;
      }
      while (this.array[end] > pivot) {
        end--;
      }
      if (start <= end) {
        let temp = this.array[start];
        this.array[start] = this.array[end];
        this.array[end] = temp;
        start++;
        end--;
      }
    }

    // Recursive calls
    new QuickSort(this.array, this.low, end).sorting();
    new QuickSort(this.array, start, this.high).sorting();
  }
}

let array = [7, 6, 9, 1, 4, 5, 3, 8, 0];
let low = 0;
let high = array.length - 1;
const objectForQuickSort = new QuickSort(array, low, high);
objectForQuickSort.sorting();
// console.log(objectForQuickSort.sorting());
console.log(objectForQuickSort.array); // Output the sorted array
