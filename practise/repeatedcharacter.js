class repeatedChar {
  constructor(str) {
    this.str = str;
  }
  repeated() {
    let repeatedString = [];
    let dataString = this.str.split("");

    let setData = new Set(dataString);
    let setDataArray = [...setData];
    let count = 0;
    console.log(setDataArray);
    for (let i = 0; i < setDataArray.length; i++) {
      for (let j = 0; j < dataString.length; j++) {
        if (setDataArray[i] == dataString[j]) {
          count++;
        }
      }
      if (count >= 2) {
        repeatedString.push(setDataArray[i]);
      }
      count = 0;
    }
    if (repeatedString.length == 0) {
      return -1;
    }
    return repeatedString[0];
  }
}
const objectForrepeatedChar = new repeatedChar("geeksforgeeks");
console.log(objectForrepeatedChar.repeated());
