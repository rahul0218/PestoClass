// //Generators 
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
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
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
//let i = cycle([1,2,3]);

// function* cycle(iter){
//     let i=0;
//     while(i<= iter.length){
//         yield iter[i];
//         i++;
//         if (i>= iter.length){
//             i=0;
//         }
//     }
// }

// let i = cycle([1,2,3,4,5,6,7]);
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());


//vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }

// function isVowel(char){
//     return "aeiou".includes(char);
// }
// function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//         let lowerCaseChar = char.toLowerCase()
//         if (isVowel(lowerCaseChar)) {
//             if (vowelMap.has(lowerCaseChar)) {
//                 vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
//             }else{
//                 vowelMap.set(lowerCaseChar,1);
//             }
//         }
//     }
//     return vowelMap;
// }



// console.log(vowelCount(''));
// console.log(vowelCount('Rahul'));
// console.log(vowelCount('Jitesh'));



// const hasDuplicate = arr => new Set(arr).size !== arr.length

// console.log(hasDuplicate([1,3,2,5]));
// console.log(hasDuplicate([1,5,-1,4]));