class reverseTheString {
  constructor(str) {
    this.string = str;
  }
  revese() {
    const split = this.string.split("");
    const reve = split.reverse("").join("");
    console.log(reve);
  }
}
const objectreverseTheString = new reverseTheString("venukumar");
objectreverseTheString.revese();
