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
    while (node.next != null) {
        console.log(node.data + "->");
        node = node.next;
    }
}

function deleteKey(head, key) {
    var temp = head;

    while (temp.next != null) {
        if (head.data == key) head = head.next;
        if (head.next.data == key) {
            head.next = head.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
}
