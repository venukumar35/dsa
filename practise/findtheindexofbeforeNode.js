class NodeIndex {
  indexOfBeforeNode() {
    let temp = head;

    for (let i = 1; i < index; i++) {
      temp = temp.next;
    }
    return temp.data;
  }
}

const objectNodeIndex = new NodeIndex();
console.log(objectNodeIndex.indexOfBeforeNode());
