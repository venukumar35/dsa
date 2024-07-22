class zeroClass {
  constructor(arr) {
    this.arr = arr;
  }
  sort() {
    let arr = this.arr;
    let nonZeroIndex = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        // Swap non-zero element with the element at nonZeroIndex
        [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
        nonZeroIndex++;
      }
    }

    return arr;
  }
}
const ObjectForzeroClass = new zeroClass([0, 0, 0, 3, 1, 4]);
console.log(ObjectForzeroClass.sort());
