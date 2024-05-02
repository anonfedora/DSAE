const squareRoot = number => {
    for (square = 1, index = 1; square < number; square = index * index) {
        if (square == number) {
            return square;
        }
        return index;
    }
};

console.log(squareRoot(9));
