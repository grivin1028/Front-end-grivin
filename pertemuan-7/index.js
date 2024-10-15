


// let jhon = {
//     firstName : "Jhon",
//     age : 30,
//     isMarried: true, 
//     grade : [80,90,100]
//     sayGreetings : fungction () {
//         console.log("Hellow may name is " + this.firstName);
//     },
//     address : {
//         street : "JL. Arnold mononutu",
//         city: "minahasa utara",
//         province : "sulut"
//         postalCode : 95371
//     },
// };
// console.log(jhon);

// //cara 2. kata kunci new
// let jhon = new Object();
// (jane.firstName = "Jane"), (jane.age = 25), (jane.isMarrie) ;
// console.log(jane);

























//Javascrip conditional
//1.If - Else

let numbers = 5;
if (numbers % 2 == 0 ){
    console.log("bilangan genap");

} else {
    console.log("bilangan ganjil");

}

//2. if -else-if
// 100 - 80 nilai A
// 60 - 70 nilai B
// < 60 nilai C
 let nilai = 80
 if (nilai >= 80 && nilai <=100){
    console.log("Grade A")
    
 } else if (nilai >= 60 && nilai <=80){
     console.log("Grade B");
 } else {
    console.log("Grade C")
 } 

// Switch - Case 
let month = 1;
switch(month){
    case 1 :
        console.log("Januari");
    break;
    case 2 :
        console.log("februari");
    break;
    case 3 :
        console.log("Maret")
    break;
    case 4 :
        console.log("not found")
    break;
}

