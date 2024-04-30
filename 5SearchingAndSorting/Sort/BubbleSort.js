const swap = (array, index1, index2) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

const bubbleSort = array => {
    for (var i = 0; i < array.length; i++) {
        console.log(i);
        for (var j = 0; j <= i; j++) {
            console.log(j);
            if (array[i] < array[j]) {
                //console.log(array[i], array[j]);
                swap(array, i, j);
            }
        }
    }
    return array;
};
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
