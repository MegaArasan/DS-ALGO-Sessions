class Queue {
  constructor() {
    this.dataset = [];
    this.start = 0;
    this.end = 0;
  }
  isEmpty() {
    return this.start === this.end;
  }
  enqueue() {
    this.dataset[this.end] = data;
    this.end++;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    let temp = this.dataset[this.start];
    this.start++;
    return temp;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    return this.dataset[this.start];
  }
}
