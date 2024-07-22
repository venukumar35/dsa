class GreenRed {
  constructor(str) {
    this.str = str;
  }
  change() {
    // let store = [];
    // let data = this.str.split("");
    // let countForR = 0;
    // let countForG = 0;
    // data.map((ele) => {
    //   if (ele == "R") {
    //     countForR++;
    //   } else {
    //     countForG++;
    //   }
    // });
    // if (countForR > countForG || countForR == countForG) {
    //   for (let i = 1; i < data.length; i++) {
    //     store.push("R");
    //   }
    // } else {
    //   for (let i = 1; i < data.length; i++) {
    //     store.push("G");
    //   }
    // }
    // return Math.min(countForG, countForR);

    const countForR = (this.str.match(/R/g) || []).length;
    const countForG = this.str.length - countForR;

    const store =
      countForR >= countForG
        ? "R".repeat(this.str.length - 1)
        : "G".repeat(this.str.length - 1);

    //  return Math.min(countForR, countForG);

    if (this.str[0].charCodeAt(0) >= 97 && this.str[0].charCodeAt(0) <= 122) {
      console.log("enter");
      let low = this.str.toLowerCase();
      console.log(low);
    } else {
      let high = this.str.toUpperCase();
      console.log(high);
    }
  }
}
const objectGreenRed = new GreenRed("GzGGGGGr");
console.log(objectGreenRed.change());
