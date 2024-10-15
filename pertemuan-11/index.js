// // Stirng Literals, Arrow Fungction, Delfault Parameter

// //1. String Literals
// let fullName ="Jhon doe"
// let age = 33;
// let address = "Manado"
// // Hallo nama saya jhon doe, umur saya 33 tahun dan saya
// // Tinggal di manado

// let kalimat = 
// "Halo nama saya" +fullName+
// ",umur saya"+age+
// ",dan saya tinggal di"
// +address+
// ".";
// console.log(kalimat);

// let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}.`
// console.log(kalimat2)

// //2. Arrow function

// function sayGreetings(fullName) {
//     return`Hello ${fullName}`
// }

// console.log(sayGreetings("Jhon Doe"));

// // const sayGreetings2=(fullName)=> {
// //     return `Hello ${fullName}`;
// // };


// // console.log(sayGreetings("Jhon Doe"));

// //Implicit return value

// const sayGreetings2=(fullName)=>`Hello ${fullName}`;

// console.log(sayGreetings("Jhon Doe"));

// // IIFE

// let output1=  (()=> `Hello`)();
// console.log(output1)

// //Arrow function pada callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item)=> item);
// console.log(output2);


// 3. Default Parameter
const sayGreetings3 = (fullName= "Grivin Keyeh", age = 19, address = "Malalayang")=>

console.log(`Hello nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address}`)
sayGreetings3();



