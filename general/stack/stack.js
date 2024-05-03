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
stack.push(2);
stack.push(23);
stack.push(234);
stack.push(2345);
console.log(stack);
stack.pop();
console.log(stack.peek());
