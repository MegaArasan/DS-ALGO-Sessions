class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return this.head === null;
  }
  enqueue(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail != null) {
      this.tail.next = node;
    }
    this.tail = node;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    let temp = this.head;
    let tempData = temp.data;
    this.head = this.head.next;

    temp = null;

    return tempData;
  }
}
let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
q.enqueue(4);
console.log(q.dataset);
