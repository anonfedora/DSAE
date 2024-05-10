class Node {
    constructor() {
        this.data = 0;
        this.next = null; // Points to the next node in the list
    }
}

function insert(head, data) {
    let node = new Node();
    node.data = data;
    node.next = head;
    head = node;
}
// Creating nodes
function printList(head) {
    while (head != null) {
        console.log("->" + head.data);
        head = head.next;
    }
}

let head = null;
head = insert(head, 5);
head = insert(head, 4);
head = insert(head, 3);
head = insert(head, 2);
head = insert(head, 1);
printList(head);
