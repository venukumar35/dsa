class missingNumber {
  constructor(arr) {
    this.arr = arr;
  }
  num() {
    let array = this.arr;
    // let sort = array.sort((a, b) => a - b);
    // let start = 1;
    // for (let i = 0; i < sort.length; i++) {
    //   if (sort[i] == start) {
    //     start++;
    //   } else {
    //     return start;
    //   }
    // }
    // return start;

    let xor1 = 1;
    let xor2 = array[0];

    for (let i = 2; i <= array.length; i++) {
      xor1 = xor1 ^ i;
    }

    for (let i = 1; i < array.length - 1; i++) {
      xor2 = xor2 ^ array[i];
    }

    let str = "greeks";

    //  return xor1 ^ xor2;
  }
}
const ObjectFormissNumber = new missingNumber([1, 2, 3, 4, 5, 7]);
console.log(ObjectFormissNumber.num());
