class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

let root;
function maxDepth(node) {
    if (node == null) return 0;
    else {
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        if (lDepth > rDepth) return lDepth + 1;
        else return rDepth + 1;
    }
    
}

root = new Node(1);
root.left = new Node(1);
root.right = new Node(1);
root.left.left = new Node(1);
console.log(maxDepth(root));
