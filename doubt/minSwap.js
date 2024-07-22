class MinSolution {
  minSwap(arr, n, k) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] <= k) {
        count++;
      }
    }

    // Find the count of elements greater than k in the current window
    let bad = 0;
    for (let i = 0; i < count; i++) {
      if (arr[i] > k) {
        bad++;
      }
    }

    // Initialize result with bad count of first window
    let ans = bad;

    // Using sliding window concept to find the minimum swaps
    for (let i = 0, j = count; j < n; i++, j++) {
      // If the element going out of the window is greater than k,
      // decrement bad count.
      if (arr[i] > k) {
        bad--;
      }

      // If the element coming into the window is greater than k,
      // increment bad count.
      if (arr[j] > k) {
        bad++;
      }
      console.log(bad, ans);
      // Update the answer if bad count is minimum in this window
      ans = Math.min(ans, bad);
    }
    return ans;
  }
}
const minas = [10, 12, 20, 20, 5, 19, 19, 12, 1, 20, 1];

const dataObj = new MinSolution();
console.log(dataObj.minSwap(minas, minas.length, 1));
