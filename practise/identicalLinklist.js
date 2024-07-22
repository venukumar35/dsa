class identicalLinkList {
  identical() {
    let head1link = head;
    let head2link = heads;

    while (head1link != null && head2link != null) {
      head1 = head.next;
      head2 = head.next;

      if (head1.data == head2.data) {
        return true;
      }
    }

    return false;
  }
}
