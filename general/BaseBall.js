const baseBall = ops => {
    var result = [];

    for (i = 0; i < ops.length; i++) {
        if (ops[i] != "+" && ops[i] != "D" && ops[i] != "C") {
            result.push(parseInt(ops[i]));
        } else if (ops[i] == "+") {
            result.push(result[result.length - 2] + result[result.length - 1]);
        } else if (ops[i] == "D") {
            result.push(parseInt(result[result.length - 1]) * 2);
        } else {
            result.pop();
        }
    }
    const total = result.reduce((curr, prev) => {
        return curr + prev;
    });
    return total;
};

console.log(baseBall(["5", "2", "C", "D", "+"]));
console.log(baseBall(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(baseBall(["1"]));
//console.log(baseBall(["5", "-2", "4", "C", "D", "9", "+", "B"]));
