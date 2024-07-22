class eqlibrum {
  constructor(arr) {
    this.arr = arr;
  }
  equli() {
    let array = this.arr;
    if (array.length == 1) {
      return 1;
    }
    // let mid = Math.floor(array.length / 2);
    // let sum = 0;
    // let sum2 = 0;
    // for (let z = 0; z < array.length; z++) {
    //   let startingTimeForMidAfter = 0;
    //   let startingTimeForMidBefore = 0;
    //   let start = array.slice(0, mid);
    //   let end = array.slice(mid + 1);
    //   for (let i = 0; i < start.length + end.length; i++) {
    //     if (startingTimeForMidBefore < start.length) {
    //       sum = sum + start[startingTimeForMidBefore];
    //     }
    //     if (startingTimeForMidAfter < end.length) {
    //       sum2 = sum2 + end[startingTimeForMidAfter];
    //     }
    //     startingTimeForMidAfter++;
    //     startingTimeForMidBefore++;
    //   }
    //   if (sum == sum2) {
    //     return mid + 1;
    //   }
    //   if (mid >= 0) {
    //     mid--;
    //   }
    //   if (mid == -1 && mid <= array.length) {
    //     mid = Math.floor(array.length / 2);
    //     mid++;
    //   }
    //   sum = 0;
    //   sum2 = 0;
    // }
    // return -1;
    let totalSum = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    let leftSum = 0;

    for (let i = 0; i < array.length; i++) {
      totalSum = totalSum - array[i];
      if (leftSum === totalSum) {
        return i + 1;
      }
      leftSum = leftSum + array[i];
    }
  }
}
const ObjectForeqli = new eqlibrum([8, 8, 3, 7, 8, 2, 7, 2]);
console.log(ObjectForeqli.equli());
