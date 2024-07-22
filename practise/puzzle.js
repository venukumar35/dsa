class puzzle {
  constructor(arr) {
    this.arr = arr;
  }
  puz() {
    let arr = this.arr;
    let sum = 0;
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }

    for (let j = 0; j < arr.length; j++) {
      temp = sum;
      sum = sum - arr[j];
      arr[j] = sum;
      sum = temp;
    }
    console.log(arr);
  }
}
const ObjectForPuzzle = new puzzle([1, -2, -3, -4, 5]);
console.log(ObjectForPuzzle.puz());
/**let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        sum = sum + arr[i];
      }
    }
    console.log(Math.abs(sum)); */
/**let data = [
      { name: "xbnnskd", value: 100 },
      { name: "geek", value: 50 },
    ];

    let da = data.sort((a, b) => a.value - b.value);
    console.log(da); */
/**
  let str = "Geeks ForGeeks";
    let modifiedStr = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        modifiedStr += "_";
      } else {
        modifiedStr += str[i];
      }
    }

    console.log(modifiedStr);*/
