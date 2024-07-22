class SolutionSame {
  //Function to check if a string can be obtained by rotating
  //another string by exactly 2 places.
  isRotated(str1, str2) {
    let str = "";
    let first = "";
    let count = false;

    for (let i = str2.length - 1; i > 0; i--) {
      first = str2[i] + first;

      for (let j = 0; j < i; j++) {
        str = str + str2[j];
      }

      if (first + str == str1) {
        count = true;
        break;
      }
      str = "";
    }
    return count ? 1 : 0;
  }
}

const str1 = "rh";
const str2 = "hr";

const objmaxsSolutionSame = new SolutionSame();
console.log(objmaxsSolutionSame.isRotated(str1, str2));
