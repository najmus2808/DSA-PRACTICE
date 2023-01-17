// Linked List (singly linked list, doubly linked list)
// Start VN: 15.2
// =================

// create a single Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create a Linked List
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //   adding node at the end of the linked list
  //   Time Complexity: O(1)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // When there is no node exist in the linked list
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // adding new node
      this.tail = newNode; // change the place of tail
    }
    this.length++; // increment the length
  }

  //   adding node at the beginning of the linked list
  //   Time Complexity: O(1)
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Connect first then replace the pointer or use temporary variable for swap
      this.head = newNode;
    }
    this.length++;
  }

  //   remove node from beginning of the linked list
  //   Time Complexity: O(1)
  shift() {
    if (!this.head) {
      return null;
    }
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  //   remove node form the end of the linked list
  //   Time Complexity: O(n)
  pop() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //   find item at specific index in the linked list
  // Time Complexity: O(n)
  get(index) {
    // check validation of index
    if (index < 0 || index >= this.length) return null;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  //   inserting item at specific index
  // Time Complexity: O(n)
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  //   inserting node at specific index
  // Time Complexity: O(n)
  insert(index, value) {
    // validation index
    if (index < 0 || index > this.length) return false;
    // inserting node at the beginning
    if (index === 0) return this.unshift(value);
    // inserting node at the en
    if (index === this.length) return this.push(value);
    // inserting in between
    const newNode = new Node(value);
    // stopping just before the index node
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length;
    return true;
  }
}

const linkedList = new LinkedList(10);
// linkedList.push(11);
// linkedList.unshift(9);
// console.log(linkedList);
// linkedList.shift();
// console.log(linkedList);
// linkedList.pop();
// console.log(linkedList);
// console.log(linkedList.get(1));
// End VN: 15.2
// =================
