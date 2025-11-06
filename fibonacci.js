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
  // let array = [];
  // console.log("This was printed recursively");
  if (n < 2) {
    // console.log(n);
    // return array.concat(n);
    // return n;
  } else {
    // console.log(n);
    // return array.concat(fibsRec(n - 1) + fibsRec(n - 2));
    // return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

console.log(fibsRec(8));