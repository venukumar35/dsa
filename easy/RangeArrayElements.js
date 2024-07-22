class RangeArrayElements {
  constructor(arr) {
    this.arr = arr;
  }
  range() {
    let array = this.arr.sort((a, b) => {
      return a - b;
    });
    let array3 = array.filter((e) => {
      if (e <= array.length) {
        return e;
      }
    });

    let count = 0;

    for (let i = 1; i <= array.length; i++) {
      if (!array3.includes(i)) {
        array[i - 1] = count;
        continue;
      }
      for (let j = 0; j < array3.length; j++) {
        if (i == array3[j]) {
          count++;
        }
      }
      array[i - 1] = count;
      count = 0;
    }
    return array;
  }
}
const ObjectForRangeArrayElements = new RangeArrayElements([4, 5, 6, 7, 8]);
console.log(ObjectForRangeArrayElements.range());
