class SplitByspace {
  constructor(str) {
    this.str = str;
  }
  Split() {
    // let data = this.str.split(" ");
    // let conString = "";
    // for (const ele of data) {
    //   let char = ele[0];
    //   conString = conString + char;
    // }
    // console.log(conString);
  }
  data() {
    let index = -1;
    for (let i = 0; i < this.str.length; i++) {
      if (this.str[i] == 1) {
        index = i;
        break;
      }
    }
    return index;
  }
}
const objectSplitByspace = new SplitByspace([0, 0, 0, 0, 1, 1, 1, 1, 1]);
console.log(objectSplitByspace.Split());
console.log(objectSplitByspace.data());
