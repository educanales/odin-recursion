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
  let i = 0;
  let j = 0;
  while (i <= first.length - 1 && j <= second.length - 1) {
    if (first[i] < second[j]) {
      newArray.push(first[i]);
      i++;
    } else {
      newArray.push(second[j]);
      j++;
    }
  }
  if (i === first.length) {
    newArray.push(...second.slice(j));
  }
  if (j === second.length) {
    newArray.push(...first.slice(i));
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
