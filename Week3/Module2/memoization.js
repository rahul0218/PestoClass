//? What is memeoization
//!

//const memoize = require('lodash.memoize');
function memoize(fn){
    const cache = new Map();
    return function(...args){
        console.log('fn called wih' + args.toString());
        console.log(cache);
        if (cache.has(args.toString())){
            return cache.get(args.toString());
        }
        cache.set(args.toString(), fn(...args));
    };
}
function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const fibM = memoize(fib);

time(()=> fibM(38));
time(()=> fibM(40));
time(()=> fibM(41));
time(()=> fibM(42));
time(()=> fibM(43));
