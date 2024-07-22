class rotatedbytwoplaces {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }

  twoplace() {
    let str1 = this.str1;
    let str2 = this.str2;
    let data = str2.split("");

    if (str1 == str2) {
      return 0;
    }
    let count = 0;
    let temp;
    for (let i = data.length - 1; i >= 0; i--) {
      temp = data[data.length - 1];
      count++;
      for (let j = data.length - 1; j >= 0; j--) {
        data[j] = data[j - 1];
      }
      data[0] = temp;
      if (data.join("") == str1 && count == 2) {
        console.log(data, count);

        return 1;
      }
    }
    console.log(data, count);

    return 0;
  }
}
const objectForrotatedbytwoplaces = new rotatedbytwoplaces("epyavz", "yavzep");
console.log(objectForrotatedbytwoplaces.twoplace());
