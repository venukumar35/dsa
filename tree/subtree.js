class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  isSubTree(T, S) {
    // Empty tree is a subtree of any tree
    if (S === null) return true;
    // If T is empty and S is not, S can't be a subtree
    if (T === null) return false;

    // Stack for iterative traversal
    const stack = [T];

    // Perform iterative preorder traversal
    while (stack.length > 0) {
      const node = stack.pop();
      //console.log("node data",node)
      // Check if the current subtree rooted at node is identical to S
      if (this.isIdentical(node, S)) return true;

      // Push left and right child nodes to stack
      if (node.right !== null) stack.push(node.right);
      if (node.left !== null) stack.push(node.left);
    }

    return false;
  }

  isIdentical(T, S) {
    // Base cases
    if (T === null && S === null) return true; // Both trees are empty
    if (T === null || S === null) return false; // One tree is empty but not the other

    // Stack for iterative traversal
    const stackT = [T];
    const stackS = [S];
    console.log(stackT);
    // Perform iterative preorder traversal
    while (stackT.length > 0 && stackS.length > 0) {
      const nodeT = stackT.pop();
      const nodeS = stackS.pop();

      // Check if the current nodes are equal
      if (nodeT.data !== nodeS.data) return false;

      // Push left and right child nodes to stacks
      if (nodeT.right !== null) stackT.push(nodeT.right);
      if (nodeS.right !== null) stackS.push(nodeS.right);
      if (nodeT.left !== null) stackT.push(nodeT.left);
      if (nodeS.left !== null) stackS.push(nodeS.left);
    }

    // Both stacks should be empty if trees are identical
    return stackT.length === 0 && stackS.length === 0;
  }
}

// Example usage:

// Construct tree T
const rootT = new TreeNode(1);
rootT.left = new TreeNode(2);
rootT.right = new TreeNode(3);
rootT.left.left = new TreeNode(4);
rootT.left.right = new TreeNode(5);

// Construct tree S
const rootS = new TreeNode(2);
rootS.left = new TreeNode(4);
rootS.right = new TreeNode(5);

// Create an instance of Solution
const solution = new Solution();

// Check if S is a subtree of T
console.log(solution.isSubTree(rootT, rootS)); // Output: true
