class Largest {
  constructor(large, k) {
    this.large = large;
    this.k = k;
  }
  larges() {
    const MOD = 1000000007;
    let sum = 1;
    for (let i = 0; i < this.k; i++) {
      sum = sum * this.large[i];
    }
    console.log(Math.floor(sum) % MOD);
  }
}
const ObjectForLargest = new Largest(
  [
    168, 372, 141, 96, 439, 187, 144, 42, 425, 286, 272, 87, 421, 311, 49, 341,
    282, 255, 52, 363, 425, 350,
  ],
  22
);
console.log(ObjectForLargest.larges());
//Minimum Product of k Integers
