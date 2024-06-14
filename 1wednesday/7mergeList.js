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

const push = (head, data) => {
    let node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
};

const mergeList = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1 <= l2) {
        l1.next = mergeList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeList(l1, l2.next);
        return l2;
    }
};

const mergeTwoList = (l1, l2) => {
    let merge = null;
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1 <= l2) {
        l1.next = mergeList(l1.next, l2);
        merge = l1;
    } else {
        l2.next = mergeList(l1, l2.next);
        merge = l2;
    }
    return merge;
};

let head = null;
let l1 = null;
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);

l1 = push(l1, 10);
l1 = push(l1, 9);
l1 = push(l1, 8);
l1 = push(l1, 7);
l1 = push(l1, 6);
printList(head);
printList(l1);
console.log("After merge");

console.log(mergeTwoList(head, l1));
printList(head);
