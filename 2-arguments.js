#!/usr/bin/node

const arguments = process.argv;

if (arguments.length < 3) {
    console.log('No argument');
} else if (arguments.length < 4) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}