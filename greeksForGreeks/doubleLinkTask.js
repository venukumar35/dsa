class DoubleNodeElement {
  constructor(node) {
    this.node = node;
    this.next = null;
    this.previous = null;
  }
}
class DoubleLink {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addElement(value) {
    const DoubleData = new DoubleNodeElement(value);
    if (this.head == null) {
      this.head = DoubleData;
      this.tail = DoubleData;
    } else {
      this.tail.next = DoubleData;
      DoubleData.previous = this.tail;
      this.tail = DoubleData;
    }
  }
  ReverseTheDoubleLinkList() {
    let temp = this.tail;
    while (temp != null) {
      console.log(temp.node);

      temp = temp.previous;
    }
  }
}
const objectDouble = new DoubleLink();
objectDouble.addElement(1);
objectDouble.addElement(3);
objectDouble.addElement(5);
objectDouble.addElement(7);

objectDouble.ReverseTheDoubleLinkList();
