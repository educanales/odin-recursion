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

// fibs(8);

function fibsRec(n) {
  console.log("This was printed recursively");
  
  if (n < 2) {    
    return [].concat(0, 1);
  } else {
    const fibArray = fibsRec(n - 1);
    const result = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    return fibArray.concat(result);
  }
}

console.log(fibsRec(8));
