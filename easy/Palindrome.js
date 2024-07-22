class Palindrome {
  constructor(str) {
    this.str = str;
  }
  Palindro() {
    let string = this.str;
    let data = string.split("").reverse("").join("");
    if (string == data) {
      return 1;
    }
    return 0;
  }
}
const ObjectForPalindrome = new Palindrome("abba");
console.log(ObjectForPalindrome.Palindro());
