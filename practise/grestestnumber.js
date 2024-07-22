class Greatest {
  constructor(arr) {
    this.arr = arr;
  }
  great() {
    let data = this.arr.splice(1);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      for (let j = i; j < data.length; j++) {
        if (data[i] < data[j]) {
          data[i] = data[j];
        }
      }
    }
    data[data.length] = -1;

    return data;
  }
}
const objectForGreatest = new Greatest([16, 17, 4, 3, 5, 2]);
console.log(objectForGreatest.great());
