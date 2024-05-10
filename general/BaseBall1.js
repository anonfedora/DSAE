const baseball = ops => {
    result = [];
    for (i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case "+":
                let value =
                    result[result.length - 2] + result[result.length - 1];
                result.push(value);
                break;
            case "D":
                let value1 = result[result.length - 1] * 2;
                result.push(value1);
                break;
            case "C":
                result.pop();
                break;
            case typeof ops[i] !== "D" ||
                typeof ops[i] !== "C" ||
                typeof ops[i] !== "+" ||
                typeof ops[i] !== Number:
                console.log("Invalid Entry");
            default:
                result.push(parseInt(ops[i]));
        }
    }
    return result.length ? result.reduce((curr, prev) => curr + prev) : 0;
};
console.log(baseball(["5", "2", "C", "D", "+"]));
console.log(baseball(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(baseball(["1"]));
console.log(baseball(["5", "-2", "4", "C", "D", "9", "+", "B"]));
