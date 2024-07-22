class AlternativeDeleteNode {
  constructor(head) {
    this.head = head;
  }

  delete() {
    let current = head;
    let count = 0;
    let temp;
    while (current != null) {
      temp = current;
      count++;
      current = current.next;

      if (count % 2 == 0 && current != null) {
        temp.next = current.next;
      }
    }
  }
}
