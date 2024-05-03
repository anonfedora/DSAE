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

function nthNode(stack, n) {
    var bufferArray = stack.getBuffer();
    if (n <= 0) throw "error";

    var bufferStack = new Stack(bufferArray);
    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}

var stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log(nthNode(stack1, 1));
