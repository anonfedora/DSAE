function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
    return this.array.slice();
};

Queue.prototype.isEmpty = function () {
    return this.array[this.array.length == 0];
};

const queue = new Queue();
console.log(queue);

Queue.prototype.peek = function () {
    return this.array[0];
};

Queue.prototype.enqueue = function (value) {
    return this.array.push(value);
};

Queue.prototype.dequeue = function () {
    return this.array.shift();
};

var queuee = new Queue();
queuee.enqueue(1);
queuee.enqueue(2);
queuee.enqueue(3);
queuee.enqueue(4);
console.log(queuee);
queuee.dequeue();
console.log(queuee);
