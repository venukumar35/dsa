class Solutionas {
  atoi(s) {
    // for (let i = 0; i < s.length; i++) {
    //   if (
    //     (s[0] == "-" && s[i] == ".") ||
    //     (s.charCodeAt(s[i]) >= 97 && s.charCodeAt(s[i]) <= 112) ||
    //     (s.charCodeAt(s[i]) >= 65 && s.charCodeAt(s[i]) <= 90)
    //   ) {
    //     return -1;
    //   }
    // }

    // return Number(s);

    let count = 0;
    let final = false;
    let char = "";
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
        console.log(s[i]);
        if (s[i] == s[j]) {
          count++;
        }
      }

      if (count == 1) {
        console.log(s[i], "e");
        final = true;
        char = char + s[i];
        break;
      }
      count = 0;
    }

    if (final) {
      return char;
    }
    return "$";
  }
}
const str = "zxvczbtxyzvy";

const objectForSolution = new Solutionas();
console.log(objectForSolution.atoi(str));
