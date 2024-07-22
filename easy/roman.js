class Roman {
  constructor(str) {
    this.str = str;
  }
  rom() {
    let roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let lastData = 0;
    let temp = 0;

    if (this.str.length == 1) {
      return roman[this.str[0]];
    }
    for (let i = 0; i < this.str.length - 1; i++) {
      if (temp == 0) {
        temp = roman[this.str[0]];
      }

      if (temp < roman[this.str[i + 1]]) {
        console.log("e");
        temp = temp + roman[this.str[i + 1]];
      } else if (temp > roman[this.str[i + 1]]) {
        temp = temp - roman[this.str[i + 1]];
      }
    }
    console.log(temp);
  }
}
const ObjectForRoman = new Roman("III");
console.log(ObjectForRoman.rom());
