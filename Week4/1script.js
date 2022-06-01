// const getNumber=() => new Promise((res, rej)=>{
//    const randomNumber = parseInt(Math.random() *100);
//     setTimeout(()=>{
//         if(randomNumber % 5 === 0){
//             rej (`rejected  number ${randomNumber}`);
//         }
//         res (`Resolve number ${randomNumber}`);
//     },randomNumber * 10);

// })
//console.log(randomNumber);
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");

him.initialize("Ada", 45);
him.teach("Inheritance");