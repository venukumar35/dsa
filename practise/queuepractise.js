class Queue {
  constructor(arr) {
    this.arr = arr;
    this.queueData = [];
  }
  QueueArray() {
    let start = -1;
    let end = -1;
    let queueData = this.queueData;
    for (let i = 0; i < this.arr.length; i++) {
      if (queueData.length == 0) {
        queueData[i] = this.arr[i];
        start = this.arr[i];
        end = this.arr[i];
      } else {
        queueData[i] = this.arr[i];
        end = this.arr[i];
      }
    }
    return queueData.join(" ");
  }
  QueuePop() {
    let start = 0;
    let first = this.queueData[++start];
    return first;
  }
}
const ObjectForQueue = new Queue([1, 6, 43, 1, 2, 0, 5]);
console.log(ObjectForQueue.QueueArray());
console.log(ObjectForQueue.QueuePop());
