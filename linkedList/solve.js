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
// 160. Intersection of Two Linked Lists (leet code- 160)
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

// VN : 16.5
// ==================
// 19. Remove Nth Node From End of List (leet code - 19)
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let slow = dummyHead;
  let fast = head;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return dummyHead.next;
};

// VN : 16.6
// ==================
// 2. Add Two Numbers - (leet code 2)
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0);
  let l3 = dummyHead;
  let carry = 0;

  while (l1 != null || l2 != null) {
    let currentSum = (l1?.val || 0) + (l2?.val || 0) + carry; 
    carry = Math.floor(currentSum / 10);
    let lastDigit = currentSum % 10;
    let newNode = new ListNode(lastDigit);
    l3.next = newNode;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
    l3 = l3.next;
  }
  if (carry > 0) {
    const newNode = new ListNode(carry);
    l3.next = newNode;
  }
  return dummyHead.next;
};
