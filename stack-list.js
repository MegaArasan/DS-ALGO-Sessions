class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor(data) {
    this.head = null;
  }
  isEmpty() {
    return (this.head = null);
  }
  push(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Underflow");
    }
    let tempnode = this.head;
    let temp = tempnode.data;
    this.head = this.head.next;

    delete tempnode;
    return temp;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Underflow");
    }
    return this.head.data;
  }
}

