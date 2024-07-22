class numberAtEnd {
  constructor(str) {
    this.str = str;
  }
  numberAtEnd() {
    let str = this.str;
    let string = "";
    let count = 0;
    for (const ele of str) {
      if (isNaN(ele)) {
        count++;
      } else {
        string = string + ele;
      }
    }
    let start = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == 0) {
        start++;
      } else {
        break;
      }
    }
    // console.log(count);
    //   console.log(string.slice(start));
    if (count == string.slice(start)) {
      return 1;
    }
    return 0;
  }
}
const ObjectFornumberAtEnd = new numberAtEnd("hkedeplnfm10");
console.log(ObjectFornumberAtEnd.numberAtEnd());
