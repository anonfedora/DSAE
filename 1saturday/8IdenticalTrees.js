class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

const identicalTrees = (tree1, tree2) => {
    if (tree1 == null && tree2 == null) {
        return true;
    } else if (tree1 != null && tree2 != null) {
        return (
            tree1.data == tree2.data &&
            identicalTrees(tree1.left, tree2.left) &&
            identicalTrees(tree1.right, tree2.right)
        );
    } else {
      return false
    }
};

let tree1 = null;
let tree2 = null;
let tree3 = null;

tree1 = new Node(4);
tree1.left = new Node(2);
tree1.left.left = new Node(1);
tree1.left.right = new Node(3);

tree2 = new Node(4);
tree2.left = new Node(2);
tree2.left.left = new Node(1);
tree2.left.right = new Node(3);

tree3 = new Node(4);
tree3.left = new Node(2);
tree3.left.left = new Node(1);
tree3.left.right = new Node(3);
tree3.right = new Node(5);

console.log(identicalTrees(tree1, tree2));
console.log(identicalTrees(tree1, tree3));
console.log(identicalTrees(tree2, tree3));
