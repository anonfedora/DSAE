class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function push(head, data) {
    var node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
}

function printList(node) {
    while (node != null) {
        console.log("->", node.data);
        node = node.next;
    }
}

function countNodes(node) {
    let count = 0;
    while (node != null) {
        count++;
        node = node.next;
    }
    return count;
}

function middle(head) {
    let count = countNodes(head);
    let temp = head;

    mid = Math.floor(count / 2);
    while (mid > 0) {
        temp = temp.next;
        mid--;
    }
    return temp.data;
}

let head = null;
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
console.log("End of head");
console.log("Middle of Linked List", middle(head));
