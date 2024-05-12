const calPoints = ops => {
    var result = [];
    for (let i = 0; i < ops.length; i++)
    {switch (ops[i]) {
        case "+":
            result.push(result[result.length - 1] + result[result.length - 2]);
            break;
        case "D":
            result.push(result[result.length - 1] * 2);
            break;
        case "C":
            result.pop();
            break;
        default:
            result.push(parseInt(ops[i]));
    }}

    return result.length
        ? result.reduce((curr, prev) => {
              return curr + prev;
          })
        : 0;
};

console.log("calPoints", calPoints(["5", "2", "C", "D", "+"]));
console.log("calPoints", calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
