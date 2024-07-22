class formattedIndexOfarray {
  constructor(arr) {
    this.arr = arr;
  }

  formattedArray() {
    let array = this.arr.sort((a, b) => a - b).reverse("");
    let even = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        even.push(array[i]);
      } else {
        odd.push(array[i]);
      }
    }
    let newData = [];
    if (even.length > odd.length) {
      return 0;
    }

    for (let z = 0; z < odd.length; z++) {
      if (z < even.length) {
        newData.push(even[z]);
      }

      if (z < odd.length) {
        newData.push(odd[z]);
      }
    }
    return 1;
  }
}
const ObjectForformattedIndexOfarray = new formattedIndexOfarray([
  87, 78, 16, 94, 36, 87, 93, 50, 22, 63, 28, 91, 60, 64, 27, 41, 27, 73, 37,
  12, 69, 68, 30, 83, 31, 63, 24, 68, 36, 30, 3, 23, 59, 70, 68, 94, 57, 12, 43,
  30, 74, 22, 20, 85, 38, 99, 25, 16, 71, 14, 27, 92, 81, 57, 74, 63, 71, 97,
  82, 6, 26, 85, 28, 37, 6, 47, 30, 14, 58, 25, 96, 83, 46, 15, 68, 35, 65, 44,
  51, 88, 9, 77, 79, 89,
]);
console.log(ObjectForformattedIndexOfarray.formattedArray());
