/**
 * @Author Musa Eleazar Shekoaga
 * class for swapping a pair of Linked List Nodes
 *
 * This function defines the data structure and validation rules for handling a basic
 * user query.
 *
 * @class Node
 * @function printList
 * @function push
 * @function pairwiseSwap
 * @property head - First Node
 *                        It must be a non-empty string.
 * return swapped List
 */
class Node {
    constructor() {
        this.data = 0;
        this.next = this.prev = null;
    }
}

const printList = node => {
    let str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str);
};

const push = (head, data) => {
    let node = new Node();
    node.data = data;
    node.prev = node.next = null;
    if (head == null) head = node;
    else {
        node.next = head;
        head.prev = node;
    }
    head = node;
    return head;
};

const pairwiseSum = (head, x) => {
    let first = head;
    let second = head;
    let isFound = false;

    while (second.next != null) second = second.next;

    while (first != second && second.next != first) {
        if (first.data + second.data == x) {
            console.log("(" + first.data + " , " + second.data + ")");

            first = first.next;
            second = second.prev;
        } else {
            if (first.data + second.data < x) {
                first = first.data;
            } else {
                second = second.prev;
            }
        }
    }
};
let head = null;
head = push(head, 6);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
/*head = push(head, -1);
head = push(head, -2);*/
printList(head);
pairwiseSum(head, 5);
