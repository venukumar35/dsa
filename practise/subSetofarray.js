class SubsetOfArry {
  constructor(arr1, aar2) {
    this.arr1 = arr1;
    this.arr2 = aar2;
  }
  subSet() {
    for (let i = 0; i < this.arr2.length; i++) {
      let valueCountForarr1 = 0;
      for (let j = 0; j < this.arr1.length; j++) {
        if (this.arr2[i] == this.arr1[j]) {
          valueCountForarr1++;
        }
      }
      let valueCountForarr2 = 0;
      for (let k = 0; k < this.arr2.length; k++) {
        console.log(this.arr2[i]);
        if (this.arr2[i] == this.arr2[k]) {
          valueCountForarr2++;
        }
      }
      if (valueCountForarr1 < valueCountForarr2) {
        return "No";
      }
    }
    for (let ele of this.arr2) {
      const data = this.arr1.includes(ele);
      if (!data) {
        return "No";
      }
    }
    return "Yes";
  }
}
const objectSubsetOfArry = new SubsetOfArry(
  [11, 1, 13, 21, 3, 1, 7, 7],
  [11, 3, 7, 1]
);
console.log(objectSubsetOfArry.subSet());
