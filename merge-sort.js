function mergeSort(array) {
  if (array.length <= 1) {
    // Base case
    return array;
  }
  // Dividir
  const half = array.length / 2;
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  const first = mergeSort(firstHalf);
  const second = mergeSort(secondHalf);
  // Merge
  const newArray = [];
  while (first.length > 0 && second.length > 0) {
    if (first[0] < second[0]) {
      newArray.push(first[0]);
      first.shift();
    } else {
      newArray.push(second[0]);
      second.shift();
    }
  }
  if (first.length === 0) {
    newArray.push(...second);
  }
  if (second.length === 0) {
    newArray.push(...first);
  }
  return newArray;
}

const myArray = [105, 79, 100, 110];

console.log(mergeSort(myArray));

// Pseudo Code

// Mientras ambos arrays tengan elementos:
//   si first[0] es menor que second[0]
//     push first[0] a nuevoArray
//     shift first
//   si no 
//     push second[0] a nuevoArray
//     shift second
// Si first esta vacio
//   push second a nuevoArray
// si second esta vacio
//   push first a nuevo array
