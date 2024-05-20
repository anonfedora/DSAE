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

const mergeList = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    else if (l1.data <= l2.data) {
        l1.next = mergeList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeList(l1, l2.next);
        return l2;
    }
};
let head,
    l1,
    l2 = null;

head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);

l1 = push(l1, 8);
l1 = push(l1, 7);
l1 = push(l1, 6);

l2 = push(l2, 10);
l2 = push(l2, 9);

printList(head);
console.log("first merge");
mergeList(head, l1);
printList(head);
console.log("second merge");
mergeList(l1, l2);
printList(l1);
