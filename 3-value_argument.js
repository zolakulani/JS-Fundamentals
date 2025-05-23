#!/usr/bin/node

const arguments = process.argv;

if (arguments[2] === undefined) {
    console.log('No argument');
} 
else {
    console.log(arguments[2]);
}