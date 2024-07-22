class SolutionRope {
  minCost(arr, n) {
    arr.sort((a, b) => {
      return a - b;
    });

    // let count = 0;

    // let finalCount = 0;
    // console.log(arr);
    // for (let i = 0; i < arr.length - 1; i++) {
    //   if (count == 0) {
    //     count = arr[i] + arr[i + 1];
    //   } else {
    //     count = count + arr[i + 1];
    //   }
    //   console.log(count);
    //   finalCount = finalCount + count;
    //console.log(finalCount);
    let totalCost = 0;
    console.log(arr);
    // Loop until there's only one rope left
    while (arr.length > 1) {
      // Selecting the two smallest ropes
      let smallest1 = arr.shift();
      let smallest2 = arr.shift();

      // Combining the two ropes and adding their lengths to the total cost
      let combinedLength = smallest1 + smallest2;
      totalCost += combinedLength;
      //  console.log(combinedLength);
      // Adding the combined rope back to the array
      arr.push(combinedLength);
      //   console.log(arr);
      // Sorting the array again to maintain the order of smallest ropes
      arr.sort((a, b) => a - b);
    }

    return totalCost;
  }

  //  return finalCount;
}

const arrRope = [4, 2, 7, 6, 9];
const objectForRope = new SolutionRope();
console.log(objectForRope.minCost(arrRope));
