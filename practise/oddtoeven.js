class oddToeven {
  constructor(str) {
    this.str = str;
  }
  OtE() {
    // let string = this.str.split("");
    // let temp = 0;
    // for (let i = string.length - 1; i >= 0; i--) {
    //   console.log(string[i]);
    //   if (string[i] % 2 == 0) {
    //     temp = string[i];
    //     string[i] = string[string.length - 1];
    //     string[string.length - 1] = temp;
    //     break;
    //   }
    // }
    // if (string.join("") % 2 == 0) {
    //   return string.join("");
    // }
    // return this.str;
    let arr = this.str;
    for (let i = 1; i <= arr.length; i++) {
      if (i % 2 == 0) {
        if (arr[i - 1] % 2 != 0) {
          return false;
        }
      }

      if (i % 2 != 0 && arr.length != 1) {
        if (arr[i - 1] % 2 == 0) {
          return false;
        }
      }
    }
    return true;
  }
}
const ObjectForOddtoEven = new oddToeven([1, 2, 3, 4, 5]);
console.log(ObjectForOddtoEven.OtE());

// const data =
//   BigInt(8538812188755726523423446512723445) * BigInt(331386842537947149);
// console.log(data % BigInt(2) == 0);
