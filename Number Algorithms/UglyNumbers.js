const maxDivide = (number, divisor) => {
    while (number % divisor == 0) {
        number /= divisor;
    }
    return number;
};

const isUgly = number => {
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
};

const arrayNUglyNumbers = n => {
    var counter = 0,
        currentNumber = 1,
        uglyNumbers = [];

    while (counter != n) {
        if (isUgly(currentNumber)) {
            counter++;
            arrayNUglyNumbers.push(currentNumber);
        }
        currentNumber++;
    }
    return uglyNumbers;
};
