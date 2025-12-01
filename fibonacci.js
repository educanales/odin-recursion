function fibs(n) {
  const myArray = [];
  let f1 = 0;
  let f2 = 1;
  myArray.push(f1, f2);

  for (let i = 0; i < n - 2; i++) {
    let sum = f1 + f2;
    myArray.push(sum);
    f1 = f2;
    f2 = sum;
  }
  console.log(myArray);
  // return myArray;
}

fibs(8);

function fibsRec(n) {
  console.log("This was printed recursively");
  console.log(n);
  let result = 0;
  if (n === 1) {
    // console.log(n);
    result = 1;
  } else {
    // console.log(n);
    // return array.concat(fibsRec(n - 1) + fibsRec(n - 2));
    const f1 = fibsRec(n - 1);
    const f2 = fibsRec(n - 2);
    result = f1 + f2;
    // return [].push(result);
  }
  console.log(result);
  return [].concat(result);
}

// console.log(fibsRec(3));
// (3 - 1 + 3 - 2) = 2 + 1
// (2 - 1 + 2 - 2) = 1 + 0
// (1 - 1 + 1 - 2) = 0 + -1
