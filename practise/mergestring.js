class MergeTwoString {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }
  merge() {
    let data = [];
    for (let i = 0; i < this.str1.length || i < this.str2.length; i++) {
      if (i < this.str1.length) {
        data.push(this.str1[i]);
      }
      for (let j = i; j < this.str2.length; j++) {
        data.push(this.str2[j]);
        break;
      }
    }
    return data.join("");
  }
}
const objectForMergeTwoString = new MergeTwoString("Qh", "eyNFX");
console.log(objectForMergeTwoString.merge());
