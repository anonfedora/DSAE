// insertionSort
const insertionSort = (array) => { 
  var value, i, j;
  for (i=0; i< array.length; i++){
    value = array[i];
    
    for (j=i-1; j> -1 && array[j] > value; j--){
      array[j+1] = array[j];
    }
    array[j + 1] = value;
  }
  return array
}
console.log(insertionSort([6,1,23,4,2,3]))