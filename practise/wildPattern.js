class duplicateNumber {
  constructor(arr) {
    this.arr = arr;
  }
  dupli() {
    let a = this.arr;
    let mapCount = new Map();
    let store = [];
    for (let i = 0; i < a.length; i++) {
      let getData = mapCount.get(a[i]) || 0;
      if (getData == 1) {
        store.push(a[i]);
      }
      let data = mapCount.set(a[i], getData + 1);
    }
    return store.length == 0 ? -1 : store.join(" ");
  }
}
const Object = new duplicateNumber([2, 3, 1, 2, 3]);
console.log(Object.dupli());
