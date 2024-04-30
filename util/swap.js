const swap = (array, index1, index2) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array
};

console.log(swap([2, 4, 6, 8, 12, 10], 1, 2));
