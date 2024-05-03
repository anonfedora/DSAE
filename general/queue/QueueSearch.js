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

function queueSearch(array, n) {
    var bufferArray = array.getBuffer();

    var bufferQueue = new Queue(bufferArray);
    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() == n) {
            return true;
        }
    }
    return false;
}
console.log(queueSearch([1,2,3,4], 3))