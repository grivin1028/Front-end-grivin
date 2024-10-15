//IIFE

let bmi = (function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
})(80, 1.6);

console.log("BMI saya adalah: " + bmi);


//callback
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

hitungBMI(80, 1.6, function(bmi) {
    console.log("BMI saya adalah: " + bmi);
});
