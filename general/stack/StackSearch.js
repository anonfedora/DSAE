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
var stack = new Stack();

function stackSearch(array, n) {
    var bufferArray = array.getBuffer();

    var bufferStack = new Stack(bufferArray);

    while (!bufferStack.isEmpty()) {
        if (bufferStack.pop() == n) {
            return true;
        }
    }
    return false;
}

console.log(stackSearch([22, 23, 24, 25], 2))