class find {
  constructor(int, k) {
    this.int = int;
    this.k = k;
  }
  findInt() {
    let data = this.int.join("").split("");
    let count = 0;
    // for (const ele of data) {
    //   if (ele == this.k) {
    //     count++;
    //   }
    // }
    for (let i = 0; i < data.length; i++) {
      if (data[i] == this.k) {
        count++;
      }
    }
    return count;
  }
}
const objectForfind = new find(
  [211, 480, 379, 915, 728, 775, 335, 479, 540, 436, 745, 405, 965, 241, 860],
  0
);
console.log(objectForfind.findInt());
