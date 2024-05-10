function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this._root = null;
}

BinaryTree.prototype.preOrder = function () {
    preOrderHelper(this._root);

    function preOrderHelper(node) {
        if (!node) return;
        console.log(node.value);
        preOrderHelper(node.left);
        preOrderHelper(node.right);
    }
};

this._root = new BinaryTreeNode(1);
this._root.left = new BinaryTreeNode(2);
this._root.right = new BinaryTreeNode(3);
this._root.left.left = new BinaryTreeNode(4);
this._root.left.right = new BinaryTreeNode(5);
this.preOrder()
