class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

const push = (head, x) => {
    let node = new Node();
    node.data = x;
    node.next = head;
    head = node;
    return head;
};

const printList = node => {
    let str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str + "NULL");
};

const getMiddle = head => {
    let vec = [];
    while (head != null) {
        vec.push(head.data);
        head = head.next;
    }

    let mid = parseInt(vec.length / 2);
    return vec[mid];
};

let head = null;
head = push(head, 6);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
console.log(getMiddle(head))
