class SortIndescending {
  constructor(str, l, r) {
    this.str = str;
    this.l = l;
    this.r = r;
  }
  SortIndesce() {
    let array = this.str;
    let data = this.l - 1;
    let temp;
    for (let i = this.r - 1; i >= this.l - 1; i--) {
      if (data < i) {
        temp = array[data];
        array[data] = array[i];
        array[i] = temp;
        data++;
      }
    }
    console.log(this.str);
  }
}
const ObjectForSortIndescending = new SortIndescending(
  [1, 2, 3, 4, 5, 6, 7],
  2,
  4
);

// const ObjectForSortIndescending = new SortIndescending("geeks");
console.log(ObjectForSortIndescending.SortIndesce());
