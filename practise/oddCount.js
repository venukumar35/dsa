class oddCount {
  constructor(arr) {
    this.array = arr;
  }
  count() {
    // let removeDulicate = new Set(this.array);
    // let repectedCountArray = [];
    // let arrayOfremoveDulicate = [...removeDulicate];
    // for (let i = 0; i < arrayOfremoveDulicate.length; i++) {
    //   let repectedCount = 0;
    //   for (let j = 0; j < this.array.length; j++) {
    //     if (arrayOfremoveDulicate[i] == this.array[j]) {
    //       repectedCount++;
    //     }
    //   }
    //   repectedCountArray.push(repectedCount);
    //   repectedCount = 0;
    // }
    // let temp = 0;
    // for (let k = 0; k < repectedCountArray.length; k++) {
    //   if (repectedCountArray[k] % 2 != 0) {
    //     if (repectedCountArray[k] > temp) {
    //       temp = repectedCountArray[k];
    //     }
    //   }
    // }
    // let index = repectedCountArray.indexOf(temp);
    // let findNumber = arrayOfremoveDulicate[index];
    // return findNumber;
    let result = 0;
    for (let i = 0; i < this.array.length; i++) {
      result ^= this.array[i];
    }
    // console.log(result);
    return result;
  }
}
const objectoddCount = new oddCount([
  468, 335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 282, 828, 962, 492,
  996, 943, 828, 437, 392, 605, 943, 468, 335, 501, 170, 725, 479, 359, 963,
  465, 706, 146, 282, 828, 962, 492, 996, 943, 828, 437, 392, 605, 777, 888,
]);
console.log(objectoddCount.count());
