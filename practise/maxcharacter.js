class MaxCharacter {
  constructor(str) {
    this.str = str;
  }
  max() {
    if (this.str.length == 1) {
      return this.str;
    }
    let count;
    if (count == 0) {
      let data2 = this.str.split("").sort();
      return data2[0];
    }

    let dataCount = 0;
    const data = this.str.split("").sort();
    const data2 = this.str.split("").sort();

    const elementCount = [];
    let setData = new Set(data2);

    setData.forEach((ele) => {
      for (let j = 0; j < data.length; j++) {
        if (ele == data[j]) {
          dataCount++;
        }
      }
      elementCount.push(dataCount);
      dataCount = 0;
    });
    let dataIndex = Math.max(...elementCount);

    let index = elementCount.indexOf(dataIndex);
    let arrayElement = [...setData];
    return arrayElement[index];
  }
}
const objecetMaxCharacter = new MaxCharacter(
  "wlrbbmqbhcdarzowkkyhiddqscdxrjmowfrxsjybldbefsarcbynecdyggxxpklorellnmpapqfwkhopkmco"
);
console.log(objecetMaxCharacter.max());
