class findLinkListIscircularorNot {
  findcircle() {
    let temp = head;
    if (temp != null) {
      let slow = head;
      let fast = head;

      while (slow != null && fast != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
          return "true ";
        }
      }
    }
    return "false";
  }
}
