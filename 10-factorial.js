#!/usr/bin/node

function factBigInt(num) {
    if (isNaN(num) || num < 0) {
        console.log(1);
    } else {
        let pro = 1n;
        for (let i = BigInt(num); i > 1n; i--) {
            pro *= i;
        }
        console.log(pro.toString());
    }

}

const num = parseInt(process.argv[2]);
factBigInt(num);