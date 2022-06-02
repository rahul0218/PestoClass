// p= new Promise((resolve, reject)=>{
//     resolve(10);
//     resolve(20);
// }).then(x=> console.log(x));

// p= new Promise((resolve, reject)=>{
//     reject(10);
//     reject(20);
// }).catch(x=> console.log(x));


// p= new Promise((resolve, reject)=>{
//     resolve(10);
//     reject(20);
// }).then(x=> console.log(x))
// .catch(x=> console.log(x));

// const p = new Promise((resolve, reject)=>{
//    // setTimeout(()=>resolve(10),1000);
//    reject(new Error('hggbvv'));
// });
// console.log(p);

const p = new Promise((resolve, reject)=>{
    setTimeout(()=>reject(30),2000);
   
});
p.then(
    (val)=>console.log(`val - ${val}`),
    (val)=>console.error(`error -${val}`)
    );


