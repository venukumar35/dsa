class Anagram {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }
  Anagra() {
    // let str1 = this.str1;
    // let str2 = this.str2;
    // if (str1.length != str2.length) {
    //   return "No";
    // }
    // let data;
    // for (let i = 0; i < str1.length; i++) {
    //   data = str2.split("").includes(str1[i]);
    //   if (!data) {
    //     return "No";
    //   }
    // }
    // return "Yes";

    const frequencyOfA = {};
    const frequencyOfB = {};

    for (const char of this.str1) {
      frequencyOfA[char] = (frequencyOfA[char] || 0) + 1;
    }
    for (const char of this.str2) {
      frequencyOfB[char] = (frequencyOfB[char] || 0) + 1;
    }

    for (const char in frequencyOfA) {
      if (frequencyOfB[char] != frequencyOfA[char]) {
        return false;
      }
    }
    return true;
  }
}
const ObjectForAnagram = new Anagram("b", "d");
console.log(ObjectForAnagram.Anagra());
