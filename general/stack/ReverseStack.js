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

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

function reverseStack(stack) {
    while (!this.array.isEmpty()) {
        var stack = [];
        stack[array.push()];
    }
    return stack;
}
console.log(reverseStack([1, 2, 3, 4, 5]));
