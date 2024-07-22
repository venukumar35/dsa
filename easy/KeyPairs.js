class keyPairs {
  constructor(arr, k) {
    this.arr = arr;
    this.k = k;
  }
  pairs() {
    let arr = this.arr;
    let data = arr.filter((e) => {
      if (e <= this.k) {
        return e;
      }
    });
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      let sum = this.k - arr[i];

      let fin = data.filter((e) => {
        if (e == sum) {
          count++;
        }
        return count;
      });

      if (fin.length != 0) {
        return "yes";
      }
      count = 0;
    }
    return "No";
  }
}
const ObjectForkeyPairs = new keyPairs(
  [
    335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 282, 828, 962, 492, 996,
    943, 828, 437, 392, 605, 903, 154, 293, 383, 422, 717, 719, 896, 448, 727,
    772, 539, 870, 913, 668, 300, 36, 895, 704, 812, 323, 334,
  ],
  468
);
console.log(ObjectForkeyPairs.pairs());
