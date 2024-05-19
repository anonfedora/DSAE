class LNode {
    constructor(data) {
        this.data = data;
        this.prev = this.next = null;
    }
}

class TNode {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

let head = null;

const push = data => {
    let node = new LNode(data);
    node.next = node.prev = null;
    if (head != null) {
        node.next = head;
        head.prev = head;
    }
    head = node;
    return head;
};

const printList = node => {
    let str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str);
};

const preOrder = node => {
    if (node == null) return;
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
};

const countNodes = node => {
    var count = 0;
    while (node != null) {
        node = node.next;
        count++;
    }
    return count;
};

const sortedLLToBSTRec = n => {
    if (n <= 0) return;
    //1->2->3->4->5->6->7->
    let left = sortedLLToBSTRec(parseInt(n / 2));

    let root = new TNode(head.data);

    root.left = left;
    head = head.next;

    root.right = sortedLLToBSTRec(n - parseInt(n / 2) - 1);
    return root;
};

const sortedLLToBST = () => {
    let count = countNodes(head);

    return sortedLLToBSTRec(count);
};
head = push(7);
head = push(6);
head = push(5);
head = push(4);
head = push(3);
head = push(2);
head = push(1);
printList(head);
var root = sortedLLToBST();
preOrder(root);
/*console.log(countNodes(head));*/
