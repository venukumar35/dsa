class Intersection {
  constructor(arr1, arr2) {
    this.arr1 = arr1;
    this.arr2 = arr2;
  }
  inset() {
    let arr1 = this.arr1;
    let arr2 = this.arr2;

    let setData = new Set(arr1);
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (setData.has(arr2[i])) {
        count++;
        setData.delete(arr2[i]);
      }
    }
    console.log(count);
  }
}
const ObjectForIntersection = new Intersection(
  [1, 2, 3, 4, 4, 5, 6],
  [3, 4, 5, 6, 7]
);
console.log(ObjectForIntersection.inset());
