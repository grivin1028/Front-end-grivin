// //IIFE DAN CALBACK


// //1. IIFE (Immediately Idvoked Function Expresiaon)

// (function () {
//     console.log("Hello word")
//     })()

//     //with params and args
//     ( function (fullName){ 
//         console.log("Grivin")
//     });

//     //wits params and arg and return value
//     //stackoverflownp
// let output = (function (fullName){
//        return "hellow" + fullName;
// }("Grivin"))


//callback function
//no params and arg and return value
// function sayHello(callback){
//     callback();
// }
// function greetings (){
//     console.log("Hello callback function");
// }
// sayHello(greetings);

//with params and arg and return value

function sayHello(callback){
    let output = callback("grivin");
    return output;
}
let output = sayHello(function (fullName) {
    return "Hello " + fullName;
});

console.log(output);
