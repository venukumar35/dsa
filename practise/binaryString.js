class BinaryString {
  constructor(str) {
    this.str = str;
  }
  binary() {
    let str = this.str.toString();
    let count = 0;
    let incre = 2;
    for (let i = 1; i < 4; i++) {
      if (incre < 4) {
        incre++;
      }
      for (let j = 0; j < 4 - i; j++) {
        let ele = str.substring(j, j + incre);
        let reverseEle = ele.toString().split("").reverse("").join("");
        if (reverseEle == ele) {
          count++;
        }
      }
      console.log(incre);
      //incre++;
    }
    return count;
  }
}
const objectBinaryString = new BinaryString("1111");
console.log(objectBinaryString.binary());
