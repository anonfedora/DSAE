const calPoints = ops => {
    var result = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] != "+" || ops[i] != "D" || ops[i] != "C") {
            result.push(parseInt(ops[i]));
        } else if (ops[i] == "+") {
            result.push(result[result.length - 1] + result[result - 2]);
        } else if (ops[i] == "C") {
            result.pop();
        } else if (ops[i] == "D") {
            result.push(result[result.length - 1] * 2);
        }
        let total = result.reduce((prev, curr) => {
            return prev + curr;
        });
    }

    return total;
};

console.log(calPoints(["1"]))