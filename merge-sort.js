function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    // Dividir el array en 2
    const arrayHalf = array.length / 2;
    const firstHalf = array.slice(0, arrayHalf);
    const secondHalf = array.slice(arrayHalf)
    
  }
}

console.log(mergeSort([1, 2, 4, 7]));