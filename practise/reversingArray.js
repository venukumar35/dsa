function reverseInGroups(arr, N, K) {
  for (let i = 0; i < N; i += K) {
    let left = i;
    let right = Math.min(i + K - 1, N - 1);
    let count = 0;
    // Reverse the subarray of size K
    while (left < right) {
      console.log(right);
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
      count++;
      console.log("count", count);
    }
  }
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let N1 = 5,
  K1 = 3;
reverseInGroups(arr1, N1, K1);
console.log(arr1); // Output: [3, 2, 1, 5, 4]
