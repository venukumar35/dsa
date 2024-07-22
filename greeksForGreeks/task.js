class NodeElement {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class LinkedListTask {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNode(value) {
    value.map((ele) => {
      const nodeData = new NodeElement(ele);

      if (this.head == null) {
        this.head = nodeData;
        this.tail = nodeData;
      } else {
        this.tail.next = nodeData;
        this.tail = nodeData;
      }
    });
  }
  countingRepeatedNumber(value) {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      if (temp.node == value) {
        temp = temp.next;
        count++;
        console.log("counted value", count);

        console.log("value", temp.node);
      }
    }
  }
  searchTheElement(value) {
    let temp = this.head;
    while (temp != null) {
      temp = temp.next;
      if (temp.node == value) {
        console.log("data fined", temp.node);
      }
    }
  }
}
const objectForLinkedList = new LinkedListTask();
objectForLinkedList.addNode([1, 2]);
// objectForLinkedList.countingRepeatedNumber(1);
objectForLinkedList.searchTheElement(2);
