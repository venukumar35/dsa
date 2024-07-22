class Pair {
  constructor(arr1, arr2) {
    (this.arr1 = arr1), (this.arr2 = arr2);
  }
  arrPair() {
    let arr1 = this.arr1;
    let arr2 = this.arr2;
    let sum = 5;
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] + arr2[j] == sum) {
          count++;
        }
      }
    }
    return count;
  }
}
const ObjectForPair = new Pair([1, 2, 3, 4], [5, 6, 7, 8]);
console.log(ObjectForPair.arrPair());
