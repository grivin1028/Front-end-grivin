// // Asynchronous JS

// // synchronous -> single thread -> Blocking
// console.log("Peoses 1");
// console.log("Peoses 2");
// console.log("Peoses memakan waktu yang lama");
// console.log("Peoses 4");

// //Asynchronous->multi thread
// //1. Parallel
// setTimeout (()=> {
//     console.log("Proses 1")
// },5000);
// console.log("Proses 2")
// setTimeout (()=> {
//     console.log("Proses 3")
// },3000);
// console.log("Proses 4");

// //2. Concurent
// setTimeout (()=> {
//     console.log("Proses 1")
//     setTimeout(() => {
//         console.log("Proses 2") 
//         setTimeout (() => {
//             console.log("Proses 3")
//             setTimeout (() => {
//                 console.log("Proses 4")
//                 },3000)
//             },3000)
//         },3000)
//     },3000)


// //Promise
// let condition = true
// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve ("berhasil")
//     } else {
//         reject ("Gagal")
//     }
    
// }) ;

// //pakai promise
// //1. then catch

// newPromise
//        .then((result)=> (result))
//        .then((result2)=> console.log(result2))
//        .catch((error)=> console.log(error))



// //2. Async - await
// // Harus dibuat dalam fungsi 

// const consumePromise = async () => {
//     let result = await newPromise;
//     console.log(result);
// };

// consumePromise();

//pakai promise yang sudah ada
//1. Fetch
fetch ("https://jsonplanceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json)=> console.log(json))

