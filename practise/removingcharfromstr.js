class RemoveAnChar {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
  }
  RemoveChar() {
    // Initialize arrays to store the frequency of characters
    let countS1 = new Array(26).fill(0);
    let countS2 = new Array(26).fill(0);

    // Count the frequency of characters in S1
    for (let char of this.str1) {
      console.log(
        char.charCodeAt(0),
        "a".charCodeAt(0),
        char.charCodeAt(0) - "a".charCodeAt(0)
      );
      let index = char.charCodeAt(0) - "a".charCodeAt(0);

      // Log the current countS1 value at the calculated index before incrementing
      //   console.log(index);
      console.log("index", countS1[index]);
      // Increment the countS1 value at the calculated index
      countS1[index]++;
    }
    console.log(countS1);
    // Count the frequency of characters in S2
    for (let char of this.str2) {
      countS2[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    // Calculate the absolute difference in frequencies and sum them up
    let deletionCount = 0;
    for (let i = 0; i < 26; i++) {
      deletionCount += Math.abs(countS1[i] - countS2[i]);
    }

    return deletionCount;
  }
}
const objectRemoveAnChar = new RemoveAnChar(
  "basgadhbfgvhads",
  "sjdhgvbjdsbhvbvd"
);
console.log(objectRemoveAnChar.RemoveChar());
