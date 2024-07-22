class MergeSorting {
  constructor(array) {
    this.array = array;
  }

  sorting() {
    if (this.array.length == 1) {
      return this.array;
    }

    const midValueIndex = Math.floor(this.array.length / 2);

    const leftArray = this.array.slice(0, midValueIndex);
    console.log(leftArray);

    const rightArray = this.array.slice(midValueIndex, this.array.length);
    console.log(rightArray);

    const left = new MergeSorting(leftArray).sorting(); //Recursion function call for left
    const right = new MergeSorting(rightArray).sorting(); //Recursion function call for right

    console.log(left, right);

    return this.mergeSorting(left, right);
  }

  mergeSorting(leftArray, rightArray) {
    let i = 0;
    let j = 0;
    let k = 0;
    const elementStoreArray = new Array(leftArray.length + rightArray.length);

    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        elementStoreArray[k++] = leftArray[i++];
      } else {
        elementStoreArray[k++] = rightArray[j++];
      }
    }

    while (i < leftArray.length) {
      elementStoreArray[k++] = leftArray[i++];
    }

    while (j < rightArray.length) {
      elementStoreArray[k++] = rightArray[j++];
    }
    console.log("i value", i);
    return elementStoreArray;
  }
}

const objectForSorting = new MergeSorting([1, 2, 7, 3, 5, 6, 11, 80, 99, 0]);
const sortedArray = objectForSorting.sorting();
console.log(sortedArray);
