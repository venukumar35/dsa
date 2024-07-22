class stringOfVowels {
  constructor(str) {
    this.str = str;
  }
  vowels() {
    let vow = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let data = [];
    let stringData = this.str;
    for (const ele of stringData) {
      let status = vow.includes(ele);
      if (status) {
        data.push(ele);
      }
    }
    if (data.length == 0) {
      return "No Vowel";
    }
    return data.join("");
  }
}
const objectForStr = new stringOfVowels("rrty");
console.log(objectForStr.vowels());
