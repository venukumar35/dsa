class QueueUsingLinkedListNode {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rare = null;
  }
  enQueue(value) {
    const QueueUsingLinkedListNodeObject = new QueueUsingLinkedListNode(value);
    if (this.front == null || this.rare == null) {
      this.front = QueueUsingLinkedListNodeObject;
    }
    this.rare.next = QueueUsingLinkedListNodeObject;
    this.rare = QueueUsingLinkedListNodeObject;
  }
  deQueue() {
    if (this.front == null) {
      console.log("list is empty");
    }
    let temp = this.front.node;
    this.front = this.front.next;
    if (this.front == null) {
      this.rare = null;
    }
    return temp;
  }
}
const QueueLinkedListObject = new QueueLinkedList();
