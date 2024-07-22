function count(coins, N, sum) {
  // Create a table to store the results of subproblems
  const dp = new Array(sum + 1).fill(0);

  // Base case: There is one way to make sum 0, i.e., by not selecting any coin
  dp[0] = 1;
  console.log(dp);
  // Iterate over all coins and update the dp array
  for (let coin of coins) {
    for (let i = coin; i <= sum; i++) {
      console.log(i);
      dp[i] += dp[i - coin];
    }
  }
  console.log(dp);
  // Return the number of ways to make change for the given sum
  return dp[sum];
}

// Example usage:
const coins1 = [1, 2, 3];
const N1 = 3;
const sum1 = 4;
console.log(count(coins1, N1, sum1)); // Output: 4

// const coins2 = [2, 5, 3, 6];
// const N2 = 4;
// const sum2 = 10;
// console.log(count(coins2, N2, sum2)); // Output: 5
