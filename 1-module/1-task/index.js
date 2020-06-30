/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  while (n > 1) {
    result *= n--;
  }

  return result;
}
