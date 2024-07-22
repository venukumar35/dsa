class Solution6 {
  //Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d, n) {
    let firstSlice = arr.slice(0, d);

    let secondSlice = arr.slice(d, arr.length);

    console.log(firstSlice, secondSlice);
    for (let i = 0; i < secondSlice.length; i++) {
      arr[i] = secondSlice[i];
    }

    let i = 0;
    for (let j = secondSlice.length; j < arr.length; j++) {
      arr[j] = firstSlice[i++];
    }
    console.log(arr.length);
    return arr;
  }
}
const arr = [
  25, 6, 20, 55, 69, 5, 50, 63, 61, 41, 87, 80, 2, 96, 77, 70, 12, 43, 31, 8,
  64, 41, 68, 18, 95, 79, 52, 74, 1, 98, 3, 26, 3, 74, 32, 23, 79, 81, 37, 39,
  21, 24, 18, 22, 71, 47, 44,
];

const Objectsolua = new Solution6();
console.log(Objectsolua.rotateArr(arr, 77, 9));

/**
25 6 20 55 69 5 50 63 61 41 87 80 2 96 77 70 12 43 31 8 64 41 68 18 95 79 52 74 1 98 3 26 3 74 32 23 79 81 37 39 21 24 18 22 71 47 44
It's Correct output is: 
3 26 3 74 32 23 79 81 37 39 21 24 18 22 71 47 44 25 6 20 55 69 5 50 63 61 41 87 80 2 96 77 70 12 43 31 8 64 41 68 18 95 79 52 74 1 98
 */
