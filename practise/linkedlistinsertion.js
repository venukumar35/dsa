class node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class insertionINLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertvale(value) {
    const objectForNodePractise = new node(value);
    if (this.head == null) {
      this.head = objectForNodePractise;
      this.tail = objectForNodePractise;
    } else {
      this.tail.next = objectForNodePractise;
      this.tail = objectForNodePractise;
    }
  }
  insertAtfirst(value) {
    const objectForNodePractise = new node(value);
    let temp = this.head;

    if (this.head == null) {
      this.head = objectForNodePractise;
      this.tail = objectForNodePractise;
    }
    objectForNodePractise.next = temp;
    this.head = objectForNodePractise;
    // console.log(this.head);
  }
  insertAtEnd(value) {
    const objectForNodePractise = new node(value);

    this.tail.next = objectForNodePractise;
    // console.log(this.tail);
  }
  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.node);

      temp = temp.next;
    }
  }
}
const objectinsertionINLinkedList = new insertionINLinkedList();
objectinsertionINLinkedList.insertvale([1]);
objectinsertionINLinkedList.insertvale([11]);
objectinsertionINLinkedList.insertvale([12]);
objectinsertionINLinkedList.insertAtfirst([1000]);
objectinsertionINLinkedList.insertAtEnd([30000]);
console.log(objectinsertionINLinkedList.display());
