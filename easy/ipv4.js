class Solutionipv4 {
  isValid(s) {
    for (let y = 0; y < s.length; y++) {
      if (s[y] == 0 && s[y + 1] > 0) {
        return 0;
      }
    }
    let strData = s.split(".");
    if (strData.length != 4) {
      return 0;
    }
    strData = strData.filter((ele) => {
      return ele != "";
    });
    let count = 0;

    if (strData.length != 4) {
      return 0;
    }
    for (let i = 0; i < strData.length; i++) {
      if (Number(strData[i] == 0) && strData[i].length > 1) {
        count++;
      }
    }
    if (count == strData.length) {
      return 0;
    }
    count = 0;
    for (let x = 0; x < strData.length; x++) {
      if (Number(strData[x]) <= 255 && Number(strData[x] >= 0)) {
        count++;
      } else {
        return 0;
      }
    }
    if (count == strData.length) {
      return 1;
    }
  }
}
const SolutionForIpv4 = new Solutionipv4();
console.log(SolutionForIpv4.isValid("1...1"));
