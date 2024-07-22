class Prefix {
  constructor(arr) {
    this.arr = arr;
  }
  pre() {
    let data = [];
    let string = this.arr[0].split("");
    let stringTwo = this.arr[1].split("");
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      for (let j = i; j < i + 1; j++) {
        if (stringTwo.includes(string[i])) {
          data.push(string[i]);
        } else {
          count++;
          break;
        }
      }
      if (count != 0) {
        break;
      }
    }

    let dataLength = data.length;
    if (dataLength == 0) {
      return -1;
    }
    for (let x = 2; x < this.arr.length; x++) {
      let left = this.arr[x].split("").splice(0);
      if (left.join("") != data.join("")) {
        for (let s = 0; s < data.length; s++) {
          if (left[s] != data[s]) {
            data.splice(s);
            break;
          }
        }
      }
    }
    return data.join("");
  }
}
const ObjectForPrefix = new Prefix(["hello", "world"]);
console.log(ObjectForPrefix.pre());
