function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
    return this.array.slice();
};

Stack.prototype.isEmpty = function () {
    return this.array.length == 0;
};

Stack.prototype.push = function (value) {
    return this.array.push(value);
};

Stack.prototype.pop = function () {
    return this.array.pop();
};

Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
};

function TwoStack() {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStack.prototype.enqueue = function (value) {
    this.inbox.push(value);
};

TwoStack.prototype.dequeue = function () {
    if (this.outbox.isEmpty()) {
        while (!this.inbox.isEmpty()) {
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.outbox.pop();
};
var queue = new TwoStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
