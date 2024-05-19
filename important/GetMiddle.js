class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

const printList = node => {
    var str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str+"NULL");
};

const push = (head, data) => {
    let node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
};

const getMiddle = head => {
    let stack = [];
    while (head != null) {
        stack.push(head.data);
        head = head.next;
    }

    let mid = Math.floor(parseInt(stack.length / 2));
    return stack[mid];
};

let head = null;
head = push(head, 6);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
console.log(getMiddle(head));
