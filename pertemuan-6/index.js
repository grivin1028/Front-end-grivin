// Array dan objek

// Array = sebagai wadah variable yang bisa menampung berbagai macam tipe data

//1. Array
//Deklarasi variable array
//Cara 1. Array Literal
// let numbers = [1,2,3,4,5];
// console.log(numbers)

// // ///cara 2. kata kunci new
// // let numbers2 = new Array(6,7,8,9,10);
// // console.log(numbers)

// //Tipe data dalam Array
// let numbers = [1,2,3,4,5]; //numers
// let students = ["grivin", "brayen", "keyeh"]; //string
// let grivin = ["grivin", 19, true,[1,2,3,]]; //campuran
// console.log(grivin);

// //Array length
// console.log(numbers.length);
// console.log(students.lenght);
// conslole.log(grivin.length);

//Mengakses element t tertentu dalam array
// //Melalui index. index selalu di mulai dari 0
// console.log(numbers[2]); //3
// console.log(students[1]); //brayen
// console.log(grivin[3]); //1,2,3
// console.log(grivin[3][1]); //2

// //mengakses element terahir dalam array
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers[numbers.length-1]);

// //Array methot
// let array = [1,2,3, "grivin", false, true];
// console.log(array);
// console.log(array.toString());
// console.log(array.join(" "))
// console.log(array.join(","))
// array.pop();
// console.log(array);
// array.push();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("selamat pagi");
// console.log(array);
// array.splice(3,0,4,5);
// console.log(array);
//
// let buat = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];
// let makanan = buah.concat(sayur,biji);
// console.log(makanan);
