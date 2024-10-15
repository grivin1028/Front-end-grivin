// Rest Parameter dan Spread Operator

// 1. Rest Parameter

// tanpa rest parameter

// const func1 = (param1, param2, param3, param4, param5)=>{
//     console.log(param1, param2, param3, param4, param5);
// };

// func1("A","B", "C", "D", "E");

// //dengan rest parameter
// const func2 = (...params)=>{
//     console.log(params)
// }
// func1("A","B", "C", "D", "E");

// //rest parameter harus berada di terahir dalam parameter list
// const func3 = (param1, param2, ...params)=>{
//     console.log(param1,param2);
//     console.log(params);
// }
// func3("A","B", "C", "D", "E");

// //Miniexcercise
// //sebelum
// const penjumblahan = (a,b,c,d,e,f,)=>{
//     let arr = [a,b,c,d,e,f]
//     let hasil = 0
//     arr.forEach((item)=>(hasil +=item))
//     return hasil;

// }
// console.log (penjumblahan(1,2,3,4,5,6));
// //sesudah
// const penjumblahan = (a,b,c,d,e,f,)=>{
//     let arr = [a,b,c,d,e,f]
//     let hasil = 0
//     arr.forEach((item)=>(hasil +=item))
//     return hasil;

// }
// console.log (penjumblahan(1,2,3,4,5,6));


// //2. spread operator... bukan di parameter
// let numbers=[1,2,3,4,5];
//  console.log(...numbers)
//  console.log(numbers);

//  //Aray 
//  //1. Duplikasi array
//  let numbers2 = [...numbers];
//  numbers.push(6);
//  console.log(numbers)
//  console.log(numbers2)

 //2. Menggabungkan array
 let arr1 = [1,2,3]
 let arr2 = [4,5,6]
 let arr3 = [7,8,9]

 let numbers4 = [...arr1,...arr2,...arr3]; //ES6

 //Object
 //1. Duplikasi object
 const jhon = {
    fullName: "Grivin Keyeh"
    age: 19
 }

 conts jhon2 = {...jhon , address: "Manado"};
 
 //2. Menggabungkan objeck

 let obj1 = {a:1, b:2};
 let obj2 = {c:3, d:4};
 let obj3 = {e:5, f:6};
 