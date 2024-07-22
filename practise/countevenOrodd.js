class evenOrOdd {
  constructor(arr) {
    this.arr = arr;
  }
  evenOrOdd() {
    let count = 0;
    let countOdd = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] % 2 == 0) {
        count++;
      } else {
        countOdd++;
      }
    }
    process.stdout.write(count + "" + countOdd);
    return { count, countOdd };
  }
}
const objectevenOrOdd = new evenOrOdd([1, 2, 3, 4, 5]);
console.log(objectevenOrOdd.evenOrOdd());
