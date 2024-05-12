class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function push(head, data) {
    var node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
}
function printList(node) {
    while (node != null) {
        console.log("->", node.data);
        node = node.next;
    }
}

const mergeTwoLists = (l1, l2) => {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.data <= l2.data) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

var l1 = null,
    l2 = null;
l1 = push(l1, 3);
l1 = push(l1, 2);
l1 = push(l1, 1);
printList(l1);
l2 = push(l2, 6);
l2 = push(l2, 5);
l2 = push(l2, 4);
printList(l2);
/*console.log("after merge");
mergeTwoLists(l1, l2);
console.log("l1");
printList(l1);
console.log("l2");
printList(l2);*/
mergeTwoLists(l2, l1)
console.log('after merge')
printList(l1)
printList(l2)