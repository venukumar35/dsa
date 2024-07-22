class StackArray {
  constructor() {
    this.size = 20;
    this.top = null;
    this.array = new Array(this.size);
  }
  push(value) {
    let arraySize = this.size;
    let arr = this.array;
    let indexOfTop = arr.indexOf(this.top);

    if (indexOfTop == arr.length - 1) {
      arraySize = arraySize * 2;
    }

    if (this.top == null) {
      arr[0] = value;
      this.top = arr[0];
    } else {
      arr[indexOfTop + 1] = value;
      this.top = arr[indexOfTop + 1];
    }
    return this.top;
  }
  pop() {
    if (this.top == null) {
      return -1;
    }
    let temp = this.top;
    let newTop = this.array.indexOf(this.top);

    if (newTop == 0) {
      this.top = this.array[newTop];
      this.top = null;
    } else {
      this.top = this.array[newTop - 1];
    }
    return temp;
  }
}
const objectForStackArray = new StackArray();
console.log(objectForStackArray.pop());
console.log(objectForStackArray.push(2));
console.log(objectForStackArray.pop());
console.log(objectForStackArray.pop());
console.log(objectForStackArray.push(2));
console.log(objectForStackArray.pop());
console.log(objectForStackArray.pop());

// objectForStackArray.push(3);
// objectForStackArray.push(4);
// console.log(objectForStackArray.pop());
// objectForStackArray.push(5);
// console.log("k", objectForStackArray.push(2));
// console.log("p", objectForStackArray.pop());
// objectForStackArray.push(2);
// console.log(objectForStackArray.pop());

// objectForStackArray.push(7);
