
//Accessing the prototype
//Object.getPrototypeOf
// const prototype1={name: 'prototype1'};
// const object1 = Object.create(prototype1);

// console.log(Object.getPrototypeOf(object1));
// console.log(Object.getPrototypeOf(object1)=== prototype1);

//Reflect.getPrototypeOf(target)
// const prototype1={name: 'prototype1'};
// const object1 = Object.create(prototype1);

// console.log(Reflect.getPrototypeOf(object1));
// console.log(Reflect.getPrototypeOf(object1)=== prototype1);


//Object#isPrototypeOf()
// const prototype1={name: 'prototype1'};
// const object1 = Object.create(prototype1);
// console.log(Reflect.getPrototypeOf(object1));
// console.log(Reflect.getPrototypeOf(object1)=== prototype1);
// console.log(prototype1.isPrototypeOf(object1));
// console.log(object1.isPrototypeOf(prototype1));


//Object@isPrototypeOf() _proto_
// const prototype1={name: 'prototype1'};
// const object1 = Object.create(prototype1);

// console.log(object1.__proto__);


//MOdify existing prototype
// const obj={
//     getNumber(){
//         return 42;
//     },
// };
// const child ={};
// console.log(child.getNumber);

// const obj={
//     getNumber(){
//         return 42;
//     },
// };
// const child ={};
// Object.setPrototypeOf(child,obj);
// console.log(child.getNumber);


// const child ={};

// Object.setPrototypeOf(child,null);//!deleting the prototype//trchnically you can not delete any prototype you set it to null so symentic behaviourial should null. 
// console.log(child.toString);


// const obj={
//     getNumber(){
//         return 42;
//     },
// };
// const child = {};
// child.__proto__ = obj;
// console.log(child.getNumber());


//create a new object with a new prototype
var proto = {
    describe: function(){
        return 'name: ' +this.name;
    },
};

var obj = Object.create(proto);// create a new object whose prototype is `proto`


obj.name = 'obj';
console.log(obj);
console.log(obj.describe());