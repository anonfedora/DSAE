class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

function insertAt(data, index) {
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index");
    else {
        let node = new Node(data);
        let current, prev;

        current = this.head;

        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            current = this.head;
            let it = 0;

            while (it < 0) {
                it++;
                prev = current;
                current = current.next;
            }

            node.next = current;
            prev.next = node;
        }
        this.size
    }
}
