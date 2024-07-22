//Find the linkedList ha an circle are not
class task {
  findCircliInlinkList() {
    let slow = this.head;
    let fast = this.head;

    while (this.fast != null && this.fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
}

//Finding the first postion of the circle in the linkedList
class findFirstPostion {
  find() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        slow = head;
        while (slow != fast) {
          slow = slow.next;
          fast = fast.next;
        }
        return slow;
      }
    }
  }
}
//Removing an circular loop in linkelist
class findFirstPostion {
  find() {
    let slow = this.head;
    let fast = this.head;
    let pre = nu;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        slow = head;
        while (slow != fast) {
          pre = fast;
          slow = slow.next;
          fast = fast.next;
        }
        pre.next = null;
        return slow;
      }
    }
  }
}
