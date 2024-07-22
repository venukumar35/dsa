class Solution3 {
  //Function to find two repeating elements in an array of size n.
  findTwoElement(arr, n) {
    let countRepat = 0;
    let missing = 0;
    let missingCount = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          countRepat++;
        }
      }
      if (countRepat == 2) {
        countRepat = arr[i];
        break;
      }
      countRepat = 0;
    }
    for (let x = 1; x <= arr.length; x++) {
      for (let z = 0; z < arr.length; z++) {
        console.log(x);
        if (arr[z] == x) {
          missingCount++;
          break;
        }
      }

      if (missingCount == 0) {
        missing = x;
        break;
      }
      missingCount = 0;
    }
    return [countRepat, missing];
  }
}
// Input data
const arr = [12, 7, 5, 1, 13, 1, 10, 8, 11, 9, 2, 4, 3, 6];
const n = arr.length;

// Create an instance of Solution
const solution3 = new Solution3();

// Call the subarraySum function
const result = solution3.findTwoElement(arr, n);

// Output the result
console.log(result);
