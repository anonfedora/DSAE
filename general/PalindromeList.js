class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function push(head, data) {
    var node = new Node();
    node.data = data;
    node.next = head;
    head = node;
    return head;
}

function printList(node) {
    while (node != null) {
        console.log("->", node.data);
        node = node.next;
    }
}

function palindrome(head) {
    var temp = head;
    var stack = [];
    var isPalindrome = true;
    while (temp != null) {
        stack.push(temp.data);
        temp = temp.next;
    }

    while (head != null) {
        var i = stack.pop();
        if (head.data == i) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }
        head = head.next;
    }
    return isPalindrome;
}

let head = null;

head = push(head, 1);
head = push(head, 2);
head = push(head, 2);
head = push(head, 2);
//head = push(head, 1);
head = push(head, 1);
printList(head);
console.log("isPalindrome", palindrome(head));
