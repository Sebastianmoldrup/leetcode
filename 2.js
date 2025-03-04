// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
  constructor(val, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let l1 = new ListNode(2);
l1 = new ListNode(4, l1);
l1 = new ListNode(3, l1);

let l2 = new ListNode(5);
l2 = new ListNode(6, l2);
l2 = new ListNode(4, l2);

const addTwoNumbers = (l1, l2) => {
  let p1 = l1, // Pointer to l1
    p2 = l2, // Pointer to l2
    sum = 0, // Sum for each node
    carry = 0, // Carry for each node
    solution = new ListNode(0); // The returned linked list
  current = solution; // Pointer to solution

  while (p1 !== null || p2 !== null) {
    sum = carry;

    if (p1 !== null) {
      sum += p1.val;
      p1 = p1.next;
    }

    if (p2 !== null) {
      sum += p2.val;
      p2 = p2.next;
    }

    if (sum > 9) {
      sum = sum % 10;
      carry = Math.floor(sum / 10);
    }

    // Update solution with a new node with the added sum
    // solution = new ListNode(solution, sum);

    console.log(solution);
    solution.next = new ListNode();
  }
};

addTwoNumbers(l1, l2);

console.log("test", Math.floor(18 / 10));
