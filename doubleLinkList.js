class DoubleLinkListNode {
  constructor(node) {
    this.previous = null;
    this.node = node;
    this.next = null;
  }
}
class DoubleLinkList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }
  insertDounleLinkList(value) {
    const DoubleLinkListData = new DoubleLinkListNode(value);
    if (this.head == null) {
      this.head = DoubleLinkListData;
      this.tail = DoubleLinkListData;
    } else {
      this.tail.next = DoubleLinkListData;
      DoubleLinkListData.previous = this.tail;
      this.tail = DoubleLinkListData;
    }
  }
  displayDoubleLinklist() {
    let temp = this.head;
    if (temp != null) {
      temp = temp.next;
    }
  }
  DisplayReverseByusingPrevious() {
    let temp = this.tail;
    while (temp != null) {
      temp = temp.previous;
    }
  }
  insertAtPostion(data, indexPostionValue) {
    let temp = this.head;
    const NodeValue = new DoubleLinkListNode(data);

    for (let index = 1; index < indexPostionValue; index++) {
      temp = temp.next;
      NodeValue.next = temp.next;
      NodeValue.previous = temp;

      if (this.tail == temp) {
        this.tail = NodeValue; ///want to search not completed
        break;
      } else {
        temp.next.previous = NodeValue;
        temp.next = NodeValue;
      }
    }
  }
  deleteDoublelinklistAtHead(postion) {
    let temp = this.head;

    for (let index = 1; index < postion; index++) {
      if (postion == 1) {
        this.head = this.head.next;
        console.log(this.head);
        if (this.head == null) {
          this.tail = null;
        } else {
          this.head.previous = null;
        }
      }
    }
  }
  deleteNodeAtParticularPostion(postion) {
    let temp = this.head;

    let pre = null;

    for (let index = 0; index < postion; index++) {
      pre = temp;
      temp = temp.next;
      if (temp.next == null) {
        console.log("invalid postion index");
      }
    }
    pre.next = temp.next;
    if (temp.next == null) {
      this.tail = pre;
    } else {
      temp.next.previous = pre;
    }
  }

  DeleteAtEnd() {
    let temp = this.head;
    let pre = null;
    while (temp != null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
  }
}
const doubleObject = new DoubleLinkList();
doubleObject.insertDounleLinkList(1);
doubleObject.insertDounleLinkList(2);
doubleObject.insertDounleLinkList(3);
doubleObject.insertDounleLinkList(4);

doubleObject.insertAtPostion(7, 4);

doubleObject.displayDoubleLinklist();

doubleObject.deleteDoublelinklistAtHead(0);

doubleObject.deleteNodeAtParticularPostion();

doubleObject.DisplayReverseByusingPrevious();

doubleObject.DeleteAtEnd();
