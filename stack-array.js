class Stack {
  constructor() {
    this.dataset = [];
    this.size = -1;
  }
  isEmpty() {
    return this.size === -1;
  }
  push(data) {
    this.dataset[++this.size] = data;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is underflow");
      return;
    }
    let temp = this.dataset[this.size];
    delete this.dataset[this.size];
    this.size--;
    return temp;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is underflow");
      return;
    }
    return this.dataset[this.size];
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.peek());
stack.push(5);
console.log(stack.pop());
console.log(stack.dataset);
