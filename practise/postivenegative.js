class PostiveAndNegative {
  constructor(arr) {
    this.arr = arr;
  }
  posNeg() {
    let arr = this.arr;
    let store = [];
    let neg = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        store.push(arr[i]);
      } else {
        neg.push(arr[i]);
      }
    }
    let data = [];
    for (let z = 0; z < neg.length; z++) {
      if (z < store.length) {
        data.push(store[z]);
      }
      if (z < neg.length) {
        data.push(neg[z]);
      }
    }
    return data;
  }
}
const ObjectForPostiveNegative = new PostiveAndNegative([-1, 2, -3, 4, -5, 6]);
console.log(ObjectForPostiveNegative.posNeg());
