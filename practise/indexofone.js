class indexOfone {
  constructor(num) {
    this.num = num;
  }
  find() {
    let strData = this.num.split("");
    for (let i = strData.length - 1; i >= 0; i--) {
      if (strData[i] == 1) {
        return i;
      }
    }
    return -1;
  }
}
const objectIndex = new indexOfone("1");
console.log(objectIndex.find());
