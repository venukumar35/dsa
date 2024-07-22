class Solutionminswap {
  //Function to find the minimum number of swaps required to sort the array.
  minSwaps(arr) {
    let smallest = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j + 1]) {
          smallest.push(arr[j + 1]);
        }
      }
      if (smallest.length > 0) {
        let smallValue = Math.min(...smallest);
        let indes = arr.indexOf(smallValue);
        let temp = arr[i];
        arr[i] = arr[indes];
        arr[indes] = temp;
        count++;
      }
      smallest = [];
    }

    console.log(arr);
    return count;
  }
}
let swaparr = [7, 16, 14, 17, 6, 9, 5, 3, 18];
const objSolutionminswap = new Solutionminswap();
console.log(objSolutionminswap.minSwaps(swaparr));
