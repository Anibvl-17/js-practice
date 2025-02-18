function fibs(n) {
  if (n === 0 || n === 1) return n;
  
  const arr = [];
  for(let i = 0; i < n; i++) {
    if (i === 0) arr.push(0);
    else if (i === 1) arr.push(1);
    else arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function fibsRec(n) {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  else return fibsRec(n - 1) + fibsRec(n - 2);
}

// Test with n
let n = 2;

console.log('--- Iterative Fibonacci ---');
console.log(fibs(n));
console.log('--- Recursive Fibonacci (last element expected) ---');
console.log(fibsRec(n));