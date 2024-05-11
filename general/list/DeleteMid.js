class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function countOfNodes(head) {
    let count = 0;
    while (head.next != null) {
        head = head.next;
        count++;
    }
}

function push(head, data) {
    var node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
}

function deleteMid(head) {
    if (head == null || head.next == null) return null;
    var copyHead = head;
    var count = countOfNodes(head);

    var mid = parseInt(count / 2);

    while (mid-- > 1) {
        head = head.next;
    }

    head.next = head.next.next;
    return copyHead;
}

function printList(node) {
    while (node.next != null) {
        console.log(node.data + " ->");
        node = node.next;
    }
}

var head = null;
head = push(head, 5);
head = push(head, 4);
head = push(head, 3); /*
head = push(head, 2);
head = push(head, 1);*/

document.write("Given Linked List<br/>");
printList(head);

head = deleteMid(head);

document.write("Linked List after deletion of middle<br/>");
printList(head);
