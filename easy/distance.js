class distance {
  constructor(arr, x, y) {
    this.arr = arr;
    this.x = x;
    this.y = y;
  }
  dis() {
    let indexOfX = this.arr.indexOf(this.x);
    let indexOfy = this.arr.indexOf(this.y);
    if (indexOfX == -1 || indexOfy == -1) {
      return -1;
    }
    let datas =
      indexOfX < indexOfy
        ? Math.abs(indexOfX - indexOfy)
        : Math.abs(indexOfy - indexOfX);
    let datax = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > this.x || this.arr[i] < this.x) {
        continue;
      }
      if (this.arr[i] == this.x) {
        datax.push(i);
      }
    }

    let distancey = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > this.y || this.arr[i] < this.y) {
        continue;
      }
      if (this.arr[i] == this.y) {
        distancey.push(i);
      }
    }
    let store = [];
    let sub = 0;
    let temp = 0;
    for (let i = 0; i < datax.length; i++) {
      for (let j = 0; j < distancey.length; j++) {
        temp = sub;
        sub = Math.abs(datax[i] - distancey[j]);
        store.push(sub);
      }
    }
    let fin = store.sort((a, b) => {
      return a - b;
    });
    return fin[0];
  }
}

const ObjectFordistance = new distance([1, 2, 3, 2], 2, 1);
console.log(ObjectFordistance.dis());
