class SameElementOfArray {
  constructor(array1, array2, n) {
    this.array1 = array1;
    this.array2 = array2;
    this.n = n;
  }
  seameElement() {
    if (this.array1.length != this.array2.length) {
      return 0;
    }
    for (let i = 0; i < this.array1.length; i++) {
      for (let j = 0; j < this.array1.length - i; j++) {
        let index = j;
        let indexB = j;
        if (this.array1[j] > this.array1[j + 1]) {
          index = j + 1;
        }
        if (this.array2[j] > this.array2[j + 1]) {
          indexB = j + 1;
        }
        // let temp = this.array1[j];
        // this.array1[j] = this.array1[index];
        // this.array1[index] = temp;

        let tempB = this.array2[j];
        this.array2[j] = this.array2[indexB];
        this.array2[indexB] = tempB;
      }
    }
    for (let k = 0; k < this.array1.length; k++) {
      if (this.array1[k] != this.array2[k]) {
        return 0;
      }
    }
    this.array1.sort(function (a, b) {
      return a - b;
    });
    console.log(this.array1);
    return 1;
  }
}
let arr = [8, 9, 7, 5, 3, 1];
const objectSameElementOfArray = new SameElementOfArray(
  arr,
  [5, 4, 2, 5, 1, 7],
  7
);
objectSameElementOfArray.seameElement();
console.log(objectSameElementOfArray.seameElement());
