class Parathesis {
  constructor(str) {
    this.astr = str;
  }
  Parathe() {
    // let str = this.astr.split("");
    // let mid = Math.floor(str.length / 2);
    // if (str.length % 2 != 0) {
    //   return false;
    // }
    // let data = [];
    // for (let i = 0; i < str.length; i++) {
    //   let iCharCode = str[i].charCodeAt(0);
    //   for (let z = i + 1; z < str.length; z++) {
    //     let zCharCode = str[z].charCodeAt(0);
    //     if (
    //       ((zCharCode == 93 && iCharCode == 91) ||
    //         (iCharCode == 123 && zCharCode == 125) ||
    //         (iCharCode == 40 && zCharCode == 41)) &&
    //       ((i % 2 == 0 && z % 2 != 0) || (i % 2 != 0 && z % 2 == 0))
    //     ) {
    //       data.push(str[z]);
    //       str[z] = "0";
    //       break;
    //     }
    //   }
    // }
    // if (data.length == mid) {
    //   return true;
    // }
    // return false;
    //////////////////////////////////////////////////////method two/////////////////////////////
    // let str = this.astr.split("");
    // let mid = Math.floor(str.length / 2);
    // if (str.length % 2 !== 0) {
    //   return false;
    // }
    // let data = new Set();
    // for (let i = 0; i < str.length; i++) {
    //   //   console.log(data.has(i));
    //   if (data.has(i)) {
    //     continue; // Skip if the character is already processed
    //   }
    //   let iCharCode = str[i].charCodeAt(0);
    //   for (let z = i + 1; z < str.length; z++) {
    //     if (data.has(z)) {
    //       continue; // Skip if the character is already processed
    //     }
    //     let zCharCode = str[z].charCodeAt(0);
    //     if (
    //       ((zCharCode == 93 && iCharCode == 91) ||
    //         (iCharCode == 123 && zCharCode == 125) ||
    //         (iCharCode == 40 && zCharCode == 41)) &&
    //       ((i % 2 === 0 && z % 2 !== 0) || (i % 2 !== 0 && z % 2 === 0))
    //     ) {
    //       data.add(z);
    //       break;
    //     }
    //   }
    // }
    // console.log(data);
    // return data.size === mid;
    /////////////////////////////////////////////three///////////////
    let str = this.astr;
    const stack = [];
    const pairs = { "(": ")", "[": "]", "{": "}" };

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (pairs[char]) {
        stack.push(char);
      } else {
        const top = stack.pop();
        if (char !== pairs[top]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
const ObjectForParathesis = new Parathesis("{{}}");
console.log(ObjectForParathesis.Parathe());
