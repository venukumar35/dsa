class stackPractise {
  constructor(arr) {
    this.arr = arr;
  }
  stack() {
    let data = this.arr;

    let top = null;
    let start = 0;
    let store = [];
    let storedData = [];

    while (start < data.length) {
      top = data[start];
      store[start] = data[start];
      start++;
    }
    let storedata = data.indexOf(top);
    while (storedata >= 0) {
      storedData.push(top);
      top = data[--storedata];
    }
    return storedData.join(" ");
  }

  pop() {
    let store = [];
    let top = this.arr[this.arr.length - 1];
    let indexOftop = this.arr.indexOf(top);
    while (indexOftop >= 0) {
      store.push(top);
      top = this.arr[--indexOftop];
    }
    return store.join(" ");
  }
}
const ObjectForstack = new stackPractise([1, 2, 3, 4, 5]);
console.log(ObjectForstack.stack());
console.log(ObjectForstack.pop());
