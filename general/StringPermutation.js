const swap = (array, idx1, idx2) => {
    var temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
};

const permute = (array, begin, end) => {
    if (begin == end) {
        console.log(array);
    } else {
        for (var i = begin; i < end + 1; i++) {
            swap(array, begin, i);
            permute(array, begin + 1, end);
           swap(array, begin, i);
        }
    }
};

const permuteArray = array => {
    permute(array, 0, array.length - 1);
};

permuteArray(["A", "B", "C"]);
