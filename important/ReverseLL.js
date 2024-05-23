class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const push = (head, data) => {
    var node = new Node(data);
    node.next = head;
    head = node;
    return node;
};

const printList = node => {
    var str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str + "NULL");
};

const reverseList = head => {
    var prev = null;
    var curr = head;
    var next = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head= prev
    return head;
};

var head = null;
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
head = reverseList(head);
printList(head);
