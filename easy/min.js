class Solutionmin {
  minDist(a, n, x, y) {
    let data1 = -1;

    let data2 = -1;

    let result = 0;
    let temp = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] == x) {
        data1 = i;
      }
      if (a[i] == y) {
        data2 = i;
      }

      if (data1 != -1 && data2 != -1) {
        result = Math.abs(data1 - data2);
      }
      if (temp == 0 && result > 0) {
        // console.log("e");
        temp = result;
      }

      if (temp > result) {
        temp = result;
      }
    }

    return temp == 0 ? -1 : temp;
  }
}
const arr = [1, 2, 3, 2];

const arr1 = [1, 2, 3, 2];
const Objectsoluaematmin = new Solutionmin();
console.log(Objectsoluaematmin.minDist(arr1, 2, 2, 1));
