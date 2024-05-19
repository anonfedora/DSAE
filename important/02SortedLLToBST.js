class LNode {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

class TNode {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

var root = null;

const push = (head, x) => {
    var node = new LNode();
    node.data = x;
    node.next = head;
    head = node;
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
/*
const printList = node => {
    while (node != null) {
        console.log(node.data);
        node = node.next;
    }
};*/

const preOrder = node => {
    if (node == null) return;
    console.log(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
};

const listToArrayToBST = head => {
    var vec = [];
    let temp = head;
    while (temp != null) {
        vec.push(temp.data);
        temp = temp.next;
    }
    //console.log(vec, 0, vec.length - 1);
    return listToArrayToBSTRecur(vec, 0, vec.length - 1);
};

const listToArrayToBSTRecur = (array, start, end) => {
    if (start > end) return null;
    var root = null;
    var mid = parseInt((start + end) / 2);
    
    root = new TNode(array[mid]);

    root.left = listToArrayToBSTRecur(array, start, mid - 1);
    root.right = listToArrayToBSTRecur(array, mid + 1, end);

    return root;
};

var head = null;
head = push(head, 7);
head = push(head, 6);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
head = listToArrayToBST(head);
preOrder(head);
