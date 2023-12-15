'use strict'

function test(num, func1, func2) {
    return func1(num) + func2(num);
}

const square = (x) => Math.pow(x, 2) 
const double = (x) => Math.pow(x, 3)
const res = test(4, square, double)
console.log(res);

