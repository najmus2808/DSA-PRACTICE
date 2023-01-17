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
}

const linkedList = new LinkedList(10);
linkedList.push(11);
// linkedList.unshift(9);
console.log(linkedList);
linkedList.shift();
console.log(linkedList);
// End VN: 15.2
// =================
