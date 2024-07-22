class Stack {
  constructor() {
    this.inde_size_value = 10;
    this.array = new Array(this.inde_size_value);
    this.topIndex = -1;
  }
  push(value) {
    if (this.topIndex == this.inde_size_value - 1) {
      console.log("no sapce stack is all ready full");
    }
    this.array[++this.topIndex] = value;
    console.log(this.array);
  }

  pop() {
    if (this.topIndex == -1) {
      console.log("empty stack");
    }
    // console.log(this.array[this.topIndex--]);
    return this.array[this.topIndex--];
  }
  peek() {
    console.log(this.array[this.topIndex]);

    return this.array[this.topIndex];
  }
}
const stackObject = new Stack();
stackObject.push(2);
stackObject.push(4);
stackObject.push(6);
stackObject.push(8);
stackObject.pop();
stackObject.peek();
