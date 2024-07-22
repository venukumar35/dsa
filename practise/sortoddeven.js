class sortOdd {
  constructor(arr) {
    this.arr = arr;
  }
  sort() {
    let storeeven = [];
    let storeOdd = [];
    let data = this.arr;
    for (let i = 0; i < this.arr.length; i++) {
      if (data[i] % 2 == 0) {
        storeeven.push(data[i]);
      } else {
        storeOdd.push(data[i]);
      }
    }
    let even = storeeven.sort((a, b) => {
      return a - b;
    });
    let odd = storeOdd.sort((a, b) => {
      return a - b;
    });

    return [...even, ...odd];
  }
}
const ObjectForsortOdd = new sortOdd([0, 1, 2, 3, 4]);
console.log(ObjectForsortOdd.sort());
