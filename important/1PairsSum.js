class Node {
    constructor() {
        this.data = 0;
        this.next = this.prev = null;
    }
}

const push = (head, data) => {
    let node = new Node();
    node.data = data;
    node.next = head;
    head.prev = node
    head = node;
    return head;
};

const printList = node => {
    while (node != null) {
        console.log(node.data + "->");
        node = node.next;
    }
};

let head = null;

head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
