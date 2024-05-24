class Node {
    constructor() {
        this.data = 0;
        this.next = this.prev = null;
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

const push = (head, x) => {
    let node = new Node();
    node.data = x;
    node.next = node.prev = null;
    if (head == null) head = node;
    else {
        node.next = head;
        head.prev = node;
    }
    head = node;
    return head;
};

const pairWiseSum = (head, x) => {
    let first = head;
    let second = head;
    let isFound = false;

    while (second.next != null) second = second.next;

    while (first != second && first != second.next) {
        if (first.data + second.data == x) {
            isFound = true;
            console.log("(" + first.data + " , " + second.data + ")");

            first = first.next;
            second = second.prev;
        } else {
            if (first.data + second.data < x) {
                first = first.next;
            } else {
                second = second.prev;
            }
        }
    }
};

let head = null;
head = push(head, 7);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
head = push(head, -2);
printList(head);
pairWiseSum(head, 5);
