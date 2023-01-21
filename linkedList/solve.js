// VN : 16.1
// ==================

// 206. Reverse Linked List - (leed code 206)
// Given the head of a singly linked list, reverse the list, and return the reversed list.
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let forw = null;
  while (curr != null) {
    forw = curr.next;
    curr.next = prev;
    prev = curr;
    curr = forw;
  }
  return prev;
};

// VN : 16.2
// ==================

// 876. Middle of the Linked List (leet code 876)
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

var middleNode = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// same as
// Using ==  because === sometimes problems for null equality
// var middleNode = function (head) {
//   if (head == null || head.next == null) return head;
//   let slow = head;
//   let fast = head;
//   while (fast != null && fast.next != null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// };

// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

// VN : 16.3
// ==================
// 234. Palindrome Linked List (leet code - 234)
// Given the head of a singly linked list, return true if it is a
// palindrome or false otherwise.

function reverse(head) {
  let prev = null;
  let curr = head;
  let forw = null;
  while (curr != null) {
    forw = curr.next;
    curr.next = prev;
    prev = curr;
    curr = forw;
  }
  return prev;
}
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverse(slow);
  while (slow != null && slow.val == head.val) {
    head = head.next;
    slow = slow.next;
  }
  return slow == null;
};

// VN : 16.4
// ==================
// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return b;
};
