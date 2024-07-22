class KeyPadding {
  constructor(str) {
    this.str = str;
  }
  pading() {
    let data1 = [];
    for (const ele of this.str) {
      let data = ele.charCodeAt(0);
      if (data >= 97 && data <= 99) {
        data1.push(2);
      } else if (data >= 100 && data <= 102) {
        data1.push(3);
      } else if (data >= 103 && data <= 105) {
        data1.push(4);
      } else if (data >= 106 && data <= 108) {
        data1.push(5);
      } else if (data >= 109 && data <= 111) {
        data1.push(6);
      } else if (data >= 112 && data <= 115) {
        data1.push(7);
      } else if (data >= 116 && data <= 118) {
        data1.push(8);
      } else if (data >= 119 && data <= 122) {
        data1.push(9);
      }
    }
    return data1.join("");
  }
}
const objectForKeyPadding = new KeyPadding("geeksforgeeks");
console.log(objectForKeyPadding.pading());
