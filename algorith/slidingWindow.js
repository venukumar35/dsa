class longestSubString {
  long(str) {
    let setData = new Set();

    let start = 0;
    let end = 0;
    let mixLength = Math.min(str.length, 1);
    while (end < str.length) {
      let char = str[end];

      while (setData.has(char)) {
        setData.delete(char);
        start++;
      }
      setData.add(char);
      let windowSize = end - start + 1;

      mixLength = Math.max(mixLength, windowSize);
      end++;
    }
    return mixLength;
  }
}
const str = "abacb";
const dataObject = new longestSubString();
console.log(dataObject.long(str));
//for sliding window we need to use an two pinter
