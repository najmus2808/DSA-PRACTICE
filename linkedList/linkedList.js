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
      this.length++; // increment the length
    }
  }
}

const linkedList = new LinkedList(10);
linkedList.push(11);
console.log(linkedList);

// End VN: 15.2
// =================
