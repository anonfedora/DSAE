const isValid = s => {
    var stack = [];
    for (let i of s) {
        if (i == "(" || i == "{" || i == "[") {
            stack.push(i);
        } else {
            if (
                stack.length == 0 ||
                (i == ")" && stack[stack.length - 1] != "(") ||
                (i == "}" && stack[stack.length - 1] != "{") ||
                (i == "]" && stack[stack.length - 1] != "[")
            ) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length;
};

console.log(isValid("(()[]{}({[]}))")); //true
/*console.log(isValid("((())){}[{}]")); //true
console.log(isValid("(({[]}))")); //true
console.log(isValid("(({[}))")); //false
console.log(isValid("([]{}))")); //false
*/