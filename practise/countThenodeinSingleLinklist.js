class nodeData {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}
class CountLinkedListNode {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  countNode() {
    let count = 0;
    while (this.tail != null) {
      count++;
    }
    return +new Solution().getCount(head.next);
  }
}
const objectCountLinkedListNode = new CountLinkedListNode();
console.log(objectCountLinkedListNode.countNode());
