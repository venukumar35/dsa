class BinarySearch {
  SearchingTheNumber(array, value) {
    let start = 0;
    let end = array.length - 1;

    while (array[start] <= array[end]) {
      let mid = (start + end) / 2;

      if (value > array[mid]) {
        start = mid + 1;
      } else if (value < array[mid]) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}
const BinarySearchObject = new BinarySearch();

const array = new Array(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
);
console.log(array.lastIndexOf(30));
BinarySearchObject.SearchingTheNumber(array, 15);
