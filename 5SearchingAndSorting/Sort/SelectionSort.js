// SelectionSort
// Scanning minimum number and inserting at current position
const swap = (array, index1, index2) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

const selectionSort = array => {
    var min;

    for (var i = 0; i < array.length; i++) {
        min = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(array, i, min);
        }
    }
    return array;
};
console.log(selectionSort([6, 1, 33, 4, 2, 3]));
