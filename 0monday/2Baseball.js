const calPoints = ops => {
    var result = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] != "+" && ops[i] != "D" && ops[i] != "C") {
            result.push(parseInt(ops[i]));
        } else if (ops[i] == "+") {
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else if (ops[i] == "D") {
            result.push(result[result.length - 1] * 2);
        } else if (ops[i] == "C") {
            result.pop();
        }
    }
    return result
        ? result.reduce((a, b) => {
              return a + b;
          })
        : 0;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["1"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
