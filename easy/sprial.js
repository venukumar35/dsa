class Solution88 {
  //Function to return a list of integers denoting spiral traversal of matrix.
  spirallyTraverse(matrix, r, c) {
    console.log(matrix);
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        console.log(matrix[x][y]);
      }
    }
  }
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const Objectsolua1 = new Solution88();
console.log(Objectsolua1.spirallyTraverse(arr, 4, 4)); // Output: 0
