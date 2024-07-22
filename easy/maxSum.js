class Solutionma {
  Maximize(arr, n) {
    const MOD = 1000000007;

    let data1 = [];
    let count = 0;
    const data = arr.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < data.length; i++) {
      if (i + 1 < data.length) {
        count = (count + ((data[i] * i) % MOD)) % MOD;
      }
      data1.push(count);
    }

    console.log(data1);
    return count;
  }
}
//2724
const sampleArray = [
  6, 6, 8, 19, 8, 10, 19, 14, 20, 18, 5, 11, 20, 6, 10, 7, 15, 8, 8, 9,
];
const objmaxs = new Solutionma();
console.log(objmaxs.Maximize(sampleArray));
