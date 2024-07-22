class SolutionPartition {
  //Function to partition the array around the range such
  //that array is divided into three parts.
  threeWayPartition(arr, a, b) {
    let n = arr.length;
    let start = 0,
      end = n - 1;

    // Traverse elements from beginning
    for (let i = 0; i <= end; ) {
      // If current element is smaller than a,
      // swap it with start element
      if (arr[i] < a) {
        let temp = arr[i];
        arr[i] = arr[start];
        arr[start] = temp;
        start++;
        i++;
      }
      // If current element is greater than b,
      // swap it with end element
      else if (arr[i] > b) {
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end--;
      }
      // If current element is between a and b,
      // move forward
      else {
        i++;
      }
    }
    console.log(arr);
  }
}
const triArr = [7, 10, 4, 10, 9, 4, 2, 8, 5, 4, 10];
const objectForTri = new SolutionPartition();
console.log(objectForTri.threeWayPartition(triArr, 4, 8));
