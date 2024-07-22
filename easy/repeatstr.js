class Solutionrep {
  FirstNonRepeating(A) {
    let mapData = new Map();
    let str = "";
    let check = false;
    for (let i = 0; i < A.length; i++) {
      if (!mapData.has(A[i])) {
        mapData.set(A[i], 1);
        str = str + A[i];
      } else {
        continue;
      }
      for (let j = i + 1; j < A.length; j++) {
        if (mapData.has(A[j])) {
          check = true;
          break;
        } else {
          str = str + A[i];
        }
      }
      if (check) {
        str = str + "#";
        check = false;
      }
      if (str.length == A.length) {
        break;
      }
    }
    return str;
  }
}
const str1 =
  "tcpmxaixsswjelbswxytyhbwjinuhxhvpwaybmdhndafszoghpyzdahiqsgluufqcekjk";
const objectSolutionrep = new Solutionrep();
console.log(objectSolutionrep.FirstNonRepeating(str1));
