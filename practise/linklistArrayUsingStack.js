class StackList {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class LinkedListUsingStack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const objectForStackList = new StackList(value);
    if (this.top == null) {
      this.top = objectForStackList;
    } else {
      let temp = this.top;
      this.top = objectForStackList;
      objectForStackList.next = temp;
    }
    return this.top;
  }
  pop() {
    let temp = this.top;
    this.top = temp.next;
    return temp.node;
  }
  //   display() {
  //     let temp = this.top;
  //     while (temp != null) {
  //       temp = this.top.next;
  //     }
  //     return temp;
  //   }
}

const objectLinkedListUsingStack = new LinkedListUsingStack();
console.log(objectLinkedListUsingStack.push(1));
console.log(objectLinkedListUsingStack.push(3));
console.log(objectLinkedListUsingStack.push(5));

console.log(objectLinkedListUsingStack.pop());
// console.log("data", objectLinkedListUsingStack.display());
