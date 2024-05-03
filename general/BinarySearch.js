function binarySearch(array, n){
    var highIndex = array.length - 1,
        lowIndex = 0;
    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (array[midIndex] == n) {
            return midIndex;
        } else if (n < array[midIndex]) {
            highIndex = midIndex;
        } else {
            lowIndex = midIndex;
        }
    }
    return -1;
};
console.log(binarySearch([2, 4, 6, 8, 10], 1));
