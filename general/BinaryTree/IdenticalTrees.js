class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

let root1, root2, root3, root4, root5;

function identicalTrees(a, b) {
    if (a == null && b == null) return true;

    if (a != null && b != null) {
        return (
            a.data == b.data &&
            identicalTrees(a.left, b.left) &&
            identicalTrees(a.right, b.right)
        );
    }
    return false;
}

root1 = new Node(1); //               (1)
root1.left = new Node(2); //         /   \
root1.right = new Node(3); //       (2)   (3)
root1.left.left = new Node(4); //    / \ 
root1.left.right = new Node(5);// (4)   (5)

root2 = new Node(1); //               (1)
root2.left = new Node(2); //          /  \
root2.right = new Node(3); //       (2)   (3)
root2.left.left = new Node(4); //  /   \
root2.left.right = new Node(5);//(4)   (5)

root3 = new Node(1);
root3.left = new Node(2);
root3.right = new Node(3);
root3.left.left = new Node(4);
root3.left.right = new Node(5);
root3.left.right.right = new Node(6);

console.log(identicalTrees(root1, root2));
console.log(identicalTrees(root1, root2));
console.log(identicalTrees(root1, root3));
console.log(identicalTrees(root4, root5));
