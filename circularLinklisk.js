class nodeElementData {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class CircularLinkList {
  constructor() {
    this.last = null;
    this.tail = null;
  }
  add(value) {
    const nodeElement = new nodeElementData(value);
    if (this.last == null) {
      nodeElement.next = nodeElement;
      this.last = nodeElement;
      this.tail = nodeElement;
    } else {
      nodeElement.next = this.tail;
      this.tail.next = nodeElement;
    }
  }
  insertElementAtLastNode(value) {
    const nodeElement = new nodeElementData(value);

    if (this.last == null) {
      nodeElement.next = nodeElement;
      this.last = nodeElement;
      this.tail = nodeElement;
    } else {
      nodeElement.next = this.tail;
      this.tail.next = nodeElement;
      this.last = nodeElement;
      this.tail = nodeElement;
    }
  }
  displayCircularLinkList() {
    let temp = this.last.next;
    do {
      console.log(temp);

      temp = temp.next;
    } while (temp != this.last.next);
  }
  deletetheFirstCircularNode() {
    if (this.last == null) {
      console.log("empty array");
    }
    if (this.tail.next == this.last) {
      this.last = null;
      this.tail = null;
    } else {
      this.tail.next = this.tail.next.next;
    }
  }
  //   deleteTheLastNodeInCircularList() {
  //     if (this.last == null) {
  //       console.log("empty array");
  //     }
  //     if (this.tail.next == this.last) {
  //       this.last = null;
  //       this.tail = null;
  //     } else {
  //       let temp = this.tail.next;
  //       let pre = null;
  //       while (temp.next != this.last) {
  //         temp = temp.next;
  //       }
  //       temp.next=
  //       this.last = temp;
  //       this.tail = temp;
  //     }
  //   }
}
const objectForCircular = new CircularLinkList();
objectForCircular.add(1);
objectForCircular.add(1);
objectForCircular.add(1);
objectForCircular.add(1);
objectForCircular.add(1);

objectForCircular.insertElementAtLastNode(2);

objectForCircular.deletetheFirstCircularNode();

// objectForCircular.deleteTheLastNodeInCircularList();

objectForCircular.displayCircularLinkList();
