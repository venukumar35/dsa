class NodeElements {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.rootNode = null;
  }

  insertBinaryElement(ele) {
    let objectForNode = new NodeElements(ele);

    if (this.rootNode == null) {
      this.rootNode = objectForNode; // Assign the entire node object
      console.log(ele);
    } else {
      this.insertNode(this.rootNode, ele);
    }
  }

  insertNode(node, ele) {
    let newLeftNode = new NodeElements(ele);

    if (node.left == null) {
      node.left = newLeftNode;
    } else {
      if (node.right == null) {
        node.right = newLeftNode;
      }
    }
  }
  inOderNode(node = this.rootNode) {
    if (node != nill) {
      this.inOderNode(node.left);
      console.log(node.data);
      this.inOderNode(node.right);
    }
  }
}

const binaryObject = new BinaryTree();
console.log(binaryObject.insertBinaryElement(5));
console.log(binaryObject.insertBinaryElement(25));
console.log(binaryObject.insertBinaryElement(55));
console.log(binaryObject.insertBinaryElement(56));
console.log(binaryObject.insertBinaryElement(57));
console.log(binaryObject.insertBinaryElement(58));
