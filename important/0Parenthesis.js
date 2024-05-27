const isValid = str => {
    var stack = [];
    for (s of str) {
        if (s == "(" || s == "[" || s == "{") {
            stack.push(s);
        } else {
            if (
                !stack.length ||
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

console.log(isValid("((([])))"));
console.log(isValid("((([{()}])))"));
console.log(isValid("(()(([]))())"));
console.log(isValid("(())(([])))"));