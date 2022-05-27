//? What is memeoization
//!

const memoiza = require('lodash/memoize');

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

fib(5);