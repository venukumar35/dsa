class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
  constructor(arr, k) {
    this.head = null;
    this.arr = arr;
    this.k = k;
  }
  detectLoop(head) {
    // let count = 0;
    console.log(this.arr.length);
    for (let i = 0; i <= this.arr.length; i++) {
      const nodeData = new Node(this.arr[i]);

      if (head == null) {
        this.head = nodeData;
      } else {
        nodeData.next = nodeData;
        this.head = nodeData;
      }
      //   count++;
      //   if (count == this.arr.length - 1) {
      //     return true;
      //   }
    }
    let current = head;
    let store = [];
    while (current != null) {
      store.push(current.data);
      current = current.next;
    }
    if (store.length < k) {
      return -1;
    }
    return store[k];
    // let slow = head;
    // let fast = head;

    // while (fast != null && fast.next != null) {
    //   slow = slow.next;
    //   fast = fast.next.next;

    //   if (slow === fast) {
    //     return true;
    //   }
    // }
    // return false;
  }
}
const Objectsolu = new Solution([1, 8, 3, 4], 3);
console.log(Objectsolu.detectLoop());
