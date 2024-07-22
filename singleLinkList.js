class Node {
  constructor(element) {
    this.node = element;
    this.next = null;
  }
}

class SingleLinkList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }
  insertElementAtBegining(beginingValue) {
    const dataForNode = new Node(beginingValue);
    if (this.head == null) {
      this.head = dataForNode;
      this.tail = dataForNode;
    } else {
      this.tail.next = dataForNode;
      this.tail = dataForNode;
    }
  }
  displayNode() {
    let temp = this.head;
    while (temp != null) {
      temp = temp.next;
      console.log(temp);
    }
  }

  insertAtPostion(indexPostionValue, InsertValue) {
    let temp = this.head;
    let pre = null;
    const insertDara = new Node(InsertValue);

    if (indexPostionValue == 0) {
      insertElementAtBegining(InsertValue);
    }

    for (let index = 1; index < indexPostionValue; index++) {
      temp = temp.next;

      insertDara.next = temp.next;
      // console.log("insert data next", insertDara.next);

      temp.next = insertDara;
      //   console.log("previous data next", temp.next);
      break;
      if (temp == null) {
        console.log("invalid index postion");
      }
    }
  }
  deleteAtPostion(indexDataValue) {
    let temp = this.head;
    let previous = null;
    for (let index = 1; index < indexDataValue; index++) {
      previous = temp;
      temp = temp.next;
    }
    previous.next = temp.next;
  }
  getIndexPostionValue(IndexPostionValue) {
    let temp = this.head;

    for (let index = 1; index < IndexPostionValue; index++) {
      temp = temp.next;
    }
  }
  UpdateValueForParticularPostionIndex(IndexPostionValue, value) {
    const NodeData = new Node();
    let temp = this.head;
    for (let index = 1; index < IndexPostionValue; index++) {
      temp = temp.next;
    }
    temp.node = value;
  }
  reverseLinkedListElement() {
    let previous = null;

    let current = this.head;

    let next = null;

    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = null;
  }
}

const objectForSinglelistLink = new SingleLinkList();

objectForSinglelistLink.insertElementAtBegining(1);
objectForSinglelistLink.insertElementAtBegining(2);
// objectForSinglelistLink.insertElementAtBegining(3);
objectForSinglelistLink.insertElementAtBegining(4);
objectForSinglelistLink.insertElementAtBegining(5);
objectForSinglelistLink.insertElementAtBegining(6);

// objectForSinglelistLink.insertAtPostion(3, 8);
// objectForSinglelistLink.deleteAtPostion(4);

// objectForSinglelistLink.getIndexPostionValue(3);
// objectForSinglelistLink.UpdateValueForParticularPostionIndex(2, 9);
objectForSinglelistLink.reverseLinkedListElement();
objectForSinglelistLink.displayNode();
