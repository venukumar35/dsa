class firstelementofarray {
  constructor(arr, n) {
    this.arr = arr;
    this.n = n;
  }
  findFirst() {
    const frequencyMap = new Map();

    for (let i = 0; i < this.arr.length; i++) {
      const currentElement = this.arr[i];

      const currentFrequency = frequencyMap.get(currentElement) || 0;
      const data = frequencyMap.set(currentElement, currentFrequency + 1);
      if (currentFrequency + 1 === this.n) {
        return currentElement;
      }
    }

    return -1;
  }
}
const objectfirstelementofarray = new firstelementofarray(
  [1, 7, 4, 3, 4, 8, 7],
  2
);
console.log(objectfirstelementofarray.findFirst());
