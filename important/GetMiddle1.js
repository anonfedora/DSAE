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

const countNodes = node => {
    let count = 0;
    while (node != null) {
        count++;
        node = node.next;
    }
    return count;
};

const getMiddle = head => {
    let count = countNodes(head);
    let temp = head;

    let mid = parseInt(count / 2);
    while (mid > 0) {
        temp = temp.next;
        mid--;
    }
    return temp.data;
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
