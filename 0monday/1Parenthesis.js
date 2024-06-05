/**
 * function checking if a combination of parenthesis os valid
 *
 * This function defines the data structure and validation rules for handling a basic
 * user query.
 *
 * @function isValid
 *
 * @property str - The string parenthesis combination provided by the user.
 *                        It must be a non-empty string.
 * return Boolean
 */

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
