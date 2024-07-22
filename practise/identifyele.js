class identify {
  constructor(arr, n) {
    this.array = arr;
    this.n = n;
  }
  identy() {
    let data = this.array.includes(this.n);
    if (data) {
      return this.array.indexOf(this.n);
    }
    return -1;
  }
}
const objectIdenty = new identify([1, 2, 3, 4, 5], 4);
console.log(objectIdenty.identy());
