class reverseString {
  constructor(str) {
    this.str = str;
  }
  reverse() {
    let wordsArray = this.str.split(".");
    // console.log(wordsArray);
    let reversedString = wordsArray.join(".");
    // console.log(reversedString);
    return reversedString;
  }
}
const ObjectForreverseString = new reverseString(
  "much.very.program.this.like.i"
);
console.log(ObjectForreverseString.reverse());
