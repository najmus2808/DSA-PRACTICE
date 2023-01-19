// 206. Reverse Linked List - (leed code 206)
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// VN : 16.1
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
