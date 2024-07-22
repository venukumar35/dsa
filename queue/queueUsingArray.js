class Queue {
  constructor() {
    this.arraySize = 20;
    this.array = new this.array(this.arraySize);
    this.front = -1;
    this.rare = -1;
  }
  Enqueue(value) {
    if (this.rare == this.arraySize - 1) {
      console.log("array is fullied");
    }
    if (this.front == -1) {
      this.front++;
    }
    this.array[++this.rare] = value;
  }
  DeQueue() {
    if (this.front == -1 || this.front > this.rare) {
      console.log("array is empty");
    }
    console.log(this.array[this.front++]);
    return this.array[this.front++];
  }
}
const QueueObject = new Queue();
