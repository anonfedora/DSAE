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

const removeOccurence = (head, x) => {
    let temp = head;
   /* while (head.data === x) {
        head = head.next;
    }*/
    while (temp.next != null) {
        if (head.data == x) {
            head = head.next;
        }
        if (temp.next.data == x) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
};

const printList = node => {
    while (node != null) {
        console.log(node.data + "->");
        node = node.next;
    }
};

let head = null;
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
head = push(head, 3);
head = push(head, 3);

printList(head);
console.log("After Removal");
head = removeOccurence(head, 3);
printList(head);
