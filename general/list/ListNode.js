class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

function insertAt(value, index) {
    if (index < 0 || i > this.size) {
        return console.log("Enter a valid index");
    } else {
        let node = new ListNode(value);
        let curr, prev;

        curr = this.head;
        
        if (index == 0){
          node.next = this.head
          this.head = node
        }
    }
}
