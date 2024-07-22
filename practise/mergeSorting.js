class MergeSorting {
  constructor(arr, n) {
    this.array = arr;
  }
  sorting() {
    if (this.array.length == 1) {
      console.log(this.array);
      return this.array;
    }

    let mid = Math.floor(this.array.length / 2);
    let start = 0;
    let end = this.array.length;
    let leftData = this.array.slice(start, mid);
    let rightData = this.array.slice(mid, end);

    let leftarray = new MergeSorting(leftData).sorting();
    let rightarray = new MergeSorting(rightData).sorting();
    // console.log(leftarray, rightarray);
    return this.merge(leftarray, rightarray);
  }

  merge(left, right) {
    let arr = new Array(left.length + right.length);
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        k++;
        i++;
      } else {
        arr[k] = right[j];
        k++;
        j++;
      }
    }

    while (i < left.length) {
      arr[k] = left[i];
      k++;
      i++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      k++;
      j++;
    }
    return arr;
  }
}
const objectForMergeSorting = new MergeSorting([2, 4, 1, 6, 5, 3]);
console.log(objectForMergeSorting.sorting());
