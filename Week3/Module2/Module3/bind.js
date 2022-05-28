//bind

function sum(a,b){
    return this.a + this.b;
}

//console.log(sum());
//! bind bindes permanently
const sumB = sum.bind({a:10,b:20});
const sumC = sumB.bind({a:10,b:40});
console.log(sumB());
console.log(sumC());

console.log(sum === sumB);


//call
function greet(){
    var reply=[this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}
    var cats ={
        animal: 'cats', sleepDuration: '12 and 16 hours'
    };
    var dogs={
        animal: 'dogs', sleepDuration: '2 to 5 hours'
    };
greet.call(cats);
greet.call(dogs);


//Apply
var number = [5, 6, 90, 8];
var max = Math.max.apply(null, number);
console.log(max);


