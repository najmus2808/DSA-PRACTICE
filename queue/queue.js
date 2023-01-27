// Queue - First in First out (FIFO)
// Implementing Stack with Linked List and we choose the ending of linked list for push node and beginning of linked list for shift node.
// Linked List
// push - O(1); // add from end
// pop - O(n); // remove from end
// shift - O(1); // remove from beginning
// unshift - O(1); // add from beginning

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  //   adding item at the end of the list
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const queue = new Queue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);

// Array as Stack
// [1, 2, 3, 4, 5]
// push , pop  - O(1) - At the end
// shift, unshift - O(n) - At the beginning

// Array as Queue
// [1, 2, 3, 4, 5]
// push (adding) - O(1) - At the end
// shift (removing) - O(n) - At the beginning
// Better use linked list for get better performance.
