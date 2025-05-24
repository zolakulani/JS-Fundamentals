#!/usr/bi/node

const args = process.argv;

// check if the is 3 args
if (args[2] === undefined) {
    console.log(`Not a number`);
} else {

    // Check if the convection was successful
    const num = Number(args[2])//parseInt(args[2], 10);

    if (isNaN(num)) {
        console.log(`Not a number`);
    } else {
        console.log(`My number: `, + num);
    }
}
