class Solutionrows {
  rowWithMax1s(arr, n, m) {
    let data = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == 1) {
          count++;
        }
      }
      //   if (count > 0) {
      data.push(count);
      //   }
      count = 0;
    }
    if (data.length == 0) {
      return -1;
    }
    let result = 0;
    let final = 0;
    console.log(data);
    for (let y = 0; y < data.length; y++) {
      if (result == 0) {
        result = data[y];
        final = y;
      }
      if (result < data[y + 1]) {
        result = data[y + 1];
        final = y + 1;
      }
    }
    if (result == 0) {
      return -1;
    }
    return final;
  }
}

const arr = [
  [0, 0],
  [0, 1],
  [0, 0],
  [0, 0],
  [0, 1],
  [0, 1],
];

const ObjectForSolutionrows = new Solutionrows();
console.log(ObjectForSolutionrows.rowWithMax1s(arr, 7));
