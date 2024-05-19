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

const removeDuplicates = head => {
    let temp = head;
    /* while (head.data === x) {
        head = head.next;
    }*/
    while (temp.next && temp.next.next) {
        if (head.data == head.next.data) {
            head = head.next;
        }
        if (temp.next.data === temp.next.next.data) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
};

const printList = node => {
    var str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str + "NULL");
};

let head = null;
head = push(head, 5);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 2);
head = push(head, 1);
head = push(head, 3);
head = push(head, 3);
head = push(head, 3);
head = push(head, 3);

printList(head);
console.log("After Removal");
head = removeDuplicates(head);
printList(head);
