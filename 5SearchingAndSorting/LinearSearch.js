//Given an array and a value, search the array for the value
// Unsorted data
const linearSearch = (array, n) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            // console.log(`${n} was found at index: ${array[i]}`);
            return true;
        }
    }
    return false;
};
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 4));
console.log(linearSearch([1, 3, 5, 7], 4));
