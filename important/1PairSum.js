class Node {
    constructor() {
        this.data = 0;
        this.next = this.prev = null;
    }
}

const push = (head, data) => {
    let node = new Node();
    node.data = data;
    node.next = node.prev = null;
    if (head == null) head = node;
    else {
        node.next = head;
        head.prev = node;
        head = node;
    }
    return head;
};

const printList = node => {
  var str = ''
    while (node != null) {
      str += node.data + "->"
        node = node.next;
    }
        console.log(str);
};

const pairSum = (head, x) => {
    let first = head;
    let second = head;
    let found = false;

    while (second.next != null) second = second.next;
    /*  console.log(first);
    console.log(first.data);
    console.log(second.data); */
    while (first != second && first != second.next) {
        if (first.data + second.data == x) {
            found = true;
            console.log("(" + first.data + " , " + second.data + ")");
            first = first.next;

            second = second.prev;
        } else {
            if (first.data + second.data < x) {
                first = first.next;
            } else {
                second = second.prev;
            }
        }
    }
};

let head = null;
//console.log(head.data);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
pairSum(head, 5);
