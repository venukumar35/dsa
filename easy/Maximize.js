class Maximize {
  constructor(arr) {
    this.arr = arr;
  }
  max() {
    let sum = 0;
    for (let i = 0; i < this.arr.length; i++) {
      let data = this.arr.sort((a, b) => {
        return a - b;
      });
      sum = sum + i * data[i];
    }
    console.log(sum);
  }
}
const ObjectForMaximize = new Maximize([5, 3, 2, 4, 1]);
console.log(ObjectForMaximize.max());
