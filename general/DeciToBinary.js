const decimalToBinary = n => 
    n === 0 ? "" : decimalToBinary(Math.floor(n / 2)) + (n % 2).toString();
console.log(decimalToBinary(232));
