class Sort {
  constructor(str, c) {
    this.str = str;
    this.c = c;
  }
  charStr() {
    // let str = this.str.split("").sort().join("");
    // return str;
    let mapCount = new Map();
    for (let i = 0; i < this.str.length; i++) {
      let countData = (mapCount.get(this.str[i]) || 0) + 1;
      mapCount.set(this.str[i], countData);
      while (i + 1 < this.str.length && this.str[i] == this.str[i + 1]) {
        i++;
      }
    }
    let data = [];
    mapCount.forEach((count, ele) => {
      if (count == this.c) {
        data.push(count);
      }
    });
    console.log(data);
    return data.length;
  }
}
const ObjectForSort = new Sort("abc", 1);
console.log(ObjectForSort.charStr());
