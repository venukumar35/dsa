class NonRepeating {
  constructor(s) {
    this.s = s;
  }
  NonRepeating() {
    let str = this.s;
    // let count = 0;
    // for (let i = 0; i < str.length; i++) {
    //   for (let j = 0; j < str.length; j++) {
    //     if (str[i] == str[j]) {
    //       count++;
    //     }
    //   }
    //   if (count == 1) {
    //     return str[i];
    //   }
    //   count = 0;
    // }

    let repeatedChar = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      repeatedChar[char] = (repeatedChar[char] || 0) + 1;
    }
    console.log(repeatedChar);

    for (let i = 0; i < str.length; i++) {
      if (repeatedChar[str[i]] === 1) {
        return str[i];
      }
    }
    return "$";
  }
}
const ObjectForNonRepeating = new NonRepeating("hhhello");
console.log(ObjectForNonRepeating.NonRepeating());
