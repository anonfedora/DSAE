const calPoints = ops => {
    var result = [];
    for (let i = 0; i < ops.length; i++) {
        //    for (let i of ops) {
        if (ops[i] != "+" && ops[i] != "D" && ops[i] != "C") {
            result.push(parseInt(ops[i]));
        }
        if (ops[i] == "+") {
            result.push(result[result.length - 1] + result[result.length - 2]);
        }
        if (ops[i] == "D") {
            let double = result[result.length - 1] * 2;
            result.push(double);
        }
        if (ops[i] == "C") {
            result.pop();
        }
    }
    total = result.reduce((prev, curr) => {
        return prev + curr;
    });
    return total;
};

console.log("calPoints", calPoints(["5", "2", "C", "D", "+"]));
console.log("calPoints", calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
