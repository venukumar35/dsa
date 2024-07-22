class Leader {
  constructor(arr) {
    this.arr = arr;
  }
  lead() {
    let store = [];
    let array = this.arr;
    let temp = 0;
    let mapCount = new Map();
    for (let i = 0; i < array.length; i++) {
      temp = array[i];
      for (let j = i; j < array.length; j++) {
        if (temp < array[j]) {
          temp = array[j];
        }
      }
      let data = mapCount.get(temp) || 0;
      mapCount.set(temp, data + 1);
    }
    for (const ele of mapCount.keys()) {
      store.push(ele);
    }

    store.sort((a, b) => b - a);
    let mid = store.length % 2;
    let largest = store.slice(0, mid);
    let extraStore = [];
    let count = 0;
    for (let z = 0; z < largest.length; z++) {
      if (largest == store[z]) {
        for (let x = z; x < array.length; x++) {
          if (store[z] == array[x]) {
            count++;
          }
        }
        if (count > 1) {
          let start = 1;
          while (start < count) {
            extraStore.push(store[z]);
            start++;
          }
        }
      }
    }
    let finallys = [store, extraStore].flat();
    return finallys.sort((a, b) => b - a);
  }
}
const ObjectForLeader = new Leader([16, 17, 4, 17, 3, 5, 5, 5, 5, 5, 2, 2]);
console.log(ObjectForLeader.lead());
