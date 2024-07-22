class SolutionModify {
  remove_duplicate(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        for (let x = i; x < arr.length; x++) {
          arr[x] = arr[x + 1];
        }
        arr.pop();
      }
    }

    console.log(arr);
  }
}
const arr16 = [1, 2, 2, 4];

const ObjectsoluaematSolutionModify = new SolutionModify();
console.log(ObjectsoluaematSolutionModify.remove_duplicate(arr16, 2));
