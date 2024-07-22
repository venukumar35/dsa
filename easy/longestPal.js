class Solution22 {
  longestPalin(S) {
    let longestPalindrome = S[0];
    let count = 0;
    let reversedString = "";
    for (let i = 0; i < S.length; i++) {
      const data = S.slice(i, S.length).split("");

      const data1 = S.slice(i, S.length);

      for (let j = data.length - 1 - i; j >= 0; j--) {
        reversedString += data[j];
      }

      console.log(reversedString, data1);

      if (reversedString == data1 && reversedString.length != 1) {
        count++;
        break;
      }

      reversedString = "";
    }

    if (count != 0) {
      return reversedString;
    }

    return longestPalindrome;
  }
}
const str = "vnrtysfrzrmzlygfv";
const Objectsolu22 = new Solution22();
console.log(Objectsolu22.longestPalin(str));
