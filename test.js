class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let l1 = new Node(3);
l1 = new Node(4, l1);
l1 = new Node(2, l1);
// console.log(l1);

let l2 = new Node(4);
l2 = new Node(6, l2);
l2 = new Node(5, l2);
// console.log(l2);

const addTwoNumbers = (l1, l2) => {
  let p1 = l1,
    p2 = l2,
    carry = 0,
    sum = 0,
    solution = new Node(0),
    current = solution;

  while (p1 !== null || p2 !== null) {
    sum = carry;
    // console.log("sum:", sum);

    if (p1 !== null) {
      sum += p1.data;
      // console.log("p1 data", p1.data), console.log("sum p1", sum);
      p1 = p1.next;
    }

    if (p2 !== null) {
      sum += p2.data;
      // console.log("p2 data", p2.data), console.log("sum p1 + p2", sum);
      p2 = p2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new Node(sum);
    current = current.next;
  }

  if (carry === 1) current.next = new Node(1);

  console.log(solution.next);
};

addTwoNumbers(l1, l2);
