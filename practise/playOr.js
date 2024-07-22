class play {
  constructor(arr) {
    this.arr = arr;
  }
  playWithor() {
    let array = [];
    for (let i = 0; i < this.arr.length; i++) {
      let data = this.arr[i] | this.arr[i + 1];
      array.push(data);
    }
    return array;
  }
  exor() {
    let a = 12;
    let b = 25;
    console.log(a ^ b);
    console.log(a & b);
    console.log(a | b);
    console.log(~a);
  }
}
const objectForplay = new play([10, 11, 1, 2, 3]);
console.log(objectForplay.exor());
console.log(objectForplay.playWithor());
