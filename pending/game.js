class GameNos {
  constructor(arr) {
    this.arr = arr;
  }
  nos() {
    let result = 0;
    for (let data of this.arr) {
      result ^= data;
      console.log(result);
    }
  }
}
const ObjectForGameNos = new GameNos([5, 9, 7, 6]);
console.log(ObjectForGameNos.nos());
//game with nos
