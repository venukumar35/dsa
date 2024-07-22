class RemoveChar {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }
  remove() {
    let data = this.str1.split("");
    let data2 = data;

    for (const element of this.str2) {
      console.log(element);
      data2 = data2.filter((char) => char !== element);
    }

    console.log(data2);
    return data2.join("");
  }
}
const ObjectForRemoveChar = new RemoveChar("computer", "cat");
console.log(ObjectForRemoveChar.remove());
