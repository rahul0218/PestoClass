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
function * gen(){
  //  console.log('Started');
    
    yield 5;
   // console.log('After 5');
    yield 99;
   // console.log('After 99');
    yield 103;
   // console.log('After 103');
    return 5;
}
const iter = gen();// initialize the gen

for (const el of iter){
    console.log(el);
}

