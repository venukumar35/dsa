class QueuePratice {
  constructor() {
    this.size = 20;
    this.arr = new Array(this.size);
    this.front = -1;
    this.rare = -1;
  }
  enQueue(value) {
    if (this.front == -1) {
      this.front++;
    }
    this.arr[++this.rare] = value;
    return this.arr;
  }
  deQueue() {
    if (this.front == -1 || this.front > this.rare) {
      return -1;
    }
    let temp = this.arr[this.front];
    this.front++;
    return temp;
  }
}
const objectForQueuePratice = new QueuePratice();
console.log(objectForQueuePratice.enQueue(1));
console.log(objectForQueuePratice.enQueue(2));
console.log(objectForQueuePratice.enQueue(3));
console.log(objectForQueuePratice.enQueue(4));

console.log("display", objectForQueuePratice.deQueue());
console.log("display", objectForQueuePratice.deQueue());
console.log(objectForQueuePratice.enQueue(3));
