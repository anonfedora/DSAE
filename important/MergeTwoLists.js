class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

const push = (head, data) => {
    var node = new Node();
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
    if (l1.data <= l2.data) {
        l1.next = mergeList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeList(l1, l2.next);
        return l2;
    }
};

let l1,
    l2 = null;
l1 = push(l1, 3);
l1 = push(l1, 2);
l1 = push(l1, 1);

l2 = push(l2, 4);
l2 = push(l2, 5);
l2 = push(l2, 6);
printList(l1);
printList(l2);

mergeList(l1, l2);
console.log("after merge");
printList(l1);
printList(l2);
