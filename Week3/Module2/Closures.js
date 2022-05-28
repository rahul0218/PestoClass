// let myName = 'in module Scope';
// function printName(){
//     console.log(myName);
// }
// printName();
// myName = 'name changed';
// printName();



// let myName = 'Rahul';

// function printer(addExclamation){
//     function printName(){
//         let newName = myName;
//         if(addExclamation){
//             newName=myName+'!';
//         }
//         console.log(`old name=${myName}`);
//         console.log(`New Name = ${newName}`);
//     };
//     return printName;
// }

// const printNameFn = printer(false);

// printNameFn();
// myName = 'another name';
// printNameFn();



// function a(){
//    var x = 5;
//    return function (){
//        console.log(x);
//    } ;
// }
// var x=10;
// const b = a();
// b();


//Examples Q1

// let count =0;
// setTimeout(function(){
//     count++;
//     console.log(`in setTimeout - ${count}`);
// }, 1000 );

// console.log(`${count}`);

//Q2

// for(var i =0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

//Q3

// function a(){
//     let fn;
//     {
//         var x = 5;
//         fn = function(){
//             console.log(x);
//         };
        
//     }
//     return fn;
// }
// var x=10;
// const b = a();
// b();

//Q4
// var a =100;
// function abc(x){
//     var a =10;
//     return function(y){
//         return a+y;
//     };
// }
// a=50;
// var inner =abc(20);

// function foo(){
//     var a=30;
//     console.log(inner(5));
// }
// foo();

//Q5

// (function immediateA(a){
//     return (function immediateB(b){
//         console.log(a);
//     })(1);
// })(0);

//Q6

// function creatIncrement(){
//     let count =0;
//     function increment(){
//         count++;
//     }

//     let message = `Count is ${count}`;
//     function log(){
//         console.log(message);
//     }
//     return[increment, log];
// }

// const [increment, log] = creatIncrement();
// increment();
// increment();
// increment();
// log();
// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     }
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// console.log(stack.items);




function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}
const stack = createStack();
console.log(stack.push(10));
console.log(stack.push(5));
console.log(stack.pop());
console.log(stack.items);