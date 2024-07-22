class Union {
  constructor(arr1, arr2) {
    (this.arr1 = arr1), (this.arr2 = arr2);
  }
  solution() {
    let setArr1 = this.arr1;
    let setArr2 = this.arr2;

    let finalData = new Set([...setArr1, ...setArr2]);

    return [...finalData].sort((a, b) => {
      return a - b;
    });
  }
}
const ObjectForUnion = new Union([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]);
console.log(ObjectForUnion.solution());
