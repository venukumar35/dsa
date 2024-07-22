// class Solution12 {
//   //Function to find if there exists a triplet in the
//   //array A[] which sums up to X.
//   find3Numbers(A, n, X) {
//     const data = A.sort((a, b) => {
//       return a - b;
//     });

//     let arrayData = [];

//     for (let i = 0; i < data.length; i++) {
//       if (data[i] <= X) {
//         arrayData.push(data[i]);
//       }
//     }
//     let finalArray = [];
//     let j = arrayData.length - 1;
//     let countData = 0;
//     let findingExtraMini = [];
//     while (j > 0) {
//       let miniValueOfX = arrayData[j];
//       let miniValueBetween = X - miniValueOfX;
//       for (let z = 0; z < arrayData.length; z++) {
//         if (arrayData[z] <= miniValueBetween) {
//           findingExtraMini.push(arrayData[z]);
//         }
//       }
//       if (findingExtraMini.length < 2) {
//         findingExtraMini = [];
//       } else {
//         for (let x = 0; x < findingExtraMini.length; x++) {
//           for (let y = 0; y < findingExtraMini.length; y++) {
//             if (y === x) {
//               continue;
//             }
//             countData =
//               findingExtraMini[x] + findingExtraMini[y] + miniValueOfX;

//             if (countData == X) {
//               console.log(findingExtraMini);
//               //   console.log(
//               //     countData,
//               //     findingExtraMini[x],
//               //     findingExtraMini[y],
//               //     miniValueOfX,
//               //     x,
//               //     y
//               //   );
//               finalArray.push(findingExtraMini[x]);
//               finalArray.push(findingExtraMini[y]);
//               finalArray.push(findingExtraMini[miniValueOfX]);
//               break;
//             }
//           }
//           if (finalArray.length > 0) {
//             break;
//           }
//           countData = 0;
//         }
//       }
//       if (finalArray.length > 0) {
//         break;
//       }
//       findingExtraMini = [];
//       j--;
//     }
//     if (finalArray.length > 0) {
//       return 1;
//     }
//     return 0;
//   }
// }

// const arr = [1, 2, 2, 1];
// const Objectsolua12 = new Solution12();
// console.log(Objectsolua12.find3Numbers(arr, 4, 3));
class Solution12 {
  //Function to find if there exists a triplet in the
  //array A[] which sums up to X.
  find3Numbers(A, n, X) {
    const data = A.sort((a, b) => {
      return a - b;
    });

    let arrayData = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i] <= X) {
        arrayData.push(data[i]);
      }
    }

    let finalArray = [];

    for (let i = 0; i < arrayData.length - 2; i++) {
      let left = i + 1;
      let right = arrayData.length - 1;

      while (left < right) {
        let sum = arrayData[i] + arrayData[left] + arrayData[right];

        if (sum == X) {
          finalArray.push([arrayData[i], arrayData[left], arrayData[right]]);
          left++;
          right--;
        } else if (sum < X) {
          left++;
        } else {
          right--;
        }
      }
    }

    return finalArray.length > 0 ? 1 : 0;
  }
}

const arr = [1, 2, 2, 1];
const Objectsolua12 = new Solution12();
console.log(Objectsolua12.find3Numbers(arr, 4, 3)); // Output: 0
