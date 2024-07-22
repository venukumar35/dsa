class Solution99 {
  subArrayExists(arr, n) {
    let negArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negArray.push(arr[i]);
        continue;
      }
    }
    if (negArray.length == 0 && arr.indexOf(0) != -1) {
      return true;
    }
    if (negArray.length == 0) {
      return false;
    }
    console.log(negArray);
    let sum = 0;
    let count = 0;
    for (let x = 0; x < negArray.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        for (let z = 0; z < arr.length; z++) {
          sum = arr[z] + arr[z + 1];
          if (negArray.indexOf(sum) != -1) {
            console.log(sum);
            count++;
          }
        }
        sum = 0;
      }
    }
    if (count == negArray.length - 1) {
      return true;
    }
  }
}
const arr = [-9, -6, 7, -8, -2, 10, 9, -1];
const ObjectForUnion = new Solution99();
console.log(ObjectForUnion.subArrayExists(arr, 9));
