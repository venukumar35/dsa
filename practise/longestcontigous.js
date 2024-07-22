class longestCon {
  constructor(str) {
    this.str = str;
  }
  contigous() {
    let str = this.str;
    let count = 0;
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 1) {
        count++;
      } else {
        count = 0;
      }
      if (temp < count && count != 0) {
        temp = count;
      }
    }
    return temp;
  }
}
const objectForlongestCon = new longestCon(
  "11101001110010001010001111101101011001111110100100100011101111001101110000010"
);
console.log(objectForlongestCon.contigous());
