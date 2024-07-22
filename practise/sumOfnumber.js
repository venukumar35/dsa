class SumOfNumber {
  constructor(str) {
    this.str = str;
  }
  sumNumber() {
    // A temporary string
    let temp = "0";

    // holds sum of all numbers
    // present in the string
    let sum = 0;

    // read each character in input string
    for (let i = 0; i < this.str.length; i++) {
      let ch = this.str[i];
      // if current character is a digit
      if (!isNaN(String(ch) * 1)) {
        temp = temp + ch;
        // console.log(temp);
      }
      // if current character is an alphabet
      else {
        // increment sum by number found earlier
        // (if any)
        console.log(temp);
        sum += parseInt(temp);

        // reset temporary string to empty
        temp = "0";
      }
    }

    // atoi(temp.c_str()) takes care of trailing
    // numbers
    return sum + parseInt(temp);
  }
}
const ObjectForSumOfNumber = new SumOfNumber("1abc23");
console.log(ObjectForSumOfNumber.sumNumber());
