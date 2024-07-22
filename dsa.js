class HeadNodeElementData {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class LinkListData {
  constructor(head = null) {
    this.head = head;
  }

  add(nodeData) {
    const HeadNodeElementObject = new HeadNodeElementData(nodeData);

    //CHECKING IF THE HEAD IS NULL OR NOT ....IF THE HEAD IS NULL IT MEAN IT IS EMPTY OR ELSE IT HAS AN DATA INSIDE IT
    if (this.head == null) {
      console.log("enter into if");

      this.head = HeadNodeElementObject;
      console.log("value for the head node ", this.head);
    } else {
      // HEAD HAS NOT EMPTY MEANS
      HeadNodeElementObject.next = this.head;
      this.head = HeadNodeElementObject;
      console.log("enter");
    }
  }

  elementDisplay() {
    let temp = this.head;

    while (temp != null) {
      console.log("elements present in the first node :", temp.node);
      //   console.log("element of the pointer present in the next :", temp.next);
      temp = this.next;
    }
  }

  insertingPostionAtParticularIndex(indexPostion, valueFromIndexPostion) {
    const insertPostionNodeCreation = new HeadNodeElementData(
      this.insertingPostionAtParticularIndex
    );
    let temp = this.head;

    if (indexPostion == o) {
      this.add(valueFromIndexPostion);
      return;
    }

    for (let index = 1; index <= indexPostion - 1; index++) {
      temp = temp.next;
    }

    insertPostionNodeCreation.next = temp.next;
    temp.next = insertPostionNodeCreation;
  }

  deleteNode(postionIndexDeletednode) {
    let temp = this.head;
    let perviousNode = null;

    if (this.head == null) {
      console.log("head is empty");
    }

    if (postionIndexDeletednode == 0) {
      this.head = this.head.next;

      return;
    }

    for (let index = 1; index <= postionIndexDeletednode; index++) {
      perviousNode = temp;

      temp = temp.next;
    }
    perviousNode.next = temp.next;
  }

  reversingTheLinkList() {
    let previous = null;
    let current = this.head;
    let next = this.head.next;

    while (current != null) {
      next = this.head.next;
      current.next = previous;
      previous = current;
      current = next; //jump to next node
    }
    this.head = previous;
  }
}

const LinkListObj = new LinkListData();

LinkListObj.add(5);
LinkListObj.add(10);
LinkListObj.add(15);
LinkListObj.add(20);
LinkListObj.add(25);
LinkListObj.add(30);

// LinkListObj.insertingPostionAtParticularIndex();
// LinkListObj.insertingPostionAtParticularIndex(1, 80);
LinkListObj.deleteNode(2);
LinkListObj.elementDisplay();
LinkListObj.reversingTheLinkList();
