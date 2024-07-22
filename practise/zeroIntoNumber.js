class Zero {
  constructor(num) {
    this.num = num;
  }
  convertTonum() {
    let data = this.num.toString().split("");
    for (let i = 0; i < data.length; i++) {
      if (data[i] == 0) {
        data[i] = (5).toString();
      }
    }
    let convert = data.join("");
    return convert;
  }
}
const objectZero = new Zero(103);
console.log(objectZero.convertTonum());
