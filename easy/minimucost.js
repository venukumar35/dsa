class minimum {
  constructor(arr) {
    this.arr = arr;
  }
  min() {
    let arr = this.arr;
    let store = [];
    let sum = 0;
    let data = arr.sort((a, b) => {
      return a - b;
    });
    let count = 0;
    for (let i = 0; i < data.length - 1; i++) {
      sum = data[i] + data[i + 1];

      for (let j = i + 1; j <= data.length; j++) {
        if (sum > data[j]) {
          let temp = data[j + 1];
          data[j] = temp;
        } else {
          data[j - 1] = sum;
          break;
        }
      }
      store.push(sum);
      sum = 0;
    }
    count = store.reduce((acc, curr) => acc + curr, 0);
    console.log(count);
  }
}
const ObjectForminimum = new minimum([4, 2, 7, 6, 9]);
console.log(ObjectForminimum.min());
