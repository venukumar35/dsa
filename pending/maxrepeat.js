class maxRepeat {
  constructor(arr) {
    this.arr = arr;
  }
  max() {
    // let removeDuplicate = new Set(this.arr);
    // let removeDuplicatedata = Array.from(removeDuplicate).sort((a, b) => a - b);
    // let store = [];
    // let count = 0;
    // for (let i = 0; i < removeDuplicatedata.length; i++) {
    //   for (let j = 0; j < this.arr.length; j++) {
    //     if (removeDuplicatedata[i] == this.arr[j]) {
    //       count++;
    //     }
    //   }
    //   store.push(count);
    //   count = 0;
    // }
    // let sameCount = 0;
    // for (let i = 0; i < store.length; i++) {
    //   let current = 0;
    //   let temp = store[i];
    //   current = store[i + 1 < store.length ? i + 1 : store.length - 1];
    //   if (current != temp) {
    //     let maxCount = Math.max(...store);
    //     let index = store.indexOf(maxCount);
    //     return removeDuplicatedata[index];
    //   } else {
    //     sameCount++;
    //   }
    // }
    // if (sameCount == store.length) {
    //   return Math.min(...removeDuplicatedata);
    // }

    /***   NEED TO LEARN */
    let countMap = new Map();

    for (let i = 0; i < this.arr.length; i++) {
      console.log(
        countMap.set(this.arr[i], countMap.get(this.arr[i] || 0) + 1)
      );
      countMap.set(this.arr[i], countMap.get(this.arr[i] || 0) + 1);
    }

    let maxCount = 0;
    let result = -1;

    countMap.forEach((count, element) => {
      if (count > maxCount) {
        maxCount = count;
        result = element;
      } else if (count === maxCount && element < result) {
        result = element;
      }
    });
    return result;
  }
}
const ObjectFormaxRepeat = new maxRepeat([2, 2, 1, 2]);
console.log(ObjectFormaxRepeat.max());
