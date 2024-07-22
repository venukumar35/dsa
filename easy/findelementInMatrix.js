class SolutionAr {
  LongestRepeatingSubsequence(str) {
    const data = str.split("");

    let dataOfSame = [];

    let start = 0;
    let end = str.length - 1;
    while (start < str.length) {
      for (let y = 0; y < data.length; y++) {
        if (end == start) {
          break;
        }
        if (data[start] != data[end]) {
          end--;
        } else {
          dataOfSame.push(data[start]);
          break;
        }
      }
      start++;
      end = str.length - 1;
    }
    console.log(dataOfSame);
    let count = 0;
    let result = 0;
    for (let j = 0; j < dataOfSame.length; j++) {
      for (let x = 0; x < data.length; x++) {
        if (dataOfSame[j] == data[x]) {
          count++;
        }
      }
      if (count - 1 == dataOfSame.length) {
        result++;
      }
      count = 0;
    }
    return result;
  }
}
const objectObj = new SolutionAr();
console.log(objectObj.LongestRepeatingSubsequence("larlhndddc"));
/** const n = str.length;
        let str1 = str;
        let curr = new Array(n+1).fill(0), prev = new Array(n+1).fill(0);;
        for(let i=1; i<=n; i++ ){
            for(let j=1; j<= n; j++) {
                if(i !== j && str[i-1] === str1[j-1]) {
                    curr[j] = 1 + prev[j-1];
                } else {
                    curr[j] = Math.max(curr[j-1], prev[j]);
                }
            }
            prev = [...curr];
        }
        return curr[n];*/
