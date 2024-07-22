class SolutionthreePointer {
  //Function to find triplets with zero sum.
  findTriplets(arr, n) {
    arr.sort((a, b) => {
      return a - b;
    });

    let result = false;
    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      let k = arr.length - 1;
      let sum = 0;
      while (j < k) {
        sum = arr[i] + arr[j] + arr[k];
        console.log(sum, arr[i], arr[j], arr[k]);
        if (sum == 0) {
          result = true;
          break;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }

    return result ? 1 : 0;
  }
}
let three = [97, -27, 2, -34, 61, -39];
const objSolutionthreePointer = new SolutionthreePointer();
console.log(objSolutionthreePointer.findTriplets(three, 4));
