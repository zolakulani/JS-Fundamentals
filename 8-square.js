#!/usr/bin/node

// Get the second command-line argument, which is expected to be the size of the square.
// process.argv is an array containing command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the script file name
// process.argv[2] is the first actual argument provided by the user.
const size = parseInt(process.argv[2]);

// Check if the 'size' variable is Not-a-Number (NaN).
// This happens if process.argv[2] cannot be converted to an integer (e.g., "School", undefined).
if (isNaN(size)) {
  // If size is NaN, print an empty line as per the problem description for "Missing size".
  // The problem's example output shows an empty line for "Missing size", not the string "Missing size".
  // This handles cases like 'node 8-square.js' (no argument) or 'node 8-square.js School'.
  console.log();
} else {
  // If 'size' is a valid number, proceed to print the square.
  // This loop iterates 'size' times, once for each row of the square.
  for (let i = 0; i < size; i++) {
    // Create a string consisting of 'X' repeated 'size' times.
    // This forms a single row of the square.
    const row = "X".repeat(size);
    // Print the created row to the console.
    console.log(row);
  }
}