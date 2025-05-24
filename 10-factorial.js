#!/usr/bin/node
// This is a shebang line, common in Unix-like systems.
// It specifies the interpreter for the script, meaning this file should be
// executed using Node.js when run directly from the command line.

/**
 * Calculates the factorial of a non-negative integer using a recursive approach.
 *
 * The factorial of a non-negative integer `n`, denoted as `n!`, is the product
 * of all positive integers less than or equal to `n`.
 *
 * Special handling for edge cases:
 * - If `n` is 0, the factorial (0!) is defined as 1.
 * - If `n` cannot be converted to a number (e.g., "hello"), `isNaN(n)` will be true,
 * and the function will return 1, effectively treating invalid input similar to 0!.
 * - This implementation does not explicitly handle negative numbers. If a negative
 * number is passed, the recursion `n * factorial(n - 1)` would continue indefinitely
 * (e.g., -1, -2, -3...) leading to a "Maximum call stack size exceeded" error
 * (a stack overflow) as the base case `n === 0` would never be met.
 *
 * @param {number} n The non-negative integer for which to compute the factorial.
 * @returns {number} The calculated factorial of `n`.
 */
function factorial(n) {
  // This is the base case for the recursion.
  // It checks two conditions:
  // 1. `isNaN(n)`: If the input `n` is Not-a-Number (e.g., if `parseInt` failed).
  // 2. `n === 0`: If the input `n` is exactly 0.
  // In both these scenarios, the factorial is defined as 1, and the recursion stops.
  if (isNaN(n) || n === 0) {
    return 1;
  }

  // This is the recursive step.
  // For any positive integer `n`, the factorial is calculated as `n` multiplied by
  // the factorial of `n - 1`.
  // The function calls itself with a decremented value of `n`, moving closer to the base case.
  return n * factorial(n - 1);
}

// `process.argv` is a special Node.js array that contains the command-line arguments.
// - `process.argv[0]` is typically the path to the `node` executable.
// - `process.argv[1]` is the path to the JavaScript file being executed (e.g., '8-factorial.js').
// - `process.argv[2]` is the first actual argument provided by the user on the command line.
// `parseInt()` attempts to convert this string argument into an integer.
// If the argument is not a valid number (e.g., "School"), `parseInt` will return `NaN`.
const num = parseInt(process.argv[2]);

// Calls the `factorial` function with the integer obtained from the command-line argument (`num`).
// The result returned by the `factorial` function is then printed to the standard output (console).
console.log(factorial(num));