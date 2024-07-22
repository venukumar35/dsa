class Party {
  constructor(arr) {
    this.arr = arr;
  }
  findParty() {
    let mapCount = new Map();
    let array = this.arr;
    let count;
    for (let i = 0; i < array.length; i++) {
      let getData = mapCount.get(array[i]) || 0;
      if (getData != 0) {
        return "BOYS";
      }
      count = mapCount.set(array[i], getData + 1);
    }
    return "GIRLS";
  }
}
const ObjectForParty = new Party([1, 2, 3, 4, 7]);
console.log(ObjectForParty.findParty());
