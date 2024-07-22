class RemoveDulipcate {
  constructor(arr) {
    this.arr = arr;
  }
  remo() {
    let array = this.arr;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] == array[j + 1]) {
          for (let z = j + 1; z < array.length; z++) {
            array[z] = array[z + 1];
          }
        }
      }
      if (
        array[i] == array[i + 1] &&
        array[i] != undefined &&
        array[i + 1] != undefined
      ) {
        --i;
      }
    }
    let data = this.arr.filter((ele) => {
      return ele != undefined;
    });

    return data.sort((a, b) => {
      return a - b;
    });
  }
}
const ObjectForRemoveDulipcate = new RemoveDulipcate([2, 2, 2, 2]);
console.log(ObjectForRemoveDulipcate.remo());
