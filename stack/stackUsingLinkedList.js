class NodeForStack {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class LinkedListStack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const NodeForStackObject = new NodeForStack(value);
    NodeForStackObject.next = this.top;
    this.top = NodeForStackObject;
  }
  pop() {
    if (this.top == null) {
      console.log("no value");
    }
    let temp = this.top.node;
    this.top = temp.next;
    return temp;
  }
}
const linkedStackObject = new LinkedListStack();
linkedStackObject.push(2);
