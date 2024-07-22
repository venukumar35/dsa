class Solutionmatrix {
  //Function to find if there is a celebrity in the party or not.
  //   celebrity(M, n) {
  //     let ceb = -1;
  //     for (let i = 0; i < M.length; i++) {
  //       for (let j = 0; j < M.length; j++) {
  //         for (let x = j + 1; x < M[j].length; x++) {
  //           if (M[x][j] == 0 && M[i][j] == 0) {
  //             return 1;
  //           }
  //         }
  //       }
  //     }
  //     return ceb;
  //   }
  celebrity(M, n) {
    for (let i = 0; i < n; i++) {
      let isCelebrity = true;
      for (let j = 0; j < n; j++) {
        // console.log(M[i][j]);
        if (M[i][j] === 1) {
          isCelebrity = false;
          break;
        }
      }
      if (isCelebrity) {
        let knowsEveryone = true;
        for (let k = 0; k < n; k++) {
          if (k !== i && M[k][i] === 0) {
            knowsEveryone = false;
            break;
          }
        }
        if (knowsEveryone) {
          return i; // Found the celebrity
        }
      }
    }
    return -1; // No celebrity found
  }
}
const arr = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
];

const Objectsoluaemat = new Solutionmatrix();
console.log(Objectsoluaemat.celebrity(arr, 77, 9));
