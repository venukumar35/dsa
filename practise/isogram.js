class IsoGram {
  constructor(str) {
    this.str = str;
  }
  isoRemove() {
    let count = 0;
    let data = this.str.split("");
    for (let i = 0; i < this.str.length; i++) {
      for (let j = 0; j < this.str.length; j++) {
        if (data[i] == data[j]) {
          count++;
        }
      }
      if (count != 1) {
        return 0;
      }
      count = 0;
    }
    return 1;
  }
}
const ObjectForIsoGram = new IsoGram("acvfderty");
console.log(ObjectForIsoGram.isoRemove());
