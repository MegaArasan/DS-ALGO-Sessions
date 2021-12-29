// create a node for linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// create a linked list
class Linkedlist {
  constructor() {
    this.head = null;
  }

  //   add method adding to data linked list
  add(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      //   checking current data having the next data pointer
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertAt(data, index) {
    let node = new Node(data);
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  removefrom(index) {
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      current = null;
    }
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current = null;
  }

  findindex(searchelement) {
    let count = 0;
    let current = this.head;
    while (current != null) {
      if ((current.data = searchelement)) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let newp = null;
    while (current != null) {
      newp = current.next;
      current.next = prev;
      prev = current;
      current = newp;
    }
    this.head = prev;
  }

  findmiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }

  print() {
    let current = this.head;
    let array = [];
    while (current != null) {
      array.push(current.data);
      current = current.next;
    }
    console.log(array.join("->"));
  }
}

let list = new Linkedlist();
list.add(1);
list.add(2);
list.add(3);
list.add(6);
list.add(5);
list.add(4);
list.print();
list.insertAt(10, 3);
list.print();
list.removefrom(1);
list.print();
list.reverse();
list.print();
console.log(list.findmiddle());
