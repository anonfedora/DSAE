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

function middle(head) {
    var temp = head;
    let vec = [];
    while (temp != null) {
        vec.push(temp.data);
        temp = temp.next;
    }
    //console.log(vec.length)
    var midIdx = Math.floor((vec.length) / 2);
    //console.log(midIdx)
    return vec[midIdx]
}

function printList(node) {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
}

var head = null;

head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);

console.log("Middle index", middle(head));
