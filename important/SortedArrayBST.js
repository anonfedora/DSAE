class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

const arrayToBST = (array, begin, end) => {
    if (begin > end) return null;

    var mid = parseInt((begin + end) / 2);
    var node = new Node(array[mid]);

    node.left = arrayToBST(array, begin, mid - 1);
    node.right = arrayToBST(array, mid + 1, end);
    return node;
};

const preOrder = node => {
    if (node == null) {
        return;
    }
    console.log(node.data + " " );
    preOrder(node.left);
    preOrder(node.right);
};

var root,
    root2 = null;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
root = arrayToBST(array, 0, array.length - 1);
preOrder(root);
//console.log("second array");
//root2 = arrayToBST(arr, 0, arr.length - 1);
//preOrder(root2);
