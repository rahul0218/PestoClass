//? What is memeoization
//!

//const memoiza = require('lodash.memoize');

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
console.time();
console.log(fib(10));
console.timeEnd();

console.time();
console.log(fib(11));
console.timeEnd();