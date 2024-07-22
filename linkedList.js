//implementing an node
class HeadNodeElement {
  constructor(node) {
    (this.HeadNode = node), (this.next = null);
  }
}

class LinkList {
  constructor(head = null) {
    this.head = head;
  }

  addElemeent(value) {
    const HeadNodeodeClassObject = new HeadNodeElement(value);

    // when the head is empty
    if (this.head == null) {
      //   console.log("enter into if");

      this.head = HeadNodeodeClassObject;
    } else {
      HeadNodeodeClassObject.next = this.head;
      this.head = HeadNodeodeClassObject;

      // console.log((HeadNodeodeClassObject.next = this.head));
    }
  }
  //Displaying elemnt in linkedlist
  display() {
    let temp = this.head;
    let count = 0;

    while (temp != null) {
      console.log("elements present in the first node :", temp);
      //   console.log("element of the pointer present in the next :", temp.next);

      count++;
      console.log(count, "count");

      temp = temp.next;
      break;
    }
    //processs need to work it out

    //     [Symbol.iterator]() {
    //   let temp = this.head;

    //   return {
    //     next() {
    //       if (!temp) {
    //         return {
    //           value: undefined,
    //           done: true
    //         };
    //       }

    //       const returnValue = {
    //         value: temp.data,
    //         done: false
    //       };

    //       temp = temp.next;
    //       return returnValue;
    //     }
    //   };
    // }
  }

  insertAtPostion(indexPostion, valueData) {
    const insertAtPOstionForThatCreateingAnLOad = new HeadNodeElement(
      valueData
    );
    let pre = null;
    let temp = this.head;
    if (indexPostion == 0) {
      console.log("if");
      this.addElemeent(valueData);
      return;
    }

    for (let index = 1; index <= indexPostion - 1; index++) {
      pre = temp;
      console.log("prives node :", pre);
      temp = temp.next;
      if (temp == null) {
        console.log("invalid index postion");
      }
    }

    insertAtPOstionForThatCreateingAnLOad.next = temp.next;
    temp.next = insertAtPOstionForThatCreateingAnLOad;
  }
  deletePostionElement(deletedPostionValue) {
    let temp = this.head;

    let periousNode = null;
    for (let index = 1; index <= deletedPostionValue; index++) {
      periousNode = temp; //keep tracking of pervious list
      temp = temp.next;
    }

    periousNode.next = temp.next;
  }

  reversingTheLinkedList() {
    let previous = null;
    let current = this.head;
    let next = this.head.next;
    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  getIndex(indexValue) {
    console.log("enetr");
    let temp = this.head;
    for (let index = 0; index <= indexValue; index++) {
      console.log(index);
      temp = temp.next;
    }
  }

  updateValue(indexValue, value) {
    let temp = this.head;
    for (let index = 0; index <= indexValue; index++) {
      console.log(index);
      temp = temp.next;

      temp.HeadNode = value;
    }
  }
}

const LinkListObject = new LinkList();

LinkListObject.addElemeent(5);
LinkListObject.addElemeent(10);
LinkListObject.addElemeent(15);
LinkListObject.addElemeent(20);
LinkListObject.addElemeent(25);
LinkListObject.addElemeent(30);

// LinkListObject.insertAtPostion(1, 90);
// LinkListObject.deletePostionElement(2);

// LinkListObject.reversingTheLinkedList();

// LinkListObject.getIndex(2);
// LinkListObject.updateValue(1, 2);
LinkListObject.display();
