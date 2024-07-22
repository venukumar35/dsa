class Solution2 {
  // Function to find equilibrium point in the array.
  equilibriumPoint(a, n) {
    let countOne = 0;
    let countTwo = 0;
    let value = -1;
    let jvalue = -1;

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j <= i + 1; j++) {
        countOne = countOne + a[j];
        jvalue = j;
      }

      for (let z = a.length - 1; z >= 0; z--) {
        countTwo = countTwo + a[z];
        console.log(
          countOne,
          countTwo,
          jvalue,
          z,
          countTwo == countOne,
          jvalue <= z,
          arr.length % 2 == 0 ? true : true,
          arr.length
        );
        if (
          countTwo == countOne &&
          jvalue <= z &&
          (arr.length % 2 == 0
            ? true
            : arr.length - 1 - (jvalue + z) == 1 ||
              arr.length - 1 - (jvalue + z) == 0)
        ) {
          value = jvalue + 2;
          break;
        }
      }

      if (countOne == countTwo) {
        break;
      }

      countOne = 0;
      countTwo = 0;
      jvalue = -1;
    }

    return value;
  }
}

// Input data
const arr = [7, 4, 3, 5, 7, 9, 10];
const n = arr.length;

// Create an instance of Solution
const solution = new Solution2();

// Call the subarraySum function
const result = solution.equilibriumPoint(arr, n);

// Output the result
console.log(result);
