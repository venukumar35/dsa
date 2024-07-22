class vowels {
  constructor(word) {
    this.word = word;
  }
  words() {
    let wrd = this.word.split("");
    let start = 0;
    let end = 6;
    let data = wrd.slice(start, end);
    let vow = ["a", "e", "i", "o", "u", "?"];
    let data2 = vow[5];
    let count = 0;
    let consCount = 0;
    for (let i = 0; i <= data.length; i++) {
      let element = vow.includes(data[i]);
      if (element) {
        count++;
        if (count == 6) {
          return 0;
        }
      }
      if (data2 == data[i]) {
        consCount++;
        if (consCount > 3) {
          return 0;
        }
      }

      if (i == 6 && end < wrd.length) {
        start++;
        end++;
        data = wrd.slice(start, end);
        i = -1;
        count = 0;
        //   consCount = 0;
      }
    }
    return 1;
  }
}
const objectForVowels = new vowels("azll?b");
console.log(objectForVowels.words());
//bad string or good string
