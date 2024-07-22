class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearch {
  constructor() {
    this.rootNode = null;
  }

  insertData(ele) {
    this.rootNode = this.insertDataIntoMiddle(this.rootNode, ele);
  }

  insertDataIntoMiddle(nodeData, ele) {
    if (nodeData == null) {
      const newData = new node(ele);
      return newData;
    }
    if (ele < nodeData.data) {
      nodeData.left = this.insertDataIntoMiddle(nodeData.left, ele);
    } else {
      nodeData.right = this.insertDataIntoMiddle(nodeData.right, ele);
    }
    return nodeData; // Return the modified nodeData
  }

  traversalTree(node) {
    if (node != null) {
      this.traversalTree(node.left);
      console.log(node.data);
      this.traversalTree(node.right);
    }
  }
  search(node, ele) {
    if (node === null || node.data === ele) {
      return node;
    }

    if (ele < node.data) {
      return this.search(node.left, ele);
    } else {
      return this.search(node.right, ele);
    }
  }
  min(value) {
    let minValueOfRigthNode = value;
    while (value.left != null) {
      minValueOfRigthNode = value.rigth.data;
      value = value.left;
    }
    return minValueOfRigthNode;
  }

  DeleteTreeNode(node, ele) {
    if (node == null) {
      return node;
    }

    if (ele > node.data) {
      node.right = this.DeleteTreeNode(node.right, ele);
    } else if (ele < node.data) {
      node.left = this.DeleteTreeNode(node.left, ele);
    } else {
      if (node.right == null) {
        return node.left;
      } else if (node.left == null) {
        return node.right;
      }
      node.data = this.min(node.left);
      node.right = this.DeleteTreeNode(node.right, node.data);
    }
  }
}

const objectForBinary = new BinarySearch();
objectForBinary.insertData(10);
objectForBinary.insertData(5);
objectForBinary.insertData(15);
objectForBinary.insertData(3);
objectForBinary.insertData(8);
objectForBinary.insertData(12);

objectForBinary.traversalTree(objectForBinary.rootNode);

if (objectForBinary.search(objectForBinary.rootNode, 10) == null) {
  console.log("not fount");
} else {
  console.log("fount");
}

objectForBinary.DeleteTreeNode();

objectForBinary.traversalTree(objectForBinary.rootNode);
