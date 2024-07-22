class ImplementStr {
  constructor(str, ch) {
    this.str = str;
    this.ch = ch;
  }
  findStr() {
    let wrd = "ababaaaaaa";
    let wrd2 = "abaa";
    console.log(wrd2.length, wrd.length);
    for (let i = 0; i <= wrd.length; i++) {
      let j;

      // Check for a match starting from the current index i
      for (j = 0; j < wrd2.length; j++) {
        if (wrd[i + j] !== wrd2[j]) {
          break; // If characters don't match, break out of the inner loop
        }
      }

      // If the inner loop completes (j equals xLen), it means a match is found
      if (j === wrd2.length) {
        return i; // Return the starting index of the match
      }
    }

    return -1;
  }
}
const objectForStr = new ImplementStr("venu", "u");
console.log(objectForStr.findStr());
