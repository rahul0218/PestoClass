//Generators 
// function * gen(){
//     console.log('Started');
    
//     yield 5;
//     console.log('After 5');
//     yield 99;
//     console.log('After 99');
//     yield 103;
//     console.log('After 103');
//     return 5;
// }
// const iter = gen();// initialize the gen
// console.log(iter.next());
// console.log('Do something');
// console.log(iter.next());

// using loop generators
// function * gen(){
//   //  console.log('Started');
    
//     yield 5;
//    // console.log('After 5');
//     yield 99;
//    // console.log('After 99');
//     yield 103;
//    // console.log('After 103');
//     return 5;
// }
// const iter = gen();// initialize the gen

// for (const el of iter){
//     console.log(el);
// }


// function* naturalNumbers(){
//      let num = 1;
//      while (true) {
//          yield num;
//          num = num + 1;
         
//      }
// }
// const numbers = naturalNumbers();
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());


//generators example

// function* range(upperBound){
//     //const result =[];
//     for(let i=0;i<upperBound; i++){
//         //result.push(i);
//         yield i;
//     }
//     return result;
// }


// //console.log(range(100));

// for(const el of range(1000000000)){
//     console.log(el);
// }


//cycle
let i = cycle([1,2,3]);
function* cycle(iter){
    let i=0;
    while(i< iter.lenth){
        yield iter[i];
        i++;
        if (i> iter.lenth){
            i=0;
        }
    }
}

//let i = cycle([1,2,3]);



