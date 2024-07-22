class Solutionleft {
  findElement(arr, n) {
    let res = true;
    let result = -1;
    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j + 1] < arr[i]) {
          res = false;
          break;
        }
      }

      for (let x = i; x < arr.length - 1; x--) {
        if (arr[x] > arr[i]) {
          res = false;
          break;
        }
        if (x == 0) {
          break;
        }
      }
      if (res) {
        result = arr[i];
        break;
      }
      res = true;
    }
    return result;
  }
}
const arrl = [11, 9, 12];
const objleft = new Solutionleft();
console.log(objleft.findElement(arrl, 6));
