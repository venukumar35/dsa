class UncommonNumber {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }
  uncommon() {
    let str1 = this.str1.split("");
    let str2 = this.str2.split("");

    let data = [];
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
          data.push(str1[i]);
        }
      }
    }
    let setdata = new Set(data);
    let repated = [...setdata];
    let singleLetter = [];
    let count = 0;
    for (let z = 0; z < str1.length; z++) {
      for (let k = 0; k < repated.length; k++) {
        if (str1[z] == repated[k]) {
          count++;
        }
      }
      if (count == 0) {
        singleLetter.push(str1[z]);
      }
      count = 0;
    }
    for (let x = 0; x < str2.length; x++) {
      for (let k = 0; k < repated.length; k++) {
        if (str2[x] == repated[k]) {
          count++;
        }
      }
      if (count == 0) {
        singleLetter.push(str2[x]);
      }
      count = 0;
    }
    if (singleLetter.length == 0) {
      return -1;
    }
    let sortData = new Set(singleLetter);
    let sortDataarray = [...sortData];
    let lessCount = sortDataarray.sort().join("");

    return lessCount;
  }
}
let objectUncommonNumber = new UncommonNumber("geeksforgeeks", "geeksforgeeks");
console.log(objectUncommonNumber.uncommon());
