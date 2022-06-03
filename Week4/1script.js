// const getNumber = new Promise((resolve, reject)=>{
//    const randomNumber = parseInt(Math.random() *100);
//     setTimeout(()=>{
//         return (randomNumber % 5 === 0 ? reject (`rejected  number ${randomNumber}`) : resolve (`Resolve number ${randomNumber}`));
//     },randomNumber * 10);

// })
// getNumber.then(
//     (val)=>console.log(`val - ${val}`),
//     (val)=>console.error(`val - ${val}`)
// );
//console.log(randomNumber);


// var Person = function() {};

// Person.prototype.initialize = function(name, age)
// {
//     this.name = name;
//     this.age = age;
// }

// // TODO: create the class Teacher and a method teach
// var Teacher = function() {
//     this.teach = function(subject){
//         console.log(this.name + " is now teaching " + subject);
//     }
// }
// Teacher.prototype = new Person();
// var him = new Teacher();

// him.initialize("Adam", 45);
// him.teach("Inheritance");

// him.initialize("Ada", 45);
// him.teach("Inheritance");

var proto={
    describe: function(){
        return 'name: ' + this.name;
    },
};

var obj = Object.create(proto);
obj.name='obj';
//console.log(obj);
console.log(obj.describe());