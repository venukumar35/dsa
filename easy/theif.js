class SolutionTeif {
  //Function to find the maximum money the thief can get.
  findMaxSum(arr, n) {
    let data = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count = arr[i];
      for (let j = i; j < arr.length; j++) {
        if (j % 2 == 0 && j + 2 < arr.length && i % 2 == 0) {
          count = count + arr[j + 2];
        } else if (j % 2 != 0 && j + 2 < arr.length && i % 2 != 0) {
          count = count + arr[j + 2];
        }
      }

      data.push(count);
      count = 0;
    }
    console.log(data);
    return Math.max(...data);
  }
}
const thArray = [9, 4, 11, 12, 6, 12];
const SolutionTeifObj = new SolutionTeif();
console.log(SolutionTeifObj.findMaxSum(thArray, 9));
