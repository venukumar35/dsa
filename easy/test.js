class testFilter {
  constructor(arr1, arr2) {
    this.arr1 = arr1;
    this.arr2 = arr2;
  }
  filter() {
    let store = [];
    let data = this.arr1.map((e) => {
      return e > 0;
    });

    console.log(data);

    let data2 = this.arr1.filter((e) => {
      return e > 1;
    });
    console.log(data2);

    console.log(this.arr2.includes(1));
    let ds = {
      name: "venu",
      lastName: "kumar",
      data: {
        venu: "name",
        kumar: "lastname",
      },
    };
    for (const key in ds.data) {
      //   console.log(key);
      console.log(ds.data[key]);
    }

    for (const key in this.arr1) {
      console.log(key);
      // key holds an array index
    }

    for (const el of this.arr1) {
      // let data = this.arr2.filter((e) => {
      //   return e != el;
      // });
      // console.log(data);
      console.log(!this.arr2.includes(el));
    }
  }
}
const ObjectFortestFilter = new testFilter([undefined], [1, 2, 4, 5]);
console.log(ObjectFortestFilter.filter());
