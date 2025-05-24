#!/usr/bin/node

const args = process.argv;

// Check if an argument was provided
if (args[2] === undefined) {
  console.log(`Missing number of occurrences`);
} else {
  // Attempt to convert the argument to an integer
  const num = parseInt(args[2], 10);

  // Check if the conversion resulted in NaN (Not a Number)
  if (num < 0) {
  } else {
    for (let i = 0; i < num; i++) {
        console.log(`C is fun`);
    }
  }
}