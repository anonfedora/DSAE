class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

const printList = node => {
    let str = "";
    while (node != null) {
        str += node.data + "->";
        node = node.next;
    }
    console.log(str + "Null");
};

const push = (head, data) => {
    let node = new Node();
    node.next = head;
    node.data = data;
    head = node;
    return head;
};

const pairwiseSwap = () => {
    let temp = head
    while (temp != null && temp.next != null){
      let k = temp.data
      temp.data = temp.next.data
      temp.next.data = k
      temp = temp.next.next
    }
};

let head = null;
printList(head);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);
printList(head);
pairwiseSwap();
printList(head);
