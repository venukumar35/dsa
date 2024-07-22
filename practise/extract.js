class ExtractString {
  constructor(str) {
    this.str = str;
  }
  largestInsting() {
    let str1 = "";
    let count = -1;
    for (const ele of this.str) {
      let isNumber = isNaN(ele);

      if (!isNumber) {
        str1 = str1 + parseInt(ele);
      } else {
        if (str1 != "") {
          count = Math.max(count, parseInt(str1));
        }
        str1 = "";
      }
    }
    console.log(Math.max(count, parseInt(str1)));

    if (str1 !== "") {
      count = Math.max(count, parseInt(str1));
    }

    return count;
  }
}
const objectExtractString = new ExtractString("aaaaa");
console.log(objectExtractString.largestInsting());
/** let currentNumeric = '';
    let maxNumeric = -1;

    for (const char of S) {
        if (!isNaN(parseInt(char))) {
            currentNumeric += char;
        } else {
            if (currentNumeric !== '') {
                maxNumeric = Math.max(maxNumeric, parseInt(currentNumeric));
                currentNumeric = '';
            }
        }
    }

    // Check for the last numeric substring after the loop
    if (currentNumeric !== '') {
        maxNumeric = Math.max(maxNumeric, parseInt(currentNumeric));
    }

    return maxNumeric; */
