#!/usr/bin/node

function fact(num) {
    if (isNaN(num)) {
        console.log(1);
    } else {
        let pro = 1;
        for (let i = num; i > 1; i--) {
            pro *= i;
        }
        console.log(pro);
    }

}

const num = parseInt(process.argv[2]);
fact(num)
