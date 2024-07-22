class duplicateUndercons {
  constructor(arr) {
    this.arr = arr;
  }
  constriant() {
    let array = this.arr;
    console.log(BigInt(7) / BigInt(7));

    for (let i = 0; i < array.length; i++) {
      if (array[i] == array[i + 1]) {
        return array[i];
      }
    }
  }
}
const ObjectForduplicateUndercons = new duplicateUndercons([
  1, 1, 1, 1, 1, 5, 7, 10, 20, 30,
]);
console.log(ObjectForduplicateUndercons.constriant());
