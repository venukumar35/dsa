class Solutionexist {
  // Function to return the position of the first repeating element.
  // firstRepeated(arr, n) {
  // let countData = 1;
  // let final = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[i] == arr[j]) {
  //       countData++;
  //     }
  //   }

  //   if (countData > 2) {
  //     console.log();
  //     final = i + 1;
  //     break;
  //   }
  //   countData = 1;
  // }

  // if (countData > 1) {
  //   return final;
  // }
  // return -1;

  // Function to find the maximum index difference.
  maxIndexDiff(a, n) {
    let data = [...a];
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (a[i] <= a[j]) {
          count++;
        }
      }
      console.log(count);
      break;
    }

    return count - 1;
    return data.indexOf(a[0]) + 1;
  }
}
//}
const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];

const Objectsoluae = new Solutionexist();
console.log(Objectsoluae.maxIndexDiff(arr, 77, 9));
