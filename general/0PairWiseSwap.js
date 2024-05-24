class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

const printList = node => {
    let str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str + "NULL");
};

const pairwiseSwap = () => {
    let temp = head;
    while (temp != null && temp.next != null) {
        let k = temp.data;
        temp.data = temp.next.data;
        temp.next.data = k;
        temp = temp.next.next;
    }
};

const push = (head, x) => {
    let node = new Node();
    node.data = x;
    node.next = head;
    head = node;
    return head;
};

let head = null;
head = push(head, 6);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
pairwiseSwap();
printList(head);
