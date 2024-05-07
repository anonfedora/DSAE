class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Points to the next node in the list
  }
}

// Creating nodes
const node1 = new Node(10);
const node2 = new Node(20);

// Connecting nodes using .next
node1.next = node2;

console.log(node1.data); // Output: 10
console.log(node1.next.data); // Output: 20 (Following the .next reference)
