class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root;
function preOrder(node) {
    if (node == null) return;
    else {
        console.log(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

        console.log(root);