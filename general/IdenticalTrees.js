class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

function identicalTrees(a, b) {
    if (a == null && b == null) return true;
    if (a != null && b != null) {
        return (
            a.data == b.data &&
            identicalTrees(a.left, b.left) &&
            identicalTrees(a.right, b.right)
        );
    }
    return false
}
