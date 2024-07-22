class SolutionTriple {
  checkTriplet(arr, n) {
    let data = [];
    for (let i = 0; i < arr.length; i++) {
      data.push(arr[i] * arr[i]);
    }
    let count = 0;
    let result = false;

    for (let j = 0; j < data.length; j++) {
      for (let x = 0; x < data.length; x++) {
        count = data[j];
        count = count + data[x];
        if (data.indexOf(count) != -1) {
          result = true;
          break;
        }
        count = 0;
      }
      if (result == true) {
        break;
      }
    }

    return result;
  }
}
const arr = [
  10, 5, 19, 1, 2, 28, 9, 1, 25, 10, 1, 21, 4, 16, 29, 6, 7, 4, 16, 28, 23, 4,
  2, 4,
];
const objectTriple = new SolutionTriple();
console.log(objectTriple.checkTriplet(arr));
