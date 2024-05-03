const linearSearch = (array, n) => {
    for (i = 0; i <= array.length; i++) {
        if (array[i] == n) {
            return true;
        }
    }
    return false
};
console.log(linearSearch([1, 2, 3, 4, 5], 5));
