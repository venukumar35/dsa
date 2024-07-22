class RemoveRepetaedChar {
  constructor(str) {
    this.str = str;
  }
  Remove() {
    let data = this.str.split("");
    let result = [data[0]];
    for (let i = 1; i < data.length; i++) {
      //   if (data[i] == data[i + 1]) {
      //     for (let k = i + 1; k < data.length; k++) {
      //       if (data[k] != data[k + 1]) {
      //         data[k] = data[k + 1];
      //       } else {
      //         for (let h = k; h < data.length; h++) {
      //           if (data[k] != data[h + 1]) {
      //             data[k] = data[h + 1];
      //           }
      //         }`
      //       }
      //     }
      //   }

      if (data[i] != data[i - 1]) {
        result.push(data[i]);
      }
    }
    return result.join("");
  }
}
const objectRemoveRepetaedChar = new RemoveRepetaedChar("abaaaaac");
console.log(objectRemoveRepetaedChar.Remove());
