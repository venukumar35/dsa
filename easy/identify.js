class Identify {
  constructor(arr) {
    this.arr = arr;
  }
  ident() {
    let data = this.arr;
    let arr = [...data].sort((a, b) => {
      return a - b;
    });

    console.log(data.indexOf(arr[0]));
  }
}
const ObjectForIdentify = new Identify([
  66, 67, 7, 10, 14, 19, 27, 33, 36, 40, 44, 54, 60,
]);
console.log(ObjectForIdentify.ident());
