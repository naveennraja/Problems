/**
 * Factorial of a number
 */
function factorial(n) {
  if (n < 0) 
        return -1;
  else if (n === 0) 
      return 1;
  else {
      return (n * factorial(n - 1));
  }
}
// Output factorial(-1) returns -1
// Output factorial(0) returns 1
// Output factorial(5) returns 120
