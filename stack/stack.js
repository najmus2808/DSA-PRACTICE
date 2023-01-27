// Stack - Last in First out (LIFO)
// Implementing Stack with Linked List and we choose the biginig of linked list for push node and pop node.
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

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  //   adding item to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this; // if you want you can skip this line
  }

  //   remove item from the top of the stack

  pop() {
    if (this.length === 0) return null;
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  peek() {
    const temp = this.pop();
    this.push(temp);
    return temp;
  }
}

const stack = new Stack(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.pop();
console.log(stack);
console.log(stack.peek());

// Array as Stack
// [1, 2, 3, 4, 5]
// push , pop  - O(1) - At the end
// shift, unshift - O(n) - At the beginning

// Array as Queue
// [1, 2, 3, 4, 5]
// push (adding) - O(1) - At the end
// shift (removing) - O(n) - At the beginning
// Better use linked list for get better performance.
