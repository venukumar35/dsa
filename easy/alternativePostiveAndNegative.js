class Alternative {
  constructor(arr) {
    this.arr = arr;
  }
  Alter() {
    let arr = this.arr;
    let postive = [];
    let negative = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        postive.push(arr[i]);
      } else {
        negative.push(arr[i]);
      }
    }
    let final = [];
    for (let i = 0; i <= arr.length; i++) {
      if (i < postive.length) {
        final.push(postive[i]);
      }
      if (i < negative.length) {
        final.push(negative[i]);
      }
      console.log(i);
    }
    return final;
  }
}
const ObjectForAlternative = new Alternative([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]);
console.log(ObjectForAlternative.Alter());
