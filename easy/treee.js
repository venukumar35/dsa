class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

class SolutionTree {
  constructor() {
    this.rootNode = null;
  }

  buildTree(inorder, preorder, n) {
    let arrayConcat = inorder.concat(preorder);
    let setData = new Set(arrayConcat);
    let arr = Array.from(setData);

    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      this.rootNode = this.insert(this.rootNode, arr[i]);
    }

    let arrayElement = [];
    console.log(this.rootNode);
    let data = this.postOrder(this.rootNode, arrayElement);

    console.log(data);
  }

  insert(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (node.key < key) {
      node.right = this.insert(node.right, key);
    } else if (node.key > key) {
      node.left = this.insert(node.left, key);
    }

    return node;
  }

  postOrder(node, arr) {
    if (node === null) {
      return;
    }

    this.postOrder(node.left, arr);
    this.postOrder(node.right, arr);
    arr.push(node.key);

    return arr;
  }
}

const arrTree = [1, 6, 8, 7];
const arrTree1 = [1, 6, 7, 8];
const ObjectForTree = new SolutionTree();
ObjectForTree.buildTree(arrTree, arrTree1);
