class SecondLargestElement {
  constructor(arr) {
    this.arr = arr;
  }
  seco() {
    let array = this.arr;
    // if (array.length <= 1) {
    //   return -1;
    // }

    let mid = Math.floor(array.length / 2);

    let left = array.slice(0, mid);
    let rigth = array.slice(mid);

    if (array.length == 1) {
      return array;
    }

    let leftData = new SecondLargestElement(left).seco();

    let rightData = new SecondLargestElement(rigth).seco();

    return this.merge(leftData, rightData);
  }

  merge(left, rigth) {
    let store = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < rigth.length) {
      if (left[i] < rigth[j]) {
        store[k] = left[i];
        k++;
        i++;
      } else {
        store[k] = rigth[j];
        k++;
        j++;
      }
    }

    while (i < left.length) {
      store[k++] = left[i++];
    }
    while (j < rigth.length) {
      store[k++] = rigth[j++];
    }

    return store;
  }
}
const ObjectForSecond = new SecondLargestElement([12, 35, 10, 34, 1]);
console.log(ObjectForSecond.seco());

/////////////////////////////////////////////////////////binary search
/** // for (let i = 0; i < array.length; i++) {
    //   for (let j = 0; j < array.length; j++) {
    //     if (array[i] > array[j]) {
    //       let temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }
    //   }
    // }
     
    // let data = new Set(array);
    // return data.size != 0 && data.size != 1 ? [...data][1] : -1;
    */
