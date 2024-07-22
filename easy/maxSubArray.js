class Solutionmax {
  lenOfLongSubarr(arr, n, k) {
    let len = 0;
    let sum = 0;
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum === k) {
        len = Math.max(len, i + 1);
      }
      if (map.has(sum - k)) {
        len = Math.max(len, i - map.get(sum - k));
      }
      if (!map.has(sum)) {
        map.set(sum, i);
      }
    }
    // let map = new Map(),
    //   ans = 0,
    //   sum = 0;
    // map.set(0, -1);
    // for (let i = 0; i < n; i++) {
    //   console.log(i);
    //   sum += arr[i];
    //   if (map.has(sum - k)) {
    //     let length = i - map.get(sum - k);
    //     ans = Math.max(ans, length);
    //   }
    //   if (!map.has(sum)) {
    //     map.set(sum, i);
    //   }
    // }
    // return ans;
    return len;
  }
}

const arr1 = [10, 5, 2, 7, 1, 9];

const Objectsoluaematminmax = new Solutionmax();
console.log(Objectsoluaematminmax.lenOfLongSubarr(arr1, 2, 15));
