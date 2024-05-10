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

function deleteKey(head, key) {
    var temp = head;

    while (temp.next != null) {
        if (head.data == key) head = head.next;
        if (temp.next.data == key) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
}

function removeAtHead(head) {
    if (head == null) return null;
    var temp = head;
    head = head.next;
    return head;
}

function printList(node) {
    while (node.next != null) {
        console.log(node.data);
        node = node.next;
    }
    console.log(node.data);
}

var head = null;
head = push(head, 7);
head = push(head, 2);
head = push(head, 3);
head = push(head, 2);
head = push(head, 8);
head = push(head, 1);
head = push(head, 2);
head = push(head, 2);

// Key to delete
let key = 2;

console.log("Created Linked List: " + "</br>");
printList(head);

// Function call
head = deleteKey(head, key);

console.log("</br>" + "Linked List after Deletion is:" + "</br>");

printList(head);
