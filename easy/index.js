class Solution {
  // Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    let count = 0;
    let findLastElement = 0;
    let startElement = 0;
    for (let i = 1; i <= arr.length; i++) {
      for (let j = i - 1; j < n; j++) {
        count = count + arr[j];
        if (count == s) {
          console.log(arr[j], i, j);
          findLastElement = j + 1;
          startElement = i;
          break;
        }
      }
      if (startElement != 0 && findLastElement != 0) {
        break;
      }
      count = 0;
    }
    if (startElement == 0 && findLastElement == 0) {
      return [-1];
    }
    return [startElement, findLastElement];
  }
}

// Input data
const arr = [
  28, 68, 142, 130, 41, 14, 175, 2, 78, 16, 84, 14, 193, 25, 2, 193, 160, 71,
  29, 28, 85, 76, 187, 99, 171, 88, 48, 5, 104, 22, 64, 107, 164, 11, 172, 90,
  41, 165, 143, 20, 114, 192, 105, 19, 33, 151, 6, 176, 140, 104, 23, 99, 48,
  185, 49, 172, 65,
];
const n = arr.length;
const s = 1562;

// Create an instance of Solution
const solution = new Solution();

// Call the subarraySum function
const result = solution.subarraySum(arr, n, s);

// Output the result
console.log(result.join(" "));
