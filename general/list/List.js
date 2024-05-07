class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/*
class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}*/

function insertAtFront(head_ref, value) {
    const newNode = new Node(value);

    newNode.next = head_ref[0];

    head_ref[0] = newNode;
}

function removeFirstNode(head) {
    if (head == null) return null;

    var temp = head;
    head = head.next;
    return head
}
