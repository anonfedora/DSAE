const isValid = str => {
    let stack = [];
    for (let s of str) {
        if (s == "(" || s == "[" || s == "{") {
            stack.push(s);
        } else {
            if (
                !stack ||
                (s == ")" && stack[stack.length - 1] != "(") ||
                (s == "]" && stack[stack.length - 1] != "[") ||
                (s == "}" && stack[stack.length - 1] != "{")
            ) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length;
};

console.log(isValid("(())[]{{(())}}")); // true
console.log(isValid("(())")); // true
console.log(isValid("(())[")); // true