class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

const push = (head, data) => {
    let node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
};

const printList = node => {
    while (node != null) {
        console.log(node.data + "->");
        node = node.next;
    }
};

const getMiddle = head => {
    let fastPtr = head;
    let slowPtr = head;

    while (fastPtr.next != null && fastPtr != null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return slowPtr.data;
};

let head = null;
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
console.log(getMiddle(head));
