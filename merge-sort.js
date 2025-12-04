function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else if (array.length === 2) {
    const firstHalf = array[0];
    const secondHalf = array[1];
    const newArray = [];
    if (firstHalf < secondHalf) {
      newArray.push(firstHalf, secondHalf);
      return newArray;
    } else {
      newArray.push(secondHalf, firstHalf);
      return newArray;
    }  
  } else {
    // Dividir el array en 2
    const arrayHalf = array.length / 2;
    const firstHalf = array.slice(0, arrayHalf);
    const secondHalf = array.slice(arrayHalf);
    const compFirst = mergeSort(firstHalf);
    const compSecond = mergeSort(secondHalf);
    return compSecond;
  }
}


const myArray = [1, 7, 5];

console.log(mergeSort(myArray));

// console.log(myArray.length)

