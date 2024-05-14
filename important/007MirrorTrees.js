class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

const mirrorTree = (tree1, tree2) => {
    if (tree1 == null && tree2 == null) {
        return true;
    } else if (tree1 != null && tree2 != null) {
        return (
            tree1.data == tree2.data &&
            mirrorTree(tree1.left, tree2.right) &&
            mirrorTree(tree1.right, tree2.left)
        );
    }
};

let tree1, tree2, tree3, tree4;

tree1 = new Node(4);
tree1.left = new Node(3);
tree1.right = new Node(2);
tree1.left.right = new Node(1);
tree1.left.left = new Node(0);

tree2 = new Node(4);
tree2.left = new Node(3);
tree2.right = new Node(2);
tree2.left.right = new Node(1);
tree2.left.left = new Node(0);

tree3 = new Node(4);
tree3.right = new Node(3);
tree3.left = new Node(2);
tree3.right.left = new Node(1);
tree3.right.right = new Node(0);

console.log(mirrorTree(tree1, tree2));
console.log(mirrorTree(tree1, tree3));
console.log(mirrorTree(tree4, tree4));
