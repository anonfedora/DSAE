const Fibonacci = n => {
    const stack = [0, 1];
    for (i = 2; i <= n; i++) {
        stack.push(stack[i - 1] + stack[i - 2]);
    }
    console.log(stack);
};
Fibonacci(5);
