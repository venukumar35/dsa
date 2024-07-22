class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.heigth = 0;
  }
}

class BinarySearch {
  constructor() {
    this.rootNode = null;
  }

  insertData(ele) {
    this.rootNode = this.insertDataIntoMiddle(this.rootNode, ele);
  }
  GetHeightOfTheNode(node) {
    if (node == null) {
      return -1;
    }
    return node.heigth;
  }
  max(height1, height2) {
    return height1 > height2 ? height1 : height2;
  }

  GetBalanceFactorOfNode(node) {
    if (node == null) {
      return 0;
    }
    return (
      this.GetHeightOfTheNode(node.left) - this.GetHeightOfTheNode(node.right)
    );
  }

  RigthRotate(nodeData) {
    const nodeOfLeft = nodeData.left;
    const t3 = nodeData.right;

    nodeOfLeft.right = nodeData;
    nodeData.right = t3;

    nodeData.height = this.max(
      this.GetHeightOfTheNode(nodeData.left),
      this.GetHeightOfTheNode(nodeData.right) + 1
    );
    nodeOfLeft.height = this.max(
      this.GetHeightOfTheNode(nodeOfLeft.left),
      this.GetHeightOfTheNode(nodeOfLeft.right) + 1
    );
    return nodeOfLeft;
  }

  LeftRotate(nodeData) {
    const nodeOfRight = nodeData.right;
    const t3 = nodeData.left;

    nodeOfRight.left = nodeData;
    nodeData.right = t3;

    nodeData.height = this.max(
      this.GetHeightOfTheNode(nodeData.left),
      this.GetHeightOfTheNode(nodeData.right) + 1
    );
    nodeOfLeft.height = this.max(
      this.GetHeightOfTheNode(nodeOfRight.left),
      this.GetHeightOfTheNode(nodeOfRight.right) + 1
    );
    return nodeOfRight;
  }

  insertDataIntoMiddle(nodeData, ele) {
    if (nodeData == null) {
      const newData = new node(ele);
      return newData;
    }
    if (ele < nodeData.data) {
      nodeData.left = this.insertDataIntoMiddle(nodeData.left, ele);
    } else if (ele > nodeData.data) {
      nodeData.right = this.insertDataIntoMiddle(nodeData.right, ele);
    } else {
      return nodeData;
    }
    node.heigth =
      1 + this.max(this.GetHeightOfTheNode(nodeData.left, nodeData.right));

    const balanceData = this.GetBalanceFactorOfNode(nodeData);

    if (balanceData > 1 && nodeData.left.data < ele) {
      return this.RigthRotate(nodeData);
    }
    if (balanceData > 1 && nodeData.left.data > ele) {
      nodeData.left = this.LeftRotate(nodeData.left);
      return this.RigthRotate(nodeData);
    }
    if (balanceData < -1 && nodeData.right.data < ele) {
      return this.LeftRotate(nodeData);
    }
    if (balanceData < -1 && nodeData.right.data > ele) {
      nodeData.right = this.RigthRotate(nodeData.right);
      return this.LeftRotate(nodeData);
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
