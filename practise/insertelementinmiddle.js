class node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class InsertTheElement {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value, n) {
    const nodeObject = new node(value);

    if (this.head == null) {
      this.head = nodeObject;
      this.tail = nodeObject;
    }
    let count = 0;
    let data = head;

    while (head != null) {
      count++;
      data = data.next;
    }
    let countedNode = count / 2;

    let temp = this.tail;
    for (let i = 1; i <= countedNode; i++) {
      temp = temp.next;
    }
    let preve = temp.next;
    nodeObject.next = preve;
    temp.next = nodeObject;
  }
}
const objectInsertTheElement = new InsertTheElement();
console.log(objectInsertTheElement.insert());
