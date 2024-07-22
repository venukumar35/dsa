class TransitionPoint {
  constructor(arr) {
    this.arr = arr;
  }
  point() {
    let array = this.arr;

    let data = array.indexOf(1);
    if (data == -1) {
      return -1;
    }

    return data;
  }
}
const ObjectForTransitionPoint = new TransitionPoint([1, 1, 1, 1]);
console.log(ObjectForTransitionPoint.point());
