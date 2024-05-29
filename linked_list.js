class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // insert a value in front of a node in linked list
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  // insert a value back of the node
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  //   displaying all the values in linked list
  display() {
    if (!this.head) {
      console.log("linked list is empty");
      return;
    }
    let curr = this.head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const l = new LinkedList();
l.append(10);
l.prepend(9);
l.append(20);
l.append(30);
l.prepend(8);
l.display();
