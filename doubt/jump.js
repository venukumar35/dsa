///////////Greedy algorith

class Solution1 {
  minJumps(arr, N) {
    if (N <= 1) {
      return 0; // Already at the end or only one element
    }

    if (arr[0] === 0) {
      return -1; // Can't move from the starting position
    }

    let maxReach = arr[0]; // Initialize the farthest index that can be reached
    let steps = 1; // Initialize the number of steps taken
    let lastJump = arr[0]; // Initialize the index where the last jump occurred

    for (let i = 1; i < N; i++) {
      if (i === N - 1) {
        return steps; // Reached the end of the array
      }

      maxReach = Math.max(maxReach, i + arr[i]); // Update maxReach

      if (i === lastJump) {
        console.log(i, lastJump, maxReach);
        if (maxReach <= i) {
          return -1; // Can't proceed further
        }
        lastJump = maxReach; // Update lastJump
        steps++; // Increment steps
      }
    }

    return steps;
  }
}
const data1 = new Solution1();
const arr = [
  10, 14, 29, 21, 17, 4, 18, 20, 18, 22, 21, 14, 27, 12, 3, 28, 17, 0, 2, 18, 8,
  20, 26, 16, 9, 23, 25, 20, 7, 27, 5, 7, 16, 5, 25, 11, 3, 7, 2, 17, 14, 6, 12,
  14, 23, 25, 26, 5, 18, 1, 6, 10, 9, 12, 2, 25, 29, 12, 19, 4, 8, 5, 8, 30, 2,
  22, 24, 30, 7, 24, 8, 15, 16, 2, 11, 20,
];

console.log(data1.minJumps(arr, 76));
